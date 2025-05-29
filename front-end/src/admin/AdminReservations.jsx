import React from "react";

export default function AdminReservations({ reservations, onDelete }) {
  return (
    <div>
      <h4>Liste des Réservations</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Destination</th>
            <th>Date départ</th>
            <th>Personnes</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((r) => (
            <tr key={r._id}>
              <td>{r.nom} {r.prenom}</td>
              <td>{r.email}</td>
              <td>{r.destination}</td>
              <td>{new Date(r.date_depart).toLocaleDateString()}</td>
              <td>{r.nombre_personnes}</td>
              <td>
                <button
                  onClick={() => onDelete(r._id)}
                  className="btn btn-danger btn-sm"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
