import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Toaster, toast } from 'sonner';

const profiles = ['Agriculteur', 'Chercheur', 'Investisseur', 'Coopérative'];

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profileType, setProfileType] = useState(profiles[0]);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !profileType) {
      toast.error('Veuillez remplir tous les champs.');
      return;
    }
    console.log('Simulating signup with:', { email, password, profileType });
    toast.success('Inscription réussie ! Vous êtes maintenant connecté.');
    // Simulate login
    login(email, profileType);
    // Redirect to dashboard
    setTimeout(() => navigate('/dashboard'), 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12">
      <Toaster richColors />
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-naatal-green-dark">Créer un compte</h1>
        <p className="text-lg text-gray-600 mt-2">Rejoignez la communauté Naatal SN</p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profileType">
              Type de profil
            </label>
            <select
              id="profileType"
              value={profileType}
              onChange={(e) => setProfileType(e.target.value)}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              {profiles.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-naatal-green hover:bg-naatal-green-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              S'inscrire
            </button>
          </div>
        </form>
        <p className="text-center text-gray-600 text-sm mt-6">
          Vous avez déjà un compte ?{' '}
          <Link to="/login" className="font-bold text-naatal-green hover:underline">
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
}
