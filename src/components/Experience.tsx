import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { experiences } from '../data/profile';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const ExperienceCard: React.FC<{ exp: typeof experiences[0]; index: number; inView: boolean }> = ({
  exp,
  index,
  inView,
}) => {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-dark-600" />
      {/* Timeline dot */}
      <div className={`absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 ${exp.current ? 'bg-primary-500 border-primary-400' : 'bg-dark-700 border-dark-500'}`} />

      <div className="card">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 flex-wrap mb-1">
              <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
              {exp.current && (
                <span className="bg-primary-900/50 text-primary-300 text-xs font-mono px-2.5 py-0.5 rounded-full border border-primary-800 animate-pulse">
                  Current
                </span>
              )}
            </div>
            <p className="text-primary-400 font-medium">{exp.company}, {exp.country}</p>
            <p className="text-slate-500 text-sm font-mono mt-1">{exp.period}</p>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex-shrink-0 text-slate-400 hover:text-primary-400 transition-colors p-1"
            aria-label="Toggle details"
          >
            {expanded ? <FiChevronUp className="w-5 h-5" /> : <FiChevronDown className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-slate-400 text-sm mt-4 mb-4 leading-relaxed">{exp.description}</p>
              <ul className="space-y-2 mb-4">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                    <span className="text-primary-500 mt-1 flex-shrink-0">▹</span>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="py-24 px-6 bg-dark-800/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-subheading">Where I've Worked</p>
          <h2 className="section-heading">Experience</h2>
          <div className="w-16 h-1 bg-primary-600 rounded" />
        </motion.div>

        <div>
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company + exp.period} exp={exp} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
