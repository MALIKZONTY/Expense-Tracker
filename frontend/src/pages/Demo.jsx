import { CheckCircle, BarChart2, PieChart, Wallet, PlusCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DemoSection = ({ title, description, badge, icon: Icon, imageSrc, reverse }) => (
  <div className="demo-section" style={{ display: 'flex', flexDirection: reverse ? 'row-reverse' : 'row', alignItems: 'center', gap: '4rem', marginBottom: '8rem', flexWrap: 'wrap' }}>
    <div className="demo-text" style={{ flex: 1, minWidth: '300px' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', background: 'rgba(59,130,246,0.1)', color: 'var(--primary-color)', borderRadius: '30px', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1.25rem' }}>
        <Icon size={16} /> {badge}
      </div>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)', fontWeight: 800 }}>{title}</h2>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>{description}</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {['Real-time data synchronization', 'Clean and intuitive interface', 'Mobile-responsive layout'].map((item, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--text-primary)', fontWeight: 500 }}>
            <CheckCircle size={18} style={{ color: 'var(--income-color)' }} /> {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="demo-image-container" style={{ flex: 1, minWidth: '300px' }}>
      <div className="card shadow-glow" style={{ padding: '0.5rem', borderRadius: '24px', background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)', border: '1px solid var(--border-color)', boxShadow: '0 30px 60px -12px rgba(0,0,0,0.1)' }}>
        {/* Placeholder for Screenshot */}
        <div style={{ width: '100%', aspectRatio: '16/10', background: '#f1f5f9', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', fontWeight: 600, fontSize: '1.1rem', border: '2px dashed #cbd5e1' }}>
          {imageSrc ? <img src={imageSrc} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px' }} /> : `[Screenshot: ${title}]`}
        </div>
      </div>
    </div>
  </div>
);

export default function Demo() {
  return (
    <div className="demo-page" style={{ paddingBottom: '5rem' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', padding: '6rem 1rem 4rem 1rem', background: 'linear-gradient(to bottom, #f8fafc 0%, #ffffff 100%)' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Take a Guided Tour</h1>
        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
          Discover how Expensico empowers you to manage your finances with precision, clarity, and ease. 
          See every feature in action through this complete walkthrough.
        </p>
      </div>

      <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1rem' }}>
        
        <DemoSection 
          title="Intelligent Dashboard"
          badge="Overview"
          icon={BarChart2}
          description="Get a high-level view of your entire financial landscape. Our smart dashboard summarizes your total income, expenses, and remaining balance instantly, ensuring you always know where you stand."
          imageSrc="" // Placeholder
        />

        <DemoSection 
          title="Effortless Transaction Entry"
          badge="Management"
          icon={PlusCircle}
          reverse
          description="Logging an expense takes seconds. Categorize your spending, add detailed notes, and select your payment method. Expensico handles the rest, updating your balances and trends in real-time."
          imageSrc="" // Placeholder
        />

        <DemoSection 
          title="Advanced Data Visualizations"
          badge="Analytics"
          icon={PieChart}
          description="Visualize your habits with beautiful, interactive charts. Understand your spending by category and monitor your income vs. expense ratio to make data-driven financial decisions."
          imageSrc="" // Placeholder
        />

        <DemoSection 
          title="Multi-Wallet Management"
          badge="Flexibility"
          icon={Wallet}
          reverse
          description="Whether it's cash in your pocket or a bank transfer, Expensico keeps everything organized. Monitor multiple payment methods seamlessly and see exact balances for each wallet."
          imageSrc="" // Placeholder
        />

        {/* CTA Section */}
        <div className="card shadow-glow" style={{ textAlign: 'center', padding: '5rem 2rem', background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', color: 'white', borderRadius: '32px', marginTop: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Ready to start your journey?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
            Join thousands of users who are already mastering their finances with Expensico. It only takes a minute to set up.
          </p>
          <Link to="/register" className="btn" style={{ background: 'white', color: 'var(--primary-color)', padding: '1rem 3rem', borderRadius: '12px', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
            Join Expensico Today <ArrowRight size={20} />
          </Link>
        </div>

      </div>
    </div>
  );
}
