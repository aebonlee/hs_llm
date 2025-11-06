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
    useThemeColor = true,
    ...props 
  }, ref) => {
    const { getAccentColors, theme } = useTheme();
    const colors = getAccentColors();
    const isDark = theme.mode === 'dark';
    
    const sizeClasses = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-4 text-base',
      lg: 'h-11 px-8 text-lg'
    };

    const getButtonStyles = () => {
      if (disabled) {
        return {
          backgroundColor: isDark ? '#4a4a4a' : '#e0e0e0',
          color: isDark ? '#808080' : '#999999',
          border: `1px solid ${isDark ? '#5a5a5a' : '#d0d0d0'}`,
          cursor: 'not-allowed',
          opacity: 0.6
        };
      }

      switch (variant) {
        case 'primary':
          return {
            backgroundColor: `rgb(${colors.rgb})`,
            color: 'white',
            border: `1px solid rgb(${colors.rgb})`,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          };
        case 'secondary':
          return {
            backgroundColor: isDark ? '#2d2d2d' : '#f5f5f5',
            color: `rgb(${colors.rgb})`,
            border: `1px solid ${isDark ? '#404040' : '#e0e0e0'}`
          };
        case 'outline':
          return {
            backgroundColor: 'transparent',
            color: `rgb(${colors.rgb})`,
            border: `2px solid rgb(${colors.rgb})`
          };
        case 'ghost':
          return {
            backgroundColor: 'transparent',
            color: `rgb(${colors.rgb})`,
            border: 'none'
          };
        default:
          return {};
      }
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return;
      
      const target = e.currentTarget;
      target.style.transform = 'scale(1.02)';
      
      switch (variant) {
        case 'primary':
          target.style.backgroundColor = `rgba(${colors.rgb}, 0.9)`;
          target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
          break;
        case 'secondary':
          target.style.backgroundColor = `rgba(${colors.rgb}, 0.1)`;
          break;
        case 'outline':
          target.style.backgroundColor = `rgba(${colors.rgb}, 0.1)`;
          break;
        case 'ghost':
          target.style.backgroundColor = `rgba(${colors.rgb}, 0.05)`;
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

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      if (onClick) {
        onClick(e);
      }
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200',
          sizeClasses[size],
          className
        )}
        style={getButtonStyles()}
        disabled={disabled}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        type="button"
        {...props}
      >
        {children}
      </button>
    );
  }
);

UnifiedButton.displayName = "UnifiedButton";