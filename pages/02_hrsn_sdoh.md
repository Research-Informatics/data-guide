---
title: Health Related Social Needs and Social Determinants of Health
layout: default
---

  
## Health Related Social Needs and Social Determinants of Health
This resource describes social determinants of health (SDOH), health-related social needs, and other data fields relevant to health equity research that are available from the CDW for Research – including data definitions, descriptions, sources, and limitations.

Given the nature of SDOH data, available data fields are dynamic and often evolve in various clinical and data systems. Reach out to the [cdw@bmc.org](mailto:cdw@bmc.org) with questions.

The document outlines data available in Epic. If you are interested in SDOH data prior to Epic implementation (prior to June 2015), e-mail our team at [cdw@bmc.org](mailto:cdw@bmc.org) to discuss options for data available from legacy systems.

## Using this Document to Select Study-Relevant Data: A Comment on Health Equity Tourism

The CDW for Research can work with you to identify specific data to leverage for your study. We encourage research teams to carefully select the data fields that have direct relevance to the research study’s question. The CDW for Research considers race to be a social construct and encourages researchers to think critically about using race and ethnicity as a proxy for structural racism or experiences with racism in their research. We encourage research teams to read about Health Equity Tourism  and avoid this phenomenon on behalf of the patients we serve. 

## How this Resource is Organized 

This resource lists main data elements, patient phenotypes, and algorithms as well as discrete underlying data fields that could also be leveraged as relevant to research studies. Data are displayed as:

## **DATA DOMAINS & AVAILABLE DATA FIELDS**

<details>
  <summary><b>Race, Ethnicity, and Language (REL) Data</b></summary>
  <ul>
<li> CDW for Research Race and Ethnicity Phenotype </li>
<li> Primary Race </li>
<li> Hispanic or Latino culture or origin indicator (Y/N) </li>
<li> Primary Language </li>
<li> Patient Needs Interpreter Flag </li>
<li> Interpreter Usage data </li>
     </ul>
</details>

<details>
  <summary><b>Sex, Sexual Orientation, & Gender Identity (SSOGI)</b></summary>
  <ul>
<li> Sex (assigned at birth) </li>
<li> Gender Identity </li>
<li> Pronouns </li>
<li> Sexual Orientation </li>
<li> Surgical Procedures </li>
     </ul>
</details>
 
<details>
   <summary><b>Housing</b></summary>
  <ul>
<li> CDW for Research housing algorithm </li>
<li> BMC THRIVE Screening: Housing question </li>
<li> BMC THRIVE Resources: Housing/Shelter resources requested by patient </li>
<li> Epic patient & encounter homeless flags </li>
<li> ICD-10 codes (encounter & problem list diagnoses) </li>
</ul>
</details>

<details>
 <summary><b>Food</b></summary>
  <ul>
<li> CDW for Research food insecurity & BMC food pantry use algorithm </li>
<li> BMC Preventative Food Pantry referrals, letters, & orders </li>
<li> BMC THRIVE Screening: Food insecurity risk (2-item Hunger Vital Sign) and food emergency questions </li>
<li> BMC THRIVE Resources: Food resources requested by patient </li>
<li>	ICD-10 codes (encounter & problem list diagnoses) </li>

</ul>
</details>

<details>
   <summary><b>Utilities</b></summary>
<ul>
<li> BMC THRIVE Screening: Trouble paying for heat or electricity question </li>
<li> BMC THRIVE Resources: Utilities resources requested by patient </li>
<li> Utilities Shut-off Protection Letter Issuance </li> </ul>

</details>

<details>
  <summary><b>Transportation</b></summary>

  <ul>
<li>  BMC THRIVE Screening: Trouble paying for transportation question </li> 
<li>  BMC THRIVE Resources: Transportation to medical appointments resources requested by patient</li> 
<li>  Documentation of MassHealth Provider Request for Transportation (PT1) </li> 

</ul>

</details>

<details>
  <summary><b>Country of Origin</b></summary>

  <ul>
<li>  Birthplace </li>
<li> Country of Origin </li>
  </ul>
  
</details>

<details>
  <summary><b>Economic Stability and Social Connection</b></summary>
  
<ul>
  
<li>	Primary Health Insurance </li>
<li>	Secondary Health Insurance </li>
<li>	Marital status</li>
<li>	Income </li>
<li>	Highest Education Level</li>
<li>	BMC THRIVE Screening: Interested in more education question </li>
<li>	BMC THRIVE Resources: Education resources requested by patient</li>
<li>	Insurance</li>
<li>	Occupation</li>
<li>	BMC THRIVE Screening: Currently unemployed and looking for a job question</li>
<li>	BMC THRIVE Resources: Job search/training resources requested by patient</li>
<li>	BMC THRIVE Screening: Trouble paying for medications</li>
<li>	BMC THRIVE Resources: Paying for medicine resources requested by patient.</li>
<li>	BMC THRIVE Screening: Trouble Paying for Medications</li>

</ul>

</details>

<details>
   <summary><b>Neighborhood and Community Context</b></summary>

<ul>
<li>	Census tract level geocoding</li>
<li>	CDC Social Vulnerability Index (SVI)</li>

</ul>

</details>


## Race & Ethnicity
Data that capture the social construct of race and ethnicity.

### **CDW for Research Race & Ethnicity Phenotype**

|||
|:----------- | :----------- |
|Decription|A combined race and ethnicity variable that collapses available race, ethnicity, and Hispanic or Latino culture or origin indicator fields into the following mutually exclusive categories:<br>&nbsp;&nbsp;&bull;Hispanic or Latino<br>  &nbsp;&nbsp;&bull;Non-Hispanic Asian <br>&nbsp;&nbsp;&bull;Non-Hispanic Black<br> &nbsp;&nbsp;&bull;Non-Hispanic white <br>  &nbsp;&nbsp;&bull;Another non-Hispanic race<br>  &nbsp;&nbsp;&bull;Unknown/Declined<br>|
|Source|BMC CDW for Research Phenotype |
|CDW for Research Logic and/or Recommendations|The CDW for Research combines data from three Epic demographics tab data fields to create a patient phenotype:<br> &nbsp;&nbsp;&bull;Race<br> &nbsp;&nbsp;&bull;Person of Hispanic or Latino Culture or Origin Indicator <br>&nbsp;&nbsp;&bull;Primary Ethnicity|
|Considerations & Limitations|The CDW for Research considers race to be a social construct and encourages researchers to think critically about using race and ethnicity as a proxy for structural racism or experiences with racism in their research.<br><br>The CDW for Research considers race to be a social construct and encourages researchers to think critically about using race and ethnicity as a proxy for structural racism or experiences with racism in their research.<br><br>Further disaggregation of the “non-Hispanic Asian” and “Another non-Hispanic race” is possible but may not be reportable due to small numbers.<br><br>As of June 2022, patients are not able to select more than one race nor ethnicity<br>The CDW for Research is looking into patient-reported Race via MyChart|

>### **CDW for Research Race & Ethnicity Phenotype Components**
>>#### **Race (raw Epic data field)**
>>
>>|||
>>|:----------- | :----------- |
>>|Description|The race of the patient as captured in the medical record. 20 Response Options. See Appendix for all options.|
>>|Source|Epic medical record, demographics tab (patient-level)|
>>|CDW for Research Logic and/or Recommendations|Disaggregated data can be used if research question examines race categories beyond the CDW for Research patient phenotype.|
>>|Considerations & Limitations|Data are entered into a patient’s record by clinical staff and may not be patient-reported.<br><br>Patients are not able to select more than one race nor ethnicity|

>>#### **Person of Hispanic of Latino Culture or Origin Indicator (raw Epic data field)**
>>
>>|||
>>|:----------- | :----------- |
>>|Description|Indicator for a person of Hispanic or Latino culture or origin, regardless of race, as captured in the medical record. There are 4 possible response options:<br>&nbsp;&nbsp;&bull;Yes<br>  &nbsp;&nbsp;&bull;No<br>&nbsp;&nbsp;&bull;Don't Know<br> &nbsp;&nbsp;&bull;Declined|
>>|Source|Epic medical record, demographics tab (patient-level)|
>>|CDW for Research Logic and/or Recommendations|Disaggregated data be used if research question exams Hispanic or Latino Culture or Origin beyond the CDW for Research patient phenotype; however, BMC included “Hispanic or Latino” as an option for race from 2018-XXXX; as such, disaggregation of race/Hispanic indicator/ethnicity fields is not advised|
>>|Considerations & Limitations|This data field is often colloquially referred to as “ethnicity” but does not contain detailed ethnicity data; it functions only as an indicator (Y/N) of Hispanic or Latino culture or origin.<br><br>Data are generally entered into a patient’s record by clinical staff and may not be patient-reported.<br><br>Response options for the current “Primary Ethnicity” field whereas included as a race category inas response options for the “Race” variable in Epic from 2020-2021; approx. XX% of patients have conflicting race and ethnicity data (e.g., Hispanic or Latino listed as race and Non-Hispanic or Latino listed as ethnicity)|

<br>

>>#### **Primary Ethnicity (raw Epic data field)**
>>
>>|||
>>|:----------- | :----------- |
>>|Description|The primary ethnicity of the patient. Response Options. See Appendix for all options. |
>>|Source|Epic medical record, demographics tab (patient-level)|
>>|CDW for Research Logic and/or Recommendations| |
>>|Considerations & Limitations|Data are generally entered into a patient’s record by clinical staff and may not be patient-reported.<br><br>Patients are not able to select more than one ethnicity.|

## Language
Data that capture the patient’s primary language and interactions with interpreter services.

>### **Primary Language**
>
>|||
>|:----------- | :----------- |
>|Decription|Patient primary language. XXX Response Options. See Appendix for all options.|
>|Source|Epic medical record, demographics tab (patient-level)|
>|CDW for Research Logic and/or Recommendations| |
>|Considerations & Limitations|Patient may have different preferences in writtern & spoken lanaguge <br><br>Patient preferences regarding a language may differ from a language they primarily speak at home<br><br>Consider stigmas that may affect a patient's stated preference (link?)|

<br>

>### **Needs Interpreter Flag**
>
>|||
>|:----------- | :----------- |
>|Decription|A flag used to indicate whether a patient requires an interpreter and, if so, services in what language.|
>|Source|Epic medical record (patient-level)|
>|CDW for Research Logic and/or Recommendations|CDW for Research can also provide if a patient has ever used interpreter services at an encounter at BMC if more relevant for the research question.|
>|Considerations & Limitations|Consider stigmas that may affect a patient's stated preference (link?)|

<br>

>### **Interpreter Usage**
>
>|||
>|:----------- | :----------- |
>|Decription|Documentation that an interpreter was used during a specific encounter.<br><br>Data are from an individual encounter. The data fields that can be extracted are:<br>&nbsp;&nbsp;&bull;Information for the encounter at which interpreter services were used, including date, clinic, appointment type, etc.<br>&nbsp;&nbsp;&bull;Language in which services were provided|
>|Source|Epic encounter (individual encounter-level)|
>|CDW for Research Logic and/or Recommendations|Encounter data (encounter-level) (smartform, flowsheet) <br><br>CDW for Research can also provide if a patient has ever used interpreter services at an encounter at BMC if more relevant for the research question.|
>|Considerations & Limitations|Consider stigmas that may affect a patient's stated preference (link?)|
