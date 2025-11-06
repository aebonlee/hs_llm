import { toast } from '@/hooks/useToast';

const API_KEY_PATTERN = /^sk-[a-zA-Z0-9]{48,}$/;
const LEGACY_API_KEY_PATTERN = /^sk-[a-zA-Z0-9]{32,}$/;

export interface APIKeyValidationResult {
  isValid: boolean;
  error?: string;
  warning?: string;
}

export function validateAPIKey(apiKey: string): APIKeyValidationResult {
  if (!apiKey || apiKey.trim() === '') {
    return {
      isValid: false,
      error: 'API 키를 입력해주세요.',
    };
  }

  const trimmedKey = apiKey.trim();

  // Check for common mistakes
  if (trimmedKey.includes(' ')) {
    return {
      isValid: false,
      error: 'API 키에 공백이 포함되어 있습니다.',
    };
  }

  if (!trimmedKey.startsWith('sk-')) {
    return {
      isValid: false,
      error: 'OpenAI API 키는 "sk-"로 시작해야 합니다.',
    };
  }

  // Check for test/example keys
  if (trimmedKey === 'sk-...your-api-key...' || 
      trimmedKey === 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx') {
    return {
      isValid: false,
      error: '유효한 API 키를 입력해주세요.',
    };
  }

  // Validate format
  if (API_KEY_PATTERN.test(trimmedKey)) {
    return { isValid: true };
  }

  if (LEGACY_API_KEY_PATTERN.test(trimmedKey)) {
    return {
      isValid: true,
      warning: '이전 형식의 API 키입니다. 새로운 키로 업데이트를 권장합니다.',
    };
  }

  return {
    isValid: false,
    error: 'API 키 형식이 올바르지 않습니다.',
  };
}

export async function verifyAPIKeyWithOpenAI(apiKey: string): Promise<boolean> {
  try {
    const response = await fetch('https://api.openai.com/v1/models', {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    if (response.status === 401) {
      toast.error('API 키가 유효하지 않습니다.');
      return false;
    }

    if (response.status === 429) {
      toast.warning('API 사용량 한도에 도달했습니다.');
      return true; // Key is valid but rate limited
    }

    if (response.ok) {
      toast.success('API 키가 확인되었습니다.');
      return true;
    }

    return false;
  } catch (error) {
    console.error('API key verification error:', error);
    toast.error('API 키 확인 중 오류가 발생했습니다.');
    return false;
  }
}

export function sanitizeAPIKey(apiKey: string): string {
  if (!apiKey) return '';
  
  const trimmed = apiKey.trim();
  
  // Remove any accidental quotes
  return trimmed.replace(/['"]/g, '');
}

export function maskAPIKey(apiKey: string): string {
  if (!apiKey || apiKey.length < 10) return '***';
  
  const start = apiKey.substring(0, 7);
  const end = apiKey.substring(apiKey.length - 4);
  
  return `${start}...${end}`;
}

export class APIKeyStorage {
  private static STORAGE_KEY = 'openai-api-key';
  private static ENCRYPTION_KEY = 'teaching-ai-hanshin';

  static save(apiKey: string): void {
    try {
      // Simple XOR encryption (for demonstration - use proper encryption in production)
      const encrypted = this.simpleEncrypt(apiKey);
      localStorage.setItem(this.STORAGE_KEY, encrypted);
    } catch (error) {
      console.error('Failed to save API key:', error);
      toast.error('API 키 저장에 실패했습니다.');
    }
  }

  static load(): string | null {
    try {
      const encrypted = localStorage.getItem(this.STORAGE_KEY);
      if (!encrypted) return null;
      
      return this.simpleDecrypt(encrypted);
    } catch (error) {
      console.error('Failed to load API key:', error);
      return null;
    }
  }

  static remove(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  private static simpleEncrypt(text: string): string {
    const key = this.ENCRYPTION_KEY;
    let result = '';
    
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i) ^ key.charCodeAt(i % key.length);
      result += String.fromCharCode(charCode);
    }
    
    return btoa(result);
  }

  private static simpleDecrypt(encrypted: string): string {
    try {
      const decoded = atob(encrypted);
      const key = this.ENCRYPTION_KEY;
      let result = '';
      
      for (let i = 0; i < decoded.length; i++) {
        const charCode = decoded.charCodeAt(i) ^ key.charCodeAt(i % key.length);
        result += String.fromCharCode(charCode);
      }
      
      return result;
    } catch {
      return '';
    }
  }
}