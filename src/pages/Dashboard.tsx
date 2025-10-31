import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
    color: 'text-purple-600'
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
    <div className="space-y-8 animate-fadeIn">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold gradient-text">
          안녕하세요! 교육 지원 AI입니다
        </h1>
        <p className="text-muted-foreground">
          오늘도 효과적인 교육 자료를 만들어보세요
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="card-hover">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.label}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className={stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                    {stat.change}
                  </span>
                  {' '}지난 주 대비
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">빠른 작업</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Card key={action.title} className="card-hover cursor-pointer group">
                <Link to={action.path}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Icon className={`h-8 w-8 ${action.color} group-hover:scale-110 transition-transform`} />
                      <div>
                        <CardTitle className="text-lg">{action.title}</CardTitle>
                        <CardDescription className="text-sm">
                          {action.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>최근 활동</CardTitle>
            <CardDescription>
              최근에 작업한 문서들을 확인하세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.status === 'completed' ? 'bg-green-500' :
                      activity.status === 'in-progress' ? 'bg-yellow-500' : 'bg-gray-400'
                    }`} />
                    <div>
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-muted-foreground">{activity.type}</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>시스템 상태</CardTitle>
            <CardDescription>
              AI 서비스 상태를 확인하세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>OpenAI API</span>
                </div>
                <span className="text-sm text-green-600">정상</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>토큰 사용량</span>
                </div>
                <span className="text-sm text-green-600">24%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  <span>저장 공간</span>
                </div>
                <span className="text-sm text-yellow-600">78%</span>
              </div>
            </div>
            <div className="mt-4">
              <Link to="/settings">
                <Button variant="outline" size="sm" className="w-full">
                  설정 관리
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}