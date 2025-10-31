# 개발 인프라 설계

## 시스템 아키텍처 개요

```
┌─────────────────────────────────────────────────────────────┐
│                         Frontend (React)                      │
│  Dashboard │ Rubric Builder │ Assessment │ Reports │ Admin   │
└─────────────────────────────┬───────────────────────────────┘
                              │ HTTPS
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    API Gateway (Nginx)                        │
│              Rate Limiting │ SSL │ Load Balancing            │
└─────────────────────────────┬───────────────────────────────┘
                              │
        ┌─────────────────────┴─────────────────────┐
        ▼                                           ▼
┌──────────────────┐                    ┌──────────────────┐
│   REST API       │                    │   WebSocket      │
│   (Express)      │                    │   (Socket.io)    │
└────────┬─────────┘                    └────────┬─────────┘
         │                                        │
         └────────────────┬──────────────────────┘
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                     Service Layer                             │
│  Auth │ Rubric │ CLO Parser │ LLM │ Analytics │ Report      │
└─────────────────────────┬───────────────────────────────────┘
                          │
        ┌─────────────────┼─────────────────┐
        ▼                 ▼                 ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│  PostgreSQL  │  │    Redis     │  │   S3/MinIO   │
│  (Primary)   │  │   (Cache)    │  │   (Files)    │
└──────────────┘  └──────────────┘  └──────────────┘
```

## 개발 환경 설정

### 1. Docker Compose 구성
```yaml
# docker-compose.yml
version: '3.8'

services:
  # PostgreSQL Database
  postgres:
    image: postgres:14-alpine
    environment:
      POSTGRES_DB: rubric_db
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    ports:
      - "5432:5432"
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U admin"]
      interval: 10s
      timeout: 5s
      retries: 5

  # Redis Cache
  redis:
    image: redis:7-alpine
    command: redis-server --appendonly yes
    volumes:
      - redis_data:/data
    ports:
      - "6379:6379"
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 5s
      retries: 5

  # MinIO (S3-compatible storage)
  minio:
    image: minio/minio:latest
    command: server /data --console-address ":9001"
    environment:
      MINIO_ROOT_USER: ${MINIO_ACCESS_KEY}
      MINIO_ROOT_PASSWORD: ${MINIO_SECRET_KEY}
    volumes:
      - minio_data:/data
    ports:
      - "9000:9000"
      - "9001:9001"

  # Backend API
  backend:
    build: 
      context: ./src/backend
      dockerfile: Dockerfile
    environment:
      NODE_ENV: development
      DATABASE_URL: postgresql://admin:${DB_PASSWORD}@postgres:5432/rubric_db
      REDIS_URL: redis://redis:6379
      JWT_SECRET: ${JWT_SECRET}
      OPENAI_API_KEY: ${OPENAI_API_KEY}
      CLAUDE_API_KEY: ${CLAUDE_API_KEY}
    volumes:
      - ./src/backend:/app
      - /app/node_modules
    ports:
      - "3000:3000"
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_healthy

  # Frontend
  frontend:
    build:
      context: ./src/frontend
      dockerfile: Dockerfile.dev
    environment:
      VITE_API_URL: http://localhost:3000/api
      VITE_WS_URL: ws://localhost:3000
    volumes:
      - ./src/frontend:/app
      - /app/node_modules
    ports:
      - "5173:5173"
    depends_on:
      - backend

  # Nginx (Production only)
  nginx:
    image: nginx:alpine
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./ssl:/etc/nginx/ssl:ro
    ports:
      - "80:80"
      - "443:443"
    depends_on:
      - backend
      - frontend
    profiles:
      - production

volumes:
  postgres_data:
  redis_data:
  minio_data:
```

### 2. 환경 변수 설정
```bash
# .env.development
NODE_ENV=development
PORT=3000

# Database
DATABASE_URL=postgresql://admin:devpass123@localhost:5432/rubric_db
DB_PASSWORD=devpass123

# Redis
REDIS_URL=redis://localhost:6379

# JWT
JWT_SECRET=your-secret-key-here
JWT_EXPIRES_IN=7d

# LLM APIs
OPENAI_API_KEY=sk-...
CLAUDE_API_KEY=sk-ant-...

# Storage
MINIO_ACCESS_KEY=minioadmin
MINIO_SECRET_KEY=minioadmin
S3_BUCKET=rubric-files

# Frontend
VITE_API_URL=http://localhost:3000/api
VITE_WS_URL=ws://localhost:3000

# Email (optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## 데이터베이스 설계

### 1. 스키마 정의
```sql
-- init.sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    roles TEXT[] DEFAULT '{"student"}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Courses table
CREATE TABLE courses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    code VARCHAR(50) NOT NULL,
    name VARCHAR(255) NOT NULL,
    semester VARCHAR(20) NOT NULL,
    instructor_id UUID REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- CLOs table
CREATE TABLE clos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
    number INTEGER NOT NULL,
    description TEXT NOT NULL,
    bloom_level INTEGER CHECK (bloom_level BETWEEN 1 AND 6),
    action_verbs TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Competencies table
CREATE TABLE competencies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- CLO-Competency mapping
CREATE TABLE clo_competency_mappings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    clo_id UUID REFERENCES clos(id) ON DELETE CASCADE,
    competency_id UUID REFERENCES competencies(id) ON DELETE CASCADE,
    weight DECIMAL(3,2) CHECK (weight BETWEEN 0 AND 1),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(clo_id, competency_id)
);

-- Rubrics table
CREATE TABLE rubrics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
    assignment_id UUID,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL,
    status VARCHAR(20) DEFAULT 'draft',
    created_by UUID REFERENCES users(id),
    approved_by UUID REFERENCES users(id),
    approved_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Rubric criteria
CREATE TABLE rubric_criteria (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    rubric_id UUID REFERENCES rubrics(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    weight DECIMAL(3,2) CHECK (weight BETWEEN 0 AND 1),
    order_index INTEGER NOT NULL,
    bloom_level INTEGER CHECK (bloom_level BETWEEN 1 AND 6),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Rubric levels
CREATE TABLE rubric_levels (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    criterion_id UUID REFERENCES rubric_criteria(id) ON DELETE CASCADE,
    level INTEGER NOT NULL,
    label VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    points INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Assessments
CREATE TABLE assessments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    rubric_id UUID REFERENCES rubrics(id),
    student_id UUID REFERENCES users(id),
    assessor_id UUID REFERENCES users(id),
    submission_id UUID,
    total_score DECIMAL(5,2),
    status VARCHAR(20) DEFAULT 'pending',
    submitted_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Assessment scores
CREATE TABLE assessment_scores (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    assessment_id UUID REFERENCES assessments(id) ON DELETE CASCADE,
    criterion_id UUID REFERENCES rubric_criteria(id),
    score DECIMAL(5,2) NOT NULL,
    comment TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Feedback
CREATE TABLE feedback (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    assessment_id UUID REFERENCES assessments(id) ON DELETE CASCADE,
    type VARCHAR(50) NOT NULL,
    content TEXT NOT NULL,
    ai_generated BOOLEAN DEFAULT FALSE,
    edited_content TEXT,
    created_by UUID REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Audit logs
CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    action VARCHAR(100) NOT NULL,
    entity_type VARCHAR(50),
    entity_id UUID,
    metadata JSONB,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Metrics snapshots
CREATE TABLE metrics_snapshots (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
    type VARCHAR(50) NOT NULL,
    metrics JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_courses_instructor ON courses(instructor_id);
CREATE INDEX idx_clos_course ON clos(course_id);
CREATE INDEX idx_rubrics_course ON rubrics(course_id);
CREATE INDEX idx_assessments_rubric ON assessments(rubric_id);
CREATE INDEX idx_assessments_student ON assessments(student_id);
CREATE INDEX idx_audit_logs_user ON audit_logs(user_id);
CREATE INDEX idx_audit_logs_entity ON audit_logs(entity_type, entity_id);
CREATE INDEX idx_metrics_snapshots_course ON metrics_snapshots(course_id);

-- Triggers for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_courses_updated_at BEFORE UPDATE ON courses
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_rubrics_updated_at BEFORE UPDATE ON rubrics
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_assessments_updated_at BEFORE UPDATE ON assessments
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

## CI/CD 파이프라인

### 1. GitHub Actions
```yaml
# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    
    services:
      postgres:
        image: postgres:14
        env:
          POSTGRES_PASSWORD: testpass
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 5432:5432
      
      redis:
        image: redis:7
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 6379:6379
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: |
          npm ci --prefix src/backend
          npm ci --prefix src/frontend
      
      - name: Run backend tests
        env:
          DATABASE_URL: postgresql://postgres:testpass@localhost:5432/test_db
          REDIS_URL: redis://localhost:6379
          JWT_SECRET: test-secret
        run: |
          npm run test --prefix src/backend
          npm run test:coverage --prefix src/backend
      
      - name: Run frontend tests
        run: |
          npm run test --prefix src/frontend
          npm run test:coverage --prefix src/frontend
      
      - name: Lint code
        run: |
          npm run lint --prefix src/backend
          npm run lint --prefix src/frontend
      
      - name: Build
        run: |
          npm run build --prefix src/backend
          npm run build --prefix src/frontend
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./src/backend/coverage/lcov.info,./src/frontend/coverage/lcov.info

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to Render
        env:
          RENDER_API_KEY: ${{ secrets.RENDER_API_KEY }}
          RENDER_SERVICE_ID: ${{ secrets.RENDER_SERVICE_ID }}
        run: |
          curl -X POST \
            -H "Authorization: Bearer $RENDER_API_KEY" \
            -H "Content-Type: application/json" \
            -d '{"clearCache":"clear"}' \
            "https://api.render.com/v1/services/$RENDER_SERVICE_ID/deploys"
```

## 모니터링 및 로깅

### 1. 로깅 설정
```javascript
// src/backend/utils/logger.js
const winston = require('winston');
const { ElasticsearchTransport } = require('winston-elasticsearch');

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'rubric-api' },
  transports: [
    // Console output
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    }),
    
    // File output
    new winston.transports.File({ 
      filename: 'logs/error.log', 
      level: 'error' 
    }),
    new winston.transports.File({ 
      filename: 'logs/combined.log' 
    })
  ]
});

// Production logging to Elasticsearch
if (process.env.NODE_ENV === 'production') {
  logger.add(new ElasticsearchTransport({
    index: 'rubric-logs',
    clientOpts: {
      node: process.env.ELASTICSEARCH_URL,
      auth: {
        username: process.env.ELASTICSEARCH_USER,
        password: process.env.ELASTICSEARCH_PASS
      }
    }
  }));
}

module.exports = logger;
```

### 2. 성능 모니터링
```javascript
// src/backend/middleware/monitoring.js
const prometheus = require('prom-client');

// Create metrics
const httpDuration = new prometheus.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code']
});

const httpRequestTotal = new prometheus.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status_code']
});

const dbQueryDuration = new prometheus.Histogram({
  name: 'db_query_duration_seconds',
  help: 'Duration of database queries in seconds',
  labelNames: ['operation', 'table']
});

// Middleware
const monitoringMiddleware = (req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = (Date.now() - start) / 1000;
    const route = req.route?.path || req.path;
    
    httpDuration
      .labels(req.method, route, res.statusCode)
      .observe(duration);
    
    httpRequestTotal
      .labels(req.method, route, res.statusCode)
      .inc();
  });
  
  next();
};

// Metrics endpoint
const metricsEndpoint = async (req, res) => {
  res.set('Content-Type', prometheus.register.contentType);
  const metrics = await prometheus.register.metrics();
  res.send(metrics);
};

module.exports = {
  monitoringMiddleware,
  metricsEndpoint,
  dbQueryDuration
};
```

## 보안 설정

### 1. 보안 미들웨어
```javascript
// src/backend/middleware/security.js
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

// Rate limiting configurations
const createRateLimiter = (windowMs, max, message) => {
  return rateLimit({
    windowMs,
    max,
    message,
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res) => {
      res.status(429).json({
        error: message,
        retryAfter: Math.ceil(windowMs / 1000)
      });
    }
  });
};

const rateLimiters = {
  general: createRateLimiter(
    15 * 60 * 1000, // 15 minutes
    100, // limit each IP to 100 requests per windowMs
    'Too many requests, please try again later'
  ),
  
  auth: createRateLimiter(
    15 * 60 * 1000, // 15 minutes
    5, // limit each IP to 5 requests per windowMs
    'Too many authentication attempts'
  ),
  
  api: createRateLimiter(
    1 * 60 * 1000, // 1 minute
    30, // limit each IP to 30 API calls per minute
    'API rate limit exceeded'
  )
};

// Security headers
const securityHeaders = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'none'"]
    }
  },
  crossOriginEmbedderPolicy: false
});

// CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:5173'];
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
};

module.exports = {
  rateLimiters,
  securityHeaders,
  corsOptions,
  mongoSanitize,
  xss,
  hpp
};
```

### 2. 입력 검증
```javascript
// src/backend/utils/validation.js
const Joi = require('joi');

const schemas = {
  // User schemas
  userRegistration: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/).required(),
    name: Joi.string().min(2).max(100).required(),
    role: Joi.string().valid('student', 'ta', 'instructor').default('student')
  }),
  
  // CLO schemas
  clo: Joi.object({
    description: Joi.string().min(10).max(500).required(),
    bloomLevel: Joi.number().integer().min(1).max(6).required(),
    actionVerbs: Joi.array().items(Joi.string()).min(1).required()
  }),
  
  // Rubric schemas
  rubric: Joi.object({
    name: Joi.string().min(3).max(255).required(),
    type: Joi.string().valid('theory', 'practice', 'presentation', 'capstone').required(),
    criteria: Joi.array().items(
      Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        weight: Joi.number().min(0).max(1).required(),
        levels: Joi.array().items(
          Joi.object({
            label: Joi.string().required(),
            description: Joi.string().required(),
            points: Joi.number().integer().min(0).required()
          })
        ).min(3).required()
      })
    ).min(1).required()
  })
};

const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    
    if (error) {
      const errors = error.details.map(detail => ({
        field: detail.path.join('.'),
        message: detail.message
      }));
      
      return res.status(400).json({
        error: 'Validation failed',
        errors
      });
    }
    
    next();
  };
};

module.exports = { schemas, validate };
```

## 배포 전략

### 1. Render 배포 설정
```yaml
# render.yaml
services:
  # Backend API
  - type: web
    name: rubric-api
    env: node
    buildCommand: cd src/backend && npm ci && npm run build
    startCommand: cd src/backend && npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: DATABASE_URL
        fromDatabase:
          name: rubric-db
          property: connectionString
      - key: REDIS_URL
        fromService:
          name: rubric-redis
          type: redis
          property: connectionString
      - fromGroup: rubric-secrets

  # Frontend
  - type: web
    name: rubric-frontend
    env: static
    buildCommand: cd src/frontend && npm ci && npm run build
    staticPublishPath: ./src/frontend/dist
    headers:
      - path: /*
        name: X-Frame-Options
        value: DENY
      - path: /*
        name: X-Content-Type-Options
        value: nosniff

databases:
  - name: rubric-db
    plan: starter
    postgresMajorVersion: 14

services:
  - type: redis
    name: rubric-redis
    plan: starter
```

### 2. 백업 전략
```bash
#!/bin/bash
# backup.sh

# Database backup
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backups"
DB_NAME="rubric_db"

# Create backup
pg_dump $DATABASE_URL > $BACKUP_DIR/db_backup_$DATE.sql

# Compress
gzip $BACKUP_DIR/db_backup_$DATE.sql

# Upload to S3
aws s3 cp $BACKUP_DIR/db_backup_$DATE.sql.gz s3://rubric-backups/db/

# Clean old backups (keep last 30 days)
find $BACKUP_DIR -name "db_backup_*.sql.gz" -mtime +30 -delete

# Backup uploaded files
aws s3 sync /uploads s3://rubric-backups/files/ --delete
```

## 개발 도구 설정

### 1. VS Code 설정
```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "typescript.tsdk": "node_modules/typescript/lib",
  "files.exclude": {
    "**/node_modules": true,
    "**/dist": true,
    "**/.git": true
  },
  "search.exclude": {
    "**/node_modules": true,
    "**/dist": true,
    "**/coverage": true
  }
}
```

### 2. Pre-commit Hooks
```json
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "npm test"
    }
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md,yml}": [
      "prettier --write"
    ]
  }
}
```