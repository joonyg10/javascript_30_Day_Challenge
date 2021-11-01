const ACTIVE = "active";

const drumkit = document.querySelector(".drumkit");
const drumkitItems = drumkit.querySelectorAll("[data-key]");
const keyboard = [...drumkitItems].map((eleNode) => eleNode.dataset.key);

const audioSet = document.querySelector(".audio__set");
const audioItems = audioSet.querySelectorAll("[data-key]");

window.addEventListener("keydown", (e) => {
  const idx = keyboard.indexOf(e.key.toUpperCase());
  if (idx == -1) return;
  toggleActive(idx);
});

function toggleActive(idx) {
  const audio = audioItems[idx];
  audio.currentTime = 0;
  audio.play();

  drumkitItems[idx].classList.add(ACTIVE);
  setTimeout(() => {
    drumkitItems[idx].classList.remove(ACTIVE);
    audio.pause();
  }, 500);
}
