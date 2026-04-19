import { Shield, Rocket, Cpu, Eye, Target, TrendingUp, Lock, RefreshCw } from 'lucide-react';

const ContentSection = ({ title, icon: Icon, children }) => (
  <div style={{ marginBottom: '4rem' }}>
    <h2 style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem', fontSize: 'clamp(1.6rem, 5vw, 2.2rem)', lineHeight: 1.2, fontWeight: 800 }}>
      <Icon style={{ color: 'var(--primary-color)', flexShrink: 0, marginTop: '0.3rem' }} /> 
      <span>{title}</span>
    </h2>
    <div style={{ color: 'var(--text-secondary)', lineHeight: '1.9', fontSize: 'clamp(1rem, 4vw, 1.15rem)' }}>
      {children}
    </div>
  </div>
);

export default function About() {
  return (
    <div className="about-page" style={{ paddingBottom: '8rem' }}>
      {/* Hero Header */}
      <div style={{ padding: 'clamp(4rem, 15vh, 8rem) 1rem', background: 'linear-gradient(to bottom, #ffffff 0%, #f8fafc 100%)', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 10vw, 4.5rem)', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '2rem', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
          Redefining Personal <br />
          <span style={{ background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Financial Intelligence</span>
        </h1>
        <p style={{ maxWidth: '850px', margin: '0 auto', fontSize: 'clamp(1.1rem, 4vw, 1.4rem)', color: 'var(--text-secondary)', lineHeight: '1.8', fontWeight: 500 }}>
          SmartTracker isn't just a tool; it's a movement towards radical financial transparency. 
          We believe that once you see your money clearly, you gain the power to change your life forever.
        </p>
      </div>

      <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 1rem' }}>
        
        <ContentSection title="The Genesis of SmartTracker" icon={Target}>
          <p style={{ marginBottom: '1.5rem' }}>
            In an era where digital transactions are seamless yet increasingly complex, SmartTracker emerged from a simple observation: most people don't know where their money goes. Traditionally, financial tracking has been a chore—something relegated to messy spreadsheets or convoluted banking apps that hide your data behind layers of marketing.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Our journey began in a small apartment with a single goal: to strip away the noise and provide a <strong>privacy-first, blazing-fast</strong> platform that makes tracking as natural as spending. We spent months researching behavioral patterns in personal finance, understanding that the barrier to financial growth isn't a lack of discipline, but a lack of visibility.
          </p>
          <p>
            Today, SmartTracker serves as the digital backbone for thousands of individuals who are serious about their financial health. We have evolved from a basic ledger into a sophisticated analytics engine, all while maintaining the minimalist aesthetic that our users have come to love.
          </p>
        </ContentSection>

        {/* Highlight Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', marginBottom: '6rem' }}>
          <div className="card" style={{ padding: '3rem', border: '1px solid rgba(59, 130, 246, 0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
              <TrendingUp size={32} />
            </div>
            <h3 style={{ marginBottom: '1.25rem', fontSize: '1.5rem', fontWeight: 700 }}>Built for Growth</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem' }}>
              SmartTracker is designed to grow with your financial complexity. From your first paycheck to a diversified investment portfolio, our engine scales with you.
            </p>
          </div>

          <div className="card" style={{ padding: '3rem', border: '1px solid rgba(16, 185, 129, 0.1)' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--income-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
              <Lock size={32} />
            </div>
            <h3 style={{ marginBottom: '1.25rem', fontSize: '1.5rem', fontWeight: 700 }}>Zero-Knowledge Privacy</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem' }}>
              Your data is yours alone. We implement strict server-side security measures ensuring that even our administrators cannot access your raw financial records.
            </p>
          </div>
        </div>

        <ContentSection title="Engineering Excellence" icon={Cpu}>
          <p style={{ marginBottom: '1.5rem' }}>
            The "Smart" in SmartTracker comes from our high-performance technology stack. At the core, we utilize <strong>React 18</strong> for a declarative and responsive user interface that updates instantly across all devices. We chose <strong>Vite</strong> as our build tool to ensure that developers and users alike experience a lightning-fast environment.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            On the infrastructure side, our robust <strong>Node.js and Express</strong> backend handles thousands of concurrent requests with ease, orchestrated through a scalable <strong>PostgreSQL</strong> relational database. This combination allows for complex relational queries, such as our multi-wallet balance aggregation and period-over-period growth metrics, to be calculated in milliseconds.
          </p>
          <p>
            Security is baked into every line of code. We use <strong>JSON Web Tokens (JWT)</strong> for secure session management, ensuring that every request is authenticated and authorized against strict user-based ownership rules. Our soft-delete architecture ensures that while your dashboard remains clean, your historical data is protected against accidental user errors.
          </p>
        </ContentSection>

        <ContentSection title="Commitment to Security" icon={Shield}>
          <p style={{ marginBottom: '1.5rem' }}>
            We understand that when you trust us with your financial data, you are trusting us with your future. That is a responsibility we do not take lightly. SmartTracker implements <strong>industry-standard AES-256 encryption</strong> for sensitive data storage and <strong>TLS/SSL protocols</strong> for all data in transit. This ensures that your information is unreadable to anyone but you, whether it's stored on our cloud servers or moving across the global web.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Beyond encryption, we adhere to strict <strong>database isolation practices</strong>. Every user's data is partitioned at the application level, preventing data leakage and cross-user contamination. We also conduct regular automated security audits to identify and patch potential vulnerabilities before they can be exploited.
          </p>
          <p>
            Our commitment extends to <strong>compliance and transparency</strong>. We provide detailed logs of account activity and allow you to export your entire data history at any time. In the rare event of a system failure, our high-availability backups ensure that your data is recoverable up to the last millisecond.
          </p>
        </ContentSection>

        <ContentSection title="The Vision Ahead" icon={RefreshCw}>
          <p style={{ marginBottom: '1.5rem' }}>
            We are just getting started. The roadmap for SmartTracker includes the integration of <strong>AI-driven Predictive Budgeting</strong>, allowing our algorithms to forecast your future spending based on historical trends. We are also working on <strong>Multi-Currency Support</strong> and <strong>Smart Receipt Parsing</strong> to make manual entry a thing of the past.
          </p>
          <p>
            Our vision is to become the central nervous system for your financial life—a platform that doesn't just record the past, but helps you navigate the future. Thank you for being a part of this journey to financial empowerment.
          </p>
        </ContentSection>

        {/* Global Stats or Vision Banner */}
        <div className="card shadow-glow" style={{ padding: '4rem', textAlign: 'center', background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)', borderRadius: '32px', border: '1px solid var(--border-color)' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)' }}>100% Data Sovereignty</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            You own your data. You control your future. SmartTracker is simply the lens through which you see your success.
          </p>
        </div>

      </div>
    </div>
  );
}
