const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '../../content/blog');

exports.getPosts = (req, res) => {
  try {
    if (!fs.existsSync(contentDir)) {
      return res.json([]);
    }
    const files = fs.readdirSync(contentDir);
    const posts = files.filter(f => f.endsWith('.md')).map(file => {
      const slug = file.replace('.md', '');
      const content = fs.readFileSync(path.join(contentDir, file), 'utf-8');
      
      // Simple parse of first line as title, second as description
      const lines = content.split('\\n');
      const title = lines[0].replace('#', '').trim() || slug;
      const description = lines.length > 2 ? lines[2].trim() : 'Read more...';

      return { slug, title, description };
    });
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getPostBySlug = (req, res) => {
  try {
    const { slug } = req.params;
    const filePath = path.join(contentDir, `${slug}.md`);
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'Post not found' });
    }
    const content = fs.readFileSync(filePath, 'utf-8');
    res.json({ slug, content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
