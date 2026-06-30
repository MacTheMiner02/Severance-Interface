document.addEventListener('DOMContentLoaded', () => {
  const numbersGrid = document.querySelector('#numbers');

  const cellSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--cell-size"));
  const gridSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--grid-size"));
  const gridPixels = cellSize * gridSize;

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


  createGrid(-gridPixels, -gridPixels);
  createGrid(0, -gridPixels);
  createGrid(gridPixels, -gridPixels);
  createGrid(-gridPixels, 0);
  createGrid(0, 0);
  createGrid(gridPixels, 0);
  createGrid(-gridPixels, gridPixels);
  createGrid(0, gridPixels);
  createGrid(gridPixels, gridPixels);

})

