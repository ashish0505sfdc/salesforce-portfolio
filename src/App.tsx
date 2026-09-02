import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ArchitectureBlueprints } from './components/ArchitectureBlueprints';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ConfettiEffect, triggerCelebrationConfetti } from './components/ConfettiEffect';
import { ParallaxBackground } from './components/ParallaxBackground';
import { MessageCircle, FileDown } from 'lucide-react';
import { PERSONAL_INFO } from './data/portfolioData';

export function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleOpenContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#1E261F] relative selection:bg-[#4E614B]/20 selection:text-[#1E261F]">
      {/* Celebratory confetti on load */}
      <ConfettiEffect />

      {/* Multi-layer Parallax Floating Background */}
      <ParallaxBackground />

      {/* Navigation Header */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          onOpenResume={() => setResumeOpen(true)}
        />
        
        <Philosophy />

        <Experience />

        <Certifications />

        <SkillsMatrix />

        <ArchitectureBlueprints />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Executive Printable CV Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Floating Action Pill (Quick Contact & Resume) */}
      <aside aria-label="Quick Actions" className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <button
          onClick={() => {
            triggerCelebrationConfetti();
            setResumeOpen(true);
          }}
          className="p-3 bg-white text-[#1E261F] hover:text-[#4E614B] border border-[#E5E0D5] rounded-2xl shadow-lg hover:shadow-xl flex items-center gap-2 text-xs font-bold transition-all active:scale-95 group"
          title="Open Executive CV"
        >
          <FileDown className="w-4 h-4 text-[#4E614B] group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">Executive CV</span>
        </button>

        <a
          href={PERSONAL_INFO.whatsAppHeroUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 bg-[#4E614B] hover:bg-[#3D4D3A] text-white rounded-2xl shadow-lg hover:shadow-xl flex items-center gap-2 text-xs font-bold transition-all active:scale-95 group"
          title="Direct WhatsApp Chat"
        >
          <MessageCircle className="w-4 h-4 text-emerald-300 group-hover:scale-110 transition-transform" />
          <span>WhatsApp Chat</span>
        </a>
      </aside>
    </div>
  );
}

export default App;
