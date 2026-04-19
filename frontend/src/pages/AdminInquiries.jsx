import { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { useUI } from '../context/UIContext';
import { MessageSquare, Clock, CheckCircle, Reply, User, Mail, Filter } from 'lucide-react';

export default function AdminInquiries() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, pending, answered
  const { token } = useContext(AuthContext);
  const { confirm } = useUI();
  const [replyText, setReplyText] = useState({});

  useEffect(() => {
    fetchInquiries();
  }, [token]);

  const fetchInquiries = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || ''}/api/inquiries/admin`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setInquiries(data);
      }
    } catch (err) {
      console.error('Failed to fetch inquiries:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleReply = async (id) => {
    const reply = replyText[id];
    if (!reply) return;

    const confirmed = await confirm({
      title: 'Submit Reply',
      message: 'Are you sure you want to send this reply to the user?',
      confirmText: 'Send Reply',
      type: 'success'
    });

    if (confirmed) {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL || ''}/api/inquiries/admin/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ reply })
        });
        if (res.ok) {
          setReplyText({ ...replyText, [id]: '' });
          fetchInquiries();
        }
      } catch (err) {
        console.error('Failed to send reply:', err);
      }
    }
  };

  const filteredInquiries = inquiries.filter(i => {
    if (filter === 'all') return true;
    return i.status === filter;
  });

  if (loading) return <div className="container" style={{ textAlign: 'center', padding: '4rem' }}>Loading inquiries...</div>;

  return (
    <div className="container" style={{ padding: '4rem 1rem', maxWidth: '1200px' }}>
      <header style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Inquiry Dashboard</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Manage and respond to user support requests.</p>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', background: '#fff', padding: '0.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
          <button 
            onClick={() => setFilter('all')}
            className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('pending')}
            className={`btn ${filter === 'pending' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}
          >
            Pending
          </button>
          <button 
            onClick={() => setFilter('answered')}
            className={`btn ${filter === 'answered' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}
          >
            Answered
          </button>
        </div>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {filteredInquiries.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-secondary)' }}>
            <MessageSquare size={48} style={{ marginBottom: '1rem', opacity: 0.2 }} />
            <p>No inquiries found matching your filters.</p>
          </div>
        ) : (
          filteredInquiries.map(inquiry => (
            <div key={inquiry.id} className="card shadow-glow" style={{ padding: '2.5rem', borderLeft: inquiry.status === 'pending' ? '6px solid var(--primary-color)' : '6px solid var(--income-color)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
                    <User size={20} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{inquiry.user_email}</h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      {new Date(inquiry.created_at).toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className={`badge ${inquiry.status === 'pending' ? 'badge-expense' : 'badge-income'}`} style={{ height: 'fit-content' }}>
                  {inquiry.status === 'pending' ? 'Awaiting Reply' : 'Resolved'}
                </div>
              </div>

              <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem' }}>
                <p style={{ margin: 0, color: 'var(--text-primary)', lineHeight: '1.6' }}>"{inquiry.message}"</p>
              </div>

              {inquiry.status === 'answered' ? (
                <div style={{ paddingLeft: '1.5rem', borderLeft: '2px dashed var(--border-color)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--income-color)', marginBottom: '0.75rem', fontWeight: 600 }}>
                    <Reply size={18} /> Your Response:
                  </div>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{inquiry.reply}</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <textarea 
                    placeholder="Type your response here..."
                    className="form-control"
                    rows="3"
                    value={replyText[inquiry.id] || ''}
                    onChange={(e) => setReplyText({ ...replyText, [inquiry.id]: e.target.value })}
                    style={{ width: '100%', resize: 'none' }}
                  ></textarea>
                  <button 
                    className="btn btn-primary" 
                    onClick={() => handleReply(inquiry.id)}
                    style={{ alignSelf: 'flex-end', padding: '0.75rem 2rem' }}
                    disabled={!replyText[inquiry.id]}
                  >
                    Send Response
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
