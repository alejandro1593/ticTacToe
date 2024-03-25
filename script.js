document.addEventListener('DOMContentLoaded', function () {
    const board = document.getElementById('board');
    const resetButton = document.getElementById('reset');
    let currentPlayer = 'circle';

    function createCell() {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('click', cellClick);
        return cell;
    }

    function cellClick() {
        const cell = this;
        if (cell.textContent === '') {
            cell.textContent = currentPlayer === 'circle' ? 'O' : 'X';
            cell.classList.add(currentPlayer);
            checkWinner();
            currentPlayer = currentPlayer === 'circle' ? 'cross' : 'circle';
        }
    }

    function checkWinner() {
        const cells = document.querySelectorAll('.cell');
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (const combo of winningCombos) {
            const [a, b, c] = combo;
            if (cells[a].textContent &&
                cells[a].textContent === cells[b].textContent &&
                cells[a].textContent === cells[c].textContent) {
                alert(`${cells[a].textContent} ha ganado`);
                resetGame();
            }
        }
    }

    function resetGame() {
        board.innerHTML = '';
        initializeGame();
        currentPlayer = 'circle';
    }

    function initializeGame() {
        for (let i = 0; i < 9; i++) {
            const cell = createCell();
            board.appendChild(cell);
        }
    }

    resetButton.addEventListener('click', resetGame);

    initializeGame();
});
