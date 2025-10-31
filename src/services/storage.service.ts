/**
 * Storage Service - Opus 담당
 * LocalStorage를 활용한 데이터 저장 및 관리
 */

import { Syllabus, RubricInfo, AssignmentInfo, Quiz } from '@/types/education';
import { ChatMessage } from '@/types/openai';

export interface StorageData {
  apiKey?: string;
  chatHistory: ChatMessage[];
  syllabi: Syllabus[];
  rubrics: RubricInfo[];
  assignments: AssignmentInfo[];
  quizzes: Quiz[];
  preferences: UserPreferences;
  recentWork: RecentWork[];
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: 'ko' | 'en';
  model: string;
  temperature: number;
  maxTokens: number;
  autoSave: boolean;
}

export interface RecentWork {
  id: string;
  type: 'syllabus' | 'rubric' | 'assignment' | 'quiz' | 'chat';
  title: string;
  timestamp: string;
  data?: any;
}

export class StorageService {
  private readonly PREFIX = 'ta_ai_';
  private readonly ENCRYPTION_KEY = 'teaching-assistant-2024';

  /**
   * API Key 관리 (암호화 저장)
   */
  saveApiKey(apiKey: string): void {
    const encrypted = this.encrypt(apiKey);
    localStorage.setItem(`${this.PREFIX}api_key`, encrypted);
  }

  getApiKey(): string | null {
    const encrypted = localStorage.getItem(`${this.PREFIX}api_key`);
    if (!encrypted) return null;
    
    try {
      return this.decrypt(encrypted);
    } catch {
      // 복호화 실패시 키 삭제
      this.removeApiKey();
      return null;
    }
  }

  removeApiKey(): void {
    localStorage.removeItem(`${this.PREFIX}api_key`);
  }

  /**
   * 채팅 히스토리 관리
   */
  saveChatHistory(messages: ChatMessage[]): void {
    // 최대 100개 메시지만 저장 (메모리 관리)
    const trimmedMessages = messages.slice(-100);
    this.save('chat_history', trimmedMessages);
  }

  getChatHistory(): ChatMessage[] {
    return this.get<ChatMessage[]>('chat_history') || [];
  }

  clearChatHistory(): void {
    this.remove('chat_history');
  }

  /**
   * 강의계획서 관리
   */
  saveSyllabus(syllabus: Syllabus): void {
    const syllabi = this.getSyllabi();
    
    // 중복 체크 (같은 과목명)
    const existingIndex = syllabi.findIndex(s => 
      s.courseInfo.name === syllabus.courseInfo.name
    );
    
    if (existingIndex >= 0) {
      syllabi[existingIndex] = syllabus;
    } else {
      syllabi.push(syllabus);
    }
    
    // 최대 20개까지만 저장
    const trimmedSyllabi = syllabi.slice(-20);
    this.save('syllabi', trimmedSyllabi);
    
    // 최근 작업 추가
    this.addRecentWork({
      type: 'syllabus',
      title: syllabus.courseInfo.name,
      data: syllabus
    });
  }

  getSyllabi(): Syllabus[] {
    return this.get<Syllabus[]>('syllabi') || [];
  }

  getSyllabus(courseName: string): Syllabus | null {
    const syllabi = this.getSyllabi();
    return syllabi.find(s => s.courseInfo.name === courseName) || null;
  }

  deleteSyllabus(courseName: string): void {
    const syllabi = this.getSyllabi();
    const filtered = syllabi.filter(s => s.courseInfo.name !== courseName);
    this.save('syllabi', filtered);
  }

  /**
   * 루브릭 관리
   */
  saveRubric(rubric: RubricInfo): void {
    const rubrics = this.getRubrics();
    
    // 중복 체크
    const existingIndex = rubrics.findIndex(r => 
      r.assignmentTitle === rubric.assignmentTitle
    );
    
    if (existingIndex >= 0) {
      rubrics[existingIndex] = rubric;
    } else {
      rubrics.push(rubric);
    }
    
    // 최대 30개까지 저장
    const trimmedRubrics = rubrics.slice(-30);
    this.save('rubrics', trimmedRubrics);
    
    // 최근 작업 추가
    this.addRecentWork({
      type: 'rubric',
      title: rubric.assignmentTitle,
      data: rubric
    });
  }

  getRubrics(): RubricInfo[] {
    return this.get<RubricInfo[]>('rubrics') || [];
  }

  getRubric(assignmentTitle: string): RubricInfo | null {
    const rubrics = this.getRubrics();
    return rubrics.find(r => r.assignmentTitle === assignmentTitle) || null;
  }

  /**
   * 과제 관리
   */
  saveAssignment(assignment: AssignmentInfo): void {
    const assignments = this.getAssignments();
    
    const existingIndex = assignments.findIndex(a => 
      a.title === assignment.title
    );
    
    if (existingIndex >= 0) {
      assignments[existingIndex] = assignment;
    } else {
      assignments.push(assignment);
    }
    
    const trimmedAssignments = assignments.slice(-30);
    this.save('assignments', trimmedAssignments);
    
    this.addRecentWork({
      type: 'assignment',
      title: assignment.title,
      data: assignment
    });
  }

  getAssignments(): AssignmentInfo[] {
    return this.get<AssignmentInfo[]>('assignments') || [];
  }

  /**
   * 사용자 설정 관리
   */
  savePreferences(preferences: Partial<UserPreferences>): void {
    const current = this.getPreferences();
    const updated = { ...current, ...preferences };
    this.save('preferences', updated);
  }

  getPreferences(): UserPreferences {
    const saved = this.get<UserPreferences>('preferences');
    
    // 기본값
    const defaults: UserPreferences = {
      theme: 'system',
      language: 'ko',
      model: 'gpt-3.5-turbo',
      temperature: 0.7,
      maxTokens: 2000,
      autoSave: true
    };
    
    return { ...defaults, ...saved };
  }

  /**
   * 최근 작업 관리
   */
  private addRecentWork(work: Omit<RecentWork, 'id' | 'timestamp'>): void {
    const recentWork = this.getRecentWork();
    
    const newWork: RecentWork = {
      ...work,
      id: this.generateId(),
      timestamp: new Date().toISOString()
    };
    
    recentWork.unshift(newWork);
    
    // 최대 50개까지만 저장
    const trimmed = recentWork.slice(0, 50);
    this.save('recent_work', trimmed);
  }

  getRecentWork(): RecentWork[] {
    return this.get<RecentWork[]>('recent_work') || [];
  }

  /**
   * 전체 데이터 내보내기/가져오기
   */
  exportAllData(): StorageData {
    return {
      chatHistory: this.getChatHistory(),
      syllabi: this.getSyllabi(),
      rubrics: this.getRubrics(),
      assignments: this.getAssignments(),
      quizzes: this.get<Quiz[]>('quizzes') || [],
      preferences: this.getPreferences(),
      recentWork: this.getRecentWork()
    };
  }

  importData(data: Partial<StorageData>): void {
    if (data.chatHistory) this.saveChatHistory(data.chatHistory);
    if (data.syllabi) this.save('syllabi', data.syllabi);
    if (data.rubrics) this.save('rubrics', data.rubrics);
    if (data.assignments) this.save('assignments', data.assignments);
    if (data.quizzes) this.save('quizzes', data.quizzes);
    if (data.preferences) this.savePreferences(data.preferences);
    if (data.recentWork) this.save('recent_work', data.recentWork);
  }

  /**
   * 스토리지 관리
   */
  clearAll(): void {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith(this.PREFIX)) {
        localStorage.removeItem(key);
      }
    });
  }

  getStorageSize(): number {
    let size = 0;
    const keys = Object.keys(localStorage);
    
    keys.forEach(key => {
      if (key.startsWith(this.PREFIX)) {
        const value = localStorage.getItem(key) || '';
        size += key.length + value.length;
      }
    });
    
    return size;
  }

  /**
   * Private 메서드
   */
  private save<T>(key: string, data: T): void {
    try {
      const json = JSON.stringify(data);
      localStorage.setItem(`${this.PREFIX}${key}`, json);
    } catch (e) {
      console.error(`Failed to save ${key}:`, e);
      
      // 용량 초과시 오래된 데이터 삭제
      if (e instanceof DOMException && e.code === 22) {
        this.cleanupOldData();
        // 재시도
        try {
          const json = JSON.stringify(data);
          localStorage.setItem(`${this.PREFIX}${key}`, json);
        } catch {
          throw new Error('Storage quota exceeded');
        }
      }
    }
  }

  private get<T>(key: string): T | null {
    try {
      const json = localStorage.getItem(`${this.PREFIX}${key}`);
      if (!json) return null;
      return JSON.parse(json);
    } catch {
      return null;
    }
  }

  private remove(key: string): void {
    localStorage.removeItem(`${this.PREFIX}${key}`);
  }

  private encrypt(text: string): string {
    // 간단한 XOR 암호화 (실제 프로덕션에서는 더 강력한 암호화 사용)
    const key = this.ENCRYPTION_KEY;
    let encrypted = '';
    
    for (let i = 0; i < text.length; i++) {
      encrypted += String.fromCharCode(
        text.charCodeAt(i) ^ key.charCodeAt(i % key.length)
      );
    }
    
    return btoa(encrypted);
  }

  private decrypt(encrypted: string): string {
    const text = atob(encrypted);
    const key = this.ENCRYPTION_KEY;
    let decrypted = '';
    
    for (let i = 0; i < text.length; i++) {
      decrypted += String.fromCharCode(
        text.charCodeAt(i) ^ key.charCodeAt(i % key.length)
      );
    }
    
    return decrypted;
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }

  private cleanupOldData(): void {
    // 오래된 최근 작업 삭제
    const recentWork = this.getRecentWork();
    this.save('recent_work', recentWork.slice(0, 10));
    
    // 오래된 채팅 히스토리 삭제
    const chatHistory = this.getChatHistory();
    this.saveChatHistory(chatHistory.slice(-50));
  }
}