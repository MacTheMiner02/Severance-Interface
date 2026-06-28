const numbersGrid = document.querySelector("#numbers");

for (let i = 0; i < 10000; i++) {
    const item = document.createElement("div");
    const number = Math.floor(Math.random() * 10)
    item.classList.add("number");
    item.textContent = number;
    numbersGrid.appendChild(item);
}