'use client';

import { useState, useEffect } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
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
            ? 'bg-black/95 backdrop-blur-md border-zinc-800 shadow-2xl shadow-black py-3 px-5'
            : 'bg-zinc-950/80 backdrop-blur-sm border-zinc-850 py-3.5 px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-700/70 flex items-center justify-center text-white group-hover:border-zinc-500 group-hover:scale-105 transition-all">
              <span className="font-mono text-sm font-bold tracking-tight">UM</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors flex items-center gap-1.5">
                Utkarsh Mishra
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              </span>
              <span className="text-[10px] text-zinc-400 font-mono tracking-tight">JIIT '30 • CS Undergrad</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-zinc-900/80 p-1 rounded-xl border border-zinc-800">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all ${
                    isActive
                      ? 'text-white bg-zinc-800 font-medium shadow-sm border border-zinc-700'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
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
              className="p-2 rounded-xl text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all hover:scale-105"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3.5 py-2 rounded-xl bg-white text-black hover:bg-zinc-200 shadow-md transition-all hover:scale-102 active:scale-98"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-zinc-800 mt-3 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-mono text-zinc-300 hover:text-white hover:bg-zinc-800/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex items-center gap-2 border-t border-zinc-800/80">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-white text-black text-xs font-mono font-medium hover:bg-zinc-200"
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
