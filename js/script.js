//Event listeners
document.querySelector('#a1').addEventListener('click', ()=>{squareClick('#a1')})
document.querySelector('#a2').addEventListener('click', ()=>{squareClick('#a2')})
document.querySelector('#a3').addEventListener('click', ()=>{squareClick('#a3')})
document.querySelector('#b1').addEventListener('click', ()=>{squareClick('#b1')})
document.querySelector('#b2').addEventListener('click', ()=>{squareClick('#b2')})
document.querySelector('#b3').addEventListener('click', ()=>{squareClick('#b3')})
document.querySelector('#c1').addEventListener('click', ()=>{squareClick('#c1')})
document.querySelector('#c2').addEventListener('click', ()=>{squareClick('#c2')})
document.querySelector('#c3').addEventListener('click', ()=>{squareClick('#c3')})

function squareClick(squareClass){
if(currPlayer === 'X'){
 document.querySelector(squareClass).classList.add('playerX')
  //(squareClass / a1) =  'X'
} else {
 document.querySelector(squareClass).classList.add('playerO')
}   
  nextPlayerMove()
}

//a1 = 'X'


//Alternate clicking system
//Victory condition system
  
//.addEventListener('click', xo)
let currPlayer = 'X'
function xo(){
  nextPlayerMove()
  if (currPlayer === 'X'){
    document.querySelector('.x').classList.toggle('hidden')
  } else {
    document.querySelector('.o').classList.toggle('hidden')
  }
}

//Ability to reset the game
//Score keeping

// Next Player's Turn
function nextPlayerMove(){
 if(currPlayer === "X") {
   currPlayer = "O"
 }else{
   currPlayer = "X"
 }
}

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


// messages about reults 
// const winningMessage = () => `Player ${currPlayer} has won!`;
// const drawMessage = () => `Game ended in a draw!`;
// const currentPlayerTurn = () => `It's ${currPlayer}'s turn`;