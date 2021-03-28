const {Schema, model} = require('mongoose');

const empresaShema = new Schema({
    nombre: {type: String, required: true},
    nit: {type: String, required: true},
    correo: {type: String, required: true},
    contrasena: {type: String, required: true},
},{
    timestamps: true,
    versionKey: false
});

module.exports = model('Empresa', empresaShema);