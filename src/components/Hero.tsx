import React from 'react';
import { PERSONAL_INFO, HERO_METRICS } from '../data/portfolioData';
import { Salesforce3DCloud } from './Salesforce3DCloud';
import { TiltCard } from './TiltCard';
import {
  Award,
  TrendingUp,
  Users,
  Zap,
  GitBranch,
  ArrowRight,
  MessageCircle,
  FileText,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { triggerCelebrationConfetti } from './ConfettiEffect';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-5 h-5 text-[#4E614B]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#4E614B]" />;
      case 'Users': return <Users className="w-5 h-5 text-[#9A788E]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#C5A059]" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-[#4E614B]" />;
      default: return <Sparkles className="w-5 h-5 text-[#4E614B]" />;
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#4E614B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-[#9A788E]/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Architectural Authority */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFECE4] border border-[#E5E0D5] text-xs font-semibold text-[#1E261F] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#4E614B]" />
              <span>Big 4 Design Authority • 13+ Years Experience</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1E261F] tracking-tight leading-[1.12]">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-[#4E614B] flex items-center gap-2 flex-wrap">
                <span>{PERSONAL_INFO.role}</span>
                <span className="text-[#E5E0D5]">•</span>
                <span className="text-[#9A788E]">13x Certified</span>
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#4A554A] leading-relaxed max-w-2xl">
              {PERSONAL_INFO.subHeadline}
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['FSC & Banking LOS', 'Revenue Cloud CPQ', 'OmniStudio & LWC', 'Agentforce AI', 'AWS Serverless'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-white/80 border border-[#E5E0D5] rounded-lg text-[#1E261F] shadow-2xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#experience"
                className="px-6 py-3.5 text-sm font-bold text-[#F6F4EE] bg-[#1E261F] hover:bg-[#4E614B] rounded-xl flex items-center gap-2.5 transition-all shadow-md hover:shadow-lg active:scale-95 group"
              >
                <span>Explore Blueprints & Roles</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.whatsAppHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 text-sm font-semibold text-[#1E261F] bg-[#EFECE4] hover:bg-[#E5E0D5] border border-[#E5E0D5] rounded-xl flex items-center gap-2 transition-all shadow-sm active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Direct</span>
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3.5 text-sm font-semibold text-[#4E614B] bg-white/80 hover:bg-white border border-[#E5E0D5] hover:border-[#4E614B] rounded-xl flex items-center gap-2 transition-all shadow-sm"
              >
                <FileText className="w-4 h-4 text-[#4E614B]" />
                <span>Executive CV</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive 3D Salesforce Cloud Scene */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl glass-card p-4 border border-[#E5E0D5]/90 bg-radial from-white/90 to-[#FAF8F5]/80 overflow-hidden shadow-xl">
              <Salesforce3DCloud />
              
              {/* Bottom Card Annotation */}
              <div className="mt-2 pt-3 border-t border-[#E5E0D5]/70 flex items-center justify-between text-xs text-[#4A554A] px-2">
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4E614B]" />
                  <span>Enterprise Scale Architect</span>
                </div>
                <div className="text-[11px] font-mono text-[#9A788E]">
                  Bengaluru, India (UTC+5:30)
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Key Metrics Band */}
        <div id="impact" className="mt-16 md:mt-24">
          <div className="text-center mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#4E614B]">
              Demonstrated Architectural Impact
            </h2>
            <p className="text-xl sm:text-2xl font-bold text-[#1E261F] mt-1">
              Enterprise Scale By The Numbers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {HERO_METRICS.map((metric) => (
              <TiltCard key={metric.id} className="h-full">
                <div
                  onClick={() => triggerCelebrationConfetti()}
                  className="h-full p-5 rounded-2xl glass-card border border-[#E5E0D5] flex flex-col justify-between text-left cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-[#EFECE4] group-hover:bg-[#4E614B]/10 transition-colors">
                      {getIcon(metric.iconName)}
                    </div>
                    <span className="text-[10px] font-mono uppercase text-[#768375] font-semibold">
                      Verified
                    </span>
                  </div>

                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold font-serif-num text-[#1E261F] group-hover:text-[#4E614B] transition-colors">
                      {metric.value}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-[#1E261F] mt-1">
                      {metric.label}
                    </div>
                    <p className="text-[11px] text-[#768375] mt-1.5 leading-snug">
                      {metric.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
