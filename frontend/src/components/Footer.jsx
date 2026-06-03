import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h4 className="text-white text-xl font-bold mb-4 flex items-center gap-2">VetCare</h4>
          <p className="text-sm">Cabinetul veterinar unde prietenul tău<br/>necuvântător e tratat ca parte din familie.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Program</h4>
          <ul className="space-y-2 text-sm">
            <li>Luni - Vineri: 08:00 - 20:00</li>
            <li>Sâmbătă: 09:00 - 14:00</li>
            <li>Duminică: Închis (Urgențe)</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Strada Sănătății Nr. 12, București</li>
            <li>Telefon: 0712 345 678</li>
            <li>Email: contact@vetcare.ro</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm mt-10 pt-4 border-t border-slate-700">
        &copy; {new Date().getFullYear()} VetCare - Toate drepturile rezervate.
      </div>
    </footer>
  );
}
