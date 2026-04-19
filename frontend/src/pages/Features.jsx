import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Smartphone, Globe, ArrowRight, Zap, CheckCircle, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

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
      'Instant breakdown of income vs. expense ratios',
      'At-a-glance summary of top spending categories'
    ]
  },
  {
    id: 'mobile',
    title: 'Precision Tracking on the Go',
    description: 'Designed for the speed of real life. Log every transaction the moment it happens with our mobile-first architecture. Whether you are paying for coffee or receiving a paycheck, SmartTracker ensures your records are updated in seconds with zero friction.',
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
    description: 'More than just a tracker—SmartTracker is your partner in building wealth. Access an exclusive library of 20+ expert-written articles covering everything from tax-saving strategies to the psychology of spending. We provide the tools *and* the knowledge.',
    icon: Globe,
    badge: 'Education',
    images: ['/web-5.png', '/web-6.png'],
    layout: 'web',
    cta: { text: 'Explore the Blog', link: '/blog' },
    bulletPoints: [
      '20+ long-form professional financial guides',
      'Deep dives into debt management and investing',
      'Actionable advice for first-time home buyers',
      'Regularly updated content for AdSense authority'
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
        {images.length > 1 && (
          <button className="carousel-nav prev" onClick={prev}><ChevronLeft size={20} /></button>
        )}

        <div className="carousel-slide">
          {renderFrame(images[currentIndex])}
        </div>

        {images.length > 1 && (
          <button className="carousel-nav next" onClick={next}><ChevronRight size={20} /></button>
        )}
      </div>

      {images.length > 1 && (
        <div className="carousel-indicators">
          {images.map((_, i) => (
            <div
              key={i}
              className={`indicator ${i === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Features = () => {
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
          <img src={img} alt="Product screenshot" className="mockup-image" />
        </div>
      );
    }
    return (
      <div className="phone-frame">
        <img src={img} alt="Mobile screenshot" className="mockup-image" />
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
            Take an in-depth tour of SmartTracker—from high-level visual dashboards to granular transaction tracking on any device.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/register" className="btn btn-primary btn-lg">Get Started Now</Link>
            <a href="#tour" className="btn btn-outline btn-lg">Start the Tour</a>
          </div>
        </div>
      </section>

      <div id="tour" className="container">
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
                <Link to={feature.cta.link} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-color)', fontWeight: 700, textDecoration: 'none' }}>
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
            {renderImageFrame(SHOWCASE_IMAGES.web)}
            <div className="mobile-mockup-group" style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
              {SHOWCASE_IMAGES.mobile.map((img, i) => (
                <div key={i} className="phone-frame" style={{ marginTop: i % 2 !== 0 ? '3rem' : 0, width: '180px' }}>
                  <img src={img} alt="Mobile Showcase" className="mockup-image" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Final CTA */}
      <section style={{ padding: '8rem 0', textAlign: 'center', background: 'var(--text-primary)', color: 'white', marginTop: '4rem' }}>
        <div className="container">
          <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '2rem' }}>Ready to Take Control?</h2>
          <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            Join thousands of users who have transformed their financial health with SmartTracker's beautiful automation.
          </p>
          <Link to="/register" className="btn btn-primary btn-lg" style={{ padding: '1.2rem 3rem' }}>
            Get Started for Free <ArrowRight size={20} style={{ marginLeft: '1rem' }} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Features;
