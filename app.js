 const loginForm = document.querySelector("#login-form"); // queryselector 사용시에는 대상이 id인지 명확히 하자
 const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
 
const HIDDEN_CLASSNAME = "hidden"; // 본인이 생성한 string을 반복해서 사용하게 될 경우, 변수를 만들어 저장한다.
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); 
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings();
}

function paintGreetings(username) { // 중복되는 기능 함수화
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit",onLoginSubmit); // submit은 엔터를 누르거나 버튼을 클릭할 때 발생

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) { // savedUsername 값이 null 이라면 form의 hidden class명을 지워준다.
    loginForm.classList.remove(HIDDEN_CLASSNAME);// show the form
} else {
    paintGreetings(savedUsername); // show the greetings(h1)
}

