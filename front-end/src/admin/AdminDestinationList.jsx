import React, { useState } from "react";

export default function AdminDestinationList({ destinations, onDelete, onUpdate }) {
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({
    lieu: "",
    description: "",
    prix: "",
    disponible: true
  });

  const handleEdit = (dest) => {
    setEditId(dest._id);
    setEditForm({
      lieu: dest.lieu,
      description: dest.description,
      prix: dest.prix,
      disponible: dest.disponible,
    });
  };

  const handleEditChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleEditSubmit = () => {
    onUpdate(editId, editForm);
    setEditId(null);
  };

  const handleCancelEdit = () => {
    setEditId(null);
  };

  return (
    <div>
      <h4>Liste des Destinations</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Lieu</th>
            <th>Description</th>
            <th>Prix (€)</th>
            <th>Disponible</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {destinations.map((dest) => (
            <tr key={dest._id}>
              {editId === dest._id ? (
                <>
                  <td><input name="lieu" value={editForm.lieu} onChange={handleEditChange} className="form-control" /></td>
                  <td><input name="description" value={editForm.description} onChange={handleEditChange} className="form-control" /></td>
                  <td><input name="prix" value={editForm.prix} onChange={handleEditChange} className="form-control" /></td>
                  <td className="text-center">
                    <input type="checkbox" name="disponible" checked={editForm.disponible} onChange={handleEditChange} />
                  </td>
                  <td>
                    <button onClick={handleEditSubmit} className="btn btn-success btn-sm me-2">Valider</button>
                    <button onClick={handleCancelEdit} className="btn btn-secondary btn-sm">Annuler</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{dest.lieu}</td>
                  <td>{dest.description}</td>
                  <td>{dest.prix}</td>
                  <td>
                    <span className={`badge bg-${dest.disponible ? "success" : "secondary"}`}>
                      {dest.disponible ? "Oui" : "Non"}
                    </span>
                  </td>
                  <td>
                    <button onClick={() => handleEdit(dest)} className="btn btn-secondary btn-sm me-2">Modifier</button>
                    <button onClick={() => onDelete(dest._id)} className="btn btn-danger btn-sm">Supprimer</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
