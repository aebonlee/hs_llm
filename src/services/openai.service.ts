/**
 * OpenAI Service - Opus 담당
 * ChatGPT API와의 통신을 담당하는 핵심 서비스
 */

import { ChatMessage, OpenAIConfig, StreamChunk } from '@/types/openai';

export class OpenAIService {
  private apiKey: string;
  private baseURL = 'https://api.openai.com/v1';
  private model: string;
  private temperature: number;
  private maxTokens: number;

  constructor(config: OpenAIConfig) {
    this.apiKey = config.apiKey;
    this.model = config.model || 'gpt-3.5-turbo';
    this.temperature = config.temperature || 0.7;
    this.maxTokens = config.maxTokens || 2000;
  }

  /**
   * 기본 채팅 완성 (동기 응답)
   */
  async complete(messages: ChatMessage[]): Promise<string> {
    const response = await fetch(`${this.baseURL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        model: this.model,
        messages,
        temperature: this.temperature,
        max_tokens: this.maxTokens,
        stream: false
      })
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: { message: response.statusText } }));
      throw new Error(`OpenAI API error: ${error.error?.message || response.statusText}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  }

  /**
   * 스트리밍 응답 (실시간 텍스트 생성)
   */
  async *streamComplete(messages: ChatMessage[]): AsyncGenerator<string, void, unknown> {
    const response = await fetch(`${this.baseURL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        model: this.model,
        messages,
        temperature: this.temperature,
        max_tokens: this.maxTokens,
        stream: true
      })
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: { message: response.statusText } }));
      throw new Error(`OpenAI API error: ${error.error?.message || response.statusText}`);
    }

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    if (!reader) {
      throw new Error('Response body is not readable');
    }

    let buffer = '';

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmedLine = line.trim();
          if (trimmedLine.startsWith('data: ')) {
            const data = trimmedLine.slice(6);
            
            if (data === '[DONE]') {
              return;
            }

            try {
              const json = JSON.parse(data) as StreamChunk;
              const content = json.choices[0]?.delta?.content;
              if (content) {
                yield content;
              }
            } catch (e) {
              // JSON 파싱 실패는 무시 (빈 줄이나 형식 오류)
              console.debug('Failed to parse streaming chunk:', e);
            }
          }
        }
      }
    } finally {
      reader.releaseLock();
    }
  }

  /**
   * API Key 유효성 검증
   */
  async validateApiKey(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseURL}/models`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`
        }
      });
      return response.ok;
    } catch {
      return false;
    }
  }

  /**
   * 사용 가능한 모델 목록 조회
   */
  async getAvailableModels(): Promise<string[]> {
    const response = await fetch(`${this.baseURL}/models`, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch models');
    }

    const data = await response.json();
    return data.data
      .filter((model: any) => model.id.includes('gpt'))
      .map((model: any) => model.id)
      .sort();
  }

  /**
   * 설정 업데이트
   */
  updateConfig(config: Partial<OpenAIConfig>): void {
    if (config.apiKey) this.apiKey = config.apiKey;
    if (config.model) this.model = config.model;
    if (config.temperature !== undefined) this.temperature = config.temperature;
    if (config.maxTokens !== undefined) this.maxTokens = config.maxTokens;
  }
}