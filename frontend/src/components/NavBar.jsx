import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { useUI } from '../context/UIContext';
import { Layout, PlusCircle, List, Globe, User, LogOut } from 'lucide-react';

export default function NavBar() {
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
        <Link to="/" className="nav-brand" style={{ display: 'flex', flexDirection: 'column', gap: '0px', lineHeight: '1.1', textDecoration: 'none', flexShrink: 0 }}>
          <span style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--primary-color)', letterSpacing: '-0.04em' }}>Expensico</span>
          <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-secondary)', opacity: 0.8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            {user ? 'Track your money' : 'Finance Intelligence'}
          </span>
        </Link>

        {/* Unified Navigation Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {user ? (
            <>
              <Link to="/" className={`nav-link ${isActive('/')}`}><Layout size={18} /> Dashboard</Link>
              <Link to="/add" className={`nav-link ${isActive('/add')}`}><PlusCircle size={18} /> Add</Link>
              <Link to="/transactions" className={`nav-link ${isActive('/transactions')}`}><List size={18} /> History</Link>
              <Link to="/blog" className={`nav-link ${isActive('/blog')}`}><Globe size={18} /> Blog</Link>
              {isAdmin && <Link to="/admin/inquiries" className={`nav-link ${isActive('/admin/inquiries')}`}>Admin</Link>}
            </>
          ) : (
            <>
              <Link to="/" className={`nav-link ${isActive('/')}`} style={{ fontWeight: 600 }}>Home</Link>
              <Link to="/about" className={`nav-link ${isActive('/about')}`} style={{ fontWeight: 600 }}>About</Link>
              <Link to="/blog" className={`nav-link ${isActive('/blog')}`} style={{ fontWeight: 600 }}>Blog</Link>
              <Link to="/contact" className={`nav-link ${isActive('/contact')}`} style={{ fontWeight: 600 }}>Contact</Link>
              <Link to="/privacy-policy" className={`nav-link ${isActive('/privacy-policy')}`} style={{ fontWeight: 500, fontSize: '0.9rem' }}>Privacy</Link>
              <Link to="/terms-and-conditions" className={`nav-link ${isActive('/terms-and-conditions')}`} style={{ fontWeight: 500, fontSize: '0.9rem' }}>Terms</Link>
              <Link to="/disclaimer" className={`nav-link ${isActive('/disclaimer')}`} style={{ fontWeight: 500, fontSize: '0.9rem' }}>Disclaimer</Link>
            </>
          )}
        </div>

        {/* Auth Actions */}
        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(59, 130, 246, 0.05)', padding: '0.4rem 0.8rem', borderRadius: '20px', border: '1px solid rgba(59, 130, 246, 0.1)' }}>
                <User size={16} style={{ color: 'var(--primary-color)' }} />
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>{(user?.name || user?.email || 'User').split(' ')[0]}</span>
              </div>
              <button onClick={handleLogout} className="btn nav-logout" style={{ padding: '0.4rem 0.6rem' }}>
                <LogOut size={16} />
              </button>
            </div>
          ) : (
            <div className="nav-auth-links" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Link to="/login" className="nav-link" style={{ fontWeight: 700 }}>Login</Link>
              <Link to="/register" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', borderRadius: '10px', fontSize: '0.9rem' }}>
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
