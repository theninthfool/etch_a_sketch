// Initial Setup
let color = '';
let canvas = document.querySelector("#canvas");
let size = 16;
createGrid(size);
// --Initial Setup




// Buttons
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


function chooseColor(color) {
    let cells = Array.from(document.querySelectorAll(".cell"));
    let randomColor = chooseRandomColor();
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mouseover', function() {
            if (color === "Eraser") {
                this.style.background = "none";
            } else if (color === "Random") {
                this.style.backgroundColor = randomColor;
            } else if (color === "Rainbow") {
                this.style.backgroundColor = chooseRandomColor();
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