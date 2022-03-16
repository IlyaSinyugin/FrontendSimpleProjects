const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");


btn.addEventListener('click', function () {
    let randomColor = buildRandomColor();
    color.textContent = randomColor;
    document.body.style.backgroundColor = randomColor;
});

btn2.addEventListener('click', function () {
    let blackColor = '#000000';
    color.textContent = blackColor;
    document.body.style.backgroundColor = '#000000';
});

btn3.addEventListener('click', function () {
    let whiteColor = '#ffffff';
    color.textContent = whiteColor;
    document.body.style.backgroundColor = '#ffffff';
});


function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

function buildRandomColor() {
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    return hexColor;
}