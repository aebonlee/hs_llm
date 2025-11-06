import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SimpleButton as Button } from '@/components/ui/simple-button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PageTitle } from '@/components/ui/PageTitle';
import { useAppStore } from '@/store';
import { ClipboardList, Plus, Trash2, Save, Download, Sparkles } from 'lucide-react';

interface Criterion {
  id: string;
  name: string;
  description: string;
  weight: number;
  levels: Level[];
}

interface Level {
  id: string;
  name: string;
  score: number;
  description: string;
}

export function RubricBuilder() {
  const { generateContent, isGenerating, generatedContent, exportContent } = useAppStore();
  const [rubricTitle, setRubricTitle] = useState('');
  const [rubricDescription, setRubricDescription] = useState('');
  const [criteria, setCriteria] = useState<Criterion[]>([]);
  const [aiPrompt, setAiPrompt] = useState('');

  const addCriterion = () => {
    const newCriterion: Criterion = {
      id: Date.now().toString(),
      name: '',
      description: '',
      weight: 0.25,
      levels: [
        { id: '1', name: '우수', score: 4, description: '' },
        { id: '2', name: '양호', score: 3, description: '' },
        { id: '3', name: '보통', score: 2, description: '' },
        { id: '4', name: '미흡', score: 1, description: '' }
      ]
    };
    setCriteria([...criteria, newCriterion]);
  };

  const updateCriterion = (id: string, field: string, value: any) => {
    setCriteria(criteria.map(c => 
      c.id === id ? { ...c, [field]: value } : c
    ));
  };

  const updateLevel = (criterionId: string, levelId: string, field: string, value: any) => {
    setCriteria(criteria.map(c => 
      c.id === criterionId 
        ? {
            ...c,
            levels: c.levels.map(l => 
              l.id === levelId ? { ...l, [field]: value } : l
            )
          }
        : c
    ));
  };

  const deleteCriterion = (id: string) => {
    setCriteria(criteria.filter(c => c.id !== id));
  };

  const handleGenerateWithAI = async () => {
    console.log('AI로 생성 버튼 클릭!', { rubricTitle, rubricDescription, aiPrompt });
    
    try {
      const { apiKey } = useAppStore.getState();
      if (!apiKey || apiKey.trim() === '') {
        alert('API 키가 설정되지 않았습니다. 설정 페이지에서 OpenAI API 키를 입력해주세요.');
        return;
      }
      await generateContent('rubric', {
        title: rubricTitle,
        description: rubricDescription,
        prompt: aiPrompt
      });
    } catch (error) {
      console.error('루브릭 생성 실패:', error);
      alert('루브릭 생성 중 오류가 발생했습니다. API 키를 확인하거나 다시 시도해주세요.');
    }
  };

  const totalWeight = criteria.reduce((sum, c) => sum + c.weight, 0);
  const weightError = Math.abs(totalWeight - 1) > 0.01;

  const handleExport = (format: string) => {
    exportContent(format);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <PageTitle 
        icon={ClipboardList}
        title="루브릭 빌더"
        description="평가 기준표 생성 및 관리"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Rubric Info */}
        <Card>
          <CardHeader>
            <CardTitle>루브릭 정보</CardTitle>
            <CardDescription>
              루브릭의 기본 정보를 입력하세요
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">루브릭 제목</label>
              <Input
                value={rubricTitle}
                onChange={(e) => setRubricTitle(e.target.value)}
                placeholder="예: 프로그래밍 과제 평가"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium">설명</label>
              <Textarea
                value={rubricDescription}
                onChange={(e) => setRubricDescription(e.target.value)}
                placeholder="루브릭 사용 목적과 평가 방법을 설명하세요"
                rows={3}
              />
            </div>

            <div className="border-t pt-4">
              <label className="text-sm font-medium">AI 생성 프롬프트</label>
              <Textarea
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                placeholder="AI에게 어떤 루브릭을 만들어 달라고 요청하세요"
                rows={3}
              />
              <Button 
                onClick={handleGenerateWithAI}
                disabled={isGenerating || !aiPrompt}
                className="w-full mt-2"
                size="sm"
                variant="primary"
              >
                {isGenerating ? (
                  <span>생성 중...</span>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 mr-2" />
                    <span>AI로 생성</span>
                  </>
                )}
              </Button>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">가중치 합계</span>
                <span className={`text-sm ${weightError ? 'text-red-600' : 'text-green-600'}`}>
                  {totalWeight.toFixed(2)}
                </span>
              </div>
              {weightError && (
                <p className="text-xs text-red-600">
                  가중치의 합이 1이 되어야 합니다
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Criteria Builder */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>평가 기준</CardTitle>
                <CardDescription>
                  각 평가 기준과 수준을 정의하세요
                </CardDescription>
              </div>
              <Button onClick={addCriterion} size="sm">
                <Plus className="h-4 w-4 mr-2" />
                기준 추가
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {criteria.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <ClipboardList className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>평가 기준을 추가해보세요</p>
              </div>
            ) : (
              criteria.map((criterion) => (
                <div key={criterion.id} className="border rounded-lg p-4 space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1 space-y-2">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2">
                          <Input
                            value={criterion.name}
                            onChange={(e) => updateCriterion(criterion.id, 'name', e.target.value)}
                            placeholder="평가 기준명"
                          />
                        </div>
                        <div>
                          <Input
                            type="number"
                            step="0.01"
                            min="0"
                            max="1"
                            value={criterion.weight}
                            onChange={(e) => updateCriterion(criterion.id, 'weight', parseFloat(e.target.value))}
                            placeholder="가중치"
                          />
                        </div>
                      </div>
                      <Textarea
                        value={criterion.description}
                        onChange={(e) => updateCriterion(criterion.id, 'description', e.target.value)}
                        placeholder="평가 기준 설명"
                        rows={2}
                      />
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => deleteCriterion(criterion.id)}
                      className="ml-2 text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {criterion.levels.map((level) => (
                      <div key={level.id} className="border rounded p-3 space-y-2">
                        <div className="flex space-x-2">
                          <Input
                            value={level.name}
                            onChange={(e) => updateLevel(criterion.id, level.id, 'name', e.target.value)}
                            placeholder="수준명"
                            className="flex-1"
                          />
                          <Input
                            type="number"
                            value={level.score}
                            onChange={(e) => updateLevel(criterion.id, level.id, 'score', parseInt(e.target.value))}
                            placeholder="점수"
                            className="w-20"
                          />
                        </div>
                        <Textarea
                          value={level.description}
                          onChange={(e) => updateLevel(criterion.id, level.id, 'description', e.target.value)}
                          placeholder="수준별 설명"
                          rows={2}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}

            {criteria.length > 0 && (
              <div className="flex space-x-2 pt-4 border-t">
                <Button 
                  onClick={() => handleExport('pdf')}
                  variant="outline"
                  size="sm"
                >
                  <Download className="h-4 w-4 mr-2" />
                  PDF 내보내기
                </Button>
                <Button 
                  onClick={() => handleExport('json')}
                  variant="outline"
                  size="sm"
                >
                  <Save className="h-4 w-4 mr-2" />
                  저장
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Generated Content Display */}
      {generatedContent?.type === 'rubric' && (
        <Card>
          <CardHeader>
            <CardTitle>AI 생성 루브릭</CardTitle>
            <CardDescription>
              AI가 생성한 루브릭을 확인하고 편집하세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
              <pre className="whitespace-pre-wrap text-sm">
                {generatedContent.content}
              </pre>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}