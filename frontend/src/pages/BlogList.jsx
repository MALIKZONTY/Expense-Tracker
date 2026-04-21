import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { BookOpen, Calendar, ArrowRight, Search, Hash } from 'lucide-react';
import blogPosts from '../content/blogs';

export default function BlogList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Update selected category when URL changes
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
    } else {
      setSelectedCategory('All');
    }
  }, [searchParams]);

  // Extract unique categories
  const categories = ['All', ...new Set(blogPosts.map(post => post.category).filter(Boolean))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCategoryClick = (category) => {
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
    setSelectedCategory(category);
  };

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

      {/* Search & Category Filter Section */}
      <div style={{ maxWidth: '800px', margin: '0 auto 5rem auto' }}>
        <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
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

        {/* Category Navigation */}
        <nav 
          aria-label="Blog categories" 
          style={{ 
            marginTop: '2rem',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          {/* Scroll Container */}
          <div 
            className="category-scroll-container"
            style={{ 
              display: 'flex', 
              gap: '0.75rem', 
              overflowX: 'auto', 
              padding: '0.5rem 1rem 1.5rem 1rem',
              maxWidth: '100%',
              scrollbarWidth: 'none', // Firefox
              msOverflowStyle: 'none', // IE/Edge
              WebkitOverflowScrolling: 'touch',
              justifyContent: 'flex-start', // Default for scrolling
              maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)', // Fade edges
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
            }}
          >
            {/* CSS to hide scrollbar but keep functionality */}
            <style>{`
              .category-scroll-container::-webkit-scrollbar {
                display: none;
              }
              @media (min-width: 1024px) {
                .category-scroll-container {
                  justify-content: center !important;
                  overflow-x: visible !important;
                  mask-image: none !important;
                  WebkitMaskImage: none !important;
                  flex-wrap: wrap;
                }
              }
            `}</style>

            {categories.map(category => {
              const isActive = selectedCategory === category;
              const targetUrl = category === 'All' ? '/blog' : `/blog?category=${encodeURIComponent(category)}`;
              
              return (
                <Link
                  key={category}
                  to={targetUrl}
                  style={{
                    padding: '0.6rem 1.25rem',
                    borderRadius: '30px',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--primary-color)' : 'var(--border-color)',
                    background: isActive ? 'var(--primary-color)' : 'rgba(255, 255, 255, 0.8)',
                    color: isActive ? 'white' : 'var(--text-secondary)',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: isActive ? '0 8px 16px rgba(59,130,246,0.25)' : '0 2px 4px rgba(0,0,0,0.02)',
                    flexShrink: 0
                  }}
                  onMouseOver={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = 'var(--primary-color)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  <Hash size={14} style={{ opacity: 0.6 }} /> {category}
                </Link>
              );
            })}
          </div>
        </nav>
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
