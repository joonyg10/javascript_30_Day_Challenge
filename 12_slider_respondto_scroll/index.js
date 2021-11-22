const SLIDEIN = "slide-in";
const body = document.querySelector("body");
const main = document.querySelector("main");
const images = document.querySelectorAll("img");
const scrollAnchorsLG = [700, 1400, 2100, 2800];
const scrollAnchorSM = [380, 1960, 3170, 4320];

window.addEventListener("scroll", (e) => {
  console.log("scrolling window", e.target.scrollingElement.scrollTop);
  const currHeight = e.target.scrollingElement.scrollTop;
  if (currHeight > scrollAnchorsLG[0]) images[0].classList.add(SLIDEIN);
  if (currHeight > scrollAnchorsLG[1]) images[1].classList.add(SLIDEIN);
  if (currHeight > scrollAnchorsLG[2]) images[2].classList.add(SLIDEIN);
  if (currHeight > scrollAnchorsLG[3]) images[3].classList.add(SLIDEIN);
});

const mediaQuery = window.matchMedia("(min-width: 768px)");
console.log(mediaQuery);
