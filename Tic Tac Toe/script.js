 
function beginGame(){
  for (var i = 1; i < 10; i++){
    clearBoard(i);
  }
  document.turn = "X";
  document.winner = null;
  outputMessage("Player " + document.turn + " has first move")
}

function outputMessage(message){
  document.getElementById("message").innerText = message;
}

function nextMove(cells){
  if (document.winner != null){
    outputMessage("Player " + document.turn + " already won. Click Play again!")
  }
  else if(cells.innerText == ""){
    cells.innerText = document.turn;
    changeTurn();
  }
  else{
    outputMessage("Select another square. If all Cells are filled, click Play again");
  }
}

function changeTurn(){
  if (checkWinner(document.turn)){
    outputMessage("Player " + document.turn + " has won! Select Play again.");
    document.winner = document.turn;
  }
  else if(checkTie()){
    outputMessage("Tie Game! Select Play Again");
  }
  else if (document.turn == "X"){
    document.turn = "O";
    outputMessage("Player " + document.turn + "'s turn.")
  }
  else{
    document.turn = "X";
    outputMessage("Player " + document.turn + "'s turn.")
  } 
}


function checkWinner(m){
  var result = false;
  if (checkRows(1,2,3,m)|| 
     checkRows(4,5,6,m) || 
     checkRows(7,8,9,m) || 
     checkRows(1,4,7,m) || 
     checkRows(2,5,8,m) ||
     checkRows(3,6,9,m) || 
     checkRows(1,5,9,m) || 
     checkRows(3,5,7,m)){
      result = true;
    }
  return result;
}

function checkTie(){
  var result = false;
  if (checkGridTie(1,2,3,4,5,6,7,8,9)){
      result = true;
  }
  return result;
}

function checkGridTie(a,b,c,d,e,f,g,h,i){
  var result = false;
  if(getCell(a) != "" && getCell(b) != "" && getCell(c) != "" && getCell(d) != "" && getCell(e) != "" && getCell(f) != "" && getCell(g) != "" && getCell(h) != "" && getCell(i) != "") {
    result = true;
  }
  return result;
}

function checkRows(i,j,k,m){
  var result = false;
  if (getCell(i) == m && getCell(j) == m && getCell(k) == m){
    result = true;
  }
  return result;
}

function getCell(number){
  return document.getElementById("c" + number).innerText;
}

function clearBoard(number){
  document.getElementById("c" + number).innerText = " ";
}
