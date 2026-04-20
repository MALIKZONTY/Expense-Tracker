import os

def generate_legal_page(filename, title, content_html, badge="Legal Documentation"):
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} | Expensico Finance</title>
    <meta name="description" content="Official {title} for Expensico Finance. Professional financial intelligence and data protection standards.">
    <link rel="canonical" href="https://expense-tracker-theta-weld.vercel.app/{filename.replace('.html', '')}" />
    <style>
        :root {{ --primary-color: #3b82f6; --text-primary: #1e293b; --text-secondary: #64748b; --border-color: #e2e8f0; }}
        body {{ font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.8; color: var(--text-primary); margin: 0; background-color: #f8fafc; }}
        
        .nav-mock {{ background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(20px); border-bottom: 1px solid var(--border-color); padding: 0.75rem 2rem; display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 1000; }}
        .nav-brand-group {{ display: flex; align-items: center; gap: 0.75rem; text-decoration: none; }}
        .nav-brand-icon {{ background: var(--primary-color); color: white; padding: 0.4rem; border-radius: 10px; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-weight: bold; }}
        .nav-brand-text {{ display: flex; flex-direction: column; line-height: 1.1; }}
        .nav-brand {{ font-size: 1.5rem; font-style: italic; font-weight: 900; color: var(--primary-color); letter-spacing: -0.04em; }}
        .nav-sub-brand {{ font-size: 0.7rem; font-weight: 600; color: var(--text-secondary); opacity: 0.8; letter-spacing: 0.05em; text-transform: uppercase; }}
        .nav-links {{ display: flex; gap: 1rem; align-items: center; }}
        .nav-links a {{ text-decoration: none; color: var(--text-secondary); font-weight: 600; font-size: 0.9rem; transition: color 0.2s; }}
        .nav-links a:hover {{ color: var(--primary-color); }}
        .nav-auth {{ display: flex; gap: 1rem; align-items: center; margin-left: 1rem; }}
        .btn-primary {{ background: var(--primary-color); color: white !important; padding: 0.6rem 1.2rem; border-radius: 10px; font-weight: 700; font-size: 0.85rem; }}

        .container {{ max-width: 1000px; margin: 4rem auto; padding: 0 1.5rem; }}
        .card {{ background: white; padding: 4rem; border-radius: 32px; box-shadow: 0 10px 40px rgba(0,0,0,0.03); border: 1px solid var(--border-color); }}
        h1 {{ font-size: 3.5rem; font-weight: 900; letter-spacing: -0.04em; margin-bottom: 1.5rem; color: var(--text-primary); }}
        h2 {{ font-size: 1.75rem; font-weight: 800; margin-top: 3rem; margin-bottom: 1.25rem; color: var(--text-primary); border-left: 4px solid var(--primary-color); padding-left: 1.5rem; }}
        h3 {{ font-size: 1.25rem; font-weight: 700; margin-top: 2rem; color: var(--text-primary); }}
        p {{ margin-bottom: 1.5rem; color: var(--text-secondary); font-size: 1.1rem; }}
        ul {{ margin-bottom: 2rem; color: var(--text-secondary); }}
        li {{ margin-bottom: 0.75rem; }}
        .badge {{ background: rgba(59, 130, 246, 0.1); color: var(--primary-color); padding: 0.5rem 1rem; border-radius: 20px; font-weight: 700; font-size: 0.85rem; display: inline-block; margin-bottom: 1.5rem; }}
        
        footer {{ margin-top: 5rem; text-align: center; color: var(--text-secondary); font-size: 0.9rem; padding: 3rem 0; background: white; border-top: 1px solid var(--border-color); }}
        .footer-links {{ display: flex; justify-content: center; gap: 1.5rem; margin-top: 1.5rem; flex-wrap: wrap; }}
        .footer-links a {{ text-decoration: none; color: var(--text-secondary); font-weight: 500; }}
    </style>
</head>
<body>
    <nav class="nav-mock">
        <a href="/" class="nav-brand-group">
            <div class="nav-brand-icon">S</div>
            <div class="nav-brand-text">
                <div class="nav-brand">Expensico</div>
                <div class="nav-sub-brand">Finance Intelligence</div>
            </div>
        </a>
        <div class="nav-links">
            <a href="/">Home</a>
            <a href="/about.html">About</a>
            <a href="/blog">Blog</a>
            <a href="/faq.html">FAQ</a>
            <div class="nav-auth">
                <a href="/login">Login</a>
                <a href="/register" class="btn-primary">Sign Up</a>
            </div>
        </div>
    </nav>

    <div class="container">
        <div class="card">
            <span class="badge">{badge}</span>
            {content_html}
        </div>
    </div>

    <footer>
        <div>© 2026 Expensico Finance. All rights reserved.</div>
        <div class="footer-links">
            <a href="/privacy-policy.html">Privacy Policy</a>
            <a href="/terms-and-conditions.html">Terms</a>
            <a href="/disclaimer.html">Disclaimer</a>
            <a href="/cookie-policy.html">Cookie Policy</a>
            <a href="/faq.html">FAQ</a>
        </div>
    </footer>
</body>
</html>"""
    if not os.path.exists('public'):
        os.makedirs('public')
    with open(f"public/{filename}", "w") as f:
        f.write(html)

# --- MASSIVE CONTENT EXPANSION ---

privacy_content = """
<h1>Privacy Policy</h1>
<p><strong>Version 3.1 | Last Modified: April 20, 2026</strong></p>
<p>Expensico Finance ("we," "our," or "us") is dedicated to the robust protection of user privacy and the transparent management of personal data. In an age of digital transformation, we recognize that financial data is among the most sensitive information an individual can share. This Privacy Policy is designed to provide you with a comprehensive understanding of how we collect, store, process, and protect your data across our platform. Our commitment to privacy is not merely a legal requirement; it is a core pillar of our financial intelligence philosophy. We believe that you cannot have financial clarity without data security. This policy has been drafted to meet and exceed global regulatory standards, including the General Data Protection Regulation (GDPR) in the European Union, the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA), and the UK Data Protection Act 2018.</p>

<h2>1. Comprehensive Information Collection</h2>
<h3>A. Personal Identification Information</h3>
<p>When you register for an account, we collect your email address and, optionally, your name. This information serves as your unique identifier within our ecosystem and is used for authentication, account recovery, and critical security notifications. We may also collect data related to your social media profiles if you choose to link them for easy authentication purposes. This data is strictly used to verify your identity and prevent unauthorized account takeovers. We implement a non-identifying salt and hashing mechanism for all sensitive credentials to ensure that even in the event of a breach, your primary access data remains unreadable by malicious actors. Our collection protocols are designed with 'Data Minimization' in mind, meaning we only ask for information that is absolutely necessary to provide our financial tracking services.</p>

<h3>B. Financial Transactional Data</h3>
<p>The core of our service involves the processing of financial records that you manually input or synchronize with the platform. This includes:
<ul>
    <li>Detailed expense amounts, categories (e.g., Groceries, Rent, Entertainment, Healthcare, Education, Insurance), and merchant descriptions.</li>
    <li>Income records, salary structures, freelance earnings, and investment dividends.</li>
    <li>System-generated timestamps associated with every logistical financial activity to provide accurate historical visual intelligence.</li>
    <li>Wallet or account labels designed by the user to represent specific physical or digital assets (e.g., "Main Savings Account", "Physical Cash Vault", "Retirement Portfolio").</li>
    <li>Budget parameters and financial goal descriptions that you establish to track your progress toward wealth milestones.</li>
</ul>
This data is stored securely and is never shared with third-party advertisers in an identifiable format. We use this data solely to provide you with the visual intelligence required to manage your money effectively. We do not sell, rent, or trade your individual transaction logs to anyone.</p>

<h3>C. Technical and Device Metadata</h3>
<p>Our servers automatically log certain technical information to ensure platform stability and security. This includes your IP address, browser type and version, time zone settings, general location data derived from network logs, and system performance metrics. This metadata is critical for our security audit trails, allowing us to detect and respond to potential threats in real-time. We also collect data on how you interact with our features—such as which charts you view most often—to help us prioritize updates that matter most to our user base. We utilize advanced telemetry to monitor for system bottlenecks, ensuring that your dashboard loads at peak performance regardless of the volume of data stored.</p>

<h2>2. Advanced Data Processing & Usage</h2>
<p>Expensico uses the collected data exclusively for high-value operational purposes designed to enhance your financial journey. We do not engage in the sale of personal information to brokers or third-party marketing firms. Our processing activities include:</p>
<ul>
    <li><strong>Service Fulfillment</strong>: Calculating complex net balances using proprietary algorithms to provide real-time accuracy across all your tracked wallets. This includes currency conversion logic and historical trend analysis.</li>
    <li><strong>Intelligent Categorization</strong>: Using anonymized historical data and machine learning patterns to suggest categories for your new expenses, speeding up your tracking workflow and reducing manual entry friction.</li>
    <li><strong>Security Orchestration</strong>: Monitoring for unusual login patterns or access from high-risk IP ranges to protect your financial history. We implement multi-layered defensive protocols to ensure that your financial vault remains inaccessible to unauthorized users.</li>
    <li><strong>Advertising Ecosystem Support</strong>: Utilizing anonymized, non-personally identifiable information to serve relevant ads through Google AdSense. This supports our ability to maintain a 'Free-for-Life' pricing model for our core tracking and educational tools.</li>
    <li><strong>Content Personalization</strong>: Recommending financial literacy articles from our blog that align with your spending categories (e.g., suggesting tax-saving tips if you log high business expenses).</li>
</ul>

<h2>3. Data Storage & Multi-Layered Security Infrastructure</h2>
<p>Your data is stored using industry-leading infrastructure providers including Railway, Neon, and Vercel Edge. We leverage encrypted PostgreSQL databases that implement strict physical and logical security measures. All data transmitted between your browser and our servers is protected by Transport Layer Security (TLS/SSL) encryption, ensuring that no man-in-the-middle attacks can intercept your financial details.</p>
<p>Once stored, sensitive account identifiers and financial records are encrypted at rest using Advanced Encryption Standard (AES-256) protocols. We perform regular security audits and penetration testing to ensure that our defense-in-depth strategy remains effective against emerging cyber threats. Our database backups are also encrypted and stored in geographically redundant locations to ensure business continuity in the event of a catastrophic infrastructure failure.</p>

<h2>4. Google AdSense & Third-Party Transparency</h2>
<p>As an ad-supported platform, Expensico participates in the Google AdSense network. This involves the use of cookies and web beacons by Google to serve ads based on your prior visits. Google’s use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet. Advertisements are the engine that allows Expensico to remain free for all users. By leveraging Google's advertising network, we can provide professional-grade financial tools without charging a subscription fee. You may opt-out of personalized advertising by visiting Google's settings. We do not provide your email address or transaction history to Google; the integration is limited to anonymized browser-level tracking tags.</p>

<h2>5. Data Subject Rights (GDPR/CCPA/DPA)</h2>
<p>Regardless of your geographical location, Expensico grants all users robust data rights. These include:
<ul>
    <li><strong>Right of Access</strong>: You may request a complete export of all personal data we hold about you at any time.</li>
    <li><strong>Right to Rectification</strong>: You can update your profile and transaction history through the dashboard to ensure your records remain accurate.</li>
    <li><strong>Right to Erasure</strong>: You have the 'Right to be Forgotten.' Deleting your account initiates a process that permanently purges your records from our systems within 30 days.</li>
    <li><strong>Right to Data Portability</strong>: You can export your transaction history in structured CSV formats for use with third-party software or tax professionals.</li>
    <li><strong>Right to Restrict Processing</strong>: You can opt-out of specific data processing activities, such as our weekly financial insight emails.</li>
</ul></p>

<h2>6. International Data Transfers</h2>
<p>Expensico is a global platform with users across six continents. As such, your data may be transferred to and processed in countries outside of your own. We ensure that such transfers are governed by appropriate safeguards such as Standard Contractual Clauses (SCCs) approved by the European Commission. These clauses bind our infrastructure providers to the same high data protection standards found within the European Economic Area.</p>

<h2>7. Data Breach Notification Protocol</h2>
<p>In the highly unlikely event of a data breach that compromises your personal information, Expensico committed to full transparency. We will notify affected users via their registered email address within 72 hours of discovering the incident. Our notification will include details on the nature of the breach, the data affected, and the steps we are taking to mitigate further risk.</p>

<h2>8. Commitment to Children’s Privacy</h2>
<p>Our services are designed for individuals who are at least 18 years of age. We do not knowingly collect or solicit personal information from anyone under the age of 13. Financial management requires legal capacity and adult responsibility. If we discover that we have inadvertently collected information from a child, we will permanently delete that information from our servers immediately.</p>

<h2>9. Contact Our Data Protection Officer</h2>
<p>If you have any questions about this Privacy Policy, our data practices, or if you wish to exercise your data subject rights, please contact our Data Protection Officer at:
<strong>Email</strong>: malikantuparthi@gmail.com
<strong>Subject</strong>: Privacy Inquiry - Data Protection Officer</p>
"""

terms_content = """
<h1>Terms and Conditions</h1>
<p><strong>Effective Date: April 20, 2026</strong></p>
<p>Welcome to Expensico Finance. By accessing our website (expense-tracker-theta-weld.vercel.app) or using our financial tracking services, you agree to be bound by these Terms and Conditions. These Terms constitute a legally binding agreement between you and Expensico Finance. If you do not agree to these Terms, you must immediately cease all use of our platform. These terms govern your use of our web-based platform, mobile interface, and educational content library.</p>

<h2>1. Scope and Description of Service</h2>
<p>Expensico provides an interactive platform for the logging, categorization, and visualization of personal financial transactions. Our goal is to provide users with visual intelligence to better manage their money and build long-term wealth. The service is provided "as is" and is designed for personal, non-commercial use. We reserve the right to modify, suspend, or discontinue any part of the service at any time without prior notice. This includes the right to add new features or remove existing ones as we evolve the platform's technological capabilities.</p>

<h2>2. Eligibility and User Responsibilities</h2>
<p>You must be at least 18 years old (or the age of majority in your jurisdiction) to create an account and use the service. You are solely responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You agree to provide accurate, current, and complete information during the registration process and to update such information as necessary. Failure to maintain accurate account information may result in the suspension of your access to the platform.</p>

<h2>3. Financial Advice Disclaimer (Non-Fiduciary Status)</h2>
<p><strong>CRITICAL NOTICE</strong>: Expensico Finance is a data tracking and visualization tool. We are NOT a financial institution, bank, credit union, or licensed financial advisor. The insights, charts, blog content, and automated budgeting suggestions provided by our platform are for informational and educational purposes only. They do not constitute professional financial, investment, or legal advice. Every individual's financial situation is unique. You should consult with a qualified financial planner, tax professional, or legal advisor before making any significant financial decisions or investments. Expensico assumes no liability for any financial losses or gains resulting from the use of our platform.</p>

<h2>4. User Conduct and Prohibited Use</h2>
<p>You agree to use Expensico for lawful purposes only and in a manner that does not infringe the rights of others. Prohibited activities include, but are not limited to:
<ul>
    <li>Attempting to bypass security measures, bypass authentication, or reverse-engineer the platform's underlying architecture.</li>
    <li>Using automated systems (bots, scrapers, indexers) to access or harvest data from the platform without our express written authorization.</li>
    <li>Uploading malicious code, viruses, worms, or any software designed to disrupt the service or compromise user data.</li>
    <li>Using the platform to store or process data that violates international laws or the intellectual property rights of third parties.</li>
    <li>Engaging in any activity that places an unreasonable load on our infrastructure or compromises the speed and stability of the platform for other users.</li>
</ul>
Violation of these conduct rules may result in the immediate and permanent termination of your account without warning or refund of any kind.</p>

<h2>5. Intellectual Property Rights & Licensing</h2>
<p>All content on this platform, including but not limited to the "Expensico" brand name, our unique logos, UI/UX designs, visual charts, blog articles, educational guides, and proprietary algorithms, is the intellectual property of Expensico Finance and is protected by international copyright, trademark, and trade secret laws. You are granted a limited, personal, non-transferable, and non-exclusive license to use the platform for its intended personal tracking purposes only. You may not reproduce, distribute, or modify any part of our platform without prior written consent.</p>

<h2>6. Limitation of Liability and Indemnification</h2>
<p>To the maximum extent permitted by law, Expensico Finance, its directors, employees, and affiliates shall not be liable for any indirect, incidental, or consequential damages resulting from your use of the platform. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses. You agree to indemnify and hold Expensico harmless from any claims, losses, or damages arising out of your violation of these Terms or your misuse of the service. We make no warranties that the service will be uninterrupted, error-free, or entirely secure from unauthorized interference.</p>

<h2>7. Data Sovereignty and Account Deletion</h2>
<p>We believe your data belongs to you. You may delete your account at any time through your dashboard settings. Deletion will initiate the permanent purging of your transaction history and account metadata. Please note that once deleted, your data cannot be recovered. We reserve the right to retain anonymized, non-identifiable, and aggregated data for platform analytics and high-level trend reporting purposes.</p>

<h2>8. Governing Law and Dispute Resolution</h2>
<p>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the platform operators are based, without regard to its conflict of law provisions. Any disputes arising from these Terms that cannot be resolved through mutual negotiation shall be submitted to binding arbitration in accordance with the rules of the International Chamber of Commerce.</p>

<h2>9. Force Majeure and Service Availability</h2>
<p>Expensico shall not be held liable for any delay or failure in performance resulting from causes beyond our reasonable control, including but not limited to acts of God, strikes, internet failures, or local infrastructure breakdowns. While we strive for 99.9% uptime, we do not guarantee constant availability of the service.</p>

<h2>10. Severability and Waiver</h2>
<p>If any provision of these Terms is found to be unenforceable or invalid by a court of competent jurisdiction, that provision shall be limited or eliminated to the minimum extent necessary so that the remains of the Terms shall otherwise remain in full force and effect.</p>

<h2>11. Contact Information</h2>
<p>For legal inquiries regarding these Terms and Conditions, please contact us at:
<strong>Email</strong>: malikantuparthi@gmail.com
<strong>Subject</strong>: Legal Inquiry - Terms of Service</p>
"""

disclaimer_content = """
<h1>Professional & High-Accuracy Disclaimer</h1>
<p><strong>Last Updated: April 20, 2026</strong></p>
<h2>1. Financial Education and Information Only</h2>
<p>The information provided on Expensico (expense-tracker-theta-weld.vercel.app), including but not limited to our dashboard analytics, budgeting tools, and blog content, is intended for general educational and informational purposes only. It is not intended to be as a substitute for professional financial advice, diagnosis, or treatment. Always seek the advice of your financial advisor, accountant, or other qualified professional with any questions you may have regarding a financial plan or investment strategy. The financial markers and metrics provided by our platform are tools for your own analysis and should not be used as the sole basis for any financial decision.</p>

<h2>2. No Professional-Client Relationship</h2>
<p>Your use of this website and its tools does not establish a professional-client relationship between you and Expensico Finance. Any reliance you place on the information found within our platform is strictly at your own risk. We are not acting as your broker, advisor, or fiduciary in any capacity. The act of registering for an account or reading our blog articles does not create any obligation on our part to provide you with personalized financial guidance.</p>

<h2>3. Accuracy of Information and Forward-Looking Statements</h2>
<p>While we strive to provide high-quality data visualizations and well-researched financial literacy content, we make no representations or warranties of any kind about the completeness, accuracy, reliability, or suitability of the information. Financial markets, tax regulations, and investment strategies are subject to rapid change; therefore, the information provided may become outdated or inaccurate over time. Any projections or forward-looking statements regarding potential savings, portfolio growth, or market trends are purely hypothetical and do not guarantee future results. Accuracy of the tracking metrics is dependent on the quality and frequency of the user's manual data entry.</p>

<h2>4. AdSense and Third-Party Links Disclaimer</h2>
<p>Our website contains advertisements served by Google AdSense and may contain links to third-party websites. Expensico does not endorse the products or services advertised, nor do we have control over the content or practices of third-party sites. We are not responsible for any transactions you enter into with third parties discovered through our platform. Clicking on third-party links is done entirely at your own risk and is subject to the terms and privacy policies of those respective sites.</p>

<h2>5. User Personal Responsibility & Due Diligence</h2>
<p>You acknowledge that you are using our services voluntarily and that any choices, actions, and results now and in the future are solely your responsibility. Expensico will not be liable to you or any other party for any decision made or action taken in reliance on the information given by our service. You agree to perform your own due diligence before implementing any savings strategies or budgeting techniques discussed on our platform. Your results will depend on your unique financial situation, starting point, and dedication to tracking.</p>

<h2>6. Limitation of Liability and "As-Is" Status</h2>
<p>To the greatest extent permitted under applicable law, the service is provided "as is" and "as available." Expensico Finance and its partners make no representations or warranties regarding the continuous availability, security, or error-free nature of the platform. We shall not be liable for any direct, indirect, incidental, or special damages resulting from the use or inability to use the platform, including any losses of data or capital.</p>

<h2>7. Errors and Omissions</h2>
<p>This platform may contain typographical errors or inaccuracies and may not be complete or current. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice. We assume no responsibility for such errors and omissions.</p>

<h2>8. Technology and Security Disclaimer</h2>
<p>While we implement industry-standard security measures, we cannot guarantee that the platform will be 100% free of bugs, errors, or unauthorized access. You are responsible for maintaining your own local backups of critical data and ensuring your hardware and software are updated with the latest security patches. We assume no liability for malfunctions of your device or internet connection while using the platform.</p>

<h2>9. External Endorsement Disclaimer</h2>
<p>Reference to any specific commercial product, process, or service by trade name, trademark, manufacturer, or otherwise on this platform does not necessarily constitute or imply its endorsement, recommendation, or favoring by Expensico Finance. The views and opinions of authors expressed on our blog do not necessarily state or reflect those of the company as a whole.</p>

<h2>10. Conflict of Interest Disclaimer</h2>
<p>Expensico may receive compensation from advertisers whose products appear on the site (primarily through Google AdSense). This compensation may influence the selection of advertisements but does not impact our commitment to providing objective financial education content in our core articles.</p>
"""

cookie_content = """
<h1>Cookie Policy</h1>
<p><strong>Version 4.2 | Last Modified: April 20, 2026</strong></p>

<h2>1. Introduction to Digital Tracking at Expensico</h2>
<p>Expensico Finance ("we," "our," or "us") utilizes cookies, web beacons, pixels, and similar tracking technologies to ensure our platform remains secure, high-performing, and free for all users. In the modern digital landscape, transparency regarding data collection is not just a legal requirement but a fundamental part of the trust relationship we share with our global user base. This Cookie Policy provides an exhaustive technical and operational breakdown of how we leverage these technologies, how they impact your browsing experience, and the granular controls you have over your digital footprint.</p>

<h2>2. Comprehensive Definition of Cookies</h2>
<p>Cookies are small text-based data packets stored directly on your computer or mobile device by your web browser at the request of a website you visit. They act as a "short-term memory" for the web, allowing our platform to recognize your device and remember specific information about your session. Cookies can be "First-Party" (set by Expensico) or "Third-Party" (set by partners like Google). They can also be "Session-Based" (deleted when you close your browser) or "Persistent" (remaining on your device for a specific duration to facilitate long-term preferences).</p>

<h2>3. Categorization of Tracking Technologies Used</h2>
<h3>A. Strictly Necessary & Security Cookies</h3>
<p>These cookies are essential for the core functionality of Expensico. They facilitate the secure login process, manage JSON Web Token (JWT) sessions, and protect our infrastructure from Cross-Site Request Forgery (CSRF) attacks. Without these technologies, you would be unable to access your private financial dashboard, and your data would be significantly more vulnerable to unauthorized interference. Because they are vital for system integrity, these cookies cannot be disabled within our system settings.</p>

<h3>B. Performance and Optimization Cookies</h3>
<p>To provide a seamless visual experience, we use performance cookies to monitor how our platform handles high volumes of data. This includes telemetry regarding chart render times, database query speeds, and navigation fluidity. By analyzing this anonymized metadata, our engineering team can identify and resolve bottlenecks in real-time, ensuring that your financial insights are delivered with professional-grade speed regardless of your hardware specifications.</p>

<h3>C. Functional and Preference Cookies</h3>
<p>Expensico allows for deep UI customization. Functional cookies remember your choices, such as your preferred currency display, dark/light mode settings, sidebar collapsed states, and specific chart filters. These cookies ensure that every time you return to the platform, your workspace is configured exactly as you left it, reducing friction and enhancing your financial management workflow.</p>

<h3>D. Advertising and Monetization (Google AdSense)</h3>
<p>As an ad-supported platform committed to a "Free-for-Life" model for our core features, we participate in the Google AdSense network. Google uses cookies (including the DoubleClick DART cookie) to serve relevant advertisements based on your browsing history across the wider internet. These technologies allow us to monetize the platform's traffic without charging you a monthly subscription fee. We do not share your private financial logs with advertisers; the integration is restricted to anonymized browser-level tracking tags that focus on general interest patterns rather than individual personal identities.</p>

<h2>4. Web Beacons, Pixels, and Local Storage</h2>
<p>In addition to standard cookies, Expensico may utilize "Web Beacons" (also known as clear gifs or pixel tags). These are near-invisible graphics with a unique identifier that function similarly to cookies. Unlike cookies, which are stored on a user's hard drive, web beacons are embedded invisibly on web pages. We use pixels primarily to track the effectiveness of our financial literacy email campaigns and to optimize our site's landing pages for search engine crawlers. We also leverage browser "Local Storage" (HTML5) to cache non-sensitive UI elements locally, significantly improving page load times for returning users.</p>

<h2>5. Global Privacy Compliance & Opt-Out Mechanisms</h2>
<p>Expensico respects your right to privacy and provides multiple avenues for managing your tracking preferences. You can control cookie behavior through your browser settings (Chrome, Safari, Firefox, Edge). Most modern browsers allow you to "Block All Third-Party Cookies" or "Clear Cookies on Exit."</p>
<p>For more granular control over advertising cookies, we recommend the following industry-standard tools:
<ul>
    <li><strong>Network Advertising Initiative (NAI)</strong>: Residents in the US can use the NAI consumer opt-out page to manage their preferences across hundreds of advertising networks.</li>
    <li><strong>Digital Advertising Alliance (DAA)</strong>: The DAA provides 'YourAdChoices,' a suite of tools for managing personalized advertising across your devices.</li>
    <li><strong>European Interactive Digital Advertising Alliance (EDAA)</strong>: Users within the European Economic Area can utilize 'Your Online Choices' to exercise their rights under the GDPR.</li>
</ul>
Please be advised that opting out of advertising cookies does not mean you will no longer see ads; it simply means the ads you see will be less relevant to your specific interests.</p>

<h2>6. The Impact of the "Cookie-less Future"</h2>
<p>The digital industry is currently transitioning away from third-party cookies toward more privacy-centric tracking paradigms. Expensico is at the forefront of this shift. We are actively investigating and implementing "First-Party Data" strategies and Privacy Sandbox technologies to ensure that we can continue to provide personalized financial intelligence and support our platform without compromising the high security standards our users expect.</p>

<h2>7. Data Retention and Lifecycle Management</h2>
<p>Cookies set by Expensico have varying lifespans. Authentication cookies are generally set to expire within 24-48 hours for your protection. Preference cookies may persist for up to 365 days to ensure a consistent user experience. You can manually purge all cookies associated with the expense-tracker-theta-weld.vercel.app domain at any time through your browser's "Clear Browsing Data" menu.</p>

<h2>8. Technical Audit and Policy Iteration</h2>
<p>Our Data Protection Officer performs bi-annual audits of our tracking inventory to ensure every cookie serves a legitimate business or security purpose. As new technologies emerge and global regulations evolve (such as updates to the ePrivacy Directive), this policy will be updated accordingly. Continued use of the platform following the posting of changes to this policy will be deemed as your acceptance of those changes.</p>

<h2>9. Contact and Further Information</h2>
<p>If you require a technical list of the specific cookie identifiers currently in use, or if you have questions regarding our data collection methods, please reach out to our team at:
<strong>Email</strong>: malikantuparthi@gmail.com
<strong>Phone</strong>: Available via support dashboard</p>
"""

faq_content = """
<h1>Frequently Asked Questions</h1>
<p>Our Comprehensive Knowledge Base is designed to provide you with the technical and operational clarity required to master the Expensico platform. If your inquiry is not addressed here, please contact our support team through your dashboard.</p>

<div class="faq-section">
    <h2>1. Account & Security</h2>
    <div class="faq-item">
        <h3>How does Expensico protect my sensitive data?</h3>
        <p>Security is our core pillar. We implement AES-256 encryption for data at rest and TLS 1.3/SSL for all data in transit. Furthermore, our architecture utilizes JSON Web Tokens (JWT) for secure session management and follows strict OWASP guidelines to prevent common vulnerabilities like XSS and SQL Injection.</p>
    </div>
    <div class="faq-item">
        <h3>What is the "Soft-Delete" system?</h3>
        <p>To protect you from accidental data loss, Expensico uses a soft-delete mechanism. When you delete a transaction, it is moved to a secure archive for 30 days before being permanently purged. This allows for data recovery in case of mistakes.</p>
    </div>
    <div class="faq-item">
        <h3>Does Expensico support Multi-Factor Authentication (MFA)?</h3>
        <p>Currently, we rely on secure email-based authentication and robust password hashing. We are actively developing a dedicated TOTP-based MFA (e.g., Google Authenticator) layer to be released in the upcoming Q3 update.</p>
    </div>
</div>

<div class="faq-section">
    <h2>2. Financial Tracking Features</h2>
    <div class="faq-item">
        <h3>Can I track multiple currencies simultaneously?</h3>
        <p>Yes. Expensico allows you to designate a primary base currency while logging transactions in any global currency. Our system uses real-time exchange rate logic (cached daily) to give you a unified view of your net worth across different denominations.</p>
    </div>
    <div class="faq-item">
        <h3>Is there a limit to the number of transactions I can log?</h3>
        <p>Absolutely not. Expensico is built on a high-performance PostgreSQL backend designed to handle millions of records. Whether you log ten transactions or ten thousand, your dashboard will remain responsive.</p>
    </div>
    <div class="faq-item">
        <h3>How does "Intelligent Categorization" work?</h3>
        <p>Our system analyzes your historical spending patterns to predict the category of new entries. If you frequently log "Starbucks" as "Food," the system will learn this behavior and suggest that category automatically for future entries, saving you time.</p>
    </div>
    <div class="faq-item">
        <h3>Can I import data from my bank or other apps?</h3>
        <p>We provide a robust CSV import tool in your settings. This allows you to migrate data from bank statements or other trackers directly into Expensico. We are also building out a specialized JSON-API for power users.</p>
    </div>
</div>

<div class="faq-section">
    <h2>3. Privacy & Transparency</h2>
    <div class="faq-item">
        <h3>Why is Expensico free? Where is the catch?</h3>
        <p>There is no "catch." We use a monetization model based on non-intrusive Google AdSense advertisements. This allows us to provide institutional-grade tracking tools to everyone for free. We do NOT sell your identifiable financial data to third parties.</p>
    </div>
    <div class="faq-item">
        <h3>How do I exercise my "Right to be Forgotten" (GDPR)?</h3>
        <p>You can initiate a full account deletion from your profile settings. This triggers a permanent purge of all your personal data, transaction history, and metadata from our primary databases in compliance with global privacy laws.</p>
    </div>
    <div class="faq-item">
        <h3>Are the blog articles written by financial experts?</h3>
        <p>All our content is researched and drafted by a team of financial analysts and technical writers to ensure accuracy. However, please remember that our content is for educational purposes and does not constitute professional investment advice.</p>
    </div>
</div>

<div class="faq-section">
    <h2>4. Technical Support & Platform</h2>
    <div class="faq-item">
        <h3>Does Expensico have an offline mode?</h3>
        <p>As a Progressive Web App (PWA), Expensico can be added to your home screen and caches core UI elements. While transaction syncing requires an internet connection, you can view your cached history even when offline.</p>
    </div>
    <div class="faq-item">
        <h3>Is my data backed up against server failures?</h3>
        <p>Yes. Our databases (hosted on Neon/Railway) feature point-in-time recovery and are geographically redundant. We perform automated nightly backups to ensure your financial history is protected from catastrophic infrastructure events.</p>
    </div>
    <div class="faq-item">
        <h3>What browsers are officially supported?</h3>
        <p>We support all modern browsers that utilize the Chromium engine (Chrome, Edge, Brave), as well as Safari (iOS/macOS) and Firefox. We recommend keeping your browser updated for the best security and performance.</p>
    </div>
    <div class="faq-item">
        <h3>How do I report a bug or suggest a feature?</h3>
        <p>We love user feedback. Use the "Contact Support" button in your dashboard side-bar. Our engineering team reviews every submission and frequently implements user-suggested features in our bi-weekly updates.</p>
    </div>
    <div class="faq-item">
        <h3>Can I share my account with a spouse or partner?</h3>
        <p>Currently, accounts are individual. However, we are finalizing a "Shared Wallet" feature that will allow two separate accounts to view and manage a consolidated budget—perfect for joint household management.</p>
    </div>
    <div class="faq-item">
        <h3>How do I reset my password if I lose access?</h3>
        <p>Click "Forgot Password" on the login screen. We will send a secure, time-limited reset link to your registered email address. For security reasons, we cannot reset passwords over the phone or via social media.</p>
    </div>
</div>
"""

# Now generate them
generate_legal_page("privacy-policy.html", "Privacy Policy", privacy_content, "Privacy Commitment")
generate_legal_page("terms-and-conditions.html", "Terms", terms_content, "Usage Agreement")
generate_legal_page("disclaimer.html", "Disclaimer", disclaimer_content, "Financial Disclosure")
generate_legal_page("cookie-policy.html", "Cookie Policy", cookie_content, "Data Transparency")
generate_legal_page("faq.html", "FAQ", faq_content, "User Knowledge Base")
