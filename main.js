const nav = document.querySelector("nav ul");
const toggle = document.querySelector("nav .menu-toggle");

toggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
