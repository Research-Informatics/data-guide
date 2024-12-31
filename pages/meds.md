### Considerations for Medications in Research

Medication data in Epic encompasses prescriptions (Rx) and administration records (MAR), each serving distinct roles in patient care and research. Understanding the differences between these data sources is crucial for accurately interpreting medication-related insights. The CDW-R will provision data according to these differences. We have recently built infrastructure to integrate Surescripts data, enabling researchers to incorporate adherence data into their analyses, offering a more comprehensive view of medication use.

#### **Prescriptions (Rx)**
- **Description**: Prescriptions represent the intent to provide a medication, typically for outpatient use, and include details such as drug name, dosage, frequency, and duration.
- **Use in Research**: Rx data is essential for studying prescribing patterns, adherence, and long-term medication use. However, prescriptions reflect intent and may not indicate whether the patient filled or took the medication.
- **Data Considerations**:
  - Cross-reference with external data sources, such as pharmacy fill records (e.g., SureScripts integration), to assess adherence.
  - Analyze cancelled or modified prescriptions to understand clinical decision-making. 

#### **Medication Administration Records (MAR)**
- **Description**: The MAR captures actual medication administrations, primarily for inpatient care, and includes timestamps, dosages, and routes of administration.
- **Use in Research**: MAR data is ideal for studying the real-time impact of medications, acute care management, and adherence during hospital stays.
- **Data Considerations**:
  - MAR data confirms that a medication was given, providing more reliable insights into actual usage compared to Rx data.
  - Researchers should account for PRN (as-needed) medications, which may not follow a consistent schedule.

#### **Key Differences Between Rx and MAR**
| **Aspect**                 | **Prescriptions (Rx)**                          | **Medication Administration Records (MAR)**       |
|----------------------------|------------------------------------------------|--------------------------------------------------|
| **Primary Use**            | Outpatient prescribing intent                  | Inpatient medication administration              |
| **Focus**                  | Reflects intent (may not be fulfilled)         | Reflects actual administration (confirmed usage) |
| **Data Completeness**      | May lack adherence or fill information         | Includes timestamps and details for actual use   |
| **Examples**               | Prescribed insulin for diabetes management     | Insulin administered during hospitalization      |

#### **Considerations for Research**
- **PRN Medications**: Researchers should distinguish between PRN (as-needed) and scheduled medications, as PRN administrations depend on specific triggers (e.g., pain > 4/10).
- **Titrated Medications**: Medications like insulin or vasopressors may have variable dosages, requiring integration with flowsheets to understand adjustments.
- **Cancelled or Modified Orders**: Both Rx and MAR data include modifications, which can provide insights into patient care adjustments.
- **Longitudinal Studies**: Use Rx data for chronic disease management research and MAR data for acute inpatient care studies.

#### **Programmatic Support by the CDWR**
The CDWR harmonizes medication data from both Rx and MAR sources, ensuring consistency and accuracy. For outpatient studies, the CDWR integrates SureScripts data to provide additional context on adherence and fills. For inpatient data, MAR records are linked with flowsheets and nursing documentation to provide a complete picture of medication administration. This enables researchers to focus on analysis without needing to reconcile intent versus actual use manually.
