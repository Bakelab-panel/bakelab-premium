export type Locale = 'pt' | 'en';

export type SiteCopy = {
  locale: Locale;
  lang: string;
  basePath: string;
  projectPath: string;
  alternateHome: string;
  seo: {
    title: string;
    description: string;
    image: string;
  };
  nav: Array<{ label: string; href: string }>;
  labels: {
    language: string;
    menu: string;
    close: string;
    viewProjects: string;
    viewAllProjects: string;
    contact: string;
    openProject: string;
    back: string;
    external: string;
    gallery: string;
    tools: string;
    processVideo: string;
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    description: string;
    location: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    metrics: Array<{ value: string; label: string }>;
  };
  services: {
    title: string;
    intro: string;
    items: Array<{ title: string; description: string }>;
  };
  projects: {
    title: string;
    intro: string;
    archiveTitle: string;
    archiveIntro: string;
  };
  process: {
    title: string;
    intro: string;
    steps: Array<{ title: string; text: string }>;
    videoText: string;
  };
  stack: {
    title: string;
    items: string[];
  };
  differentials: {
    title: string;
    items: string[];
  };
  contact: {
    title: string;
    text: string;
    links: Array<{ label: string; value: string; href: string }>;
  };
  footer: {
    line: string;
    location: string;
  };
};

export type ProjectCopy = {
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  objective: string;
  process: string;
};

export type Project = {
  slug: string;
  year?: string;
  client?: string;
  cover?: string;
  gallery: string[];
  externalLink?: string;
  featured?: boolean;
  tools: string[];
  copy: Record<Locale, ProjectCopy>;
};
