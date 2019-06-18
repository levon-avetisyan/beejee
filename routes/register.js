const express = require('express');
const router = express.Router();
const keys = require('../config/keys');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Load Users model
const Users = require('../models/Users');

// router.get('/', (req, res) => {
//     res.send({'msg': 'Register Works'})
// });

router.post('/', (req, res) => {
    Users.findOne({username: req.body.username})
        .then(user => {
            if (user) {
                return res.status(400).json({msg: 'User Exist'});
            } else {
                const newUser = new Users({
                    username: req.body.username,
                    password: req.body.password
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    });
                });
            }
        });
});

module.exports = router;
