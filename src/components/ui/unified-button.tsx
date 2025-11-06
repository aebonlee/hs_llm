import * as React from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";

interface UnifiedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  useThemeColor?: boolean;
}

export const UnifiedButton = React.forwardRef<HTMLButtonElement, UnifiedButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    children, 
    disabled, 
    onClick, 
    type = "button",
    useThemeColor = true,
    style,
    ...props 
  }, ref) => {
    const { getAccentColors, theme } = useTheme();
    const colors = getAccentColors();
    const isDark = theme.mode === 'dark';
    
    // 기본 색상 설정 (fallback)
    const defaultRgb = '59, 130, 246'; // blue-500
    const colorRgb = colors?.rgb || defaultRgb;
    
    const sizeClasses = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-4 py-2 text-base',
      lg: 'h-11 px-8 text-lg'
    };

    // Base button classes that work with all variants
    const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200';
    
    // Get variant-specific Tailwind classes for fallback
    const getVariantClasses = () => {
      if (disabled) {
        return 'opacity-60 cursor-not-allowed bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400';
      }
      
      switch (variant) {
        case 'primary':
          return 'text-white shadow-sm hover:shadow-md active:scale-95';
        case 'secondary':
          return 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 active:scale-95';
        case 'outline':
          return 'bg-white dark:bg-gray-800 border-2 hover:bg-gray-50 dark:hover:bg-gray-700 active:scale-95';
        case 'ghost':
          return 'hover:bg-gray-100 dark:hover:bg-gray-700 active:scale-95';
        default:
          return '';
      }
    };

    const getButtonStyles = () => {
      const baseStyle: React.CSSProperties = {
        position: 'relative',
        overflow: 'hidden',
        cursor: disabled ? 'not-allowed' : 'pointer'
      };

      if (disabled) {
        return {
          ...baseStyle,
          backgroundColor: isDark ? '#374151' : '#e5e7eb',
          color: isDark ? '#9ca3af' : '#6b7280',
          border: `1px solid ${isDark ? '#4b5563' : '#d1d5db'}`,
          opacity: 0.6
        };
      }

      switch (variant) {
        case 'primary':
          return {
            ...baseStyle,
            backgroundColor: `rgb(${colorRgb})`,
            color: '#ffffff',
            border: `1px solid rgb(${colorRgb})`,
            boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
            fontWeight: '500'
          };
        case 'secondary':
          return {
            ...baseStyle,
            backgroundColor: isDark ? '#374151' : '#f3f4f6',
            color: `rgb(${colorRgb})`,
            border: `1px solid ${isDark ? '#4b5563' : '#e5e7eb'}`,
            fontWeight: '500'
          };
        case 'outline':
          return {
            ...baseStyle,
            backgroundColor: isDark ? 'rgba(31, 41, 55, 0.5)' : '#ffffff',
            color: `rgb(${colorRgb})`,
            border: `2px solid rgb(${colorRgb})`,
            fontWeight: '500'
          };
        case 'ghost':
          return {
            ...baseStyle,
            backgroundColor: 'transparent',
            color: `rgb(${colorRgb})`,
            border: '1px solid transparent',
            fontWeight: '500'
          };
        default:
          return baseStyle;
      }
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return;
      
      const target = e.currentTarget;
      
      switch (variant) {
        case 'primary':
          target.style.backgroundColor = `rgba(${colorRgb}, 0.9)`;
          target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.15)';
          target.style.transform = 'translateY(-1px)';
          break;
        case 'secondary':
          target.style.backgroundColor = isDark 
            ? `rgba(${colorRgb}, 0.15)` 
            : `rgba(${colorRgb}, 0.08)`;
          break;
        case 'outline':
          target.style.backgroundColor = `rgba(${colorRgb}, 0.05)`;
          target.style.borderColor = `rgba(${colorRgb}, 0.8)`;
          break;
        case 'ghost':
          target.style.backgroundColor = `rgba(${colorRgb}, 0.08)`;
          break;
      }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return;
      
      const target = e.currentTarget;
      target.style.transform = '';
      const styles = getButtonStyles();
      Object.assign(target.style, styles);
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return;
      const target = e.currentTarget;
      target.style.transform = 'scale(0.98)';
    };

    const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return;
      const target = e.currentTarget;
      target.style.transform = variant === 'primary' ? 'translateY(-1px)' : '';
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      console.log('UnifiedButton clicked:', { variant, disabled, children });
      
      if (disabled) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      
      // 클릭 이펙트 추가
      const ripple = document.createElement('span');
      const rect = e.currentTarget.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.className = 'absolute bg-white/30 rounded-full animate-ping pointer-events-none';
      
      e.currentTarget.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
      
      if (onClick) {
        console.log('Calling onClick handler');
        onClick(e);
      }
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          sizeClasses[size],
          getVariantClasses(),
          'relative overflow-hidden',
          className
        )}
        style={{
          ...getButtonStyles(),
          ...style
        }}
        disabled={disabled}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        type={type}
        {...props}
      >
        {children}
      </button>
    );
  }
);

UnifiedButton.displayName = "UnifiedButton";