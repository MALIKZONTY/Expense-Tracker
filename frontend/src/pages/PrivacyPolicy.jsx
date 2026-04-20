import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="container" style={{ padding: '4rem 1rem', maxWidth: '1000px' }}>
      <div className="card" style={{ padding: 'clamp(2rem, 5vw, 5rem) clamp(1.5rem, 4vw, 4rem)', background: 'white', borderRadius: '32px', boxShadow: '0 20px 50px rgba(0,0,0,0.05)' }}>
        <h1 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.05em' }}>Privacy Policy</h1>
        <p style={{ marginBottom: '3rem', fontSize: '1.2rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Global Data Protection & Privacy Commitment for Expensico</p>
        
        <div style={{ color: 'var(--text-secondary)', lineHeight: '1.9', fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '3rem', fontStyle: 'italic', borderLeft: '5px solid var(--primary-color)', paddingLeft: '2rem', background: 'rgba(59, 130, 246, 0.04)', padding: '1.5rem', borderRadius: '0 16px 16px 0' }}>
            <strong>Version 2.0 | Last Modified:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.75rem', fontWeight: 800 }}>1. Framework and Scope of Governance</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Expensico ("we", "us", or "our") operates the financial intelligence platform accessible via our web application. We are committed to the highest standards of data stewardship and transparency. This Privacy Policy serves as the definitive guide to our data practices, engineered to satisfy requirements under the <strong>General Data Protection Regulation (GDPR)</strong>, <strong>California Consumer Privacy Act (CCPA/CPRA)</strong>, <strong>UK Data Protection Act 2018</strong>, and other global standards.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              This policy applies to all users (collectively, "Users", "you", or "your") who interact with our services. By using Expensico, you acknowledge that you have read and understood this policy in its entirety.
            </p>
            <div style={{ padding: '1.25rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
               <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Data Controller Information</h4>
               <p style={{ fontSize: '0.95rem' }}>Expensico acts as the <strong>Data Controller</strong> for the personal data collected through this platform. Our Data Protection Officer (DPO) oversees our privacy strategy and can be reached via the contact methods listed in Section 12.</p>
            </div>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.75rem', fontWeight: 800 }}>2. Legal Bases for Processing (GDPR Article 6)</h2>
            <p style={{ marginBottom: '1.5rem' }}>We only process your data when we have a valid legal ground to do so. Our processing is predicated on the following bases:</p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '1rem' }}><strong>Consent:</strong> You have given clear consent for us to process your personal data for a specific purpose (e.g., creating an account).</li>
              <li style={{ marginBottom: '1rem' }}><strong>Contractual Necessity:</strong> Processing is necessary for the performance of the service agreement between you and Expensico (e.g., providing financial balance calculations).</li>
              <li style={{ marginBottom: '1rem' }}><strong>Legal Obligation:</strong> Processing is required for us to comply with the law (e.g., financial reporting or security audits).</li>
              <li style={{ marginBottom: '1rem' }}><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate interests, such as improving platform performance, providing customer support, or ensuring network security, provided these do not override your fundamental rights.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.75rem', fontWeight: 800 }}>3. Granular Data Collection</h2>
            <div style={{ paddingLeft: '1rem' }}>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginBottom: '1rem' }}>A. Identity and Authentication Data</h3>
              <p style={{ marginBottom: '1.5rem' }}>When you register, we collect your email address. We use this as a unique identifier for your cryptographic session and for critical platform communications. We do not collect names, physical addresses, or government identifiers unless voluntarily provided during a high-tier support request.</p>
              
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginBottom: '1rem' }}>B. Financial Intelligence Data</h3>
              <p style={{ marginBottom: '1.5rem' }}>We store the ledger entries you create. This includes: timestamped transaction amounts, user-defined categories (e.g., "Dining", "Rent"), payment method metadata, and custom notes. Note: We do not integrate with banks via Plaid or Yodlee; all data is manually input by you, giving you full control over the depth of data shared.</p>

              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginBottom: '1rem' }}>C. Digital Footprint (Metadata)</h3>
              <p style={{ marginBottom: '1.5rem' }}>Our platform automatically captures: IP addresses (anonymized at the network layer), browser fingerprinting data, viewport dimensions, timezone offsets, and clickstream movements. This data is used for security (DDoS mitigation) and UX optimization.</p>
            </div>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.75rem', fontWeight: 800 }}>4. Sensitive Data and "Do Not Sell"</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              <strong>Special Categories of Data:</strong> Expensico does not actively solicit or collect "Sensitive Personal Information" as defined by GDPR Article 9 (e.g., race, religion, health data). If you choose to include such data in your transaction "notes", you are explicitly consenting to its storage under the same security protocols as standard data.
            </p>
            <p style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
              <strong>WE DO NOT SELL YOUR DATA.</strong> Expensico has never sold, and will never sell, your personal or financial data to data brokers, marketers, or any third party. Your data remains your proprietary asset.
            </p>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.75rem', fontWeight: 800 }}>5. Cookies, Web Beacons, and DART Technology</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Our "Cookie Ecosystem" is designed to enhance functionality while respecting privacy. We utilize:
            </p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.75rem' }}><strong>Essential Cookies:</strong> Required for secure login sessions and CSRF protection.</li>
              <li style={{ marginBottom: '0.75rem' }}><strong>Preference Cookies:</strong> Store UI states such as Dark/Light mode and chart filters.</li>
              <li style={{ marginBottom: '0.75rem' }}><strong>Analytics Web Beacons:</strong> Small pixels used to track aggregate interaction rates without identifying individual users.</li>
            </ul>
            <p style={{ marginBottom: '1.5rem' }}>
              <strong>Google DART Cookie:</strong> As an AdSense partner, Google use of the DART cookie enables it to serve ads to our users based on their visit to our site and other sites on the Internet. Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy.
            </p>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.75rem', fontWeight: 800 }}>6. Automated Decision Making and Profiling</h2>
            <p>
              Expensico uses basic automated algorithms to categorize your spending and generate visual reports. However, we do not engage in "Profiling" as defined by the GDPR that produces legal effects or significantly affects you. All financial "decisions" on the platform are initiated and controlled solely by you.
            </p>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.75rem', fontWeight: 800 }}>7. Global Data Transfers</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Expensico infrastructure is globally distributed. Data may be transferred to, and maintained on, computers located outside of your state, province, or country. We ensure all such transfers comply with standard contractual clauses (SCCs) and that your data receives an equivalent level of protection as it would in your home jurisdiction.
            </p>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.75rem', fontWeight: 800 }}>8. Data Retention Schedule</h2>
            <p style={{ marginBottom: '1.5rem' }}>Our retention timelines are strictly governed by necessity:</p>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1.5rem', border: '1px solid #e2e8f0' }}>
              <thead style={{ background: '#f1f5f9' }}>
                <tr>
                  <th style={{ padding: '1rem', textAlign: 'left', border: '1px solid #e2e8f0' }}>Data Type</th>
                  <th style={{ padding: '1rem', textAlign: 'left', border: '1px solid #e2e8f0' }}>Retention Period</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '1rem', border: '1px solid #e2e8f0' }}>Active Account Data</td>
                  <td style={{ padding: '1rem', border: '1px solid #e2e8f0' }}>Duration of Account Life</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', border: '1px solid #e2e8f0' }}>System Audit Logs</td>
                  <td style={{ padding: '1rem', border: '1px solid #e2e8f0' }}>12 Months</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', border: '1px solid #e2e8f0' }}>Deleted Transactions</td>
                  <td style={{ padding: '1rem', border: '1px solid #e2e8f0' }}>30-Day "Grace" before erasure</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', border: '1px solid #e2e8f0' }}>Support Correspondence</td>
                  <td style={{ padding: '1rem', border: '1px solid #e2e8f0' }}>3 Years from last interaction</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.75rem', fontWeight: 800 }}>9. Children's Online Privacy Protection</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              In compliance with <strong>COPPA</strong>, we do not knowingly collect personal data from children under age 13. If you are a parent or guardian and believe your child has provided us with personal data, please contact us immediately. We will take steps to remove such data from our primary and backup servers within 48 hours.
            </p>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.75rem', fontWeight: 800 }}>10. Your Rights and How to Exercise Them</h2>
            <p style={{ marginBottom: '1.5rem' }}>Depending on your location, you have strong legal rights over your data:</p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '1rem' }}><strong>Right of Access:</strong> Request a full copy of all data we hold about you (Data Portability).</li>
              <li style={{ marginBottom: '1rem' }}><strong>Right to Rectification:</strong> Correction of any inaccurate or incomplete financial data.</li>
              <li style={{ marginBottom: '1rem' }}><strong>Right to Erasure:</strong> "The Right to be Forgotten"—permanent deletion of your account and all associated ledger entries.</li>
              <li style={{ marginBottom: '1rem' }}><strong>Right to Restrict Processing:</strong> Suspend our use of your data while keeping it stored.</li>
              <li style={{ marginBottom: '1rem' }}><strong>Right to Object:</strong> Object to processing based on our legitimate interests.</li>
            </ul>
            <p>To exercise any of these rights, please contact our support team. We generally respond to all legitimate requests within 30 days.</p>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.75rem', fontWeight: 800 }}>11. CAN-SPAM and Communication Policy</h2>
            <p style={{ marginBottom: '1.5rem' }}>Our email practices are strictly CAN-SPAM compliant:</p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li>We will not use false or misleading subject lines.</li>
              <li>We will include the physical location of our headquarters in every broad-reach email.</li>
              <li>We will provide an "Unsubscribe" link in all non-transactional emails.</li>
              <li>We honor opt-out requests within 10 business days.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.75rem', fontWeight: 800 }}>12. Interactive Support & Contact</h2>
            <p style={{ marginBottom: '2rem' }}>
              For privacy inquiries, compliance requests, or to report a data concern, our specialized team is available via the following channels:
            </p>
            <div style={{ padding: '2.5rem', border: '2px solid var(--primary-color)', borderRadius: '24px', background: 'rgba(59, 130, 246, 0.02)', textAlign: 'center' }}>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.25rem' }}>Privacy Compliance Office</h4>
              <p style={{ marginBottom: '0.5rem', fontWeight: 600 }}>Official Digital HQ: Expensico Finance Intelligence</p>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.15rem' }}><strong>Direct Correspondence:</strong> malikantuparthi@gmail.com</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                 <Link to="/contact" className="btn btn-primary" style={{ padding: '0.75rem 2rem', borderRadius: '12px' }}>Contact Support</Link>
              </div>
            </div>
          </section>
          
          <div style={{ marginTop: '5rem', textAlign: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '2.5rem', color: '#94a3b8', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} Expensico Finance. All rights reserved. This document is a legally binding disclosure of data practices.
          </div>
        </div>
      </div>
    </div>
  );
}
