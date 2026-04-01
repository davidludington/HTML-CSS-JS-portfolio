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

function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  if (lightbox && lightboxImg) {
    lightboxImg.src = src;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeLightbox();
  }
});