# Code Pipeline Security 2022

## Overview

To date, the Ed-Fi Alliance has adopted many common best practices in its
software development life cycle. The SolarWinds hack of 2020 was a powerful
reminder that "best practices" might not be good enough, if there is not a
deliberate and sustained effort to ensure the security of the "code pipeline"
from so-called supply chain attacks.

In 2022, the Ed-Fi Alliance will take a more deliberate approach to ensuring the
security of its code pipeline by:

1.  Clearly documenting all code security measures,
2.  Identifying and documenting new procedures,
3.  Developing automation techniques, and
4.  Systematically applying all measures across all core Ed-Fi code
    repositories.

:::tip

This work is about securing the *source* *code and delivered products*.
This is different from *application security*, which is about the secure
handling of data within an installed instance of a product.

:::

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
  Actions](../continuous-integration/guidelines-for-use-of-github-actions.md)
- **Dependency Scanning**: detect third-party dependencies with known
  vulnerabilities, avoid or mitigate as appropriate, patch as soon as possible
  once detected. → [Dependency Security
  Automation](../continuous-integration/distribution-of-binary-packages/README.md)
- **Code Security**: document and apply best practices for avoiding malicious
  injection of source code. → [Code
  Security](../continuous-integration/code-security-guidelines/README.md)
  - [Protecting DataImport and MetaEd](https://edfi.atlassian.net/wiki/spaces/TT/pages/18649937)
- **Code Quality**: take the human out of code review where feasible through
  integration of style, correctness, and standards-compliance checks in the CI
  process. → [Code Quality
  Automation](../continuous-integration/code-quality-automation/README.md)
- **Repository Scoring**: develop a scoring process for evaluating and
  tracking a code repository's compliance with all security and quality
  policies developed above. → [Repository
  Scoring](../continuous-integration/repository-scoring/README.md)
- **Supply Chain Integrity**: creating provenance and software bill of
  materials artifacts for validating supply chain integrity. → [Supply Chain
  Integrity](../continuous-integration/release-workflow-and-supply-chain-security/README.md)

## References

- [Vice: What Is a Supply Chain
  Attack?](https://www.vice.com/en/article/d3y48v/what-is-a-supply-chain-attack)
- [Red Hat: What is
  DevSecOps?](https://www.redhat.com/en/topics/devops/what-is-devsecops)
- [Complete Guide to Application Security
  2022](https://snyk.io/learn/application-security/)
