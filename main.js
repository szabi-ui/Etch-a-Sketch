// VARIABLES
const btns = document.querySelectorAll('.btn');
const clrInput = document.querySelector('.color');
const rangeInput = document.querySelector('.range');
const board = document.querySelector('.board');
let currentClr = '';

// EVENT LISTENERS
window.addEventListener('DOMContentLoaded', () => {
    createBoard();
});

btns.forEach(btn => {
    btn.addEventListener('click', e => {
        if(e.target.textContent === 'Rainbow') {
            console.log('roinbow your ass');
        }
        else if(e.target.textContent === 'Eraser') {
            currentClr = '#fff';
            console.log(currentClr);
        }
        else {
            rangeInput.value = 16;
            board.innerHTML = '';
            createBoard();
        }
    })
});

clrInput.addEventListener('change', e => {
    console.log(e.target.value);
});

rangeInput.addEventListener('change', e => {
    board.innerHTML = '';
    createBoard();
});

// FUNCTIONS

function createBoard() {
    rangeInput.nextElementSibling.textContent = `${rangeInput.value} x ${rangeInput.value}`;
    for(let i = 0; i < rangeInput.value; i++) {
        let row = document.createElement('div');
        row.setAttribute('class', 'row');
        board.appendChild(row);
        for(let j = 0; j < rangeInput.value; j++) {
            let cell = document.createElement('div');
            cell.setAttribute('class', 'cell');
            row.appendChild(cell);
        }
    } 
};

// SETS YEAR FOR COPYRIGHT
document.querySelector('#year').textContent = new Date().getFullYear();