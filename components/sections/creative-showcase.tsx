'use client';

import { useEffect, useRef, useState } from 'react';
import { Brain, Database, Code as Code2, FileText, Car, Cpu, Zap, Globe, ChartBar as BarChart2, Terminal, Layers, GitBranch } from 'lucide-react';

const FLOATING_ICONS = [
  { icon: Brain, color: '#27ccaf', label: 'AI', x: 50, y: 20, size: 42 },
  { icon: Database, color: '#53e7c7', label: 'Data', x: 15, y: 50, size: 38 },
  { icon: Code2, color: '#1de895', label: 'Code', x: 80, y: 35, size: 40 },
  { icon: FileText, color: '#409f9d', label: 'OCR', x: 25, y: 75, size: 34 },
  { icon: Car, color: '#1de895', label: 'AI Drive', x: 70, y: 70, size: 36 },
  { icon: Cpu, color: '#53e7c7', label: 'ML', x: 88, y: 65, size: 32 },
  { icon: Globe, color: '#0ef8a6', label: 'NLP', x: 10, y: 25, size: 30 },
  { icon: BarChart2, color: '#27f5ad', label: 'Analytics', x: 55, y: 80, size: 34 },
  { icon: Terminal, color: '#06b6d4', label: 'Python', x: 40, y: 55, size: 36 },
  { icon: Layers, color: '#53e7c7', label: 'Stack', x: 90, y: 15, size: 30 },
  { icon: GitBranch, color: '#0ef8a6', label: 'Git', x: 5, y: 80, size: 30 },
  { icon: Zap, color: '#409f9d', label: 'Fast', x: 65, y: 15, size: 32 },
];

const DEMO_SAMPLES = [
  { text: 'This product is absolutely amazing!', expected: 'Positive' },
  { text: "I'm disappointed with this service.", expected: 'Negative' },
  { text: 'The weather is nice today.', expected: 'Neutral' },
  { text: 'Best experience I have ever had!', expected: 'Positive' },
  { text: 'Terrible quality, waste of money.', expected: 'Negative' },
];

function SentimentDemo() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<null | { label: string; confidence: number; color: string }>(null);
  const [loading, setLoading] = useState(false);

  const analyze = () => {
    if (!input.trim()) return;
    setLoading(true);
    setTimeout(() => {
      const lower = input.toLowerCase();
      const positiveWords = ['amazing', 'great', 'good', 'love', 'excellent', 'best', 'wonderful', 'fantastic', 'happy', 'perfect'];
      const negativeWords = ['bad', 'terrible', 'awful', 'hate', 'worst', 'disappointed', 'horrible', 'waste', 'poor', 'disaster'];
      const posScore = positiveWords.filter(w => lower.includes(w)).length;
      const negScore = negativeWords.filter(w => lower.includes(w)).length;
      if (posScore > negScore) {
        setResult({ label: 'Positive', confidence: Math.min(95, 70 + posScore * 8), color: 'text-green-400' });
      } else if (negScore > posScore) {
        setResult({ label: 'Negative', confidence: Math.min(95, 70 + negScore * 8), color: 'text-red-400' });
      } else {
        setResult({ label: 'Neutral', confidence: 65 + Math.floor(Math.random() * 20), color: 'text-amber-400' });
      }
      setLoading(false);
    }, 900);
  };

  const trySample = (sample: { text: string }) => {
    setInput(sample.text);
    setResult(null);
  };

  return (
    <div className="p-6 rounded-2xl bg-card border border-blue-500/20 space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <Brain className="w-5 h-5 text-green-400" />
        <h4 className="font-bold text-foreground">Mini Sentiment Analyzer</h4>
        <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 border border-l-green-200/20 text-green-400">Demo</span>
      </div>
      <p className="text-xs text-muted-foreground">Tunisian Dialect Classification project — try it with any text!</p>

      <textarea
        value={input}
        onChange={(e) => { setInput(e.target.value); setResult(null); }}
        placeholder="Type something to analyze sentiment..."
        className="w-full h-24 px-3 py-2 text-sm bg-background border border-border rounded-xl resize-none focus:outline-none focus:border-green-700/60 text-foreground placeholder:text-muted-foreground transition-colors"
      />

      {/* Sample buttons */}
      <div className="flex flex-wrap gap-1.5">
        <span className="text-xs text-muted-foreground self-center">Try:</span>
        {DEMO_SAMPLES.map((s) => (
          <button
            key={s.text}
            onClick={() => trySample(s)}
            className="text-xs px-2.5 py-1 rounded-lg bg-secondary border border-border hover:border-green-500/30 text-muted-foreground hover:text-foreground transition-all"
          >
            {s.text.slice(0, 22)}...
          </button>
        ))}
      </div>

      <button
        onClick={analyze}
        disabled={!input.trim() || loading}
        className="w-full py-2.5 rounded-xl bg-gradient-primary text-white text-sm font-semibold disabled:opacity-50 hover:scale-[1.02] transition-all relative overflow-hidden"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-3 h-3 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            Analyzing...
          </span>
        ) : (
          'Analyze Sentiment'
        )}
        {!loading && <div className="absolute inset-0 animate-shimmer" />}
      </button>

      {result && (
        <div className="flex items-center justify-between p-4 rounded-xl bg-background border border-border animate-scale-in">
          <div>
            <div className="text-xs text-muted-foreground mb-1">Sentiment</div>
            <div className={`text-xl font-black ${result.color}`}>{result.label}</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-muted-foreground mb-1">Confidence</div>
            <div className="text-xl font-black text-foreground">{result.confidence}%</div>
          </div>
          <div className="w-16 h-16">
            <svg viewBox="0 0 60 60" className="-rotate-90">
              <circle cx="30" cy="30" r="24" fill="none" stroke="currentColor" strokeWidth="4" className="text-muted/20" />
              <circle
                cx="30" cy="30" r="24"
                fill="none"
                stroke={result.label === 'Positive' ? '#4ade80' : result.label === 'Negative' ? '#f87171' : '#fbbf24'}
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 24}`}
                strokeDashoffset={`${2 * Math.PI * 24 * (1 - result.confidence / 100)}`}
                style={{ transition: 'stroke-dashoffset 0.8s ease' }}
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

function FloatingIconsCanvas() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="relative w-full h-80 md:h-96 overflow-hidden rounded-2xl bg-card border border-border">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-indigo-500/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-green-600/10 rounded-full filter blur-[60px]" />

      {/* Center label */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-0">
        <div className="text-emerald-500 text-3xl font-black">Khadija</div>
        <div className="text-xs text-muted-foreground">Tech Stack</div>
      </div>

      {/* Floating icons */}
      {FLOATING_ICONS.map(({ icon: Icon, color, label, x, y, size }, i) => (
        <div
          key={label}
          className="absolute flex flex-col items-center gap-1 cursor-default group"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            transform: 'translate(-50%, -50%)',
            animation: `float ${3.5 + (i % 4) * 0.7}s ease-in-out infinite`,
            animationDelay: `${(i * 0.4) % 2.5}s`,
          }}
        >
          <div
            className="rounded-xl flex items-center justify-center group-hover:scale-125 transition-transform duration-300"
            style={{
              width: size,
              height: size,
              background: `${color}15`,
              border: `1px solid ${color}40`,
              boxShadow: `0 0 12px ${color}30`,
            }}
          >
            <Icon style={{ width: size * 0.5, height: size * 0.5, color }} />
          </div>
          <span
            className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ color }}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

function ProjectCard3D({
  title,
  tag,
  desc,
  color,
  gradient,
}: {
  title: string;
  tag: string;
  desc: string;
  color: string;
  gradient: string;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 14;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * -14;
    setTilt({ x, y });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="group cursor-default"
      style={{
        perspective: '800px',
        transition: 'transform 0.1s',
      }}
    >
      <div
        className={`p-5 rounded-2xl bg-card border overflow-hidden relative`}
        style={{
          borderColor: `${color}40`,
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.15s ease, box-shadow 0.3s ease',
          boxShadow: tilt.x || tilt.y ? `0 20px 60px ${color}25` : 'none',
        }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-30 group-hover:opacity-60 transition-opacity`} />
        <div className="relative z-10">
          <span className="text-xs px-2 py-0.5 rounded-full border text-[10px]" style={{ color, borderColor: `${color}40`, background: `${color}10` }}>
            {tag}
          </span>
          <h4 className="font-bold text-foreground mt-2 mb-1 text-sm">{title}</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function CreativeShowcase() {
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
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="showcase" className="py-24 md:py-32 px-4 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-500/5 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-indigo-500/5 rounded-full filter blur-[80px]" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-black section-title mb-4">
            Tech Stack<span className="text-emerald-500"> Showcase</span>
          </h2>
          <div className="w-20 h-1 rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Explore interactive visualizations of my tech stack and try a live NLP demo inspired by my projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Floating Icons */}
          <div className="reveal-left">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">Tech Universe — Hover to explore</h3>
            <FloatingIconsCanvas />
          </div>

          {/* Sentiment Demo */}
          <div className="reveal-right">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">Live NLP Demo</h3>
            <SentimentDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
