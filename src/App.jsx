import React from 'react';
import Hero from './components/Hero.jsx';
import Offerings from './components/Offerings.jsx';
import BlogPreview from './components/BlogPreview.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <Offerings />
      <BlogPreview />
      <Footer />
    </div>
  );
}

export default App;
