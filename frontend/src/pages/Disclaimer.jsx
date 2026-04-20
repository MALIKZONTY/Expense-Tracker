import { Link } from 'react-router-dom';

export default function Disclaimer() {
  return (
    <div className="container" style={{ padding: '4rem 1rem', maxWidth: '1000px' }}>
      <div className="card" style={{ padding: 'clamp(2rem, 5vw, 5rem) clamp(1.5rem, 4vw, 4rem)', background: 'white', borderRadius: '32px', boxShadow: '0 20px 50px rgba(0,0,0,0.05)' }}>
        <h1 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.05em' }}>Disclaimer</h1>
        <p style={{ marginBottom: '3rem', fontSize: '1.2rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Legal Disclosures and Limitation of Liability for Expensico</p>
        
        <div style={{ color: 'var(--text-secondary)', lineHeight: '1.9', fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '3rem', fontStyle: 'italic', borderLeft: '5px solid var(--primary-color)', paddingLeft: '2rem', background: 'rgba(59, 130, 246, 0.04)', padding: '1.5rem', borderRadius: '0 16px 16px 0' }}>
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.75rem', fontWeight: 800 }}>1. Website Disclaimer</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              The information provided by Expensico ("we," "us", or "our") on this website is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
            </p>
            <p>
              UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
            </p>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.75rem', fontWeight: 800 }}>2. External Links Disclaimer</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
            </p>
            <p>
              WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
            </p>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.75rem', fontWeight: 800 }}>3. Professional Disclaimer (Finance & Tax)</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              The Site cannot and does not contain personal financial advice. The financial information is provided for general informational and educational purposes only and is not a substitute for professional advice.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of financial advice. THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THIS SITE IS SOLELY AT YOUR OWN RISK.
            </p>
            <p>
              Expensico is a mathematics-driven ledger tool. The reports generated are intended to reflect the data you provide and should not be used as the sole basis for tax reporting, investment decisions, or legal filings.
            </p>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.75rem', fontWeight: 800 }}>4. Affiliate Disclosure</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              This Site may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links. 
            </p>
            <p style={{ padding: '1.25rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '0.95rem' }}>
               <strong>Google AdSense Inclusion:</strong> This website uses Google AdSense, a program that uses cookies to serve advertisements based on your prior visits to this and other websites. We earn a commission through this advertising program.
            </p>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.75rem', fontWeight: 800 }}>5. Errors and Omissions Disclaimer</h2>
            <p>
              While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, Expensico is not responsible for any errors or omissions, or for the results obtained from the use of this information. All information in this site is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information.
            </p>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.75rem', fontWeight: 800 }}>6. Fair Use Disclaimer</h2>
            <p>
              This site may use copyrighted material which has not always been specifically authorized by the copyright owner. We are making such material available in our efforts to advance understanding of personal finance and digital commerce. We believe this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the US Copyright Law.
            </p>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.75rem', fontWeight: 800 }}>7. Views Expressed Disclaimer</h2>
            <p>
              The Site may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer or company, including Expensico.
            </p>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.75rem', fontWeight: 800 }}>8. Logistical Contact</h2>
            <p style={{ marginBottom: '2rem' }}>
              Should you have any feedback, comments, requests for technical support or other inquiries, please contact us by email:
            </p>
            <div style={{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '16px', background: 'rgba(0,0,0,0.02)' }}>
              <p><strong>Support Channel:</strong> Expensico Compliance</p>
              <p><strong>Email:</strong> malikantuparthi@gmail.com</p>
              <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-block', textDecoration: 'none', marginTop: '1rem' }}>Go to Contact Page</Link>
            </div>
          </section>

          <div style={{ marginTop: '5rem', textAlign: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '2.5rem', color: '#94a3b8', fontSize: '0.9rem' }}>
             © {new Date().getFullYear()} Expensico Finance Hub. All rights reserved. Professional transparency through digital ledgers.
          </div>
        </div>
      </div>
    </div>
  );
}
