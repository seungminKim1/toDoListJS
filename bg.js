const body = document.querySelector("body");

const IMAGE_COUNT = 13;

function getRandom() {
  return Math.floor(Math.random() * IMAGE_COUNT);
}

function paintImage(num) {
  const image = new Image();
  image.src = `images/${num + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function init() {
  const rndNum = getRandom();
  paintImage(rndNum);
}

init();
