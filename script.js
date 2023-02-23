const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("mouseenter", () => {
    console.log();
    cell.style.border = "3px solid #e6e8e1";
  });

  cell.addEventListener("mouseleave", () => {
    cell.style.border = "";
  });

  cell.addEventListener("click", () => {
      cell.classList.toggle("on");
        if (click === 2) {
           js 
        }
    console.log("click");
  });
});
