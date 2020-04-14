const clockContainer = document.querySelector(".jsClock"),
  clockTitle = clockContainer.querySelector("h1");

function checkTime(time) {
  return time < 10 ? `0${time}` : time;
}

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${checkTime(hours)}:${checkTime(minutes)}:${checkTime(
    seconds
  )}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
