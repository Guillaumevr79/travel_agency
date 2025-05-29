const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    email: String,
    telephone: String,
    date_depart: Date,
    destination: String,
    nombre_personnes: Number,
    preferences: String,
});

// export default mongoose.model('Reservation', reservationSchema);
module.exports = mongoose.model('Reservation', reservationSchema);

