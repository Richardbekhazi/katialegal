// Simple HTML includes: <div data-include="/partials/header.html"></div>
document.addEventListener("DOMContentLoaded", async () => {
  const slots = Array.from(document.querySelectorAll("[data-include]"));
  await Promise.all(
    slots.map(async (el) => {
      const file = el.getAttribute("data-include");
      const res = await fetch(file, { cache: "no-cache" });
      el.outerHTML = res.ok ? await res.text() : `<!-- missing ${file} -->`;
    })
  );
  document.dispatchEvent(new Event("includes:loaded"));
});
