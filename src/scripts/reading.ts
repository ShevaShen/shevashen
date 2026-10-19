const content = document.querySelector<HTMLElement>("#article-content");
const progress = document.querySelector<HTMLElement>("#reading-progress");
const links = [
  ...document.querySelectorAll<HTMLAnchorElement>(".article-toc a"),
];
const sections = links.map((link) =>
  document.getElementById(decodeURIComponent(link.hash.slice(1))),
);
if (content && progress) {
  let queued = false;
  const update = () => {
    queued = false;
    const bounds = content.getBoundingClientRect();
    const distance = Math.max(1, bounds.height - window.innerHeight);
    const fraction =
      bounds.height <= window.innerHeight
        ? bounds.bottom <= window.innerHeight
          ? 1
          : 0
        : Math.max(0, Math.min(1, -bounds.top / distance));
    progress.style.transform = `scaleX(${fraction})`;
    let active = -1;
    sections.forEach((section, i) => {
      if (section && section.getBoundingClientRect().top <= 160) active = i;
    });
    links.forEach((link, i) => {
      if (i === active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };
  const schedule = () => {
    if (!queued) {
      queued = true;
      requestAnimationFrame(update);
    }
  };
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  new ResizeObserver(schedule).observe(content);
  update();
}
// Preserve horizontal diagram formatting, with keyboard scrolling and accessible labels.
document.querySelectorAll<HTMLElement>(".prose pre").forEach((pre, i) => {
  pre.tabIndex = 0;
  pre.setAttribute("role", "region");
  pre.setAttribute("aria-label", `Code or text diagram ${i + 1}`);
});
document.querySelectorAll<HTMLTableElement>(".prose table").forEach((table) => {
  const wrapper = document.createElement("div");
  wrapper.className = "table-scroll";
  wrapper.tabIndex = 0;
  wrapper.setAttribute("role", "region");
  wrapper.setAttribute(
    "aria-label",
    "Comparison table, scroll horizontally if needed",
  );
  table.before(wrapper);
  wrapper.append(table);
});
