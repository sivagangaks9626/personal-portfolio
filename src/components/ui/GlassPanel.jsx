import { forwardRef } from 'react';
import { motion } from 'framer-motion';

/**
 * GlassPanel — Design System Primitive
 * ──────────────────────────────────────
 * A versatile glassmorphism surface used for:
 *   - Section backgrounds
 *   - Modal / drawer backdrops
 *   - Sidebars, navbars, tooltips
 *   - Feature highlight blocks
 *
 * Intensity: 1 (lightest) → 5 (heaviest blur / opacity)
 * Glow     : none | cyan | purple
 * Border   : true/false
 * Animated : optional Framer Motion entry
 */

// Intensity → backdrop-filter + background opacity
const INTENSITY = {
  1: { filter: 'blur(8px)  saturate(140%)', bg: 'rgba(255,255,255,0.03)' },
  2: { filter: 'blur(12px) saturate(160%)', bg: 'rgba(255,255,255,0.05)' },
  3: { filter: 'blur(16px) saturate(180%)', bg: 'rgba(255,255,255,0.08)' },
  4: { filter: 'blur(24px) saturate(200%)', bg: 'rgba(255,255,255,0.11)' },
  5: { filter: 'blur(40px) saturate(220%)', bg: 'rgba(255,255,255,0.14)' },
};

const GLOW = {
  none:   '',
  cyan:   'shadow-glow-cyan',
  purple: 'shadow-glow-purple',
};

const RADIUS = {
  none: 'rounded-none',
  sm:   'rounded-xl',
  md:   'rounded-2xl',
  lg:   'rounded-3xl',
  full: 'rounded-full',
};

const GlassPanel = forwardRef(function GlassPanel(
  {
    children,
    intensity  = 3,
    glow       = 'none',
    border     = true,
    radius     = 'md',
    padding    = 'p-6',
    className  = '',
    animate    = false,   // fade-up entry animation
    delay      = 0,       // stagger delay (seconds)
    ...props
  },
  ref
) {
  const { filter, bg } = INTENSITY[intensity] ?? INTENSITY[3];

  const inlineStyle = {
    background:           bg,
    backdropFilter:       filter,
    WebkitBackdropFilter: filter,
    ...(border ? { border: '1px solid var(--border-glass)' } : {}),
    boxShadow: [
      'inset 0 1px 0 rgba(255,255,255,0.08)',
      '0 10px 28px rgba(0,0,0,0.45)',
    ].join(', '),
  };

  const classes = [
    'relative overflow-hidden',
    RADIUS[radius],
    GLOW[glow],
    padding,
    className,
  ].filter(Boolean).join(' ');

  // Framer Motion entry variant
  const animateProps = animate
    ? {
        initial:    { opacity: 0, y: 24 },
        whileInView:{ opacity: 1, y: 0  },
        viewport:   { once: true, margin: '-60px' },
        transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
      }
    : {};

  return (
    <motion.div
      ref={ref}
      className={classes}
      style={inlineStyle}
      {...animateProps}
      {...props}
    >
      {/* Top-edge highlight (thin specular line) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
});

export default GlassPanel;
