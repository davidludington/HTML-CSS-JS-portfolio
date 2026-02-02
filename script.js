function toggleMenu(event) {
  if (event) event.stopPropagation();
  const menu = document.getElementById("menuLinks") || document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  if (menu) menu.classList.toggle("open");
  if (icon) icon.classList.toggle("open");
}

function toggleNavDropdown(event) {
  if (event) event.stopPropagation();
  const dropdown = document.getElementById("navDropdown");
  if (dropdown) dropdown.classList.toggle("open");
}

document.addEventListener("click", function (event) {
  const wrapper = document.querySelector(".nav-expand-wrapper");
  const dropdown = document.getElementById("navDropdown");
  if (dropdown && wrapper && !wrapper.contains(event.target)) {
    dropdown.classList.remove("open");
  }
});