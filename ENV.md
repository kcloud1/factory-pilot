# Environment

Status: PARTIAL

- Repository: public kcloud1/factory-pilot; cloud workspace /workspace/factory-pilot.
- Application development: managed Codex Cloud. The existing Codex CLI session performs only the authorized factory publisher integration and release reconciliation.
- Development: Node 24, npm, locked Wrangler 4; dependency-free browser HTML/CSS/JS.
- Hosting: static assets only, one approved factory-pilot Cloudflare Worker in existing dev1; exact custom domain factory-pilot.amitk.life in amitk.life. Domain authority: Wrangler custom_domain route, no separate DNS writer.
- Release branch: protected main confirmed through GitHub branch readback. Full protection details return 403.
- Sole deploy writer: future pilot Actions caller invoking reviewed SHA-pinned factory workflow. Never native Builds or cloud-workspace Wrangler publish.
- Reviewed publisher pin: d60d213b3fa77510deb29b084b0efa802c7c16a4 (factory PR #7 merged after security review PASS at d6feb88). M2 remains permanently no-write.
- Org secret names: CLOUDFLARE_API_TOKEN, CLOUDFLARE_ACCOUNT_ID. Owner confirms both saved and selected for exactly kcloud1/cloud-app-factory and kcloud1/factory-pilot. Org metadata API returns 403; runtime access still requires Actions proof.
- Existing token: owner-confirmed saved, dev1 Workers Admin/Scripts Edit and nested amitk.life Routes Edit; valid 2026-10-10 to 2033-10-10. API policy not independently inspected. Actions must verify its supplied token and exact account/zone. Cloud environment identities and local CLI authentication do not prove Actions permissions.
- Current provider collisions/native Builds: not reverified; local Wrangler is unauthenticated. Fresh readback required before pilot merge, then repeated in isolated Actions deployment job.
- Public content fictional; no AWS, R2, KV, D1, AI, scheduled workload or backend. $0 incremental target, no paid services. workers.dev and previews disabled.
