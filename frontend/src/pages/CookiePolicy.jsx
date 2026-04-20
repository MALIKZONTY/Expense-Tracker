import React from 'react';
import { ShieldCheck, Info, Fingerprint, Eye, ShieldAlert } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="auth-container" style={{ padding: '4rem 2rem', background: '#f8fafc', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Institutional Header */}
        <div style={{ background: 'white', padding: '4rem', borderRadius: '32px 32px 0 0', border: '1px solid #e2e8f0', borderBottom: 'none', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', background: 'var(--primary-color)', color: 'white', padding: '0.75rem', borderRadius: '15px', marginBottom: '1.5rem' }}>
            <ShieldCheck size={32} />
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.04em', marginBottom: '1rem' }}>
            Cookie Policy
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Version 4.2 | High-Authority Compliance Standards
          </p>
        </div>

        {/* Content Body */}
        <div style={{ background: 'white', padding: '4rem', borderRadius: '0 0 32px 32px', border: '1px solid #e2e8f0', boxShadow: '0 10px 40px rgba(0,0,0,0.03)' }}>
          <div style={{ color: 'var(--text-primary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
            
            <section style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Info size={24} style={{ color: 'var(--primary-color)' }} />
                1. Introduction to Digital Tracking at Expensico
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Expensico Finance ("we," "our," or "us") utilizes cookies, web beacons, pixels, and similar tracking technologies to ensure our platform remains secure, high-performing, and free for all users. In the modern digital landscape, transparency regarding data collection is not just a legal requirement but a fundamental part of the trust relationship we share with our global user base.
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>
                This Cookie Policy provides an exhaustive technical and operational breakdown of how we leverage these technologies, how they impact your browsing experience, and the granular controls you have over your digital footprint. We are committed to maintaining a high-authority environment where your financial data is protected by the same technological rigor used by major financial institutions.
              </p>
            </section>

            <section style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Fingerprint size={24} style={{ color: 'var(--primary-color)' }} />
                2. Comprehensive Definition of Cookies
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Cookies are small text-based data packets stored directly on your computer or mobile device by your web browser at the request of a website you visit. They act as a "short-term memory" for the web, allowing our platform to recognize your device and remember specific information about your session.
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>
                Cookies can be "First-Party" (set by Expensico) or "Third-Party" (set by partners like Google). They can also be "Session-Based" (deleted when you close your browser) or "Persistent" (remaining on your device for a specific duration to facilitate long-term preferences). At Expensico, we prioritize the use of first-party cookies for essential security and session management.
              </p>
            </section>

            <section style={{ marginBottom: '3.5rem', background: '#f8fafc', padding: '2.5rem', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>3. Categorization of Tracking Technologies</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>A. Strictly Necessary & Security Cookies</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
                    These cookies are essential for the core functionality of Expensico. They facilitate the secure login process, manage JSON Web Token (JWT) sessions, and protect our infrastructure from Cross-Site Request Forgery (CSRF) attacks. Without these technologies, you would be unable to access your private financial dashboard.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>B. Performance and Optimization Cookies</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
                    To provide a seamless visual experience, we use performance cookies to monitor how our platform handles high volumes of data. This includes telemetry regarding chart render times and database query speeds. By analyzing this anonymized metadata, we can identify and resolve global bottlenecks in real-time.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>C. Advertising and Monetization (Google AdSense)</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
                    As an ad-supported platform committed to a "Free-for-Life" model, we participate in the Google AdSense network. Google uses cookies (including the DoubleClick DART cookie) to serve relevant advertisements based on your browsing history. This allows us to monetize without charging subscription fees.
                  </p>
                </div>
              </div>
            </section>

            <section style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Eye size={24} style={{ color: 'var(--primary-color)' }} />
                4. Web Beacons, Pixels, and Local Storage
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                In addition to standard cookies, Expensico may utilize "Web Beacons" (also known as clear gifs or pixel tags). These are near-invisible graphics with a unique identifier that function similarly to cookies. Unlike cookies, which are stored on a user's hard drive, web beacons are embedded invisibly on web pages.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                We use pixels primarily to track the effectiveness of our financial literacy email campaigns and to optimize our site's landing pages for search engine crawlers. We also leverage browser "Local Storage" (HTML5) to cache non-sensitive UI elements locally, significantly improving page load times for returning users.
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>
                This layered approach ensures that even as third-party cookies are phased out by major browsers, Expensico remains a high-performance environment for financial tracking.
              </p>
            </section>

            <section style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <ShieldAlert size={24} style={{ color: 'var(--primary-color)' }} />
                5. Global Privacy Compliance & Opt-Out Mechanisms
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Expensico respects your right to privacy and provides multiple avenues for managing your tracking preferences. You can control cookie behavior through your browser settings (Chrome, Safari, Firefox, Edge).
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                For more granular control over advertising cookies, we recommend the following industry-standard tools:
              </p>
              <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.75rem' }}><strong>Network Advertising Initiative (NAI)</strong>: Residents in the US can use the NAI consumer opt-out page to manage their preferences.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Digital Advertising Alliance (DAA)</strong>: The DAA provides 'YourAdChoices,' a suite of tools for managing personalized advertising.</li>
                <li><strong>European Interactive Digital Advertising Alliance (EDAA)</strong>: Users within the EEA can utilize 'Your Online Choices' to exercise their rights under the GDPR.</li>
              </ul>
            </section>

            <section style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem' }}>6. The Impact of the "Cookie-less Future"</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                The digital industry is currently transitioning away from third-party cookies toward more privacy-centric tracking paradigms. Expensico is at the forefront of this shift. We are actively investigating and implementing "First-Party Data" strategies and Privacy Sandbox technologies.
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>
                By focusing on first-party relationships and secure session management, we ensure that we can continue to provide personalized financial intelligence and support our platform without compromising the high security standards our users expect.
              </p>
            </section>

            <section style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem' }}>7. Data Retention and Lifecycle Management</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Cookies set by Expensico have varying lifespans. Authentication cookies are generally set to expire within 24-48 hours for your protection. Preference cookies may persist for up to 365 days to ensure a consistent user experience. 
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>
                You can manually purge all cookies associated with the expense-tracker-theta-weld.vercel.app domain at any time through your browser's "Clear Browsing Data" menu. This ensures that you maintain absolute sovereignty over your digital track records.
              </p>
            </section>

            <div style={{ marginTop: '4rem', padding: '3rem', background: '#3b82f6', borderRadius: '24px', color: 'white', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>Questions regarding our data collection?</h3>
              <p style={{ opacity: 0.9, marginBottom: '2rem' }}>Our data protection specialists are available to provide technical clarity.</p>
              <a href="mailto:malikantuparthi@gmail.com" style={{ background: 'white', color: '#3b82f6', padding: '1rem 2rem', borderRadius: '12px', textDecoration: 'none', fontWeight: 800 }}>
                Email Data Officer
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
