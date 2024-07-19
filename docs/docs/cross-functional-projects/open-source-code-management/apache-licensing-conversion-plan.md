# Apache Licensing Conversion Plan

# Summary

Following up on the announced of a move to the [Apache License, version
2.0](https://www.ed-fi.org/blog/2020/04/ed-fi-opens-the-door-to-move-from-hundreds-to-hundreds-of-millions/)
requires much more than simply throwing the license on the code repository:

1. Only the next release of each application (exception: AMT) will be under the
   Apache license.
2. We want pristine code repositories, without confusing git histories and
   without files that were released under the Ed-Fi license.
   1. Therefore a new GitHub organization has been created,
      [Ed-Fi-Alliance-OSS](https://github.com/Ed-Fi-Alliance-OSS).
3. All files need to have [appropriate file
   headers](../open-source-code-management/license-and-copyright-notifications.md).
4. All repositories need appropriate readme, notices, and contributor files.
5. We need to scrub repos to ensure there is no sensitive information or
   references to DLP.

The process will proceed in stages. From a timing perspective, we want to
complete all stages with this timeline:

- **April**: Ed-Fi Data Standard
- **May**: ODS/API and Analytics Middle Tier
- **June**: ODS/API Admin App

Exchange projects and non-core ODS platform code will be handled along the way,
with no strict deadline.

_For more information on the open source transition, please see the [official
FAQ.](https://www.ed-fi.org/ed-fi-open-source-faq/)_

# Development Teams

Development teams will be created in the new organization for each scrum team,
along with the preparatory work for creating the new repositories. Initially
only the following teams will be created. Other teams will be created as needed.
Note that TPDM and MetaEd are not here because the repositories aren't being
converted to Apache.

1. Ed-Fi-Tech Team:
   1. chrismoffatt99
   2. ejansson
   3. jasonh-edfi
   4. david-clements-ed-fi
   5. stevenarnold-ed-fi
   6. vimayya
   7. stephenfuqua
   8. This team will had admin access on all repositories.
2. Data-Standard-Write
   1. ejansson
   2. ggaronzik
   3. blmeyers
   4. tbmeador-dlp
   5. bradbanister
   6. EdFiBuildAgent
3. ODS-Platform-Write:
   1. gmcelhanon
   2. jamessmckay
   3. blmeyers
   4. tbmeador-dlp
   5. tnunnerydl
   6. semalaiappan
   7. vimayya
   8. EdFiBuildAgent
4. ODS-Tools-Write:
   1. j-jordan
   2. plioi
   3. CSR2017
   4. saa14
   5. jasonh-edfi
   6. EdFiBuildAgent
   7. AndonyNS
5. Analytics-Write:
   1. DavidJGapCR
   2. jleiva-gap
   3. kurtjohnson-HS
   4. david-clements-ed-fi
   5. EdFiBuildAgent
   6. lalrg

# For Each Code Repository That Needs Apache Licensing

## 1. Create New Repo in "Ed-Fi-Alliance-OSS" or "Ed-Fi-Exchange-OSS" as appropriate

To be completed with help of the Analytics Team in April:

1. Create a repository in
   [https://github.com/ed-fi-alliance-oss](https://github.com/ed-fi-alliance-oss) with
   the same name as the old repository, e.g. `Ed-Fi-Common`. Do not apply a
   license when prompted.
   1. Exchange projects with names like "Ed-Fi-X-...." go
      into [https://github.com/ed-fi-exchange-oss](https://github.com/ed-fi-exchange-oss)
2. Create a `development` branch.
3. In the new repo, click on the Settings tab and change the following options:
   1. Disable wikis
   2. Disable issues
   3. Disable Projects
   4. Enable forks
   5. ~~Merge button: only allow Squash Merging.~~
4. Settings > Manage Access
   1. Add the team "Ed-Fi-Tech-Team" with admin rights.
   2. Add the appropriate development team(s) with write access (e.g.
      "ODS-Platform-Write").
5. Settings > Branches (the following are defaults settings; confer with
   Stephen about any requested changes)

   1. Set default branch to ~~`development`~~ **`main`**.

      :::tip

      As of August 2020, the Alliance is transitioning to having a
      single `main`  branch and no `master` / `development`  branches.
      Releases will be tagged on the `main` branch when ready.

      :::

   2. ~~Branch protection rule for `master`:~~
      1. ~~Pattern: "master"~~
      2. ~~Include administrators: true~~
   3. ~~Branch protection rule for `development`:~~
      1. ~~Pattern: "development"~~
      2. ~~Require pull request reviews before merging: true~~
      3. ~~Restrict who can dismiss pull requests reviews: Ed-Fi-Tech-Team~~
   4. Branch protection rule for `main`:
      1. Pattern: "main"
      2. Require pull request reviews before merging: true
      3. Restrict who can dismiss pull requests reviews: Ed-Fi-Tech-Team

## 2\. Prepare the New Repository Before Adding Code

:::warning

The following broad plan may be customized on a per-project basis,
especially for Exchange contributions. Developers should rely on the detailed
notes in the Jira ticket over this general plan.

:::

To be completed with help of the Analytics Team:

1. Switch to `development` branch and create a feature branch as usual.
2. Copy the LICENSE file [from
   here](https://github.com/Ed-Fi-Alliance/OSS-Sample/blob/master/LICENSE) into
   the new repository.
3. Copy the NOTICES.md file [from
   here](https://github.com/Ed-Fi-Alliance/OSS-Sample/blob/master/NOTICES.md)
   into the new repository
   1. Replace the project name at the top.
   2. Customize the license notifications as appropriate for the repository.
4. Copy the "Template-README.md" file [from
   here](https://github.com/Ed-Fi-Alliance/OSS-Sample/blob/master/Template-README.md)
   into the new repository as "README.md" and make the following updates:
   1. Insert project file name on line 1
   2. Insert a general repo/project overview at line 3
   3. Add appropriate links in "more information" section.
   4. Add other text and headings as desired at line 12.
   5. Modify line 22 to link to a Tracker query/filter.
5. Copy the "CONTRIBUTORS.md" file [from
   here](https://github.com/Ed-Fi-Alliance/OSS-Sample/blob/master/CONTRIBUTORS.md)
   into the new repository. Add the project's name at the top and list the
   actual contributors. People under contract do not have to be listed because
   it is a work-for-hire and is treated as "contributed by the Ed-Fi Alliance".
   Can list those developers as courtesy as desired by the repo manager.
6. Commit and push to GitHub.
7. Pull request into `development`.
8. Peer review.
9. Assign to Stephen Fuqua for final review and merge.

## 3\. Preparing Source Code

To be completed by the responsible Scrum team in the old ("source") repository.

1. Open the repository directory with VS Code or another good text editor.
2. Do a global search for "DLP" and "DoubleLine".
   1. If it is a file header with copyright, then just delete the header. Step
      6 below will insert a new file header.
   2. If it is other text with "DLP" then replace with Ed-Fi as appropriate.
3. Do a global search for "password" and "key" in _.config and_ .md. If
   anything is found that looks like a real password or API key then remove it.
   Create a ticket if this is going to be breaking something, and then go ahead
   and break things. Cannot let any sensitive information get through.

   Are there any other types of config files in the repo? XML, JSON? If so
   check those as well. Even if the information looks old and outdated, remove
   it! Maybe it actually still works. Even if not, we don't want people to
   _think_ Ed-Fi is being careless about sensitive data.

   Of course markdown files that provide instructions are exempt - you can
   leave clearly fake credential information in such files.

4. Confirm that there is no .git-credentials file.
5. Brainstorm anything else that shouldn't be here and take care of it.
6. Add a [file
   header](https://github.com/Ed-Fi-Alliance/OSS-Sample/tree/master/SampleFileHeaders)
   to all source code (\*.cs, \*.cshtml, \*.ps\*, \*.py,  \*.metaed, \*.sql,
   \*.js only for our content - not jquery etc).
   1. This script will take care of all C#, PowerShell, Python, MetaEd, and
      SQL files within a given directory
      path: [https://github.com/Ed-Fi-Alliance/OSS-Sample/blob/master/InsertFileHeaders.ps1](https://github.com/Ed-Fi-Alliance/OSS-Sample/blob/master/InsertFileHeaders.ps1)
7. Commit and merge into source repo's active development branch.

## 4.a. Migrating to the New Repository

To be completed by the responsible Scrum team on previously agreed schedule:

:::danger[CAUTION]

The development team needs to pause what they are doing while this
is going on - or otherwise plan to cherry pick or manually copy their changes
into the new repository once all steps are done.

:::

1. In the original project, checkout the `development-v3` branch after step 2
   is complete.
2. Run `git clean -xdf` in the repository to get rid of all binaries.
3. Clone the new repository into a different location.
4. Create a branch off of `development`.
5. Copy files from the source repository to the new repository.
6. Open the primary solution file in Visual Studio and add a solution folder
   for the markdown files: readme, notices, contributors (no reason to add
   license, since that file should not be modified further).
7. Commit all on a feature branch, merge to `development`  through the normal
   process.

### Additional Tasks

- [x] [Vinaya
      Mayya](https://edfi.atlassian.net/wiki/people/5c34ff2db4d5d75a3b51e1b9?ref=confluence)
      [Jason
      Hoekstra](https://edfi.atlassian.net/wiki/people/609ea507c8c05a0069d493bc?ref=confluence)
      all (most?) nuspec files for generating NuGet packages have a link to the
      repository. These links will need to change. Applies to NuGet packages in
      ODS-Implementation, ODS-Deploy, and AdminApp projects.
- [x] We can leverage ReSharper and a VS Code plugin (there are a few to choose
      from) to help with adding headers automatically on new files. I haven't
      actually experimented with this and would appreciate if other people can
      take this on with a ticket or two. ODS Platform team seems best for
      this [Vinaya
      Mayya](https://edfi.atlassian.net/wiki/people/5c34ff2db4d5d75a3b51e1b9?ref=confluence) can
      I create a couple of spike tickets in the ODS project?
- [x] [Jason
      Hoekstra](https://edfi.atlassian.net/wiki/people/609ea507c8c05a0069d493bc?ref=confluence) please
      note the comment several lines above (#9) about JavaScript files. Admin App
      has at least one JavaScript file that needs the code header, so updating
      that needs to be included in the acceptance criteria for the ticket(s) that
      bring AdminApp development branch into the new repo.

## 4.b TeamCity Updates

To be completed by the responsible Scrum team with help from Stephen as needed:

1. Carefully adjust build configurations. Will need to analyze, as some build
   configurations need to remain on the old repositories (e.g. leave 2.x
   configurations alone). Change both the repository link and the default
   branch, which will now be `development` instead of `development-v3`.
2. TODO: instructions on TeamCity quality check requirement in GitHub.
3. TODO: instructions on securing so that pull requests do not automatically
   trigger a build unless coming from a trusted user. Otherwise we risk
   arbitrary code running on TeamCity.

## 5\. Closing Up Old Repositories

To be completed by the responsible Scrum team:

1. Tag the `development-v3` branch: `moved-to-new-repo`.
2. Push a readme update to `*-v3` branches, something like "All development
   activity and future releases have been moved to repository xyz".

## 6\. All Team Developers

1. Learn how to sign commits. Tutorial: [Signing Git Commits](../../source-code-control-policy/signing-git-commits.md)
2. Delete or move your old local clones. Create branch clones of the new
   repositories. Do not add a new remote to your existing repos because we do
   not want to bring old Git history into the new repositories on accident.

# Repository Analysis

"analysis pending" below generally means this is an Exchange repository and we
need to investigate the IP closely before making a decision.

Steps 1 and 2 will be completed by the Analytics team. Steps 3-5 should be
completed by the responsible scrum team. The tasks for Steps 1 and 2 are listed
below for benefit of the Product Owners, but the other tasks will not be listed
in order to keep this page from being overwhelmed with JIRA links.

## Not Converting

### Active closed-source tools

- Atom-MetaEd
- axure-prototypes
- Ed-Fi-DataImport
- Ed-Fi-Exchange-2.0 → renamed to Ed-Fi-Template-Sharing
- ed-fi-gist
- Ed-Fi-LearningStandards-Proxy
- Ed-Fi-Meadowlark
- Ed-Fi-ODS-Deploy

  - ⚠️
    Should consider moving the PowerShell parts of it.

- Ed-Fi-TeamCity-Configs
- Ed-Fi-SqlServer-to-Postgres
- Ed-Fi-TestComplete-Tests
- Ed-Fi-TPDM-Model
- MappingEDU
- MetaEd
- MetaEd-IDE
- MetaEd-js
- Ed-Fi-Model
- MetaEd-Contrib

### Miscellaneous old / deprecated repositories

- ApiValidationProxy
- certification
- ConversionTool
- ed-fi.orgv2
- Ed-Fi-Apps
- ed-fi-buildsys
- Ed-Fi-Core
- Ed-Fi-DataWarehouse
- edfi-license
- Ed-Fi-NuGet-Packages → never used, therefore deleted
- Ed-Fi-ODS-Admin-Panel-POC
- Ed-Fi-ODS-API-SDK → only for suite 2
- ed-fi-ods-buildsys
- Ed-Fi-Ods-Deploy-AWS → archived
- Ed-Fi-ODS-Test-Scripts → archived
- ed-fi-rfc-openapi-ui
- Ed-Fi-Samples → archived
- Ed-Fi-Tech-Exchange
- MetricMetadataUtility
- OSS-Sample
- SDG-Dist
- swagger-codegen-cli
- TPDM
- validation
- [Ed-Fi-Extensions-Framework](https://github.com/Ed-Fi-Alliance/Ed-Fi-Extensions-Framework) -
  Eric confirmed no longer active, will archive it. 10 Aug 2020
- Ed-Fi-X-DataFlow-Maps → archived 10 Aug 2020
- Ed-Fi-X-DataImport-Samples - Jason confirmed no longer needed → archived on
  10 Aug 2020

### Old Dashboard

- Dashboards-Plugin-NWEA
- Dashboards-Plugin-Usage
- Dash-ETL-Int
- Ed-Fi-Dashboard
- Ed-Fi-Dashboard-Plugins
- Ed-Fi-Dashboard-Plugins-Transportation
- Ed-Fi-Dashboards-Core
- EdFi-X-Dashboard-ETL-2.2

## Converting

### Analytics Team

- Analytics Middle Tier
  - [OSS-6](https://tracker.ed-fi.org/browse/OSS-6) - Getting issue
    details... STATUS
- Ed-Fi-X-Data-Analytics

  - ⚠️
    Must remove the QuickSight password

  - [OSS-20](https://tracker.ed-fi.org/browse/OSS-20) - Getting issue
    details... STATUS
  - [OSS-51](https://tracker.ed-fi.org/browse/OSS-51) - Getting issue
    details... STATUS

### ODS Platform Team

- Ed-Fi-Common
  - [OSS-1](https://tracker.ed-fi.org/browse/OSS-1) - Getting issue
    details... STATUS
  - [ODS-4176](https://tracker.ed-fi.org/browse/ODS-4176) - Getting issue
    details... STATUS
  - [ODS-4181](https://tracker.ed-fi.org/browse/ODS-4181) - Getting issue
    details... STATUS
- Ed-Fi-Databases
  - [OSS-4](https://tracker.ed-fi.org/browse/OSS-4) - Getting issue
    details... STATUS
  - [ODS-4178](https://tracker.ed-fi.org/browse/ODS-4178) - Getting issue
    details... STATUS
  - [ODS-4182](https://tracker.ed-fi.org/browse/ODS-4182) - Getting issue
    details... STATUS
- Ed-Fi-MigrationUtility
  - [OSS-5](https://tracker.ed-fi.org/browse/OSS-5) - Getting issue
    details... STATUS
  - [ODS-4179](https://tracker.ed-fi.org/browse/ODS-4179) - Getting issue
    details... STATUS
  - [ODS-4183](https://tracker.ed-fi.org/browse/ODS-4183) - Getting issue
    details... STATUS
- Ed-Fi-ODS
  - [OSS-2](https://tracker.ed-fi.org/browse/OSS-2) - Getting issue
    details... STATUS
  - [ODS-4177](https://tracker.ed-fi.org/browse/ODS-4177) - Getting issue
    details... STATUS
  - [ODS-4181](https://tracker.ed-fi.org/browse/ODS-4181) - Getting issue
    details... STATUS
- Ed-Fi-ODS-Implementation
  - [OSS-3](https://tracker.ed-fi.org/browse/OSS-3) - Getting issue
    details... STATUS
  - [ODS-4180](https://tracker.ed-fi.org/browse/ODS-4180) - Getting issue
    details... STATUS
  - [ODS-4181](https://tracker.ed-fi.org/browse/ODS-4181) - Getting issue
    details... STATUS
- swagger-ui
  - [ODS-4304](https://tracker.ed-fi.org/browse/ODS-4304) - Getting issue
    details... STATUS
  - [ODS-4305](https://tracker.ed-fi.org/browse/ODS-4305) - Getting issue
    details... STATUS

### ODS Tools Team

- Ed-Fi-LearningStandards-Client
  - [OSS-52](https://tracker.ed-fi.org/browse/OSS-52) - Getting issue
    details... STATUS
- Ed-Fi-ODS-AdminApp
  - [OSS-7](https://tracker.ed-fi.org/browse/OSS-7) - Getting issue
    details... STATUS
  - [OSS-28](https://tracker.ed-fi.org/browse/OSS-28) - Getting issue
    details... STATUS
  - [AA-937](https://tracker.ed-fi.org/browse/AA-937) - Getting issue
    details... STATUS
  - [AA-943](https://tracker.ed-fi.org/browse/AA-943) - Getting issue
    details... STATUS
  - [AA-944](https://tracker.ed-fi.org/browse/AA-944) - Getting issue
    details... STATUS
- Ed-Fi-SDG
  - [OSS-8](https://tracker.ed-fi.org/browse/OSS-8) - Getting issue
    details... STATUS

### Exchange

:::note

[MSDF IP Transfers
(SharePoint)](https://dellfoundation.sharepoint.com/ed-fi/technology/Forms/AllItems.aspx?viewid=971270b2%2D50f8%2D4ee8%2D90b6%2D78328c5c58d7&id=%2Fed%2Dfi%2Ftechnology%2FIP%20Transfers)

:::

- Ed-Fi-X-ETL-To-Generate
  - [OSS-50](https://tracker.ed-fi.org/browse/OSS-50) - Getting issue
    details... STATUS
- Ed-Fi-X-ODS-Deploy-AWS
  - [OSS-57](https://tracker.ed-fi.org/browse/OSS-57) - Getting issue
    details... STATUS
- Ed-Fi-X-Ods-Deploy-Azure
  - [OSS-64](https://tracker.ed-fi.org/browse/OSS-64) - Getting issue
    details... STATUS
- Ed-Fi-X-ODS-Docker
  - [OSS-21](https://tracker.ed-fi.org/browse/OSS-21) - Getting issue
    details... STATUS
- Ed-Fi-X-OtisEd-iMart
  - [OSS-24](https://tracker.ed-fi.org/browse/OSS-24) - Getting issue
    details... STATUS
- Doug Loyo's projects - confirmed by Silvia 10 Aug 2020
  - Ed-Fi-X-ParentPortal  [OSS-58](https://tracker.ed-fi.org/browse/OSS-58)
    - Getting issue details... STATUS
  - Ed-Fi-X-PowershellMyGetInstaller
    [OSS-59](https://tracker.ed-fi.org/browse/OSS-59) - Getting issue
    details... STATUS
  - Ed-Fi-X-ChicoUSDTableauReports
    [OSS-60](https://tracker.ed-fi.org/browse/OSS-60) - Getting issue
    details... STATUS
  - Ed-Fi-X-DataChecker  [OSS-61](https://tracker.ed-fi.org/browse/OSS-61)
    - Getting issue details... STATUS
- Ed-Fi-X-Performance
  - [OSS-22](https://tracker.ed-fi.org/browse/OSS-22) - Getting issue
    details... STATUS
- Ed-Fi-X-WISEid
  - [OSS-23](https://tracker.ed-fi.org/browse/OSS-23) - Getting issue
    details... STATUS
  - Ed-Fi-X-WiseID-2 - merge these two with appropriate tagging
- Ed-Fi-X-API-Publisher
  - Eventually, but not yet ready. Wait for word from Chris / Silvia /
    Geoff. 10 Aug 2020
- Ed-Fi-X-AssessmentRoster - sent email to Audrey Shay 10 Aug 2020
  - [OSS-62](https://tracker.ed-fi.org/browse/OSS-62) - Getting issue
    details... STATUS
- Ed-Fi-X-Credential - already has Apache license
  - [OSS-63](https://tracker.ed-fi.org/browse/OSS-63) - Getting issue
    details... STATUS
- Ed-Fi-X-Ods-Assessment-API-Bridge
  - [OSS-65](https://tracker.ed-fi.org/browse/OSS-65) - Getting issue
    details... STATUS
- Ed-Fi-API-By-AEM - sent email to Chris and Lyria 10 Aug 2020
  - Generate-related so probably just move it forward along with the other
    Generate project.
- Ed-Fi-X-3.1-Assessment-Loaders - sent email to Scott Kuykendall and Sayee 10
  Aug 2020
  - Confirmed by email.  [OSS-68](https://tracker.ed-fi.org/browse/OSS-68)
    - Getting issue details... STATUS
- Ed-Fi-X-DescriptorTool - email to ~~Chris~~ Silvia 10 Aug 2020
  - There's no code here yet. Already created a new repo for Silvia and
    deleted the old one. 13 Aug 2020
- Ed-Fi-X-GoogleClassroom - email to Silvia and Emilio Baez 10 Aug 2020
  - Confirmed by email  [OSS-67](https://tracker.ed-fi.org/browse/OSS-67) -
    Getting issue details... STATUS
- Ed-Fi-X-Teacher-Preparation-Dashboard - email to Steven and Chris 10 Aug
  2020
  - Will delete this as UPD has a separate one
  - UPD's repo needs apache license on the Analytics Middle Tier copy.
  - [OSS-69](https://tracker.ed-fi.org/browse/OSS-69) - Getting issue
    details... STATUS

### Other

- Ed-Fi-Standard
  - [OSS-10](https://tracker.ed-fi.org/browse/OSS-10) - Getting issue
    details... STATUS

## Open Questions

- Ed-Fi-X-Extractors-eSchoolPlus - email to Jean-Francois Guertin 10 Aug 2020
  - Might not be any code to publish here, waiting for response from Rafael
    L. in San Marcos
- Ed-Fi-X-Finance - email to Sayee 10 Aug 2020

:::danger[CAUTION]

Need to review the list again, there may be some missing Exchange
repositories.

:::
