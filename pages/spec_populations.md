---
title: "Specific Populations"
layout: default
---

```{r include=FALSE}
knitr::opts_chunk$set(echo = TRUE)
```


```{r include=FALSE}
library(formatR)
```

## Incarcerated Persons

Incarcerated persons are xyz. Unless specified and approved by the IRB, these patients are removed from identifiable datasets.

## Boston Area Correctional Facilities

| Facility Name                                           | Location               | Security                  |
|---------------------------------------------------------|------------------------|---------------------------|
| [Boston Pre-Release Center](https://www.mass.gov/locations/boston-pre-release-center) | Roslindale (Boston)    | Minimum/Pre-Release       |
| [Bridgewater State Hospital](https://www.mass.gov/locations/bridgewater-state-hospital) | Bridgewater            | Medium                    |
| [Lemuel Shattuck Hospital Correctional Unit](https://www.mass.gov/locations/lemuel-shattuck-hospital)| Boston                 | Medium             |
| [Massachusetts Alcohol and Substance Abuse Center at Plymouth](https://www.mass.gov/locations/masac-at-plymouth) | Plymouth | Minimum              |
| [Massachusetts Correctional Institution - Cedar Junction]| dissolved   | Maximum/Medium            |
| [Massachusetts Correctional Institution - Concord](https://www.mass.gov/locations/mci-concord) | West Concord          | Medium                    |
| [Massachusetts Correctional Institution - Framingham](https://www.mass.gov/locations/mci-framingham) | Framingham  | Medium                    |
| [Massachusetts Correctional Institution - Norfolk](https://www.mass.gov/locations/mci-norfolk) | Norfolk      | Medium                    |
| [Massachusetts Correctional Institution - Shirley](https://www.mass.gov/locations/mci-shirley) | Shirley      | Medium/Minimum            |
| [Massachusetts Treatment Center](https://www.mass.gov/locations/massachusetts-treatment-center) | Bridgewater        | Medium                    |
| [North Central Correctional Institution](https://www.mass.gov/locations/north-central-correctional-institution) | Gardner  | Medium/Minimum        |
| [Northeastern Correctional Center](https://www.mass.gov/locations/northeastern-correctional-center) | West Concord | Minimum/Pre-Release        |
| [Old Colony Correctional Center](https://www.mass.gov/locations/old-colony-correctional-center) | Bridgewater      | Medium/Minimum            |
| [Pondville Correctional Center](https://www.mass.gov/locations/pondville-correctional-center) | Norfolk         | Minimum/Pre-Release        |
| [South Middlesex Correctional Center](https://www.mass.gov/doc/dsb-19-40-facility-sheet-south-middlesex-correctional-center/download) | Framingham | Minimum/Pre-Release        |
| [Souza-Baranowski Correctional Center](https://www.mass.gov/locations/souza-baranowski-correctional-center) | Shirley  | Maximum                   |

## Identification of Incarcerated Persons

Determining incarceration status at a point in time, such as at a given encounter, can be difficult given the limitations of EHR data. Study teams may want to identify a patient as currently incarcerated, ever incarcerated, or subject to some level of detention (@erin, wording). We recommend working with our team to determine the appropriate approach for your project. Our algorithm has the capability to query patients for current, point in time, or ever, though there are limitations with each approach. 

### Currently incarcerated status

Given that incarceration status fluctuates, particularly if a patient comes.

### Incarceration duration, parolee
does this

### Implications for CDW-R Analysts

As stated above, these patients are to be removed from identifiable datasets, in particular for recruitment. Analysts are required to removed any patient with a *prisoner* patient type. This list is regularly maintained by the CDW for Research. As necessary, analysts are required to follow the guidelines below in order to remove patients beyond the patient type flag. 

Separately, the queries below are make up the incarcerated persons algorithm and are to be leveraged when a study team is seeking to explicitly identify patients' incarceration status.

| Mechanisms for identification | Source | Notes |
|-------------------------------|------------------------|---------------------------|
| Registration Insurance    | Epic Patient registration   | Patient level data; suggests *current* status, provided the patient has recently received care       |
| Encounter Insurance    | Epic encounter insurance   | Encounter level data; can be used to flag status at a point in time       |
| Registration Address    | Epic encounter insurance   | Encounter level data; can be used to flag status at a point in time       |
| Address history   | Epic encounter insurance   | Encounter level data; can be used to flag status at a point in time       |
| Discharge disposition   | Epic encounter insurance   | Encounter level data; can be used to flag status at a point in time       |
| Patient type   | Epic encounter insurance   | Encounter level data; can be used to flag status at a point in time       |


## Future Directions
The CDW for Research is actively working to expand our efforts to include NLP (natural language processing) to yield more sensitive capture of these persons and more accurately describe them. Reach out to our team if you have any questions.
