import { Link } from 'react-router-dom';

export default function TermsAndConditions() {
  return (
    <div className="container" style={{ padding: '4rem 1rem', maxWidth: '1000px' }}>
      <div className="card" style={{ padding: 'clamp(2rem, 5vw, 5rem) clamp(1.5rem, 4vw, 4rem)', background: 'white', borderRadius: '32px', boxShadow: '0 20px 50px rgba(0,0,0,0.05)' }}>
        <h1 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.05em' }}>Terms and Conditions</h1>
        <p style={{ marginBottom: '3rem', fontSize: '1.2rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Comprehensive Agreement for the Use of Expensico Services</p>
        
        <div style={{ color: 'var(--text-secondary)', lineHeight: '1.9', fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '3rem', fontStyle: 'italic', borderLeft: '5px solid var(--primary-color)', paddingLeft: '2rem', background: 'rgba(59, 130, 246, 0.04)', padding: '1.5rem', borderRadius: '0 16px 16px 0' }}>
            <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.75rem', fontWeight: 800 }}>1. The Contractual Relationship</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              These Terms and Conditions ("Terms") constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Expensico ("Company", "we", "us", or "our"), concerning your access to and use of the Expensico website and any associated services.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              <strong>BY ACCESSING THE SITE, YOU AGREE THAT YOU HAVE READ, UNDERSTOOD, AND AGREED TO BE BOUND BY ALL OF THESE TERMS.</strong> IF YOU DO NOT AGREE WITH ALL OF THESE TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
            </p>
            <p>
              Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms at any time.
            </p>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.75rem', fontWeight: 800 }}>2. Intellectual Property and Proprietary Rights</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              The Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              The Content and the Marks are provided on the Site "AS IS" for your information and personal use only. Except as expressly provided, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
            </p>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.75rem', fontWeight: 800 }}>3. User Representations and Account Security</h2>
            <p style={{ marginBottom: '1.5rem' }}>By using the Site, you represent and warrant that:</p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '1rem' }}>All registration information you submit will be true, accurate, current, and complete.</li>
              <li style={{ marginBottom: '1rem' }}>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
              <li style={{ marginBottom: '1rem' }}>You have the legal capacity and you agree to comply with these Terms.</li>
              <li style={{ marginBottom: '1rem' }}>You are not a minor in the jurisdiction in which you reside.</li>
              <li style={{ marginBottom: '1rem' }}>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.75rem', fontWeight: 800 }}>4. User Content and License</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              The Site may allow you to chat, contribute to, or participate in blogs, and other functionality, and may invite you to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions").
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              When you create or make available any Contributions, you thereby represent and warrant that the creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights of any third party.
            </p>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.75rem', fontWeight: 800 }}>5. Third-Party Websites and Advertising</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              The Site may contain links to other websites ("Third-Party Websites") as well as articles, photographs, images, text, graphics, designs, music, sound, video, information, applications, software, and other content belonging to third parties ("Third-Party Content"). 
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              <strong>Google AdSense Notice:</strong> We use third-party advertising companies to serve ads when you visit our website. These companies may use information about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.
            </p>
            <p>
              We are not responsible for any Third-Party Websites accessed through the Site or any Third-Party Content posted on, available through, or installed from the Site. Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party Content does not imply approval or endorsement thereof by us.
            </p>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.75rem', fontWeight: 800 }}>6. Disclaimer of Financial Warranties</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              <strong>THE SITE IS PROVIDED FOR INFORMATIONAL PURPOSES ONLY.</strong> Expensico is not a financial institution, bank, or tax advisor. The metrics, calculations, and visual reports generated by the Site are based on user-provided data and are intended for general tracking and educational purposes.
            </p>
            <p>
              Expensico makes no representations or warranties regarding the mathematical accuracy of the summaries or the suitability of the software for legal or professional financial reporting. Use of the service is at your sole risk.
            </p>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.75rem', fontWeight: 800 }}>7. Limitation of Liability</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p>
              NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US.
            </p>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.75rem', fontWeight: 800 }}>8. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) your Contributions; (2) use of the Site; (3) breach of these Terms; or (4) any overt harmful act toward any other user of the Site.
            </p>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.75rem', fontWeight: 800 }}>9. Dispute Resolution and Governing Law</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              These Terms and your use of the Site are governed by and construed in accordance with the laws of the jurisdiction in which the Company headquarters is located.
            </p>
            <p>
              Any legal action or proceeding related to your access to or use of the Site shall be instituted in a court of competent jurisdiction. You and the Company agree to submit to the jurisdiction of, and agree that venue is proper in, such courts in any such legal action or proceeding.
            </p>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.75rem', fontWeight: 800 }}>10. Severability</h2>
            <p>
              If any provision or part of a provision of these Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms and does not affect the validity and enforceability of any remaining provisions.
            </p>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1.5rem 0', fontSize: '1.75rem', fontWeight: 800 }}>11. Contact and Notice</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
            </p>
            <div style={{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '16px', background: 'rgba(0,0,0,0.02)' }}>
              <p><strong>Entity:</strong> Expensico Finance Hub</p>
              <p><strong>Email:</strong> malikantuparthi@gmail.com</p>
              <p><strong>Inquiry focus:</strong> Terms Compliance & Legal Affairs</p>
            </div>
          </section>

          <div style={{ marginTop: '5rem', textAlign: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '2.5rem', color: '#94a3b8', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} Expensico. All rights reserved. Access to this platform is governed by the terms explicitly stated above.
          </div>
        </div>
      </div>
    </div>
  );
}
