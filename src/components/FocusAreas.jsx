import { portfolioData } from '@/data/portfolioData';
import { Code2, Bot, Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Bot: Bot,
  Cpu: Cpu,
};

export default function FocusAreas() {
  const { focusAreas } = portfolioData;

  return (
    <section id="focus" className="py-20 bg-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-2 mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">
            <span>02 // CORE PILLARS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            What I Focus On & Build
          </h2>
          <p className="text-zinc-400 text-base max-w-2xl">
            Bridging modern frontend delight with distributed backend engineering and autonomous AI agent intelligence.
          </p>
        </div>

        {/* Focus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => {
            const Icon = iconMap[area.icon] || Code2;

            return (
              <div
                key={area.title}
                className="group relative p-6 sm:p-7 rounded-2xl bg-zinc-950 border border-zinc-850 hover:border-zinc-700 hover:shadow-2xl hover:shadow-black transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl border bg-zinc-900 border-zinc-800 text-white group-hover:text-emerald-400 group-hover:border-zinc-700 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 px-2.5 py-1 rounded bg-black border border-zinc-800">
                      PILLAR 0{index + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-zinc-100 transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400 mt-1">
                      {area.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {area.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2 pt-2 border-t border-zinc-800">
                    {area.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-zinc-200">
                  <span>Explore in Projects</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
