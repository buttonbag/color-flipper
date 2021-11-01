const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const selector = (query) => document.querySelector(query);

const btn = selector('#btn');
const color = selector('.color');


btn.addEventListener('click', () => {
    // get random number between 0 - 3
    const randomNumber = getRandomNum(3);
    console.log(randomNumber);
    document.body.style.backgroundColor = hex[randomNumber];
    color.textContent = hex[randomNumber];
});

let getRandomNum = () => Math.floor(Math.random(3) * hex.length);