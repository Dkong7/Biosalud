import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

interface AuthContextType {
  user: netlifyIdentity.User | null;
  login: () => void;
  logout: () => void;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<netlifyIdentity.User | null>(null);

  useEffect(() => {
    // Inicializar el widget
    netlifyIdentity.init();

    // Comprobar si ya hay usuario al cargar
    const currentUser = netlifyIdentity.currentUser();
    setUser(currentUser);

    // Escuchar eventos de login/logout
    netlifyIdentity.on('login', (user) => {
      console.log('Login exitoso', user);
      setUser(user);
      netlifyIdentity.close(); // Cerrar modal al entrar
    });

    netlifyIdentity.on('logout', () => {
      console.log('Logout exitoso');
      setUser(null);
    });

    // Limpiar listeners al desmontar
    return () => {
      netlifyIdentity.off('login');
      netlifyIdentity.off('logout');
    };
  }, []);

  const login = () => {
    netlifyIdentity.open();
  };

  const logout = () => {
    netlifyIdentity.logout();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
};
