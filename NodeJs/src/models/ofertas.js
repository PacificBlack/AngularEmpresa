const {Schema, model} = require('mongoose');

const ofertaShema = new Schema({
    id_empresa: {type: String, required: true},
    titulo: {type: String, required: true},
    descripcion: {type: String, required: true}
},{
    timestamps: true,
    versionKey: false
});

module.exports = model('Ofertas',ofertaShema);