import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  FileText, 
  ClipboardList, 
  MessageCircle, 
  TrendingUp,
  Clock,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

const quickActions = [
  {
    title: '강의계획서 생성',
    description: 'AI를 활용한 체계적인 강의계획서 작성',
    icon: BookOpen,
    path: '/syllabus',
    color: 'text-gray-600'
  },
  {
    title: '루브릭 빌더',
    description: '평가 기준표 생성 및 관리',
    icon: ClipboardList,
    path: '/rubric',
    color: 'text-gray-600'
  },
  {
    title: '과제 생성',
    description: '학습 목표에 맞는 과제 설계',
    icon: FileText,
    path: '/assignment',
    color: 'text-gray-600'
  },
  {
    title: '피드백 생성',
    description: '개인화된 학습 피드백 작성',
    icon: MessageCircle,
    path: '/feedback',
    color: 'text-gray-600'
  }
];

const recentActivities = [];

const stats = [];

export function Dashboard() {
  return (
    <div className="space-y-10 animate-fadeIn">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-12">
        <h1 className="text-5xl font-bold gradient-text tracking-tight">
          교육 지원 AI 플랫폼
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto text-balance">
          AI의 힘으로 더 나은 교육 경험을 만들어보세요
        </p>
      </div>


      {/* Quick Actions */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-2">빠른 작업</h2>
          <p className="text-muted-foreground">원하는 도구를 선택하여 시작하세요</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Link key={action.title} to={action.path} className="block animate-scaleIn" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="option-card h-full p-6 group">
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-700 to-gray-800">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground text-lg group-hover:text-foreground transition-colors">{action.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-card-foreground transition-colors">{action.description}</p>
                    <div className="mt-4 text-primary font-medium group-hover:text-primary-hover transition-colors">
                      시작하기 →
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent Activities & System Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card">
          <div className="card-header mb-4">
            <h3 className="card-title text-xl">최근 활동</h3>
            <p className="card-description">최근에 작업한 문서들을 확인하세요</p>
          </div>
          <div className="card-content">
            <div className="flex items-center justify-center h-32 text-muted-foreground">
              <p>아직 생성된 문서가 없습니다. 위의 도구들을 사용하여 시작해보세요!</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header mb-4">
            <h3 className="card-title text-xl">시스템 상태</h3>
            <p className="card-description">AI 서비스 상태를 확인하세요</p>
          </div>
          <div className="card-content">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-200 transition-all duration-200 hover:scale-101">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="font-medium text-gray-900">준비 완료</span>
                </div>
                <span className="text-sm font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded-full">정상</span>
              </div>
            </div>
            <div className="mt-6">
              <Link to="/settings" className="block">
                <button className="w-full btn-secondary">
                  설정 관리
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}