import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AdminAddDestination({AddDestAdmin}) {
  const [formData, setFormData] = useState({lieu: '', description: '', prix: '', disponible: true,});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({...prev, [name]: type === 'checkbox' ? checked : value,}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    AddDestAdmin(formData);
    setFormData({lieu: '', description: '', prix: '', disponible: true, });

  };

  return (
    <div>
      <h4>Ajouter une Destination</h4>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <input
            type="text"
            name="lieu"
            className="form-control"
            placeholder="Lieu"
            value={formData.lieu}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12">
          <textarea
            name="description"
            className="form-control"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="col-md-4">
          <input
            type="number"
            name="prix"
            className="form-control"
            placeholder="Prix"
            value={formData.prix}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-4 form-check mt-2">
          <input
            type="checkbox"
            className="form-check-input"
            name="disponible"
            checked={formData.disponible}
            onChange={handleChange}
            id="disponible"
          />
          <label className="form-check-label" htmlFor="disponible">
            Disponible
          </label>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-success">Ajouter</button>
        </div>
      </form>
    </div>
  );
}
