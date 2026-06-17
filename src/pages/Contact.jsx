import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, scaleIn } from '../design-system/animations';
import Button from '../components/ui/Button';
import GlassPanel from '../components/ui/GlassPanel';

const CONTACT_INFO = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'sivagangaks9626@gmail.com',
    href:  'mailto:sivagangaks9626@gmail.com',
    accent: '#64FFDA',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/sivaganga-k-s',
    href:  'https://www.linkedin.com/in/sivaganga-k-s',
    accent: '#a78bfa',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/Sivaganga-K-S',
    href:  'https://github.com/Sivaganga-K-S',
    accent: '#22d3ee',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Location',
    value: 'Coimbatore, Tamil Nadu, India',
    href:  null,
    accent: '#5B21B6',
  },
];

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };
const INITIAL_ERRORS = { name: '', email: '', subject: '', message: '' };

function validate(fields) {
  const errs = { ...INITIAL_ERRORS };
  if (!fields.name.trim())              errs.name    = 'Name is required.';
  else if (fields.name.trim().length < 2) errs.name  = 'Name must be at least 2 characters.';
  if (!fields.email.trim())             errs.email   = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errs.email = 'Enter a valid email address.';
  if (!fields.subject.trim())           errs.subject = 'Subject is required.';
  else if (fields.subject.trim().length < 4) errs.subject = 'Subject must be at least 4 characters.';
  if (!fields.message.trim())           errs.message = 'Message is required.';
  else if (fields.message.trim().length < 20) errs.message = 'Message must be at least 20 characters.';
  return errs;
}

function hasErrors(errs) {
  return Object.values(errs).some(Boolean);
}

// ── Field wrapper ────────────────────────────────────────────
function Field({ label, id, error, children }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium mb-1.5"
        style={{ color: error ? 'var(--error, #EF4444)' : 'var(--text-secondary)' }}
      >
        {label}
        <span className="ml-1" style={{ color: 'var(--color-accent)' }} aria-hidden="true">*</span>
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="mt-1.5 text-xs"
            style={{ color: '#EF4444' }}
            role="alert"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Contact() {
  const [form,    setForm]    = useState(INITIAL_FORM);
  const [errors,  setErrors]  = useState(INITIAL_ERRORS);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [touched, setTouched] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (touched[name]) {
      const errs = validate({ ...form, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: errs[name] }));
    }
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    const errs = validate(form);
    setErrors((prev) => ({ ...prev, [name]: errs[name] }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });
    const errs = validate(form);
    setErrors(errs);
    if (hasErrors(errs)) return;

    setLoading(true);
    // Simulate sending — replace with EmailJS / Formspree / API
    await new Promise((res) => setTimeout(res, 1400));
    setLoading(false);
    setSuccess(true);
    setForm(INITIAL_FORM);
    setTouched({});
    setTimeout(() => setSuccess(false), 5000);
  }

  const inputClass = (field) =>
    `input-base ${errors[field] ? 'border-red-500/60 focus:border-red-400 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.12)]' : ''}`;

  return (
    <section id="contact" className="section" aria-label="Contact">
      <div className="section-inner">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p variants={fadeUp(0)} className="section-label justify-center">06 — Contact</motion.p>
          <motion.h2 variants={fadeUp(0.08)} className="section-heading">Get In Touch</motion.h2>
          <motion.p
            variants={fadeUp(0.14)}
            className="mt-4 max-w-xl mx-auto text-sm"
            style={{ color: 'var(--text-secondary)' }}
          >
            Have a project idea, collaboration, or just want to say hello? I&apos;d love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 max-w-5xl mx-auto items-start">

          {/* Contact info */}
          <motion.div
            variants={fadeLeft(0, 40)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-5"
          >
            <GlassPanel intensity={3} animate delay={0}>
              <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Let&apos;s Connect</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                I&apos;m currently open to internship opportunities, research collaborations, and
                interesting projects in AI, IoT, and software development. My inbox is always open.
              </p>
              <div className="flex flex-col gap-4">
                {CONTACT_INFO.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 group">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                      style={{
                        background: `${item.accent}15`,
                        border: `1px solid ${item.accent}30`,
                        color: item.accent,
                      }}
                      aria-hidden="true"
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-medium transition-colors duration-200 hover:text-[var(--text-accent)]"
                          style={{ color: 'var(--text-primary)' }}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Availability badge */}
            <motion.div
              variants={scaleIn(0.2)}
              className="glass-cyan rounded-2xl p-4 flex items-center gap-3"
            >
              <div className="relative flex h-3 w-3 shrink-0" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-300" />
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Available for opportunities</p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Open to internships & collaborations</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeRight(0.1, 40)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <GlassPanel intensity={3} animate delay={0.1}>

              {/* Success toast */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -12, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                    className="mb-5 rounded-xl p-4 flex items-center gap-3"
                    style={{ background: 'rgba(100,255,218,0.1)', border: '1px solid rgba(100,255,218,0.3)' }}
                    role="status"
                    aria-live="polite"
                  >
                    <span className="text-xl" aria-hidden="true">✅</span>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: 'var(--text-accent)' }}>Message sent!</p>
                      <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>I&apos;ll get back to you as soon as possible.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5" aria-label="Contact form">
                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Name" id="name" error={errors.name}>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={inputClass('name')}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      aria-invalid={!!errors.name}
                    />
                  </Field>

                  <Field label="Email" id="email" error={errors.email}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={inputClass('email')}
                      aria-invalid={!!errors.email}
                    />
                  </Field>
                </div>

                {/* Subject */}
                <Field label="Subject" id="subject" error={errors.subject}>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass('subject')}
                    aria-invalid={!!errors.subject}
                  />
                </Field>

                {/* Message */}
                <Field label="Message" id="message" error={errors.message}>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project, idea, or just say hello..."
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass('message')}
                    aria-invalid={!!errors.message}
                  />
                </Field>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  loading={loading}
                  disabled={loading}
                >
                  {loading ? 'Sending…' : 'Send Message'}
                  {!loading && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0" aria-hidden="true">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  )}
                </Button>

                <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
                  Fields marked <span style={{ color: 'var(--color-accent)' }}>*</span> are required.
                </p>
              </form>
            </GlassPanel>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
