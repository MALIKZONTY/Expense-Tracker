import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import AuthContext, { AuthProvider } from './context/AuthContext';
import Dashboard from './pages/Dashboard';
import AddTransaction from './pages/AddTransaction';
import TransactionList from './pages/TransactionList';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LandingPage from './pages/LandingPage';

function NavBar() {
  const location = useLocation();
  const { user, logout } = useContext(AuthContext);
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">SmartTracker</Link>
      <div className="nav-links">
        {user ? (
          <>
            <Link to="/" className={`nav-link ${isActive('/')}`}>Dashboard</Link>
            <Link to="/add" className={`nav-link ${isActive('/add')}`}>Add Transaction</Link>
            <Link to="/transactions" className={`nav-link ${isActive('/transactions')}`}>Transactions</Link>
            <button 
              onClick={() => { if(window.confirm("Are you sure you want to logout?")) logout(); }} 
              className="btn nav-logout"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="btn btn-primary" style={{ padding: '0.4rem 1rem' }}>Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (!user) return <Navigate to="/login" />;
  return children;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/" element={<AuthContext.Consumer>{({ user }) => user ? <Dashboard /> : <LandingPage />}</AuthContext.Consumer>} />
            <Route path="/add" element={<ProtectedRoute><AddTransaction /></ProtectedRoute>} />
            <Route path="/transactions" element={<ProtectedRoute><TransactionList /></ProtectedRoute>} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
