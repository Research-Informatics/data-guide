---
title: Data Frameworks & Clinical Classifications
layout: default
---
Clinical classifications play a vital role in organizing and categorizing medical information for various purposes, such as clinical documentation, billing, research, and interoperability. External standardized classifications and internal cateogrizations are critical for ensuring that clinical data is both actionable and accessible, whether at the local level or on a broader scale. Combining external standards with internal systems allows institutions to meet their operational needs while contributing to the larger ecosystem of healthcare data. Through this structured approach, we aim to support high-quality research, facilitate meaningful insights, and drive innovation in patient care and beyond.

## Standardized Classifications & Coding Systems
  External classifications, such as **ICD-10**, **CPT**, and **LOINC**, are widely used across healthcare systems to promote consistency and interoperability. These systems are designed to standardize the representation of clinical concepts, ensuring that data can be easily shared, analyzed, and understood across institutions, regions, and even countries. They are essential for billing, regulatory compliance, and cross-system data exchange.

| **Standardized Coding System** | **Type**                 | **Description**                                                                                                 | **Data Type** |
|--------------------------------|--------------------------|---------------------------------------------------------------------------------------------------------------|---------------|
| ICD-10, ICD-9                  | Diagnosis Codes         | Standardized codes used to represent medical diagnoses for billing, research, and clinical documentation. 	Implemented October 2015. We recommend keeping your data request after October 2015; in doing so, you will not need to consider ICD-9.      | Structured    |
| CPT, HCPCS                     | Procedure Codes         | Standardized codes to describe medical, surgical, and diagnostic procedures.                                   | Structured    |
| NDC (National Drug Codes)      | Drug Codes              | Codes used to represent medications in standardized formats.                                                  | Structured    |
| LOINC                          | Lab Test Codes          | Codes used to identify laboratory tests and their results.                                                    | Structured    |
| SNOMED CT                      | Anatomy Codes           | Codes that specify anatomical locations for procedures or conditions.                                         | Structured    |
| DRGs (Diagnosis-Related Groups), APCs (Ambulatory Payment Classifications) | Billing Codes         | Codes for reimbursement and claims processes, often tied to diagnoses and procedures.                         | Structured    |


## Internal Classifications & Categorizations
  The Research Data and Informatics team has developed a bespoke research data warehouse tailored to meet the unique needs of our hospital's research community. This system goes beyond implementing standard best practices—it enhances and refines them to align with our institution's research goals. By integrating carefully designed classifications, taxonomies, and ontologies, we provide a robust framework for organizing and understanding complex datasets, enabling researchers to navigate and utilize data more effectively.
  Internal classifications are tailored to meet the unique needs of a specific institution. These systems often reflect customized workflows, clinical protocols, or research priorities. While they lack the universality of external classifications, their specificity makes them invaluable for addressing local operational and clinical nuances. Examples might include internal codes for clinical pathways, research cohorts, or institutional flags not captured in external standards.


### CDW-R Insurance Category & Subcategory
