const HIDDEN = "hidden";
const PLAY = "▶️";
const PAUSE = "⏸";
const SOUND = "🔉";
const MUTED = "🔇";

const video = document.querySelector("video");
const videoOffLeft = video.getBoundingClientRect().left;

const progressBar = document.querySelector(".progress");
const playBtn = document.querySelector(".play");
const audioBtn = document.querySelector(".audio-btn");
const audioRange = document.querySelector("#audio-range");
const fullScreenBtn = document.querySelector(".full__screen");

let currVolmue = audioRange.value;
let videoDuration = 0;
video.muted = true;
let frameId = 0;

const progressStatus = document.createElement("style");
document.head.appendChild(progressStatus);
// *******************************************************
// event listeners
// *******************************************************

video.addEventListener("loadedmetadata", (e) => {
  videoDuration = e.target.duration;
});
video.addEventListener("click", (e) => {
  video.paused ? video.play() : video.pause();
  changeBtnStatus("Play");
});
video.addEventListener("playing", (e) => {
  frameId = window.requestAnimationFrame(updateProgress);
  changeBtnStatus("Play");
});
video.addEventListener("ended", (e) => {
  cancelAnimationFrame(frameId);
  changeBtnStatus("Play");
});

progressBar.addEventListener("click", (e) => {
  const progress = (e.pageX - videoOffLeft) / e.target.offsetWidth;
  video.currentTime = progress * videoDuration;
  updateProgress();
});

playBtn.addEventListener("click", (e) => {
  video.paused ? video.play() : video.pause();
  changeBtnStatus("Play");
});

audioBtn.addEventListener("click", (e) => {
  if (video.muted) {
    currVolmue = audioRange.value;
    audioRange.value = 0;
  } else {
    audioRange.value = currVolmue;
  }
  video.muted = !video.muted;
  changeBtnStatus("Mute");
});

audioRange.addEventListener("input", (e) => {
  video.volume = e.target.value;
  currVolmue = video.volume;
});

fullScreenBtn.addEventListener("click", (e) => {
  video?.webkitRequestFullscreen();
});

const changeBtnStatus = (type) => {
  if (type === "Play") {
    playBtn.innerText = video.paused ? PLAY : PAUSE;
  } else {
    audioBtn.innerText = video.muted ? SOUND : MUTED;
  }
};

const updateProgress = () => {
  const currRatio = 100 - (video.currentTime / videoDuration) * 100;
  progressStatus.innerHTML = `.progress::before {
    right: ${currRatio}%
  }`;
  if (currRatio < 100) window.requestAnimationFrame(updateProgress);
};

// [X] get video duration when video loaded
// [X] progress -> update logic
// [X] play btn toggle -> toggle pause
// [X] audio btn click -> muted toggle
// [X] audio update logic
