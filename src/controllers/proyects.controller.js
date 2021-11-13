const Proyecto = require('../models/proyect.model');

//querys = ...?limit=5&page=1
const   getAllProyects = async (req, res) => {
    const { limit = 5, page = 1 } = req.query;
    const query = { active: true }
    const skip = limit * (page - 1);

    const [ proyectos, totalProyectos ] = await Promise.all([
        Proyecto.find(query)
            .skip(Number(skip))
            .limit(limit),
            Proyecto.countDocuments(query)
    ])

    res.json({
        err: false,
        proyectos,
        totalProyectos
    })
}

//params = .../id...
const   getProyect = async (req, res) => {
    const { id } = req.params;
    const proyect = await Proyecto.findOne({ _id: id, active: true });
    if(proyect) return res.send({err: false, proyect});
    res.status(400).send({err: true, proyect: {}});
}

// body = {name, responsable, client, fechaEstimada, procesos, herramientas, insumo, materiaPrima, anotaciones, archivos}
const postProyect = async (req, res) => {
    let proyect = new Proyecto(req.body);
    await proyect.save();
    res.json({err: false, msg: `Proyecto guardado correctamente` });
}

//Params /id.....
const removeProyect = async (req, res) => {
    const { id } = req.params;
    await Proyecto.findByIdAndUpdate(id, { active: false });
    res.send({error: false, msg: `Proyecto ${id} eliminado correctamente`});
}

// body = {name, responsable, client, fechaEstimada, procesos, herramientas, insumo, materiaPrima, anotaciones, archivos}
// params /id
const proyectUpdate = async (req, res) => {
    const { id } = req.params;
    const { _id, ...data } = req.body;
    await Proyecto.findByIdAndUpdate(id, data, { new: true });    
    res.send({err: false, msg: `Proyecto ${id} actualizado correctamente`});
}

module.exports = { getAllProyects, postProyect, removeProyect, proyectUpdate, getProyect }