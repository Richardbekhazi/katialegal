function markActive() {
  // Normalize current path and link targets
  let path = location.pathname;
  if (path === "" || path === "/") path = "/";            // Home
  path = path.replace(/index\.html$/, "");

  document.querySelectorAll(".nav a").forEach(a => {
    let href = a.getAttribute("href") || "";
    href = href.replace(/index\.html$/, "");
    if (href === "") href = "/";                           // treat empty as Home
    if (href === path) a.classList.add("active");
  });
}

document.addEventListener("includes:loaded", () => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
  markActive();
});
