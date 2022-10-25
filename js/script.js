let mainContainer = document.querySelector('.main-container');

let numCells = 16;

let gridrows = [];

for (let i = 0; i < numCells; i++) {
    let gridrow = document.createElement('div');
    for (let j = 0; j < numCells; j++) {
        let gridcell = document.createElement('div');
        gridcell.classList.add('grid-cell');
        gridrow.appendChild(gridcell);
    }

    gridrow.classList.add('grid-row');
    gridrows[i] = gridrow;
}

mainContainer.append(...gridrows);

let cells = document.querySelectorAll('.grid-cell');
resizeGrid();

window.addEventListener("resize", resizeGrid);

function resizeGrid() {
    let height = document.documentElement.clientHeight;
    let width = document.documentElement.clientWidth;
    console.log("Width: %d, Height: %d", width, height);

    let maxWidth = Math.min(height, width);
    let cellSize = Math.floor(maxWidth / numCells);
    console.log("CellSize: %d", cellSize);
    
    for (const cell of cells) {
        cell.style.width, cell.style.height = cellSize + "px";
    }

    for (const gridrow of gridrows) {
        gridrow.style.width = maxWidth + "px";
    }
}

