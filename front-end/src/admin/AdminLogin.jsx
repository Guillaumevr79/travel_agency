import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminDashboard from "./AdminDashboard";
import AdminAddDestination from "./AdminAddDestination";
import AdminReservations from "./AdminReservations";
import AdminDestinationList from "./AdminDestinationList";
import AdminMessages from "./AdminMessages";

export default function AdminLogin({ onExit }) {
  const [auth, setAuth] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [section, setSection] = useState("dashboard");

  const [destinations, setDestinations] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [stats, setStats] = useState({ destinations: 0, reservations: 0, messages: 0 });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/admin/login", { username, password });
      setAuth(true);
    } catch (err) {
      toast.error("Erreur : " + (err.response?.data?.error || err.message));
    }
  };

  const fetchAllData = async () => {
    try {
      const [res1, res2, res3] = await Promise.all([
        axios.get("http://localhost:3000/api/destinations"),
        axios.get("http://localhost:3000/api/reservations"),
        axios.get("http://localhost:3000/api/contact"),
      ]);
      setDestinations(res1.data);
      setReservations(res2.data);
      setMessages(res3.data);
      setStats({
        destinations: res1.data.length,
        reservations: res2.data.length,
        messages: res3.data.length,
      });
    } catch (err) {
      console.error("Erreur chargement données :", err);
    }
  };

  const AddDestAdmin = (data) => {
    axios.post("http://localhost:3000/api/destinations", data)
      .then(() => {
        toast.success("Destination ajoutée avec succès !");
        fetchAllData();
      })
      .catch(err => {
        toast.error("Erreur lors de l'ajout : " + (err.response?.data?.error || err.message));
      });
  };

  const deleteDestination = async (id) => {
    if (window.confirm("Supprimer cette destination ?")) {
      try {
        await axios.delete(`http://localhost:3000/api/destinations/${id}`);
        toast.success("Destination supprimée.");
        fetchAllData();
      } catch (err) {
        toast.error("Erreur : " + err.message);
      }
    }
  };

  const updateDestination = async (id, data) => {
    try {
      await axios.put(`http://localhost:3000/api/destinations/${id}`, data);
      toast.success("Destination mise à jour !");
      fetchAllData();
    } catch (err) {
      toast.error("Erreur modification : " + err.message);
    }
  };

  const deleteReservation = async (id) => {
    if (window.confirm("Supprimer cette réservation ?")) {
      try {
        await axios.delete(`http://localhost:3000/api/reservations/${id}`);
        toast.success("Réservation supprimée.");
        fetchAllData();
      } catch (err) {
        toast.error("Erreur : " + err.message);
      }
    }
  };

  const deleteMessage = async (id) => {
    if (window.confirm("Supprimer ce message ?")) {
      try {
        await axios.delete(`http://localhost:3000/api/contact/${id}`);
        toast.success("Message supprimé.");
        fetchAllData();
      } catch (err) {
        toast.error("Erreur : " + err.message);
      }
    }
  };

  useEffect(() => {
    if (auth) {
      fetchAllData();
    }
  }, [auth, section]);

  if (!auth) {
    return (
      <div className="container mt-5">
        <h3>Connexion Admin</h3>
        <form onSubmit={handleLogin}>
          <input type="text" className="form-control mb-3" placeholder="Nom d'utilisateur" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <input type="password" className="form-control mb-3" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="btn btn-primary">Se connecter</button>
        </form>
      </div>
    );
  }

  return (
    <div className="d-flex">
      <AdminDashboard onNavigate={setSection} onLogout={() => { setAuth(false); setUsername(""); setPassword(""); setSection("dashboard"); onExit(); }} />
      <main className="p-4 flex-grow-1">
        {section === "dashboard" && (
          <>
            <h2>Tableau de bord admin</h2>
            <div className="row mt-4">
              <div className="col-md-4">
                <div className="card text-center p-3 shadow hover-shadow cursor-pointer" onClick={() => setSection("destinations")}>
                  <h5>Total destinations</h5>
                  <h2>{stats.destinations}</h2>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center p-3 shadow hover-shadow cursor-pointer" onClick={() => setSection("reservations")}>
                  <h5>Total réservations</h5>
                  <h2>{stats.reservations}</h2>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center p-3 shadow hover-shadow cursor-pointer" onClick={() => setSection("messages")}>
                  <h5>Total messages</h5>
                  <h2>{stats.messages}</h2>
                </div>
              </div>
            </div>
          </>
        )}
        {section === "add-destination" && <AdminAddDestination AddDestAdmin={AddDestAdmin} />}
        {section === "destinations" && <AdminDestinationList destinations={destinations} onDelete={deleteDestination} onUpdate={updateDestination} />}
        {section === "reservations" && <AdminReservations reservations={reservations} onDelete={deleteReservation} />}
        {section === "messages" && <AdminMessages messages={messages} onDelete={deleteMessage} />}
      </main>
    </div>
  );
}

