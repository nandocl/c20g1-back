const express = require('express');
const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
    res.status(200).send({msg: 'Get good'})
});

app.listen(PORT, () => {
    console.log(`Corriendo en el puerto ${PORT}`)
});