'use client';

import { useEffect, useRef } from 'react';
import { ExternalLink, Github, Globe, FileText, Brain, Car, Tag, Network } from 'lucide-react';
import EnetLink, { ENETCOM_URL } from '@/components/enet-link';

const PROJECTS = [
  {
    id: 4,
    title: 'RAG Assistant for Banking Circulars',
    period: 'Internship · August 2026',
    company: 'Union Internationale de Banques',
    description:
        'An internal assistant that answers questions about banking circulars in natural language, grounded in retrieved source documents with full traceability.',
    longDesc:
        'A production-style RAG pipeline in Python — PDF extraction, chunking, embeddings, retrieval and LLM generation — orchestrated with LangGraph. Retrieval is hybrid: dense vectors from BGE-M3 combined with BM25 lexical search over Qdrant, fused with Reciprocal Rank Fusion. Retrieval quality is measured with MRR and Recall@K rather than eyeballed, and a Streamlit interface surfaces the exact sources behind every generated answer.',
    icon: Network,
    color: 'text-emerald-400',
    glow: 'glow-green',
    gradient: 'from-emerald-500/20 to-teal-500/10',
    border: 'border-emerald-500/30',
    tags: ['Python', 'LLM', 'RAG', 'LangGraph', 'Qdrant', 'BGE-M3', 'BM25', 'RRF', 'Streamlit'],
    highlights: [
      'Hybrid dense + lexical retrieval fused with RRF',
      'Agentic orchestration with LangGraph',
      'Retrieval evaluated with MRR and Recall@K',
      'Streamlit UI with per-answer source traceability',
    ],
    links: [],
  },
  {
    id: 1,
    title: 'Document Processing & Extraction Platform',
    period: 'Internship · July 2025',
    company: 'Coconsult Nearshore',
    description:
        'A secure, full-stack platform that extracts structured data from financial documents using OCR and NLP, and turns unstructured content into interactive dashboards.',
    longDesc:
        'Built with a microservices mindset — Angular frontend, Spring Boot REST API, PostgreSQL storage, and Tesseract OCR for text recognition. Integrated the Cohere API for NLP post-processing of extracted text into structured JSON. JWT-based authentication with Spring Security ensures data security.',
    icon: FileText,
    color: 'text-emerald-400',
    glow: 'glow-green',
    gradient: 'from-emerald-500/20 to-teal-500/10',
    border: 'border-emerald-500/30',
    tags: ['Angular', 'Spring Boot', 'PostgreSQL', 'Tesseract OCR', 'Cohere API', 'JWT', 'NLP'],
    highlights: [
      'Automated OCR-based text extraction from PDFs and images',
      'NLP pipeline for unstructured → structured JSON',
      'JWT-secured REST API with role-based access',
      'Interactive analytics dashboard',
    ],
    links: [],
  },
  {
    id: 2,
    title: 'Tunisian Dialect Classification',
    period: 'Academic Project · NLP/ML',
    company: 'Personal Research',
    description:
        'A sentiment analysis model fine-tuned on nearly 50,000 Tunisian Arabic dialect texts using MARBERT, deployed as an interactive demo space.',
    longDesc:
        'Built the full NLP pipeline — preprocessing, tokenization, classification and F1-score evaluation — around MARBERT (Arabic BERT) via transfer learning on Hugging Face. The model classifies text into positive/negative/neutral sentiments, handling code-switching between Arabic, French, and Tunisian dialect.',
    icon: Brain,
    color: 'text-emerald-400',
    glow: 'glow-green',
    gradient: 'from-emerald-500/20 to-teal-500/10',
    border: 'border-emerald-500/30',
    tags: ['Python', 'ML', 'NLP', 'MARBERT', 'Hugging Face', 'Sentiment Analysis', 'Arabic NLP'],
    highlights: [
      'Fine-tuned MARBERT on ~50,000 Tunisian dialect texts',
      'Multi-class sentiment classification',
      'Handles Arabic-French code-switching',
      'Evaluated with F1-score',
    ],
    links: [
      { label: 'GitHub', icon: Github, href: 'https://github.com/Adeeem2/Tunisian-dialect-classification.git' },
    ],
  },
  {
    id: 3,
    title: 'Hybrid Agent for Driving Assistance',
    period: 'Academic Project · ML/NLP',
    company: 'ENET\'Com',
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
                                    <EnetLink
                                      href={project.companyUrl}
                                      className="text-muted-foreground hover:text-emerald-300"
                                    >
                                      {project.company}
                                    </EnetLink>
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
                          <div className="p-4 rounded-xl bg-background/50 border border-border/50">
                            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Key Features</h4>
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
