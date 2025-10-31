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
    color: 'text-blue-600'
  },
  {
    title: '루브릭 빌더',
    description: '평가 기준표 생성 및 관리',
    icon: ClipboardList,
    path: '/rubric',
    color: 'text-green-600'
  },
  {
    title: '과제 생성',
    description: '학습 목표에 맞는 과제 설계',
    icon: FileText,
    path: '/assignment',
    color: 'text-blue-600'
  },
  {
    title: '피드백 생성',
    description: '개인화된 학습 피드백 작성',
    icon: MessageCircle,
    path: '/feedback',
    color: 'text-orange-600'
  }
];

const recentActivities = [
  { title: '객체지향프로그래밍 루브릭', type: '루브릭', time: '2시간 전', status: 'completed' },
  { title: '데이터베이스 중간과제', type: '과제', time: '5시간 전', status: 'in-progress' },
  { title: '알고리즘 강의계획서', type: '강의계획서', time: '1일 전', status: 'completed' },
  { title: '웹개발 피드백', type: '피드백', time: '2일 전', status: 'pending' }
];

const stats = [
  { label: '생성된 문서', value: '24', icon: FileText, change: '+12%' },
  { label: '사용 시간', value: '8.2h', icon: Clock, change: '-5%' },
  { label: '완료율', value: '94%', icon: CheckCircle, change: '+3%' },
  { label: '활성 프로젝트', value: '7', icon: TrendingUp, change: '+2' }
];

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

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="stat-card animate-slideUp" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                  stat.change.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {stat.change}
                </span>
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          );
        })}
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
                      <div className={`p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 ${
                        action.color === 'text-blue-600' ? 'bg-gradient-to-br from-interactive-blue to-primary-hover' :
                        action.color === 'text-green-600' ? 'bg-gradient-to-br from-interactive-green to-success' :
                        action.color === 'text-blue-600' ? 'bg-gradient-to-br from-interactive-blue to-blue-600' :
                        'bg-gradient-to-br from-interactive-orange to-warning'
                      }`}>
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
          <div className="card-header border-b">
            <h3 className="card-title text-xl">최근 활동</h3>
            <p className="card-description">최근에 작업한 문서들을 확인하세요</p>
          </div>
          <div className="card-content">
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors duration-200">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      activity.status === 'completed' ? 'bg-success' :
                      activity.status === 'in-progress' ? 'bg-warning' : 'bg-muted-foreground'
                    }`} />
                    <div>
                      <p className="font-medium text-card-foreground">{activity.title}</p>
                      <p className="text-sm text-muted-foreground">{activity.type}</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header border-b">
            <h3 className="card-title text-xl">시스템 상태</h3>
            <p className="card-description">AI 서비스 상태를 확인하세요</p>
          </div>
          <div className="card-content">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 border border-green-200 transition-all duration-200 hover:scale-101">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="font-medium text-green-900">OpenAI API</span>
                </div>
                <span className="text-sm font-medium text-green-700 bg-green-100 px-2 py-1 rounded-full">정상</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50 border border-blue-200 transition-all duration-200 hover:scale-101">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span className="font-medium text-blue-900">토큰 사용량</span>
                </div>
                <span className="text-sm font-medium text-blue-700 bg-blue-100 px-2 py-1 rounded-full">24%</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted border transition-all duration-200 hover:scale-101">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium text-card-foreground">저장 공간</span>
                </div>
                <span className="text-sm font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">78%</span>
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