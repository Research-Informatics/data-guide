---
title: Orders
layout: default
---

## Orders

### Overview
Orders are a cornerstone of clinical workflows, representing instructions for diagnostic tests, treatments, medications, consultations, and procedures. In the Epic data model, orders are highly complex and multifaceted, capturing a wealth of information about the intent, context, and execution of clinical decisions. Orders are critical for understanding care delivery, tracking adherence to protocols, and identifying variations in practice.

| **Order Type**          | **Description**                                                                 | **Subtype**             | **Subtype Explanation**                                    | **Examples**                                           |
|--------------------------|---------------------------------------------------------------------------------|-------------------------|-----------------------------------------------------------|-------------------------------------------------------|
| **Medication Orders**    | Orders for prescription and non-prescription medications.                      | PRN Medications         | Administered as needed based on patient conditions.       | Acetaminophen 500 mg every 6 hours as needed for pain |
|                          |                                                                                 | Scheduled Medications   | Administered at regular, predetermined times.             | Aspirin 81 mg daily                                   |
|                          |                                                                                 | Titrated Medications    | Adjusted based on patient responses or lab results.       | Insulin sliding scale                                 |
|                          |                                                                                 | One-Time Medications    | Administered once for a specific need.                    | Pre-op antibiotics                                    |
| **Laboratory Orders**    | Orders for diagnostic or monitoring lab tests.                                 | Routine Labs            | Performed regularly as part of care.                     | Complete Blood Count (CBC)                           |
|                          |                                                                                 | STAT Labs               | Performed urgently for immediate clinical need.           | Arterial blood gas                                    |
|                          |                                                                                 | Panels                  | Grouped tests for efficiency.                            | Complete Metabolic Panel (CMP)                       |
| **Radiology/Imaging Orders** | Orders for diagnostic imaging procedures.                                      | Plain X-Ray             | Basic imaging for simple evaluations.                    | Chest X-ray for pneumonia evaluation                 |
|                          |                                                                                 | Advanced Imaging        | Detailed imaging for complex conditions.                 | CT scan of the abdomen with contrast                 |
|                          |                                                                                 | Interventional Radiology| Imaging-guided procedures.                               | CT-guided biopsy                                      |
| **Procedure Orders**     | Orders for invasive or non-invasive procedures.                                | Diagnostic Procedures   | Procedures for identifying conditions.                   | Colonoscopy with biopsy                              |
|                          |                                                                                 | Therapeutic Procedures  | Procedures for treating conditions.                      | Hemodialysis for renal failure                        |
|                          |                                                                                 | Minor Procedures        | Simple outpatient procedures.                            | Laceration repair                                     |
| **Consultation Orders**  | Requests for specialized provider or service evaluations.                     | Inpatient Consults      | Specialist evaluation during hospital stay.              | Cardiology consult for chest pain                    |
|                          |                                                                                 | Outpatient Referrals    | Follow-up care in a clinic setting.                      | Referral to physical therapy                         |
| **Nursing Orders**       | Instructions directed to nursing staff.                                        | Vital Monitoring        | Regular checks on patient vital signs.                   | Blood pressure every 4 hours                         |
|                          |                                                                                 | Observation Orders      | Close monitoring for specific conditions.                | Suicide watch for at-risk patients                   |
|                          |                                                                                 | Patient Care Activities | Instructions for nursing tasks or care routines.         | Turning patient every 2 hours to prevent ulcers      |


### Key Elements of Orders in Epic

- **Order Type**: Orders are categorized into various types, such as medication orders, diagnostic test orders, procedure orders, and consult orders. Each type has unique attributes and implications for clinical and research use.

- **Order Status**: The status of an order (e.g., "Active," "Completed," "Cancelled") provides insight into the lifecycle of the order and its execution.

- **Ordering Provider**: The clinician who initiated the order, which can be used to study provider behavior and adherence to guidelines.

- **Order Instructions**: Specific details or modifications, such as dosage adjustments for medications or special handling requirements for tests.

- **Order-Linked Data**: Orders are often linked to results, such as lab findings, imaging studies, or procedural outcomes, enabling comprehensive analyses.

### Considerations for Research

- **Order Context**: Understand the clinical setting of the order. Inpatient orders are often part of acute care workflows, while outpatient orders may reflect chronic disease management or preventive care.

- **Timing and Frequency**: Analyze the timing of orders in relation to clinical events. For example, pre-operative orders provide insights into surgical preparation, while repeated diagnostic orders may indicate disease monitoring.

- **Order Sets**: Many orders are part of predefined order sets, which streamline workflows but may introduce standardization that can mask individual provider preferences.

- **Execution and Outcomes**: Investigate the relationship between orders and their outcomes. For instance, did a diagnostic order lead to a significant finding, or did a medication order result in an adverse event?

- **Data Integration**: Orders can be linked to other clinical data, such as patient demographics, lab results, and vital signs, to create a richer context for analysis.

- **Order Variability**: Examine variations in ordering patterns across providers, departments, or patient populations. This can reveal gaps in care or opportunities for quality improvement.


### Future Directions
- Standardizing order terminology and attributes to facilitate cross-institutional research.
- Leveraging natural language processing (NLP) to extract additional context from order instructions.
- Using predictive analytics to identify patterns in orders that may lead to improved patient outcomes or reduced costs.

<!-- order questions and responses -->
