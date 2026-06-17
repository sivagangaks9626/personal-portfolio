import { motion } from 'framer-motion';
import { fadeUp, scaleIn, staggerContainer } from '../design-system/animations';
import Card from '../components/ui/Card';

// ── Level metadata ────────────────────────────────────────────
const LEVEL_CONFIG = {
  Beginner:     { color: '#22d3ee',  bg: 'rgba(34,211,238,0.1)',  border: 'rgba(34,211,238,0.25)'  },
  Learning:     { color: '#a78bfa',  bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.25)' },
  Intermediate: { color: '#64FFDA',  bg: 'rgba(100,255,218,0.1)', border: 'rgba(100,255,218,0.25)' },
};

const TECHNICAL_SKILLS = [
  { name: 'HTML',          label: 'Beginner',     icon: '🌐' },
  { name: 'CSS',           label: 'Beginner',     icon: '🎨' },
  { name: 'JavaScript',    label: 'Learning',     icon: '⚡' },
  { name: 'Python',        label: 'Intermediate', icon: '🐍' },
  { name: 'C Programming', label: 'Intermediate', icon: '⚙️' },
];

const CORE_SKILLS = [
  {
    name:  'Artificial Intelligence',
    label: 'Learning',
    icon:  '🤖',
    desc:  'ML concepts, neural networks, and building intelligent, data-driven applications.',
  },
  {
    name:  'Robotics & Automation',
    label: 'Learning',
    icon:  '🦾',
    desc:  'Intelligent machines, autonomous systems, and the integration of hardware with software.',
  },
  {
    name:  'Problem Solving',
    label: 'Intermediate',
    icon:  '🧩',
    desc:  'Analytical thinking, algorithm design, and breaking down complex challenges.',
  },
  {
    name:  'Teamwork',
    label: 'Intermediate',
    icon:  '🤝',
    desc:  'Collaborating effectively in academic projects and technical team environments.',
  },
  {
    name:  'Communication',
    label: 'Intermediate',
    icon:  '💬',
    desc:  'Explaining technical concepts clearly through writing and presentations.',
  },
];

// ── Reusable level badge ─────────────────────────────────────
function LevelBadge({ label }) {
  const cfg = LEVEL_CONFIG[label] ?? LEVEL_CONFIG.Beginner;
  return (
    <motion.span
      className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
      style={{
        background: cfg.bg,
        border: `1px solid ${cfg.border}`,
        color: cfg.color,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {/* Dot indicator */}
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ background: cfg.color }}
        aria-hidden="true"
      />
      {label}
    </motion.span>
  );
}

// ── Skill card (programming languages) ───────────────────────
function SkillCard({ name, label, icon, index }) {
  return (
    <motion.div
      variants={scaleIn(index * 0.06)}
      className="group"
    >
      <Card variant="glass-md" hover accentTop={false} padding="p-4" className="h-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg" role="img" aria-label={name}>{icon}</span>
            <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{name}</span>
          </div>
          <LevelBadge label={label} />
        </div>
      </Card>
    </motion.div>
  );
}

// ── Core skill card ──────────────────────────────────────────
function CoreSkillCard({ skill, index }) {
  return (
    <motion.div variants={scaleIn(index * 0.07)}>
      <motion.div
        className="glass-md rounded-2xl p-5 h-full border border-[var(--border-default)] transition-all duration-300 group"
        whileHover={{
          y: -5,
          borderColor: 'rgba(100,255,218,0.3)',
          boxShadow: '0 0 20px rgba(100,255,218,0.12), 0 16px 40px rgba(0,0,0,0.5)',
        }}
        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      >
        <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200" role="img" aria-label={skill.name}>
          {skill.icon}
        </div>
        <h4 className="font-semibold text-sm mb-2" style={{ color: 'var(--text-primary)' }}>
          {skill.name}
        </h4>
        <div className="mb-2.5">
          <LevelBadge label={skill.label} />
        </div>
        <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {skill.desc}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="section"
      style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(91,33,182,0.04) 50%, transparent 100%)' }}
      aria-label="Skills"
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
          <motion.p variants={fadeUp(0)} className="section-label justify-center">02 — Skills</motion.p>
          <motion.h2 variants={fadeUp(0.08)} className="section-heading">Skills in Progress</motion.h2>
          <motion.p
            variants={fadeUp(0.14)}
            className="mt-4 max-w-xl mx-auto text-sm"
            style={{ color: 'var(--text-secondary)' }}
          >
            These are the technologies and competencies I am currently learning and strengthening
            through coursework, projects, and continuous practice.
          </motion.p>
        </motion.div>

        {/* Programming Languages */}
        <motion.div
          className="mb-16"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.div variants={fadeUp(0)} className="flex items-center gap-3 mb-8">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
              style={{ background: 'var(--color-accent-dim)', border: '1px solid rgba(100,255,218,0.25)', color: 'var(--color-accent)' }}
              aria-hidden="true"
            >
              &lt;/&gt;
            </div>
            <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>Programming Languages</h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TECHNICAL_SKILLS.map((s, i) => (
              <SkillCard key={s.name} {...s} index={i} />
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="divider mb-16" aria-hidden="true" />

        {/* Core Competencies */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.div variants={fadeUp(0)} className="flex items-center gap-3 mb-8">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
              style={{ background: 'var(--color-brand-dim)', border: '1px solid rgba(91,33,182,0.3)', color: '#a78bfa' }}
              aria-hidden="true"
            >
              ★
            </div>
            <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>Core Competencies</h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {CORE_SKILLS.map((s, i) => (
              <CoreSkillCard key={s.name} skill={s} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
