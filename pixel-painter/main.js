const canvas = document.getElementById('canvas');
const palette = document.getElementById('palette');
const currentColor = document.getElementById('current-color');

const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
const grid = Array.from({ length: 16 }, () => Array.from({ length: 16 }, () => ({ filled: false, color: '' })));

palette.addEventListener('click', (e) => {
    if (e.target.tagName === 'circle') {
        currentColor.style.backgroundColor = e.target.getAttribute('fill');
    }
});

canvas.addEventListener('click', (e) => {
    if (e.target.tagName === 'rect') {
        const row = e.target.getAttribute('data-row');
        const col = e.target.getAttribute('data-col');
        const color = currentColor.style.backgroundColor;
        fillCell(row, col, color);
    }
});

function fillCell(row, col, color) {
    const cell = document.getElementById(`cell-${row}-${col}`);
    if (!grid[row][col].filled) {
        cell.style.fill = color;
        grid[row][col].filled = true;
        grid[row][col].color = color;
    }
}

document.getElementById('reset-button').addEventListener('click', resetGrid);

document.getElementById('fill-button').addEventListener('click', fillGrid);

function resetGrid() {
    for (const row of grid) {
        for (const cell of row) {
            const element = document.getElementById(`cell-${row}-${cell}`);
            element.style.fill = 'white';
            cell.filled = false;
            cell.color = '';
        }
    }
}

function fillGrid() {
    const color = currentColor.style.backgroundColor;
    for (const row of grid) {
        for (const cell of row) {
            const element = document.getElementById(`cell-${row}-${cell}`);
            element.style.fill = color;
            cell.filled = true;
            cell.color = color;
        }
    }
}
