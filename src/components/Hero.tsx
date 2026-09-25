import React, { useState, useRef, useEffect } from 'react';
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
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedPhoto = localStorage.getItem('rohindh_portfolio_photo');
    if (savedPhoto) {
      setCustomPhoto(savedPhoto);
    }
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setCustomPhoto(result);
        try {
          localStorage.setItem('rohindh_portfolio_photo', result);
        } catch (e) {
          console.warn('Local storage size exceeded for photo', e);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCustomPhoto(null);
    localStorage.removeItem('rohindh_portfolio_photo');
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
              {customPhoto ? (
                <img 
                  src={customPhoto} 
                  alt={PORTFOLIO_DATA.personal.name}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                /* High-fidelity SVG illustration rendering Rohindh in navy blazer and white formal shirt with crisp sky blue studio background */
                <div className="w-full h-full relative bg-gradient-to-b from-[#0EA5E9] via-[#0284C7] to-[#0369A1] flex items-center justify-center">
                  <svg 
                    viewBox="0 0 240 240" 
                    className="w-full h-full drop-shadow-md"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Studio Gradient Lighting */}
                    <radialGradient id="studioLight" cx="50%" cy="30%" r="60%">
                      <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#0284C7" stopOpacity="0"/>
                    </radialGradient>
                    <rect width="240" height="240" fill="url(#studioLight)" />

                    {/* Dark Navy Suit Jacket Shoulders */}
                    <path 
                      d="M20 240 C35 185, 75 160, 120 160 C165 160, 205 185, 220 240 Z" 
                      fill="#0F172A" 
                    />
                    <path 
                      d="M20 240 C35 185, 60 165, 95 165 L108 240 Z" 
                      fill="#1E293B" 
                    />
                    <path 
                      d="M220 240 C205 185, 180 165, 145 165 L132 240 Z" 
                      fill="#1E293B" 
                    />

                    {/* Crisp White Collared Shirt */}
                    <polygon points="102,165 138,165 132,240 108,240" fill="#F8FAFC" />
                    {/* Shirt Collar Flaps */}
                    <polygon points="98,162 120,192 108,162" fill="#FFFFFF" />
                    <polygon points="142,162 120,192 132,162" fill="#FFFFFF" />
                    <polygon points="112,185 120,195 128,185" fill="#E2E8F0" />
                    {/* Small Shirt Buttons */}
                    <circle cx="120" cy="205" r="1.5" fill="#94A3B8" />
                    <circle cx="120" cy="222" r="1.5" fill="#94A3B8" />

                    {/* Neck */}
                    <path d="M104 135 L104 165 Q120 172 136 165 L136 135 Z" fill="#9E6942" />
                    <path d="M104 145 Q120 162 136 145 Z" fill="#885532" opacity="0.4" />

                    {/* Face / Jawline */}
                    <path 
                      d="M80 82 Q78 135 120 148 Q162 135 160 82 Q160 52 120 52 Q80 52 80 82 Z" 
                      fill="#A8734E" 
                    />

                    {/* Beard / Stubble shadow */}
                    <path 
                      d="M85 96 C84 130 100 146 120 147 C140 146 156 130 155 96 C148 110 138 116 120 116 C102 116 92 110 85 96 Z" 
                      fill="#1E1E1E" 
                      opacity="0.32" 
                    />
                    {/* Neat Mustache */}
                    <path 
                      d="M108 114 Q120 117 132 114 Q126 120 120 119 Q114 120 108 114 Z" 
                      fill="#1E1E1E" 
                      opacity="0.75" 
                    />

                    {/* Lips */}
                    <path d="M110 125 Q120 128 130 125" stroke="#7A3F2A" strokeWidth="2.5" strokeLinecap="round" fill="none" />

                    {/* Nose */}
                    <path d="M117 92 L116 108 Q120 111 124 108" stroke="#7D492A" strokeWidth="2" strokeLinecap="round" fill="none" />

                    {/* Eyes & Eyebrows */}
                    {/* Left Eye */}
                    <ellipse cx="102" cy="88" rx="5" ry="3" fill="#FFFFFF" />
                    <circle cx="102" cy="88" r="2.5" fill="#1C1917" />
                    <circle cx="103" cy="87" r="0.8" fill="#FFFFFF" />
                    <path d="M94 80 Q103 76 110 80" stroke="#1C1917" strokeWidth="3" strokeLinecap="round" fill="none" />

                    {/* Right Eye */}
                    <ellipse cx="138" cy="88" rx="5" ry="3" fill="#FFFFFF" />
                    <circle cx="138" cy="88" r="2.5" fill="#1C1917" />
                    <circle cx="139" cy="87" r="0.8" fill="#FFFFFF" />
                    <path d="M130 80 Q137 76 146 80" stroke="#1C1917" strokeWidth="3" strokeLinecap="round" fill="none" />

                    {/* Ears */}
                    <path d="M78 86 Q72 96 80 106" stroke="#9E6942" strokeWidth="4" strokeLinecap="round" fill="none" />
                    <path d="M162 86 Q168 96 160 106" stroke="#9E6942" strokeWidth="4" strokeLinecap="round" fill="none" />

                    {/* Dark Textured Hair */}
                    <path 
                      d="M74 76 C70 42, 95 32, 120 32 C148 32, 168 42, 166 76 C160 62, 150 56, 138 58 C124 60, 114 62, 102 58 C88 54, 80 64, 74 76 Z" 
                      fill="#121212" 
                    />
                    <path 
                      d="M80 62 Q105 45 130 52 Q150 50 162 65" 
                      stroke="#2A2A2A" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      fill="none" 
                    />
                  </svg>
                </div>
              )}

              {/* Quick Photo Upload / Reset Overlay on Hover */}
              <button
                onClick={() => fileInputRef.current?.click()}
                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 text-white cursor-pointer"
                title="Change or upload photo"
              >
                <Camera className="w-5 h-5 text-blue-400" />
                <span className="text-[11px] font-medium tracking-wide">
                  {customPhoto ? 'Change Photo' : 'Upload Photo'}
                </span>
                {customPhoto && (
                  <span 
                    onClick={handleResetPhoto}
                    className="text-[10px] text-red-400 hover:text-red-300 underline mt-0.5"
                  >
                    Reset default
                  </span>
                )}
              </button>

              <input 
                ref={fileInputRef}
                type="file" 
                accept="image/*" 
                onChange={handlePhotoUpload} 
                className="hidden" 
                aria-label="Upload profile picture"
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
