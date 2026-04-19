import { useState, useEffect, useContext } from 'react';
import { PieChart, Pie, Cell, LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

import AuthContext from '../context/AuthContext';

const API_URL = `${import.meta.env.VITE_API_URL || ''}/api`;
const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#64748b'];

export default function Dashboard() {
  const { token } = useContext(AuthContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [trendFilter, setTrendFilter] = useState('monthly');

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

  return (
    <div className="container dashboard-container">
      <h1>Dashboard</h1>

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
      </div>

      {walletBalances && walletBalances.length > 0 && (
        <div className="card" style={{ marginBottom: '2rem', padding: '1.25rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>Wallet Balances</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem' }}>
            {walletBalances.map((w, idx) => (
              <div key={idx} style={{ background: '#f8fafc', padding: '1rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', display: 'block', marginBottom: '0.25rem' }}>{w.name} {w.name === 'Unknown' ? '(Manual)' : ''}</span>
                <p style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0, color: w.balance >= 0 ? 'var(--text-color)' : 'var(--expense-color)' }}>
                  ₹{Math.abs(Number(w.balance)).toLocaleString('en-IN')}
                </p>
                {w.balance < 0 && <span style={{ fontSize: '0.7rem', color: 'var(--expense-color)', fontWeight: 600 }}>Deficit</span>}
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
