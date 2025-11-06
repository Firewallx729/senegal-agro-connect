import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import { MessageSquare, BookOpen, ShoppingCart, Landmark } from 'lucide-react';

export default function DashboardPage() {
  const { user } = useAuth();

  if (!user) {
    return <div>Chargement des informations utilisateur...</div>;
  }

  const getDashboardMessage = () => {
    switch (user.profileType) {
      case 'Agriculteur':
        return 'Gérez vos cultures, consultez la météo et accédez au marché.';
      case 'Chercheur':
        return 'Partagez vos recherches, collaborez avec des agriculteurs et accédez à des données exclusives.';
      case 'Investisseur':
        return 'Découvrez des projets agricoles prometteurs et suivez la performance de vos investissements.';
      case 'Coopérative':
        return 'Coordonnez avec vos membres, gérez les stocks et planifiez vos ventes.';
      default:
        return 'Bienvenue sur votre espace personnel.';
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-full">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h1 className="text-3xl font-bold text-naatal-green-dark">Tableau de bord - {user.profileType}</h1>
            <p className="mt-2 text-gray-600">Bienvenue, {user.email}!</p>
            <p className="mt-1 text-gray-500">{getDashboardMessage()}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/chat" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col items-center justify-center text-center">
                <MessageSquare className="h-12 w-12 text-naatal-green mb-2" />
                <h2 className="text-xl font-semibold text-naatal-green-dark">Messagerie</h2>
                <p className="text-gray-500 text-sm">Discutez avec d'autres membres</p>
            </Link>
             <Link to="/forum" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col items-center justify-center text-center">
                <Landmark className="h-12 w-12 text-naatal-green mb-2" />
                <h2 className="text-xl font-semibold text-naatal-green-dark">Forum</h2>
                <p className="text-gray-500 text-sm">Section à venir</p>
            </Link>
             <Link to="/library" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col items-center justify-center text-center">
                <BookOpen className="h-12 w-12 text-naatal-green mb-2" />
                <h2 className="text-xl font-semibold text-naatal-green-dark">Bibliothèque</h2>
                <p className="text-gray-500 text-sm">Section à venir</p>
            </Link>
             <Link to="/market" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col items-center justify-center text-center">
                <ShoppingCart className="h-12 w-12 text-naatal-green mb-2" />
                <h2 className="text-xl font-semibold text-naatal-green-dark">Marché</h2>
                <p className="text-gray-500 text-sm">Section à venir</p>
            </Link>
        </div>
      </div>
    </div>
  );
}
