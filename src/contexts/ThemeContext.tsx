import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'light' | 'dark';
export type ThemeColor = 'color-1' | 'color-2' | 'color-3' | 'color-4' | 'color-5';

interface ThemeConfig {
  mode: ThemeMode;
  color: ThemeColor;
}

interface ThemeContextType {
  theme: ThemeConfig;
  setThemeMode: (mode: ThemeMode) => void;
  setThemeColor: (color: ThemeColor) => void;
  getAccentColors: () => { 
    from: string; 
    to: string; 
    main: string; 
    hover: string; 
    text: string; 
    border: string;
    rgb: string;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const colorSchemes = {
  'color-1': {
    // #ec1839 - Red/Pink
    light: { 
      from: 'from-[#ec1839]', 
      to: 'to-[#d11530]', 
      main: 'bg-[#ec1839]',
      hover: 'hover:bg-[#ec1839]',
      text: 'text-[#ec1839]',
      border: 'border-[#ec1839]',
      rgb: '236, 24, 57'
    },
    dark: { 
      from: 'from-[#ec1839]', 
      to: 'to-[#d11530]', 
      main: 'bg-[#ec1839]',
      hover: 'hover:bg-[#ec1839]',
      text: 'text-[#ec1839]',
      border: 'border-[#ec1839]',
      rgb: '236, 24, 57'
    }
  },
  'color-2': {
    // #fa5b0f - Orange
    light: { 
      from: 'from-[#fa5b0f]', 
      to: 'to-[#e5520d]', 
      main: 'bg-[#fa5b0f]',
      hover: 'hover:bg-[#fa5b0f]',
      text: 'text-[#fa5b0f]',
      border: 'border-[#fa5b0f]',
      rgb: '250, 91, 15'
    },
    dark: { 
      from: 'from-[#fa5b0f]', 
      to: 'to-[#e5520d]', 
      main: 'bg-[#fa5b0f]',
      hover: 'hover:bg-[#fa5b0f]',
      text: 'text-[#fa5b0f]',
      border: 'border-[#fa5b0f]',
      rgb: '250, 91, 15'
    }
  },
  'color-3': {
    // #37b182 - Green
    light: { 
      from: 'from-[#37b182]', 
      to: 'to-[#2e9970]', 
      main: 'bg-[#37b182]',
      hover: 'hover:bg-[#37b182]',
      text: 'text-[#37b182]',
      border: 'border-[#37b182]',
      rgb: '55, 177, 130'
    },
    dark: { 
      from: 'from-[#37b182]', 
      to: 'to-[#2e9970]', 
      main: 'bg-[#37b182]',
      hover: 'hover:bg-[#37b182]',
      text: 'text-[#37b182]',
      border: 'border-[#37b182]',
      rgb: '55, 177, 130'
    }
  },
  'color-4': {
    // #1854b4 - Blue
    light: { 
      from: 'from-[#1854b4]', 
      to: 'to-[#154a9e]', 
      main: 'bg-[#1854b4]',
      hover: 'hover:bg-[#1854b4]',
      text: 'text-[#1854b4]',
      border: 'border-[#1854b4]',
      rgb: '24, 84, 180'
    },
    dark: { 
      from: 'from-[#1854b4]', 
      to: 'to-[#154a9e]', 
      main: 'bg-[#1854b4]',
      hover: 'hover:bg-[#1854b4]',
      text: 'text-[#1854b4]',
      border: 'border-[#1854b4]',
      rgb: '24, 84, 180'
    }
  },
  'color-5': {
    // #f021b2 - Magenta
    light: { 
      from: 'from-[#f021b2]', 
      to: 'to-[#d91e9e]', 
      main: 'bg-[#f021b2]',
      hover: 'hover:bg-[#f021b2]',
      text: 'text-[#f021b2]',
      border: 'border-[#f021b2]',
      rgb: '240, 33, 178'
    },
    dark: { 
      from: 'from-[#f021b2]', 
      to: 'to-[#d91e9e]', 
      main: 'bg-[#f021b2]',
      hover: 'hover:bg-[#f021b2]',
      text: 'text-[#f021b2]',
      border: 'border-[#f021b2]',
      rgb: '240, 33, 178'
    }
  }
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeConfig>(() => {
    const savedTheme = localStorage.getItem('hs-llm-theme');
    if (savedTheme) {
      return JSON.parse(savedTheme);
    }
    return { mode: 'light', color: 'color-1' };
  });

  useEffect(() => {
    // Apply dark mode class to document
    if (theme.mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Save theme to localStorage
    localStorage.setItem('hs-llm-theme', JSON.stringify(theme));
  }, [theme]);

  const setThemeMode = (mode: ThemeMode) => {
    setTheme(prev => ({ ...prev, mode }));
  };

  const setThemeColor = (color: ThemeColor) => {
    setTheme(prev => ({ ...prev, color }));
  };

  const getAccentColors = () => {
    const scheme = colorSchemes[theme.color][theme.mode];
    return { 
      from: scheme.from, 
      to: scheme.to, 
      main: scheme.main,
      hover: scheme.hover,
      text: scheme.text,
      border: scheme.border,
      rgb: scheme.rgb
    };
  };

  return (
    <ThemeContext.Provider value={{ theme, setThemeMode, setThemeColor, getAccentColors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}