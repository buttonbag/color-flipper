const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const selector = (query) => document.querySelector(query);

const btn = selector('#btn');
const color = selector('.color');


btn.addEventListener('click', () => {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNum()];
    }

    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});

const getRandomNum = () => Math.floor(Math.random() * hex.length);