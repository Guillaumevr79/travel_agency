const express = require('express');
const Reservation = require('../models/Reservation.js');

const router = express.Router();

// Obtenir toutes les réservations
router.get('/', async (req, res) => {
        const reservations = await Reservation.find();
    res.json(reservations);
});

// Ajouter une réservation
router.post('/', async (req, res) => {
    try {
        const newRes = new Reservation(req.body);
        await newRes.save();
        res.status(201).json(newRes);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Supprimer une réservation
router.delete('/:id', async (req, res) => {
        await Reservation.findByIdAndDelete(req.params.id);
    res.status(204).end();
});

// export default router;
module.exports = router;
