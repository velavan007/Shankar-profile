const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav nav");
menu.addEventListener("click", () => nav.classList.toggle("open"));

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});
