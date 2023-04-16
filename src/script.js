const plants = [
  "PM-1.png",
  "PM-2.png",
  "PM-3.png",
  "PM-4.png",
  "PM-5.png",
  "PM-6.png",
  "PM-7.png",
  "PM-8.png",
  "PM-9.png",
  "PM-10.png",
  "PM-11.png",
  "PM-12.png",
  "PM-1.png",
  "PM-2.png",
  "PM-3.png",
  "PM-4.png",
  "PM-5.png",
  "PM-6.png",
  "PM-7.png",
  "PM-8.png",
  //   "PM-9.png",
  //   "PM-10.png",
  //   "PM-11.png",
  //   "PM-12.png",
];

let startBtn = document.querySelector("#startGame");
let grid = document.querySelector("#grid");
let cellFront = document.querySelector(".cell_front");
let timer = document.querySelector("#timer");

startBtn.addEventListener("click", () => {
  grid.innerHTML = "";
  startGame();
});

function startGame() {
  plants
    .map((value) => ({
      value,
      random: Math.random(),
    }))
    .sort((a, b) => a.random - b.random)
    .map(({ value }) => value)
    .forEach((img) => {
      let li = document.createElement("li");
      let element = document.createElement("img");
      element.src = "./images/" + img;
      grid.append(li);
      li.append(element);
      element.classList = "cell_img";
      element.style.visibility = "hidden";
      li.classList = "cell_front";

      let cellBack = document.createElement("img");
      cellBack.src = "./images/cell-background.png";

      li.append(cellBack);
      cellBack.classList = "cell_back";

      li.addEventListener("mouseenter", () => {
        li.style.border = "2px solid #FFFFFE";
      });
      li.addEventListener("mouseleave", () => {
        li.style.border = "";
      });

      li.addEventListener("click", (el) => {
        let front = el.target.parentNode.querySelector(".cell_img");
        let back = el.target.parentNode.querySelector(".cell_back");

        if ((front.style.visibility = "hidden")) {
          front.style.visibility = "visible";
          back.style.visibility = "hidden";
          front.classList.add("cell_img_flipped");
        }
        const flipp = grid.querySelectorAll(".cell_img_flipped");

        let flippCell = flipp.length;

        console.log(flipp.length);
        if (flippCell === 2) {
          if (flipp[0].src === flipp[1].src) {
            [...flipp].map((v) => (v.parentNode.style.visibility = "hidden"));
          } else {
            grid.style.pointerEvents = "none";
            setTimeout(() => {
              [...flipp].map((v) => {
                let front = v.parentNode.querySelector(".cell_img");
                let back = v.parentNode.querySelector(".cell_back");
                back.style.visibility = "visible";
                front.style.visibility = "hidden";
                front.classList.remove("cell_img_flipped");
                grid.style.pointerEvents = "all";
              });
            }, 2000);
          }
        }
      });
    });
}

startGame();
