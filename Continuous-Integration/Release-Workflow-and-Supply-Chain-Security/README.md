# Release Workflow and Supply Chain Integrity

> [!NOTE] This document describes the desired state software release workflow including:
>
> - GitHub Actions tasks
> - Generation of SBOM and Provenance
> - And links out to relevant documentation on security practices. As of 19 Oct
>   2022, this workflow has been implemented for Admin App and Admin API.

# Overview

Two aspects of software supply chain integrity include knowing the components
that went into the end product, and knowing that the end product was produced in
a secure manner. The first half of this is commonly addressed by a [Software
Bill of Materials](https://www.ntia.gov/SBOM) (SBOM), a general concept for
documenting the dependencies in a software product. Thanks to a [2021 executive
order](https://www.whitehouse.gov/briefing-room/presidential-actions/2021/05/12/executive-order-on-improving-the-nations-cybersecurity/),
software used by the federal government needs to have a verified SBOM. The
second piece helps prove that the SBOM was created legitimately. The [SLSA
framework](https://slsa.dev), which originated at Google, is a cross-industry
collaboration that is promoting the generation of a standard _[provenance
data](https://slsa.dev/provenance/v0.2)_ file (along with other security
requirements) as a solution to the second half of the problem.

> [!TIP]
> The relationship between the two is further expounded on in [SBOM +
> SLSA: Accelerating SBOM success with the help of
> SLSA](https://slsa.dev/blog/2022/05/slsa-sbom).

## 2022 Goal

The Ed-Fi Alliance is seeking SLSA level 2 compliance in one repository by mid
October, 2022. The chosen repository: Admin App. This document describes
technical details on how we can achieve this.

> [!WARNING]
> The Alliance has not been asked for this information by our
> community, although federal organizations such as the District of Columbia and
> the Dept of Defense will _presumably_ require the SBOM, at least. Truthfully,
> it is difficult to know if and how the community will utilize these documents.
> In this sense, this project is more about taking a high road of responsibility
> with respect to software security. It is as much about mitigating *perceived
> risk* as reducing actual risk.

# Operating Context

See the following documents for additional context on the Ed-Fi software
development practices:

- [Source Code Control
  Policy](https://edfi.atlassian.net/wiki/spaces/SDLC/pages/19334813/Source+Code+Control+Policy)
- [Code Security
  Guidelines](../Code-Security-Guidelines/README.md)
- [Coding and Testing
  Standards](https://edfi.atlassian.net/wiki/spaces/SDLC/pages/19334828/Coding+and+Testing+Standards)

# Functional Requirements

1. Create a release management workflow that incorporates the requirements for:

   1. [Guidelines for Use of GitHub
      Actions](../guidelines-for-use-of-github-actions.md):
      use only approved GitHub actions
   2. [Dependency Security
      Automation](../Dependency-Security-Automation/README.md):
      scan upstream dependencies for known vulnerabilities
   3. [Code Security
      Guidelines](../Code-Security-Guidelines/README.md): use
      CodeQL for Static Application Security Testing (SAST)
   4. [Code Quality
      Automation](../Code-Quality-Automation/README.md): use
      appropriate linters for code quality checks:

      1. C#: Microsoft Roslyn and SonarLint
      2. PowerShell: PowerShell Analyzer
      3. TypeScript: eslint
      4. Python: flake8

         > [!WARNING]
         > Rollout of C# linting has been delayed and not reach
         > Admin App / Admin API as of 19 Oct 2022
         > [AA-1611](https://tracker.ed-fi.org/browse/AA-1611?src=confmacro)

2. For every published release package\*, create appropriate artifacts:
   - Packages (e.g. NuGet, npm)
   - Signed provenance describing the build environment
   - SBOM listing all dependencies
3. Make artifacts available to end-users in a way where it is clear what
   release they belong to. Finding the files should not be too difficult once
   you know where to look; in other words, though they need to be findable,
   they do not necessarily need to be front-and-center in Tech Docs, for
   example.
4. These files need to be created at the same time as the binaries and
   packages, so that they accurately describe the environmental conditions
   appropriate during the build / package process.
5. Retain these files for as long as the covered packages are available for
   download and installation.

\* *Ultimately this should include NuGet, npm, and pypi packages; and
potentially Docker images, although that has not been investigated.*

> [!NOTE]
> Generation and distribution of SBOM and provenance files are elements
> of a rapidly evolving security landscape. At present there are no clear
> standards or best practices for how to distribute these files. The Alliance
> can choose a process now, but may need to adjust in 2023 as new developments
> arise.

# Technical Requirements

1. For open source software, the Alliance will distribute SBOM and provenance
   files as attachments to GitHub releases.
2. For closed source software, the Alliance will either distribute the files
   directly through Tech Docs or upload to Azure blob storage and link to them
   on Tech Docs.

   > [!WARNING]
   > Using Azure blob storage has an advantage in automation;
   > however, it still requires manual effort to update Tech Docs to have links
   > to the correct files.

3. Each distributed package will have its own SBOM and provenance file; these
   can be attached to a common release or separate releases, as determined by
   the development team responsible for a given repository.
4. All steps should be automated based on a workflow appropriate to the
   repository.
5. Final release should be triggered by Ed-Fi Product Owner or Architects,
   whereas pre-releases can be triggered by merge to `main` .
6. SBOM files:

   1. Use the SPDX format.
   2. For NuGet packages, use Microsoft's
      [sbom-tool](https://github.com/microsoft/sbom-tool).

      > [!CAUTION]
      > Further research required to determine appropriate tools
      > for npm and pypi packages.

7. Provenance files:

   1. Use the in-toto attestation format.
   2. Utilize the SLSA [generic
      generator](https://github.com/slsa-framework/slsa-github-generator) to
      create level-2 compliant provenance files.
   3. This generator has a technical limitation whereby the shared GitHub
      workflow must be referenced by *tag*, not *commit hash*. Doing so is a
      violation of [Guidelines for Use of GitHub
      Actions](../guidelines-for-use-of-github-actions.md).
      To mitigate against the possibility of the source repository being
      tampered with, the Alliance can maintain a fork of the SLSA generator
      and reference that fork instead of the real project.

      <details>
      <summary>From the slsa-github-generator readme...</summary>

      "**Note**: At present the GitHub Actions provided in this repository as
      builders and generators **MUST** be referenced by a tag that correpsonds
      to a semantic version of the form `@vX.Y.Z`. The build will fail if you
      reference it via a shorter tag like `@vX.Y` or `@vX` or if you reference
      it by a tag of a different form (e.g., `@main`)."
      </details>

See [Proof of Concept for SBOM and
Provenance](./release-workflow-and-supply-chain-integrity/proof-of-concept-for-sbom-and-provenance.md)
for more information on using the tools mentioned above.

# Design

![Design](../../images/Continuous-Integration//tag%20then%20release.png)

[tag then
release.drawio.xml](https://edfi.atlassian.net/wiki/download/attachments/19334698/tag%20then%20release.drawio.xml?version=1&modificationDate=1712684799555&cacheVersion=1&api=v2)

> [!NOTE]
>
> 1. Only Ed-Fi staff and contractors are given write access to GitHub
>    repositories. Thus open source contributors can create pull requests from
>    forks, but they cannot merge them or push directly into branches in the
>    core repository.
> 2. Anyone on the development team can review and approve a pull request.
> 3. Each team has its own standard for when to merge after a successful code
>    review (for example, understanding what manual testing, if any, to perform
>    before merging).
> 4. Once a pull request has been approved, anyone on the team can merge that
>    pull request, including the original developer.

## GitHub Actions Workflows

| Name                | Trigger                                                                                                    | Steps to Take                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ​`on-pullrequest`   | ​Creation of a pull request                                                                                | - Linter<br>- Unit Tests<br>- Other tests<br>- CodeQL<br>- Dependency Review<br><br> <br><br>In some cases it might make sense to have multiple "on pull request" workflows, for example one that runs when C# files are updated, and one that runs when changes are only in PowerShell files.                                                                                                            |
| `after-pullrequest` | Runs after successful completion of `on-pullrequest`                                                       | Report test results                                                                                                                                                                                                                                                                                                                                                                                       |
| `on-merge-or-tag`   | 1. Merge to `main`  branch<br>2. Merge to `patch-*`  branch (for hotfixes)<br>3. Creation of a release tag | Create a pre-release for each "product" that might be released (in the future) from this merge. ![(warning)](../../images/Continuous-Integration/warning.png) There are no artifacts on the pre-release yet. Think of this as a placeholder to receive the artifacts created in the next step below.<br><br>Admin App example:<br><br>- AdminApp.Web<br>- AdminApp.Database<br>- Admin.Api<br>- Installer |
| `on-prerelease`     | Creation of a pre-release. Effectively, triggered by completion of `on-merge-or-tag`  job                  | - Build<br>- Package<br>- Publish<br>- Create SBOM<br>- Attach SBOM to pre-release<br>- Create provenance<br>- Attach provenance to pre-release                                                                                                                                                                                                                                                           |
| `on-release`        | Changed a pre-release to a release                                                                         | - Delete other pre-release *only for the released product*<br>- Promote version in Azure Artifacts (NuGet only)                                                                                                                                                                                                                                                                                           |

## Dividing Releases by Package

Some repository contain multiple independently-releasable packages. There will
be situations where multiple provenance and SBOM files are needed in a
repository for these separate packages, namely, when they have separate build
configurations. For example, in the AdminApp repository there are two
independent packages: Admin App Web and Admin API
(![(warning)](../../images/Continuous-Integration/warning.png)
Admin API is transitioning to its own repository). In the ODS Platform, there
are separate packages for the Web API, Swagger, Client Bulk Load utility, etc.

By adopting a clear naming convention, the casual reviewer of the release list
should know exactly what product was released. This is an improvement over the
current situation, where each "release" of the `main`  branch is treated as a
release of the entire suite of packages: now we can signal release of only a
particular package.

Each releasable component will have a canonical "product identifier" for a
release, combined with a unique tag for differentiating the pre-releases. Once a
release is made, the product identifier will be combined with the release
number. Format: `{ProductIdentifier}-{PreReleaseIdentifier}`.

Example for a full release: `AdminApp.Web-v3.0.0`

Pre-releases examples:

- If using [MinVer](https://github.com/adamralph/minver):
  `AdminApp.Web-v3.0.0-alpha{incrementing counter}`.
- Use the latest commit hash:
  `AnalyticsMiddleTier-``5213743eda2becebcdf5b5fdee8b85aa099fcfd1`

Teams can apply other meaningful naming conventions relevant to their toolchains
and workflows, so long as each release is easily identifiable on the GitHub
Releases page for the repository.

## Creating a Release

The development teams have had many different release processes historically. In
order to provide more safeguards on when a release is created, beginning with
Admin App and Admin API we are moving to a process where the Product Owner or
Architect takes responsibility for creating the full release of the software
product:

1. Push a release tag on the branch to be released, for example
   `AdminApp.Web-v3.0.0`
   1. GitHub must be configured to prevent anyone other than designated
      individuals from creating these types of tags
2. Manually remove the "pre-release" flag on an individual GitHub release.
   1. Find the release and click the edit button
   2. De-select "this is a pre-release"
   3. Click "update release"

With more experimentation we may be able to automate this process so that
pushing the release tag is all that is required.

# Future Requirements

1. Provenance and SBOM for Docker containers, which are currently built on
   Docker Hub.
2. Generating SBOM for npm and pypi packages.

| File                                                                                                                                                                                         | Modified                                                                                         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| :page_facing_up: [Decoded Admin App Provenance 2022-10-03.json](https://edfi.atlassian.net/wiki/download/attachments/19334698/Decoded%20Admin%20App%20Provenance%202022-10-03.json?api=v2)   | Oct 03, 2022 by [Stephen Fuqua](https://edfi.atlassian.net/wiki/people/5b7c806bfe42212a79620406) |
| :page_facing_up: [Encoded Admin App Provenance 2022-10-03.jsonl](https://edfi.atlassian.net/wiki/download/attachments/19334698/Encoded%20Admin%20App%20Provenance%202022-10-03.jsonl?api=v2) | Oct 03, 2022 by [Stephen Fuqua](https://edfi.atlassian.net/wiki/people/5b7c806bfe42212a79620406) |
| :page_facing_up: [Admin App SBOM 2022-10-03.json](https://edfi.atlassian.net/wiki/download/attachments/19334698/Admin%20App%20SBOM%202022-10-03.json?api=v2)                                 | Oct 03, 2022 by [Stephen Fuqua](https://edfi.atlassian.net/wiki/people/5b7c806bfe42212a79620406) |

[Download All](https://edfi.atlassian.net/wiki/download/all_attachments?pageId=19334698)
