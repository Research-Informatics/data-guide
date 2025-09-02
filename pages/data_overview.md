---
title: Available Data in the Research Data Warehouse
layout: default
nav_order: 20
has_children: true
---

Please visit the [CDW for Research's website](https://www.bmc.org/research/clinical-data-warehouse-cdw) for more information on accessing clinical data for Research. 
Fill out a [data request form](https://bmc.tfaforms.net/f/cdw-data-request-form).


This section introduces the types of data available through the Research Data Warehouse, along with important considerations for working with clinical data. The CDW-R team will help determine the data most relevant to your research question and advise on feasibility, quality, and integrity.

---

## Data Notes and Common Definitions

| **Source / System** | **Details** |
|----------------------|-------------|
| **Epic Inpatient** | Implemented May 2014. |
| **Epic Outpatient** | Implemented May 2015. |
| **Epic Billing** | Implemented May 2018. For the cleanest dataset, we recommend limiting requests to after this date, particularly if your study relies on CPTs or procedure codes. |
| **Epic Clarity** | Epic’s relational database. |
| **Epic Caboodle** | Epic’s curated relational database representing a subset of Clarity. |
| **Legacy Data** | Data from systems prior to Epic implementation. These sources are not actively maintained and are not monitored for quality. Extracting legacy data may double analyst coding time. Consider carefully whether legacy data is essential for your study. |
| **ICD-10 Codes** | Implemented October 2015. Requests limited to data after this date avoid the need to reconcile ICD-9. |
| **BMC Research Data Warehouse** | Bespoke warehouse built by the CDW-R team, integrating Clarity, Caboodle, and selected external and legacy sources for research. |

---

## Data Types in the EHR

| **Data Term** | **Details** | **Data Type** | **Example** |
|---------------|-------------|---------------|-------------|
| **Clinical Phenotype** | A defined condition identified by querying a set of EHR data elements. | Derived | CDW-R housing algorithm |
| **Free Text** | Narrative text without entry controls; may include errors or inconsistencies. | Unstructured | Clinical notes |
| **Dot Phrase (SmartPhrase)** | Shortcut text that expands into longer, standardized text. | Semi-structured | “.covidscreen” expands to screening questions |
| **Smart Form** | Structured tool for encounter documentation, often with decision support. | Structured | COVID intake form |
| **Flowsheet** | Captures discrete values in a consistent format. | Structured | Vitals flowsheet |
| **Flag** | Algorithm-driven indicator of the presence/absence of a condition or need. | Derived (Binary) | CDW-R SUD algorithm |
| **Indicator** | Simple yes/no field in Epic. Could be derived.| Binary | “Is patient pregnant?” |

---

## Data Available and Details

| **Data Category** | **Data Fields** | **Notes** |
|-------------------|-----------------|-----------|
| **Inpatient Utilization** | ICD-10 codes at the patient level. Dates exist but may not reflect date of onset. |
| **Patient Problem List** | ICD-10 codes at the patient level. Dates exist but may not reflect date of onset. |
| **Past Medical History** | Patient-reported history without associated encounters. Free text; may lack structured dates. Clinicians may see this under Problem List, but entries are greyed or flagged as past medical history. |
| **Research Informatics HRSN** | Screens up to 8 domains of health-related social needs. Captures responses as ICD-10 visit diagnosis codes. Tool versions vary by clinic, rollout, and number of questions. Patients may decline screening or skip questions, which affects denominators and screening rates. |
| **CPT Codes** | Procedure codes. See [Data Frameworks section](/data-frameworks-clinical-classifications/) for details on coding systems. |

---

## Important Note on Cohorts

The data you request to **define your cohort** may differ from the data you need for **analysis**. For example, you may identify a cohort of patients with a surgical CPT code, but then request additional labs, vitals, or follow-up encounters for analysis. The CDW-R team will help you distinguish between **inclusion criteria** and **analysis fields** so that your dataset is accurate and fit for purpose.

