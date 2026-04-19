export default function About() {
  return (
    <div className="container" style={{ padding: '2rem 1rem', maxWidth: '800px' }}>
      <div className="card" style={{ padding: '3rem 2rem', textAlign: 'center' }}>
        <h1 style={{ color: 'var(--primary-color)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>About SmartTracker</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
          SmartTracker was built out of the sheer necessity for a clean, private, and powerful financial tracking tool. 
          We believe that understanding your money should not require complex spreadsheets or confusing banking applications.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '3rem', textAlign: 'left' }}>
          <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ color: 'var(--text-color)', marginBottom: '0.5rem' }}>Privacy First</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Your data is securely locked behind JWT authenticated sessions securely stored in a scalable Cloud database.</p>
          </div>
          <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ color: 'var(--text-color)', marginBottom: '0.5rem' }}>Dynamic Balance</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Track multiple wallets seamlessly. Know exactly how much is in Cash versus Online Payments.</p>
          </div>
          <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ color: 'var(--text-color)', marginBottom: '0.5rem' }}>Elegant Analytics</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Built-in Recharts generate beautiful line and pie charts summarizing your exact financial health.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
