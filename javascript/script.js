// DOM SELECTORS
const numberOfGrid = document.getElementById('choice');
const label = document.querySelector('label');
const gridButton = document.getElementById('btn-1');
const clearGrid = document.getElementById('btn-2');
const mainContainer = document.getElementById('main-container');
const gridContainer = document.createElement('div');

// MANIPULATIONS
gridContainer.setAttribute('id', 'grid-container');
mainContainer.appendChild(gridContainer);

function createGrid(userInput) {
    gridContainer.innerHTML = '';
    userInput = parseInt(numberOfGrid.value);
    
    if(userInput < 1 || userInput > 100) {
        alert('Choose a number between 1 - 100');
        return;
    }

    if(userInput <= 50) {
        gridContainer.style.width = '50%';
    } else {
        gridContainer.style.width = '80%';
    }

    const gridSize = userInput;
    for(i = 0; i < (gridSize * gridSize); i++) {
        let cells = document.createElement('div');
        cells.setAttribute('class', 'cell');
        cells.style.flexBasis = 100 / gridSize + '%';
        gridContainer.appendChild(cells);

        cells.addEventListener('mouseover', ()=> {
            cells.style.backgroundColor = randomColor();
        });

        clearGrid.addEventListener('click', ()=> {
            cells.style.backgroundColor = '';
            numberOfGrid.value = '';
        });
    }
}

function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';

    for(i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

gridButton.addEventListener('click', createGrid);