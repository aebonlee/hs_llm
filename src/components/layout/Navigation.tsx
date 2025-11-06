import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { 
  BookOpen, 
  FileText, 
  Users, 
  ClipboardList, 
  MessageCircle, 
  Settings,
  Home,
  Menu,
  X
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { ThemeToggle } from '@/components/ThemeToggle';

const navItems = [
  { path: '/', label: '대시보드', icon: Home },
  { path: '/syllabus', label: '강의계획서', icon: BookOpen },
  { path: '/rubric', label: '루브릭', icon: ClipboardList },
  { path: '/assignment', label: '과제', icon: FileText },
  { path: '/feedback', label: '피드백', icon: MessageCircle },
  { path: '/settings', label: '설정', icon: Settings },
];

export function Navigation() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getAccentColors } = useTheme();
  const colors = getAccentColors();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-slate-900 sticky top-0 z-50 border-b border-slate-200 dark:border-slate-700 shadow-sm">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-12">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className={`p-2 bg-gradient-to-br ${colors.from} ${colors.to} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
                <Users className="h-7 w-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-slate-900 dark:text-white">
                  Teaching AI
                </span>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  한신대학교 교수혁신연구결과
                </div>
              </div>
            </Link>
            
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link key={item.path} to={item.path}>
                    <div className={`px-3 py-2 rounded-lg flex items-center space-x-2 text-sm font-medium transition-colors
                      ${isActive 
                        ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white' 
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'}`}>
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/guide" className="hidden md:block">
              <button className="btn-secondary text-sm">
                도움말
              </button>
            </Link>
            <div className="hidden md:flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
              <div className={`w-2 h-2 ${colors.main} rounded-full animate-pulse`}></div>
              <span className="font-medium">AI 준비 완료</span>
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
              aria-label="메뉴 열기"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-slate-700 dark:text-slate-300" />
              ) : (
                <Menu className="h-6 w-6 text-slate-700 dark:text-slate-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-slate-900 rounded-lg mt-2 border border-slate-200 dark:border-slate-700">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`${
                      isActive
                        ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                    } group flex items-center px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200`}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </Link>
                );
              })}
              
              <div className="border-t border-slate-200 dark:border-slate-700 pt-3 mt-3">
                <Link 
                  to="/guide"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors duration-200"
                >
                  도움말
                </Link>
                <div className="flex items-center px-3 py-2 text-sm text-slate-600 dark:text-slate-400">
                  <div className={`w-2 h-2 ${colors.main} rounded-full animate-pulse mr-2`}></div>
                  <span className="font-medium">AI 준비 완료</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}