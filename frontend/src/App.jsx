import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import AuthContext, { AuthProvider } from './context/AuthContext';
import { UIProvider, useUI } from './context/UIContext';
import Dashboard from './pages/Dashboard';
import AddTransaction from './pages/AddTransaction';
import TransactionList from './pages/TransactionList';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Features from './pages/Features';
import Demo from './pages/Demo';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Disclaimer from './pages/Disclaimer';
import Contact from './pages/Contact';
import AdminInquiries from './pages/AdminInquiries';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import Footer from './components/Footer';

function NavBar() {
  const location = useLocation();
  const { user, logout } = useContext(AuthContext);
  const { confirm } = useUI();
  const isActive = (path) => location.pathname === path ? 'active' : '';

  const handleLogout = async () => {
    const confirmed = await confirm({
      title: 'Logout',
      message: 'Are you sure you want to log out of your account?',
      confirmText: 'Logout',
      type: 'danger'
    });
    if (confirmed) logout();
  };

  const isAdmin = user?.role === 'admin';

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <Link to="/" className="nav-brand">SmartTracker</Link>
        {user ? (
          <button 
            onClick={handleLogout} 
            className="btn nav-logout"
          >
            Logout
          </button>
        ) : (
          <div className="nav-auth-links">
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="btn btn-primary nav-signup-btn">Sign Up</Link>
          </div>
        )}
      </div>

      <div className="navbar-bottom">
        <div className="nav-links">
          {user && (
            <>
              <Link to="/" className={`nav-link ${isActive('/')}`}>Dashboard</Link>
              <Link to="/add" className={`nav-link ${isActive('/add')}`}>Add Transaction</Link>
              <Link to="/transactions" className={`nav-link ${isActive('/transactions')}`}>Transactions</Link>
              {isAdmin && <Link to="/admin/inquiries" className={`nav-link ${isActive('/admin/inquiries')}`}>Inquiry Dashboard</Link>}
            </>
          )}
          {!user && <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>}
          <Link to="/blog" className={`nav-link ${isActive('/blog')}`}>Blog</Link>
          {!user && (
            <>
              <Link to="/about" className={`nav-link ${isActive('/about')}`}>About</Link>
              <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link>
              <Link to="/privacy" className={`nav-link ${isActive('/privacy')}`}>Privacy</Link>
              <Link to="/terms" className={`nav-link ${isActive('/terms')}`}>Terms</Link>
              <Link to="/disclaimer" className={`nav-link ${isActive('/disclaimer')}`}>Disclaimer</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { user } = useContext(AuthContext);
  if (!user) return <Navigate to="/login" />;
  if (adminOnly && user.role !== 'admin') return <Navigate to="/" />;
  return children;
};

function App() {
  return (
    <UIProvider>
      <Router>
        <AuthProvider>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBar />
            <div style={{ flex: 1 }}>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Signup />} />
                <Route path="/" element={<AuthContext.Consumer>{({ user }) => user ? <Dashboard /> : <Features />}</AuthContext.Consumer>} />
                <Route path="/add" element={<ProtectedRoute><AddTransaction /></ProtectedRoute>} />
                <Route path="/transactions" element={<ProtectedRoute><TransactionList /></ProtectedRoute>} />
                <Route path="/about" element={<About />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<BlogList />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/admin/inquiries" element={<ProtectedRoute adminOnly><AdminInquiries /></ProtectedRoute>} />
              </Routes>
            </div>
            <Footer />
          </div>
        </AuthProvider>
      </Router>
    </UIProvider>
  );
}

export default App;
