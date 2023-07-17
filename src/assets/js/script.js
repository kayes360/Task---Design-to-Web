const mobileNav = document.querySelector(".mobile-menu");
const offcanvasMenu = document.querySelector(".offcanvas-menu");
const offcanvasBackdrop = document.querySelector(".offcanvas-backdrop ");
const close = document.querySelector(".close ");

mobileNav.addEventListener("click", () => {
  offcanvasMenu.classList.remove("hide");
  offcanvasMenu.classList.add("show");
  offcanvasBackdrop.classList.remove("hide");
  offcanvasBackdrop.classList.add("show");
  document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
  offcanvasMenu.classList.remove("show");
  offcanvasMenu.classList.add("hide");
  offcanvasBackdrop.classList.remove("show");
  offcanvasBackdrop.classList.add("hide");
  document.body.style.overflow = "scroll";
});
