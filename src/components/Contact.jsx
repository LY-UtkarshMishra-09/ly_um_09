'use client';

import { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Mail, Copy, Check, Send, MessageSquare, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback open mailto
        window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(
          formState.subject || 'Portfolio Inquiry'
        )}&body=${encodeURIComponent(`Hi Utkarsh,\n\n${formState.message}\n\nFrom: ${formState.name} (${formState.email})`)}`;
        setSubmitted(true);
      }
    } catch (err) {
      // Direct mailto fallback
      window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(
        formState.subject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(`Hi Utkarsh,\n\n${formState.message}\n\nFrom: ${formState.name} (${formState.email})`)}`;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background glow accent */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-600/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-2 mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
            <span>05 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let's Collaborate & Connect
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            Whether you're looking to discuss AI agents, full-stack systems, collegiate hackathons, or just want to chat tech—my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-6">
              
              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {personal.status}
                </span>
                <h3 className="text-xl font-bold text-white">Direct Reach</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-mono">
                  Preferred for project proposals, technical inquiries, or open-source discussions.
                </p>
              </div>

              {/* Copy Email Box */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="text-[11px] font-mono text-slate-400">Email Address</div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs sm:text-sm text-slate-200 select-all truncate">
                    {personal.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 transition-all shrink-0 flex items-center gap-1.5 text-xs font-mono"
                    title="Copy Email"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-2.5">
                <div className="text-xs font-mono text-slate-400">Profiles & Social</div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white flex items-center gap-2.5 text-xs font-mono transition-all"
                  >
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={`mailto:${personal.email}`}
                    className="p-3 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white flex items-center gap-2.5 text-xs font-mono transition-all"
                  >
                    <Mail className="w-4 h-4 text-indigo-400" />
                    <span>Send Mail</span>
                  </a>
                </div>
              </div>

              {/* Institution Note */}
              <div className="pt-4 border-t border-slate-800 text-xs font-mono text-slate-400 space-y-1">
                <div className="text-slate-300 font-semibold">{personal.institution}</div>
                <div>Noida, Uttar Pradesh, India • UTC+5:30</div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 shadow-xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-mono">Message Transmitted!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out! I'll review your note and get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Alex Rivera"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-sm text-white placeholder-slate-500 font-mono transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-sm text-white placeholder-slate-500 font-mono transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Subject / Topic</label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Project Collaboration / AI Discussion"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-sm text-white placeholder-slate-500 font-mono transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Utkarsh, I came across your portfolio and TeachSync_AI project..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-sm text-white placeholder-slate-500 font-mono transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-mono text-xs sm:text-sm font-semibold hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-900/30 transition-all hover:scale-102 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending payload...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Dispatch Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

