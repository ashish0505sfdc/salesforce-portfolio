import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import type { SkillCategory } from '../types';
import { TiltCard } from './TiltCard';
import { Layers, Cloud, Cpu, Network, GitPullRequest } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SkillCategory>('clouds');

  const categories: { key: SkillCategory; label: string; icon: any }[] = [
    { key: 'clouds', label: 'Clouds & Products', icon: Cloud },
    { key: 'architecture', label: 'Architecture & Strategy', icon: Layers },
    { key: 'development', label: 'Development & Apex', icon: Cpu },
    { key: 'integration', label: 'Integration & Middleware', icon: Network },
    { key: 'devops', label: 'DevOps & Governance', icon: GitPullRequest },
  ];

  const filteredSkills = SKILLS_DATA.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFECE4] border border-[#E5E0D5] text-xs font-bold text-[#4E614B] mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Architect Capability Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E261F] tracking-tight">
            Technical Competencies & Domain Mastery
          </h2>
          <p className="mt-2 text-base text-[#4A554A]">
            Comprehensive mastery across declarative solutioning, programmatic Apex engineering, cloud-native AWS integrations, and automated Copado pipelines.
          </p>
        </div>

        {/* Categorized Filter Tabs */}
        <div className="flex items-center gap-2 pb-4 mb-8 overflow-x-auto no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-[#1E261F] text-[#F6F4EE] border-[#1E261F] shadow-md'
                    : 'glass-card text-[#4A554A] border-[#E5E0D5] hover:border-[#4E614B]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#C5A059]' : 'text-[#4E614B]'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <TiltCard key={skill.name} className="h-full">
              <div className="h-full p-6 rounded-3xl glass-card border border-[#E5E0D5] flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-base font-bold text-[#1E261F] leading-tight">
                      {skill.name}
                    </h3>
                    {skill.highlightBadge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#4E614B]/10 text-[#4E614B] border border-[#4E614B]/20 whitespace-nowrap">
                        {skill.highlightBadge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-[#4A554A] leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-[#1E261F] mb-1.5">
                    <span className="text-[#768375] font-normal">{skill.yearsOfExp}+ Years Experience</span>
                    <span className="text-[#4E614B] font-mono">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#EFECE4] overflow-hidden border border-[#E5E0D5]">
                    <div
                      className="h-full bg-gradient-to-r from-[#4E614B] via-[#627A5E] to-[#9A788E] rounded-full transition-all duration-700"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
};
