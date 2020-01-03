let canvas = document.querySelector("#canvas");
let size = 16;
createGrid(size);





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
        chooseColor(this.textContent);
    });
}




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
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mouseover', function() {
            this.style.backgroundColor = color;
        });
    }
}