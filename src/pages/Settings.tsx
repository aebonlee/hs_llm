import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PageTitle } from '@/components/ui/PageTitle';
import { useAppStore } from '@/store';
import { ExportService } from '@/services/export.service';
import { Settings as SettingsIcon, Key, Download, Trash2, Save, Eye, EyeOff } from 'lucide-react';

export function Settings() {
  const { apiKey, setApiKey, selectedModel, storageService } = useAppStore();
  const [showApiKey, setShowApiKey] = useState(false);
  const [tempApiKey, setTempApiKey] = useState('');
  const [model, setModel] = useState(selectedModel);
  const [settings, setSettings] = useState({
    maxTokens: 2000,
    temperature: 0.7,
    autoSave: true,
    language: 'korean',
    theme: 'light'
  });

  useEffect(() => {
    setTempApiKey(apiKey);
  }, [apiKey]);

  const handleSaveApiKey = () => {
    setApiKey(tempApiKey);
  };

  const handleExportData = () => {
    const data = storageService.exportAllData();
    ExportService.downloadJSON(data, 'teaching-assistant-data');
  };

  const handleClearData = () => {
    if (confirm('모든 저장된 데이터를 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) {
      storageService.clearAll();
      alert('모든 데이터가 삭제되었습니다.');
    }
  };

  const models = [
    { value: 'gpt-3.5-turbo', label: 'GPT-3.5 Turbo', cost: '$0.002/1K tokens' },
    { value: 'gpt-4', label: 'GPT-4', cost: '$0.03/1K tokens' },
    { value: 'gpt-4-turbo-preview', label: 'GPT-4 Turbo', cost: '$0.01/1K tokens' }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      <PageTitle 
        icon={SettingsIcon}
        title="설정"
        description="애플리케이션 설정 및 환경 구성"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* API Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Key className="h-5 w-5" />
              <span>API 설정</span>
            </CardTitle>
            <CardDescription>
              OpenAI API 키와 모델 설정을 관리하세요
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">OpenAI API Key</label>
              <div className="flex space-x-2 mt-1">
                <div className="relative flex-1">
                  <Input
                    type={showApiKey ? "text" : "password"}
                    value={tempApiKey}
                    onChange={(e) => setTempApiKey(e.target.value)}
                    placeholder="sk-..."
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowApiKey(!showApiKey)}
                  >
                    {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
                <Button onClick={handleSaveApiKey} size="sm">
                  <Save className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                API 키는 안전하게 암호화되어 로컬에 저장됩니다
              </p>
            </div>

            <div>
              <label className="text-sm font-medium">모델 선택</label>
              <select 
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full p-2 border rounded-md mt-1"
              >
                {models.map((model) => (
                  <option key={model.value} value={model.value}>
                    {model.label} ({model.cost})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">최대 토큰</label>
                <Input
                  type="number"
                  value={settings.maxTokens}
                  onChange={(e) => setSettings(prev => ({ ...prev, maxTokens: parseInt(e.target.value) }))}
                  min="100"
                  max="4000"
                />
              </div>
              <div>
                <label className="text-sm font-medium">창의성 (Temperature)</label>
                <Input
                  type="number"
                  step="0.1"
                  value={settings.temperature}
                  onChange={(e) => setSettings(prev => ({ ...prev, temperature: parseFloat(e.target.value) }))}
                  min="0"
                  max="2"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* General Settings */}
        <Card>
          <CardHeader>
            <CardTitle>일반 설정</CardTitle>
            <CardDescription>
              애플리케이션의 일반적인 동작을 설정하세요
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">언어</label>
              <select 
                value={settings.language}
                onChange={(e) => setSettings(prev => ({ ...prev, language: e.target.value }))}
                className="w-full p-2 border rounded-md mt-1"
              >
                <option value="korean">한국어</option>
                <option value="english">English</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">테마</label>
              <select 
                value={settings.theme}
                onChange={(e) => setSettings(prev => ({ ...prev, theme: e.target.value }))}
                className="w-full p-2 border rounded-md mt-1"
              >
                <option value="light">라이트</option>
                <option value="dark">다크</option>
                <option value="system">시스템 설정 따르기</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="autoSave"
                checked={settings.autoSave}
                onChange={(e) => setSettings(prev => ({ ...prev, autoSave: e.target.checked }))}
                className="rounded"
              />
              <label htmlFor="autoSave" className="text-sm font-medium">
                자동 저장 활성화
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Data Management */}
        <Card>
          <CardHeader>
            <CardTitle>데이터 관리</CardTitle>
            <CardDescription>
              저장된 데이터를 관리하고 백업하세요
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-blue-600">24</div>
                <div className="text-sm text-muted-foreground">생성된 문서</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-green-600">1.2MB</div>
                <div className="text-sm text-muted-foreground">사용된 저장공간</div>
              </div>
            </div>

            <div className="space-y-2">
              <Button 
                onClick={handleExportData}
                variant="outline" 
                className="w-full"
              >
                <Download className="h-4 w-4 mr-2" />
                데이터 내보내기
              </Button>
              <Button 
                onClick={handleClearData}
                variant="outline" 
                className="w-full text-red-600 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                모든 데이터 삭제
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Usage Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>사용량 통계</CardTitle>
            <CardDescription>
              API 사용량과 비용을 확인하세요
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">이번 달 토큰 사용량</span>
                <span className="text-sm font-medium">45,230 tokens</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{ width: '45%' }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>45% 사용</span>
                <span>100,000 tokens 한도</span>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm">예상 비용</span>
                <span className="text-sm font-medium">$12.45</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>GPT-3.5 Turbo</span>
                  <span>$8.20</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>GPT-4</span>
                  <span>$4.25</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Advanced Settings */}
      <Card>
        <CardHeader>
          <CardTitle>고급 설정</CardTitle>
          <CardDescription>
            고급 사용자를 위한 상세 설정
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium">커스텀 프롬프트 템플릿</label>
            <Textarea
              placeholder="기본 프롬프트 템플릿을 수정하여 AI 응답을 개선할 수 있습니다"
              rows={4}
              className="mt-1"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">요청 타임아웃 (초)</label>
              <Input type="number" defaultValue="30" min="10" max="120" />
            </div>
            <div>
              <label className="text-sm font-medium">재시도 횟수</label>
              <Input type="number" defaultValue="3" min="1" max="5" />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="debug"
              className="rounded"
            />
            <label htmlFor="debug" className="text-sm font-medium">
              디버그 모드 활성화
            </label>
          </div>

          <Button variant="outline" className="w-full">
            고급 설정 저장
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}