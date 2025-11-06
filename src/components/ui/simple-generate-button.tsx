import * as React from "react";
import { useTheme } from "@/contexts/ThemeContext";

interface SimpleGenerateButtonProps {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
}

/**
 * SimpleGenerateButton - 매우 단순한 생성 버튼
 * 클릭 이벤트 처리에만 집중
 */
export function SimpleGenerateButton({ 
  onClick, 
  disabled = false, 
  loading = false,
  children,
  className = ""
}: SimpleGenerateButtonProps) {
  const { getAccentColors, theme } = useTheme();
  const themeColors = getAccentColors();
  const colorRgb = themeColors?.rgb || '59, 130, 246';
  const isDark = theme.mode === 'dark';
  
  const isDisabled = disabled || loading;
  
  const buttonStyle: React.CSSProperties = {
    backgroundColor: isDisabled 
      ? (isDark ? '#4a4a4a' : '#e0e0e0')
      : `rgb(${colorRgb})`,
    color: isDisabled 
      ? (isDark ? '#808080' : '#999999')
      : '#ffffff',
    border: `1px solid ${isDisabled ? (isDark ? '#5a5a5a' : '#d0d0d0') : `rgb(${colorRgb})`}`,
    padding: '8px 16px',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: '500',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    opacity: isDisabled ? 0.6 : 1,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    transition: 'all 0.2s'
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('SimpleGenerateButton clicked!', { isDisabled, loading });
    
    if (!isDisabled) {
      console.log('Calling onClick...');
      onClick();
    }
  };

  return (
    <button
      type="button"
      style={buttonStyle}
      onClick={handleClick}
      disabled={isDisabled}
      className={className}
      onMouseEnter={(e) => {
        if (!isDisabled) {
          e.currentTarget.style.opacity = '0.9';
          e.currentTarget.style.transform = 'scale(1.02)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isDisabled) {
          e.currentTarget.style.opacity = '1';
          e.currentTarget.style.transform = 'scale(1)';
        }
      }}
    >
      {loading ? (
        <>
          <span style={{ marginRight: '8px' }}>⟳</span>
          <span>처리 중...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}