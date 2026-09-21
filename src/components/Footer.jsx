import { portfolioData } from '@/data/portfolioData';
import { Mail, ArrowUp, Heart, Terminal } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Branding & Status */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-mono text-sm font-bold text-white tracking-tight">Utkarsh Mishra</span>
              <span className="text-slate-600 font-mono">•</span>
              <span className="text-xs font-mono text-cyan-400">JIIT CS '30</span>
            </div>
            <p className="text-xs text-slate-500 font-mono">
              Designed & engineered with Next.js 15, Tailwind CSS, & Engineering Dark Slate aesthetic.
            </p>
          </div>

          {/* Middle: Git Terminal style status */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-400">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>git checkout main // v1.0.0</span>
          </div>

          {/* Right: Quick Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="#hero"
              className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-900 transition-colors flex items-center gap-1 text-xs font-mono"
              title="Return to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 text-center text-xs font-mono text-slate-600">
          © {new Date().getFullYear()} Utkarsh Mishra. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

