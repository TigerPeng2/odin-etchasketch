let mainContainer = document.querySelector('.main-container');
let resizeButton = document.querySelector('.resize-button');
let cellNumInput = document.querySelector('.cellnum-input');

colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
colorIndex = 0;

let numCells = 16;

generateGrid(16);
resizeGrid();

window.addEventListener("resize", resizeGrid);

resizeButton.addEventListener("click", () => {
    let newNumCells = Number(cellNumInput.value);
    if (newNumCells % 1 != 0 || newNumCells < 1 || newNumCells > 100) {
        alert("Please enter a valid number of grid cells. Valid numbers are between 1 and 100.")
    } else {
        numCells = newNumCells;
        generateGrid(numCells);
    }
})

function generateGrid(numCells) {
    // Clear all children of the main grid
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.lastChild);
    }

    // Refill the children
    for (let i = 0; i < numCells; i++) {
        let gridrow = document.createElement('div');
        for (let j = 0; j < numCells; j++) {
            let gridcell = document.createElement('div');
            gridcell.classList.add('grid-cell');
            gridcell.addEventListener('mouseover', function() {setColor(gridcell)});
            gridrow.appendChild(gridcell);
        }
    
        gridrow.classList.add('grid-row');
        mainContainer.appendChild(gridrow);
    }
}

function getRows() {
    return document.querySelectorAll('.grid-row');
}

function getCells() {
    return document.querySelectorAll('.grid-cell');
}

function resizeGrid() {
    let height = document.documentElement.clientHeight / 1.5;
    let width = document.documentElement.clientWidth / 1.5;

    let dim = Math.min(height, width);
    console.log(dim);
    dim = Math.floor(dim / numCells) * numCells;
    mainContainer.style.height = dim + "px";
    mainContainer.style.width = dim + "px";

    let cellSize = dim / numCells;
    console.log("CellSize: %d", cellSize);

    let cells = getCells();
    let gridrows = getRows();
    
    for (const cell of cells) {
        cell.style.width, cell.style.height = cellSize + "px";
    }

    for (const gridrow of gridrows) {
        gridrow.style.width = dim + "px";
    }
}

function setColor(cell) {
    cell.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

