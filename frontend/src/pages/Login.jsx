// Componenta pentru autentificarea utilizatorului prin API-ul Backend
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState(''); // React state pentru datele introduse
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Previne actiunea implicita de reincarcare a paginii la trimiterea formularului
    try {
      const response = await fetch('http://localhost:8080/api/auth/login', { // Conectarea cu endpoint-ul curent din Back-End
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(`Salutare, ${data.name}! Logare cu succes.`);
        localStorage.setItem('userName', data.name); // Salvarea utilizatorului activ in sesiune pe Front-End
        window.location.href = '/'; // Redirectionare home dupa un succes
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
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-6">Autentificare</h2>
        <form onSubmit={handleLogin} className="space-y-4">
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
            Intră în cont
          </button>
        </form>
        <p className="mt-6 text-center text-slate-500">
          Nu ai cont? <Link to="/register" className="text-emerald-600 font-semibold hover:underline">Înregistrează-te</Link>
        </p>
      </div>
    </div>
  );
}
