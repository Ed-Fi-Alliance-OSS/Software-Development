# Dependency Scanning for Published Release

Ed-Fi repositories are configured with Dependabot security alerts to monitor
security advisories related to project dependencies and alert on any issues
found. However, Dependabot performs security scans exclusively [run on the
default branch](https://github.com/orgs/community/discussions/15027). To address
this limitation and effectively identify security vulnerabilities in previously
published releases that fall under Ed-Fi support, we need an alternative
approach.

As part of the investigation, we reviewed the following options :

| Option                                                                                            | Pros                                                                                                                                                                                                                                                            | Cons                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Github action](https://github.com/dependency-check/Dependency-Check_Action/blob/main/Dockerfile) | uses the [owasp/dependency-check-action Docker image](https://hub.docker.com/r/owasp/dependency-check-action)                                                                                                                                                   | built out of [latest](https://github.com/dependency-check/Dependency-Check_Action/blob/main/Dockerfile#L1) owasp/dependency-check image which violates our accepted practice of using pinned Docker images |
| dotnet list package --vulnerable                                                                  | light weight                                                                                                                                                                                                                                                    | supports only .net<br><br>has to be run against each .csprojs or .sln files<br><br>no html report but reasonable text based report that can be made available as build artifact                            |
| SonarQube                                                                                         |                                                                                                                                                                                                                                                                 | Not Free                                                                                                                                                                                                   |
| Snyk                                                                                              | Uses a combination of NIST database and SAST (Static Application Security Testing) to provide a comprehensive approach.<br><br>In this specific scenario, SAST (Static Application Security Testing) is unnecessary, since that is verified with CodeQL builds. | Free tier only offers [100 tests/month](https://snyk.io/product/open-source-security-management/)                                                                                                          |

However, since .NET projects were the primary focus of this endeavor (Node.js
can utilize `npm audit`, and there are no active Python projects), we opted for
the lightweight `dotnet list package` option. Nightly builds are executed for
supported release tags, with Slack notifications regarding the build results.

An example workflow file can be found
[here](https://github.com/Ed-Fi-Alliance-OSS/Ed-Fi-ODS/blob/main/.github/workflows/Security%20Vulnerability%20Check%20on%20Release%20Tags.yml)
for reference.
