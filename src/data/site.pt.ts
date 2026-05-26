import type { SiteCopy } from './types';

const whatsapp = encodeURIComponent(
  'Olá, Eder! Vi o portfólio do !bakelab e gostaria de conversar sobre um projeto.'
);

export const sitePt: SiteCopy = {
  locale: 'pt',
  lang: 'pt-BR',
  basePath: '/pt',
  projectPath: '/pt/projetos',
  alternateHome: '/en',
  seo: {
    title: '!bakelab — 3D, Motion Design & AI Filmmaking',
    description:
      'Estúdio criativo de Eder Azevedo focado em 3D, motion design, audiovisual e AI filmmaking, transformando ideias complexas em experiências visuais de impacto.',
    image: '/images/logos/logo-claro.png'
  },
  nav: [
    { label: 'Início', href: '/pt' },
    { label: 'Projetos', href: '/pt/projetos' },
    { label: 'Sobre', href: '/pt#sobre' },
    { label: 'Serviços', href: '/pt#servicos' },
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
    external: 'Abrir vídeo',
    gallery: 'Galeria',
    tools: 'Ferramentas',
    processVideo: 'Timelapse do processo'
  },
  hero: {
    kicker: 'Creative 3D & Motion Designer',
    title: '!bakelab',
    subtitle: 'Transformamos ideias complexas em experiências visuais de impacto.',
    description:
      'Estúdio criativo focado em 3D, motion, audiovisual e AI filmmaking para marcas, campanhas e narrativas digitais.',
    location: 'Valinhos — São Paulo, Brasil'
  },
  about: {
    title: 'Direção visual para projetos que precisam parecer inevitáveis.',
    paragraphs: [
      'O !bakelab é um estúdio criativo focado em audiovisual, 3D e motion design, especializado em transformar ideias complexas em experiências visuais claras, impactantes e contemporâneas.',
      'Eder Azevedo é designer com mais de 8 anos de experiência em design publicitário e pós-graduação em desenvolvimento de jogos digitais. Sua atuação combina técnica, direção criativa e novas tecnologias.',
      'À frente do !bakelab, desenvolve projetos que transitam entre o caos criativo e a precisão técnica, explorando também inteligência artificial no filmmaking para criar narrativas eficientes e visualmente marcantes.'
    ],
    metrics: [
      { value: '8+', label: 'anos em publicidade' },
      { value: '06', label: 'cases iniciais' },
      { value: '3D', label: 'motion, filme e IA' }
    ]
  },
  services: {
    title: 'Serviços com acabamento de estúdio e pensamento de campanha.',
    intro: 'Um conjunto enxuto de entregas para transformar briefing em imagem premium.',
    items: [
      { title: 'Animação 3D', description: 'Modelagem, lookdev, luz e animação para produtos, símbolos e cenas.' },
      { title: 'Motion Design', description: 'Sistemas visuais em movimento para marcas, telas e narrativas.' },
      { title: 'Audiovisual', description: 'Direção visual, edição, composição e pós-produção cinematográfica.' },
      { title: 'AI Filmmaking', description: 'Exploração e produção híbrida com IA aplicada ao processo criativo.' },
      { title: 'Filmes publicitários', description: 'Peças curtas para lançamentos, campanhas e presença digital.' },
      { title: 'Motion Identity', description: 'Identidade visual com ritmo, textura, câmera e presença audiovisual.' }
    ]
  },
  projects: {
    title: 'Projetos selecionados',
    intro: 'Três recortes para leitura rápida na home. O acervo completo fica em uma página dedicada.',
    archiveTitle: 'Arquivo de projetos',
    archiveIntro: 'Todos os trabalhos disponíveis nos materiais do estúdio, organizados para crescer sem refatorar o layout.'
  },
  process: {
    title: 'Processo de laboratório, entrega de cinema.',
    intro:
      'Pesquisa, direção visual, experimentação técnica e refinamento convivem no mesmo fluxo para chegar ao frame certo.',
    steps: [
      { title: 'Diagnóstico', text: 'Objetivo, audiência, contexto de marca e restrições são traduzidos em direção visual.' },
      { title: 'Exploração', text: 'Forma, câmera, luz, movimento e IA entram em testes rápidos até a imagem ganhar força.' },
      { title: 'Produção', text: 'Modelagem, animação, composição, edição e pós com atenção ao impacto final.' },
      { title: 'Entrega', text: 'Arquivos preparados para campanha, social, filme, apresentação ou portfólio.' }
    ],
    videoText:
      'O timelapse funciona como registro do processo criativo: visível para quem quer investigar, leve para quem só quer navegar.'
  },
  stack: {
    title: 'Stack criativa',
    items: ['Blender', 'Cinema 4D', 'After Effects', 'DaVinci Resolve', 'Nuke', 'Photoshop', 'Premiere', 'ComfyUI', 'Seedance 2', 'VEO3', 'Nano Banana', 'Grok Image']
  },
  differentials: {
    title: 'Entre o caos criativo e a precisão técnica.',
    items: [
      'Forte domínio técnico em 3D e motion',
      'Integração entre criatividade e tecnologia',
      'Experiência sólida em publicidade',
      'Tradução de ideias complexas em soluções visuais claras',
      'Estética autoral com abordagem experimental',
      'Visão híbrida entre design, cinema e tecnologia',
      'Uso estratégico de inteligência artificial'
    ]
  },
  contact: {
    title: 'Uma conversa direta costuma ser o melhor briefing.',
    text: 'Sem formulário. Só os canais certos para começar.',
    links: [
      { label: 'Instagram', value: '@bakelab.obj', href: 'https://www.instagram.com/bakelab.obj' },
      { label: 'LinkedIn', value: 'ed-azevedo', href: 'https://www.linkedin.com/in/ed-azevedo' },
      { label: 'E-mail', value: 'Bakelab.obj@gmail.com', href: 'mailto:Bakelab.obj@gmail.com' },
      { label: 'WhatsApp', value: '+55 19 93505-8730', href: `https://wa.me/5519935058730?text=${whatsapp}` }
    ]
  },
  footer: {
    line: '3D / Motion / Audiovisual / AI Filmmaking',
    location: 'Valinhos — São Paulo, Brasil'
  }
};
