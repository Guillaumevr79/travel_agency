import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function ContactForm({onContactSubmit}) {

    // État pour stocker les données du formulaire
    const [formData, setFormData] = useState({nom: '', prenom: '', numero: '', email: '', message: '',});

    // Fonction pour gérer les changements dans les champs du formulaire
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validation des données du formulaire
        // appel de la fonction onContactSubmit passée en props
        // pour envoyer les données du formulaire
        onContactSubmit(formData);
        setFormData({ nom: '', prenom: '', numero: '', email: '', message: '' });
    };

    return (
        <main className="container mt-5">
            <h2>Contactez-nous</h2>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="prenom" className="form-label">Prénom</label>
                    <input type="text" className="form-control" id="prenom" name="prenom" value={formData.prenom} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="nom" className="form-label">Nom</label>
                    <input type="text" className="form-control" id="nom" name="nom" value={formData.nom} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="numero" className="form-label">Numéro de téléphone</label>
                    <input type="tel" className="form-control" id="numero" name="numero" value={formData.numero} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>
        </main>
    );
}
