const images = [
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
let cellFront = document.querySelector(".cell_front")

startBtn.addEventListener("click", () => {
    grid.innerHTML=""
    startGame()
})

function startGame() {
  
    let time = 0;
    let click = 0;
    
    images.forEach((img) => {
     
      let li = document.createElement("li");
      let element = document.createElement("img");
      element.src = "./images/" + img;
      grid.append(li);
      li.append(element);
      element.classList = "cell_img";
      element.style.visibility="hidden"
      li.classList = "cell_front";

      let cellBack = document.createElement("img");
      cellBack.src = "./images/cell-background.png"

      li.append(cellBack);
      cellBack.classList = "cell_back";



      let randomPos = Math.floor(Math.random() * 24);
      li.style.order = randomPos;

      li.addEventListener("mouseenter", () => {
        li.style.border = "2px solid #FFFFFE";
      });
      li.addEventListener("mouseleave", () => {
        li.style.border = "";
      });
      

      li.addEventListener("click", (el) => {
            
            cellFront.style.visibility="visible"
      
      })

    });
  ;
}

const startGame = () => {
    state.gameStarted = true
    selectors.start.classList.add('disabled')

    state.loop = setInterval(() => {
        state.totalTime++

        selectors.moves.innerText = `${state.totalFlips} moves`
        selectors.timer.innerText = `time: ${state.totalTime} sec`
    }, 1000)
}


startGame();






// const cells = document.querySelectorAll(".cell");

// const game = [];

// const generateGame = () => [];

// cells.forEach((cell) => {
//   cell.addEventListener("mouseenter", () => {
//     cell.style.border = "2px solid #FFFFFE";
//   });

//   cell.addEventListener("mouseleave", () => {
//     cell.style.border = "";
//   });

//   cell.addEventListener("click", () => {
//       cell.classList.toggle("on");

//     console.log("click");
//   });
// });
