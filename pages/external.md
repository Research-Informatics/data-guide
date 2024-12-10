---
title: External Data
layout: default
summary: "Explore how to integrate external data sources, such as claims and CHCs, into your research to gain deeper insights and improve study outcomes."

---

Depending on your research aims, data from community health centers (CHCs) with a hospital’s data can significantly enhance clinical research, population health initiatives, and care coordination. Community health centers often serve as primary care providers for underserved and high-risk populations, capturing critical outpatient data that may complement the inpatient and emergency department (ED) data from the hospital. Together, these datasets provide a more comprehensive picture of patients' care journeys and health outcomes.

The Research Data Warehouse has a mechanism for 

**Per Hospital system contacts, Care Everywhere data is not permitted to be used for Research. That is, you are not allowed to access EMR components from other institutions by using Care Everywhere. These data are not in the Data Warehouse and will thus not be provisioned in your CDW-R data set, and you cannot capture them as part of a manual chart review for research purposes. If any data from another institution are accessed, whether it be by somebody on the team or outside the team, that institution is engaged in research and would have to either get their own IRB review or be added via a reliance agreement. Whether or not somebody is credentialed/affiliated at another institution in addition to BMC does not alter the requirements above. Contact BMC Research Legal and the IRB with questions.**

## Community Health Centers: OCHIN & Community Connect

The CDW-R has access to data from the following CHCs: 
* Boston Health Care for the Homeless Program
* Codman Square
* DotHouse
* Greater Roslindale
* Mattapan Community
* South Boston
* South End
* Upham’s Corner. 

<br>**We do not have access to East Boston.**
<br>The BMC/BUMC IRB also has [guidance](https://www.bumc.bu.edu/irb/submission-requirements/special-submission-requirements/research-with-community-health-centers-chcs/ "IRB CHC Information") for submitting INSPIR applications for studies that require data from CHCs.

Permission to access data for research is required from each Boston HealthNet CHC; this policy includes getting permission from each CHC to access simple aggregate counts. Boston HealthNet has a centralized Project Request [Form](https://www.bu.edu/ctsi/community-engagement/boston-healthnet-bhn/ "BHN Form") to request access. 

### Using CHC Data for Research
Community health center (CHC) data offers unique insights into underserved and vulnerable populations, making it a valuable resource for research. Researchers may consider using CHC data because it:

- **Highlights Health Disparities**: Provides critical information on populations that are often underrepresented in larger healthcare systems.
- **Focuses on Primary Care and Preventive Services**: Offers insights into healthcare delivery at the community level, particularly for chronic disease management and early intervention.
- **Supports Equity-Driven Research**: Helps identify and address gaps in care, informing policies to improve health equity.

### Limitations & Considerations of CHC data
Community health center (CHC) data provides valuable insights into underserved and vulnerable populations, but there are key limitations to consider:

- **Population Scope**: CHC data focuses on specific communities and may not represent all populations.
- **Data Completeness**: Limited resources may result in incomplete or inconsistent documentation compared to larger healthcare systems.
- **Variability in Standards**: Data collection practices may vary widely across different health centers, affecting comparability. The CDW-R has mechanism for harmonizing CHC data with BMC data but cannot account for variable data collection practices.
- **Focus on Primary Care**: CHC data often emphasizes primary care and preventive services, potentially lacking details on specialized or tertiary care.

Researchers should consider these limitations when analyzing CHC data and may need to combine it with other sources for a more comprehensive picture.



## Wellsense Claims
Functionally, the BMC CDW-R has access to WellSense Health Plan claims data and can provide to research studies that have received the appropriate approvals. CDW-R can link clinical and claims data for study teams. 

WellSense Plan data are owned by the Massachusetts Executive Office of Health and Human Services (EOHHS). Therefore, project-specific MassHealth approval is required per BMC Health System’s contract with MassHealth for research or publication of any analysis that uses WellSense data (either research or quality improvement).  

Following BUMC IRB approval, study teams are required to work with BMCHS legal to apply to MassHealth for data. Please contact the [CDW-R team](mailto:cdw@bmc.org) if you are interested in further discussing claims data access for research purposes, and we can provide additional information.
  
### Using Claims Data for Research

Claims data offers a valuable supplement to clinical research by providing a comprehensive view of patient care across multiple settings and timeframes. Claims data captures detailed information on healthcare utilization, costs, and services rendered, regardless of location. This can help researchers:

- **Identify Trends**: Analyze patterns in treatment, medication use, and healthcare access.
- **Ensure Completeness**: Fill gaps in clinical data, such as procedures or diagnoses from external providers.
- **Study Longitudinal Outcomes**: Track patient journeys over time, spanning multiple care settings.

### Limitations and Considerations of Claims Data

While claims data can augment clinical research, there are important limitations to consider:

- **Limited Clinical Detail**: Claims data focuses on billing and reimbursement, often lacking granular clinical insights (e.g., lab results, vital signs).
- **Potential Coding Errors**: Diagnoses and procedures may be miscoded or incomplete, affecting accuracy.
- **Bias in Utilization**: Data reflects services billed, which may not fully represent all care provided, especially for uninsured populations.

Researchers should combine claims data with clinical data thoughtfully and validate findings to mitigate these challenges.


## Other External Data Sources
The CDW-R actively considers integrating external and public data sets to be leveraged for Research. Contact us if you would like to recommend an external data set for our consideration. 

<!-- ### BEST
The CDW-R partnered with ED researchers to inco -->

