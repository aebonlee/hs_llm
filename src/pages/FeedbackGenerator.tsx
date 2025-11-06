import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ThemedButton as Button } from '@/components/ui/themed-button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PageTitle } from '@/components/ui/PageTitle';
import { useAppStore } from '@/store';
import { MessageCircle, Download, Save, Sparkles, Star, TrendingUp, AlertCircle } from 'lucide-react';

export function FeedbackGenerator() {
  const { generateContent, isGenerating, generatedContent, exportContent } = useAppStore();
  const [formData, setFormData] = useState({
    studentName: '',
    assignmentTitle: '',
    submissionContent: '',
    rubricCriteria: '',
    scores: '',
    strengths: '',
    weaknesses: '',
    suggestions: '',
    tone: 'constructive',
    language: 'korean',
    includeGrade: true
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGenerate = async () => {
    try {
      await generateContent('feedback', formData);
    } catch (error) {
      console.error('피드백 생성 실패:', error);
    }
  };

  const handleExport = (format: string) => {
    exportContent(format);
  };

  const toneOptions = [
    { value: 'constructive', label: '건설적', icon: TrendingUp, color: 'text-gray-600' },
    { value: 'encouraging', label: '격려', icon: Star, color: 'text-gray-600' },
    { value: 'detailed', label: '상세', icon: AlertCircle, color: 'text-gray-600' }
  ];

  const quickTemplates = [
    {
      title: '프로그래밍 과제',
      description: '코드 품질, 알고리즘, 구현 완성도',
      criteria: '코드 구조 (25%), 알고리즘 효율성 (25%), 가독성 (25%), 완성도 (25%)'
    },
    {
      title: '보고서 과제',
      description: '내용, 구성, 참고문헌, 표현',
      criteria: '내용의 깊이 (30%), 논리적 구성 (25%), 참고문헌 (20%), 표현력 (25%)'
    },
    {
      title: '발표 과제',
      description: '내용, 전달력, 시각자료, 질의응답',
      criteria: '내용 완성도 (30%), 전달력 (25%), 시각자료 (20%), 질의응답 (25%)'
    }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      <PageTitle 
        icon={MessageCircle}
        title="피드백 생성"
        description="개인화된 학습 피드백 작성"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>기본 정보</CardTitle>
              <CardDescription>피드백 대상 정보를 입력하세요</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">학생 이름</label>
                  <Input
                    value={formData.studentName}
                    onChange={(e) => handleInputChange('studentName', e.target.value)}
                    placeholder="김철수"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">과제 제목</label>
                  <Input
                    value={formData.assignmentTitle}
                    onChange={(e) => handleInputChange('assignmentTitle', e.target.value)}
                    placeholder="웹 애플리케이션 개발"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">제출물 내용</label>
                <Textarea
                  value={formData.submissionContent}
                  onChange={(e) => handleInputChange('submissionContent', e.target.value)}
                  placeholder="학생이 제출한 과제의 주요 내용을 요약하여 입력하세요"
                  rows={4}
                />
              </div>

              <div>
                <label className="text-sm font-medium">루브릭 평가 기준</label>
                <Textarea
                  value={formData.rubricCriteria}
                  onChange={(e) => handleInputChange('rubricCriteria', e.target.value)}
                  placeholder="평가에 사용된 루브릭의 기준을 입력하세요"
                  rows={3}
                />
              </div>

              <div>
                <label className="text-sm font-medium">점수/등급</label>
                <Input
                  value={formData.scores}
                  onChange={(e) => handleInputChange('scores', e.target.value)}
                  placeholder="예: 85점 또는 A-, 각 기준별 점수"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>피드백 설정</CardTitle>
              <CardDescription>피드백의 톤과 스타일을 선택하세요</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">피드백 톤</label>
                <div className="grid grid-cols-3 gap-2 mt-1">
                  {toneOptions.map((option) => {
                    const Icon = option.icon;
                    return (
                      <Button
                        key={option.value}
                        variant={formData.tone === option.value ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleInputChange('tone', option.value)}
                        className={`${option.color} flex items-center space-x-1`}
                      >
                        <Icon className="h-4 w-4" />
                        <span>{option.label}</span>
                      </Button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">잘한 점</label>
                <Textarea
                  value={formData.strengths}
                  onChange={(e) => handleInputChange('strengths', e.target.value)}
                  placeholder="학생이 잘 수행한 부분을 구체적으로 기록하세요"
                  rows={3}
                />
              </div>

              <div>
                <label className="text-sm font-medium">개선점</label>
                <Textarea
                  value={formData.weaknesses}
                  onChange={(e) => handleInputChange('weaknesses', e.target.value)}
                  placeholder="부족한 부분이나 개선이 필요한 영역을 기록하세요"
                  rows={3}
                />
              </div>

              <div>
                <label className="text-sm font-medium">학습 제안</label>
                <Textarea
                  value={formData.suggestions}
                  onChange={(e) => handleInputChange('suggestions', e.target.value)}
                  placeholder="향후 학습 방향이나 구체적인 개선 방법을 제안하세요"
                  rows={3}
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="includeGrade"
                  checked={formData.includeGrade}
                  onChange={(e) => handleInputChange('includeGrade', e.target.checked)}
                  className="rounded"
                />
                <label htmlFor="includeGrade" className="text-sm font-medium">
                  점수/등급 포함
                </label>
              </div>

              <Button 
                onClick={handleGenerate} 
                disabled={isGenerating || !formData.studentName || !formData.assignmentTitle}
                className="w-full"
              >
                {isGenerating ? (
                  <>생성 중...</>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 mr-2" />
                    피드백 생성
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Generated Content */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>생성된 피드백</CardTitle>
              <CardDescription>
                AI가 생성한 피드백을 확인하고 내보내세요
              </CardDescription>
            </CardHeader>
            <CardContent>
              {generatedContent?.type === 'feedback' ? (
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
                    <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>피드백 정보를 입력하고 생성 버튼을 클릭하세요</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>빠른 템플릿</CardTitle>
              <CardDescription>
                과제 유형별 템플릿을 선택하여 빠르게 시작하세요
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {quickTemplates.map((template, index) => (
                  <div 
                    key={index}
                    className="border rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => handleInputChange('rubricCriteria', template.criteria)}
                  >
                    <div className="font-medium text-sm">{template.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {template.description}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Feedback Examples */}
      <Card>
        <CardHeader>
          <CardTitle>피드백 작성 가이드</CardTitle>
          <CardDescription>
            효과적인 피드백 작성을 위한 팁과 예시
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-gray-600 mb-2">✅ 좋은 피드백</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• 구체적이고 명확한 예시 제공</li>
                <li>• 학습자의 성장에 초점</li>
                <li>• 실행 가능한 개선 방안</li>
                <li>• 균형 잡힌 긍정적/개선 피드백</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-600 mb-2">❌ 피해야 할 피드백</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• 막연하고 일반적인 표현</li>
                <li>• 개인 공격적인 언어</li>
                <li>• 해결책 없는 비판</li>
                <li>• 과도하게 부정적인 톤</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-600 mb-2">💡 추가 팁</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• 학습 목표와 연결</li>
                <li>• 개별 학습자 수준 고려</li>
                <li>• 다음 단계 제시</li>
                <li>• 동기 부여 요소 포함</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}