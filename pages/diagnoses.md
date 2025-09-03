---
title: Diagnoses
layout: default
---

Diagnoses in healthcare encompass various classifications that capture a patient's medical conditions, symptoms, and health concerns across different contexts, offering valuable insights for research. Key categories include the _patient problem list_, a longitudinal record of chronic and significant conditions maintained across encounters, and the _hospital problem list_, which tracks active issues during inpatient stays. The _encounter diagnosis_ refers to conditions documented for a specific visit, including acute and chronic conditions, comorbidities, and the primary reason for care, often tied to coding systems like ICD-10. _Past medical history_ aggregates historical conditions and resolved issues, providing a foundation for understanding a patient’s long-term health trajectory. The _reason for visit_ and _ED complaint_ typically reflect the patient's presenting symptoms or concerns, offering insight into acute health events and care-seeking behavior. ED complain is unstructure, free-text and care must be given to ensure this field is used effectively. For research, these diagnostic data points are pivotal for studying disease prevalence, care outcomes, and population health. Researchers must account for the nuances of documentation, such as variations in chronic condition tracking, acute event coding, or comorbidity indices (e.g., Charlson or Elixhauser). Integrating these sources with standardized coding and temporal context enhances their reliability for studying trends, identifying risk factors, and designing interventions. Below outlines data you may receive in your dataset and provides guidance on which diagnoses are most appropriate for your study. 

**ED complaint and reason for visit are outlined in the encounter section.**

### Problem List
The Problem List identifies patient-level diagnoses with an onset date and occasionally dates of resolution if applicable. 

### Encounter Diagnoses
Encounter diagnoses are the documented medical conditions, symptoms, or reasons associated with a specific patient encounter in a healthcare setting. These diagnoses provide context for the care delivered during the encounter. While primary diagnosis are flagged, no other categorization is provided for secondary, etc.

**Considerations for research**
- Encounter diagnoses may reflect billing priorities rather than clinical realities.
- Coding errors or incomplete documentation can impact the reliability of the data.
- Encounter diagnoses are tied to specific visits and may not represent chronic conditions or the patient's overall health status.
- Is there documentation bias? Clinicians may document certain diagnoses more frequently due to institutional policies, reimbursement incentives, or population-specific trends.
- What is the care setting? If looking at admissions, consider including hospital problem list.
- For certain conditions and diagnoses, combine with other data elements (e.g., procedures, medications, lab results) for a more accurate portrayal.

#### Data output

| Variable            | Description                                                                 | Source                              | Data Type   | Key Information                                                                                                  |
|---------------------|-----------------------------------------------------------------------------|-------------------------------------|-------------|------------------------------------------------------------------------------------------------------------------|
| `patientID` | Unique identifier for the patient randomly assigned by the CDW-R.                                 | CDW-R   | String      | Patient ID used throughout the data set. Unique to the patient for a study.                                        |
| `ServiceDate`   | The date of the encounter for which the dx is associated.                                     | Epic Clarity (`Encounter` table)    | Date        | Reflects the date of service, which may differ from admission or discharge dates.                               |
| `Code`           | Diagnosis code associated with the encounter.                             | Epic Clarity (`Diagnosis` table)    | String      | ICD-10 code; standardized for billing and reporting.                          |
| `CodeDescription`| Textual description of the diagnosis code.                                | Epic Clarity (`Diagnosis` table)    | String      | Provides a human-readable interpretation of the diagnosis code.                                                 |
| `PrimaryDiagnosis` | Indicates if the diagnosis is the primary diagnosis for the encounter.  | Epic Clarity (`Diagnosis` table)    | Boolean     | Identifies the The main condition or reason for the visit, often used for billing and resource allocation.                                                        |


### Past Medical History
Past Medical History is generally patient-reported information about personal and familiar medical history. 

### Comorbidity Indices
