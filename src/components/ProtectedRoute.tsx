import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function ProtectedRoute() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Chargement...</div>; // Or a spinner component
  }

  return user ? <Outlet /> : <Navigate to="/login" replace />;
}
