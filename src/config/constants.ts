type developersType = {
  cep: string;
  nome: string;
  apelido: string;
  avatar: string;
  formacao: {
    escola: string;
    curso: string;
    tempo: string;
    inicio: string;
  };
  xp: {
    empresa: string;
    cargo: string;
    descricao: string[];
    stacks: string[];
  };
  hobbies: string[];
};

export const developers: developersType[] = [
  {
    cep: "05822010",
    nome: "Samantha Silva",
    apelido: "Samy",
    avatar: "https://avatars.githubusercontent.com/u/126989133?v=4",
    formacao: {
      escola: "FIAP",
      curso: "Sistema para internet",
      tempo: "4 semestres",
      inicio: "janeiro/2023",
    },
    xp: {
      empresa: "Top Internacional",
      cargo: "Coordenadora de E-commerce",
      descricao: [
        "Responsável pela gestão da plataforma",
        "Análise de tendências do mercado digital",
        "Otimização de conteúdos",
      ],
      stacks: [
        "JavaScript",
        "Jest",
        "Next.js",
        "ReactJS",
        "Styled components",
        "TypeScript",
        "sassCSS",
        "Design Systems",
        "Redux",
      ],
    },
    hobbies: [
      "Gosto de tocar violão e cantar",
      "Aulas de Dança várias modalidades",
      "Assistir séries e filmes",
    ],
  },
  
  {
    cep: "01426001",
    nome: "Mainan Moraes",
    apelido: "Mai",
    avatar: "https://avatars.githubusercontent.com/u/127128305?v=4",
    formacao: {
      escola: "FIAP",
      curso: "Sistema para internet",
      tempo: "4 semestres",
      inicio: "janeiro/2023",
    },
    xp: {
      empresa: "Clover Growth",
      cargo: "Analista de SEO",
      descricao: [
        "Design de experiência do usuário (UX)",
        "Otimização para mecanismos de busca (SEO)",
        "Skilled Multi-tasker",
      ],
      stacks: [
        "JavaScript",
        "Jest",
        "Next.js",
        "ReactJS",
        "Styled components",
        "TypeScript",
        "sassCSS",
        "Design Systems",
        "Redux",
      ],
    },
    hobbies: [
      "Gosta de escrever",
      "Participar de festivais",
      "Assistir séries e filmes",
    ],
  }
];
