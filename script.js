// Declaring variables

let cells = document.querySelectorAll('.cell');
let result = document.querySelector('.result');
let restart = document.querySelector('.restart');

let playerX = "X";
let playerO = "O";


// Winning Possible Combinations

let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Get the cells elements
function getComboCells(combo){
    return combo.map(index => cells[index]); 
}

function tryCombo (firstCell, secondCell, thirdCell, target){
    if (firstCell.innerText === target && secondCell.innerText === target && thirdCell.innerText === ""){
        thirdCell.innerText = playerO;
        return true;
    }
    return false;
}




