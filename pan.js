let isDragging = false;
let startX, startY;
let currentX = 0, currentY = 0;
let dx = 0, dy = 0;

numbersGrid.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
});

numbersGrid.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    dx = (e.clientX - startX) / 2;
    dy = (e.clientY - startY) / 2;
    numbersGrid.style.transform = `translate(${currentX + dx}px, ${currentY + dy}px)`;
});

numbersGrid.addEventListener("mouseup", (e) => {
    isDragging = false;
    currentX += dx;
    currentY += dy;
});