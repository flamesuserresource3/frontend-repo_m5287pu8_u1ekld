import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-black py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-violet-200/80">
          <a href="/" className="hover:text-white">Acasă</a>
          <a href="/blog" className="hover:text-white">Blog</a>
          <a href="/login" className="hover:text-white">Autentificare</a>
          <a href="/register" className="hover:text-white">Înregistrare</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <div className="text-xs text-violet-300/70">
          © {new Date().getFullYear()} Matematică dincolo de orizontul evenimentelor — Toate drepturile rezervate.
        </div>
      </div>
    </footer>
  );
}
