export default function TermsAndConditions() {
  return (
    <div className="container" style={{ padding: '4rem 1rem', maxWidth: '900px' }}>
      <div className="card" style={{ padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem)' }}>
        <h1 style={{ marginBottom: '2.5rem', fontSize: 'clamp(2rem, 8vw, 3rem)', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>Terms and Conditions</h1>
        
        <div style={{ color: 'var(--text-secondary)', lineHeight: '1.9', fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '2rem', fontStyle: 'italic', color: 'var(--text-primary)' }}>Effective Date: {new Date().toLocaleDateString()}</p>
          
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.5rem', fontWeight: 800 }}>1. Acceptance of the Terms</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Welcome to Expensico. These Terms & Conditions constitute a legally binding agreement between you and Expensico regarding your use of our application, website, and related financial tracking services. By accessing, browsing, or using any part of the service, you acknowledge that you have read, understood, and agree to be bound by these terms.
            </p>
            <p>
              If you are using the service on behalf of an entity, you represent and warrant that you have the authority to bind that entity to these terms. If you do not agree with any part of these Terms & Conditions, you must immediately cease all use of the Expensico platform.
            </p>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.5rem', fontWeight: 800 }}>2. Eligibility and Account Registration</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              To access the full features of Expensico, you must create a secure account. You agree to provide accurate, current, and complete information during the registration process. You are solely responsible for maintaining the confidentiality of your account credentials, including your email and password, and for all activities that occur under your account.
            </p>
            <p>
              By registering for an account, you represent that you are at least 18 years of age or the legal age of majority in your jurisdiction. Expensico reserves the right to suspend or terminate accounts that provide false information or otherwise violate the spirit of these terms.
            </p>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.5rem', fontWeight: 800 }}>3. Acceptable Use Policy (AUP)</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              You agree to use Expensico only for lawful purposes and in a manner that does not infringe the rights of, or restrict the use and enjoyment of this platform by, any third party. Prohibited activities include, but are not limited to:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '0.75rem' }}>Using the service to store or transmit fraudulent, illegal, or deceptive financial data.</li>
              <li style={{ marginBottom: '0.75rem' }}>Attempting to circumvent any security measure or unauthorized access to our production databases.</li>
              <li style={{ marginBottom: '0.75rem' }}>Using automated systems (bots, scrapers) to extract data from the platform without explicit written consent.</li>
              <li style={{ marginBottom: '0.75rem' }}>Harassing, threatening, or otherwise violating the legal rights of Expensico employees or other users.</li>
              <li style={{ marginBottom: '0.75rem' }}>Reverse engineering, decompiling, or attempting to derive the source code of the underlying Expensico engine.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.5rem', fontWeight: 800 }}>4. Financial Accuracy and User Data</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Expensico provides a framework for financial tracking, but the accuracy of all reports, charts, and balances is directly dependent on the data you provide. We do not provide automated bank synchronization; therefore, all information is user-generated and should be treated accordingly.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              While we use advanced mathematical algorithms to process your data, we do not warrant that the service will be 100% error-free. You should never rely solely on Expensico for critical financial decisions, legal reporting, or tax filings unless you have cross-verified the data with official source documents (e.g., bank statements, receipts).
            </p>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.5rem', fontWeight: 800 }}>5. Intellectual Property Rights</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              All software, design (UI/UX), graphics, logos, and content created by Expensico are the exclusive property of Expensico or its licensors. These materials are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              We grant you a non-exclusive, non-transferable, revocable license to access and use the platform strictly for your personal financial management in accordance with these Terms. You may not reproduce, redistribute, or create derivative works of any part of the service without our express permission.
            </p>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.5rem', fontWeight: 800 }}>6. Limitations of Liability</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              TO THE FULLEST EXTENT PERMITTED BY LAW, EXPENSICO AND ITS EMPLOYEES, AFFILIATES, AND LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE, REGARDLESS OF WHETHER WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p>
              In no event shall our total liability for all claims arising out of or relating to the service exceed the total amount of fees paid by you to Expensico in the twelve months preceding the event giving rise to the claim (or $50 if the service was provided free of charge).
            </p>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.5rem', fontWeight: 800 }}>7. Termination and Suspension</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We reserve the right, without notice and at our sole discretion, to terminate or suspend your access to Expensico for any reason, including but not limited to breach of these Terms & Conditions. You may also terminate your account at any time by following the account closure process within your profile settings.
            </p>
            <p>
              Upon termination, your right to use the service will immediately cease. All provisions of these Terms which by their nature should survive termination (including ownership, disclaimers, and limitations of liability) shall continue to remain in effect.
            </p>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.5rem', fontWeight: 800 }}>8. Modifications to the Terms</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Expensico evolves over time, and so do our Terms & Conditions. We reserve the right to modify these terms at any time. When we make changes, we will update the "Effective Date" at the top of this page. We encourage you to review these terms periodically to stay informed.
            </p>
            <p>
              Your continued use of the platform after such modifications signifies your acceptance of the newly revised Terms & Conditions.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.5rem', fontWeight: 800 }}>9. Governing Law</h2>
            <p>
              These Terms & Conditions shall be governed by and construed in accordance with the laws of your jurisdiction, without regard to its conflict of law principles. Any legal action or proceeding related to your access to or use of the platform shall be instituted only in a court of competent jurisdiction.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
