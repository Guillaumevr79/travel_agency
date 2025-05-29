const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    lieu: { type: String, required: true },
    description: String,
    prix: Number,
    disponible: { type: Boolean, default: true }
});

module.exports = mongoose.model('Destination', destinationSchema);

