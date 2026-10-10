# Intent: Factory Pilot

Status: ACCEPTED
Owner: Amit
Owning issue: https://github.com/kcloud1/cloud-app-factory/issues/3
Acceptance evidence: explicit owner approval recorded in #issuecomment-6097068396, resumed by #issuecomment-6097121080 and the current “GO — FACTORY PILOT | REAL CODEX CLOUD BUILD” implementation instruction.

## Originator words
“Prove Codex Cloud can build a real application, publish a GitHub PR and deploy automatically to https://factory-pilot.amitk.life/.” Build a polished fictional Cloud Operations dashboard, release marker, demo interaction and working light/dark theme.

## Outcome and users
A public, static demonstration for Amit and reviewers, built in the published pilot-bound Codex Cloud environment. One reviewed application PR, exact merged SHA, one Git-triggered deployment through the reviewed SHA-pinned factory workflow, and exactly two live browser acceptance checks.

## Scope and constraints
One public kcloud1/factory-pilot repository, one factory-pilot Worker in existing dev1, one exact factory-pilot.amitk.life custom domain. Fictional data only; no AWS, backend, extra infrastructure, paid services, token creation or credential expansion. Target $0 incremental cost. GitHub Actions is the sole writer; workers.dev and preview URLs disabled. Retain resources for evidence until separately authorized cleanup.

## Discovery and remaining uncertainty
Repository exists with the starter at f3b758e354eb2983d4cde0dde8facacc46953bbd. The current managed cloud workspace is /workspace/factory-pilot. GitHub branch readback reports main protected. Secret selection returns HTTP 403. Existing factory revision 3959514315dbd314f55e30d34b3b8201ce8e80b3 permanently disables publishing and has an empty allowlist. Actual Actions token scope/expiry, current provider collisions and native Builds exclusivity remain unverified; app implementation may proceed, release must wait.

## Success evidence and authority
Current user instruction and Issue #3 authorize implementation and a reviewed PR. Before any Cloudflare write: verify existing token permission names/account/zone scope/expiry, exact caller access to both secrets, protected main, current account/zone/collisions and a single writer. Merge only when release gates pass. Do not substitute a manual deployment.

Browser checks: (1) factory-pilot-v1 and exact source marker plus demo check result; (2) light/dark toggle, accessible state and persistence after reload. Independent HTTPS/assets and provider readback must align with the merged SHA. On a failed first live attempt, reconcile the same run before any retry. Rollback uses a reviewed source revert or approved known-good version; no rollback/cleanup on success.
