const OPEN = "open";
const panelContainer = document.querySelector(".gallery__wrapper");
const panel = document.querySelector(".panel");

panelContainer.addEventListener("click", (e) => {
  e.target.closest(".panel").classList.toggle(OPEN);
});
