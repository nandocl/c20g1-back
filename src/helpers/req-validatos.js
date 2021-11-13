const Proyecto = require('../models/proyect.model');

const proyectoByIdExists = async (id = '') => {
    let proyecto = await Proyecto.findById(id);
    if(!proyecto){
        throw new Error(`El id ${ id } no existe en la plataforma`);
    }
}

module.exports = { proyectoByIdExists }