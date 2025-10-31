import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
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
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <Users className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold gradient-text">
                Teaching Assistant AI
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link key={item.path} to={item.path}>
                    <Button 
                      variant={isActive ? "default" : "ghost"}
                      size="sm"
                      className="flex items-center space-x-2"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Button>
                  </Link>
                );
              })}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              도움말
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}