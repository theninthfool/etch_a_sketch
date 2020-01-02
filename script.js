let canvas = document.querySelector("#canvas");


for (let i = 0; i < 16; i++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    canvas.appendChild(cell);
}