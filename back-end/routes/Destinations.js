const express = require('express');
const Destination = require('../models/Destination.js');

const router = express.Router();

// Récupérer toutes les destinations
router.get('/', async (req, res) => {
    try {
        const destinations = await Destination.find();
        res.json(destinations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Ajouter une nouvelle destination
router.post('/', async (req, res) => {
    try {
        const newDest = new Destination(req.body);
        await newDest.save();
        res.status(201).json(newDest);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Modifier une destination existante
router.put('/:id', async (req, res) => {
    try {
        const updated = await Destination.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Supprimer une destination
router.delete('/:id', async (req, res) => {
    await Destination.findByIdAndDelete(req.params.id);
    res.json({ message: 'Destination supprimée' });
});



// export default router;
module.exports = router;
