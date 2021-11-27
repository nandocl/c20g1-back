const { Schema, model } = require('mongoose');

const ProyectSchema =  Schema({
    name:{
        type: String,
        required: [true, 'Error db: El nombre del proyecto es requerido']
    },
    responsable: {
        type: String,
        required: [true, 'Error db: El responsable es requerido'],
    },
    client: {
        type: String,
        required: [true, 'Error db: El cliente es requerido']
    },
    fechaEstimada: {
        type: String,
        required: [true, 'Error db: Fecha estimada es requerida']
    },
    procesos:{
        type: [{name: String}],
        required: [true, 'Error db: El proceso es requerido']
    },
    herramientas: {
        type: [{name: String, process: String}],
        required: [true, 'Error db: Herramienta es requerida']
    },
    insumo:{
        type: [{insName: String, cantidad: Number}],
        required: [true, 'Error db: Insumo es requerido']
    },
    materiaPrima:{
        type: [{matPrim: String, dims: String}],
        required: [true, 'Error db: Materia prima es requerida']
    },
    anotaciones:{
        type: String,
        default: ''
    },
    active:{
        type: Boolean,
        default: true
    }
});

ProyectSchema.methods.toJSON = function(){
    const { _id, __v, ...proyecto } = this.toObject();
    proyecto.proyectoId = _id;
    return proyecto;
}

module.exports = model('Proyect', ProyectSchema)
