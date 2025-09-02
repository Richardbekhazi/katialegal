function markActive() {
  const path = location.pathname.replace(/index\.html$/, "");
  document.querySelectorAll(".nav a").forEach(a => {
    const href = a.getAttribute("href").replace(/index\.html$/, "");
    if (href === path) a.classList.add("active");
  });
}

document.addEventListener("includes:loaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  markActive();
});
