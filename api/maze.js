const router = require('express').Router();
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
         res.send(parsedMazes);
      }
   } catch (error) {
      next(error);
   }
});
router.get('/:name', async (req, res, next) => {
   try {
      const maze = await Maze.findOne({
         where: {
            name: req.params.name,
         },
      });
      if (!maze) {
         res.send("That maze doesn't exist");
      } else {
         res.send({ name: maze.name, maze: JSON.parse(maze.mazeArray) });
      }
   } catch (error) {
      next(error);
   }
});

router.post('/', async (req, res, next) => {
   try {
      let newMaze = await Maze.create({
         name: req.body.name,
         mazeArray: JSON.stringify(req.body.arr),
      });
      res.send(newMaze);
   } catch (error) {
      next(error);
   }
});

module.exports = router;
