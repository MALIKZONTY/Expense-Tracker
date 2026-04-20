import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { ShieldCheck } from 'lucide-react';

const Footer = () => {
  const { user } = useContext(AuthContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" style={{ 
      borderTop: '1px solid var(--border-color)', 
      padding: '4rem 0', 
      marginTop: '6rem', 
      background: '#ffffff',
      boxShadow: '0 -10px 40px rgba(0,0,0,0.02)'
    }}>
      <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          {/* Brand Column */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', marginBottom: '1.25rem' }}>
              <div style={{ background: 'var(--primary-color)', color: 'white', padding: '0.3rem', borderRadius: '8px', display: 'flex' }}>
                <ShieldCheck size={20} />
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--primary-color)', fontStyle: 'italic' }}>Expensico</span>
            </Link>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Empowering individuals through intelligent financial tracking and absolute data transparency.
            </p>
          </div>

          {/* Resources Column */}
          <div>
            <h4 style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>Resources</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link to="/blog" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Finance Blog</Link>
              <Link to="/faq" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>FAQ Center</Link>
              <Link to="/about" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>About Us</Link>
              <Link to="/contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Contact Support</Link>
            </div>
          </div>

          {/* Legal Column */}
          <div>
            <h4 style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>Legal & Privacy</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link to="/privacy-policy" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Privacy Policy</Link>
              <Link to="/terms-and-conditions" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Terms of Service</Link>
              <Link to="/cookie-policy" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Cookie Policy</Link>
              <Link to="/disclaimer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Full Disclaimer</Link>
            </div>
          </div>
        </div>

        <div style={{ 
          paddingTop: '2rem', 
          borderTop: '1px solid var(--border-color)', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            &copy; {currentYear} Expensico Finance. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
             {/* Security badges placeholder if needed */}
             <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Institutional Grade Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
