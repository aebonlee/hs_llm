import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SimpleButton as Button } from '@/components/ui/simple-button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PageTitle } from '@/components/ui/PageTitle';
import { useAppStore } from '@/store';
import { FileText, Download, Save, Sparkles, Clock, Users } from 'lucide-react';

export function AssignmentGenerator() {
  const { generateContent, isGenerating, generatedContent, exportContent } = useAppStore();
  const [formData, setFormData] = useState({
    title: '',
    type: 'individual',
    difficulty: 'medium',
    duration: '1주',
    objectives: '',
    description: '',
    requirements: '',
    evaluationCriteria: '',
    resources: '',
    deliverables: '',
    courseContext: '',
    bloomLevel: 'application'
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGenerate = async () => {
    console.log('과제 생성 버튼 클릭!', formData);
    console.log('title:', formData.title);
    
    try {
      const { apiKey } = useAppStore.getState();
      if (!apiKey || apiKey.trim() === '') {
        alert('API 키가 설정되지 않았습니다. 설정 페이지에서 OpenAI API 키를 입력해주세요.');
        return;
      }
      await generateContent('assignment', formData);
    } catch (error) {
      console.error('과제 생성 실패:', error);
      alert('과제 생성 중 오류가 발생했습니다. API 키를 확인하거나 다시 시도해주세요.');
    }
  };

  const handleExport = (format: string) => {
    exportContent(format);
  };

  const difficultyOptions = [
    { value: 'easy', label: '쉬움', color: 'text-gray-500' },
    { value: 'medium', label: '보통', color: 'text-gray-600' },
    { value: 'hard', label: '어려움', color: 'text-gray-700' }
  ];

  const bloomLevels = [
    { value: 'knowledge', label: '지식 (Knowledge)' },
    { value: 'comprehension', label: '이해 (Comprehension)' },
    { value: 'application', label: '적용 (Application)' },
    { value: 'analysis', label: '분석 (Analysis)' },
    { value: 'synthesis', label: '종합 (Synthesis)' },
    { value: 'evaluation', label: '평가 (Evaluation)' }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      <PageTitle 
        icon={FileText}
        title="과제 생성"
        description="학습 목표에 맞는 과제 설계"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>기본 정보</CardTitle>
              <CardDescription>과제의 기본 정보를 입력하세요</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">과제 제목</label>
                <Input
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="예: 웹 애플리케이션 개발 프로젝트"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">과제 유형</label>
                  <select 
                    value={formData.type}
                    onChange={(e) => handleInputChange('type', e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="individual">개인 과제</option>
                    <option value="group">팀 프로젝트</option>
                    <option value="research">연구 과제</option>
                    <option value="presentation">발표 과제</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">수행 기간</label>
                  <Input
                    value={formData.duration}
                    onChange={(e) => handleInputChange('duration', e.target.value)}
                    placeholder="예: 2주"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">난이도</label>
                <div className="grid grid-cols-3 gap-2 mt-1">
                  {difficultyOptions.map((option) => (
                    <Button
                      key={option.value}
                      variant={formData.difficulty === option.value ? "primary" : "outline"}
                      size="sm"
                      onClick={() => handleInputChange('difficulty', option.value)}
                      className={option.color}
                    >
                      {option.label}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Bloom의 분류 수준</label>
                <select 
                  value={formData.bloomLevel}
                  onChange={(e) => handleInputChange('bloomLevel', e.target.value)}
                  className="w-full p-2 border rounded-md"
                >
                  {bloomLevels.map((level) => (
                    <option key={level.value} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>상세 정보</CardTitle>
              <CardDescription>과제의 상세 요구사항을 입력하세요</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">학습 목표</label>
                <Textarea
                  value={formData.objectives}
                  onChange={(e) => handleInputChange('objectives', e.target.value)}
                  placeholder="이 과제를 통해 달성하고자 하는 학습 목표를 작성하세요"
                  rows={3}
                />
              </div>

              <div>
                <label className="text-sm font-medium">과제 설명</label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="과제의 전체적인 내용과 목적을 설명하세요"
                  rows={4}
                />
              </div>

              <div>
                <label className="text-sm font-medium">요구사항</label>
                <Textarea
                  value={formData.requirements}
                  onChange={(e) => handleInputChange('requirements', e.target.value)}
                  placeholder="과제 수행을 위한 구체적인 요구사항을 나열하세요"
                  rows={3}
                />
              </div>

              <div>
                <label className="text-sm font-medium">제출물</label>
                <Textarea
                  value={formData.deliverables}
                  onChange={(e) => handleInputChange('deliverables', e.target.value)}
                  placeholder="제출해야 할 결과물을 명시하세요"
                  rows={2}
                />
              </div>

              <div>
                <label className="text-sm font-medium">평가 기준</label>
                <Textarea
                  value={formData.evaluationCriteria}
                  onChange={(e) => handleInputChange('evaluationCriteria', e.target.value)}
                  placeholder="과제 평가 기준과 배점을 작성하세요"
                  rows={3}
                />
              </div>

              <div>
                <label className="text-sm font-medium">참고 자료</label>
                <Textarea
                  value={formData.resources}
                  onChange={(e) => handleInputChange('resources', e.target.value)}
                  placeholder="과제 수행에 도움이 될 참고 자료나 링크를 제공하세요"
                  rows={2}
                />
              </div>

              <Button 
                onClick={handleGenerate} 
                disabled={isGenerating || !formData.title}
                className="w-full"
                variant="primary"
              >
                {isGenerating ? (
                  <span>생성 중...</span>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 mr-2" />
                    <span>과제 생성</span>
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Generated Content */}
        <Card>
          <CardHeader>
            <CardTitle>생성된 과제</CardTitle>
            <CardDescription>
              AI가 생성한 과제를 확인하고 내보내세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            {generatedContent?.type === 'assignment' ? (
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
                  <pre className="whitespace-pre-wrap text-sm">
                    {generatedContent.content}
                  </pre>
                </div>
                
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleExport('pdf')}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    PDF
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleExport('markdown')}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Markdown
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleExport('json')}
                  >
                    <Save className="h-4 w-4 mr-2" />
                    저장
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-48 text-muted-foreground">
                <div className="text-center">
                  <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>과제 정보를 입력하고 생성 버튼을 클릭하세요</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quick Templates */}
      <Card>
        <CardHeader>
          <CardTitle>빠른 템플릿</CardTitle>
          <CardDescription>
            자주 사용되는 과제 템플릿을 선택하여 빠르게 시작하세요
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-2 mb-2">
                <FileText className="h-5 w-5 text-gray-600" />
                <span className="font-medium">프로그래밍 과제</span>
              </div>
              <p className="text-sm text-muted-foreground">
                코딩 문제 해결 및 알고리즘 구현
              </p>
            </div>
            
            <div className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="h-5 w-5 text-gray-600" />
                <span className="font-medium">팀 프로젝트</span>
              </div>
              <p className="text-sm text-muted-foreground">
                협업을 통한 대규모 프로젝트
              </p>
            </div>
            
            <div className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="h-5 w-5 text-gray-600" />
                <span className="font-medium">연구 과제</span>
              </div>
              <p className="text-sm text-muted-foreground">
                문헌 조사 및 분석 보고서
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}