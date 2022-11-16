const clock = document.querySelector("h2#clock"); // document.getElementById("clock") 도 사용가능.

function getClock() {
    const date = new Date(); // Date Object는 호출하는 당시의 현재 날짜랑 시간을 알려준다.
    const hours = String(date.getHours()).padStart(2,"0"); // 앞에 0을 붙여주기 위해 padStart 사용
    const minutes = String(date.getMinutes()).padStart(2,"0"); // padStart는 문자열만 사용가능
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 시작한지 1초후에 실행되므로 바로 실행 되기 위해 처음 한번은 강제호출
setInterval(getClock,1000); // 반복시키기 위해서 setInterval 사용