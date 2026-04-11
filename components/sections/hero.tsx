'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, Sparkles, Zap, Code, Cpu, Database } from 'lucide-react';

const TAGLINES = [
  'Data Engineering Student',
  'AI & NLP Enthusiast',
  'Building Intelligent Systems',
];

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2.5 + 1,
  dur: Math.random() * 4 + 2,
  dly: Math.random() * 4,
}));

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = TAGLINES[taglineIndex];
    let i = typing ? displayed.length : displayed.length - 1;
    const interval = setInterval(() => {
      if (typing) {
        if (i < target.length) {
          setDisplayed(target.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => setTyping(false), 1800);
        }
      } else {
        if (i >= 0) {
          setDisplayed(target.slice(0, i));
          i--;
        } else {
          clearInterval(interval);
          setTaglineIndex((prev) => (prev + 1) % TAGLINES.length);
          setTyping(true);
        }
      }
    }, typing ? 80 : 45);
    return () => clearInterval(interval);
  }, [taglineIndex, typing, displayed.length]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/20 to-slate-950 dark:from-slate-950 dark:via-emerald-950/20 dark:to-slate-950" />

        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-40" />

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/20 rounded-full filter blur-[80px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full filter blur-[100px] animate-pulse delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-400/10 rounded-full filter blur-[80px]" />

        {/* Stars / Particles */}
        {PARTICLES.map((p) => (
            <div
                key={p.id}
                className="star"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  '--dur': `${p.dur}s`,
                  '--dly': `${p.dly}s`,
                } as React.CSSProperties}
            />
        ))}

        {/* Decorative floating elements */}
        <div className="absolute top-20 right-16 opacity-30 animate-float delay-200">
          <div className="w-12 h-12 border border-emerald-400/40 rounded-lg rotate-12 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-emerald-400" />
          </div>
        </div>
        <div className="absolute bottom-32 left-12 opacity-20 animate-float delay-700">
          <div className="w-10 h-10 border border-teal-400/40 rounded-full flex items-center justify-center">
            <Zap className="w-4 h-4 text-teal-400" />
          </div>
        </div>

        {/* Rotating ring decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-emerald-500/10 rounded-full animate-rotate-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-green-500/10 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '18s' }} />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-32 md:pt-36">

          {/* Name with terminal prompt style */}
          <div className="mb-6 animate-slide-up delay-100">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-tight">
              <span className="text-emerald-400">Khadija Kriaa</span>
            </h1>
          </div>

          {/* Animated tagline */}
          <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6 animate-slide-up delay-200 font-light min-h-[3rem] flex items-center justify-center gap-2">
            <span className="text-emerald-400 font-mono text-lg">&gt;</span>
            <span className="text-gradient-warm font-semibold min-w-[280px] text-left">
            {displayed}
              <span className="cursor-blink">&nbsp;</span>
          </span>
          </div>

          {/* Description with tech icons */}
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-10 animate-slide-up delay-300 leading-relaxed">
            2nd-year Data &amp; Decisional Systems Engineering student at{' '}
            <span className="text-emerald-400 font-medium">ENET'Com</span>
          </p>

          {/* Stats / Metrics */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10 animate-slide-up delay-350">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
              <Database className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-300">6+ Databases</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
              <Cpu className="w-4 h-4 text-teal-400" />
              <span className="text-sm text-teal-300">10+ ML Models</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
              <Code className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-300">5+ Projects</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-400">
            <button
                onClick={scrollToAbout}
                className="group relative px-8 py-3.5 rounded-xl  from-emerald-600 to-green-600 text-white font-semibold text-base hover:scale-105 transition-all duration-300 overflow-hidden shadow-lg shadow-emerald-500/20"
            >
            <span className="relative z-10 flex items-center gap-2">
              Get To Know Me
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
            </button>

            <a
                href="mailto:kriaakhadija784@gmail.com"
                className="px-8 py-3.5 border-2 border-emerald-500/40 rounded-xl text-emerald-400 font-semibold text-base hover:bg-emerald-500/10 hover:border-emerald-400 hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Tech stack pills with better styling */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-12 animate-slide-up delay-600">
            {['Python', 'SQL', 'NLP', 'Machine Learning', 'Angular', 'Spring Boot'].map((tech) => (
                <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-mono bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-500/40 hover:scale-105 transition-all duration-200 cursor-default"
                >
              {tech}
            </span>
            ))}
          </div>
        </div>
      </section>
  );
}
