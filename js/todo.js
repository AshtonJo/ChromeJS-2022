const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");  

const TODOS_KEY = "todos";

let toDos = []; // 입력값newTodo를 배열에 넣고 localStorage에 저장하기 위함

function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); // 클릭했던 li의 id가 있는 toDo를 지움
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id; // object에 id 부여
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText ="❌";
    button.addEventListener("click", deleteToDo); // 클릭하면 지워진다.
    li.appendChild(span);
    li.appendChild(button); 
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); // array에 있는 각각의 item에 대해서 function 실행
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); // forEach 함수는 paintToDo를 parsedToDos 배열의 요소마다 실행
}