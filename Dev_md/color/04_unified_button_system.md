# UnifiedButton 컴포넌트 시스템

## 📋 개요
UnifiedButton은 테마 색상 시스템과 완벽하게 통합된 통일된 버튼 컴포넌트입니다.

**개발일**: 2025년 11월 6일  
**목적**: 앱 전체의 버튼 컴포넌트 통일 및 테마 색상 적용

## 🎨 주요 특징

### 1. 테마 색상 자동 적용
- ThemeContext의 5가지 색상 자동 반영
- RGB 값 기반 동적 색상 조절
- 다크/라이트 모드 완벽 지원

### 2. 4가지 버튼 변형 (Variants)
```typescript
variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
```

#### Primary
- 배경: 테마 색상
- 텍스트: 흰색
- 호버: 투명도 90%
- 용도: 주요 액션 (생성, 저장)

#### Secondary  
- 배경: 회색 (다크모드 대응)
- 텍스트: 테마 색상
- 호버: 테마 색상 배경 10%
- 용도: 보조 액션

#### Outline
- 배경: 투명/흰색
- 테두리: 테마 색상 2px
- 호버: 테마 색상 배경 5%
- 용도: 덜 중요한 액션

#### Ghost
- 배경: 완전 투명
- 텍스트: 테마 색상
- 호버: 테마 색상 배경 8%
- 용도: 최소한의 스타일

### 3. 3가지 크기 옵션
```typescript
size?: 'sm' | 'md' | 'lg'
```

- **sm**: h-9 px-3 text-sm
- **md**: h-10 px-4 text-base (기본값)
- **lg**: h-11 px-8 text-lg

## 💻 구현 코드

### 컴포넌트 사용법
```tsx
import { UnifiedButton } from '@/components/ui/unified-button';

// 기본 사용
<UnifiedButton onClick={handleClick}>
  클릭하세요
</UnifiedButton>

// 변형 및 크기 지정
<UnifiedButton 
  variant="outline" 
  size="lg"
  onClick={handleSubmit}
>
  <Icon className="mr-2" />
  제출하기
</UnifiedButton>

// 비활성화 상태
<UnifiedButton 
  disabled={isLoading}
  variant="primary"
>
  {isLoading ? '처리 중...' : '저장'}
</UnifiedButton>
```

### 핵심 구현부
```typescript
// 테마 색상 가져오기
const { getAccentColors, theme } = useTheme();
const colors = getAccentColors();
const colorRgb = colors?.rgb || '59, 130, 246'; // fallback

// 동적 스타일 적용
const getButtonStyles = () => {
  switch (variant) {
    case 'primary':
      return {
        backgroundColor: `rgb(${colorRgb})`,
        color: '#ffffff',
        border: `1px solid rgb(${colorRgb})`
      };
    // ... 다른 variants
  }
};
```

## 🎯 UX 개선 사항

### 1. Ripple Click Effect
```typescript
// 클릭 위치에서 퍼지는 물결 효과
const ripple = document.createElement('span');
ripple.className = 'absolute bg-white/30 rounded-full animate-ping';
```

### 2. Transform Animations
- **Hover**: translateY(-1px) - 살짝 떠오르는 효과
- **Active**: scale(0.98) - 눌림 효과
- **Disabled**: opacity 0.6 + cursor not-allowed

### 3. 그림자 효과
- 기본: 0 1px 3px rgba(0,0,0,0.12)
- 호버: 0 4px 6px rgba(0,0,0,0.15)

## 🔄 마이그레이션 가이드

### Before (여러 버튼 컴포넌트)
```tsx
// 기존 Button
import { Button } from '@/components/ui/button';

// 기존 ThemedButton
import { ThemedButton } from '@/components/ui/themed-button';

// 기존 SimpleButton
import { SimpleButton } from '@/components/ui/simple-button';
```

### After (UnifiedButton으로 통일)
```tsx
// 모든 버튼을 UnifiedButton으로
import { UnifiedButton as Button } from '@/components/ui/unified-button';

// 또는 직접 import
import { UnifiedButton } from '@/components/ui/unified-button';
```

## 📊 적용 현황

| 페이지 | 상태 | 버튼 개수 |
|--------|------|-----------|
| SyllabusGenerator | ✅ 완료 | 5개 |
| RubricBuilder | ✅ 완료 | 7개 |
| AssignmentGenerator | ✅ 완료 | 8개 |
| FeedbackGenerator | ✅ 완료 | 9개 |
| Dashboard | ✅ 완료 | 3개 |
| Settings | ✅ 완료 | 6개 |

## 🐛 해결된 문제들

### 1. 버튼이 텍스트로만 표시
- **원인**: children prop 누락
- **해결**: children을 명시적으로 처리

### 2. 버튼 클릭 안됨
- **원인**: type="button" 강제 설정
- **해결**: type prop 유연하게 처리

### 3. 테마 색상 미적용
- **원인**: ThemeContext 없을 때 처리 부재
- **해결**: fallback RGB 값 제공

## 🎨 색상 시스템 통합

### RGB 값 활용
```typescript
// 투명도 조절 가능
backgroundColor: `rgba(${colorRgb}, 0.1)`  // 10% 투명도
backgroundColor: `rgba(${colorRgb}, 0.9)`  // 90% 불투명도
```

### 다크모드 대응
```typescript
const isDark = theme.mode === 'dark';
backgroundColor: isDark ? '#374151' : '#f3f4f6'
```

## 📝 체크리스트

UnifiedButton 사용 시 확인사항:
- [ ] onClick 핸들러 정의
- [ ] disabled 상태 처리
- [ ] 아이콘 사용 시 간격 조정 (mr-2)
- [ ] 로딩 상태 UI 제공
- [ ] 적절한 variant 선택
- [ ] 필요시 size 조정
- [ ] type 속성 확인 (form submit 등)

## 🚀 향후 개선 계획

1. **로딩 스피너**: 내장 로딩 애니메이션
2. **아이콘 위치**: leftIcon, rightIcon props
3. **그룹 버튼**: ButtonGroup 컴포넌트
4. **툴팁 지원**: 호버 시 설명 표시
5. **키보드 단축키**: accessKey 지원

---

*UnifiedButton은 지속적으로 개선되고 있습니다.*  
*문제 발생 시 이 문서를 참조하세요.*