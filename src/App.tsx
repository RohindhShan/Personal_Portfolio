/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProfileSummary } from './components/ProfileSummary';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { ExperienceEducation } from './components/ExperienceEducation';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CertificateModal } from './components/CertificateModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  const handleOpenContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Navigation Bar */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Centered Profile Picture */}
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={handleOpenContact}
        />

        {/* Profile Summary & Architecture Breakdown */}
        <ProfileSummary />

        {/* Technical Stack with Dynamic Categories & Skill Inspector */}
        <TechStack />

        {/* Full-Stack Projects with Interactive Simulators & GitHub Links */}
        <Projects />

        {/* Internship Experience, Education & Verified Certifications */}
        <ExperienceEducation 
          onOpenCertificate={() => setIsCertificateOpen(true)}
        />

        {/* Recruiter Contact & Direct Connect */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Modals */}
      <ResumeModal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <CertificateModal 
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
      />
    </div>
  );
}
