/**
 * Token Manager - Opus 담당
 * OpenAI API 토큰 사용량 추적 및 비용 계산
 */

export interface TokenUsage {
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  estimatedCost: number;
  model: string;
  timestamp: string;
}

export interface TokenStatistics {
  totalTokens: number;
  totalCost: number;
  requestCount: number;
  averageTokensPerRequest: number;
  tokensByModel: Record<string, number>;
  costByModel: Record<string, number>;
  dailyUsage: Array<{
    date: string;
    tokens: number;
    cost: number;
    requests: number;
  }>;
}

export class TokenManager {
  private readonly STORAGE_KEY = 'token_usage_history';
  private readonly MAX_HISTORY_DAYS = 30;

  // 모델별 가격 (USD per 1K tokens)
  private readonly pricing = {
    // GPT-4 Turbo
    'gpt-4-turbo-preview': {
      input: 0.01,
      output: 0.03
    },
    'gpt-4-1106-preview': {
      input: 0.01,
      output: 0.03
    },
    'gpt-4': {
      input: 0.03,
      output: 0.06
    },
    // GPT-3.5
    'gpt-3.5-turbo': {
      input: 0.0005,
      output: 0.0015
    },
    'gpt-3.5-turbo-16k': {
      input: 0.001,
      output: 0.002
    }
  };

  /**
   * 토큰 수 추정 (텍스트 기반)
   * 더 정확한 추정을 위한 규칙 기반 계산
   */
  estimateTokens(text: string): number {
    if (!text) return 0;
    
    // 기본 추정: 4 characters ≈ 1 token (영어)
    // 한글의 경우 대략 2-3 characters ≈ 1 token
    
    let tokenCount = 0;
    
    // 한글 문자 카운트
    const koreanChars = (text.match(/[\u3131-\uD79D]/g) || []).length;
    // 영어 및 숫자 카운트
    const englishChars = (text.match(/[a-zA-Z0-9]/g) || []).length;
    // 공백 카운트
    const spaces = (text.match(/\s/g) || []).length;
    // 특수문자 카운트
    const specialChars = text.length - koreanChars - englishChars - spaces;
    
    // 토큰 계산
    tokenCount += Math.ceil(koreanChars / 2.5);  // 한글
    tokenCount += Math.ceil(englishChars / 4);    // 영어/숫자
    tokenCount += Math.ceil(spaces / 4);          // 공백
    tokenCount += specialChars;                   // 특수문자 (1:1)
    
    // 최소 1 토큰
    return Math.max(1, tokenCount);
  }

  /**
   * 메시지 배열의 토큰 수 추정
   */
  estimateMessagesTokens(messages: Array<{ role: string; content: string }>): number {
    let totalTokens = 0;
    
    messages.forEach(message => {
      // 역할 토큰 (system, user, assistant)
      totalTokens += 4; // 메시지 구조 오버헤드
      totalTokens += this.estimateTokens(message.role);
      totalTokens += this.estimateTokens(message.content);
    });
    
    // 대화 종료 토큰
    totalTokens += 2;
    
    return totalTokens;
  }

  /**
   * 비용 계산
   */
  calculateCost(
    promptTokens: number,
    completionTokens: number,
    model: string
  ): number {
    const modelPricing = this.pricing[model as keyof typeof this.pricing] || {
      input: 0.002,
      output: 0.002
    };
    
    const promptCost = (promptTokens / 1000) * modelPricing.input;
    const completionCost = (completionTokens / 1000) * modelPricing.output;
    
    return promptCost + completionCost;
  }

  /**
   * 사용량 기록
   */
  recordUsage(usage: Omit<TokenUsage, 'timestamp'>): void {
    const record: TokenUsage = {
      ...usage,
      timestamp: new Date().toISOString()
    };
    
    const history = this.getUsageHistory();
    history.push(record);
    
    // 오래된 기록 삭제
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - this.MAX_HISTORY_DAYS);
    
    const filteredHistory = history.filter(h => 
      new Date(h.timestamp) > cutoffDate
    );
    
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filteredHistory));
  }

  /**
   * 사용량 기록 조회
   */
  private getUsageHistory(): TokenUsage[] {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  /**
   * 통계 생성
   */
  getStatistics(): TokenStatistics {
    const history = this.getUsageHistory();
    
    if (history.length === 0) {
      return {
        totalTokens: 0,
        totalCost: 0,
        requestCount: 0,
        averageTokensPerRequest: 0,
        tokensByModel: {},
        costByModel: {},
        dailyUsage: []
      };
    }
    
    let totalTokens = 0;
    let totalCost = 0;
    const tokensByModel: Record<string, number> = {};
    const costByModel: Record<string, number> = {};
    const dailyData: Record<string, { tokens: number; cost: number; requests: number }> = {};
    
    history.forEach(usage => {
      totalTokens += usage.totalTokens;
      totalCost += usage.estimatedCost;
      
      // 모델별 집계
      if (!tokensByModel[usage.model]) {
        tokensByModel[usage.model] = 0;
        costByModel[usage.model] = 0;
      }
      tokensByModel[usage.model] += usage.totalTokens;
      costByModel[usage.model] += usage.estimatedCost;
      
      // 일별 집계
      const date = usage.timestamp.split('T')[0];
      if (!dailyData[date]) {
        dailyData[date] = { tokens: 0, cost: 0, requests: 0 };
      }
      dailyData[date].tokens += usage.totalTokens;
      dailyData[date].cost += usage.estimatedCost;
      dailyData[date].requests += 1;
    });
    
    // 일별 사용량 배열 생성
    const dailyUsage = Object.entries(dailyData)
      .map(([date, data]) => ({
        date,
        ...data
      }))
      .sort((a, b) => a.date.localeCompare(b.date));
    
    return {
      totalTokens,
      totalCost,
      requestCount: history.length,
      averageTokensPerRequest: Math.round(totalTokens / history.length),
      tokensByModel,
      costByModel,
      dailyUsage
    };
  }

  /**
   * 예산 관리
   */
  checkBudget(monthlyBudget: number): {
    used: number;
    remaining: number;
    percentage: number;
    daysRemaining: number;
    projectedTotal: number;
    withinBudget: boolean;
  } {
    this.getStatistics();
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    
    // 이번 달 사용량 계산
    const monthlyHistory = this.getUsageHistory().filter(h => {
      const date = new Date(h.timestamp);
      return date >= startOfMonth && date <= now;
    });
    
    const monthlyUsed = monthlyHistory.reduce((sum, h) => sum + h.estimatedCost, 0);
    const daysInMonth = endOfMonth.getDate();
    const daysPassed = now.getDate();
    const daysRemaining = daysInMonth - daysPassed;
    
    // 예상 총 사용량 (현재 일평균 기준)
    const dailyAverage = daysPassed > 0 ? monthlyUsed / daysPassed : 0;
    const projectedTotal = dailyAverage * daysInMonth;
    
    return {
      used: monthlyUsed,
      remaining: Math.max(0, monthlyBudget - monthlyUsed),
      percentage: (monthlyUsed / monthlyBudget) * 100,
      daysRemaining,
      projectedTotal,
      withinBudget: projectedTotal <= monthlyBudget
    };
  }

  /**
   * 사용량 알림 설정
   */
  shouldAlertUsage(threshold: number): boolean {
    const stats = this.getStatistics();
    const today = new Date().toISOString().split('T')[0];
    const todayUsage = stats.dailyUsage.find(d => d.date === today);
    
    if (todayUsage && todayUsage.cost > threshold) {
      return true;
    }
    
    return false;
  }

  /**
   * 토큰 최적화 제안
   */
  getOptimizationSuggestions(): string[] {
    const stats = this.getStatistics();
    const suggestions: string[] = [];
    
    // 평균 토큰 사용량이 높은 경우
    if (stats.averageTokensPerRequest > 1500) {
      suggestions.push('대화를 더 짧고 명확하게 유지하면 토큰을 절약할 수 있습니다.');
    }
    
    // GPT-4를 주로 사용하는 경우
    const gpt4Usage = (stats.tokensByModel['gpt-4'] || 0) + 
                      (stats.tokensByModel['gpt-4-turbo-preview'] || 0);
    const totalUsage = stats.totalTokens;
    
    if (gpt4Usage > totalUsage * 0.7) {
      suggestions.push('간단한 작업에는 GPT-3.5-turbo를 사용하여 비용을 절감할 수 있습니다.');
    }
    
    // 일일 사용량이 급증한 경우
    if (stats.dailyUsage.length >= 2) {
      const recent = stats.dailyUsage[stats.dailyUsage.length - 1];
      const previous = stats.dailyUsage[stats.dailyUsage.length - 2];
      
      if (recent.tokens > previous.tokens * 2) {
        suggestions.push('최근 토큰 사용량이 급증했습니다. 프롬프트를 검토해보세요.');
      }
    }
    
    // 긴 대화 세션
    const history = this.getUsageHistory();
    const recentSession = history.slice(-10);
    if (recentSession.length >= 10) {
      const sessionTokens = recentSession.reduce((sum, h) => sum + h.totalTokens, 0);
      if (sessionTokens > 10000) {
        suggestions.push('긴 대화는 컨텍스트를 요약하여 새로 시작하는 것이 효율적입니다.');
      }
    }
    
    return suggestions;
  }

  /**
   * 사용량 초기화
   */
  resetUsage(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  /**
   * CSV 내보내기용 데이터 생성
   */
  exportUsageAsCSV(): string {
    const history = this.getUsageHistory();
    
    let csv = 'Timestamp,Model,Prompt Tokens,Completion Tokens,Total Tokens,Cost (USD)\n';
    
    history.forEach(usage => {
      csv += `${usage.timestamp},${usage.model},${usage.promptTokens},${usage.completionTokens},${usage.totalTokens},${usage.estimatedCost.toFixed(4)}\n`;
    });
    
    return csv;
  }

  /**
   * 모델별 최적 선택 추천
   */
  recommendModel(
    taskType: 'simple' | 'complex' | 'creative',
    budgetSensitive: boolean = false
  ): string {
    if (budgetSensitive) {
      return 'gpt-3.5-turbo';
    }
    
    switch (taskType) {
      case 'simple':
        return 'gpt-3.5-turbo';
      case 'complex':
        return 'gpt-4-turbo-preview';
      case 'creative':
        return 'gpt-4';
      default:
        return 'gpt-3.5-turbo';
    }
  }
}

/**
 * 전역 토큰 매니저 인스턴스
 */
export const tokenManager = new TokenManager();