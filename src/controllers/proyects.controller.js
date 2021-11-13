const Proyecto = require('../models/proyect.model');

//params = ...?limit=5&page=1
const   getProyects = async (req, res) => {
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
        proyectos,
        totalProyectos
    })
}

// body = {name, responsable, client, fechaEstimada, procesos, herramientas, insumo, materiaPrima, anotaciones, archivos}
const postProyect = async (req, res) => {
    let proyect = new Proyecto(req.body);
    await proyect.save();
    res.json({
        proyect
    });
}

//Params /id.....
const removeProyect = async (req, res) => {
    const { id } = req.params;
    const proyect = await Proyecto.findByIdAndUpdate(id, { active: false });
    res.json( proyect );
}
// body = {name, responsable, client, fechaEstimada, procesos, herramientas, insumo, materiaPrima, anotaciones, archivos}
// params /id
const proyectUpdate = async (req, res) => {
    const { id } = req.params;
    const { _id, ...data } = req.body;
    const user = await Proyecto.findByIdAndUpdate(id, data, { new: true });
    
    res.json(user);
}

module.exports = { getProyects, postProyect, removeProyect, proyectUpdate }