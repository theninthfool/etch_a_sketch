// Initial Setup
let color = '';
let canvas = document.querySelector("#canvas");
let currentColor = document.querySelector("#currentColor");
// let size = 16;
createGrid(20, canvas);
currentColor.style.background = "Black";
setPenColor("Black");
// --Initial Setup




// Buttons
let resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', reset);

//the choose size button deletes the old grid and creates new one
let input = document.querySelector('#sizeInput')
let button = document.querySelector("#sizeButton")
button.addEventListener('click', function() {
    let size = Number(input.value);
    deleteGrid(canvas);
    createGrid(size, canvas);
    setPenColor("Black");
});

let colorButtons = Array.from(document.querySelectorAll(".colorButtons"));
for (let i = 0; i < colorButtons.length; i++) {
    colorButtons[i].addEventListener('click', function() {
        let randomColor = pickRandomColor(1);
        let red = randomRGBValue();
        let green = randomRGBValue();
        let blue = randomRGBValue();

        color = this.textContent;
        setPenColor(color, randomColor, red, green, blue);
    });
}
// --Buttons



// Functions
function createGrid(size, location) {
    if (location === canvas) {
        document.documentElement.style.setProperty('--canvasSize', size);
    } else {
        document.documentElement.style.setProperty('--currentColorSize', size);
    }
    for (let i = 0; i < size * size; i++) {
        let newCell = document.createElement("div");
        if (location === canvas) {
            newCell.classList.add('canvasCell');
        } else {
            newCell.classList.add('currentColorCell');
        }
        location.appendChild(newCell);
    }
}

function deleteGrid(location) {
    while (location.firstChild) {
        location.removeChild(location.firstChild);
    }
}

function reset() {
    deleteGrid(canvas);
    deleteGrid(currentColor);
    createGrid(20, canvas);
    setPenColor("Black");
}


function setPenColor(color, randomColor, red, green, blue) {
    deleteGrid(currentColor);
    currentColor.style.background = selectColor(color, randomColor, 1, red, green, blue);
    if (color.indexOf("Rainbow") > -1) {
        createGrid(4, currentColor);
        let currentColorCells = Array.from(document.querySelectorAll(".currentColorCell"));
        for (let i = 0; i < currentColorCells.length; i++) {
            currentColorCells[i].style.background = pickRandomColor(1);
        }
    }

    let canvasCells = Array.from(document.querySelectorAll(".canvasCell"));
    for (let i = 0; i < canvasCells.length; i++) {
        let shade = 0;
        canvasCells[i].addEventListener('mouseover', function() {
            if (color.indexOf("Shade") > -1) {
                if (shade <= 1) {
                    shade += .1;
                }
            }
            this.style.background = selectColor(color, randomColor, shade, red, green, blue);
        });
    }
}

function pickRandomColor(alpha) {
    return "rgba(" + randomRGBValue() + "," + randomRGBValue() + "," + randomRGBValue() + "," + alpha + ")";
}

function randomRGBValue() {
    return Math.floor(Math.random() * 255)
}

function selectColor(color, randomColor, shade, red, green, blue) {
    if (color === "Eraser") {
        return "none";
    } else if (color === "Random") {
        return randomColor;
    } else if (color === "Rainbow") {
        return pickRandomColor(1);
    } else if (color === "Shade") {
        return "rgba(0,0,0," + shade + ")";
    } else if (color === "Random Shade") {
        return "rgba(" + red + "," + green + "," + blue + "," + shade + ")";
    } else if (color === "Rainbow Shade") {
        return pickRandomColor(shade);
    } else {
        return color;
    }
}
// --Functions