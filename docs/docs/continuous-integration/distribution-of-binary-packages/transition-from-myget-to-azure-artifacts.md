# Transition from MyGet to Azure Artifacts

## Task Tracking

| What                                                                    | When                                                            | Who                                                                                                                       | Ticket                                                                                                                                                |
| ----------------------------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Configure Azure Artifacts for NuGet and npm Package Feeds               | 31 Jul 2020                                                     | [Stephen Fuqua](https://edfi.atlassian.net/wiki/people/5b7c806bfe42212a79620406?ref=confluence)                           | [TT-217](https://tracker.ed-fi.org/browse/TT-217?src=confmacro)                                                                                       |
| Use Azure Artifacts for NuGet packages managed by the ODS Platform team | In time for release 6.0.0                                       | ODS Platform Team<br/><br/>[Vinaya Mayya](https://edfi.atlassian.net/wiki/people/5c34ff2db4d5d75a3b51e1b9?ref=confluence) ​ | ​ [ODS-4490](https://tracker.ed-fi.org/browse/ODS-4490?src=confmacro)                                                                                 |
| Use Azure Artifacts for Admin App and PowerShell installers             | ![(question)](../../../static/img/continuous-integration/question.png) | ODS Tools Team<br/><br/>[Jason Hoekstra](https://edfi.atlassian.net/wiki/people/609ea507c8c05a0069d493bc?ref=confluence)    | [AA-1052](https://tracker.ed-fi.org/browse/AA-1052?src=confmacro)<br/><br/> [TSINSTALL-10](https://tracker.ed-fi.org/browse/TSINSTALL-10?src=confmacro) |
| Use Azure Blob Storage for Tech Suite Installer exe (msi) distribution  | ![(question)](../../../static/img/continuous-integration/question.png) | ODS Tools Team<br/><br/>[Jason Hoekstra](https://edfi.atlassian.net/wiki/people/609ea507c8c05a0069d493bc?ref=confluence)    | [TSINSTALL-11](https://tracker.ed-fi.org/browse/TSINSTALL-11?src=confmacro)                                                                           |
| Use Azure Artifacts for npm packages for MetaEd                         | ![(question)](../../../static/img/continuous-integration/question.png) | R&D Team<br/><br/>[Eric Jansson](https://edfi.atlassian.net/wiki/people/5e976d699a3bf20c2daae0ec?ref=confluence)            | [METAED-1155](https://tracker.ed-fi.org/browse/METAED-1155?src=confmacro)                                                                             |
| Deprecation notice and instructions for MetaEd and .NET code updates    | ![(question)](../../../static/img/continuous-integration/question.png) | [Stephen Fuqua](https://edfi.atlassian.net/wiki/people/5b7c806bfe42212a79620406?ref=confluence)                           | [TT-219](https://tracker.ed-fi.org/browse/TT-219?src=confmacro)                                                                                       |
| Move old binaries, supported or out-of-support, from MyGet to Azure     | ![(question)](../../../static/img/continuous-integration/question.png) | [Stephen Fuqua](https://edfi.atlassian.net/wiki/people/5b7c806bfe42212a79620406?ref=confluence)                           | [TT-220](https://tracker.ed-fi.org/browse/TT-220?src=confmacro)                                                                                       |
| Use Azure Artifacts for Project Buzz                                    | ![(question)](../../../static/img/continuous-integration/question.png) | Analytics Team<br/><br/>[David Clements](https://edfi.atlassian.net/wiki/people/5e8b85d6f5bd7d0b87afe95e?ref=confluence)    | [FIF-291](https://tracker.ed-fi.org/browse/FIF-291?src=confmacro)                                                                                     |

# Archiving Old Packages

[DEVOPS-50](https://tracker.ed-fi.org/browse/DEVOPS-50?src=confmacro)

## Goals

- Relieve pressure on the MyGet quota
- Avoid impact on development teams
- Avoid impact on end-users

## Strategy

- Move old packages from MyGet to Azure Artifacts
- Setup an [Upstream
  Source](https://docs.myget.org/docs/reference/upstream-sources) as a
  pass-through proxy on MyGet, to Azure Artifacts, so that users can still
  retrieve these archived packages without knowing about the move.

## Validation Process

1. Use a package in Azure Artifacts that does not exist in MyGet yet, confirm
   able to download via MyGet.
2. Remove a random pre-release package from MyGet _that is not being used right
   now_. Upload it to Azure Artifacts. Confirm able to download via MyGet.
3. Only once those very low risk tests are confirmed will I try removing a more
   substantial package from MyGet, starting with an old package version that no
   one is likely to want to download anyway. Confirm that it worked.

4. If for some reason it does not work, I can always re-upload that package to
   MyGet.

## Configuration

Feed URL (requires v2 feed, not the standard v3
feed): [https://pkgs.dev.azure.com/ed-fi-alliance/Ed-Fi-Alliance-OSS/\_packaging/EdFi/nuget/v2](https://pkgs.dev.azure.com/ed-fi-alliance/Ed-Fi-Alliance-OSS/_packaging/EdFi/nuget/v2)

![(tick)](../../../static/img/continuous-integration/check.png)
make all upstream packages available in clients

![(tick)](../../../static/img/continuous-integration/check.png)
include prerelease versions

update interval: 1 week

## Testing

Package `AzureArtifactLib.one` does not exist on MyGet. To have it automatically
show up requires an indeterminate (max 1 week) wait for the update interval to
occur. Therefore I manually added the package, being careful not to select the
mirroring option.

After waiting a minute for the MyGet cache to catch up:

- ![(tick)](../../../static/img/continuous-integration/check.png)
  the library shows up on the website

- ![(tick)](../../../static/img/continuous-integration/check.png)
  I'm able to install the library locally using nuget.exe

- ![(tick)](../../../static/img/continuous-integration/check.png)
  the library shows up in Visual Studio *when displaying all packages from
   MyGet*

- ![(error)](../../../static/img/continuous-integration/error.png)
  500 internal server error occurs when searching for this library *or any
   other*. Occurs in Visual Studio and with nuget.exe.

Disabled the upstream source for now. We might be able to live with this, but
the ODS Platform team is trying to create a release right now and we do not want
to risk that. Interestingly, the package is still available in the MyGet feed,
and the package's page now shows "Found on the current feed only" whereas it
previously said that it was source from Azure Artifacts. Thus although mirroring
was not enabled, the package appears to now be mirrored on MyGet. That is
strange and disquieting.

:::note

See [Ed-Fi Software Package
Distribution](../../cross-functional-projects/ed-fi-software-package-distribution/README.md) for
more information on the decision to move from MyGet to Azure Artifacts

:::
