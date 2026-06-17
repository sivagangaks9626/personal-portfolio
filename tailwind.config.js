/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  // Dark mode via class on <html> — allows manual toggle
  darkMode: 'class',

  theme: {
    // ─── SCREENS / BREAKPOINTS ──────────────────────────────
    screens: {
      xs:   '375px',
      sm:   '640px',
      md:   '768px',
      lg:   '1024px',
      xl:   '1280px',
      '2xl':'1536px',
    },

    extend: {

      // ─── COLOR PALETTE ──────────────────────────────────
      colors: {
        // Navy — primary background family
        navy: {
          950: '#060d1a',
          900: '#0A192F',
          800: '#0d2240',
          700: '#112d52',
          600: '#163c6b',
          500: '#1d4f8c',
          400: '#2563ab',
        },

        // Purple — brand accent family
        purple: {
          950: '#1e0a4a',
          900: '#2e0e6e',
          800: '#3d1394',
          700: '#4c18b8',
          600: '#5B21B6',
          500: '#7c3aed',
          400: '#8b5cf6',
          300: '#a78bfa',
          200: '#c4b5fd',
          100: '#ede9fe',
        },

        // Cyan — highlight / accent
        cyan: {
          600: '#0891b2',
          500: '#06b6d4',
          400: '#22d3ee',
          300: '#64FFDA',
          200: '#a5f3fc',
          100: '#cffafe',
        },

        // Semantic aliases for easy usage
        brand:    '#5B21B6',
        accent:   '#64FFDA',
        surface:  '#0A192F',
        muted:    '#94A3B8',
        subtle:   '#475569',
        border:   'rgba(100, 255, 218, 0.12)',
      },

      // ─── TYPOGRAPHY ────────────────────────────────────
      fontFamily: {
        display: ["'Inter'", "'SF Pro Display'", 'system-ui', 'sans-serif'],
        body:    ["'Inter'", 'system-ui', 'sans-serif'],
        mono:    ["'JetBrains Mono'", "'Fira Code'", "'Cascadia Code'", 'monospace'],
      },

      fontSize: {
        '8xl': ['6rem',    { lineHeight: '1',    letterSpacing: '-0.04em' }],
        '7xl': ['4.5rem',  { lineHeight: '1',    letterSpacing: '-0.035em' }],
        '6xl': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        '5xl': ['3rem',    { lineHeight: '1.1',  letterSpacing: '-0.025em' }],
        '4xl': ['2.25rem', { lineHeight: '1.2',  letterSpacing: '-0.02em' }],
        '3xl': ['1.875rem',{ lineHeight: '1.3',  letterSpacing: '-0.015em' }],
        '2xl': ['1.5rem',  { lineHeight: '1.4',  letterSpacing: '-0.01em' }],
        'xl':  ['1.25rem', { lineHeight: '1.5',  letterSpacing: '-0.005em' }],
        'lg':  ['1.125rem',{ lineHeight: '1.6',  letterSpacing: '0' }],
        'base':['1rem',    { lineHeight: '1.7',  letterSpacing: '0' }],
        'sm':  ['0.875rem',{ lineHeight: '1.5',  letterSpacing: '0.01em' }],
        'xs':  ['0.75rem', { lineHeight: '1.4',  letterSpacing: '0.02em' }],
      },

      fontWeight: {
        light:     '300',
        regular:   '400',
        medium:    '500',
        semibold:  '600',
        bold:      '700',
        extrabold: '800',
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

      // ─── SPACING (4 px base) ───────────────────────────
      spacing: {
        4.5:  '1.125rem',
        5.5:  '1.375rem',
        13:   '3.25rem',
        15:   '3.75rem',
        18:   '4.5rem',
        22:   '5.5rem',
        26:   '6.5rem',
        30:   '7.5rem',
        34:   '8.5rem',
        38:   '9.5rem',
        42:   '10.5rem',
        50:   '12.5rem',
        52:   '13rem',
        54:   '13.5rem',
        58:   '14.5rem',
        60:   '15rem',
        68:   '17rem',
        72:   '18rem',
        80:   '20rem',
        88:   '22rem',
        96:   '24rem',
        104:  '26rem',
        112:  '28rem',
        120:  '30rem',
        128:  '32rem',
      },

      // ─── BORDER RADIUS ────────────────────────────────
      borderRadius: {
        sm:    '0.25rem',
        DEFAULT:'0.5rem',
        md:    '0.75rem',
        lg:    '1rem',
        xl:    '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        full:  '9999px',
      },

      // ─── BOX SHADOWS ──────────────────────────────────
      boxShadow: {
        // Elevation (dark-surface)
        'sm':     '0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3)',
        DEFAULT:  '0 4px 6px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.3)',
        'md':     '0 6px 16px rgba(0,0,0,0.5), 0 3px 6px rgba(0,0,0,0.35)',
        'lg':     '0 10px 28px rgba(0,0,0,0.55), 0 5px 10px rgba(0,0,0,0.4)',
        'xl':     '0 20px 48px rgba(0,0,0,0.6), 0 10px 20px rgba(0,0,0,0.45)',
        '2xl':    '0 30px 64px rgba(0,0,0,0.65)',

        // Glow shadows (brand colours)
        'glow-cyan':   '0 0 20px rgba(100,255,218,0.25), 0 0 60px rgba(100,255,218,0.1)',
        'glow-purple': '0 0 20px rgba(91,33,182,0.4),    0 0 60px rgba(91,33,182,0.2)',
        'glow-cyan-lg':'0 0 40px rgba(100,255,218,0.4),  0 0 80px rgba(100,255,218,0.15)',
        'glow-purple-lg':'0 0 40px rgba(91,33,182,0.6),  0 0 80px rgba(91,33,182,0.3)',

        // Glass inset highlight
        'glass':     'inset 0 1px 0 rgba(255,255,255,0.1), 0 10px 28px rgba(0,0,0,0.5)',
        'glass-lg':  'inset 0 1px 0 rgba(255,255,255,0.12), 0 20px 48px rgba(0,0,0,0.6)',
        'glass-hover':'inset 0 1px 0 rgba(255,255,255,0.15), 0 12px 32px rgba(0,0,0,0.55)',
      },

      // ─── BACKDROP BLUR ────────────────────────────────
      backdropBlur: {
        xs:   '2px',
        sm:   '4px',
        DEFAULT:'8px',
        md:   '12px',
        lg:   '16px',
        xl:   '24px',
        '2xl':'40px',
        '3xl':'64px',
      },

      // ─── BACKGROUND IMAGE (gradients) ─────────────────
      backgroundImage: {
        'gradient-brand':
          'linear-gradient(135deg, #64FFDA 0%, #5B21B6 100%)',
        'gradient-brand-reverse':
          'linear-gradient(135deg, #5B21B6 0%, #64FFDA 100%)',
        'gradient-card':
          'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
        'gradient-hero':
          'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(91,33,182,0.35) 0%, transparent 60%), ' +
          'radial-gradient(ellipse 60% 50% at 80% 60%, rgba(100,255,218,0.08) 0%, transparent 50%)',
        'gradient-navy':
          'linear-gradient(180deg, #0A192F 0%, #060d1a 100%)',
        'gradient-divider':
          'linear-gradient(90deg, transparent 0%, rgba(100,255,218,0.4) 50%, transparent 100%)',
        'gradient-conic-glow':
          'conic-gradient(from 180deg, #64FFDA, #5B21B6, #0A192F, #64FFDA)',
        'gradient-radial-cyan':
          'radial-gradient(circle, rgba(100,255,218,0.15) 0%, transparent 70%)',
        'gradient-radial-purple':
          'radial-gradient(circle, rgba(91,33,182,0.25) 0%, transparent 70%)',
      },

      // ─── TRANSITIONS ──────────────────────────────────
      transitionDuration: {
        50:   '50ms',
        150:  '150ms',
        250:  '250ms',
        350:  '350ms',
        400:  '400ms',
        500:  '500ms',
        700:  '700ms',
        1000: '1000ms',
      },

      transitionTimingFunction: {
        spring:  'cubic-bezier(0.34, 1.56, 0.64, 1)',
        bounce:  'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        smooth:  'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'ease-in-out-quart': 'cubic-bezier(0.77, 0, 0.175, 1)',
      },

      // ─── ANIMATION KEYFRAMES ──────────────────────────
      keyframes: {
        // Soft pulsing glow ring
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(100,255,218,0.25), 0 0 60px rgba(100,255,218,0.1)' },
          '50%':       { boxShadow: '0 0 40px rgba(100,255,218,0.5),  0 0 80px rgba(100,255,218,0.2)' },
        },
        // Floating / levitation
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-12px)' },
        },
        // Gradient text shimmer
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
        // Fade in + slide up
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Fade in + slide right
        'fade-right': {
          '0%':   { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        // Scale in
        'scale-in': {
          '0%':   { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        // Spinning gradient border
        'spin-slow': {
          '0%':   { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        // Blinking cursor
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0' },
        },
        // Noise overlay drift
        'noise-drift': {
          '0%':   { transform: 'translate(0,0)' },
          '25%':  { transform: 'translate(-5%,-5%)' },
          '50%':  { transform: 'translate(5%,5%)' },
          '75%':  { transform: 'translate(-5%,5%)' },
          '100%': { transform: 'translate(0,0)' },
        },
      },

      animation: {
        'glow-pulse':  'glow-pulse 3s ease-in-out infinite',
        'float':       'float 6s ease-in-out infinite',
        'shimmer':     'shimmer 3s linear infinite',
        'fade-up':     'fade-up 0.6s cubic-bezier(0.25,0.46,0.45,0.94) forwards',
        'fade-right':  'fade-right 0.6s cubic-bezier(0.25,0.46,0.45,0.94) forwards',
        'scale-in':    'scale-in 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards',
        'spin-slow':   'spin-slow 8s linear infinite',
        'blink':       'blink 1s step-end infinite',
        'noise-drift': 'noise-drift 8s ease-in-out infinite',
      },

      // ─── Z-INDEX ──────────────────────────────────────
      zIndex: {
        behind:  '-1',
        base:     '0',
        raised:   '10',
        dropdown: '100',
        sticky:   '200',
        overlay:  '300',
        modal:    '400',
        toast:    '500',
        tooltip:  '600',
      },
    },
  },

  plugins: [],
};
