const services = [
  {
    name: "Edge gateway",
    kind: "Request routing",
    icon: "↗",
    region: "east",
    latency: 24,
  },
  {
    name: "Identity service",
    kind: "Session management",
    icon: "◇",
    region: "east",
    latency: 38,
  },
  {
    name: "Event stream",
    kind: "Message delivery",
    icon: "≋",
    region: "west",
    latency: 42,
  },
  {
    name: "Asset delivery",
    kind: "Static content",
    icon: "▦",
    region: "west",
    latency: 18,
  },
  {
    name: "Search index",
    kind: "Discovery engine",
    icon: "⌕",
    region: "east",
    latency: 56,
  },
  {
    name: "Metrics collector",
    kind: "Observability",
    icon: "▥",
    region: "west",
    latency: 47,
  },
];
const $ = (id) => document.getElementById(id);
const themeButton = $("theme-toggle");
function applyTheme(theme) {
  const dark = theme === "dark";
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  themeButton.setAttribute("aria-pressed", String(dark));
  themeButton.setAttribute(
    "aria-label",
    `Switch to ${dark ? "light" : "dark"} theme`,
  );
  $("theme-label").textContent = `${dark ? "Light" : "Dark"} theme`;
  $("theme-icon").textContent = dark ? "☀" : "☾";
}
let savedTheme;
try {
  savedTheme = localStorage.getItem("factory-pilot-theme");
} catch {
  /* Storage can be unavailable. */
}
applyTheme(
  savedTheme === "dark" || savedTheme === "light"
    ? savedTheme
    : matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
);
themeButton.addEventListener("click", () => {
  const next =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
  try {
    localStorage.setItem("factory-pilot-theme", next);
  } catch {
    /* Theme still works without persistence. */
  }
});
const sourceSha = $("release-marker").dataset.sourceSha;
$("source-sha").textContent = sourceSha.slice(0, 7);
$("source-sha").title = sourceSha;
const releaseMarker = $("release-marker").dataset.releaseMarker;
const activityEvents = [];
function renderActivity() {
  const filter = $("activity-filter").value;
  const events = activityEvents.filter((event) => filter === "all" || event.kind === filter);
  $("activity-list").replaceChildren(...events.map((event) => {
    const row = document.createElement("li");
    const icon = document.createElement("span");
    icon.className = event.kind === "release" ? "event-icon deploy" : "event-icon";
    icon.textContent = event.kind === "release" ? "◇" : "✓";
    icon.setAttribute("aria-hidden", "true");
    const detail = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = event.title;
    const body = document.createElement("p");
    body.textContent = event.body;
    const context = document.createElement("small");
    const time = document.createElement("time");
    time.dateTime = event.at.toISOString();
    time.textContent = `${event.at.toISOString().slice(0, 19).replace("T", " ")} UTC`;
    context.append(`${event.kind === "release" ? "Release metadata" : "Demo"} · `, time);
    detail.append(title, body, context);
    row.append(icon, detail);
    return row;
  }));
  $("activity-empty").hidden = events.length !== 0;
  $("activity-count").textContent = `${events.length} shown · ${activityEvents.length} retained`;
}
function recordActivity(kind, title, body) {
  activityEvents.unshift({ kind, title, body, at: new Date() });
  activityEvents.length = Math.min(activityEvents.length, 8);
  renderActivity();
}
$("activity-filter").addEventListener("change", renderActivity);
recordActivity("demo", "Demo snapshot loaded", "Six fictional services across two regions. This is illustrative data, not a cloud health observation.");
function receiptState(state, title, detail) {
  $("release-receipt").dataset.state = state;
  $("receipt-status").textContent = title;
  $("receipt-detail").textContent = detail;
  if (state !== "pending") {
    recordActivity("release", title, `${detail} Page: ${releaseMarker} · ${sourceSha}.`);
  }
}
async function checkRelease() {
  const button = $("recheck-release");
  button.disabled = true;
  receiptState("pending", "Checking release metadata…", "Comparing this page with its release receipt.");
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch("/release.json", {
      cache: "no-store",
      signal: controller.signal,
    });
    if (!response.ok) throw new Error("Release receipt unavailable");
    const receipt = await response.json();
    if (
      !receipt || Array.isArray(receipt) ||
      Object.keys(receipt).sort().join(",") !== "data,marker,pipeline,source_sha" ||
      typeof receipt.marker !== "string" || !/^factory-pilot-v[1-9][0-9]*$/.test(receipt.marker) ||
      typeof receipt.source_sha !== "string" || !/^[0-9a-f]{40}$/.test(receipt.source_sha) ||
      receipt.pipeline !== "github-actions" || receipt.data !== "fictional"
    ) {
      receiptState("unavailable", "Invalid release metadata", "The receipt has an unexpected format. Asset identity could not be confirmed; recheck or review the release run.");
    } else if (receipt.source_sha !== sourceSha || receipt.marker !== releaseMarker) {
      receiptState("mismatch", "Release metadata differs", `The receipt reports ${receipt.marker} at ${receipt.source_sha}. This page may be from an earlier release. Reload the page and recheck.`);
    } else {
      receiptState("matched", "Release metadata matches", "This page and release.json report the same version and source SHA. CI and provider deployment status are not checked here.");
    }
  } catch {
    receiptState("unavailable", "Release metadata unavailable", "The receipt could not be read within 8 seconds. Asset identity could not be confirmed; recheck or review the release run.");
  } finally {
    clearTimeout(timeout);
    button.disabled = false;
  }
}
$("recheck-release").addEventListener("click", checkRelease);
checkRelease();
function selectedServices() {
  return services.filter(
    (service) =>
      $("region").value === "all" || service.region === $("region").value,
  );
}
function renderFleet() {
  const filtered = selectedServices();
  $("services").replaceChildren(
    ...filtered.map((service) => {
      const row = document.createElement("tr");
      // Only the fixed fictional dataset is inserted, never user input.
      row.innerHTML = `<td><div class="service-name"><span class="service-icon">${service.icon}</span><div><strong>${service.name}</strong><small>${service.kind}</small></div></div></td><td><span class="region-name">${service.region === "east" ? "Aurora / East" : "Horizon / West"}</span></td><td><span class="healthy-pill"><i></i> Healthy</span></td><td class="numeric">${service.latency}<span class="ms-unit"> ms</span></td>`;
      return row;
    }),
  );
  $("healthy-count").textContent = filtered.length;
  $("healthy-total").textContent = `/ ${filtered.length}`;
  $("fleet-count").textContent = filtered.length;
  const region = $("region").value;
  $("requests").innerHTML =
    region === "all"
      ? '1.28<span class="metric-unit">M</span>'
      : `${region === "east" ? "822" : "462"}<span class="metric-unit">K</span>`;
  $("chart-total").textContent =
    region === "all" ? "1,284,602" : region === "east" ? "822,145" : "462,457";
  const latencies = filtered
    .map((service) => service.latency)
    .sort((a, b) => a - b);
  const midpoint = Math.floor(latencies.length / 2);
  const median =
    latencies.length % 2
      ? latencies[midpoint]
      : (latencies[midpoint - 1] + latencies[midpoint]) / 2;
  $("latency").textContent = median;
  // Integer cents keep the two regions consistent with the fleet total.
  const regionSpend = { east: 11720, west: 6700 };
  const spendCents =
    region === "all"
      ? regionSpend.east + regionSpend.west
      : regionSpend[region];
  $("spend").textContent = Math.floor(spendCents / 100);
  $("spend-cents").textContent =
    `.${String(spendCents % 100).padStart(2, "0")}`;
  $("health-detail").textContent =
    `Your fictional fleet is running smoothly across ${region === "all" ? "2 regions" : `the ${region} region`}.`;
  document
    .querySelectorAll("[data-region]")
    .forEach((row) =>
      row.classList.toggle(
        "region-muted",
        region !== "all" && row.dataset.region !== region,
      ),
    );
}
$("region").addEventListener("change", renderFleet);
renderFleet();
$("health-check").addEventListener("click", () => {
  const count = selectedServices().length;
  const message = `Demo check passed: ${count} of ${count} fictional services healthy. No cloud APIs called.`;
  $("demo-result").textContent = message;
  $("demo-result").classList.add("visible");
  $("check-time").textContent = "DEMO CHECK PASSED";
  const region = $("region").selectedOptions[0].textContent;
  recordActivity("demo", "Demo health check passed", `${region}: ${count} of ${count} fictional services healthy. No cloud APIs called.`);
});
function updateNavigation() {
  const links = [...document.querySelectorAll(".nav-item")];
  const current = links.find((link) => link.hash === location.hash) ?? links[0];
  links.forEach((link) => {
    link.classList.toggle("active", link === current);
    if (link === current) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  $("current-section").textContent = current.dataset.sectionLabel;
}
addEventListener("hashchange", updateNavigation);
updateNavigation();
