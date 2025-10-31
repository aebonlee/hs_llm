# ChatGPT API 통합 가이드

## OpenAI API 설정

### 1. API Key 발급 과정
```
1. https://platform.openai.com 접속
2. 계정 생성 또는 로그인
3. API Keys 메뉴 접근
4. "Create new secret key" 클릭
5. Key 복사 및 안전한 곳에 보관
```

### 2. 요금 체계
```
- GPT-4: $0.03 / 1K tokens (input), $0.06 / 1K tokens (output)
- GPT-3.5-turbo: $0.001 / 1K tokens (input), $0.002 / 1K tokens (output)
- 1K tokens ≈ 750 words
```

## 클라이언트 사이드 구현

### 1. OpenAI Service 클래스
```typescript
// services/openai.service.ts
import { ChatCompletionMessageParam } from "openai/resources/chat";

export class OpenAIService {
  private apiKey: string;
  private baseURL = 'https://api.openai.com/v1';
  private model = 'gpt-4-turbo-preview';
  
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }
  
  // 기본 채팅 완성
  async complete(messages: ChatCompletionMessageParam[]): Promise<string> {
    const response = await fetch(`${this.baseURL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        model: this.model,
        messages,
        temperature: 0.7,
        max_tokens: 2000
      })
    });
    
    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data.choices[0].message.content;
  }
  
  // 스트리밍 응답
  async *streamComplete(messages: ChatCompletionMessageParam[]) {
    const response = await fetch(`${this.baseURL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        model: this.model,
        messages,
        temperature: 0.7,
        max_tokens: 2000,
        stream: true
      })
    });
    
    const reader = response.body?.getReader();
    const decoder = new TextDecoder();
    
    if (!reader) throw new Error('No response body');
    
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      
      const chunk = decoder.decode(value);
      const lines = chunk.split('\n');
      
      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6);
          if (data === '[DONE]') return;
          
          try {
            const json = JSON.parse(data);
            const content = json.choices[0]?.delta?.content;
            if (content) yield content;
          } catch (e) {
            // JSON 파싱 에러 무시
          }
        }
      }
    }
  }
}
```

### 2. React Hook 구현
```typescript
// hooks/useOpenAI.ts
import { useState, useCallback } from 'react';
import { OpenAIService } from '../services/openai.service';

export function useOpenAI(apiKey: string | null) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const complete = useCallback(async (
    messages: ChatCompletionMessageParam[]
  ): Promise<string> => {
    if (!apiKey) {
      throw new Error('API Key가 설정되지 않았습니다.');
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const service = new OpenAIService(apiKey);
      const response = await service.complete(messages);
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '알 수 없는 오류';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [apiKey]);
  
  const streamComplete = useCallback(async function* (
    messages: ChatCompletionMessageParam[]
  ) {
    if (!apiKey) {
      throw new Error('API Key가 설정되지 않았습니다.');
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const service = new OpenAIService(apiKey);
      yield* service.streamComplete(messages);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '알 수 없는 오류';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [apiKey]);
  
  return {
    complete,
    streamComplete,
    isLoading,
    error
  };
}
```

### 3. Chat Component
```tsx
// components/Chat/ChatInterface.tsx
import React, { useState, useRef, useEffect } from 'react';
import { useOpenAI } from '../../hooks/useOpenAI';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const apiKey = localStorage.getItem('openai_api_key');
  const { streamComplete, error } = useOpenAI(apiKey);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSend = async () => {
    if (!input.trim() || isStreaming) return;
    
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsStreaming(true);
    
    const assistantMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: '',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, assistantMessage]);
    
    try {
      const messageHistory = messages.map(m => ({
        role: m.role,
        content: m.content
      }));
      
      messageHistory.push({ role: 'user', content: input });
      
      let fullContent = '';
      for await (const chunk of streamComplete(messageHistory)) {
        fullContent += chunk;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].content = fullContent;
          return newMessages;
        });
      }
    } catch (err) {
      console.error('Chat error:', err);
    } finally {
      setIsStreaming(false);
    }
  };
  
  return (
    <div className="flex flex-col h-full">
      <MessageList messages={messages} />
      <div ref={messagesEndRef} />
      <MessageInput
        value={input}
        onChange={setInput}
        onSend={handleSend}
        disabled={isStreaming || !apiKey}
        placeholder={!apiKey ? 'API Key를 먼저 설정해주세요' : '메시지를 입력하세요...'}
      />
      {error && (
        <div className="text-red-500 text-sm p-2">
          {error}
        </div>
      )}
    </div>
  );
};
```

## 교육 특화 프롬프트

### 1. 강의계획서 생성
```typescript
export const generateSyllabusPrompt = (courseInfo: CourseInfo): ChatCompletionMessageParam[] => [
  {
    role: 'system',
    content: `당신은 대학 강의계획서를 작성하는 교육 전문가입니다.
    다음 원칙을 따라주세요:
    1. Bloom's Taxonomy를 활용한 학습목표 설정
    2. 주차별 점진적 난이도 상승
    3. 이론과 실습의 적절한 배분
    4. 명확하고 측정 가능한 평가 기준`
  },
  {
    role: 'user',
    content: `
과목명: ${courseInfo.name}
학점: ${courseInfo.credits}
시수: 주 ${courseInfo.hoursPerWeek}시간
대상: ${courseInfo.targetYear}학년
선수과목: ${courseInfo.prerequisites || '없음'}

15주차 강의계획서를 다음 형식으로 작성해주세요:

## 교과목 개요
[과목 소개]

## 학습목표 (CLO)
1. [구체적 학습목표 1]
2. [구체적 학습목표 2]
...

## 주차별 계획
### 1주차
- 주제:
- 학습내용:
- 활동:
- 과제:

[2-15주차 동일 형식]

## 평가방법
- 중간고사: 00%
- 기말고사: 00%
- 과제: 00%
- 출석: 00%

## 교재
- 주교재:
- 부교재:
    `
  }
];
```

### 2. 루브릭 생성
```typescript
export const generateRubricPrompt = (
  assignmentInfo: AssignmentInfo
): ChatCompletionMessageParam[] => [
  {
    role: 'system',
    content: `당신은 공정하고 명확한 평가 루브릭을 설계하는 전문가입니다.
    루브릭은 다음 요소를 포함해야 합니다:
    1. 명확한 평가 항목
    2. 구체적인 수준별 기준
    3. 객관적이고 측정 가능한 지표
    4. 적절한 가중치 배분`
  },
  {
    role: 'user',
    content: `
과제 제목: ${assignmentInfo.title}
과제 유형: ${assignmentInfo.type}
과제 설명: ${assignmentInfo.description}
제출 형식: ${assignmentInfo.format}
학습목표: ${assignmentInfo.objectives.join(', ')}

위 과제에 대한 평가 루브릭을 만들어주세요.

형식:
| 평가항목 | 가중치 | 우수 (90-100) | 보통 (70-89) | 미흡 (0-69) |
|---------|--------|---------------|--------------|-------------|
| 항목1 | 00% | [구체적 기준] | [구체적 기준] | [구체적 기준] |

총 4-5개 항목으로 구성하고, 가중치 합은 100%가 되어야 합니다.
    `
  }
];
```

### 3. 과제 생성
```typescript
export const generateAssignmentPrompt = (
  objectives: string[],
  level: 'basic' | 'intermediate' | 'advanced'
): ChatCompletionMessageParam[] => [
  {
    role: 'system',
    content: `당신은 창의적이고 교육적인 과제를 설계하는 전문가입니다.
    과제는 학습목표를 달성하면서도 학생들의 흥미를 유발해야 합니다.`
  },
  {
    role: 'user',
    content: `
학습목표:
${objectives.map((obj, i) => `${i + 1}. ${obj}`).join('\n')}

난이도: ${level}

위 학습목표를 평가할 수 있는 과제를 설계해주세요.

포함 내용:
1. 과제 제목
2. 과제 설명 (300자 이내)
3. 구체적 요구사항 (5-7개)
4. 제출 형식
5. 예상 소요 시간
6. 평가 기준 (간략히)
7. 도움이 될 자료나 힌트

창의적이면서도 실용적인 과제를 만들어주세요.
    `
  }
];
```

### 4. 피드백 생성
```typescript
export const generateFeedbackPrompt = (
  studentWork: string,
  rubric: Rubric,
  score: number
): ChatCompletionMessageParam[] => [
  {
    role: 'system',
    content: `당신은 건설적이고 격려하는 피드백을 제공하는 교육자입니다.
    피드백은 구체적이고, 행동 가능하며, 학생의 성장을 돕는 방향이어야 합니다.`
  },
  {
    role: 'user',
    content: `
학생 제출물 요약: ${studentWork}

평가 루브릭: ${JSON.stringify(rubric, null, 2)}

획득 점수: ${score}/100

위 정보를 바탕으로 학생에게 피드백을 작성해주세요.

피드백 구조:
1. 긍정적 측면 (2-3가지)
2. 개선이 필요한 부분 (2-3가지, 구체적 제안 포함)
3. 다음 과제를 위한 조언 (1-2가지)

톤: 격려하면서도 정직한
길이: 200-300자
    `
  }
];
```

## 에러 처리 및 재시도

```typescript
class APIErrorHandler {
  private maxRetries = 3;
  private retryDelay = 1000; // 1초
  
  async withRetry<T>(
    fn: () => Promise<T>,
    retries = this.maxRetries
  ): Promise<T> {
    try {
      return await fn();
    } catch (error) {
      if (retries === 0) throw error;
      
      if (this.isRetryableError(error)) {
        await this.delay(this.retryDelay);
        return this.withRetry(fn, retries - 1);
      }
      
      throw error;
    }
  }
  
  private isRetryableError(error: any): boolean {
    // 재시도 가능한 에러 판단
    if (error.status === 429) return true; // Rate limit
    if (error.status === 503) return true; // Service unavailable
    if (error.status >= 500) return true; // Server errors
    return false;
  }
  
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  handleError(error: any): string {
    if (error.status === 401) {
      return 'API Key가 유효하지 않습니다.';
    }
    if (error.status === 429) {
      return 'API 요청 한도를 초과했습니다. 잠시 후 다시 시도해주세요.';
    }
    if (error.status === 400) {
      return '잘못된 요청입니다. 입력 내용을 확인해주세요.';
    }
    return '알 수 없는 오류가 발생했습니다.';
  }
}
```

## 토큰 관리 및 비용 추적

```typescript
class TokenManager {
  // 대략적인 토큰 계산 (실제보다 약간 많게 추정)
  estimateTokens(text: string): number {
    // 영어: ~4 chars = 1 token
    // 한글: ~2 chars = 1 token
    const koreanChars = text.match(/[가-힣]/g)?.length || 0;
    const englishChars = text.length - koreanChars;
    
    return Math.ceil(koreanChars / 2 + englishChars / 4);
  }
  
  calculateCost(tokens: number, model: string): number {
    const rates = {
      'gpt-4-turbo-preview': 0.01, // $0.01 per 1K tokens
      'gpt-3.5-turbo': 0.0015,     // $0.0015 per 1K tokens
    };
    
    return (tokens / 1000) * (rates[model] || 0.01);
  }
  
  trackUsage(prompt: string, response: string, model: string): UsageData {
    const promptTokens = this.estimateTokens(prompt);
    const responseTokens = this.estimateTokens(response);
    const totalTokens = promptTokens + responseTokens;
    const cost = this.calculateCost(totalTokens, model);
    
    // LocalStorage에 사용량 저장
    const usage = this.getStoredUsage();
    usage.totalTokens += totalTokens;
    usage.totalCost += cost;
    usage.requests += 1;
    
    localStorage.setItem('token_usage', JSON.stringify(usage));
    
    return {
      promptTokens,
      responseTokens,
      totalTokens,
      cost
    };
  }
  
  private getStoredUsage(): StoredUsage {
    const stored = localStorage.getItem('token_usage');
    if (stored) {
      return JSON.parse(stored);
    }
    return {
      totalTokens: 0,
      totalCost: 0,
      requests: 0,
      startDate: new Date().toISOString()
    };
  }
}
```

## 사용자 설정 관리

```typescript
interface UserSettings {
  apiKey: string;
  model: 'gpt-4-turbo-preview' | 'gpt-3.5-turbo';
  temperature: number;
  maxTokens: number;
  language: 'ko' | 'en';
  autoSave: boolean;
  theme: 'light' | 'dark';
}

class SettingsManager {
  private readonly SETTINGS_KEY = 'user_settings';
  
  getSettings(): UserSettings {
    const stored = localStorage.getItem(this.SETTINGS_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    return this.getDefaultSettings();
  }
  
  updateSettings(partial: Partial<UserSettings>): void {
    const current = this.getSettings();
    const updated = { ...current, ...partial };
    localStorage.setItem(this.SETTINGS_KEY, JSON.stringify(updated));
    
    // 설정 변경 이벤트 발생
    window.dispatchEvent(new CustomEvent('settingsChanged', {
      detail: updated
    }));
  }
  
  private getDefaultSettings(): UserSettings {
    return {
      apiKey: '',
      model: 'gpt-3.5-turbo',
      temperature: 0.7,
      maxTokens: 2000,
      language: 'ko',
      autoSave: true,
      theme: 'light'
    };
  }
}
```

## 컨텍스트 관리

```typescript
class ContextManager {
  private currentContext: Map<string, any> = new Map();
  
  setContext(key: string, value: any): void {
    this.currentContext.set(key, value);
  }
  
  getContext(key: string): any {
    return this.currentContext.get(key);
  }
  
  buildSystemPrompt(): string {
    const course = this.getContext('course');
    const objectives = this.getContext('objectives');
    
    let prompt = '당신은 대학 교육을 돕는 AI 어시스턴트입니다.';
    
    if (course) {
      prompt += `\n현재 과목: ${course.name} (${course.credits}학점)`;
    }
    
    if (objectives) {
      prompt += '\n학습목표:';
      objectives.forEach((obj, i) => {
        prompt += `\n${i + 1}. ${obj}`;
      });
    }
    
    return prompt;
  }
  
  clearContext(): void {
    this.currentContext.clear();
  }
}
```