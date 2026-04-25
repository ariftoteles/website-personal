import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { profile } from '../data/profile';
import { FiCode, FiCpu, FiZap } from 'react-icons/fi';
import type { IconType } from 'react-icons';

interface Highlight {
  Icon: IconType;
  title: string;
  desc: string;
}

const highlights: Highlight[] = [
  {
    Icon: FiCode,
    title: 'Backend Specialist',
    desc: 'Expert in Golang, Node.js, and .NET building production-grade microservices.',
  },
  {
    Icon: FiCpu,
    title: 'System Design',
    desc: 'Experienced with gRPC, event-driven architecture, NATS, and distributed systems.',
  },
  {
    Icon: FiZap,
    title: 'AI-Augmented Dev',
    desc: 'Leveraging AI agent workflows for automated scaffolding and accelerated delivery.',
  },
];

const About: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subheading">Who I Am</p>
          <h2 className="section-heading">About Me</h2>
          <div className="w-16 h-1 bg-primary-600 rounded mb-10" />

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>{profile.summary}</p>
              <p className="text-slate-300">
                I have worked across <span className="text-primary-400 font-medium">EdTech</span> and{' '}
                <span className="text-primary-400 font-medium">HealthTech</span> industries, building
                systems that scale. I enjoy owning the full backend stack — from API design and database
                optimization to observability and cloud infrastructure.
              </p>
              <div className="pt-4 flex gap-4">
                <a
                  href="mailto:arif.santoso4@gmail.com"
                  className="btn-primary text-sm py-2.5 px-5"
                >
                  Contact Me
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm py-2.5 px-5"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="space-y-4">
              {highlights.map(({ Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
                  className="card flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-900/50 rounded-lg flex items-center justify-center text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{title}</h3>
                    <p className="text-slate-400 text-sm">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
