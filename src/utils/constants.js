/**
 * ============================================================
 *  SITE IDENTITY & CONSTANTS — Sivaganga K S Portfolio
 * ============================================================
 */

// ─── Personal Identity ────────────────────────────────────────
export const SITE_OWNER = {
  name:        'Sivaganga K S',
  nameShort:   'Sivaganga',
  initials:    'SK',
  title:       'B.Tech Robotics & Artificial Intelligence',
  institution: 'Rajiv Gandhi Institute of Technology, Kottayam',
  year:        '1st Year',
  bio:
    'A passionate Robotics & AI student who enjoys building intelligent systems, ' +
    'solving problems with software, and exploring emerging technologies that shape the future.',
  email:    'sivagangaks9626@gmail.com',
  location: 'Coimbatore, Tamil Nadu, India',
  available: true,   // set false when not open to opportunities
};

// ─── Navigation ──────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home',      href: '#home',      shortcut: '1' },
  { label: 'About',     href: '#about',     shortcut: '2' },
  { label: 'Skills',    href: '#skills',    shortcut: '3' },
  { label: 'Projects',  href: '#projects',  shortcut: '4' },
  { label: 'Education', href: '#education', shortcut: '5' },
  { label: 'Resume',    href: '#resume',    shortcut: '6' },
  { label: 'Contact',   href: '#contact',   shortcut: '7' },
];

// ─── Social Links ─────────────────────────────────────────────
export const SOCIAL_LINKS = [
  {
    label:  'GitHub',
    href:   'https://github.com/Sivaganga-K-S',
    icon:   'github',
    handle: '@Sivaganga-K-S',
  },
  {
    label:  'LinkedIn',
    href:   'https://www.linkedin.com/in/sivaganga-k-s',
    icon:   'linkedin',
    handle: 'Sivaganga K S',
  },
];

// ─── Skills ──────────────────────────────────────────────────
export const SKILLS = {
  'Programming Languages': [
    'HTML', 'CSS', 'JavaScript', 'C Programming', 'Python',
  ],
  'AI & Machine Learning': [
    'Machine Learning Basics', 'Neural Networks', 'Scikit-learn',
    'Pandas', 'Matplotlib',
  ],
  'Robotics & Intelligent Systems': [
    'Autonomous Systems', 'Sensor Integration', 'Arduino', 'Microcontrollers',
  ],
  'Web Development': [
    'React', 'Vite', 'Tailwind CSS', 'Framer Motion',
  ],
  'Tools & Platforms': [
    'Git', 'GitHub', 'VS Code', 'Linux (basics)',
  ],
};

// ─── Projects ─────────────────────────────────────────────────
export const PROJECTS = [
  {
    id:          'portfolio',
    title:       'Personal Portfolio Website',
    description:
      'A modern, high-performance personal portfolio built to showcase my academic background, ' +
      'technical skills, and engineering projects. Features fully responsive UI design, smooth ' +
      'micro-interactions, and a sleek dark mode aesthetic.',
    tags:        ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    category:    'Web Development',
    featured:    true,
    liveUrl:     null,
    repoUrl:     null,
    image:       null,
  },
  {
    id:          'ai-study-assistant',
    title:       'AI Student Memory Assistant',
    description:
      'An AI-powered educational study tool designed to optimize learning. It processes uploaded ' +
      'notes, utilizes NLP algorithms to summarize key academic concepts, and generates targeted ' +
      'flashcards to improve long-term retention.',
    tags:        ['Python', 'NLP', 'Machine Learning', 'React'],
    category:    'Artificial Intelligence',
    featured:    true,
    liveUrl:     null,
    repoUrl:     null,
    image:       null,
  },
  {
    id:          'iot-smart-system',
    title:       'IoT Smart Monitoring System',
    description:
      'An integrated IoT-based smart system that monitors environmental data through a sensor ' +
      'network. Connects actuators and microcontrollers to a centralized cloud architecture, ' +
      'offering a real-time responsive dashboard interface.',
    tags:        ['IoT', 'MQTT', 'Python', 'Raspberry Pi', 'React'],
    category:    'IoT & Embedded Systems',
    featured:    true,
    liveUrl:     null,
    repoUrl:     null,
    image:       null,
  },
];

// ─── Education ────────────────────────────────────────────────
export const EDUCATION = [
  {
    degree:      'B.Tech — Robotics and Artificial Intelligence',
    institution: 'Rajiv Gandhi Institute of Technology, Kottayam',
    period:      '2024 – 2028',
    status:      'Currently Pursuing',
    highlights:  [
      'Core subjects: Artificial Intelligence, Machine Learning, Robotics, Control Systems, and Programming',
      'Actively building projects in web development, robotics, and artificial intelligence',
    ],
  },
  {
    degree:      'Higher Secondary Education (Class XII) — Science',
    institution: 'Al Ameen Public School, Sreemoolanagaram',
    period:      '2023 – 2024',
    status:      'Completed',
    highlights:  [
      'Stream: Science (Physics, Chemistry, Mathematics, Biology)',
      'Developed analytical thinking, problem-solving skills, and a strong academic foundation.',
    ],
  },
  {
    degree:      'SSLC (Class X)',
    institution: 'Al Ameen Public School, Sreemoolanagaram',
    period:      '2021 – 2022',
    status:      'Completed',
    highlights:  [
      'Completed secondary education at Al Ameen Public School, Sreemoolanagaram.',
      'Built interest in science, technology, and mathematics.',
    ],
  },
];

// ─── Areas of Interest ────────────────────────────────────────
export const INTERESTS = [
  { title: 'Robotics',                desc: 'Interested in intelligent machines, automation, and robotic systems.' },
  { title: 'Artificial Intelligence', desc: 'Exploring machine learning, intelligent systems, and AI applications.' },
  { title: 'Web Development',         desc: 'Learning modern web technologies and building responsive websites.' },
  { title: 'Programming',             desc: 'Improving problem-solving and programming skills through coursework and projects.' },
];

// ─── Meta / SEO ───────────────────────────────────────────────
export const SITE_META = {
  title:       'Sivaganga K S — Robotics & AI Student',
  description:
    'Portfolio of Sivaganga K S, a B.Tech Robotics & AI student passionate about intelligent systems, ' +
    'software development, and emerging technologies.',
  keywords:    [
    'Robotics', 'Artificial Intelligence', 'Machine Learning', 'Intelligent Systems',
    'Python', 'React', 'Software Development', 'Portfolio', 'Automation',
  ],
  url:         'https://sivagangaks.dev',    // update when deployed
  ogImage:     '/og-image.png',
};

// ─── Design System Config ─────────────────────────────────────
export const DS_CONFIG = {
  defaultTheme: 'dark',   // 'dark' | 'light'
  accentColor:  '#64FFDA',
  brandColor:   '#5B21B6',
};
