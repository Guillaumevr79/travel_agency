const mongoose = require('mongoose');

const adminUserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true } 
});

// export du modele pour le rendre accessible dans d'autres fichiers
module.exports = mongoose.model('AdminUser', adminUserSchema);
