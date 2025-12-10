document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("site-nav");
  if (!nav) return;

  const header = nav.parentElement || document.querySelector("header");
  if (!header) return;

  // Create burger button
  const btn = document.createElement("button");
  btn.className = "burger";
  btn.type = "button";
  btn.setAttribute("aria-label", "Åbn navigation");
  btn.setAttribute("aria-expanded", "false");
  btn.innerHTML =
    '<span class="burger-box"><span class="burger-inner"></span></span>';

  // Insert before nav so it appears in header
  header.insertBefore(btn, nav);

  function closeNav() {
    nav.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  }

  btn.addEventListener("click", function (e) {
    const isOpen = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(!!isOpen));
    e.stopPropagation();
  });

  // Close when clicking outside
  document.addEventListener("click", function (e) {
    if (!header.contains(e.target)) {
      closeNav();
    }
  });

  // Close on escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeNav();
  });
});
