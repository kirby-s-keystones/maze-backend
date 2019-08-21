
const router = require('express').Router();
const maze = require('./maze.js');

router.use('/maze', maze)

router.use((req, res, next) => {
    const err = new Error('API route not found!');
    err.status = 404;
    next(err);
});

module.exports = router;