const router = require('express').Router()
const { Maze } = require('../db')


router.get('/', async (req, res, next) => {
    try {
        const mazes = await Maze.findAll() || []

        const rand = Math.floor(Math.random() * mazes.length)

        if (!mazes.length) {
            res.send("There are no mazes!")
        } else {
            res.send(JSON.parse(mazes[rand].mazeArray))
        }
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        let newMaze = await Maze.create({
            userName: req.body.userName,
            mazeArray: req.body.mazeArray
        });
        res.send(newMaze);
    } catch (error) {
        next(error);
    }
});

module.exports = router;

