const express = require('express');
const router = express.Router();
const keys = require('../config/keys');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// Load models
const Users = require('../models/Users');
const Tasks = require('../models/Tasks');

//Load Input Validation
const validateTaskInput = require('../validation/task');

router.get('/',
    passport.authenticate('jwt', {session: false}),
    (req, res) => {
        res.json({
            id: req.user._id,
            username: req.user.username,
        })
    });

// Get Task
router.get('/:id', (req, res) => {
    Tasks.findOne({_id: req.params.id})
        .populate('task', ['username', 'text'])
        .then(task => {
            if (!task) {
                res.status(404).json({msg: '!task'});
            }
            res.json(task);
        })
        .catch(err =>
            res.status(404).json({msg: 'There is no task with this id'})
        );
});

// Update Task
router.post('/update/:id', (req, res) => {
    const {errors, isValid} = validateTaskInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    Tasks.findById({_id: req.params.id})
        .then(task => {
            if (!task) {
                errors.notask = 'There is no task with this id';
                res.status(404).json(errors);
            } else {
                task.username = req.body.username;
                task.email = req.body.email;
                task.text = req.body.text;
                task.save()
                    .then(res.json(task))
                    .catch(err => {
                        res.status(400).json(errors);
                    });
            }
        })
});




module.exports = router;