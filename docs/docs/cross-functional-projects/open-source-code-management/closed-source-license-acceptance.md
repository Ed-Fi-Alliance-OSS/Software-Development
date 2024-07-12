# Closed Source License Acceptance

## Introduction

The source code for some applications remains closed, with no current plans for
re-licensing under Apache or other open source licenses. With the elimination of
the traditional DocuSigned "Ed-Fi license" in 2020, those applications need to
have another license acceptance process for end-users. As of July 2020 this
applies to two products:

- MetaEd
- Data Import

## Approved Process

The following process has been approved by the Michael & Susan Dell Foundation
legal team ( [TT-188](https://tracker.ed-fi.org/browse/TT-188?src=confmacro) ):

- Host the approved license text in Confluence.
- Host the downloadable binaries / zip files in a "non-obvious" way (for
  example, do not broadcast download URL in a public way).
- Hide the download link in Confluence.
- Those who wish to download the installer package will be offered the chance
  to review the license text, click a checkbox saying that they have read and
  agreed to the text, and then click a submit button.
  - The user's Confluence user name will be e-mailed
    to [techsupport@ed-fi.org](mailto:techsupport@ed-fi.org) for tracking
    purposes.
- On submission of the simple click-through form, the hidden download
  link/instructions will be revealed.

## How It Works

Make liberal use of Confluence features:

- HTML macro to load the license text in a scrolling frame, so that the entire
  page does not require scrolling in order to see the license acceptance form.
- HTML macro with a form and JavaScript to post the user's information to the
  Confluence functionality for sending a test email; that API function offers
  full access to send messages.
- Page include macro to load the download link from another page; this content
  will be hidden by default, and made visible via JavaScript after submission
  of the form.
- Download link will be in a page in the "\_Site Assets" area of the Space,
  which is not discoverable via Confluence navigation.

[MetaEd form submission script.txt](../../../static/img/cross-functional-projects/MetaEd%20form%20submission%20script.txt)

[MetaEd form.txt](../../../static/img/cross-functional-projects/MetaEd%20form.txt)

[Formatted closed-source license text.txt](../../../static/img/cross-functional-projects/Formatted%20closed-source%20license%20text.txt)
