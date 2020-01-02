let canvas = document.querySelector("#canvas");

// determines size of the grid and creates the css variable --size
let size = 32;
document.documentElement.style.setProperty('--size', size);


// Creates Grid
for (let i = 0; i < size * size; i++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    canvas.appendChild(cell);
}