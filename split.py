import os

app_path = r"i:\Du lieu cho Antigravity HOT\web-padme\frontend\src\App.jsx"
components_dir = r"i:\Du lieu cho Antigravity HOT\web-padme\frontend\src\components"
layout_dir = os.path.join(components_dir, "layout")
sections_dir = os.path.join(components_dir, "sections")

os.makedirs(layout_dir, exist_ok=True)
os.makedirs(sections_dir, exist_ok=True)

with open(app_path, "r", encoding="utf-8") as f:
    text = f.read()

def extract_between(text, start_comment, end_comment):
    start = text.find(start_comment)
    if start == -1: return ""
    end = text.find(end_comment, start)
    if end == -1: return ""
    return text[start + len(start_comment):end].strip()

header = extract_between(text, "{/* TopNavBar */}", "<main>")
hero = extract_between(text, "{/* Hero Section */}", "{/* About Us Section */}")
about = extract_between(text, "{/* About Us Section */}", "{/* Services Section */}")
services = extract_between(text, "{/* Services Section */}", "{/* Featured Products Section */}")
products = extract_between(text, "{/* Featured Products Section */}", "{/* Asymmetric Feature Highlight Section (Redesigned Contact) */}")
contact = extract_between(text, "{/* Asymmetric Feature Highlight Section (Redesigned Contact) */}", "{/* Tax Information Pre-footer */}")
tax = extract_between(text, "{/* Tax Information Pre-footer */}", "</main>")
footer = extract_between(text, "{/* Footer */}", "</>")

def write_comp(path, name, content):
    content = content.strip()
    comp_str = f"import React from 'react';\n\nconst {name} = () => {{\n  return (\n    <>\n      {content}\n    </>\n  );\n}};\n\nexport default {name};\n"
    with open(path, "w", encoding="utf-8") as f:
        f.write(comp_str)

write_comp(os.path.join(layout_dir, "Header.jsx"), "Header", header)
write_comp(os.path.join(layout_dir, "Footer.jsx"), "Footer", footer)
write_comp(os.path.join(sections_dir, "Hero.jsx"), "Hero", hero)
write_comp(os.path.join(sections_dir, "About.jsx"), "About", about)
write_comp(os.path.join(sections_dir, "Services.jsx"), "Services", services)
write_comp(os.path.join(sections_dir, "Products.jsx"), "Products", products)
write_comp(os.path.join(sections_dir, "Contact.jsx"), "Contact", contact)
write_comp(os.path.join(sections_dir, "TaxInfo.jsx"), "TaxInfo", tax)

new_app = """import React, { useEffect } from 'react';
import './index.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Products from './components/sections/Products';
import Contact from './components/sections/Contact';
import TaxInfo from './components/sections/TaxInfo';

function App() {
  useEffect(() => {
    // Delay slightly to ensure React elements are rendered before observing
    setTimeout(() => {
      const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
      };

      const revealObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('active');
              }
          });
      }, observerOptions);

      document.querySelectorAll('.reveal').forEach(el => {
          revealObserver.observe(el);
      });
    }, 100);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Contact />
        <TaxInfo />
      </main>
      <Footer />
    </>
  );
}

export default App;
"""
with open(app_path, "w", encoding="utf-8") as f:
    f.write(new_app)
print("Split done")
