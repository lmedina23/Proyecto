let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let productoSchema = new Schema({
    nombre: { type: String },
    descripcion: { type: String },
    precio: { type: Number },
    categoria: { type: String },
    detalles: { type: String },
    imagen: { type: String },
    vendedor:{type: String}, 
    rutaImagen: {type: String}
}, { versionKey: false });

let producto = mongoose.model('producto', productoSchema);
module.exports = producto;