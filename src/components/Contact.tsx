import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FiMail, FiLinkedin, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { profile } from '../data/profile';

interface ContactLink {
  Icon: IconType;
  label: string;
  value: string;
  href: string | null;
  external?: boolean;
}

const contactLinks: ContactLink[] = [
  {
    Icon: FiMail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    Icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ariftoteles',
    href: profile.linkedin,
    external: true,
  },
  {
    Icon: FaWhatsapp,
    label: 'WhatsApp',
    value: profile.phone,
    href: `https://wa.me/${profile.phone.replace(/\D/g, '')}`,
    external: true,
  },
  {
    Icon: FiMapPin,
    label: 'Location',
    value: profile.location,
    href: null,
  },
];

const Contact: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="section-subheading">Get In Touch</p>
          <h2 className="section-heading">Contact Me</h2>
          <div className="w-16 h-1 bg-primary-600 rounded mx-auto mb-6" />
          <p className="text-slate-400 max-w-xl mx-auto">
            I'm open to new opportunities, collaborations, and interesting conversations.
            Whether you have a project in mind or just want to connect — feel free to reach out!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {contactLinks.map(({ Icon, label, value, href, external }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
            >
              {href ? (
                <a
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="card flex items-center gap-4 group hover:scale-[1.02] transition-transform"
                >
                  <div className="w-12 h-12 bg-primary-900/50 rounded-lg flex items-center justify-center text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-slate-400 text-xs font-mono uppercase tracking-widest">{label}</p>
                    <p className="text-white font-medium truncate">{value}</p>
                  </div>
                </a>
              ) : (
                <div className="card flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-900/50 rounded-lg flex items-center justify-center text-primary-400 flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-slate-400 text-xs font-mono uppercase tracking-widest">{label}</p>
                    <p className="text-white font-medium">{value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <a href={`mailto:${profile.email}`} className="btn-primary text-base px-8 py-4">
            <FiMail className="w-5 h-5" />
            Send Me an Email
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
