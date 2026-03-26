import re
import os

with open(r"i:\Du lieu cho Antigravity HOT\web-padme\e28ccc9181744545bd5a3c17efbff60d\index.html", "r", encoding="utf-8") as f:
    html_content = f.read()

# EXTRACT PORTIONS
head_match = re.search(r"<head>(.*?)</head>", html_content, re.DOTALL)
head_content = head_match.group(1) if head_match else ""

style_match = re.search(r"<style>(.*?)</style>", html_content, re.DOTALL)
css_content = style_match.group(1).strip() if style_match else ""

body_match = re.search(r"<body.*?>\s*(.*?)\s*<script>", html_content, re.DOTALL)
body_html = body_match.group(1) if body_match else ""

# Remove the inline styles from head to avoid duplication if we move them to index.css
head_content = re.sub(r"<style>.*?</style>", "", head_content, flags=re.DOTALL)

# React App.jsx mapping
body_jsx = body_html.replace('class="', 'className="')
# Self close tags
body_jsx = re.sub(r'<img(.*?)(?<!/)>', r'<img\1/>', body_jsx)
body_jsx = re.sub(r'<input(.*?)(?<!/)>', r'<input\1/>', body_jsx)
body_jsx = re.sub(r'<br(.*?)(?<!/)>', r'<br\1/>', body_jsx)

app_jsx = f"""import React, {{ useEffect }} from 'react';
import './index.css';

function App() {{
  useEffect(() => {{
    const observerOptions = {{
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    }};

    const revealObserver = new IntersectionObserver((entries) => {{
        entries.forEach(entry => {{
            if (entry.isIntersecting) {{
                entry.target.classList.add('active');
            }}
        }});
    }}, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {{
        revealObserver.observe(el);
    }});
    
    return () => revealObserver.disconnect();
  }}, []);

  return (
    <>
      {body_jsx}
    </>
  );
}}

export default App;
"""

index_html = f"""<!DOCTYPE html>
<html lang="vi" class="dark">
  <head>
    {head_content}
  </head>
  <body class="selection:bg-primary-container selection:text-on-primary-container">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
"""

tailwind_base = """@tailwind base;
@tailwind components;
@tailwind utilities;

"""

with open(r"i:\Du lieu cho Antigravity HOT\web-padme\frontend\index.html", "w", encoding="utf-8") as f:
    f.write(index_html)

with open(r"i:\Du lieu cho Antigravity HOT\web-padme\frontend\src\index.css", "w", encoding="utf-8") as f:
    f.write(tailwind_base + css_content)

with open(r"i:\Du lieu cho Antigravity HOT\web-padme\frontend\src\App.jsx", "w", encoding="utf-8") as f:
    f.write(app_jsx)

print("Conversion complete!")
