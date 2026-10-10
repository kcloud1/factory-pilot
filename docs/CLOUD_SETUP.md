# Codex Cloud startup — factory-pilot

**M9 owner:** [Issue #3](https://github.com/kcloud1/factory-pilot/issues/3). Reuse the existing **`factory-pilot`** environment selected for `kcloud1/factory-pilot`. This is the Cloudflare static pilot, **not** `aws-factory-pilot`. `INIT.md` is already `INITIALIZED` — do not restart the interview. See the [universal setup contract](https://github.com/amitkarpe/repo-starter/blob/main/docs/CLOUD_SETUP.md).

**Install script:** Retain the existing published setup; do not republish for each PR. Use Node **24** and the existing `package-lock.json`; run `npm ci --no-audit --no-fund` only when `node_modules` is missing or incompatible. No AWS tooling, credentials or cloud resource setup. If changing the saved Install script or Start skill, that UI change must be saved and published separately.

**Start skill** (copy into the selected environment only when updating its saved instructions):

```text
Target: kcloud1/factory-pilot. Reuse the existing published Codex Cloud environment.
Read AGENTS.md and the active Issue/PR, then ENV.md if needed.
Check the selected environment is for factory-pilot, not aws-factory-pilot.
Verify mounted Git repository identity and intended PR commit/ref separately.
An older checkout is not a repo mismatch; select the intended PR revision safely.
Require Node 24. Use the existing package lockfile and dependencies; npm ci only if needed.
Run npm run check and npm run dry-run once. Report exit codes and task checkout SHA.
Never run wrangler deploy for publication, access Cloudflare tokens or change providers.
GitHub Actions is the only deployment writer. Stop after the required checks pass.
```

## One cloud task acceptance

In the existing managed Codex Cloud environment, inspect the mounted repository and current task commit; safely select the **current M9 PR** revision if needed. Then, from its root:

```sh
node --version
npm --version
npm run check
npm run dry-run
```

If dependencies are absent, first run `npm ci --no-audit --no-fund` once. The dry-run packages locally; it is **not a deployment**. Publish a short receipt on Issue #3 and its PR: selected repository/ref/SHA, Node 24, check PASS, dry-run PASS, deployment NONE. One actual cloud-task check suffices; no new tests, browser deep E2E, synthetic task-ID proof or repeated M3/M4 release checks.

**Stop gates:** wrong repository/environment, missing authorized runtime, required check failure or a provider write request. No new Worker, domain, GitHub workflow, credentials, environment or spending.
