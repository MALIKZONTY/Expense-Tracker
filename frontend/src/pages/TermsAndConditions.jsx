import { Link } from 'react-router-dom';

export default function TermsAndConditions() {
  return (
    <div className="container" style={{ padding: '8rem 2rem' }}>
      <div className="card shadow-soft" style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem', background: 'white', borderRadius: '32px' }}>
        <div style={{ background: 'rgba(59, 130, 246, 0.1)', color: 'var(--primary-color)', padding: '0.6rem 1.2rem', borderRadius: '20px', display: 'inline-block', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1.5rem' }}>
          Usage Agreement
        </div>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '2rem', letterSpacing: '-0.04em' }}>Terms of Service / Terms of Use</h1>
        <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '2rem' }}>Effective Date: April 20, 2026</p>

        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: '1.8' }}>
          Welcome to Expensico Finance. By accessing our website (expense-tracker-theta-weld.vercel.app) or using our financial tracking services, you agree to be bound by these Terms and Conditions. These Terms constitute a legally binding agreement between you and Expensico Finance. If you do not agree to these Terms, you must immediately cease all use of our platform.
        </p>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem', borderLeft: '4px solid var(--primary-color)', paddingLeft: '1.5rem' }}>1. Scope and Description of Service</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            Expensico provides an interactive platform for the logging, categorization, and visualization of personal financial transactions. Our goal is to provide users with visual intelligence to better manage their money. The service is provided "as is" and is designed for personal, non-commercial use. We reserve the right to modify, suspend, or discontinue any part of the service at any time without prior notice.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem', borderLeft: '4px solid var(--primary-color)', paddingLeft: '1.5rem' }}>2. Rules for Using Our Site</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            You must be at least 18 years old to create an account. You are solely responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You agree to provide accurate, current, and complete information during the registration process and to update such information as necessary.
          </p>
        </section>

        <section style={{ marginBottom: '3rem', border: '2px solid rgba(239, 68, 68, 0.1)', padding: '2rem', borderRadius: '24px', background: 'rgba(239, 68, 68, 0.02)' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: '#dc2626' }}>3. Disclaimers and Liability Limitations (Financial)</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontWeight: 500 }}>
            <strong>CRITICAL NOTICE</strong>: Expensico Finance is a data tracking and visualization tool. We are NOT a financial institution, bank, or licensed financial advisor. The insights, charts, and blog content provided by our platform are for informational and educational purposes only. They do not constitute professional financial, investment, or legal advice. You should consult with a qualified professional before making any significant financial decisions.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem', borderLeft: '4px solid var(--primary-color)', paddingLeft: '1.5rem' }}>4. User Conduct and Prohibited Use</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            You agree not to use Expensico for any unlawful purpose. Prohibited activities include attempting to bypass security measures, using automated systems to harvest data, or uploading malicious code designed to disrupt the service. Violation of these conduct rules may result in the immediate termination of your account without warning.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem', borderLeft: '4px solid var(--primary-color)', paddingLeft: '1.5rem' }}>5. Intellectual Property Rights</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            All content on this platform, including the "Expensico" brand name, logos, designs, blog articles, and proprietary algorithms, is the intellectual property of Expensico Finance and is protected by international laws. You are granted a limited, personal, non-transferable license to use the platform for its intended tracking purposes only.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem', borderLeft: '4px solid var(--primary-color)', paddingLeft: '1.5rem' }}>6. Secondary Disclaimers and Liability Limitations</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            To the maximum extent permitted by law, Expensico Finance shall not be liable for any indirect, incidental, or consequential damages resulting from your use of the platform. We make no warranties that the service will be uninterrupted, error-free, or entirely secure from unauthorized interference.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem', borderLeft: '4px solid var(--primary-color)', paddingLeft: '1.5rem' }}>7. Governing Law</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the platform operators are based. Any disputes shall be resolved through binding arbitration.
          </p>
        </section>

        <div style={{ marginTop: '5rem', padding: '2.5rem', background: '#f8fafc', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
          <h4 style={{ fontWeight: 800, marginBottom: '1rem' }}>Legal Inquiries</h4>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: 0 }}>
            Questions about our terms? Contact our legal desk at <a href="mailto:malikantuparthi@gmail.com" style={{ color: 'var(--primary-color)', fontWeight: 700 }}>malikantuparthi@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
