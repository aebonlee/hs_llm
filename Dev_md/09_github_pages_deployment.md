# GitHub Pages 배포 가이드

## 배포 전략

### 1. 정적 사이트 생성 (SPA)
- React 앱을 정적 파일로 빌드
- 클라이언트 사이드 라우팅 처리
- API는 모두 브라우저에서 직접 호출

### 2. GitHub Pages 특징
- 무료 호스팅
- HTTPS 자동 지원
- 커스텀 도메인 가능
- 자동 배포 (GitHub Actions)

## 프로젝트 설정

### 1. package.json 설정
```json
{
  "name": "teaching-assistant-ai",
  "version": "1.0.0",
  "private": true,
  "homepage": "https://aebonlee.github.io/hs_llm",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
    "lint": "eslint src --ext ts,tsx",
    "format": "prettier --write \"src/**/*.{ts,tsx,css}\""
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-tabs": "^1.0.4",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "date-fns": "^2.30.0",
    "jspdf": "^2.5.1",
    "lucide-react": "^0.294.0",
    "react-markdown": "^9.0.1",
    "tailwind-merge": "^2.1.0",
    "zustand": "^4.4.7"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@typescript-eslint/eslint-plugin": "^6.14.0",
    "@typescript-eslint/parser": "^6.14.0",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.55.0",
    "gh-pages": "^6.1.0",
    "postcss": "^8.4.32",
    "prettier": "^3.1.1",
    "tailwindcss": "^3.3.6",
    "typescript": "^5.3.3",
    "vite": "^5.0.8"
  }
}
```

### 2. Vite 설정
```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/hs_llm/', // GitHub repository 이름
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // 프로덕션에서는 소스맵 비활성화
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-select'],
          'pdf-vendor': ['jspdf'],
          'markdown-vendor': ['react-markdown'],
        },
      },
    },
  },
});
```

### 3. 라우터 설정 (404 처리)
```typescript
// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/hs_llm">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/syllabus" element={<SyllabusPage />} />
        <Route path="/rubric" element={<RubricPage />} />
        <Route path="/assignment" element={<AssignmentPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### 4. 404.html 처리
```html
<!-- public/404.html -->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Teaching Assistant AI</title>
    <script type="text/javascript">
      // GitHub Pages SPA 해결책
      // 404 페이지를 index.html로 리다이렉트
      var pathSegmentsToKeep = 1; // /hs_llm 유지
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
  </body>
</html>
```

## GitHub Actions 자동 배포

### 1. 워크플로우 파일
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  workflow_dispatch: # 수동 실행 허용

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  # 빌드 작업
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build project
        run: npm run build
        env:
          NODE_ENV: production
          
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./dist
          
  # 배포 작업
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v3
```

### 2. 브랜치 보호 규칙
```yaml
# GitHub 저장소 설정에서 구성
main branch protection:
  - Require pull request reviews
  - Require status checks to pass
  - Require branches to be up to date
  - Include administrators
```

## 환경 변수 관리

### 1. 개발 환경
```bash
# .env.development
VITE_APP_TITLE=Teaching Assistant AI (Dev)
VITE_ENABLE_DEBUG=true
VITE_API_TIMEOUT=30000
```

### 2. 프로덕션 환경
```bash
# .env.production
VITE_APP_TITLE=Teaching Assistant AI
VITE_ENABLE_DEBUG=false
VITE_API_TIMEOUT=60000
```

### 3. 환경 변수 사용
```typescript
// src/config/environment.ts
export const config = {
  appTitle: import.meta.env.VITE_APP_TITLE || 'Teaching Assistant AI',
  enableDebug: import.meta.env.VITE_ENABLE_DEBUG === 'true',
  apiTimeout: Number(import.meta.env.VITE_API_TIMEOUT) || 30000,
  baseUrl: import.meta.env.BASE_URL || '/',
};
```

## 최적화 전략

### 1. 코드 분할
```typescript
// src/routes/index.tsx
import { lazy, Suspense } from 'react';
import { LoadingSpinner } from '@/components/ui/loading';

const Dashboard = lazy(() => import('@/pages/Dashboard'));
const SyllabusPage = lazy(() => import('@/pages/SyllabusPage'));
const RubricPage = lazy(() => import('@/pages/RubricPage'));
const AssignmentPage = lazy(() => import('@/pages/AssignmentPage'));
const ChatPage = lazy(() => import('@/pages/ChatPage'));

export function AppRoutes() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/syllabus" element={<SyllabusPage />} />
        <Route path="/rubric" element={<RubricPage />} />
        <Route path="/assignment" element={<AssignmentPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </Suspense>
  );
}
```

### 2. 이미지 최적화
```typescript
// src/components/OptimizedImage.tsx
interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export function OptimizedImage({ src, alt, width, height }: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <div className="relative">
      {isLoading && <Skeleton className="absolute inset-0" />}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity'}
      />
    </div>
  );
}
```

### 3. PWA 설정
```json
// public/manifest.json
{
  "name": "Teaching Assistant AI",
  "short_name": "TA AI",
  "description": "AI-powered teaching assistant for educators",
  "start_url": "/hs_llm/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#3b82f6",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### 4. Service Worker
```javascript
// public/sw.js
const CACHE_NAME = 'ta-ai-v1';
const urlsToCache = [
  '/hs_llm/',
  '/hs_llm/index.html',
  '/hs_llm/manifest.json',
  // 정적 자원들
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
```

## 모니터링 및 분석

### 1. Google Analytics 설정
```html
<!-- index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 2. 에러 추적
```typescript
// src/utils/errorTracking.ts
class ErrorTracker {
  logError(error: Error, context?: any): void {
    if (import.meta.env.PROD) {
      // 프로덕션에서만 에러 로깅
      console.error('Error occurred:', error);
      
      // Google Analytics 이벤트 전송
      if (typeof gtag !== 'undefined') {
        gtag('event', 'exception', {
          description: error.message,
          fatal: false,
          error_context: JSON.stringify(context)
        });
      }
    }
  }
}

export const errorTracker = new ErrorTracker();
```

## 배포 체크리스트

### 배포 전
- [ ] 모든 테스트 통과
- [ ] 빌드 에러 없음
- [ ] 환경 변수 설정 확인
- [ ] API Key 제거 확인
- [ ] console.log 제거
- [ ] 불필요한 주석 제거

### 배포 중
- [ ] GitHub Actions 성공
- [ ] 아티팩트 업로드 확인
- [ ] Pages 배포 성공

### 배포 후
- [ ] 사이트 접속 테스트
- [ ] 모든 페이지 라우팅 확인
- [ ] API 연동 테스트
- [ ] 다운로드 기능 테스트
- [ ] 모바일 반응형 확인
- [ ] 성능 측정 (Lighthouse)

## 롤백 전략

### 1. 이전 버전으로 롤백
```bash
# 이전 커밋으로 되돌리기
git revert HEAD
git push origin main

# 또는 특정 커밋으로 리셋
git reset --hard <commit-hash>
git push --force origin main
```

### 2. GitHub Actions에서 재배포
```
1. Actions 탭 접속
2. 이전 성공한 워크플로우 선택
3. Re-run all jobs 클릭
```

## 커스텀 도메인 설정 (선택사항)

### 1. CNAME 파일
```
# public/CNAME
teaching-assistant.yourdomain.com
```

### 2. DNS 설정
```
Type: CNAME
Name: teaching-assistant
Value: aebonlee.github.io
```

### 3. GitHub 설정
```
Settings > Pages > Custom domain
- teaching-assistant.yourdomain.com 입력
- Enforce HTTPS 체크
```

## 성능 모니터링

### 1. Lighthouse CI
```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI

on: [push]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run build
      - uses: treosh/lighthouse-ci-action@v10
        with:
          urls: |
            https://aebonlee.github.io/hs_llm/
          uploadArtifacts: true
          temporaryPublicStorage: true
```

### 2. 성능 목표
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1
- Lighthouse Score: > 90

## 보안 고려사항

### 1. API Key 보호
```typescript
// API Key는 절대 코드에 포함하지 않음
// 사용자가 직접 입력하도록 함
const apiKey = localStorage.getItem('openai_api_key');
if (!apiKey) {
  showApiKeyPrompt();
}
```

### 2. CSP 헤더 설정
```html
<!-- index.html -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; 
               style-src 'self' 'unsafe-inline'; 
               connect-src 'self' https://api.openai.com;">
```

### 3. 민감 정보 제거
```bash
# .gitignore
.env
.env.local
.env.*.local
*.log
.DS_Store
node_modules/
dist/
.vscode/
.idea/
```