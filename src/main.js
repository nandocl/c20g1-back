const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())

const { dbConnection } = require('./database/config');

//Iniciar base de datos
dbConnection();

//Middleware para parsear el body a json
app.use(express.json());

//Constantes
const PORT = process.env.PORT || 3000

//Rutas
app.get('/test', (req, res) => res.send({msg: 'Grupo 1 B20'}));
app.use('/proyecto', require('./routes/proyects.route'));

//Inicio de servidor
app.listen(PORT, () => {
    console.log(`Corriendo en el puerto ${PORT}`)
});