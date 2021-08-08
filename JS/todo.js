const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
const CHECKED_KEY = "checked"

let toDos = [];
let toDosCheck = [];

const life = [
  "Eating icecream", "Reading a book", "Cleaning my room", "Running", "Watching a movie"
];

function handleToDoSubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
  setRandomTodo();
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function saveToDosCheck() {
  localStorage.setItem(CHECKED_KEY, JSON.stringify(toDosCheck));
}

function deleteToDo(e) {
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
  saveToDos();
}

function checkToDo(e) {
  const li = e.target.parentElement;
  if (li.childNodes[0].checked === true) {
    li.classList.add("line");
    toDoList.appendChild(li);
    const newTodoCheckObj = {
      id: li.id,
      checked: li.childNodes[0].checked
    };
    toDosCheck.push(newTodoCheckObj);
    saveToDosCheck();
  }
  else {
    li.classList.remove("line");
    toDoList.prepend(li);
  }
  
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "✘";
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "checkboxInfo";
  button.addEventListener("click", deleteToDo);
  checkbox.addEventListener("click", checkToDo);
  // span.addEventListener("click", checkToDo);
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.prepend(li);
}

function setRandomTodo() {
  const randomTodo = life[Math.floor(Math.random() * life.length)]
  toDoInput.value = randomTodo;
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

const savedCheck = localStorage.getItem(CHECKED_KEY);

if (savedCheck !== null) {
  const parsedCheck = JSON.parse(savedCheck);
  toDosCheck = parsedCheck;
  parsedCheck.forEach(checkToDo);
}

// window.onload = function() {
//   console.log(toDosCheck);
//   toDosCheck.forEach(el => {
//     const check = JSON.parse(localStorage.getItem(el.checked));
//     console.log(el.checked, el.id);
//     if (check === true) {
//       el.childNodes[0].checked = true;
//     }
//   })
// }

// window.onload = function(list){
//   let list = toDos;
//   list.forEach(el => {
//       let checked = JSON.parse(localStorage.getItem(el.id));
//       document.getElementById(el.id).checked = checked;
//       console.log(el.id,el.checked);
//   });
//   list.forEach(el => {
//     localStorage.setItem(el.id, el.checked);
//     console.log(el.id,el.checked);
//     })
// }


setRandomTodo();

