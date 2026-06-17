import { motion } from 'framer-motion';

/**
 * Badge — Design System Primitive
 * ─────────────────────────────────
 * Variants : accent | brand | subtle | outline | success | warning | error
 * Sizes    : sm | md | lg
 * Features :
 *   - Optional dot indicator
 *   - Optional glow on hover
 *   - Optional pulse animation (for "live" indicators)
 *   - Icon support
 */

const VARIANTS = {
  accent: {
    base:  'bg-[var(--color-accent-dim)] text-[var(--text-accent)] border-[rgba(100,255,218,0.25)]',
    hover: 'hover:border-[rgba(100,255,218,0.5)] hover:shadow-glow-cyan',
  },
  brand: {
    base:  'bg-[var(--color-brand-dim)] text-purple-300 border-[rgba(91,33,182,0.3)]',
    hover: 'hover:border-[rgba(91,33,182,0.5)] hover:shadow-glow-purple',
  },
  subtle: {
    base:  'bg-[var(--bg-surface-md)] text-[var(--text-secondary)] border-[var(--border-default)]',
    hover: 'hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]',
  },
  outline: {
    base:  'bg-transparent text-[var(--text-secondary)] border-[var(--border-default)]',
    hover: 'hover:border-[var(--border-hover)] hover:text-[var(--text-accent)]',
  },
  success: {
    base:  'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    hover: 'hover:border-emerald-500/60',
  },
  warning: {
    base:  'bg-amber-500/15 text-amber-400 border-amber-500/30',
    hover: 'hover:border-amber-500/60',
  },
  error: {
    base:  'bg-red-500/15 text-red-400 border-red-500/30',
    hover: 'hover:border-red-500/60',
  },
};

const SIZES = {
  sm: 'px-2    py-0.5 text-[10px] gap-1   rounded-full',
  md: 'px-3    py-1   text-xs     gap-1.5 rounded-full',
  lg: 'px-4    py-1.5 text-sm     gap-2   rounded-full',
};

// Pulsing dot for "live" / active indicators
function PulseDot({ color = 'bg-cyan-300' }) {
  return (
    <span className="relative flex h-2 w-2 shrink-0">
      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${color} opacity-60`} />
      <span className={`relative inline-flex h-2 w-2 rounded-full ${color}`} />
    </span>
  );
}

export default function Badge({
  children,
  variant   = 'accent',
  size      = 'md',
  dot       = false,
  pulse     = false,
  icon,
  hoverable = true,
  className = '',
  ...props
}) {
  const cfg = VARIANTS[variant] ?? VARIANTS.accent;

  const classes = [
    'inline-flex items-center font-semibold border',
    'transition-all duration-200 select-none',
    SIZES[size],
    cfg.base,
    hoverable ? cfg.hover : '',
    className,
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {pulse && <PulseDot />}
      {!pulse && dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0 opacity-70" />
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </>
  );

  if (hoverable) {
    return (
      <motion.span
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className={classes}
        {...props}
      >
        {content}
      </motion.span>
    );
  }

  return (
    <span className={classes} {...props}>
      {content}
    </span>
  );
}
