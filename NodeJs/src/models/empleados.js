const {Schema, model} = require('mongoose');

const empleadoShema = new Schema({
    nombre: {type: String, require: true},
    identificacion: {type: String, require: true},
    correo: {type: String, require: true},
    contrasena: {type: String, require: true}
},{
    timestamps: true,
    versionKey: false
});

module.exports = model('Empleado', empleadoShema);