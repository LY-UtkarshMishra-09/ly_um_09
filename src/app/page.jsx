import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FocusAreas from '@/components/FocusAreas';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-black text-neutral-100">
      {/* Sticky Glassmorphism Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <FocusAreas />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
