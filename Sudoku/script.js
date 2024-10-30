let container = document.getElementById('container');
let row = 0;

for(let i = 0; i<9; i++){
    let subContainer = document.getElementById(`sub-container${i+1}`);
    row++;
    for(let j = 1; j<10; j++){
        let input = document.createElement('input');
        input.id = `${j}${row}`;
        input.placeholder = `${j}${row}`;
        subContainer.appendChild(input);
    }
}

// Generating Random values

let i = 0,j=0;

const rows = [];
for(let i = 0; i < 9; i++){
    rows[i] = [];
    for(let j=0; j<9; j++){
        rows[i][j] = document.getElementById(`${j+1}${i+1}`);
    }
}

console.log(rows);

let checkRow = [
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9]
]

function genRan(blockIndex){
    if(checkRow[blockIndex] != null){
        let randomIndex = Math.floor(Math.random()*checkRow[blockIndex].length);
        let ran = checkRow[blockIndex][randomIndex];
        checkRow[blockIndex].splice(randomIndex,1);
        return ran;
    }
}

for(let i=0; i<9; i++){
    for(let j=0; j<9; j++){
        rows[i][j].value = genRan(i);
    }
}