// DOM SELECTORS
const mainContainer = document.getElementById('main-container');
const gridContainer = document.createElement('div');

// MANIPULATIONS
gridContainer.setAttribute('id', 'grid-container');
mainContainer.appendChild(gridContainer);

function createGrid(userInput) {
    const gridSize = parseInt(userInput);
    for(i = 0; i < (gridSize * gridSize); i++) {
        let cells = document.createElement('div');
        cells.setAttribute('class', 'cell');
        cells.style.flexBasis = 100 / gridSize + '%';
        gridContainer.appendChild(cells);

        cells.addEventListener('mouseover', ()=> {
            cells.style.backgroundColor = randomColor();
        });

        cells.addEventListener('mouseout', ()=> {
            cells.style.backgroundColor = '';
        });
    }
}
createGrid(24)

function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';

    for(i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}