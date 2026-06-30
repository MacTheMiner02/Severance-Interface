function createGrid(offsetX, offsetY) {
    const numbersGrid = document.createElement("div");
    numbersGrid.classList.add("numbers-grid");

    const gridSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--grid-size"));

    numbersGrid.style.position = "absolute";
    numbersGrid.style.left = offsetX + "px";
    numbersGrid.style.top = offsetY + "px";

    for (let i = 0; i < gridSize*gridSize; i++) {
        const item = document.createElement("div");
        const number = Math.floor(Math.random() * 10)
        item.classList.add("number");
        item.textContent = number;
        numbersGrid.appendChild(item);
    }

    document.querySelector("#numbers").appendChild(numbersGrid);
}