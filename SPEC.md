# Factory Pilot specification

Status: ACTIVE
Context: PERSONAL
Environment: LAB (public fictional demonstration)
Owning issue: https://github.com/kcloud1/cloud-app-factory/issues/3
Intent: intent/0001-project-bootstrap/intent.md

## Objective and requirements
Deliver a polished responsive static Cloud Operations dashboard with six fictional services, a region filter, traffic visualization, simulated spend clearly labeled fictional, a demo health-check interaction, persistent accessible light/dark theme and factory-pilot-v1 release marker bound to the exact build checkout SHA. No remote application APIs, fonts or analytics.

## Authorized
Initialize and implement kcloud1/factory-pilot in its managed Codex Cloud environment, validate without provider writes, create one cohesive reviewed feature PR and publish evidence to the factory owning issue. Approved resource targets are one factory-pilot Worker in dev1 and one factory-pilot.amitk.life domain. Only GitHub Actions may deploy; previews and workers.dev must remain false.

## Release stop gates
Before merge/release: confirm existing Actions token permissions (Worker Editor and Zone Workers Routes Write for first custom-domain provisioning), exact dev1/amitk.life resource scope and expiry; selected pilot caller access to both org secrets; protected main; fresh account/zone/Worker/DNS/domain collision and sole-writer readback. Reuse only a reviewed immutable factory workflow revision that actually permits this exact release. The current pin is no-write only and is not deployment readiness.

No token expansion, alternate credentials, AWS, backend, paid features, plan upgrade, other domains/Workers, infrastructure or native Builds writer. Target $0 incremental charges. Stop on required payment or an unresolved access/authority/validation gate. Do not bypass protected-main review or claim a successful deploy from a merge or dry-run.

## Plan
1. Initialize accepted intent and app contracts; implement isolated static assets and exact-SHA build.
2. Verify syntax, Wrangler no-write packaging, responsive rendering and the two browser behaviors in cloud preview; produce one PR and review its final diff.
3. If all release prerequisites pass, squash merge; follow the same Git-triggered run, read exact SHA/version/deployment and live HTTPS/assets; perform exactly two live business checks.
4. Publish receipt to Issue #3. Otherwise retain PR unmerged, report concrete blocker and one next action. No blind retry or replacement resource.

## Acceptance and retention
A source PR alone is partial. Completion requires merged SHA, successful Actions run/job and factory pin, Cloudflare deployment/version and traffic/route evidence, matching HTTPS release.json and assets, and two live browser PASS results. Retain the approved repository/Worker/domain; rollback to a known-good version or reviewed source revert only within existing authority. No automatic cleanup.
