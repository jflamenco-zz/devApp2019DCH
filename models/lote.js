// ==============================================
// Modelo para lotes de productos
// ==============================================
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var loteSchema = new Schema({
    codigo: { type: String, required: true, unique: true },
    producto: { type: Schema.Types.ObjectId, ref: 'producto', required: true },
    compra: { type: Schema.Types.ObjectId, ref: 'compra', required: true },
    vencimiento: { type: Date, required: true },
    existencia: { type: Number, default: 0 }
});