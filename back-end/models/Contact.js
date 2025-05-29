const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    numero: String,
    email: String,
    message: String,
});

// export default mongoose.model('Contact', contactSchema);
module.exports = mongoose.model('Contact', contactSchema);
