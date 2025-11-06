import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'light' | 'dark';
export type ThemeColor = 'ocean' | 'forest' | 'sunset' | 'royal' | 'minimal' | 'vibrant' | 'tech' | 'warm' | 'arctic';

interface ThemeConfig {
  mode: ThemeMode;
  color: ThemeColor;
}

interface ThemeContextType {
  theme: ThemeConfig;
  setThemeMode: (mode: ThemeMode) => void;
  setThemeColor: (color: ThemeColor) => void;
  getAccentColors: () => { from: string; to: string; main: string };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const colorSchemes = {
  ocean: {
    light: { from: 'from-blue-500', to: 'to-blue-600', main: 'bg-blue-500' },
    dark: { from: 'from-blue-600', to: 'to-blue-700', main: 'bg-blue-600' }
  },
  forest: {
    light: { from: 'from-green-500', to: 'to-green-600', main: 'bg-green-500' },
    dark: { from: 'from-green-600', to: 'to-green-700', main: 'bg-green-600' }
  },
  sunset: {
    light: { from: 'from-orange-500', to: 'to-orange-600', main: 'bg-orange-500' },
    dark: { from: 'from-orange-600', to: 'to-amber-700', main: 'bg-orange-600' }
  },
  royal: {
    light: { from: 'from-purple-500', to: 'to-purple-600', main: 'bg-purple-500' },
    dark: { from: 'from-purple-600', to: 'to-purple-700', main: 'bg-purple-600' }
  },
  minimal: {
    light: { from: 'from-gray-500', to: 'to-gray-600', main: 'bg-gray-500' },
    dark: { from: 'from-gray-600', to: 'to-gray-700', main: 'bg-gray-600' }
  },
  vibrant: {
    light: { from: 'from-pink-500', to: 'to-pink-600', main: 'bg-pink-500' },
    dark: { from: 'from-pink-600', to: 'to-pink-700', main: 'bg-pink-600' }
  },
  tech: {
    light: { from: 'from-gray-700', to: 'to-gray-800', main: 'bg-gray-700' },
    dark: { from: 'from-gray-800', to: 'to-gray-900', main: 'bg-gray-800' }
  },
  warm: {
    light: { from: 'from-amber-700', to: 'to-amber-800', main: 'bg-amber-700' },
    dark: { from: 'from-amber-800', to: 'to-amber-900', main: 'bg-amber-800' }
  },
  arctic: {
    light: { from: 'from-gray-200', to: 'to-gray-300', main: 'bg-gray-200' },
    dark: { from: 'from-slate-400', to: 'to-slate-500', main: 'bg-slate-400' }
  }
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeConfig>(() => {
    const savedTheme = localStorage.getItem('hs-llm-theme');
    if (savedTheme) {
      return JSON.parse(savedTheme);
    }
    return { mode: 'light', color: 'tech' };
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
    return { from: scheme.from, to: scheme.to, main: scheme.main };
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