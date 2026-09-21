import { portfolioData } from '@/data/portfolioData';
import { Code2, Bot, Cpu, ArrowUpRight, CheckCircle2, Terminal } from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Bot: Bot,
  Cpu: Cpu,
};

export default function FocusAreas() {
  const { focusAreas } = portfolioData;

  return (
    <section id="focus" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-2 mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
            <span>02 // CORE PILLARS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            What I Focus On & Build
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            Bridging modern frontend delight with distributed backend engineering and autonomous AI agent intelligence.
          </p>
        </div>

        {/* Focus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => {
            const Icon = iconMap[area.icon] || Code2;
            const isAgent = index === 1;

            return (
              <div
                key={area.title}
                className={`group relative p-6 sm:p-7 rounded-2xl bg-slate-900/60 border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
                  isAgent
                    ? 'border-indigo-500/40 hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-950/40'
                    : 'border-slate-800 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-950/30'
                }`}
              >
                {/* Glow highlight on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

                <div className="space-y-5">
                  {/* Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`p-3 rounded-xl border ${
                        isAgent
                          ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400'
                          : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 px-2.5 py-1 rounded bg-slate-950 border border-slate-800">
                      PILLAR 0{index + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400/90 mt-1">
                      {area.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {area.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    {area.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-slate-200">
                  <span>Explore in Projects</span>
                  <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

