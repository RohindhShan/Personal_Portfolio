import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Building
} from 'lucide-react';

interface ExperienceEducationProps {
  onOpenCertificate: () => void;
}

export const ExperienceEducation: React.FC<ExperienceEducationProps> = ({ onOpenCertificate }) => {
  const exp = PORTFOLIO_DATA.experience[0];
  const edu = PORTFOLIO_DATA.education;
  const cert = PORTFOLIO_DATA.certification;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-400">
            Career Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">
            Experience, Education & Certifications
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            Real industry internship delivery, rigorous academic curriculum in Information Technology, and certified competencies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Work Experience (Internship) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
                <Briefcase className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-white">Work Experience</h3>
            </div>

            {/* Experience Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-blue-500/30 transition-all shadow-xl space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                <div>
                  <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                  <div className="flex items-center gap-2 text-sm text-blue-400 font-semibold mt-0.5">
                    <Building className="w-4 h-4" />
                    <span>{exp.company}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-xs font-normal text-slate-400">{exp.type}</span>
                  </div>
                </div>

                <div className="text-left sm:text-right font-mono text-xs text-slate-400">
                  <div className="flex items-center sm:justify-end gap-1.5 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {exp.description}
              </p>

              {/* Achievements Bullet Points from Resume */}
              <div className="space-y-3 pt-1">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  Key Technical Deliverables:
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  {exp.achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack tags */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono bg-slate-800 text-slate-300 rounded border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education & Tap Academy Verified Certificate */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Block */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-white">Education</h3>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-indigo-500/30 transition-all space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-base font-bold text-white">{edu.degree}</h4>
                    <p className="text-xs font-semibold text-indigo-400">{edu.major}</p>
                    <p className="text-xs text-slate-300 mt-1">{edu.institution}</p>
                  </div>
                  <div className="text-right font-mono text-xs">
                    <span className="text-slate-400 block">{edu.period}</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-500/20 font-bold block mt-1">
                      {edu.score}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 space-y-2 text-xs text-slate-300">
                  {edu.highlights.map((h, idx) => (
                    <p key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Tap Academy Certificate Block (Clickable as requested) */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-amber-600/20 text-amber-400 flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-white">Verified Certification</h3>
              </div>

              <div 
                onClick={onOpenCertificate}
                className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-amber-950/20 border border-amber-500/30 hover:border-amber-400 transition-all cursor-pointer group shadow-xl space-y-4 relative overflow-hidden"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 block">
                      Tap Academy · Verified Credential
                    </span>
                    <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors mt-0.5">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Completed 27.09.2025 · Cert No: {cert.certNumber}
                    </p>
                  </div>

                  <span className="px-2.5 py-1 text-[11px] font-semibold text-amber-400 bg-amber-500/10 rounded-lg border border-amber-500/30 group-hover:bg-amber-500 group-hover:text-black transition-colors whitespace-nowrap">
                    View Cert
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {cert.summary}
                </p>

                {/* Accreditations */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>ISO 9001:2015 · #startupindia</span>
                  </div>
                  <span className="text-amber-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Inspect <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
