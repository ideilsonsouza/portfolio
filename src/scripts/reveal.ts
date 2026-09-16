const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");
document.documentElement.classList.add("reveal-ready");

revealItems.forEach((item) => {
  const delay = item.dataset.revealDelay;
  if (delay) item.style.setProperty("--reveal-delay", `${delay}ms`);
});

if (
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
