const objetoEmpleado = {}

const Empleado = require('../models/empleados');

objetoEmpleado.createRegistrosEmpleado = async (req,res)=> {
    const nuevoEmpleado = new Empleado(req.body);
    await nuevoEmpleado.save();
    res.send({message: 'Empleado creado'});
}
objetoEmpleado.updateRegistrosEmpleado = async (req,res)=> {
    await Empleado.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'Empleado actualizado'});
}
objetoEmpleado.deleteRegistrosEmpleado = async (req, res)=> {
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({status: 'Empleado eliminado'});
}
objetoEmpleado.getEmpleados = async (req, res) =>{
    const empleados = await Empleado.find();
    res.json(empleados);
}
objetoEmpleado.getEmpleado = async (req, res) => {
    const empleado = await Empleado.findOne({_id: req.params.id});
    res.json(empleado);
}

module.exports = objetoEmpleado;