---
title: Patient Demographics
layout: default
parent: Available Data
nav_order: 1
---
Demographics represent foundational data in clinical research, capturing key attributes such as age, sex, race, ethnicity, language, and other socio-environmental factors. These variables provide critical context for understanding patient populations. Demographics define the baseline composition of study populations, aiding in subgroup analyses and highlighting variations across age, race, gender, and other attributes.
Demographic data tend to align with requirements from regulatory bodies (e.g., FDA, NIH). By carefully leveraging and addressing the complexities of demographic data, researchers can enhance the validity, equity, and impact of their studies.

### Considerations for Use in Research:

- Self-reported demographics may vary in accuracy, while institutional biases in documentation (e.g., underreporting of race or ethnicity) can lead to gaps in data. Missing data for key variables like race or language can hinder analyses, requiring imputation or exclusion strategies.
- Granularity and Standardization: Race, ethnicity, and country of origin often require harmonization to align with federal or research-specific standards.
- Binary fields like sex assigned at birth may not fully represent gender diversity; careful consideration of evolving standards is essential.
- Protecting sensitive demographic data, such as country of origin or immigration status, is critical to prevent misuse or stigmatization. **These data are addressed in the special populations section.**
- Certain fields, like marital status or education, may change over time, while others, like sex assigned at birth, are static. Understanding the temporal relevance of demographics is crucial when using the data; these data are the data available within patient registration at the time of data extraction and may be out of date.

**Further information regarding SOGI data, interpreter usage, and country of origin are available in the HRSN and Special Populations sections.**

## Data Output: Demographics

| Variable                   | Description                                                                                       | Source                                    | Data Type   | Key Information                                                                                                   |
|----------------------------|---------------------------------------------------------------------------------------------------|-------------------------------------------|-------------|-------------------------------------------------------------------------------------------------------------------|
| `id`                   | Unique identifier for the cohort or patient record in the dataset.                               | Epic Clarity (`Patient` table)            | String      | Links demographic data to other tables or datasets.                                                             |
| `ageinyears`               | Age of the patient in years, calculated based on date of birth and data extract date.     | Epic Clarity (`Patient` table)            | Integer     | May change over time; often recalculated dynamically for reports or analyses.                                    |
| `sex`   | Patient's legal sex.                                                            | Epic Clarity (`Patient` table)            | String      | Values typically include "Male," "Female," or "Unknown."                                                         |
| `sexassignedatbirth`   | Sex assigned to the patient at birth.                                                            | Epic Clarity (`Patient` table)            | String      | Values typically include "Male," "Female," or "Unknown."                                                         |
| `preferredlanguage`    | The language the patient prefers.                                              | Epic Clarity (`Patient` table)            | String      | Important for ensuring effective communication and equitable care delivery.                                       |
| `race`            | Patient's race per registration information.                                          | Epic Clarity (`Patient Race` table)       | String      | Coded to align with federal and organizational race categories.                                              |
| `ethnicity` (`hispanicindicator`) | Indicator whether the patient is Hispanic or Latino.                                | Epic Clarity (`Patient Ethnicity` table)  | Boolean     | Values may include "Yes," "No," or "Unknown."                                                                    |
| `interpreterneeded`        | Indicates if the patient requires an interpreter for communication.                              | Epic Clarity (`Patient` table)            | Boolean     | "Yes" if interpreter services are needed, "No" otherwise.                                                        |
| `highestlevelofeducation`  | The highest level of education attained by the patient. May not be current.                                          | Epic Clarity (`Patient` table)            | String      | Values may include "High School," "Bachelor's Degree," "Graduate Degree," etc.                                   |
| `mychartstatus`            | Indicates whether the patient has an active MyChart account.                                     | Epic Clarity (`MyChart` table)            | Boolean     | "Yes" if the account is active, "No" if it is inactive or not created.                                           |
| `maritalstatus`            | The patient’s marital status. May not be current.                                                                 | Epic Clarity (`Patient` table)            | String      | Examples: "Single," "Married," "Divorced," "Widowed," or "Unknown."                                               |
