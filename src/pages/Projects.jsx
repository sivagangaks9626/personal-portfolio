import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../design-system/animations';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

const PROJECTS = [
  {
    id:       'portfolio',
    number:   '01',
    title:    'Personal Portfolio Website',
    desc:
      'A modern, high-performance personal portfolio built to showcase my academic background, ' +
      'technical skills, and engineering projects. Features fully responsive UI design, smooth ' +
      'micro-interactions, and a sleek dark mode aesthetic.',
    tags:     ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    category: 'Web Development',
    accent:   '#64FFDA',
    liveUrl:  null,
    repoUrl:  null,
  },
  {
    id:       'ai-study-assistant',
    number:   '02',
    title:    'AI Student Memory Assistant',
    desc:
      'An AI-powered educational study tool designed to optimize learning. It processes uploaded ' +
      'notes, utilizes NLP algorithms to summarize key academic concepts, and generates targeted ' +
      'flashcards to improve long-term retention.',
    tags:     ['Python', 'NLP', 'Machine Learning', 'React'],
    category: 'Artificial Intelligence',
    accent:   '#5B21B6',
    liveUrl:  null,
    repoUrl:  null,
  },
  {
    id:       'iot-smart-system',
    number:   '03',
    title:    'IoT Smart Monitoring System',
    desc:
      'An integrated IoT-based smart system that monitors environmental data through a sensor ' +
      'network. Connects actuators and microcontrollers to a centralized cloud architecture, ' +
      'offering a real-time responsive dashboard interface.',
    tags:     ['IoT', 'MQTT', 'Python', 'Raspberry Pi', 'React'],
    category: 'IoT & Embedded Systems',
    accent:   '#22d3ee',
    liveUrl:  null,
    repoUrl:  null,
  },
];

// ── Project image placeholder ────────────────────────────────
function ProjectImage({ project }) {
  return (
    <div
      className="relative w-full h-48 rounded-xl overflow-hidden mb-5 flex items-center justify-center"
      style={{
        background: `linear-gradient(135deg, ${project.accent}15 0%, rgba(10,25,47,0.8) 100%)`,
        border: `1px solid ${project.accent}25`,
      }}
      aria-hidden="true"
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            `linear-gradient(${project.accent}40 1px, transparent 1px), linear-gradient(90deg, ${project.accent}40 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
      {/* Number + category */}
      <div className="relative text-center select-none">
        <p className="text-6xl font-extrabold font-mono opacity-20" style={{ color: project.accent }}>
          {project.number}
        </p>
        <p className="text-xs font-semibold tracking-widest uppercase mt-1" style={{ color: project.accent }}>
          {project.category}
        </p>
      </div>
      {/* Corner accent */}
      <div
        className="absolute top-3 right-3 w-2 h-2 rounded-full"
        style={{ background: project.accent, boxShadow: `0 0 8px ${project.accent}` }}
      />
    </div>
  );
}

// ── Project card ─────────────────────────────────────────────
function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="glass-md rounded-2xl overflow-hidden flex flex-col h-full border border-[var(--border-default)] transition-colors duration-300"
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{
        y: -8,
        borderColor: `${project.accent}45`,
        boxShadow: `0 20px 48px rgba(0,0,0,0.6), 0 0 24px ${project.accent}20`,
      }}
      aria-label={`Project: ${project.title}`}
    >
      {/* Top accent line */}
      <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }} aria-hidden="true" />

      <div className="p-6 flex flex-col flex-1">
        <ProjectImage project={project} />

        {/* Meta */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono font-bold" style={{ color: project.accent }}>
            {project.number}
          </span>
          <span
            className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
            style={{
              background: `${project.accent}15`,
              color: project.accent,
              border: `1px solid ${project.accent}25`,
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'var(--text-secondary)' }}>
          {project.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="subtle" size="sm" hoverable={false}>{tag}</Badge>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2 border-t border-[var(--border-default)] mt-auto">
          {project.repoUrl ? (
            <Button
              variant="ghost"
              size="sm"
              className="flex-1 justify-center gap-2"
              as="a"
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.title} on GitHub`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </Button>
          ) : (
            <button
              className="flex-1 flex items-center justify-center gap-2 text-xs font-medium px-3 py-2 rounded-xl opacity-40 cursor-not-allowed"
              style={{ color: 'var(--text-muted)', border: '1px solid var(--border-default)' }}
              disabled
              aria-label="GitHub repository not yet public"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </button>
          )}
          {project.liveUrl ? (
            <Button
              variant="outline"
              size="sm"
              className="flex-1 justify-center gap-2"
              as="a"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`View live demo of ${project.title}`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Live Demo
            </Button>
          ) : (
            <button
              className="flex-1 flex items-center justify-center gap-2 text-xs font-medium px-3 py-2 rounded-xl opacity-40 cursor-not-allowed"
              style={{ color: 'var(--text-muted)', border: '1px solid var(--border-default)' }}
              disabled
              aria-label="Live demo not yet available"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Live Demo
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section" aria-label="Projects">
      <div className="section-inner">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p variants={fadeUp(0)} className="section-label justify-center">03 — Projects</motion.p>
          <motion.h2 variants={fadeUp(0.08)} className="section-heading">Things I&apos;ve Built</motion.h2>
          <motion.p
            variants={fadeUp(0.14)}
            className="mt-4 max-w-xl mx-auto text-sm"
            style={{ color: 'var(--text-secondary)' }}
          >
            A selection of projects that reflect my interest in Robotics, AI, and software development —
            each one built to learn, explore, and create practical solutions.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
