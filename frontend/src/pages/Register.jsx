import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Cont creat cu succes!');
        // Logare automată după înregistrare:
        localStorage.setItem('userName', name);
        window.location.href = '/'; 
      } else {
        alert('Eroare: ' + data.message);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Nu ne-am putut conecta la serverul backend.');
    }
  };

  return (
    <div className="flex items-center justify-center py-20 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-6">Creare Cont Nou</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-slate-600 font-medium mb-1">Nume Complet</label>
            <input 
              type="text" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              placeholder="Ion Popescu"
            />
          </div>
          <div>
            <label className="block text-slate-600 font-medium mb-1">Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              placeholder="nume@exemplu.ro"
            />
          </div>
          <div>
            <label className="block text-slate-600 font-medium mb-1">Parolă</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="w-full bg-emerald-600 text-white font-bold py-3 rounded-lg hover:bg-emerald-700 transition shadow-md">
            Creează Contul
          </button>
        </form>
        <p className="mt-6 text-center text-slate-500">
          Ai deja cont? <Link to="/login" className="text-emerald-600 font-semibold hover:underline">Loghează-te</Link>
        </p>
      </div>
    </div>
  );
}
