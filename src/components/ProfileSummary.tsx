import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  CheckCircle2, 
  Terminal, 
  Server, 
  Database, 
  Layout, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  GitBranch,
  Cpu
} from 'lucide-react';

export const ProfileSummary: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'recruiter-pitch'>('overview');

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-400">
              Professional Identity
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">
              Profile Summary & Technical Vision
            </h2>
          </div>

          {/* Interactive Mode Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-white/10 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'overview'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Executive Summary
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'architecture'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Full-Stack Architecture
            </button>
            <button
              onClick={() => setActiveTab('recruiter-pitch')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'recruiter-pitch'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Recruiter Value Proposition
            </button>
          </div>
        </div>

        {/* Tab 1: Executive Summary */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-5">
              <div className="p-6 rounded-2xl bg-slate-900/70 border border-white/10 shadow-xl space-y-4">
                <p className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed">
                  {PORTFOLIO_DATA.summary.lead}
                </p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {PORTFOLIO_DATA.summary.body}
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-400 border-t border-white/5">
                  <span className="text-slate-300 font-medium">Core Focus:</span>
                  <span>Production-Grade REST APIs</span>
                  <span aria-hidden="true">·</span>
                  <span>SimpleJWT Authentication</span>
                  <span aria-hidden="true">·</span>
                  <span>Reactive React Frontends</span>
                  <span aria-hidden="true">·</span>
                  <span>MySQL Database Schemas</span>
                </div>
              </div>

              {/* Highlights cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5">
                  <span className="text-2xl font-extrabold text-blue-400">2025</span>
                  <p className="text-xs text-slate-400 mt-1">B.Tech IT Graduate & Tap Academy Intern</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5">
                  <span className="text-2xl font-extrabold text-indigo-400">6+ Models</span>
                  <p className="text-xs text-slate-400 mt-1">Normalized Relational Architecture</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5">
                  <span className="text-2xl font-extrabold text-emerald-400">Zero Fluff</span>
                  <p className="text-xs text-slate-400 mt-1">Real Code, Real APIs, Real Git Commits</p>
                </div>
              </div>
            </div>

            {/* Recruiter Quick Snapshot */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-blue-950/40 border border-blue-500/20 shadow-xl space-y-5">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-bold text-white">Why Recruiters Shortlist Rohindh</h3>
              </div>

              <ul className="space-y-3.5 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Hands-on Internship Experience:</strong> Built and debugged live internal web apps at Tap Academy across both React frontend and Django backend.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Full-Stack Autonomy:</strong> Capable of writing the database migration in Django ORM, the DRF serializer, the viewset, and the React client fetch hook in one sprint.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Clean Token Security:</strong> Built end-to-end SimpleJWT auth with automated refresh tokens and role-based permissions (Customer vs Owner).
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Immediate Availability:</strong> Fresh graduate based in Bangalore, ready to join on-site or hybrid software teams immediately.
                  </span>
                </li>
              </ul>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-400">Target Role:</span>
                <span className="font-semibold text-blue-400">Python Full Stack / React Developer</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Full-Stack Architecture Breakdown */}
        {activeTab === 'architecture' && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-blue-400" />
                End-to-End Engineering Architecture Flow
              </h3>
              <p className="text-sm text-slate-300 mb-6">
                Rohindh's projects are built around decoupled, scalable architectural layers with clean separation of concerns:
              </p>

              {/* Architecture Pipeline Visualizer */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
                
                {/* Layer 1: Client UI */}
                <div className="p-5 rounded-xl bg-slate-800/60 border border-blue-500/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Frontend Layer</span>
                      <Layout className="w-4 h-4 text-blue-400" />
                    </div>
                    <h4 className="text-base font-bold text-white">React.js (Vite) + Tailwind</h4>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      Responsive SPAs, modular component hierarchy, custom hooks for state & API calls, real-time cart subtotal calculations, and client-side PDF generation.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-slate-400 font-mono">
                    State: useState · useEffect · Context
                  </div>
                </div>

                {/* Layer 2: API & Business Logic */}
                <div className="p-5 rounded-xl bg-slate-800/60 border border-indigo-500/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Backend & Auth</span>
                      <Server className="w-4 h-4 text-indigo-400" />
                    </div>
                    <h4 className="text-base font-bold text-white">Django REST Framework</h4>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      ModelViewSets, Serializer validation, SimpleJWT bearer token authentication with refresh rotation, RBAC permission classes, and RESTful routing.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-slate-400 font-mono">
                    Auth: SimpleJWT · RBAC · CRUD
                  </div>
                </div>

                {/* Layer 3: Database & Storage */}
                <div className="p-5 rounded-xl bg-slate-800/60 border border-emerald-500/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Database Layer</span>
                      <Database className="w-4 h-4 text-emerald-400" />
                    </div>
                    <h4 className="text-base font-bold text-white">MySQL & SQLite</h4>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      Normalized relational schemas (User, Restaurant, MenuItem, Cart, Order, Transactions), foreign key constraints, atomic transactions, and ORM query optimization.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-slate-400 font-mono">
                    Data: 1:N & M:N relations · Indexing
                  </div>
                </div>
              </div>
            </div>

            {/* Code / Flow Demonstration */}
            <div className="p-4 rounded-xl bg-slate-950 border border-white/10 font-mono text-xs text-slate-300">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10 text-slate-400">
                <span className="flex items-center gap-1.5 text-blue-400">
                  <Terminal className="w-3.5 h-3.5" />
                  REST API Flow Example: Order Checkout & Invoice Pipeline
                </span>
                <span className="text-[11px]">HTTP 201 Created</span>
              </div>
              <p className="text-slate-400">
                [Client] POST /api/orders/checkout/ {'->'} Bearer &lt;SimpleJWT_Token&gt;
              </p>
              <p className="text-emerald-400 mt-1">
                [Backend] Django DRF: Validate Cart Items {'->'} Calculate Subtotal + Tax {'->'} Atomic DB Transaction in MySQL {'->'} Return Order ID & Invoice Payload
              </p>
              <p className="text-blue-400 mt-1">
                [Client] React.js: Catch response {'->'} Clear Cart state {'->'} Trigger jsPDF automatic receipt download.
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Recruiter Value Proposition */}
        {activeTab === 'recruiter-pitch' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.summary.valueProps.map((prop, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-blue-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{prop.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{prop.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 text-xs text-blue-400 flex items-center gap-1 font-medium">
                  Verified in practical projects <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
