// ==============================================
// Modelo para bodegas
// ==============================================
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bodegaSchema = new Schema({
    codigo: { type: String, required: [true, 'Este es un campo obligatorio'] },
    nombre: { type: String, required: [true, 'Este es un campo obligatorio'] },
    valor: { type: Number, default: 0 },
    nItems: { type: Number, default: 0 },
    fechaCreacion: { type: Date, required: true },
    usuario: { type: Schema.Types.ObjectId, ref: 'usuario', required: [true, 'Campo Obligatorio'] },
    status: { type: Boolean, default: true }
});

module.exports = mongoose.model('Bodega', bodegaSchema);