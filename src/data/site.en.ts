import type { SiteCopy } from './types';

const whatsapp = encodeURIComponent(
  'OlÃ¡, Eder! Vi o portfÃ³lio do !bakelab e gostaria de conversar sobre um projeto.'
);

export const siteEn: SiteCopy = {
  locale: 'en',
  lang: 'en',
  basePath: '/en',
  projectPath: '/en/projects',
  alternateHome: '/pt',
  seo: {
    title: '!bakelab â€” 3D, Motion Design & AI Filmmaking',
    description:
      'Creative studio by Eder Azevedo focused on 3D, motion design, audiovisual production and AI filmmaking, transforming complex ideas into impactful visual experiences.',
    image: '/images/logos/logo-claro.png'
  },
  nav: [
    { label: 'Home', href: '/en' },
    { label: 'Projects', href: '/en/projects' },
    { label: 'About', href: '/en#about' },
    { label: 'Services', href: '/en#services' },
    { label: 'Contact', href: '/en#contact' }
  ],
  labels: {
    language: 'Mudar para portuguÃªs',
    menu: 'Open menu',
    close: 'Close menu',
    viewProjects: 'View projects',
    viewAllProjects: 'View all projects',
    contact: 'Get in touch',
    openProject: 'Explore case',
    back: 'Back to projects',
    external: 'Open video',
    gallery: 'Gallery',
    tools: 'Tools',
    processVideo: 'Process timelapse'
  },
  hero: {
    kicker: 'Creative 3D & Motion Designer',
    title: '!bakelab',
    subtitle: 'Transforming complexity into visual impact.',
    description:
      'Creative studio focused on 3D, motion, audiovisual production and AI filmmaking for brands, campaigns and digital narratives.',
    location: 'Valinhos â€” SÃ£o Paulo, Brazil'
  },
  about: {
    title: 'Visual direction for projects that need to feel inevitable.',
    paragraphs: [
      '!bakelab is a creative studio focused on audiovisual production, 3D and motion design, specialized in transforming complex ideas into clear, impactful and contemporary visual experiences.',
      'Eder Azevedo is a designer with over 8 years of experience in advertising design and a postgraduate background in digital game development. His work combines technique, creative direction and emerging technologies.',
      'Leading !bakelab, he develops projects that move between creative chaos and technical precision, also exploring artificial intelligence in filmmaking to create efficient and visually striking narratives.'
    ],
    metrics: [
      { value: '8+', label: 'years in advertising' },
      { value: '06', label: 'initial cases' },
      { value: '3D', label: 'motion, film and AI' }
    ]
  },
  services: {
    title: 'Studio-grade craft with campaign thinking.',
    intro: 'A focused set of deliverables to transform a brief into premium imagery.',
    items: [
      { title: '3D Animation', description: 'Modeling, lookdev, lighting and animation for products, symbols and scenes.' },
      { title: 'Motion Design', description: 'Moving visual systems for brands, screens and narratives.' },
      { title: 'Audiovisual', description: 'Visual direction, editing, compositing and cinematic post-production.' },
      { title: 'AI Filmmaking', description: 'Hybrid exploration and production with AI applied to the creative workflow.' },
      { title: 'Advertising Films', description: 'Short-form pieces for launches, campaigns and digital presence.' },
      { title: 'Motion Identity', description: 'Visual identity with rhythm, texture, camera and audiovisual presence.' }
    ]
  },
  projects: {
    title: 'Selected projects',
    intro: 'Three fast reads on the home page. The full archive lives on a dedicated page.',
    archiveTitle: 'Project archive',
    archiveIntro: 'All available studio materials, organized to grow without refactoring the layout.'
  },
  process: {
    title: 'Laboratory process, cinematic delivery.',
    intro:
      'Research, visual direction, technical experimentation and finishing craft share the same workflow to reach the right frame.',
    steps: [
      { title: 'Diagnosis', text: 'Objective, audience, brand context and constraints are translated into visual direction.' },
      { title: 'Exploration', text: 'Form, camera, light, movement and AI go through fast tests until the image gains strength.' },
      { title: 'Production', text: 'Modeling, animation, compositing, editing and post with attention to final impact.' },
      { title: 'Delivery', text: 'Files prepared for campaign, social, film, presentation or portfolio use.' }
    ],
    videoText:
      'The timelapse acts as a process record: visible for those who want to investigate, light for those who just want to browse.'
  },
  stack: {
    title: 'Creative stack',
    items: ['Blender', 'Cinema 4D', 'After Effects', 'DaVinci Resolve', 'Nuke', 'Photoshop', 'Premiere', 'ComfyUI', 'Seedance 2', 'VEO3', 'Nano Banana', 'Grok Image']
  },
  differentials: {
    title: 'Between creative chaos and technical precision.',
    items: [
      'Strong technical command of 3D and motion',
      'Integration between creativity and technology',
      'Solid advertising experience',
      'Translating complex ideas into clear visuals',
      'Authorial aesthetic with an experimental approach',
      'Hybrid vision between design, cinema and technology',
      'Strategic use of artificial intelligence'
    ]
  },
  contact: {
    title: 'A direct conversation is usually the best brief.',
    text: 'No form. Just the right channels to start.',
    links: [
      { label: 'Instagram', value: '@bakelab.obj', href: 'https://www.instagram.com/bakelab.obj' },
      { label: 'LinkedIn', value: 'ed-azevedo', href: 'https://www.linkedin.com/in/ed-azevedo' },
      { label: 'Email', value: 'Bakelab.obj@gmail.com', href: 'mailto:Bakelab.obj@gmail.com' },
      { label: 'WhatsApp', value: '+55 19 93505-8730', href: `https://wa.me/5519935058730?text=${whatsapp}` }
    ]
  },
  footer: {
    line: '3D / Motion / Audiovisual / AI Filmmaking',
    location: 'Valinhos â€” SÃ£o Paulo, Brazil'
  }
};
