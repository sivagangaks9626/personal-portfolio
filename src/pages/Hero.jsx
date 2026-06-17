import { motion } from 'framer-motion';
import { useTypewriter } from '../hooks/useTypewriter';
import { blurReveal, fadeUp, scaleIn, staggerContainer, fadeIn } from '../design-system/animations';
import Button from '../components/ui/Button';
import profileImg from '../assets/images/profile.jpeg';

const TYPING_WORDS = ['AI Enthusiast', 'Robotics Engineer', 'Software Developer'];

// ── Decorative animated background orbs ─────────────────────
function BackgroundOrbs() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Purple orb top-left */}
      <motion.div
        className="orb orb-purple w-96 h-96 -top-32 -left-32"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Cyan orb bottom-right */}
      <motion.div
        className="orb orb-cyan w-80 h-80 -bottom-24 -right-24"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      {/* Small purple orb center-right */}
      <motion.div
        className="orb orb-purple w-48 h-48 top-1/2 right-16"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(var(--border-default) 1px, transparent 1px), linear-gradient(90deg, var(--border-default) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  );
}

// ── Spinning conic avatar ring ────────────────────────────────
function AvatarRing() {
  return (
    <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto">
      {/* Spinning gradient ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ background: 'conic-gradient(from 0deg, #64FFDA, #5B21B6, #0A192F, #64FFDA)', padding: '3px' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-full h-full rounded-full" style={{ background: 'var(--bg-base)' }} />
      </motion.div>

      {/* Profile image */}
      <motion.div
        className="absolute inset-[6px] rounded-full overflow-hidden"
        style={{
          boxShadow: '0 0 32px 8px rgba(100,255,218,0.25), 0 8px 32px rgba(0,0,0,0.5)',
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <img
          src={profileImg}
          alt="Sivaganga K S — profile photo"
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
      </motion.div>

      {/* Pulse ring */}
      <motion.div
        className="absolute inset-[-8px] rounded-full border border-cyan-300/20"
        animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

// ── Scroll indicator ─────────────────────────────────────────
function ScrollIndicator() {
  return (
    <motion.a
      href="#about"
      className="flex flex-col items-center gap-2 group"
      aria-label="Scroll to About section"
      variants={fadeIn(1.2, 0.6)}
      initial="hidden"
      animate="visible"
    >
      <span className="text-xs font-mono tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
        scroll
      </span>
      <motion.div
        className="w-5 h-8 rounded-full border border-[var(--border-default)] flex items-start justify-center pt-1.5 group-hover:border-[var(--border-hover)] transition-colors"
        aria-hidden="true"
      >
        <motion.div
          className="w-1 h-1.5 rounded-full bg-[var(--color-accent)]"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.a>
  );
}

export default function Hero() {
  const { displayed, isErasing } = useTypewriter(TYPING_WORDS, 80, 45, 1800);

  return (
    <section
      id="home"
      className="relative full-screen flex flex-col items-center justify-center overflow-hidden bg-hero-mesh pt-16"
      aria-label="Hero — introduction"
    >
      <BackgroundOrbs />

      <div className="section-inner relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* ── Text column ──────────────────────────────── */}
          <motion.div
            className="flex-1 text-center lg:text-left max-w-2xl"
            variants={staggerContainer(0.13, 0.15)}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.p
              variants={blurReveal(0)}
              className="section-label mb-4 justify-center lg:justify-start"
            >
              Hi, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={blurReveal(0.1)}
              className="font-extrabold tracking-tighter mb-3"
              style={{ color: 'var(--text-primary)' }}
            >
              Sivaganga{' '}
              <span className="text-gradient">K S</span>
            </motion.h1>

            {/* Role */}
            <motion.p
              variants={fadeUp(0.2, 20)}
              className="text-lg sm:text-xl font-medium mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              B.Tech Robotics &amp; Artificial Intelligence Student
            </motion.p>

            {/* Typewriter */}
            <motion.div
              variants={fadeUp(0.3, 16)}
              className="flex items-center gap-2 justify-center lg:justify-start mb-6 h-8"
              aria-live="polite"
              aria-atomic="true"
            >
              <span className="text-base sm:text-lg font-mono" style={{ color: 'var(--text-muted)' }}>
                &gt;{' '}
              </span>
              <span
                className="text-base sm:text-lg font-mono font-semibold"
                style={{ color: 'var(--text-accent)' }}
              >
                {displayed}
              </span>
              <motion.span
                className="inline-block w-0.5 h-5 rounded-sm"
                style={{ background: 'var(--color-accent)' }}
                animate={{ opacity: isErasing ? [1, 0] : [1, 0, 1] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                aria-hidden="true"
              />
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={fadeUp(0.35, 16)}
              className="text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
              style={{ color: 'var(--text-secondary)' }}
            >
              Passionate about Robotics, Artificial Intelligence, and software development.
              I enjoy building practical solutions, learning new skills, and exploring
              emerging technologies — one project at a time.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={scaleIn(0.45)}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <Button variant="primary" size="lg" as="a" href="#projects">
                View Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                as="a"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                aria-label="Download resume (PDF)"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Resume
              </Button>
              <Button variant="ghost" size="lg" as="a" href="#contact">
                Contact Me
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeUp(0.55, 12)}
              className="flex flex-wrap gap-6 justify-center lg:justify-start mt-10"
            >
              {[
                { value: '3+', label: 'Projects Built' },
                { value: '2+', label: 'Years Learning' },
                { value: '100%', label: 'Passion' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-extrabold text-gradient-animate">{stat.value}</p>
                  <p className="text-xs font-medium mt-0.5" style={{ color: 'var(--text-muted)' }}>{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Avatar column ─────────────────────────────── */}
          <motion.div
            className="flex-shrink-0"
            variants={scaleIn(0.2)}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <AvatarRing />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ScrollIndicator />
      </div>
    </section>
  );
}
