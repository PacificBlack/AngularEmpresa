const objetoEmpresa = {}

const Empresa = require('../models/empresas');

objetoEmpresa.createRegistrosEmpresa = async (req, res) => {

    const nuevaEmpresa = new Empresa(req.body);
    await nuevaEmpresa.save();

    res.send({message: 'Empresa creada'});
}
objetoEmpresa.updateRegistrosEmpresa = async(req, res) => {
   await Empresa.findByIdAndUpdate(req.params.id, req.body);
   res.json({status: 'Empresa actualizada'});
}
objetoEmpresa.deleteRegistrosEmpresa = async (req, res) => {
    await Empresa.findByIdAndDelete(req.params.id);
    res.json({status: 'Empresa borrada'});
};
objetoEmpresa.getEmpresas = async (req, res) => {
    const empresass = await Empresa.find();
    res.json(empresass);
}

objetoEmpresa.getEmpresa = async (req, res) => {
    const empresa = await Empresa.findOne({_id: req.params.id});
    res.json(empresa);
}


objetoEmpresa.getRegistroEmpresa = (req, res) => {
    res.send('Un Registro')
}

module.exports = objetoEmpresa;