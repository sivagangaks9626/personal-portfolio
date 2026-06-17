/**
 * ============================================================
 *  ANIMATION VARIANTS LIBRARY — Framer Motion
 *  Sivaganga K S Portfolio
 * ============================================================
 *
 *  Usage:
 *    import { fadeUp, staggerContainer } from '@/design-system/animations';
 *    <motion.div variants={staggerContainer} initial="hidden" animate="visible">
 *      <motion.p variants={fadeUp()} />
 *    </motion.div>
 *
 *  Naming convention:
 *    - Plain objects  → static variants (no config needed)
 *    - Functions      → factory variants (accept delay/duration overrides)
 * ============================================================
 */

// ─────────────────────────────────────────────────────────────
// 1. SPRING PRESETS
// ─────────────────────────────────────────────────────────────
export const springs = {
  /** Gentle settle — section headings, panels */
  gentle:  { type: 'spring', stiffness: 120, damping: 20, mass: 1 },
  /** Bouncy — badges, chips, small elements */
  bouncy:  { type: 'spring', stiffness: 300, damping: 18, mass: 0.8 },
  /** Snappy — buttons, micro-interactions */
  snappy:  { type: 'spring', stiffness: 500, damping: 30, mass: 0.6 },
  /** Wobbly — playful entrance, skill tags */
  wobbly:  { type: 'spring', stiffness: 180, damping: 12, mass: 1 },
  /** Smooth — page transitions, overlays */
  smooth:  { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  /** Ease out — standard reveal */
  easeOut: { duration: 0.5, ease: [0, 0, 0.2, 1] },
};

// ─────────────────────────────────────────────────────────────
// 2. CONTAINER / STAGGER VARIANTS
// ─────────────────────────────────────────────────────────────

/** Stagger children on enter — wraps lists, grids */
export const staggerContainer = (stagger = 0.12, delayChildren = 0) => ({
  hidden:  {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

/** Stagger with fade-in on the container itself */
export const staggerFade = (stagger = 0.12, delayChildren = 0) => ({
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: stagger, delayChildren, duration: 0.3 },
  },
});

// ─────────────────────────────────────────────────────────────
// 3. ENTRANCE VARIANTS (factory functions)
// ─────────────────────────────────────────────────────────────

/** Fade + slide up — most common reveal */
export const fadeUp = (delay = 0, distance = 28) => ({
  hidden:  { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...springs.smooth, delay },
  },
});

/** Fade + slide down */
export const fadeDown = (delay = 0, distance = 28) => ({
  hidden:  { opacity: 0, y: -distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...springs.smooth, delay },
  },
});

/** Fade + slide from left */
export const fadeLeft = (delay = 0, distance = 40) => ({
  hidden:  { opacity: 0, x: -distance },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ...springs.smooth, delay },
  },
});

/** Fade + slide from right */
export const fadeRight = (delay = 0, distance = 40) => ({
  hidden:  { opacity: 0, x: distance },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ...springs.smooth, delay },
  },
});

/** Scale in from centre */
export const scaleIn = (delay = 0) => ({
  hidden:  { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ...springs.bouncy, delay },
  },
});

/** Scale in from below (perspective pop) */
export const scalePop = (delay = 0) => ({
  hidden:  { opacity: 0, scale: 0.7, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { ...springs.wobbly, delay },
  },
});

/** Pure fade — no transform */
export const fadeIn = (delay = 0, duration = 0.5) => ({
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration, delay, ease: [0, 0, 0.2, 1] },
  },
});

/** Blur reveal — premium feel for hero text */
export const blurReveal = (delay = 0) => ({
  hidden:  { opacity: 0, filter: 'blur(12px)', y: 16 },
  visible: {
    opacity: 1,
    filter:  'blur(0px)',
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  },
});

/** Clip reveal from bottom — for skill bars, lines */
export const clipReveal = (delay = 0) => ({
  hidden:  { clipPath: 'inset(0 0 100% 0)', opacity: 0 },
  visible: {
    clipPath: 'inset(0 0 0% 0)',
    opacity:  1,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  },
});

/** Rotate + fade in — for icons, decorative elements */
export const spinIn = (delay = 0) => ({
  hidden:  { opacity: 0, rotate: -15, scale: 0.8 },
  visible: {
    opacity: 1,
    rotate:  0,
    scale:   1,
    transition: { ...springs.bouncy, delay },
  },
});

// ─────────────────────────────────────────────────────────────
// 4. HOVER / TAP INTERACTION PRESETS
// ─────────────────────────────────────────────────────────────

/** Standard card hover — lift */
export const cardHover = {
  rest:  { y: 0,  boxShadow: '0 10px 28px rgba(0,0,0,0.5)' },
  hover: { y: -6, boxShadow: '0 20px 48px rgba(0,0,0,0.6), 0 0 20px rgba(100,255,218,0.1)' },
};

/** Button micro-interaction */
export const buttonHover = {
  rest:  { scale: 1,    y: 0 },
  hover: { scale: 1.03, y: -1 },
  tap:   { scale: 0.96, y: 0  },
};

/** Icon bounce on hover */
export const iconBounce = {
  rest:  { y: 0 },
  hover: { y: -4, transition: springs.bouncy },
};

/** Glow pulse on hover */
export const glowHover = (color = 'cyan') => ({
  rest:  { filter: 'drop-shadow(0 0 0px transparent)' },
  hover: {
    filter: color === 'cyan'
      ? 'drop-shadow(0 0 8px rgba(100,255,218,0.6))'
      : 'drop-shadow(0 0 8px rgba(91,33,182,0.7))',
    transition: { duration: 0.3 },
  },
});

/** Social icon lift + rotate */
export const socialHover = {
  rest:  { y: 0, rotate: 0 },
  hover: { y: -3, rotate: -8, transition: springs.snappy },
  tap:   { scale: 0.9 },
};

// ─────────────────────────────────────────────────────────────
// 5. PAGE / ROUTE TRANSITIONS
// ─────────────────────────────────────────────────────────────

export const pageTransition = {
  initial:  { opacity: 0, y: 16 },
  animate:  { opacity: 1, y: 0,  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit:     { opacity: 0, y: -16, transition: { duration: 0.3, ease: [0.4, 0, 1, 1] } },
};

export const pageFade = {
  initial:  { opacity: 0 },
  animate:  { opacity: 1, transition: { duration: 0.4 } },
  exit:     { opacity: 0, transition: { duration: 0.25 } },
};

// ─────────────────────────────────────────────────────────────
// 6. SECTION-SPECIFIC PRESETS (ready-to-use)
// ─────────────────────────────────────────────────────────────

/** Hero section — staggered children with blur reveal */
export const heroVariants = {
  container: staggerContainer(0.15, 0.2),
  eyebrow:   blurReveal(0),
  heading:   blurReveal(0.1),
  subheading:fadeUp(0.25, 20),
  cta:       scaleIn(0.4),
  scroll:    fadeIn(0.8, 0.6),
};

/** About section */
export const aboutVariants = {
  container: staggerContainer(0.1, 0.1),
  image:     fadeLeft(0),
  content:   fadeRight(0.1),
  skill:     (i) => scalePop(0.05 * i),
};

/** Project cards — staggered grid */
export const projectVariants = {
  container: staggerContainer(0.1, 0.05),
  card:      {
    hidden:  { opacity: 0, y: 32, scale: 0.96 },
    visible: { opacity: 1, y: 0,  scale: 1, transition: springs.smooth },
  },
};

/** Timeline / experience items */
export const timelineVariants = {
  container: staggerContainer(0.15),
  item:      fadeLeft(0, 32),
  dot:       scaleIn(0),
  line:      clipReveal(0),
};

/** Contact section */
export const contactVariants = {
  container: staggerContainer(0.12),
  heading:   fadeUp(0),
  form:      fadeUp(0.15),
  info:      fadeLeft(0.1),
};

// ─────────────────────────────────────────────────────────────
// 7. UTILITY HELPERS
// ─────────────────────────────────────────────────────────────

/**
 * Viewport config for whileInView — prevents re-triggering
 */
export const viewport = (margin = '-80px') => ({
  once:   true,
  margin,
});

/**
 * Build a sequential delay array for manual staggering
 * e.g. delays(5, 0.1) → [0, 0.1, 0.2, 0.3, 0.4]
 */
export const delays = (count, step = 0.1, start = 0) =>
  Array.from({ length: count }, (_, i) => start + i * step);

/**
 * Wrap a variant with a whileInView trigger
 * e.g. inView(fadeUp(0)) on a motion.div
 */
export const inView = (variant, margin = '-80px') => ({
  initial:     'hidden',
  whileInView: 'visible',
  viewport:    { once: true, margin },
  variants:    variant,
});
