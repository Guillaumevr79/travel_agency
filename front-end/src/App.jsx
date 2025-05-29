import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from './components/Footer';
import Header from './components/Header';
import AdminLogin from './admin/AdminLogin';
import Homepage from './components/Homepage';
import ReservationForm from './components/ReservationForm';
import Gallery from './components/Gallery';
import Destinations from './components/Destinations';
import ContactForm from './components/ContactForm';

function App() {

  // État pour gérer la page active
  // Initialisation de la page active à "home"
  const [activePage, setActivePage] = useState("home");

  // État pour stocker les destinations récupérées depuis l'API
  // Initialisation de destinations comme un tableau vide
  const [destinations, setDestinations] = useState([]);

  // Chargement des destinations depuis l'API au démarrage de l'application
  useEffect(() => {
        axios.get("http://localhost:3000/api/destinations")
            .then(res => setDestinations(res.data))
            .catch(err => console.error("Erreur chargement destinations :", err));
    }, []);

  // Fonction pour gérer l'envoi du formulaire de contact
  const onContactSubmit = (data) => {
    axios.post("http://localhost:3000/api/contact", data)
      .then(() => {toast.success("Message envoyé avec succès !");})
      .catch(err => {toast.error("Erreur lors de l'envoi : " + (err.response?.data?.error || err.message));});
  };

  // Fonction pour gérer l'ajout d'une réservation
  const addReservation = (data) => {
    axios.post("http://localhost:3000/api/reservations", data)
      .then(() => {toast.success("Réservation envoyée!");})
      .catch(err => {toast.error("Erreur lors de la réservation : " + (err.response?.data?.error || err.message));});
  };
  
// Fonction pour gérer la navigation et le rendu des pages
  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Homepage />;
      case "reservation":
        return <ReservationForm destinations={destinations} addReservation={addReservation} />;
      case "gallery":
        return <Gallery />;
      case "destinations":
        return <Destinations destinations={destinations} />;
      case "contact":
        return <ContactForm onContactSubmit={onContactSubmit}/>;
      case "admin":
        // return <AdminLogin />;
        return <AdminLogin onExit={() => setActivePage("home")} />;
      default:
        return <Homepage />;
    }
  };

  return (
    <>
    
      <Header onNavigate={setActivePage} />
      {renderPage()}
      {/* <Footer /> */}
      {activePage !== "admin" && <Footer />}
    </>
  );
}

export default App;

