const js = document.querySelector("span");
const perspective = document.querySelector("#perspective");
const blur = document.querySelector("#blur");
const color = document.querySelector("#color");
const imgContainer = document.querySelector(".city__container");
const cityImg = document.querySelector("#city");

perspective.addEventListener("input", (e) => {
  cityImg.style.transform = `perspective(100px) translateZ(-${e.target.value}px)`;
});

blur.addEventListener("input", (e) => {
  cityImg.style.filter = `blur(${e.target.value}px)`;
});

color.addEventListener("input", (e) => {
  js.style.color = e.target.value;
  imgContainer.style.boxShadow = `0px 0px 10px 20px ${e.target.value}`;
});
