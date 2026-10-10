import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";

// Stamp the exact checkout; reject an Actions context that does not match it.
const sourceSha = execFileSync("git", ["rev-parse", "HEAD"], {
  encoding: "utf8",
}).trim();
// GitHub reserves GITHUB_SHA (a merge ref on PR events). Use a custom
// expectation for the PR checkout; on releases the push SHA is authoritative.
const expectedSha = process.env.EXPECTED_SOURCE_SHA ?? process.env.GITHUB_SHA;
if (
  !/^[0-9a-f]{40}$/.test(sourceSha) ||
  (expectedSha && expectedSha !== sourceSha)
) {
  throw new Error("Build requires the exact source checkout");
}
const release = {
  marker: "factory-pilot-v1",
  source_sha: sourceSha,
  data: "fictional",
  pipeline: "github-actions",
};
await rm("dist", { recursive: true, force: true });
await mkdir("dist", { recursive: true });
await cp("public", "dist", { recursive: true });
const html = await readFile("dist/index.html", "utf8");
await writeFile(
  "dist/index.html",
  html.replaceAll("__SOURCE_SHA__", sourceSha),
);
await writeFile("dist/release.json", JSON.stringify(release, null, 2) + "\n");
console.log(`Built ${release.marker} from ${sourceSha}`);
