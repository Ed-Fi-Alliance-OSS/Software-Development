# Ed-Fi Software Package Distribution

## Summary Recommendation

Distribute software files in the most appropriate channel for the class of
software:

| License                                  | Package Type                                                            | Release Status                                                                      | Distribution Channel                                    |
| ---------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------- |
| Apache                                   | .NET libraries and applications, JavaScript packaged with NuGet | Release<br/><br/>Release-Candidate<br/><br/>Formal Beta<br/><br/>Other pre-releases | Azure Artifacts​                                        |
| Apache                                   | .NET application *installers executables*, Cloud ODS            | Release<br/><br/>Release-Candidate<br/><br/>Formal Beta                             | Azure Blob Storage                                      |
| Apache                                   | Docker images                                                           | Release<br/><br/>Release-Candidate<br/><br/>Formal Beta                             | Docker Hub                                              |
| Apache                                   | Docker images                                                           | Other pre-releases                                                                  | Azure Container Registry                                |
| Ed-Fi Binary License - MetaEd            | Zip file                                                                | All                                                                                 | Azure Blob Storage                                      |
| Ed-Fi Binary License - MetaEd            | JavaScript package                                                      | All                                                                                 | Azure Artifacts with transition plan away from MyGet    |
| Ed-Fi Legacy License - long-term support | .NET libraries and applications                                         | All                                                                                 | Azure Blob Storage with transition plan away from MyGet |
| Ed-Fi Legacy License - long-term         | Cloud ODS                                                               | All                                                                                 | Azure Blob Storage                                      |
| Ed-Fi Legacy License - long-term support | Dashboards (e.g. sample databases)                                      | All                                                                                 | Leave on AWS to minimize disruption                     |
| Ed-Fi Legacy License - out of support    | All                                                                     | All                                                                                 | Azure Blob Storage, possibly lower cost storage tier    |

:::tip

"JavaScript packaged with NuGet" refers to Fix-it-Friday applications,
which are bundled with PowerShell install scripts into NuGet packages for ease
of distribution.

:::

## Motivations

### Too Many Solutions

To date, the Ed-File Alliance has used several different solutions for
distributing software packages, including:

- Confluence
- AWS
- Azure
- MyGet
- GitHub Releases

When we have a new project, where should we store the binary output for
distribution to the community? We do not have a coherent strategy.

### MyGet Quota

MyGet has been an important channel for releasing .NET packaged binaries. The
current subscription is very low cost on a legacy plan, but requires frequent
maintenance in order to remain below the 4 GB quota. A new strategy is needed
for these packages.

### New Licenses

The Apache license opens up new opportunities for public distribution of those
packages under the Apache license. But what about other applications that are
not under the Apache license - MetaEd and Data Import?

## Requirements for a Coherent Strategy

1. Choose the right tool for the job.
2. Closed-source applications do not require authentication / authorization, but
   should not be placed in highly-visible locations.
3. Must be able to automate pushing new binaries to the appropriate service.
4. Must be able to set appropriate retention policies for pre-release packages
   (to be determined).
5. For legacy applications, consider lower-tier storage options for cost
   optimization but do not spend much time on doing so.

## Strategy by License Type

### Apache Licensed Software

#### .NET Libraries and Packages

i.e. NuGet packages, including the PowerShell installer packages.

| Option                       | Analysis                                                                                                                                                                                                                                                     |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ​NuGet Gallery               | - ✅ Free<br/>- ![(info)](../../../static/img/cross-functional-projects/information.png) Good for high visibility discovery of packages<br/>- ![(info)](../../../static/img/cross-functional-projects/information.png) Not ideal for high-volume pre-releases |
| Azure Artifacts              | - ✅ Much lower cost than MyGet<br/>- ✅ Good for all package types<br/>- ✅ Proven automation                                                                                                                                                                  |
| GitHub Packages              | - ❌ Difficult to use and only works for private packages.                                                                                                                                                                                                    |
| Azure Blob Storage or AWS S3 | - ![(info)](../../../static/img/cross-functional-projects/information.png) Very low cost but requires additional effort for serving packages                                                                                                                 |

Pre-release packages will best be handled through Azure Artifacts. Released
packages can be "promoted" to NuGet Gallery. This would require some additional
engineering effort, with the benefit of greater visibility. If visibility is
desired then it is a good solution. However, it would be simpler to consolidate
only on the Azure Artifacts platform. The Alliance could store nearly fives
times the amount of data on Azure Artifacts as it does on MyGet for the same low
cost ($25/month). The cost savings of moving released packages to NuGet Gallery
do not justify even an hour of additional engineering effort.

Anyone with older code will be hitting MyGet to retrieve packages, so leave it
run and provide a transition plan.

Update TeamCity to publish packages to the new repository automatically.

## Recommendations

- **Azure Artifacts**
- **_One-year deprecation notice for packages on MyGet.org along with
  instructions on how to change to the new repository_**

### .NET Application Installers and Cloud ODS

Executable installers ("msi") for the ODS/API and Admin App.

| Option                       | Analysis                                                                                                                                                                                                                                                                                                                      |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ​NuGet Gallery               | - ![(info)](../../../static/img/cross-functional-projects/information.png) Not ideal for large files.                                                                                                                                                                                                                         |
| Azure Artifacts              | - ⚠️ Compressing an exe into a NuGet package requires extra handling by the end-user:<br/> - Download with `chocolatey` , or<br/> - Manually rename from .nupkg to .zip and extract files, or<br/> \- Use a provided PowerShell script to download latest and extract.                                                         |
| Azure Blob Storage or AWS S3 | - ✅  Easy to use<br/>- ✅ Low cost - Azure slightly lower than AWS as volume goes up<br/>- ✅ ![(info)](../../../static/img/cross-functional-projects/information.png) Easy to automate - proven with Azure, assumed with Amazon<br/>- ⚠️ Download links in Confluence need to be changed every time a new release is available. |
| GitHub Release               | - ✅ Easy to use<br/>- ✅ Easy to discover<br/>- ✅ Low/no cost<br/>- ✅ Easy to automate / proven                                                                                                                                                                                                                                |

Azure or AWS Blob storage will provide an easier end-user experience than a
NuGet package at the cost of having to paste a new URL into a Confluence page
for each release. Given the low release frequency this seems reasonable.

GitHub release works just fine in this case. However, it is not a good solution
for anything else, and it would be preferable to consolidate platforms.

Use TeamCity to push new artifacts to Azure Blob Storage on demand, but not
automatically.

**_Recommendation: Azure Blob Storage_**

### Docker Images

| Option                            | Analysis                                                                                                                                                                                |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ​Docker Hub                       | - ✅ ​Free for public images - but limited retention<br/>- ❌ / ✅ Higher price than Azure or AWS for private repositories, though that includes CI/CD time and the cost is not very high. |
| Azure Container Registry          | - ✅ Low cost for private repositories when building on TeamCity                                                                                                                         |
| Amazon Elastic Container Registry | - ✅ Low cost for private repositories when building on TeamCity                                                                                                                         |
| GitHub Packages                   | - ❌ High number of support issues and only works for private packages                                                                                                                   |

Public images should go to Docker Hub for visibility. At only $25/month for five
years on an annual plan, the cost to have unlimited image retention and a
reasonable amount of build time is well worth it. Use of Azure or AWS would be
reasonable and cost effective but drives more network traffic between TeamCity
and the host, and lowers the discoverability of the images.

<details>
<summary><b>Original analysis...</b></summary>
<br/>
Public images should go to the Docker Hub. Most likely we will need private
image repositories as well, for integration/automation test deployments. Either
Azure or Amazon could be used with (likely) similar costs; because of
differences in base storage rate and data transfer costs it is difficult to
compare right now. Either way the cost will likely be less than $10/month. Best
to do a POC to evaluate ease of integration before selecting one.

**_Recommendations:_**

- **_Docker Hub for releases and official pre-releases_**
- **_Azure Container Registry for unofficial pre-releases ("private")_**
</details>
<br/>

Ed-Fi Binary License (new)

| Option                       | Analysis                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Azure Artifacts              | - ![(info)](../../../static/img/cross-functional-projects/information.png) Similar visibility to MyGet, which has historically been acceptable.<br/>- ✅ Easy to automate - proven.<br/>- ✅ Easily retrieve "latest" version with a given URL.<br/>- ⚠️ Compressing an exe into a NuGet package requires extra handling by the end-user:<br/> - Download with `chocolatey` , or<br/> - Manually rename from .nupkg to .zip and extract files, or<br/> - Use a provided PowerShell script to download latest and extract. |
| Azure Blob Storage or AWS S3 | - ✅  Easy to use<br/>- ✅ Low cost - slightly lower than AWS as volume goes up<br/>- ✅ ![(info)](../../../static/img/cross-functional-projects/information.png) Easy to automate - proven with Azure, assumed with Amazon<br/>- ⚠️ Download links in Confluence need to be changed every time a new release is available.                                                                                                                                                                                                |
| GitHub Releases              | - ✅ Proven model<br/>- ❌ Public repositories are "too" public, and private repositories require continued management of GitHub user access.                                                                                                                                                                                                                                                                                                                                                                            |

Similar to .NET application installers - Azure Blob Storage seems like a good
and reasonable fit for this need.

Data Import is distributed as an executable installer. MetaEd has both a zip
file and JavaScript packages (npm). The packages must continue to be distributed
through npm. Anyone with older versions of MetaEd will be hitting the MyGet
server to retrieve packages.

Update TeamCity to publish installers to Azure Blob Storage on demand, and npm
packages (on demand/automatic yet to be determined).

**_Recommendations:_**

- **_Azure Blob Storage for exe / zip files_**
- **_Azure Artifacts for npm_**
- **_One-year deprecation notice for packages on [MyGet.org](http://MyGet.org)
  along with instructions on how to change to the new repository_**

## Ed-Fi Legacy License

### Long-Term Support

Those applications that are still supported - for example ODS/API 2.5.0.1 - can
be migrated to Azure Artifacts.

### Out-of-support Packages

Legacy binaries on MyGet should be moved to cloud storage, possibly in a
lower-cost (low usage / high latency) tier. These do not need to be advertised
to the community. Even the old NuGet packages should be placed in blob storage,
as there is no need to make them available via NuGet feed.

**_Recommendation: Azure Blob Storage_**

### Cloud ODS

No change to current practice.

**_Recommendation: Azure Blob Storage_**

### Dashboards (Legacy)

No change to current practice.

**_Recommendation: Amazon S3_**

## Next Steps

:::note

Conversation between [Chris Moffatt
(Deactivated)](https://edfi.atlassian.net/wiki/people/557058:19debe99-4842-4bab-b285-76589691f7ff?ref=confluence)
and [Stephen
Fuqua](https://edfi.atlassian.net/wiki/people/5b7c806bfe42212a79620406?ref=confluence)
on 20 Jul 2020, agreed to:

- Azure Artifacts for NuGet and npm packages
- Azure blob storage for other large binaries
- Probable 1-year deprecation notice on MyGet

:::

**See** **[Transition from MyGet to Azure
Artifacts](../../continuous-integration/distribution-of-binary-packages/transition-from-myget-to-azure-artifacts.md).**

:::note

For more information on each of the evaluated storage options,
see [Background Research Notes for File
Distribution](./background-research-notes-for-file-distribution.md).

:::
