'use client';

import { portfolioData } from '@/data/portfolioData';
import { ArrowRight, Mail } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-black">
      {/* Subtle monochrome ambient light (zero blue) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-b from-zinc-800/10 via-zinc-900/5 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Status Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 shadow-inner">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono text-zinc-300">
            <span className="text-white font-semibold">JIIT CSE</span> • Batch of 2030 (1st Year)
          </span>
        </div>

        {/* Main Headline */}
        <div className="space-y-4">
          <h2 className="text-xs sm:text-sm font-mono font-medium text-zinc-400 tracking-wider uppercase">
            Hello World, I'm <span className="text-white font-semibold">{personal.name}</span>
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            Engineering{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              Full-Stack
            </span>{' '}
            Systems &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
              AI Agents
            </span>
            .
          </h1>
        </div>

        {/* Bio Description */}
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Computer Science undergraduate at <span className="text-zinc-200 font-medium">Jaypee Institute of Information Technology</span>. 
          Focused on crafting resilient web applications, orchestrating autonomous AI agent workflows, and mastering computer science fundamentals from first principles.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-mono text-sm font-semibold hover:bg-zinc-200 shadow-lg shadow-white/5 transition-all hover:scale-102 active:scale-98 group"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-mono text-sm font-medium transition-all hover:border-zinc-700 hover:text-white"
          >
            <GithubIcon className="w-4 h-4 text-zinc-400" />
            <span>GitHub Profile</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-mono text-sm hover:text-white transition-all"
          >
            <Mail className="w-4 h-4 text-zinc-400" />
            <span>Contact</span>
          </a>
        </div>

        {/* Metrics Grid */}
        <div className="pt-8 border-t border-zinc-900 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {personal.stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-zinc-950 border border-zinc-850 space-y-1">
              <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">{stat.label}</div>
              <div className="text-sm font-semibold text-zinc-200">{stat.value}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
