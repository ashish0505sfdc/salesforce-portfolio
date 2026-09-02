import React, { useState } from 'react';
import { EXPERIENCE_LIST } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { Briefcase, Calendar, MapPin, ChevronRight, CheckCircle2, Building2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'architect' | 'global'>('all');
  const [expandedId, setExpandedId] = useState<string>(EXPERIENCE_LIST[0].id);

  const filteredList = EXPERIENCE_LIST.filter(item => {
    if (filter === 'architect') {
      return item.role.toLowerCase().includes('architect') || item.company.includes('PwC');
    }
    if (filter === 'global') {
      return item.location.includes('Dubai') || item.company.includes('PwC') || item.company.includes('Accenture');
    }
    return true;
  });

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFECE4] border border-[#E5E0D5] text-xs font-bold text-[#4E614B] mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>13+ Years Chronological Trajectory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E261F] tracking-tight">
              Professional Experience & Architecture Track Record
            </h2>
            <p className="mt-2 text-base text-[#4A554A] max-w-2xl">
              From leading Big 4 delivery environments to architecting digital platforms for UAE government bodies and Fortune 500 enterprises.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl glass-panel border border-[#E5E0D5] self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all ${
                filter === 'all'
                  ? 'bg-[#1E261F] text-[#F6F4EE] shadow-sm'
                  : 'text-[#4A554A] hover:text-[#1E261F]'
              }`}
            >
              All Roles (8)
            </button>
            <button
              onClick={() => setFilter('architect')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all ${
                filter === 'architect'
                  ? 'bg-[#1E261F] text-[#F6F4EE] shadow-sm'
                  : 'text-[#4A554A] hover:text-[#1E261F]'
              }`}
            >
              Architect Tenures
            </button>
            <button
              onClick={() => setFilter('global')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all ${
                filter === 'global'
                  ? 'bg-[#1E261F] text-[#F6F4EE] shadow-sm'
                  : 'text-[#4A554A] hover:text-[#1E261F]'
              }`}
            >
              Global / Big 4 / UAE
            </button>
          </div>
        </div>

        {/* Timeline List */}
        <div className="space-y-6">
          {filteredList.map((exp) => {
            const isExpanded = expandedId === exp.id;
            return (
              <TiltCard key={exp.id} className="w-full">
                <div
                  className={`rounded-3xl transition-all border ${
                    exp.isCurrent
                      ? 'bg-radial from-white via-[#FAF8F5] to-white border-[#4E614B] shadow-md ring-1 ring-[#4E614B]/20'
                      : 'glass-card border-[#E5E0D5]'
                  } p-6 sm:p-8`}
                >
                  <div
                    onClick={() => setExpandedId(isExpanded ? '' : exp.id)}
                    className="cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-4 select-none"
                  >
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xl font-bold text-[#1E261F] hover:text-[#4E614B] transition-colors">
                          {exp.role}
                        </span>
                        {exp.isCurrent && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#4E614B] text-white">
                            Present
                          </span>
                        )}
                        {exp.company.includes('PwC') && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#9A788E] text-white">
                            Big 4 Technical Design Authority
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4E614B]">
                        <span className="flex items-center gap-1.5 text-[#1E261F]">
                          <Building2 className="w-3.5 h-3.5 text-[#4E614B]" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1.5 text-[#768375]">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1.5 text-[#9A788E]">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Quick Metric Pills */}
                    <div className="flex items-center gap-2 flex-wrap">
                      {exp.metrics.map((m, mi) => (
                        <div
                          key={mi}
                          className="px-3 py-1.5 rounded-xl bg-[#EFECE4] border border-[#E5E0D5] text-xs font-bold text-[#1E261F] flex items-center gap-1.5"
                        >
                          <span className="text-[#4E614B] font-serif-num text-sm">{m.value}</span>
                          <span className="text-[11px] text-[#768375]">{m.label}</span>
                        </div>
                      ))}
                      <div className="p-2 rounded-xl bg-white border border-[#E5E0D5] text-[#1E261F] ml-1">
                        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
                      </div>
                    </div>
                  </div>

                  {/* Summary & Bullet Points */}
                  <p className="mt-4 text-sm text-[#4A554A] leading-relaxed border-t border-[#E5E0D5]/70 pt-4">
                    {exp.highlightSummary}
                  </p>

                  {/* Expandable Deep Details */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-[#E5E0D5] space-y-6 animate-in fade-in duration-300">
                      <div className="space-y-3">
                        <div className="text-xs font-bold uppercase tracking-wider text-[#1E261F]">
                          Key Deliverables & Architectural Milestones:
                        </div>
                        {exp.bulletPoints.map((bullet, bi) => (
                          <div key={bi} className="flex items-start gap-3 text-xs sm:text-sm text-[#4A554A] leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-[#4E614B] shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>

                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-[#768375] mb-2">
                          Technologies & Frameworks Deployed:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 text-[11px] font-semibold bg-white border border-[#E5E0D5] rounded-md text-[#1E261F]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </TiltCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};
