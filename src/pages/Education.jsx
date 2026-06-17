import { motion } from 'framer-motion';
import { fadeUp, fadeLeft, scaleIn, staggerContainer } from '../design-system/animations';
import GlassPanel from '../components/ui/GlassPanel';
import Badge from '../components/ui/Badge';

const EDUCATION_TIMELINE = [
  {
    level:       'B.Tech — Robotics & Artificial Intelligence',
    institution: 'Rajiv Gandhi Institute of Technology, Kottayam',
    period:      '2024 – 2028 (Currently Pursuing)',
    status:      'In Progress',
    statusColor: 'accent',
    icon:        '🎓',
    accent:      '#64FFDA',
    details:     [
      'Core subjects: Artificial Intelligence, Machine Learning, Robotics, Control Systems, and Programming',
      'Actively building projects in web development, robotics, and artificial intelligence',
    ],
  },
  {
    level:       'Higher Secondary Education (Class XII)',
    institution: 'Al Ameen Public School, Sreemoolanagaram',
    period:      '2023 – 2024',
    status:      'Completed',
    statusColor: 'brand',
    icon:        '📚',
    accent:      '#a78bfa',
    details:     [
      'Stream: Science (Physics, Chemistry, Mathematics, Biology)',
      'Developed analytical thinking, problem-solving skills, and a strong academic foundation.',
    ],
  },
  {
    level:       'SSLC (Class X)',
    institution: 'Al Ameen Public School, Sreemoolanagaram',
    period:      '2021 – 2022',
    status:      'Completed',
    statusColor: 'subtle',
    icon:        '🏫',
    accent:      '#22d3ee',
    details:     [
      'Completed secondary education at Al Ameen Public School, Sreemoolanagaram.',
      'Built interest in science, technology, and mathematics.',
    ],
  },
];

const INTERESTS = [
  {
    title:  'Robotics',
    icon:   '🦾',
    desc:   'Interested in intelligent machines, automation, and robotic systems.',
    accent: '#64FFDA',
  },
  {
    title:  'Artificial Intelligence',
    icon:   '🤖',
    desc:   'Exploring machine learning, intelligent systems, and AI applications.',
    accent: '#a78bfa',
  },
  {
    title:  'Web Development',
    icon:   '🌐',
    desc:   'Learning modern web technologies and building responsive websites.',
    accent: '#22d3ee',
  },
  {
    title:  'Programming',
    icon:   '💻',
    desc:   'Improving problem-solving and programming skills through coursework and projects.',
    accent: '#5B21B6',
  },
];

// ── Education timeline item ──────────────────────────────────
function EduItem({ item, index }) {
  return (
    <motion.div
      variants={fadeLeft(0, 32)}
      className="flex gap-5 items-start"
    >
      {/* Icon dot */}
      <div className="flex-shrink-0 hidden sm:flex flex-col items-center">
        <motion.div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl z-10"
          style={{
            background: `${item.accent}15`,
            border: `2px solid ${item.accent}40`,
            boxShadow: `0 0 16px ${item.accent}25`,
          }}
          initial={{ scale: 0, rotate: -20 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.1, type: 'spring', stiffness: 260, damping: 18 }}
          role="img"
          aria-label={item.level}
        >
          {item.icon}
        </motion.div>
        {index < EDUCATION_TIMELINE.length - 1 && (
          <div className="w-px flex-1 mt-2" style={{ background: `linear-gradient(180deg, ${item.accent}50, transparent)`, minHeight: '2rem' }} aria-hidden="true" />
        )}
      </div>

      {/* Card */}
      <GlassPanel intensity={3} className="flex-1 mb-4">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>{item.level}</h3>
            <p className="text-sm mt-0.5" style={{ color: item.accent }}>{item.institution}</p>
          </div>
          <div className="flex flex-col items-end gap-2 shrink-0">
            <Badge variant={item.statusColor} size="sm" pulse={item.status === 'In Progress'}>
              {item.status}
            </Badge>
            <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{item.period}</span>
          </div>
        </div>
        <ul className="flex flex-col gap-1.5" role="list">
          {item.details.map((d, i) => (
            <li key={i} className="flex gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
              <span className="mt-0.5 shrink-0" style={{ color: item.accent }} aria-hidden="true">▹</span>
              {d}
            </li>
          ))}
        </ul>
      </GlassPanel>
    </motion.div>
  );
}

// ── Area of interest card ────────────────────────────────────
function InterestCard({ item, index }) {
  return (
    <motion.div
      variants={scaleIn(index * 0.07)}
      className="glass-md rounded-2xl p-5 border border-[var(--border-default)] transition-all duration-300 group"
      whileHover={{
        y: -5,
        borderColor: `${item.accent}40`,
        boxShadow: `0 12px 32px rgba(0,0,0,0.5), 0 0 16px ${item.accent}18`,
      }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
    >
      {/* Top stripe */}
      <div className="h-0.5 w-full rounded-full mb-4" style={{ background: `linear-gradient(90deg, ${item.accent}, transparent)` }} aria-hidden="true" />

      <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-200" role="img" aria-label={item.title}>
        {item.icon}
      </div>

      <h4 className="font-semibold text-sm mb-2 leading-snug" style={{ color: 'var(--text-primary)' }}>
        {item.title}
      </h4>
      <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {item.desc}
      </p>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section
      id="education"
      className="section"
      style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(100,255,218,0.02) 50%, transparent 100%)' }}
      aria-label="Education and Areas of Interest"
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
          <motion.p variants={fadeUp(0)} className="section-label justify-center">04 — Education</motion.p>
          <motion.h2 variants={fadeUp(0.08)} className="section-heading">Academic Journey</motion.h2>
          <motion.p
            variants={fadeUp(0.14)}
            className="mt-4 max-w-xl mx-auto text-sm"
            style={{ color: 'var(--text-secondary)' }}
          >
            Building knowledge from the ground up — from secondary school to specialised engineering in Robotics and AI.
          </motion.p>
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-3xl mx-auto mb-20">
          <motion.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {EDUCATION_TIMELINE.map((item, i) => (
              <EduItem key={item.level} item={item} index={i} />
            ))}
          </motion.div>
        </div>

        {/* Areas of Interest */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.div variants={fadeUp(0)} className="flex items-center gap-3 mb-8 justify-center">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'var(--color-brand-dim)', border: '1px solid rgba(91,33,182,0.3)' }}
              aria-hidden="true"
            >
              <span style={{ color: '#a78bfa' }}>✦</span>
            </div>
            <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Areas of Interest</h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INTERESTS.map((item, i) => (
              <InterestCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
