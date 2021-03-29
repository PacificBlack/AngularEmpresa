const {Router} = require('express');

const router = Router();

const ofertasControl = require('../controllers/ofertas.controller.js');

router.post('/registro-ofertas',ofertasControl.createOfertas);
router.get('/ofertas', ofertasControl.getOfertas);
router.get('/oferta/:id', ofertasControl.getOferta);
router.delete('/ofertas/eliminar/:id',ofertasControl.deleteOfertas);
router.put('/ofertas/editar/:id',ofertasControl.updateOfertas);

module.exports = router;