// assets/site.js
(async function () {
  // 1) Inject header + footer
  async function inject(selector, url) {
    const el = document.querySelector(selector);
    if (!el) return;

    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return;
    el.innerHTML = await res.text();
  }

  await inject("#site-header", "partials/header.html");
  await inject("#site-footer", "partials/footer.html");

  // 2) Set Active Nav link automatically
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll('nav a[data-page]').forEach(a => {
    if (a.getAttribute("data-page") === path) a.classList.add("active");
  });
})();
