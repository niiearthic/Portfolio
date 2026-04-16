import { motion } from 'motion/react';
import { Download, ChevronDown, Mail, MapPin, Phone, Github, Linkedin, Instagram } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function Hero({ onOpenResume }: { onOpenResume?: () => void }) {
  const { basics } = resumeData;

  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="flex h-full flex-col justify-center rounded-[20px] border border-white/10 bg-slate-900/70 p-6 backdrop-blur-[12px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-2 text-sm font-semibold uppercase tracking-[2px] text-cyan-500"
      >
        {basics.title}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent"
      >
        {basics.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mb-8 max-w-2xl text-sm leading-relaxed text-slate-400"
      >
        {basics.summary}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-8 flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:flex-wrap sm:items-center"
      >
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-cyan-500" />
          <a href={`mailto:${basics.email}`} className="hover:text-white transition-colors">{basics.email}</a>
        </div>
        <div className="hidden sm:block text-white/20">•</div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-cyan-500" />
          <a href={`tel:${basics.phone}`} className="hover:text-white transition-colors">{basics.phone}</a>
        </div>
        <div className="hidden sm:block text-white/20">•</div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-cyan-500" />
          <span>{basics.location}</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-auto flex flex-wrap items-center gap-4"
      >
        <button
          onClick={scrollToExperience}
          className="rounded-xl border border-cyan-500 bg-cyan-500/10 px-6 py-2.5 text-xs font-bold text-cyan-500 transition-colors hover:bg-cyan-500 hover:text-slate-950"
        >
          View Experience
        </button>

        <button
          onClick={onOpenResume}
          className="rounded-xl border border-white/10 bg-white/5 px-6 py-2.5 text-xs font-bold text-white transition-colors hover:bg-white/10"
        >
          Download Resume
        </button>
        
        <div className="ml-auto flex gap-3">
          {basics.links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              {link.name.toLowerCase().includes('github') ? (
                <Github className="h-4 w-4" />
              ) : link.name.toLowerCase().includes('instagram') ? (
                <Instagram className="h-4 w-4" />
              ) : (
                <Linkedin className="h-4 w-4" />
              )}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
