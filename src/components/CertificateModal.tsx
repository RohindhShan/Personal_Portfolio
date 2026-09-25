import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, CheckCircle, Award, ShieldCheck, Printer, ExternalLink, Sparkles } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const cert = PORTFOLIO_DATA.certification;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-3xl bg-slate-900 border border-amber-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 bg-slate-950 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">Verified Credential Document</h3>
              <p className="text-xs text-slate-400">Tap Academy · Cert. No: {cert.certNumber}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-white/10 transition-colors"
              title="Print certificate"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Display Area (Replicating Tap Academy Official Certificate Layout) */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="max-w-2xl mx-auto p-8 sm:p-10 rounded-2xl bg-[#0F172A] border-4 border-amber-500/40 shadow-2xl relative overflow-hidden text-center text-slate-100">
            
            {/* Top Ornamental corner accents */}
            <div className="absolute top-2 left-2 text-amber-500/30 font-serif text-2xl select-none">❖</div>
            <div className="absolute top-2 right-2 text-amber-500/30 font-serif text-2xl select-none">❖</div>
            <div className="absolute bottom-2 left-2 text-amber-500/30 font-serif text-2xl select-none">❖</div>
            <div className="absolute bottom-2 right-2 text-amber-500/30 font-serif text-2xl select-none">❖</div>

            {/* Institution Brand */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <div className="text-left">
                <span className="text-xl font-black tracking-tight text-white flex items-center gap-1">
                  TAP <span className="text-amber-400">ACADEMY</span>
                </span>
                <span className="text-[10px] text-slate-400 tracking-wider uppercase block">
                  Gamified Learning Platform
                </span>
              </div>
              <div className="text-right font-mono text-xs text-amber-400">
                Cert.No: <span className="font-bold text-white">{cert.certNumber}</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-serif tracking-widest text-amber-300 font-bold uppercase mb-1">
              Certificate
            </h2>
            <p className="text-xs tracking-widest uppercase text-slate-400 font-semibold mb-6">
              — OF COMPLETION —
            </p>

            <p className="text-xs sm:text-sm text-slate-300 italic mb-2">
              This certificate is proudly presented to
            </p>

            {/* Recipient Name */}
            <h3 className="text-2xl sm:text-3xl font-serif font-black tracking-wider text-white py-2 border-b border-amber-500/30 max-w-sm mx-auto mb-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-amber-200">
              {PORTFOLIO_DATA.personal.name}
            </h3>

            <p className="text-xs font-mono text-slate-400 mb-5">
              Bearing reg. no: <span className="text-white font-semibold">{cert.regNumber}</span>
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg mx-auto mb-6">
              for successfully completing the rigorous industry training in{' '}
              <strong className="text-amber-300 font-bold text-base block mt-1">
                Full Stack Web Development
              </strong>
            </p>

            {/* Verified Tech Badges */}
            <div className="pt-2 mb-6">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-2">
                Verified Technical Proficiencies
              </span>
              <div className="flex flex-wrap justify-center gap-1.5">
                {cert.verifiedSkills.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 text-xs font-mono bg-slate-800/90 text-slate-200 rounded border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Signatures & Verification Row */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-6 items-end text-xs">
              <div className="text-left font-mono">
                <span className="text-slate-400 text-[10px] block">ISSUE DATE</span>
                <span className="font-bold text-white">{cert.issueDate}</span>
              </div>

              <div className="text-right">
                <div className="font-serif italic text-base text-amber-200 font-bold">Rohit Ravinder</div>
                <div className="h-0.5 w-28 bg-amber-500/40 ml-auto my-1" />
                <span className="text-slate-400 text-[10px] block">Rohit Ravinder, CEO, Tap Academy</span>
              </div>
            </div>

            {/* Accreditations Footer */}
            <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center justify-center gap-4 text-[10px] text-slate-400">
              <span className="flex items-center gap-1 text-slate-300">
                <ShieldCheck className="w-3 h-3 text-emerald-400" /> ISO 9001:2015
              </span>
              <span>·</span>
              <span className="text-amber-400 font-medium">#startupindia</span>
              <span>·</span>
              <span>DIPP Approved</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
