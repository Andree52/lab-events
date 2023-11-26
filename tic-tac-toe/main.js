function makeBoard() {
    let board = document.getElementById('board');
    board.innerHTML = '';

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let square = document.createElement('div');
            square.classList.add('square', 'empty');
            square.id = `square-${i}-${j}`;
            square.addEventListener('click', makeMove);
            board.appendChild(square);
        }
    }
}

makeBoard();

let turn = 'X';

function makeMove(e) {
    let square = e.target;

    if (square.classList.contains('empty')) {
        square.textContent = turn;
        square.classList.remove('empty');

        if (turn === 'X') {
            turn = 'O';
        } else {
            turn = 'X';
        }
    }
}

document.getElementById('reset').addEventListener('click', () => {
    makeBoard();
    turn = 'X';
});