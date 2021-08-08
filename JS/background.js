const images = ["0.jpg", "1.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const background = document.createElement("img");
background.src = `img/${chosenImage}`;

document.body.appendChild(background);