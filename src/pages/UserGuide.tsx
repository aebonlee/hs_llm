import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageTitle } from '@/components/ui/PageTitle';
import { 
  BookOpen, 
  Key, 
  Sparkles, 
  FileText, 
  Download,
  HelpCircle,
  ExternalLink,
  Copy,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  Zap,
  Shield,
  DollarSign,
  Globe,
  Settings,
  MessageCircle,
  ClipboardList
} from 'lucide-react';

export function UserGuide() {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('getting-started');

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const sections = [
    { id: 'getting-started', title: '시작하기', icon: Zap },
    { id: 'api-setup', title: 'API 키 설정', icon: Key },
    { id: 'features', title: '주요 기능', icon: Sparkles },
    { id: 'usage-tips', title: '사용 팁', icon: HelpCircle },
    { id: 'pricing', title: '비용 안내', icon: DollarSign },
    { id: 'security', title: '보안 및 개인정보', icon: Shield },
    { id: 'faq', title: '자주 묻는 질문', icon: MessageCircle }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      <PageTitle
        icon={BookOpen}
        title="사용 가이드"
        description="Teaching AI 플랫폼의 모든 기능을 마스터하세요"
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle className="text-base">목차</CardTitle>
            </CardHeader>
            <CardContent className="p-2">
              <nav className="space-y-1">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${
                        activeSection === section.id
                          ? 'bg-blue-50 text-blue-700 font-medium'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{section.title}</span>
                      {activeSection === section.id && (
                        <ChevronRight className="h-3 w-3 ml-auto" />
                      )}
                    </button>
                  );
                })}
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Getting Started Section */}
          {activeSection === 'getting-started' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-yellow-500" />
                    빠른 시작 가이드
                  </CardTitle>
                  <CardDescription>
                    5분 안에 Teaching AI를 시작하세요
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                        1
                      </div>
                      <h4 className="font-semibold mb-1">API 키 발급</h4>
                      <p className="text-sm text-gray-600">OpenAI에서 API 키를 발급받으세요</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                        2
                      </div>
                      <h4 className="font-semibold mb-1">키 설정</h4>
                      <p className="text-sm text-gray-600">설정 페이지에서 API 키를 입력하세요</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                        3
                      </div>
                      <h4 className="font-semibold mb-1">사용 시작</h4>
                      <p className="text-sm text-gray-600">원하는 도구를 선택하여 시작하세요</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Globe className="h-5 w-5 text-blue-600" />
                      Teaching AI로 할 수 있는 일
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">강의계획서 자동 생성</p>
                          <p className="text-xs text-gray-600">15주차 완벽한 커리큘럼</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">루브릭 평가표 작성</p>
                          <p className="text-xs text-gray-600">공정한 평가 기준</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">과제 및 시험 설계</p>
                          <p className="text-xs text-gray-600">학습목표 연계</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">맞춤형 피드백 생성</p>
                          <p className="text-xs text-gray-600">개인화된 학습 지도</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* API Setup Section */}
          {activeSection === 'api-setup' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Key className="h-5 w-5 text-blue-600" />
                    OpenAI API 키 설정 가이드
                  </CardTitle>
                  <CardDescription>
                    단계별로 따라하며 API 키를 설정하세요
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Step by step guide */}
                  <div className="space-y-4">
                    {/* Step 1 */}
                    <div className="flex gap-4 p-4 border rounded-lg hover:border-blue-300 transition-colors">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                          1
                        </div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <h4 className="font-semibold">OpenAI 계정 생성</h4>
                        <p className="text-sm text-gray-600">
                          OpenAI 플랫폼에 접속하여 무료 계정을 생성합니다.
                        </p>
                        <a
                          href="https://platform.openai.com/signup"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
                        >
                          OpenAI 가입 페이지
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex gap-4 p-4 border rounded-lg hover:border-blue-300 transition-colors">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                          2
                        </div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <h4 className="font-semibold">API Keys 페이지 접속</h4>
                        <p className="text-sm text-gray-600">
                          로그인 후 API Keys 메뉴로 이동합니다.
                        </p>
                        <a
                          href="https://platform.openai.com/api-keys"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
                        >
                          API Keys 페이지
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex gap-4 p-4 border rounded-lg hover:border-blue-300 transition-colors">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                          3
                        </div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <h4 className="font-semibold">새 API 키 생성</h4>
                        <p className="text-sm text-gray-600">
                          "Create new secret key" 버튼을 클릭합니다.
                        </p>
                        <div className="bg-gray-50 rounded p-3">
                          <div className="flex items-center justify-between">
                            <code className="text-sm font-mono">Teaching-AI-Key</code>
                            <button
                              onClick={() => handleCopy('Teaching-AI-Key', 'key-name')}
                              className="p-1 hover:bg-gray-200 rounded"
                            >
                              {copiedText === 'key-name' ? (
                                <CheckCircle className="h-4 w-4 text-green-600" />
                              ) : (
                                <Copy className="h-4 w-4 text-gray-500" />
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex gap-4 p-4 border rounded-lg hover:border-blue-300 transition-colors">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                          4
                        </div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <h4 className="font-semibold">API 키 복사</h4>
                        <p className="text-sm text-gray-600">
                          생성된 키를 복사합니다.
                        </p>
                        <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                          <div className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-yellow-600 mt-0.5" />
                            <p className="text-xs text-yellow-800">
                              <strong>중요:</strong> 키는 한 번만 표시됩니다. 반드시 안전한 곳에 저장하세요!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="flex gap-4 p-4 border rounded-lg hover:border-green-300 transition-colors bg-green-50">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                          5
                        </div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <h4 className="font-semibold">Teaching AI에 키 입력</h4>
                        <p className="text-sm text-gray-600">
                          설정 페이지에서 복사한 API 키를 입력하고 저장합니다.
                        </p>
                        <a
                          href="#/settings"
                          className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
                        >
                          설정 페이지로 이동
                          <ChevronRight className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* API Key Format Info */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">API 키 형식</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">올바른 형식: <code className="font-mono bg-white px-2 py-1 rounded">sk-...</code></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-red-500" />
                        <span className="text-sm">잘못된 형식: 공백이나 특수문자 포함</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Features Section */}
          {activeSection === 'features' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-purple-600" />
                    주요 기능 소개
                  </CardTitle>
                  <CardDescription>
                    Teaching AI의 강력한 기능들을 알아보세요
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Feature Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Syllabus Generator */}
                    <div className="border rounded-lg p-4 hover:border-blue-300 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <BookOpen className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">강의계획서 생성</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            과목 정보를 입력하면 15주차 전체 강의계획서를 자동으로 생성합니다.
                          </p>
                          <div className="space-y-1">
                            <p className="text-xs text-gray-500">✓ Bloom's Taxonomy 기반</p>
                            <p className="text-xs text-gray-500">✓ 학습목표 자동 설정</p>
                            <p className="text-xs text-gray-500">✓ 평가방법 제안</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Rubric Builder */}
                    <div className="border rounded-lg p-4 hover:border-blue-300 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <ClipboardList className="h-5 w-5 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">루브릭 빌더</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            체계적인 평가 기준표를 쉽게 만들 수 있습니다.
                          </p>
                          <div className="space-y-1">
                            <p className="text-xs text-gray-500">✓ 4단계 평가 수준</p>
                            <p className="text-xs text-gray-500">✓ 가중치 설정</p>
                            <p className="text-xs text-gray-500">✓ 자동 점수 계산</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Assignment Generator */}
                    <div className="border rounded-lg p-4 hover:border-blue-300 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <FileText className="h-5 w-5 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">과제 생성기</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            학습목표에 맞는 과제를 자동으로 설계합니다.
                          </p>
                          <div className="space-y-1">
                            <p className="text-xs text-gray-500">✓ 난이도 조절</p>
                            <p className="text-xs text-gray-500">✓ 평가 기준 포함</p>
                            <p className="text-xs text-gray-500">✓ 제출 가이드라인</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Feedback Generator */}
                    <div className="border rounded-lg p-4 hover:border-blue-300 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-orange-100 rounded-lg">
                          <MessageCircle className="h-5 w-5 text-orange-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">피드백 생성기</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            학생별 맞춤형 피드백을 작성합니다.
                          </p>
                          <div className="space-y-1">
                            <p className="text-xs text-gray-500">✓ 3가지 톤 선택</p>
                            <p className="text-xs text-gray-500">✓ 구체적 개선점</p>
                            <p className="text-xs text-gray-500">✓ 동기부여 메시지</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Export Options */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Download className="h-5 w-5 text-gray-600" />
                      다양한 내보내기 옵션
                    </h4>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="text-center">
                        <div className="p-3 bg-white rounded-lg border mb-2">
                          <FileText className="h-8 w-8 text-red-500 mx-auto" />
                        </div>
                        <p className="text-sm font-medium">PDF</p>
                        <p className="text-xs text-gray-500">인쇄용 문서</p>
                      </div>
                      <div className="text-center">
                        <div className="p-3 bg-white rounded-lg border mb-2">
                          <FileText className="h-8 w-8 text-blue-500 mx-auto" />
                        </div>
                        <p className="text-sm font-medium">Markdown</p>
                        <p className="text-xs text-gray-500">편집 가능</p>
                      </div>
                      <div className="text-center">
                        <div className="p-3 bg-white rounded-lg border mb-2">
                          <FileText className="h-8 w-8 text-green-500 mx-auto" />
                        </div>
                        <p className="text-sm font-medium">JSON</p>
                        <p className="text-xs text-gray-500">데이터 활용</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Usage Tips Section */}
          {activeSection === 'usage-tips' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-green-600" />
                    사용 팁 & 베스트 프랙티스
                  </CardTitle>
                  <CardDescription>
                    Teaching AI를 더 효과적으로 사용하는 방법
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold mb-1">💡 구체적인 정보 입력</h4>
                      <p className="text-sm text-gray-600">
                        과목명, 학습목표, 대상 학생 수준 등을 구체적으로 입력할수록 더 정확한 결과를 얻을 수 있습니다.
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold mb-1">💡 결과물 검토 및 수정</h4>
                      <p className="text-sm text-gray-600">
                        AI가 생성한 내용을 반드시 검토하고, 필요에 따라 수정하여 사용하세요. 내보내기 전에 편집이 가능합니다.
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold mb-1">💡 템플릿으로 저장</h4>
                      <p className="text-sm text-gray-600">
                        자주 사용하는 설정은 JSON으로 내보낸 후 템플릿으로 활용할 수 있습니다.
                      </p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold mb-1">💡 모델 선택</h4>
                      <p className="text-sm text-gray-600">
                        빠른 결과가 필요하면 GPT-3.5를, 높은 품질이 필요하면 GPT-4를 선택하세요.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-3">🚀 생산성 향상 팁</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>여러 버전을 생성해보고 가장 적합한 것을 선택하세요.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>생성된 내용을 기반으로 추가 요청을 할 수 있습니다.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>PDF로 내보내기 전에 미리보기를 확인하세요.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>정기적으로 작업 내용을 백업하세요.</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Pricing Section */}
          {activeSection === 'pricing' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-green-600" />
                    비용 안내
                  </CardTitle>
                  <CardDescription>
                    OpenAI API 사용료와 예상 비용
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Teaching AI 플랫폼</h4>
                    <p className="text-2xl font-bold text-green-600 mb-1">무료</p>
                    <p className="text-sm text-gray-600">플랫폼 사용료는 없습니다.</p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">OpenAI API 요금</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border rounded-lg">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-2 text-left text-sm font-medium">모델</th>
                            <th className="px-4 py-2 text-left text-sm font-medium">입력</th>
                            <th className="px-4 py-2 text-left text-sm font-medium">출력</th>
                            <th className="px-4 py-2 text-left text-sm font-medium">특징</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          <tr>
                            <td className="px-4 py-3 font-medium">GPT-3.5 Turbo</td>
                            <td className="px-4 py-3 text-sm">$0.001/1K 토큰</td>
                            <td className="px-4 py-3 text-sm">$0.002/1K 토큰</td>
                            <td className="px-4 py-3 text-sm text-gray-600">빠르고 경제적</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-medium">GPT-4</td>
                            <td className="px-4 py-3 text-sm">$0.03/1K 토큰</td>
                            <td className="px-4 py-3 text-sm">$0.06/1K 토큰</td>
                            <td className="px-4 py-3 text-sm text-gray-600">높은 품질</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-3">💰 예상 사용 비용</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>가벼운 사용 (월 50개 문서)</span>
                        <span className="font-semibold">약 $5-10</span>
                      </div>
                      <div className="flex justify-between">
                        <span>보통 사용 (월 200개 문서)</span>
                        <span className="font-semibold">약 $20-30</span>
                      </div>
                      <div className="flex justify-between">
                        <span>활발한 사용 (월 500개 문서)</span>
                        <span className="font-semibold">약 $50-80</span>
                      </div>
                    </div>
                  </div>

                  <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-yellow-600" />
                      비용 절약 팁
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• 신규 가입 시 $5 무료 크레딧 제공</li>
                      <li>• GPT-3.5 사용으로 비용 80% 절감</li>
                      <li>• 불필요한 재생성 최소화</li>
                      <li>• OpenAI 대시보드에서 사용량 모니터링</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Security Section */}
          {activeSection === 'security' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    보안 및 개인정보 보호
                  </CardTitle>
                  <CardDescription>
                    귀하의 데이터는 안전하게 보호됩니다
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <h4 className="font-semibold">로컬 저장</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        모든 데이터는 브라우저에 로컬로 저장되며, 서버로 전송되지 않습니다.
                      </p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <h4 className="font-semibold">암호화</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        API 키는 암호화되어 저장되며, 복호화는 브라우저에서만 이루어집니다.
                      </p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <h4 className="font-semibold">서버리스</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Teaching AI는 서버리스 아키텍처로 개인정보를 수집하지 않습니다.
                      </p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <h4 className="font-semibold">오픈소스</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        모든 코드는 GitHub에 공개되어 있어 투명하게 검증 가능합니다.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-3">🔐 API 키 보안 가이드</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">✓</span>
                        <span>API 키를 절대 다른 사람과 공유하지 마세요.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">✓</span>
                        <span>정기적으로 API 키를 재생성하세요.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">✓</span>
                        <span>사용량 한도를 설정하여 과도한 요금을 방지하세요.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">✓</span>
                        <span>공용 컴퓨터에서는 사용 후 반드시 로그아웃하세요.</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* FAQ Section */}
          {activeSection === 'faq' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-purple-600" />
                    자주 묻는 질문
                  </CardTitle>
                  <CardDescription>
                    궁금한 점을 빠르게 해결하세요
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <details className="border rounded-lg">
                    <summary className="px-4 py-3 cursor-pointer hover:bg-gray-50 font-medium">
                      Q: Teaching AI는 정말 무료인가요?
                    </summary>
                    <div className="px-4 py-3 text-sm text-gray-700 border-t">
                      네, Teaching AI 플랫폼 자체는 완전 무료입니다. 단, AI 기능을 사용하기 위한 OpenAI API 요금은 별도로 발생합니다.
                    </div>
                  </details>

                  <details className="border rounded-lg">
                    <summary className="px-4 py-3 cursor-pointer hover:bg-gray-50 font-medium">
                      Q: 생성된 콘텐츠의 저작권은 누구에게 있나요?
                    </summary>
                    <div className="px-4 py-3 text-sm text-gray-700 border-t">
                      생성된 모든 콘텐츠의 저작권은 사용자에게 있습니다. 자유롭게 수정하고 활용하실 수 있습니다.
                    </div>
                  </details>

                  <details className="border rounded-lg">
                    <summary className="px-4 py-3 cursor-pointer hover:bg-gray-50 font-medium">
                      Q: 오프라인에서도 사용할 수 있나요?
                    </summary>
                    <div className="px-4 py-3 text-sm text-gray-700 border-t">
                      현재는 AI 기능 사용을 위해 인터넷 연결이 필요합니다. 향후 오프라인 기능을 추가할 예정입니다.
                    </div>
                  </details>

                  <details className="border rounded-lg">
                    <summary className="px-4 py-3 cursor-pointer hover:bg-gray-50 font-medium">
                      Q: 한 번에 생성할 수 있는 문서 수에 제한이 있나요?
                    </summary>
                    <div className="px-4 py-3 text-sm text-gray-700 border-t">
                      Teaching AI는 제한이 없지만, OpenAI API의 rate limit이 적용될 수 있습니다. 일반적인 사용에는 문제가 없습니다.
                    </div>
                  </details>

                  <details className="border rounded-lg">
                    <summary className="px-4 py-3 cursor-pointer hover:bg-gray-50 font-medium">
                      Q: 다른 언어도 지원하나요?
                    </summary>
                    <div className="px-4 py-3 text-sm text-gray-700 border-t">
                      현재는 한국어를 기본으로 지원하며, 영어 콘텐츠도 생성 가능합니다. 추가 언어 지원은 개발 중입니다.
                    </div>
                  </details>

                  <details className="border rounded-lg">
                    <summary className="px-4 py-3 cursor-pointer hover:bg-gray-50 font-medium">
                      Q: API 키가 유출되면 어떻게 하나요?
                    </summary>
                    <div className="px-4 py-3 text-sm text-gray-700 border-t">
                      즉시 OpenAI 대시보드에서 해당 키를 삭제하고 새 키를 생성하세요. 유출된 키는 즉시 비활성화됩니다.
                    </div>
                  </details>

                  <details className="border rounded-lg">
                    <summary className="px-4 py-3 cursor-pointer hover:bg-gray-50 font-medium">
                      Q: 기술 지원은 어떻게 받을 수 있나요?
                    </summary>
                    <div className="px-4 py-3 text-sm text-gray-700 border-t">
                      GitHub Issues 페이지에서 문의하거나, 이메일로 연락주시면 도움을 드리겠습니다.
                    </div>
                  </details>
                </CardContent>
              </Card>

              {/* Support Info */}
              <Card>
                <CardHeader>
                  <CardTitle>추가 도움이 필요하신가요?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <ExternalLink className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub Issues</p>
                      <a href="https://github.com/aebonlee/hs_llm/issues" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                        문제 제보 및 기능 제안
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Settings className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium">개발 문서</p>
                      <a href="https://github.com/aebonlee/hs_llm/tree/main/Dev_md" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                        상세한 개발 문서 확인
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}