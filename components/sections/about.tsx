'use client';

import { useEffect, useRef } from 'react';
import { Brain, Code as Code2, Database, Guitar, BookOpen, Film, Lightbulb, Cpu } from 'lucide-react';

const STATS = [
  { label: 'Projects Completed', value: '5+' },
  { label: 'Technologies', value: '12+' },
  { label: 'Years Learning', value: '3+' },
  { label: 'Lines of Code', value: '10k+' },
];

const INTERESTS = [
  { icon: Guitar, label: 'Guitar', color: 'text-amber-300', bg: 'bg-amber-400/10 border-amber-400/20' },
  { icon: BookOpen, label: 'Tech & Self-improvement Books', color: 'text-emerald-400', bg: 'bg-emerald-400/10 border-emerald-400/20' },
  { icon: Film, label: 'Sci-fi & Music-inspired Series', color: 'text-green-400', bg: 'bg-green-400/10 border-green-400/20' },
  { icon: Cpu, label: 'AI Research', color: 'text-teal-400', bg: 'bg-teal-400/10 border-teal-400/20' },
];

const PASSIONS = [
  { icon: Brain, label: 'Artificial Intelligence', desc: 'Building intelligent systems that learn' },
  { icon: Database, label: 'Data Engineering', desc: 'Transforming raw data into insights' },
  { icon: Code2, label: 'Software Development', desc: 'Clean, maintainable, scalable code' },
  { icon: Lightbulb, label: 'NLP Research', desc: 'Understanding human language with machines' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 md:py-32 px-4 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/5 rounded-full filter blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-black section-title mb-4">
            Who <span className="text-emerald-500">I Am</span>

          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Bio */}
          <div className="reveal-left space-y-6">
            {/* Avatar / Visual */}
            <div className="relative w-fit mx-auto lg:mx-0">
              <div className="w-48 h-48 rounded-2xl bg-emerald-500 flex items-center justify-center animate-morph">
                <div className="text-white font-black text-5xl font-poppins">Khadija</div>
              </div>
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-emerald-400 rounded-lg flex items-center justify-center animate-float">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-emerald-400 rounded-lg flex items-center justify-center animate-float delay-300">
                <Code2 className="w-5 h-5 text-white" />
              </div>
            </div>

            <div className="space-y-4 mt-8">
              <h3 className="text-2xl font-bold">
                Hi, I'm <span>Khadija Kriaa</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a 2nd-year{' '}
                <span className="text-foreground font-medium">Data & Decisional Systems Engineering</span>{' '}
                student at <span className="text-emerald-400 font-medium">ENET'Com</span>, Tunisia. I thrive at
                the intersection of data, intelligence, and innovation — building systems that turn raw information
                into meaningful decisions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My passion lies in{' '}
                <span className="text-emrald-400 font-medium">Artificial Intelligence</span> ,{' '}
                <span className="text-emrald-400 font-medium">Natural Language Processing</span>,{' '}
                and{' '}<span className="text-emrald-400 font-medium">Machine Learning</span> .
                I'm driven by curiosity and a love for
                solving complex, real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond code, you'll find me playing guitar, diving into tech or self-improvement books, or
                watching a thought-provoking sci-fi series. I believe the best engineers are also the most
                well-rounded humans.
              </p>
            </div>

            {/* Interests */}
            <div className="flex flex-wrap gap-2 pt-2">
              {INTERESTS.map(({ icon: Icon, label, color, bg }) => (
                <div
                  key={label}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm ${bg} ${color}`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats + Passions */}
          <div className="reveal-right space-y-8">

            {/* Passions */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Core Focus Areas</h4>
              {PASSIONS.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-green-500/40 transition-all duration-300 cursor-default"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">{label}</div>
                    <div className="text-xs text-muted-foreground">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
