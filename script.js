function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    console.log("Menu:", menu); 
    console.log("Icon:", icon);
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }