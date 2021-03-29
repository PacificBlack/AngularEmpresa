const { Router } = require('express');

const router = Router();

const empresasControl = require('../controllers/empresas.controller.js');

router.post('/registro-empresas', empresasControl.createRegistrosEmpresa);
//router.get('/registro-empresas', empresasControl.getRegistroEmpresa);

router.get('/empresas', empresasControl.getEmpresas);
router.get('/empresa/:id', empresasControl.getEmpresa);
router.delete('/empresa/eliminar/:id',empresasControl.deleteRegistrosEmpresa);
router.put('/empresa/editar/:id',empresasControl.updateRegistrosEmpresa);

module.exports = router;