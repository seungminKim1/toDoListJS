const gtForm = document.querySelector(".jsGreetings__form"),
  gtInput = gtForm.querySelector("input"),
  greeting = document.querySelector(".jsGrettings__greeting");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function paintUser(user) {
  gtForm.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${user}`;
}

function saveUser(user) {
  localStorage.setItem(USER_LS, user);
}

function handleSubmit(event) {
  event.preventDefault();
  const tempUser = gtInput.value;
  paintUser(tempUser);
  saveUser(tempUser);
}

function askForName() {
  gtForm.classList.add(SHOWING_CN);
  gtForm.addEventListener("submit", handleSubmit);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintUser(currentUser);
  }
}

function init() {
  loadName();
}

init();
