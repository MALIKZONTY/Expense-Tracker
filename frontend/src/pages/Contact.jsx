import { useState, useEffect, useContext } from 'react';
import { Mail, MapPin, Send, HelpCircle, CheckCircle2, MessageSquare, Clock, Reply, Lock, Globe } from 'lucide-react';
import { useUI } from '../context/UIContext';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';

const FAQItem = ({ question, answer }) => (
  <div style={{ marginBottom: '2rem' }}>
    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.75rem', fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <CheckCircle2 size={18} style={{ color: 'var(--primary-color)' }} /> {question}
    </h4>
    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', paddingLeft: '1.9rem', overflowWrap: 'break-word' }}>{answer}</p>
  </div>
);

const InquiryCard = ({ inquiry }) => (
  <div className="card" style={{ padding: '2rem', marginBottom: '1.5rem', borderLeft: inquiry.status === 'pending' ? '4px solid var(--primary-color)' : '4px solid var(--income-color)' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'flex-start' }}>
      <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Clock size={14} /> {new Date(inquiry.created_at).toLocaleDateString()}
      </div>
      <div className={`badge ${inquiry.status === 'pending' ? 'badge-expense' : 'badge-income'}`} style={{ fontSize: '0.75rem' }}>
        {inquiry.status === 'pending' ? 'Awaiting Reply' : 'Replied'}
      </div>
    </div>
    <p style={{ margin: '0 0 1.5rem 0', color: 'var(--text-primary)', fontWeight: 500, lineHeight: '1.5' }}>
      "{inquiry.message}"
    </p>
    {inquiry.reply && (
      <div style={{ padding: '1.25rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--income-color)', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>
          <Reply size={16} /> Admin Response:
        </div>
        <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
          {inquiry.reply}
        </p>
      </div>
    )}
  </div>
);

export default function Contact() {
  const { confirm } = useUI();
  const { user, token } = useContext(AuthContext);
  const [message, setMessage] = useState('');
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    if (user) {
      fetchMyInquiries();
    }
  }, [user]);

  const fetchMyInquiries = async () => {
    setFetching(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || ''}/api/inquiries/my`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setInquiries(data);
      }
    } catch (err) {
      console.error('Failed to fetch inquiries:', err);
    } finally {
      setFetching(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simple honeypot protection
    if (honeypot) return;
    
    setLoading(true);
    try {
      const endpoint = user 
        ? `${import.meta.env.VITE_API_URL || ''}/api/inquiries`
        : `${import.meta.env.VITE_API_URL || ''}/api/inquiries/public`;

      const headers = { 'Content-Type': 'application/json' };
      if (user) headers['Authorization'] = `Bearer ${token}`;

      const body = user 
        ? { message } 
        : { name: guestName, email: guestEmail, message };

      const res = await fetch(endpoint, {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
      });

      if (res.ok) {
        const data = await res.json();
        await confirm({
          title: 'Message Sent',
          message: user 
            ? 'Your inquiry has been submitted. You can track our response right here in your history.' 
            : 'We have received your message! We will reply to your respective email soon.',
          confirmText: 'Done',
          type: 'success'
        });
        
        setMessage('');
        setGuestName('');
        setGuestEmail('');
        if (user) fetchMyInquiries();
      } else {
        const errData = await res.json();
        alert(errData.error || 'Failed to send message');
      }
    } catch (err) {
      console.error('Failed to submit:', err);
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ padding: '6rem 1rem', maxWidth: '1100px' }}>
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', fontWeight: 900, marginBottom: '1.5rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>Help Center</h1>
        <p style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          Have a question about your financial tracker? We're here to help. 
          Send us a message and we'll get back to you as soon as possible.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', marginBottom: '8rem' }}>
        
        {/* Left Column: Contact & Form */}
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
            <div className="card" style={{ padding: '2rem', display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
              <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1rem', borderRadius: '12px', color: 'var(--primary-color)' }}>
                <Mail size={24} />
              </div>
              <div>
                <h3 style={{ marginBottom: '0.4rem', fontSize: '1.1rem', fontWeight: 700 }}>Direct Email</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>malikantuparthi@gmail.com</p>
              </div>
            </div>


            <div className="card" style={{ padding: '2rem', display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
              <div style={{ background: 'rgba(236, 72, 153, 0.1)', padding: '1rem', borderRadius: '12px', color: '#ec4899' }}>
                <Globe size={24} />
              </div>
              <div style={{ width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <a href="https://www.linkedin.com/in/malik-antuparthi/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#0A66C2'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0A66C2' }}></div>
                    LinkedIn Profile
                  </a>
                  <a href="https://github.com/MALIKZONTY" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#333'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#333' }}></div>
                    GitHub Repository
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-glow" style={{ padding: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Send size={24} style={{ color: 'var(--primary-color)' }} /> Send a Message
            </h2>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {!user && (
                <>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input 
                      type="text"
                      required
                      className="form-control"
                      placeholder="Your Name"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      disabled={loading}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input 
                      type="email"
                      required
                      className="form-control"
                      placeholder="name@example.com"
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      disabled={loading}
                    />
                  </div>
                </>
              )}

              {/* Honeypot field - hidden from users */}
              <input 
                type="text" 
                style={{ display: 'none' }} 
                value={honeypot} 
                onChange={(e) => setHoneypot(e.target.value)} 
              />

              <div className="form-group">
                <label>Your Inquiry</label>
                <textarea 
                  required 
                  className="form-control" 
                  rows="5" 
                  placeholder="Describe your question or issue in detail..." 
                  style={{ resize: 'none', width: '100%', fontSize: '1rem' }}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={loading}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                disabled={loading}
                style={{ padding: '1.1rem', borderRadius: '12px', fontWeight: 700, fontSize: '1.1rem', display: 'flex', gap: '0.75rem', justifyContent: 'center' }}
              >
                {loading ? 'Sending...' : 'Send Message'} <Send size={18} />
              </button>

              {!user && (
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '0.5rem' }}>
                  Already have an account? <Link to="/login" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Login here</Link>
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Right Column: Inquiry History */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <MessageSquare size={28} style={{ color: 'var(--primary-color)' }} /> Inquiry History
          </h2>
          
          {!user ? (
            <div className="card" style={{ padding: '3rem', textAlign: 'center', border: '2px dashed var(--border-color)', background: 'transparent' }}>
              <Lock size={40} style={{ color: 'var(--text-secondary)', opacity: 0.3, marginBottom: '1rem' }} />
              <p style={{ color: 'var(--text-secondary)' }}>Sign in to view your conversation history with me.</p>
            </div>
          ) : fetching ? (
            <p style={{ color: 'var(--text-secondary)' }}>Loading history...</p>
          ) : inquiries.length === 0 ? (
            <div className="card" style={{ padding: '3rem', textAlign: 'center', border: '2px dashed var(--border-color)', background: 'transparent' }}>
              <Clock size={40} style={{ color: 'var(--text-secondary)', opacity: 0.3, marginBottom: '1rem' }} />
              <p style={{ color: 'var(--text-secondary)' }}>You haven't sent any messages yet. Your history will appear here.</p>
            </div>
          ) : (
            <div style={{ maxHeight: '800px', overflowY: 'auto', paddingRight: '0.5rem' }}>
              {inquiries.map(inq => <InquiryCard key={inq.id} inquiry={inq} />)}
            </div>
          )}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="card" style={{ padding: '4rem clamp(1.5rem, 5vw, 4rem)', background: 'linear-gradient(to bottom right, #ffffff, #f8fafc)' }}>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '3.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <HelpCircle size={36} style={{ color: 'var(--primary-color)' }} /> 
          Frequently Asked Questions
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '2rem 5rem' }}>
          <FAQItem 
            question="Is my financial data stored securely?"
            answer="Absolutely. We use industry-standard encryption protocols and JWT session management to ensure that only you can access your data. Your privacy is our highest priority."
          />
          <FAQItem 
            question="Can I track multiple payment methods?"
            answer="Yes, Expensico allows you to categorize transactions by wallet type—from cash and bank transfers to credit cards and digital wallets—giving you a complete view of your liquidity."
          />
          <FAQItem 
            question="Is there a limit to how many transactions I can log?"
            answer="There are no limits. Expensico is built on a high-performance PostgreSQL database designed to handle thousands of historical records seamlessly without compromising performance."
          />
          <FAQItem 
            question="Can I export my transaction history?"
            answer="We are currently working on a CSV and PDF export feature. This will allow you to take your data anywhere for further analysis or tax reporting purposes."
          />
          <FAQItem 
            question="What happens if I delete a transaction?"
            answer="We use a soft-delete architecture. When you delete a transaction, it is hidden from your view but retained securely in any backups to prevent accidental data loss until a final cleanup cycle."
          />
          <FAQItem 
            question="Is Expensico free to use?"
            answer="Our core features for tracking and visualization are completely free. We believe that financial clarity should be accessible to everyone who wants to better their future."
          />
        </div>
      </div>
    </div>
  );
}
