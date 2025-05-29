import React from "react";

export default function AdminMessages({ messages, onDelete }) {
  return (
    <div>
      <h4>Messages de contact</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {messages.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">Aucun message</td>
            </tr>
          ) : (
            messages.map((m) => (
              <tr key={m._id}>
                <td>{m.nom || "—"} {m.prenom || ""}</td>
                <td>{m.email}</td>
                <td>{m.numero}</td>
                <td>{m.message}</td>
                <td>
                  <button
                    onClick={() => onDelete(m._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
