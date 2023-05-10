const humbergBtn = document.querySelector(".humberg-menu-btn");
const menu = document.querySelector(".nav__list");
console.log(menu);
humbergBtn.addEventListener("click", () => {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
  } else {
    menu.classList.add("showMenu");
  }
  // menu.classList.toggle("showMenu");
});
