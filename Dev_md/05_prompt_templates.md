# LLM 프롬프트 템플릿 문서

## 프롬프트 설계 원칙

1. **명확성**: 구체적이고 명확한 지시사항 제공
2. **구조화**: 입력과 출력 형식을 명시적으로 정의
3. **컨텍스트**: 필요한 배경 정보와 제약사항 포함
4. **예시**: Few-shot learning을 위한 예제 제공
5. **검증**: 출력 형식과 품질 기준 명시

## 1. CLO 파싱 프롬프트

### 1.1 기본 CLO 추출
```
시스템 프롬프트:
당신은 교육과정 설계 전문가입니다. 강의계획서에서 Course Learning Outcomes (CLO)를 정확하게 추출하고 구조화하는 것이 당신의 역할입니다.

사용자 프롬프트:
다음 강의계획서 텍스트에서 학습성과(CLO)를 추출해주세요:

[강의계획서 내용]
{syllabus_text}

다음 형식으로 JSON 배열로 출력해주세요:
[
  {
    "number": 1,
    "description": "학습성과 설명",
    "action_verbs": ["동사1", "동사2"],
    "content_area": "학습 영역",
    "bloom_level": 1-6 사이의 정수,
    "measurable": true/false
  }
]

주의사항:
- 각 CLO는 측정 가능해야 합니다
- 행동동사를 명확히 식별해주세요
- Bloom's Taxonomy 레벨을 정확히 분류해주세요
```

### 1.2 CLO 정규화
```
다음 CLO를 표준 형식으로 정규화해주세요:

원본 CLO: {raw_clo}

정규화 기준:
1. 동의어를 표준 용어로 통일
2. 약어를 전체 단어로 확장
3. 문법적 오류 수정
4. 측정 가능한 형태로 변환

예시:
원본: "학생들이 SW를 이해할 수 있다"
정규화: "학생은 소프트웨어 개발 원리를 설명할 수 있다"

정규화된 CLO를 출력해주세요:
```

## 2. 역량 매핑 프롬프트

### 2.1 CLO-역량 매핑
```
다음 CLO와 역량 목록을 매핑해주세요:

CLO:
{clo_description}

역량 목록:
{competencies_list}

각 매핑에 대해 다음 정보를 제공해주세요:
1. 매핑된 역량 ID
2. 관련성 점수 (0-1)
3. 매핑 근거

출력 형식:
{
  "mappings": [
    {
      "competency_id": "C001",
      "relevance_score": 0.85,
      "rationale": "매핑 이유 설명"
    }
  ],
  "unmapped_aspects": "매핑되지 않은 CLO 측면"
}
```

## 3. 루브릭 생성 프롬프트

### 3.1 템플릿 기반 루브릭 생성
```
다음 정보를 바탕으로 평가 루브릭을 생성해주세요:

과제 정보:
- 유형: {assignment_type} (이론/실습/발표/캡스톤)
- 설명: {assignment_description}
- CLO: {related_clos}

템플릿:
{template_structure}

생성할 루브릭 요구사항:
- 평가 항목: 4-6개
- 수준: 3단계 (우수/보통/미흡)
- 각 수준별 구체적 기준
- 항목별 가중치 (합: 100%)

출력 형식:
{
  "criteria": [
    {
      "name": "평가항목명",
      "description": "항목 설명",
      "weight": 0.25,
      "levels": [
        {
          "level": "우수",
          "points": 100,
          "description": "구체적 기준"
        },
        {
          "level": "보통",
          "points": 70,
          "description": "구체적 기준"
        },
        {
          "level": "미흡",
          "points": 40,
          "description": "구체적 기준"
        }
      ]
    }
  ]
}
```

### 3.2 코딩 과제 루브릭
```
웹프로그래밍 과제를 위한 루브릭을 생성해주세요:

과제: {assignment_details}

평가 항목에 포함되어야 할 요소:
1. 기능 구현 완성도
2. 코드 품질 (가독성, 구조)
3. 오류 처리 및 예외상황 대응
4. 문서화 및 주석
5. 창의성 및 추가 기능

각 항목에 대해:
- 명확한 평가 기준 제시
- 객관적이고 측정 가능한 지표
- 구체적인 예시 포함

특히 코드 품질 평가 시:
- 네이밍 컨벤션 준수
- 함수/클래스 설계의 적절성
- 중복 코드 최소화
- 성능 최적화 고려사항
```

## 4. Bloom's Taxonomy 분류 프롬프트

### 4.1 인지수준 분류
```
다음 학습목표/평가항목의 Bloom's Taxonomy 레벨을 판단해주세요:

텍스트: {text}

Bloom's Taxonomy 레벨:
1. Remember (기억): 정보를 인출하고 인식
2. Understand (이해): 의미를 구성하고 해석
3. Apply (적용): 절차를 실행하거나 구현
4. Analyze (분석): 부분으로 분해하고 관계 파악
5. Evaluate (평가): 기준에 따라 판단
6. Create (창조): 요소를 결합하여 새로운 것 생성

분석 결과:
{
  "bloom_level": 1-6,
  "key_verbs": ["식별된 행동동사"],
  "reasoning": "분류 근거",
  "confidence": 0.0-1.0
}
```

### 4.2 난이도 균형 검토
```
다음 루브릭 항목들의 인지수준 분포를 분석해주세요:

루브릭 항목:
{rubric_items}

분석 내용:
1. 각 항목의 Bloom 레벨
2. 전체 분포 (낮은 수준 vs 높은 수준)
3. 균형성 평가
4. 개선 제안

권장 분포:
- Remember/Understand: 20-30%
- Apply: 30-40%
- Analyze/Evaluate: 25-35%
- Create: 5-15%

출력:
{
  "distribution": {
    "level_1_2": 비율,
    "level_3": 비율,
    "level_4_5": 비율,
    "level_6": 비율
  },
  "balance_score": 0-1,
  "recommendations": ["개선 제안"]
}
```

## 5. 정합성 분석 프롬프트

### 5.1 CLO-루브릭 정합성 검사
```
CLO와 루브릭 간 정합성을 분석해주세요:

CLO 목록:
{clos}

루브릭:
{rubric}

분석 항목:
1. Coverage: 모든 CLO가 루브릭에 반영되었는가?
2. Gap: 평가되지 않는 CLO 요소는 무엇인가?
3. Overlap: 중복 평가되는 요소는 무엇인가?
4. Alignment: CLO와 평가기준의 수준이 일치하는가?

출력:
{
  "coverage_score": 0-1,
  "gaps": [
    {
      "clo_id": "CLO1",
      "missing_aspect": "누락된 부분",
      "severity": "high/medium/low"
    }
  ],
  "overlaps": [
    {
      "criteria": ["기준1", "기준2"],
      "overlapping_aspect": "중복 내용",
      "recommendation": "통합 또는 차별화 제안"
    }
  ],
  "alignment_issues": ["정렬 문제"],
  "overall_consistency": 0-1
}
```

## 6. 피드백 생성 프롬프트

### 6.1 피드백 리라이트
```
다음 평가 피드백을 학생에게 도움이 되는 형태로 다시 작성해주세요:

원본 피드백: {original_feedback}
점수: {score}
루브릭 기준: {criteria}

피드백 작성 원칙:
1. 행동 (Behavior): 구체적으로 관찰된 내용
2. 증거 (Evidence): 평가 근거 제시
3. 다음 단계 (Next Steps): 개선을 위한 구체적 제안

톤: 건설적이고 격려하는 어조
길이: 3-5문장

개선된 피드백:
```

### 6.2 강점/개선점 피드백
```
학생의 제출물에 대한 평가 피드백을 생성해주세요:

평가 점수:
{scores_by_criteria}

루브릭:
{rubric}

피드백 구조:
1. 강점 (2-3개)
   - 구체적 예시와 함께
   - 어떤 점이 우수했는지

2. 개선이 필요한 영역 (2-3개)
   - 구체적인 문제점
   - 개선 방법 제안
   - 참고 자료 또는 예시

3. 다음 과제를 위한 조언
   - 실천 가능한 1-2개 목표
   - 학습 자원 추천

출력:
{
  "strengths": ["강점1", "강점2"],
  "improvements": [
    {
      "area": "개선 영역",
      "issue": "문제점",
      "suggestion": "개선 방법"
    }
  ],
  "next_steps": ["조언1", "조언2"],
  "resources": ["자료1", "자료2"]
}
```

## 7. 보고서 생성 프롬프트

### 7.1 정합성 보고서 요약
```
다음 정합성 분석 결과를 교수자를 위한 보고서로 요약해주세요:

분석 데이터:
{analysis_results}

보고서 섹션:
1. 핵심 요약 (3-5 bullet points)
2. 주요 발견사항
3. 위험 요소 (우선순위별)
4. 권장 조치사항
5. 예상 개선 효과

포맷: 전문적이고 간결한 문체
대상: 교수자 및 교육과정 관리자

출력 형식은 마크다운으로 작성해주세요.
```

## 8. 프롬프트 최적화 전략

### 8.1 토큰 절약 기법
```python
def optimize_prompt(base_prompt, context, max_tokens=2000):
    """
    프롬프트 최적화 함수
    """
    # 1. 중요도 기반 컨텍스트 필터링
    important_context = filter_by_relevance(context)
    
    # 2. 압축 기법 적용
    compressed = compress_text(important_context)
    
    # 3. 토큰 수 체크
    token_count = count_tokens(base_prompt + compressed)
    
    if token_count > max_tokens:
        # 추가 압축 또는 요약
        compressed = summarize(compressed, max_tokens - len(base_prompt))
    
    return base_prompt.format(context=compressed)
```

### 8.2 프롬프트 체이닝
```python
# 복잡한 작업을 단계별로 분해
prompts = {
    "step1_extract": "CLO 추출 프롬프트",
    "step2_normalize": "정규화 프롬프트",
    "step3_map": "역량 매핑 프롬프트",
    "step4_validate": "검증 프롬프트"
}

def chain_prompts(input_data):
    results = {}
    current_input = input_data
    
    for step, prompt in prompts.items():
        response = llm.generate(prompt.format(input=current_input))
        results[step] = response
        current_input = response  # 다음 단계 입력으로 사용
    
    return results
```

## 9. 프롬프트 테스트 및 검증

### 9.1 테스트 케이스
```python
test_cases = [
    {
        "input": "간단한 CLO 텍스트",
        "expected_output": "구조화된 CLO JSON",
        "validation": lambda x: validate_clo_structure(x)
    },
    {
        "input": "복잡한 강의계획서",
        "expected_output": "다수의 CLO 추출",
        "validation": lambda x: len(x) > 3
    }
]

def test_prompt(prompt_template, test_cases):
    results = []
    for case in test_cases:
        output = llm.generate(prompt_template.format(input=case["input"]))
        valid = case["validation"](output)
        results.append({
            "case": case,
            "output": output,
            "valid": valid
        })
    return results
```

### 9.2 품질 메트릭
```python
def evaluate_prompt_quality(prompt, test_set):
    metrics = {
        "accuracy": 0,
        "consistency": 0,
        "completeness": 0,
        "format_compliance": 0
    }
    
    for test in test_set:
        response = llm.generate(prompt.format(**test["input"]))
        
        # 정확도 평가
        metrics["accuracy"] += calculate_accuracy(response, test["expected"])
        
        # 일관성 평가 (같은 입력에 대한 반복 테스트)
        responses = [llm.generate(prompt.format(**test["input"])) for _ in range(3)]
        metrics["consistency"] += calculate_consistency(responses)
        
        # 완전성 평가
        metrics["completeness"] += check_completeness(response, test["required_fields"])
        
        # 형식 준수 평가
        metrics["format_compliance"] += validate_format(response, test["format_spec"])
    
    # 평균 계산
    for key in metrics:
        metrics[key] /= len(test_set)
    
    return metrics
```

## 10. 프롬프트 버전 관리

### 10.1 버전 관리 시스템
```javascript
// promptVersions.js
const promptVersions = {
  "clo_extraction": {
    "v1.0": "초기 버전",
    "v1.1": "Few-shot 예제 추가",
    "v1.2": "출력 형식 개선",
    "v2.0": "Chain-of-thought 추가",
    "current": "v2.0"
  },
  
  "rubric_generation": {
    "v1.0": "기본 템플릿",
    "v1.1": "과제 유형별 분기",
    "v1.2": "가중치 최적화 로직 추가",
    "current": "v1.2"
  }
};

function getPrompt(type, version = "current") {
  if (version === "current") {
    version = promptVersions[type].current;
  }
  return prompts[type][version];
}
```

### 10.2 A/B 테스팅
```python
def ab_test_prompts(prompt_a, prompt_b, test_data):
    """
    두 프롬프트 버전의 성능 비교
    """
    results_a = []
    results_b = []
    
    for data in test_data:
        # A 버전 테스트
        response_a = llm.generate(prompt_a.format(**data))
        score_a = evaluate_response(response_a, data["expected"])
        results_a.append(score_a)
        
        # B 버전 테스트
        response_b = llm.generate(prompt_b.format(**data))
        score_b = evaluate_response(response_b, data["expected"])
        results_b.append(score_b)
    
    # 통계적 유의성 검정
    from scipy import stats
    t_stat, p_value = stats.ttest_ind(results_a, results_b)
    
    return {
        "mean_a": np.mean(results_a),
        "mean_b": np.mean(results_b),
        "p_value": p_value,
        "significant": p_value < 0.05,
        "winner": "A" if np.mean(results_a) > np.mean(results_b) else "B"
    }
```

## 11. 에러 처리 및 폴백

### 11.1 응답 검증 및 재시도
```python
def generate_with_validation(prompt, max_retries=3):
    """
    검증과 재시도를 포함한 LLM 생성
    """
    for attempt in range(max_retries):
        try:
            response = llm.generate(prompt)
            
            # JSON 파싱 시도
            parsed = json.loads(response)
            
            # 스키마 검증
            validate_schema(parsed)
            
            return parsed
            
        except json.JSONDecodeError:
            # JSON 수정 프롬프트
            prompt = f"""
            다음 응답을 올바른 JSON 형식으로 수정해주세요:
            {response}
            """
            
        except SchemaValidationError as e:
            # 스키마 오류 수정 프롬프트
            prompt = f"""
            다음 JSON이 스키마를 준수하도록 수정해주세요:
            오류: {e}
            JSON: {response}
            """
            
    # 최대 재시도 후 폴백
    return generate_fallback_response()
```

### 11.2 프롬프트 디버깅
```python
def debug_prompt(prompt, input_data):
    """
    프롬프트 디버깅 도구
    """
    print(f"=== PROMPT DEBUG ===")
    print(f"Token count: {count_tokens(prompt)}")
    print(f"Prompt preview: {prompt[:500]}...")
    
    # 단계별 실행
    response = llm.generate(prompt, temperature=0, log_probs=True)
    
    print(f"Response length: {len(response)}")
    print(f"Response preview: {response[:500]}...")
    
    # 확률 분포 분석
    if hasattr(response, 'log_probs'):
        analyze_token_probabilities(response.log_probs)
    
    return response
```