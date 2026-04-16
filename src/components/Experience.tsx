import { motion, useReducedMotion } from 'motion/react';
import resumeData from '../data/resume.json';

export default function Experience() {
  const { experience } = resumeData;
  const shouldReduceMotion = useReducedMotion();
  const yOffset = shouldReduceMotion ? 0 : 20;

  return (
    <section id="experience" className="flex h-full flex-col rounded-[20px] border border-white/10 bg-slate-900/70 p-6 backdrop-blur-[12px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] md:p-8">
      <h2 className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[1px] text-cyan-500">
        <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
        Professional Experience
      </h2>

      <div className="flex flex-col gap-6">
        {experience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-l border-cyan-500/50 pl-4"
          >
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-sm font-semibold text-white">{job.role}</h3>
              {job.company.includes('Cyber Crime') && (
                <span className="rounded bg-cyan-500/20 px-2 py-0.5 text-[10px] font-bold text-cyan-400">
                  Cyber Crime
                </span>
              )}
            </div>
            <div className="mb-2 mt-1 text-xs text-slate-400">
              {job.company} {job.dates && `| ${job.dates}`}
            </div>
            
            {job.bullets.length > 0 && (
              <div className="mt-3 space-y-1.5">
                {job.bullets.map((bullet, i) => (
                  <p key={i} className="text-xs leading-relaxed text-slate-300">
                    • {bullet}
                  </p>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
