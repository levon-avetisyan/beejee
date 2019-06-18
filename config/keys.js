const nodeENV = process.env.NODE_ENV;
if (nodeENV === 'production') {
    module.exports = require('./keys_prod');
}else{
    module.exports = require('./keys_dev');
}
