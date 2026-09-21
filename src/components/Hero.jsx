'use client';

import { portfolioData } from '@/data/portfolioData';
import { ArrowRight, Mail, Terminal, Sparkles, FileText, CheckCircle2, ChevronRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Introduction */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Terminal Status Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-slate-300">
                <span className="text-cyan-400 font-semibold">JIIT CSE</span> • Batch of 2030 (1st Year)
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h2 className="text-sm sm:text-base font-mono font-medium text-slate-400 tracking-wide">
                HELLO WORLD, I'M <span className="text-slate-100 font-semibold">{personal.name.toUpperCase()}</span>
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Engineering{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
                  Full-Stack
                </span>{' '}
                Systems &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
                  AI Agents
                </span>
                .
              </h1>
            </div>

            {/* Subheading / Bio */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              CS undergraduate at <span className="text-cyan-300 font-medium">Jaypee Institute of Information Technology</span>. 
              Focused on crafting resilient web applications, orchestrating autonomous AI agent workflows, and mastering computer science fundamentals from first principles.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-mono text-sm font-semibold hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 transition-all hover:scale-102 active:scale-98 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-mono text-sm font-medium transition-all hover:border-slate-600 hover:text-white"
              >
                <GithubIcon className="w-4 h-4 text-slate-400" />
                <span>GitHub Profile</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 text-slate-300 font-mono text-sm hover:text-cyan-300 transition-all"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {personal.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">{stat.label}</div>
                  <div className="text-sm font-semibold text-slate-200">{stat.value}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Terminal Preview */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl shadow-cyan-950/40 overflow-hidden group hover:border-slate-700 transition-all">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">utkarsh-mishra.ts</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400/90 bg-cyan-950/50 px-2.5 py-0.5 rounded border border-cyan-800/50">
                  <Sparkles className="w-3 h-3" />
                  <span>Agent v1.0</span>
                </div>
              </div>

              {/* Terminal Code Body */}
              <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto space-y-2">
                <p className="text-slate-500">// Welcome to Utkarsh's workspace</p>
                <p>
                  <span className="text-indigo-400">const</span>{' '}
                  <span className="text-cyan-300">developer</span> = &#123;
                </p>
                <div className="pl-4 space-y-1 border-l border-slate-800/80 ml-1">
                  <p>
                    name: <span className="text-emerald-400">&apos;Utkarsh Mishra&apos;</span>,
                  </p>
                  <p>
                    education: <span className="text-emerald-400">&apos;JIIT CSE (2026-30)&apos;</span>,
                  </p>
                  <p>
                    currentFocus: [
                    <span className="text-emerald-300">&apos;Full-Stack&apos;</span>,{' '}
                    <span className="text-emerald-300">&apos;AI Agents&apos;</span>
                    ],
                  </p>
                  <p>
                    flagshipProjects: [
                    <span className="text-purple-300">&apos;TeachSync_AI&apos;</span>,{' '}
                    <span className="text-purple-300">&apos;CashSense&apos;</span>,{' '}
                    <span className="text-purple-300">&apos;CyberDome&apos;</span>
                    ],
                  </p>
                  <p>
                    learningMindset: <span className="text-cyan-400">true</span>,
                  </p>
                  <p>
                    readyToBuild: <span className="text-emerald-400">() =&gt; Promise.resolve('Always')</span>,
                  </p>
                </div>
                <p>&#125;;</p>
                
                {/* Live execution indicator */}
                <div className="pt-3 flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <span className="text-emerald-400">✓</span>
                  <span>status: 0 errors, ready to deploy.</span>
                </div>
              </div>

              {/* Quick links inside terminal footer */}
              <div className="px-5 py-3 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">github.com/LY-UtkarshMishra-09</span>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>explore repo</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
