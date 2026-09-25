import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  ArrowDown, 
  FileText, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  Sparkles, 
  Camera, 
  ExternalLink,
  ShieldCheck,
  Database,
  Layers,
  Code
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex flex-col items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-grid-pattern overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* CENTER PROFILE PICTURE CONTAINER */}
        <div className="relative mb-6 group flex flex-col items-center">
          {/* Subtle animated multi-ring glow */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse" />
          
          <div className="relative w-44 h-44 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full p-1 bg-gradient-to-b from-blue-400 via-indigo-500 to-slate-900 shadow-2xl flex items-center justify-center">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-white/20 relative shadow-inner">
              <img 
                src="/profile.jpg" 
                alt={PORTFOLIO_DATA.personal.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Active Status Badge underneath avatar */}
          <div className="mt-3.5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs text-slate-300 shadow-lg backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-medium text-emerald-400">Available for Full-Time Roles</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-slate-400" />
              Bangalore, India
            </span>
          </div>
        </div>

        {/* HERO TITLE & TYPOGRAPHIC HEADLINE */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-3">
          <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            {PORTFOLIO_DATA.personal.name}
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-400 mb-4 max-w-2xl">
          {PORTFOLIO_DATA.personal.role}
        </p>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 text-balance">
          Engineering scalable RESTful backends with <span className="text-white font-semibold">Django & DRF</span> and responsive, component-driven client applications with <span className="text-white font-semibold">React.js & Tailwind CSS</span>.
        </p>

        {/* PRIMARY CALL TO ACTION BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 active:scale-95"
          >
            <span>Explore Projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 active:scale-95"
          >
            <FileText className="w-4 h-4 text-blue-400" />
            <span>View Resume</span>
          </button>

          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            title="Click to copy email address"
          >
            {copiedEmail ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-semibold text-xs sm:text-sm">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400" />
                <span className="text-xs sm:text-sm">{PORTFOLIO_DATA.personal.email}</span>
              </>
            )}
          </button>
        </div>

        {/* RECRUITER HIGHLIGHT METRIC STRIP (Anti-Slop compliant, unboxed metadata) */}
        <div className="w-full pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-blue-400 mb-1">
              <Code className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Core Stack</span>
            </div>
            <p className="text-sm font-bold text-white">Python · Django · React</p>
            <p className="text-xs text-slate-400 mt-0.5">DRF & Modern SPAs</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-indigo-400 mb-1">
              <Database className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Databases</span>
            </div>
            <p className="text-sm font-bold text-white">MySQL & SQLite</p>
            <p className="text-xs text-slate-400 mt-0.5">6+ Relational Models</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Security</span>
            </div>
            <p className="text-sm font-bold text-white">JWT & SimpleJWT</p>
            <p className="text-xs text-slate-400 mt-0.5">Role-Based Access Control</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              <Layers className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Education</span>
            </div>
            <p className="text-sm font-bold text-white">B.Tech IT (2025)</p>
            <p className="text-xs text-slate-400 mt-0.5">CGPA 7.1 · Tap Academy</p>
          </div>
        </div>

      </div>
    </section>
  );
};
