import React, { useState, useMemo } from 'react';
import { PORTFOLIO_DATA, Skill } from '../data/portfolioData';
import { 
  Search, 
  Code, 
  Layers, 
  Server, 
  Database, 
  Workflow, 
  Terminal, 
  ExternalLink,
  X,
  CheckCircle2,
  Cpu,
  FileCode,
  Coffee,
  Layout,
  Palette,
  ShieldCheck,
  Network,
  HardDrive,
  RefreshCw,
  Smartphone,
  GitBranch
} from 'lucide-react';

const CATEGORIES = ['All', 'Languages', 'Frontend', 'Backend', 'Databases', 'Concepts', 'Tools'] as const;

export const TechStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inspectedSkill, setInspectedSkill] = useState<Skill | null>(null);

  const filteredSkills = useMemo(() => {
    return PORTFOLIO_DATA.skills.filter((skill) => {
      const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
      const matchesSearch = 
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.appliedIn.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getIcon = (iconName: string) => {
    const props = { className: "w-5 h-5" };
    switch (iconName) {
      case 'Code': return <Code {...props} />;
      case 'FileCode': return <FileCode {...props} />;
      case 'Coffee': return <Coffee {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Layout': return <Layout {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'Server': return <Server {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Network': return <Network {...props} />;
      case 'Database': return <Database {...props} />;
      case 'HardDrive': return <HardDrive {...props} />;
      case 'Workflow': return <Workflow {...props} />;
      case 'RefreshCw': return <RefreshCw {...props} />;
      case 'Smartphone': return <Smartphone {...props} />;
      case 'GitBranch': return <GitBranch {...props} />;
      case 'Terminal': return <Terminal {...props} />;
      default: return <Code {...props} />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-400">
              Technical Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">
              Tech Stack & Engineering Skills
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Specialized full-stack toolset honed through academic rigor at SRIT, internship development at Tap Academy, and production-grade project builds.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g. Django, JWT)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-900 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Interactive Category Segmented Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            const count = cat === 'All' 
              ? PORTFOLIO_DATA.skills.length 
              : PORTFOLIO_DATA.skills.filter(s => s.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/5 hover:border-white/10'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] tabular-nums px-1.5 py-0.2 rounded ${
                  isActive ? 'bg-blue-700 text-blue-100' : 'bg-slate-800 text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              onClick={() => setInspectedSkill(skill)}
              className="p-5 rounded-xl bg-slate-900/60 border border-white/10 hover:border-blue-500/40 hover:bg-slate-900/90 transition-all group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {getIcon(skill.iconName)}
                  </div>
                  
                  {/* Unboxed Metadata */}
                  <div className="text-right">
                    <span className="text-xs text-slate-400">{skill.category}</span>
                    <div className="text-[11px] font-mono tabular-nums text-blue-400 font-semibold">
                      {skill.proficiency}%
                    </div>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs font-medium text-slate-400 mt-0.5">
                  {skill.experience}
                </p>

                <p className="text-xs text-slate-300 mt-2.5 line-clamp-2 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span className="truncate max-w-[190px]">
                  {skill.appliedIn.split(',')[0]}
                </span>
                <span className="text-blue-400 font-medium group-hover:underline flex items-center gap-1 shrink-0">
                  Inspect
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 p-8 rounded-2xl bg-slate-900/30 border border-white/5">
            <p className="text-sm text-slate-400">No skills match "{searchQuery}" in category "{selectedCategory}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-3 text-xs text-blue-400 hover:underline font-semibold"
            >
              Clear filters
            </button>
          </div>
        )}

      </div>

      {/* Interactive Skill Deep-Dive Inspector Modal */}
      {inspectedSkill && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
          onClick={() => setInspectedSkill(null)}
        >
          <div 
            className="w-full max-w-lg bg-slate-900 border border-blue-500/30 rounded-2xl p-6 shadow-2xl space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
                  {getIcon(inspectedSkill.iconName)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{inspectedSkill.name}</h3>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                    <span>{inspectedSkill.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{inspectedSkill.experience}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setInspectedSkill(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Proficiency Meter */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-300">Practical Implementation Proficiency</span>
                <span className="text-blue-400 tabular-nums">{inspectedSkill.proficiency}%</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
                  style={{ width: `${inspectedSkill.proficiency}%` }}
                />
              </div>
            </div>

            {/* In-Depth Description */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-white/5 space-y-2">
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                How Rohindh Applies {inspectedSkill.name}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {inspectedSkill.description}
              </p>
            </div>

            {/* Applied in Projects */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Production Application
              </h4>
              <div className="flex items-start gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{inspectedSkill.appliedIn}</span>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setInspectedSkill(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
