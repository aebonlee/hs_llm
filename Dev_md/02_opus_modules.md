# Opus 담당 모듈 상세 설계

## 담당 영역 개요
Opus는 시스템의 핵심 알고리즘과 복잡도가 높은 백엔드 로직을 담당합니다.

## M1: CLO 파서 및 정합성 진단 엔진

### 1.1 CLO Parser
```python
class CLOParser:
    """
    강의계획서에서 CLO(Course Learning Outcomes)를 추출하고 구조화
    """
    
    def parse_syllabus(self, document: str) -> List[CLO]:
        """
        다양한 형식의 강의계획서 파싱
        - PDF, DOCX, HTML 지원
        - 패턴 매칭 + LLM 보정
        """
        pass
    
    def extract_clo_components(self, text: str) -> CLOComponents:
        """
        CLO 텍스트에서 구성 요소 추출
        - 행동동사 (Action Verbs)
        - 학습내용 (Content)
        - 평가기준 (Criteria)
        - 조건/맥락 (Condition/Context)
        """
        pass
    
    def normalize_clo(self, clo: CLO) -> NormalizedCLO:
        """
        CLO 정규화 및 표준화
        - 동의어 통합
        - 약어 확장
        - 문법 교정
        """
        pass
```

### 1.2 역량 매핑 엔진
```python
class CompetencyMapper:
    """
    CLO와 역량 체계 간 N:M 매핑
    """
    
    def build_competency_dictionary(self) -> CompetencyDict:
        """
        도메인별 역량 사전 구축
        - 전공별 핵심 역량
        - Bloom's Taxonomy 레벨
        - 행동동사 분류
        """
        pass
    
    def calculate_mapping_score(self, clo: CLO, competency: Competency) -> float:
        """
        CLO-역량 매핑 점수 계산
        - 의미적 유사도 (Semantic Similarity)
        - 키워드 매칭
        - 문맥 관련성
        """
        pass
    
    def optimize_mapping_weights(self, mappings: List[Mapping]) -> OptimizedMappings:
        """
        매핑 가중치 최적화
        - 제약 조건: 가중치 합 = 1
        - 목적 함수: 정합성 최대화
        """
        pass
```

### 1.3 정합성 분석 엔진
```python
class ConsistencyAnalyzer:
    """
    CLO-과제-평가 간 정합성 분석
    """
    
    def calculate_coverage(self, clos: List[CLO], rubrics: List[Rubric]) -> float:
        """
        Coverage 점수 계산
        - CLO가 루브릭에 얼마나 반영되었는가
        - 범위: 0-1 (1 = 완전 포함)
        """
        pass
    
    def detect_gaps(self, clos: List[CLO], rubrics: List[Rubric]) -> List[Gap]:
        """
        Gap 분석
        - 루브릭에 누락된 CLO 요소
        - 중요도 가중치 적용
        """
        pass
    
    def find_overlaps(self, rubrics: List[Rubric]) -> List[Overlap]:
        """
        Overlap 검출
        - 중복 평가 항목
        - 유사도 임계값 기반 판단
        """
        pass
    
    def generate_consistency_report(self) -> ConsistencyReport:
        """
        종합 정합성 리포트 생성
        - 레이더 차트 데이터
        - 히트맵 매트릭스
        - 개선 권고사항
        """
        pass
```

## M2: LLM 오케스트레이션 계층

### 2.1 프롬프트 관리 시스템
```python
class PromptManager:
    """
    프롬프트 템플릿 관리 및 최적화
    """
    
    templates = {
        'clo_parsing': """
        다음 텍스트에서 학습성과(CLO)를 추출하세요:
        {context}
        
        형식:
        - 번호
        - 학습성과 내용
        - 행동동사
        - Bloom 레벨
        """,
        
        'rubric_generation': """
        과제: {assignment}
        CLO: {clos}
        
        위 정보를 바탕으로 루브릭을 생성하세요:
        - 평가 항목 (4-6개)
        - 수준별 기준 (우수/보통/미흡)
        - 가중치 제안
        """,
        
        'feedback_rewrite': """
        원본 피드백: {original}
        
        다음 형식으로 재작성:
        1. 행동 (구체적 관찰)
        2. 증거 (근거 제시)
        3. 다음 단계 (개선 방향)
        """
    }
    
    def optimize_prompt(self, template: str, context: dict) -> str:
        """
        컨텍스트 최적화
        - 토큰 수 제한
        - 핵심 정보 우선순위
        - Few-shot 예제 추가
        """
        pass
```

### 2.2 LLM API 추상화
```python
class LLMOrchestrator:
    """
    멀티 LLM API 통합 관리
    """
    
    def __init__(self):
        self.providers = {
            'openai': OpenAIClient(),
            'claude': ClaudeClient(),
            'local': LocalLLMClient()
        }
        
    async def generate(self, prompt: str, config: LLMConfig) -> LLMResponse:
        """
        LLM 응답 생성
        - 자동 재시도
        - 폴백 프로바이더
        - 응답 검증
        """
        pass
    
    def manage_tokens(self, prompt: str) -> TokenInfo:
        """
        토큰 관리
        - 사용량 추적
        - 비용 계산
        - 할당량 관리
        """
        pass
    
    def cache_response(self, key: str, response: str) -> None:
        """
        응답 캐싱
        - Redis 기반
        - TTL 설정
        - 유사 쿼리 매칭
        """
        pass
```

## M3: 평가 신뢰도 분석 모듈

### 3.1 통계 분석 엔진
```python
class ReliabilityAnalyzer:
    """
    평가 신뢰도 및 일관성 분석
    """
    
    def calculate_inter_rater_reliability(self, ratings: DataFrame) -> IRRMetrics:
        """
        평가자 간 신뢰도 계산
        - Cohen's Kappa
        - Fleiss' Kappa
        - ICC (Intraclass Correlation)
        """
        pass
    
    def analyze_score_distribution(self, scores: List[float]) -> DistributionMetrics:
        """
        점수 분포 분석
        - 평균, 표준편차
        - 왜도 (Skewness)
        - 첨도 (Kurtosis)
        - 정규성 검정
        """
        pass
    
    def detect_bias(self, assessments: List[Assessment]) -> BiasReport:
        """
        평가 편향 검출
        - 관대화 경향
        - 중앙 집중 경향
        - 후광 효과
        """
        pass
```

### 3.2 Bloom's Taxonomy 분석
```python
class BloomAnalyzer:
    """
    인지수준 자동 분류 및 균형 분석
    """
    
    bloom_levels = {
        1: {'name': 'Remember', 'verbs': ['identify', 'list', 'name', 'define']},
        2: {'name': 'Understand', 'verbs': ['explain', 'summarize', 'interpret']},
        3: {'name': 'Apply', 'verbs': ['implement', 'use', 'execute', 'solve']},
        4: {'name': 'Analyze', 'verbs': ['compare', 'contrast', 'examine']},
        5: {'name': 'Evaluate', 'verbs': ['assess', 'critique', 'judge']},
        6: {'name': 'Create', 'verbs': ['design', 'construct', 'develop']}
    }
    
    def classify_cognitive_level(self, text: str) -> int:
        """
        텍스트의 인지수준 분류
        - 행동동사 매칭
        - 문맥 고려
        - LLM 보정
        """
        pass
    
    def analyze_balance(self, items: List[RubricItem]) -> BalanceReport:
        """
        인지수준 균형 분석
        - 레벨별 분포
        - 권장 비율 대비 편차
        - 개선 제안
        """
        pass
```

## M4: 문장 임베딩 및 유사도 분석

### 4.1 임베딩 엔진
```python
class EmbeddingEngine:
    """
    문장 벡터화 및 유사도 계산
    """
    
    def __init__(self):
        self.model = SentenceTransformer('all-MiniLM-L6-v2')
        self.cache = {}
        
    def encode_text(self, text: str) -> np.ndarray:
        """
        텍스트 벡터화
        - 전처리 (정규화, 토큰화)
        - 임베딩 생성
        - 차원 축소 옵션
        """
        pass
    
    def calculate_similarity(self, text1: str, text2: str) -> float:
        """
        코사인 유사도 계산
        - 범위: 0-1
        - 캐시 활용
        """
        pass
    
    def find_similar_items(self, query: str, corpus: List[str], top_k: int = 5) -> List[Match]:
        """
        유사 항목 검색
        - FAISS 인덱스 활용
        - 임계값 필터링
        """
        pass
```

## 성능 최적화 전략

### 배치 처리
```python
class BatchProcessor:
    """
    대량 데이터 처리 최적화
    """
    
    def process_in_batches(self, items: List, batch_size: int = 50):
        """
        배치 단위 처리
        - 메모리 효율
        - 병렬 처리
        - 진행 상황 추적
        """
        pass
```

### 캐싱 전략
```python
class CacheManager:
    """
    다층 캐싱 시스템
    """
    
    levels = {
        'memory': {},  # In-memory cache
        'redis': RedisClient(),  # Distributed cache
        'disk': DiskCache()  # Persistent cache
    }
    
    def get_or_compute(self, key: str, compute_func: Callable):
        """
        캐시 우선 조회, 없으면 계산
        """
        pass
```

## 테스트 전략

### 단위 테스트
```python
def test_clo_parser():
    """CLO 파싱 정확도 테스트"""
    pass

def test_consistency_calculation():
    """정합성 계산 로직 테스트"""
    pass

def test_bloom_classification():
    """Bloom 레벨 분류 정확도 테스트"""
    pass
```

### 통합 테스트
```python
def test_end_to_end_workflow():
    """전체 워크플로우 테스트"""
    pass
```

## 배포 고려사항

### 스케일링
- Horizontal scaling for API servers
- Queue-based async processing
- Database read replicas

### 모니터링
- API latency tracking
- Token usage monitoring
- Error rate alerting

### 보안
- API key rotation
- Input sanitization
- Rate limiting