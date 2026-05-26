import type { SiteCopy } from './types';

const whatsapp = encodeURIComponent(
  'OlÃ¡, Eder! Vi o portfÃ³lio do !bakelab e gostaria de conversar sobre um projeto.'
);

export const sitePt: SiteCopy = {
  locale: 'pt',
  lang: 'pt-BR',
  basePath: '/pt',
  projectPath: '/pt/projetos',
  alternateHome: '/en',
  seo: {
    title: '!bakelab â€” 3D, Motion Design & AI Filmmaking',
    description:
      'EstÃºdio criativo de Eder Azevedo focado em 3D, motion design, audiovisual e AI filmmaking, transformando ideias complexas em experiÃªncias visuais de impacto.',
    image: '/images/logos/logo-claro.png'
  },
  nav: [
    { label: 'InÃ­cio', href: '/pt' },
    { label: 'Projetos', href: '/pt/projetos' },
    { label: 'Sobre', href: '/pt#sobre' },
    { label: 'ServiÃ§os', href: '/pt#servicos' },
    { label: 'Contato', href: '/pt#contato' }
  ],
  labels: {
    language: 'Change to English',
    menu: 'Abrir menu',
    close: 'Fechar menu',
    viewProjects: 'Ver projetos',
    viewAllProjects: 'Ver todos os projetos',
    contact: 'Entrar em contato',
    openProject: 'Explorar caso',
    back: 'Voltar aos projetos',
    external: 'Abrir vÃ­deo',
    gallery: 'Galeria',
    tools: 'Ferramentas',
    processVideo: 'Timelapse do processo'
  },
  hero: {
    kicker: 'Creative 3D & Motion Designer',
    title: '!bakelab',
    subtitle: 'Transformamos ideias complexas em experiÃªncias visuais de impacto.',
    description:
      'EstÃºdio criativo focado em 3D, motion, audiovisual e AI filmmaking para marcas, campanhas e narrativas digitais.',
    location: 'Valinhos â€” SÃ£o Paulo, Brasil'
  },
  about: {
    title: 'DireÃ§Ã£o visual para projetos que precisam parecer inevitÃ¡veis.',
    paragraphs: [
      'O !bakelab Ã© um estÃºdio criativo focado em audiovisual, 3D e motion design, especializado em transformar ideias complexas em experiÃªncias visuais claras, impactantes e contemporÃ¢neas.',
      'Eder Azevedo Ã© designer com mais de 8 anos de experiÃªncia em design publicitÃ¡rio e pÃ³s-graduaÃ§Ã£o em desenvolvimento de jogos digitais. Sua atuaÃ§Ã£o combina tÃ©cnica, direÃ§Ã£o criativa e novas tecnologias.',
      'Ã€ frente do !bakelab, desenvolve projetos que transitam entre o caos criativo e a precisÃ£o tÃ©cnica, explorando tambÃ©m inteligÃªncia artificial no filmmaking para criar narrativas eficientes e visualmente marcantes.'
    ],
    metrics: [
      { value: '8+', label: 'anos em publicidade' },
      { value: '06', label: 'cases iniciais' },
      { value: '3D', label: 'motion, filme e IA' }
    ]
  },
  services: {
    title: 'ServiÃ§os com acabamento de estÃºdio e pensamento de campanha.',
    intro: 'Um conjunto enxuto de entregas para transformar briefing em imagem premium.',
    items: [
      { title: 'AnimaÃ§Ã£o 3D', description: 'Modelagem, lookdev, luz e animaÃ§Ã£o para produtos, sÃ­mbolos e cenas.' },
      { title: 'Motion Design', description: 'Sistemas visuais em movimento para marcas, telas e narrativas.' },
      { title: 'Audiovisual', description: 'DireÃ§Ã£o visual, ediÃ§Ã£o, composiÃ§Ã£o e pÃ³s-produÃ§Ã£o cinematogrÃ¡fica.' },
      { title: 'AI Filmmaking', description: 'ExploraÃ§Ã£o e produÃ§Ã£o hÃ­brida com IA aplicada ao processo criativo.' },
      { title: 'Filmes publicitÃ¡rios', description: 'PeÃ§as curtas para lanÃ§amentos, campanhas e presenÃ§a digital.' },
      { title: 'Motion Identity', description: 'Identidade visual com ritmo, textura, cÃ¢mera e presenÃ§a audiovisual.' }
    ]
  },
  projects: {
    title: 'Projetos selecionados',
    intro: 'TrÃªs recortes para leitura rÃ¡pida na home. O acervo completo fica em uma pÃ¡gina dedicada.',
    archiveTitle: 'Arquivo de projetos',
    archiveIntro: 'Todos os trabalhos disponÃ­veis nos materiais do estÃºdio, organizados para crescer sem refatorar o layout.'
  },
  process: {
    title: 'Processo de laboratÃ³rio, entrega de cinema.',
    intro:
      'Pesquisa, direÃ§Ã£o visual, experimentaÃ§Ã£o tÃ©cnica e refinamento convivem no mesmo fluxo para chegar ao frame certo.',
    steps: [
      { title: 'DiagnÃ³stico', text: 'Objetivo, audiÃªncia, contexto de marca e restriÃ§Ãµes sÃ£o traduzidos em direÃ§Ã£o visual.' },
      { title: 'ExploraÃ§Ã£o', text: 'Forma, cÃ¢mera, luz, movimento e IA entram em testes rÃ¡pidos atÃ© a imagem ganhar forÃ§a.' },
      { title: 'ProduÃ§Ã£o', text: 'Modelagem, animaÃ§Ã£o, composiÃ§Ã£o, ediÃ§Ã£o e pÃ³s com atenÃ§Ã£o ao impacto final.' },
      { title: 'Entrega', text: 'Arquivos preparados para campanha, social, filme, apresentaÃ§Ã£o ou portfÃ³lio.' }
    ],
    videoText:
      'O timelapse funciona como registro do processo criativo: visÃ­vel para quem quer investigar, leve para quem sÃ³ quer navegar.'
  },
  stack: {
    title: 'Stack criativa',
    items: ['Blender', 'Cinema 4D', 'After Effects', 'DaVinci Resolve', 'Nuke', 'Photoshop', 'Premiere', 'ComfyUI', 'Seedance 2', 'VEO3', 'Nano Banana', 'Grok Image']
  },
  differentials: {
    title: 'Entre o caos criativo e a precisÃ£o tÃ©cnica.',
    items: [
      'Forte domÃ­nio tÃ©cnico em 3D e motion',
      'IntegraÃ§Ã£o entre criatividade e tecnologia',
      'ExperiÃªncia sÃ³lida em publicidade',
      'TraduÃ§Ã£o de ideias complexas em soluÃ§Ãµes visuais claras',
      'EstÃ©tica autoral com abordagem experimental',
      'VisÃ£o hÃ­brida entre design, cinema e tecnologia',
      'Uso estratÃ©gico de inteligÃªncia artificial'
    ]
  },
  contact: {
    title: 'Uma conversa direta costuma ser o melhor briefing.',
    text: 'Sem formulÃ¡rio. SÃ³ os canais certos para comeÃ§ar.',
    links: [
      { label: 'Instagram', value: '@bakelab.obj', href: 'https://www.instagram.com/bakelab.obj' },
      { label: 'LinkedIn', value: 'ed-azevedo', href: 'https://www.linkedin.com/in/ed-azevedo' },
      { label: 'E-mail', value: 'Bakelab.obj@gmail.com', href: 'mailto:Bakelab.obj@gmail.com' },
      { label: 'WhatsApp', value: '+55 19 93505-8730', href: `https://wa.me/5519935058730?text=${whatsapp}` }
    ]
  },
  footer: {
    line: '3D / Motion / Audiovisual / AI Filmmaking',
    location: 'Valinhos â€” SÃ£o Paulo, Brasil'
  }
};
