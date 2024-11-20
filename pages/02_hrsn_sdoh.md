---
title: Health Related Social Needs and Social Determinants of Health
layout: default
---

## Health Related Social Needs and Social Determinants of Health {#hrsn}

This resource describes social determinants of health (SDOH), health-related social needs, and other data fields relevant to health equity research that are available from the CDW for Research—including data definitions, descriptions, sources, and limitations.

Given the nature of SDOH data, available data fields are dynamic and often evolve in various clinical and data systems. Reach out to the [cdw@bmc.org](mailto:cdw@bmc.org) with questions.

The document outlines data available in Epic. If you are interested in SDOH data prior to Epic implementation (prior to June 2015), email our team at [cdw@bmc.org](mailto:cdw@bmc.org) to discuss options for data available from legacy systems.

---

## Using this Document to Select Study-Relevant Data: A Comment on Health Equity Tourism

The CDW for Research can work with you to identify specific data to leverage for your study. We encourage research teams to carefully select the data fields that have direct relevance to the research study’s question. The CDW for Research considers race to be a social construct and encourages researchers to think critically about using race and ethnicity as a proxy for structural racism or experiences with racism in their research.

We encourage research teams to read about Health Equity Tourism and avoid this phenomenon on behalf of the patients we serve.

---

## How this Resource is Organized

This resource lists main data elements, patient phenotypes, and algorithms, as well as discrete underlying data fields that could also be leveraged as relevant to research studies. Data are displayed as:

---

## Data Domains & Available Data Fields

### Race, Ethnicity, and Language (REL) Data

- CDW for Research Race and Ethnicity Phenotype
- Primary Race
- Hispanic or Latino culture or origin indicator (Y/N)
- Primary Language
- Patient Needs Interpreter Flag
- Interpreter Usage data

### Sex, Sexual Orientation, & Gender Identity (SSOGI)

- Sex (assigned at birth)
- Gender Identity
- Pronouns
- Sexual Orientation
- Surgical Procedures

### Housing

- CDW for Research housing algorithm
- BMC THRIVE Screening: Housing question
- BMC THRIVE Resources: Housing/Shelter resources requested by patient
- Epic patient & encounter homeless flags
- ICD-10 codes (encounter & problem list diagnoses)

### Food

- CDW for Research food insecurity & BMC food pantry use algorithm
- BMC Preventative Food Pantry referrals, letters, & orders
- BMC THRIVE Screening: Food insecurity risk (2-item Hunger Vital Sign) and food emergency questions
- BMC THRIVE Resources: Food resources requested by patient
- ICD-10 codes (encounter & problem list diagnoses)

### Utilities

- BMC THRIVE Screening: Trouble paying for heat or electricity question
- BMC THRIVE Resources: Utilities resources requested by patient
- Utilities Shut-off Protection Letter Issuance

### Transportation

- BMC THRIVE Screening: Trouble paying for transportation question
- BMC THRIVE Resources: Transportation to medical appointments resources requested by patient
- Documentation of MassHealth Provider Request for Transportation (PT1)

### Country of Origin

- Birthplace
- Country of Origin

<details>
  <summary><h3>Economic Stability and Social Connection</h3></summary>

- Primary Health Insurance
- Secondary Health Insurance
- Marital Status
- Income
- Highest Education Level
- BMC THRIVE Screening: Interested in more education question
- BMC THRIVE Resources: Education resources requested by patient
- Insurance
- Occupation
- BMC THRIVE Screening: Currently unemployed and looking for a job question
- BMC THRIVE Resources: Job search/training resources requested by patient
- BMC THRIVE Screening: Trouble paying for medications
- BMC THRIVE Resources: Paying for medicine resources requested by patient

</details>

### Neighborhood and Community Context

- Census tract level geocoding
- CDC Social Vulnerability Index (SVI)

---

## Race & Ethnicity {#rel}

Data that capture the social construct of race and ethnicity.

### CDW for Research Race & Ethnicity Phenotype

| Field                     | Description                                                                                                                                                                                                                          |
|---------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Description**           | A combined race and ethnicity variable that collapses available race, ethnicity, and Hispanic or Latino culture or origin indicator fields into the following mutually exclusive categories:<br>- Hispanic or Latino<br>- Non-Hispanic Asian<br>- Non-Hispanic Black<br>- Non-Hispanic White<br>- Another Non-Hispanic Race<br>- Unknown/Declined |
| **Source**                | BMC CDW for Research                                                                                                                                                                                                                 |
| **Logic & Recommendations** | The CDW for Research combines data from three Epic demographics tab data fields to create a patient phenotype:<br>- **Race**<br>- **Person of Hispanic or Latino Culture or Origin Indicator**<br>- **Primary Ethnicity**                                 |
| **Considerations**        | - The CDW for Research considers race to be a social construct and encourages researchers to think critically about using race and ethnicity as a proxy for structural racism or experiences with racism in their research.<br>- Further disaggregation of the “Non-Hispanic Asian” and “Another Non-Hispanic Race” is possible but may not be reportable due to small numbers.<br>- As of June 2022, patients are not able to select more than one race or ethnicity.<br>- The CDW for Research is exploring patient-reported race via MyChart. |

#### CDW for Research Race & Ethnicity Phenotype Components

##### Race (raw Epic data field)

| Field             | Description                                                                                                                                  |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| **Description**   | The race of the patient as captured in the medical record. There are 20 response options. See Appendix for all options.                       |
| **Source**        | Epic medical record, demographics tab (patient-level)                                                                                        |
| **Logic & Recommendations** | Disaggregated data can be used if the research question examines race categories beyond the CDW for Research patient phenotype.      |
| **Considerations** | - Data are entered into a patient’s record by clinical staff and may not be patient-reported.<br>- Patients are not able to select more than one race or ethnicity. |

##### Person of Hispanic or Latino Culture or Origin Indicator (raw Epic data field)

| Field             | Description                                                                                                                                  |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| **Description**   | Indicator for a person of Hispanic or Latino culture or origin, regardless of race, as captured in the medical record. Possible responses:<br>- Yes<br>- No<br>- Don't Know<br>- Declined |
| **Source**        | Epic medical record, demographics tab (patient-level)                                                                                        |
| **Logic & Recommendations** | Disaggregated data can be used if the research question examines Hispanic or Latino culture or origin beyond the CDW for Research patient phenotype. However, BMC included “Hispanic or Latino” as an option for race from 2018 to [Year], so disaggregation may not be advised. |
| **Considerations** | - This data field is often referred to as “ethnicity” but does not contain detailed ethnicity data; it functions only as an indicator (Y/N) of Hispanic or Latino culture or origin.<br>- Data are generally entered by clinical staff and may not be patient-reported.<br>- Approximately XX% of patients have conflicting race and ethnicity data (e.g., Hispanic or Latino listed as race and Non-Hispanic or Latino listed as ethnicity). |

##### Primary Ethnicity (raw Epic data field)

| Field             | Description                                                                                                                                  |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| **Description**   | The primary ethnicity of the patient. Response options are available in the Appendix.                                                         |
| **Source**        | Epic medical record, demographics tab (patient-level)                                                                                        |
| **Logic & Recommendations** |                                                                                                                                      |
| **Considerations** | - Data are generally entered by clinical staff and may not be patient-reported.<br>- Patients are not able to select more than one ethnicity. |

---

## Language

Data that capture the patient’s primary language and interactions with interpreter services.

### Primary Language

| Field             | Description                                                                                                                                  |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| **Description**   | Patient's primary language. Multiple response options are available. See Appendix for all options.                                            |
| **Source**        | Epic medical record, demographics tab (patient-level)                                                                                        |
| **Logic & Recommendations** |                                                                                                                                      |
| **Considerations** | - Patients may have different preferences in written and spoken language.<br>- Patient preferences may differ from the language they primarily speak at home.<br>- Consider stigmas that may affect a patient's stated preference. |

### Needs Interpreter Flag

| Field             | Description                                                                                                                                  |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| **Description**   | A flag indicating whether a patient requires an interpreter and, if so, services in what language.                                            |
| **Source**        | Epic medical record (patient-level)                                                                                                           |
| **Logic & Recommendations** | The CDW for Research can provide information on whether a patient has ever used interpreter services at an encounter at BMC if relevant to the research question. |
| **Considerations** | - Consider stigmas that may affect a patient's stated preference.                                                                            |

### Interpreter Usage

| Field             | Description                                                                                                                                  |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| **Description**   | Documentation that an interpreter was used during a specific encounter. Data fields include:<br>- Encounter information (date, clinic, appointment type, etc.)<br>- Language in which services were provided |
| **Source**        | Epic encounter (individual encounter-level)                                                                                                   |
| **Logic & Recommendations** | Encounter data can be extracted (e.g., smartforms, flowsheets). The CDW for Research can provide details if relevant to the research question. |
| **Considerations** | - Consider stigmas that may affect a patient's stated preference.                                                                            |

---

## Housing {#housing}

Electronic health record markers that capture whether a patient experienced housing insecurity and/or homelessness.

### CDW for Research Housing Algorithm

| Field             | Description                                                                                                                                  |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| **Description**   | CDW for Research-created algorithm that uses 8 indicators in the electronic health record to identify patients experiencing homelessness and/or housing insecurity. |
| **Source**        | BMC CDW for Research                                                                                                                          |
| **Logic & Recommendations** | The algorithm leverages the following data:<br>1. **BMC THRIVE Screening Housing Insecurity or Homelessness Positive Response**<br>2. **Homelessness on Problem List**<br>3. **Homelessness as Encounter Diagnosis**<br>4. **Registration Indicator**<br>5. **Housing Consult**<br>6. **Address History/Changes**<br>7. **Address is Shelter**<br>8. **Historical Shelter Address** |
| **Considerations** | - Casts a wide net to determine if a patient has ever experienced housing insecurity or homelessness during the study period.<br>- Update with sensitivity analysis when complete. |

#### CDW for Research Housing Algorithm Components

##### BMC THRIVE Screening: Housing Question

- **Description:** Captures housing insecurity or homelessness positive responses to the question: *"What is your living situation today?"* Possible responses:
  - "I have a place to live today, but I am worried about losing it in the future."
  - "I don't have a steady place to live (living with others, hotel, shelter, outside on the street, etc.)."
- **Source:** BMC THRIVE Screening Results in Epic
- **Logic & Recommendations:** The BMC THRIVE Screening tool does not have an aggregate score; individual items are recommended for use as relevant to the research question.
- **Considerations:** May undercapture patients experiencing any form of housing instability. The BMC THRIVE Screening is BMC health system-specific data, making comparisons with other systems difficult.

##### ICD-10 Code for Homelessness

- **Description:** Presence of **ICD-10 Z59.0** [Homelessness] added to a patient’s medical record via:
  - Clinician-entered via problem list
  - Diagnosis associated with an encounter
- **Source:** Epic patient problem list & encounter diagnoses; BMC THRIVE
- **Logic & Recommendations:** 
- **Considerations:** May undercapture patients experiencing any form of housing instability. Does not differentiate between insecurity and homelessness due to clinical capture and coding limitations.

##### Housing Consult

- **Description:** Any housing consult ordered during the study period.
- **Source:** Epic orders
- **Logic & Recommendations:** 
- **Considerations:** May not capture all patients in need due to variability in consult practices.

##### Address History/Changes

- **Description:** Patient's address history is queried to determine the number of address changes during the study period (instability defined by MassHealth as more than 3 address changes in 12 months).
- **Source:** Epic registration data
- **Logic & Recommendations:** Frequent address changes may indicate housing instability.
- **Considerations:** May not capture informal housing changes not reported to the health system.

##### Shelter Address

- **Description:** If the patient's address in the medical record is the address of a known homeless shelter or they have a history of residing in a shelter.
- **Source:** CDW for Research list of area shelters; Epic registration address
- **Logic & Recommendations:** 
- **Considerations:** May undercapture patients experiencing homelessness who do not use shelters.

---

Given the complexities of social circumstances, the CDW for Research leverages multiple aspects of the medical record in their aggregations.

---

*Note: Appendices and further sections should be added as necessary, following the same formatting guidelines.*
