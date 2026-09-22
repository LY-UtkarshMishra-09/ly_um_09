import { portfolioData } from '@/data/portfolioData';
import { GraduationCap, BookOpen, CheckCircle } from 'lucide-react';

export default function About() {
  const { education, personal } = portfolioData;

  return (
    <section id="about" className="py-20 bg-black border-t border-zinc-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-2 mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">
            <span>01 // BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Me & Academic Path
          </h2>
          <p className="text-zinc-400 text-base max-w-2xl">
            Building software with intent, curiosity, and a deep appreciation for core computer science fundamentals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-850 space-y-4 text-zinc-300 leading-relaxed shadow-xl shadow-black">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <span>The Engineering Journey</span>
              </h3>
              
              <p>
                I am a first-year Computer Science undergraduate at <strong className="text-white font-semibold">Jaypee Institute of Information Technology (JIIT)</strong>, Noida, graduating with the <strong className="text-zinc-100">Batch of 2030</strong>. 
                My fascination with software began with a curiosity about how lines of code could translate into responsive, intelligent systems that solve real problems.
              </p>

              <p>
                Currently, my primary focus spans two interconnected frontiers: <strong className="text-white">Modern Full-Stack Engineering</strong> (building fast, intuitive user experiences with Next.js, React, and robust backend APIs) and <strong className="text-emerald-400">Autonomous AI Agents</strong> (designing tool-calling pipelines and contextual reasoning models that augment human capability).
              </p>

              <p>
                Whether it's orchestrating synchronized study companions like <span className="font-mono text-white">TeachSync_AI</span>, analyzing personal cash flow mechanics in <span className="font-mono text-zinc-200">CashSense</span>, or exploring cyber defense paradigms in <span className="font-mono text-zinc-200">CyberDome</span>, I love transforming ideas into tangible, production-grade software.
              </p>

              <div className="pt-4 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>C++ & Data Structures</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Full-Stack Web (React & Next.js)</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Agentic Systems & LLM APIs</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Security & System Foundations</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Education Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-850 shadow-2xl shadow-black space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white leading-tight">Jaypee Institute of Information Technology</h4>
                  <p className="text-xs font-mono text-zinc-400">JIIT • Noida, India</p>
                </div>
              </div>

              <div className="space-y-2 py-3 border-y border-zinc-800 text-sm">
                <div className="flex items-center justify-between text-zinc-300">
                  <span className="text-zinc-400">Degree</span>
                  <span className="font-semibold text-zinc-100">B.Tech in Computer Science</span>
                </div>
                <div className="flex items-center justify-between text-zinc-300">
                  <span className="text-zinc-400">Graduation Batch</span>
                  <span className="font-mono text-white">2026 – 2030 (Batch 2030)</span>
                </div>
                <div className="flex items-center justify-between text-zinc-300">
                  <span className="text-zinc-400">Current Standing</span>
                  <span className="inline-flex items-center gap-1 text-emerald-400 font-mono text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    1st Year • Semester 1
                  </span>
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-zinc-300" />
                  <span>Key Academic Focus</span>
                </div>
                <ul className="space-y-2 text-xs text-zinc-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Programming in C++ & Object-Oriented Foundations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Problem Solving & Data Structures Foundations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Discrete Mathematics & Algorithmic Logic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Active participation in collegiate coding clubs & tech initiatives</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
