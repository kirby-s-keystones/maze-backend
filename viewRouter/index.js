const router = require('express').Router();
const layout = require('../views/layout');
const path = require('path');

const { Maze } = require('../db');

router.get('/', async (req, res, next) => {
   try {
      const mazes = (await Maze.findAll()) || [];

      if (!mazes.length) {
         res.send('There are no mazes!');
      } else {
         res.sendFile(path.join(__dirname, '..', 'public/mazes.html'))
      }
   } catch (error) {
      next(error);
   }
});

module.exports = router;
