import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/5 bg-black/40 px-4 py-2 backdrop-blur-md">
          <a href="/" className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.8)]" />
            <span className="text-sm font-semibold tracking-wide text-white">Gaura Neagră Math</span>
          </a>
          <nav className="hidden items-center gap-2 sm:flex">
            <a href="/" className="rounded-full px-4 py-2 text-sm text-violet-200 transition hover:bg-white/5 hover:text-white">Acasă</a>
            <a href="/blog" className="rounded-full px-4 py-2 text-sm text-violet-200 transition hover:bg-white/5 hover:text-white">Blog</a>
            <a href="/login" className="rounded-full px-4 py-2 text-sm text-violet-200 transition hover:bg-white/5 hover:text-white">Autentificare</a>
            <a href="/register" className="rounded-full px-4 py-2 text-sm text-violet-200 transition hover:bg-white/5 hover:text-white">Înregistrare</a>
            <a href="/admin" className="rounded-full px-4 py-2 text-sm text-violet-200 transition hover:bg-white/5 hover:text-white">Admin</a>
          </nav>
          <a href="#oferim" className="rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition hover:scale-[1.02] hover:bg-violet-500">
            Începe
          </a>
        </div>
      </div>
    </header>
  );
}
