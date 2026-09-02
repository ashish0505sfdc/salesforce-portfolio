import React, { useEffect, useState } from 'react';

export const ParallaxBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Layer 1: Slow Drift Grid Dots & Ambient Radial Glows (Speed: 0.15) */}
      <div
        className="absolute inset-0 bg-grid-dots opacity-60"
        style={{ transform: `translateY(${scrollY * -0.08}px)` }}
      />

      {/* Layer 2: Floating Architectural Glyphs / Geometry (Speed: 0.3) */}
      <div
        className="absolute top-1/4 left-[8%] w-48 h-48 rounded-full border border-[#4E614B]/15 opacity-40 blur-[1px]"
        style={{ transform: `translateY(${scrollY * -0.22}px) rotate(${scrollY * 0.04}deg)` }}
      />
      <div
        className="absolute top-2/3 right-[6%] w-72 h-72 rounded-3xl border border-[#9A788E]/20 opacity-30 blur-[1px]"
        style={{ transform: `translateY(${scrollY * -0.18}px) rotate(${scrollY * -0.03}deg)` }}
      />
      <div
        className="absolute top-1/2 left-[12%] w-32 h-32 rounded-2xl bg-[#C5A059]/10 opacity-40 blur-xl"
        style={{ transform: `translateY(${scrollY * -0.25}px)` }}
      />

      {/* Layer 3: Floating Salesforce Badges / Technical Chips (Speed: 0.45) */}
      <div
        className="hidden xl:block absolute top-[40%] left-[3%] px-3 py-1.5 rounded-xl glass-panel text-[11px] font-mono text-[#4E614B] border border-[#E5E0D5] shadow-xs opacity-60"
        style={{ transform: `translateY(${scrollY * -0.38}px)` }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#4E614B] inline-block mr-1.5" />
        Limits.getCpuTime() &lt; 80%
      </div>
      <div
        className="hidden xl:block absolute top-[75%] right-[4%] px-3 py-1.5 rounded-xl glass-panel text-[11px] font-mono text-[#9A788E] border border-[#E5E0D5] shadow-xs opacity-60"
        style={{ transform: `translateY(${scrollY * -0.32}px)` }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#9A788E] inline-block mr-1.5" />
        FSC • PersonAccounts • LOS
      </div>
      <div
        className="hidden xl:block absolute top-[110%] left-[5%] px-3 py-1.5 rounded-xl glass-panel text-[11px] font-mono text-[#1E261F] border border-[#E5E0D5] shadow-xs opacity-60"
        style={{ transform: `translateY(${scrollY * -0.4}px)` }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block mr-1.5" />
        Copado CI/CD • 0 Defect Gates
      </div>
    </div>
  );
};
