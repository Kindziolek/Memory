{/* <li class="cell"><img src="./images/cell-background.png"  */}




let grid = document.querySelector("#grid");
let startBtn = document.querySelector("#startGame")
let li = document.createElement("li");

let images = ["PM-1.png", "PM-2.png", "PM-3.png", "PM-4.png", "PM-5.png", "PM-6.png", "PM-7.png", "PM-8.png", "PM-9.png", "PM-10.png", "PM-11.png", "PM-12.png", "PM-1.png", "PM-2.png", "PM-3.png", "PM-4.png", "PM-5.png", "PM-6.png", "PM-7.png", "PM-8.png", "PM-9.png", "PM-10.png", "PM-11.png", "PM-12.png"]


function startGame() {
startBtn.addEventListener("click", () => {

    images.forEach((img) => {
        let li = document.createElement("li");
        let element = document.createElement("img");
        element.src='./images/'+img
        grid.append(li)
        li.append(element);
        li.classList="cell";
        let randomPos = Math.floor(Math.random()*24)
        li.style.order = randomPos;
        element.classList="cell_img"
    })
    
})
}
startGame()





console.log(images)

// function createCell() {
// for (let i = 0; i > 24; i++) {
//     grid.appendChild("li");
//     console.log("ll")
// }}
// createCell();















/*

generowanie 24 kart (6x4)
przypisywanie 12 obrazków w losowej kolejności x2

po kliknięciu element się obraca/odkrywa
maksymalnie można mieć odkryte dwie karty
przy kliknięciu w trzecią kartę, dwie pierwsze się zakrywają i odkrywa się trzecia
przy odkryciu dwóch takich samych kart - zostają odkryte na stałe lub usunięte
zliczanie liczby klików
mierzenie czasu od pierwszego kliknięcia

*/



const memoryGame = {
    
}






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

