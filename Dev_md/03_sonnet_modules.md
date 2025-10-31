# Sonnet 담당 모듈 상세 설계

## 담당 영역 개요
Sonnet은 사용자 인터페이스, 비즈니스 로직, API 엔드포인트 개발을 담당합니다.

## Frontend 개발

### 1. 프로젝트 구조
```
src/frontend/
├── src/
│   ├── components/
│   │   ├── common/         # 공통 컴포넌트
│   │   ├── dashboard/      # 대시보드 관련
│   │   ├── rubric/         # 루브릭 빌더
│   │   ├── assessment/     # 평가 관련
│   │   └── reports/        # 리포트 관련
│   ├── pages/             # 페이지 컴포넌트
│   ├── hooks/             # Custom Hooks
│   ├── services/          # API 서비스
│   ├── store/             # 상태 관리
│   ├── utils/             # 유틸리티
│   └── types/             # TypeScript 타입
├── public/
└── package.json
```

### 2. 주요 컴포넌트

#### 2.1 대시보드 컴포넌트
```typescript
// src/components/dashboard/ConsistencyDashboard.tsx
interface ConsistencyDashboardProps {
  courseId: string;
  metrics: ConsistencyMetrics;
}

export const ConsistencyDashboard: FC<ConsistencyDashboardProps> = ({
  courseId,
  metrics
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <MetricCard title="Coverage" value={metrics.coverage} />
      <MetricCard title="Gap" value={metrics.gap} />
      <MetricCard title="Overlap" value={metrics.overlap} />
      
      <div className="col-span-full">
        <RadarChart data={metrics.radarData} />
      </div>
      
      <div className="col-span-full">
        <HeatMap data={metrics.heatmapData} />
      </div>
    </div>
  );
};
```

#### 2.2 루브릭 빌더 인터페이스
```typescript
// src/components/rubric/RubricBuilder.tsx
interface RubricBuilderProps {
  assignmentId: string;
  templateId?: string;
  onSave: (rubric: Rubric) => void;
}

export const RubricBuilder: FC<RubricBuilderProps> = ({
  assignmentId,
  templateId,
  onSave
}) => {
  const [criteria, setCriteria] = useState<Criterion[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  
  // Drag & Drop 로직
  const handleDragStart = (e: DragEvent, index: number) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', index.toString());
  };
  
  const handleDrop = (e: DragEvent, dropIndex: number) => {
    const dragIndex = parseInt(e.dataTransfer.getData('text/html'));
    const newCriteria = reorderArray(criteria, dragIndex, dropIndex);
    setCriteria(newCriteria);
  };
  
  return (
    <div className="rubric-builder">
      <TemplateSelector onSelect={loadTemplate} />
      
      <div className="criteria-list">
        {criteria.map((criterion, index) => (
          <CriterionEditor
            key={criterion.id}
            criterion={criterion}
            onDragStart={(e) => handleDragStart(e, index)}
            onDrop={(e) => handleDrop(e, index)}
            onChange={updateCriterion}
            onDelete={deleteCriterion}
          />
        ))}
      </div>
      
      <AddCriterionButton onClick={addNewCriterion} />
      <WeightDistribution criteria={criteria} />
      <PreviewPanel rubric={{ criteria }} />
      
      <div className="actions">
        <Button variant="outline" onClick={generateWithAI}>
          AI로 생성
        </Button>
        <Button onClick={() => onSave({ criteria })}>
          저장
        </Button>
      </div>
    </div>
  );
};
```

#### 2.3 평가 인터페이스
```typescript
// src/components/assessment/AssessmentForm.tsx
export const AssessmentForm: FC<AssessmentFormProps> = ({
  rubric,
  submission,
  onSubmit
}) => {
  const [scores, setScores] = useState<ScoreMap>({});
  const [feedback, setFeedback] = useState<string>('');
  const [aiSuggestion, setAiSuggestion] = useState<string>('');
  
  const handleScoreChange = (criterionId: string, score: number) => {
    setScores(prev => ({ ...prev, [criterionId]: score }));
  };
  
  const generateFeedback = async () => {
    const suggestion = await api.generateFeedback({
      rubric,
      scores,
      submission
    });
    setAiSuggestion(suggestion);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        {rubric.criteria.map(criterion => (
          <CriterionScoring
            key={criterion.id}
            criterion={criterion}
            score={scores[criterion.id]}
            onChange={(score) => handleScoreChange(criterion.id, score)}
          />
        ))}
        
        <div className="feedback-section">
          <label>피드백</label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={6}
          />
          
          {aiSuggestion && (
            <Alert>
              <AlertTitle>AI 제안 피드백</AlertTitle>
              <AlertDescription>{aiSuggestion}</AlertDescription>
              <Button size="sm" onClick={applyAiSuggestion}>
                적용
              </Button>
            </Alert>
          )}
          
          <Button type="button" onClick={generateFeedback}>
            AI 피드백 생성
          </Button>
        </div>
        
        <TotalScore scores={scores} weights={rubric.weights} />
        
        <Button type="submit">평가 제출</Button>
      </div>
    </form>
  );
};
```

### 3. 상태 관리 (Zustand)
```typescript
// src/store/rubricStore.ts
interface RubricStore {
  rubrics: Rubric[];
  currentRubric: Rubric | null;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  fetchRubrics: (courseId: string) => Promise<void>;
  createRubric: (rubric: Partial<Rubric>) => Promise<void>;
  updateRubric: (id: string, updates: Partial<Rubric>) => Promise<void>;
  deleteRubric: (id: string) => Promise<void>;
  generateFromTemplate: (templateId: string) => Promise<void>;
}

export const useRubricStore = create<RubricStore>((set, get) => ({
  rubrics: [],
  currentRubric: null,
  isLoading: false,
  error: null,
  
  fetchRubrics: async (courseId) => {
    set({ isLoading: true });
    try {
      const rubrics = await api.getRubrics(courseId);
      set({ rubrics, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
  
  createRubric: async (rubric) => {
    set({ isLoading: true });
    try {
      const newRubric = await api.createRubric(rubric);
      set(state => ({
        rubrics: [...state.rubrics, newRubric],
        currentRubric: newRubric,
        isLoading: false
      }));
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
  
  // ... 기타 액션들
}));
```

## Backend API 개발

### 1. Express 서버 구조
```javascript
// src/backend/server.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/rubrics', rubricRoutes);
app.use('/api/assessments', assessmentRoutes);
app.use('/api/reports', reportRoutes);

// Error handling
app.use(errorHandler);
```

### 2. API 엔드포인트 구현

#### 2.1 루브릭 API
```javascript
// src/backend/routes/rubricRoutes.js
router.post('/generate', authMiddleware, async (req, res) => {
  try {
    const { courseId, assignmentId, clos, templateId } = req.body;
    
    // 템플릿 로드
    const template = await Template.findById(templateId);
    
    // LLM으로 초안 생성
    const draft = await llmService.generateRubric({
      template,
      clos,
      assignment: await Assignment.findById(assignmentId)
    });
    
    // 데이터베이스 저장
    const rubric = await Rubric.create({
      ...draft,
      courseId,
      assignmentId,
      status: 'draft',
      createdBy: req.user.id
    });
    
    res.json(rubric);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id/approve', authMiddleware, roleCheck('instructor'), async (req, res) => {
  try {
    const rubric = await Rubric.findById(req.params.id);
    
    if (!rubric) {
      return res.status(404).json({ error: 'Rubric not found' });
    }
    
    // HiTL 승인 처리
    rubric.status = 'approved';
    rubric.approvedBy = req.user.id;
    rubric.approvedAt = new Date();
    
    await rubric.save();
    
    // 감사 로그
    await AuditLog.create({
      action: 'RUBRIC_APPROVED',
      entityId: rubric.id,
      userId: req.user.id,
      metadata: { previousStatus: 'draft' }
    });
    
    res.json(rubric);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

#### 2.2 정합성 리포트 API
```javascript
// src/backend/routes/reportRoutes.js
router.get('/consistency/:courseId', authMiddleware, async (req, res) => {
  try {
    const { courseId } = req.params;
    
    // 데이터 수집
    const course = await Course.findById(courseId).populate('clos');
    const rubrics = await Rubric.find({ courseId }).populate('criteria');
    
    // Opus 모듈 호출 (정합성 계산)
    const metrics = await consistencyAnalyzer.analyze(course.clos, rubrics);
    
    // 리포트 생성
    const report = {
      courseId,
      generatedAt: new Date(),
      metrics: {
        coverage: metrics.coverage,
        gap: metrics.gap,
        overlap: metrics.overlap
      },
      visualizations: {
        radar: generateRadarData(metrics),
        heatmap: generateHeatmapData(metrics),
        distribution: generateDistributionData(metrics)
      },
      recommendations: metrics.recommendations
    };
    
    // 캐싱
    await cache.set(`report:${courseId}`, report, 'EX', 3600);
    
    res.json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

### 3. 데이터 검증
```javascript
// src/backend/middleware/validation.js
const { body, validationResult } = require('express-validator');

const validateRubric = [
  body('criteria').isArray().withMessage('Criteria must be an array'),
  body('criteria.*.name').notEmpty().withMessage('Criterion name is required'),
  body('criteria.*.weight').isFloat({ min: 0, max: 1 }).withMessage('Weight must be between 0 and 1'),
  body('criteria.*.levels').isArray({ min: 3 }).withMessage('At least 3 levels required'),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    // 가중치 합 검증
    const totalWeight = req.body.criteria.reduce((sum, c) => sum + c.weight, 0);
    if (Math.abs(totalWeight - 1) > 0.01) {
      return res.status(400).json({ error: 'Weights must sum to 1' });
    }
    
    next();
  }
];
```

### 4. 파일 처리
```javascript
// src/backend/services/fileService.js
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/syllabi/');
  },
  filename: (req, file, cb) => {
    const uniqueName = `${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = /pdf|docx|doc|html/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  }
});

// 강의계획서 파싱
const parseSyllabus = async (filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  
  let text = '';
  switch (ext) {
    case '.pdf':
      text = await extractPdfText(filePath);
      break;
    case '.docx':
      text = await extractDocxText(filePath);
      break;
    case '.html':
      text = await extractHtmlText(filePath);
      break;
  }
  
  // CLO 파싱 (Opus 모듈 호출)
  const clos = await cloParser.parse(text);
  
  return clos;
};
```

## 리포트 생성 모듈

### 1. PDF 생성
```javascript
// src/backend/services/pdfService.js
const PDFDocument = require('pdfkit');
const fs = require('fs');

class PDFReportGenerator {
  generate(reportData) {
    const doc = new PDFDocument();
    const stream = fs.createWriteStream(`reports/${reportData.id}.pdf`);
    
    doc.pipe(stream);
    
    // 제목
    doc.fontSize(20).text('정합성 분석 리포트', { align: 'center' });
    doc.moveDown();
    
    // 메트릭스
    doc.fontSize(14).text('주요 지표');
    doc.fontSize(12);
    doc.text(`Coverage: ${reportData.metrics.coverage.toFixed(2)}`);
    doc.text(`Gap: ${reportData.metrics.gap.toFixed(2)}`);
    doc.text(`Overlap: ${reportData.metrics.overlap.toFixed(2)}`);
    
    // 차트 이미지 삽입
    if (reportData.charts.radar) {
      doc.addPage();
      doc.image(reportData.charts.radar, { width: 500 });
    }
    
    // 권고사항
    doc.addPage();
    doc.fontSize(14).text('개선 권고사항');
    reportData.recommendations.forEach((rec, i) => {
      doc.fontSize(12).text(`${i + 1}. ${rec}`);
    });
    
    doc.end();
    
    return stream;
  }
}
```

### 2. CSV 내보내기
```javascript
// src/backend/services/csvService.js
const { parse } = require('json2csv');

class CSVExporter {
  exportAssessments(assessments) {
    const fields = [
      'studentId',
      'studentName',
      'assignmentId',
      'totalScore',
      'submittedAt',
      'feedback'
    ];
    
    const data = assessments.map(a => ({
      studentId: a.student.id,
      studentName: a.student.name,
      assignmentId: a.assignment.id,
      totalScore: a.totalScore,
      submittedAt: a.submittedAt,
      feedback: a.feedback
    }));
    
    const csv = parse(data, { fields });
    return csv;
  }
  
  exportRubricScores(rubric, assessments) {
    const fields = ['studentId', 'studentName'];
    rubric.criteria.forEach(c => {
      fields.push(c.name);
    });
    fields.push('total');
    
    const data = assessments.map(a => {
      const row = {
        studentId: a.student.id,
        studentName: a.student.name
      };
      
      a.scores.forEach(s => {
        row[s.criterion.name] = s.value;
      });
      
      row.total = a.totalScore;
      return row;
    });
    
    const csv = parse(data, { fields });
    return csv;
  }
}
```

## 인증 및 권한 관리

### 1. JWT 인증
```javascript
// src/backend/middleware/auth.js
const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      throw new Error();
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');
    
    if (!user) {
      throw new Error();
    }
    
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Please authenticate' });
  }
};
```

### 2. RBAC (Role-Based Access Control)
```javascript
// src/backend/middleware/rbac.js
const roles = {
  student: ['view_own_assessments', 'submit_assignments'],
  ta: ['view_all_assessments', 'grade_assignments'],
  instructor: ['manage_rubrics', 'approve_rubrics', 'view_reports'],
  admin: ['manage_users', 'manage_system']
};

const roleCheck = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    
    const hasRole = allowedRoles.some(role => req.user.roles.includes(role));
    
    if (!hasRole) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    
    next();
  };
};

const permissionCheck = (permission) => {
  return (req, res, next) => {
    const userRoles = req.user.roles || [];
    const hasPermission = userRoles.some(role => 
      roles[role]?.includes(permission)
    );
    
    if (!hasPermission) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }
    
    next();
  };
};
```

## 실시간 기능

### WebSocket 연결
```javascript
// src/backend/services/socketService.js
const socketIo = require('socket.io');

class SocketService {
  init(server) {
    this.io = socketIo(server, {
      cors: {
        origin: process.env.FRONTEND_URL,
        credentials: true
      }
    });
    
    this.io.on('connection', (socket) => {
      console.log('New client connected');
      
      socket.on('join_course', (courseId) => {
        socket.join(`course_${courseId}`);
      });
      
      socket.on('rubric_updated', (data) => {
        socket.to(`course_${data.courseId}`).emit('rubric_update', data);
      });
      
      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });
    });
  }
  
  notifyRubricApproval(courseId, rubricId) {
    this.io.to(`course_${courseId}`).emit('rubric_approved', { rubricId });
  }
  
  notifyNewAssessment(courseId, assessmentId) {
    this.io.to(`course_${courseId}`).emit('new_assessment', { assessmentId });
  }
}
```

## 테스트

### Frontend 테스트
```typescript
// src/frontend/components/__tests__/RubricBuilder.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { RubricBuilder } from '../RubricBuilder';

describe('RubricBuilder', () => {
  it('should add new criterion', () => {
    render(<RubricBuilder assignmentId="1" onSave={jest.fn()} />);
    
    const addButton = screen.getByText('Add Criterion');
    fireEvent.click(addButton);
    
    expect(screen.getAllByTestId('criterion-editor')).toHaveLength(1);
  });
  
  it('should validate weights sum to 1', () => {
    // Test implementation
  });
});
```

### Backend 테스트
```javascript
// src/backend/__tests__/rubricRoutes.test.js
const request = require('supertest');
const app = require('../app');

describe('POST /api/rubrics/generate', () => {
  it('should generate rubric from template', async () => {
    const response = await request(app)
      .post('/api/rubrics/generate')
      .set('Authorization', `Bearer ${validToken}`)
      .send({
        courseId: '1',
        assignmentId: '1',
        templateId: 'template1'
      });
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('criteria');
  });
});
```