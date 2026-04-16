import { motion, useReducedMotion } from 'motion/react';
import resumeData from '../data/resume.json';

export default function Education() {
  const { education, certifications } = resumeData;
  const shouldReduceMotion = useReducedMotion();
  const yOffset = shouldReduceMotion ? 0 : 20;

  return (
    <section id="education" className="flex h-full flex-col rounded-[20px] border border-white/10 bg-slate-900/70 p-6 backdrop-blur-[12px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] md:p-8">
      <h2 className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[1px] text-cyan-500">
        <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
        Education & Certs
      </h2>

      <div className="flex flex-col gap-6">
        {/* Education */}
        <div>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: yOffset }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-white">{edu.degree}</h3>
              <p className="mt-1 text-xs text-slate-400">{edu.institution} — {edu.dates}</p>
              <p className="mt-1 text-xs font-medium text-cyan-500">{edu.details}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-2">
          <h3 className="mb-3 text-xs text-slate-400">Certifications</h3>
          <div className="space-y-2">
            {certifications.map((cert, index) => {
              const [title, org] = cert.split(' - ');
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: yOffset }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-xs"
                >
                  <div className="text-slate-200">• {title}</div>
                  {org && <div className="ml-3 mt-0.5 text-[10px] text-slate-500">{org}</div>}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
