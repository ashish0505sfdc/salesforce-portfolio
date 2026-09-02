import React, { useState } from 'react';
import { PHILOSOPHY_PILLARS } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { Landmark, Layers, Sparkles, Bot, Shield, CheckCircle2, ArrowUpRight, Cpu } from 'lucide-react';
import { triggerCelebrationConfetti } from './ConfettiEffect';

export const Philosophy: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>(PHILOSOPHY_PILLARS[0].id);

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Landmark': return <Landmark className="w-6 h-6 text-[#4E614B]" />;
      case 'Layers': return <Layers className="w-6 h-6 text-[#9A788E]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#C5A059]" />;
      case 'Bot': return <Bot className="w-6 h-6 text-[#4E614B]" />;
      default: return <Cpu className="w-6 h-6 text-[#4E614B]" />;
    }
  };

  const selectedPillar = PHILOSOPHY_PILLARS.find(p => p.id === selectedPillarId) || PHILOSOPHY_PILLARS[0];

  return (
    <section id="about" className="py-20 bg-[#EFECE4]/60 border-y border-[#E5E0D5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Big 4 Narrative */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E0D5] text-xs font-bold text-[#4E614B] mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>Architectural Philosophy & Big 4 Governance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E261F] tracking-tight">
            Resilient Architecture Built for High-Stakes Enterprise Scale
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4A554A] leading-relaxed">
            With 13+ years operating at the apex of technical design authority—most notably delivering complex programs under Big 4 governance (PwC)—my philosophy is centered on building deterministic, decoupled architectures that thrive under Large Data Volumes (LDV), strict financial regulatory mandates, and rapid release cycles.
          </p>
        </div>

        {/* 4 Interactive Specialization Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {PHILOSOPHY_PILLARS.map((pillar) => {
            const isSelected = pillar.id === selectedPillarId;
            return (
              <TiltCard key={pillar.id} className="h-full">
                <div
                  onClick={() => {
                    setSelectedPillarId(pillar.id);
                    triggerCelebrationConfetti();
                  }}
                  className={`h-full p-6 rounded-2xl cursor-pointer text-left transition-all border ${
                    isSelected
                      ? 'bg-white border-[#4E614B] shadow-lg ring-2 ring-[#4E614B]/20'
                      : 'glass-card border-[#E5E0D5] hover:border-[#4E614B]/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${isSelected ? 'bg-[#4E614B]/10' : 'bg-[#EFECE4]'}`}>
                      {getPillarIcon(pillar.iconName)}
                    </div>
                    <ArrowUpRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#4E614B] translate-x-0.5 -translate-y-0.5' : 'text-[#768375]'}`} />
                  </div>

                  <h3 className="text-base font-bold text-[#1E261F] mb-1">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#9A788E] mb-3">
                    {pillar.subtitle}
                  </div>
                  <p className="text-xs text-[#4A554A] line-clamp-3 leading-relaxed">
                    {pillar.summary}
                  </p>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Selected Pillar Deep Dive Panel */}
        <div className="glass-panel-warm rounded-3xl p-6 sm:p-10 border border-[#E5E0D5] text-left shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#4E614B]/10">
                  {getPillarIcon(selectedPillar.iconName)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1E261F]">
                    {selectedPillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#4E614B]">
                    {selectedPillar.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#4A554A] leading-relaxed">
                {selectedPillar.summary}
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#1E261F]">
                  Architectural Execution & Deliverables:
                </div>
                {selectedPillar.bulletPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A554A]">
                    <CheckCircle2 className="w-4 h-4 text-[#4E614B] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/90 rounded-2xl p-6 border border-[#E5E0D5] space-y-5 shadow-sm">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#9A788E] mb-2">
                  Quantifiable Business Impact
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E0D5] text-xs sm:text-sm font-semibold text-[#1E261F] leading-relaxed">
                  "{selectedPillar.businessImpact}"
                </div>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#768375] mb-2.5">
                  Core Technologies & Domain Tools
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedPillar.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-semibold bg-[#EFECE4] border border-[#E5E0D5] rounded-lg text-[#1E261F]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#experience"
                  className="w-full py-2.5 text-xs font-bold text-center text-[#1E261F] bg-[#FAF8F5] hover:bg-white border border-[#E5E0D5] hover:border-[#4E614B] rounded-xl flex items-center justify-center gap-2 transition-all shadow-2xs"
                >
                  <span>See Roles Applying This Pillar</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#4E614B]" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
