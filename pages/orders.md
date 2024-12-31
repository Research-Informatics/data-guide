---
title: Orders
layout: default
---

## Orders

### Overview
Orders are a cornerstone of clinical workflows, representing instructions for diagnostic tests, treatments, medications, consultations, and procedures. In the Epic data model, orders are highly complex and multifaceted, capturing a wealth of information about the intent, context, and execution of clinical decisions. Orders are critical for understanding care delivery, tracking adherence to protocols, and identifying variations in practice.

<table>
  <thead>
    <tr>
      <th>Order Type</th>
      <th>Description</th>
      <th>Subtype</th>
      <th>Subtype Explanation</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="4">Medication Orders</td>
      <td rowspan="4">Orders for prescription and non-prescription medications.</td>
      <td>PRN Medications</td>
      <td>Administered as needed based on patient conditions.</td>
      <td>Acetaminophen 500 mg every 6 hours as needed for pain</td>
    </tr>
    <tr>
      <td>Scheduled Medications</td>
      <td>Administered at regular, predetermined times.</td>
      <td>Aspirin 81 mg daily</td>
    </tr>
    <tr>
      <td>Titrated Medications</td>
      <td>Adjusted based on patient responses or lab results.</td>
      <td>Insulin sliding scale</td>
    </tr>
    <tr>
      <td>One-Time Medications</td>
      <td>Administered once for a specific need.</td>
      <td>Pre-op antibiotics</td>
    </tr>
    <tr>
      <td rowspan="3">Laboratory Orders</td>
      <td rowspan="3">Orders for diagnostic or monitoring lab tests.</td>
      <td>Routine Labs</td>
      <td>Performed regularly as part of care.</td>
      <td>Complete Blood Count (CBC)</td>
    </tr>
    <tr>
      <td>STAT Labs</td>
      <td>Performed urgently for immediate clinical need.</td>
      <td>Arterial blood gas</td>
    </tr>
    <tr>
      <td>Panels</td>
      <td>Grouped tests for efficiency.</td>
      <td>Complete Metabolic Panel (CMP)</td>
    </tr>
    <tr>
      <td rowspan="3">Radiology/Imaging Orders</td>
      <td rowspan="3">Orders for diagnostic imaging procedures.</td>
      <td>Plain X-Ray</td>
      <td>Basic imaging for simple evaluations.</td>
      <td>Chest X-ray for pneumonia evaluation</td>
    </tr>
    <tr>
      <td>Advanced Imaging</td>
      <td>Detailed imaging for complex conditions.</td>
      <td>CT scan of the abdomen with contrast</td>
    </tr>
    <tr>
      <td>Interventional Radiology</td>
      <td>Imaging-guided procedures.</td>
      <td>CT-guided biopsy</td>
    </tr>
    <tr>
      <td rowspan="3">Procedure Orders</td>
      <td rowspan="3">Orders for invasive or non-invasive procedures.</td>
      <td>Diagnostic Procedures</td>
      <td>Procedures for identifying conditions.</td>
      <td>Colonoscopy with biopsy</td>
    </tr>
    <tr>
      <td>Therapeutic Procedures</td>
      <td>Procedures for treating conditions.</td>
      <td>Hemodialysis for renal failure</td>
    </tr>
    <tr>
      <td>Minor Procedures</td>
      <td>Simple outpatient procedures.</td>
      <td>Laceration repair</td>
    </tr>
    <tr>
      <td rowspan="2">Consultation Orders</td>
      <td rowspan="2">Requests for specialized provider or service evaluations.</td>
      <td>Inpatient Consults</td>
      <td>Specialist evaluation during hospital stay.</td>
      <td>Cardiology consult for chest pain</td>
    </tr>
    <tr>
      <td>Outpatient Referrals</td>
      <td>Follow-up care in a clinic setting.</td>
      <td>Referral to physical therapy</td>
    </tr>
  </tbody>
</table>


### Standing Orders

Standing orders in Epic play a crucial role in clinical workflows, particularly for inpatient and outpatient settings. However, certain nuances must be considered when interpreting standing orders in research or operational contexts.

#### **Inpatient Standing Orders**
- **Orders Prepared for Potential Use**:
  - Some inpatient orders, such as those for **restraints** or emergency interventions, are placed in advance to ensure they are available if needed. These orders are often "sent" or marked as active, but their **metadata alone does not confirm** whether the intervention actually occurred.
  - For example, a restraint order might be placed as a precaution during a behavioral health admission, but unless additional documentation (e.g., nursing notes, flowsheets, or administration logs) is reviewed, you cannot ascertain whether the restraint was applied.

- **How to Validate Usage**:
  - To determine whether a standing order was executed:
    - Check **flowsheet data** for documentation of the event (e.g., restraint usage logs).
    - Look at **nursing notes** or **incident reports** that provide contextual evidence of execution.

#### **Outpatient Standing Orders**
- **Orders Scheduled in Advance**:
  - Some orders are placed well in advance of the intended date of execution. Examples include:
    - **Screening mammograms**: A standing order may be created months or even a year before the scheduled appointment.
    - **Vaccinations**: Orders may be placed during routine checkups for administration during the flu season.

- **Implications for Research**:
  - The **order placement date** might significantly differ from the **execution date**, which is critical to consider when analyzing outpatient data.
  - For instance, a mammogram order placed in January with an appointment scheduled for October would appear active for several months. To accurately tie the order to an event, you must query scheduling data or procedure completion records.

- **Validation Techniques**:
  - Cross-reference with **appointment data** or **procedure results** to confirm whether and when the order was carried out.
  - For vaccinations, check **medication administration records (MAR)** for evidence of administration.

#### **General Considerations**
- Standing orders reflect **intent**, not necessarily **execution**.
- Supplementary datasets (e.g., flowsheets, procedure logs, scheduling data) are often required to fully understand whether and how standing orders were acted upon.
- Misinterpreting standing orders as completed events can lead to inaccurate conclusions in research and operational analyses.

### Considerations for Orders in Research

Orders in Epic, such as those for labs, imaging, and medications, are complex and multifaceted. They may include standing orders, recurring orders, or those placed in advance, such as mammograms. Researchers should be aware of nuances such as order statuses (e.g., completed, cancelled), conditional triggers (e.g., PRN medications), and modifications made post-placement. Additionally, orders often require linkage to results, outcomes, or execution data to confirm they were performed as intended, as standing orders or advance schedules might only reflect intent. While these details are critical for understanding clinical workflows and interpreting data, the CDW-R programmatically handles these concerns by linking orders to results, ensuring accurate execution status, and resolving metadata inconsistencies to provide researchers with reliable datasets.

<!--### Considerations for Research

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
