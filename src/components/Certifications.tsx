import React, { useState } from 'react';
import { CERTIFICATIONS_LIST } from '../data/portfolioData';
import type { CertificationItem, CertCategory } from '../types';
import { TiltCard } from './TiltCard';
import { Award, ShieldCheck, ExternalLink, X } from 'lucide-react';
import { triggerCelebrationConfetti } from './ConfettiEffect';

export const Certifications: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CertCategory>('all');
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const filteredCerts = CERTIFICATIONS_LIST.filter(cert => {
    if (activeCategory === 'all') return true;
    return cert.category === activeCategory;
  });

  return (
    <section id="certifications" className="py-20 bg-[#EFECE4]/50 border-y border-[#E5E0D5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E0D5] text-xs font-bold text-[#4E614B] mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Official Salesforce Credentials (13x)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E261F] tracking-tight">
              13x Certified Salesforce Technical Architect
            </h2>
            <p className="mt-2 text-base text-[#4A554A] max-w-2xl">
              Spanning System Architect, Integration, Identity, Data, Sharing, CPQ, AI Specialist, and Data Cloud consultant masteries.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl glass-panel border border-[#E5E0D5] flex-wrap">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#1E261F] text-[#F6F4EE] shadow-sm'
                  : 'text-[#4A554A] hover:text-[#1E261F]'
              }`}
            >
              All 13x Certs
            </button>
            <button
              onClick={() => setActiveCategory('architect')}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${
                activeCategory === 'architect'
                  ? 'bg-[#1E261F] text-[#F6F4EE] shadow-sm'
                  : 'text-[#4A554A] hover:text-[#1E261F]'
              }`}
            >
              Architect Domain (6)
            </button>
            <button
              onClick={() => setActiveCategory('ai-data')}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${
                activeCategory === 'ai-data'
                  ? 'bg-[#1E261F] text-[#F6F4EE] shadow-sm'
                  : 'text-[#4A554A] hover:text-[#1E261F]'
              }`}
            >
              AI & Data Cloud (3)
            </button>
            <button
              onClick={() => setActiveCategory('developer')}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${
                activeCategory === 'developer'
                  ? 'bg-[#1E261F] text-[#F6F4EE] shadow-sm'
                  : 'text-[#4A554A] hover:text-[#1E261F]'
              }`}
            >
              Dev & Admin (4)
            </button>
          </div>
        </div>

        {/* Certifications Badge Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <TiltCard key={cert.id} className="h-full">
              <div
                onClick={() => {
                  setSelectedCert(cert);
                  triggerCelebrationConfetti();
                }}
                className="h-full p-6 rounded-3xl glass-card border border-[#E5E0D5] flex flex-col justify-between cursor-pointer group hover:border-[#4E614B]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-[#1E261F] text-[#F6F4EE] flex items-center justify-center font-bold text-xs">
                        SF
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#EFECE4] text-[#4E614B] border border-[#E5E0D5]">
                        {cert.level}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono font-semibold text-[#9A788E]">
                      {cert.code}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#1E261F] group-hover:text-[#4E614B] transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  <p className="mt-2 text-xs text-[#4A554A] line-clamp-3 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#E5E0D5]/70 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-emerald-700 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Verified Credential</span>
                  </div>
                  <span className="text-[#9A788E] font-medium group-hover:translate-x-0.5 transition-transform">
                    View Verification →
                  </span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Verification Modal */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-[#FAF8F5] max-w-lg w-full rounded-3xl p-6 sm:p-8 border border-[#E5E0D5] shadow-2xl space-y-6 relative text-left">
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#EFECE4] text-[#768375] hover:text-[#1E261F] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#1E261F] text-[#F6F4EE] flex items-center justify-center font-bold text-sm shadow-md">
                  SF
                </div>
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#4E614B]/10 text-[#4E614B] border border-[#4E614B]/20">
                    {selectedCert.level}
                  </span>
                  <h3 className="text-xl font-bold text-[#1E261F] mt-1">
                    {selectedCert.title}
                  </h3>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E5E0D5] space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-[#768375]">Credential Code:</span>
                  <span className="font-mono font-bold text-[#1E261F]">{selectedCert.code}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#768375]">Candidate / Credential ID:</span>
                  <span className="font-mono font-bold text-[#4E614B]">{selectedCert.credentialId}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#768375]">Status:</span>
                  <span className="font-bold text-emerald-700 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Active & Verified
                  </span>
                </div>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#1E261F] mb-2">
                  Architectural Competencies Validated:
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedCert.skillsValidated.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-semibold bg-[#EFECE4] border border-[#E5E0D5] rounded-lg text-[#1E261F]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={selectedCert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 text-xs font-bold text-[#F6F4EE] bg-[#4E614B] hover:bg-[#3D4D3A] rounded-xl flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <span>Verify on Salesforce Trailhead</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-3 text-xs font-bold text-[#1E261F] bg-white border border-[#E5E0D5] rounded-xl hover:bg-[#EFECE4]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
