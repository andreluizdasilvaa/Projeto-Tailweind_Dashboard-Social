document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.getElementById("toggleDarkMode");

  const applyTheme = (theme) => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
    toggleSwitch.checked = theme === "dark";
  };

  const savedTheme = localStorage.getItem("theme");
  const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";
  const initialTheme = savedTheme || systemPreference;

  applyTheme(initialTheme);

  toggleSwitch.addEventListener("change", () => {
    applyTheme(toggleSwitch.checked ? "dark" : "light");
  });
});
