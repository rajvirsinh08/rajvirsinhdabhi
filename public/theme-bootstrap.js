(function () {
  var KEY = "rajvir-portfolio-theme";
  var stored = localStorage.getItem(KEY);
  var mode =
    stored === "light" || stored === "dark"
      ? stored
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

  var dark = {
    "--color-background": "#0d1117",
    "--color-navbar": "#0f1720",
    "--color-text-heading": "#ffffff",
    "--color-text-secondary": "#A6B0A8",
    "--color-primary": "#598565",
    "--color-body": "#A6B0A8",
    "--color-heading": "#F0F2ED",
    "--color-base": "#262626",
    "--color-base2": "#1A1A1A",
    "--color-brand": "#598565",
  };

  var light = {
    "--color-background": "#F4F7F5",
    "--color-navbar": "#FFFFFF",
    "--color-text-heading": "#0F1412",
    "--color-text-secondary": "#4A5650",
    "--color-primary": "#598565",
    "--color-body": "#4A5650",
    "--color-heading": "#0F1412",
    "--color-base": "#E8EEEA",
    "--color-base2": "#F4F7F5",
    "--color-brand": "#598565",
  };

  var palette = mode === "light" ? light : dark;
  var root = document.documentElement;
  root.setAttribute("data-theme", mode);
  Object.keys(palette).forEach(function (key) {
    root.style.setProperty(key, palette[key]);
  });
})();
