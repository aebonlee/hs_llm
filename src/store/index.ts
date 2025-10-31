import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { OpenAIService } from '@/services/openai.service';
import { StorageService } from '@/services/storage.service';
import { PromptService } from '@/services/prompts.service';
import { ExportService } from '@/services/export.service';
import type { 
  Course, 
  Rubric, 
  Assignment, 
  GeneratedContent 
} from '@/types/education';

interface AppState {
  // Services
  openAIService: OpenAIService;
  storageService: StorageService;
  promptService: PromptService;
  exportService: ExportService;
  
  // Current state
  currentCourse: Course | null;
  currentRubric: Rubric | null;
  currentAssignment: Assignment | null;
  
  // Generated content
  generatedContent: GeneratedContent | null;
  isGenerating: boolean;
  
  // Settings
  apiKey: string;
  selectedModel: string;
  
  // Actions
  setApiKey: (key: string) => void;
  setCurrentCourse: (course: Course) => void;
  setCurrentRubric: (rubric: Rubric) => void;
  setCurrentAssignment: (assignment: Assignment) => void;
  generateContent: (type: string, params: any) => Promise<void>;
  saveContent: (content: any) => void;
  exportContent: (format: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Initialize services
      openAIService: new OpenAIService({ apiKey: '' }),
      storageService: new StorageService(),
      promptService: new PromptService(),
      exportService: new ExportService(),
      
      // Initial state
      currentCourse: null,
      currentRubric: null,
      currentAssignment: null,
      generatedContent: null,
      isGenerating: false,
      apiKey: '',
      selectedModel: 'gpt-3.5-turbo',
      
      // Actions
      setApiKey: (key: string) => {
        const { storageService } = get();
        const newOpenAIService = new OpenAIService({ apiKey: key });
        storageService.saveApiKey(key);
        set({ apiKey: key, openAIService: newOpenAIService });
      },
      
      setCurrentCourse: (course: Course) => {
        set({ currentCourse: course });
      },
      
      setCurrentRubric: (rubric: Rubric) => {
        set({ currentRubric: rubric });
      },
      
      setCurrentAssignment: (assignment: Assignment) => {
        set({ currentAssignment: assignment });
      },
      
      generateContent: async (type: string, params: any) => {
        const { openAIService } = get();
        set({ isGenerating: true });
        
        try {
          let messages: any[] = [];
          
          switch (type) {
            case 'syllabus':
              messages = PromptService.generateSyllabusPrompt(params);
              break;
            case 'rubric':
              messages = PromptService.generateRubricPrompt(params);
              break;
            case 'assignment':
              messages = PromptService.generateAssignmentPrompt(params.objectives || [], params.level || 'basic', params.type || 'general');
              break;
            case 'feedback':
              messages = PromptService.generateFeedbackPrompt(params);
              break;
            default:
              throw new Error(`Unknown content type: ${type}`);
          }
          
          const content = await openAIService.complete(messages);
          set({ generatedContent: { type, content, params }, isGenerating: false });
        } catch (error) {
          console.error('Content generation failed:', error);
          set({ isGenerating: false });
          throw error;
        }
      },
      
      saveContent: (content: any) => {
        // Content is automatically saved in local storage through persistence
        console.log('Content saved:', content);
      },
      
      exportContent: (format: string) => {
        const { generatedContent } = get();
        if (!generatedContent) return;
        
        switch (format) {
          case 'pdf':
            ExportService.downloadPDF(generatedContent.content, `document_${Date.now()}`);
            break;
          case 'markdown':
            ExportService.downloadMarkdown(generatedContent.content, `document_${Date.now()}`);
            break;
          case 'json':
            ExportService.downloadJSON(generatedContent, `document_${Date.now()}`);
            break;
          default:
            throw new Error(`Unknown export format: ${format}`);
        }
      },
    }),
    {
      name: 'teaching-assistant-storage',
      partialize: (state) => ({
        apiKey: state.apiKey,
        selectedModel: state.selectedModel,
        currentCourse: state.currentCourse,
      }),
    }
  )
);