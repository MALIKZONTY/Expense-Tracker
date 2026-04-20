export default function Disclaimer() {
  return (
    <div className="container" style={{ padding: '4rem 1rem', maxWidth: '900px' }}>
      <div className="card" style={{ padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem)' }}>
        <h1 style={{ marginBottom: '2.5rem', fontSize: 'clamp(2rem, 8vw, 3rem)', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>Disclaimer</h1>
        
        <div style={{ color: 'var(--text-secondary)', lineHeight: '1.9', fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '2rem', fontStyle: 'italic', color: 'var(--text-primary)' }}>Last Updated: {new Date().toLocaleDateString()}</p>
          
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.5rem', fontWeight: 800 }}>1. Informational and Educational Purpose Only</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              The Expensico application, including all content, tools, charts, and reports generated through the platform, is provided for general informational and educational purposes only. The information does NOT constitute professional financial, legal, investment, or tax advice. We are not a licensed financial advisory firm, and our platform is not a substitute for professional counsel.
            </p>
            <p>
              By using our service, you acknowledge that any reliance on the information provided is at your own risk. You should always consult with a qualified professional before making any significant financial decisions or entering into any investment agreements.
            </p>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.5rem', fontWeight: 800 }}>2. No Warranties or Guarantees</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Expensico provides its services on an "as is" and "as available" basis, without any warranties of any kind, either express or implied. We do not guarantee the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website for any purpose.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              We specifically disclaim all warranties, including but not limited to:
            </p>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.75rem' }}>Warranties of merchantability and fitness for a particular purpose.</li>
              <li style={{ marginBottom: '0.75rem' }}>Warranties that the service will be uninterrupted, secure, or free from viruses or other harmful components.</li>
              <li style={{ marginBottom: '0.75rem' }}>Warranties that any errors in the service will be corrected.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.5rem', fontWeight: 800 }}>3. Accuracy and Reliability of Data</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              While we strive to provide precise calculations and real-time insights, the data displayed in Expensico is dependent on the accuracy of the user's manual input. We perform no independent verification of the transaction data, payment methods, or currency values you provide. Inaccuracies in user data entry will inevitably lead to inaccurate reports and summaries.
            </p>
            <p>
              Furthermore, financial charts and projections are mathematical models based on historical data. They are not a guarantee of future results or performance. We are not responsible for any financial losses or damages incurred as a result of using the platform's analytical tools.
            </p>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.5rem', fontWeight: 800 }}>4. Third-Party Content and External Links</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Our platform may contain links to third-party websites or services that are not owned or controlled by Expensico. We have no control over the content, privacy policies, or practices of any third-party sites or services and assume no responsibility for them. The inclusion of any link does not imply endorsement by Expensico of the site.
            </p>
            <p>
              You acknowledge and agree that Expensico shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such web sites or services.
            </p>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.5rem', fontWeight: 800 }}>5. Limitation of Liability</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Under no circumstances shall Expensico, its directors, employees, or developers be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of your access to, use of, or inability to use the service. This includes, without limitation, damages for loss of profits, data, goodwill, or other intangible losses.
            </p>
            <p>
              This limitation applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis, even if we have been advised of the possibility of such damage.
            </p>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.5rem', fontWeight: 800 }}>6. Assumption of Risk</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              By using Expensico, you voluntarily assume all risks associated with the use of digital financial management tools, including the risk of data loss, technical interruption, or mathematical error in user-generated reports. You are encouraged to maintain independent backups of your critical financial records.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.5rem', fontWeight: 800 }}>7. Changes to this Disclaimer</h2>
            <p>
              We reserve the right to amend this disclaimer at any time without notice. Your continued use of the website and services signifies your agreement to the updated disclaimer. Please check this page regularly for any updates.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
