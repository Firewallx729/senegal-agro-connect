import { createContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '../lib/supabaseClient'; // Import supabase client
import { Session, User as SupabaseUser } from '@supabase/supabase-js';

export interface UserProfile {
  id: string;
  email: string;
  profile_type: string;
}

export interface AuthContextType {
  user: SupabaseUser | null;
  session: Session | null;
  profile: UserProfile | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, profileType: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, profileType: string) => void;
  logout: () => void;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) {
        console.error('Error getting session:', error.message);
      }
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    };

    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (user) {
      const fetchProfile = async () => {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
        if (error) {
          console.error('Error fetching profile:', error.message);
        } else {
          setProfile(data);
        }
      };
      fetchProfile();
    } else {
      setProfile(null);
    }
  }, [user]);

  const signup = async (email: string, password: string, profileType: string) => {
    const { data: { user }, error } = await supabase.auth.signUp({ email, password });
    if (error) throw new Error(error.message);
    if (!user) throw new Error('Signup failed: no user returned');

    const { error: profileError } = await supabase
      .from('profiles')
      .insert({ id: user.id, email, profile_type: profileType });

    if (profileError) throw new Error(profileError.message);
  };

  const login = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw new Error(error.message);
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
  };

  const value = {
    user,
    session,
    profile,
    login,
    signup,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
