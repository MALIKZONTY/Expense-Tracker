import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { useUI } from '../context/UIContext';
import { Layout, PlusCircle, List, Globe, User, LogOut, ShieldCheck, Sun, Moon } from 'lucide-react';

export default function NavBar() {
  const location = useLocation();
  const { user, logout } = useContext(AuthContext);
  const { confirm, isDarkMode, toggleDarkMode } = useUI();
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
    <nav className="navbar shadow-soft" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      {/* Consolidated Single-Tier Header */}
      <div className="navbar-top" style={{
        background: user ? 'var(--nav-bg)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        padding: '0.75rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <Link to={user ? "/dashboard" : "/"} className="nav-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.1rem', textDecoration: 'none', flexShrink: 0 }}>
          <img src="/logo.png" className="custom-logo" alt="Expensico Logo" style={{ width: '90px', height: '90px', objectFit: 'contain' }} />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.1' }}>
            <span style={{ fontSize: '1.5rem', fontStyle: 'italic', fontWeight: 900, color: 'var(--primary-color)', letterSpacing: '-0.04em' }}>Expensico</span>
            <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-secondary)', opacity: 0.8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              {user ? 'Track your money' : 'Track your money'}
            </span>
          </div>
        </Link>
        {/* Auth Actions (Top Tier) */}
        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          <button 
            onClick={toggleDarkMode} 
            className="btn btn-outline" 
            style={{ 
              padding: '0.4rem', 
              borderRadius: '50%', 
              width: '36px', 
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--border-color)',
              background: 'transparent',
              color: 'var(--text-secondary)'
            }}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(59, 130, 246, 0.05)', padding: '0.4rem 0.8rem', borderRadius: '20px', border: '1px solid rgba(59, 130, 246, 0.1)' }} className="hide-mobile">
                <User size={16} style={{ color: 'var(--primary-color)' }} />
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>{(user?.name || user?.email || 'User').split(' ')[0]}</span>
              </div>
              <button onClick={handleLogout} className="btn nav-logout" style={{ padding: '0.4rem 0.6rem' }}>
                <LogOut size={16} />
              </button>
            </div>
          ) : (
            <div className="nav-auth-links" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Link to="/login" className="nav-link" style={{ fontWeight: 700, padding: '0.4rem 0.6rem', fontSize: '0.85rem' }}>Login</Link>
              <Link to="/register" className="btn btn-primary" style={{ padding: '0.4rem 0.8rem', borderRadius: '8px', fontSize: '0.85rem' }}>
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Unified Navigation Links (Scrollable on Mobile) */}
      <div className="nav-links-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center', paddingBottom: '0.5rem', width: '100%' }}>
        {user ? (
          <>
            <Link to="/dashboard" className={`nav-link ${isActive('/dashboard')}`}><Layout size={18} /> Dashboard</Link>
            <Link to="/add" className={`nav-link ${isActive('/add')}`}><PlusCircle size={18} /> Add Transaction</Link>
            <Link to="/transactions" className={`nav-link ${isActive('/transactions')}`}><List size={18} /> Transaction History</Link>
            <Link to="/blog" className={`nav-link ${isActive('/blog')}`}><Globe size={18} /> Blog</Link>
            <Link to="/features" className={`nav-link ${isActive('/features')}`}><Globe size={18} /> Features</Link>
            {isAdmin && <Link to="/admin/inquiries" className={`nav-link ${isActive('/admin/inquiries')}`}>Admin</Link>}
          </>
        ) : (
          <>
            <Link to="/" className={`nav-link ${isActive('/')}`} style={{ fontWeight: 600 }}>Home</Link>
            <Link to="/about" className={`nav-link ${isActive('/about')}`} style={{ fontWeight: 600 }}>About</Link>
            <Link to="/blog" className={`nav-link ${isActive('/blog')}`} style={{ fontWeight: 600 }}>Blog</Link>
            <Link to="/faq" className={`nav-link ${isActive('/faq')}`} style={{ fontWeight: 600 }}>FAQ</Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact')}`} style={{ fontWeight: 600 }}>Contact</Link>
            <Link to="/privacy-policy" className={`nav-link ${isActive('/privacy-policy')}`} style={{ fontWeight: 500, fontSize: '0.9rem' }}>Privacy</Link>
            <Link to="/terms-and-conditions" className={`nav-link ${isActive('/terms-and-conditions')}`} style={{ fontWeight: 500, fontSize: '0.9rem' }}>Terms</Link>
            <Link to="/cookie-policy" className={`nav-link ${isActive('/cookie-policy')}`} style={{ fontWeight: 500, fontSize: '0.9rem' }}>Cookies</Link>
          </>
        )}
      </div>

    </nav>
  );
}
