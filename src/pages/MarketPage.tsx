import { Link } from 'react-router-dom';

export default function MarketPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl font-bold text-naatal-green-dark mb-4">Marché Agricole</h1>
      <p className="text-xl text-gray-700 mb-8">Cette section est en cours de développement et sera bientôt disponible.</p>
      <img src="/icons/coming-soon.svg" alt="Bientôt disponible" className="w-64 h-64 mb-8" />
      <Link to="/dashboard" className="bg-naatal-yellow text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-naatal-yellow-dark transition duration-300">
        Retour au tableau de bord
      </Link>
    </div>
  );
}
