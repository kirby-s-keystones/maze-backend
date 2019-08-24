const list = document.getElementById("list");

async function getMazes() {
    try {
        const { data } = await axios.get('/api/maze');

        data.forEach(maze => {
            let li = document.createElement("li");

            li.innerHTML = `
            <div class="row">
                <div class="col-4">
                <div class="col-8">
                    ${maze.name}
                </div>
                  <table>
                  ${
                    maze.maze.map(row => {
                      return (
                        `<tr>
                        ${
                          row.map(cell => {
                            return (`<td class="${cell ? "black" : ""}"></td>`);
                          }).join('')
                        }
                        </tr>`
                      );
                    }).join('')
                  }
                  </table>
                </div>
            </div>
            `;
            list.appendChild(li);
        });
    } catch (err) {
        console.error(err);
    }
}

getMazes();



