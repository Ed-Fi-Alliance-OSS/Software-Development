# GitHub Actions POC

[FIZZ-206](https://tracker.ed-fi.org/browse/FIZZ-206?src=confmacro)

There is not enough time to evaluate every possible option. GitHub Actions looks
like the best candidate based on the incomplete review.

## Spike 1

> [!TIP]
> Outcome: looks promising for most applications, though not necessarily
> the ODS/API. Need to test out a few more features before investing in this.

[FIZZ-205](https://tracker.ed-fi.org/browse/FIZZ-205?src=confmacro)  featured a
quick initial - and very positive - proof of concept. Code and CI results:

- [https://github.com/Ed-Fi-Exchange-OSS/Ed-Fi-X-Fizz/tree/GH-Actions-Spike/.github](https://github.com/Ed-Fi-Exchange-OSS/Ed-Fi-X-Fizz/tree/GH-Actions-Spike/.github)
- [https://github.com/stephenfuqua/Ed-Fi-X-Fizz/pull/3/checks](https://github.com/stephenfuqua/Ed-Fi-X-Fizz/pull/3/checks)

Summary:

- Relatively low amount of configuration to run various build commands on a
  Python project.
- Easily triggered in GitHub on pull request
- Security: need to use commit hash instead of tag on 3rd party actions; make
  sure PR builds don't have any side effects that could be impacted by
  malicious pull requesters. Any side-effects (such as publishing packages)
  should be after merge that has been approved by the team.
- Was able to run the job on localhost with the help of
  [act](https://github.com/nektos/act).
  - The version available for use in Windows via `chocolatey`  install has a
    bug that caused me to switch to running from *inside* Ubuntu (WSL2) bash
    prompt.
  - When running the process inside Ubuntu, performance is poor if the code
    is in the Windows file system. Significantly better to clone the
    repository in your Linux filesystem.
  - Side note: updated [Signing Git
    Commits](../../source-code-control-policy/signing-git-commits.md) with
    notes for configuring in WSL2.
- Having easy CLI command to run was essential.

More references:

- [https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions](https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions)
- [https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)

Next steps, in separate spikes:

- See about creating a template for running the same steps on different
  applications in a monorepo.
- Evaluate use of secrets to facilitate pushing packages out to Azure
  Artifacts / Azure blob storage.
- Security
