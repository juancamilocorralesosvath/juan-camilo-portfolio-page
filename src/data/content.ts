import photoHero from '../assets/images/photo-hero.jpg';
import pastoralLandingDesktop from '../assets/images/pastoral-landing-desktop.jpg';
import pastoralDashboardDesktop from '../assets/images/pastoral-dashboard-desktop.jpg';
import pastoralMobileHome from '../assets/images/pastoral-mobile-home.jpg';
import pastoralMobileCourse from '../assets/images/pastoral-mobile-course.jpg';
import projectGym from '../assets/images/project-gym.jpg';
import projectHar from '../assets/images/project-har.jpg';
import craftAppleStyle from '../assets/images/craft-apple-style.jpg';
import craftCoinpulse from '../assets/images/craft-coinpulse.jpg';

export const CV_URL = '/cv/cv-juan-osvath-en.pdf';

export const EMAIL = 'juancorralesosvath@gmail.com';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/juan-osvath-frontend-react-nextjs/';
export const GITHUB_URL = 'https://github.com/juancamilocorralesosvath';

export const images = {
  photoHero,
  pastoralLandingDesktop,
  pastoralDashboardDesktop,
  pastoralMobileHome,
  pastoralMobileCourse,
};

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Work', href: '#work' },
  { label: 'Craft', href: '#craft' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
];

export const hero = {
  badge: 'Open to remote work',
  nameLine1: 'Juan Camilo',
  nameLine2: 'Corrales Osvath',
  role: 'Software Engineer & Product Builder',
  position:
    'I take products from zero to production. One is live on Google Play. I also lead teams, negotiate with vendors and manage budgets.',
  credential: {
    eyebrow: 'ICESI · Cali',
    text: "Software Engineering. Dean's List every semester.",
  },
};

export const featured = {
  label: 'Featured product',
  badge: 'Live on Google Play',
  title: 'PastoralApp',
  lead: 'A platform for religious communities to organize their processes and follow the formation of every member.',
  definitions: [
    { term: 'Role', detail: 'Co-founder. I built the frontend and the backend, end to end.' },
    { term: 'With my partner', detail: 'Brand, logo and business model, defined together.' },
  ],
  stackLabel: 'Stack',
  stack: ['React', 'JavaScript', 'Node.js'],
  ctaLabel: 'Visit pastoralapp.io',
  ctaHref: 'https://www.pastoralapp.io/',
};

export interface IndexItem {
  id: string;
  number: string;
  title: string;
  meta: string;
  href: string;
  previewImage: string;
}

export const selectedWork = {
  label: 'Selected work',
  titlePrefix: 'Built to be ',
  titleAccent: 'used',
  titleSuffix: '.',
  sub: 'Two projects, from the first requirement to a working product. Hover a title to preview it.',
  items: [
    {
      id: 'gym',
      number: '01',
      title: 'Gym Management Web App',
      meta: 'Next.js · Zustand · NestJS',
      href: 'https://gym-mvp-front.vercel.app/',
      previewImage: projectGym,
    },
    {
      id: 'har',
      number: '02',
      title: 'Human Activity Recognition',
      meta: 'Label Studio · EDA · validation',
      href: 'https://har-project-fj2u.onrender.com/',
      previewImage: projectHar,
    },
  ] satisfies IndexItem[],
};

export const craft = {
  label: 'Craft',
  titlePrefix: 'Interface ',
  titleAccent: 'experiments',
  titleSuffix: '',
  sub: 'Exercises, not products. I rebuild interfaces I admire to practise the details. Both are live — hover to preview, click to open.',
  items: [
    {
      id: 'apple-style',
      number: '01',
      title: 'Apple-style product page',
      meta: 'tubular-dasik-0cb64e.netlify.app',
      href: 'https://tubular-dasik-0cb64e.netlify.app/',
      previewImage: craftAppleStyle,
    },
    {
      id: 'coinpulse',
      number: '02',
      title: 'CoinPulse',
      meta: 'coinpulse-sandy.vercel.app',
      href: 'https://coinpulse-sandy.vercel.app/',
      previewImage: craftCoinpulse,
    },
  ] satisfies IndexItem[],
};

export interface ExperienceEntry {
  date: string;
  role: string;
  company: string;
  bullets: string[];
  current: boolean;
}

export const experienceHeader = {
  label: 'Experience',
  titlePrefix: "Where I've ",
  titleAccent: 'worked',
  titleSuffix: '.',
};

export const experience: ExperienceEntry[] = [
  {
    date: 'Aug 2025 – Aug 2026',
    role: 'Junior Software Developer',
    company: 'Adenium CST',
    current: false,
    bullets: [
      'Worked in a production codebase under the mentorship of a senior team.',
      'Built and refactored components and modules.',
      'Fixed bugs reported by QA and wrote unit tests to prevent regressions.',
      'Used Git branching and pull requests, and documented what I shipped.',
      'Took part in Scrum ceremonies and code reviews.',
    ],
  },
  {
    date: 'Feb 2021 – Aug 2021',
    role: 'Full-Stack Developer',
    company: 'DataHome',
    current: false,
    bullets: [
      'Built frontend in React and TypeScript and endpoints in Python, with a remote team.',
      'Improved the UI/UX of 3 key modules.',
      'Delivered 10 features and refactored legacy code.',
    ],
  },
  {
    date: '2025 – Present',
    role: 'Leader',
    company: 'University Catholic Movement',
    current: true,
    bullets: [
      'Lead a university group for a year and direct its work teams.',
      'Plan and run retreats and events for 50–100 people.',
      'Negotiate with venue providers and control budgets and costs.',
    ],
  },
];

export const about = {
  label: 'About',
  titlePrefix: 'Clean code, ',
  titleAccent: 'shipped',
  titleSuffix: '.',
  paragraphs: [
    "I'm a Software Engineering student at ICESI in Cali, and I've made the Dean's List every semester. I care about code that reads well: Clean Code and SOLID are how I work, not items on a checklist. I also care about what the code is for. I took my own product from zero to Google Play, and I've worked inside a production codebase under a senior team.",
    "Away from the editor, I lead a university group. I direct teams, plan events for up to 100 people, negotiate with vendors and answer for the budget. It taught me ownership, and I bring it to every project.",
  ],
  education: "B.Sc. Software Engineering, ICESI. Dean's List every semester.",
};

export const stackLabel = 'Stack';

export interface StackGroup {
  label: string;
  items: string[];
}

export const stackGroups: StackGroup[] = [
  { label: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Scala'] },
  { label: 'Backend', items: ['Node.js', 'NestJS', 'REST APIs', 'ORMs'] },
  { label: 'Frontend', items: ['React', 'Next.js'] },
  { label: 'Data', items: ['PostgreSQL', 'MongoDB', 'SQL'] },
  { label: 'Tools', items: ['Git/GitHub', 'Docker', 'Postman', 'Unit testing', 'Agile/Scrum'] },
  { label: 'Spoken', items: ['Spanish (native)', 'English (C2)'] },
];

export const contact = {
  label: 'Contact',
  titlePrefix: 'Have a role in mind? ',
  titleAccent: "Let's talk.",
  availability: {
    label: 'Availability',
    location: 'Cali, Colombia',
    note: "Open to remote work. I'm on GMT-5, so my day lines up with US hours and overlaps with Europe's afternoon.",
  },
  footer: '© 2026 Juan Camilo Corrales Osvath',
};
