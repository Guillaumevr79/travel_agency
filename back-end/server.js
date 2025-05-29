const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// Middleware pour parser le JSON des requêtes
app.use(express.json());
// Middleware pour autoriser les requêtes provenant de n'importe quel domaine
app.use(cors());

// Import des routes
const reservationRoutes = require('./routes/Reservation');
const contactRoutes = require('./routes/Contact');
const destinationRoutes = require('./routes/Destinations');
const adminRoutes = require('./routes/Admin');

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/travel-agency', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {console.log('MongoDB connecté'); }).catch(err => {console.error('Erreur MongoDB :', err);});

// Routes API
app.use('/api/reservations', reservationRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/destinations', destinationRoutes);
app.use('/api/admin', adminRoutes);

// Démarrage du serveur
app.listen(3000, () => {console.log(`Serveur démarré`);});