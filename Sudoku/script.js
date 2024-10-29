let container = document.getElementById('container');

// for(let i=0; i<81; i++){
    
//     let button = document.createElement('input');
//     button.id = i;
//     container.appendChild(button);
// }

for(let i = 0; i<9; i++){
    let subContainer = document.getElementById(`sub-container${i+1}`);
    for(let j = 0; j<9; j++){
        let button = document.createElement('input');
        button.id = j;
        subContainer.appendChild(button);
    }
}