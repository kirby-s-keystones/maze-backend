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

   
      <div class="text-center">
         <h1>A Maze Thing</h1>
         <h3 class="text-center">Mazes</h3>
         ${mazes.map(maze => {
  return (html`<h4>${maze.name}</h4>
          <h3></h3>
            <table>
              
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
