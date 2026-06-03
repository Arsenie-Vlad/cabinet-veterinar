import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, User, LogOut } from 'lucide-react';

export default function Navbar() {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    // Verificam daca utilizatorul a fost salvat la logare/inregistrare
    const storedUser = localStorage.getItem('userName');
    if (storedUser) {
      setUserName(storedUser);
    }
  }, []);

  const handleLogout = () => {
    const isConfirmed = window.confirm('Ești sigur că dorești să te deconectezi?');
    if (isConfirmed) {
      localStorage.removeItem('userName');
      setUserName(null);
      // Refresh mic pentru a asigura resetarea aplicatiei
      window.location.href = '/';
    }
  };

  const scrollToTop = () => {
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" onClick={scrollToTop} className="flex items-center gap-2 text-emerald-600">
          <Stethoscope size={28} />
          <span className="text-xl font-bold">VetCare</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-slate-600 font-medium">
          <Link to="/" onClick={scrollToTop} className="hover:text-emerald-600 transition">Acasă</Link>
          <a href="/#servicii" className="hover:text-emerald-600 transition">Servicii</a>
          <a href="/#echipa" className="hover:text-emerald-600 transition">Echipa Noastră</a>
          <Link to="/recenzii" className="hover:text-emerald-600 transition font-bold text-emerald-500">Recenzii</Link>
        </nav>
        
        <div className="flex gap-4 items-center">
          {userName ? (
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center border border-slate-300 shadow-sm overflow-hidden text-emerald-500">
                  <User size={24} />
                </div>
                <span className="text-slate-800 font-bold hidden md:block">Salut, {userName.split(' ')[0]}</span>
              </div>
              <button 
                onClick={handleLogout} 
                className="text-slate-400 hover:text-red-500 transition flex items-center gap-1"
                title="Deconectare"
              >
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="text-emerald-600 font-semibold hover:text-emerald-700 py-2">Log In</Link>
              <Link to="/register" className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition">Cont Nou</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
