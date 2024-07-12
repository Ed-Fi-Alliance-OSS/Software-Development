# Code Pipeline Security 2022

## Overview

To date, the Ed-Fi Alliance has adopted many common best practices in its
software development life cycle. The SolarWinds hack of 2020 was a powerful
reminder that "best practices" might not be good enough, if there is not a
deliberate and sustained effort to ensure the security of the "code pipeline"
from so-called supply chain attacks.

In 2022, the Ed-Fi Alliance will take a more deliberate approach to ensuring the
security of its code pipeline by:

1.  clearly documenting all code security measures,
2.  identifying and documenting new procedures,
3.  developing automation techniques, and
4.  systematically applying all measures across all core Ed-Fi code
    repositories.

> [!TIP]
> This work is about securing the *source* *code and delivered products*.
> This is different from *application security*, which is about the secure
> handling of data within an installed instance of a product.

### Code Quality

As a secondary goal, this project will also include efforts to improve code
quality through additional automation. Ideally, all coding standard guidelines
for any language would be automated - thus taking the burden off the code
reviewer. This will particularly be impactful when welcoming open source
contributions.

### Repository Scoring

In order to establish an objective measure of internal compliance, and track
systematic progress toward full compliance, the Ed-Fi Alliance Tech Team will
develop a scoring system that serves as a sort of checklist for improvement in
each repository. Each Product Owner will have responsibility for compliance
within repositories maintained by their team, and for establishing their own
benchmark goals toward full compliance.

## Scope

Other items may be added as needed.

- **GitHub Actions:** ensure that Ed-Fi applies the best possible security
  around the use of GitHub Actions, so that we limit the risk of accidentally
  using a malicious action or allowing malicious pull requests. → [Securing
  GitHub
  Actions](../Continuous-Integration/guidelines-for-use-of-github-actions.md)
- **Dependency Scanning**: detect third-party dependencies with known
  vulnerabilities, avoid or mitigate as appropriate, patch as soon as possible
  once detected. → [Dependency Security
  Automation](../Continuous-Integration/Distribution-of-Binary-Packages/README.md)
- **Code Security**: document and apply best practices for avoiding malicious
  injection of source code. → [Code
  Security](../Continuous-Integration/Code-Security-Guidelines/README.md)
  - [Protecting DataImport and MetaEd](https://edfi.atlassian.net/wiki/spaces/TT/pages/18649937)
- **Code Quality**: take the human out of code review where feasible through
  integration of style, correctness, and standards-compliance checks in the CI
  process. → [Code Quality
  Automation](../Continuous-Integration/Code-Quality-Automation/README.md)
- **Repository Scoring**: develop a scoring process for evaluating and
  tracking a code repository's compliance with all security and quality
  policies developed above. → [Repository
  Scoring](../Continuous-Integration/Repository-Scoring/README.md)
- **Supply Chain Integrity**: creating provenance and software bill of
  materials artifacts for validating supply chain integrity. → [Supply Chain
  Integrity](../Continuous-Integration/Release-Workflow-and-Supply-Chain-Security/README.md)

## References

- [Vice: What Is a Supply Chain
  Attack?](https://www.vice.com/en/article/d3y48v/what-is-a-supply-chain-attack)
- [Red Hat: What is
  DevSecOps?](https://www.redhat.com/en/topics/devops/what-is-devsecops)
- [Complete Guide to Application Security
  2022](https://snyk.io/learn/application-security/)

## Tickets

| Key                                                         | Summary                                                                                                    | Status      |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ----------- |
| [TPDMX-254](https://tracker.ed-fi.org/browse/TPDMX-254)     | [Code and Dependency Review Workflows (TPDM)](https://tracker.ed-fi.org/browse/TPDMX-254)                  | Closed      |
| [RND-313](https://tracker.ed-fi.org/browse/RND-313)         | [PowerShell Linting Action](https://tracker.ed-fi.org/browse/RND-313)                                      | Done        |
| [RND-312](https://tracker.ed-fi.org/browse/RND-312)         | [Repository Auditor](https://tracker.ed-fi.org/browse/RND-312)                                             | Done        |
| [RND-272](https://tracker.ed-fi.org/browse/RND-272)         | [Restructure Actions Workflows](https://tracker.ed-fi.org/browse/RND-272)                                  | Done        |
| [ODS-5651](https://tracker.ed-fi.org/browse/ODS-5651)       | [Contributors and Notices in Ed-Fi-Extensions Repo](https://tracker.ed-fi.org/browse/ODS-5651)             | Done        |
| [ODS-5598](https://tracker.ed-fi.org/browse/ODS-5598)       | [Update test step to unit test in GitHub Action](https://tracker.ed-fi.org/browse/ODS-5598)                | Done        |
| [ODS-5597](https://tracker.ed-fi.org/browse/ODS-5597)       | [Add Notice file for EdFi.Installer.AppCommon](https://tracker.ed-fi.org/browse/ODS-5597)                  | Done        |
| [ODS-5451](https://tracker.ed-fi.org/browse/ODS-5451)       | [Code and Dependency Review Workflows (Databases)](https://tracker.ed-fi.org/browse/ODS-5451)              | Done        |
| [ODS-5450](https://tracker.ed-fi.org/browse/ODS-5450)       | [Code and Dependency Review Workflows (Migration Utility)](https://tracker.ed-fi.org/browse/ODS-5450)      | Done        |
| [ODS-5448](https://tracker.ed-fi.org/browse/ODS-5448)       | [Code and Dependency Review Workflows (Extensions)](https://tracker.ed-fi.org/browse/ODS-5448)             | Done        |
| [ODS-5446](https://tracker.ed-fi.org/browse/ODS-5446)       | [Code and Dependency Review Workflows (ODS/API)](https://tracker.ed-fi.org/browse/ODS-5446)                | Done        |
| [METAED-1291](https://tracker.ed-fi.org/browse/METAED-1291) | [Dependency Review Automation for MetaEd](https://tracker.ed-fi.org/browse/METAED-1291)                    | Done        |
| [LMS-482](https://tracker.ed-fi.org/browse/LMS-482)         | [Code and Dependency Review Workflows (LMS Toolkit)](https://tracker.ed-fi.org/browse/LMS-482)             | Done        |
| [DI-1200](https://tracker.ed-fi.org/browse/DI-1200)         | [Code Scanners for Data Import](https://tracker.ed-fi.org/browse/DI-1200)                                  | In Progress |
| [DI-1199](https://tracker.ed-fi.org/browse/DI-1199)         | [Dependency Review Automation for Data Import](https://tracker.ed-fi.org/browse/DI-1199)                   | Done        |
| [DI-1177](https://tracker.ed-fi.org/browse/DI-1177)         | [BLOCKED: Code and Dependency Review Workflows (Data Import)](https://tracker.ed-fi.org/browse/DI-1177)    | Done        |
| [BIA-1102](https://tracker.ed-fi.org/browse/BIA-1102)       | [Dependency Review Workflows (Analytics Middle Tier)](https://tracker.ed-fi.org/browse/BIA-1102)           | Done        |
| [BIA-1101](https://tracker.ed-fi.org/browse/BIA-1101)       | [Code and Dependency Review Workflows (Engage Online Learners)](https://tracker.ed-fi.org/browse/BIA-1101) | Done        |
| [BIA-1100](https://tracker.ed-fi.org/browse/BIA-1100)       | [Code Review Workflows (Analytics Middle Tier)](https://tracker.ed-fi.org/browse/BIA-1100)                 | Done        |
| [AA-1616](https://tracker.ed-fi.org/browse/AA-1616)         | [Code Scanners in Remaining Projects](https://tracker.ed-fi.org/browse/AA-1616)                            | Done        |

Showing 20 out of [25
issues](https://tracker.ed-fi.org/issues/?jql=labels+%3D+cps-2022+&src=confmacro)
