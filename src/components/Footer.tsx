import React from 'react';
import { FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from '../data/profile';

const Footer: React.FC = () => (
  <footer className="bg-dark-800 border-t border-dark-700 py-8 px-6">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} <span className="text-primary-400">{profile.name}</span> 
      </p>
      <div className="flex items-center gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="text-slate-500 hover:text-primary-400 transition-colors"
          aria-label="Email"
        >
          <FiMail className="w-5 h-5" />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-primary-400 transition-colors"
          aria-label="LinkedIn"
        >
          <FiLinkedin className="w-5 h-5" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
