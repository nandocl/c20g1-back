const express = require('express');
const app = express();
const { dbConnection } = require('./database/config');

//Iniciar base de datos
dbConnection();

//Middleware para parsear el body a json
app.use(express.json());

//Constantes
const PORT = 8080;

//Rutas
app.use('/proyecto', require('./routes/proyects.route'));

//Inicio de servidor
app.listen(PORT, () => {
    console.log(`Corriendo en el puerto ${PORT}`)
});