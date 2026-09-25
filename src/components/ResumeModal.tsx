import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink, Github, Linkedin } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-4xl bg-slate-900 border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[94vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="p-4 bg-slate-950 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Document Preview</span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-white font-medium">ROHINDH_S_Resume.pdf</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Download PDF</span>
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

        {/* Resume Content Container (Styled like a clean A4 resume) */}
        <div className="p-6 sm:p-10 overflow-y-auto flex-1 bg-slate-950/95 font-sans text-slate-200">
          <div className="max-w-3xl mx-auto bg-white text-slate-900 p-8 sm:p-10 rounded-xl shadow-xl print:p-0 print:shadow-none print:bg-white print:text-black">
            
            {/* Header */}
            <div className="text-center pb-4 border-b border-slate-300">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 uppercase">
                {PORTFOLIO_DATA.personal.name}
              </h1>
              <p className="text-sm font-semibold text-slate-700 mt-0.5">
                {PORTFOLIO_DATA.personal.role}
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-600 mt-2">
                <span>{PORTFOLIO_DATA.personal.location}</span>
                <span>|</span>
                <a href={`tel:${PORTFOLIO_DATA.personal.phone}`} className="text-blue-700 hover:underline">
                  {PORTFOLIO_DATA.personal.phone}
                </a>
                <span>|</span>
                <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-blue-700 hover:underline">
                  {PORTFOLIO_DATA.personal.email}
                </a>
              </div>

              <div className="flex items-center justify-center gap-4 text-xs font-semibold text-blue-700 mt-1.5">
                <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  LinkedIn
                </a>
                <span>|</span>
                <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  GitHub
                </a>
                <span>|</span>
                <a href="#hero" onClick={onClose} className="hover:underline">
                  Portfolio
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="pt-4 pb-3 border-b border-slate-200">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1.5">
                Professional Summary
              </h2>
              <p className="text-xs text-slate-700 leading-relaxed text-justify">
                Full Stack Developer with hands-on experience building web applications using Python, Django, Django REST
                Framework, React, JavaScript, MySQL, and SQLite. Experienced in developing REST APIs, JWT authentication,
                role-based access control, database models, responsive user interfaces, API integration, and Git-based development
                workflows. Built full-stack applications including a food delivery platform and an expense tracking application.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="pt-3 pb-3 border-b border-slate-200 text-xs">
              <h2 className="font-bold uppercase tracking-wider text-slate-900 mb-1.5">
                Technical Skills
              </h2>
              <div className="space-y-1 text-slate-700">
                <p><strong className="text-slate-900">Programming Languages:</strong> Python, Java, JavaScript</p>
                <p><strong className="text-slate-900">Frontend:</strong> React.js, HTML5, CSS3, JavaScript, Tailwind CSS</p>
                <p><strong className="text-slate-900">Backend:</strong> Django, Django REST Framework, REST APIs, JWT Authentication, SimpleJWT</p>
                <p><strong className="text-slate-900">Databases:</strong> MySQL, SQLite</p>
                <p><strong className="text-slate-900">Development Tools:</strong> Git, GitHub, VS Code</p>
                <p><strong className="text-slate-900">Concepts:</strong> Object-Oriented Programming, CRUD Operations, API Integration, Responsive Web Design</p>
              </div>
            </div>

            {/* Work Experience */}
            <div className="pt-3 pb-3 border-b border-slate-200 text-xs">
              <div className="flex justify-between items-baseline mb-1">
                <h2 className="font-bold uppercase tracking-wider text-slate-900">
                  Work Experience
                </h2>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-semibold text-slate-900">
                  <span>Full Stack Web Developer Intern — Tap Academy</span>
                  <span className="font-mono text-slate-600">2025</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-slate-700 mt-1.5 leading-relaxed">
                  <li>
                    Developed responsive React.js UI components and integrated them with Django REST Framework APIs for a
                    live internal web application. Designed relational database schemas and implemented query logic using MySQL
                    for application data management.
                  </li>
                  <li>
                    Implemented and tested frontend and backend modules, resolved bugs, and contributed to feature development
                    using Git-based workflows. Worked across frontend, backend, and database layers to develop and integrate end-to-end
                    application features.
                  </li>
                </ul>
              </div>
            </div>

            {/* Projects */}
            <div className="pt-3 pb-3 border-b border-slate-200 text-xs">
              <h2 className="font-bold uppercase tracking-wider text-slate-900 mb-2">
                Projects
              </h2>

              {/* Project 1 */}
              <div className="mb-3">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-slate-900">
                    FoodExpress – Full-Stack Food Delivery Platform
                  </span>
                  <a href={PORTFOLIO_DATA.projects[0].githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-700 font-semibold hover:underline">
                    Link [GitHub]
                  </a>
                </div>
                <p className="text-[11px] text-slate-600 italic">React.js (Vite), Django REST Framework, SimpleJWT</p>
                <ul className="list-disc list-outside pl-4 space-y-1 text-slate-700 mt-1 leading-relaxed">
                  <li>Developed a role-based food delivery platform with separate customer and restaurant-owner workflows using React.js and Django REST Framework.</li>
                  <li>Implemented JWT-based authentication and authorization with SimpleJWT, including token refresh and protected API endpoints.</li>
                  <li>Developed REST APIs for restaurant search, menu management, cart operations, order processing, and order-status updates.</li>
                  <li>Built a shopping cart with real-time subtotal calculation and integrated mock UPI and card payment workflows.</li>
                  <li>Designed six core database models including User, RestaurantProfile, MenuItem, CartItem, Order, and OrderItem, along with a restaurant-owner dashboard.</li>
                  <li>Implemented automatic PDF invoice generation during checkout using jsPDF.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div>
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-slate-900">
                    Expense Tracker – Full-Stack Budgeting Application
                  </span>
                  <a href={PORTFOLIO_DATA.projects[1].githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-700 font-semibold hover:underline">
                    Link [GitHub]
                  </a>
                </div>
                <p className="text-[11px] text-slate-600 italic">React.js, Django REST Framework, SQLite</p>
                <ul className="list-disc list-outside pl-4 space-y-1 text-slate-700 mt-1 leading-relaxed">
                  <li>Developed a full-stack expense tracking application using React.js for the frontend and Django REST Framework for backend REST APIs.</li>
                  <li>Implemented token-based user authentication for secure registration and login workflows.</li>
                  <li>Designed expense management functionality with categories, titles, amounts, dates, and transaction records stored in SQLite.</li>
                  <li>Implemented real-time budget calculations to determine available balance from the target budget and total expenses.</li>
                  <li>Implemented CRUD operations for expense records and integrated frontend components with backend APIs.</li>
                </ul>
              </div>
            </div>

            {/* Certifications */}
            <div className="pt-3 pb-3 border-b border-slate-200 text-xs">
              <h2 className="font-bold uppercase tracking-wider text-slate-900 mb-1">
                Certifications
              </h2>
              <div className="flex justify-between items-baseline text-slate-800">
                <span className="font-semibold">Full Stack Web Development Certification — Tap Academy</span>
                <span className="font-mono text-slate-600">2025</span>
              </div>
            </div>

            {/* Education */}
            <div className="pt-3 text-xs">
              <h2 className="font-bold uppercase tracking-wider text-slate-900 mb-1">
                Education
              </h2>
              <div className="flex justify-between items-baseline font-semibold text-slate-800">
                <span>Bachelor of Technology (B.Tech) – Information Technology</span>
                <span className="font-mono text-slate-600">2021 – 2025</span>
              </div>
              <div className="flex justify-between items-baseline text-slate-600 mt-0.5">
                <span>Sri Ramakrishna Institute of Technology</span>
                <span className="font-semibold text-slate-800">CGPA: 7.1 / 10.0</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
