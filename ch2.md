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

- Documet data store
	- Stores text, metadata and other related for documents
	 	-links, anchor text
	- Provide fast access to document contents 
	- Could use relational database system

2. Text Transformation

- Parser
	- Processing the sequence of text tokens
		- title ,links, heading
	- Tokenizer recognize "word" in the text
		- capitalization,hyphens, apostrophes, non-alpha character and so on
	- Markup language 
		- Tags, syntax 

- Stopping (이부분이 중요하다고 생각함)
	- Remove common words 
		e.g. 'and','or' and so on
	- Some impact on effiency and effectivess
	- Can be a problem for some queries

- Stemming 
	- Group words derived from a common stem
		e.g. "computer", "computing", "compute"
	- Usally effective, but not for all queries
	- Benefits vary for diffent languages

- Link Analysis
	- like and anchor text  
	- identifies popularity and community information
		e.g. pageRank
	- Significant impact on web search 

- Information Extraction
	- Identify classes of index terms
	- named entity recognizers e.g. people, locations, companies, dates

- Classifier
	- Identifies class-related metadata for documents
		- assigns lables to documents
		- e.g., topics, reading level, genre

3. Index Creation

- Document Statistics
	- gathers counts and positions of words
	- used in ranking algorithm

- Weighting
	- computes weights for index terms

- Inversion (순서 등의 반전) 
	- Core of indexing process
	- Converts document-term information to term-document
		- Difficult for very large numbers of documents
	- Format of inverted file is designed for fast query processing
		- Compression use for efficiency

- Index Distribution
	- Distributes indexes across multiple computers and sites
	- Essential for fast query processing with large numbers of documents
	- Many variations
		- term distribution, replication, document distribution

4. User Interaction

- Query input
	- Provides interface and parser for query language
	- Most web queries are very simple
	- Query language used to describe more complex queries and results of query transformation
		- e.g., Boolean queries , Indri and Galago query languages
		- similar to SQL language used in database applications

- Query transformation
	- imporeves initial query , both before and after initial search
	- Spell checking and query suggestion provide alternatives to original query
	- Query expansion and relevance feedback modify the original query with additional terms

- Results output
	- Contructs the display of ranked documents
	- Generates snippet to show how queries match documents
	- Highlights important words and passages
	- Retrieves appropriate advertising in many applications
	- provide clustering

5. Ranking

- Scoring
	- Calculates scores for documents using a ranking algorithm
	- Core component of search engine
	
- Performance optimization
	- Designing ranking algorithm for efficient
		- Term at a time vs. document at a time processing
		- Safe vs. unsafe optimizations

- Distribution
	- Query broker distributes queries and assembles results
	- Caching is a form of distribute searching

6. Evaluation

- Logging 
	- Query logs and clickthrough data used for query suggestion, and spell checking and so on

- Ranking Analysis
	- effectiveness
- Performance analysis
	- efficiency


		
