import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Utkarsh Mishra | Full-Stack Engineer & AI Agent Architect',
  description: 'Portfolio of Utkarsh Mishra, Computer Science student at Jaypee Institute of Information Technology (JIIT, Batch 2030). Exploring full-stack engineering, autonomous AI agents, and systems.',
  keywords: [
    'Utkarsh Mishra',
    'JIIT',
    'Jaypee Institute of Information Technology',
    'Full Stack Developer',
    'AI Agents',
    'Next.js Portfolio',
    'Software Engineer',
    'TeachSync_AI',
    'CashSense',
    'CyberDome'
  ],
  authors: [{ name: 'Utkarsh Mishra' }],
  creator: 'Utkarsh Mishra',
  openGraph: {
    title: 'Utkarsh Mishra | Full-Stack Engineer & AI Agent Architect',
    description: 'Computer Science undergraduate at JIIT. Architecting resilient full-stack systems and autonomous AI agents.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Utkarsh Mishra Portfolio',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <body className="font-sans bg-slate-950 text-slate-100 min-h-screen selection:bg-cyan-500/20 selection:text-cyan-200">
        <div className="min-h-screen bg-grid relative">
          {children}
        </div>
      </body>
    </html>
  );
}

