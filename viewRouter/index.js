const router = require('express').Router();
const layout = require('../views/layout');

const { Maze } = require('../db');

router.get('/', async (req, res, next) => {
   try {
      const mazes = (await Maze.findAll()) || [];

      if (!mazes.length) {
         res.send('There are no mazes!');
      } else {
         const parsedMazes = mazes.map(currentMaze => {
            return {
               name: currentMaze.name,
               maze: JSON.parse(currentMaze.mazeArray),
            };
         });
         res.send(layout(parsedMazes));
      }
   } catch (error) {
      next(error);
   }
});

module.exports = router;
