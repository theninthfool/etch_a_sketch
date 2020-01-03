// Initial Setup
let color = '';
let canvas = document.querySelector("#canvas");
let size = 16;
createGrid(size);
// --Initial Setup




// Buttons
let resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', reset);

//the choose size button deletes the old grid and creates new one
let input = document.querySelector('#sizeInput')
let button = document.querySelector("#sizeButton")
button.addEventListener('click', function() {
    size = Number(input.value);
    deleteGrid();
    createGrid(size);
});

let colorButtons = Array.from(document.querySelectorAll(".colorButtons"));
for (let i = 0; i < colorButtons.length; i++) {
    colorButtons[i].addEventListener('click', function() {
        color = this.textContent
        chooseColor(color);
    });
}
// --Buttons



// Functions
function createGrid(size) {
    document.documentElement.style.setProperty('--size', size);
    for (let i = 0; i < size * size; i++) {
        let newCell = document.createElement("div");
        newCell.classList.add('cell');
        canvas.appendChild(newCell);
    }
    chooseColor('Black');
}

function deleteGrid() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}

function reset() {
    deleteGrid();
    createGrid(16);
}


function chooseColor(color) {
    let cells = Array.from(document.querySelectorAll(".cell"));
    let cellsObject = Object.assign({}, cells);
    let randomColor = chooseRandomColor();
    for (let i = 0; i < cells.length; i++) {
        cellsObject[i].blackShadeLevel = 0;
        cellsObject[i].blueShadeLevel = 0;
        cells[i].addEventListener('mouseover', function() {
            if (color === "Eraser") {
                this.style.background = "none";
            } else if (color === "Random") {
                this.style.backgroundColor = randomColor;
            } else if (color === "Rainbow") {
                this.style.backgroundColor = chooseRandomColor();
            } else if (color === "Shade") {
                if (cellsObject[i].blackShadeLevel < 1) {
                    cellsObject[i].blackShadeLevel += .1;
                    this.style.backgroundColor = "rgb(0,0,0," + cellsObject[i].blackShadeLevel + ")";
                } else {
                    this.style.backgroundColor = "rgb(0,0,0)";
                }

            } else if (color === "Blue Shade") {
                if (cellsObject[i].blueShadeLevel < 1) {
                    cellsObject[i].blueShadeLevel += .1;
                    this.style.backgroundColor = "rgb(0,0,255," + cellsObject[i].blueShadeLevel + ")";
                } else {
                    this.style.backgroundColor = "rgb(0,0,255)";
                }
            } else {
                this.style.backgroundColor = color;
            }
        });
    }
}

function chooseRandomColor() {
    return "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
}
// --Functions


// Each time I use the shaders, it adds another event listener, so I need to delete the old one before adding the new