// Get all elements with the class 'sticky-note'
const stickyNotes = document.querySelectorAll(".sticky-note");

stickyNotes.forEach((stickyNote) => {
  let isDragging = false;
  let offsetX, offsetY;

  // Handle left-click drag for each sticky note
  stickyNote.addEventListener("mousedown", (e) => {
    if (e.button === 0) {
      isDragging = true;
      offsetX = e.clientX - stickyNote.offsetLeft;
      offsetY = e.clientY - stickyNote.offsetTop;
      stickyNote.style.cursor = "grabbing";
    }
  });

  // Update position while dragging
  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;
      stickyNote.style.left = `${x}px`;
      stickyNote.style.top = `${y}px`;
    }
  });

  // Stop dragging on mouse up
  document.addEventListener("mouseup", () => {
    isDragging = false;
    stickyNote.style.cursor = "grab";
  });

  // React to right-click (contextmenu event) for each sticky note
  stickyNote.addEventListener("contextmenu", (e) => {
    e.preventDefault(); // Prevent default context menu
    alert(`Right-clicked on ${stickyNote.innerText}`);
  });
});
