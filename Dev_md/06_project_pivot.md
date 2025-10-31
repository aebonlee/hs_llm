# 프로젝트 방향 전환 (2025-01-31)

## 변경 사항 요약

### 기존 방향 (복잡한 시스템)
- 풀스택 웹 애플리케이션
- PostgreSQL + Redis 백엔드
- 사용자 인증 및 권한 관리
- 복잡한 정합성 분석 시스템

### 새로운 방향 (심플한 도구)
- **Frontend Only** 정적 웹사이트
- **GitHub Pages** 무료 호스팅
- **사용자 API Key 입력** 방식
- **LocalStorage** 임시 저장
- **즉시 사용 가능한 도구**

## 핵심 변경 이유

1. **즉시 배포 가능**: 서버 인프라 불필요
2. **비용 절감**: GitHub Pages 무료 호스팅
3. **보안 간소화**: 서버 보안 이슈 없음
4. **빠른 프로토타이핑**: 4주 내 완성 가능
5. **사용자 편의**: 가입 없이 바로 사용

## 새로운 프로젝트 구조

```
hs_llm/
├── src/
│   ├── components/         # React 컴포넌트
│   │   ├── Dashboard/     # 메인 대시보드
│   │   ├── Syllabus/      # 강의계획서 생성
│   │   ├── Rubric/        # 루브릭 생성
│   │   ├── Assignment/    # 과제 생성
│   │   ├── Chat/          # ChatGPT 채팅
│   │   └── Common/        # 공통 컴포넌트
│   ├── services/          # API 서비스
│   │   ├── openai.ts      # OpenAI API 연동
│   │   └── storage.ts     # LocalStorage 관리
│   ├── utils/             # 유틸리티
│   │   ├── export.ts      # 파일 다운로드
│   │   └── prompts.ts     # 프롬프트 템플릿
│   └── App.tsx            # 메인 앱
├── public/                # 정적 파일
├── docs/                  # GitHub Pages 빌드
└── package.json
```

## 기술 스택 변경

### Before
- Backend: Express + PostgreSQL + Redis
- Authentication: JWT + Session
- Deployment: Render + Docker

### After
- **Frontend Only**: React + Vite
- **Storage**: LocalStorage + IndexedDB
- **Deployment**: GitHub Pages (gh-pages)
- **API**: OpenAI ChatGPT (클라이언트 직접 호출)

## 개발 우선순위

### Phase 1: MVP (1주차)
1. 프로젝트 초기 설정
2. API Key 입력 및 관리 UI
3. 기본 채팅 인터페이스
4. LocalStorage 연동

### Phase 2: 핵심 기능 (2주차)
1. 강의계획서 생성 템플릿
2. 루브릭 자동 생성
3. 프롬프트 최적화
4. 다운로드 기능 (JSON/MD)

### Phase 3: 과제 기능 (3주차)
1. 과제 생성 도우미
2. 학습목표 연계
3. 예시 답안 생성
4. PDF 내보내기

### Phase 4: 배포 (4주차)
1. UI 개선 및 반응형
2. GitHub Pages 설정
3. 사용자 가이드 작성
4. 테스트 및 버그 수정

## 주요 컴포넌트 설계

### 1. API Key Manager
```typescript
interface ApiKeyManagerProps {
  onApiKeySet: (key: string) => void;
}

// 기능:
// - API Key 입력 폼
// - 유효성 검증
// - LocalStorage 저장
// - 마스킹 표시
```

### 2. Chat Interface
```typescript
interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  context?: CourseContext;
}

// 기능:
// - 실시간 대화
// - 컨텍스트 유지
// - 히스토리 관리
// - 스트리밍 응답
```

### 3. Template System
```typescript
interface PromptTemplate {
  id: string;
  name: string;
  category: 'syllabus' | 'rubric' | 'assignment';
  template: string;
  variables: string[];
}

// 템플릿 예시:
// - 강의계획서 생성
// - 루브릭 생성
// - 과제 아이디어
// - 피드백 작성
```

### 4. Export Manager
```typescript
interface ExportOptions {
  format: 'json' | 'markdown' | 'pdf';
  includeMetadata: boolean;
  filename?: string;
}

// 기능:
// - 다양한 포맷 지원
// - 메타데이터 포함
// - 즉시 다운로드
// - 클립보드 복사
```

## API 연동 전략

### OpenAI API 직접 호출
```typescript
class OpenAIService {
  private apiKey: string;
  
  async chat(messages: ChatMessage[]): Promise<string> {
    // 클라이언트에서 직접 API 호출
    // 스트리밍 지원
    // 에러 핸들링
    // 재시도 로직
  }
  
  async generateWithTemplate(
    template: PromptTemplate,
    variables: Record<string, any>
  ): Promise<string> {
    // 템플릿 기반 생성
    // 변수 치환
    // 응답 파싱
  }
}
```

## LocalStorage 구조

```javascript
localStorage = {
  'api_key': '암호화된_키',
  'chat_history': [...],
  'saved_syllabi': [...],
  'saved_rubrics': [...],
  'user_preferences': {...},
  'recent_courses': [...]
}
```

## GitHub Pages 배포

### 설정
```json
// package.json
{
  "homepage": "https://aebonlee.github.io/hs_llm",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### 자동 배포 (GitHub Actions)
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 보안 고려사항

1. **API Key 보호**
   - 클라이언트 사이드 암호화
   - 세션 스토리지 옵션
   - 자동 만료

2. **데이터 프라이버시**
   - 로컬 저장만 사용
   - 서버 전송 없음
   - 사용자 제어

3. **CORS 처리**
   - OpenAI API는 CORS 지원
   - 프록시 불필요

## 사용자 경험 개선

### 1. 온보딩
- 첫 방문시 튜토리얼
- API Key 발급 가이드
- 샘플 템플릿 제공

### 2. 프리셋
- 과목별 템플릿
- 자주 사용하는 프롬프트
- 빠른 시작 버튼

### 3. 오프라인 지원
- PWA 구현 고려
- 캐시 전략
- 오프라인 알림

## 향후 확장 계획 (2차 개발)

### 백엔드 추가시
1. 사용자 계정 시스템
2. 클라우드 저장소
3. 협업 기능
4. 분석 대시보드

### 고급 기능
1. 다중 LLM 지원 (Claude, Gemini)
2. 파인튜닝 모델
3. 학과별 커스터마이징
4. 통계 및 리포트

## 개발 체크리스트

### Week 1
- [ ] React + Vite 프로젝트 설정
- [ ] Tailwind CSS + shadcn/ui 설정
- [ ] OpenAI API 서비스 구현
- [ ] API Key 관리 컴포넌트
- [ ] 기본 채팅 인터페이스

### Week 2
- [ ] 강의계획서 템플릿
- [ ] 루브릭 생성 UI
- [ ] LocalStorage 서비스
- [ ] 프롬프트 템플릿 시스템

### Week 3
- [ ] 과제 생성 기능
- [ ] 파일 다운로드 (JSON/MD/PDF)
- [ ] 사용자 설정 페이지
- [ ] 히스토리 관리

### Week 4
- [ ] UI/UX 개선
- [ ] 반응형 디자인
- [ ] GitHub Pages 배포
- [ ] 문서화 및 가이드
- [ ] 테스트 및 최적화