import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { 
  Github, 
  ExternalLink, 
  Play, 
  Layers, 
  Database, 
  Network, 
  ShieldCheck, 
  FileText, 
  Check, 
  Plus, 
  Trash2, 
  ShoppingBag, 
  CreditCard,
  X,
  Sparkles,
  Calculator,
  DollarSign,
  Utensils
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeSimulationProject, setActiveSimulationProject] = useState<Project | null>(null);
  const [simulationTab, setSimulationTab] = useState<'demo' | 'models' | 'endpoints'>('demo');

  // FOODEXPRESS SIMULATION STATE
  const [cart, setCart] = useState<Array<{ id: number; name: string; price: number; quantity: number }>>([
    { id: 1, name: "Hyderabadi Chicken Biryani", price: 280, quantity: 1 },
    { id: 2, name: "Butter Garlic Naan", price: 50, quantity: 2 },
  ]);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'Card'>('UPI');

  const menuCatalog = [
    { id: 1, name: "Hyderabadi Chicken Biryani", price: 280, category: "Main Course" },
    { id: 2, name: "Butter Garlic Naan", price: 50, category: "Breads" },
    { id: 3, name: "Paneer Tikka Masala", price: 240, category: "Curry" },
    { id: 4, name: "Gulab Jamun (2 pcs)", price: 80, category: "Dessert" },
  ];

  const addToCart = (item: typeof menuCatalog[0]) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) => p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p);
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as typeof cart;
    });
  };

  const foodSubtotal = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  const foodTaxes = Math.round(foodSubtotal * 0.05);
  const foodDeliveryFee = foodSubtotal > 0 ? 35 : 0;
  const foodTotal = foodSubtotal + foodTaxes + foodDeliveryFee;

  // EXPENSE TRACKER SIMULATION STATE
  const [targetBudget, setTargetBudget] = useState<number>(30000);
  const [expenses, setExpenses] = useState<Array<{ id: number; title: string; category: string; amount: number; date: string }>>([
    { id: 1, title: "Apartment Rent", category: "Housing", amount: 12000, date: "2025-09-01" },
    { id: 2, title: "Supermarket Groceries", category: "Food", amount: 4800, date: "2025-09-06" },
    { id: 3, title: "Broadband Fiber Net", category: "Utilities", amount: 999, date: "2025-09-10" },
    { id: 4, title: "Metro Smart Card Transit", category: "Transport", amount: 1200, date: "2025-09-14" },
  ]);
  const [newExpenseTitle, setNewExpenseTitle] = useState('');
  const [newExpenseAmount, setNewExpenseAmount] = useState('');
  const [newExpenseCategory, setNewExpenseCategory] = useState('Food');

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newExpenseTitle.trim() || !newExpenseAmount) return;
    const amountVal = parseFloat(newExpenseAmount);
    if (isNaN(amountVal) || amountVal <= 0) return;

    setExpenses((prev) => [
      {
        id: Date.now(),
        title: newExpenseTitle.trim(),
        category: newExpenseCategory,
        amount: amountVal,
        date: new Date().toISOString().split('T')[0],
      },
      ...prev,
    ]);
    setNewExpenseTitle('');
    setNewExpenseAmount('');
  };

  const handleDeleteExpense = (id: number) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };

  const totalExpenseSum = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const remainingBudget = targetBudget - totalExpenseSum;
  const budgetPercentUsed = Math.min(100, Math.round((totalExpenseSum / targetBudget) * 100));

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-400">
              Featured Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">
              Production Full-Stack Projects
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Architected from end-to-end: relational database schemas, secure Django REST Framework endpoints with SimpleJWT, and responsive React.js client interfaces.
            </p>
          </div>
        </div>

        {/* Projects Showcase Cards */}
        <div className="space-y-12">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <div
              key={project.id}
              className="rounded-2xl bg-slate-900/80 border border-white/10 hover:border-blue-500/30 transition-all shadow-xl overflow-hidden"
            >
              <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left side: Project Details & Highlights */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Unboxed Metadata Header (Anti-Slop compliant) */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                      <span className="font-semibold text-blue-400">{project.type}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.period}</span>
                      <span aria-hidden="true">·</span>
                      <span>Full Stack</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm font-semibold text-slate-300 mt-0.5">
                      {project.subtitle}
                    </p>

                    <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                      {project.overview}
                    </p>

                    {/* Key Technical Highlights */}
                    <div className="mt-5 space-y-2.5">
                      <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Architectural Deliverables
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                        {project.keyHighlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech tags - clean text / subtle badges */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
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

                {/* Right side: Interactive Simulation Box & Actions */}
                <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-xl bg-slate-950/70 border border-white/10">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-blue-400 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                        Live Interactive Simulation
                      </span>
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">
                        Ready to Explore
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900 border border-white/5 space-y-3">
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {project.id === 'foodexpress' ? (
                          <>
                            Test real-time cart subtotal calculation, simulated UPI payment, role-based workflows, and automated PDF invoice generation.
                          </>
                        ) : (
                          <>
                            Test dynamic budget recalculation, real-time balance tracking, expense CRUD operations, and category allocation meters.
                          </>
                        )}
                      </p>

                      <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
                        <div className="p-2 rounded bg-slate-800/80 border border-white/5">
                          <span className="text-[10px] text-slate-400 block uppercase">Models</span>
                          <span className="font-bold text-white">{project.models.length} Relational</span>
                        </div>
                        <div className="p-2 rounded bg-slate-800/80 border border-white/5">
                          <span className="text-[10px] text-slate-400 block uppercase">REST APIs</span>
                          <span className="font-bold text-blue-400">{project.endpoints.length} Endpoints</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setActiveSimulationProject(project);
                        setSimulationTab('demo');
                        setOrderConfirmed(false);
                      }}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-blue-600/20 transition-all active:scale-98"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Launch Interactive Sandbox</span>
                    </button>
                  </div>

                  {/* Navigable GitHub Link (Explicitly requested by user) */}
                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors group"
                      title={`Visit ${project.title} GitHub repository`}
                    >
                      <Github className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                      <span>View GitHub Repository</span>
                      <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-blue-400" />
                    </a>

                    <button
                      onClick={() => {
                        setActiveSimulationProject(project);
                        setSimulationTab('models');
                      }}
                      className="text-xs text-blue-400 hover:underline font-medium"
                    >
                      View Schema
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* FULL INTERACTIVE PROJECT SIMULATOR MODAL */}
      {activeSimulationProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveSimulationProject(null)}
        >
          <div 
            className="w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-slate-950 border-b border-white/10 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                    Interactive Lab
                  </span>
                  <span className="text-slate-600">·</span>
                  <span className="text-xs text-slate-400">{activeSimulationProject.title}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                  {activeSimulationProject.title} — System Architecture & Sandbox
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={activeSimulationProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-white/10 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  onClick={() => setActiveSimulationProject(null)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Sub-tabs */}
            <div className="flex items-center gap-2 px-5 py-2.5 bg-slate-900/90 border-b border-white/10 overflow-x-auto no-scrollbar">
              <button
                onClick={() => setSimulationTab('demo')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all ${
                  simulationTab === 'demo'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Play className="w-3 h-3 fill-current" />
                <span>Interactive Live Demo</span>
              </button>

              <button
                onClick={() => setSimulationTab('models')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all ${
                  simulationTab === 'models'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Database className="w-3 h-3" />
                <span>Database Models ({activeSimulationProject.models.length})</span>
              </button>

              <button
                onClick={() => setSimulationTab('endpoints')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all ${
                  simulationTab === 'endpoints'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Network className="w-3 h-3" />
                <span>DRF Endpoints ({activeSimulationProject.endpoints.length})</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 overflow-y-auto flex-1">
              
              {/* FOODEXPRESS DEMO */}
              {activeSimulationProject.id === 'foodexpress' && simulationTab === 'demo' && (
                <div className="space-y-6">
                  {orderConfirmed ? (
                    <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                        <Check className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-bold text-white">Order Confirmed Successfully!</h4>
                      <p className="text-xs text-slate-300 max-w-md mx-auto">
                        Django REST backend created Order <span className="font-mono text-emerald-400">#ORD-94821</span> in MySQL. jsPDF automated invoice has been simulated.
                      </p>

                      {/* Mock PDF Invoice Preview */}
                      <div className="max-w-md mx-auto p-4 rounded-xl bg-slate-900 border border-white/10 text-left font-mono text-xs text-slate-300 space-y-2">
                        <div className="flex justify-between border-b border-white/10 pb-2 text-white font-bold">
                          <span>FoodExpress Invoice</span>
                          <span className="text-emerald-400">PAID via {paymentMethod}</span>
                        </div>
                        <div className="text-[11px] text-slate-400">
                          Date: {new Date().toLocaleDateString()} · Customer: Rohindh S
                        </div>
                        <div className="space-y-1 pt-1">
                          {cart.map((item) => (
                            <div key={item.id} className="flex justify-between text-[11px]">
                              <span>{item.name} x{item.quantity}</span>
                              <span>₹{item.price * item.quantity}</span>
                            </div>
                          ))}
                        </div>
                        <div className="pt-2 border-t border-white/10 flex justify-between font-bold text-white text-xs">
                          <span>Total Amount:</span>
                          <span>₹{foodTotal}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setOrderConfirmed(false);
                          setCart([
                            { id: 1, name: "Hyderabadi Chicken Biryani", price: 280, quantity: 1 }
                          ]);
                        }}
                        className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                      >
                        Reset Simulator
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                      
                      {/* Menu List */}
                      <div className="md:col-span-7 space-y-3">
                        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                          <Utensils className="w-3.5 h-3.5 text-blue-400" />
                          Restaurant Menu Catalog
                        </h4>
                        
                        <div className="space-y-2">
                          {menuCatalog.map((item) => (
                            <div
                              key={item.id}
                              className="p-3 rounded-xl bg-slate-800/60 border border-white/5 flex items-center justify-between hover:border-white/15 transition-all"
                            >
                              <div>
                                <p className="text-sm font-semibold text-white">{item.name}</p>
                                <span className="text-[11px] text-slate-400">{item.category} · ₹{item.price}</span>
                              </div>
                              <button
                                onClick={() => addToCart(item)}
                                className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                              >
                                <Plus className="w-3.5 h-3.5" />
                                Add
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Real-Time Cart */}
                      <div className="md:col-span-5 p-4 rounded-xl bg-slate-950 border border-white/10 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10">
                            <span className="text-xs font-bold text-white flex items-center gap-1.5">
                              <ShoppingBag className="w-3.5 h-3.5 text-blue-400" />
                              Active Cart State
                            </span>
                            <span className="text-[11px] font-mono text-slate-400 tabular-nums">
                              {cart.length} items
                            </span>
                          </div>

                          {cart.length === 0 ? (
                            <p className="text-xs text-slate-500 py-6 text-center">Cart is empty. Add food items!</p>
                          ) : (
                            <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                              {cart.map((item) => (
                                <div key={item.id} className="flex items-center justify-between text-xs py-1 border-b border-white/5">
                                  <div className="truncate max-w-[130px]">
                                    <p className="font-medium text-slate-200 truncate">{item.name}</p>
                                    <span className="text-[10px] text-slate-400">₹{item.price} each</span>
                                  </div>
                                  <div className="flex items-center gap-1.5">
                                    <button 
                                      onClick={() => updateQuantity(item.id, -1)}
                                      className="w-5 h-5 flex items-center justify-center bg-slate-800 text-slate-300 rounded hover:bg-slate-700"
                                    >
                                      -
                                    </button>
                                    <span className="text-xs font-mono font-bold text-white tabular-nums w-4 text-center">
                                      {item.quantity}
                                    </span>
                                    <button 
                                      onClick={() => updateQuantity(item.id, 1)}
                                      className="w-5 h-5 flex items-center justify-center bg-slate-800 text-slate-300 rounded hover:bg-slate-700"
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {cart.length > 0 && (
                          <div className="pt-3 border-t border-white/10 space-y-2 mt-4">
                            <div className="text-xs space-y-1 text-slate-400">
                              <div className="flex justify-between">
                                <span>Subtotal:</span>
                                <span className="text-white font-mono tabular-nums">₹{foodSubtotal}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>GST (5%):</span>
                                <span className="text-white font-mono tabular-nums">₹{foodTaxes}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Delivery Fee:</span>
                                <span className="text-white font-mono tabular-nums">₹{foodDeliveryFee}</span>
                              </div>
                              <div className="flex justify-between text-sm font-bold text-white pt-1 border-t border-white/5">
                                <span>Total Payable:</span>
                                <span className="text-emerald-400 font-mono tabular-nums">₹{foodTotal}</span>
                              </div>
                            </div>

                            {/* Payment Method Selector */}
                            <div className="grid grid-cols-2 gap-1.5 pt-2">
                              <button
                                onClick={() => setPaymentMethod('UPI')}
                                className={`py-1 text-[11px] font-semibold rounded border transition-colors ${
                                  paymentMethod === 'UPI' 
                                    ? 'bg-blue-600/30 text-blue-300 border-blue-500' 
                                    : 'bg-slate-900 text-slate-400 border-white/5'
                                }`}
                              >
                                Mock UPI
                              </button>
                              <button
                                onClick={() => setPaymentMethod('Card')}
                                className={`py-1 text-[11px] font-semibold rounded border transition-colors ${
                                  paymentMethod === 'Card' 
                                    ? 'bg-blue-600/30 text-blue-300 border-blue-500' 
                                    : 'bg-slate-900 text-slate-400 border-white/5'
                                }`}
                              >
                                Mock Card
                              </button>
                            </div>

                            <button
                              onClick={() => setOrderConfirmed(true)}
                              className="w-full py-2 px-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-md transition-all active:scale-98"
                            >
                              Checkout & Generate jsPDF Invoice
                            </button>
                          </div>
                        )}
                      </div>

                    </div>
                  )}
                </div>
              )}

              {/* EXPENSE TRACKER DEMO */}
              {activeSimulationProject.id === 'expense-tracker' && simulationTab === 'demo' && (
                <div className="space-y-6">
                  {/* Top Stats Banner */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-4 rounded-xl bg-slate-950 border border-white/10">
                      <span className="text-[11px] uppercase tracking-wider text-slate-400">Target Budget</span>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-lg font-bold text-white">₹</span>
                        <input
                          type="number"
                          value={targetBudget}
                          onChange={(e) => setTargetBudget(Math.max(1000, Number(e.target.value) || 0))}
                          className="w-28 bg-slate-800 text-white font-mono font-bold text-lg px-2 py-0.5 rounded border border-white/10 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-white/10">
                      <span className="text-[11px] uppercase tracking-wider text-slate-400">Total Spent</span>
                      <p className="text-xl font-bold font-mono text-red-400 mt-1 tabular-nums">
                        ₹{totalExpenseSum.toLocaleString()}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-white/10">
                      <span className="text-[11px] uppercase tracking-wider text-slate-400">Available Balance</span>
                      <p className={`text-xl font-bold font-mono mt-1 tabular-nums ${
                        remainingBudget >= 0 ? 'text-emerald-400' : 'text-rose-500'
                      }`}>
                        ₹{remainingBudget.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* Budget Allocation Progress Meter */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-white/10 space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-300 font-medium">Budget Utilization</span>
                      <span className="font-mono text-blue-400 tabular-nums">{budgetPercentUsed}% Used</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-300 ${
                          budgetPercentUsed > 90 
                            ? 'bg-rose-500' 
                            : budgetPercentUsed > 70 
                            ? 'bg-amber-500' 
                            : 'bg-gradient-to-r from-blue-500 to-emerald-400'
                        }`}
                        style={{ width: `${budgetPercentUsed}%` }}
                      />
                    </div>
                  </div>

                  {/* Interactive Add Expense Form */}
                  <form onSubmit={handleAddExpense} className="p-4 rounded-xl bg-slate-800/40 border border-white/5 space-y-3">
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      Add New Expense Record (Simulates DRF POST)
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
                      <input
                        type="text"
                        placeholder="Expense title (e.g. Swiggy food)..."
                        value={newExpenseTitle}
                        onChange={(e) => setNewExpenseTitle(e.target.value)}
                        className="sm:col-span-5 px-3 py-2 text-xs bg-slate-900 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                      <input
                        type="number"
                        placeholder="Amount (₹)..."
                        value={newExpenseAmount}
                        onChange={(e) => setNewExpenseAmount(e.target.value)}
                        className="sm:col-span-3 px-3 py-2 text-xs bg-slate-900 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                      <select
                        value={newExpenseCategory}
                        onChange={(e) => setNewExpenseCategory(e.target.value)}
                        className="sm:col-span-2 px-2 py-2 text-xs bg-slate-900 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="Food">Food</option>
                        <option value="Housing">Housing</option>
                        <option value="Utilities">Utilities</option>
                        <option value="Transport">Transport</option>
                        <option value="Leisure">Leisure</option>
                      </select>
                      <button
                        type="submit"
                        className="sm:col-span-2 px-3 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center justify-center gap-1"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        Save
                      </button>
                    </div>
                  </form>

                  {/* Transaction Ledger Table */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      Transaction Ledger ({expenses.length} records in SQLite)
                    </span>
                    <div className="space-y-1.5 max-h-52 overflow-y-auto">
                      {expenses.map((exp) => (
                        <div
                          key={exp.id}
                          className="p-3 rounded-lg bg-slate-950 border border-white/5 flex items-center justify-between text-xs"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-blue-400" />
                            <div>
                              <p className="font-semibold text-white">{exp.title}</p>
                              <span className="text-[11px] text-slate-400">{exp.category} · {exp.date}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-mono font-bold text-red-400 tabular-nums">
                              -₹{exp.amount.toLocaleString()}
                            </span>
                            <button
                              onClick={() => handleDeleteExpense(exp.id)}
                              className="text-slate-500 hover:text-rose-400 p-1 rounded"
                              title="Delete expense"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* DATABASE MODELS TAB */}
              {simulationTab === 'models' && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-300">
                    Relational schema designed and implemented in Django ORM with foreign-key integrity constraints:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeSimulationProject.models.map((model) => (
                      <div key={model.name} className="p-4 rounded-xl bg-slate-950 border border-white/10 space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-blue-400 font-mono">
                            class {model.name}(models.Model)
                          </h4>
                          <span className="text-[10px] text-slate-400">Django ORM</span>
                        </div>
                        <p className="text-xs text-slate-300">{model.purpose}</p>
                        <div className="pt-2 border-t border-white/5">
                          <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Fields:</span>
                          <div className="flex flex-wrap gap-1">
                            {model.fields.map((f) => (
                              <span key={f} className="px-2 py-0.5 text-[11px] font-mono bg-slate-800 text-slate-300 rounded">
                                {f}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* REST API ENDPOINTS TAB */}
              {simulationTab === 'endpoints' && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-300">
                    RESTful API endpoints constructed with Django REST Framework (DRF) serializers & viewsets:
                  </p>
                  <div className="space-y-2">
                    {activeSimulationProject.endpoints.map((ep, eIdx) => (
                      <div key={eIdx} className="p-3.5 rounded-xl bg-slate-950 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                        <div className="flex items-center gap-2.5 font-mono">
                          <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                            ep.method === 'GET' 
                              ? 'bg-blue-900/60 text-blue-400 border border-blue-500/30' 
                              : ep.method === 'POST' 
                              ? 'bg-emerald-900/60 text-emerald-400 border border-emerald-500/30'
                              : ep.method === 'DELETE'
                              ? 'bg-rose-900/60 text-rose-400 border border-rose-500/30'
                              : 'bg-amber-900/60 text-amber-400 border border-amber-500/30'
                          }`}>
                            {ep.method}
                          </span>
                          <span className="text-slate-200 font-semibold">{ep.path}</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="text-slate-400 text-[11px]">{ep.description}</span>
                          {ep.authRequired ? (
                            <span className="text-[10px] text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/20 whitespace-nowrap">
                              Bearer JWT
                            </span>
                          ) : (
                            <span className="text-[10px] text-slate-500 whitespace-nowrap">Public</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

    </section>
  );
};
