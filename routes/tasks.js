const express = require('express');
const router = express.Router();
const keys = require('../config/keys');
const passport = require('passport');

// Load Tasks model
const Tasks = require('../models/Tasks');

//Load Input Validation
const validateTaskInput = require('../validation/task');

// Get Tasks
router.get('/', (req, res) => {
    Tasks.find()
        .sort({date: -1})
        .then(tasks => res.json(tasks))
        .catch(err => res.status(404).json({msg: 'No posts found'}));
});

// Get Tasks
router.get('/tasks', (req, res) => {
    Tasks.find()
        .sort({date: -1})
        .then(tasks => res.json(tasks))
        .catch(err => res.status(404).json({msg: 'No posts found'}));
});

// Create Tasks
router.post('/create', (req, res) => {
    const {errors, isValid} = validateTaskInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newTask = new Tasks({
        username: req.body.username,
        email: req.body.email,
        text: req.body.text
    });

    newTask
        .save()
        .then(task => res.json(task))
        .catch(err => res.json(errors));
});

module.exports = router;



