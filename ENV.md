# Environment

Status: READY (M3 live-proven; M4 source update pending controller release)

- Repository: public kcloud1/factory-pilot; cloud workspace /workspace/factory-pilot.
- Application development: existing managed Codex Cloud environment reused for M4; no new environment or credentials.
- M9 Codex Cloud startup: [project-owned guide](docs/CLOUD_SETUP.md); existing environment, Node 24, lockfile and repo scripts only. Deployment remains GitHub Actions-only.
- Development: Node 24, npm, locked Wrangler 4; dependency-free browser HTML/CSS/JS.
- Hosting: static assets only, one approved factory-pilot Cloudflare Worker in existing dev1; exact custom domain factory-pilot.amitk.life in amitk.life. Domain authority: Wrangler custom_domain route, no separate DNS writer.
- Release branch: protected main confirmed through GitHub branch readback. Full protection details return 403.
- Sole deploy writer: pilot Actions caller invoking the reviewed SHA-pinned factory publisher. Never native Builds or cloud-workspace Wrangler publish.
- Reviewed publisher pin: d60d213b3fa77510deb29b084b0efa802c7c16a4 (factory PR #7 merged after security review PASS at d6feb88). M2 remains permanently no-write.
- Org secret names: CLOUDFLARE_API_TOKEN, CLOUDFLARE_ACCOUNT_ID. Owner confirms both saved and selected for exactly kcloud1/cloud-app-factory and kcloud1/factory-pilot. Org metadata API returns 403; M3 Actions run 38067305167 proved runtime access.
- Existing token: owner-confirmed saved, dev1 Workers Admin/Scripts Edit and nested amitk.life Routes Edit; valid 2026-10-10 to 2033-10-10. API policy not independently inspected. Actions must verify its supplied token and exact account/zone. Cloud environment identities and local CLI authentication do not prove Actions permissions.
- M3 live success: source f9834502860329026c5d321d9f73b5815302249d; Actions run 38067305167; version 9e476348-8bf1-40c1-99d4-7f9a701c0db8 at 100% traffic. Exact custom-domain and sole-writer readbacks plus two live browser cases passed per Issue #3 receipt #issuecomment-6099659025.
- M4 owning issue: https://github.com/kcloud1/cloud-app-factory/issues/4; bounded task https://github.com/kcloud1/factory-pilot/pull/1#issuecomment-6099677130. Controller owns review/merge and independent release verification. This task performs source checks only; no Cloudflare calls or browser rechecks.
- Public content fictional; no AWS, R2, KV, D1, AI, scheduled workload or backend. $0 incremental target, no paid services. workers.dev and previews disabled.
