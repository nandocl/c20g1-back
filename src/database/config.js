const mongoose = require('mongoose');

const dbConnection = async () => {
    await mongoose.connect('mongodb://localhost:27017/MINTIC_grupo1')
        .then(() => console.log("Conexión exitosa a db") )
        .catch(err => {
            console.log(`Error de coneccion a la DB ${err}`);
            throw new Error('No se puede conectar a la base de datos');
        });
}

module.exports = {
    dbConnection
}