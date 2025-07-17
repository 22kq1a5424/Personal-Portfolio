// Typed.js animation
var typed = new Typed(".text", {
  strings: ["Software Developer", "Frontend Developer", "Python Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Hamburger Menu Toggle
const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
