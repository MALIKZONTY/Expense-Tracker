import { useState, useEffect, useContext } from 'react';
import { PieChart, Pie, Cell, LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Wallet } from 'lucide-react';

import AuthContext from '../context/AuthContext';

const API_URL = `${import.meta.env.VITE_API_URL || ''}/api`;
const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#64748b'];

export default function Dashboard() {
  const { token } = useContext(AuthContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [trendFilter, setTrendFilter] = useState('daily');

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/transactions/dashboard?trend=${trendFilter}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => {
        if (!res.ok) throw new Error('API Error');
        return res.json();
      })
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [token, trendFilter]);

  if (loading && !data) return <div className="container">Loading dashboard...</div>;
  if (!data) return <div className="container">Failed to load dashboard.</div>;

  const { summary, charts, walletBalances } = data;

  const getWalletIcon = (name) => {
    const n = name.toLowerCase();
    if (n.includes('cash')) return '/icons/wallets/cash.png';
    if (n.includes('phonepe')) return '/icons/wallets/phonepe.png';
    if (n.includes('paytm')) return '/icons/wallets/paytm.png';
    if (n.includes('gpay') || n.includes('google pay')) return '/icons/wallets/gpay.png';
    if (n.includes('sbi')) return '/icons/wallets/sbi.png';
    if (n.includes('hdfc')) return '/icons/wallets/hdfc.png';
    if (n.includes('icici')) return '/icons/wallets/icici.png';
    if (n.includes('axis')) return '/icons/wallets/axis.png';
    if (n.includes('amazon')) return '/icons/wallets/amazonpay.png';
    if (n.includes('cred')) return '/icons/wallets/cred.png';
    if (n.includes('gift')) return '/icons/wallets/giftcard.png';
    if (n.includes('bank') || n.includes('transfer') || n.includes('online')) return '/icons/wallets/bank.png';
    if (n.includes('card')) return '/icons/wallets/card.png';
    return '/icons/wallets/wallet-default.png';
  };

  return (
    <div className="container dashboard-container">
      <h1 style={{ marginBottom: '2rem' }}>Dashboard Overview</h1>

      <div className="dashboard-grid">
        <div className="card flex-col items-center justify-center" style={{ padding: '1.25rem' }}>
          <h3 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Total Income</h3>
          <p className="income-text" style={{ fontSize: '1.75rem', margin: '0.25rem 0' }}>₹{Number(summary.totalIncome).toLocaleString('en-IN')}</p>
        </div>
        <div className="card flex-col items-center justify-center" style={{ padding: '1.25rem' }}>
          <h3 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Total Expenses</h3>
          <p className="expense-text" style={{ fontSize: '1.75rem', margin: '0.25rem 0' }}>₹{Number(summary.totalExpenses).toLocaleString('en-IN')}</p>
        </div>
        <div className="card flex-col items-center justify-center" style={{ padding: '1.25rem' }}>
          <h3 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Remaining Balance</h3>
          <p style={{ fontSize: '1.75rem', margin: '0.25rem 0', fontWeight: 'bold' }}>₹{Number(summary.remainingBalance).toLocaleString('en-IN')}</p>
        </div>
        <div className="card flex-col items-center justify-center" style={{ padding: '1.25rem' }}>
          <h3 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Total Transactions</h3>
          <p style={{ fontSize: '1.75rem', margin: '0.25rem 0', fontWeight: 'bold', color: 'var(--primary-color)' }}>{summary.totalTransactions}</p>
        </div>
      </div>

      {walletBalances && walletBalances.length > 0 && (
        <div className="card" style={{ marginBottom: '2rem', padding: '1.5rem' }}>
          <h3 style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Wallet size={20} style={{ color: 'var(--primary-color)' }} /> Wallet Balances
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
            {walletBalances.map((w, idx) => (
              <div key={idx} style={{ 
                background: 'white', 
                padding: '1.25rem', 
                borderRadius: '16px', 
                border: '1px solid #eef2f6',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)';
              }}
              >
                <div style={{ 
                  width: '44px', 
                  height: '44px', 
                  borderRadius: '12px', 
                  overflow: 'hidden', 
                  background: '#f8fafc',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  border: '1px solid #f1f5f9'
                }}>
                  <img 
                    src={getWalletIcon(w.name)} 
                    alt={w.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => { e.target.src = '/icons/wallets/wallet-default.png'; }}
                  />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span style={{ 
                    color: 'var(--text-secondary)', 
                    fontSize: '0.75rem', 
                    display: 'block', 
                    whiteSpace: 'nowrap', 
                    overflow: 'hidden', 
                    textOverflow: 'ellipsis',
                    fontWeight: 500
                  }}>
                    {w.name} {w.name === 'Unknown' ? '(Manual)' : ''}
                  </span>
                  <p style={{ 
                    fontSize: '1.15rem', 
                    fontWeight: 700, 
                    margin: 0, 
                    color: w.balance >= 0 ? 'var(--text-primary)' : 'var(--expense-color)',
                    letterSpacing: '-0.01em'
                  }}>
                    ₹{Math.abs(Number(w.balance)).toLocaleString('en-IN')}
                  </p>
                  {w.balance < 0 && (
                    <span style={{ fontSize: '0.65rem', color: 'var(--expense-color)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '2px' }}>
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'currentColor' }} /> Deficit
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="dashboard-grid">
        <div className="card">
          <h3>Expense by Category</h3>
          {charts.categoryPie.length > 0 ? (
            <div style={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={charts.categoryPie} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
                    {charts.categoryPie.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <p>No expense data available.</p>
          )}
        </div>

        <div className="card">
          <h3>Income Sources</h3>
          {charts.incomeByMethod && charts.incomeByMethod.length > 0 ? (
            <div style={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={charts.incomeByMethod} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
                    {charts.incomeByMethod.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[(index + 3) % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <p>No income data available.</p>
          )}
        </div>

        <div className="card">
          <h3>Income vs Expense</h3>
          <div style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={charts.incomeVsExpense}>
                <XAxis dataKey="name" />
                <Tooltip cursor={{ fill: 'transparent' }} />
                <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
                  {charts.incomeVsExpense.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.name === 'Income' ? 'var(--income-color)' : 'var(--expense-color)'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: '2rem' }}>
        <div className="flex justify-between items-center" style={{ marginBottom: '1rem' }}>
          <h3>Spending Trend</h3>
          <select 
            className="form-control" 
            value={trendFilter} 
            onChange={(e) => setTrendFilter(e.target.value)}
            style={{ width: '150px' }}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        
        {charts.dynamicTrend && charts.dynamicTrend.length > 0 ? (
          <div style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={charts.dynamicTrend}>
                <XAxis 
                  dataKey="period" 
                  tickFormatter={(val) => {
                    if (!val) return '';
                    if (val.includes('-W')) {
                      // YYYY-Www -> Week ww
                      return 'Week ' + val.split('-W')[1];
                    }
                    const parts = val.split('-');
                    if (parts.length === 3) {
                      // YYYY-MM-DD -> DD MMM
                      const d = new Date(val);
                      return d.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
                    }
                    if (parts.length === 2) {
                      // YYYY-MM -> MMM YY
                      const d = new Date(val + '-01');
                      return d.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
                    }
                    return val;
                  }}
                  tick={{ fill: 'var(--text-secondary)', fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  dy={10}
                />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="amount" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <p>Not enough data for trend.</p>
        )}
      </div>
    </div>
  );
}
