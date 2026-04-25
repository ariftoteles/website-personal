import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { skills } from '../data/profile';
import { FiCode, FiDatabase, FiLayers, FiCloud, FiCpu, FiActivity, FiZap } from 'react-icons/fi';
import type { IconType } from 'react-icons';

const iconMap: Record<string, IconType> = {
  code: FiCode,
  database: FiDatabase,
  layers: FiLayers,
  cloud: FiCloud,
  cpu: FiCpu,
  monitor: FiActivity,
  brain: FiZap,
};

const Skills: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-subheading">What I Work With</p>
          <h2 className="section-heading">Skills & Technologies</h2>
          <div className="w-16 h-1 bg-primary-600 rounded" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => {
            const Icon = iconMap[skill.icon];
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-900/50 rounded-lg flex items-center justify-center text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-semibold text-sm">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="tag text-xs">{item}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
