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

async function submitMaze(arr) {
   const cells = document.getElementsByTagName('td');
   const name = document.getElementById('name').value;
   let cellIdx = 0;
   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[0].length; j++) {
         let className = cells[cellIdx].classList[0] || '';
         if (
            className === 'disabled' ||
            className === '' ||
            className === 'lightgrey'
         ) {
            arr[i][j] = 0;
         } else if (className === 'black') {
            arr[i][j] = 1;
         } else {
            arr[i][j] = 3;
         }
         cellIdx++;
      }
   }
   try {
      const response = await axios.post('/api/maze', { arr, name });
      if (response) {
         alert('Created Successfully!');
      } else {
         throw new Error('Not created. Try using a different maze name.');
      }
   } catch (error) {
      alert(
         'Not created. Try using a different maze name, maze names must be unique in our database!',
      );
   }
}

function createCanvasFromArr(arr) {
   const table = document.getElementById('table');

   for (let i = 0; i < arr.length - 1; i++) {
      let newRow = document.createElement('tr');
      for (let j = 0; j < arr[0].length; j++) {
         let newCell = document.createElement('td');
         newRow.appendChild(newCell);
      }
      table.appendChild(newRow);
   }
   let newRow = document.createElement('tr');
   for (let i = 0; i < arr[0].length; i++) {
      let newCell = document.createElement('td');
      newCell.className = 'disabled';
      if (i < 3 || i > 5) {
         newCell.className = 'black disabled';
      }
      newRow.appendChild(newCell);
   }
   table.appendChild(newRow);
}

function paintCells() {
   const cells = document.getElementsByTagName('td');
   for (let i = 0; i < cells.length; i++) {
      if (i <= 7) {
         cells[i].className = 'black disabled';
      } else if (i > 7 && i % 8 === 0) {
         cells[i].className = 'black disabled';
         cells[i + 7].className = 'black disabled';
      }
   }
}
function createMazeArr() {
   const arr = new Array(9).fill(0);
   for (let i = 0; i < arr.length; i++) {
      let newArr = new Array(8).fill(0);
      arr[i] = newArr;
   }
   return arr;
}
function addEventListeners() {
   const submitButton = document.getElementById('submit');
   // button.addEventListener('click', createRow);
   submitButton.addEventListener('click', () => submitMaze(arr));
   table.addEventListener('mousedown', () => {
      table.addEventListener('mouseover', colorize);
   });
   table.addEventListener('click', colorize);
   table.addEventListener('mouseup', () => {
      table.removeEventListener('mouseover', colorize, false);
   });
}

(function createMazeBuilder() {
   createCanvasFromArr(createMazeArr());
   paintCells();
   addEventListeners();
})();
