/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import AnimatedBackground from './components/AnimatedBackground';
import Splash from './components/Splash';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-50 selection:bg-cyan-500/30">
      <div className="print:hidden">
        <AnimatedBackground />
        
        <AnimatePresence mode="wait">
          {showSplash && <Splash onComplete={() => setShowSplash(false)} />}
        </AnimatePresence>

        {!showSplash && (
          <>
            <Navigation />
            <main className="relative z-10 mx-auto max-w-[1024px] px-4 pb-24 pt-24 md:px-8 md:pb-32 md:pt-32">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
                {/* Row 1 */}
                <div className="md:col-span-12 lg:col-span-8">
                  <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
                </div>
                <div className="md:col-span-12 lg:col-span-4">
                  <Skills />
                </div>
                {/* Row 2 */}
                <div className="md:col-span-12 lg:col-span-7">
                  <Experience />
                </div>
                <div className="md:col-span-12 lg:col-span-5 flex flex-col gap-4">
                  <Projects />
                  <Education />
                </div>
              </div>
            </main>
          </>
        )}
      </div>

      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </div>
  );
}
