# Environment

Status: PARTIAL

- Repository: public kcloud1/factory-pilot; cloud workspace /workspace/factory-pilot.
- Runtime: managed Codex Cloud. No laptop or local Codex CLI used.
- Development: Node 24, npm, locked Wrangler 4; dependency-free browser HTML/CSS/JS.
- Hosting: static assets only, one approved factory-pilot Cloudflare Worker in existing dev1; exact custom domain factory-pilot.amitk.life in amitk.life. Domain authority: Wrangler custom_domain route, no separate DNS writer.
- Release branch: protected main confirmed through GitHub branch readback. Full protection details return 403.
- Sole deploy writer: future pilot Actions caller invoking reviewed SHA-pinned factory workflow. Never native Builds or cloud-workspace Wrangler publish.
- Existing factory pin: 3959514315dbd314f55e30d34b3b8201ce8e80b3; permanently publish disabled, empty allowlist.
- Org secret names: CLOUDFLARE_API_TOKEN, CLOUDFLARE_ACCOUNT_ID. Metadata queries return 403; exact caller access not independently established.
- Existing deploy token permission/scope/expiration: UNVERIFIED. Cloud environment readiness reports no bound secrets/outbound identities. Do not conflate GitHub connector or Cloudflare connector identity with the Actions token.
- Current provider collisions/native Builds: not reverified in this task. Must establish before any Cloudflare write.
- Public content fictional; no AWS, R2, KV, D1, AI, scheduled workload or backend. $0 incremental target, no paid services. workers.dev and previews disabled.
