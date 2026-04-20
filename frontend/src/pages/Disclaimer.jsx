import { Link } from 'react-router-dom';

export default function Disclaimer() {
  return (
    <div className="container" style={{ padding: '8rem 2rem' }}>
      <div className="card shadow-soft" style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem', background: 'white', borderRadius: '32px' }}>
        <div style={{ background: 'rgba(59, 130, 246, 0.1)', color: 'var(--primary-color)', padding: '0.6rem 1.2rem', borderRadius: '20px', display: 'inline-block', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1.5rem' }}>
          Professional Disclosure
        </div>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '2rem', letterSpacing: '-0.04em' }}>Legal Disclaimer</h1>
        <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '2rem' }}>Last Updated: April 20, 2026</p>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem', borderLeft: '4px solid var(--primary-color)', paddingLeft: '1.5rem' }}>1. Financial Education and Information Only</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            The information provided on Expensico, including but not limited to our dashboard analytics, budgeting tools, and blog content, is intended for general educational and informational purposes only. It is not intended to be a substitute for professional financial advice, diagnosis, or treatment. Always seek the advice of your financial advisor or other qualified professional with any questions you may have regarding a financial plan.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem', borderLeft: '4px solid var(--primary-color)', paddingLeft: '1.5rem' }}>2. No Professional-Client Relationship</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            Your use of this website and its tools does not establish a professional-client relationship between you and Expensico Finance. Any reliance you place on the information found within our platform is strictly at your own risk. We are not acting as your broker, advisor, or fiduciary in any capacity.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem', borderLeft: '4px solid var(--primary-color)', paddingLeft: '1.5rem' }}>3. Accuracy of Information</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            While we strive to provide high-quality data visualizations and well-researched financial literacy content, we make no representations or warranties of any kind about the completeness, accuracy, reliability, or suitability of the information. Financial markets, tax regulations, and investment strategies are subject to rapid change.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem', borderLeft: '4px solid var(--primary-color)', paddingLeft: '1.5rem' }}>4. AdSense and Third-Party Links</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            Our website contains advertisements served by Google AdSense and may contain links to third-party websites. Expensico does not endorse the products or services advertised, nor do we have control over the content or practices of third-party sites. Clicking on third-party links is done at your own risk.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem', borderLeft: '4px solid var(--primary-color)', paddingLeft: '1.5rem' }}>5. User Personal Responsibility</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            You acknowledge that you are using our services voluntarily and that any choices, actions, and results now and in the future are solely your responsibility. Expensico will not be liable for any decision made or action taken in reliance on the information given by our service.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem', borderLeft: '4px solid var(--primary-color)', paddingLeft: '1.5rem' }}>6. Technology and Security Disclaimer</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            While we implement industry-standard security measures, we cannot guarantee that the platform will be 100% free of bugs, errors, or unauthorized access. You are responsible for maintaining your own local backups of critical data.
          </p>
        </section>

        <div style={{ marginTop: '5rem', padding: '2.5rem', background: '#f8fafc', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
          <h4 style={{ fontWeight: 800, marginBottom: '1rem' }}>Formal Notice</h4>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: 0 }}>
            Questions regarding this disclosure? Contact our compliance team at <a href="mailto:malikantuparthi@gmail.com" style={{ color: 'var(--primary-color)', fontWeight: 700 }}>malikantuparthi@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
