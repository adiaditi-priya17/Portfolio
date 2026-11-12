/**
 * Central portfolio data — generated from Aditi Priya's resume.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Aditi Priya',
  displayName: 'Aditi Priya',
  firstName: 'ADITI',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'AN ADITI ORIGINAL',
  role: 'Full-Stack Developer',
  tagline: ['Full-Stack Developer', 'Java & JavaScript', 'Blockchain'],
  intro:
    'A B.Tech Computer Science & Engineering student (CGPA 8.95) at BIT Mesra, Patna — building full-stack web apps, AI-integrated payment platforms, and physics engines with Java, JavaScript, React, Node.js, and Solana.',
  location: 'Patna, Bihar',
  email: 'adiaditipriya03@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/aditi-priya-9a6a382b4/',
    github: 'https://github.com/adiaditi-priya17',
  },
  resumePdf: '/assets/Aditi_Priya_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Aditi Priya',
  },
  interests: ['Blockchain', 'Full-Stack Development', 'Physics Simulation'],
};

export const education = [
  {
    school: 'Birla Institute of Technology, Mesra',
    place: 'Patna',
    degree: 'Bachelor of Technology — Computer Science and Engineering',
    period: 'September 2023 – June 2027',
    score: 'CGPA 8.95/10',
  },
  {
    school: 'BPL Residential Public School',
    place: 'Ajwan, Patna',
    degree: 'Central Board of Secondary Education (CBSE)',
    period: 'August 2020 – June 2022',
    score: 'Percentage: 82%',
  },
];

export const experience = [
  {
    company: 'Dixit Global Tech Pvt. Ltd.',
    role: 'Digital Marketing Intern',
    place: 'Remote',
    period: 'July 2025 – January 2026',
    points: [
      'Managed lead-generation and bidding data using Google Sheets and Apollo, maintaining organized prospect information, tracking opportunities, and supporting digital outreach and business development activities.',
      'Cleaned and standardized email data with JETCleaner, conducted digital marketing research using SEMrush, and supported the international Beeking project in Nigeria by evaluating and tracking relevant bidding opportunities across platforms.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  live?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'safer-ai',
    title: 'SAFER-AI',
    year: '2025',
    genre: 'Full-Stack • Blockchain • AI',
    logline: 'A cross-border payment prototype with AI-assisted risk analysis and Solana blockchain verification.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'Solana Devnet', 'Tailwind CSS'],
    build: [
      'Developed a full-stack cross-border payment prototype with user authentication, payment tracking, transaction risk analysis, and payment review workflows — creating an end-to-end structure for secure and transparent payment processing.',
      'Integrated the Gemini API for AI-assisted transaction risk analysis and Solana Devnet for blockchain transaction simulation and verification, while building responsive React.js interfaces and reusable Node.js / Express.js APIs.',
    ],
    features: [
      'User authentication & payment tracking',
      'AI-assisted transaction risk analysis (Gemini API)',
      'Solana Devnet blockchain simulation & verification',
      'Payment review workflows',
      'Responsive React.js frontend',
    ],
    metrics: [
      { value: 'Full-Stack', label: 'end-to-end architecture' },
      { value: 'Gemini', label: 'AI risk engine' },
      { value: 'Solana', label: 'blockchain layer' },
      { value: '2', label: 'API layers (REST + Blockchain)' },
    ],
    github: 'https://github.com/adiaditi-priya17/SAFER-AI.git',
    palette: { from: '#061730', via: '#0369a1', to: '#020b18', accent: '#38bdf8' },
    motif: 'flow',
  },
  {
    id: 'hydronet',
    title: 'HydroNet',
    year: '2025',
    genre: 'Computational Modeling • Python',
    logline: 'A Python-powered computational system for hydrological network analysis, fluid dynamics modeling, and data evaluation.',
    stack: ['Python', 'NumPy', 'Data Analysis', 'Simulation Pipelines'],
    build: [
      'Architected and implemented a computational hydrology framework in Python to simulate fluid flow dynamics, network routing, and system behaviors under variable conditions.',
      'Constructed automated data pipelines and numerical evaluation models using NumPy for rapid parameter sweeps, data filtering, and fluid state analysis.',
    ],
    features: [
      'Hydrological network flow simulation & routing',
      'Python data analysis and computational pipelines',
      'High-throughput parameter evaluation with NumPy',
      'Data-driven fluid state diagnostics & debugging',
    ],
    metrics: [
      { value: 'Python', label: 'core architecture' },
      { value: 'Automated', label: 'numerical data pipelines' },
      { value: 'High-Precision', label: 'state calculation' },
      { value: 'Modular', label: 'simulation framework' },
    ],
    github: 'https://github.com/adiaditi-priya17/HydroNet',
    palette: { from: '#041624', via: '#0284c7', to: '#020d18', accent: '#38bdf8' },
    motif: 'flow',
  },
  {
    id: 'physics-engine',
    title: 'Physics Engine from Scratch',
    year: '2025',
    genre: 'Game Physics • Algorithms • Java',
    logline: 'A modular physics simulation engine engineered completely from scratch in Java with zero third-party physics libraries.',
    stack: ['Java', 'Physics Engine', 'OOP', 'Algorithms'],
    build: [
      'Engineered a complete 2D/3D physics simulation engine from first principles in pure Java — implementing numerical integration (Euler & Verlet), particle dynamics, and rigid-body mechanics without external dependencies.',
      'Designed custom collision detection algorithms, bounding volume hierarchies, and impulse-based contact resolution solvers to achieve stable real-time physical interactions.',
    ],
    features: [
      'From-scratch numerical integration (Euler & Verlet)',
      'Impulse-based collision detection and resolution',
      'Rigid-body mechanics and particle dynamics',
      'Zero external physics libraries (pure Java)',
    ],
    metrics: [
      { value: 'Pure Java', label: 'built from first principles' },
      { value: '0', label: 'external physics dependencies' },
      { value: 'Real-Time', label: 'collision & impulse solver' },
      { value: 'OOP', label: 'modular architecture' },
    ],
    github: 'https://github.com/adiaditi-priya17/physics-engine',
    palette: { from: '#022013', via: '#059669', to: '#020d08', accent: '#34d399' },
    motif: 'shield',
  },
  {
    id: 'netflix-clone',
    title: 'Netflix Homepage Clone',
    year: '2024',
    genre: 'Frontend • Responsive • UI',
    logline: 'A pixel-faithful, fully responsive Netflix homepage clone built with vanilla HTML, CSS & JavaScript.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    build: [
      'Developed a responsive Netflix homepage clone using HTML, CSS, and JavaScript — recreating navigation, hero banners, content cards, movie and show sections, and the visual structure of a streaming-platform interface.',
      'Implemented mobile-friendly layouts, structured content sections, reusable styling patterns, and responsive alignment to provide a consistent browsing experience across desktop, tablet, and mobile screen sizes.',
    ],
    features: [
      'Full Netflix UI recreation (nav, hero, cards)',
      'Mobile-friendly responsive layouts',
      'Reusable CSS patterns',
      'Cross-device consistent experience',
    ],
    metrics: [
      { value: '3', label: 'screen sizes supported' },
      { value: 'Vanilla', label: 'no frameworks' },
      { value: '100%', label: 'hand-coded CSS' },
    ],
    github: 'https://github.com/adiaditi-priya17/Netflix-Clone',
    live: 'https://netflixclonelearning.vercel.app',
    palette: { from: '#20081a', via: '#86198f', to: '#0d030b', accent: '#f43f5e' },
    motif: 'tenants',
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    year: '2024',
    genre: 'Frontend • Portfolio • UI/UX',
    logline: 'A responsive portfolio website presenting skills, projects, education, and experience with clear information hierarchy.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    build: [
      'Developed a responsive portfolio website to present technical skills, projects, education, and experience through dedicated sections with clear information hierarchy, structured navigation, and a professional front-end layout.',
      'Implemented responsive layouts and reusable front-end styling for consistent rendering across desktop, tablet, and mobile screen sizes, organizing project, profile, and contact information for an accessible user experience.',
    ],
    features: [
      'Multi-section portfolio layout',
      'Responsive across desktop, tablet & mobile',
      'Reusable front-end styling',
      'Clear information hierarchy & navigation',
    ],
    metrics: [
      { value: 'Responsive', label: 'all screen sizes' },
      { value: 'Accessible', label: 'structured UX' },
      { value: 'Vanilla JS', label: 'no framework' },
    ],
    github: 'https://github.com/adiaditi-priya17/portfolio.git',
    live: 'https://aditipriya-portfolio.vercel.app',
    palette: { from: '#1a1003', via: '#d97706', to: '#0a0601', accent: '#fbbf24' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'head-design',
    title: 'Head of Design & Decoration',
    org: 'Technika \'24–\'25, BIT Mesra Off Campus, Patna',
    detail: 'Led the Design & Decoration team for Technika \'24–\'25, contributing to visual planning, creative execution, event decor, and overall presentation while coordinating with the organizing committee to maintain a cohesive experience.',
    laurel: 'Leadership',
    link: 'https://drive.google.com/file/d/1EPLxBjhoWfttVWqRCOND3KJjfOgdcT2L/view?usp=sharing',
  },
  {
    id: 'pre-rd-camp',
    title: 'Pre-RD Camp Participant',
    org: 'Regional Directorate of NSS, Patna',
    detail: 'Participated in the State Level Pre-Republic Day Parade Selection Camp 2024 organized by the Regional Directorate of NSS, Patna in collaboration with MMHAPU, demonstrating active participation, discipline, and leadership.',
    laurel: 'State Level',
    link: 'https://drive.google.com/file/d/12BsqpPA9yHTbgstnGW_gu8xUX6SIwMn6/view?usp=sharing',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  {
    issuer: 'Dixit Global Tech',
    name: 'Digital Marketing Intern Certificate',
    link: 'https://drive.google.com/file/d/14FKxrzupHDsRl2wGCNNQyOQe2cMh3FoO/view?usp=sharing',
  },
  {
    issuer: 'BIT Mesra Off Campus, Patna',
    name: 'Head of Design & Decoration — Technika \'24–\'25 Certificate',
    link: 'https://drive.google.com/file/d/1EPLxBjhoWfttVWqRCOND3KJjfOgdcT2L/view?usp=sharing',
  },
  {
    issuer: 'Regional Directorate of NSS, Patna',
    name: 'State Level Pre-Republic Day Parade Selection Camp 2024 Certificate',
    link: 'https://drive.google.com/file/d/12BsqpPA9yHTbgstnGW_gu8xUX6SIwMn6/view?usp=sharing',
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Java, Python & JavaScript',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Primary' },
      { name: 'Python', mono: 'Py', note: 'Modeling' },
      { name: 'JavaScript', mono: 'Js', note: 'Full-Stack' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'React.js', mono: 'Re' },
      { name: 'Next.js', mono: 'Nx' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'Tailwind CSS', mono: 'Tw' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Database',
    subtitle: 'Server-side logic',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'Mongoose', mono: 'Mo' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'apis',
    title: 'APIs & Auth',
    subtitle: 'Integration & security',
    skills: [
      { name: 'REST API', mono: 'Ap' },
      { name: 'JWT Auth', mono: 'Jw' },
      { name: 'Gemini API', mono: 'Gm' },
    ],
  },
  {
    id: 'blockchain',
    title: 'Blockchain',
    subtitle: 'Decentralised tech',
    skills: [
      { name: 'Solana Devnet', mono: 'So' },
    ],
  },
  {
    id: 'physics',
    title: 'Physics & Simulation',
    subtitle: 'Computational engines',
    skills: [
      { name: 'Physics Engine', mono: 'Ph', note: 'Pure Java' },
      { name: 'HydroNet', mono: 'Hy', note: 'Python' },
      { name: 'NumPy', mono: 'Np', note: 'Analysis' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    subtitle: 'Dev workflow',
    skills: [
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Vite', mono: 'Vi' },
      { name: 'VS Code', mono: 'Vs' },
      { name: 'Excel', mono: 'Ex' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'The foundations',
    skills: [
      { name: 'DSA', mono: 'Ds' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'OOPs', mono: 'Oo' },
      { name: 'OS', mono: 'Os' },
      { name: 'CNS', mono: 'Cn' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Coming soon to the series',
    skills: [
      { name: 'Blockchain', mono: 'Bl' },
      { name: 'Full-Stack Dev', mono: 'Fs' },
      { name: 'Physics Simulation', mono: 'Ps' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Java: ['Physics Engine from Scratch', 'SAFER-AI backend', 'OOPs & Algorithms'],
  JavaScript: ['SAFER-AI frontend', 'Netflix Clone', 'Portfolio Website'],
  'React.js': ['SAFER-AI frontend'],
  'Next.js': ['Full-stack web development'],
  HTML: ['Netflix Clone', 'Portfolio Website'],
  CSS: ['Netflix Clone', 'Portfolio Website'],
  'Tailwind CSS': ['SAFER-AI UI'],
  'Node.js': ['SAFER-AI backend'],
  'Express.js': ['SAFER-AI backend'],
  MongoDB: ['SAFER-AI database'],
  SQL: ['CS Fundamentals — DBMS'],
  'REST API': ['SAFER-AI'],
  'JWT Auth': ['SAFER-AI user authentication'],
  'Gemini API': ['SAFER-AI AI risk analysis'],
  'Solana Devnet': ['SAFER-AI blockchain layer'],
  'Physics Engine': ['Physics Engine from Scratch in Java (Euler/Verlet integration)'],
  HydroNet: ['HydroNet in Python (Hydrological network modeling)'],
  Python: ['HydroNet Computational Network Simulation & Analysis'],
  NumPy: ['HydroNet numerical pipelines & simulation arrays'],
  'Git / GitHub': ['All projects'],
  Vite: ['Portfolio Website'],
  DSA: ['CS Fundamentals'],
  DBMS: ['CS Fundamentals'],
  OOPs: ['Physics Engine in Java'],
  OS: ['CS Fundamentals'],
  CNS: ['CS Fundamentals'],
  Blockchain: ['SAFER-AI — Solana Devnet'],
  'Full-Stack Dev': ['SAFER-AI', 'Netflix Clone', 'Portfolio Website'],
  'Physics Simulation': ['Physics Engine in Java', 'HydroNet in Python'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#0d0518', via: '#3d1a6e', to: '#080510', accent: '#a78bfa' };
const amber:   Palette = { from: '#1a1002', via: '#7a4a06', to: '#0a0800', accent: '#f4b942'  };
const ocean:   Palette = { from: '#03101e', via: '#0e3f60', to: '#040810', accent: '#38bdf8'  };
const violet:  Palette = { from: '#0d0520', via: '#4a1e80', to: '#07050f', accent: '#c084fc'  };
const jade:    Palette = { from: '#03140e', via: '#0a4f38', to: '#040908', accent: '#34d399'  };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2020 – 2022',
    synopsis: 'Class XI–XII at BPL Residential Public School, Ajwan, Patna — CBSE stream.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'CBSE at BPL Residential Public School, Ajwan, Patna — finishing with 82% in Class XII.',
        tags: ['CBSE', '82%'],
        runtime: 'Aug 2020 – Jun 2022',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: CSE at BIT Mesra',
    period: '2023 – Present',
    synopsis: 'B.Tech in Computer Science and Engineering at Birla Institute of Technology, Mesra, Patna.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'Bachelor of Technology in Computer Science and Engineering at BIT Mesra, Patna — CGPA 8.95.',
        tags: ['B.Tech', 'CSE', 'CGPA 8.95'],
        runtime: 'Sept 2023 – Jun 2027',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Leader',
        description: 'Head of Design & Decoration for Technika \'24–\'25, BIT Mesra Off Campus, Patna — leading visual planning, creative execution, and event decor.',
        tags: ['Leadership', 'Design', 'Technika'],
        runtime: '2024–2025',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'The Marcher',
        description: 'Participated in the State Level Pre-Republic Day Parade Selection Camp 2024 organised by the Regional Directorate of NSS, Patna.',
        tags: ['NSS', 'State Level', 'Pre-RD Camp'],
        runtime: 'Sept 2024',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Building Real Products',
    period: '2024 – 2025',
    synopsis: 'Five Originals — from frontend streaming clones and AI payments to a Python modeling system and a pure Java physics engine.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Frontend Dev',
        description: 'Netflix Homepage Clone & Personal Portfolio — responsive HTML/CSS/JS, mobile-first layouts, reusable styling patterns.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
        runtime: '2024',
        palette: amber,
      },
      {
        code: 'S03 E02',
        title: 'The Full-Stack Dev',
        description: 'SAFER-AI — cross-border payment platform integrating Gemini AI risk analysis and Solana blockchain verification with React.js and Node.js.',
        tags: ['React.js', 'Node.js', 'Gemini API', 'Solana'],
        runtime: '2025',
        palette: ocean,
      },
      {
        code: 'S03 E03',
        title: 'The Python Modeler',
        description: 'HydroNet — a computational hydrology network modeling and fluid simulation system developed in Python with automated data pipelines.',
        tags: ['Python', 'Simulation', 'NumPy'],
        runtime: '2025',
        palette: ocean,
      },
      {
        code: 'S03 E04',
        title: 'The Engine Architect',
        description: 'Physics Engine — engineered entirely from scratch in pure Java with custom numerical integration, particle systems, and rigid-body collision solvers.',
        tags: ['Java', 'Physics Engine', 'OOP'],
        runtime: '2025',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'The Work Arc',
    period: '2025 – 2026',
    synopsis: 'Professional industry experience as a Digital Marketing Intern at Dixit Global Tech Pvt. Ltd.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Marketer',
        description: 'Digital Marketing Intern at Dixit Global Tech Pvt. Ltd. — managing lead-generation, Apollo, Google Sheets, SEMrush, and JETCleaner for the international Beeking project.',
        tags: ['Digital Marketing', 'SEMrush', 'Apollo'],
        runtime: 'Jul 2025 – Jan 2026',
        palette: crimson,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Exploring blockchain, full-stack architecture, and computational simulation at scale.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Deepening expertise in Blockchain, Full-Stack Development, and Physics Simulation.',
        tags: ['Blockchain', 'Full-Stack', 'Physics Simulation'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary languages', title: 'Java & JavaScript', detail: 'Core stack across all projects', palette: amber },
  { label: 'AI Original', title: 'SAFER-AI', detail: 'Cross-border payments • Gemini API • Solana', palette: ocean },
  { label: 'Python Modeling', title: 'HydroNet', detail: 'Computational simulation & analysis in Python', palette: ocean },
  { label: 'Pure Java Engine', title: 'Physics Engine', detail: 'Built from scratch in Java — zero external libs', palette: jade },
  { label: 'Academic score', title: 'CGPA 8.95', detail: 'BIT Mesra — B.Tech CSE', palette: crimson },
  { label: 'Leadership role', title: 'Head of Design', detail: 'Technika \'24–\'25 — BIT Mesra', palette: amber },
  { label: 'State achievement', title: 'Pre-RD Camp', detail: 'NSS — State Level 2024', palette: ocean },
  { label: 'Frontend original', title: 'Netflix Clone', detail: 'Responsive HTML/CSS/JS', palette: crimson },
  { label: 'Work experience', title: 'Digital Marketing', detail: 'Dixit Global Tech — 7 months', palette: jade },
  { label: 'Next frontier', title: 'Simulation & Web3', detail: 'with Blockchain & Full-Stack Dev', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · CSE',
    lines: ['Birla Institute of Technology, Mesra, Patna', 'September 2023 – June 2027'],
    chips: ['CGPA 8.95'],
  },
  {
    kicker: 'Skills',
    title: 'Java, Python & JavaScript.',
    lines: ['React.js, Next.js, HTML, CSS, Tailwind · Node.js, Express.js, MongoDB', 'Gemini API, JWT, REST API · Solana Devnet · Git'],
    chips: ['Java', 'Python', 'JavaScript', 'React.js', 'Node.js', 'Solana'],
  },
  {
    kicker: 'Experience',
    title: 'The Work Arc',
    lines: ['Digital Marketing Intern · Dixit Global Tech Pvt. Ltd.', 'July 2025 – January 2026', 'Lead generation · SEMrush · Apollo · JETCleaner'],
  },
  {
    kicker: 'Projects',
    title: 'Five Originals',
    lines: [
      'SAFER-AI — AI × Blockchain cross-border payments',
      'HydroNet — Computational network simulation in Python',
      'Physics Engine — Built from scratch in pure Java',
      'Netflix Clone · Personal Portfolio Website',
    ],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: [
      'Head of Design & Decoration — Technika \'24–\'25, BIT Mesra',
      'State Level Pre-RD Camp 2024 — NSS, Patna',
    ],
  },
  {
    kicker: 'Engineering Feat',
    title: 'Java Physics Engine',
    lines: [
      'Engineered completely from scratch in Java — zero external physics libraries',
      'Custom numerical integration, rigid-body mechanics & impulse solver',
    ],
    chips: ['Java', 'Physics Engine', 'OOP'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['Blockchain · Full-Stack Development · Physics Simulation'],
  },
];

export type ProfileId = 'aditi' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'aditi',
    name: 'Aditi',
    blurb: 'The full story, in order',
    color: '#8b5cf6',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Achievements, skills & resume first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2024–2025`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
