import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const EXPENSE_CATEGORIES = ['Food', 'Groceries', 'Travel', 'Rent', 'Shopping', 'Clothes', 'Domain', 'Books', 'Bills', 'Entertainment', 'Gave to Friends / Family', 'Mobile Recharge', 'offering', 'Saloon', 'Studies', 'Unknown', 'Other'];
const INCOME_CATEGORIES = ['Salary', 'Freelance', 'Business', 'Offerings', 'Gift', 'From Friends / Family', 'Unknown', 'Other'];
const PAYMENT_METHODS = ['PhonePe', 'Paytm', 'Google Pay', 'Amazon Pay', 'Cash', 'Bank Transfer', 'Credit Card', 'Debit Card'];

export default function AddTransaction() {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState(EXPENSE_CATEGORIES[0]);
  const [paymentMethod, setPaymentMethod] = useState(PAYMENT_METHODS[0]);
  const [toPaymentMethod, setToPaymentMethod] = useState(PAYMENT_METHODS[1]);
  const [date, setDate] = useState(new Date().toLocaleDateString('en-CA')); // en-CA gives YYYY-MM-DD
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(false);
  const { token } = useContext(AuthContext);
  
  const navigate = useNavigate();

  const handleTypeChange = (newType) => {
    setType(newType);
    if (newType === 'exchange') {
      setCategory('Exchange');
    } else {
      setCategory(newType === 'expense' ? EXPENSE_CATEGORIES[0] : INCOME_CATEGORIES[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!amount || !category) return;
    
    setLoading(true);
    try {
      const payload = { 
        amount: Number(amount), 
        type, 
        category, 
        date, 
        note, 
        paymentMethod 
      };

      if (type === 'exchange') {
        payload.toPaymentMethod = toPaymentMethod;
      }

      const res = await fetch(`${import.meta.env.VITE_API_URL || ''}/api/transactions`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        navigate('/transactions');
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const categories = type === 'expense' ? EXPENSE_CATEGORIES : (type === 'income' ? INCOME_CATEGORIES : ['Exchange']);

  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', paddingTop: '1rem' }}>
      <div className="card" style={{ width: '100%', maxWidth: '500px', padding: '1.25rem', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', border: 'none' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--text-color)', fontSize: '1.5rem' }}>Log Transaction</h2>
        
        {/* Modern Type Toggle */}
        <div style={{ display: 'flex', background: '#f1f5f9', borderRadius: '12px', padding: '0.4rem', marginBottom: '1.5rem' }}>
          <button 
            type="button"
            onClick={() => handleTypeChange('expense')}
            style={{ flex: 1, padding: '0.8rem', borderRadius: '8px', border: 'none', background: type === 'expense' ? 'var(--expense-color)' : 'transparent', color: type === 'expense' ? 'white' : 'var(--text-secondary)', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s', fontSize: '0.9rem' }}
          >
            Expense
          </button>
          <button 
            type="button"
            onClick={() => handleTypeChange('income')}
            style={{ flex: 1, padding: '0.8rem', borderRadius: '8px', border: 'none', background: type === 'income' ? 'var(--income-color)' : 'transparent', color: type === 'income' ? 'white' : 'var(--text-secondary)', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s', fontSize: '0.9rem' }}
          >
            Income
          </button>
          <button 
            type="button"
            onClick={() => handleTypeChange('exchange')}
            style={{ flex: 1, padding: '0.8rem', borderRadius: '8px', border: 'none', background: type === 'exchange' ? '#64748b' : 'transparent', color: type === 'exchange' ? 'white' : 'var(--text-secondary)', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s', fontSize: '0.9rem' }}
          >
            Exchange
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div className="form-group" style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', top: '40px', left: '15px', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>₹</span>
            <label style={{ fontWeight: 'bold', color: 'var(--text-secondary)' }}>Amount</label>
            <input 
              type="number" 
              required 
              min="1" 
              step="1" 
              className="form-control" 
              style={{ fontSize: '1.5rem', paddingLeft: '2rem', height: '60px', borderRadius: '12px' }}
              value={amount} 
              onChange={e => setAmount(e.target.value)} 
              placeholder="0.00"
            />
          </div>

          <div className="form-group">
            <label style={{ fontWeight: 'bold', color: 'var(--text-secondary)' }}>Category</label>
            <select className="form-control" value={category} onChange={e => setCategory(e.target.value)} style={{ borderRadius: '8px', height: '45px' }} disabled={type === 'exchange'}>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          
          {type !== 'exchange' ? (
            <div className="form-group">
              <label style={{ fontWeight: 'bold', color: 'var(--text-secondary)' }}>Payment Method</label>
              <select className="form-control" value={paymentMethod} onChange={e => setPaymentMethod(e.target.value)} style={{ borderRadius: '8px', height: '45px' }}>
                {PAYMENT_METHODS.map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
          ) : (
            <div style={{ display: 'flex', width: '100%', gap: '0.5rem', marginTop: '0.2rem', background: '#f8fafc', padding: '1.25rem 1rem', borderRadius: '16px', border: '1px dashed #cbd5e1', boxSizing: 'border-box', alignItems: 'center' }}>
              <div className="form-group" style={{ flex: 1, marginBottom: 0 }}>
                <label style={{ fontWeight: 'bold', color: '#64748b', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.3rem', display: 'block' }}>From</label>
                <select className="form-control" value={paymentMethod} onChange={e => setPaymentMethod(e.target.value)} style={{ borderRadius: '8px', height: '38px', border: '1px solid #cbd5e1', fontSize: '0.9rem', width: '100%' }}>
                  {PAYMENT_METHODS.map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
              
              <div style={{ color: '#94a3b8', paddingTop: '1.2rem', display: 'flex', alignItems: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>

              <div className="form-group" style={{ flex: 1, marginBottom: 0 }}>
                <label style={{ fontWeight: 'bold', color: '#64748b', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.3rem', display: 'block' }}>To</label>
                <select className="form-control" value={toPaymentMethod} onChange={e => setToPaymentMethod(e.target.value)} style={{ borderRadius: '8px', height: '38px', border: '1px solid #cbd5e1', fontSize: '0.9rem', width: '100%' }}>
                  {PAYMENT_METHODS.map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          <div className="form-group">
            <label style={{ fontWeight: 'bold', color: 'var(--text-secondary)' }}>Date</label>
            <input 
              type="date" 
              required 
              className="form-control" 
              style={{ borderRadius: '8px', height: '45px' }}
              value={date} 
              onChange={e => setDate(e.target.value)} 
            />
          </div>

          <div className="form-group">
            <label style={{ fontWeight: 'bold', color: 'var(--text-secondary)' }}>Note (Optional)</label>
            <input 
              type="text" 
              className="form-control" 
              style={{ borderRadius: '8px', height: '45px' }}
              value={note} 
              onChange={e => setNote(e.target.value)} 
              placeholder={type === 'exchange' ? 'e.g. Gave cash for PhonePe transfer' : 'What was this for?'}
            />
          </div>

          <button disabled={loading} type="submit" className="btn btn-primary" style={{ marginTop: '1rem', padding: '1rem', fontSize: '1.2rem', borderRadius: '12px', fontWeight: 'bold' }}>
            {loading ? 'Saving...' : (type === 'exchange' ? 'Confirm Exchange' : 'Log Transaction')}
          </button>
        </form>
      </div>
    </div>
  );
}
