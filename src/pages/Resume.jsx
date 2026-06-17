import { motion } from 'framer-motion';
import { fadeUp, fadeLeft, fadeRight, staggerContainer } from '../design-system/animations';
import Button from '../components/ui/Button';
import GlassPanel from '../components/ui/GlassPanel';

const RESUME_HIGHLIGHTS = [
  {
    icon:  '🎓',
    label: 'Education',
    value: 'B.Tech Robotics & AI',
  },
  {
    icon:  '⚡',
    label: 'Skills',
    value: 'Python • C Programming',
  },
  {
    icon:  '🚀',
    label: 'Projects',
    value: (
      <span className="flex flex-col gap-0.5">
        <span>AI Student Memory Assistant</span>
        <span>Portfolio Website</span>
        <span>IoT Monitoring System</span>
      </span>
    ),
  },
  {
    icon:  '🎯',
    label: 'Status',
    value: 'B.Tech Student (2024–2028)',
  },
];

// ── Resume section item ───────────────────────────────────────
function ResumeSection({ title, children }) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 mb-2" aria-hidden="true">
        <div className="h-px flex-1" style={{ background: 'var(--border-default)' }} />
        <p className="text-[10px] font-mono font-bold uppercase tracking-widest" style={{ color: 'var(--text-accent)' }}>
          {title}
        </p>
        <div className="h-px flex-1" style={{ background: 'var(--border-default)' }} />
      </div>
      {children}
    </div>
  );
}

function PreviewLine({ width = 'w-full', dimmer = false }) {
  return (
    <div
      className={`h-1.5 rounded-full ${width}`}
      style={{ background: dimmer ? 'var(--bg-surface-lg)' : 'var(--bg-surface-md)' }}
      aria-hidden="true"
    />
  );
}

export default function Resume() {
  return (
    <section
      id="resume"
      className="section"
      style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(91,33,182,0.04) 50%, transparent 100%)' }}
      aria-label="Resume"
    >
      <div className="section-inner">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p variants={fadeUp(0)} className="section-label justify-center">05 — Resume</motion.p>
          <motion.h2 variants={fadeUp(0.08)} className="section-heading">My Resume</motion.h2>
          <motion.p
            variants={fadeUp(0.14)}
            className="mt-4 max-w-xl mx-auto text-sm"
            style={{ color: 'var(--text-secondary)' }}
          >
            A snapshot of my academic background, technical skills, and project experience.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">

          {/* ── Preview card ──────────────────────────── */}
          <motion.div
            variants={fadeLeft(0, 40)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="relative">
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-2xl blur-xl opacity-20"
                style={{ background: 'linear-gradient(135deg, #64FFDA, #5B21B6)' }}
                aria-hidden="true"
              />

              <div className="relative glass-md rounded-2xl border border-[var(--border-default)] overflow-hidden">
                {/* Top accent bar */}
                <div className="h-1.5 w-full bg-gradient-brand" aria-hidden="true" />

                <div className="p-6">

                  {/* Name + title */}
                  <div className="flex items-center gap-4 mb-5 pb-4 border-b border-[var(--border-default)]">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center font-extrabold text-lg text-navy-900 shadow-glow-cyan flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #64FFDA, #5B21B6)' }}
                      aria-hidden="true"
                    >
                      SK
                    </div>
                    <div>
                      <p className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>Sivaganga K S</p>
                      <p className="text-xs" style={{ color: 'var(--text-accent)' }}>B.Tech Robotics &amp; Artificial Intelligence Student</p>
                    </div>
                  </div>

                  {/* Contact row */}
                  <ResumeSection title="Contact">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px]" style={{ color: 'var(--text-accent)' }}>✉</span>
                        <span className="text-[10px] font-mono" style={{ color: 'var(--text-secondary)' }}>sivagangaks9626@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px]" style={{ color: 'var(--text-accent)' }}>in</span>
                        <span className="text-[10px] font-mono" style={{ color: 'var(--text-secondary)' }}>linkedin.com/in/sivaganga-k-s</span>
                      </div>
                    </div>
                  </ResumeSection>

                  {/* Education */}
                  <ResumeSection title="Education">
                    <div className="flex flex-col gap-0.5">
                      <p className="text-[10px] font-semibold" style={{ color: 'var(--text-primary)' }}>B.Tech — Robotics &amp; Artificial Intelligence</p>
                      <p className="text-[10px]" style={{ color: 'var(--text-secondary)' }}>Rajiv Gandhi Institute of Technology, Kottayam</p>
                      <p className="text-[10px] font-mono font-semibold" style={{ color: 'var(--text-secondary)' }}>2024 – 2028</p>
                    </div>
                  </ResumeSection>

                  {/* Technical Skills */}
                  <ResumeSection title="Technical Skills">
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      {['Python', 'C Programming'].map((s) => (
                        <span key={s} className="text-[10px] font-mono" style={{ color: 'var(--text-secondary)' }}>
                          • {s}
                        </span>
                      ))}
                    </div>
                  </ResumeSection>

                  {/* Projects */}
                  <ResumeSection title="Projects">
                    <div className="flex flex-col gap-1.5">
                      {[
                        'AI Student Memory Assistant',
                        'Personal Portfolio Website',
                        'IoT Smart Monitoring System',
                      ].map((proj) => (
                        <div key={proj} className="flex items-start gap-1.5">
                          <span className="text-[10px] mt-px shrink-0" style={{ color: 'var(--text-accent)' }}>▹</span>
                          <span className="text-[10px]" style={{ color: 'var(--text-secondary)' }}>{proj}</span>
                        </div>
                      ))}
                    </div>
                  </ResumeSection>

                </div>

                {/* Watermark */}
                <div className="px-6 pb-4 text-center">
                  <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                    resume_sivaganga_ks.pdf
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: highlights + actions ───────────── */}
          <motion.div
            variants={fadeRight(0.1, 40)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                Ready to collaborate?
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                This resume highlights my academic background, technical skills, and projects as a
                Robotics and Artificial Intelligence student. Download a copy or view it online.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-3">
              {RESUME_HIGHLIGHTS.map((h) => (
                <GlassPanel key={h.label} intensity={2} padding="p-4">
                  <span className="text-xl" role="img" aria-label={h.label}>{h.icon}</span>
                  <p className="text-xs font-semibold mt-2 mb-0.5" style={{ color: 'var(--text-muted)' }}>{h.label}</p>
                  <p className="text-sm font-bold leading-snug" style={{ color: 'var(--text-primary)' }}>{h.value}</p>
                </GlassPanel>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="primary"
                size="lg"
                fullWidth
                as="a"
                href="/resume.pdf"
                download="resume_sivaganga_ks.pdf"
                aria-label="Download resume as PDF"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download PDF
              </Button>
              <Button
                variant="outline"
                size="lg"
                fullWidth
                as="a"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                aria-label="View resume in browser"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                View Online
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
