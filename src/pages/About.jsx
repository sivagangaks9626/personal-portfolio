import { motion } from 'framer-motion';
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer } from '../design-system/animations';
import Card from '../components/ui/Card';
import GlassPanel from '../components/ui/GlassPanel';

const HIGHLIGHTS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/>
      </svg>
    ),
    title: 'AI & Machine Learning',
    desc:  'Building intelligent systems using ML concepts, neural networks, and real-world AI applications.',
    color: 'var(--color-accent)',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Robotics',
    desc:  'Exploring autonomous systems, intelligent machines, and the intersection of hardware and software.',
    color: 'var(--color-brand)',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Software Development',
    desc:  'Creating clean, practical web applications and tools using HTML, CSS, JavaScript, and Python.',
    color: '#a78bfa',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Lifelong Learner',
    desc:  'Continuously exploring emerging technologies — from online courses to hands-on experiments.',
    color: '#22d3ee',
  },
];

const TIMELINE = [
  {
    year:  '2021–22',
    title: 'Completed SSLC',
    desc:  'Completed Class X at Al Ameen Public School, Sreemoolanagaram.',
    accent: 'var(--color-accent)',
  },
  {
    year:  '2023–24',
    title: 'Completed Higher Secondary',
    desc:  'Completed Class XII at Al Ameen Public School, Sreemoolanagaram.',
    accent: '#a78bfa',
  },
  {
    year:  '2024–28',
    title: 'Started B.Tech in Robotics and AI',
    desc:  'Joined Rajiv Gandhi Institute of Technology, Kottayam for B.Tech in Robotics and Artificial Intelligence.',
    accent: 'var(--color-brand)',
  },
  {
    year:  'Now',
    title: 'Building Skills & Projects',
    desc:  'Learning web development, programming, robotics, and AI concepts while building practical projects and improving my technical skills.',
    accent: '#22d3ee',
  },
];

export default function About() {
  return (
    <section id="about" className="section" aria-label="About Me">
      <div className="section-inner">

        {/* ── Header ──────────────────────────────────── */}
        <motion.div
          className="text-center mb-16"
          {...{ initial: 'hidden', whileInView: 'visible', viewport: { once: true, margin: '-80px' } }}
          variants={staggerContainer(0.12)}
        >
          <motion.p variants={fadeUp(0)} className="section-label justify-center">
            01 — About
          </motion.p>
          <motion.h2 variants={fadeUp(0.08)} className="section-heading">
            Who I Am
          </motion.h2>
          <motion.p
            variants={fadeUp(0.16)}
            className="mt-4 max-w-2xl mx-auto text-base leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            A B.Tech Robotics &amp; AI student who enjoys building practical solutions and
            exploring technologies that bridge the physical and digital worlds.
          </motion.p>
        </motion.div>

        {/* ── Summary + Objective ─────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            variants={fadeLeft(0, 40)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <GlassPanel intensity={3} animate delay={0} className="h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center text-navy-900 font-bold text-sm">S</span>
                <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>About Me</h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                I am <strong style={{ color: 'var(--text-primary)' }}>Sivaganga K S</strong>, a B.Tech
                Robotics and Artificial Intelligence student passionate about intelligent systems,
                software development, and emerging technologies. I enjoy building practical solutions
                that make a real difference.
              </p>
              <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--text-secondary)' }}>
                My approach is hands-on: I learn by building, continuously pick up new skills, and
                stay curious about
                <em style={{ color: 'var(--text-accent)' }}> what intelligent technology can do next.</em>
              </p>
            </GlassPanel>
          </motion.div>

          <motion.div
            variants={fadeRight(0, 40)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <GlassPanel intensity={3} animate delay={0.1} className="h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--color-brand-dim)', border: '1px solid rgba(91,33,182,0.3)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                </span>
                <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>Career Objective</h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                To develop
                <strong style={{ color: 'var(--text-accent)' }}> intelligent and impactful technology solutions</strong> while
                continuously improving my technical and
                <strong style={{ color: '#a78bfa' }}> problem-solving skills</strong> — contributing
                to meaningful projects at the intersection of
                <strong style={{ color: '#22d3ee' }}> Robotics, AI, and software engineering</strong>.
              </p>
              <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--text-secondary)' }}>
                I am actively seeking internships, collaborations, and opportunities where I can
                apply my skills, learn from experienced teams, and grow every day.
              </p>
            </GlassPanel>
          </motion.div>
        </div>

        {/* ── Highlights ──────────────────────────────── */}
        <motion.div
          className="mb-16"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.h3
            variants={fadeUp(0)}
            className="text-xl font-bold text-center mb-8"
            style={{ color: 'var(--text-primary)' }}
          >
            What Drives Me
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HIGHLIGHTS.map((h, i) => (
              <motion.div key={h.title} variants={scaleIn(i * 0.07)}>
                <Card variant="glass-md" accentTop hover className="h-full text-center">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: `${h.color}18`, border: `1px solid ${h.color}30`, color: h.color }}
                  >
                    {h.icon}
                  </div>
                  <h4 className="font-semibold text-sm mb-2" style={{ color: 'var(--text-primary)' }}>{h.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{h.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Learning Timeline ────────────────────────── */}
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.h3
            variants={fadeUp(0)}
            className="text-xl font-bold text-center mb-10"
            style={{ color: 'var(--text-primary)' }}
          >
            My Learning Journey
          </motion.h3>

          <div className="relative max-w-2xl mx-auto">
            {/* Vertical line */}
            <div
              className="absolute left-[22px] top-0 bottom-0 w-px hidden sm:block"
              style={{ background: 'linear-gradient(180deg, var(--color-accent) 0%, var(--color-brand) 60%, transparent 100%)' }}
              aria-hidden="true"
            />

            <div className="flex flex-col gap-8">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year}
                  variants={fadeLeft(0, 32)}
                  className="flex gap-5 items-start"
                >
                  {/* Dot */}
                  <div className="relative flex-shrink-0 hidden sm:flex items-center justify-center">
                    <motion.div
                      className="w-11 h-11 rounded-full flex items-center justify-center font-mono text-xs font-bold z-10"
                      style={{
                        background: `${item.accent}18`,
                        border: `2px solid ${item.accent}`,
                        color: item.accent,
                        boxShadow: `0 0 12px ${item.accent}40`,
                      }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, type: 'spring', stiffness: 300, damping: 18 }}
                    >
                      {item.year}
                    </motion.div>
                  </div>

                  {/* Card */}
                  <GlassPanel intensity={2} className="flex-1">
                    <div className="flex items-center gap-2 mb-1 sm:hidden">
                      <span className="text-xs font-mono font-bold" style={{ color: item.accent }}>{item.year}</span>
                    </div>
                    <h4 className="font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>{item.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                  </GlassPanel>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
