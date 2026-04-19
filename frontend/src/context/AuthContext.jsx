import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // If we have a token, we could optionally fetch /api/auth/me to verify it
    // For now, simple trusting of local storage token.
    if (token) {
      setUser({ id: 'authed' }); // Dummy user object unless we decode JWT
    } else {
      setUser(null);
    }
    setLoading(false);
  }, [token]);

  const login = async (email, password) => {
    const res = await fetch('http://localhost:5001/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    
    if (res.ok) {
      const data = await res.json();
      localStorage.setItem('token', data.token);
      setToken(data.token);
      setUser(data.user);
      navigate('/');
      return true;
    } else {
      const errorData = await res.json();
      throw new Error(errorData.error);
    }
  };

  const register = async (email, password) => {
    const res = await fetch('http://localhost:5001/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    
    if (res.ok) {
      const data = await res.json();
      localStorage.setItem('token', data.token);
      setToken(data.token);
      setUser(data.user);
      navigate('/');
      return true;
    } else {
      const errorData = await res.json();
      throw new Error(errorData.error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
