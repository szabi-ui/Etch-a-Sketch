// VARIABLES
const btns = document.querySelectorAll('.btn');
const clrInput = document.querySelector('.color');
const rangeInput = document.querySelector('.range');
const board = document.querySelector('.board');

let clrMode = 'default';
let currentClr = '';

// USEFUL FOR DRAWUBG ONLY WHEN YOU HOVER AND CLICK 
// TO DRAW NOT ONLY ON HOVER
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// EVENT LISTENERS
window.addEventListener('DOMContentLoaded', () => {
    createBoard();
});

btns.forEach(btn => {
    btn.addEventListener('click', e => {
        if(e.target.textContent === 'Rainbow') {
            clrMode = 'rainbow';
        }
        else if(e.target.textContent === 'Eraser') {
            clrMode = 'eraser';
        }
        else {
            rangeInput.value = 16;
            board.innerHTML = '';
            createBoard();
        }
    })
});

clrInput.addEventListener('change', e => {
    clrMode = 'default';
    currentClr = e.target.value;
    
});

rangeInput.addEventListener('change', () => {
    board.innerHTML = '';
    createBoard();
});

board.addEventListener('mouseover', e => {
    if(e.target.classList.contains('cell')) {
        pickClr(e);
    }
})
board.addEventListener('mousedown', e => {
    if(e.target.classList.contains('cell')) {
        pickClr(e);
    }
})


//**********FUNCTIONS**********

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
function pickClr(e) {
    if( e.type === 'mouseover' && !mouseDown) return;
    else if(clrMode === 'rainbow') {
        let r, g, b;
        r = Math.floor(Math.random() * 257);
        g = Math.floor(Math.random() * 257);
        b = Math.floor(Math.random() * 257);
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    }
    else if(clrMode === 'eraser') {
        e.target.style.backgroundColor = '#fff';
    }
    else if(clrMode === 'default') {
        e.target.style.backgroundColor = currentClr;
    }
}

// SETS YEAR FOR COPYRIGHT
document.querySelector('#year').textContent = new Date().getFullYear();
