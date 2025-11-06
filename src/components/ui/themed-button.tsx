import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border bg-background",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ThemedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  useThemeColor?: boolean;
}

const ThemedButton = React.forwardRef<HTMLButtonElement, ThemedButtonProps>(
  ({ className, variant, size, useThemeColor = true, style, children, ...props }, ref) => {
    const { getAccentColors } = useTheme();
    const colors = getAccentColors();
    
    const getThemedStyle = () => {
      if (!useThemeColor) return style;
      
      if (variant === 'default') {
        return {
          ...style,
          backgroundColor: `rgb(${colors.rgb})`,
          color: 'white',
          borderColor: `rgb(${colors.rgb})`,
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        };
      }
      
      if (variant === 'outline') {
        // In dark mode, ensure text is visible
        const isDark = document.documentElement.classList.contains('dark');
        return {
          ...style,
          borderColor: `rgb(${colors.rgb})`,
          color: isDark ? `rgb(${colors.rgb})` : `rgb(${colors.rgb})`,
          borderWidth: '2px',
        };
      }
      
      if (variant === 'link') {
        return {
          ...style,
          color: `rgb(${colors.rgb})`,
          textDecorationColor: `rgb(${colors.rgb})`,
        };
      }
      
      return style;
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!useThemeColor) return;
      
      if (variant === 'default') {
        e.currentTarget.style.backgroundColor = `rgba(${colors.rgb}, 0.9)`;
        e.currentTarget.style.transform = 'scale(1.02)';
      } else if (variant === 'outline') {
        e.currentTarget.style.backgroundColor = `rgb(${colors.rgb})`;
        e.currentTarget.style.color = 'white';
        e.currentTarget.style.transform = 'scale(1.02)';
      }
      
      props.onMouseEnter?.(e);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!useThemeColor) return;
      
      e.currentTarget.style.transform = '';
      
      if (variant === 'default') {
        e.currentTarget.style.backgroundColor = `rgb(${colors.rgb})`;
      } else if (variant === 'outline') {
        e.currentTarget.style.backgroundColor = '';
        e.currentTarget.style.color = `rgb(${colors.rgb})`;
      }
      
      props.onMouseLeave?.(e);
    };

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        style={getThemedStyle()}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </button>
    );
  }
);
ThemedButton.displayName = "ThemedButton";

export { ThemedButton, buttonVariants };