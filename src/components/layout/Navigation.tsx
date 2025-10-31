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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="glass-card sticky top-0 z-50 border-b border-white/20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-12">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="p-2 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Users className="h-7 w-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold gradient-text">
                  Teaching AI
                </span>
                <div className="text-xs text-slate-500 font-medium">
                  교육 지원 플랫폼
                </div>
              </div>
            </Link>
            
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link key={item.path} to={item.path}>
                    <div className={`nav-item ${isActive ? 'active' : ''} flex items-center space-x-2`}>
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="btn-secondary text-sm hidden md:block">
              도움말
            </button>
            <div className="hidden md:flex items-center space-x-2 text-sm text-slate-600">
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
              <span className="font-medium">AI 준비 완료</span>
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
              aria-label="메뉴 열기"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-slate-700" />
              ) : (
                <Menu className="h-6 w-6 text-slate-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-sm rounded-lg mt-2 border border-white/20">
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
                        ? 'bg-gray-100 text-gray-800'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    } group flex items-center px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200`}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </Link>
                );
              })}
              
              <div className="border-t border-slate-200 pt-3 mt-3">
                <button className="w-full text-left px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors duration-200">
                  도움말
                </button>
                <div className="flex items-center px-3 py-2 text-sm text-slate-600">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse mr-2"></div>
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