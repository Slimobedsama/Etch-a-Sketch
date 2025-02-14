const mainContainer = document.getElementById('main-container');
const gridContainer = document.createElement('div');
gridContainer.setAttribute('id', 'grid-container');
mainContainer.appendChild(gridContainer);

function createGrid(userInput) {
    const gridSize = parseInt(userInput);
    for(i = 0; i < (gridSize * gridSize); i++) {
        let cells = document.createElement('div');
        cells.setAttribute('class', 'cell');
        cells.style.flexBasis = 100 / gridSize + '%';
        gridContainer.appendChild(cells);
    }
}
createGrid()