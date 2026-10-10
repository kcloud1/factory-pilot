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
  $("latency").textContent =
    region === "west" ? "47" : region === "east" ? "38" : "42";
  $("spend").textContent =
    region === "all" ? "184" : region === "east" ? "117" : "67";
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
  const event = document.createElement("li");
  const icon = document.createElement("span");
  icon.className = "event-icon";
  icon.textContent = "✓";
  const detail = document.createElement("div");
  const title = document.createElement("strong");
  title.textContent = "Demo health check passed";
  const body = document.createElement("p");
  body.textContent = `${count} of ${count} fictional services healthy`;
  const time = document.createElement("small");
  time.textContent = "Just now · Demo";
  detail.append(title, body, time);
  event.append(icon, detail);
  $("activity-list").prepend(event);
  while ($("activity-list").children.length > 3)
    $("activity-list").lastElementChild.remove();
});
document.querySelectorAll(".nav-item").forEach((link) =>
  link.addEventListener("click", () => {
    document
      .querySelectorAll(".nav-item")
      .forEach((item) => item.classList.toggle("active", item === link));
  }),
);
