import { motion } from 'motion/react';
import { User, Briefcase, Code, GraduationCap, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

const navItems = [
  { id: 'hero', label: 'About', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: Code },
  { id: 'education', label: 'Education', icon: GraduationCap },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const scrollTo = (id: string) => {
    setIsOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed top-6 left-1/2 z-40 hidden -translate-x-1/2 md:block"
      >
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/50 px-4 py-2 backdrop-blur-md">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-white",
                  isActive ? "text-white" : "text-slate-400"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <Icon className="h-4 w-4" />
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </div>
      </motion.nav>

      {/* Mobile Navigation Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 text-white backdrop-blur-md md:hidden"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-24 right-6 z-40 flex flex-col gap-2 rounded-2xl border border-white/10 bg-slate-950/90 p-4 backdrop-blur-xl md:hidden"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="flex items-center gap-4 rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </button>
            );
          })}
        </motion.div>
      )}
    </>
  );
}
