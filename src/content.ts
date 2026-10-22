/**
 * Arquivo de configuração e conteúdo centralizado da Landing Page.
 * Todas as fotos, textos, preços e links podem ser facilmente editados aqui.
 */

export interface MenuItem {
  title: string;
  image: string;
  description?: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  image: string;
}

export interface TestimonialItem {
  id: number;
  text: string;
  name: string;
  role: string;
  avatar: string;
}

export interface BonusItem {
  number: number;
  title: string;
  description: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const SITE_CONTENT = {
  // Links Principais
  checkoutUrl: "https://pay.hotmart.com/exemplo-checkout?checkoutMode=10", // Substitua pelo link real de checkout

  // Preços e Oferta
  pricing: {
    originalPrice: "R$ 97,00",
    currentPrice: "R$ 29,90",
    paymentType: "Pagamento único • Acesso Vitalício",
    badge: "OFERTA ESPECIAL POR TEMPO LIMITADO!",
    guaranteeDays: 7,
  },

  // 1) Barra Superior
  topBar: {
    text: "CONQUISTE A SUA LIBERDADE NA COZINHA",
  },

  // 2) Hero Section
  hero: {
    titlePrefix: "CHEGA DE ",
    titleHighlight1: "PERDER",
    titleMiddle: " ",
    titleHighlight2: "HORAS",
    titleSuffix: " NA COZINHA!",
    leadText: "Descubra 120 receitas saudáveis e equilibradas, fáceis, rápidas, prontas para preparar e perfeitas para congelar.",
    subText: "Com o Método Freezer Inteligente, você terá refeições prontas em poucos minutos — sem estresse e sempre saudáveis.",
    ctaText: "QUERO AS MINHAS RECEITAS AGORA →",
    seals: [
      { text: "COMPRA SEGURA", icon: "shield" },
      { text: "GARANTIA DE 7 DIAS", icon: "calendar" },
      { text: "ACESSO VITALÍCIO", icon: "zap" },
    ],
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Nutricionista Amanda Gama na cozinha moderna com marmitas saudáveis preparadas",
    badgeLabel: "CONTEÚDO",
    badgeValue: "120+ Receitas Saudáveis",
  },

  // 3) Seção Dor
  painSection: {
    title: "Você está presa nesse ciclo?",
    pains: [
      "Pia cheia de louça suja todos os dias",
      "Chega exausta do trabalho e ainda tem que decidir o jantar",
      "Vive refém do delivery gastando mais do que deveria",
      "Passa mais tempo na cozinha do que aproveitando a família",
      "Quer comer bem, mas não tem tempo para cozinhar sempre",
    ],
    quote: "Isso não é normal. Mas existe uma solução. Você merece uma rotina mais leve, com comida de verdade, sem ser refém da cozinha.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Amanda Gama sorrindo com refeição saudável e potes organizados",
  },

  // 4) O que você vai encontrar nesse livro
  features: {
    title: "O QUE VOCÊ VAI ENCONTRAR NESSE LIVRO?",
    subtitle: "Um sistema completo para transformar a sua relação com a cozinha.",
    ctaText: "QUERO O MEU LIVRO AGORA!",
    items: [
      {
        icon: "chef-hat",
        title: "Mais de 120 receitas saudáveis",
        description: "Pratos feitos para serem congelados sem perder o sabor, consistência ou valor nutricional.",
      },
      {
        icon: "calendar",
        title: "Tabela de calorias e macros",
        description: "Todas as porções com macronutrientes calculados para facilitar a sua dieta.",
      },
      {
        icon: "snowflake",
        title: "Método Freezer Inteligente",
        description: "Técnicas de planejamento e congelamento sem desperdício.",
      },
      {
        icon: "heart",
        title: "Receitas sinalizadas",
        description: "Opções sem glúten e sem lactose já identificadas para facilitar a sua vida.",
      },
      {
        icon: "utensils",
        title: "Guia de utensílios",
        description: "Dicas sobre embalagens e recipientes ideais para cada tipo de alimento.",
      },
      {
        icon: "zap",
        title: "Receitas para qualquer momento",
        description: "Carne, frango, peixe, acompanhamentos, sopas, lanches e muito mais.",
      },
    ],
  },

  // 5) Bônus Chef IA
  aiChef: {
    badge: "BÔNUS EXCLUSIVO: CHEF IA",
    title: "O QUE VOCÊ TEM NA SUA GELADEIRA?",
    subtitle: "Insira os ingredientes que você tem e nossa IA criará uma receita perfeita para o seu freezer.",
    inputPlaceholder: "Ex: Frango, batata, espinafre...",
    ctaText: "QUERO AS 120 RECEITAS COMPLETAS",
  },

  // 6) Método
  method: {
    titlePrefix: "MUITO MAIS QUE RECEITAS: ",
    titleSuffix: "um Método para transformar a sua rotina!",
    steps: [
      {
        icon: "zap",
        text: "ORGANIZAR E PORCIONAR",
      },
      {
        icon: "heart",
        text: "PRESERVAR SABOR E CONSISTÊNCIA",
      },
      {
        icon: "snowflake",
        text: "EVITAR QUEIMADURAS DE GELO",
      },
      {
        icon: "utensils",
        text: "DESCONGELAR CORRETAMENTE",
      },
    ],
  },

  // 7) 8 Menus Exclusivos
  menus: {
    title: "8 MENUS EXCLUSIVOS PARA A SUA SEMANA",
    disclaimer: "Esta é a sua ÚLTIMA CHANCE de garantir o seu acesso com desconto!",
    ctaText: "QUERO ESSAS RECEITAS!",
    items: [
      {
        title: "Berinjela à parmegiana",
        image: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Minestrone de legumes",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Risoto de cogumelos",
        image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Espaguete integral ao molho de tomate",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Frango ao molho com tomates e azeitonas",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Salada caprese",
        image: "https://images.unsplash.com/photo-1592417817098-8f3d69109853?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Salmão grelhado com legumes coloridos e molho de iogurte",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Torradas integrais com abacate, ovo pochê e frutas vermelhas",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
      },
    ] as MenuItem[],
  },

  // 8) Benefícios com Foto de Fundo
  benefits: {
    title: "BENEFÍCIOS GARANTIDOS COM ACESSO VITALÍCIO!",
    items: [
      {
        title: "Mais tempo para você!",
        description: "Freezer sempre pronto com opções saudáveis e deliciosas.",
        image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=800&q=80", // sopa cremosa
      },
      {
        title: "Rotina organizada",
        description: "Sem estresse! Chega de indecisão sobre o que cozinhar de última hora.",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80", // planner/agenda
      },
      {
        title: "Economia real!",
        description: "Planeje melhor, evite desperdícios e gaste menos no supermercado.",
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80", // economia/dinheiro
      },
      {
        title: "Hábitos Saudáveis",
        description: "Refeições equilibradas sempre prontas, sem esforço.",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80", // bowl saudável
      },
      {
        title: "Cozinha limpa!",
        description: "Menos louça para lavar, menos bagunça, muito mais praticidade.",
        image: "https://images.unsplash.com/photo-1556911073-38141963c9e0?auto=format&fit=crop&w=800&q=80", // casal cozinhando feliz
      },
      {
        title: "Você no controle!",
        description: "Comida de verdade sempre ao seu alcance — sem depender de delivery.",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80", // restaurante/cozinha
      },
    ] as BenefitItem[],
  },

  // 9) Depoimentos
  testimonials: {
    title: "VEJA O QUE AS MINHAS ALUNAS DIZEM...",
    subtitle: "Milhares de mulheres mudaram a sua rotina e agora têm mais tempo livre.",
    items: [
      {
        id: 1,
        text: "Gente, esse livro salvou a minha vida! Consigo organizar o mês inteiro em um único sábado e agora minhas noites são super tranquilas.",
        name: "Juliana Mendes",
        role: "32 ANOS • ADVOGADA",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      },
      {
        id: 2,
        text: "Sempre foi difícil manter a dieta por falta de tempo. Com o método, tenho comida saudável pronta em 5 minutos todos os dias.",
        name: "Ricardo Oliveira",
        role: "41 ANOS • ENGENHEIRO",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      },
      {
        id: 3,
        text: "As receitas são deliciosas. Eu nunca imaginei que comida congelada pudesse ser tão saborosa e fresca. A Amanda fez um milagre!",
        name: "Fernanda Costa",
        role: "28 ANOS • ARQUITETA",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      },
      {
        id: 4,
        text: "Praticidade é tudo. Gastamos muito menos com delivery agora e comemos muito melhor. O planejamento é o grande segredo.",
        name: "Carlos Eduardo",
        role: "38 ANOS • ANALISTA DE SISTEMAS",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      },
      {
        id: 5,
        text: "O bônus das marmitas facilitou muito a preparação das refeições. Minha família amou a variedade e eu amei a economia de tempo.",
        name: "Beatriz Santos",
        role: "45 ANOS • PROFESSORA",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      },
      {
        id: 6,
        text: "Finalmente parei de jogar comida fora no fim de semana. Com o freezer inteligente, tudo é aproveitado. Vale cada centavo!",
        name: "Marcos Vinicius",
        role: "33 ANOS • COMERCIANTE",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      },
    ] as TestimonialItem[],
  },

  // 10) Bônus Especial
  specialBonus: {
    label: "BÔNUS ESPECIAL",
    title: "PLANO DE REFEIÇÕES INTELIGENTES",
    description: "Imagine poder sair do trabalho sabendo que o jantar já está pronto e só precisa ser aquecido... Sem pressa, sem cansaço e com mais tempo para você.",
    bullets: [
      "Mais de 30 dias de refeições já organizadas",
      "Lista de compras prática para evitar desperdícios",
      "Combinações planejadas para congelar com técnica",
      "Tudo alinhado com as receitas do livro",
    ],
    ctaText: "QUERO OS MEUS MENUS AGORA!",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
  },

  // 11) Bônus Exclusivos
  bonuses: {
    title: "BÔNUS EXCLUSIVOS PARA TORNAR A SUA ROTINA AINDA MAIS FÁCIL!",
    alert: "ATENÇÃO: ESTES BÔNUS FAZEM PARTE DE UMA OFERTA ESPECIAL POR TEMPO LIMITADO!",
    items: [
      {
        number: 1,
        title: "Plano de Refeições Inteligentes",
        description: "4 menus completos + lista de compras para organizar as suas semanas.",
        image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=600&q=80",
      },
      {
        number: 2,
        title: "Guia de Marinadas Rápidas",
        description: "Aprenda a preparar carnes deliciosas de forma rápida.",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      },
      {
        number: 3,
        title: "Livro Digital de Lanches Saudáveis",
        description: "Ideias para lanches práticos entre as refeições.",
        image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=600&q=80",
      },
      {
        number: 4,
        title: "Modelos de Listas Personalizáveis",
        description: "Ferramentas práticas para facilitar a sua rotina de compras.",
        image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=80",
      },
      {
        number: 5,
        title: "Guia do Congelamento Perfeito",
        description: "Aprenda as melhores técnicas para conservar as suas refeições como se fossem frescas.",
        image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=80",
      },
      {
        number: 6,
        title: "Masterclass Economia de Tempo",
        description: "As estratégias secretas para cozinhar para a semana inteira em apenas 2 horas.",
        image: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=600&q=80",
      },
    ] as BonusItem[],
  },

  // 12) Garantia
  guarantee: {
    title: "RISCO ZERO",
    subtitle: "EXPERIMENTE POR 7 DIAS COM GARANTIA TOTAL",
    textPart1: "A sua satisfação é a nossa prioridade absoluta! Acreditamos tanto no poder deste livro para transformar a sua rotina que oferecemos uma ",
    textBold: "garantia incondicional de 7 dias",
    textPart2: ". Se por qualquer motivo você não estiver satisfeita, devolveremos 100% do seu dinheiro, sem perguntas e sem burocracia.",
    ctaText: "QUERO EXPERIMENTAR SEM RISCOS",
  },

  // 13) Oferta / Preço (Âncora id="oferta")
  offer: {
    cardTitle: "A SUA NOVA ROTINA COMEÇA AGORA!",
    badge: "OFERTA ESPECIAL POR TEMPO LIMITADO!",
    includedList: [
      "Método Freezer Inteligente",
      "Mais de 120 receitas saudáveis e práticas",
      "Cálculo de calorias e macronutrientes",
      "Todos os 8 menus exclusivos",
      "Todos os 6 Bônus Exclusivos",
      "Acesso Vitalício ao material",
    ],
    fromPrice: "De R$ 97,00",
    byPriceLabel: "Por apenas",
    price: "R$ 29,90",
    paymentNote: "Pagamento único • Acesso Vitalício",
    ctaButtonText: "SIM! QUERO O MEU ACESSO AGORA",
    immediateAccessText: "ACESSO IMEDIATO",
    footerSeals: [
      { text: "CHECKOUT SEGURO", icon: "lock" },
      { text: "DADOS PROTEGIDOS", icon: "shield" },
      { text: "GARANTIA DE 7 DIAS", icon: "calendar" },
    ],
  },

  // 14) FAQ
  faq: {
    title: "PERGUNTAS FREQUENTES (FAQ)",
    items: [
      {
        question: "O que eu recebo exatamente no momento da compra?",
        answer: "Você recebe o e-book Método Freezer Inteligente com mais de 120 receitas, a tabela de calorias e macros, os 8 menus exclusivos e todos os 6 bônus.",
      },
      {
        question: "Quanto tempo dura o acesso?",
        answer: "O acesso é vitalício. Você paga uma única vez e pode consultar o material para sempre.",
      },
      {
        question: "Tem vídeos no curso?",
        answer: "O material principal é um livro digital (PDF) para consultar no celular, tablet ou computador; a Masterclass Economia de Tempo é um bônus extra.",
      },
      {
        question: "Como vou receber o acesso?",
        answer: "Logo após a confirmação do pagamento, você recebe o acesso no seu e-mail.",
      },
      {
        question: "E se eu não gostar?",
        answer: "Você tem 7 dias de garantia incondicional. Basta pedir o reembolso e devolvemos 100% do seu dinheiro.",
      },
    ] as FaqItem[],
  },

  // 15) Quem é Amanda Gama?
  about: {
    title: "QUEM É AMANDA GAMA?",
    bio1: "Amanda é nutricionista especializada em alimentação prática e saudável, com foco em soluções reais para quem não tem tempo — mas quer comer bem todos os dias.",
    bio2Part1: "Já ajudou mais de ",
    bio2Bold: "27 mil mulheres",
    bio2Part2: " com seus programas e livros de receitas, incluindo 2 best-sellers na área de nutrição.",
    bio3Part1: "Sua missão é unir sabor, simplicidade e técnica, demonstrando que é possível ",
    bio3Bold: "facilitar a rotina sem abrir mão da saúde",
    bio3Part2: ".",
    quote: "O meu objetivo? Criar um sistema simples, inteligente e acessível que ajude milhares de mulheres a comer bem — sem viverem prisioneiras do fogão.",
    authorName: "AMANDA GAMA",
    authorTitle: "Nutricionista",
    image: "https://images.unsplash.com/photo-1594824813682-4f3b20756778?auto=format&fit=crop&w=1000&q=80",
    avatar: "https://images.unsplash.com/photo-1594824813682-4f3b20756778?auto=format&fit=crop&w=200&q=80",
  },

  // 16) A sua vida nunca foi tão fácil
  lifeIsEasy: {
    title: "A SUA VIDA NUNCA FOI TÃO FÁCIL",
    items: [
      {
        icon: "clock",
        title: "COZINHE 1 VEZ, COMA O MÊS INTEIRO",
        description: "Livre-se do fogão durante a semana e ganhe horas extras para o que realmente importa.",
      },
      {
        icon: "search",
        title: "MERCADO SEM ERROS",
        description: "Com listas prontas, você compra apenas o necessário, economizando dinheiro e tempo.",
      },
      {
        icon: "snowflake",
        title: "DESPERDÍCIO ZERO",
        description: "Aprenda a conservar tudo. Chega de comida estragando na sua geladeira.",
      },
      {
        icon: "heart",
        title: "SAÚDE NO AUTOMÁTICO",
        description: "Ter a refeição pronta evita que você caia na tentação do delivery ou de lanches rápidos.",
      },
    ],
  },

  // 17) CTA Final
  finalCta: {
    title: "ESTA É A SUA ÚLTIMA CHANCE DE GARANTIR O PREÇO PROMOCIONAL!",
    description: "Não deixe para amanhã a praticidade que você pode ter hoje. Aproveite o desconto exclusivo agora!",
    ctaText: "SIM! QUERO MUDAR A MINHA ROTINA AGORA",
  },

  // 18) Rodapé
  footer: {
    line1: "Produto criado por Amanda Gama - Nutricionista Especializada em alimentação prática, saudável e gestão.",
    line2: "Este produto digital e seus resultados podem variar de pessoa para pessoa. As informações contidas neste material não substituem o aconselhamento médico individualizado com um profissional de saúde.",
    links: [
      { text: "TERMOS DE USO", key: "termos" },
      { text: "PRIVACIDADE", key: "privacidade" },
      { text: "CONTATO", key: "contato" },
    ],
    copyright: "© 2025 - Todos os direitos reservados | Amanda Gama",
  },
};
