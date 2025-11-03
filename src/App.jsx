import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import WhyUs from './components/WhyUs.jsx';
import BlogPreview from './components/BlogPreview.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <Hero />
      <div id="de-ce-noi">
        <WhyUs />
      </div>
      <BlogPreview />
    </div>
  );
}

export default App;
