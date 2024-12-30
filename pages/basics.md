---
title: Data Basics
layout: default
---
## What is Data Literacy?

Data literacy is the ability to read, understand, create, and communicate data as information. For researchers, it involves:

- **Understanding the data lifecycle**: Knowing how data is captured and moves through its lifecycle.
- **Understanding data structures**: Knowing how data is organized and stored.
- **Analyzing data**: Extracting insights and drawing conclusions.
- **Communicating findings**: Presenting data in a meaningful way to inform decisions or drive change.

In the context of clinical research, data literacy empowers researchers to:

- Navigate complex healthcare datasets effectively.
- Make evidence-based decisions that improve patient outcomes.
- Ensure data-driven insights are accurate, reproducible, and meaningful.

The Research Informatics team, including the CDW-R, is dedicated to ensuring high-quality data and meticulous curation. Our goal is to empower researchers with the knowledge and confidence to work effectively with data, from requesting it for their studies to receiving it for analysis. This guide focuses on the pre-analysis stages of the data lifecycle.

---

### Why is Data Literacy Important in Clinical Research?

Clinical research relies on accurate and meaningful data to:

- **Advance medical knowledge**: Use clinical data to identify patterns, test hypotheses, and develop new treatments.
- **Improve patient outcomes**: Inform decision-making and clinical guidelines based on real-world evidence.
- **Optimize resource utilization**: Ensure research is efficient and impactful.

Without proper data literacy:

- Insights can be misinterpreted, leading to poor decisions.
- Errors may compromise research integrity.
- Researchers may overlook valuable patterns or trends.

---

## 3. Clinical Data Structures

Clinical data is stored and organized in various structures, each designed to suit specific needs:

### 3.1 Flat Files
- **Definition**: Simple, two-dimensional tables (e.g., CSV, Excel).
- **Use Case**: Small datasets, quick analyses.
- **Limitations**: Difficult to manage relationships between data points.
- **Note that the CDW-R rarely delivers data in flat files, and it is the expectation that the study team has the ability to transform their data as necessary.**

### 3.2 Relational Databases
- **Definition**: Data stored in structured tables with defined relationships (e.g., Epic Clarity).
- **Use Case**: Managing complex datasets with relationships (e.g., patients, visits, labs).
- **Key Features**:
  - Tables are linked using primary and foreign keys.
  - SQL is used to query data.

### 3.3 Data Warehouses
- **Definition**: Central repositories for integrating data from multiple sources (e.g., Epic Caboodle).
- **Use Case**: Long-term storage, large-scale analytics, and multi-departmental research.
- - **Note: the CDW-R has built a bespoke Research Data Warehouse, leveraging Epic's Clarity and Caboodle, as well as integrating external and legacy data sources. 

---

## 4. Data Sources

Clinical research data comes from various sources, each with unique attributes:

- **Electronic Health Records (EHRs)**: Comprehensive records of patient interactions with healthcare systems (e.g., Epic Hyperspace, Chronicles).
- **Data Warehouses**: Aggregated data from operational systems, designed for analytics (e.g., Caboodle).
- **Public Data Sets**: National databases, registries, and de-identified datasets (e.g., Claims, CDC data).
- **External Sources**: Patient-reported outcomes, wearables, and social determinants of health.

---

## 5. Basic Data Terminology

Before diving into clinical-specific terms like encounters or demographics, it’s crucial to understand foundational data concepts:

## Data types

## Data Type Definitions

| **Theme**             | **Data type**          | **Definition**                                                                                                    | **Examples**                                  |
|------------------------|------------------------|------------------------------------------------------------------------------------------------------------------|----------------------------------------------|
| Basic Data Types       | Qualitative Data      | Non-numeric data that describes characteristics, attributes, or qualities, often capturing subjective information.| Patient-reported symptoms, clinical notes, free-text comments |
| Basic Data Types       | Quantitative Data     | Numeric data that can be measured and analyzed mathematically, often used for statistical or computational purposes.| Lab results, BMI, heart rate, medication dosages |
| Data Format and Organization | Categorical Data    | Data that represents discrete categories or groups, often used for stratification or filtering.                   | Blood type, race/ethnicity, diagnosis codes   |
| Data Format and Organization | Hierarchical Data   | Data organized into a tree-like structure, often representing relationships or nested levels of detail.            | Clinical ontologies, procedure-taxonomy relationships |
| Data Format and Organization | Metadata            | Data that describes other data, providing context or information about data origin, creation, or modifications.     | Record creation date, author, data source     |
| Data Format and Organization | Semi-Structured Data | Data with partial organization, often using templates or dot phrases.                                             | Observational Notes, Patient-Reported Data    |
| Data Format and Organization | Structured Data     | Highly organized data stored in predefined fields.                                                                | Lab Results, Orders                           |
| Data Format and Organization | Unstructured Data   | Free-form text or data without a predefined schema.                                                               | Free Text, Imaging data raw files             |
| Derived or Dynamic Data | Derived Data         | Data created through algorithms or processing of raw data.                                                        | Clinical Phenotype, Flags, NLP outputs        |
| Derived or Dynamic Data | Point-in-Time Data   | Data calculated or derived at a specific moment, often transient and not stored persistently. Used for real-time decision-making or immediate reference. | Real-time risk scores, dynamically calculated BMI, transient alerts |
| Derived or Dynamic Data | Probabilistic Data   | Data representing likelihoods or uncertainties, often derived from predictive models or algorithms.               | Risk scores, probability of disease           |
| Specialized Data Types  | Genomic Data         | Data derived from DNA or RNA sequencing, often linked to structured and unstructured interpretations.              | SNPs, variant annotations                     |
| Specialized Data Types  | Image Metadata       | Structured data that describes imaging files, often linked to unstructured image content.                          | Modality, study date, resolution              |
| Specialized Data Types  | Log Data             | System-generated data that tracks events, interactions, or system usage.                                          | Access logs, audit trails                     |
| Specialized Data Types  | Spatial Data         | Data that includes a geographical or physical location component, often used in public health or facility management.| Patient location, regional outbreak data      |
| Specialized Data Types  | Temporal Data        | Data associated with time, often critical in clinical contexts to track events, trends, or changes over time.      | Vitals trends, medication timing, timestamps  |


| **Data Terms** | **Details**  | **Data type** |**Example**|
| :----------- | :----------- |:----------- |:----------- |
| Clinical Phenotype | An observable clinical condition or characteristic that can be identified by querying the electronic health record for a defined set of data elements  |Derived| CDW-R housing algorithm|
|Free Text| often narrative text; no data entry control. May include misinformation, misclassification, and issues such as spelling errors| Unstructured| clinical notes|
|Dot phrase (also referred to as ‘smartphrase’)|Allows user to type a few characters that automatically expand into a longer phrase, paragraph, or template. Allows common/standardized text, sections, and/or instructions to populate, thereby minimally controling standardization of the note format.|Semi-structured| example|
|Smart form| An EMR-based clinical workflow tool to organize data capture, standardize encounter documentation, and incorporate decision support and/or recommendations for care. Can include functionality to automatically populate the note with data captured elsewhere in the patient’s medical record. Used across teams or clinics/departments to increase standardization in charting/notes| Structured| COVID intake|
|Flowsheet|Tool that collects discrete data in a particular format. Allows for standard data entry and easy data extraction.|Structured|Vitals|
|Flag|Term used for a mechanism leveraging various data available in Epic via phenotyping that alerts of the presence (or absence) of a particular condition, situation, need, problem in the data|Derived, Binary|CDW-R SUD alogirthm|
|Indicator|Y/N field in Epic|Binary|example|

### 5.2 Structured vs. Unstructured Data
- **Structured Data**: Highly organized (e.g., lab values in predefined fields).
- **Unstructured Data**: Lacks a fixed format (e.g., free-text notes).

### 5.3 Data Quality
- **Completeness**: Is all required data present?
- **Consistency**: Are values uniform across datasets?
- **Accuracy**: Does the data reflect reality?

### 5.4 Metadata
- **Definition**: Data about data (e.g., when a record was created, by whom).
- **Importance**: Helps in tracking provenance and ensuring proper usage.

### 5.5 Data Relationships
- **Primary Key**: Unique identifier for a record (e.g., patient ID).
- **Foreign Key**: A link between tables (e.g., visit ID in a patient record).
