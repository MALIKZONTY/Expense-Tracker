import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const mockData = [
  { name: 'Mon', amount: 300 },
  { name: 'Tue', amount: 450 },
  { name: 'Wed', amount: 200 },
  { name: 'Thu', amount: 600 },
  { name: 'Fri', amount: 400 },
  { name: 'Sat', amount: 800 },
  { name: 'Sun', amount: 250 },
];

export default function LandingPage() {
  return (
    <div className="landing-page" style={{ padding: '2rem 1rem', overflow: 'hidden', position: 'relative' }}>
      
      {/* Background glow effects */}
      <div className="bg-glow" style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40vw', height: '40vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(255,255,255,0) 70%)', zIndex: -1, animation: 'pulse 10s infinite alternate' }} />
      <div className="bg-glow" style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '30vw', height: '30vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(255,255,255,0) 70%)', zIndex: -1, animation: 'pulse 8s infinite alternate-reverse' }} />

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Top Hero Section */}
        <div className="hero-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '3rem', minHeight: '60vh' }}>
          
          {/* Left Content */}
          <div className="fade-in-up hero-left" style={{ flex: 1, maxWidth: '600px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'inline-block', alignSelf: 'flex-start', padding: '0.4rem 1rem', background: 'rgba(59,130,246,0.1)', color: 'var(--primary-color)', borderRadius: '30px', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '1.5rem', border: '1px solid rgba(59,130,246,0.2)' }}>
              ✨ The Smart Way to Track
            </div>
            <h1 className="hero-h1" style={{ fontSize: '4.5rem', color: 'var(--text-color)', marginBottom: '1.5rem', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.04em' }}>
              Expensico
            </h1>
            <div style={{ marginBottom: '2.5rem' }}>
              <p style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Take the stress out of saving.</p>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Stop Guessing.</h2>
            </div>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              Stop fighting with messy spreadsheets. Whether it's a <strong>PhonePe</strong> transfer to a friend or a <strong>Cash</strong> swap for dinner, Expensico tracks your money accurately across every digital wallet and physical pocket.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/register" className="btn btn-primary btn-lg">
                Create Account
              </Link>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="fade-in-up" style={{ flex: 1, display: 'flex', justifyContent: 'center', animationDelay: '0.2s' }}>
            <img 
              src="/hero.png" 
              alt="3D Aesthetic Finance Illustration" 
              className="float-anim"
              style={{ width: '100%', maxWidth: '500px', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))' }}
              // No loading="lazy" here as this is the LCP image
            />
          </div>

        </div>

        {/* Bottom Graphic Section */}
        <div className="fade-in-up" style={{ marginTop: '5rem', animationDelay: '0.4s', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>See Your Money Move</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            Get a clear view of your weekly spending. Our simple charts organize everything for you, so you can stop worrying about the math and start focusing on your goals.
          </p>
          
          <div className="card" style={{ maxWidth: '800px', margin: '0 auto', background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.4)', borderRadius: '24px', padding: '2rem', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
            <div style={{ height: '300px', width: '100%' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockData}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--text-secondary)' }} dy={10} />
                  <Tooltip 
                    cursor={{ fill: 'rgba(59,130,246,0.05)' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                    formatter={(value) => [`₹${value}`, 'Amount']}
                  />
                  <Bar dataKey="amount" radius={[8, 8, 8, 8]}>
                    {mockData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 5 ? 'var(--primary-color)' : '#93c5fd'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
