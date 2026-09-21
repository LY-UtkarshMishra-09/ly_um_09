'use client';

import { useState, useEffect } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Code2, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'focus', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Pillars', href: '#focus' },
    { name: 'Projects', href: '#projects' },
    { name: 'Tech Stack', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <nav
        className={`max-w-6xl mx-auto rounded-2xl border transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/85 backdrop-blur-md border-slate-800/80 shadow-2xl shadow-cyan-950/20 py-3 px-5'
            : 'bg-slate-900/40 backdrop-blur-sm border-slate-800/40 py-3.5 px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500/20 via-slate-800 to-indigo-500/20 border border-slate-700/60 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400/50 group-hover:scale-105 transition-all">
              <span className="font-mono text-sm font-bold tracking-tight">UM</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                Utkarsh Mishra
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-tight">JIIT '30 • CS Undergrad</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1 rounded-xl border border-slate-800/60">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all ${
                    isActive
                      ? 'text-cyan-300 bg-slate-800/90 font-medium shadow-sm border border-cyan-500/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-400 hover:text-slate-100 bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all hover:scale-105"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 transition-all hover:scale-102 active:scale-98"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-slate-800/80 mt-3 space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-mono text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex items-center gap-2 border-t border-slate-800/60">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-cyan-600 text-white text-xs font-mono font-medium hover:bg-cyan-500"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get in touch</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
