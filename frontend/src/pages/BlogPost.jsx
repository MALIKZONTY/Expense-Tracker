import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';
import blogPosts from '../content/blogs';

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = blogPosts.find(p => p.slug === slug);
    setPost(foundPost);
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return (
    <div className="container" style={{ textAlign: 'center', padding: '8rem' }}>
      <h1>Article Not Found</h1>
      <Link to="/blog" className="btn btn-primary" style={{ marginTop: '2rem' }}>Back to Blog</Link>
    </div>
  );

  return (
    <article className="container" style={{ padding: '4rem 1rem 8rem 1rem', maxWidth: '850px' }}>
      <header style={{ marginBottom: '4rem' }}>
        <Link to="/blog" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '3rem', fontWeight: 600, fontSize: '0.95rem' }}>
          <ArrowLeft size={18} /> Back to Blog
        </Link>

        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem' }}>
          <span className="badge badge-income" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {post.category || 'Financial Wisdom'}
          </span>
        </div>

        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: '1.2', color: 'var(--text-primary)', marginBottom: '2rem', letterSpacing: '-0.03em' }}>
          {post.title}
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '2.5rem', borderBottom: '1px solid var(--border-color)', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              <Calendar size={18} /> {post.date}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              <User size={18} /> Expensico Editor
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              <Clock size={18} /> 10 min read
            </div>
          </div>
        </div>
      </header>

      <div className="blog-content" style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#334155' }}>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}
