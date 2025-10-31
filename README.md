# LLM 기반 교과목별 루브릭 자동 설계·정합성 검증 도구

## 프로젝트 개요
교육 현장에서 CLO(Course Learning Outcomes)와 평가 기준 간 정합성을 확보하고, 루브릭 품질을 향상시키며, 피드백 효율성을 높이는 LLM 기반 자동화 도구 개발

### 핵심 목표
- **정합성 자동 점검 체계 구축**: CLO-역량-과제-평가 기준 간 coverage/gap/overlap 자동 진단
- **과제 유형별 루브릭 자동 설계**: LLM 기반 고품질 루브릭 신속 생성
- **난이도·인지수준 정렬**: Bloom's Taxonomy 기반 자동 태깅 및 균형화
- **평가 신뢰도·공정성 제고**: 채점 기준 명료화와 다평가자 일치도 향상
- **피드백 품질·효율 고도화**: 행동가능 피드백 자동 생성 및 PDCA 연동

## 시스템 아키텍처

### 기술 스택
- **Frontend**: React + Vite + TypeScript, Tailwind CSS + shadcn/ui
- **Backend**: Node.js (Express) / FastAPI
- **LLM Layer**: OpenAI API / Claude API + 문장 임베딩
- **Database**: PostgreSQL
- **Deployment**: GitHub Actions → Render
- **Queue**: Redis (배치 처리)

### 주요 모듈 구성
```
M1: CLO 파서 및 정합성 진단
M2: 루브릭 템플릿 라이브러리 + LLM 초안 생성
M3: 피드백 리라이트 및 리포트 생성
M4: 난이도·Bloom 레벨 자동 태깅
M5: HiTL(Human-in-the-Loop) 승인 워크플로우
M6: 대시보드 및 지표 분석
```

## 개발 담당 분담

### Opus 담당 모듈 (고차원 설계 및 복잡도 높은 작업)
1. **CLO 파서 및 정합성 진단 엔진 (M1)**
   - CLO 텍스트 파싱 및 구조화
   - 역량 사전과 N:M 매핑 알고리즘
   - Coverage/Gap/Overlap 스코어 계산 엔진
   - 문장 임베딩 기반 유사도 분석

2. **LLM 오케스트레이션 계층**
   - 프롬프트 템플릿 관리 시스템
   - 토큰 최적화 및 가드레일
   - 멀티 LLM API 추상화 레이어
   - 컨텍스트 관리 및 캐싱

3. **평가 신뢰도 분석 모듈**
   - Inter-rater reliability (κ/ICC) 계산
   - 통계적 분포 분석 (왜도, 분산)
   - 채점 일관성 검증 알고리즘

### Sonnet 담당 모듈 (UI/UX 및 비즈니스 로직)
1. **Frontend 전체 개발**
   - React 컴포넌트 설계 및 구현
   - 대시보드 UI/UX (차트, 테이블, 폼)
   - RBAC 기반 권한 관리 UI
   - 반응형 디자인

2. **루브릭 빌더 인터페이스 (M2)**
   - 템플릿 선택 및 커스터마이징 UI
   - Drag & Drop 수준/가중치 편집기
   - 실시간 프리뷰 및 검증

3. **Backend API 개발**
   - RESTful API 엔드포인트 구현
   - 데이터 검증 및 비즈니스 로직
   - 세션/인증 관리
   - 파일 업로드/다운로드 처리

4. **리포트 생성 모듈 (M3)**
   - PDF/CSV 내보내기
   - 피드백 템플릿 관리
   - 이메일 알림 시스템

## 적용 교과 및 일정

### 대상 교과
- **실습 교과**: 웹프로그래밍 (3학점)
- **적용 범위**: 중간·기말 평가 각 1개 과제

### 개발 일정 (16주)
```
Week 1-2: 프로젝트 셋업 및 아키텍처 설계
Week 3-4: CLO 파서 및 데이터 모델 구현
Week 5-6: 루브릭 템플릿 시스템 개발
Week 7-8: LLM 통합 및 초안 생성 기능
Week 9-10: 정합성 진단 모듈 구현
Week 11-12: Frontend 대시보드 개발
Week 13-14: HiTL 워크플로우 및 승인 시스템
Week 15: 통합 테스트 및 파일럿 적용
Week 16: 피드백 수집 및 개선
```

## 데이터 모델

### 핵심 엔티티
- Course (교과목)
- CLO (학습성과)
- Competency (역량)
- CloCompetencyMap (매핑 및 가중치)
- Rubric (루브릭)
- RubricCriterion (평가기준)
- Assignment (과제)
- Assessment (평가)
- Feedback (피드백)
- User, Role, AuditLog

### 지표 캐시
- MetricsSnapshot (coverage, gap, overlap, bloom_dist, kappa, icc, variance)

## API 명세 (주요)

```
POST /api/import/syllabus     # 강의계획서 업로드 및 CLO 파싱
POST /api/clo/map             # 역량 매핑 제안
POST /api/rubrics/generate    # 루브릭 초안 생성
POST /api/rubrics/{id}/approve # HiTL 승인
GET  /api/consistency/report  # 정합성 리포트
POST /api/feedback/rewrite    # 피드백 리라이트
GET  /api/metrics/dashboard   # 대시보드 데이터
```

## 품질 및 윤리 관리

### 품질 보증
- HiTL: 모든 자동생성 콘텐츠는 교수자 최종 승인 필요
- 버전 관리: 모든 변경사항 추적 및 롤백 가능
- 샘플 검증: 더블마킹을 통한 신뢰도 확보

### 윤리 및 보안
- 데이터 익명화 처리
- GDPR/개인정보보호법 준수
- 접근 권한 관리 (RBAC)
- 감사 로그 (Audit Trail)

## 설치 및 실행

### 요구사항
- Node.js 18+
- Python 3.9+
- PostgreSQL 14+
- Redis 6+

### 설치
```bash
# Backend
cd src/backend
npm install  # or pip install -r requirements.txt

# Frontend  
cd src/frontend
npm install

# Database
psql -U postgres -f docs/schema.sql
```

### 실행
```bash
# Development
npm run dev

# Production
npm run build
npm start
```

## 기여 가이드
1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 라이선스
MIT License

## 연구진
- **책임연구원**: 홍창기 (교육설계 총괄)
- **공동연구원**: 이애본 (시스템 설계·개발)
- **공동연구원**: OOO (효과 검증·통계분석)

## 문의
프로젝트 관련 문의: [이메일 주소]
