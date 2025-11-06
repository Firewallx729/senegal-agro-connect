import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Toaster, toast } from 'sonner';
import ProfileCard from '../components/ProfileCard';

const profiles = [
  {
    name: 'Agriculteur',
    icon: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/2f9b6e71-d93a-4527-8123-ac23efe55055/farmer-icon-ftx4u7y-1762460330303.webp',
    description: 'Accédez à des ressources, des conseils et des opportunités de marché.',
  },
  {
    name: 'Chercheur',
    icon: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/2f9b6e71-d93a-4527-8123-ac23efe55055/researcher-icon-f448jt7-1762460337373.webp',
    description: 'Collaborez, partagez vos recherches et accédez à des données agricoles.',
  },
  {
    name: 'Investisseur',
    icon: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/2f9b6e71-d93a-4527-8123-ac23efe55055/investor-icon-u37gdga-1762460343903.webp',
    description: 'Découvrez des projets agricoles prometteurs et suivez vos investissements.',
  },
  {
    name: 'Coopérative',
    icon: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/2f9b6e71-d93a-4527-8123-ac23efe55055/cooperative-icon-36p69ms-1762460351913.webp',
    description: 'Gérez vos membres, vos productions et accédez à des marchés plus larges.',
  },
];

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Veuillez entrer votre email et mot de passe.');
      return;
    }
    // This is a simulation. In a real app, you'd check credentials.
    // We'll just log in with a default profile type for demonstration.
    console.log('Simulating login with:', { email, password });
    toast.success('Connexion réussie !');
    login(email, 'Agriculteur'); // Defaulting to Agriculteur for demo
    setTimeout(() => navigate('/dashboard'), 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12">
      <Toaster richColors />
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-naatal-green-dark">Connectez-vous</h1>
        <p className="text-lg text-gray-600 mt-2">Accédez à votre tableau de bord Naatal SN</p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mb-12">
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
          <div className="mb-6">
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
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-naatal-green hover:bg-naatal-green-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Se connecter
            </button>
          </div>
        </form>
        <p className="text-center text-gray-600 text-sm mt-6">
          Pas encore de compte ?{' '}
          <Link to="/signup" className="font-bold text-naatal-green hover:underline">
            Inscrivez-vous
          </Link>
        </p>
      </div>

      <div className="text-center">
        <p className="text-lg text-gray-600 mt-2 mb-4">Ou explorez les profils</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {profiles.map((profile) => (
            <div key={profile.name} className="opacity-70">
                <ProfileCard {...profile} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
