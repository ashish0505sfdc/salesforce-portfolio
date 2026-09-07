import React, { useState } from 'react';
import { PERSONAL_INFO, EXPERIENCE_LIST, CERTIFICATIONS_LIST, HERO_METRICS } from '../data/portfolioData';
import { X, Printer, Mail, Phone, MapPin, Copy, Check, Code2, Globe } from 'lucide-react';
import { LinkedInIcon } from './Icons';
import { triggerCelebrationConfetti } from './ConfettiEffect';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    triggerCelebrationConfetti();
    window.print();
  };

  const handleCopyMarkdown = async () => {
    try {
      const response = await fetch('./Ashish_Kumar_Salesforce_Technical_Architect.md');
      const text = await response.text();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      triggerCelebrationConfetti();
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/60 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white max-w-4xl w-full max-h-[92vh] rounded-3xl border border-[#E5E0D5] shadow-2xl flex flex-col overflow-hidden text-left relative">
        
        {/* Modal Controls Bar */}
        <div className="px-5 py-3.5 bg-[#FAF8F5] border-b border-[#E5E0D5] flex flex-wrap items-center justify-between gap-3 no-print">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-[#1E261F]">
              Ashish Kumar • Executive CV & Claude Sonnet AI-Ready Data
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Print / Save PDF */}
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-bold text-[#F6F4EE] bg-[#1E261F] hover:bg-[#4E614B] rounded-xl flex items-center gap-1.5 shadow-sm transition-all"
              title="Print to PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            {/* Download Markdown (.md) */}
            <a
              href="./Ashish_Kumar_Salesforce_Technical_Architect.md"
              download="Ashish_Kumar_Salesforce_Technical_Architect.md"
              onClick={() => triggerCelebrationConfetti()}
              className="px-3 py-1.5 text-xs font-bold text-[#1E261F] bg-[#EFECE4] hover:bg-[#E5E0D5] border border-[#E5E0D5] rounded-xl flex items-center gap-1.5 transition-all"
              title="Download clean Markdown file for Claude / ChatGPT / LLMs"
            >
              <Code2 className="w-3.5 h-3.5 text-[#4E614B]" />
              <span>Download .MD (Claude)</span>
            </a>

            {/* Download Standalone HTML */}
            <a
              href="./Ashish_Kumar_Salesforce_Technical_Architect.html"
              download="Ashish_Kumar_Salesforce_Technical_Architect.html"
              onClick={() => triggerCelebrationConfetti()}
              className="px-3 py-1.5 text-xs font-bold text-[#4E614B] bg-white hover:bg-[#FAF8F5] border border-[#E5E0D5] rounded-xl flex items-center gap-1.5 transition-all"
              title="Download standalone HTML resume"
            >
              <Globe className="w-3.5 h-3.5 text-[#4E614B]" />
              <span>Download .HTML</span>
            </a>

            {/* Copy Full Text */}
            <button
              onClick={handleCopyMarkdown}
              className="px-3 py-1.5 text-xs font-bold text-[#1E261F] bg-white hover:bg-[#FAF8F5] border border-[#E5E0D5] rounded-xl flex items-center gap-1.5 transition-all"
              title="Copy markdown text to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#4E614B]" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl hover:bg-[#EFECE4] text-[#768375] hover:text-[#1E261F] transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-7 print:p-0">
          
          {/* Header */}
          <div className="border-b border-[#1E261F]/20 pb-5 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-[#12324F] tracking-tight uppercase">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-sm font-bold text-[#1F5F8B] uppercase tracking-wider mt-0.5">
                  {PERSONAL_INFO.role} <span className="text-[#B0741A]">| {PERSONAL_INFO.experienceYears} Years Experience</span>
                </p>
              </div>

              <div className="flex flex-col text-xs text-[#26313A] space-y-1 sm:text-right">
                <span className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3 h-3 text-[#1F5F8B]" /> {PERSONAL_INFO.location}
                </span>
                <span className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3 h-3 text-[#1F5F8B]" /> {PERSONAL_INFO.phoneDisplay} / {PERSONAL_INFO.phoneAltDisplay}
                </span>
                <span className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3 h-3 text-[#1F5F8B]" /> {PERSONAL_INFO.email}
                </span>
                <span className="flex items-center sm:justify-end gap-1.5">
                  <LinkedInIcon className="w-3 h-3 text-[#1F5F8B]" /> linkedin.com/in/ashish0505sfdc
                </span>
              </div>
            </div>

            <p className="text-xs text-[#4A5A66] font-semibold tracking-tight border-b-2 border-[#B0741A] pb-2">
              Solution &amp; Integration Architecture • Revenue Cloud (CPQ) • Financial Services Cloud • OmniStudio • Agentforce &amp; Einstein AI • DevOps / CI-CD Governance
            </p>
          </div>

          {/* Impact Band */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 p-3 bg-[#F1F6FA] border-l-4 border-[#B0741A] text-center rounded-lg">
            {HERO_METRICS.map((m) => (
              <div key={m.id} className="border-r last:border-r-0 border-[#D6E3EE] px-2 py-1">
                <div className="text-lg font-bold text-[#B0741A] leading-tight font-serif-num">{m.value}</div>
                <div className="text-[9px] font-bold uppercase text-[#12324F] tracking-wider mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#12324F] border-b border-[#D6E3EE] border-l-4 border-[#B0741A] pl-2.5 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs text-[#26313A] leading-relaxed">
              Salesforce Technical Architect with <strong className="text-[#B0741A]">13+ years</strong> of IT experience architecting scalable, secure, enterprise-grade Salesforce solutions and leading multi-million-dollar digital transformation programs across Banking, NBFC, Insurance, Retail, Government, and Manufacturing. Serves as <strong className="text-[#12324F]">technical design authority</strong> within a Big 4 delivery environment (PwC) — owning solution blueprints, data modeling, integration architecture, security and sharing design, DevOps governance, and production hyper-care. Deep specialization in <strong className="text-[#12324F]">Revenue Cloud (CPQ), Financial Services Cloud (FSC), Sales, Service and Experience Cloud, OmniStudio</strong>, and <strong className="text-[#12324F]">Agentforce / Einstein AI</strong>. <strong className="text-[#B0741A]">13x Salesforce Certified</strong>, including Certified System Architect and five domain Architect credentials. Proven at converting ambiguous business goals into resilient technical roadmaps, enforcing engineering standards, and mentoring distributed squads of <strong className="text-[#B0741A]">15+</strong> engineers.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#12324F] border-b border-[#D6E3EE] border-l-4 border-[#B0741A] pl-2.5 pb-1">
              Technical Skills &amp; Core Competencies
            </h2>
            <div className="space-y-1.5 text-xs text-[#26313A] leading-relaxed">
              <p><strong className="text-[#12324F]">Salesforce Clouds &amp; Products:</strong> Financial Services Cloud (FSC), Revenue Cloud / CPQ, Sales Cloud, Service Cloud, Experience Cloud (Communities), Data Cloud, Commerce Cloud (SFCC), Marketing Cloud, OmniStudio (OmniScript, FlexCards, Integration Procedures, DataRaptor)</p>
              <p><strong className="text-[#12324F]">Architecture &amp; Design:</strong> Enterprise &amp; Solution Architecture, Technical Design Authority, Data Modeling, Large Data Volume (LDV) Strategy, Sharing &amp; Visibility Design, Identity &amp; Access Management, Multi-Org Strategy, Non-Functional Requirements, Governor-Limit Optimization, Performance Tuning, Scalability &amp; Resilience</p>
              <p><strong className="text-[#12324F]">Development:</strong> Apex, Lightning Web Components (LWC), Aura, Visualforce, SOQL / SOSL, Flow &amp; Process Automation, Triggers, Batch / Queueable / Scheduled Apex, Enterprise Apex Design Patterns, JavaScript, HTML5, CSS3, Java</p>
              <p><strong className="text-[#12324F]">Integration &amp; Middleware:</strong> REST / SOAP APIs, Platform Events, MuleSoft, AWS Serverless (Lambda, S3, EC2, API Gateway), OKTA SSO, SAML, OAuth 2.0, Credit Bureau &amp; Payment Gateway Integrations, DocuSign, UAE Pass, HexaBPM</p>
              <p><strong className="text-[#12324F]">AI &amp; Automation:</strong> Agentforce, Einstein AI, Prompt Builder, Autonomous Process Automation, Intelligent Case &amp; Lead Routing, Data Cloud Grounding</p>
              <p><strong className="text-[#12324F]">DevOps &amp; Tooling:</strong> Copado, GitHub, Git Branching Strategy, CI/CD Pipeline Automation, Salesforce DX (SFDX), VS Code, Change Sets, Jira (JQL), ServiceNow, Confluence, Heroku CLI</p>
              <p><strong className="text-[#12324F]">Delivery &amp; Leadership:</strong> Agile / Scrum, Scrum Master, Sprint &amp; Release Planning, Stakeholder Management, Pre-Sales &amp; Solutioning, Technical Roadmapping, Code Review &amp; Governance, Estimation, Mentoring &amp; Team Enablement</p>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#12324F] border-b border-[#D6E3EE] border-l-4 border-[#B0741A] pl-2.5 pb-1">
              Professional Experience
            </h2>
            
            <div className="space-y-4">
              {EXPERIENCE_LIST.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs font-bold text-[#12324F]">
                    <span className="text-[12.5px]">{exp.role}</span>
                    <span className="text-[#B0741A] font-bold">{exp.period}</span>
                  </div>
                  <div className="text-xs font-bold text-[#1F5F8B]">
                    {exp.company} <span className="font-normal text-[#4A5A66]">— {exp.location}</span>
                  </div>

                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-[#26313A] leading-relaxed pt-1">
                    {exp.bulletPoints.map((bp, i) => (
                      <li key={i}>{bp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 13x Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#12324F] border-b border-[#D6E3EE] border-l-4 border-[#B0741A] pl-2.5 pb-1">
              Salesforce Certifications (13x Certified)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#26313A]">
              {CERTIFICATIONS_LIST.map((c) => (
                <div key={c.id} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-sm bg-[#B0741A] shrink-0" />
                  <span className="font-semibold">{c.title}</span>
                  <span className="text-[10px] text-[#4A5A66]">({c.code})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#12324F] border-b border-[#D6E3EE] border-l-4 border-[#B0741A] pl-2.5 pb-1">
              Education
            </h2>
            <div className="text-xs text-[#26313A]">
              <strong className="text-[#12324F]">{PERSONAL_INFO.education.degree}, {PERSONAL_INFO.education.field}</strong><br />
              {PERSONAL_INFO.education.institution}, {PERSONAL_INFO.education.location} &nbsp;|&nbsp; <span className="font-semibold text-[#B0741A]">{PERSONAL_INFO.education.grade}</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
