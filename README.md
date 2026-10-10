# Factory Pilot

A fictional Cloud Operations dashboard built in a managed Codex Cloud workspace to prove the source → reviewed PR → GitHub Actions → isolated Cloudflare Worker path. Six fictional services, regional filtering, demo health checks and a persistent light/dark theme. All operational metrics and displayed spend are simulated; no AWS or backend APIs are called.

```sh
npm ci
npm run check
npm run build
npm run dev
npm run dry-run
```

Commands run in the managed cloud workspace. `dev` uses local simulation there; `dry-run` packages without publishing. No manual deploy command is part of the approved release path. The dependency lockfile pins Wrangler. Static assets are confined to `dist/`; repository files and secrets are never included. Build stamps `release.json` and the visible release marker with the exact checkout SHA and rejects a mismatched GitHub SHA.

[Accepted intent](intent/0001-project-bootstrap/intent.md) · [Execution contract](SPEC.md) · [Environment](ENV.md) · [Owning Issue #3](https://github.com/kcloud1/cloud-app-factory/issues/3)

The caller reuses the reviewed factory release gate at immutable `3959514315dbd314f55e30d34b3b8201ce8e80b3`. That revision is permanently **publish disabled**, so its successful report cannot count as deployment. Do not merge for release until token scope/expiry, exact caller secret selection, protected main, collision/exclusivity readbacks and the factory's reviewed publish-capable workflow are established. See [pilot evidence](docs/PILOT_EVIDENCE.md).

Approved future target: [factory-pilot.amitk.life](https://factory-pilot.amitk.life/), Worker `factory-pilot` in `dev1`, GitHub Actions sole writer. `workers_dev` and preview URLs disabled, no paid features or extra infrastructure, $0 incremental target. Retain resources for evidence; cleanup needs separate authority.
