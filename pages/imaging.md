---
title: Imaging
layout: default
---

### Overview
Clinical imaging data, such as X-rays, MRIs, CT scans, and pathology slides, are valuable resources for research. These data provide rich, high-dimensional information that can be used to study diseases, develop diagnostic tools, and improve treatments. Imaging data can complement other clinical datasets by offering visual and structural insights that are often unavailable through text or numerical data alone.

For example, imaging findings can help validate clinical diagnoses, track disease progression, and evaluate treatment efficacy. They are particularly useful in areas like oncology, where tumor size and shape can provide critical markers, or in neurology, where brain scans can reveal structural and functional changes. Incorporating imaging data with clinical findings allows researchers to explore correlations between visual patterns and outcomes, fostering breakthroughs in personalized medicine and predictive analytics.

The Clinical Data Warehouse for Research (CDW-R) enhances this process by providing access to the **text of imaging reports** and by setting up the infrastructure to query **images of interest** and send the resulting list to radiology for retrieval of the DICOM files.
Additionally, the CDW-R employs natural language processing (NLP) techniques to extract key findings, impressions, and other structured information from imaging reports, streamlining data analysis and integration.


### Considerations for Research

#### Relevance to Research Questions
Align imaging report queries with the specific findings or modalities relevant to your study. For example, look for tumor measurements in oncology studies or structural brain changes in neurology. Use imaging reports to validate diagnoses or track changes over time in the context of your research objectives.

#### Timing and Context of Imaging Studies
Imaging studies often occur within a specific clinical context, such as acute episodes or routine follow-ups. Ensure the timing of imaging aligns with your study’s objectives—for example, pre- and post-treatment imaging for efficacy studies or baseline scans for cohort definitions. Reflect on whether findings are from inpatient or outpatient settings and how that may affect interpretation.

#### Imaging Report Content and Clarity
Imaging reports summarize key findings and often include impressions from radiologists. Familiarize yourself with common radiology terminology to accurately interpret these findings. Engage with the CDW-R to ensure reports are parsed correctly, capturing the key details needed for your research.

#### Collaboration with Radiology and CDW-R
Work closely with radiologists and the CDW-R team to refine imaging data requests. Radiologists can provide insights into report nuances, while the CDW-R ensures efficient querying and retrieval of data. For example, if DICOM files are required, coordinate to obtain relevant image sets efficiently.

<!-- #### Ethical and Resource Considerations
Minimize unnecessary imaging studies, both to reduce patient burden and to adhere to ethical standards. Ensure imaging requests are justified and integral to your research goals. Avoid overburdening radiology teams by providing clear and focused data requests. -->
#### Integration with Other Data
Recognize that imaging data is one component of a broader clinical picture. Integrate imaging findings with other data sources, such as lab results or patient histories, to enrich your analyses and draw more comprehensive conclusions.

#### Tools for Imaging Reports and Analysis
Utilize tools for extracting structured information from imaging reports, such as natural language processing (NLP) frameworks. Leverage CDW-R’s capabilities to streamline imaging data retrieval and connect findings directly to clinical questions.

### Future Directions
- Incorporating NLP tools to automate and enhance the analysis of imaging reports.
- Developing frameworks to integrate imaging findings seamlessly with other clinical and research datasets.
- Expanding CDW-R capabilities to provide more dynamic querying and access to imaging studies.

