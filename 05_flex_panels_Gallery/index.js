const OPEN = "open";
const panelContainer = document.querySelector(".gallery__wrapper");
const panelList = document.querySelectorAll(".panel");

panelContainer.addEventListener("click", (e) => {
  const targerEle = e.target;
  if (targerEle.nodeName === "P") return;
  targerEle.classList.toggle(OPEN);
});
