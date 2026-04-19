import { useState, useEffect, useContext } from 'react';
import { Pencil, Trash2, X } from 'lucide-react';
import AuthContext from '../context/AuthContext';

const EXPENSE_CATEGORIES = ['Food', 'Travel', 'Rent', 'Shopping', 'Bills', 'Entertainment', 'Unknown', 'Other'];
const INCOME_CATEGORIES = ['Salary', 'Freelance', 'Business', 'Gift', 'Unknown', 'Other'];
const PAYMENT_METHODS = ['Online Payment', 'Cash', 'Credit Card', 'Bank Transfer', 'Gift Card'];

export default function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const [typeFilter, setTypeFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [editingTransaction, setEditingTransaction] = useState(null);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    fetchTransactions();
  }, [typeFilter]);

  const fetchTransactions = () => {
    setLoading(true);
    let url = 'http://localhost:5001/api/transactions';
    if (typeFilter) url += `?type=${typeFilter}`;
    
    fetch(url, { headers: { 'Authorization': `Bearer ${token}` } })
      .then(res => {
        if (!res.ok) throw new Error('API Error');
        return res.json();
      })
      .then(data => {
        setTransactions(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this transaction?")) return;
    
    try {
      const res = await fetch(`http://localhost:5001/api/transactions/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        setTransactions(prev => prev.filter(t => t.id !== id));
      } else {
        alert("Failed to delete transaction.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5001/api/transactions/${editingTransaction.id}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify(editingTransaction)
      });
      if (res.ok) {
        const updated = await res.json();
        setTransactions(prev => prev.map(t => t.id === updated.id ? updated : t));
        setEditingTransaction(null);
      } else {
        alert("Failed to update transaction.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container" style={{ position: 'relative' }}>
      
      {/* Edit Modal Overlay */}
      {editingTransaction && (
        <div 
          className="modal-overlay fade-in" 
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.4)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)', animation: 'fadeIn 0.3s ease-out' }}
        >
          <div 
            className="card slide-up" 
            style={{ width: '90%', maxWidth: '500px', backgroundColor: 'white', padding: '2.5rem', borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)', border: '1px solid rgba(255,255,255,0.2)', position: 'relative', animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            <button 
              onClick={() => setEditingTransaction(null)}
              style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: '#f1f5f9', border: 'none', borderRadius: '50%', padding: '0.5rem', cursor: 'pointer', display: 'flex', color: 'var(--text-secondary)' }}
            >
              <X size={18} />
            </button>
            <h2 style={{ marginBottom: '2rem', color: 'var(--text-color)', fontSize: '1.5rem', fontWeight: 700 }}>Edit Transaction</h2>
            <form onSubmit={handleEditSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="form-group">
                <label style={{ fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Amount</label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)', fontWeight: 600 }}>₹</span>
                  <input 
                    type="number" required min="1" step="1" className="form-control"
                    style={{ paddingLeft: '2rem', height: '50px', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 600 }}
                    value={editingTransaction.amount} 
                    onChange={e => setEditingTransaction({...editingTransaction, amount: e.target.value})} 
                  />
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <div className="form-group" style={{ flex: '1 1 200px' }}>
                  <label>Category</label>
                  <select className="form-control" value={editingTransaction.category} onChange={e => setEditingTransaction({...editingTransaction, category: e.target.value})}>
                    {(editingTransaction.type === 'expense' ? EXPENSE_CATEGORIES : INCOME_CATEGORIES).map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group" style={{ flex: 1 }}>
                  <label>Method</label>
                  <select className="form-control" value={editingTransaction.payment_method} onChange={e => setEditingTransaction({...editingTransaction, payment_method: e.target.value})}>
                    {PAYMENT_METHODS.map(m => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Date</label>
                <input 
                  type="date" required className="form-control"
                  value={new Date(editingTransaction.date).toLocaleDateString('en-CA')} 
                  onChange={e => setEditingTransaction({...editingTransaction, date: e.target.value})} 
                />
              </div>

              <div className="form-group">
                <label>Note</label>
                <input 
                  type="text" className="form-control"
                  value={editingTransaction.note || ''} 
                  onChange={e => setEditingTransaction({...editingTransaction, note: e.target.value})} 
                />
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button type="submit" className="btn btn-primary" style={{ flex: 1, height: '50px', borderRadius: '12px', fontWeight: 600, fontSize: '1rem' }}>Update Transaction</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Main Table Content */}
      <div className="flex justify-between items-center" style={{ marginBottom: '2rem' }}>
        <h1>All Transactions</h1>
        <select 
          className="form-control" 
          value={typeFilter} 
          onChange={(e) => setTypeFilter(e.target.value)}
          style={{ width: '200px' }}
        >
          <option value="">All Types</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <div className="card">
        {loading ? (
          <p>Loading...</p>
        ) : transactions.length === 0 ? (
          <p>No transactions found.</p>
        ) : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Method</th>
                  <th>Type</th>
                  <th>Note</th>
                  <th style={{ textAlign: 'right' }}>Amount</th>
                  <th style={{ textAlign: 'center' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map(t => (
                  <tr key={t.id}>
                    <td>{new Date(t.date).toLocaleDateString()}</td>
                    <td>{t.category}</td>
                    <td>
                      <span className="badge" style={{ background: '#e2e8f0', color: '#475569' }}>
                        {t.payment_method || 'Cash'}
                      </span>
                    </td>
                    <td>
                      <span className={`badge badge-${t.type === 'income' ? 'income' : 'expense'}`}>
                        {t.type.charAt(0).toUpperCase() + t.type.slice(1)}
                      </span>
                    </td>
                    <td style={{ color: 'var(--text-secondary)' }}>{t.note || '-'}</td>
                    <td style={{ textAlign: 'right' }} className={t.type === 'income' ? 'income-text' : 'expense-text'}>
                      {t.type === 'income' ? '+' : '-'}₹{Number(t.amount).toLocaleString('en-IN')}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                        <button 
                          onClick={() => setEditingTransaction(t)} 
                          style={{ border: 'none', background: '#f1f5f9', color: 'var(--primary-color)', padding: '0.6rem', borderRadius: '10px', cursor: 'pointer', transition: 'all 0.2s', display: 'flex' }}
                          title="Edit"
                          className="action-btn"
                        >
                          <Pencil size={16} />
                        </button>
                        <button 
                          onClick={() => handleDelete(t.id)} 
                          style={{ border: 'none', background: '#fee2e2', color: 'var(--expense-color)', padding: '0.6rem', borderRadius: '10px', cursor: 'pointer', transition: 'all 0.2s', display: 'flex' }}
                          title="Delete"
                          className="action-btn"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
