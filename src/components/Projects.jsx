'use client';

import { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { ExternalLink, Sparkles, FolderGit2, Check, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'AI Agents', 'Full Stack', 'Systems & Security'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-slate-950/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
              <span>03 // FEATURED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Projects & Engineering Prototypes
            </h2>
            <p className="text-slate-400 text-base max-w-xl">
              Real-world implementations spanning AI agent orchestration, financial analytics, and interactive security tools.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-900/90 rounded-xl border border-slate-800 self-start md:self-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white font-medium shadow-md shadow-cyan-900/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const isAgent = project.category === 'AI Agents';

            return (
              <div
                key={project.id}
                className="group relative rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-slate-700/80 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-950/20"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 group-hover:bg-cyan-500/10 blur-2xl rounded-full pointer-events-none transition-all" />

                <div className="space-y-4">
                  
                  {/* Top Bar: Category & Status */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 text-cyan-400">
                        <FolderGit2 className="w-4 h-4" />
                      </span>
                      <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 px-2.5 py-0.5 rounded border border-cyan-800/40">
                        {project.category}
                      </span>
                    </div>

                    {project.featured && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-indigo-300 bg-indigo-950/50 border border-indigo-800/50 px-2 py-0.5 rounded-full">
                        <Sparkles className="w-3 h-3 text-indigo-400" />
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors font-mono">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  {project.highlights && (
                    <div className="space-y-1.5 pt-1">
                      {project.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-slate-300 group-hover:border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Footer Buttons */}
                <div className="pt-6 mt-6 border-t border-slate-800/70 flex items-center justify-between gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-300 hover:text-white px-3.5 py-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/80 transition-all hover:scale-102"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Read Docs</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* GitHub Repositories Link CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-base font-semibold text-white font-mono">
              Want to inspect more code and experimental branches?
            </h4>
            <p className="text-xs text-slate-400 font-mono">
              Check out my active work, scripts, and explorations directly on GitHub.
            </p>
          </div>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-mono font-medium hover:text-white transition-all shrink-0"
          >
            <GithubIcon className="w-4 h-4" />
            <span>github.com/LY-UtkarshMishra-09</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
