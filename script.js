const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("mouseenter", () => {
    console.log();
    cell.style.border = "3px solid black";
  });

  cell.addEventListener("mouseleave", () => {
    cell.style.border = "";
  });
});
