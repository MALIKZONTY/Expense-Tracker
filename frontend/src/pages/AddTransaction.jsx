import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const EXPENSE_CATEGORIES = ['Food', 'Travel', 'Rent', 'Shopping', 'Bills', 'Entertainment', 'Unknown', 'Other'];
const INCOME_CATEGORIES = ['Salary', 'Freelance', 'Business', 'Gift', 'Unknown', 'Other'];
const PAYMENT_METHODS = ['Online Payment', 'Cash', 'Credit Card', 'Bank Transfer', 'Gift Card'];

export default function AddTransaction() {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState(EXPENSE_CATEGORIES[0]);
  const [paymentMethod, setPaymentMethod] = useState(PAYMENT_METHODS[0]);
  const [date, setDate] = useState(new Date().toLocaleDateString('en-CA')); // en-CA gives YYYY-MM-DD
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(false);
  const { token } = useContext(AuthContext);
  
  const navigate = useNavigate();

  const handleTypeChange = (newType) => {
    setType(newType);
    setCategory(newType === 'expense' ? EXPENSE_CATEGORIES[0] : INCOME_CATEGORIES[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!amount || !category) return;
    
    setLoading(true);
    try {
      const res = await fetch('/api/transactions', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ amount: Number(amount), type, category, date, note, paymentMethod })
      });
      if (res.ok) {
        navigate('/transactions');
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const categories = type === 'expense' ? EXPENSE_CATEGORIES : INCOME_CATEGORIES;

  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', paddingTop: '2rem' }}>
      <div className="card" style={{ width: '100%', maxWidth: '500px', padding: '2rem', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-color)' }}>Log Transaction</h2>
        
        {/* Modern Type Toggle */}
        <div style={{ display: 'flex', background: '#f1f5f9', borderRadius: '12px', padding: '0.4rem', marginBottom: '1.5rem' }}>
          <button 
            type="button"
            onClick={() => handleTypeChange('expense')}
            style={{ flex: 1, padding: '0.8rem', borderRadius: '8px', border: 'none', background: type === 'expense' ? 'var(--expense-color)' : 'transparent', color: type === 'expense' ? 'white' : 'var(--text-secondary)', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s' }}
          >
            Expense
          </button>
          <button 
            type="button"
            onClick={() => handleTypeChange('income')}
            style={{ flex: 1, padding: '0.8rem', borderRadius: '8px', border: 'none', background: type === 'income' ? 'var(--income-color)' : 'transparent', color: type === 'income' ? 'white' : 'var(--text-secondary)', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s' }}
          >
            Income
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

          <div className="form-row" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div className="form-group" style={{ flex: '1 1 200px' }}>
              <label style={{ fontWeight: 'bold', color: 'var(--text-secondary)' }}>Category</label>
              <select className="form-control" value={category} onChange={e => setCategory(e.target.value)} style={{ borderRadius: '8px', height: '45px' }}>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div className="form-group" style={{ flex: 1 }}>
              <label style={{ fontWeight: 'bold', color: 'var(--text-secondary)' }}>Payment Method</label>
              <select className="form-control" value={paymentMethod} onChange={e => setPaymentMethod(e.target.value)} style={{ borderRadius: '8px', height: '45px' }}>
                {PAYMENT_METHODS.map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
          </div>

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
              placeholder="What was this for?"
            />
          </div>

          <button disabled={loading} type="submit" className="btn btn-primary" style={{ marginTop: '1rem', padding: '1rem', fontSize: '1.2rem', borderRadius: '12px', fontWeight: 'bold' }}>
            {loading ? 'Saving...' : 'Log Transaction'}
          </button>
        </form>
      </div>
    </div>
  );
}
