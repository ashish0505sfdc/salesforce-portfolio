import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, MessageCircle, Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';
import { triggerCelebrationConfetti } from './ConfettiEffect';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E261F] text-[#FAF8F5] pt-16 pb-12 border-t border-[#2D382E] relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2D382E]">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div
                onClick={() => triggerCelebrationConfetti()}
                className="w-10 h-10 rounded-xl bg-[#4E614B] text-[#F6F4EE] flex items-center justify-center font-bold text-base cursor-pointer hover:scale-105 transition-transform"
              >
                AK
              </div>
              <div>
                <span className="font-bold text-lg text-white">
                  {PERSONAL_INFO.name}
                </span>
                <p className="text-xs text-[#9A788E]">
                  13x Certified Salesforce Technical Architect
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Architecting enterprise transformations across Financial Services Cloud, Revenue Cloud (CPQ), OmniStudio, and Agentforce AI.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-800 hover:bg-[#4E614B] text-stone-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-800 hover:bg-[#4E614B] text-stone-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="GitHub Profile"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-800 hover:bg-emerald-600 text-stone-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-9 h-9 rounded-xl bg-stone-800 hover:bg-[#9A788E] text-stone-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li><a href="#about" className="hover:text-[#C5A059] transition-colors">Architect Philosophy</a></li>
              <li><a href="#impact" className="hover:text-[#C5A059] transition-colors">Key Metrics & Impact</a></li>
              <li><a href="#experience" className="hover:text-[#C5A059] transition-colors">Experience Timeline</a></li>
              <li><a href="#certifications" className="hover:text-[#C5A059] transition-colors">13x Certifications</a></li>
              <li><a href="#skills" className="hover:text-[#C5A059] transition-colors">Skills Matrix</a></li>
              <li><a href="#blueprints" className="hover:text-[#C5A059] transition-colors">Architecture Blueprints</a></li>
            </ul>
          </div>

          {/* Direct Reach */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
              Direct Contact
            </h4>
            <p className="text-xs text-stone-300">
              <strong>Email:</strong> {PERSONAL_INFO.email}
            </p>
            <p className="text-xs text-stone-300">
              <strong>Phone:</strong> {PERSONAL_INFO.phoneDisplay} / {PERSONAL_INFO.phoneAltDisplay}
            </p>
            <p className="text-xs text-stone-300">
              <strong>Location:</strong> {PERSONAL_INFO.location}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open for Advisory & Leadership</span>
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {currentYear} Ashish Kumar. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-[#4E614B] text-white flex items-center gap-2 transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
