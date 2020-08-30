const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
// var pieces = ['rook', 'knight', 'bishop', 'king', 'queen', 'bishop', 'knight','rook'];
var pieces = ['r', 'k', 'b', 'K', 'Q', 'b', 'k','r'];

function generateChessBoard() {
  var board = document.getElementById('boardInner');
  var numContainer = document.getElementById('numberContainer');
  var letterContainer = document.getElementById('letterContainer');
  var display = 'block';
  renderLabels(letterContainer, numContainer);
  renderBoard(board);
  renderPiece(1);
  renderPiece(2, true);
  renderPiece(7, true);
  renderPiece(8);
}

function renderBoard(board) {
  for(var i = 0; i < 8; i++) {
    var row = document.createElement('div');
    row.className = 'row';
    row.style.flexDirection = i % 2 === 0 ? '' : 'row-reverse';
    for(var j = 0; j < 8; j++) {
      var square = document.createElement('DIV');
      square.setAttribute('id',`${numbers[i]}${letters[j]}`);
      square.className = 'square';
      square.style.backgroundColor = j % 2 === 0 ? 'white' : 'black';
      row.appendChild(square);
    }
    board.appendChild(row);
  }
}

function renderLabels(letterContainer, numContainer) {
  letters.forEach((x,i) => {
    var el = document.createElement('DIV');
    var el2 = document.createElement('DIV');
    el.innerText = x;
    el.className = 'label';
    el2.innerText = numbers[i];
    el2.className = 'label';
    numContainer.appendChild(el2);
    letterContainer.appendChild(el);
  })
}

function renderPiece(row, isPawn = false) {
  for(var i = 0; i < 8; i++) {
    let square = document.getElementById(`${row}${letters[i]}`);
    let piece = document.createElement('span');
    square.style.color = square.style.backgroundColor == 'black' ? 'white' : 'black';
    square.style.textAlign = 'center';
    square.innerHTML = isPawn ? 'p' : pieces[i];
  }
}

window.onload = generateChessBoard;
