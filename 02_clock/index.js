const initialDeg = -90;
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const sec = document.querySelector(".second");

const getDate = () => {
  const currTime = new Date();
  const currHour = currTime.getHours();
  const currMin = currTime.getMinutes();
  const currSec = currTime.getSeconds();

  hour.style.transform = `rotate(${(currHour / 12) * 360 - 90}deg)`;
  minute.style.transform = `rotate(${(currMin / 60) * 360 - 90}deg)`;
  sec.style.transform = `rotate(${(currSec / 60) * 360 - 90}deg)`;
};

setInterval(getDate, 1000);
// window.addEventListener("close", clearInterval(id));
