import type { Locale, Project } from './types';

export const projects: Project[] = [
  {
    slug: 'mamonas-assassinas',
    year: '2026',
    cover: '/images/projects/project1/image1.png',
    gallery: ['/images/projects/project1/image1.png'],
    externalLink: 'https://www.youtube.com/watch?v=yEDYQgl5jWY',
    featured: true,
    tools: ['Blender', 'Modeling', 'Lighting', 'Texturing'],
    copy: {
      pt: {
        title: 'Mamonas Assassinas',
        category: '3D Tribute',
        description: 'Modelagem de um sÃ­mbolo da banda brasileira Mamonas Assassinas como tributo visual.',
        fullDescription:
          'Um estudo autoral em Blender que transforma um sÃ­mbolo reconhecÃ­vel da cultura pop brasileira em peÃ§a 3D com atenÃ§Ã£o a forma, textura e iluminaÃ§Ã£o.',
        objective:
          'Criar uma homenagem visual com acabamento de portfÃ³lio, preservando a forÃ§a simbÃ³lica do tema e explorando leitura rÃ¡pida em imagem estÃ¡tica e vÃ­deo.',
        process:
          'O projeto foi desenvolvido com foco em modelagem, texturizaÃ§Ã£o e iluminaÃ§Ã£o, usando uma abordagem de estÃºdio para destacar volume, materialidade e presenÃ§a.'
      },
      en: {
        title: 'Mamonas Assassinas',
        category: '3D Tribute',
        description: 'Modeling a symbol of the Brazilian band Mamonas Assassinas as a visual tribute.',
        fullDescription:
          'An authorial Blender study that turns a recognizable symbol from Brazilian pop culture into a 3D piece with attention to form, texture and lighting.',
        objective:
          'Create a polished tribute piece while preserving the symbolic strength of the subject and exploring fast readability in still and video formats.',
        process:
          'The project was developed with a focus on modeling, texturing and lighting, using a studio approach to highlight volume, materiality and presence.'
      }
    }
  },
  {
    slug: 'smartphone-promotional',
    year: '2026',
    cover: '/images/projects/project2/image1.png',
    gallery: [
      '/images/projects/project2/image1.png',
      '/images/projects/project2/image2.png',
      '/images/projects/project2/image3.png',
      '/images/projects/project2/image4.png',
      '/images/projects/project2/image5.png',
      '/images/projects/project2/image6.png'
    ],
    externalLink: 'https://www.youtube.com/watch?v=RU9mrCLpnLs',
    featured: true,
    tools: ['Blender', 'Modeling', 'Motion', 'Lighting', 'Texturing', 'Hard Surface', 'Camera'],
    copy: {
      pt: {
        title: 'Smartphone Promotional',
        category: 'Product Film / 3D',
        description: 'Modelagem de smartphone e estÃºdio virtual para uma peÃ§a comercial.',
        fullDescription:
          'Projeto de produto em 3D com linguagem publicitÃ¡ria, explorando hard surface, cÃ¢mera, iluminaÃ§Ã£o e composiÃ§Ã£o para destacar detalhes tÃ©cnicos do objeto.',
        objective:
          'Construir uma peÃ§a promocional clara e premium, capaz de apresentar o produto com ritmo, acabamento e leitura comercial.',
        process:
          'A produÃ§Ã£o combinou modelagem hard surface, criaÃ§Ã£o de ambiente de estÃºdio, texturizaÃ§Ã£o, iluminaÃ§Ã£o e decisÃµes de cÃ¢mera para gerar uma estÃ©tica limpa e fotorealista.'
      },
      en: {
        title: 'Smartphone Promotional',
        category: 'Product Film / 3D',
        description: 'Modeling a smartphone and a virtual studio for a commercial piece.',
        fullDescription:
          'A 3D product project with advertising language, exploring hard surface, camera, lighting and composition to highlight the objectâ€™s technical details.',
        objective:
          'Build a clear and premium promotional piece that presents the product with rhythm, polish and commercial readability.',
        process:
          'The production combined hard-surface modeling, virtual studio design, texturing, lighting and camera decisions to create a clean photorealistic aesthetic.'
      }
    }
  },
  {
    slug: 'light-lamp',
    year: '2026',
    cover: '/images/projects/project3/image1.png',
    gallery: ['/images/projects/project3/image1.png'],
    externalLink: 'https://www.youtube.com/watch?v=fOz2NVhnX7M&t=8s',
    featured: true,
    tools: ['Blender', 'Modeling', 'Motion', 'Lighting', 'Texturing', 'Hard Surface', 'Camera'],
    copy: {
      pt: {
        title: 'Light Lamp',
        category: '3D Animation',
        description: 'AnimaÃ§Ã£o 3D explorando a interaÃ§Ã£o entre luz, sombra, materiais e cÃ¢mera.',
        fullDescription:
          'Um estudo de animaÃ§Ã£o 3D com foco no comportamento da luz e das sombras. A peÃ§a usa uma luminÃ¡ria minimalista para investigar como material, emissÃ£o e cÃ¢mera transformam um objeto simples em experiÃªncia visual.',
        objective:
          'Explorar iluminaÃ§Ã£o dinÃ¢mica, reflexos, profundidade de campo e renderizaÃ§Ã£o para criar uma peÃ§a imersiva e visualmente precisa.',
        process:
          'A luminÃ¡ria foi modelada com ferramentas de mesh e subdivisÃ£o no Blender, recebeu shaders PBR e emissÃ£o, e foi renderizada com Cycles para simular reflexos, sombras e atmosfera.'
      },
      en: {
        title: 'Light Lamp',
        category: '3D Animation',
        description: 'A 3D animation exploring the interplay of light, shadows, materials and camera.',
        fullDescription:
          'A 3D animation study focused on the behavior of light and shadow. The piece uses a sleek minimalist lamp to explore how material, emission and camera can turn a simple object into a visual experience.',
        objective:
          'Explore dynamic lighting, reflections, depth of field and rendering to create an immersive and visually precise piece.',
        process:
          'The lamp was modeled with mesh and subdivision tools in Blender, received PBR and emission shaders, and was rendered with Cycles to simulate reflections, shadows and atmosphere.'
      }
    }
  },
  {
    slug: 'my-workspace',
    year: '2026',
    cover: '/images/projects/project4/image1.png',
    gallery: [
      '/images/projects/project4/image1.png',
      '/images/projects/project4/image2.png',
      '/images/projects/project4/image3.png',
      '/images/projects/project4/image4.png',
      '/images/projects/project4/foto-referencia.png'
    ],
    featured: true,
    tools: ['Blender', 'Hard Surface', 'Modeling', 'Texturing', 'Lighting'],
    copy: {
      pt: {
        title: 'My Workspace',
        category: 'Personal 3D Project',
        description: 'Projeto pessoal em que o workspace foi recriado em 3D.',
        fullDescription:
          'Uma reproduÃ§Ã£o autoral do espaÃ§o de trabalho, usando observaÃ§Ã£o, modelagem hard surface e iluminaÃ§Ã£o para transformar um ambiente cotidiano em uma cena 3D controlada.',
        objective:
          'Registrar o prÃ³prio ambiente criativo como peÃ§a de portfÃ³lio, testando proporÃ§Ã£o, materialidade e leitura de cena.',
        process:
          'A produÃ§Ã£o partiu de referÃªncia fotogrÃ¡fica e avanÃ§ou por modelagem, texturizaÃ§Ã£o e iluminaÃ§Ã£o, buscando equilÃ­brio entre fidelidade e direÃ§Ã£o visual.'
      },
      en: {
        title: 'My Workspace',
        category: 'Personal 3D Project',
        description: 'A personal project recreating the workspace in 3D.',
        fullDescription:
          'An authorial recreation of the workspace, using observation, hard-surface modeling and lighting to turn an everyday environment into a controlled 3D scene.',
        objective:
          'Document the creative environment as a portfolio piece while testing proportion, materiality and scene readability.',
        process:
          'The production started from photographic reference and moved through modeling, texturing and lighting, aiming for a balance between fidelity and visual direction.'
      }
    }
  },
  {
    slug: 'blue-bird',
    year: '2026',
    client: 'Unhide School',
    cover: '/images/projects/project5/image1.jpg',
    gallery: [
      '/images/projects/project5/image1.jpg',
      '/images/projects/project5/image2.jpg',
      '/images/projects/project5/image3.jpg'
    ],
    tools: ['Maya 3D', 'Substance Painter', 'Texturing', 'Photorealistic'],
    copy: {
      pt: {
        title: 'Blue Bird',
        category: 'Texturing Study',
        description: 'Projeto da Unhide School voltado ao aprimoramento de texturizaÃ§Ã£o no Substance Painter.',
        fullDescription:
          'Um estudo focado em textura, materiais e acabamento fotorealista, desenvolvido para evoluir a leitura de superfÃ­cie e a construÃ§Ã£o de detalhe visual.',
        objective:
          'Aprimorar habilidades de texturizaÃ§Ã£o e lookdev, criando uma peÃ§a com materialidade convincente e boa leitura de iluminaÃ§Ã£o.',
        process:
          'O trabalho combinou Maya 3D e Substance Painter para organizar o modelo, criar texturas e refinar o acabamento visual.'
      },
      en: {
        title: 'Blue Bird',
        category: 'Texturing Study',
        description: 'An Unhide School project focused on leveling up texturing skills in Substance Painter.',
        fullDescription:
          'A study focused on texture, materials and photorealistic finishing, created to improve surface readability and visual detail construction.',
        objective:
          'Improve texturing and lookdev skills by creating a piece with convincing materiality and strong lighting readability.',
        process:
          'The work combined Maya 3D and Substance Painter to organize the model, build textures and refine the final visual finish.'
      }
    }
  },
  {
    slug: 'broadcast-3d',
    year: '2026',
    cover: '/images/projects/project6/image1.png',
    gallery: ['/images/projects/project6/image1.png'],
    externalLink: 'https://www.youtube.com/watch?v=sizqZ8lwlYM',
    tools: ['Cinema 4D', 'After Effects', 'Modeling', 'Motion', 'Lighting', 'Texturing', 'Hard Surface', 'Camera'],
    copy: {
      pt: {
        title: 'Broadcast 3D',
        category: 'Broadcast Motion',
        description: 'Modelagem, texturizaÃ§Ã£o, animaÃ§Ã£o e iluminaÃ§Ã£o em Cinema 4D, com composiÃ§Ã£o no After Effects.',
        fullDescription:
          'Projeto com linguagem de broadcast e motion 3D, combinando elementos tÃ©cnicos de modelagem, animaÃ§Ã£o, iluminaÃ§Ã£o e composiÃ§Ã£o para uma entrega audiovisual dinÃ¢mica.',
        objective:
          'Criar uma peÃ§a de motion com ritmo, acabamento tÃ©cnico e potencial de aplicaÃ§Ã£o em identidades visuais para telas e transmissÃ£o.',
        process:
          'A base foi produzida no Cinema 4D, passando por modelagem, textura, cÃ¢mera e iluminaÃ§Ã£o. A composiÃ§Ã£o e o acabamento foram feitos no After Effects.'
      },
      en: {
        title: 'Broadcast 3D',
        category: 'Broadcast Motion',
        description: 'Modeling, texturing, animation and lighting in Cinema 4D, with compositing in After Effects.',
        fullDescription:
          'A broadcast-oriented 3D motion project, combining modeling, animation, lighting and compositing for a dynamic audiovisual delivery.',
        objective:
          'Create a motion piece with rhythm, technical finish and potential application in screen and broadcast identities.',
        process:
          'The base was produced in Cinema 4D, moving through modeling, texture, camera and lighting. Compositing and finishing were handled in After Effects.'
      }
    }
  }
];

export function getCopy(project: Project, locale: Locale) {
  return project.copy[locale];
}

export function getHomeProjects(limit = 3) {
  const featured = projects.filter((project) => project.featured);
  return (featured.length ? featured : projects).slice(0, limit);
}
