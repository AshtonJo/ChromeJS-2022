const API_KEY = "c7d980f29d5adc38ee717ed8ea05f889";

function onGeoOk(position) {
    const lat =  position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("you live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url).then(response =>response.json()).
    then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        const name = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText = data.name;
    }); // 누군가 URL로 요청. 그건 JS이고, fetch를 사용,실제로 URL에 갈 필요 없이 JS가 대신 URL을 부른것임.
}

function geoError() {
    alert("can't find you. No weather for you.");
}
 
navigator.geolocation.getCurrentPosition(onGeoOk,geoError);