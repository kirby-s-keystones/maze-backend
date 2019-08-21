function colorize(event) {
    const selector = document.querySelector('select');
    if (event.target.id !== 'table') {
        if (event.target.className === selector.value) {
            event.target.className = 'lightgrey';
        } else {
            if (!Array.from(event.target.classList).includes('disabled')) {
                event.target.className = selector.value;
            }
        }
    }
}

function submitMaze(arr) {
    const cells = document.getElementsByTagName('td');
    let cellIdx = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            let className = cells[cellIdx].classList[0] || "";
            if (className === "disabled" || className === "" || className === "lightgrey") {
                arr[i][j] = 0;
            } else if (className === "black") {
                arr[i][j] = 1
            } else {
                arr[i][j] = 3
            }
            cellIdx++;
        }
    }
    console.log(arr)

}
const arr = new Array(9).fill(0);
for (let i = 0; i < arr.length; i++) {
    let newArr = new Array(8).fill(0);
    arr[i] = newArr;
}



const table = document.getElementById('table');

for (let i = 0; i < arr.length - 1; i++) {
    let newRow = document.createElement('tr');
    for (let j = 0; j < arr[0].length; j++) {
        let newCell = document.createElement('td');
        newRow.appendChild(newCell);
    }
    table.appendChild(newRow)
}
let newRow = document.createElement('tr');
for (let i = 0; i < arr[0].length; i++) {
    let newCell = document.createElement('td');
    newCell.className = "disabled"
    if (i < 3 || i > 5) {
        newCell.className = 'black disabled';
    }
    newRow.appendChild(newCell)
}
table.appendChild(newRow);
const button = document.getElementById('add-row');
const submitButton = document.getElementById('submit');
// button.addEventListener('click', createRow);
submitButton.addEventListener('click', () => submitMaze(arr))
table.addEventListener('click', colorize);