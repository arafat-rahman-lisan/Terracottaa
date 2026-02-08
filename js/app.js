// Simple, static-site friendly animation + keyboard nav
document.addEventListener("DOMContentLoaded", () => {
  const anims = document.querySelectorAll("[data-animate]");
  // stagger
  anims.forEach((el, i) => {
    setTimeout(() => el.classList.add("enter"), 90 + i * 90);
  });

  // keyboard navigation (left/right)
  const prev = document.querySelector("[data-prev]");
  const next = document.querySelector("[data-next]");

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" && prev) window.location.href = prev.getAttribute("href");
    if (e.key === "ArrowRight" && next) window.location.href = next.getAttribute("href");
  });
});
