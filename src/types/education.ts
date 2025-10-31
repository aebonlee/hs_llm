/**
 * 교육 관련 타입 정의
 */

export interface CourseInfo {
  name: string;
  credits: number;
  hoursPerWeek: number;
  targetYear: string;
  prerequisites?: string;
  description?: string;
  department?: string;
  semester?: string;
}

export interface AssignmentInfo {
  title: string;
  type: 'theory' | 'practice' | 'presentation' | 'project' | 'report';
  description: string;
  format: string;
  objectives?: string[];
  dueDate?: string;
  points?: number;
}

export interface RubricCriterion {
  name: string;
  weight: number;
  excellent: string;
  good: string;
  needsImprovement: string;
}

export interface RubricInfo {
  assignmentTitle: string;
  criteria: RubricCriterion[];
  totalPoints: number;
}

export interface FeedbackInfo {
  submissionSummary: string;
  rubric?: RubricInfo;
  score: number;
  studentName?: string;
  assignmentTitle?: string;
}

export interface CLO {
  id: string;
  description: string;
  bloomLevel: 1 | 2 | 3 | 4 | 5 | 6;
  bloomCategory: 'Remember' | 'Understand' | 'Apply' | 'Analyze' | 'Evaluate' | 'Create';
  actionVerbs: string[];
}

export interface WeeklyPlan {
  week: number;
  topic: string;
  objectives: string[];
  content: string[];
  activities: string[];
  assignments?: string;
  readings?: string[];
}

export interface Syllabus {
  courseInfo: CourseInfo;
  courseOverview: string;
  learningOutcomes: CLO[];
  weeklyPlans: WeeklyPlan[];
  evaluationMethod: EvaluationMethod;
  textbooks: Textbooks;
  policies: CoursePolicies;
}

export interface EvaluationMethod {
  midterm: number;
  final: number;
  assignments: number;
  attendance: number;
  participation: number;
  other?: { name: string; percentage: number }[];
}

export interface Textbooks {
  required?: string[];
  recommended?: string[];
  references?: string[];
}

export interface CoursePolicies {
  attendance: string;
  lateSubmission: string;
  academicIntegrity: string;
  other?: string[];
}

export interface Quiz {
  id: string;
  topic: string;
  questions: Question[];
  totalPoints: number;
  timeLimit?: number;
}

export interface Question {
  id: string;
  type: 'multiple-choice' | 'short-answer' | 'essay' | 'problem-solving';
  question: string;
  points: number;
  difficulty: 'easy' | 'medium' | 'hard';
  choices?: string[];
  correctAnswer?: string | number;
  gradingCriteria?: string[];
  bloomLevel?: number;
}