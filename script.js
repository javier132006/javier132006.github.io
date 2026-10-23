(function () {
  var root = document.documentElement;
  var texts = document.querySelectorAll("[data-en]");
  var labels = document.querySelectorAll("[data-en-label]");
  var langBtn = document.getElementById("lang");
  var themeBtn = document.getElementById("theme");

  // Guardamos el español original de cada elemento (el HTML está en español).
  texts.forEach(function (el) { el.dataset.es = el.textContent.trim(); });
  labels.forEach(function (el) { el.dataset.esLabel = el.getAttribute("aria-label"); });

  function read(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function write(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* sin almacenamiento: no pasa nada */ }
  }

  function setLang(lang) {
    root.lang = lang;
    texts.forEach(function (el) {
      el.textContent = lang === "en" ? el.dataset.en : el.dataset.es;
    });
    labels.forEach(function (el) {
      el.setAttribute("aria-label", lang === "en" ? el.dataset.enLabel : el.dataset.esLabel);
    });
    langBtn.textContent = lang === "en" ? "ES" : "EN";
    langBtn.setAttribute("aria-label", lang === "en" ? "Cambiar a español" : "Switch to English");
    write("lang", lang);
  }

  function effectiveTheme() {
    var set = root.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    write("theme", theme);
  }

  langBtn.addEventListener("click", function () {
    setLang(root.lang === "en" ? "es" : "en");
  });
  themeBtn.addEventListener("click", function () {
    setTheme(effectiveTheme() === "dark" ? "light" : "dark");
  });

  var savedTheme = read("theme");
  if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);

  var savedLang = read("lang");
  if (savedLang === "en") setLang("en");
})();
