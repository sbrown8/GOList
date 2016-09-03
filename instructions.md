# Programming Task
#### Web applications developer

## About this Task

We are asking you to implement a simple web application to help us better appreciate your programming and problem-solving skills. The task is intended to be straightforward. We appreciate elegance, simplicity and readability. 

## Goal
Biologists are often faced with the task of unearthing information about a particular protein or a list of proteins derived from an experiment. A useful resource is the [UniProt KnowledgeBase](http://www.uniprot.org/help/about) (UniProtKB) which is a manually curated database containing a rich set of annotations for proteins across many species. An appreciation of the functions and processes previously associated with a protein of interest can provide valuable clues about why it might have arisen within the context of an experiment.      

Some of the most important gene annotations are derived from the [Gene Ontology](http://geneontology.org/) (GO) project which is a collaborative effort to provide consistent descriptions of gene products. In particular, GO maintains ontologies that describe molecular function, biological processes, and cellular location.

## <a href="#step1" name="step1">Step 1: Implement</a>
You will implement ‘GO List’: An application enabling researchers to retrieve and view basic information and GO annotations for a protein of interest within the UniProt KnowledgeBase. The application will be accessed through a web browser and will consume data from the UniProt [REST API](http://www.uniprot.org/help/programmatic_access). The *GO List* implementation is completely up to you! To get you started, we have included some basic requirements, technical details, and a few restrictions.

### Functional Requirements

The *GO List* shall:

  - Accept valid UniProt identifiers (IDs) corresponding to individual proteins  
  - Display the list of user-submitted UniProt IDs
  - Display basic information about each UniProt ID (see ['Names and Taxonomy'](http://www.uniprot.org/help/names_and_taxonomy_section))
  - Display GO terms associated with each UniProt ID (see ['Gene Ontology'](http://www.uniprot.org/help/gene_ontology))
  - Support removal of UniProt ID records from the list

### Usability Requirements
The *GO List* user interface shall:

  - Be intuitive (i.e. not require documentation to use)
  - Provide appropriate feedback (e.g. invalid UniProt ID)
  - Be minimalistic

### Technical Details

#### Skeleton Application
Clone the skeleton [GO List](https://github.com/jvwong/GOList) application from the GitHub repository. Inside the `GOList` directory you will find:

  - `index.html` - entry point for your browser application
  - `README.md` - documentation for your submission (see [Step 2](#step2) below)
  - [`package.json`](https://docs.npmjs.com/files/package.json) - specifying dependencies
  - [`gulpfile.js`](http://gulpjs.com/) - specifying tasks
  - `src` - skeleton source files (.js, .less)  

The skeleton application is merely a suggestion to get you started. You may alter the contents to suit your needs. We do, however, require that your application be viewable upon opening a supplied  `index.html` file locally in a web browser. This alone should be sufficient to view your *GO List*. Please do not write or submit any server-side code for this task. The HTML output will be viewed on a desktop in Chrome (v51.0.2074).

#### UniProt REST API
Programmatic access to UniProtKB is provided via the [REST API](http://www.uniprot.org/help/programmatic_access). The data corresponding to any UniProt ID can be consumed in a variety of formats. To illustrate this, we consider a case where we desire more information regarding  human p53 [UniProtKB - P04637 (P53_HUMAN)].

p53 is one of the most intensively studied genes in the genome. This great interest has been spurred on by observations that the p53 gene is mutated in nearly half of all human cancers. Four decades of research supports a role for p53 in a wide variety of activities within cells, such as DNA repair and regulating cell division. Nevertheless, a clear understanding of how p53 prevents cancer from arising has been elusive.   

To view the [HTML formatted record](http://www.uniprot.org/uniprot/P04637) for human p53, navigate to

```
http://www.uniprot.org/uniprot/P04637
```

> Note:  This record contains far more information than we would want in our *GO List*; Your job will be to streamline the data presentation.      

To retrieve the corresponding record in [xml format](http://www.uniprot.org/uniprot/P04637.xml), simply append `.xml` to the same url

```
http://www.uniprot.org/uniprot/P04637.xml
```
The xml output should look something like the following:

```xml
<uniprot xmlns="http://uniprot.org/uniprot" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://uniprot.org/uniprot http://www.uniprot.org/support/docs/uniprot.xsd">
<entry dataset="Swiss-Prot" created="1987-08-13" modified="2016-07-06" version="245">
	...
	<name>P53_HUMAN</name>
	<protein>
		<recommendedName>
			<fullName>Cellular tumor antigen p53</fullName>
		</recommendedName>
		<alternativeName>
			<fullName>Antigen NY-CO-13</fullName>
			</alternativeName>
		<alternativeName>
			<fullName>Phosphoprotein p53</fullName>
		</alternativeName>
		<alternativeName>
			<fullName>Tumor suppressor p53</fullName>
		</alternativeName>
	</protein>
	<gene>
		<name type="primary">TP53</name>
		<name type="synonym">P53</name>
	</gene>
	<organism>
		<name type="scientific">Homo sapiens</name>
		<name type="common">Human</name>
		<dbReference type="NCBI Taxonomy" id="9606"/>
	...
```

> Refer to the [XML Schema definition](http://www.uniprot.org/docs/uniprot.xsd) for a full description of the structure of the output.

With the functional and usability requirements in mind, your task will be to consume and display this data in a manner that researchers would find intuitive and useful.

> The REST API allows one to retrieve data in other formats (e.g. text, rdf) and your app is free to consume the format you find most convenient.

### Restrictions
To streamline the submissions, we suggest you respect a few restrictions:

- Do not write or include server-side code
- Do not implement or include dependencies on database persistence
- Do not implement user-specific features (e.g. sign up, login, authentication, authorization)

## <a href="#step2" name="step2">Step 2: Document</a>
We have supplied a markdown file (`README.md`) for the purposes of documenting your submission. Edit the contents of this file including the ‘Contact’ details. The ‘Description’ should contain a brief (< 500 words) overview of major features and design decisions. You may also provide comments within your codebase to help us understand the finer details of your app. If necessary, use the ‘Setup’ section for step-by-step instructions on how to get your application ready to run in a browser (e.g. dependencies).

## <a href="#step3" name="step3">Step 3: Submit</a>
Zip the directory containing your code submission and associated documentation into a single file. Alternatively, point us to a GitHub repository containing your submission. Your submission must contain the following two files:

1. `index.html`
2. `README.md`

Email your submission to ccbr.software.jobs@gmail.com. We will confirm your submission upon receipt via email.
