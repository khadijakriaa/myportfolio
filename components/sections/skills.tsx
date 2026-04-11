'use client';

import { useEffect, useRef } from 'react';

const TECHNICAL_SKILLS = [
  { name: 'Python', category: 'Languages', color: '#60a5fa', ring: 0 },
  { name: 'SQL / PostgreSQL', category: 'Languages', color: '#60a5fa', ring: 1 },
  { name: 'Java', category: 'Languages', color: '#60a5fa', ring: 0 },
  { name: 'ML / NLP', category: 'AI/ML', color: '#34d399', ring: 1 },
  { name: 'HuggingFace / BERT', category: 'AI/ML', color: '#34d399', ring: 0 },
  { name: 'scikit-learn / pandas', category: 'AI/ML', color: '#34d399', ring: 1 },
  { name: 'Angular', category: 'Frameworks', color: '#f59e0b', ring: 0 },
  { name: 'Spring Boot', category: 'Frameworks', color: '#f59e0b', ring: 1 },
  { name: 'Git / GitHub', category: 'Tools', color: '#a78bfa', ring: 0 },
  { name: 'OCR (Tesseract)', category: 'Tools', color: '#a78bfa', ring: 1 },
  { name: 'REST APIs / JWT', category: 'Tools', color: '#a78bfa', ring: 0 },
];

const SOFT_SKILLS = [
  'Problem Solving',
  'Analytical Thinking',
  'Creativity',
  'Collaboration',
  'Time Management',
];

const FAMILIAR = ['Docker', 'Linux', 'Jupyter', 'IntelliJ','WebStorm','Data Spell','PyCharm', 'Power BI', 'Excel', 'LaTeX', 'HTML/CSS'];

const LEGEND = [
  { label: 'Languages', color: '#60a5fa' },
  { label: 'AI / ML', color: '#34d399' },
  { label: 'Frameworks', color: '#f59e0b' },
  { label: 'Tools', color: '#a78bfa' },
];

const ring0Skills = TECHNICAL_SKILLS.filter((s) => s.ring === 0);
const ring1Skills = TECHNICAL_SKILLS.filter((s) => s.ring === 1);

function NeptuneOrbit() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const anglesRef = useRef({ r0: 0, r1: Math.PI / 4 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const dpr = window.devicePixelRatio || 1;

    function resize() {
      if (!canvas || !wrap) return;
      canvas.width = wrap.clientWidth * dpr;
      canvas.height = wrap.clientHeight * dpr;
    }
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    function drawNeptune(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number) {
      const grd = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.3, r * 0.05, cx, cy, r);
      grd.addColorStop(0, '#93c5fd');
      grd.addColorStop(0.4, '#3b82f6');
      grd.addColorStop(0.75, '#1d4ed8');
      grd.addColorStop(1, '#0f2e6e');
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();

      // Atmospheric bands
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.clip();
      for (let i = 0; i < 4; i++) {
        const yOff = -r * 0.5 + i * r * 0.4;
        ctx.beginPath();
        ctx.ellipse(cx - r * 0.2, cy + yOff, r * 0.9, r * 0.08 + i * 2, -0.15, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147,197,253,${0.06 + i * 0.04})`;
        ctx.fill();
      }
      ctx.restore();

      // Rim glow
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(147,197,253,0.25)';
      ctx.lineWidth = 1.5 * dpr;
      ctx.stroke();
    }

    function drawOrbitRing(ctx: CanvasRenderingContext2D, cx: number, cy: number, rx: number, ry: number) {
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(148,163,184,0.15)';
      ctx.lineWidth = 1 * dpr;
      ctx.setLineDash([4 * dpr, 6 * dpr]);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    function drawLabel(ctx: CanvasRenderingContext2D, x: number, y: number, text: string, color: string) {
      const pad = 7 * dpr;
      const fSize = 12 * dpr;
      ctx.font = `500 ${fSize}px system-ui, sans-serif`;
      const tw = ctx.measureText(text).width;
      const bw = tw + pad * 2;
      const bh = fSize + pad * 1.2;
      const bx = x - bw / 2;
      const by = y - bh / 2;
      const br = bh / 2;

      // Background pill
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      ctx.fillStyle = isDark ? 'rgba(15,23,42,0.82)' : 'rgba(255,255,255,0.88)';
      ctx.beginPath();
      ctx.roundRect(bx, by, bw, bh, br);
      ctx.fill();

      // Border
      ctx.strokeStyle = color + (isDark ? 'cc' : '99');
      ctx.lineWidth = 1 * dpr;
      ctx.beginPath();
      ctx.roundRect(bx, by, bw, bh, br);
      ctx.stroke();

      // Text
      ctx.fillStyle = color;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, x, y);
    }

    let lastTime = 0;

    function draw(t: number) {
      if (!canvas || !wrap) return;
      const W = canvas.width;
      const H = canvas.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, W, H);

      const cx = W / 2;
      const cy = H / 2;
      const planetR = Math.min(W, H) * 0.14;

      const rx0 = Math.min(W * 0.42, H * 0.62);
      const ry0 = rx0 * 0.38;
      const rx1 = Math.min(W * 0.48, H * 0.72);
      const ry1 = rx1 * 0.32;

      // Delta time for smooth animation regardless of frame rate
      const dt = lastTime ? Math.min(t - lastTime, 50) : 16;
      lastTime = t;

      anglesRef.current.r0 += 0.0004 * dt;
      anglesRef.current.r1 -= 0.00025 * dt;

      drawOrbitRing(ctx, cx, cy, rx0, ry0);
      drawOrbitRing(ctx, cx, cy, rx1, ry1);

      // Ring 0 skills
      ring0Skills.forEach((skill, si) => {
        const a = anglesRef.current.r0 + (si / ring0Skills.length) * Math.PI * 2;
        const sx = cx + Math.cos(a) * rx0;
        const sy = cy + Math.sin(a) * ry0;
        drawLabel(ctx, sx, sy, skill.name, skill.color);
      });

      // Ring 1 skills
      ring1Skills.forEach((skill, si) => {
        const a = anglesRef.current.r1 + (si / ring1Skills.length) * Math.PI * 2;
        const sx = cx + Math.cos(a) * rx1;
        const sy = cy + Math.sin(a) * ry1;
        drawLabel(ctx, sx, sy, skill.name, skill.color);
      });

      drawNeptune(ctx, cx, cy, planetR);

      // Planet glow
      const glow = ctx.createRadialGradient(cx, cy, planetR * 0.8, cx, cy, planetR * 1.5);
      glow.addColorStop(0, 'rgba(59,130,246,0.12)');
      glow.addColorStop(1, 'rgba(59,130,246,0)');
      ctx.beginPath();
      ctx.arc(cx, cy, planetR * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();
    }

    function loop(t: number) {
      draw(t);
      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, []);

  return (
      <div ref={wrapRef} className="relative w-full" style={{ aspectRatio: '1 / 0.65', maxHeight: '420px' }}>
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
  );
}

export default function Skills() {
  return (
      <section id="skills" className="py-24 md:py-32 px-4 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-indigo-500/5 rounded-full filter blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full filter blur-[80px]" />
        </div>

        <div className="max-w-3xl mx-auto flex flex-col items-center gap-10">
          {/* Header */}
          <div className="text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2 block">
            What I Know
          </span>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Skills &amp; <span className="text-green-400">Expertise</span>
            </h2>
            <div className="w-16 h-0.5 bg-blue-400 rounded-full mx-auto" />
          </div>

          {/* Orbit canvas */}
          <div className="w-full">
            <NeptuneOrbit />

            {/* Category legend */}
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {LEGEND.map((l) => (
                  <div key={l.label} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <span className="w-2 h-2 rounded-full inline-block" style={{ background: l.color }} />
                    {l.label}
                  </div>
              ))}
            </div>
          </div>

          {/* Soft skills */}
          <div className="w-full flex flex-col items-center gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {SOFT_SKILLS.map((s) => (
                  <span
                      key={s}
                      className="px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground bg-secondary"
                  >
                {s}
              </span>
              ))}
            </div>
          </div>

          {/* Also familiar with */}
          <div className="w-full rounded-2xl border border-border bg-card p-5">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
              Also Familiar With
            </h4>
            <div className="flex flex-wrap gap-2">
              {FAMILIAR.map((tech) => (
                  <span
                      key={tech}
                      className="px-2.5 py-1 text-xs bg-secondary rounded-lg text-muted-foreground border border-border hover:border-blue-500/30 hover:text-blue-400 transition-all cursor-default"
                  >
                {tech}
              </span>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}
