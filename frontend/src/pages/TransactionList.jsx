import { useState, useEffect, useContext, useCallback } from 'react';
import { Pencil, Trash2, X, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import AuthContext from '../context/AuthContext';
import { useUI } from '../context/UIContext';

const EXPENSE_CATEGORIES = ['Food', 'Groceries', 'Travel', 'Rent', 'Shopping', 'Bills', 'Entertainment', 'Unknown', 'Other'];
const INCOME_CATEGORIES = ['Salary', 'Freelance', 'Business', 'Gift', 'Unknown', 'Other'];
const PAYMENT_METHODS = ['Online Payment', 'Cash', 'Credit Card', 'Bank Transfer', 'Gift Card'];

const getDateRange = (filter, customStart, customEnd) => {
  const now = new Date();
  let start, end;

  switch (filter) {
    case 'this-week': {
      const day = now.getDay();
      const diff = now.getDate() - day;
      start = new Date(now.setDate(diff));
      start.setHours(0, 0, 0, 0);
      end = new Date();
      break;
    }
    case 'last-week': {
      const day = now.getDay();
      const diff = now.getDate() - day - 7;
      start = new Date(now.setDate(diff));
      start.setHours(0, 0, 0, 0);
      const lastWeekEnd = new Date(start);
      lastWeekEnd.setDate(lastWeekEnd.getDate() + 6);
      lastWeekEnd.setHours(23, 59, 59, 999);
      end = lastWeekEnd;
      break;
    }
    case 'this-month':
      start = new Date(now.getFullYear(), now.getMonth(), 1);
      end = new Date();
      break;
    case 'last-month':
      start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      end = new Date(now.getFullYear(), now.getMonth(), 0);
      break;
    case 'custom':
      start = customStart ? new Date(customStart) : null;
      end = customEnd ? new Date(customEnd) : null;
      break;
    default:
      return { start: null, end: null };
  }

  return {
    start: start ? start.toLocaleDateString('en-CA') : null,
    end: end ? end.toLocaleDateString('en-CA') : null
  };
};

export default function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const [typeFilter, setTypeFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('all');
  const [customStartDate, setCustomStartDate] = useState('');
  const [customEndDate, setCustomEndDate] = useState('');
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState({ total: 0, totalPages: 0 });
  const [loading, setLoading] = useState(true);
  const [editingTransaction, setEditingTransaction] = useState(null);
  const { token } = useContext(AuthContext);

  const fetchTransactions = useCallback(() => {
    setLoading(true);
    let url = `${import.meta.env.VITE_API_URL || ''}/api/transactions?page=${page}&limit=10`;
    if (typeFilter) url += `&type=${typeFilter}`;

    const { start, end } = getDateRange(dateFilter, customStartDate, customEndDate);
    if (start) url += `&startDate=${start}`;
    if (end) url += `&endDate=${end}`;

    fetch(url, { headers: { 'Authorization': `Bearer ${token}` } })
      .then(res => {
        if (!res.ok) throw new Error('API Error');
        return res.json();
      })
      .then(data => {
        setTransactions(data.transactions);
        setMeta(data.meta);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [token, typeFilter, dateFilter, customStartDate, customEndDate, page]);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  const { confirm } = useUI();

  const handleTypeChange = (val) => {
    setTypeFilter(val);
    setPage(1);
  };

  const handleDateFilterChange = (val) => {
    setDateFilter(val);
    setPage(1);
  };

  const handleDelete = async (id) => {
    const confirmed = await confirm({
      title: 'Delete Transaction',
      message: 'Are you sure you want to permanently delete this transaction? This action cannot be undone.',
      confirmText: 'Delete',
      type: 'danger'
    });

    if (!confirmed) return;

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || ''}/api/transactions/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        fetchTransactions(); // Refresh current page
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || ''}/api/transactions/${editingTransaction.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(editingTransaction)
      });
      if (res.ok) {
        setTransactions(prev => prev.map(t => t.id === editingTransaction.id ? { ...t, ...editingTransaction } : t));
        setEditingTransaction(null);
      } else {
        alert("Failed to update transaction.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container" style={{ position: 'relative', paddingBottom: '5rem' }}>

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
                    onChange={e => setEditingTransaction({ ...editingTransaction, amount: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <div className="form-group" style={{ flex: '1 1 200px' }}>
                  <label>Category</label>
                  <select className="form-control" value={editingTransaction.category} onChange={e => setEditingTransaction({ ...editingTransaction, category: e.target.value })}>
                    {(editingTransaction.type === 'expense' ? EXPENSE_CATEGORIES : INCOME_CATEGORIES).map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group" style={{ flex: 1 }}>
                  <label>Method</label>
                  <select className="form-control" value={editingTransaction.payment_method} onChange={e => setEditingTransaction({ ...editingTransaction, payment_method: e.target.value })}>
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
                  onChange={e => setEditingTransaction({ ...editingTransaction, date: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Note</label>
                <input
                  type="text" className="form-control"
                  value={editingTransaction.note || ''}
                  onChange={e => setEditingTransaction({ ...editingTransaction, note: e.target.value })}
                />
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button type="submit" className="btn btn-primary" style={{ flex: 1, height: '50px', borderRadius: '12px', fontWeight: 600, fontSize: '1rem' }}>Update Transaction</button>
              </div>
            </form>
          </div>
        </div>
      )}      {/* Header and Filters */}
      <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem' }}>
          <h1 style={{ margin: 0 }}>All Transactions</h1>
          {!loading && meta.total > 0 && (
            <div style={{ fontSize: '0.95rem', color: 'var(--primary-color)', fontWeight: 600, background: 'rgba(59, 130, 246, 0.1)', padding: '0.4rem 1rem', borderRadius: '99px', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
              Total: <span style={{ fontWeight: 800 }}>{meta.total}</span> {meta.total === 1 ? 'transaction' : 'transactions'} found
            </div>
          )}
        </div>

        <div className="filter-stack" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-end', background: 'white', padding: '1.5rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
          <div className="form-group" style={{ flex: '1 1 150px', marginBottom: 0 }}>
            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Type</label>
            <select
              className="form-control"
              value={typeFilter}
              onChange={(e) => handleTypeChange(e.target.value)}
              style={{ height: '42px' }}
            >
              <option value="">All Types</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>

          <div className="form-group" style={{ flex: '1 1 180px', marginBottom: 0 }}>
            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Time Period</label>
            <select
              className="form-control"
              value={dateFilter}
              onChange={(e) => handleDateFilterChange(e.target.value)}
              style={{ height: '42px' }}
            >
              <option value="all">All Time</option>
              <option value="this-week">This Week</option>
              <option value="last-week">Last Week</option>
              <option value="this-month">This Month</option>
              <option value="last-month">Last Month</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>

          {dateFilter === 'custom' && (
            <>
              <div className="form-group" style={{ flex: '1 1 150px', marginBottom: 0 }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>From</label>
                <input
                  type="date" className="form-control" value={customStartDate}
                  onChange={(e) => { setCustomStartDate(e.target.value); setPage(1); }}
                  style={{ height: '42px' }}
                />
              </div>
              <div className="form-group" style={{ flex: '1 1 150px', marginBottom: 0 }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>To</label>
                <input
                  type="date" className="form-control" value={customEndDate}
                  onChange={(e) => { setCustomEndDate(e.target.value); setPage(1); }}
                  style={{ height: '42px' }}
                />
              </div>
            </>
          )}
        </div>
      </div>

      <div className={loading ? "" : (transactions.length > 0 ? "card" : "")} style={{ padding: 0, overflow: 'hidden', background: loading || transactions.length === 0 ? 'transparent' : 'white', border: loading || transactions.length === 0 ? 'none' : '1px solid var(--border-color)' }}>
        {loading ? (
          <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
            <div className="spinner" style={{ marginBottom: '1rem' }}></div>
            <p>Loading transactions...</p>
          </div>
        ) : transactions.length === 0 ? (
          <div className="card" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
            <Calendar size={48} style={{ color: '#cbd5e1', marginBottom: '1rem' }} />
            <h3 style={{ color: 'var(--text-color)' }}>No transactions found</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Try adjusting your filters or date range</p>
          </div>
        ) : (
          <>
            {/* Desktop Table View */}
            <div className="table-wrapper hide-mobile">
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <th style={{ textAlign: 'left', padding: '1.2rem 1.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Date</th>
                    <th style={{ textAlign: 'left', padding: '1.2rem 1.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Category</th>
                    <th style={{ textAlign: 'left', padding: '1.2rem 1.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Method</th>
                    <th style={{ textAlign: 'left', padding: '1.2rem 1.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Type</th>
                    <th style={{ textAlign: 'left', padding: '1.2rem 1.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Note</th>
                    <th style={{ textAlign: 'right', padding: '1.2rem 1.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Amount</th>
                    <th style={{ textAlign: 'center', padding: '1.2rem 1.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map(t => (
                    <tr key={t.id} style={{ borderBottom: '1px solid #f8fafc', transition: 'background-color 0.2s' }} className="table-row-hover">
                      <td style={{ padding: '1.2rem 1.5rem', fontWeight: 500 }}>{new Date(t.date).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })}</td>
                      <td style={{ padding: '1.2rem 1.5rem' }}>
                        <span style={{ padding: '0.4rem 0.8rem', borderRadius: '8px', background: '#f1f5f9', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-color)' }}>
                          {t.category}
                        </span>
                      </td>
                      <td style={{ padding: '1.2rem 1.5rem' }}>{t.payment_method || 'Cash'}</td>
                      <td style={{ padding: '1.2rem 1.5rem' }}>
                        <span className={`badge badge-${t.type === 'income' ? 'income' : 'expense'}`} style={{ fontWeight: 600 }}>
                          {t.type.toUpperCase()}
                        </span>
                      </td>
                      <td style={{ padding: '1.2rem 1.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{t.note || '-'}</td>
                      <td style={{ padding: '1.2rem 1.5rem', textAlign: 'right', fontWeight: 700, fontSize: '1.05rem' }} className={t.type === 'income' ? 'income-text' : 'expense-text'}>
                        {t.type === 'income' ? '+' : '-'}₹{Number(t.amount).toLocaleString('en-IN')}
                      </td>
                      <td style={{ padding: '1.2rem 1.5rem', textAlign: 'center' }}>
                        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                          <button
                            onClick={() => setEditingTransaction(t)}
                            style={{ border: 'none', background: '#f1f5f9', color: 'var(--primary-color)', padding: '0.6rem', borderRadius: '10px', cursor: 'pointer', transition: 'all 0.2s' }}
                            title="Edit"
                          >
                            <Pencil size={16} />
                          </button>
                          <button
                            onClick={() => handleDelete(t.id)}
                            style={{ border: 'none', background: '#fee2e2', color: 'var(--expense-color)', padding: '0.6rem', borderRadius: '10px', cursor: 'pointer', transition: 'all 0.2s' }}
                            title="Delete"
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

            {/* Mobile Card View */}
            <div className="mobile-transaction-list only-mobile">
              {transactions.map(t => (
                <div key={t.id} className="transaction-mobile-card">
                  <div className="transaction-mobile-header">
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.2rem' }}>{t.category}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        {new Date(t.date).toLocaleDateString(undefined, { day: 'numeric', month: 'short' })} • {t.payment_method || 'Cash'}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontWeight: 800, fontSize: '1.2rem' }} className={t.type === 'income' ? 'income-text' : 'expense-text'}>
                        {t.type === 'income' ? '+' : '-'}₹{Number(t.amount).toLocaleString('en-IN')}
                      </div>
                      <span className={`badge badge-${t.type === 'income' ? 'income' : 'expense'}`} style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem', marginTop: '0.3rem' }}>
                        {t.type.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  {t.note && (
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', background: '#f8fafc', padding: '0.6rem', borderRadius: '8px', marginTop: '0.5rem' }}>
                      {t.note}
                    </div>
                  )}

                  <div className="transaction-mobile-footer">
                    <button
                      onClick={() => setEditingTransaction(t)}
                      style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', border: 'none', background: '#f1f5f9', color: 'var(--primary-color)', padding: '0.75rem', borderRadius: '10px', cursor: 'pointer', fontWeight: 600 }}
                    >
                      <Pencil size={16} /> Edit
                    </button>
                    <div style={{ width: '1rem' }}></div>
                    <button
                      onClick={() => handleDelete(t.id)}
                      style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', border: 'none', background: '#fee2e2', color: 'var(--expense-color)', padding: '0.75rem', borderRadius: '10px', cursor: 'pointer', fontWeight: 600 }}
                    >
                      <Trash2 size={16} /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Pagination */}
      {!loading && meta.totalPages > 1 && (
        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <button
            disabled={page === 1}
            onClick={() => setPage(prev => prev - 1)}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.2rem',
              borderRadius: '12px', border: '1px solid #e2e8f0', background: page === 1 ? '#f8fafc' : 'white',
              cursor: page === 1 ? 'not-allowed' : 'pointer', color: page === 1 ? '#cbd5e1' : 'var(--text-color)',
              fontWeight: 600, transition: 'all 0.2s',
              flex: '1 1 120px', justifyContent: 'center'
            }}
          >
            <ChevronLeft size={18} /> Prev
          </button>

          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', order: -1, width: '100%', justifyContent: 'center', marginBottom: '0.5rem' }} className="only-mobile">
            <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>Page {page} of {meta.totalPages}</span>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }} className="hide-mobile">
            <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>Page</span>
            <span style={{ padding: '0.4rem 1rem', background: 'var(--primary-color)', color: 'white', borderRadius: '8px', fontWeight: 700 }}>{page}</span>
            <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>of {meta.totalPages}</span>
          </div>

          <button
            disabled={page === meta.totalPages}
            onClick={() => setPage(prev => prev + 1)}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.2rem',
              borderRadius: '12px', border: '1px solid #e2e8f0', background: page === meta.totalPages ? '#f8fafc' : 'white',
              cursor: page === meta.totalPages ? 'not-allowed' : 'pointer', color: page === meta.totalPages ? '#cbd5e1' : 'var(--text-color)',
              fontWeight: 600, transition: 'all 0.2s',
              flex: '1 1 120px', justifyContent: 'center'
            }}
          >
            Next <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
