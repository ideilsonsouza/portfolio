const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const parallaxItems = Array.from(
  document.querySelectorAll<HTMLElement>("[data-parallax]")
);

if (parallaxItems.length > 0) {
  document.documentElement.classList.add("parallax-ready");
}

let framePending = false;

const clearParallax = () => {
  parallaxItems.forEach((item) => item.style.removeProperty("--parallax-y"));
};

const updateParallax = () => {
  framePending = false;
  if (reduceMotion.matches) {
    clearParallax();
    return;
  }

  const viewportCenter = window.innerHeight / 2;
  parallaxItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const speed = Number(item.dataset.parallaxSpeed ?? 0.05);
    const safeSpeed = Number.isFinite(speed) ? speed : 0.05;
    const itemCenter = rect.top + rect.height / 2;
    const offset = Math.max(
      -48,
      Math.min(48, (viewportCenter - itemCenter) * safeSpeed)
    );
    item.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
  });
};

const requestParallaxUpdate = () => {
  if (framePending) return;
  framePending = true;
  window.requestAnimationFrame(updateParallax);
};

if (parallaxItems.length > 0 && !reduceMotion.matches) {
  updateParallax();
  window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
  window.addEventListener("resize", requestParallaxUpdate, { passive: true });
}

reduceMotion.addEventListener("change", () => {
  if (reduceMotion.matches) {
    clearParallax();
    return;
  }
  updateParallax();
});
