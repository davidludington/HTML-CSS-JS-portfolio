function toggleMenu() {
  const menu = document.getElementById("menuLinks");
  const icon = document.querySelector(".hamburger-icon");
  if (menu) menu.classList.toggle("open");
  if (icon) icon.classList.toggle("open");
}

document.addEventListener("click", function (event) {
  const menu = document.getElementById("menuLinks");
  const icon = document.querySelector(".hamburger-icon");
  const hamburgerNav = document.querySelector("#hamburger-nav .hamburger-menu");
  
  if (menu && icon && hamburgerNav && !hamburgerNav.contains(event.target)) {
    menu.classList.remove("open");
    icon.classList.remove("open");
  }
});