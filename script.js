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
            if (color === 'Red') {
                this.style.backgroundColor = 'red';
            } else if (color === 'Blue') {
                this.style.backgroundColor = 'blue';
            } else if (color === 'Green') {
                this.style.backgroundColor = 'green';
            } else if (color === 'Orange') {
                this.style.backgroundColor = 'orange';
            } else if (color === 'Black') {
                this.style.backgroundColor = 'black';
            }
        });
    }
}



let colorButtons = Array.from(document.querySelectorAll(".colorButtons"));
for (let i = 0; i < colorButtons.length; i++) {
    colorButtons[i].addEventListener('click', function() {
        if (this.textContent === "Red") {
            console.log("red");
            chooseColor("Red");
        }
        if (this.textContent === "Blue") {
            console.log('blue')
            chooseColor("Blue");
        }
        if (this.textContent === "Green") {
            chooseColor("Green");
        }
        if (this.textContent === "Orange") {
            chooseColor("Orange");
        }
        if (this.textContent === "Black") {
            chooseColor("Black");
        }
    });
}