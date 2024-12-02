let player = 'X';
let game = document.getElementById('game');
let boxs = Array.from(document.querySelectorAll('.box'));
let availableBox = ["0","1","2","3","4","5","6","7","8"];
let winingPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];
let winnerCard = document.getElementById('winner-card');
let winner = document.getElementById('winner');
let resetButton = document.getElementById('reset');
const scoreX = document.getElementById('playerX');
const scoreY = document.getElementById('playerY');

if(!localStorage.getItem('x-score') || !localStorage.getItem('y-score')){
    localStorage.setItem('x-score',parseInt(0))
    localStorage.setItem('y-score',parseInt(0))
}

let score = {
    X : localStorage.getItem('x-score'),
    Y : localStorage.getItem('y-score')
}

scoreX.innerText = "X : " + score.X
scoreY.innerText = "Y : " + score.Y

document.getElementById('score-card').addEventListener('click',()=>{
    localStorage.setItem('x-score',0)
    localStorage.setItem('y-score',0)
    score.X = 0
    score.Y = 0
    scoreX.innerText = "X : " + score.X
    scoreY.innerText = "Y : " + score.Y
})

function displayWinner(wonPlayer){
    winnerCard.style.display = "flex";
    winner.style.display = "flex";
    winner.innerHTML = `Congratulations Player <br> "${wonPlayer}"`;
    console.log(winner, wonPlayer);
    if(wonPlayer == "None"){
        winner.style.paddingTop = "2.5rem";
        winner.innerText = "It's a Tie";
    }
    resetButton.style.display = "flex";
}

let mode  = document.getElementById('player');
mode.innerText = localStorage.getItem('mode') ? localStorage.getItem('mode') : "Single Player"
mode.onclick = () => {
    mode.innerText = mode.innerText == "Single Player" ? "Multi Player" : "Single Player";
    localStorage.setItem('mode',mode.innerText)
}

function removeBox(index){
    availableBox.splice(availableBox.indexOf(index),1);    
}

function randomBoxSelector(){
    let randomChoice = document.getElementById(availableBox[Math.floor(Math.random()*availableBox.length)]);
    randomChoice.value = player;
    randomChoice.classList.add(player);
    removeBox(randomChoice.id);
    player = 'X';
}

function checkWinner(){
    if(
        boxs[winingPattern[0][0]].classList.contains('X') && boxs[winingPattern[0][1]].classList.contains('X') && boxs[winingPattern[0][2]].classList.contains('X')
        ||
        boxs[winingPattern[1][0]].classList.contains('X') && boxs[winingPattern[1][1]].classList.contains('X') && boxs[winingPattern[1][2]].classList.contains('X')
        ||
        boxs[winingPattern[2][0]].classList.contains('X') && boxs[winingPattern[2][1]].classList.contains('X') && boxs[winingPattern[2][2]].classList.contains('X')
        ||
        boxs[winingPattern[3][0]].classList.contains('X') && boxs[winingPattern[3][1]].classList.contains('X') && boxs[winingPattern[3][2]].classList.contains('X')
        ||
        boxs[winingPattern[4][0]].classList.contains('X') && boxs[winingPattern[4][1]].classList.contains('X') && boxs[winingPattern[4][2]].classList.contains('X')
        ||
        boxs[winingPattern[5][0]].classList.contains('X') && boxs[winingPattern[5][1]].classList.contains('X') && boxs[winingPattern[5][2]].classList.contains('X')
        ||
        boxs[winingPattern[6][0]].classList.contains('X') && boxs[winingPattern[6][1]].classList.contains('X') && boxs[winingPattern[6][2]].classList.contains('X')
        ||
        boxs[winingPattern[7][0]].classList.contains('X') && boxs[winingPattern[7][1]].classList.contains('X') && boxs[winingPattern[7][2]].classList.contains('X')
    ){
        displayWinner("X");
        return "x";
    } else if(
        boxs[winingPattern[0][0]].classList.contains('O') && boxs[winingPattern[0][1]].classList.contains('O') && boxs[winingPattern[0][2]].classList.contains('O')
        ||
        boxs[winingPattern[1][0]].classList.contains('O') && boxs[winingPattern[1][1]].classList.contains('O') && boxs[winingPattern[1][2]].classList.contains('O')
        ||
        boxs[winingPattern[2][0]].classList.contains('O') && boxs[winingPattern[2][1]].classList.contains('O') && boxs[winingPattern[2][2]].classList.contains('O')
        ||
        boxs[winingPattern[3][0]].classList.contains('O') && boxs[winingPattern[3][1]].classList.contains('O') && boxs[winingPattern[3][2]].classList.contains('O')
        ||
        boxs[winingPattern[4][0]].classList.contains('O') && boxs[winingPattern[4][1]].classList.contains('O') && boxs[winingPattern[4][2]].classList.contains('O')
        ||
        boxs[winingPattern[5][0]].classList.contains('O') && boxs[winingPattern[5][1]].classList.contains('O') && boxs[winingPattern[5][2]].classList.contains('O')
        ||
        boxs[winingPattern[6][0]].classList.contains('O') && boxs[winingPattern[6][1]].classList.contains('O') && boxs[winingPattern[6][2]].classList.contains('O')
        ||
        boxs[winingPattern[7][0]].classList.contains('O') && boxs[winingPattern[7][1]].classList.contains('O') && boxs[winingPattern[7][2]].classList.contains('O')
    ){
        displayWinner("O");
        return "y";
    }
    else{
        return false;
    }
}

boxs.forEach(box=>{
    box.addEventListener('click',()=>{
        if(availableBox.includes(box.id)){
            box.classList.add(player);
            box.value = player;
            removeBox(box.id);
            player = player == 'X'?'O':'X';

            
            // Automate
            if(mode.innerText == "Single Player"){
                if(player == "O" && availableBox.length != 0 && checkWinner() != true){
                    randomBoxSelector();
                }
            }
            
            let returnValue =  checkWinner();

            if(returnValue == "x"){
                score.X++
                localStorage.setItem('x-score',score.X)
            } else if(returnValue == "y") {
                score.Y++
                localStorage.setItem('y-score',score.Y)
            }
            
            if(availableBox.length == 0 && !returnValue){
                displayWinner("None");
            }
        }
    })
})