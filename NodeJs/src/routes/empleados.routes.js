const { Router} = require('express');

const router = Router();

const empleadosControl = require('../controllers/empleados.controller.js');

router.post('/registro-empleados', empleadosControl.createRegistrosEmpleado);
router.get('/empleados', empleadosControl.getEmpleados);
router.get('/empleado/:id', empleadosControl.getEmpleado);
router.delete('/empleado/eliminar/:id',empleadosControl.deleteRegistrosEmpleado);
router.put('/empleado/editar/:id',empleadosControl.updateRegistrosEmpleado);

module.exports = router;