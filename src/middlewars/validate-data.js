const { validationResult } = require('express-validator');

const validateData = (req, res, next) => {
    console.log(req.body)
    console.log('errrrrrrrrr')
    const err = validationResult(req);
    if(!err.isEmpty()){
        return res.status(400).json(err);
    }

    next();
}

module.exports = {
    validateData
}