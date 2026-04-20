import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, ArrowRight, Search } from 'lucide-react';
import blogPosts from '../content/blogs';

export default function BlogList() {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container" style={{ padding: '4rem 1.25rem', maxWidth: '1200px' }}>
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', fontWeight: 900, marginBottom: '1.25rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
          Expensico Blog
        </h1>
        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          Expert insights on personal finance, wealth building, and mastering your money with intelligent tracking.
        </p>
      </header>

      {/* Search Bar */}
      <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto 5rem auto' }}>
        <div style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }}>
          <Search size={20} />
        </div>
        <input 
          type="text" 
          placeholder="Search articles..." 
          className="form-control"
          style={{ paddingLeft: '3.5rem', paddingRight: '1rem', height: '3.5rem', borderRadius: '16px', fontSize: '1.1rem', background: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredPosts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-secondary)' }}>
          <BookOpen size={48} style={{ marginBottom: '1rem', opacity: 0.2 }} />
          <p>No articles found matching your search.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {filteredPosts.map(post => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="card shadow-glow" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%', transition: 'transform 0.3s ease', overflow: 'hidden', padding: 0 }}>
              <div className="blog-card-inner" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span className="badge badge-income" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {post.category || 'Finance Guide'}
                  </span>
                </div>
                
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: '1.3' }}>
                  {post.title}
                </h2>
                
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem', flex: 1 }}>
                  {post.description.length > 150 ? post.description.substring(0, 150) + '...' : post.description}
                </p>

                <div className="blog-card-footer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', marginTop: 'auto' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                    <Calendar size={14} /> {post.date}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--primary-color)', fontWeight: 700, fontSize: '0.9rem' }}>
                    Read Post <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
