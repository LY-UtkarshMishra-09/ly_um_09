import { portfolioData } from '@/data/portfolioData';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="border-t border-zinc-900 bg-black py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Branding & Status */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-mono text-sm font-bold text-white tracking-tight">Utkarsh Mishra</span>
              <span className="text-zinc-600 font-mono">•</span>
              <span className="text-xs font-mono text-zinc-400">JIIT CS '30</span>
            </div>
            <p className="text-xs text-zinc-500 font-mono">
              Designed & engineered with Next.js 15, Tailwind CSS, & Obsidian Dark Mode.
            </p>
          </div>

          {/* Middle: Status indicator */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open to Collaborations</span>
          </div>

          {/* Right: Quick Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="#hero"
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors flex items-center gap-1 text-xs font-mono"
              title="Return to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-zinc-900 text-center text-xs font-mono text-zinc-600">
          © {new Date().getFullYear()} Utkarsh Mishra. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
