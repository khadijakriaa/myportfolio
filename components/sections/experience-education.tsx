'use client';

import { useEffect, useRef } from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar, CircleCheck as CheckCircle } from 'lucide-react';

const EXPERIENCE = [
  {
    role: 'Data and Decisional Systems Engineering Intern',
    company: 'Coconsult Nearshore',
    period: 'July 2025',
    location: 'Tunisia',
    type: 'Internship',
    description: 'Built a secure, full-stack web application for automated data extraction from financial documents (pay slips) using OCR and NLP technologies.',
    achievements: [
      'Developed Angular frontend with interactive dashboard for visualizing extracted data',
      'Implemented Spring Boot REST API with JWT authentication and role-based access control',
      'Integrated Tesseract OCR for text extraction from PDF/image pay slips',
      'Applied Cohere NLP API to transform unstructured text into structured JSON',
      'Designed and optimized PostgreSQL database schema for extracted payroll data',
    ],
    tags: ['Angular', 'Spring Boot', 'PostgreSQL', 'OCR', 'NLP', 'JWT'],
  },
];

const EDUCATION = [
  {
    degree: 'Engineering Degree — Data & Decisional Systems',
    school: "ENET'Com",
    fullName: "Ecole Nationale d'Ingénieurs des Télécommunications de Tunis",
    period: '2024 — Present',
    year: '2nd Year',
    location: 'Sfax, Tunisia',
    description: 'Intensive engineering program focused on data systems, decision support, AI, and software engineering.' +
        ' Curriculum covers advanced algorithms, databases, machine learning, and system architecture.',
  },
  {
    degree: 'Preparatory Cycle MP',
    school: "FSS",
    fullName: "Faculty of Sciences of Sfax",
    period: '2 years',
    year: '2022 — 2024',
    location: 'Sfax, Tunisia',
    description: 'Mathematics & Physics (MP) preparatory track for the National Engineering Entrance Competition (Concours National d\'Ingénieurs). Passed the national competition to qualify for elite engineering programs.',
  },
];

function TimelineItem({
  icon: Icon,
  title,
  subtitle,
  period,
  location,
  badge,
  description,
  items,
  tags,
  align = 'left',
}: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  period: string;
  location: string;
  badge: string;
  description: string;
  items: string[];
  tags?: string[];
  align?: 'left' | 'right';
}) {
  const revealClass = align === 'left' ? 'reveal-left' : 'reveal-right';

  return (
    <div className={`relative flex gap-6 md:gap-8 ${revealClass}`}>
      {/* Timeline line dot */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center glow-blue flex-shrink-0 z-10">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div className="w-0.5 flex-1 bg-gradient-to-b from-emerald-500/50 to-transparent mt-3" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-10">
        <div className="group p-6 rounded-2xl bg-card border border-border hover:border-emerald-500/40 transition-all duration-300 card-hover">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  {badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground group-hover:text-gradient transition-all">{title}</h3>
              <p className="text-emerald-400 font-semibold text-sm">{subtitle}</p>
            </div>
            <div className="flex flex-col items-end gap-1 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {period}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {location}
              </span>
            </div>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>

          <ul className="space-y-2 mb-4">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {tags && (
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 text-xs bg-secondary rounded-lg text-muted-foreground border border-border">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ExperienceEducation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 150);
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
    <>
      {/* Internships */}
      <section id="experience" className="py-24 md:py-32 px-4 relative" ref={ref}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/3 w-72 h-72 bg-emerald-500/5 rounded-full filter blur-[100px]" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className=" text-sm font-semibold tracking-widest uppercase mb-3 block">Experience</span>
            <h2 className="text-4xl md:text-5xl font-black section-title mb-4">
              <span className="text-emerald-500">Internships</span>
            </h2>
          </div>

          <div className="space-y-0">
            {EXPERIENCE.map((exp) => (
              <TimelineItem
                key={exp.company}
                icon={Briefcase}
                title={exp.role}
                subtitle={exp.company}
                period={exp.period}
                location={exp.location}
                badge={exp.type}
                description={exp.description}
                items={exp.achievements}
                tags={exp.tags}
                align="left"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-0 pb-24 md:pb-32 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className=" text-sm font-semibold tracking-widest uppercase mb-3 block">Academic Background</span>
            <h2 className="text-4xl md:text-5xl font-black section-title mb-4">
              <span className="text-emerald-500">Education</span>
            </h2>
          </div>

          <div className="space-y-0">
            {EDUCATION.map((edu) => (
              <TimelineItem
                key={edu.school}
                icon={GraduationCap}
                title={edu.degree}
                subtitle={`${edu.school} — ${edu.fullName}`}
                period={edu.period}
                location={edu.location}
                badge={edu.year}
                description={edu.description}
                items={[]} // No specific achievements listed for education
                align="right"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
