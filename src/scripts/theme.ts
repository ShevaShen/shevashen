const button = document.querySelector<HTMLButtonElement>(".theme-toggle");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
const isDark = () =>
  document.documentElement.dataset.theme
    ? document.documentElement.dataset.theme === "dark"
    : systemTheme.matches;
const syncButton = () => button?.setAttribute("aria-pressed", String(isDark()));
if (button) {
  button.hidden = false;
  syncButton();
  button.addEventListener("click", () => {
    const theme = isDark() ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("sheva-theme", theme);
    } catch {}
    syncButton();
  });
  systemTheme.addEventListener("change", syncButton);
  window.addEventListener("storage", (event) => {
    if (event.key !== "sheva-theme" && event.key !== null) return;
    if (event.newValue === "light" || event.newValue === "dark")
      document.documentElement.dataset.theme = event.newValue;
    else delete document.documentElement.dataset.theme;
    syncButton();
  });
}
