import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { education, bootcamps } from '../data/profile';
import { FiBook, FiAward } from 'react-icons/fi';

const Education: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="education" className="py-24 px-6 bg-dark-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-subheading">Academic Background</p>
          <h2 className="section-heading">Education & Training</h2>
          <div className="w-16 h-1 bg-primary-600 rounded" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Formal Education */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <FiBook className="text-primary-400 w-5 h-5" />
              <h3 className="text-white font-semibold text-lg">Formal Education</h3>
            </div>
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                className="card"
              >
                <h4 className="text-white font-semibold text-lg">{edu.institution}</h4>
                <p className="text-slate-400 text-sm">{edu.location}</p>
                <p className="text-primary-400 font-medium mt-2">{edu.degree}</p>
                <p className="text-slate-500 font-mono text-sm mt-1">{edu.period}</p>
                {edu.detail && (
                  <p className="text-slate-400 text-sm mt-3 flex items-center gap-2">
                    <FiAward className="text-primary-400 flex-shrink-0" />
                    {edu.detail}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Bootcamps */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <FiAward className="text-primary-400 w-5 h-5" />
              <h3 className="text-white font-semibold text-lg">Bootcamps & Certifications</h3>
            </div>
            <div className="space-y-4">
              {bootcamps.map((bc, i) => (
                <motion.div
                  key={bc.institution + bc.program}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 + 0.2 }}
                  className="card"
                >
                  <h4 className="text-white font-semibold">{bc.institution}</h4>
                  <p className="text-slate-400 text-sm">{bc.location}</p>
                  <p className="text-primary-400 font-medium mt-2 text-sm">{bc.program}</p>
                  <p className="text-slate-500 font-mono text-sm mt-1">{bc.period}</p>
                  {bc.detail && (
                    <p className="text-slate-400 text-sm mt-2 flex items-center gap-2">
                      <FiAward className="text-yellow-400 flex-shrink-0" />
                      {bc.detail}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
