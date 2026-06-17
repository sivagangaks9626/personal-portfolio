import { motion } from 'framer-motion';
import { SITE_OWNER } from '../../utils/constants';

const SOCIAL = [
  {
    label: 'LinkedIn',
    href:  'https://linkedin.com/in/sivagangaks',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    accent: '#a78bfa',
  },
  {
    label: 'Instagram',
    href:  'https://instagram.com/sivagangaks',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
    accent: '#f472b6',
  },
  {
    label: 'Email',
    href:  'mailto:sivaganga@example.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    accent: '#64FFDA',
  },
];

const NAV_COLS = [
  {
    heading: 'Navigation',
    links: [
      { label: 'Home',       href: '#home' },
      { label: 'About',      href: '#about' },
      { label: 'Skills',     href: '#skills' },
      { label: 'Projects',   href: '#projects' },
    ],
  },
  {
    heading: 'More',
    links: [
      { label: 'Education',  href: '#education' },
      { label: 'Resume',     href: '#resume' },
      { label: 'Contact',    href: '#contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="relative border-t border-[var(--border-default)] overflow-hidden"
      style={{ background: 'var(--bg-deep)' }}
      role="contentinfo"
    >
      {/* Background orb */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #5B21B6 0%, transparent 70%)', filter: 'blur(40px)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-flex items-center gap-2.5 mb-4 group" aria-label="Back to top">
              <span className="w-9 h-9 rounded-xl bg-gradient-brand flex items-center justify-center font-extrabold text-sm text-navy-900 shadow-glow-cyan">
                {SITE_OWNER.initials}
              </span>
              <span className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>
                {SITE_OWNER.name}
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-xs mb-5" style={{ color: 'var(--text-secondary)' }}>
              B.Tech Robotics &amp; AI student passionate about building intelligent systems,
              autonomous robots, and elegant interfaces.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3" role="list" aria-label="Social links">
              {SOCIAL.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{
                    background: 'var(--bg-surface-md)',
                    border: '1px solid var(--border-default)',
                    color: 'var(--text-secondary)',
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                    color: s.accent,
                    borderColor: `${s.accent}50`,
                    boxShadow: `0 0 12px ${s.accent}30`,
                  }}
                  whileTap={{ scale: 0.94 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                  aria-label={s.label}
                  role="listitem"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {NAV_COLS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2.5" role="list">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200 hover:text-[var(--text-accent)]"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 border-t border-[var(--border-default)] flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            &copy; {new Date().getFullYear()}{' '}
            <span style={{ color: 'var(--text-accent)' }}>{SITE_OWNER.name}</span>.
            {' '}All rights reserved.
          </p>
          <p className="text-xs flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
            Built with
            <span style={{ color: '#64FFDA' }}>React</span>·
            <span style={{ color: '#a78bfa' }}>Vite</span>·
            <span style={{ color: '#22d3ee' }}>Tailwind</span>·
            <span style={{ color: '#f472b6' }}>Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
