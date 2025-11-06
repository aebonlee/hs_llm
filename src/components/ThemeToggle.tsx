import { Moon, Sun, Palette } from 'lucide-react';
import { useTheme, ThemeColor } from '@/contexts/ThemeContext';
import { useState } from 'react';

export function ThemeToggle() {
  const { theme, setThemeMode, setThemeColor } = useTheme();
  const [showColorPicker, setShowColorPicker] = useState(false);

  const colors: { value: ThemeColor; label: string; class: string; hex: string }[] = [
    { value: 'color-1', label: 'Color 1', class: 'bg-[#ec1839]', hex: '#ec1839' },
    { value: 'color-2', label: 'Color 2', class: 'bg-[#fa5b0f]', hex: '#fa5b0f' },
    { value: 'color-3', label: 'Color 3', class: 'bg-[#37b182]', hex: '#37b182' },
    { value: 'color-4', label: 'Color 4', class: 'bg-[#1854b4]', hex: '#1854b4' },
    { value: 'color-5', label: 'Color 5', class: 'bg-[#f021b2]', hex: '#f021b2' }
  ];

  return (
    <div className="flex items-center gap-2">
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setThemeMode(theme.mode === 'light' ? 'dark' : 'light')}
        className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
        aria-label="다크 모드 토글"
      >
        {theme.mode === 'light' ? (
          <Moon className="h-5 w-5 text-slate-700 dark:text-slate-300" />
        ) : (
          <Sun className="h-5 w-5 text-slate-700 dark:text-slate-300" />
        )}
      </button>

      {/* Color Theme Picker */}
      <div className="relative">
        <button
          onClick={() => setShowColorPicker(!showColorPicker)}
          className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
          aria-label="테마 색상 선택"
        >
          <Palette className="h-5 w-5 text-slate-700 dark:text-slate-300" />
        </button>

        {showColorPicker && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-10" 
              onClick={() => setShowColorPicker(false)}
            />
            
            {/* Color Picker Dropdown */}
            <div className="absolute right-0 mt-2 p-3 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 z-20">
              <div className="flex gap-2">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => {
                      setThemeColor(color.value);
                      setShowColorPicker(false);
                    }}
                    className={`w-10 h-10 rounded-full transition-all hover:scale-110 ${color.class} ${
                      theme.color === color.value 
                        ? 'ring-2 ring-offset-2 ring-slate-400' 
                        : ''
                    }`}
                    aria-label={color.label}
                    title={color.hex}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}