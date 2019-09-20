## Search Engines Chapter 2. Architecture of a Search Engine

### Search Engine Architecture 

 - Architecture of a search engine determined by 2 requirments
	- effectiveness (quality of results) 
	- efficiency (response time and throughput)

	* 이전 ch1 하단에 위 사항에 대해 한글로 설명하였음

### Indexing Process

 - Text acquisition 
	- identifies and stores documents for indexing

 - Text transformation
	- transforms documents into index terms or features

 - Index creation
	- * takes index terms and creates data structures (indexes) to support fast searching

### Query Process

 - User interaction
	- supports creation and refinement of query, display of results 
 - Ranking 
	- uses query and indexes to generate ranked list of documents
 - Evaluation
	- monitors and mesures effectiveness and efficiency (primarily offline)


 * Let's see Details

1. Text Acquisition

- Crawler

 Identifies and acquires documents for search engine
 Many type - web, enterprise, desktop
 Web crawlers follow links to find documents
	- Must efficiently find huge numbers of web pages  (Coverag) 
	 and keep them up-to-date (freshness)
	- Single site crawler for site search
	- Topical or focused crawlers for vertical search

- Feeds
	- Real-time streams of documents
		- e.g. web feeds for news, blogs , video, radio, tv
	- RSS
		- RSS "reader" can provide new XML documents to search engine

- Conversion
	- Convert variety of. ocuments into a consistent text plus metadata format
	- Convert text encoding for different language
		- Using a Unicode standard like UTF-8 (EUR-KR 도 있지만 UTF-8에  한국어 등이 속함)


