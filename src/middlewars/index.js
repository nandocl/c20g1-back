const validateData = require('./validate-data');
const validateRols = require('./validate-rols')

module.exports = {
    ...validateData,
    ...validateRols
}