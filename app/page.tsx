'use client';

import { useEffect } from 'react';
import Navbar from '@/components/navbar';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Projects from '@/components/sections/projects';
import Skills from '@/components/sections/skills';
import ExperienceEducation from '@/components/sections/experience-education';
import Contact from '@/components/sections/contact';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-400/25 to-transparent mx-8" />


      <About />

      <div className="h-px bg-gradient-to-r from-transparent via-green-500/15 to-transparent mx-8" />

      <Projects />

      <div className="h-px bg-gradient-to-r from-transparent via-emerald-300/15 to-transparent mx-8" />

      <Skills />

      <div className="h-px bg-gradient-to-r from-transparent via-green-500/15 to-transparent mx-8" />

      <ExperienceEducation />

      <div className="h-px bg-gradient-to-r from-transparent via-emerald-400/15 to-transparent mx-8" />

      <Contact />
        <section className="py-20 flex justify-center">
            <p className="max-w-2xl text-center italic text-muted-foreground text-lg">
                “If you understand time, you're on your way to understanding reality.”
            </p>
        </section>
    </main>
  );
}
