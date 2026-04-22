import os
import json
import re

# This script generates high-authority static HTML files for the blog.
# It includes JSON-LD schema, premium branding, and intelligent internal linking.

def get_related_posts(current_slug, current_category, all_posts, limit=3):
    # 1. Try to find posts in the same category
    related = [p for p in all_posts if p['category'] == current_category and p['slug'] != current_slug]
    
    # 2. If not enough, add other posts
    if len(related) < limit:
        others = [p for p in all_posts if p['category'] != current_category and p['slug'] != current_slug]
        related.extend(others[:limit - len(related)])
    
    return related[:limit]

def markdown_to_html(md_content):
    # Simple converter for the specific structure used in blogs.js
    # Convert headers
    content = re.sub(r'^# (.*)$', r'<h1>\1</h1>', md_content, flags=re.M)
    content = re.sub(r'^### (.*)$', r'<h3>\1</h3>', content, flags=re.M)
    
    # Convert images
    content = re.sub(r'!\[(.*?)\]\((.*?)\)', r'<div class="blog-image-container"><img src="\2" alt="\1"></div>', content)
    
    # Convert bold
    content = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', content)
    
    # Convert lists
    # This is a bit simplified but works for our standard bullet lists
    content = re.sub(r'^- (.*)$', r'<li>\1</li>', content, flags=re.M)
    # Wrap series of <li> in <ul> (very simple/naive approach)
    content = re.sub(r'(<li>.*</li>(\n<li>.*</li>)*)', r'<ul>\1</ul>', content)
    
    # Paragraphs (wrap blocks of text that aren't tags)
    lines = content.split('\n')
    new_lines = []
    for line in lines:
        if line.strip() and not line.startswith('<'):
            new_lines.append(f'<p>{line}</p>')
        else:
            new_lines.append(line)
    
    return '\n'.join(new_lines)

def generate_blog_html(post, related_posts):
    slug = post['slug']
    title = post['title']
    description = post['description']
    category = post['category']
    date = post['date']
    content_md = post['content']
    
    content_html = markdown_to_html(content_md)
    
    # Build Related Articles section
    related_html = ""
    if related_posts:
        related_html = '<div class="related-articles"><h2>Recommended Reading</h2><div class="related-grid">'
        for rp in related_posts:
            related_html += f"""
            <a href="/blog/{rp['slug']}" class="related-card">
                <span class="related-cat">{rp['category']}</span>
                <h3>{rp['title']}</h3>
                <span class="read-more">Read Article →</span>
            </a>"""
        related_html += '</div></div>'

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} | Expensico Finance Blog</title>
    <meta name="description" content="{description}">
    <link rel="canonical" href="https://www.expensico.com/blog/{slug}" />
    
    <!-- JSON-LD for SEO -->
    <script type="application/ld+json">
    {{
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "{title}",
      "description": "{description}",
      "author": {{
        "@type": "Organization",
        "name": "Expensico Finance"
      }},
      "datePublished": "{date}",
      "publisher": {{
        "@type": "Organization",
        "name": "Expensico",
        "logo": {{
          "@type": "ImageObject",
          "url": "https://www.expensico.com/logo.png"
        }}
      }}
    }}
    </script>

    <style>
        :root {{ --primary-color: #3b82f6; --text-primary: #1e293b; --text-secondary: #64748b; --border-color: #e2e8f0; }}
        body {{ font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.8; color: var(--text-primary); margin: 0; background-color: #f8fafc; }}
        
        .nav-mock {{ background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(20px); border-bottom: 1px solid var(--border-color); padding: 0.75rem 2rem; display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 1000; }}
        .nav-brand-group {{ display: flex; align-items: center; gap: 0.75rem; text-decoration: none; }}
        .nav-brand-icon {{ background: var(--primary-color); color: white; padding: 0.4rem; border-radius: 10px; display: flex; align-items: center; justify-content: center; }}
        .nav-brand-text {{ display: flex; flex-direction: column; line-height: 1.1; }}
        .nav-brand {{ font-size: 1.5rem; font-style: italic; font-weight: 900; color: var(--primary-color); letter-spacing: -0.04em; }}
        .nav-sub-brand {{ font-size: 0.7rem; font-weight: 600; color: var(--text-secondary); opacity: 0.8; letter-spacing: 0.05em; text-transform: uppercase; }}
        
        .nav-links {{ display: flex; gap: 1.5rem; align-items: center; }}
        .nav-links a {{ text-decoration: none; color: var(--text-secondary); font-weight: 600; font-size: 0.9rem; transition: color 0.2s; }}
        .nav-links a:hover {{ color: var(--primary-color); }}
        .btn-primary {{ background: var(--primary-color); color: white !important; padding: 0.6rem 1.2rem; border-radius: 10px; font-weight: 700; }}

        .container {{ max-width: 900px; margin: 4rem auto; padding: 0 1.5rem; }}
        .blog-header {{ margin-bottom: 3rem; }}
        .blog-meta {{ display: flex; gap: 1rem; color: var(--text-secondary); font-size: 0.9rem; font-weight: 600; margin-bottom: 1rem; }}
        .category-tag {{ background: rgba(59, 130, 246, 0.1); color: var(--primary-color); padding: 0.2rem 0.8rem; border-radius: 100px; }}
        
        .blog-content {{ background: white; padding: 4rem; border-radius: 32px; box-shadow: 0 10px 40px rgba(0,0,0,0.03); border: 1px solid var(--border-color); }}
        .blog-content h1 {{ font-size: 3rem; line-height: 1.2; letter-spacing: -0.04em; margin-bottom: 2rem; }}
        .blog-content h3 {{ font-size: 1.5rem; margin-top: 2.5rem; margin-bottom: 1rem; }}
        .blog-content p {{ margin-bottom: 1.5rem; font-size: 1.15rem; color: #334155; }}
        .blog-image-container {{ margin: 2.5rem -4rem; text-align: center; background: #f1f5f9; }}
        .blog-image-container img {{ max-width: 100%; height: auto; display: block; margin: 0 auto; }}
        
        .related-articles {{ margin-top: 5rem; border-top: 1px solid var(--border-color); padding-top: 4rem; }}
        .related-articles h2 {{ font-size: 2rem; margin-bottom: 2.5rem; letter-spacing: -0.02em; }}
        .related-grid {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; }}
        .related-card {{ background: white; padding: 2rem; border-radius: 24px; border: 1px solid var(--border-color); text-decoration: none; color: inherit; transition: transform 0.2s, box-shadow 0.2s; }}
        .related-card:hover {{ transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,0,0,0.05); }}
        .related-cat {{ font-size: 0.75rem; font-weight: 800; color: var(--primary-color); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 0.75rem; }}
        .related-card h3 {{ margin: 0 0 1rem 0; font-size: 1.1rem; line-height: 1.4; }}
        .read-more {{ font-size: 0.85rem; font-weight: 700; color: var(--primary-color); }}

        footer {{ margin-top: 6rem; padding: 4rem 2rem; background: white; border-top: 1px solid var(--border-color); text-align: center; }}
        .footer-logo {{ display: flex; align-items: center; justify-content: center; gap: 0.5rem; text-decoration: none; margin-bottom: 1.5rem; }}
        .footer-links {{ display: flex; justify-content: center; gap: 2rem; margin-bottom: 2rem; flex-wrap: wrap; }}
        .footer-links a {{ text-decoration: none; color: var(--text-secondary); font-size: 0.9rem; font-weight: 500; }}
        .copyright {{ color: var(--text-secondary); font-size: 0.85rem; }}

        @media (max-width: 768px) {{
            .blog-content {{ padding: 2rem; }}
            .blog-content h1 {{ font-size: 2.25rem; }}
            .blog-image-container {{ margin: 2rem -2rem; }}
        }}
    </style>
</head>
<body>
    <nav class="nav-mock">
        <a href="/" class="nav-brand-group">
            <div class="nav-brand-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <div class="nav-brand-text">
                <div class="nav-brand">Expensico</div>
                <div class="nav-sub-brand">Finance Intelligence</div>
            </div>
        </a>
        <div class="nav-links">
            <a href="/">Home</a>
            <a href="/faq">FAQ</a>
            <a href="/login">Login</a>
            <a href="/register" class="btn-primary">Sign Up</a>
        </div>
    </nav>

    <div class="container">
        <article class="blog-content">
            <div class="blog-meta">
                <span class="category-tag">{category}</span>
                <span>•</span>
                <span>{date}</span>
            </div>
            {content_html}
        </article>

        {related_html}
    </div>

    <footer>
        <a href="/" class="footer-logo">
            <span style="font-weight: 900; color: var(--primary-color); font-size: 1.5rem; font-style: italic;">Expensico</span>
        </a>
        <div class="footer-links">
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-and-conditions">Terms</a>
            <a href="/cookie-policy">Cookie Policy</a>
            <a href="/faq">FAQ</a>
        </div>
        <div class="copyright">© 2026 Expensico Finance. All rights reserved. Professional transparency through digital ledgers.</div>
    </footer>
</body>
</html>"""
    return html

def main():
    # 1. Read blogs.js
    blogs_path = 'src/content/blogs.js'
    if not os.path.exists(blogs_path):
        print(f"Error: {blogs_path} not found")
        return

    with open(blogs_path, 'r') as f:
        js_content = f.read()

    # Very naive extraction of the blogPost array from the JS file
    # We look for the JSON-like objects
    # Note: This is hacky but effective for this specific file structure
    post_blocks = re.findall(r'\{[^{]*?slug:.*?,[^{]*?content: `.*?`[^{]*?\}', js_content, re.DOTALL)
    
    posts = []
    for block in post_blocks:
        post = {}
        # Simple regex extractions
        post['slug'] = re.search(r"slug: '(.*?)'", block).group(1)
        post['title'] = re.search(r"title: '(.*?)'", block).group(1)
        post['description'] = re.search(r"description: '(.*?)'", block).group(1)
        post['date'] = re.search(r"date: '(.*?)'", block).group(1)
        post['category'] = re.search(r"category: '(.*?)'", block).group(1)
        post['content'] = re.search(r"content: `(.*?)`", block, re.DOTALL).group(1)
        posts.append(post)

    print(f"Extracted {len(posts)} posts. Generating HTML...")

    # Create directory
    output_dir = 'public/blog'
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    for post in posts:
        related = get_related_posts(post['slug'], post['category'], posts)
        html = generate_blog_html(post, related)
        
        file_path = f"{output_dir}/{post['slug']}.html"
        with open(file_path, 'w') as f:
            f.write(html)
        print(f"Generated: {file_path}")

if __name__ == "__main__":
    main()
