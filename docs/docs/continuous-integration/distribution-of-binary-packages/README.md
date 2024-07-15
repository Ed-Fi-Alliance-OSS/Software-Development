# Distribution of Binary Packages

## Introduction

In addition to source code, the Ed-Fi Alliance provides pre-built binary
packages for installation on remote servers by members of the Ed-Fi community.
These packages are generally zip files specialized for a particular programming
language or framework, for example:

- NuGet for .NET
- npm for Node.js
- wheel for Python

These packages need to be distributed through the most secure mechanisms
available.

## Related Content

- [Azure Artifacts
  Setup](./azure-artifacts-setup.md)
- [Transition from MyGet to Azure
  Artifacts](./transition-from-myget-to-azure-artifacts.md)
- [Visual Studio Marketplace
  Publisher](./visual-studio-marketplace-publisher.md)

## Policy

- Binary packages for distribution should always be built in GitHub, not on an
  individual computer.
- The Ed-Fi Alliance uses the following distribution channels, by package type:
  - NuGet: Azure Artifacts
    - Ed-Fi-Alliance subscription
    - EdFiBuildAgent account
    - [Distribution of Binary
      Packages](https://edfi.atlassian.net/wiki/spaces/SDLC/pages/19334226/Distribution+of+Binary+Packages)
  - npm: Azure Artifacts
  - wheel: PyPi
    - `ed-fi-alliance`  account
  - images: Docker Hub
    - `edfi`  subscription / account
  - vsix: Visual Studio Marketplace
    - [Distribution of Binary
      Packages](https://edfi.atlassian.net/wiki/spaces/SDLC/pages/19334226/Distribution+of+Binary+Packages)

:::warning

The Alliance formerly used MyGet for NuGet and npm packages. This
practice was discontinued beginning in 2022.

:::
