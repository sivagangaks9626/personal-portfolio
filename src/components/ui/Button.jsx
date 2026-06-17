import { forwardRef } from 'react';
import { motion } from 'framer-motion';

/**
 * Button — Design System Primitive
 * ─────────────────────────────────
 * Variants : primary | secondary | outline | ghost | glass | danger
 * Sizes    : sm | md | lg | xl
 * States   : default | loading | disabled
 * Features : micro-interactions, glow on hover, icon support
 */

// ─── Variant styles ──────────────────────────────────────────
const VARIANTS = {
  primary: [
    'bg-gradient-brand text-navy-900 font-semibold',
    'shadow-glow-cyan hover:shadow-glow-cyan-lg',
    'border border-transparent',
    'hover:brightness-110 active:brightness-95',
  ].join(' '),

  secondary: [
    'bg-purple-600 text-white font-semibold',
    'shadow-glow-purple hover:shadow-glow-purple-lg',
    'border border-purple-500',
    'hover:bg-purple-500 active:bg-purple-700',
  ].join(' '),

  outline: [
    'bg-transparent font-semibold',
    'border border-cyan-300/30 text-cyan-300',
    'hover:border-cyan-300/70 hover:bg-cyan-300/8 hover:shadow-glow-cyan',
    'active:bg-cyan-300/15',
  ].join(' '),

  ghost: [
    'bg-transparent font-medium',
    'text-[var(--text-secondary)] border border-transparent',
    'hover:text-[var(--text-accent)] hover:bg-[var(--bg-surface-md)]',
    'active:bg-[var(--bg-surface-lg)]',
  ].join(' '),

  glass: [
    'glass-md font-semibold text-[var(--text-primary)]',
    'border-[var(--border-default)] hover:border-[var(--border-hover)]',
    'hover:glass-lg hover:shadow-glow-cyan',
    'active:brightness-90',
  ].join(' '),

  danger: [
    'bg-red-500/90 text-white font-semibold',
    'border border-red-500',
    'hover:bg-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]',
    'active:bg-red-600',
  ].join(' '),
};

// ─── Size styles ─────────────────────────────────────────────
const SIZES = {
  sm: 'h-8  px-3.5 text-xs  gap-1.5 rounded-lg',
  md: 'h-10 px-5   text-sm  gap-2   rounded-xl',
  lg: 'h-12 px-6   text-base gap-2.5 rounded-xl',
  xl: 'h-14 px-8   text-lg  gap-3   rounded-2xl',
};

// ─── Spinner ─────────────────────────────────────────────────
function Spinner({ size }) {
  const dim = { sm: 12, md: 14, lg: 16, xl: 18 }[size] ?? 14;
  return (
    <svg
      className="animate-spin shrink-0"
      width={dim}
      height={dim}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );
}

// ─── Component ───────────────────────────────────────────────
const Button = forwardRef(function Button(
  {
    children,
    variant  = 'primary',
    size     = 'md',
    loading  = false,
    disabled = false,
    iconLeft,
    iconRight,
    fullWidth = false,
    className = '',
    ...props
  },
  ref
) {
  const isDisabled = disabled || loading;

  const base = [
    'inline-flex items-center justify-center select-none',
    'transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2',
    'focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2',
    'focus-visible:ring-offset-[var(--bg-base)]',
    'disabled:opacity-50 disabled:pointer-events-none',
    'cursor-pointer',
    fullWidth ? 'w-full' : '',
    SIZES[size],
    VARIANTS[variant] ?? VARIANTS.primary,
    className,
  ].filter(Boolean).join(' ');

  // Framer Motion tap + hover for non-disabled
  const motionProps = isDisabled
    ? {}
    : {
        whileHover: { scale: 1.03, y: -1 },
        whileTap:   { scale: 0.96 },
        transition: { type: 'spring', stiffness: 500, damping: 30 },
      };

  return (
    <motion.button
      ref={ref}
      className={base}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={loading}
      {...motionProps}
      {...props}
    >
      {loading  && <Spinner size={size} />}
      {!loading && iconLeft && <span className="shrink-0">{iconLeft}</span>}
      {children && <span>{children}</span>}
      {!loading && iconRight && <span className="shrink-0">{iconRight}</span>}
    </motion.button>
  );
});

export default Button;
