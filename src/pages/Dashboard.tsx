import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  FileText, 
  ClipboardList, 
  MessageCircle,
  CheckCircle,
  Key,
  AlertTriangle,
  Settings
} from 'lucide-react';
import { useAppStore } from '@/store';
import { useTheme } from '@/contexts/ThemeContext';

const quickActions = [
  {
    title: '강의계획서 생성',
    description: 'AI를 활용한 체계적인 강의계획서 작성',
    icon: BookOpen,
    path: '/syllabus'
  },
  {
    title: '루브릭 빌더',
    description: '평가 기준표 생성 및 관리',
    icon: ClipboardList,
    path: '/rubric'
  },
  {
    title: '과제 생성',
    description: '학습 목표에 맞는 과제 설계',
    icon: FileText,
    path: '/assignment'
  },
  {
    title: '피드백 생성',
    description: '개인화된 학습 피드백 작성',
    icon: MessageCircle,
    path: '/feedback'
  }
];


export function Dashboard() {
  const { apiKey } = useAppStore();
  const hasApiKey = apiKey && apiKey.trim().length > 0;
  const { getAccentColors } = useTheme();
  const colors = getAccentColors();

  return (
    <div className="space-y-10 animate-fadeIn">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-12">
        <h1 className="text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
          Teaching AI
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-balance">
          한신대학교 교수혁신연구결과
        </p>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-balance">
          AI의 힘으로 더 나은 교육 경험을 만들어보세요
        </p>
      </div>

      {/* API Key Status */}
      {!hasApiKey && (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-500" />
            <div className="flex-1">
              <h3 className="font-medium text-yellow-800 dark:text-yellow-300">OpenAI API 키가 필요합니다</h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-400 mt-1">
                AI 기능을 사용하려면 OpenAI API 키를 설정해야 합니다. 
                모든 AI 기반 도구(강의계획서, 과제, 루브릭, 피드백 생성)를 사용할 수 있습니다.
              </p>
            </div>
            <Link to="/settings" className="flex-shrink-0">
              <button className="bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2">
                <Settings className="h-4 w-4" />
                <span>API 키 설정</span>
              </button>
            </Link>
          </div>
        </div>
      )}

      {hasApiKey && (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-500" />
            <div className="flex-1">
              <h3 className="font-medium text-green-800 dark:text-green-300">API 키 설정 완료</h3>
              <p className="text-sm text-green-700 dark:text-green-400 mt-1">
                OpenAI API 키가 설정되어 있습니다. 이제 모든 AI 기능을 사용할 수 있습니다.
              </p>
            </div>
            <Link to="/settings" className="flex-shrink-0">
              <button className="bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2">
                <Key className="h-4 w-4" />
                <span>설정 관리</span>
              </button>
            </Link>
          </div>
        </div>
      )}


      {/* Quick Actions */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">빠른 작업</h2>
          <p className="text-slate-600 dark:text-slate-400">원하는 도구를 선택하여 시작하세요</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Link key={action.title} to={action.path} className="block animate-scaleIn" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg h-full p-6 group hover:shadow-lg dark:hover:shadow-2xl transition-all duration-200">
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${colors.from} ${colors.to}`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white text-lg group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{action.title}</h3>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">{action.description}</p>
                    <div className="mt-4 text-slate-700 dark:text-slate-300 font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
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
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">최근 활동</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">최근에 작업한 문서들을 확인하세요</p>
          </div>
          <div className="flex items-center justify-center h-32 text-slate-500 dark:text-slate-400">
            <p>아직 생성된 문서가 없습니다. 위의 도구들을 사용하여 시작해보세요!</p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">시스템 상태</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">AI 서비스 상태를 확인하세요</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 transition-all duration-200">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-500" />
                <span className="font-medium text-slate-900 dark:text-white">준비 완료</span>
              </div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">정상</span>
            </div>
          </div>
          <div className="mt-6">
            <Link to="/settings" className="block">
              <button className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 rounded-lg font-medium transition-colors">
                설정 관리
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}