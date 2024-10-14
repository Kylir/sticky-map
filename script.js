const draggable = document.getElementById("draggable");

let isDragging = false;
let offsetX, offsetY;

draggable.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - draggable.offsetLeft;
  offsetY = e.clientY - draggable.offsetTop;
  draggable.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;
    draggable.style.left = `${x}px`;
    draggable.style.top = `${y}px`;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  draggable.style.cursor = "grab";
});
