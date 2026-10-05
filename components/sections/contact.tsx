'use client';

import { useEffect, useRef } from 'react';
import { Mail, Linkedin, Github, ExternalLink, Send, MapPin, MessageCircle } from 'lucide-react';

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'kriaakhadija784@gmail.com',
    href: 'mailto:kriaakhadija784@gmail.com',
    icon: Mail,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    hoverBorder: 'hover:border-emerald-400',
    glow: 'hover:glow-blue',
    description: 'Drop me an email anytime',
  },
  {
    label: 'LinkedIn',
    value: 'Khadija Kriaa',
    href: 'https://www.linkedin.com/in/khadija-kriaa-579608334/',
    icon: Linkedin,
    color: 'text-teal-400',
    bg: 'bg-teal-500/10',
    border: 'border-teal-500/30',
    hoverBorder: 'hover:border-teal-400',
    glow: 'hover:glow-cyan',
    description: "Let's connect professionally",
  },
  {
    label: 'GitHub',
    value: 'khadijakriaa',
    href: 'https://github.com/khadijakriaa',
    icon: Github,
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
    hoverBorder: 'hover:border-green-400',
    glow: 'hover:glow-indigo',
    description: 'Check out my code',
  },
];

export default function Contact() {
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
    <section id="contact" className="py-24 md:py-32 px-4 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full filter blur-[120px]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className=" text-sm font-semibold tracking-widest uppercase mb-3 block">Let's Talk</span>
          <h2 className="text-4xl md:text-5xl font-black section-title mb-4">
            Get In <span className="text-emerald-500">Touch</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Quick info */}
          <div className="reveal-left space-y-6">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Open to Opportunities</h3>
                  <p className="text-xs text-muted-foreground">Internships, research, collaborations</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I&rsquo;m a final-year Data Engineering &amp; Decision Systems student at ENET&rsquo;Com,
                specialising in Data Science. I&rsquo;m looking for a 6-month end-of-studies
                internship (PFE) starting February 2027. If you have an opportunity or just want to
                chat, feel free to reach out!
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-border flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <div className="font-medium text-foreground text-sm">Based in</div>
                <div className="text-muted-foreground text-sm">Sfax, Tunisia</div>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-green-400">Available</span>
              </div>
            </div>

            {/* Decorative animated element */}
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 overflow-hidden">
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-blue-500/20 rounded-full filter blur-xl animate-pulse" />
              <div className="relative z-10">
                <div className="text-2xl font-black text-gradient mb-1">Let's Build</div>
                <div className="text-2xl font-black text-foreground">Something Amazing</div>
                <div className="text-sm text-muted-foreground mt-2">Together we can create the future.</div>
              </div>
            </div>
          </div>

          {/* Right: Contact cards */}
          <div className="reveal-right space-y-4">
            {CONTACT_LINKS.map(({ label, value, href, icon: Icon, color, bg, border, hoverBorder, glow, description }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 p-5 rounded-2xl bg-card border ${border} ${hoverBorder} ${glow} card-hover transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-xl ${bg} border ${border} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-muted-foreground mb-0.5">{description}</div>
                  <div className="font-semibold text-foreground group-hover:text-gradient transition-all truncate">{value}</div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className={`text-xs font-medium ${color} opacity-0 group-hover:opacity-100 transition-opacity`}>{label}</span>
                  <ExternalLink className={`w-4 h-4 ${color} opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0`} />
                </div>
              </a>
            ))}

            {/* Quick email CTA */}
            <a
              href="mailto:kriaakhadija784@gmail.com"
              className="group flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-emerald-600 text-white font-semibold hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Send me an email
              </span>
              <div className="absolute inset-0 animate-shimmer" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
