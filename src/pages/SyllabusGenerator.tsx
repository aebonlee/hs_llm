import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ThemedButton as Button } from '@/components/ui/themed-button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PageTitle } from '@/components/ui/PageTitle';
import { useAppStore } from '@/store';
import { BookOpen, Download, Save, Sparkles } from 'lucide-react';

export function SyllabusGenerator() {
  const { generateContent, isGenerating, generatedContent, exportContent } = useAppStore();
  const [formData, setFormData] = useState({
    courseName: '',
    courseCode: '',
    credits: 3,
    semester: '',
    instructor: '',
    department: '',
    description: '',
    objectives: '',
    prerequisites: '',
    textbooks: '',
    evaluationMethod: '',
    weeklyPlan: ''
  });

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGenerate = async () => {
    try {
      const { apiKey } = useAppStore.getState();
      if (!apiKey || apiKey.trim() === '') {
        alert('API 키가 설정되지 않았습니다. 설정 페이지에서 OpenAI API 키를 입력해주세요.');
        return;
      }
      await generateContent('syllabus', formData);
    } catch (error) {
      console.error('강의계획서 생성 실패:', error);
      alert('강의계획서 생성 중 오류가 발생했습니다. API 키를 확인하거나 다시 시도해주세요.');
    }
  };

  const handleExport = (format: string) => {
    exportContent(format);
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      <PageTitle 
        icon={BookOpen}
        title="강의계획서 생성"
        description="AI를 활용한 체계적인 강의계획서 작성"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <Card>
          <CardHeader>
            <CardTitle>강의 정보 입력</CardTitle>
            <CardDescription>강의계획서 생성에 필요한 기본 정보를 입력하세요</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">강의명</label>
                <Input
                  value={formData.courseName}
                  onChange={(e) => handleInputChange('courseName', e.target.value)}
                  placeholder="예: 객체지향프로그래밍"
                />
              </div>
              <div>
                <label className="text-sm font-medium">강의코드</label>
                <Input
                  value={formData.courseCode}
                  onChange={(e) => handleInputChange('courseCode', e.target.value)}
                  placeholder="예: CSE201"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium">학점</label>
                <Input
                  type="number"
                  value={formData.credits}
                  onChange={(e) => handleInputChange('credits', parseInt(e.target.value))}
                  min="1"
                  max="6"
                />
              </div>
              <div>
                <label className="text-sm font-medium">학기</label>
                <Input
                  value={formData.semester}
                  onChange={(e) => handleInputChange('semester', e.target.value)}
                  placeholder="예: 2024-1"
                />
              </div>
              <div>
                <label className="text-sm font-medium">학과</label>
                <Input
                  value={formData.department}
                  onChange={(e) => handleInputChange('department', e.target.value)}
                  placeholder="예: 컴퓨터공학과"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">담당교수</label>
              <Input
                value={formData.instructor}
                onChange={(e) => handleInputChange('instructor', e.target.value)}
                placeholder="교수명을 입력하세요"
              />
            </div>

            <div>
              <label className="text-sm font-medium">강의 개요</label>
              <Textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="강의의 주요 내용과 목적을 간략히 설명하세요"
                rows={3}
              />
            </div>

            <div>
              <label className="text-sm font-medium">학습 목표</label>
              <Textarea
                value={formData.objectives}
                onChange={(e) => handleInputChange('objectives', e.target.value)}
                placeholder="이 강의를 통해 학생들이 달성해야 할 학습 목표를 작성하세요"
                rows={3}
              />
            </div>

            <div>
              <label className="text-sm font-medium">선수과목</label>
              <Input
                value={formData.prerequisites}
                onChange={(e) => handleInputChange('prerequisites', e.target.value)}
                placeholder="예: 프로그래밍기초, 자료구조"
              />
            </div>

            <div>
              <label className="text-sm font-medium">교재 및 참고서</label>
              <Textarea
                value={formData.textbooks}
                onChange={(e) => handleInputChange('textbooks', e.target.value)}
                placeholder="사용할 교재와 참고서를 입력하세요"
                rows={2}
              />
            </div>

            <div>
              <label className="text-sm font-medium">평가 방법</label>
              <Input
                value={formData.evaluationMethod}
                onChange={(e) => handleInputChange('evaluationMethod', e.target.value)}
                placeholder="예: 중간고사 30%, 기말고사 40%, 과제 20%, 출석 10%"
              />
            </div>

            <Button 
              onClick={handleGenerate} 
              disabled={isGenerating || !formData.courseName}
              className="w-full"
            >
              {isGenerating ? (
                <>생성 중...</>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  강의계획서 생성
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Generated Content */}
        <Card>
          <CardHeader>
            <CardTitle>생성된 강의계획서</CardTitle>
            <CardDescription>
              AI가 생성한 강의계획서를 확인하고 내보내세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            {generatedContent?.type === 'syllabus' ? (
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
                  <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>강의 정보를 입력하고 생성 버튼을 클릭하세요</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}