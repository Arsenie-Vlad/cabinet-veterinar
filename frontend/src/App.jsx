// Fisierul principal de Frontend: Initializeaza si gestioneaza rutarea (vizualizarea paginilor) aplicatiei SPA
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Reviews from './pages/Reviews';

function App() {
  return (
    <Router> {/* Se infasoara aplicatia pentru a permite rutarea Link-urilor */}
      <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes> {/* Defineste rutele catre componente specifice in functie de adresa accesata */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recenzii" element={<Reviews />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
