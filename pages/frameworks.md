---
title: Data Frameworks & Clinical Classifications
layout: default
status: in process
advanced_by: na
assigned_reviewer: na
---
## Standardized Classifications & Coding Systems

External classifications, such as **ICD-10**, **CPT**, and **LOINC**, are widely used across healthcare systems to promote consistency and interoperability. These systems standardize the representation of clinical concepts so that data can be shared, analyzed, and understood across institutions, regions, and even countries. They are essential for billing, regulatory compliance, and research that spans multiple sites. These coding systems are designed to promote consistency, but in practice their use can vary. At BMC, not all standards are applied universally or consistently across departments, and usage may differ between care settings. It is also important to note that many of these systems—such as ICD and CPT—were developed primarily for billing and administrative purposes. As a result, they usually capture what was documented after an event occurred, rather than the intent or reasoning that led to it. Researchers should keep this in mind when interpreting coded data and consider whether additional context or data sources are needed.


| **System**  | **Type** | **Description** | **Data Type** |
|-------------|----------|-----------------|---------------|
| ICD-10, ICD-9 | Diagnosis Codes | Standardized codes for medical diagnoses. ICD-10 was implemented in the U.S. in 2015; data requests after this date avoid the need to reconcile ICD-9. | Structured |
| CPT, HCPCS | Procedure Codes | Codes describing medical, surgical, and diagnostic procedures. | Structured |
| NDC (National Drug Codes) | Medication Codes | Identifiers for medications. May be used alongside RxNorm. | Structured |
| RxNorm | Medication Terminology | Normalized naming system for generic and branded drugs; supports interoperability. | Structured |
| LOINC | Lab Test Codes | Standard identifiers for laboratory tests and results. | Structured |
| UCUM | Units of Measure | Standardized coding for laboratory and vital sign units. | Structured |
| SNOMED CT | Clinical Terminology | Comprehensive clinical terminology including anatomy, findings, and procedures. | Structured |
| DRGs, APCs | Billing Classifications | Codes used in reimbursement and claims, tied to diagnoses and procedures. | Structured |


## Internal Classifications & Categorizations
  The Research Data and Informatics team has developed a bespoke research data warehouse tailored to meet the unique needs of our hospital's research community. This system goes beyond implementing standard best practices—it enhances and refines them to align with our institution's research goals. By integrating carefully designed classifications, taxonomies, and ontologies, we provide a robust framework for organizing and understanding complex datasets, enabling researchers to navigate and utilize data more effectively.
  Internal classifications are tailored to meet the unique needs of a specific institution. These systems often reflect customized workflows, clinical protocols, or research priorities. While they lack the universality of external classifications, their specificity makes them invaluable for addressing local operational and clinical nuances. Examples might include internal codes for clinical pathways, research cohorts, or institutional flags not captured in external standards.

## Internal Classifications & Categorizations

The Research Data & Informatics (RDI) team has developed classifications within the Research Data Warehouse that reflect local workflows and research needs. These internal systems build on external standards but are tailored for our institution.  

Examples include:  
- **Insurance Categories and Subcategories** — CDW-R maintains a streamlined insurance classification that groups raw payer data into standardized categories for easier analysis.
- **Institutional Flags** — internally defined algorithms that identify patients with specific characteristics (e.g., housing instability, substance use, complex care needs).  
- **Cohort Definitions** — curated groupings of patients for specific research use cases, aligned with local clinical priorities.  
- **Custom Groupings** — such as surgical procedure categories, lab panels, or flowsheet groupings not represented in external standards.  

### CDW-R Insurance Category & Subcategory

_filler complete this section_


### Why Frameworks Matter

For researchers, understanding coding systems is important because they directly affect:  
- **Comparability** — whether your data can be analyzed alongside data from other sites.  
- **Granularity** — the level of detail available for diagnoses, procedures, and labs.  
- **Interpretation** — knowing when a code reflects a local convention versus an external standard.  

Researchers should be aware that not all data aligns perfectly with external standards. Local adaptations, legacy systems, and internal flags may introduce variation. When using coded data in studies, it is important to clarify whether the codes represent standard systems, local classifications, or both.
