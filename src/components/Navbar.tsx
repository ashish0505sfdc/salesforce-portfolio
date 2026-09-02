import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, Download, MessageSquare } from 'lucide-react';
import { triggerCelebrationConfetti } from './ConfettiEffect';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Impact', href: '#impact' },
    { name: 'Experience', href: '#experience' },
    { name: '13x Certs', href: '#certifications' },
    { name: 'Skills', href: '#skills' },
    { name: 'Blueprints', href: '#blueprints' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F6F4EE]/90 backdrop-blur-md py-3 shadow-sm border-b border-[#E5E0D5]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand & Monogram */}
          <a
            href="#"
            className="group flex items-center gap-3"
            onClick={() => triggerCelebrationConfetti()}
          >
            <div className="w-10 h-10 rounded-xl bg-[#1E261F] text-[#F6F4EE] flex items-center justify-center font-bold text-base tracking-wider shadow-md group-hover:bg-[#4E614B] transition-colors">
              AK
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#1E261F] text-base tracking-tight group-hover:text-[#4E614B] transition-colors">
                  {PERSONAL_INFO.name}
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#4E614B]/10 text-[#4E614B] border border-[#4E614B]/20">
                  13x Certified
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-[#4A554A]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping inline-block" />
                <span className="truncate max-w-[200px] sm:max-w-xs">{PERSONAL_INFO.status}</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 px-5 py-2 rounded-full glass-panel border border-[#E5E0D5]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#4A554A] hover:text-[#1E261F] transition-colors relative hover:after:content-[''] hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:right-0 hover:after:h-[2px] hover:after:bg-[#4E614B] hover:after:rounded-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="px-4 py-2 text-xs font-semibold text-[#1E261F] bg-[#FAF8F5] border border-[#E5E0D5] hover:border-[#4E614B] rounded-xl flex items-center gap-2 transition-all shadow-sm hover:shadow-md hover:bg-white"
            >
              <Download className="w-3.5 h-3.5 text-[#4E614B]" />
              <span>CV (PDF)</span>
            </button>

            <button
              onClick={onOpenContact}
              className="px-4 py-2 text-xs font-semibold text-[#F6F4EE] bg-[#4E614B] hover:bg-[#3D4D3A] rounded-xl flex items-center gap-1.5 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Quick Connect</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 text-xs font-semibold text-[#1E261F] bg-[#FAF8F5] border border-[#E5E0D5] rounded-lg"
              title="Download CV"
            >
              <Download className="w-4 h-4 text-[#4E614B]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1E261F] hover:text-[#4E614B] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#F6F4EE]/98 backdrop-blur-xl border-b border-[#E5E0D5] px-5 pt-3 pb-6 mt-3 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-[#1E261F] hover:bg-[#EFECE4] rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E5E0D5] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 text-xs font-semibold text-[#1E261F] bg-white border border-[#E5E0D5] rounded-xl flex items-center justify-center gap-2 shadow-sm"
            >
              <Download className="w-4 h-4 text-[#4E614B]" />
              <span>View Executive CV (PDF)</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 text-xs font-semibold text-white bg-[#4E614B] rounded-xl flex items-center justify-center gap-2 shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get in Touch / Quick Connect</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
