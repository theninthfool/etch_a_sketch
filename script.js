// Initial Setup
let canvas = document.querySelector("#canvas");
let currentColorDisplay = document.querySelector("#currentColor");
let gridSizeDisplay = document.querySelector("#gridSizeDisplay");
// let isShaded = document.querySelector("#shadeTrue")
let isShaded = document.querySelector("#isShaded");
reset(20);
// --Initial Setup

// Buttons
let resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', function() {
    reset(20);
});

let input = document.querySelector('#size-input')
let sizeButton = document.querySelector("#sizeButton")
sizeButton.addEventListener('click', function(e) {
    reset(Number(input.value));
});

let blackPen = document.querySelector("#blackPen")
blackPen.addEventListener("click", function() {
    setPenColor(0, 0, 0);
});

let randomPen = document.querySelector("#randomPen")
randomPen.addEventListener('click', function() {
    setPenColor(randomRGBValue(), randomRGBValue(), randomRGBValue());
});

let rainbowPen = document.querySelector("#rainbowPen");
rainbowPen.addEventListener('click', function() {
    setPenColor(0, 0, 0, true);
});

let eraser = document.querySelector("#eraser")
eraser.addEventListener('click', function() {
    setPenColor(255, 255, 255);
});

let setRGBButton = document.querySelector("#setRGB")
let red = document.querySelector("#red")
let green = document.querySelector("#green")
let blue = document.querySelector("#blue")
setRGBButton.addEventListener("click", function() {
    setPenColor(Number(red.value), Number(green.value), Number(blue.value));
});
// --Buttons


// Functions
function setPenColor(r, g, b, rainbowed) {
    setCurrentColorDisplay(r, g, b, rainbowed);
    setCellListeners(r, g, b, rainbowed);
}

function createGrid(size, location) {
    if (location === canvas) {
        document.documentElement.style.setProperty('--canvasSize', size);
        gridSizeDisplay.textContent = size + " x " + size;
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

function reset(size) {
    deleteGrid(canvas);
    deleteGrid(currentColorDisplay);
    createGrid(size, canvas);
    setPenColor(0, 0, 0);
}

function pickColor(red, green, blue, alpha) {
    return "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
}

function randomRGBValue() {
    return Math.floor(Math.random() * 255)
}

function setCurrentColorDisplay(r, g, b, rainbowed) {
    deleteGrid(currentColorDisplay);
    if (rainbowed) {
        createGrid(3, currentColorDisplay);
        let currentColorCells = Array.from(document.querySelectorAll(".currentColorCell"));
        for (let i = 0; i < currentColorCells.length; i++) {
            currentColorCells[i].style.background = pickColor(randomRGBValue(), randomRGBValue(), randomRGBValue(), 1);
        }
    } else {
        currentColorDisplay.style.background = pickColor(r, g, b, 1);
    }
}

function setCellListeners(r, g, b, rainbowed) {
    let canvasCells = Array.from(document.querySelectorAll(".canvasCell"));
    for (let i = 0; i < canvasCells.length; i++) {
        let shade = 0;
        canvasCells[i].addEventListener('mouseover', function() {
            if (rainbowed) {
                r = randomRGBValue();
                g = randomRGBValue();
                b = randomRGBValue();
            }
            if (isShaded.checked && shade <= 1) {
                shade += .1;
            } else {
                shade = 1;
            }
            this.style.background = pickColor(r, g, b, shade);
        });
    }
}
// --Functions