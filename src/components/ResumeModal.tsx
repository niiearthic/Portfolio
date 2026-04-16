import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Download } from 'lucide-react';
import resumeData from '../data/resume.json';
// @ts-ignore
import html2pdf from 'html2pdf.js';

export default function ResumeModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { basics, experience, projects, skills, education, certifications } = resumeData;

  const handleDownloadPDF = () => {
    const element = document.getElementById('resume-paper');
    const opt = {
      margin:       0.5,
      filename:     'Nikita_Singh_Resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(element).save();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex flex-col items-center overflow-y-auto bg-slate-950/80 p-4 backdrop-blur-sm print:static print:block print:h-auto print:overflow-visible print:bg-white print:p-0"
          id="resume-modal-root"
        >
          {/* Toolbar */}
          <div className="sticky top-4 z-10 mb-4 flex w-full max-w-[210mm] justify-end gap-3 print:hidden">
            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-400"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </button>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <Printer className="h-4 w-4" />
              Print
            </button>
            <button
              onClick={onClose}
              className="flex items-center justify-center rounded-lg bg-white/10 p-2 text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Resume Paper */}
          <div id="resume-paper" className="w-full max-w-[210mm] min-h-[297mm] bg-white p-8 text-slate-900 shadow-2xl sm:p-12 print:m-0 print:w-full print:max-w-none print:p-0 print:shadow-none">
            {/* Header */}
            <header className="mb-6 border-b border-slate-300 pb-6">
              <h1 className="mb-2 text-4xl font-bold text-slate-900">{basics.name}</h1>
              <p className="mb-3 text-lg font-medium text-cyan-700">{basics.title}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-600">
                <span>{basics.email}</span>
                <span>•</span>
                <span>{basics.phone}</span>
                <span>•</span>
                <span>{basics.location}</span>
                {basics.links.map(link => (
                  <span key={link.name}>
                    <span>•</span> <a href={link.url} target="_blank" rel="noopener noreferrer" className="ml-1 text-cyan-700 hover:underline">{link.name}</a>
                  </span>
                ))}
              </div>
            </header>

            {/* Summary */}
            <section className="mb-6">
              <p className="text-sm leading-relaxed text-slate-700">{basics.summary}</p>
            </section>

            {/* Experience */}
            <section className="mb-6">
              <h2 className="mb-3 border-b border-slate-200 pb-1 text-lg font-bold uppercase tracking-wider text-slate-900">Experience</h2>
              <div className="space-y-5">
                {experience.map((job, i) => (
                  <div key={i}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-bold text-slate-900">{job.role}</h3>
                      <span className="text-sm font-medium text-slate-600">{job.dates}</span>
                    </div>
                    <div className="mb-2 text-sm font-medium text-cyan-700">
                      {job.company} {job.location && `- ${job.location}`}
                    </div>
                    {job.bullets.length > 0 && (
                      <ul className="ml-4 list-outside list-disc space-y-1 text-sm text-slate-700">
                        {job.bullets.map((bullet, j) => (
                          <li key={j} className="pl-1 leading-relaxed">{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section className="mb-6">
              <h2 className="mb-3 border-b border-slate-200 pb-1 text-lg font-bold uppercase tracking-wider text-slate-900">Projects</h2>
              <div className="space-y-4">
                {projects.map((project, i) => (
                  <div key={i}>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3 className="font-bold text-slate-900">{project.title}</h3>
                      {project.stack.length > 0 && (
                        <span className="text-xs font-medium text-slate-500">| {project.stack.join(', ')}</span>
                      )}
                    </div>
                    <ul className="mt-2 ml-4 list-outside list-disc space-y-1 text-sm text-slate-700">
                      {project.bullets.map((bullet, j) => (
                        <li key={j} className="pl-1 leading-relaxed">{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section className="mb-6">
              <h2 className="mb-3 border-b border-slate-200 pb-1 text-lg font-bold uppercase tracking-wider text-slate-900">Skills</h2>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {skills.map((group, i) => (
                  <div key={i} className="text-sm">
                    <span className="font-bold text-slate-900">{group.category}: </span>
                    <span className="text-slate-700">{group.items.join(', ')}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Education & Certifications */}
            <section>
              <h2 className="mb-3 border-b border-slate-200 pb-1 text-lg font-bold uppercase tracking-wider text-slate-900">Education & Certifications</h2>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={i}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-bold text-slate-900">{edu.degree}</h3>
                      <span className="text-sm font-medium text-slate-600">{edu.dates}</span>
                    </div>
                    <div className="text-sm text-slate-700">{edu.institution}</div>
                    <div className="text-sm text-slate-600">{edu.details}</div>
                  </div>
                ))}
                <div className="pt-2">
                  <ul className="ml-4 list-outside list-disc space-y-1 text-sm text-slate-700">
                    {certifications.map((cert, i) => (
                      <li key={i} className="pl-1 leading-relaxed">{cert}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
