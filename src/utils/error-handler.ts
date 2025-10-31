/**
 * Error Handler - Opus 담당
 * API 에러 처리 및 재시도 로직
 */

export type ErrorType = 
  | 'API_KEY_INVALID'
  | 'RATE_LIMIT'
  | 'NETWORK_ERROR'
  | 'QUOTA_EXCEEDED'
  | 'SERVER_ERROR'
  | 'BAD_REQUEST'
  | 'UNKNOWN';

export interface AppError {
  type: ErrorType;
  message: string;
  statusCode?: number;
  details?: any;
  retryable: boolean;
  userMessage: string;
}

export class ErrorHandler {
  private readonly maxRetries = 3;
  private readonly retryDelays = [1000, 2000, 4000]; // 지수 백오프

  /**
   * 에러 분석 및 분류
   */
  classifyError(error: any): AppError {
    // OpenAI API 에러
    if (error.response) {
      const status = error.response.status;
      const data = error.response.data;
      
      if (status === 401) {
        return {
          type: 'API_KEY_INVALID',
          message: 'Invalid API key',
          statusCode: 401,
          details: data,
          retryable: false,
          userMessage: 'API Key가 유효하지 않습니다. 설정에서 확인해주세요.'
        };
      }
      
      if (status === 429) {
        return {
          type: 'RATE_LIMIT',
          message: 'Rate limit exceeded',
          statusCode: 429,
          details: data,
          retryable: true,
          userMessage: 'API 요청 한도를 초과했습니다. 잠시 후 다시 시도해주세요.'
        };
      }
      
      if (status === 400) {
        return {
          type: 'BAD_REQUEST',
          message: 'Bad request',
          statusCode: 400,
          details: data,
          retryable: false,
          userMessage: '요청이 잘못되었습니다. 입력 내용을 확인해주세요.'
        };
      }
      
      if (status >= 500) {
        return {
          type: 'SERVER_ERROR',
          message: 'Server error',
          statusCode: status,
          details: data,
          retryable: true,
          userMessage: '서버에 일시적인 문제가 발생했습니다.'
        };
      }
    }
    
    // 네트워크 에러
    if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
      return {
        type: 'NETWORK_ERROR',
        message: 'Network error',
        details: error,
        retryable: true,
        userMessage: '네트워크 연결을 확인해주세요.'
      };
    }
    
    // 스토리지 에러
    if (error instanceof DOMException && error.code === 22) {
      return {
        type: 'QUOTA_EXCEEDED',
        message: 'Storage quota exceeded',
        details: error,
        retryable: false,
        userMessage: '저장 공간이 부족합니다. 오래된 데이터를 삭제해주세요.'
      };
    }
    
    // 기본 에러
    return {
      type: 'UNKNOWN',
      message: error.message || 'Unknown error',
      details: error,
      retryable: false,
      userMessage: '알 수 없는 오류가 발생했습니다.'
    };
  }

  /**
   * 재시도 로직
   */
  async withRetry<T>(
    fn: () => Promise<T>,
    options?: {
      maxRetries?: number;
      onRetry?: (attempt: number, error: AppError) => void;
    }
  ): Promise<T> {
    const maxRetries = options?.maxRetries ?? this.maxRetries;
    let lastError: AppError | null = null;
    
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        return await fn();
      } catch (error) {
        lastError = this.classifyError(error);
        
        if (!lastError.retryable || attempt === maxRetries) {
          throw lastError;
        }
        
        // 재시도 전 대기
        const delay = this.retryDelays[Math.min(attempt, this.retryDelays.length - 1)];
        
        if (options?.onRetry) {
          options.onRetry(attempt + 1, lastError);
        }
        
        await this.delay(delay);
        
        // Rate limit의 경우 추가 대기
        if (lastError.type === 'RATE_LIMIT') {
          const retryAfter = this.extractRetryAfter(lastError.details);
          if (retryAfter) {
            await this.delay(retryAfter * 1000);
          }
        }
      }
    }
    
    throw lastError || new Error('Max retries exceeded');
  }

  /**
   * Rate limit 재시도 시간 추출
   */
  private extractRetryAfter(details: any): number | null {
    if (details?.error?.message) {
      const match = details.error.message.match(/try again in (\d+)s/);
      if (match) {
        return parseInt(match[1]);
      }
    }
    return null;
  }

  /**
   * 지연 함수
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * 사용자 친화적 에러 메시지 생성
   */
  getUserMessage(error: AppError): string {
    const messages: Record<ErrorType, (error: AppError) => string> = {
      API_KEY_INVALID: () => 'API Key가 올바르지 않습니다. 설정에서 확인해주세요.',
      RATE_LIMIT: (e) => {
        const retryAfter = this.extractRetryAfter(e.details);
        if (retryAfter) {
          return `API 요청 한도 초과. ${retryAfter}초 후에 다시 시도해주세요.`;
        }
        return 'API 요청 한도를 초과했습니다. 잠시 후 다시 시도해주세요.';
      },
      NETWORK_ERROR: () => '네트워크 연결을 확인해주세요.',
      QUOTA_EXCEEDED: () => '저장 공간이 부족합니다. 설정에서 데이터를 정리해주세요.',
      SERVER_ERROR: () => '서버에 일시적인 문제가 있습니다. 잠시 후 다시 시도해주세요.',
      BAD_REQUEST: () => '입력한 내용을 확인해주세요.',
      UNKNOWN: () => '예상치 못한 오류가 발생했습니다.'
    };
    
    return messages[error.type](error);
  }

  /**
   * 에러 로깅
   */
  logError(error: AppError, context?: any): void {
    const logEntry = {
      timestamp: new Date().toISOString(),
      type: error.type,
      message: error.message,
      statusCode: error.statusCode,
      context,
      userAgent: navigator.userAgent,
      url: window.location.href
    };
    
    // 개발 환경에서만 콘솔 출력
    if (process.env.NODE_ENV === 'development') {
      console.error('Error logged:', logEntry);
    }
    
    // 에러 로그 저장 (LocalStorage)
    this.saveErrorLog(logEntry);
  }

  /**
   * 에러 로그 저장
   */
  private saveErrorLog(logEntry: any): void {
    try {
      const logs = JSON.parse(localStorage.getItem('error_logs') || '[]');
      logs.push(logEntry);
      
      // 최대 50개 로그만 유지
      const recentLogs = logs.slice(-50);
      localStorage.setItem('error_logs', JSON.stringify(recentLogs));
    } catch {
      // 로그 저장 실패는 무시
    }
  }

  /**
   * 에러 로그 조회
   */
  getErrorLogs(): any[] {
    try {
      return JSON.parse(localStorage.getItem('error_logs') || '[]');
    } catch {
      return [];
    }
  }

  /**
   * 에러 로그 삭제
   */
  clearErrorLogs(): void {
    localStorage.removeItem('error_logs');
  }
}

/**
 * 전역 에러 핸들러 인스턴스
 */
export const errorHandler = new ErrorHandler();

/**
 * React Error Boundary용 에러 포맷터
 */
export function formatErrorForDisplay(error: Error): {
  title: string;
  description: string;
  actions: Array<{ label: string; action: () => void }>;
} {
  const appError = errorHandler.classifyError(error);
  
  const actions = [];
  
  if (appError.retryable) {
    actions.push({
      label: '다시 시도',
      action: () => window.location.reload()
    });
  }
  
  if (appError.type === 'API_KEY_INVALID') {
    actions.push({
      label: 'API Key 설정',
      action: () => {
        // 설정 페이지로 이동
        window.location.href = '/settings';
      }
    });
  }
  
  if (appError.type === 'QUOTA_EXCEEDED') {
    actions.push({
      label: '데이터 정리',
      action: () => {
        // 데이터 관리 페이지로 이동
        window.location.href = '/settings#storage';
      }
    });
  }
  
  return {
    title: '오류가 발생했습니다',
    description: appError.userMessage,
    actions
  };
}