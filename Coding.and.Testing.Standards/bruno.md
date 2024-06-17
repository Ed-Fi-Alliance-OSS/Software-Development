# Bruno Introduction

> [!CAUTION]
> This document describes investigation of Bruno as an alternative to Postman. Our conclusion at the time: it is close, but not quite ready for Ed-Fi. Primary reason: cannot define authentication at a parent level and have that cascade down to the children.

## What is Bruno?

[Bruno](https://www.usebruno.com/) is an Open Source API Client, aimed to be an alternative to Postman and other tools for API testing, while maintaining similarities and trying to improve the areas that other tools might not cover/support.

## Why considering a different API Client?

When exploring test automation options for Meadowlark ([https://edfi.atlassian.net/wiki/spaces/BD/pages/22041449](https://edfi.atlassian.net/wiki/spaces/BD/pages/22041449)), I mentioned some caveats of using Postman for test automation (based on previous experience in developing API test suites such as Admin API's).

The [Bruno's Manifesto](https://www.usebruno.com/manifesto) mentions some of these aspects, the biggest one being the necessity of having the collections in source control and adding easy modification and synchronization between teams.

## How to use Bruno?

Bruno functionality consists of three areas: The UI, the Markdown and the Runner

## The UI

This is a similar, simpler version of the Postman UI, if you've used Postman before, the

<img alt="BrunoUI" 
src="https://edfi.atlassian.net/wiki/download/thumbnails/19334895/image-2024-1-5_8-24-18.png?version=1&modificationDate=1704464659083&cacheVersion=1&api=v2&width=539&height=250" 
height=250>

[https://www.usebruno.com/downloads](https://www.usebruno.com/downloads)

## Markdown (.bru)

[https://www.usebruno.com/bru](https://www.usebruno.com/bru)

<img alt="BrunoMarkdown" 
src="https://edfi.atlassian.net/wiki/download/thumbnails/19334895/image-2024-1-5_8-28-50.png?version=1&modificationDate=1704464930520&cacheVersion=1&api=v2&width=321&height=400" 
height=400>

VSCode extension for Syntax Highlighting: [https://marketplace.visualstudio.com/items?itemName=bruno-api-client.bruno](https://marketplace.visualstudio.com/items?itemName=bruno-api-client.bruno)

Bruno has some [built in Node libraries](https://docs.usebruno.com/scripting/inbuilt-libraries.html) and supports adding [node packages as dependencies](https://docs.usebruno.com/scripting/external-libraries.html) adding a package.json file.

<img alt="NodeLibraries Example"
src="https://edfi.atlassian.net/wiki/download/thumbnails/19334895/image-2024-1-5_8-36-40.png?version=1&modificationDate=1704465401243&cacheVersion=1&api=v2&width=317&height=250"
height=250>

## Runner

[https://github.com/andonyns/Ed-Fi-AdminAPI/actions/runs/7281562133/job/19842303482](https://github.com/andonyns/Ed-Fi-AdminAPI/actions/runs/7281562133/job/19842303482)

<img alt="NodeLibraries Example"
src="https://edfi.atlassian.net/wiki/download/thumbnails/19334895/image-2024-1-5_8-25-13.png?version=1&modificationDate=1704464713683&cacheVersion=1&api=v2&width=279&height=250"
height=250>

## Added Functionality

### Assertions

Simplified tests to verify for specific results

<img alt="NodeLibraries Example"
src="https://edfi.atlassian.net/wiki/download/thumbnails/19334895/image-2024-1-5_8-32-12.png?version=1&modificationDate=1704465134760&cacheVersion=1&api=v2&width=632&height=250"
height=250>

## Missing Functionality

### Folder level scripts

- Can be added as a previous test, but will not be automatically executed.

### Step Reuse

## Demo

See [Register.bru](https://github.com/Ed-Fi-Alliance-OSS/Ed-Fi-AdminAPI/blob/14ffada70028375fdd22d1e368992e38e208102f/Application/EdFi.Ods.AdminApi/E2E%20Tests/bruno/Admin%20API%20E2E/User%20Management/Register.bru)

## Read More

[https://docs.usebruno.com/bru-lang/overview.html](https://docs.usebruno.com/bru-lang/overview)
