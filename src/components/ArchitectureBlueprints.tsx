import React, { useState } from 'react';
import { BLUEPRINTS_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { Copy, Check, ShieldAlert, Cpu, Terminal, ArrowUpRight } from 'lucide-react';
import { GitHubIcon } from './Icons';
import { triggerCelebrationConfetti } from './ConfettiEffect';

export const ArchitectureBlueprints: React.FC = () => {
  const [selectedBlueprintId, setSelectedBlueprintId] = useState<string>(BLUEPRINTS_DATA[0].id);
  const [copied, setCopied] = useState(false);

  const selectedBlueprint = BLUEPRINTS_DATA.find(b => b.id === selectedBlueprintId) || BLUEPRINTS_DATA[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(selectedBlueprint.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="blueprints" className="py-20 bg-[#EFECE4]/60 border-y border-[#E5E0D5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header with direct GitHub link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E0D5] text-xs font-bold text-[#4E614B] mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>Open Architecture Blueprints</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E261F] tracking-tight">
              Enterprise Apex & Integration Blueprints
            </h2>
            <p className="mt-2 text-base text-[#4A554A] max-w-2xl">
              Battle-tested architectural code patterns engineered for high throughput, governor limit safety, and decoupling.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.gitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 text-xs font-bold text-[#F6F4EE] bg-[#1E261F] hover:bg-[#4E614B] rounded-xl flex items-center gap-2.5 transition-all shadow-md active:scale-95 self-start md:self-auto"
          >
            <GitHubIcon className="w-4 h-4" />
            <span>Explore GitHub Profile (@ashish0505sfdc)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Blueprint Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {BLUEPRINTS_DATA.map((bp) => {
            const isSelected = bp.id === selectedBlueprintId;
            return (
              <div
                key={bp.id}
                onClick={() => {
                  setSelectedBlueprintId(bp.id);
                  triggerCelebrationConfetti();
                }}
                className={`p-4 rounded-2xl cursor-pointer transition-all border ${
                  isSelected
                    ? 'bg-white border-[#4E614B] shadow-md ring-2 ring-[#4E614B]/20'
                    : 'glass-card border-[#E5E0D5] hover:border-[#4E614B]/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#9A788E]">
                    {bp.category}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-[#EFECE4] text-[#1E261F]">
                    {bp.language}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-[#1E261F] line-clamp-2 leading-snug">
                  {bp.title}
                </h4>
              </div>
            );
          })}
        </div>

        {/* Code Viewer Panel */}
        <div className="glass-panel-warm rounded-3xl border border-[#E5E0D5] p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#E5E0D5] pb-5">
            <div>
              <span className="text-xs font-bold uppercase text-[#4E614B]">
                {selectedBlueprint.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E261F] mt-1">
                {selectedBlueprint.title}
              </h3>
            </div>

            <button
              onClick={handleCopyCode}
              className="px-4 py-2.5 text-xs font-bold text-[#1E261F] bg-white border border-[#E5E0D5] hover:border-[#4E614B] rounded-xl flex items-center gap-2 transition-all shadow-sm self-start lg:self-auto"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#4E614B]" />
                  <span>Copy Pattern Code</span>
                </>
              )}
            </button>
          </div>

          {/* Architectural Context & Safeguards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-white border border-[#E5E0D5] space-y-1.5">
              <div className="font-bold text-[#1E261F] flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#4E614B]" />
                <span>Architectural Rationale:</span>
              </div>
              <p className="text-[#4A554A] leading-relaxed">
                {selectedBlueprint.architecturalWhy}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E5E0D5] space-y-1.5">
              <div className="font-bold text-[#1E261F] flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-[#9A788E]" />
                <span>Governor Limit & LDV Safeguards:</span>
              </div>
              <p className="text-[#4A554A] leading-relaxed">
                {selectedBlueprint.governorLimitSafeguards}
              </p>
            </div>
          </div>

          {/* Code Box with Syntax Styling */}
          <div className="relative rounded-2xl bg-[#1E261F] text-[#FAF8F5] p-5 font-mono text-xs overflow-x-auto shadow-inner border border-stone-800">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-700/60 text-[11px] text-stone-400">
              <span>{selectedBlueprint.language.toUpperCase()} • Production Ready</span>
              <span>UTF-8 • Governor Compliant</span>
            </div>
            <pre className="leading-relaxed font-mono-code whitespace-pre">
              <code>{selectedBlueprint.code}</code>
            </pre>
          </div>
        </div>

      </div>
    </section>
  );
};
