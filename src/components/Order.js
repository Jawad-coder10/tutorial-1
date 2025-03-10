import React from 'react';

export default function Order() {
  return (
    <div className="mt-16 bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Détails de la Commande</h2>
      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
        <p className="text-gray-600">Commande #12345</p>
        <p className="text-gray-500 mt-2">Date: 10 Mars 2025</p>
        <p className="text-gray-600 mt-4">Produits: <span className="font-bold">2 x Café, 1 x Croissant</span></p>
        <p className="text-lg font-semibold text-green-600 mt-4">Total: 15,50 €</p>
        <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
          Voir la commande
        </button>
      </div>
    </div>
  );
}
