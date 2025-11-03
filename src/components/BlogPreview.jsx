import React from 'react';

const posts = [
  {
    title: 'Inducția matematică: de la bază la infinit',
    slug: 'inductie-matematica',
    date: '12 septembrie 2025',
    excerpt: 'Cum folosești corect inducția matematică pentru a demonstra proprietăți generale despre numere naturale.',
    tags: ['Liceu', 'Teorie', 'LaTeX']
  },
  {
    title: 'Trucuri pentru ecuații cuadratice',
    slug: 'trucuri-ecuatii-cuadratice',
    date: '2 septembrie 2025',
    excerpt: 'Identități, factorizări și metode rapide pentru a rezolva ecuațiile de gradul al doilea. Exemplu: x^2 + y^2 \\ge 2xy.',
    tags: ['Gimnaziu', 'Tehnici', 'LaTeX']
  },
  {
    title: 'Inegalitatea lui Cauchy-Schwarz explicată',
    slug: 'cauchy-schwarz-explicata',
    date: '28 august 2025',
    excerpt: 'Intuiție geometrică și aplicații ale uneia dintre cele mai importante inegalități. Formulă: (a_1^2 + \\dots + a_n^2)(b_1^2 + \\dots + b_n^2) \\ge (a_1b_1 + \\dots + a_nb_n)^2.',
    tags: ['Olimpiadă', 'Analiză', 'LaTeX']
  }
];

export default function BlogPreview() {
  return (
    <section className="relative w-full bg-[#0b0b0f] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(124,58,237,0.15),rgba(0,0,0,0)_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Articole recente</h2>
            <p className="mt-2 max-w-xl text-violet-200/80">Articole optimizate pentru formule matematice (LaTeX suportat în paginile de detaliu).</p>
          </div>
          <a
            href="/blog"
            className="shrink-0 rounded-full border border-violet-500/60 bg-black/40 px-4 py-2 text-sm font-semibold text-violet-200 backdrop-blur transition hover:border-violet-400 hover:text-white"
          >
            Vezi toate articolele
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0f0f15]/60 p-6 transition hover:border-violet-500/40 hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.6)]"
            >
              <div className="mb-3 flex flex-wrap items-center gap-2">
                {post.tags.map((t) => (
                  <span key={t} className="rounded-full bg-violet-600/20 px-2.5 py-1 text-xs text-violet-300">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="mb-1 text-lg font-semibold text-white">{post.title}</h3>
              <p className="mb-4 text-sm text-violet-200/80">{post.excerpt}</p>
              <div className="text-xs text-violet-300/80">Publicat pe {post.date}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
