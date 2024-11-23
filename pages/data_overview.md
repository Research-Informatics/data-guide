---
title: Data Available in the Research Data Warehouse
layout: default
---

Please visit the [CDW for Research's website](https://www.bmc.org/research/clinical-data-warehouse-cdw) for more information on accessing clinical data for Research. 
Fill out a [data request form](https://bmc.tfaforms.net/f/cdw-data-request-form)

This section is intended to inform the Research Community on the data available in the Research Data Warehouse via the CDW-R team as well as the nuances of clinical data and things to consider when approaching the data. 
Our team of experts are specialized in leveraging data for Research, and account for all of the nuances of clinical data when approaching your data request. We will advise on the data required for your Research question and help you ascertain feasibility. We use our discretion when advising on data to ensure optimal data quality and integrity. 


## Data Notes, Common Defintions, and Things to Know:

|  <!-- --> | Details  |
| :----------- | :----------- |
|Epic Inpatient|Implemented May 2014|
| Epic Outpatient | Implemented May 2015|
| Epic Billing | Implemented May 2018. For the cleanest data set, we recommend keeping your date range beyond May 2018, particularly if your study question or cohort inclusion requires CPTs or procedures codes.|
| Epic Clarity | Epic relational database|
| Epic Caboodle| Epic relational database representing a subset of Clarity|
| Legacy data| Data from various legacy systems prior to Epic implementation. We can extract data from legacy clinical systems; however, legacy systems are not actively maintained, data from them are not monitored for quality, and extracting legacy data can double the amount of data analyst coding time required to extract data. We encourage researchers to consider whether their research question and/or sample size requires data from legacy systems|
| ICD-10 codes | Coding for diseases and health-related problems. Implemented October 2015. We recommend keeping your data request after October 2015; in doing so, you will not need to consider ICD-9. |
| BMC Research Data Warehouse|BMC's bespoke data warehouse tailored to research built by the CDW for Research team|


## Data types

| **Data Terms** | **Details**  | **Data type** |**Example**|
| :----------- | :----------- |:----------- |:----------- |
| Clinical Phenotype | An observable clinical condition or characteristic that can be identified by querying the electronic health record for a defined set of data elements  |Derived| CDW-R housing algorithm|
|Free Text| often narrative text; no data entry control. May include misinformation, misclassification, and issues such as spelling errors| Unstructured| clinical notes|
|Dot phrase (also referred to as ‘smartphrase’)|Allows user to type a few characters that automatically expand into a longer phrase, paragraph, or template. Allows common/standardized text, sections, and/or instructions to populate, thereby minimally controling standardization of the note format.|Semi-structured| example|
|Smart form| An EMR-based clinical workflow tool to organize data capture, standardize encounter documentation, and incorporate decision support and/or recommendations for care. Can include functionality to automatically populate the note with data captured elsewhere in the patient’s medical record. Used across teams or clinics/departments to increase standardization in charting/notes| Structured| COVID intake|
|Flowsheet|Tool that collects discrete data in a particular format. Allows for standard data entry and easy data extraction.|Structured|Vitals|
|Flag|Term used for a mechanism leveraging various data available in Epic via phenotyping that alerts of the presence (or absence) of a particular condition, situation, need, problem in the data|Derived, Binary|CDW-R SUD alogirthm|
|Indicator|Y/N field in Epic|Binary|example|

## Data Available

| **Data Category** | **Data Field**  | **Details** |**Data Type**|
| :----------- | :----------- |:----------- |:----------- |
| Inpatient Utilization | ICD-10 codes, data at the patient level—noted date exists but may not be related to date of onset |
| Patient Problem List | ICD-10 codes, data at the patient level—noted date exists but may not be related to date of onset |
| Past medical history | Patient-reported medical history for which there is no encounter. May or may not include an entry date, resolved year. Free text; no dx/ICD-10s associated with entry. Clinicians may see this in a chart under Problem List but the entry is greyed out and/or there is an asterisk that says past medical history. |
| BMC THRIVE SDOH Screening Program (Screening Tool & Resources Requested by Patient) |The BMC THRIVE Screening Tool screens patients for a maximum of 8 domains of health-related social needs, captures responses as standard ICD-10 visit diagnosis codes in the EHR, and offers patients printed resource referral guides to help address unmet social needs.  THRIVE was modeled after the WE CARE program in Pediatrics, an SDOH screening and referral program implemented at BMC and other urban pediatric clinics.  See appendix for paper screening tool. The BMC THRIVE Screening does not produce an aggregate score. It is important to note that there have been multiple versions of the THRIVE screening tool. The tool differs by clinic locations, and roll-out timeframes differ by clinic. In addition, clinics utilize a different number of questions, different questions themselves, and different SDOH domains. Patients may formally decline screening or choose to not answer any number of questions. These nuances create ramifications for screening numerators, denominators, and rates.

