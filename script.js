let canvas = document.querySelector("#canvas");
let size = 16;
createGrid(size);



// let cells = Array.from(document.querySelectorAll(".cell"));
// for (let i = 0; i < cells.length; i++) {
//     cells[i].addEventListener('mouseover', function() {
//         this.classList.add('color');
//     });
// }




//the button deletes the old grid and creates new one
let input = document.querySelector('#sizeInput')
let button = document.querySelector("#sizeButton")
button.addEventListener('click', function() {
    size = Number(input.value);
    deleteGrid();
    createGrid(size);
});

function createGrid(size) {
    document.documentElement.style.setProperty('--size', size);
    for (let i = 0; i < size * size; i++) {
        let newCell = document.createElement("div");
        newCell.classList.add('cell');
        canvas.appendChild(newCell);
    }
    let cells = Array.from(document.querySelectorAll(".cell"));
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mouseover', function() {
            this.classList.add('orange');
        });
    }
}

function deleteGrid() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}