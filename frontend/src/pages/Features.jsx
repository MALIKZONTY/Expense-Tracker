import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Smartphone, Globe, ArrowRight, Zap, CheckCircle, Shield, ChevronLeft, ChevronRight, RefreshCw } from 'lucide-react';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

/**
 * 🛠️ FEATURE CONFIGURATION DICTIONARY
 * You can edit the text and swap the image names here.
 * The layout will update automatically.
 */
const FEATURE_CONFIG = [
  {
    id: 'dashboard',
    title: 'Visual Financial Intelligence',
    description: 'Stop guessing where your money goes. Our high-fidelity dashboard transforms raw data into actionable insights through dynamic, real-time visualizations. Monitor your total income, track your spending burn-rate, and view your net balance in one unified command center.',
    icon: Layout,
    badge: 'Overview',
    images: ['/web-1.png', '/web-2.png', '/mobile-1.png', '/mobile-2.png'],
    layout: 'mixed',
    bulletPoints: [
      'Real-time balance synchronization across all wallets',
      'Dynamic charts powered by visual analytics',
      'Track PhonePe, Paytm, and GPay balances instantly',
      'At-a-glance summary of top spending categories'
    ]
  },
  {
    id: 'mobile',
    title: 'Precision Tracking on the Go',
    description: 'Designed for the speed of real life. Log every transaction the moment it happens with our mobile-first architecture. Whether you are paying for coffee or receiving a paycheck, Expensico ensures your records are updated in seconds with zero friction.',
    icon: Smartphone,
    badge: 'Mobile App',
    images: ['/mobile-3.png', '/web-3.png'],
    layout: 'mixed',
    bulletPoints: [
      'Rapid logging interface (under 3 seconds)',
      'Optimized for one-handed operation',
      'Seamless synchronization between mobile and desktop',
      'Visual transaction receipts and history'
    ]
  },
  {
    id: 'blog',
    title: 'The Financial Literacy Hub',
    description: 'More than just a tracker—Expensico is your partner in building wealth. Access an exclusive library of 20+ expert-written articles covering everything from tax-saving strategies to the psychology of spending. We provide the tools *and* the knowledge.',
    icon: Globe,
    badge: 'Education',
    images: ['/web-5.png', '/web-6.png'],
    layout: 'web',
    cta: { text: 'Explore the Blog', link: '/blog' },
    bulletPoints: [
      'Browse by Topic: Budgeting, Investing, and Psychology',
      '20+ long-form professional financial guides',
      'Actionable advice for first-time home buyers',
      'Searchable archive for instant knowledge access'
    ]
  },
  {
    id: 'transactions',
    title: 'Advanced Transaction Intelligence',
    description: 'Take full control of your historical data. Our robust transaction engine allows you to deep-dive into your past spending through powerful multi-layered filtering. Sort by date or type to find exactly what you are looking for in an instant.',
    icon: Zap,
    badge: 'Management',
    images: ['/mobile-4.png', '/web-4.png'],
    layout: 'mixed',
    bulletPoints: [
      'Multi-category tagging for precise organization',
      'Flexible filtering by date range and type',
      'Full edit and delete controls for every record'
    ]
  },
  {
    id: 'support',
    title: 'Integrated Support & Inquiry System',
    description: 'Connectivity built into the platform. If you ever have a question or need assistance, our integrated inquiry system connects you directly to the administration. Send inquiries, track their status, and receive responses all within your secure user dashboard.',
    icon: Shield,
    badge: 'Support',
    images: ['/web-7.png', '/mobile-6.png'],
    layout: 'mixed',
    bulletPoints: [
      'Encrypted messaging directly to admin staff',
      'Real-time status tracking for every ticket',
      'Personal dashboard for managing all queries',
      '24/7 access to the contact and help infrastructure'
    ]
  },
  {
    id: 'exchange',
    title: 'Smart Money Exchange',
    description: 'We live in a world where cash and digital money are constantly swapped. Whether you gave cash to a friend for a PhonePe transfer or moved money from your Bank to Paytm, Expensico handles these internal transfers with zero impact on your expense reports.',
    icon: RefreshCw,
    badge: 'Transfers',
    images: ['/mobile-3.png', '/web-1.png'],
    layout: 'mixed',
    bulletPoints: [
      'Track "Cash to Online" transfers seamlessly',
      'Built-in support for PhonePe, Paytm, and GPay',
      'Neutral transfers that won\'t skew your income/expense charts',
      'Keep your account balances accurate across all methods'
    ]
  }
];

// Images specifically for the final "Showcase" section at the bottom
const SHOWCASE_IMAGES = {
  web: '/web-3.png',
  mobile: ['/mobile-3.png', '/mobile-5.png']
};

const ImageCarousel = ({ images, renderFrame }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="feature-carousel">
      <div className="carousel-container">
        <div className="carousel-slide">
          {renderFrame(images[currentIndex])}
        </div>
      </div>

      {images.length > 1 && (
        <div className="carousel-controls-bar">
          <button className="carousel-nav prev" onClick={prev} aria-label="Previous slide">
            <ChevronLeft size={20} />
          </button>
          
          <div className="carousel-indicators">
            {images.map((_, i) => (
              <div
                key={i}
                className={`indicator ${i === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>

          <button className="carousel-nav next" onClick={next} aria-label="Next slide">
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

const Features = () => {
  const { user } = useContext(AuthContext);
  const getStartedLink = user ? '/dashboard' : '/register';
  const getStartedText = user ? 'Go to Dashboard' : 'Get Started Now';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.feature-section');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const renderImageFrame = (img) => {
    if (!img) return null;
    if (img.includes('web-')) {
      return (
        <div className="browser-mockup">
          <div className="browser-header">
            <div className="dot"></div><div className="dot"></div><div className="dot"></div>
          </div>
          <img src={img} alt="Product screenshot" className="mockup-image" loading="lazy" />
        </div>
      );
    }
    return (
      <div className="phone-frame">
        <img src={img} alt="Mobile screenshot" className="mockup-image" loading="lazy" />
      </div>
    );
  };

  return (
    <div className="features-page">
      {/* Hero Section */}
      <section className="product-hero">
        <div className="container">
          <span className="badge badge-income" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>Product Tour</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, marginBottom: '1.5rem', color: 'var(--text-primary)', letterSpacing: '-0.04em' }}>
            Experience Financial <span style={{ color: 'var(--primary-color)' }}>Clarity.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 3rem auto', lineHeight: '1.6' }}>
            Take an in-depth tour of Expensico—from high-level visual dashboards to granular transaction tracking on any device.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to={getStartedLink} className="btn btn-primary btn-lg">{getStartedText}</Link>
            <a href="#why" className="btn btn-outline btn-lg">Why Expensico?</a>
          </div>
        </div>
      </section>

      {/* --- NEW CONTENT SECTIONS FOR ADSENSE & USER EXPLAINER --- */}

      {/* Section 1: The "Why" - Financial Sovereignty */}
      <section id="why" className="container" style={{ marginTop: '5rem', textAlign: 'center' }}>
        <span className="badge badge-income" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>The Philosophy</span>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, marginBottom: '2rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
          Why I care about tracking
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', textAlign: 'left', marginTop: '4rem' }}>
          <div className="explainer-box">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-color)', marginBottom: '1rem' }}>No more mysteries</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1.1rem' }}>
              You can't fix what you can't see. Expensico brings those "invisible" daily spends into the light, so you can stop worrying about where the money went and start deciding where it should go next.
            </p>
          </div>
          <div className="explainer-box">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#8b5cf6', marginBottom: '1rem' }}>Simple habits, big results</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1.1rem' }}>
              Logging a coffee or a bill takes 3 seconds, but it changes how you think about spending. That small "pause" helps you break the cycle of buying things you don't really need.
            </p>
          </div>
          <div className="explainer-box">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#10b981', marginBottom: '1rem' }}>It's about your time</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1.1rem' }}>
              Money is just a way to measure the time and effort you put into your work. Tracking isn't about being "cheap"—it's about making sure your hard work goes toward the things that actually matter to you.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Core Pillars (Grid) */}
      <section style={{ marginTop: '6rem', background: 'rgba(59,130,246,0.03)', padding: '4rem 1.5rem', borderRadius: '40px' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '4rem' }}>Built for the Modern Economy</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="card" style={{ padding: '2.5rem', textAlign: 'left', border: '1px solid rgba(0,0,0,0.05)', background: 'white' }}>
              <div style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', fontWeight: 900, fontSize: '1.5rem' }}>01</div>
              <h4 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1rem' }}>Charts that actually help</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Our dashboard shows your spending in a way that makes sense instantly. No more digging through bank apps.
              </p>
            </div>
            <div className="card" style={{ padding: '2.5rem', textAlign: 'left', border: '1px solid rgba(0,0,0,0.05)', background: 'white' }}>
              <div style={{ color: '#8b5cf6', marginBottom: '1.5rem', fontWeight: 900, fontSize: '1.5rem' }}>02</div>
              <h4 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1rem' }}>Mobile-First Speed</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Log a coffee or a paycheck in under 3 seconds. Designed for the real world where timing is everything.
              </p>
            </div>
            <div className="card" style={{ padding: '2.5rem', textAlign: 'left', border: '1px solid rgba(0,0,0,0.05)', background: 'white' }}>
              <div style={{ color: '#10b981', marginBottom: '1.5rem', fontWeight: 900, fontSize: '1.5rem' }}>03</div>
              <h4 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1rem' }}>Financial Literacy</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Access our exclusive library of long-form guides. Learn the math of compounding and the strategy of debt-free living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Simple 3-Step Path */}
      <section className="container" style={{ marginTop: '6rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>Getting Started is Simple</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '5rem', fontSize: '1.1rem' }}>Transformation doesn't have to be complicated.</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <div style={{ maxWidth: '250px' }}>
            <div style={{ width: '60px', height: '60px', background: 'var(--primary-color)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', fontWeight: 900, fontSize: '1.5rem' }}>1</div>
            <h5 style={{ fontWeight: 800, marginBottom: '0.75rem', fontSize: '1.1rem' }}>Secure Setup</h5>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Create your encrypted account in under 60 seconds.</p>
          </div>
          <div style={{ maxWidth: '250px' }}>
            <div style={{ width: '60px', height: '60px', background: '#8b5cf6', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', fontWeight: 900, fontSize: '1.5rem' }}>2</div>
            <h5 style={{ fontWeight: 800, marginBottom: '0.75rem', fontSize: '1.1rem' }}>Log & Observe</h5>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Record your next three transactions to start the habit.</p>
          </div>
          <div style={{ maxWidth: '250px' }}>
            <div style={{ width: '60px', height: '60px', background: '#10b981', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', fontWeight: 900, fontSize: '1.5rem' }}>3</div>
            <h5 style={{ fontWeight: 800, marginBottom: '0.75rem', fontSize: '1.1rem' }}>Gain Clarity</h5>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Watch your dashboard reveal your unique financial story.</p>
          </div>
        </div>
      </section>

      <div id="tour" className="container" style={{ marginTop: '5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 900 }}>The Product Tour</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>See the precision of Expensico in action across all sections.</p>
        </div>
        {FEATURE_CONFIG.map((feature) => (
          <section key={feature.id} className="feature-section">
            <div className="feature-content">
              <div className="icon-box" style={{ background: 'var(--primary-light)', padding: '1rem', borderRadius: '12px', display: 'inline-block', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>
                <feature.icon size={32} />
              </div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>{feature.title}</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.7' }}>
                {feature.description}
              </p>

              {feature.bulletPoints && (
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                  {feature.bulletPoints.map((point, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', fontWeight: 500 }}>
                      <CheckCircle size={20} style={{ color: 'var(--primary-color)' }} /> {point}
                    </li>
                  ))}
                </ul>
              )}

              {feature.cta && (
                <Link to={feature.cta.link} className="btn btn-outline" style={{ display: 'inline-flex', alignSelf: 'flex-start' }}>
                  {feature.cta.text} <ArrowRight size={18} />
                </Link>
              )}
            </div>

            <div className="feature-image-container">
              <ImageCarousel images={feature.images} renderFrame={renderImageFrame} />
            </div>
          </section>
        ))}

        {/* Final Responsive Showcase */}
        <section className="feature-section" style={{ display: 'block', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '4rem' }}>Works Anywhere You Are</h2>
          <div className="responsive-grid">
            <div className="mobile-mockup-group" style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              {SHOWCASE_IMAGES.mobile.map((img, i) => (
                <div key={i} className="phone-frame">
                  <img src={img} alt="Mobile Showcase" className="mockup-image" />
                </div>
              ))}
            </div>
            {renderImageFrame(SHOWCASE_IMAGES.web)}
          </div>
        </section>
      </div>

      {/* Final CTA */}
      <section style={{ padding: '6rem 0', textAlign: 'center', background: 'var(--text-primary)', color: 'white', marginTop: '4rem' }}>
        <div className="container">
          <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '2rem' }}>Ready to Take Control?</h2>
          <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            Join the growing community who have transformed their financial health with Expensico's beautiful automation.
          </p>
          <Link to={getStartedLink} className="btn btn-primary btn-lg" style={{ padding: '1.2rem 3rem' }}>
            {user ? 'Continue Tracking' : 'Get Started for Free'} <ArrowRight size={20} style={{ marginLeft: '1rem' }} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Features;
