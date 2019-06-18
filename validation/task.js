const Validator = require('validator');
const isEmpty = require('lodash.isempty');

module.exports = function validateTaskInput(data) {
    let errors = {};

    data.username = !isEmpty(data.username) ? data.username : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.text = !isEmpty(data.text) ? data.text : '';

    if (Validator.isEmpty(data.username)) {
        errors.username = 'This field is required';
    } else if (!Validator.isLength(data.username, {min: 3, max: 30})) {
        errors.username = 'Name must be between 2 and 30 characters';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email is required'
    } else if ((!Validator.isEmail(data.email))) {
        errors.email = 'Must be a valid email'
    }

    if (Validator.isEmpty(data.text)) {
        errors.text = 'This field is required'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
};