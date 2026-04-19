import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="container" style={{ padding: '4rem 1rem', maxWidth: '900px' }}>
      <div className="card" style={{ padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem)' }}>
        <h1 style={{ marginBottom: '2.5rem', fontSize: 'clamp(2rem, 8vw, 3rem)', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>Privacy Policy</h1>
        
        <div style={{ color: 'var(--text-secondary)', lineHeight: '1.9', fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '2rem', fontStyle: 'italic', color: 'var(--text-primary)' }}>Last Updated: {new Date().toLocaleDateString()}</p>
          
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.5rem', fontWeight: 800 }}>1. Comprehensive Data Stewardship</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              At SmartTracker, we recognize that privacy is not merely a feature, but a fundamental human right. This Privacy Policy is our commitment to transparency, outlining the meticulous measures we take to safeguard your personal and financial information. By using our services, you entrust us with your data, and we take that responsibility with the utmost gravity.
            </p>
            <p>
              We operate under the principle of <strong>Data Sovereignty</strong>, meaning you retain full ownership and control over your data at all times. Our systems are designed to minimize data collection, ensuring that we only possess the information absolutely necessary to provide you with a world-class financial tracking experience.
            </p>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.5rem', fontWeight: 800 }}>2. Information We Collect</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Our data collection is transparent and strictly limited to the following categories:
            </p>
            <div style={{ paddingLeft: '1.5rem' }}>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.75rem' }}>A. Personal Authentication Data</h4>
              <p style={{ marginBottom: '1rem' }}>
                To create and secure your account, we collect your email address. This information is used for identity verification, account recovery, and sending critical security notifications. We do not require or collect your name, physical address, or phone number unless explicitly provided for specific support requests.
              </p>
              
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.75rem' }}>B. Financial Transaction Data</h4>
              <p style={{ marginBottom: '1rem' }}>
                As a core service of SmartTracker, we store the transaction data you manually input. This includes amounts, categories, dates, payment methods, and optional notes. This data is logically isolated per user and is never aggregated for third-party marketing purposes.
              </p>

              <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.75rem' }}>C. System and Usage Logs</h4>
              <p style={{ marginBottom: '1rem' }}>
                When you interact with our servers, we automatically collect basic system information such as IP addresses (anonymized), browser types, and timestamp data. This is used exclusively for performance monitoring, security auditing, and troubleshooting system errors.
              </p>
            </div>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.5rem', fontWeight: 800 }}>3. Advanced Security Protocols</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We implement a multi-layered security architecture to ensure your data remains impenetrable. This includes:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '1rem' }}><strong>End-to-End Transit Encryption:</strong> All data transmitted between your device and our servers is encrypted using 2048-bit TLS/SSL protocols, preventing "man-in-the-middle" attacks.</li>
              <li style={{ marginBottom: '1rem' }}><strong>At-Rest Hashing:</strong> Sensitive authentication data, such as passwords, are never stored in plain text. We utilize advanced cryptographic hashing algorithms (BCrypt with high salt rounds) to ensure that even a database breach would not compromise your credentials.</li>
              <li style={{ marginBottom: '1rem' }}><strong>JWT Stateless Sessions:</strong> We utilize JSON Web Tokens for session management. These tokens are cryptographically signed and stored in secure, HttpOnly cookies to prevent Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF).</li>
            </ul>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.5rem', fontWeight: 800 }}>4. Data Retention and Deletion</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We adhere to the "Right to be Forgotten" principle. Your data is retained only for as long as your account is active. If you choose to delete your account, all personal and financial data is permanently purged from our primary database within 30 days.
            </p>
            <p>
              Please note our <strong>Soft-Delete Architecture</strong>: When you delete a transaction, it is marked as "deleted" in our database and hidden from your interface immediately. This allows for a "grace period" should you need to recover a transaction through a support request. However, after a designated cleanup period, these records are physically moved to cold storage before final permanent erasure.
            </p>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.5rem', fontWeight: 800 }}>5. Third-Party Disclosures</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              SmartTracker does not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential and compliant with global privacy standards (e.g., Cloud database providers).
            </p>
            <p>
              We may release information when its release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.
            </p>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.5rem', fontWeight: 800 }}>6. Cookie Usage Transparency</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information.
            </p>
            <p>
              We use cookies to:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '0.75rem' }}>Maintain your authenticated session (Session Tokens).</li>
              <li style={{ marginBottom: '0.75rem' }}>Remember your theme preferences (Dark vs. Light mode).</li>
              <li style={{ marginBottom: '0.75rem' }}>Aggregate anonymous usage data to improve our analytics tools.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.5rem', fontWeight: 800 }}>7. International Compliance</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Although SmartTracker is accessible globally, we strive to adhere to the highest international standards of data protection, including the principles outlined in the <strong>General Data Protection Regulation (GDPR)</strong> and the <strong>California Consumer Privacy Act (CCPA)</strong>.
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '0.75rem' }}>The right to access your personal data.</li>
              <li style={{ marginBottom: '0.75rem' }}>The right to rectification of inaccurate data.</li>
              <li style={{ marginBottom: '0.75rem' }}>The right to data portability.</li>
              <li style={{ marginBottom: '0.75rem' }}>The right to object to automated individual decision-making.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.5rem', fontWeight: 800 }}>8. Exercise Your Rights</h2>
            <p>
              If there are any questions regarding this privacy policy, the methods in which we handle your data, or if you wish to exercise your rights under global privacy laws, you may <Link to="/contact" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>send us a message through our Contact Page</Link>. Our Privacy Compliance Office reviews all inquiries within 24–48 hours.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
