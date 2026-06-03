import React from 'react';

export default function Home() {
  const reviews = [
    { name: 'Maria Ionescu', pet: 'Max (Câine)', text: 'Un personal excelent și foarte empatic. Max se simte mult mai bine acum.', rating: 5 },
    { name: 'Andrei Popa', pet: 'Luna (Pisică)', text: 'Operația de sterilizare a decurs perfect. Recomand cu toată încrederea!', rating: 5 },
    { name: 'Diana Vasile', pet: 'Bella (Câine)', text: 'Cea mai bună clinică veterinară din oraș! Tratamente moderne.', rating: 4 }
  ];

  const team = [
    { name: 'Dr. Alexandru Stan', title: 'Medic Primar Veterinar (Chirurgie)', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=256&q=80' },
    { name: 'Dr. Elena Dobre', title: 'Medic Specialist (Boli Interne)', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=256&q=80' },
    { name: 'Dr. Radu Călin', title: 'Dermatologie și Alergologie', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=256&q=80' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-emerald-600 text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&w=1920&q=80" 
          alt="Veterinary Clinic" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="max-w-6xl mx-auto text-center relative z-20">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg">Îngrijire de Top pentru Prietenul Tău Necuvântător</h1>
          <p className="text-xl md:text-2xl mb-10 text-emerald-50 max-w-3xl mx-auto font-light drop-shadow-md">Echipa noastră oferă servicii medicale la cele mai înalte standarde, din pasiune pentru animale.</p>
          <button className="bg-emerald-500 text-white font-bold py-4 px-10 rounded-full shadow-xl hover:bg-emerald-400 hover:scale-105 transition-all">
            Programează-te acum
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicii" className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Serviciile Noastre</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {['Consultații Generale', 'Vaccinări & Deparazitări', 'Chirurgie & Ortopedie', 'Cosmetică și Igienă'].map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center border border-slate-100">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-500 font-bold text-2xl">
                +
              </div>
              <h3 className="text-lg font-bold text-slate-700 mb-3">{service}</h3>
              <p className="text-slate-500 text-sm">Aparatură de ultimă generație pentru diagnosticare rapidă și corectă.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section id="echipa" className="bg-emerald-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Cunoaște Echipa Noastră</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-md border-4 border-emerald-50" />
                <h3 className="text-xl font-bold text-emerald-700">{member.name}</h3>
                <p className="text-slate-500">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">Ce Spun Clienții Noștri</h2>
        <p className="text-center text-slate-500 mb-12">Peste 500 de clienți mulțumiți în ultimul an.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative">
              <div className="flex text-yellow-400 mb-4">
                {'★'.repeat(rev.rating)}{'☆'.repeat(5 - rev.rating)}
              </div>
              <p className="text-slate-600 mb-6 italic">"{rev.text}"</p>
              <div>
                <h4 className="font-bold text-slate-800">{rev.name}</h4>
                <p className="text-sm text-slate-500">Pet: {rev.pet}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
