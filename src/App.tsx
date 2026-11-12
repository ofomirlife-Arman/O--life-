import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CooperCodeSection } from './components/CooperCodeSection';
import { MethodologyDeepDive } from './components/MethodologyDeepDive';
import { CourseImportance } from './components/CourseImportance';
import { InteractiveQuiz } from './components/InteractiveQuiz';
import { Curriculum } from './components/Curriculum';
import { ContactAndLocation } from './components/ContactAndLocation';
import { Footer } from './components/Footer';
import { EnrollmentModal } from './components/EnrollmentModal';

export default function App() {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial preference or default to dark
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans transition-colors duration-200">
      
      {/* Top Navigation */}
      <Navbar
        onOpenEnrollment={() => setIsEnrollmentOpen(true)}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenEnrollment={() => setIsEnrollmentOpen(true)} />

        {/* The Core Method: Cooper's Color Code */}
        <CooperCodeSection />

        {/* 4 Essential Questions: Root Cause, Prevention, Practice, Collective Outcome */}
        <MethodologyDeepDive />

        {/* Course Importance, Ethics & Regional Specifics */}
        <CourseImportance onOpenEnrollment={() => setIsEnrollmentOpen(true)} />

        {/* Interactive Self-Test Quiz */}
        <InteractiveQuiz onOpenEnrollment={() => setIsEnrollmentOpen(true)} />

        {/* Curriculum & Packages */}
        <Curriculum onOpenEnrollment={() => setIsEnrollmentOpen(true)} />

        {/* Contacts, Exact Address & Interactive Map */}
        <ContactAndLocation />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Interactive Registration / WhatsApp Dialog Modal */}
      <EnrollmentModal
        isOpen={isEnrollmentOpen}
        onClose={() => setIsEnrollmentOpen(false)}
      />

    </div>
  );
}
