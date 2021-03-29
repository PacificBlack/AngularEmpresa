 const objetoOferta = {}

 const Oferta = require('../models/ofertas');

 objetoOferta.createOfertas = async (req, res)=>{
     const nuevaOferta = new Oferta(req.body);
     await nuevaOferta.save();
     res.send({message: 'Oferta creada'})
 }
objetoOferta.updateOfertas = async (req, res) => { 
    await Oferta.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'Oferta Actualizada'});
}
objetoOferta.deleteOfertas = async (req, res) => {
    await Oferta.findByIdAndDelete(req.params.id);
    res.json({status: 'Oferta borrada'});
}
objetoOferta.getOferta = async (req,res) => {
    const oferta = await Oferta.findOne({id_empresa: req.params.id});
    res.json(oferta);
}
objetoOferta.getOfertas = async (req, res) => {
    const ofertas = await Oferta.find();
    res.json(ofertas);
}

module.exports = objetoOferta;