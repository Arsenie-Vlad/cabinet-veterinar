import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Reviews() {
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName');
  
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  useEffect(() => {
    // Redirecționează utilizatorul imediat dacă nu e conectat
    if (!userName) {
      alert('Trebuie să fii logat pentru a accesa și scrie recenzii!');
      navigate('/login');
    } else {
      fetchReviews();
    }
  }, [navigate, userName]);

  const fetchReviews = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/reviews');
      if (response.ok) {
        const data = await response.json();
        setReviews(data);
      }
    } catch (error) {
      console.error("Eroare la preluarea recenziilor:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ authorName: userName, rating: Number(rating), comment }),
      });

      if (response.ok) {
        alert('Recenzia ta a fost publicată cu succes!');
        setComment('');
        setRating(5);
        fetchReviews(); // Reîncarcă lista cu recenzia ta nouă
      }
    } catch (error) {
      alert('A apărut o eroare la publicarea recenziilor.');
    }
  };

  // Previne încărcarea interfeței dacă redirectul e în curs
  if (!userName) return null;

  return (
    <div className="py-20 px-4 max-w-4xl mx-auto flex-grow">
      <h2 className="text-3xl font-bold text-center text-slate-800 mb-10">Părerea Ta Contează</h2>
      
      {/* Formular de Adăugare Recenzie */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mb-12">
        <h3 className="text-xl font-bold text-emerald-700 mb-4">Lasă o recenzie ca {userName}</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-slate-600 font-medium mb-1">Nota acordată</label>
            <select 
              value={rating} 
              onChange={(e) => setRating(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {[5, 4, 3, 2, 1].map(num => (
                <option key={num} value={num}>{num} Stele {'★'.repeat(num)}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-slate-600 font-medium mb-1">Comentariul tău</label>
            <textarea 
              required
              rows="4"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Cum a fost experiența ta și a animăluțului tău la clinică?"
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
          </div>
          <button type="submit" className="bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-emerald-700 transition shadow-md">
            Publică Recenzia
          </button>
        </form>
      </div>

      {/* Lista Recenziilor din Baza de Date */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-800 border-b pb-2">Ultimele Recenzii ({reviews.length})</h3>
        {reviews.length === 0 ? (
          <p className="text-slate-500">Nu există recenzii încă. Fii primul care lasă una!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((rev) => (
              <div key={rev.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 relative">
                <div className="flex text-yellow-400 mb-4 text-xl">
                  {'★'.repeat(rev.rating)}{'☆'.repeat(5 - rev.rating)}
                </div>
                <p className="text-slate-600 mb-6 italic">"{rev.comment}"</p>
                <div>
                  <h4 className="font-bold text-slate-800">{rev.authorName}</h4>
                  <p className="text-xs text-slate-400 mt-1">Client VetCare</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
