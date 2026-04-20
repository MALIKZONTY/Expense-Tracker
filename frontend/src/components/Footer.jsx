import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Footer = () => {
  const { user } = useContext(AuthContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" style={{ borderTop: '1px solid var(--border-color)', padding: '3rem 0', marginTop: '4rem', background: '#ffffff' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <Link to="/about" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>About</Link>
          <span style={{ color: 'var(--border-color)' }}>|</span>
          <Link to="/contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>Contact</Link>
          <span style={{ color: 'var(--border-color)' }}>|</span>
          <Link to="/privacy-policy" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>Privacy Policy</Link>
          <span style={{ color: 'var(--border-color)' }}>|</span>
          <Link to="/terms-and-conditions" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>Terms and Conditions</Link>
          <span style={{ color: 'var(--border-color)' }}>|</span>
          <Link to="/disclaimer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>Disclaimer</Link>
        </div>

        {/* Brand and Copyright Section */}
        <div className="footer-bottom" style={{ textAlign: 'center' }}>
          <Link to="/" style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary-color)', textDecoration: 'none', display: 'block', marginBottom: '1rem' }}>Expensico</Link>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: '500px', margin: '0 auto' }}>
            Taking control of your financial future through intelligent tracking. &copy; {currentYear} Expensico. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
