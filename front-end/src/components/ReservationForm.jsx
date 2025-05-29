import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ReservationForm({destinations, addReservation}) {
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        date_depart: "",
        destination: "",
        nombre_personnes: "",
        preferences: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        addReservation(formData);
        setFormData({nom: "", prenom: "", email: "", telephone: "", date_depart: "", destination: "", nombre_personnes: "", preferences: "",});
    };

    return (
        <main className="container py-5">
            <ToastContainer />
            <form className="row g-3" onSubmit={handleSubmit}>
                <legend>Réserver votre voyage</legend>
                <div className="col-md-6">
                    <label htmlFor="nom" className="form-label">Nom :</label>
                    <input type="text" className="form-control" id="nom" value={formData.nom} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="prenom" className="form-label">Prénom :</label>
                    <input type="text" className="form-control" id="prenom" value={formData.prenom} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email :</label>
                    <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="telephone" className="form-label">Téléphone :</label>
                    <input type="tel" className="form-control" id="telephone" value={formData.telephone} onChange={handleChange} required />
                </div>
                <div className="col-12">
                    <label htmlFor="date_depart" className="form-label">Date de départ :</label>
                    <input type="date" className="form-control" id="date_depart" value={formData.date_depart} onChange={handleChange} required />
                </div>
                <div className="col-12">
                    <label htmlFor="destination" className="form-label">Destination :</label>
                    <select id="destination" className="form-select" value={formData.destination} onChange={handleChange} required>
                        <option value="">-- Choisissez une destination --</option>
                        {destinations.map((dest) =>
                            dest.disponible && (
                                <option key={dest._id} value={dest.lieu}>
                                    {dest.lieu} – {dest.prix} €
                                </option>
                            )
                        )}
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="nombre_personnes" className="form-label">Nombre de personnes :</label>
                    <input type="number" className="form-control" id="nombre_personnes" value={formData.nombre_personnes} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="preferences" className="form-label">Préférences :</label>
                    <input type="text" className="form-control" id="preferences" value={formData.preferences} onChange={handleChange} required />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Réserver</button>
                </div>
            </form>
        </main>
    );
}
