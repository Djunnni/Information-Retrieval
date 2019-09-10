## Chapter 1 - Search Engines

* this has some of descriptive error by my opinion, Contact me!! then i will correct this file

## What is information retrieval?

 - document retrieval in response to a query
 - Quite effective
 - Highly visible
 - Commercially successful


## what is search activity?

1. daily activity
2. most popular use 
3. use everywhere


## Information Retrieval

 "Information retrieval is a field concerned with the structure, analysis, organization, storage, searching, and retrieval of information." (Salton, 1968)

 - Generation Definition

it Can be applied to many types of information and search applications

## What is a Document?

Example :

- web pages, email, news sotries, scholarly papers, text messages, PPT etc.

Common properties :

* - Significant text content
- Some structure ( e.g., title, author, date, subject, email etc.)

## Compare IR and Database

|	   | DataBase  | IR	    |
|:---------:|:----------:|:----------:|
Data | Sturctured | Unstructured |
Fields | Clear semantics | No fileds |
Queries | Defined (SQL) | Free text ("netural language") |
Recoverability | Critical | Downplayed |
Matching | Exact | Imprecise |

- More instruction Recoverability 

ex ) there is a bank. bank has used some of Databases. when he deposit his account,at that instant database system has error.So his money is not recorded.

=> Database Recoverability is Critical

but IR is not critical. we just use other IR :)

## Documents vs. Database Records

Database Records : typically made up of well-defined fields, easy to compare fields with well-defined semantics to queries in order to find matches

Documents : each file has made up of by theirs opinion so, it is more difficult

* IR core issue : compairing the query text to the document text and determining what is good match

Exact matching of words is not enough , because Many different ways to write the same thing in a "natural language"

## IR Tasks

- Ad-hoc Search
  - find relevant documents for an arbitrary text query
- filtering
  - identify relevant user profiles for a new document
- Classification
  - identify relevant labels for documents
- Question answering
  - Giva a specific answer to a question
  
## Big Issue in IR

1. Relevance
 A relevant document contains the information that a person was looking for when they submitted a query to the search engine
 Topical relevance (same topic) vs. user relevance (everything else)
 
 * Retrieval models define a view of relevance
 * Ranking algorithms used in search engines are based on retrieval models
 * Most models describe statistical properties of text rather then linguistic

2. Evaluation
 Experimental procedures and measures for comparing system output with user expectations.
 Recall and precision are two examples of effectiveness measures
 
3. Users and Information Needs
 Search evalutaion is user-centered.
 Query refinement techniques such as query expansion, query suggestion, relevance feedback improve ranking

## IR and Search Engines importance

IR 
 1. Relevance
  - effective ranking
 2. Evaluation
  - testing and measuring
 3. Information Needs
  - User interaction

Search Engines
 1. Performance
  - Efficient search and indexing
 2. Incorporating new data
  - Coverage and freshness
 3. Scalability
  - Growing with data and users
 4. Adaptability
  - Turning for applications
 5. Specific problems 
  - (e.g. Spam)
               
## Search Engine Issue

1. Performance
 - Measuring and imporving the efficiency of search
  ex) reducing responce time, increasing query throughput, increasing indexing speed

2. Dynamic data
 - The 'collection' for most real applications is constantly changing in terms of updates, additions, deletions.
 - Acquiring or "crawling" the documents is a major task
 
3. Scalability
 - Making everything work with millions of users every dat. and many terabytes of documents
 
4. Adaptability
 - Changing and tuning search engine components such as ranking algorithm, indexing strategy, interface for differnet applications
 
 5. Spam
  - For Web Search, spam in all its forms is one of the major issues
  
----------------------------------------------------------------------------------------------------------------------------
