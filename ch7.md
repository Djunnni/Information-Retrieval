## Chapter 7 - Retrieval Models

- Provide a mathematical framework for defining the search process
	- includes explanation of assumptions
	- basis of many ranking algorithms
	- can be implicit

* - Progress in retrieval models has corresponded with improvements in effectiveness (검색 모델의 진전(보)는 효과성의 향상에 해당한다)

=> 여기서의 효과성이란 효율적인 측면보다 검색 방식의 기능적 측면이 향상된다고 보는게 좋을 듯하다.

- Theories about relevance(관련성,타당성에 대한 원리(이론))

### Relevance (타당성, 관련성)

- Complex concept that has been studied for some time
	- many factors to conside
	- people often disagree when making relevance judgements

	사람 개개인의 적절성 판단이 다르기 때문에 동의하지를 않는다. => 복잡성에 대한 연구는 계속 진행

- Retrieval models make various assumptions about relevance to simplify problem
	e.g. topical vs. user relevance
	e.g. binary vs. multi-valued relevance


### Retrieval Model Overview
	- Older models
		- boolean model
		- vector space model
	- Probabilistic Model
		- BM25
		- Language model
	- Combining evidence
		- Inference network
		- Learning to Rank

### Boolean Model
- Two possible outcomes for query processing
	- True and False
	- "exact-match" retrieval
	- simplest form of ranking

- Query usually specified using Boolean operators
	- AND, OR, NOT
	- proximity operators also used

### Boolean Retrieval Model
- Advantage
	- Results are predictable, relatively easy to explain
	- Many different features can be incorporated (합쳐진다)
	- Efficient processing since many documnets can be eliminated from search

- Disadvantage
	- Effectiveness depends entirely on user
	- Simple queries usually don't work well
	- Complex queries are difficult


