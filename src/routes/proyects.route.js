const { Router } = require('express');
const { check } = require('express-validator');

const { validateData } = require('../middlewars');
const { getProyects, postProyect, removeProyect, proyectUpdate } = require('../controllers/proyects.controller');
const { proyectoByIdExists } = require('../helpers/req-validatos');

const router = Router();

//Obtener lista de proyectos por páginas
router.get('/', getProyects);

//Guardar proyecto
router.post('/', [
  check('name', 'El nombre es requerido').not().isEmpty(),
  check('responsable', 'El responsable es requerido').not().isEmpty(),
  check('client', 'El client es requerido').not().isEmpty(),
  check('procesos', 'El procesos es requerido').not().isEmpty(),
  check('fechaEstimada', 'La fecha estimada es requerida').not().isEmpty(),
  check('herramientas', 'Herramientas es requerido').not().isEmpty(),
  check('insumo', 'El insumo es requerido').not().isEmpty(),
  check('materiaPrima', 'Materia prima es requerida').not().isEmpty(),
  validateData
], postProyect);

//Eliminar proyecto
router.delete('/:id', [
  check('id', 'No es un ID valido').isMongoId(),
  check('id', 'No es un ID valido').custom(proyectoByIdExists),
  validateData
], removeProyect);

//Actualizar proyecto
router.put('/:id', [
  check('name', 'El nombre es requerido').not().isEmpty(),
  check('responsable', 'El responsable es requerido').not().isEmpty(),
  check('client', 'El client es requerido').not().isEmpty(),
  check('procesos', 'El procesos es requerido').not().isEmpty(),
  check('fechaEstimada', 'La fecha estimada es requerida').not().isEmpty(),
  check('herramientas', 'Herramientas es requerido').not().isEmpty(),
  check('insumo', 'El insumo es requerido').not().isEmpty(),
  check('materiaPrima', 'Materia prima es requerida').not().isEmpty(),
  check('id', 'No es un ID valido').isMongoId(),
  check('id', 'No es un ID valido').custom(proyectoByIdExists),
  validateData
], proyectUpdate);

module.exports = router;