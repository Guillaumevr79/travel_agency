import React from "react";
import './AdminDashboard.css';

export default function AdminDashboard({ onNavigate, onLogout }) {
  return (
    <aside className="sidebar">
      <h4>Admin Panel</h4>
      <ul>
        <li onClick={() => onNavigate("dashboard")}>Accueil</li>
        <li onClick={() => onNavigate("add-destination")}>Ajouter destination</li>
        <li onClick={() => onNavigate("destinations")}>Destinations</li>
        <li onClick={() => onNavigate("reservations")}>Réservations</li>
        <li onClick={() => onNavigate("messages")}>Messages</li>
      </ul>
      <hr />
      <button className="btn btn-warning mt-3 w-100" onClick={onLogout}>
        Se déconnecter
      </button>
    </aside>
  );
}
