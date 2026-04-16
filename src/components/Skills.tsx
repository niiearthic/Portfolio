import { motion, useReducedMotion } from 'motion/react';
import resumeData from '../data/resume.json';

export default function Skills() {
  const { skills } = resumeData;
  const shouldReduceMotion = useReducedMotion();
  const yOffset = shouldReduceMotion ? 0 : 20;

  return (
    <section id="skills" className="flex h-full flex-col rounded-[20px] border border-white/10 bg-slate-900/70 p-6 backdrop-blur-[12px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] md:p-8">
      <h2 className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[1px] text-cyan-500">
        <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
        Core Stack
      </h2>

      <div className="flex flex-col gap-6">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="mb-3 text-xs text-slate-400">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item, i) => (
                <span
                  key={i}
                  className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
