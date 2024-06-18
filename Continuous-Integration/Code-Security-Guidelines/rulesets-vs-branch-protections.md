# GitHub Rulesets vs Branch Protections

Rulesets have the following advantages over branch and tag protection rules.

- Unlike protection rules, multiple rulesets can apply at the same time, so you
  can be confident that every rule targeting a branch or tag in your repository
  will be evaluated when someone interacts with that branch or tag.
- Rulesets have statuses, so you can easily manage which rulesets are active in
  a repository without needing to delete rulesets.
- Anyone with read access to a repository can view the active rulesets for the
  repository. This means a developer can understand why they have hit a rule, or
  an auditor can check the security constraints for the repository, without
  requiring admin access to the repository.

| GitHub Rulesets                                 | Branch Protections                                                              |
| ----------------------------------------------- | ------------------------------------------------------------------------------- |
| • Require a pull request before merging         | • Require pull request reviews before merging                                   |
| • Require status checks to pass before merging  | • Require status checks before merging                                          |
| • Require signed commits                        | • Require signed commits                                                        |
| • Require linear history                        | • Require linear history                                                        |
| • Require deployments to succeed before merging | • Require deployments to succeed before merging                                 |
| • Block force pushes                            | • Allow force pushes                                                            |
| • Restrict deletions                            | • Allow deletions                                                               |
| -------------------------------                 | -------------------------------                                                 |
| • Restrict creations: Create branch or tag      | • Require conversation resolution before merging: All comments must be resolved |
| • Restrict updates: Push to branch or tag       | • Require merge queue: Builds a queue to allows multiple PR merges              |
|                                                 | • Lock branch: Make a branch read only                                          |
|                                                 | • Do not allow bypassing the above settings                                     |
|                                                 | • Restrict who can push to matching branches                                    |

Rulesets can be used alongside branch protections, so we can use a combination
of both. For example:

Require a pull request before merging as a ruleset and require a merge queue
for a specific branch.
