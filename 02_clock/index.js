const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const sec = document.querySelector(".second");
const digitalClock = document.querySelector(".digital__clock");

const getDate = () => {
  const currTime = new Date();
  const currHour = currTime.getHours();
  const currMin = currTime.getMinutes();
  const currSec = currTime.getSeconds();
  hour.style.transform = `rotate(${currHour * 30}deg)`;
  minute.style.transform = `rotate(${currMin * 6}deg)`;
  sec.style.transform = `rotate(${currSec * 6}deg)`;

  const meridiem = currHour >= 12 ? "PM" : "AM";
  digitalClock.innerHTML = `${setZero(currHour)} : ${setZero(
    currMin
  )} : ${setZero(currSec)} ${meridiem}`;
};
const setZero = (time) => (time < 10 ? `0${time}` : `${time}`);
setInterval(getDate, 1000);
