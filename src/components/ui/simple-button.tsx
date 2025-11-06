import * as React from "react";
import { cn } from "@/lib/utils";

interface SimpleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const SimpleButton = React.forwardRef<HTMLButtonElement, SimpleButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, disabled, onClick, ...props }, ref) => {
    const variantClasses = {
      primary: disabled 
        ? 'bg-gray-400 text-gray-200 border border-gray-400 cursor-not-allowed'
        : 'bg-blue-600 text-white hover:bg-blue-700 border border-blue-600 cursor-pointer',
      outline: disabled
        ? 'bg-gray-100 text-gray-400 border border-gray-300 cursor-not-allowed'
        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300 cursor-pointer',
      ghost: disabled
        ? 'bg-transparent text-gray-400 cursor-not-allowed'
        : 'bg-transparent text-gray-700 hover:bg-gray-100 cursor-pointer'
    };

    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg'
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) {
        e.preventDefault();
        e.stopPropagation();
        console.log('버튼이 비활성화 상태입니다');
        return;
      }
      console.log('버튼 클릭!');
      if (onClick) {
        onClick(e);
      }
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium transition-colors duration-200',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        disabled={disabled}
        onClick={handleClick}
        type="button"
        {...props}
      >
        {children}
      </button>
    );
  }
);

SimpleButton.displayName = "SimpleButton";