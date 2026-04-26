import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { profile } from '../data/profile';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

const Hero: React.FC = () => (
  <section
    id="hero"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-900 to-primary-900/20" />
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-800/10 rounded-full blur-3xl" />

    {/* Grid pattern */}
    <div
      className="absolute inset-0 opacity-5"
      style={{
        backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }}
    />

    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <motion.p {...fadeUp(0.1)} className="font-mono text-primary-400 text-sm tracking-widest uppercase mb-4">
        Hello, I'm
      </motion.p>

      <motion.h1
        {...fadeUp(0.2)}
        className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight"
      >
        {profile.name}
      </motion.h1>

      <motion.div {...fadeUp(0.3)}>
        <span className="text-2xl md:text-3xl font-light text-primary-400">
          {profile.title}
        </span>
      </motion.div>

      <motion.p
        {...fadeUp(0.4)}
        className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
      >
        Backend engineer with <span className="text-primary-300 font-semibold">5+ years</span> of experience building scalable, production-grade systems in{' '}
        <span className="text-primary-300 font-semibold">Golang, Node.js, and .NET</span> across EdTech and HealthTech domains.
      </motion.p>

      <motion.div
        {...fadeUp(0.5)}
        className="mt-8 flex flex-wrap items-center justify-center gap-4 text-slate-400 text-sm"
      >
        <span className="flex items-center gap-1.5">
          <FiMapPin className="text-primary-400" />
          {profile.location}
        </span>
        <span className="text-dark-600">|</span>
        <a href={`https://wa.me/${profile.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary-400 transition-colors">
          <FaWhatsapp className="text-primary-400" />
          {profile.phone}
        </a>
        <span className="text-dark-600">|</span>
        <a href={`mailto:${profile.email}`} className="flex items-center gap-1.5 hover:text-primary-400 transition-colors">
          <FiMail className="text-primary-400" />
          {profile.email}
        </a>
      </motion.div>

      <motion.div
        {...fadeUp(0.6)}
        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a href="#contact" className="btn-primary">
          <FiMail />
          Get In Touch
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          <FiLinkedin />
          LinkedIn Profile
        </a>
      </motion.div>

      <motion.div {...fadeUp(0.75)} className="mt-16 flex justify-center">
        <button
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 text-slate-500 hover:text-primary-400 transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </button>
      </motion.div>
    </div>
  </section>
);

export default Hero;
