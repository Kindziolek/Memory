const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("mouseenter", () => {
    console.log();
    cell.style.border = "2px solid #FFFFFE";
  });

  cell.addEventListener("mouseleave", () => {
    cell.style.border = "";
  });

  cell.addEventListener("click", () => {
      cell.classList.toggle("on");
        if (click === 2) {
           
        }
    console.log("click");
  });
});

// function tableCreate() {
// for (i = 0; i < 13; i++)

// }
 