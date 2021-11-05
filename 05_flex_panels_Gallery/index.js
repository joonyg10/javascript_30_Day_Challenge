const OPEN = "open";
const panelContainer = document.querySelector(".gallery__wrapper");

panelContainer.addEventListener("click", (e) => {
  e.target.closest(".panel").classList.toggle(OPEN);
});
