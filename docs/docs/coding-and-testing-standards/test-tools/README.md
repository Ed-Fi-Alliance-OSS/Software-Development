# Testing Tools Used in Ed-Fi Software Development

The choice of tools for integration / end-to-end testing depends on the project.

- ODS/API Platform uses Postman
- Data Management Service uses a combination of Req'n'roll (test definition),
  NUnit (testing code), Playwright (API-driven test execution), and
  TestContainers (environment management).

In 2023, we evaluated [Bruno](./bruno.md) as a potential replacement for
Postman. It is close in many respects, but not there yet. Most important
limitation at that time: lack of inherited security setup.