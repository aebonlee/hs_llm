import { Link, useLocation } from 'react-router-dom';
import { 
  BookOpen, 
  FileText, 
  Users, 
  ClipboardList, 
  MessageCircle, 
  Settings,
  Home
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

  return (
    <nav className="glass-card sticky top-0 z-50 border-b border-white/20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-12">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
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
            <button className="btn-secondary text-sm">
              도움말
            </button>
            <div className="hidden md:flex items-center space-x-2 text-sm text-slate-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-medium">AI 준비 완료</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}