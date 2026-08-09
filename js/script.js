// ===== ТЕМНА ТЕМА =====
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Перевіряємо збережену тему
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙";
  }
});

// ===== БУРГЕР-МЕНЮ =====
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// ===== ЗАКРИТТЯ МЕНЮ ПРИ КЛІКІ НА ПОСИЛАННЯ =====
document.querySelectorAll(".nav__list a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

// ===== АНІМАЦІЯ ПРИ ЗАВАНТАЖЕННІ =====
document.addEventListener("DOMContentLoaded", () => {
  console.log("🌿 GreenGuide завантажено!");
});
