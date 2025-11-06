import { Moon, Sun, Palette } from 'lucide-react';
import { useTheme, ThemeColor } from '@/contexts/ThemeContext';
import { useState } from 'react';

export function ThemeToggle() {
  const { theme, setThemeMode, setThemeColor } = useTheme();
  const [showColorPicker, setShowColorPicker] = useState(false);

  const colors: { value: ThemeColor; label: string; class: string; description: string }[] = [
    { value: 'ocean', label: 'Ocean', class: 'bg-blue-500', description: '신뢰감 있는 파란색' },
    { value: 'forest', label: 'Forest', class: 'bg-green-500', description: '자연스러운 초록색' },
    { value: 'sunset', label: 'Sunset', class: 'bg-orange-500', description: '활기찬 주황색' },
    { value: 'royal', label: 'Royal', class: 'bg-purple-500', description: '고급스러운 보라색' },
    { value: 'minimal', label: 'Minimal', class: 'bg-gray-500', description: '미니멀 플랫' },
    { value: 'vibrant', label: 'Vibrant', class: 'bg-pink-500', description: '트렌디한 핑크' },
    { value: 'tech', label: 'Tech', class: 'bg-gray-700', description: '테크 모노' },
    { value: 'warm', label: 'Warm', class: 'bg-amber-700', description: '따뜻한 브라운' },
    { value: 'arctic', label: 'Arctic', class: 'bg-gray-200', description: '깔끔한 화이트' }
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
            <div className="absolute right-0 mt-2 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 z-20 w-80">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">테마 색상 선택</p>
              <div className="grid grid-cols-3 gap-2">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => {
                      setThemeColor(color.value);
                      setShowColorPicker(false);
                    }}
                    className={`p-2 rounded-lg border transition-all hover:scale-105 ${
                      theme.color === color.value 
                        ? 'ring-2 ring-offset-2 ring-slate-400 border-slate-400' 
                        : 'border-slate-200 dark:border-slate-600 hover:border-slate-300'
                    }`}
                    aria-label={color.label}
                  >
                    <div className={`w-full h-8 rounded ${color.class} mb-1`} />
                    <p className="text-xs font-medium text-slate-700 dark:text-slate-300">{color.label}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{color.description}</p>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}