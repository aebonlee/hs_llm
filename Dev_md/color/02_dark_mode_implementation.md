# 다크 모드 구현 가이드

## 🌙 개선된 다크 모드 색상 체계

### 기본 다크 모드 팔레트
```css
.dark {
  /* 배경 색상 */
  --background: #171717;      /* 메인 배경 - 너무 어둡지 않은 검정 */
  --background-card: #242424; /* 카드 배경 - 약간 밝은 회색 */
  --background-hover: #2e2e2e; /* 호버 상태 */
  
  /* 텍스트 색상 */
  --text-primary: #f2f2f2;    /* 메인 텍스트 - 순백 대신 부드러운 흰색 */
  --text-secondary: #b3b3b3;  /* 보조 텍스트 - 충분한 대비 */
  --text-muted: #808080;       /* 약한 텍스트 */
  
  /* 테두리 & 구분선 */
  --border: #404040;           /* 기본 테두리 - 잘 보이는 회색 */
  --border-subtle: #333333;    /* 약한 테두리 */
  
  /* 시맨틱 색상 */
  --success: #16a34a;          /* 성공 - 밝은 녹색 */
  --warning: #f59e0b;          /* 경고 - 오렌지 */
  --error: #ef4444;            /* 에러 - 빨강 */
  --info: #3b82f6;             /* 정보 - 파랑 */
}
```

### Tailwind CSS 다크 모드 설정
```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class', // 클래스 기반 다크 모드
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#171717',
          card: '#242424',
          hover: '#2e2e2e',
          border: '#404040',
        }
      }
    }
  }
}
```

## 🎨 컴포넌트별 다크 모드 스타일

### 1. Navigation
```css
/* 네비게이션 바 */
.nav {
  @apply bg-white dark:bg-gray-900;
  @apply border-b border-slate-200 dark:border-gray-700;
}

/* 메뉴 아이템 */
.nav-item {
  @apply text-slate-600 dark:text-slate-300;
  @apply hover:bg-slate-50 dark:hover:bg-slate-800;
}

.nav-item.active {
  @apply bg-slate-100 dark:bg-slate-800;
  @apply text-slate-900 dark:text-white;
}
```

### 2. Cards
```css
/* 카드 컨테이너 */
.card {
  @apply bg-white dark:bg-gray-800;
  @apply border border-slate-200 dark:border-gray-700;
  @apply shadow-sm dark:shadow-xl;
}

/* 카드 호버 */
.card:hover {
  @apply bg-gray-50 dark:bg-gray-700;
  @apply shadow-lg dark:shadow-2xl;
}
```

### 3. Buttons
```css
/* Primary 버튼 */
.btn-primary {
  @apply bg-blue-600 hover:bg-blue-700;
  @apply dark:bg-blue-500 dark:hover:bg-blue-600;
  @apply text-white;
}

/* Secondary 버튼 */
.btn-secondary {
  @apply bg-slate-100 hover:bg-slate-200;
  @apply dark:bg-slate-700 dark:hover:bg-slate-600;
  @apply text-slate-700 dark:text-slate-200;
}

/* Outline 버튼 */
.btn-outline {
  @apply border-2 border-slate-300 dark:border-slate-600;
  @apply text-slate-700 dark:text-slate-300;
  @apply hover:bg-slate-50 dark:hover:bg-slate-800;
}
```

### 4. Forms
```css
/* Input 필드 */
.input {
  @apply bg-white dark:bg-gray-800;
  @apply border border-slate-300 dark:border-gray-600;
  @apply text-slate-900 dark:text-slate-100;
  @apply placeholder-slate-400 dark:placeholder-slate-500;
  @apply focus:border-blue-500 dark:focus:border-blue-400;
}

/* Select 드롭다운 */
.select {
  @apply bg-white dark:bg-gray-800;
  @apply border border-slate-300 dark:border-gray-600;
  @apply text-slate-900 dark:text-slate-100;
}
```

### 5. Text & Typography
```css
/* 제목 */
.title {
  @apply text-slate-900 dark:text-white;
}

/* 본문 */
.text {
  @apply text-slate-600 dark:text-slate-300;
}

/* 보조 텍스트 */
.text-secondary {
  @apply text-slate-500 dark:text-slate-400;
}

/* Muted 텍스트 */
.text-muted {
  @apply text-slate-400 dark:text-slate-500;
}
```

## 🔧 React 구현

### Theme Context Provider
```typescript
import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  effectiveTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    return (localStorage.getItem('theme') as ThemeMode) || 'system';
  });

  const [effectiveTheme, setEffectiveTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setEffectiveTheme(systemTheme);
      root.classList.toggle('dark', systemTheme === 'dark');
    } else {
      setEffectiveTheme(theme as 'light' | 'dark');
      root.classList.toggle('dark', theme === 'dark');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  // 시스템 테마 변경 감지
  useEffect(() => {
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        const systemTheme = e.matches ? 'dark' : 'light';
        setEffectiveTheme(systemTheme);
        document.documentElement.classList.toggle('dark', e.matches);
      };
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, effectiveTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
```

### Theme Toggle Component
```typescript
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from './ThemeContext';

export function ThemeToggle() {
  const { theme, setTheme, effectiveTheme } = useTheme();

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded ${theme === 'light' ? 'bg-slate-200 dark:bg-slate-700' : ''}`}
        aria-label="Light mode"
      >
        <Sun className="h-4 w-4" />
      </button>
      
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded ${theme === 'dark' ? 'bg-slate-200 dark:bg-slate-700' : ''}`}
        aria-label="Dark mode"
      >
        <Moon className="h-4 w-4" />
      </button>
      
      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded ${theme === 'system' ? 'bg-slate-200 dark:bg-slate-700' : ''}`}
        aria-label="System theme"
      >
        <Monitor className="h-4 w-4" />
      </button>
    </div>
  );
}
```

## 🌈 테마 색상과 다크 모드 조합

### 테마 색상 동적 적용
```typescript
// 다크 모드에서도 잘 보이는 색상 조정
function getThemeColor(baseColor: string, isDark: boolean) {
  const colors = {
    '#ec1839': isDark ? '#ff3355' : '#ec1839', // 더 밝은 빨강
    '#fa5b0f': isDark ? '#ff7733' : '#fa5b0f', // 더 밝은 주황
    '#37b182': isDark ? '#4ade80' : '#37b182', // 더 밝은 녹색
    '#1854b4': isDark ? '#3b82f6' : '#1854b4', // 더 밝은 파랑
    '#f021b2': isDark ? '#ff44cc' : '#f021b2', // 더 밝은 마젠타
  };
  
  return colors[baseColor] || baseColor;
}
```

### 호버 효과에 투명도 활용
```typescript
// 다크 모드에서 호버 효과
const hoverStyle = {
  backgroundColor: isDark 
    ? `rgba(${colorRGB}, 0.2)`  // 다크 모드: 20% 투명도
    : `rgba(${colorRGB}, 0.1)`, // 라이트 모드: 10% 투명도
};
```

## 📊 접근성 체크리스트

### 색상 대비 (WCAG 2.1 기준)
- [ ] 일반 텍스트: 4.5:1 이상
- [ ] 큰 텍스트 (18pt+): 3:1 이상
- [ ] 버튼/링크: 4.5:1 이상
- [ ] 플레이스홀더: 3:1 이상
- [ ] 비활성 요소: 대비 요구사항 없음

### 테스트 도구
1. **Chrome DevTools**: Lighthouse 접근성 점수
2. **WAVE**: 웹 접근성 평가 도구
3. **Color Contrast Analyzer**: 색상 대비 측정
4. **axe DevTools**: 접근성 문제 자동 감지

## 🚀 최적화 팁

### 1. 트랜지션 부드럽게
```css
* {
  @apply transition-colors duration-200;
}
```

### 2. 미디어 쿼리 활용
```css
@media (prefers-color-scheme: dark) {
  :root {
    /* 시스템 다크 모드 기본값 */
  }
}
```

### 3. 플래시 방지
```html
<!-- HTML에 초기 테마 설정 -->
<script>
  (function() {
    const theme = localStorage.getItem('theme') || 'system';
    if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  })();
</script>
```

## ⚠️ 주의사항

1. **이미지**: 다크 모드에서 너무 밝은 이미지는 `filter: brightness(0.8)` 적용
2. **그림자**: 다크 모드에서는 더 진한 그림자 사용
3. **아이콘**: SVG 아이콘은 `currentColor` 사용으로 자동 전환
4. **그라디언트**: 다크 모드에서는 대비가 약해질 수 있음

---

*이 다크 모드 가이드는 WCAG 2.1 접근성 기준을 충족하도록 설계되었습니다.*
*사용자 경험을 해치지 않으면서 눈의 피로를 줄이는 것이 목표입니다.*