const { db, Maze } = require('./db');
const { green, red } = require('chalk');
const maze1 = [
   [1, 1, 1, 1, 1, 1, 1, 1],
   [1, 0, 0, 0, 0, 0, 0, 1],
   [1, 0, 1, 1, 1, 1, 0, 1],
   [1, 3, 0, 0, 3, 1, 0, 1],
   [1, 1, 1, 1, 1, 1, 0, 1],
   [1, 0, 0, 0, 0, 0, 0, 1],
   [1, 3, 0, 0, 1, 1, 0, 1],
   [1, 0, 1, 0, 3, 1, 3, 1],
   [1, 1, 1, 0, 0, 0, 1, 1],
];

const maze2 = [
   [1, 1, 1, 1, 1, 1, 1, 1],
   [1, 3, 1, 0, 0, 0, 3, 1],
   [1, 0, 1, 0, 1, 0, 1, 1],
   [1, 0, 0, 3, 1, 0, 0, 1],
   [1, 1, 1, 1, 0, 0, 0, 1],
   [1, 0, 1, 0, 0, 1, 0, 1],
   [1, 0, 0, 0, 1, 1, 0, 1],
   [1, 3, 1, 0, 3, 1, 0, 1],
   [1, 1, 1, 0, 0, 0, 1, 1],
];

const maze3 = [
   [1, 1, 1, 1, 1, 1, 1, 1],
   [1, 3, 0, 0, 0, 3, 0, 1],
   [1, 1, 1, 1, 1, 1, 0, 1],
   [1, 3, 0, 0, 0, 1, 0, 1],
   [1, 1, 1, 1, 0, 1, 0, 1],
   [1, 0, 0, 0, 0, 0, 3, 1],
   [1, 0, 1, 0, 1, 1, 0, 1],
   [1, 3, 1, 0, 3, 1, 0, 1],
   [1, 1, 1, 0, 0, 0, 1, 1],
];

const maze4 = [
   [1, 1, 1, 1, 1, 1, 1, 1],
   [1, 3, 0, 0, 1, 0, 3, 1],
   [1, 0, 1, 1, 0, 0, 0, 1],
   [1, 0, 0, 0, 0, 1, 0, 1],
   [1, 0, 1, 1, 3, 1, 0, 1],
   [1, 3, 1, 0, 0, 1, 0, 1],
   [1, 0, 1, 1, 1, 1, 0, 1],
   [1, 0, 0, 1, 3, 0, 0, 1],
   [1, 1, 1, 0, 0, 0, 1, 1],
];

const mazes = [
   {
      name: 'Master Maze 1',
      mazeArray: JSON.stringify(maze1),
   },
   {
      name: 'Master Maze 2',
      mazeArray: JSON.stringify(maze2),
   },
   {
      name: 'Master Maze 3',
      mazeArray: JSON.stringify(maze3),
   },
   {
      name: 'Master Maze 4',
      mazeArray: JSON.stringify(maze4),
   },
];

const seed = async () => {
   await db.sync({ force: true });

   // seed your database here!
   await Maze.bulkCreate(mazes, { returning: true });

   console.log(green('Seeding success!'));
   db.close();
};

seed().catch(err => {
   console.error(red('Oh noes! Something went wrong!'));
   console.error(err);
   db.close();
});
