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
    <section id="skills" className="py-20 bg-black border-t border-zinc-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-2 mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">
            <span>04 // TECHNICAL TOOLBOX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Skills & Technologies
          </h2>
          <p className="text-zinc-400 text-base max-w-2xl">
            A breakdown of languages, modern web frameworks, AI agent capabilities, and developer tools in my workflow.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="p-6 sm:p-7 rounded-2xl bg-zinc-950 border border-zinc-850 hover:border-zinc-750 transition-all space-y-4 shadow-xl shadow-black"
            >
              <div className="flex items-center justify-between border-b border-zinc-850 pb-3">
                <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
                  <span className="text-zinc-500">#</span>
                  <span>{category}</span>
                </h3>
                <span className="text-[11px] font-mono text-zinc-400 bg-black px-2 py-0.5 rounded border border-zinc-800">
                  {items.length} tools
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {items.map((skill) => {
                  const Icon = iconMap[skill.icon] || Code;
                  return (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-black border border-zinc-850 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all flex items-center gap-3 group"
                    >
                      <div className="p-2 rounded-lg bg-zinc-900 text-zinc-300 group-hover:scale-105 group-hover:text-emerald-400 transition-all border border-zinc-800">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs sm:text-sm font-semibold text-zinc-200 group-hover:text-white truncate">
                          {skill.name}
                        </div>
                        <div className="text-[11px] font-mono text-zinc-400 truncate">
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
