import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Header({ onNavigate }) {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
                <div className="navbar-brand nom-site text-white">Travel Pro</div>

                {/* Bouton hamburger aligné à droite */}
                <button
                    className="navbar-toggler ms-auto"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navContent"
                    aria-controls="navContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Contenu du menu */}
                <div className="collapse navbar-collapse" id="navContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <button onClick={() => onNavigate("home")} className="nav-link custom-nav-link">
                                Accueil
                            </button>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => onNavigate("reservation")} className="nav-link custom-nav-link">
                                Réservation
                            </button>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => onNavigate("destinations")} className="nav-link custom-nav-link">
                                Destinations
                            </button>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => onNavigate("gallery")} className="nav-link custom-nav-link">
                                Galerie
                            </button>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => onNavigate("contact")} className="nav-link custom-nav-link">
                                Contact
                            </button>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => onNavigate("admin")} className="nav-link custom-nav-link">
                                Admin
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
