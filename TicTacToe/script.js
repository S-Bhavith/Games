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

let mode  = document.getElementById('player');
mode.onclick = () => {
    mode.innerText = mode.innerText == "Single Player" ? "Multi Player" : "Single Player";
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
        console.log("X Won!");
        return true;
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
        console.log("O Won!");
        return true;
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
                if(player == "O" && availableBox.length != 0){
                    randomBoxSelector();
                }
            }

            let returnValue =  checkWinner();
            
            if(availableBox.length == 0 && !returnValue){
                console.log("It's an Tie")
            }

            if(returnValue){
                window.location.reload();
            }
        }
    })
})