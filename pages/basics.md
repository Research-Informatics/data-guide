---
title: Data Literacy Basics
layout: default
status: Ready for pw's review
advanced_by: mh
assigned_reviewer: pw
---
Data literacy is the ability to read, understand, and communicate data as information. For researchers, it means being able to:

- **Understand the data lifecycle**: How data is captured and moves through its stages.  
- **Work with data structures**: How data is organized and stored.  
- **Analyze data**: Extracting insights and drawing conclusions.  
- **Communicate findings**: Presenting results clearly to inform decisions and drive change.  

In clinical research, data literacy helps researchers:  

- Navigate complex healthcare datasets with confidence.  
- Make evidence-based decisions that improve patient outcomes.  
- Ensure insights are accurate, reproducible, and meaningful.  

The Research Informatics team, including the CDW-R, is dedicated to providing high-quality, well-curated data. This guide supports researchers throughout the data lifecycle, with an emphasis on planning, understanding, and analyzing data in a consistent and reliable way.

---

### Why Data Literacy Matters in Clinical Research

Clinical research depends on accurate and meaningful data to:  

- **Advance medical knowledge**: Identify patterns, test hypotheses, and develop treatments.  
- **Improve patient outcomes**: Inform guidelines and decisions using real-world evidence.  
- **Use resources efficiently**: Ensure research is impactful and reproducible.  

Without strong data literacy, insights may be misinterpreted, errors can compromise integrity, and important patterns may be overlooked.  

---
### Data Quality

Data quality means data is accurate, complete, consistent, and reliable for its intended purpose. High-quality data is essential for meaningful analysis and sound decision-making.  

Key dimensions include:  
- **Accuracy**: Reflects real-world entities or events.  
- **Completeness**: Includes all required elements.  
- **Consistency**: Uniform across sources and systems.  
- **Timeliness**: Current and relevant when used.  
- **Provenance**: Tracks the origin and history of data.  

The CDW-R ensures data quality across curated datasets, partnering with researchers to address concerns and tailor data for specific study objectives. By working with the CDW-R, teams can trust that their data is reliable and well-suited for research.  

---
## Basic Data Terminology

Before diving into clinical-specific terms like encounters or demographics, it helps to understand some common data types. These categories shape how data is collected, stored, and analyzed in research.  

### Data Type Definitions

| **Category**             | **Type**              | **Definition**                                                                 | **Examples**                                  |
|---------------------------|-----------------------|---------------------------------------------------------------------------------|----------------------------------------------|
| **Foundational**          | Qualitative Data      | Describes characteristics or attributes; non-numeric.                           | Patient-reported symptoms, free-text notes    |
|                           | Quantitative Data     | Numeric and measurable; can be analyzed statistically.                          | Lab results, BMI, heart rate                  |
| **Organization & Format** | Structured Data       | Organized into predefined fields.                                               | Lab results, orders                           |
|                           | Semi-Structured Data  | Partially organized; often follows templates.                                   | Patient-reported surveys, dot phrases         |
|                           | Unstructured Data     | Free-form with no predefined structure.                                         | Narrative notes, imaging raw files            |
|                           | Categorical Data      | Groups data into discrete categories.                                           | Blood type, race/ethnicity, diagnosis codes   |
|                           | Hierarchical Data     | Represents nested relationships.                                                | Clinical ontologies, procedure taxonomies     |
|                           | Metadata              | Information that describes data itself.                                         | Record creation date, author, data source     |
| **Derived or Modeled**    | Derived Data          | Created through processing or algorithms.                                       | Flags, phenotypes, NLP outputs                |
|                           | Probabilistic Data    | Represents likelihoods or predictions.                                          | Risk scores, probability of disease           |
|                           | Point-in-Time Data    | Calculated at a specific moment for immediate use.                              | Real-time risk score, dynamic BMI             |
| **Specialized**           | Genomic Data          | Results from DNA/RNA sequencing.                                                | SNPs, variant annotations                     |
|                           | Image Metadata        | Structured information describing imaging content.                              | Modality, study date, resolution              |
|                           | Log Data              | Tracks system events or usage.                                                  | Access logs, audit trails                     |
|                           | Spatial Data          | Includes a location component.                                                  | Patient address, outbreak maps                |
|                           | Temporal Data         | Captures time or sequence of events.                                            | Vital trends, timestamps, medication timing   |

Below are common data elements and terms to be familiar with when working with the CDW-R and clinical data. Clinical data comes from many sources and is captured in different ways within the electronic health record (EHR). Understanding these terms is important because the way data is entered and stored affects how reliable, consistent, and usable it is for research. Some elements are tightly structured and easy to analyze, while others are free-text or derived through algorithms and require more caution. The terms below describe common data types and tools you will encounter when working with the CDW-R.


| **Data Term** | **Details** | **Data Type** | **Example** |
|---------------|-------------|---------------|-------------|
| **Clinical Phenotype** | An observable clinical condition or characteristic defined through a set of data elements in the EHR. Often created using algorithms or rules. | Derived | CDW-R housing algorithm |
| **Free Text** | Narrative text without data entry controls. May contain errors, inconsistencies, or subjective information. | Unstructured | Clinical notes |
| **Dot Phrase (SmartPhrase)** | Shortcut text that expands into a standard phrase or template, improving efficiency and partial consistency in documentation. | Semi-structured | “.covidscreen” expanding into screening questions |
| **Smart Form** | An EMR-based tool for structured data capture, often including decision support. Can auto-populate notes with data from the patient record. | Structured | COVID intake form |
| **Flowsheet** | A tool for capturing discrete values in a consistent format, making entry and extraction easier. | Structured | Vitals flowsheet |
| **Flag** | A binary marker, often generated by algorithms, indicating the presence or absence of a condition or trait. | Derived (Binary) | CDW-R substance use disorder flag |
| **Indicator** | A simple yes/no field in Epic representing a specific attribute. | Binary | “Is patient pregnant?” (Y/N) |


---

## Data Storage and Sources

Understanding storage and sources helps researchers know **where their data comes from and how it is structured**. Flat files are rare but may be used for small extracts, relational databases capture the complexity of patient care, and warehouses integrate multiple inputs for research. Most CDW-R datasets are drawn from the Research Data Warehouse, which combines clinical, operational, and external data into a consistent format designed for research use.
### Data Storage Types

| **Data Type**        | **Definition** | **Use Case** | **Key Notes** |
|-----------------------|----------------|--------------|---------------|
| **Flat Files**        | Simple two-dimensional tables such as CSV or Excel. | Small datasets or quick exploratory work. | Hard to manage relationships between data points. The CDW-R rarely delivers data this way; study teams are expected to handle transformations if needed. |
| **Relational Databases** | Data stored in structured tables with defined relationships (e.g., Epic Clarity). | Managing complex datasets with multiple entities (patients, visits, labs). | Tables are linked with primary and foreign keys. Data is queried using SQL. |
| **Data Warehouses**   | Central repositories that integrate data from multiple sources (e.g., Epic Caboodle). | Large-scale analytics, long-term storage, and cross-departmental research. | The CDW-R maintains a Research Data Warehouse that draws on Clarity, Caboodle, and selected external or legacy sources. |

---

### Data Sources

| **Source** | **Definition** | **Examples** |
|------------|----------------|--------------|
| **Electronic Health Records (EHRs)** | Comprehensive records of patient interactions with healthcare systems. | Epic Hyperspace, Chronicles |
| **Data Warehouses** | Aggregated data from operational systems, structured for analytics and research. | Caboodle |
| **Public Datasets** | National databases, registries, or de-identified data available for research. | Claims data, CDC datasets |
| **External Sources** | Data collected outside traditional clinical systems. | Patient-reported outcomes, wearable devices, social determinants of health |

---

