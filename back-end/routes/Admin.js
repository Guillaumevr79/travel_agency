const express = require('express');
const bcrypt = require('bcrypt');
const AdminUser = require('../models/AdminUser');

const router = express.Router();

// route pour connexion d'un administrateur
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const admin = await AdminUser.findOne({ username });
    if (!admin) return res.status(401).json({ error: "Utilisateur inconnu" });

    const valid = await bcrypt.compare(password, admin.password);
    if (!valid) return res.status(401).json({ error: "Mot de passe incorrect" });

    res.status(200).json({ message: "Connexion réussie" });
});

module.exports = router;
