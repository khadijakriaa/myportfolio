'use client';

import { useEffect, useRef } from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar, CircleCheck as CheckCircle, Github, ExternalLink } from 'lucide-react';
import SiteLink, { ENETCOM_URL, FSS_URL } from '@/components/site-link';

const EXPERIENCE = [
  {
    role: 'AI & Data Intern — RAG, LLM & Agentic AI',
    company: 'Union Internationale de Banques (UIB)',
    period: 'August 2026',
    location: 'Tunisia',
    type: 'Internship',
    description: 'Built an internal assistant that lets staff query banking circulars in natural language, grounded in retrieved source documents with full answer traceability.',
    achievements: [
      'Developed a Python RAG pipeline covering PDF extraction, chunking, embeddings, retrieval and LLM generation',
      'Orchestrated the pipeline with LangGraph for agentic control flow',
      'Implemented hybrid retrieval combining BGE-M3, BM25 and Qdrant, fused with Reciprocal Rank Fusion (RRF)',
      'Evaluated retrieval quality with MRR and Recall@K',
      'Built a Streamlit interface surfacing the sources used for every generated answer',
    ],
    tags: ['Python', 'LLM', 'RAG', 'LangGraph', 'Qdrant', 'BGE-M3', 'BM25', 'RRF', 'Streamlit'],
    links: [
      { label: 'GitHub', href: 'https://github.com/khadijakriaa/AI_Banking_Assistant.git' },
    ],
  },
  {
    role: 'Data Science Intern — Data Pipelines & Predictive Modeling',
    company: 'Société Tunisienne de Banque (STB)',
    period: 'June — July 2026',
    location: 'Tunisia',
    type: 'Internship',
    description: 'Built reproducible predictive modeling pipelines over more than 16,000 real-estate observations, covering preprocessing, feature engineering and systematic model comparison.',
    achievements: [
      'Collected, cleaned and analyzed 16,000+ real-estate observations using Python, Pandas and NumPy',
      'Performed preprocessing and feature engineering on the dataset',
      'Built reproducible pipelines with Scikit-learn Pipeline, ColumnTransformer and RobustScaler',
      'Compared and optimized models including XGBoost and LightGBM',
      'Applied cross-validation and RandomizedSearchCV for hyperparameter tuning',
    ],
    tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'LightGBM', 'Data Pipelines'],
    links: [
      { label: 'GitHub', href: 'https://github.com/khadijakriaa/Real-Estate-pricing-prediction.git' },
    ],
  },
  {
    role: 'Software & AI Intern — Back-End, REST APIs & Document Processing',
    company: 'Coconsult Nearshore',
    period: 'July 2025',
    location: 'Tunisia',
    type: 'Internship',
    description: 'Built a document processing platform combining Tesseract OCR with the Cohere API to extract and structure information from PDFs and images.',
    achievements: [
      'Combined Tesseract OCR and the Cohere API to extract and structure data from PDF and image documents',
      'Developed REST APIs with Spring Boot and designed the relational storage layer under PostgreSQL',
      'Integrated JWT-based authentication with Spring Security for secure data exchange',
      'Contributed to the development of the Angular frontend',
    ],
    tags: ['Spring Boot', 'PostgreSQL', 'Angular', 'Tesseract OCR', 'Cohere API', 'JWT', 'Spring Security'],
  },
];

const EDUCATION = [
  {
    degree: 'Engineering Degree — Data Engineering & Decision Systems (IDSD)',
    school: "ENET'Com",
    schoolUrl: ENETCOM_URL,
    fullName: "Ecole Nationale d'Electronique et des Telecommunications de Sfax",
    period: 'Sept. 2024 — May 2027',
    year: '3rd & Final Year',
    location: 'Sfax, Tunisia',
    description: 'Final-year engineering programme specialising in Data Science. Curriculum covers advanced algorithms, ' +
        'databases, machine learning, AI engineering, and system architecture.',
  },
  {
    degree: 'Preparatory Cycle — Mathematics & Physics (MP)',
    school: "FSS",
    schoolUrl: FSS_URL,
    fullName: "Faculty of Sciences of Sfax",
    period: 'Sept. 2022 — June 2024',
    year: '2 years',
    location: 'Sfax, Tunisia',
    description: 'Mathematics & Physics (MP) preparatory track for the National Engineering Entrance Competition ' +
        '(Concours National d\'Ingenieurs). Passed the national competition to qualify for elite engineering programmes.',
  },
];

function TimelineItem({
  icon: Icon,
  title,
  subtitle,
  subtitleUrl,
  period,
  location,
  badge,
  description,
  items,
  tags,
  links,
  align = 'left',
}: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  subtitleUrl?: string;
  period: string;
  location: string;
  badge: string;
  description: string;
  items: string[];
  tags?: string[];
  links?: { label: string; href: string }[];
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
              {subtitleUrl ? (
                <SiteLink href={subtitleUrl} className="text-emerald-400 font-semibold text-sm">
                  {subtitle}
                </SiteLink>
              ) : (
                <p className="text-emerald-400 font-semibold text-sm">{subtitle}</p>
              )}
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

          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {links.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg border border-emerald-500/30 text-emerald-400 hover:bg-green-500/10 transition-all hover:scale-105"
                >
                  <Github className="w-3.5 h-3.5" />
                  {label}
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
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
                links={exp.links}
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
                subtitleUrl={edu.schoolUrl}
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
