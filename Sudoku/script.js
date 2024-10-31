const container = document.getElementById('container');
const subContainers = [];

// Initialize 3x3 sub-containers
for (let i = 0; i < 9; i++) {
    let subContain = document.createElement('div');
    subContain.id = `sub-container${i + 1}`;
    subContain.classList.add('sub-container');
    container.appendChild(subContain);
    subContainers.push(subContain);
}

// Set up a 9x9 grid with input fields
let rows = [];
for (let i = 0; i < 9; i++) {
    rows[i] = [];
    for (let j = 0; j < 9; j++) {
        let input = document.createElement('input');
        input.id = `${j + 1}-${i + 1}`;
        input.placeholder = `${j + 1}-${i + 1}`;
        rows[i][j] = input;
        subContainers[Math.floor(i / 3) * 3 + Math.floor(j / 3)].appendChild(input);
    }
}

// Check if placing `num` at `rows[row][col]` is valid
function isValid(row, col, num) {
    for (let i = 0; i < 9; i++) {
        if (rows[row][i].value == num || rows[i][col].value == num) return false;
    }

    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            if (rows[i][j].value == num) return false;
        }
    }
    return true;
}

// Backtracking function to fill the board
function fillBoard(row, col) {
    if (row === 9) return true; // Completed all rows
    if (col === 9) return fillBoard(row + 1, 0); // Move to the next row

    // Shuffle numbers 1-9 to create randomness
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5);
    
    for (let num of numbers) {
        if (isValid(row, col, num)) {
            rows[row][col].value = num;
            if (fillBoard(row, col + 1)) return true;
            rows[row][col].value = ''; // Undo placement if it leads to a dead end
        }
    }
    return false; // Trigger backtracking
}

// Function to remove cells to create a puzzle
function removeCells(numCellsToRemove) {
    let cellsRemoved = 0;
    while (cellsRemoved < numCellsToRemove) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);

        if (rows[row][col].value !== '') { // Check if the cell is filled
            rows[row][col].value = ''; // Remove the number to make it a puzzle
            rows[row][col].placeholder = ''; // Optional: clear placeholder if used
            cellsRemoved++;
        }
    }
}

// Generate a new randomized game
function generateSudoku(numCellsToRemove = 5) { // Adjust `numCellsToRemove` as needed
    fillBoard(0, 0); // Step 1: Fill the board completely
    removeCells(numCellsToRemove); // Step 2: Remove cells for the puzzle
}

// Run the generation function when the page loads or refreshes
generateSudoku();
