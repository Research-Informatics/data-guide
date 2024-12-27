---
title: Vitals
layout: default
---

Vital signs data provides fundamental insights into patient health and physiological status, making it a critical component of clinical research. Captured in both inpatient and outpatient care settings, vital signs such as blood pressure, heart rate, respiratory rate, oxygen saturation, and temperature offer real-time indicators of a patient’s well-being and can be used to monitor trends, detect abnormalities, and evaluate the impact of interventions.

In the inpatient setting, vital signs are often recorded at high frequency, especially in critical care scenarios, offering granular insights into acute health events. In the outpatient setting, vital signs are typically captured during routine visits, providing a snapshot of the patient's condition over time and aiding in chronic disease management.

### Considerations for Research
- **Timing and Frequency of Measurements**: Understand the context of when vitals are recorded. Inpatient settings may involve frequent monitoring (e.g., hourly or continuous), whereas outpatient vitals are often collected during scheduled visits. Align your analysis with the timeframes relevant to your research.

- **Contextual Factors**: Consider external factors influencing vitals, such as medications, physical activity, or stress. For example, blood pressure may vary based on posture, and heart rate can be affected by exertion or anxiety.

- **Standardization and Data Quality**: Be aware of potential inconsistencies or gaps in recorded vitals. Standardize units (e.g., mmHg for blood pressure) and account for missing data to ensure reliable analysis.

## CDW-R Curated Data Fields & Definitions

#### Initial, Min, Max
Available for inpatient admissions, these fields provide the first recorded vital sign (initial), the lowest recorded value (min), and the highest recorded value (max) during an inpatient stay. These metrics are useful for analyzing ranges and identifying critical values.

#### Ever Above or Below
This field captures whether a vital sign exceeded or fell below a predefined threshold during the measurement period. It is particularly helpful for identifying patients with episodes of acute instability.

#### Most Recent
The most recent vital sign measurement within a defined timeframe. This field is valuable for studies requiring the latest data point, such as pre-discharge assessments or follow-ups.

<!--
## Data Output: Inpatient Vitals
If requesting labs for inpatient admissions or ED encounters, note that an encounter id will be available in addition to patient id; this must be used to ensure the labs are associated with the appropriate encounters and its data. 

## Data Output: Outpatient Vitals

## All vitals during study period
-->
