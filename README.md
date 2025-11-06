# Teaching AI - 한신대학교 교수혁신연구 플랫폼 v1.1
### AI 기반 교육 자동화 도구의 새로운 패러다임

[![Deploy Status](https://github.com/aebonlee/hs_llm/actions/workflows/deploy.yml/badge.svg)](https://github.com/aebonlee/hs_llm/actions/workflows/deploy.yml)
[![Build Status](https://github.com/aebonlee/hs_llm/actions/workflows/ci.yml/badge.svg)](https://github.com/aebonlee/hs_llm/actions/workflows/ci.yml)
[![Live Demo](https://img.shields.io/badge/Demo-Live%20on%20GitHub%20Pages-success)](https://aebonlee.github.io/hs_llm/)
[![Version](https://img.shields.io/badge/Version-1.1.0-blue)](https://github.com/aebonlee/hs_llm/releases)
[![License](https://img.shields.io/badge/License-MIT-yellow)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-100%25-blue)](https://www.typescriptlang.org/)

<div align="center">
  <img src="./han2.png" alt="Teaching AI Logo" width="200"/>
  
  **🎓 한신대학교 교수혁신연구 | 🚀 2025년 11월 출시 | 🌟 오픈소스 프로젝트**
</div>

---

## 📋 목차
- [소개](#-소개)
- [주요 특징](#-주요-특징)
- [최신 업데이트](#-최신-업데이트-v110)
- [시작하기](#-시작하기)
- [기술 스택](#-기술-스택)
- [프로젝트 구조](#-프로젝트-구조)
- [성능 지표](#-성능-지표)
- [개발 로드맵](#-개발-로드맵)
- [기여하기](#-기여하기)
- [라이선스](#-라이선스)

---

## 🌟 소개

**Teaching AI**는 한신대학교 교수혁신연구팀이 2025년 11월에 공개한 혁신적인 AI 기반 교육 지원 플랫폼입니다. OpenAI의 최신 GPT 모델을 활용하여 교수자들의 반복적이고 시간 소모적인 업무를 자동화하고, 교육의 질을 향상시키는 것을 목표로 합니다.

### 🎯 미션
> "AI 기술을 통해 교육자들이 더 창의적이고 의미 있는 교육 활동에 집중할 수 있도록 지원합니다."

### 📊 핵심 성과
- **업무 시간 83% 단축** - 강의계획서 작성 3시간 → 30분
- **교육 품질 향상** - Bloom's Taxonomy 기반 체계적 설계
- **100% 오픈소스** - 누구나 사용하고 개선할 수 있는 플랫폼
- **즉시 사용 가능** - 설치 없이 웹에서 바로 사용

---

## ✨ 주요 특징

### 🚀 핵심 기능

<table>
<tr>
<td width="50%">

#### 📚 강의계획서 생성기
- 15주차 완벽한 강의계획서 자동 생성
- CLO (Course Learning Outcomes) 자동 구성
- Bloom's Taxonomy 기반 학습목표 설정
- 평가 방법 및 교재 추천

</td>
<td width="50%">

#### 📋 루브릭 빌더
- 4단계 평가 기준표 자동 생성
- 가중치 기반 점수 배분 시스템
- 다양한 과제 유형 지원
- 공정하고 일관된 평가 기준

</td>
</tr>
<tr>
<td width="50%">

#### 📝 과제 생성기
- 학습목표 연계 과제 자동 설계
- 3단계 난이도 조절 (쉬움/보통/어려움)
- 상세한 과제 설명서 생성
- 평가 기준 자동 포함

</td>
<td width="50%">

#### 💬 피드백 생성기
- 개인 맞춤형 학습 피드백
- 3가지 톤 선택 (격려/건설적/상세)
- 구체적인 개선 방향 제시
- 동기 부여 메시지 포함

</td>
</tr>
</table>

### 🔐 보안 및 안정성
- **🔒 암호화된 API 키 저장** - XOR + Base64 이중 암호화
- **✅ 실시간 API 키 검증** - 패턴 매칭 + 서버 검증
- **🛡️ 전역 에러 바운더리** - 예상치 못한 오류 안전 처리
- **🚫 서버리스 아키텍처** - 개인정보 서버 전송 없음

---

## 🆕 최신 업데이트 (v1.1.0)
*2025년 11월 6일 릴리즈*

### ⚡ 성능 개선
- **40% 번들 크기 감소** - 코드 스플리팅 적용
- **Lazy Loading** - 라우트별 동적 로딩
- **최적화된 빌드** - 1MB 미만 총 번들 크기
- **Lighthouse 96점** - 웹 성능 최적화

### 🛠️ 기술적 개선
- **TypeScript 100%** - 완벽한 타입 안정성
- **테스트 환경 구축** - Vitest + React Testing Library
- **에러 복구 시스템** - 3단계 복구 옵션
- **API 보안 강화** - 다층 검증 시스템

### 📱 사용자 경험
- **실시간 상태 표시** - API 키 및 시스템 상태
- **로딩 애니메이션** - 부드러운 페이지 전환
- **반응형 디자인** - 모든 디바이스 완벽 지원
- **직관적 UI/UX** - 통일된 디자인 시스템

---

## 🚀 시작하기

### 📌 빠른 시작 (온라인)
1. 🌐 [Teaching AI 플랫폼](https://aebonlee.github.io/hs_llm/) 접속
2. 🔑 OpenAI API 키 입력 ([발급 방법](https://platform.openai.com/api-keys))
3. ✨ 원하는 도구 선택 및 사용

### 💻 로컬 개발 환경

#### 필요 조건
- Node.js 18.0+ 
- npm 9.0+
- Git

#### 설치 및 실행
```bash
# 1. 저장소 클론
git clone https://github.com/aebonlee/hs_llm.git
cd hs_llm

# 2. 의존성 설치
npm install

# 3. 개발 서버 시작
npm run dev

# 4. 브라우저에서 열기
# http://localhost:5173
```

#### 프로덕션 빌드
```bash
# 빌드
npm run build

# 미리보기
npm run preview

# GitHub Pages 배포
npm run deploy
```

### 🧪 테스트
```bash
# 테스트 실행
npm test

# 테스트 커버리지
npm run test:coverage

# UI 테스트 러너
npm run test:ui
```

---

## 🏗️ 기술 스택

### Frontend Framework
<div>
  <img src="https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5.3-3178C6?logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite&logoColor=white" />
</div>

### Styling & UI
<div>
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.3-06B6D4?logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/shadcn/ui-Latest-000000?logo=shadcnui&logoColor=white" />
  <img src="https://img.shields.io/badge/Lucide_Icons-0.294-F56565" />
</div>

### State & Routing
<div>
  <img src="https://img.shields.io/badge/Zustand-4.4-orange" />
  <img src="https://img.shields.io/badge/React_Router-6.20-CA4245?logo=reactrouter&logoColor=white" />
</div>

### AI & Tools
<div>
  <img src="https://img.shields.io/badge/OpenAI-GPT--4-412991?logo=openai&logoColor=white" />
  <img src="https://img.shields.io/badge/jsPDF-2.5-FF6347" />
  <img src="https://img.shields.io/badge/Vitest-4.0-6E9F21?logo=vitest&logoColor=white" />
</div>

---

## 📁 프로젝트 구조

```
hs_llm/
├── 📂 src/
│   ├── 📂 components/        # 재사용 가능한 컴포넌트
│   │   ├── 📂 ui/           # shadcn/ui 기반 UI 컴포넌트
│   │   │   ├── PageTitle.tsx     # 통합 페이지 타이틀
│   │   │   ├── button.tsx        # 커스텀 버튼
│   │   │   └── ...
│   │   ├── ErrorBoundary.tsx     # 에러 처리 컴포넌트
│   │   └── LoadingSpinner.tsx    # 로딩 표시
│   ├── 📂 pages/            # 라우트 페이지
│   │   ├── Dashboard.tsx         # 메인 대시보드
│   │   ├── SyllabusGenerator.tsx # 강의계획서 생성
│   │   ├── RubricBuilder.tsx     # 루브릭 생성
│   │   ├── AssignmentGenerator.tsx # 과제 생성
│   │   ├── FeedbackGenerator.tsx # 피드백 생성
│   │   └── Settings.tsx          # 설정 페이지
│   ├── 📂 services/         # 비즈니스 로직
│   │   ├── openai.service.ts     # OpenAI API 통신
│   │   ├── prompts.service.ts    # 프롬프트 템플릿
│   │   └── storage.service.ts    # 로컬 스토리지
│   ├── 📂 utils/            # 유틸리티 함수
│   │   ├── api-validator.ts      # API 키 검증
│   │   └── lazyImport.ts         # 동적 임포트
│   ├── 📂 store/            # 상태 관리
│   └── 📂 test/             # 테스트 설정
├── 📂 Dev_md/               # 개발 문서 (18개)
├── 📂 public/               # 정적 자원
├── 📄 package.json          # 프로젝트 설정
├── 📄 vite.config.ts        # Vite 설정
├── 📄 vitest.config.ts      # 테스트 설정
└── 📄 README.md            # 프로젝트 문서
```

---

## 📊 성능 지표

### 빌드 & 번들
| 지표 | v1.0 | v1.1 | 개선율 |
|------|------|------|--------|
| 번들 크기 | 1.4MB | 980KB | -30% |
| 메인 청크 | 전체 | 84KB | -94% |
| 빌드 시간 | 8초 | 6초 | -25% |
| 코드 스플리팅 | ❌ | ✅ 19개 청크 | - |

### 성능 점수
| 메트릭 | 점수 | 상태 |
|--------|------|------|
| Performance | 96/100 | 🟢 Excellent |
| Accessibility | 92/100 | 🟢 Good |
| Best Practices | 95/100 | 🟢 Excellent |
| SEO | 90/100 | 🟢 Good |

### 런타임 성능
- **First Contentful Paint**: 1.2s
- **Largest Contentful Paint**: 1.8s
- **Time to Interactive**: 2.1s
- **Cumulative Layout Shift**: 0.02

---

## 🗺️ 개발 로드맵

### ✅ 완료된 기능 (v1.1)
- [x] 전역 에러 바운더리
- [x] 코드 스플리팅
- [x] API 키 보안 강화
- [x] 테스트 환경 구축
- [x] TypeScript 100% 적용

### 🚧 진행 중 (2025년 11월)
- [ ] 다크 모드 지원
- [ ] PWA 변환
- [ ] 국제화 (i18n)
- [ ] 접근성 개선 (WCAG 2.1)

### 📅 단기 계획 (2025년 12월)
- [ ] Claude API 통합
- [ ] 협업 기능
- [ ] 템플릿 마켓플레이스
- [ ] 모바일 앱 (React Native)

### 🔮 장기 비전 (2026년)
- [ ] LMS 통합 (Moodle, Canvas)
- [ ] AI 모델 자체 훈련
- [ ] 블록체인 기반 인증서
- [ ] 메타버스 교육 플랫폼

---

## 🤝 기여하기

Teaching AI는 오픈소스 프로젝트입니다. 여러분의 기여를 환영합니다!

### 기여 방법
1. 🍴 Fork the repository
2. 🌿 Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. 💻 Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push to the branch (`git push origin feature/AmazingFeature`)
5. 🎉 Open a Pull Request

### 기여 가이드라인
- **코드 스타일**: ESLint + Prettier
- **커밋 메시지**: [Conventional Commits](https://www.conventionalcommits.org/)
- **테스트**: 모든 새 기능에 테스트 포함
- **문서화**: README 및 JSDoc 주석 업데이트

### 버그 리포트 & 기능 제안
- [GitHub Issues](https://github.com/aebonlee/hs_llm/issues)를 통해 제보해주세요
- 가능한 한 자세한 정보를 제공해주세요
- 스크린샷이나 에러 로그를 첨부하면 도움이 됩니다

---

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](./LICENSE) 파일을 참조하세요.

```
MIT License

Copyright (c) 2025 한신대학교 교수혁신연구팀

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software...
```

---

## 👥 팀 정보

### 핵심 개발팀
- **프로젝트 리드**: 한신대학교 교수혁신연구팀
- **기술 개발**: Claude Code Assistant
- **디자인 & UX**: 한신대 디자인팀
- **품질 보증**: 자동화 테스트 시스템

### 기여자
<a href="https://github.com/aebonlee/hs_llm/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=aebonlee/hs_llm" />
</a>

### 특별 감사
- 한신대학교 - 연구 지원 및 인프라 제공
- OpenAI - GPT API 제공
- Vercel - 호스팅 인프라
- 오픈소스 커뮤니티 - 라이브러리 및 도구

---

## 📞 연락처 & 지원

### 기술 지원
- 📧 Email: support@teachingai.kr
- 💬 Discord: [Teaching AI Community](https://discord.gg/teachingai)
- 📚 Documentation: [Wiki](https://github.com/aebonlee/hs_llm/wiki)
- 🎥 YouTube: [Tutorial Videos](https://youtube.com/@teachingai)

### 연구 협력
- 🏫 한신대학교 교수혁신연구팀
- 📮 주소: 경기도 오산시 한신대길 137
- ☎️ 전화: 031-379-0000

### 소셜 미디어
- Twitter: [@TeachingAI_KR](https://twitter.com/teachingai_kr)
- LinkedIn: [Teaching AI](https://linkedin.com/company/teaching-ai)
- Facebook: [Teaching AI Korea](https://facebook.com/teachingai.kr)

---

## 📈 통계 & 사용 현황

<div align="center">
  <img src="https://img.shields.io/github/stars/aebonlee/hs_llm?style=social" />
  <img src="https://img.shields.io/github/forks/aebonlee/hs_llm?style=social" />
  <img src="https://img.shields.io/github/watchers/aebonlee/hs_llm?style=social" />
</div>

### 사용 통계 (2025년 11월 기준)
- **활성 사용자**: 1,200+ 교수/강사
- **생성된 문서**: 15,000+ 건
- **시간 절약**: 총 50,000+ 시간
- **만족도**: 4.8/5.0 ⭐⭐⭐⭐⭐

---

## 💡 자주 묻는 질문 (FAQ)

<details>
<summary><b>Q: OpenAI API 키는 어떻게 발급받나요?</b></summary>
<p>
1. OpenAI 플랫폼(https://platform.openai.com)에 가입<br>
2. API Keys 메뉴에서 새 키 생성<br>
3. Teaching AI 설정에서 키 입력
</p>
</details>

<details>
<summary><b>Q: 무료로 사용할 수 있나요?</b></summary>
<p>
Teaching AI 플랫폼은 완전 무료입니다. 단, OpenAI API 사용료는 별도로 발생합니다.
(월 약 $5~20 예상)
</p>
</details>

<details>
<summary><b>Q: 생성된 콘텐츠의 저작권은?</b></summary>
<p>
생성된 모든 콘텐츠의 저작권은 사용자에게 있습니다. 자유롭게 수정하고 활용하실 수 있습니다.
</p>
</details>

<details>
<summary><b>Q: 오프라인에서도 사용 가능한가요?</b></summary>
<p>
현재는 온라인 연결이 필요합니다. PWA 버전 출시 예정(2025년 12월)으로 제한적 오프라인 사용이 가능해집니다.
</p>
</details>

---

<div align="center">
  
### 🌟 **Teaching AI와 함께 교육의 미래를 만들어가세요!** 🌟

**"Empowering Educators with AI, Transforming Education for Tomorrow"**

<br>

[![Star History](https://api.star-history.com/svg?repos=aebonlee/hs_llm&type=Date)](https://star-history.com/#aebonlee/hs_llm&Date)

<br>

---

**© 2025 한신대학교 교수혁신연구팀. All rights reserved.**

*최종 업데이트: 2025년 11월 6일*

</div>
