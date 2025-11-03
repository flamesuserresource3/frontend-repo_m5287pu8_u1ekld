import React from 'react';
import { Star, Shield, Users, Settings, BookOpen } from 'lucide-react';

const reasons = [
  {
    icon: Star,
    title: 'Conținut riguros și clar',
    desc: 'Explicații pas cu pas, exemple vizuale și structuri de învățare pe niveluri.'
  },
  {
    icon: BookOpen,
    title: 'LaTeX pentru formule',
    desc: 'Articole și lecții redactate curat, cu formule matematice LaTeX bine prezentate.'
  },
  {
    icon: Users,
    title: 'Conturi și profil',
    desc: 'Salvezi progresul, urmărești articole și personalizezi experiența ta.'
  },
  {
    icon: Settings,
    title: 'Panou de administrare',
    desc: 'Administrare pentru autori și admini: articole, utilizatori, moderare.'
  },
  {
    icon: Shield,
    title: 'Siguranță și performanță',
    desc: 'Tehnologie modernă, interfețe rapide, temă cosmică dark cu accente violet.'
  }
];

export default function WhyUs() {
  return (
    <section className="relative w-full bg-gradient-to-b from-black via-[#0a0a0e] to-[#0b0b10] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.14),rgba(0,0,0,0)_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="mb-3 text-center text-3xl font-bold tracking-tight sm:text-4xl">De ce noi?</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-violet-200/80">
          Îmbinăm rigoarea matematică cu un design futurist: totul pentru a te ajuta să înțelegi și să performezi.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/5 bg-[#0f0f15]/60 p-6 backdrop-blur transition hover:border-violet-500/40 hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.6)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600/20 text-violet-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-1 text-lg font-semibold">{title}</h3>
              <p className="text-sm leading-relaxed text-violet-200/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
