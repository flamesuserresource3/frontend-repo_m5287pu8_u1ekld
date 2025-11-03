import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const handleScroll = () => {
    const el = document.getElementById('oferim');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ns1MlpZQDFS29uiL/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Purple glow and vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.25),rgba(0,0,0,0)_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-4 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-300 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
          Matematică dincolo de orizontul evenimentelor
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-base text-violet-200/90 sm:text-lg">
          Lecții, articole și probleme care te trag în gaura neagră a cunoașterii.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <button
            onClick={handleScroll}
            className="rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition hover:scale-[1.02] hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400"
          >
            Începe să înveți
          </button>
          <a
            href="/blog"
            className="rounded-full border border-violet-500/60 bg-black/40 px-6 py-3 text-sm font-semibold text-violet-200 backdrop-blur transition hover:scale-[1.02] hover:border-violet-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-violet-400"
          >
            Vezi articolele de pe blog
          </a>
        </div>
      </div>
    </section>
  );
}
