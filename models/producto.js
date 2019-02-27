// ==============================================
// Modelo para Productos
// ==============================================
var mongoose = require('mongoose');


var Schema = mongoose.Schema;


var productosSchema = new Schema({
    codigoBarra: { type: String, required: false, },
    nombre: { type: String, required: [true] },
    existencia: { type: Number, default: 0 },
    valor: { type: Number, default: 0 },
    minimo: { type: Number, default: 0 },
    maximo: { type: Number, default: 0 },
    costo: { type: Number, default: 0 },
    precio: { type: Number, default: 0 },
    status: { type: Boolean, default: true },
    usuario: { type: Schema.Types.ObjectId, ref: 'usuario' },
    fechaCreacion: { type: Date, required: true }
});

module.exports = mongoose.model('Producto', productoSchema);