/**
 * Export Service - Opus 담당
 * 다양한 형식으로 데이터 내보내기 기능
 */

import { jsPDF } from 'jspdf';
import { Syllabus, RubricInfo, AssignmentInfo, Quiz } from '@/types/education';
import { ChatMessage } from '@/types/openai';

export type ExportFormat = 'json' | 'markdown' | 'pdf' | 'csv' | 'html';

export interface ExportOptions {
  format: ExportFormat;
  filename?: string;
  includeMetadata?: boolean;
  includeTimestamp?: boolean;
}

export class ExportService {
  /**
   * 강의계획서 내보내기
   */
  exportSyllabus(syllabus: Syllabus, options: ExportOptions): void {
    const filename = options.filename || `syllabus_${syllabus.courseInfo.name}_${Date.now()}`;
    
    switch (options.format) {
      case 'json':
        this.exportAsJSON(syllabus, filename);
        break;
      case 'markdown':
        this.exportSyllabusAsMarkdown(syllabus, filename);
        break;
      case 'pdf':
        this.exportSyllabusAsPDF(syllabus, filename);
        break;
      case 'html':
        this.exportSyllabusAsHTML(syllabus, filename);
        break;
      default:
        throw new Error(`Unsupported format: ${options.format}`);
    }
  }

  /**
   * 루브릭 내보내기
   */
  exportRubric(rubric: RubricInfo, options: ExportOptions): void {
    const filename = options.filename || `rubric_${rubric.assignmentTitle}_${Date.now()}`;
    
    switch (options.format) {
      case 'json':
        this.exportAsJSON(rubric, filename);
        break;
      case 'markdown':
        this.exportRubricAsMarkdown(rubric, filename);
        break;
      case 'pdf':
        this.exportRubricAsPDF(rubric, filename);
        break;
      case 'csv':
        this.exportRubricAsCSV(rubric, filename);
        break;
      default:
        throw new Error(`Unsupported format: ${options.format}`);
    }
  }

  /**
   * 채팅 히스토리 내보내기
   */
  exportChatHistory(messages: ChatMessage[], options: ExportOptions): void {
    const filename = options.filename || `chat_history_${Date.now()}`;
    
    switch (options.format) {
      case 'json':
        this.exportAsJSON(messages, filename);
        break;
      case 'markdown':
        this.exportChatAsMarkdown(messages, filename);
        break;
      case 'pdf':
        this.exportChatAsPDF(messages, filename);
        break;
      default:
        throw new Error(`Unsupported format: ${options.format}`);
    }
  }

  /**
   * JSON 형식 내보내기
   */
  private exportAsJSON(data: any, filename: string): void {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    this.download(blob, `${filename}.json`);
  }

  /**
   * 강의계획서 Markdown 변환
   */
  private exportSyllabusAsMarkdown(syllabus: Syllabus, filename: string): void {
    let markdown = `# ${syllabus.courseInfo.name}\n\n`;
    
    // 과목 정보
    markdown += `## 과목 정보\n`;
    markdown += `- **학점**: ${syllabus.courseInfo.credits}\n`;
    markdown += `- **시수**: 주 ${syllabus.courseInfo.hoursPerWeek}시간\n`;
    markdown += `- **대상**: ${syllabus.courseInfo.targetYear}학년\n`;
    if (syllabus.courseInfo.prerequisites) {
      markdown += `- **선수과목**: ${syllabus.courseInfo.prerequisites}\n`;
    }
    markdown += '\n';
    
    // 과목 개요
    markdown += `## 과목 개요\n`;
    markdown += `${syllabus.courseOverview}\n\n`;
    
    // 학습목표
    markdown += `## 학습목표 (CLOs)\n`;
    syllabus.learningOutcomes.forEach((clo, index) => {
      markdown += `${index + 1}. ${clo.description} (${clo.bloomCategory})\n`;
    });
    markdown += '\n';
    
    // 주차별 계획
    markdown += `## 주차별 세부 계획\n\n`;
    syllabus.weeklyPlans.forEach(week => {
      markdown += `### ${week.week}주차: ${week.topic}\n`;
      markdown += `**학습목표**:\n`;
      week.objectives.forEach(obj => {
        markdown += `- ${obj}\n`;
      });
      markdown += `\n**주요 내용**:\n`;
      week.content.forEach(content => {
        markdown += `- ${content}\n`;
      });
      if (week.assignments) {
        markdown += `\n**과제**: ${week.assignments}\n`;
      }
      markdown += '\n';
    });
    
    // 평가 방법
    markdown += `## 평가 방법\n`;
    markdown += `| 항목 | 비율 |\n`;
    markdown += `|------|------|\n`;
    markdown += `| 중간고사 | ${syllabus.evaluationMethod.midterm}% |\n`;
    markdown += `| 기말고사 | ${syllabus.evaluationMethod.final}% |\n`;
    markdown += `| 과제 | ${syllabus.evaluationMethod.assignments}% |\n`;
    markdown += `| 출석 | ${syllabus.evaluationMethod.attendance}% |\n`;
    markdown += `| 참여도 | ${syllabus.evaluationMethod.participation}% |\n\n`;
    
    // 교재
    markdown += `## 교재 및 참고자료\n`;
    if (syllabus.textbooks.required) {
      markdown += `### 주교재\n`;
      syllabus.textbooks.required.forEach(book => {
        markdown += `- ${book}\n`;
      });
    }
    if (syllabus.textbooks.recommended) {
      markdown += `### 부교재\n`;
      syllabus.textbooks.recommended.forEach(book => {
        markdown += `- ${book}\n`;
      });
    }
    
    const blob = new Blob([markdown], { type: 'text/markdown' });
    this.download(blob, `${filename}.md`);
  }

  /**
   * 루브릭 Markdown 변환
   */
  private exportRubricAsMarkdown(rubric: RubricInfo, filename: string): void {
    let markdown = `# ${rubric.assignmentTitle} - 평가 루브릭\n\n`;
    markdown += `**총점**: ${rubric.totalPoints}점\n\n`;
    
    markdown += `| 평가항목 | 가중치 | 우수 (90-100) | 보통 (70-89) | 미흡 (0-69) |\n`;
    markdown += `|---------|--------|---------------|--------------|-------------|\n`;
    
    rubric.criteria.forEach(criterion => {
      markdown += `| ${criterion.name} | ${criterion.weight}% | ${criterion.excellent} | ${criterion.good} | ${criterion.needsImprovement} |\n`;
    });
    
    const blob = new Blob([markdown], { type: 'text/markdown' });
    this.download(blob, `${filename}.md`);
  }

  /**
   * 루브릭 CSV 변환
   */
  private exportRubricAsCSV(rubric: RubricInfo, filename: string): void {
    let csv = 'Assessment Item,Weight,Excellent (90-100),Good (70-89),Needs Improvement (0-69)\n';
    
    rubric.criteria.forEach(criterion => {
      csv += `"${criterion.name}",${criterion.weight}%,"${criterion.excellent}","${criterion.good}","${criterion.needsImprovement}"\n`;
    });
    
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8' });
    this.download(blob, `${filename}.csv`);
  }

  /**
   * 채팅 Markdown 변환
   */
  private exportChatAsMarkdown(messages: ChatMessage[], filename: string): void {
    let markdown = `# 채팅 기록\n\n`;
    markdown += `생성일: ${new Date().toLocaleString('ko-KR')}\n\n`;
    markdown += '---\n\n';
    
    messages.forEach(message => {
      const role = message.role === 'user' ? '👤 사용자' : '🤖 AI';
      markdown += `### ${role}\n\n`;
      markdown += `${message.content}\n\n`;
      markdown += '---\n\n';
    });
    
    const blob = new Blob([markdown], { type: 'text/markdown' });
    this.download(blob, `${filename}.md`);
  }

  /**
   * PDF 생성 (한글 폰트 포함)
   */
  private exportSyllabusAsPDF(syllabus: Syllabus, filename: string): void {
    const doc = new jsPDF();
    let yPosition = 20;
    const lineHeight = 7;
    const pageHeight = doc.internal.pageSize.height;
    
    // 제목
    doc.setFontSize(20);
    doc.text(syllabus.courseInfo.name, 20, yPosition);
    yPosition += lineHeight * 2;
    
    // 과목 정보
    doc.setFontSize(12);
    doc.text(`Credits: ${syllabus.courseInfo.credits}`, 20, yPosition);
    yPosition += lineHeight;
    doc.text(`Hours per week: ${syllabus.courseInfo.hoursPerWeek}`, 20, yPosition);
    yPosition += lineHeight;
    doc.text(`Target: ${syllabus.courseInfo.targetYear}`, 20, yPosition);
    yPosition += lineHeight * 2;
    
    // 학습목표
    doc.setFontSize(14);
    doc.text('Learning Outcomes', 20, yPosition);
    yPosition += lineHeight;
    
    doc.setFontSize(10);
    syllabus.learningOutcomes.forEach((clo, index) => {
      if (yPosition > pageHeight - 20) {
        doc.addPage();
        yPosition = 20;
      }
      
      const text = `${index + 1}. ${clo.description}`;
      const lines = doc.splitTextToSize(text, 170);
      lines.forEach(line => {
        doc.text(line, 20, yPosition);
        yPosition += lineHeight;
      });
    });
    
    // 주차별 계획 (요약)
    if (yPosition > pageHeight - 40) {
      doc.addPage();
      yPosition = 20;
    }
    
    doc.setFontSize(14);
    doc.text('Weekly Schedule', 20, yPosition);
    yPosition += lineHeight;
    
    doc.setFontSize(10);
    syllabus.weeklyPlans.forEach(week => {
      if (yPosition > pageHeight - 20) {
        doc.addPage();
        yPosition = 20;
      }
      
      doc.text(`Week ${week.week}: ${week.topic}`, 20, yPosition);
      yPosition += lineHeight;
    });
    
    doc.save(`${filename}.pdf`);
  }

  /**
   * 루브릭 PDF 생성
   */
  private exportRubricAsPDF(rubric: RubricInfo, filename: string): void {
    const doc = new jsPDF('l', 'mm', 'a4'); // 가로 방향
    
    // 제목
    doc.setFontSize(16);
    doc.text(rubric.assignmentTitle, 20, 20);
    doc.text(`Total Points: ${rubric.totalPoints}`, 20, 30);
    
    // 테이블 헤더
    let yPosition = 45;
    doc.setFontSize(10);
    doc.text('Criteria', 20, yPosition);
    doc.text('Weight', 60, yPosition);
    doc.text('Excellent', 80, yPosition);
    doc.text('Good', 130, yPosition);
    doc.text('Needs Improvement', 180, yPosition);
    
    // 구분선
    doc.line(20, yPosition + 2, 270, yPosition + 2);
    yPosition += 10;
    
    // 테이블 내용
    rubric.criteria.forEach(criterion => {
      // 긴 텍스트 처리
      const excellentLines = doc.splitTextToSize(criterion.excellent, 45);
      const goodLines = doc.splitTextToSize(criterion.good, 45);
      const needsImprovementLines = doc.splitTextToSize(criterion.needsImprovement, 45);
      
      const maxLines = Math.max(
        excellentLines.length,
        goodLines.length,
        needsImprovementLines.length
      );
      
      doc.text(criterion.name, 20, yPosition);
      doc.text(`${criterion.weight}%`, 60, yPosition);
      
      excellentLines.forEach((line, i) => {
        doc.text(line, 80, yPosition + (i * 5));
      });
      
      goodLines.forEach((line, i) => {
        doc.text(line, 130, yPosition + (i * 5));
      });
      
      needsImprovementLines.forEach((line, i) => {
        doc.text(line, 180, yPosition + (i * 5));
      });
      
      yPosition += maxLines * 5 + 5;
      
      // 페이지 넘김 체크
      if (yPosition > 180) {
        doc.addPage();
        yPosition = 20;
      }
    });
    
    doc.save(`${filename}.pdf`);
  }

  /**
   * 채팅 PDF 생성
   */
  private exportChatAsPDF(messages: ChatMessage[], filename: string): void {
    const doc = new jsPDF();
    let yPosition = 20;
    const lineHeight = 7;
    const pageHeight = doc.internal.pageSize.height;
    
    // 제목
    doc.setFontSize(16);
    doc.text('Chat History', 20, yPosition);
    doc.setFontSize(10);
    yPosition += lineHeight;
    doc.text(`Date: ${new Date().toLocaleString()}`, 20, yPosition);
    yPosition += lineHeight * 2;
    
    // 메시지
    messages.forEach(message => {
      if (yPosition > pageHeight - 30) {
        doc.addPage();
        yPosition = 20;
      }
      
      // 역할
      doc.setFontSize(12);
      const role = message.role === 'user' ? 'User' : 'Assistant';
      doc.text(role, 20, yPosition);
      yPosition += lineHeight;
      
      // 내용
      doc.setFontSize(10);
      const lines = doc.splitTextToSize(message.content, 170);
      lines.forEach(line => {
        if (yPosition > pageHeight - 20) {
          doc.addPage();
          yPosition = 20;
        }
        doc.text(line, 25, yPosition);
        yPosition += lineHeight;
      });
      
      yPosition += lineHeight;
    });
    
    doc.save(`${filename}.pdf`);
  }

  /**
   * HTML 형식 내보내기
   */
  private exportSyllabusAsHTML(syllabus: Syllabus, filename: string): void {
    let html = `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${syllabus.courseInfo.name} - 강의계획서</title>
    <style>
        body { font-family: 'Malgun Gothic', sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; }
        h1 { color: #333; border-bottom: 2px solid #333; padding-bottom: 10px; }
        h2 { color: #555; margin-top: 30px; }
        h3 { color: #777; }
        table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f5f5f5; }
        .week { background-color: #f9f9f9; margin: 15px 0; padding: 15px; border-radius: 5px; }
    </style>
</head>
<body>
    <h1>${syllabus.courseInfo.name}</h1>
    
    <h2>과목 정보</h2>
    <ul>
        <li><strong>학점</strong>: ${syllabus.courseInfo.credits}</li>
        <li><strong>시수</strong>: 주 ${syllabus.courseInfo.hoursPerWeek}시간</li>
        <li><strong>대상</strong>: ${syllabus.courseInfo.targetYear}학년</li>
        ${syllabus.courseInfo.prerequisites ? `<li><strong>선수과목</strong>: ${syllabus.courseInfo.prerequisites}</li>` : ''}
    </ul>
    
    <h2>과목 개요</h2>
    <p>${syllabus.courseOverview}</p>
    
    <h2>학습목표</h2>
    <ol>
        ${syllabus.learningOutcomes.map(clo => 
          `<li>${clo.description} <em>(${clo.bloomCategory})</em></li>`
        ).join('\n        ')}
    </ol>
    
    <h2>주차별 계획</h2>
    ${syllabus.weeklyPlans.map(week => `
    <div class="week">
        <h3>${week.week}주차: ${week.topic}</h3>
        <p><strong>학습목표</strong>:</p>
        <ul>
            ${week.objectives.map(obj => `<li>${obj}</li>`).join('\n            ')}
        </ul>
        ${week.assignments ? `<p><strong>과제</strong>: ${week.assignments}</p>` : ''}
    </div>
    `).join('\n')}
    
    <h2>평가 방법</h2>
    <table>
        <tr>
            <th>항목</th>
            <th>비율</th>
        </tr>
        <tr>
            <td>중간고사</td>
            <td>${syllabus.evaluationMethod.midterm}%</td>
        </tr>
        <tr>
            <td>기말고사</td>
            <td>${syllabus.evaluationMethod.final}%</td>
        </tr>
        <tr>
            <td>과제</td>
            <td>${syllabus.evaluationMethod.assignments}%</td>
        </tr>
        <tr>
            <td>출석</td>
            <td>${syllabus.evaluationMethod.attendance}%</td>
        </tr>
        <tr>
            <td>참여도</td>
            <td>${syllabus.evaluationMethod.participation}%</td>
        </tr>
    </table>
</body>
</html>`;
    
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    this.download(blob, `${filename}.html`);
  }

  /**
   * 파일 다운로드
   */
  private download(blob: Blob, filename: string): void {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  /**
   * 클립보드 복사
   */
  async copyToClipboard(text: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  }
}