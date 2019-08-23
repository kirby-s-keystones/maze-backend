const html = require('html-template-tag');

module.exports = (mazes) => html`<!DOCTYPE html>
  <html lang=“en”>
   <head>
     <title>Mazes</title>
      <link
         href="https://fonts.googleapis.com/css?family=Press+Start+2P"
         rel="stylesheet"
      />
     <link href=“../public/style.css” rel=“stylesheet”>
   </head>
   <body>
      <div class="text-center mb-1">
         <h1>A Maze Thing</h1>
         <h3 class="text-center">Mazes</h3>
         ${mazes.map(maze => {
          return (html`<h4>${maze.name}</h4>
            <table>
              ${maze.maze.map(singleMaze => {
                return (singleMaze.map(el => {
                  // return (el.map(singleEl => {
                    return (
                    `<tr>
                      for(let i=0; i<singleMaze.length; i++){
                        if(i>7 && i%8 ===0){
                          <br>
                        }
                        <td>${singleMaze.el}<td>
                      }
                    </tr>
                    `)})
                // )})
              )})}
            </table>
          `);

         })}
      </div>
      <table id="table"></table>
   </body>
   <script
      src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.js"
      integrity="sha256-XmdRbTre/3RulhYk/cOBUMpYlaAp2Rpo/s556u0OIKk="
      crossorigin="anonymous"
   ></script>
 </html>`;

