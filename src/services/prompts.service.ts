/**
 * 프롬프트 템플릿 서비스 - Opus 담당
 * 교육 관련 프롬프트 템플릿 관리 및 생성
 */

import { ChatMessage } from '@/types/openai';
import { CourseInfo, AssignmentInfo, FeedbackInfo } from '@/types/education';

export class PromptService {
  /**
   * 강의계획서 생성 프롬프트
   */
  static generateSyllabusPrompt(courseInfo: CourseInfo): ChatMessage[] {
    return [
      {
        role: 'system',
        content: `당신은 대학 강의계획서를 작성하는 교육 전문가입니다.
다음 원칙을 따라주세요:
1. Bloom's Taxonomy를 활용한 학습목표 설정
2. 주차별 점진적 난이도 상승
3. 이론과 실습의 적절한 배분
4. 명확하고 측정 가능한 평가 기준
5. 한국 대학 교육 환경에 맞는 구성`
      },
      {
        role: 'user',
        content: `과목명: ${courseInfo.name}
학점: ${courseInfo.credits}
시수: 주 ${courseInfo.hoursPerWeek}시간
대상: ${courseInfo.targetYear}학년
선수과목: ${courseInfo.prerequisites || '없음'}
과목 설명: ${courseInfo.description || ''}

15주차 강의계획서를 다음 형식으로 작성해주세요:

## 교과목 개요
[과목의 목적과 중요성을 2-3문장으로 설명]

## 학습목표 (Course Learning Outcomes)
1. [구체적이고 측정 가능한 학습목표 1]
2. [구체적이고 측정 가능한 학습목표 2]
3. [구체적이고 측정 가능한 학습목표 3]
4. [구체적이고 측정 가능한 학습목표 4]

## 주차별 세부 계획

### 1주차: [주제]
- **학습목표**: 
- **주요 내용**: 
- **수업 활동**: 
- **사전 학습**: 
- **과제**: 

[2-15주차 동일 형식으로 작성]

## 평가 방법
| 평가 항목 | 비율 | 평가 기준 |
|----------|------|----------|
| 중간고사 | 30% | [평가 기준] |
| 기말고사 | 30% | [평가 기준] |
| 과제 | 20% | [평가 기준] |
| 출석 | 10% | [평가 기준] |
| 참여도 | 10% | [평가 기준] |

## 교재 및 참고자료
- **주교재**: 
- **부교재**: 
- **참고자료**: 

## 수업 규칙
- 출석 정책:
- 과제 제출:
- 학습 윤리:`
      }
    ];
  }

  /**
   * 루브릭 생성 프롬프트
   */
  static generateRubricPrompt(assignmentInfo: AssignmentInfo): ChatMessage[] {
    return [
      {
        role: 'system',
        content: `당신은 공정하고 명확한 평가 루브릭을 설계하는 전문가입니다.
루브릭은 다음 요소를 포함해야 합니다:
1. 명확한 평가 항목 (4-5개)
2. 구체적인 수준별 기준 (3단계: 우수/보통/미흡)
3. 객관적이고 측정 가능한 지표
4. 적절한 가중치 배분 (합계 100%)
5. 학생이 이해하기 쉬운 표현`
      },
      {
        role: 'user',
        content: `과제 제목: ${assignmentInfo.title}
과제 유형: ${assignmentInfo.type}
과제 설명: ${assignmentInfo.description}
제출 형식: ${assignmentInfo.format}
학습목표: ${assignmentInfo.objectives?.join(', ') || ''}

위 과제에 대한 평가 루브릭을 만들어주세요.

## 루브릭 형식:

| 평가항목 | 가중치 | 우수 (90-100점) | 보통 (70-89점) | 미흡 (0-69점) |
|---------|--------|-----------------|----------------|---------------|
| [항목1] | [%] | [구체적 기준] | [구체적 기준] | [구체적 기준] |
| [항목2] | [%] | [구체적 기준] | [구체적 기준] | [구체적 기준] |
| [항목3] | [%] | [구체적 기준] | [구체적 기준] | [구체적 기준] |
| [항목4] | [%] | [구체적 기준] | [구체적 기준] | [구체적 기준] |

각 평가 항목별로 다음을 포함해주세요:
- 평가하고자 하는 역량
- 관찰 가능한 증거
- 구체적인 예시`
      }
    ];
  }

  /**
   * 과제 생성 프롬프트
   */
  static generateAssignmentPrompt(
    objectives: string[],
    level: 'basic' | 'intermediate' | 'advanced',
    type: string
  ): ChatMessage[] {
    const levelText = {
      basic: '기초 (개념 이해 중심)',
      intermediate: '중급 (응용 및 분석)',
      advanced: '고급 (창의적 문제 해결)'
    };

    return [
      {
        role: 'system',
        content: `당신은 창의적이고 교육적인 과제를 설계하는 전문가입니다.
과제는 다음 원칙을 따라야 합니다:
1. 학습목표와 명확히 연계
2. 학생의 흥미와 동기 유발
3. 실제 상황과 연결된 문제
4. 단계별 명확한 지침
5. 평가 기준의 투명성`
      },
      {
        role: 'user',
        content: `학습목표:
${objectives.map((obj, i) => `${i + 1}. ${obj}`).join('\n')}

난이도: ${levelText[level]}
과제 유형: ${type}

위 학습목표를 평가할 수 있는 과제를 설계해주세요.

## 과제 설계서

### 과제 제목
[흥미롭고 명확한 제목]

### 과제 개요
[과제의 목적과 배경을 3-4문장으로 설명]

### 구체적 요구사항
1. [명확한 요구사항 1]
2. [명확한 요구사항 2]
3. [명확한 요구사항 3]
4. [명확한 요구사항 4]
5. [명확한 요구사항 5]

### 제출 형식
- 형식: [보고서/코드/발표자료 등]
- 분량: [구체적 분량]
- 제출 방법: [제출 방식]
- 마감일: [상대적 기간]

### 평가 기준 (간략)
- [주요 평가 요소 1] (00%)
- [주요 평가 요소 2] (00%)
- [주요 평가 요소 3] (00%)
- [주요 평가 요소 4] (00%)

### 예상 소요 시간
[학생이 과제 완성에 필요한 예상 시간]

### 도움 자료
- [참고 자료 1]
- [참고 자료 2]
- [유용한 도구나 웹사이트]

### 팁과 주의사항
- [성공적 완성을 위한 팁 1]
- [주의해야 할 사항 1]
- [자주 하는 실수와 해결법]`
      }
    ];
  }

  /**
   * 피드백 생성 프롬프트
   */
  static generateFeedbackPrompt(feedbackInfo: FeedbackInfo): ChatMessage[] {
    return [
      {
        role: 'system',
        content: `당신은 건설적이고 격려하는 피드백을 제공하는 교육자입니다.
피드백 작성 원칙:
1. 구체적이고 행동 가능한 조언
2. 강점을 먼저 인정하고 격려
3. 개선점은 건설적으로 제시
4. 학생의 성장을 돕는 방향
5. 명확하고 이해하기 쉬운 표현`
      },
      {
        role: 'user',
        content: `학생 제출물 요약:
${feedbackInfo.submissionSummary}

평가 루브릭:
${feedbackInfo.rubric ? JSON.stringify(feedbackInfo.rubric, null, 2) : '일반 평가'}

획득 점수: ${feedbackInfo.score}/100

위 정보를 바탕으로 학생에게 피드백을 작성해주세요.

## 피드백

### 잘한 점 (강점)
• [구체적인 강점 1 - 예시나 증거 포함]
• [구체적인 강점 2 - 예시나 증거 포함]
• [구체적인 강점 3 - 예시나 증거 포함]

### 개선이 필요한 부분
• [개선점 1]: [구체적 문제] → [개선 방법]
• [개선점 2]: [구체적 문제] → [개선 방법]
• [개선점 3]: [구체적 문제] → [개선 방법]

### 다음 과제를 위한 조언
1. [실천 가능한 구체적 조언 1]
2. [실천 가능한 구체적 조언 2]

### 추가 학습 자료
- [도움이 될 자료나 참고 사항]

총평: [2-3문장으로 격려와 함께 전체적인 평가 요약]`
      }
    ];
  }

  /**
   * 학습목표(CLO) 생성 프롬프트
   */
  static generateCLOPrompt(courseName: string, courseDescription: string): ChatMessage[] {
    return [
      {
        role: 'system',
        content: `당신은 Bloom's Taxonomy를 활용한 학습목표 설정 전문가입니다.
학습목표는 SMART 원칙을 따라야 합니다:
- Specific (구체적)
- Measurable (측정가능)
- Achievable (달성가능)
- Relevant (관련성)
- Time-bound (시간제한)`
      },
      {
        role: 'user',
        content: `과목명: ${courseName}
과목 설명: ${courseDescription}

이 과목의 학습목표(Course Learning Outcomes)를 6개 생성해주세요.
Bloom's Taxonomy의 각 수준별로 1개씩 작성하되, 실제 수업에서 달성 가능한 목표로 설정해주세요.

## 학습목표 (CLOs)

### 1. 기억 (Remember) - 지식 회상
[학생은 ~을 정의할 수 있다/나열할 수 있다/식별할 수 있다]

### 2. 이해 (Understand) - 의미 구성
[학생은 ~을 설명할 수 있다/요약할 수 있다/비교할 수 있다]

### 3. 적용 (Apply) - 절차 실행
[학생은 ~을 적용할 수 있다/구현할 수 있다/해결할 수 있다]

### 4. 분석 (Analyze) - 관계 파악
[학생은 ~을 분석할 수 있다/구분할 수 있다/조직할 수 있다]

### 5. 평가 (Evaluate) - 판단
[학생은 ~을 평가할 수 있다/비판할 수 있다/정당화할 수 있다]

### 6. 창조 (Create) - 새로운 생성
[학생은 ~을 설계할 수 있다/개발할 수 있다/창작할 수 있다]`
      }
    ];
  }

  /**
   * 퀴즈/시험 문제 생성 프롬프트
   */
  static generateQuizPrompt(
    topic: string,
    questionCount: number,
    questionTypes: string[]
  ): ChatMessage[] {
    return [
      {
        role: 'system',
        content: `당신은 교육 평가 문항을 개발하는 전문가입니다.
문제는 다음 원칙을 따라야 합니다:
1. 명확하고 모호하지 않은 문장
2. 학습목표와 직접적 연관
3. 적절한 난이도 분포
4. 정답의 명확성
5. 교육적 가치`
      },
      {
        role: 'user',
        content: `주제: ${topic}
문제 수: ${questionCount}개
문제 유형: ${questionTypes.join(', ')}

위 조건에 맞는 평가 문제를 생성해주세요.

## 평가 문제

${Array.from({ length: questionCount }, (_, i) => `
### 문제 ${i + 1}
**유형**: [객관식/주관식/서술형/문제해결형]
**난이도**: [상/중/하]
**배점**: [00점]

**문제**:
[문제 내용]

**선택지** (객관식인 경우):
1) [선택지 1]
2) [선택지 2]
3) [선택지 3]
4) [선택지 4]

**정답**:
[정답 및 간단한 설명]

**채점 기준** (주관식/서술형인 경우):
- [채점 포인트 1]
- [채점 포인트 2]
`).join('\n')}`
      }
    ];
  }

  /**
   * 동적 프롬프트 생성 (커스텀 요청)
   */
  static generateCustomPrompt(
    context: string,
    request: string,
    format?: string
  ): ChatMessage[] {
    return [
      {
        role: 'system',
        content: `당신은 대학 교육을 지원하는 AI 조교입니다.
교육학적 원칙을 바탕으로 도움을 제공하며, 
한국 대학 교육 환경과 문화를 이해하고 있습니다.`
      },
      {
        role: 'user',
        content: `맥락: ${context}

요청사항: ${request}

${format ? `출력 형식: ${format}` : '적절한 형식으로 응답해주세요.'}`
      }
    ];
  }
}