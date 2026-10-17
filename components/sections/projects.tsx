'use client';

import { useEffect, useRef } from 'react';
import { ExternalLink, Github, Brain, Car, Tag, FileSearch, Building2, ChevronRight } from 'lucide-react';
import SiteLink, { ENETCOM_URL } from '@/components/site-link';

type Project = {
  id: number;
  title: string;
  period: string;
  company: string;
  companyUrl?: string;
  description: string;
  longDesc: string;
  icon: React.ElementType;
  color: string;
  glow: string;
  gradient: string;
  border: string;
  tags: string[];
  metrics: { value: string; label: string }[];
  pipeline: string[];
  highlights: string[];
  links: { label: string; icon: React.ElementType; href: string }[];
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'AI Assistant for Banking Circulars (RAG)',
    period: 'Internship Project · GenAI',
    company: 'Union Internationale de Banques (UIB)',
    description:
        'An internal assistant that answers staff questions about the bank\'s circulars in French, grounded in the retrieved documents and citing the exact circular and article.',
    longDesc:
        'Mainstream PDF extractors could not decode the circulars\' embedded fonts, so I wrote a custom extractor, then built article-aware chunking, BGE-M3 embeddings in Qdrant, hybrid dense + BM25 retrieval fused with RRF, and a LangGraph retrieve-then-generate flow behind a Streamlit interface. Every design choice was backed by an evaluation harness rather than intuition.',
    icon: FileSearch,
    color: 'text-emerald-400',
    glow: 'glow-green',
    gradient: 'from-emerald-500/20 to-teal-500/10',
    border: 'border-emerald-500/30',
    tags: ['Python', 'RAG', 'LLM', 'LangGraph', 'Qdrant', 'BGE-M3', 'BM25', 'Streamlit', 'Docker'],
    metrics: [
      { value: '282', label: 'evaluation questions' },
      { value: '0.87', label: 'citation precision' },
      { value: '15/15', label: 'hallucination traps refused' },
    ],
    pipeline: ['PDF extraction', 'Article chunking', 'BGE-M3 embeddings', 'Qdrant + BM25', 'RRF fusion', 'LangGraph + LLM', 'Streamlit'],
    highlights: [
      'Compared 13 chunking strategies and 2 embedding models (MRR, Recall@K)',
      'Benchmarked candidate LLMs on evidence, citations and latency',
      'Refuses questions about circulars that do not exist',
      'Answers cite the source circular and article',
    ],
    links: [
      { label: 'GitHub', icon: Github, href: 'https://github.com/khadijakriaa/AI_Banking_Assistant' },
    ],
  },
  {
    id: 4,
    title: 'Tunisian Real-Estate Price Prediction',
    period: 'Internship Project · Data Science',
    company: 'Société Tunisienne de Banque (STB)',
    description:
        'An end-to-end pipeline that collects Tunisian property listings, cleans them and predicts sale prices in Tunisian dinars to support property revaluation.',
    longDesc:
        'Wrote scrapers for Tayara.tn and NewKey, cleaned the raw listings into a sale-only dataset, engineered features from structured fields and from listing descriptions (TF-IDF, amenity flags), then compared seven regression models in reproducible scikit-learn pipelines tuned with RandomizedSearchCV.',
    icon: Building2,
    color: 'text-emerald-400',
    glow: 'glow-green',
    gradient: 'from-emerald-500/20 to-teal-500/10',
    border: 'border-emerald-500/30',
    tags: ['Python', 'Web Scraping', 'Pandas', 'Scikit-learn', 'XGBoost', 'LightGBM', 'TF-IDF'],
    metrics: [
      { value: '16K+', label: 'listings scraped' },
      { value: '7', label: 'models compared' },
      { value: 'R² 0.72', label: 'best model (XGBoost)' },
    ],
    pipeline: ['Web scraping', 'Cleaning (4,413 sales)', 'EDA', 'TF-IDF + features', '7 models', 'XGBoost'],
    highlights: [
      'Scrapers for Tayara.tn and NewKey',
      'Text features from listing descriptions',
      'Leakage-free, reproducible pipelines',
      'XGBoost, Gradient Boosting and LightGBM all above R² 0.71',
    ],
    links: [
      { label: 'GitHub', icon: Github, href: 'https://github.com/khadijakriaa/Real-Estate-pricing-prediction' },
    ],
  },
  {
    id: 2,
    title: 'Tunisian Dialect Sentiment Classification',
    period: 'Academic Project · NLP',
    company: 'Team Project',
    description:
        'A binary sentiment classifier for Tunisian dialect tweets written in both Arabic script and Arabizi (Latin script), fine-tuned from MARBERT.',
    longDesc:
        'Built the preprocessing pipeline, including a CODA-style Arabizi-to-Arabic transliteration step, merged both scripts to double the training data, then fine-tuned MARBERT on Hugging Face and compared it against logistic regression and a linear SVM trained on frozen MARBERT embeddings.',
    icon: Brain,
    color: 'text-emerald-400',
    glow: 'glow-green',
    gradient: 'from-emerald-500/20 to-teal-500/10',
    border: 'border-emerald-500/30',
    tags: ['Python', 'NLP', 'MARBERT', 'Hugging Face', 'Transformers', 'Arabic NLP'],
    metrics: [
      { value: '~48K', label: 'tweets' },
      { value: '92%', label: 'test accuracy' },
      { value: '0.90', label: 'macro F1' },
    ],
    pipeline: ['Cleaning', 'Arabizi → Arabic', 'Augmentation', 'MARBERT fine-tuning', 'Evaluation'],
    highlights: [
      'Handles both Arabic script and Arabizi',
      'Fine-tuning beat frozen-embedding baselines (78% accuracy)',
      'Stratified train / validation / test split',
      'Evaluated on 9,559 held-out tweets',
    ],
    links: [
      { label: 'GitHub', icon: Github, href: 'https://github.com/Adeeem2/Tunisian-dialect-classification' },
    ],
  },
  {
    id: 3,
    title: 'Hybrid Agent for Driving Assistance',
    period: 'Academic Project · ML / Agents',
    company: "Team Project · ENET'Com",
    companyUrl: ENETCOM_URL,
    description:
        'A hybrid multi-agent system that detects road situations in real time using VEINS simulator data and generates natural language + textual alerts to assist drivers safely.',
    longDesc:
        'Combines a reactive safety agent with a deliberative BDI agent for contextual reasoning, forming a true hybrid multi-agent architecture. Multiple independent ML agents (overtaking, intersection, dangerous zones) collaborate by feeding beliefs into the BDI layer, which generates context-aware alerts via natural language generation and text-to-speech.',
    icon: Car,
    color: 'text-emerald-400',
    glow: 'glow-green',
    gradient: 'from-emerald-500/20 to-teal-500/10',
    border: 'border-emerald-500/30',
    tags: ['Python', 'ML', 'Hybrid Multi-Agent', 'BDI Agents'],
    metrics: [],
    pipeline: ['Vehicle data', 'ML context detection', 'Reactive layer', 'BDI reasoning', 'Alert generation'],
    highlights: [
      'Real-time road situation detection',
      'Natural language alert generation',
      'Hybrid multi-agent architecture',
    ],
    links: [
      { label: 'GitHub', icon: Github, href: 'https://github.com/khadijakriaa/pfa.git' },
    ],
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.querySelectorAll('.reveal').forEach((el, i) => {
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
      <section id="projects" className="py-24 md:py-32 px-4 relative" ref={ref}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 reveal">
            <span className=" text-sm font-semibold tracking-widest uppercase mb-3 block">What I've Built</span>
            <h2 className="text-4xl md:text-5xl font-black section-title mb-4">
              Featured <span className="text-emerald-500">Projects</span>
            </h2>
          </div>

          {/* Projects */}
          <div className="space-y-8">
            {PROJECTS.map((project, index) => {
              const Icon = project.icon;
              return (
                  <div
                      key={project.id}
                      className={`reveal group relative rounded-2xl border ${project.border} bg-card overflow-hidden card-hover`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    <div className="relative z-10 p-6 md:p-8">
                      <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left */}
                        <div className="flex-1 space-y-4">
                          <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 rounded-xl bg-card border ${project.border} flex items-center justify-center flex-shrink-0 ${project.glow} group-hover:scale-110 transition-transform`}>
                              <Icon className={`w-6 h-6 ${project.color}`} />
                            </div>
                            <div>
                              <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 ${project.color}`}>
                              {project.period}
                            </span>
                                <span className="text-xs text-muted-foreground">
                                  {project.companyUrl ? (
                                    <SiteLink
                                      href={project.companyUrl}
                                      className="text-muted-foreground hover:text-emerald-300"
                                    >
                                      {project.company}
                                    </SiteLink>
                                  ) : (
                                    project.company
                                  )}
                                </span>
                              </div>
                              <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-all">
                                {project.title}
                              </h3>
                            </div>
                          </div>

                          <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                          <p className="text-muted-foreground/70 text-sm leading-relaxed">{project.longDesc}</p>

                          {/* Pipeline */}
                          <div aria-label="Pipeline" className="flex flex-wrap items-center gap-1 pt-1">
                            {project.pipeline.map((step, i) => (
                                <span key={step} className="flex items-center gap-1">
                                  <span className="px-2 py-0.5 text-xs rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300">
                                    {step}
                                  </span>
                                  {i < project.pipeline.length - 1 && (
                                      <ChevronRight className="w-3 h-3 text-muted-foreground/60" aria-hidden="true" />
                                  )}
                                </span>
                            ))}
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {project.tags.map((tag) => (
                                <span key={tag} className="flex items-center gap-1 px-2.5 py-1 text-xs bg-secondary rounded-lg text-muted-foreground border border-border hover:border-green-500/30 transition-colors">
                            <Tag className="w-2.5 h-2.5" />
                                  {tag}
                          </span>
                            ))}
                          </div>
                        </div>

                        {/* Right: Highlights + Links */}
                        <div className="lg:w-72 space-y-4">
                          {project.metrics.length > 0 && (
                              <div className="grid grid-cols-3 gap-2">
                                {project.metrics.map((m) => (
                                    <div key={m.label} className="p-2.5 rounded-xl bg-background/50 border border-border/50 text-center">
                                      <div className={`text-lg font-black leading-tight ${project.color}`}>{m.value}</div>
                                      <div className="text-[11px] text-muted-foreground leading-snug mt-0.5">{m.label}</div>
                                    </div>
                                ))}
                              </div>
                          )}
                          <div className="p-4 rounded-xl bg-background/50 border border-border/50">
                            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Key Points</h4>
                            <ul className="space-y-2">
                              {project.highlights.map((h) => (
                                  <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${project.color.replace('text-', 'bg-')}`} />
                                    {h}
                                  </li>
                              ))}
                            </ul>
                          </div>

                          {project.links.length > 0 && (
                              <div className="flex flex-wrap gap-2">
                                {project.links.map(({ label, icon: LinkIcon, href }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg border ${project.border} ${project.color} hover:bg-green-500/10 transition-all hover:scale-105`}
                                    >
                                      <LinkIcon className="w-3.5 h-3.5" />
                                      {label}
                                      <ExternalLink className="w-3 h-3 opacity-60" />
                                    </a>
                                ))}
                              </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
              );
            })}
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-12 reveal">
            <a
                href="https://github.com/khadijakriaa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:border-green-500/40 text-muted-foreground hover:text-green-400 transition-all hover:bg-green-500/5"
            >
              <Github className="w-5 h-5" />
              View all projects on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
  );
}
