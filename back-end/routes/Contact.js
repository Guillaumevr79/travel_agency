const express = require('express');
const Contact = require('../models/Contact.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const messages = await Contact.find();
        res.json(messages);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newMessage = new Contact(req.body);
        await newMessage.save();
        res.status(201).json({ message: 'Message envoyé avec succès' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.json({ message: 'Message supprimé' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


module.exports = router;
