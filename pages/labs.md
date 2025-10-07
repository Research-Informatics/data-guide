---
title: "Labs"
layout: default
---

{% raw %}
<style>
.section-lead { margin-top: .5rem; color: #444; }
hr.section { border: 0; height: 1px; background: #e6e6e6; margin: 2rem 0 1.5rem; }
h2 { margin-top: 1.75rem; }
small.kicker {
  display: block;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .04em;
  color: #6b7280;
  margin-bottom: .35rem;
}
.table-wrap { overflow-x: auto; margin: 1rem 0 2rem; }
.doc-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 0.95em;
}
.doc-table th,
.doc-table td {
  padding: .75rem .85rem;
  vertical-align: top;
}
.doc-table thead th {
  background: #f8fafc;
  border-bottom: 2px solid #e5e7eb;
  font-weight: 700;
}
.doc-table tbody tr:nth-child(odd) td { background: #fbfdff; }
.doc-table tbody tr:nth-child(even) td { background: #ffffff; }
.doc-table td,
.doc-table th { border-right: 1px solid #eef2f7; }
.doc-table td:last-child,
.doc-table th:last-child { border-right: 0; }
.doc-table .num { text-align: right; white-space: nowrap; }
.doc-table .wrap { white-space: normal; }
</style>
{% endraw %}



Laboratory data are among the most widely used and clinically interpretable sources in the Clinical Data Warehouse (CDW-R).  
They include both **orders** (the tests clinicians request) and **results** (the values returned by instruments or analyzers).  
For research, labs are essential for defining cohorts, monitoring physiology, and quantifying outcomes.

<hr class="section"/>

## What Is a Lab?

In the electronic health record (EHR), a **lab** begins as an **order** — for example, a *CBC with differential* or *Basic Metabolic Panel*.  
Each order contains one or more **components** (e.g., Hemoglobin, WBC, Sodium).  
When the specimen is collected and analyzed, **result values** are stored for each component.

Researchers usually analyze the **resulted components**, not the orders themselves.  
However, understanding the mapping between orders and components is critical — a single component like *Hemoglobin* can appear in multiple orders (*CBC*, *CBC w/ Diff*, *Hemogram*).

<hr class="section"/>

## How Lab Data Are Stored

**View:** `CDWR.dbo.LabResult_V` — includes only resulted components (no pending or canceled orders).

| Field | Description |
|-------|--------------|
| `PatientEpicId` | Unique patient identifier (used across CDW-R tables) |
| `EncounterEpicCsn` | Encounter or visit identifier |
| `LabOrderEpicId` | Order identifier |
| `LabComponentEpicId` | Result component identifier |
| `OrderName` | Display name of the lab order (e.g., *CBC with Diff*) |
| `ComponentName` | Analyte measured (e.g., *Hemoglobin*) |
| `NumericValue` / `Value` | Numeric and raw result values |
| `Unit` | Measurement unit (e.g., mg/dL, mmol/L) |
| `Abnormal` | Flag (H/L/A/N) from the lab interface |
| `ResultStatus` | Final, Preliminary, or Corrected |
| `OrderedDate` / `ResultDate` | Order and result timestamps |
| `SpecimenDate` / `SpecimenTime` | Collection timestamps |
| `PatientClass` | Care setting (Inpatient, Outpatient, ED) |
| `LoincCode` / `LoincName` | Standardized lab identifiers |

> Currently, **only resulted orders** are included. Canceled or not-obtained orders are excluded, which simplifies analysis but limits workflow and turnaround-time studies.

<hr class="section"/>

## Most Common Components and Where They Appear

The table below summarizes a 30-day sample of lab results from CDW-R.  
For each **component**, we list:
- Its frequency (% of all orders containing that component),
- The number of distinct order names where it appears, and
- The top five order names (with their share within that component).

<div class="table-wrap">
<table class="doc-table">
<thead>
<tr>
<th>Component</th>
<th class="num">% of All Orders</th>
<th class="num"># Distinct Order Names</th>
<th class="wrap">Top Orders (share within component)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Glucose, Point of Care</td>
<td class="num">2.4%</td>
<td class="num">1</td>
<td class="wrap">POCT Glucose (100.0%)</td>
</tr>
<tr>
<td>WBC</td>
<td class="num">2.2%</td>
<td class="num">9</td>
<td class="wrap">CBC and Differential (60.0%); CBC (19.7%); Urinalysis, Reflex to Culture (8.4%); Instrument Granulocyte Count (Includes CBC and Diff) (5.1%); Urinalysis with Microscopic (4.6%)</td>
</tr>
<tr>
<td>Calcium</td>
<td class="num">2.2%</td>
<td class="num">5</td>
<td class="wrap">Comprehensive Metabolic Panel (63.7%); Renal Function Panel (18.9%); Basic Metabolic Panel (16.6%); Calcium (0.7%); For HAM Location Only (0.1%)</td>
</tr>
<tr>
<td>RBC</td>
<td class="num">2.2%</td>
<td class="num">10</td>
<td class="wrap">CBC and Differential (61.5%); CBC (20.4%); Urinalysis, Reflex to Culture (6.6%); Instrument Granulocyte Count (Includes CBC and Diff) (5.1%); Urinalysis with Microscopic (4.7%)</td>
</tr>
<tr>
<td>Creatinine</td>
<td class="num">2.2%</td>
<td class="num">6</td>
<td class="wrap">Comprehensive Metabolic Panel (59.0%); Basic Metabolic Panel (20.0%); Renal Function Panel (17.6%); Creatinine (Includes GFR) (1.9%); Creatinine, Point of Care (1.5%)</td>
</tr>
<tr>
<td>Hemoglobin</td>
<td class="num">2.1%</td>
<td class="num">8</td>
<td class="wrap">CBC and Differential (65.2%); CBC (22.4%); Hemogram (5.8%); Surgical Panel (3.2%); Type and Screen (2.1%)</td>
</tr>
<tr>
<td>Potassium</td>
<td class="num">2.1%</td>
<td class="num">7</td>
<td class="wrap">Comprehensive Metabolic Panel (61.7%); Basic Metabolic Panel (20.4%); Renal Function Panel (15.5%); Electrolyte Panel (2.0%); Pre-Op Panel (0.4%)</td>
</tr>
<tr>
<td>Chloride</td>
<td class="num">2.1%</td>
<td class="num">6</td>
<td class="wrap">Comprehensive Metabolic Panel (64.5%); Basic Metabolic Panel (21.0%); Renal Function Panel (13.1%); Electrolyte Panel (1.1%); Pre-Op Panel (0.3%)</td>
</tr>
<tr>
<td>BUN</td>
<td class="num">2.0%</td>
<td class="num">5</td>
<td class="wrap">Comprehensive Metabolic Panel (58.8%); Basic Metabolic Panel (21.5%); Renal Function Panel (18.9%); Pre-Op Panel (0.5%); Point of Care Chemistry (0.3%)</td>
</tr>
<tr>
<td>Sodium</td>
<td class="num">1.9%</td>
<td class="num">6</td>
<td class="wrap">Comprehensive Metabolic Panel (60.3%); Basic Metabolic Panel (19.9%); Renal Function Panel (18.5%); Electrolyte Panel (1.1%); Sodium (0.2%)</td>
</tr>
<tr>
<td>CO₂</td>
<td class="num">1.8%</td>
<td class="num">4</td>
<td class="wrap">Comprehensive Metabolic Panel (63.2%); Basic Metabolic Panel (22.0%); Renal Function Panel (14.2%); Electrolyte Panel (0.6%)</td>
</tr>
<tr>
<td>Platelet Count</td>
<td class="num">1.7%</td>
<td class="num">8</td>
<td class="wrap">CBC and Differential (61.4%); CBC (23.8%); Hemogram (6.5%); Pre-Op Panel (3.0%); Surgical Panel (2.3%)</td>
</tr>
<tr>
<td>Albumin</td>
<td class="num">1.6%</td>
<td class="num">4</td>
<td class="wrap">Comprehensive Metabolic Panel (75.2%); Hepatic Function Panel (22.9%); Nutrition Panel (1.7%); Albumin (0.2%)</td>
</tr>
<tr>
<td>Alkaline Phosphatase</td>
<td class="num">1.6%</td>
<td class="num">5</td>
<td class="wrap">Comprehensive Metabolic Panel (69.3%); Hepatic Function Panel (26.5%); Liver Enzymes (3.2%); Nutrition Panel (0.8%); Pre-Op Panel (0.2%)</td>
</tr>
<tr>
<td>ALT</td>
<td class="num">1.6%</td>
<td class="num">4</td>
<td class="wrap">Comprehensive Metabolic Panel (71.0%); Hepatic Function Panel (25.9%); Liver Enzymes (2.8%); Pre-Op Panel (0.3%)</td>
</tr>
<tr>
<td>AST</td>
<td class="num">1.5%</td>
<td class="num">5</td>
<td class="wrap">Comprehensive Metabolic Panel (69.1%); Hepatic Function Panel (28.3%); Liver Enzymes (2.3%); Nutrition Panel (0.2%); Pre-Op Panel (0.1%)</td>
</tr>
<tr>
<td>Bilirubin, Total</td>
<td class="num">1.4%</td>
<td class="num">4</td>
<td class="wrap">Hepatic Function Panel (63.5%); Comprehensive Metabolic Panel (32.0%); Liver Enzymes (3.8%); Bilirubin (0.7%)</td>
</tr>
<tr>
<td>Protein, Total</td>
<td class="num">1.4%</td>
<td class="num">4</td>
<td class="wrap">Comprehensive Metabolic Panel (74.9%); Hepatic Function Panel (23.9%); Nutrition Panel (1.1%); Protein (0.1%)</td>
</tr>
<tr>
<td>Hematocrit</td>
<td class="num">1.3%</td>
<td class="num">9</td>
<td class="wrap">CBC and Differential (63.0%); CBC (23.5%); Hemogram (5.9%); Surgical Panel (3.8%); Pre-Op Panel (2.1%)</td>
</tr>
<tr>
<td>MCV</td>
<td class="num">1.3%</td>
<td class="num">8</td>
<td class="wrap">CBC and Differential (65.5%); CBC (21.2%); Hemogram (6.0%); Surgical Panel (3.5%); Pre-Op Panel (2.1%)</td>
</tr>
</tbody>
</table>
</div>

<hr class="section"/>

## How Researchers Use Lab Data

Derived metrics simplify longitudinal analyses:
- **Most recent:** latest result before a reference date  
- **If ever:** whether a patient ever reached a threshold (e.g., K⁺ ≥ 5.5 mmol/L)  
- **Min / Max:** lowest and highest observed values  
- **Initial:** first result during an encounter  

The CDW-R can precompute these fields for inpatient and outpatient contexts, providing ready-to-analyze datasets.

<hr class="section"/>

## Context and Interpretation

When using labs for research, consider **where** and **why** they were drawn:

| Factor | Why It Matters |
|---|---|
| **Patient Class** | Inpatient, outpatient, and ED labs differ in timing and acuity |
| **Department or Location** | ICU vs. ambulatory settings influence test frequency and normal ranges |
| **Encounter Type** | Helps associate labs with admissions, procedures, or clinic visits |
| **Timing** | Order, specimen, and result timestamps allow for event-based filters (e.g., “within 48 h post-op”) |

In future releases, CDW-R will expose this contextual metadata by default so that researchers can, for example, retrieve **only inpatient labs** or **labs drawn after a procedure**.

<hr class="section"/>

## Looking Ahead

- Introduce an **order-centric roll-up view** to study ordered-vs-resulted rates  
- Support **turnaround-time** analysis (Order → Specimen → Result)  
- Add **contextual filters** (department, patient class, location)  
- Provide **reference groupings** (e.g., metabolic panels, hematology panels)  

Together, these updates will make lab data more transparent, contextual, and research-ready — bridging the gap between EHR transactions and analytic insight.

---
