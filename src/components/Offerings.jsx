import React from 'react';
import { BookOpen, Calculator, FileText } from 'lucide-react';

const items = [
  {
    icon: BookOpen,
    title: 'Lecții de matematică',
    desc: 'Cursuri structurate pe nivel (Gimnaziu, Liceu, Olimpiadă) cu explicații clare și exemple vizuale.'
  },
  {
    icon: Calculator,
    title: 'Probleme rezolvate',
    desc: 'Colecții bogate de probleme, soluții pas cu pas și sfaturi pentru examene.'
  },
  {
    icon: FileText,
    title: 'Blog de noutăți și articole',
    desc: 'Articole despre concepte, tehnici și noutăți din lumea matematicii.'
  }
];

export default function Offerings() {
  return (
    <section id="oferim" className="relative w-full bg-gradient-to-b from-black via-black to-[#0b0b0f] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),rgba(0,0,0,0)_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="mb-2 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Ce oferim
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-violet-200/80">
          Conținut riguros, prezentat modern, cu accent pe înțelegere și aplicare.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/5 bg-[#0d0d12]/60 p-6 backdrop-blur transition hover:border-violet-500/40 hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.6)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600/20 text-violet-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{title}</h3>
              <p className="text-sm leading-relaxed text-violet-200/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
