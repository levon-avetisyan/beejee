const express = require('express');
const router = express.Router();
const keys = require('../config/keys');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Load Users model
const Users = require('../models/Users');

const validateLoginInput = require('../validation/login');

router.post('/', (req, res) => {
    const {errors, isValid} = validateLoginInput(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }

    const username = req.body.username;
    const password = req.body.password;

    // Find user by email
    Users.findOne({username})
        .then(user => {
            // Check for user
            if (!user) {
                errors.username = 'User not found';
                return res.status(404).json(errors);
            }

            // Check Password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        // res.json({msg: 'Success'});
                        // User Matched
                        // Create JWT Payload
                        const payload = {id: user._id, username: user.username};

                        // Sign Token
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            {expiresIn: '1d'},
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: 'Bearer ' + token
                                });
                            }
                        );
                    } else {
                        // errors.password = 'Password incorrect';
                        return res.status(400).json({password: 'Password Incorrect'});
                    }
                });
        });
});

module.exports = router;
