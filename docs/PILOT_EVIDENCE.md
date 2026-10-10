# Factory Pilot evidence

Owning issue: https://github.com/kcloud1/cloud-app-factory/issues/3
Status: APP_IMPLEMENTED / RELEASE_BLOCKED. This is not a deployment receipt.
Date: 2026-10-10 (Asia/Singapore)

## Actual development environment
Managed cloud environment ccarenv_b64_Y2NhcmVudl81ZGRkMDMzZjRjMjA4MTkxYWM4YmU5OTk4YmQ4NWY4Mw, connected/running with current observations, workspace /workspace/factory-pilot, Git origin kcloud1/factory-pilot. No laptop/local Codex CLI. Runtime reports no bound secrets or outbound identities; this does not describe GitHub Actions secret availability. No secret values fetched or printed.

## App verification
- Node syntax checks and exact-checkout build PASS. CI initially rejected the PR build because GitHub ignores attempts to override its reserved GITHUB_SHA (PR merge-ref SHA). Corrected workflow passes EXPECTED_SOURCE_SHA for the explicitly checked-out head; build still rejects mismatch. A negative mismatch check confirms the guard remains active.
- Wrangler 4.149.0 deploy --dry-run PASS; only seven dist asset files packaged, no backend bindings or provider write.
- Wrangler --local in cloud workspace: HTTP 200, CSP/security headers present; missing page and /AGENTS.md return 404.
- Chromium preview check 1 PASS: factory-pilot-v1, visible marker's full SHA equals release.json, demo action responds “Demo check passed: 6 of 6 fictional services healthy. No cloud APIs called.”
- Chromium preview check 2 PASS: light → dark → light; aria-label/aria-pressed reflect state, dark theme persists after reload.
- Region selection shows three matching services and changes demo response; 320, 390, 768, 1024 and 1440px layouts have no document overflow. No JavaScript errors or external app requests. Initial 320px navigation overflow fixed and rerun passed.
- Screenshots reviewed: [light](preview/light.png), [dark](preview/dark.png), [mobile](preview/mobile.png). These are cloud-workspace previews of the implementation before its commit, stamped with the then-current starter HEAD; not deployed source or live proof. Build is repeated on the committed PR revision.

No browser testing framework added to the repository. Preview checks used temporary Playwright outside the repo. Exactly two live business checks remain pending; preview PASS must not be relabeled live PASS.

## Release gates
| Gate | Observed result |
| --- | --- |
| Exact pilot authority | PASS, Issue #3 owner authorization and current implementation GO |
| Public repository / cloud task | PASS, existing pilot repo and this managed cloud workspace |
| Protected main | PASS, GitHub branches/main returns protected:true at starter SHA f3b758e354eb2983d4cde0dde8facacc46953bbd; detailed policy endpoint 403 |
| Exact caller secret selection | UNVERIFIED; org token selected-repositories and repository secret metadata endpoints return 403 Resource not accessible by integration |
| Actions deploy-token policies/scope/expiry | UNVERIFIED; no current owner/provider metadata receipt in Issue #3 |
| Factory workflow | BLOCKED; main is 3959514315dbd314f55e30d34b3b8201ce8e80b3, pinned release workflow permanently publish disabled, trusted allowlist empty |
| Current provider collisions / native Builds exclusivity | UNVERIFIED in this task; previous issue readbacks are not fresh evidence |
| Exact live HTTPS access | BLOCKED; inherited proxy returns CONNECT 403, HTTP 000 for https://factory-pilot.amitk.life/; no bypass attempted |

Caller installs the existing reviewed, full-SHA-pinned no-write release gate, explicitly mapping only the two existing named secrets on protected-main pushes. PR checks have no Cloudflare credentials. No replacement deployer, manual publish, credential expansion or factory changes are included. A future reviewed factory publishing revision must replace both pins together after prerequisites are established.

## Release receipt
- PR/source SHA/Actions verification run: recorded in the PR and Issue #3 after publication.
- Merged SHA: NONE (release gates unresolved).
- Git-triggered deployment run/job: NONE.
- Cloudflare deployment/version/traffic/route readback: NONE.
- Approved target: https://factory-pilot.amitk.life/ (live content unverified).
- Live browser check 1: NOT RUN.
- Live browser check 2: NOT RUN.
- No Cloudflare mutations, actual AWS calls, paid services, or new cloud resources by this task. Only fictional static data. Existing resources retained; no cleanup or rollback performed. No known-good pilot deployment exists yet.

## One next action
Owner records the existing Actions token's permission names, exact dev1 account/amitk.life zone scope and expiry, plus exact pilot selection for both org secrets, in Issue #3 without values. Keep this same PR unmerged while factory publish readiness and exact-host access are reconciled. Do not create or widen a token.
