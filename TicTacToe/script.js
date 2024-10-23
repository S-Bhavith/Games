let player1,player2;
let choosenMode;
let modeSelector = document.getElementById('mode');

function play(choosen){
    let modes = Array.from(document.getElementsByClassName('mode'))

    console.log(choosen);
    
    if(choosen.value == "true"){
        modes[0].innerText = 'X';
        modes[1].innerText = 'O';
        modes[0].value = 'X';
        modes[1].value = 'O';
    } else{
        if(choosen.value == 'X'){
            player2 = 'O'
        } else{
            player2 = 'X';
        }
        document.getElementById('container').removeChild(modeSelector);
    }
}

