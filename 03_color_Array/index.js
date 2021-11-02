const style = document.documentElement.style;
const controller = document.querySelector(".controller__wrapper");

controller.addEventListener("input", (e) => {
  style.setProperty(
    `--${e.target.dataset.property}`,
    e.target.value + `${isNaN(e.target.value) ? "" : "px"}`
  );
});
