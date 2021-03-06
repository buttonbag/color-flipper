const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const selector = (query) => document.querySelector(query);

const btn = selector('#btn');
const color = selector('.color');


btn.addEventListener('click', () => {
    // get random number between 0 - 3
    const randomNumber = getRandomNum(colors.length);
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

let getRandomNum = (num) => Math.floor(Math.random(num) * colors.length);