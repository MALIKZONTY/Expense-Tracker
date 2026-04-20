import { Link } from 'react-router-dom';
import { Shield, Rocket, Cpu, Eye, Target, TrendingUp, Lock, RefreshCw, Award, Users, Globe } from 'lucide-react';

const ContentSection = ({ title, icon: Icon, children }) => (
  <div style={{ marginBottom: '5rem' }}>
    <h2 style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', marginBottom: '1.75rem', fontSize: 'clamp(1.75rem, 5vw, 2.4rem)', lineHeight: 1.2, fontWeight: 900, color: 'var(--text-primary)' }}>
      <Icon size={32} style={{ color: 'var(--primary-color)', flexShrink: 0, marginTop: '0.2rem' }} /> 
      <span>{title}</span>
    </h2>
    <div style={{ color: 'var(--text-secondary)', lineHeight: '2.0', fontSize: 'clamp(1rem, 4vw, 1.15rem)' }}>
      {children}
    </div>
  </div>
);

export default function About() {
  return (
    <div className="about-page" style={{ paddingBottom: '10rem' }}>
      {/* High-Impact Hero Section */}
      <div style={{ padding: 'clamp(5rem, 20vh, 10rem) 1rem', background: 'radial-gradient(circle at top right, #f8fafc, #ffffff)', textAlign: 'center', borderBottom: '1px solid var(--border-color)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '40%', height: '40%', background: 'rgba(59, 130, 246, 0.03)', borderRadius: '50%', filter: 'blur(80px)' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: 'clamp(3rem, 10vw, 5rem)', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '2.5rem', letterSpacing: '-0.05em', lineHeight: 1.05 }}>
            Pioneering the Era of <br />
            <span style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Autonomous Finance</span>
          </h1>
          <p style={{ maxWidth: '900px', margin: '0 auto', fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', color: 'var(--text-secondary)', lineHeight: '1.8', fontWeight: 500 }}>
            Expensico is a global leader in personal financial visualization. 
            Our mission is to democratize financial intelligence by providing 
            enterprise-grade tracking tools to every individual, free of charge.
          </p>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '1150px', margin: '0 auto', padding: '6rem 1rem' }}>
        
        <ContentSection title="Our Founding Mission" icon={Award}>
          <p style={{ marginBottom: '1.5rem' }}>
            Expensico was founded in 2024 as a response to the "Data Opacity" crisis in modern consumer banking. While financial institutions have become more digital, the underlying complexity has made it harder for the average individual to truly understand their net liquidity and spending velocity.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Our vision was to create a <strong>mathematically precise</strong> yet <strong>aesthetically minimalist</strong> interface. We believe that clarity breeds confidence. By removing the friction of manual entry and replacing it with instant visual feedback, we empower users to eliminate debt and accelerate wealth generation.
          </p>
          <p>
            Today, our platform represents the gold standard in privacy-first financial tracking, built on the bedrock of user sovereignty and data integrity.
          </p>
        </ContentSection>

        {/* Core Values Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginBottom: '8rem' }}>
          <div className="card shadow-glow" style={{ padding: '3.5rem', border: '1px solid rgba(59, 130, 246, 0.1)', background: 'white', borderRadius: '24px' }}>
            <Users size={40} style={{ color: 'var(--primary-color)', marginBottom: '2rem' }} />
            <h3 style={{ marginBottom: '1.25rem', fontSize: '1.6rem', fontWeight: 800 }}>User-Centric Design</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              Every feature in Expensico is born from community feedback. We build tools that solve real-world financial challenges, not just theoretical ones.
            </p>
          </div>

          <div className="card shadow-glow" style={{ padding: '3.5rem', border: '1px solid rgba(16, 185, 129, 0.1)', background: 'white', borderRadius: '24px' }}>
            <Globe size={40} style={{ color: 'var(--income-color)', marginBottom: '2rem' }} />
            <h3 style={{ marginBottom: '1.25rem', fontSize: '1.6rem', fontWeight: 800 }}>Global Transparency</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              We operate across borders, providing financial clarity to users worldwide while adhering to the strictest international data protection standards.
            </p>
          </div>
        </div>

        <ContentSection title="Engineering for Reliability" icon={Cpu}>
          <p style={{ marginBottom: '1.5rem' }}>
            Expensico is engineered using a high-availability architecture designed for zero downtime. Our frontend utilizes a <strong>High-Performance Vite React</strong> pipeline, ensuring that every interaction—from logging a transaction to rendering a complex quarterly chart—is executed in sub-100ms speeds.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Our backend infrastructure is anchored by a high-concurrency Node.js cluster, paired with a horizontally scalable relational database. This allows for deep relational analysis of transaction data, enabling the platform to provide unique insights into "Spending Trends," "Wallet Performance," and "Category Distribution" with surgical precision.
          </p>
        </ContentSection>

        <ContentSection title="Privacy as a Core Product" icon={Shield}>
          <p style={{ marginBottom: '1.5rem' }}>
            We do not view privacy as a compliance checkbox; it is our primary product. Unlike traditional financial apps that monetize your "Anonymized Data", Expensico operates under a <strong>Zero-monetization</strong> rule for user data. We implement state-of-the-art server-side isolation, ensuring your financial records are accessible only through your authenticated JWT session.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Our security framework follows the <strong>OWASP Top 10</strong> security guidelines, incorporating robust protections against SQL injection, XSS, and CSRF attacks. Every transaction is encrypted at rest and in transit using military-grade TLS 1.3 encryption.
          </p>
        </ContentSection>

        <ContentSection title="Compliance and Trust" icon={Lock}>
          <p style={{ marginBottom: '1.5rem' }}>
            As a global product, Expensico is designed to be fully compatible with the <strong>General Data Protection Regulation (GDPR)</strong>, the <strong>California Consumer Privacy Act (CCPA)</strong>, and the <strong>California Privacy Rights Act (CPRA)</strong>. 
          </p>
          <p>
            We empower our users with tools to exercise their data rights, including the right to data portability and the right to erasure. Our transparency reports and clear legal disclosures ensure that you are always in the driver's seat of your financial identity.
          </p>
        </ContentSection>

        {/* Final Vision Statement */}
        <div className="card shadow-glow" style={{ padding: '5rem 2rem', textAlign: 'center', background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)', borderRadius: '40px', border: '1px solid var(--border-color)', marginTop: '4rem' }}>
          <Rocket size={48} style={{ color: 'var(--primary-color)', marginBottom: '2rem' }} />
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>Your Wealth, Refocused.</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto', fontSize: '1.15rem', lineHeight: '1.8' }}>
            The future of finance isn't just about accumulation; it's about understanding. Join thousands of users who have transitioned from passive spenders to active wealth architects with Expensico.
          </p>
        </div>

      </div>
    </div>
  );
}
