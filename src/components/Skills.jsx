'use client';

import { portfolioData } from '@/data/portfolioData';
import { 
  Code, Terminal, FileCode2, FileCode, Database, Layout, 
  Globe, Layers, Palette, Server, Network, 
  Sparkles, Wrench, MessageSquareCode, BrainCircuit, 
  GitBranch, TerminalSquare, Laptop, Send, Cloud 
} from 'lucide-react';

const iconMap = {
  Code, Terminal, FileCode2, FileCode, Database, Layout,
  Globe, Layers, Palette, Server, Network,
  Sparkles, Wrench, MessageSquareCode, BrainCircuit,
  GitBranch, TerminalSquare, Laptop, Send, Cloud
};

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 bg-slate-950/70 border-t border-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-2 mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
            <span>04 // TECHNICAL TOOLBOX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            A breakdown of languages, modern web frameworks, AI agent capabilities, and developer tools in my workflow.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], cIdx) => (
            <div
              key={category}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/80 transition-all space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
                  <span className="text-cyan-400">#</span>
                  <span>{category}</span>
                </h3>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                  {items.length} tools
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {items.map((skill) => {
                  const Icon = iconMap[skill.icon] || Code;
                  return (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/70 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all flex items-center gap-3 group"
                    >
                      <div className="p-2 rounded-lg bg-slate-900 text-cyan-400 group-hover:scale-105 group-hover:text-cyan-300 transition-all border border-slate-800">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white truncate">
                          {skill.name}
                        </div>
                        <div className="text-[11px] font-mono text-slate-400 truncate">
                          {skill.level}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

