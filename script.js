let canvas = document.querySelector("#canvas");
//creates initial grid
let size = 16;
createGrid(size);


//the button deletes the old grid and creates new one
let input = document.querySelector('#sizeInput')
let button = document.querySelector("#sizeButton")
button.addEventListener('click', function() {
    size = Number(input.value);
    deleteGrid();
    createGrid(size);
});

function createGrid(size) {
    console.log(size);
    document.documentElement.style.setProperty('--size', size);
    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        canvas.appendChild(cell);
    }
}

function deleteGrid() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}