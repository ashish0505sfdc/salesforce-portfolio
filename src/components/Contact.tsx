import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  MessageSquare,
  MessageCircle,
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Check
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';
import { triggerCelebrationConfetti } from './ConfettiEffect';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setPhoneCopied(true);
    triggerCelebrationConfetti();
    setTimeout(() => setPhoneCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    triggerCelebrationConfetti();
    
    // Construct mailto link
    const mailto = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || 'Salesforce Architecture Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}

Message:
${formData.message}`
    )}`;
    window.open(mailto, '_blank');
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFECE4] border border-[#E5E0D5] text-xs font-bold text-[#4E614B] mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Communication & Advisory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E261F] tracking-tight">
            Connect for Architecture Advisory & Leadership Roles
          </h2>
          <p className="mt-2 text-base text-[#4A554A]">
            Open for Principal / Lead Technical Architect advisory, program audits, enterprise solution design, and leadership opportunities.
          </p>
        </div>

        {/* Section 10: One-Click Communication Action Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {/* WhatsApp */}
          <a
            href={PERSONAL_INFO.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl glass-card border border-[#E5E0D5] hover:border-emerald-500 flex flex-col items-center justify-center text-center group transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-[#1E261F]">WhatsApp</span>
            <span className="text-[10px] text-emerald-700 font-semibold">Instant Chat</span>
          </a>

          {/* Telegram */}
          <a
            href={PERSONAL_INFO.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl glass-card border border-[#E5E0D5] hover:border-sky-500 flex flex-col items-center justify-center text-center group transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Send className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-[#1E261F]">Telegram</span>
            <span className="text-[10px] text-sky-700 font-semibold">Direct Msg</span>
          </a>

          {/* Copy Phone */}
          <button
            onClick={handleCopyPhone}
            className="p-4 rounded-2xl glass-card border border-[#E5E0D5] hover:border-[#4E614B] flex flex-col items-center justify-center text-center group transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-[#EFECE4] text-[#4E614B] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              {phoneCopied ? <Check className="w-5 h-5 text-emerald-600" /> : <Phone className="w-5 h-5" />}
            </div>
            <span className="text-xs font-bold text-[#1E261F]">Call / Copy</span>
            <span className="text-[10px] text-[#4E614B] font-semibold">
              {phoneCopied ? 'Copied!' : PERSONAL_INFO.phoneDisplay}
            </span>
          </button>

          {/* Email */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-4 rounded-2xl glass-card border border-[#E5E0D5] hover:border-[#9A788E] flex flex-col items-center justify-center text-center group transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-[#9A788E]/10 text-[#9A788E] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-[#1E261F]">Direct Email</span>
            <span className="text-[10px] text-[#9A788E] font-semibold truncate max-w-[100px]">ashish0505sfdc</span>
          </a>

          {/* LinkedIn */}
          <a
            href={PERSONAL_INFO.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl glass-card border border-[#E5E0D5] hover:border-blue-600 flex flex-col items-center justify-center text-center group transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <LinkedInIcon className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-[#1E261F]">LinkedIn</span>
            <span className="text-[10px] text-blue-700 font-semibold">Connect</span>
          </a>

          {/* GitHub */}
          <a
            href={PERSONAL_INFO.gitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl glass-card border border-[#E5E0D5] hover:border-black flex flex-col items-center justify-center text-center group transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <GitHubIcon className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-[#1E261F]">GitHub</span>
            <span className="text-[10px] text-stone-700 font-semibold">Blueprints</span>
          </a>
        </div>

        {/* Contact Form & Location Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Interactive Contact Form */}
          <div className="lg:col-span-7 rounded-3xl glass-panel-warm border border-[#E5E0D5] p-6 sm:p-8 shadow-md">
            <h3 className="text-xl font-bold text-[#1E261F] mb-6">
              Send an Advisory or Architecture Inquiry
            </h3>

            {submitted ? (
              <div className="p-8 text-center space-y-4 rounded-2xl bg-white border border-[#E5E0D5]">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#1E261F]">Thank you! Message Prepared</h4>
                <p className="text-xs text-[#4A554A] leading-relaxed">
                  Your mail client has been prompted with your message details to connect directly with Ashish Kumar ({PERSONAL_INFO.email}).
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 text-xs font-bold text-[#1E261F] bg-[#EFECE4] rounded-xl hover:bg-[#E5E0D5]"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1E261F] mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-2.5 text-xs bg-white border border-[#E5E0D5] rounded-xl focus:outline-none focus:border-[#4E614B]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#1E261F] mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@enterprise.com"
                      className="w-full px-4 py-2.5 text-xs bg-white border border-[#E5E0D5] rounded-xl focus:outline-none focus:border-[#4E614B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1E261F] mb-1">Company / Organization</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Tier-1 Financial Institution"
                      className="w-full px-4 py-2.5 text-xs bg-white border border-[#E5E0D5] rounded-xl focus:outline-none focus:border-[#4E614B]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#1E261F] mb-1">Engagement Type</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. FSC Technical Architecture Advisory"
                      className="w-full px-4 py-2.5 text-xs bg-white border border-[#E5E0D5] rounded-xl focus:outline-none focus:border-[#4E614B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E261F] mb-1">Project Scope / Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your program timeline, architectural scope, or leadership opportunity..."
                    className="w-full px-4 py-2.5 text-xs bg-white border border-[#E5E0D5] rounded-xl focus:outline-none focus:border-[#4E614B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-bold text-[#F6F4EE] bg-[#4E614B] hover:bg-[#3D4D3A] rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Architectural Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Info Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl glass-card border border-[#E5E0D5] p-6 space-y-4">
              <h4 className="text-base font-bold text-[#1E261F]">
                Location & Timezone
              </h4>

              <div className="flex items-center gap-3 text-xs text-[#4A554A]">
                <MapPin className="w-4 h-4 text-[#4E614B] shrink-0" />
                <span>Bengaluru, Karnataka, India</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-[#4A554A]">
                <Clock className="w-4 h-4 text-[#9A788E] shrink-0" />
                <span>IST (UTC+5:30) • Global Hybrid Availability</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E5E0D5] text-xs leading-relaxed text-[#4A554A]">
                <strong className="text-[#1E261F]">Notice:</strong> Immediate availability for principal architecture advisory, technical due diligence, FSC / Revenue Cloud CPQ programs, and Big 4 delivery alignment.
              </div>
            </div>

            {/* Education Card */}
            <div className="rounded-3xl glass-card border border-[#E5E0D5] p-6 space-y-2">
              <div className="text-[10px] font-mono font-bold uppercase text-[#9A788E]">
                Academic Foundation
              </div>
              <h4 className="text-sm font-bold text-[#1E261F]">
                {PERSONAL_INFO.education.degree} in {PERSONAL_INFO.education.field}
              </h4>
              <p className="text-xs text-[#4A554A]">
                {PERSONAL_INFO.education.institution}, {PERSONAL_INFO.education.location}
              </p>
              <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-[#EFECE4] text-[#4E614B] border border-[#E5E0D5]">
                {PERSONAL_INFO.education.grade}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
