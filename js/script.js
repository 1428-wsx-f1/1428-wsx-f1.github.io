const hamburgerButton = document.querySelector(".hamburger-button");
const navLinks = document.querySelector("#other-links");

hamburgerButton.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});
