import { forwardRef } from 'react';
import { motion } from 'framer-motion';

/**
 * Card — Design System Primitive
 * ────────────────────────────────
 * Variants : glass | glass-md | glass-lg | solid | purple | cyan
 * Features :
 *   - Glassmorphism surface with backdrop-filter
 *   - Hover: lift (y) + border brightens + inner glow
 *   - Optional glowing accent border (top edge)
 *   - Optional gradient overlay
 *   - Fully accessible via keyboard / focus-visible
 */

const VARIANTS = {
  glass: {
    base:  'glass rounded-2xl',
    hover: { y: -6, boxShadow: '0 20px 48px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.12)' },
  },
  'glass-md': {
    base:  'glass-md rounded-2xl',
    hover: { y: -6, boxShadow: '0 20px 48px rgba(0,0,0,0.6), 0 0 20px rgba(100,255,218,0.1), inset 0 1px 0 rgba(255,255,255,0.12)' },
  },
  'glass-lg': {
    base:  'glass-lg rounded-2xl',
    hover: { y: -6, boxShadow: '0 30px 64px rgba(0,0,0,0.65), 0 0 30px rgba(100,255,218,0.12), inset 0 1px 0 rgba(255,255,255,0.15)' },
  },
  solid: {
    base:  'bg-navy-800 border border-[var(--border-default)] rounded-2xl',
    hover: { y: -4, boxShadow: '0 16px 40px rgba(0,0,0,0.55)' },
  },
  purple: {
    base:  'glass-purple rounded-2xl',
    hover: { y: -6, boxShadow: '0 0 40px rgba(91,33,182,0.6), 0 0 80px rgba(91,33,182,0.3)' },
  },
  cyan: {
    base:  'glass-cyan rounded-2xl',
    hover: { y: -6, boxShadow: '0 0 40px rgba(100,255,218,0.4), 0 0 80px rgba(100,255,218,0.15)' },
  },
};

const Card = forwardRef(function Card(
  {
    children,
    variant    = 'glass-md',
    hover      = true,
    accentTop  = false,   // glowing top-border accent line
    gradient   = false,   // subtle inner gradient overlay
    padding    = 'p-6',
    className  = '',
    onClick,
    ...props
  },
  ref
) {
  const config     = VARIANTS[variant] ?? VARIANTS['glass-md'];
  const isClickable = !!onClick;

  const base = [
    'relative overflow-hidden',
    config.base,
    padding,
    isClickable ? 'cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:outline-none' : '',
    className,
  ].filter(Boolean).join(' ');

  const motionProps = hover
    ? {
        whileHover: config.hover,
        transition: { type: 'spring', stiffness: 280, damping: 22 },
      }
    : {};

  return (
    <motion.div
      ref={ref}
      className={base}
      onClick={onClick}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={
        isClickable
          ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick?.(e); }
          : undefined
      }
      {...motionProps}
      {...props}
    >
      {/* Glowing top accent line */}
      {accentTop && (
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl"
          style={{ background: 'var(--gradient-brand)' }}
        />
      )}

      {/* Subtle inner gradient overlay */}
      {gradient && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)' }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
});

export default Card;
