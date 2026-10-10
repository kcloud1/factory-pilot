# Factory Pilot

A fictional Cloud Operations dashboard built in a managed Codex Cloud workspace to prove the source → reviewed PR → GitHub Actions → isolated Cloudflare Worker path. The pilot is live at [factory-pilot.amitk.life](https://factory-pilot.amitk.life/).

## Completed product

- Six fictional services, regional filtering, traffic/latency/spend metrics, demo health checks and persistent light/dark themes.
- [Release overview](https://factory-pilot.amitk.life/#release): full source SHA/version, bounded comparison with `release.json`, and links to source checks and release runs. Matching metadata confirms asset identity only; CI/provider status requires its evidence.
- [Session Activity](https://factory-pilot.amitk.life/#activity): UTC timestamps, region context, Demo/Release metadata filters, an eight-event limit and an honest empty state. Reload starts a new session.

All operational metrics and displayed spend are simulated. No AWS or backend APIs are called. The published version is `factory-pilot-v4`; [release.json](https://factory-pilot.amitk.life/release.json) is authoritative for the currently served checkout SHA.

## Completion evidence

| Milestone | Reviewed PR | Evidence |
| --- | --- | --- |
| Initial dashboard / M3 | [#1](https://github.com/kcloud1/factory-pilot/pull/1) | [Factory Issue #3](https://github.com/kcloud1/cloud-app-factory/issues/3) |
| Automatic Git release / M4 | [#2](https://github.com/kcloud1/factory-pilot/pull/2) | [Factory Issue #4](https://github.com/kcloud1/cloud-app-factory/issues/4) |
| Reuse existing Codex Cloud setup / M9 | [#4](https://github.com/kcloud1/factory-pilot/pull/4) | [Issue #3](https://github.com/kcloud1/factory-pilot/issues/3) |
| Release overview / v3 | [#6](https://github.com/kcloud1/factory-pilot/pull/6) | [Issue #5](https://github.com/kcloud1/factory-pilot/issues/5) |
| Session Activity / v4 | [#8](https://github.com/kcloud1/factory-pilot/pull/8) | [Issue #7](https://github.com/kcloud1/factory-pilot/issues/7) |

These scopes are complete and their issues/PRs are closed. The v4 product release at `1267993ff1405378caae9ef552faecf8484c4ea4` passed [Actions run 38093169503](https://github.com/kcloud1/factory-pilot/actions/runs/38093169503), independent provider readback and both live Activity checks. Later documentation releases can refresh the checkout SHA without changing the product version; use the linked receipt and Actions history for current identity.

## Development and publication

```sh
npm ci
npm run check
npm run build
npm run dev
npm run dry-run
```

Commands run in the managed cloud workspace. `dev` uses local simulation there; `dry-run` packages without publishing. No manual deploy command is part of the approved release path. The dependency lockfile pins Wrangler. Static assets are confined to `dist/`; repository files and secrets are never included. Build stamps `release.json` and the visible release marker with the exact checkout SHA and rejects a mismatched GitHub SHA.

[Accepted intent](intent/0001-project-bootstrap/intent.md) · [Execution contract](SPEC.md) · [Environment](ENV.md) · [Owning Issue #3](https://github.com/kcloud1/cloud-app-factory/issues/3)

The caller uses the reviewed factory publisher at immutable `d60d213b3fa77510deb29b084b0efa802c7c16a4`. Protected-main pushes invoke the sole deployment writer after checks pass. Its isolated deployment job validates the exact artifact/configuration and performs fresh token/account/zone/collision/sole-writer checks before a write. Original M2 no-write reports remain historical evidence, not deployment receipts. See [deployment evidence](docs/DEPLOYMENT_EVIDENCE.md).

Approved live target: Worker `factory-pilot` in `dev1`, custom domain `factory-pilot.amitk.life`, GitHub Actions sole writer. `workers_dev` and preview URLs are disabled; $0 incremental target. Retain the deployed resources and release evidence. Repository cleanup removes completed branches/worktrees; resource teardown requires its own authorization.
