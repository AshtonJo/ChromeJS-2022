// 랜덤한 숫자를 얻어서 그걸로 이미지를 고르고 그 이미지를 body에 추가시켜준다.
// 즉, js에서 이미지를 만들고 html에 추가시켜준다는 뚯
const images = ["0.jpeg","1.jpeg","2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); // appendChild는 맨 밑 , prepend는 맨위에 추가