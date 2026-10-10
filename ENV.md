# Environment

Status: READY (v4 live-proven; completed product scopes closed)

- Repository: public kcloud1/factory-pilot; cloud workspace /workspace/factory-pilot.
- Application development: existing managed Codex Cloud environment reused throughout the pilot; no new environment or credentials.
- M9 Codex Cloud startup: [project-owned guide](docs/CLOUD_SETUP.md); existing environment, Node 24, lockfile and repo scripts only. Deployment remains GitHub Actions-only.
- Development: Node 24, npm, locked Wrangler 4; dependency-free browser HTML/CSS/JS.
- Hosting: static assets only, one approved factory-pilot Cloudflare Worker in existing dev1; exact custom domain factory-pilot.amitk.life in amitk.life. Domain authority: Wrangler custom_domain route, no separate DNS writer.
- Release branch: protected main confirmed through GitHub branch readback. Full protection details return 403.
- Sole deploy writer: pilot Actions caller invoking the reviewed SHA-pinned factory publisher. Never native Builds or cloud-workspace Wrangler publish.
- Reviewed publisher pin: d60d213b3fa77510deb29b084b0efa802c7c16a4 (factory PR #7 merged after security review PASS at d6feb88). M2 remains permanently no-write.
- Org secret names: CLOUDFLARE_API_TOKEN, CLOUDFLARE_ACCOUNT_ID. Owner confirms both saved and selected for exactly kcloud1/cloud-app-factory and kcloud1/factory-pilot. Org metadata API returns 403; v4 Actions run 38093169503 proved runtime access. Secret selection/policy is not independently inferred from workspace access.
- Existing token: owner-confirmed saved, dev1 Workers Admin/Scripts Edit and nested amitk.life Routes Edit; valid 2026-10-10 to 2033-10-10. API policy not independently inspected. Actions must verify its supplied token and exact account/zone. Cloud environment identities and local CLI authentication do not prove Actions permissions.
- Latest product completion: v4 / PR #8 / [Issue #7](https://github.com/kcloud1/factory-pilot/issues/7). Its immutable receipt records source 1267993ff1405378caae9ef552faecf8484c4ea4, successful Actions run 38093169503, deployment/version at 100% traffic and two live Activity PASS results. Later documentation publication can refresh the running SHA; read /release.json and the matching Actions run for current identity.
- Public content fictional; no AWS, R2, KV, D1, AI, scheduled workload or backend. $0 incremental target, no paid services. workers.dev and previews disabled.
