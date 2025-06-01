import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Destinations({ destinations }) {
    const [search, setSearch] = useState("");

    // Filtrage dynamique des destinations
    // en fonction de la saisie de l'utilisateur
    const filteredDestinations = destinations.filter((dest) =>
        dest.lieu.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main className="p-4">
            <div>
                <h3>Liste des Destinations</h3>

                {/* Barre de recherche */}
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Rechercher un lieu..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Lieu</th>
                            <th>Description</th>
                            <th>Prix (€)</th>
                            <th>Disponibilité</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredDestinations.map((dest) => (
                            <tr key={dest._id}>
                                <td>{dest.lieu}</td>
                                <td>{dest.description || "—"}</td>
                                {/* <td>{dest.prix ? `${dest.prix} €` : "—"}</td> */}
                                <td>{dest.prix + " €" || "—"}</td>
                                <td>
                                    <span className={`badge bg-${dest.disponible ? "success" : "secondary"}`}>
                                        {dest.disponible ? "Disponible" : "Indisponible"}
                                    </span>
                                </td>
                            </tr>
                        ))}
                        {filteredDestinations.length === 0 && (
                            <tr>
                                <td colSpan="4" className="text-center text-muted">Aucune destination trouvée.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </main>
    );
}
