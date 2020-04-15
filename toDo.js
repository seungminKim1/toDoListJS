const toDoForm = document.querySelector(".jsToDo__form"),
  toDoInput = toDoForm.querySelector("input"),
  toDoUL = document.querySelector(".jsToDo__toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
  const target = event.target.parentNode;
  toDoUL.removeChild(target);
  const cleanToDos = toDos.filter(function (temp) {
    return temp.id != parseInt(target.id);
  });
  toDos = cleanToDos;
  saveToDo();
}

function paintToDos(value) {
  const li = document.createElement("li");
  const delBtn = document.createElement("span");
  const toDoValue = document.createElement("span");
  const newId = toDos.length + 1;

  delBtn.innerText = "❌";
  delBtn.classList.add("delBtn");
  delBtn.addEventListener("click", deleteToDo);
  toDoValue.innerText = value;

  li.appendChild(delBtn);
  li.appendChild(toDoValue);
  li.id = newId;
  toDoUL.appendChild(li);

  const toDoObj = {
    id: newId,
    toDo: value,
  };
  toDos.push(toDoObj);
  saveToDo();
}

function saveToDo() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const inputValue = toDoInput.value;
  paintToDos(inputValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (obj) {
      paintToDos(obj.toDo);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleToDoSubmit);
}

init();
