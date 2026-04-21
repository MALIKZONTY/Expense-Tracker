export default function PrivacyPolicy() {
  return (
    <div className="container page-container">
      <div className="card shadow-soft page-card" style={{ maxWidth: '1000px', margin: '0 auto', background: 'white', borderRadius: '32px' }}>
        <div style={{ background: 'rgba(59, 130, 246, 0.1)', color: 'var(--primary-color)', padding: '0.6rem 1.2rem', borderRadius: '20px', display: 'inline-block', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1.5rem' }}>
          Privacy Commitment
        </div>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '2rem', letterSpacing: '-0.04em' }}>Privacy Policy</h1>
        <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '2rem' }}>Version 3.1 | Last Modified: April 20, 2026</p>
        
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: '1.8' }}>
          Expensico Finance ("we," "our," or "us") is dedicated to the robust protection of user privacy and the transparent management of personal data. In an age of digital transformation, we recognize that financial data is among the most sensitive information an individual can share. This Privacy Policy is designed to provide you with a comprehensive understanding of how we collect, store, process, and protect your data across our platform. Our commitment to privacy is not merely a legal requirement; it is a core pillar of our financial intelligence philosophy. We believe that you cannot have financial clarity without data security. This policy has been drafted to meet and exceed global regulatory standards, including the GDPR, CCPA, and UK DPA.
        </p>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem', borderLeft: '4px solid var(--primary-color)', paddingLeft: '1.5rem' }}>1. Comprehensive Information Collection</h2>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>A. Personal Identification Information</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            When you register for an account, we collect your email address and, optionally, your name. This information serves as your unique identifier within our ecosystem and is used for authentication, account recovery, and critical security notifications. We may also collect data related to your social media profiles if you choose to link them for easy authentication purposes. This data is strictly used to verify your identity and prevent unauthorized account takeovers. We implement a non-identifying salt and hashing mechanism for all sensitive credentials.
          </p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>B. Financial Transactional Data</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            The core of our service involves the processing of financial records that you manually input or synchronize with the platform. This includes:
          </p>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', lineHeight: '2' }}>
            <li>Detailed expense amounts, categories (e.g., Groceries, Rent, Entertainment, Healthcare, Education, Insurance), and merchant descriptions.</li>
            <li>Income records, salary structures, freelance earnings, and investment dividends.</li>
            <li>System-generated timestamps associated with every logistical financial activity to provide accurate historical visual intelligence.</li>
            <li>Wallet or account labels designed by the user to represent specific physical or digital assets (e.g., "Main Savings Account", "Physical Cash Vault").</li>
            <li>Budget parameters and financial goal descriptions that you establish to track your progress toward wealth milestones.</li>
          </ul>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            This data is stored securely and is never shared with third-party advertisers in an identifiable format. We do not sell, rent, or trade your individual transaction logs to anyone.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem', borderLeft: '4px solid var(--primary-color)', paddingLeft: '1.5rem' }}>2. Advanced Data Processing & Usage</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            Expensico uses the collected data exclusively for high-value operational purposes designed to enhance your financial journey. Our processing activities include:
          </p>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', lineHeight: '2' }}>
            <li><strong>Service Fulfillment</strong>: Calculating complex net balances using proprietary algorithms to provide real-time accuracy.</li>
            <li><strong>Intelligent Categorization</strong>: Using patterns to suggest categories for your new expenses, speeding up your workflow.</li>
            <li><strong>Security Orchestration</strong>: Monitoring for unusual login patterns to protect your financial history.</li>
            <li><strong>Advertising Ecosystem Support</strong>: Utilizing anonymized, non-personally identifiable information for AdSense.</li>
            <li><strong>Content Personalization</strong>: Recommending financial literacy articles from our blog based on your categories.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem', borderLeft: '4px solid var(--primary-color)', paddingLeft: '1.5rem' }}>3. Data Storage & Security</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            Your data is stored using industry-leading infrastructure providers including Railway, Neon, and Vercel Edge. We leverage encrypted PostgreSQL databases. All data transmitted between your browser and our servers is protected by Transport Layer Security (TLS/SSL) encryption. Sensitive account identifiers and financial records are encrypted at rest using AES-256 protocols. We perform regular security audits and maintain geographically redundant backups.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem', borderLeft: '4px solid var(--primary-color)', paddingLeft: '1.5rem' }}>4. Google AdSense & Third-Party Transparency</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            As an ad-supported platform, Expensico participates in the Google AdSense network. This involves the use of cookies and web beacons by Google to serve ads based on your prior visits. Advertisements are the engine that allows Expensico to remain free. You may opt-out of personalized advertising by visiting Google's settings. We do not provide your email address or transaction history to Google.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem', borderLeft: '4px solid var(--primary-color)', paddingLeft: '1.5rem' }}>5. Data Subject Rights (GDPR/CCPA/DPA)</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            Regardless of your geographical location, Expensico grants all users robust data rights. These include the Right of Access, Right to Rectification, Right to Erasure, Right to Data Portability, and the Right to Restrict Processing. Account deletion requests are processed within 30 days.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem', borderLeft: '4px solid var(--primary-color)', paddingLeft: '1.5rem' }}>6. Data Breach Notification</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            In the highly unlikely event of a data breach that compromises your personal information, Expensico is committed to full transparency. We will notify affected users via their registered email address within 72 hours of discovering the incident, including details on the nature of the breach and mitigation steps.
          </p>
        </section>

        <div style={{ marginTop: '5rem', padding: '2.5rem', background: '#f8fafc', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
          <h4 style={{ fontWeight: 800, marginBottom: '1rem' }}>Contact Our Data Protection Officer</h4>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: 0 }}>
            Questions about your privacy? Contact us at <a href="mailto:malikantuparthi@gmail.com" style={{ color: 'var(--primary-color)', fontWeight: 700 }}>malikantuparthi@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
