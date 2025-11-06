import { Link, useNavigate } from 'react-router-dom';
import { Leaf, LogOut, UserCircle, MessageSquare, LayoutDashboard, BookOpen, ShoppingCart, Landmark } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Leaf className="h-8 w-8 text-naatal-green" />
          <span className="text-2xl font-bold text-naatal-green-dark">Naatal SN</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-naatal-green">Accueil</Link>
          {user && (
            <>
              <Link to="/dashboard" className="text-gray-600 hover:text-naatal-green">Tableau de bord</Link>
              <Link to="/chat" className="text-gray-600 hover:text-naatal-green">Messagerie</Link>
              <Link to="/forum" className="text-gray-600 hover:text-naatal-green">Forum</Link>
              <Link to="/library" className="text-gray-600 hover:text-naatal-green">Bibliothèque</Link>
              <Link to="/market" className="text-gray-600 hover:text-naatal-green">Marché</Link>
            </>
          )}
        </div>
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-gray-700 font-medium hidden sm:block">Bienvenue, {user.profileType}</span>
              <button onClick={handleLogout} className="bg-naatal-yellow text-gray-900 font-semibold py-2 px-4 rounded-md hover:bg-naatal-yellow-dark transition duration-300 flex items-center space-x-2">
                <LogOut size={18} />
                <span>Déconnexion</span>
              </button>
            </>
          ) : (
            <>
                <Link to="/login" className="bg-naatal-green text-white font-semibold py-2 px-4 rounded-md hover:bg-naatal-green-dark transition duration-300 hidden sm:block">Connexion</Link>
                <Link to="/signup" className="bg-naatal-yellow text-gray-900 font-semibold py-2 px-4 rounded-md hover:bg-naatal-yellow-dark transition duration-300">Inscription</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
