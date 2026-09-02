import React from 'react';
import { PERSONAL_INFO, EXPERIENCE_LIST, CERTIFICATIONS_LIST } from '../data/portfolioData';
import { X, Printer, Mail, Phone, MapPin } from 'lucide-react';
import { LinkedInIcon } from './Icons';
import { triggerCelebrationConfetti } from './ConfettiEffect';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    triggerCelebrationConfetti();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white max-w-4xl w-full max-h-[90vh] rounded-3xl border border-[#E5E0D5] shadow-2xl flex flex-col overflow-hidden text-left relative">
        
        {/* Modal Controls Bar */}
        <div className="px-6 py-4 bg-[#FAF8F5] border-b border-[#E5E0D5] flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-xs font-bold text-[#1E261F]">
              Executive Resume Preview • Ashish Kumar
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 text-xs font-bold text-[#F6F4EE] bg-[#4E614B] hover:bg-[#3D4D3A] rounded-xl flex items-center gap-1.5 shadow-sm transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl hover:bg-[#EFECE4] text-[#768375] hover:text-[#1E261F]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 print:p-0">
          
          {/* Header */}
          <div className="border-b border-[#1E261F]/20 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-[#1E261F] tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-base font-bold text-[#4E614B] mt-0.5">
                  {PERSONAL_INFO.role} | {PERSONAL_INFO.experienceYears} Years Experience
                </p>
              </div>

              <div className="flex flex-col text-xs text-[#4A554A] space-y-1">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#4E614B]" /> {PERSONAL_INFO.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3 h-3 text-[#4E614B]" /> {PERSONAL_INFO.phoneDisplay} / {PERSONAL_INFO.phoneAltDisplay}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3 h-3 text-[#4E614B]" /> {PERSONAL_INFO.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <LinkedInIcon className="w-3 h-3 text-[#4E614B]" /> linkedin.com/in/ashish0505sfdc
                </span>
              </div>
            </div>

            <p className="text-xs text-[#4A554A] leading-relaxed pt-2">
              Solution & Integration Architecture • Revenue Cloud (CPQ) • Financial Services Cloud • OmniStudio • Agentforce & Einstein AI • DevOps / CI-CD Governance
            </p>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#1E261F] border-b border-[#E5E0D5] pb-1">
              Professional Summary
            </h2>
            <p className="text-xs text-[#4A554A] leading-relaxed">
              Salesforce Technical Architect with <strong>13+ years</strong> of IT experience architecting scalable, secure, enterprise-grade Salesforce solutions and leading multi-million-dollar digital transformation programs across Banking, NBFC, Insurance, Retail, Government, and Manufacturing. Serves as <strong>technical design authority within Big 4 delivery environments (PwC)</strong> — owning solution blueprints, data modeling, integration architecture, security and sharing design, DevOps governance, and production hyper-care. Deep specialization in <strong>Revenue Cloud (CPQ), Financial Services Cloud (FSC), Sales, Service, Experience Cloud, OmniStudio, and Agentforce / Einstein AI</strong>. <strong>13x Salesforce Certified</strong>, including Certified System Architect and five domain Architect credentials.
            </p>
          </div>

          {/* 13x Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#1E261F] border-b border-[#E5E0D5] pb-1">
              Salesforce Certifications (13x Certified)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {CERTIFICATIONS_LIST.map((c) => (
                <div key={c.id} className="flex items-center gap-2 text-[#1E261F]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4E614B]" />
                  <span className="font-semibold">{c.title}</span>
                  <span className="text-[10px] text-[#768375]">({c.code})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#1E261F] border-b border-[#E5E0D5] pb-1">
              Professional Experience
            </h2>
            
            <div className="space-y-4">
              {EXPERIENCE_LIST.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-bold text-[#1E261F]">
                    <span>{exp.role} — <span className="text-[#4E614B]">{exp.company}</span></span>
                    <span className="text-[#768375] font-normal">{exp.period} | {exp.location}</span>
                  </div>

                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-[#4A554A] leading-relaxed">
                    {exp.bulletPoints.map((bp, i) => (
                      <li key={i}>{bp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#1E261F] border-b border-[#E5E0D5] pb-1">
              Education
            </h2>
            <div className="text-xs text-[#1E261F]">
              <span className="font-bold">{PERSONAL_INFO.education.degree}</span>, {PERSONAL_INFO.education.field} — {PERSONAL_INFO.education.institution}, {PERSONAL_INFO.education.location} | <span className="font-semibold text-[#4E614B]">{PERSONAL_INFO.education.grade}</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
