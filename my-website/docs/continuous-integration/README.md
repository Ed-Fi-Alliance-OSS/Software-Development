# Continuous Integration

> [!NOTE]
> Ed-Fi continuous integration (CI) practices and procedures

## Overview

1. Utilize CI and automation wherever possible.
2. Infrastructure as Code (IaC) is critical, though we have some legacy
   exceptions (most relevant: old Octopus Deploy configurations).
3. "Continuous Deployment" (CD) is less relevant for Ed-Fi software, since we're
   providing software for other organizations to use. However, we do have a true
   CI/CD pipeline for the ODS Platform team.
4. As of 2022, we are shifting from TeamCity to GitHub Actions.

## Contents

- [Code Quality Automation](./Code-Quality-Automation/README.md)
- [Code Security Guidelines](./Code-Security-Guidelines/README.md)
- [Dependency Security Automation](./Dependency-Security-Automation/README.md)
- [Distribution of Binary Packages](./Distribution-of-Binary-Packages/README.md)
- [Guidelines for Use of GitHub Actions](guidelines-for-use-of-github-actions.md)
- [Release Workflow and Supply Chain Integrity](./Release-Workflow-and-Supply-Chain-Security/README.md)
- [Repository Scoring](./Repository-Scoring/README.md)
