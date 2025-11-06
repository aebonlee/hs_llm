import * as React from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'generate' | 'export' | 'save' | 'delete' | 'default';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

/**
 * ActionButton - 기능별로 정의된 액션 버튼
 * 생성, 내보내기, 저장 등 특정 동작을 위한 버튼
 */
export const ActionButton = React.forwardRef<HTMLButtonElement, ActionButtonProps>(
  ({ 
    className, 
    variant = 'default', 
    size = 'md', 
    children, 
    disabled, 
    onClick,
    loading = false,
    type = "button",
    ...props 
  }, ref) => {
    const { getAccentColors, theme } = useTheme();
    const colors = getAccentColors();
    const isDark = theme.mode === 'dark';
    
    // 기본 색상 RGB 값
    const colorRgb = colors?.rgb || '59, 130, 246';
    
    // 크기별 클래스
    const sizeClasses = {
      sm: 'h-9 px-3 py-1.5 text-sm',
      md: 'h-10 px-4 py-2 text-base',
      lg: 'h-11 px-6 py-2.5 text-lg'
    };

    // 기능별 색상 정의
    const getVariantColor = () => {
      switch (variant) {
        case 'generate':
          // 생성 버튼 - 메인 테마 색상
          return {
            bg: `rgb(${colorRgb})`,
            text: '#ffffff',
            hoverBg: `rgba(${colorRgb}, 0.85)`,
            border: `rgb(${colorRgb})`
          };
        case 'export':
          // 내보내기 버튼 - 보조 색상
          return {
            bg: isDark ? '#374151' : '#f3f4f6',
            text: `rgb(${colorRgb})`,
            hoverBg: isDark ? '#4b5563' : '#e5e7eb',
            border: isDark ? '#4b5563' : '#d1d5db'
          };
        case 'save':
          // 저장 버튼 - 녹색 계열
          return {
            bg: '#10b981',
            text: '#ffffff',
            hoverBg: '#059669',
            border: '#10b981'
          };
        case 'delete':
          // 삭제 버튼 - 빨간 계열
          return {
            bg: '#ef4444',
            text: '#ffffff',
            hoverBg: '#dc2626',
            border: '#ef4444'
          };
        default:
          // 기본 버튼
          return {
            bg: isDark ? '#374151' : '#ffffff',
            text: `rgb(${colorRgb})`,
            hoverBg: isDark ? '#4b5563' : '#f9fafb',
            border: `rgb(${colorRgb})`
          };
      }
    };

    const colors = getVariantColor();
    const isDisabled = disabled || loading;

    // 버튼 클릭 핸들러
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      console.log('[ActionButton] Clicked:', { 
        variant, 
        disabled: isDisabled,
        loading,
        hasOnClick: !!onClick
      });
      
      if (isDisabled) {
        e.preventDefault();
        return;
      }
      
      if (onClick) {
        console.log('[ActionButton] Executing onClick');
        onClick(e);
      }
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        onClick={handleClick}
        className={cn(
          // 기본 스타일
          "inline-flex items-center justify-center",
          "rounded-md font-medium",
          "transition-all duration-200",
          "border",
          
          // 크기
          sizeClasses[size],
          
          // 상태별 스타일
          isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:shadow-md active:scale-[0.98]",
          
          // 추가 클래스
          className
        )}
        style={{
          backgroundColor: colors.bg,
          color: colors.text,
          borderColor: colors.border
        }}
        onMouseEnter={(e) => {
          if (!isDisabled) {
            e.currentTarget.style.backgroundColor = colors.hoverBg;
          }
        }}
        onMouseLeave={(e) => {
          if (!isDisabled) {
            e.currentTarget.style.backgroundColor = colors.bg;
          }
        }}
        {...props}
      >
        {loading ? (
          <>
            <span className="mr-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle 
                  className="opacity-25" 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  stroke="currentColor" 
                  strokeWidth="4"
                  fill="none"
                />
                <path 
                  className="opacity-75" 
                  fill="currentColor" 
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </span>
            <span>처리 중...</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

ActionButton.displayName = "ActionButton";