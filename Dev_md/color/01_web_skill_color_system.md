# Web_skill 컬러 시스템 가이드

## 📎 원본 리포지토리
- **GitHub**: https://github.com/aebonlee/Web_skill
- **개발자**: aebonlee
- **최종 업데이트**: 2025년 11월

## 🎨 5가지 테마 컬러

### Color-1 (Red/Pink)
```css
--skin-color: #ec1839;
RGB: 236, 24, 57
```
- 메인 액센트 색상
- 강조, 알림, 중요 표시
- 열정적이고 역동적인 느낌

### Color-2 (Orange)
```css
--skin-color: #fa5b0f;
RGB: 250, 91, 15
```
- 활기차고 친근한 느낌
- 경고, 주의 메시지
- 창의적이고 에너지틱한 요소

### Color-3 (Green)
```css
--skin-color: #37b182;
RGB: 55, 177, 130
```
- 성공, 완료 상태
- 자연스럽고 편안한 느낌
- 긍정적인 피드백

### Color-4 (Blue)
```css
--skin-color: #1854b4;
RGB: 24, 84, 180
```
- 신뢰와 전문성
- 정보 제공, 링크
- 차분하고 안정적인 느낌

### Color-5 (Magenta)
```css
--skin-color: #f021b2;
RGB: 240, 33, 178
```
- 창의적이고 현대적
- 특별한 기능, 프리미엄
- 독특하고 트렌디한 느낌

## 🌓 라이트/다크 모드 색상

### 라이트 모드 (기본)
```css
:root {
  --bg-black-900: #f2f2fc;  /* 메인 배경 */
  --bg-black-100: #fdf9ff;  /* 카드 배경 */
  --bg-black-50: #e8dfec;   /* 보조 배경 */
  --text-black-900: #302e4d; /* 메인 텍스트 */
  --text-black-700: #504e70; /* 보조 텍스트 */
}
```

### 다크 모드
```css
body.dark {
  --bg-black-900: #151515;  /* 메인 배경 */
  --bg-black-100: #222222;  /* 카드 배경 */
  --bg-black-50: #393939;   /* 보조 배경 */
  --text-black-900: #ffffff; /* 메인 텍스트 */
  --text-black-700: #e9e9e9; /* 보조 텍스트 */
}
```

## 💡 사용 방법

### 1. CSS 변수 정의
```css
/* 루트에 색상 변수 정의 */
:root {
  --skin-color: #ec1839; /* 기본 테마 색상 */
  /* 라이트 모드 색상들 */
}

/* 다크 모드 클래스 */
body.dark {
  /* 다크 모드 색상들 */
}
```

### 2. JavaScript로 테마 전환
```javascript
// 다크 모드 토글
document.body.classList.toggle('dark');

// 테마 색상 변경
document.documentElement.style.setProperty('--skin-color', '#fa5b0f');
```

### 3. 테마 색상 적용 예제
```css
/* 버튼 */
.btn-primary {
  background-color: var(--skin-color);
  color: white;
}

/* 링크 호버 */
a:hover {
  color: var(--skin-color);
}

/* 활성 메뉴 */
.nav-item.active {
  background-color: var(--skin-color);
  color: white;
}
```

## 🔧 React/TypeScript 구현

### 테마 타입 정의
```typescript
export type ThemeColor = 'color-1' | 'color-2' | 'color-3' | 'color-4' | 'color-5';
export type ThemeMode = 'light' | 'dark';

interface ThemeConfig {
  mode: ThemeMode;
  color: ThemeColor;
}
```

### 컬러 스키마 객체
```typescript
const colorSchemes = {
  'color-1': {
    hex: '#ec1839',
    rgb: '236, 24, 57',
    name: 'Red/Pink'
  },
  'color-2': {
    hex: '#fa5b0f',
    rgb: '250, 91, 15',
    name: 'Orange'
  },
  'color-3': {
    hex: '#37b182',
    rgb: '55, 177, 130',
    name: 'Green'
  },
  'color-4': {
    hex: '#1854b4',
    rgb: '24, 84, 180',
    name: 'Blue'
  },
  'color-5': {
    hex: '#f021b2',
    rgb: '240, 33, 178',
    name: 'Magenta'
  }
};
```

### localStorage 저장
```typescript
// 테마 저장
const saveTheme = (theme: ThemeConfig) => {
  localStorage.setItem('app-theme', JSON.stringify(theme));
};

// 테마 불러오기
const loadTheme = (): ThemeConfig => {
  const saved = localStorage.getItem('app-theme');
  if (saved) {
    return JSON.parse(saved);
  }
  return { mode: 'light', color: 'color-1' };
};
```

## 📋 복사용 전체 코드

### CSS 전체
```css
/* Web_skill 컬러 시스템 */
:root {
  /* 라이트 모드 */
  --bg-black-900: #f2f2fc;
  --bg-black-100: #fdf9ff;
  --bg-black-50: #e8dfec;
  --text-black-900: #302e4d;
  --text-black-700: #504e70;
  --skin-color: #ec1839;
}

body.dark {
  /* 다크 모드 */
  --bg-black-900: #151515;
  --bg-black-100: #222222;
  --bg-black-50: #393939;
  --text-black-900: #ffffff;
  --text-black-700: #e9e9e9;
}

/* 5가지 테마 색상 */
.color-1 { --skin-color: #ec1839; }
.color-2 { --skin-color: #fa5b0f; }
.color-3 { --skin-color: #37b182; }
.color-4 { --skin-color: #1854b4; }
.color-5 { --skin-color: #f021b2; }
```

## 🎯 사용 시나리오

1. **포트폴리오 사이트**: 개인 브랜드 색상으로 커스터마이징
2. **대시보드**: 사용자가 선호하는 테마 선택 기능
3. **교육 플랫폼**: 과목별 색상 구분
4. **기업 웹사이트**: 브랜드 아이덴티티 반영
5. **블로그**: 카테고리별 색상 테마

## ⚠️ 주의사항

1. **색상 대비**: WCAG 2.1 기준 충족 필요 (4.5:1 이상)
2. **색약 대응**: 색상만으로 정보 전달 금지
3. **일관성**: 한 프로젝트 내에서 일관된 색상 사용
4. **성능**: CSS 변수는 IE11 미지원

---

*이 컬러 시스템은 Web_skill 프로젝트에서 검증된 디자인입니다.*
*재사용 시 이 문서를 참조하여 빠르게 적용할 수 있습니다.*