import re

with open('src/content/blogs.js', 'r') as f:
    text = f.read()

blogs = re.findall(r"slug:\s*'([^']+)',\s*title:\s*'([^']+)'", text)
print(f"Found {len(blogs)} blogs.")

blocks = text.split("`\n  }")

if len(blocks) == len(blogs) + 1:
    new_text = ""
    for i, block in enumerate(blocks[:-1]):
        r1 = blogs[(i+1)%len(blogs)]
        r2 = blogs[(i+2)%len(blogs)]
        
        related_md = f"\n\n---\n### Related Reading\n* [Read our guide on {r1[1]}](/blog/{r1[0]})\n* [Learn more about {r2[1]}](/blog/{r2[0]})"
        new_text += block + related_md + "`\n  }"
    new_text += blocks[-1]
    
    with open('src/content/blogs.js', 'w') as f:
        f.write(new_text)
    print("Updated blogs.js successfully.")
else:
    print(f"Expected {len(blogs)+1} parts, got {len(blocks)}")

