/**
 * ============================================================
 *  DESIGN SYSTEM TOKENS — Sivaganga K S Portfolio
 *  AI-Inspired · Glassmorphism · Dark-first · Futuristic
 * ============================================================
 */

// ─── COLOR PALETTE ────────────────────────────────────────────
export const colors = {
  // Brand / Base
  navy: {
    950: '#060d1a',
    900: '#0A192F', // ← Primary background
    800: '#0d2240',
    700: '#112d52',
    600: '#163c6b',
    500: '#1d4f8c',
    400: '#2563ab',
  },

  purple: {
    950: '#1e0a4a',
    900: '#2e0e6e',
    800: '#3d1394',
    700: '#4c18b8',
    600: '#5B21B6', // ← Brand accent
    500: '#7c3aed',
    400: '#8b5cf6',
    300: '#a78bfa',
    200: '#c4b5fd',
    100: '#ede9fe',
  },

  cyan: {
    600: '#0891b2',
    500: '#06b6d4',
    400: '#22d3ee',
    300: '#64FFDA', // ← Primary accent / highlight
    200: '#a5f3fc',
    100: '#cffafe',
  },

  // Neutrals
  white:       '#FFFFFF',
  offWhite:    '#E2E8F0',
  muted:       '#94A3B8',
  subtle:      '#475569',
  border:      'rgba(100, 255, 218, 0.12)',
  borderHover: 'rgba(100, 255, 218, 0.3)',

  // Semantic
  success: '#10B981',
  warning: '#F59E0B',
  error:   '#EF4444',
  info:    '#64FFDA',

  // Glass surfaces
  glass: {
    light:  'rgba(255, 255, 255, 0.05)',
    medium: 'rgba(255, 255, 255, 0.08)',
    heavy:  'rgba(255, 255, 255, 0.12)',
    dark:   'rgba(10, 25, 47, 0.7)',
    purple: 'rgba(91, 33, 182, 0.15)',
    cyan:   'rgba(100, 255, 218, 0.08)',
  },
};

// ─── TYPOGRAPHY ───────────────────────────────────────────────
export const typography = {
  fontFamily: {
    display: "'Inter', 'SF Pro Display', system-ui, sans-serif",
    body:    "'Inter', system-ui, sans-serif",
    mono:    "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
  },

  fontSize: {
    xs:   ['0.75rem',  { lineHeight: '1rem' }],
    sm:   ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem',     { lineHeight: '1.6rem' }],
    lg:   ['1.125rem', { lineHeight: '1.75rem' }],
    xl:   ['1.25rem',  { lineHeight: '1.875rem' }],
    '2xl':['1.5rem',   { lineHeight: '2rem' }],
    '3xl':['1.875rem', { lineHeight: '2.25rem' }],
    '4xl':['2.25rem',  { lineHeight: '2.5rem' }],
    '5xl':['3rem',     { lineHeight: '1.1' }],
    '6xl':['3.75rem',  { lineHeight: '1.05' }],
    '7xl':['4.5rem',   { lineHeight: '1' }],
    '8xl':['6rem',     { lineHeight: '1' }],
  },

  fontWeight: {
    light:    300,
    regular:  400,
    medium:   500,
    semibold: 600,
    bold:     700,
    extrabold:800,
  },

  letterSpacing: {
    tightest: '-0.05em',
    tighter:  '-0.025em',
    tight:    '-0.015em',
    normal:   '0em',
    wide:     '0.05em',
    wider:    '0.1em',
    widest:   '0.2em',
  },
};

// ─── SPACING SYSTEM (4px base unit) ───────────────────────────
export const spacing = {
  px:  '1px',
  0:   '0',
  0.5: '0.125rem',  //  2px
  1:   '0.25rem',   //  4px
  1.5: '0.375rem',  //  6px
  2:   '0.5rem',    //  8px
  2.5: '0.625rem',  // 10px
  3:   '0.75rem',   // 12px
  3.5: '0.875rem',  // 14px
  4:   '1rem',      // 16px
  5:   '1.25rem',   // 20px
  6:   '1.5rem',    // 24px
  7:   '1.75rem',   // 28px
  8:   '2rem',      // 32px
  9:   '2.25rem',   // 36px
  10:  '2.5rem',    // 40px
  12:  '3rem',      // 48px
  14:  '3.5rem',    // 56px
  16:  '4rem',      // 64px
  20:  '5rem',      // 80px
  24:  '6rem',      // 96px
  28:  '7rem',      // 112px
  32:  '8rem',      // 128px
  36:  '9rem',      // 144px
  40:  '10rem',     // 160px
  48:  '12rem',     // 192px
  56:  '14rem',     // 224px
  64:  '16rem',     // 256px
};

// ─── BORDER RADIUS ────────────────────────────────────────────
export const borderRadius = {
  none:    '0',
  sm:      '0.25rem',   //  4px  — subtle rounding (inputs)
  DEFAULT: '0.5rem',    //  8px  — default
  md:      '0.75rem',   // 12px  — cards inner
  lg:      '1rem',      // 16px  — cards outer
  xl:      '1.25rem',   // 20px  — large cards
  '2xl':   '1.5rem',    // 24px  — panels
  '3xl':   '2rem',      // 32px  — hero elements
  full:    '9999px',    //        — pills / badges
};

// ─── SHADOW SYSTEM ────────────────────────────────────────────
export const shadows = {
  // Elevation shadows (dark theme)
  sm:     '0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3)',
  DEFAULT:'0 4px 6px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.3)',
  md:     '0 6px 16px rgba(0,0,0,0.5), 0 3px 6px rgba(0,0,0,0.35)',
  lg:     '0 10px 28px rgba(0,0,0,0.55), 0 5px 10px rgba(0,0,0,0.4)',
  xl:     '0 20px 48px rgba(0,0,0,0.6), 0 10px 20px rgba(0,0,0,0.45)',
  '2xl':  '0 30px 64px rgba(0,0,0,0.65)',

  // Glow shadows (brand colours)
  glow: {
    cyan:   '0 0 20px rgba(100, 255, 218, 0.25), 0 0 60px rgba(100, 255, 218, 0.1)',
    purple: '0 0 20px rgba(91, 33, 182, 0.4),    0 0 60px rgba(91, 33, 182, 0.2)',
    navy:   '0 0 20px rgba(10, 25, 47, 0.8),     0 0 40px rgba(10, 25, 47, 0.6)',
    white:  '0 0 20px rgba(255, 255, 255, 0.1),  0 0 40px rgba(255, 255, 255, 0.05)',
  },

  // Glass-specific inset
  glassInset: 'inset 0 1px 0 rgba(255,255,255,0.1)',
};

// ─── RESPONSIVE BREAKPOINTS ───────────────────────────────────
export const breakpoints = {
  xs:  '375px',   // small phones
  sm:  '640px',   // large phones / small tablets
  md:  '768px',   // tablets
  lg:  '1024px',  // small laptops
  xl:  '1280px',  // desktops
  '2xl':'1536px', // large screens
};

// ─── ANIMATION DURATIONS & EASINGS ───────────────────────────
export const animation = {
  duration: {
    instant:  '50ms',
    fastest:  '100ms',
    faster:   '150ms',
    fast:     '200ms',
    normal:   '300ms',
    slow:     '500ms',
    slower:   '700ms',
    slowest:  '1000ms',
  },

  easing: {
    linear:    'linear',
    easeIn:    'cubic-bezier(0.4, 0, 1, 1)',
    easeOut:   'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring:    'cubic-bezier(0.34, 1.56, 0.64, 1)',
    bounce:    'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    smooth:    'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },

  // Framer Motion spring configs
  spring: {
    gentle:  { type: 'spring', stiffness: 120, damping: 20 },
    bouncy:  { type: 'spring', stiffness: 300, damping: 18 },
    snappy:  { type: 'spring', stiffness: 500, damping: 30 },
    wobbly:  { type: 'spring', stiffness: 180, damping: 12 },
  },
};

// ─── GLASSMORPHISM RECIPE ─────────────────────────────────────
export const glass = {
  // Base glass surface
  base: {
    background:   colors.glass.light,
    backdropFilter: 'blur(16px) saturate(180%)',
    border:       `1px solid ${colors.border}`,
    boxShadow:    `${shadows.lg}, ${shadows.glassInset}`,
  },
  // Elevated glass (cards, modals)
  elevated: {
    background:   colors.glass.medium,
    backdropFilter: 'blur(24px) saturate(200%)',
    border:       `1px solid ${colors.borderHover}`,
    boxShadow:    `${shadows.xl}, ${shadows.glassInset}`,
  },
  // Sunken glass (input fields)
  sunken: {
    background:   'rgba(0,0,0,0.2)',
    backdropFilter: 'blur(8px)',
    border:       `1px solid ${colors.border}`,
    boxShadow:    'inset 0 2px 4px rgba(0,0,0,0.3)',
  },
};

// ─── Z-INDEX SCALE ────────────────────────────────────────────
export const zIndex = {
  behind:  -1,
  base:     0,
  raised:   10,
  dropdown: 100,
  sticky:   200,
  overlay:  300,
  modal:    400,
  toast:    500,
  tooltip:  600,
};

// ─── GRADIENT PRESETS ─────────────────────────────────────────
export const gradients = {
  // Hero background mesh
  heroMesh:
    'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(91,33,182,0.35) 0%, transparent 60%), ' +
    'radial-gradient(ellipse 60% 50% at 80% 60%, rgba(100,255,218,0.08) 0%, transparent 50%)',

  // Brand gradient (text + buttons)
  brand:
    'linear-gradient(135deg, #64FFDA 0%, #5B21B6 100%)',

  brandReverse:
    'linear-gradient(135deg, #5B21B6 0%, #64FFDA 100%)',

  // Subtle card gradient
  cardSurface:
    'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',

  // Glow ring gradient (used on avatar / hero elements)
  glowRing:
    'conic-gradient(from 180deg, #64FFDA, #5B21B6, #0A192F, #64FFDA)',

  // Section divider gradient
  divider:
    'linear-gradient(90deg, transparent 0%, rgba(100,255,218,0.4) 50%, transparent 100%)',

  // Noise texture overlay (CSS only)
  noise: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.04\'/%3E%3C/svg%3E")',
};
