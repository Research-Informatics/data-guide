---
title: Diagnoses
layout: default
---

### Problem List

## Encounter Diagnoses
Encounter diagnoses are the documented medical conditions, symptoms, or reasons associated with a specific patient encounter in a healthcare setting. These diagnoses provide context for the care delivered during the encounter. While primary diagnosis are flagged, no other categorization is provided for secondary, etc.

**Considerations for research**
- Encounter diagnoses may reflect billing priorities rather than clinical realities.
- Coding errors or incomplete documentation can impact the reliability of the data.
- Encounter diagnoses are tied to specific visits and may not represent chronic conditions or the patient's overall health status.
- Is there documentation bias? Clinicians may document certain diagnoses more frequently due to institutional policies, reimbursement incentives, or population-specific trends.
- What is the care setting? If looking at admissions, consider including hospital problem list.
- For certain conditions and diagnoses, combine with other data elements (e.g., procedures, medications, lab results) for a more accurate portrayal.

### Data output

| Variable            | Description                                                                 | Source                              | Data Type   | Key Information                                                                                                  |
|---------------------|-----------------------------------------------------------------------------|-------------------------------------|-------------|------------------------------------------------------------------------------------------------------------------|
| `patientID` | Unique identifier for the patient randomly assigned by the CDW-R.                                 | CDW-R   | String      | Patient ID used throughout the data set. Unique to the patient for a study.                                        |
| `ServiceDate`   | The date of the encounter for which the dx is associated.                                     | Epic Clarity (`Encounter` table)    | Date        | Reflects the date of service, which may differ from admission or discharge dates.                               |
| `Code`           | Diagnosis code associated with the encounter.                             | Epic Clarity (`Diagnosis` table)    | String      | ICD-10 code; standardized for billing and reporting.                          |
| `CodeDescription`| Textual description of the diagnosis code.                                | Epic Clarity (`Diagnosis` table)    | String      | Provides a human-readable interpretation of the diagnosis code.                                                 |
| `PrimaryDiagnosis` | Indicates if the diagnosis is the primary diagnosis for the encounter.  | Epic Clarity (`Diagnosis` table)    | Boolean     | Identifies the The main condition or reason for the visit, often used for billing and resource allocation.                                                        |


# Data Dictionary

| Variable            | Description                                                                 | Source                              | Data Type   | Key Information                                                                                                  |
|---------------------|-----------------------------------------------------------------------------|-------------------------------------|-------------|------------------------------------------------------------------------------------------------------------------|
 `MRN`           | Medical Record Number, unique within a health system.                     | Epic Clarity (`Patient` table)      | String      | Used for patient identification within a specific institution. Only provided in patient keys                     |
