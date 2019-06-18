const Validator = require('validator');
const isEmpty = require('lodash.isempty');

module.exports = function validateLoginInput(data) {
    let errors = {};

    data.username = !isEmpty(data.username) ? data.username : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if (Validator.isEmpty(data.username)) {
        errors.username = 'This field is required';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'This field is required'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
};