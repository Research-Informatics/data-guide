---
title: Imaging
layout: default
---

### Overview
Clinical imaging data, such as X-rays, MRIs, CT scans, and pathology slides, are valuable resources for research. These data provide rich, high-dimensional information that can be used to study diseases, develop diagnostic tools, and improve treatments. Imaging data can complement other clinical datasets by offering visual and structural insights that are often unavailable through text or numerical data alone.

For example, imaging findings can help validate clinical diagnoses, track disease progression, and evaluate treatment efficacy. They are particularly useful in areas like oncology, where tumor size and shape can provide critical markers, or in neurology, where brain scans can reveal structural and functional changes. Incorporating imaging data with clinical findings allows researchers to explore correlations between visual patterns and outcomes, fostering breakthroughs in personalized medicine and predictive analytics.

### Considerations for Images in Research

Imaging data in Epic includes both the image studies themselves (e.g., X-rays, MRIs) and associated reports detailing findings. Researchers should be aware that while the CDWR provides access to imaging metadata and reports, raw images (e.g., DICOM files) typically require additional coordination with radiology departments. Important considerations include the distinction between ordered and completed studies, the timing of imaging relative to other clinical events, and the interpretation of unstructured report data. The CDWR programmatically links imaging orders to reports and integrates tools like NLP to extract findings, ensuring that researchers can focus on insights while the complexities of linking and validating imaging data are handled systematically.

<!--
### Considerations for Research
- Relevance to Research Questions: Align imaging report queries with the specific findings or modalities relevant to your study. For example, look for tumor measurements in oncology studies or structural brain changes in neurology. Use imaging reports to validate diagnoses or track changes over time in the context of your research objectives.

- Timing and Context of Imaging Studies: Imaging studies often occur within a specific clinical context, such as acute episodes or routine follow-ups. Ensure the timing of imaging aligns with your study’s objectives—for example, pre- and post-treatment imaging for efficacy studies or baseline scans for cohort definitions. Reflect on whether findings are from inpatient or outpatient settings and how that may affect interpretation.

- Imaging Report Content and Clarity: Imaging reports summarize key findings and often include impressions from radiologists. Familiarize yourself with common radiology terminology to accurately interpret these findings. Engage with the CDW-R to ensure reports are parsed correctly, capturing the key details needed for your research.

- CDW-R Infrastructure: Utilize tools for extracting structured information from imaging reports, such as natural language processing (NLP) frameworks. Leverage CDW-R’s capabilities to streamline imaging data retrieval and connect findings directly to clinical questions. Work closely with radiologists and the CDW-R team to refine imaging data requests. Radiologists can provide insights into report nuances, while the CDW-R ensures efficient querying and retrieval of data. For example, if DICOM files are required, coordinate to obtain relevant image sets efficiently.

 #### Ethical and Resource Considerations
Minimize unnecessary imaging studies, both to reduce patient burden and to adhere to ethical standards. Ensure imaging requests are justified and integral to your research goals. Avoid overburdening radiology teams by providing clear and focused data requests. 
### Future Directions
- Incorporating NLP tools to automate and enhance the analysis of imaging reports.
- Developing frameworks to integrate imaging findings seamlessly with other clinical and research datasets.
- Expanding CDW-R capabilities to provide more dynamic querying and access to imaging studies.


-->
