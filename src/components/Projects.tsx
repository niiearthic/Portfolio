import { motion, useReducedMotion } from 'motion/react';
import resumeData from '../data/resume.json';

export default function Projects() {
  const { projects } = resumeData;
  const shouldReduceMotion = useReducedMotion();
  const yOffset = shouldReduceMotion ? 0 : 20;

  return (
    <section id="projects" className="flex h-full flex-col rounded-[20px] border border-white/10 bg-slate-900/70 p-6 backdrop-blur-[12px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] md:p-8">
      <h2 className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[1px] text-cyan-500">
        <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
        Projects
      </h2>

      <div className="flex flex-col gap-5">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-sm font-semibold text-white">{project.title}</h3>
            <div className="mt-1.5 space-y-1">
              {project.bullets.map((bullet, i) => (
                <p key={i} className="text-xs leading-relaxed text-slate-400">
                  {bullet}
                </p>
              ))}
            </div>
            {project.stack.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
