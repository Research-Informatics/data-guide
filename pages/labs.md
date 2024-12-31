---
title: Labs
layout: default
---

Laboratory data is a cornerstone of clinical decision-making, but when used for research, its utility extends beyond individual values to trends and patterns across patient populations. From a data literacy perspective, researchers should recognize that lab data in Epic is stored in structured formats that often require linkage between orders and results to ensure proper interpretation.

Derived metrics such as **"if ever,"** **"min,"** **"max,"** and **"most recent"** lab values are particularly useful for research. These allow researchers to quickly identify clinically significant events (e.g., a peak potassium level indicating hyperkalemia), assess trends over time (e.g., changes in hemoglobin), and establish baselines for comparison. For example, the **"if ever"** metric can determine whether a threshold value was reached during a patient's care, while **"min"** and **"max"** provide key indicators of severity or recovery.

The CDW-R programmatically calculates these metrics, integrates them with encounter-level data, and resolves common challenges such as duplicate results or missing timestamps. This ensures researchers can access harmonized datasets ready for advanced analysis while minimizing the need for manual preprocessing.

<!--
## CDW-R Curated Data Fields & Definitions

### Initial, Min, Max
Available for inpatient admissions. 

### Ever above or below

### Most recent

## Data Output: Inpatient Labs
If requesting labs for inpatient admissions or ED encounters, note that an encounter id will be available in addition to patient id; this must be used to ensure the labs are associated with the appropriate encounters and its data. 

## Data Output: Outpatient Labs

## All Labs during study period
-->
