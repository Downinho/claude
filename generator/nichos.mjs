// Textos padrão por nicho. Tudo pode ser sobrescrito no data.json da empresa.
// A ideia é a demo já "falar a língua" do cliente sem precisar escrever do zero.

export const NICHOS = {
  barbearia: {
    cta: 'Agendar horário',
    msgWhats: 'Olá! Vi o site de vocês e quero agendar um horário.',
    tituloServicos: 'Serviços',
    tituloGaleria: 'Nossos cortes',
    diferenciais: ['Atendimento com hora marcada', 'Profissionais experientes', 'Ambiente climatizado'],
  },
  salao: {
    cta: 'Agendar agora',
    msgWhats: 'Olá! Vi o site de vocês e quero agendar um horário.',
    tituloServicos: 'Serviços',
    tituloGaleria: 'Resultados',
    diferenciais: ['Produtos profissionais', 'Equipe especializada', 'Agendamento rápido pelo WhatsApp'],
  },
  estetica: {
    cta: 'Agendar avaliação',
    msgWhats: 'Olá! Vi o site de vocês e gostaria de agendar uma avaliação.',
    tituloServicos: 'Procedimentos',
    tituloGaleria: 'Antes e depois',
    diferenciais: ['Avaliação personalizada', 'Profissionais habilitados', 'Equipamentos modernos'],
  },
  restaurante: {
    cta: 'Pedir pelo WhatsApp',
    msgWhats: 'Olá! Vi o site de vocês e gostaria de fazer um pedido.',
    tituloServicos: 'Cardápio em destaque',
    tituloGaleria: 'Nossos pratos',
    diferenciais: ['Ingredientes frescos', 'Delivery e retirada', 'Feito na hora'],
  },
  confeitaria: {
    cta: 'Encomendar',
    msgWhats: 'Olá! Vi o site de vocês e gostaria de fazer uma encomenda.',
    tituloServicos: 'Encomendas',
    tituloGaleria: 'Nossas criações',
    diferenciais: ['Feito artesanalmente', 'Personalizado para sua festa', 'Entrega combinada'],
  },
  pet: {
    cta: 'Agendar banho e tosa',
    msgWhats: 'Olá! Vi o site de vocês e quero agendar para o meu pet.',
    tituloServicos: 'Serviços',
    tituloGaleria: 'Clientes de 4 patas',
    diferenciais: ['Cuidado e carinho', 'Leva e traz', 'Produtos de qualidade'],
  },
  academia: {
    cta: 'Agendar aula experimental',
    msgWhats: 'Olá! Vi o site de vocês e quero agendar uma aula experimental.',
    tituloServicos: 'Modalidades e planos',
    tituloGaleria: 'Nossa estrutura',
    diferenciais: ['Professores qualificados', 'Horários flexíveis', 'Aula experimental'],
  },
  clinica: {
    cta: 'Agendar consulta',
    msgWhats: 'Olá! Vi o site de vocês e gostaria de agendar uma consulta.',
    tituloServicos: 'Especialidades',
    tituloGaleria: 'Nossa clínica',
    diferenciais: ['Atendimento humanizado', 'Agendamento fácil', 'Estrutura moderna'],
  },
  servicos: {
    cta: 'Pedir orçamento',
    msgWhats: 'Olá! Vi o site de vocês e gostaria de um orçamento.',
    tituloServicos: 'O que fazemos',
    tituloGaleria: 'Trabalhos realizados',
    diferenciais: ['Orçamento sem compromisso', 'Garantia no serviço', 'Atendimento rápido'],
  },
  loja: {
    cta: 'Comprar pelo WhatsApp',
    msgWhats: 'Olá! Vi o site de vocês e tenho interesse em um produto.',
    tituloServicos: 'Destaques',
    tituloGaleria: 'Produtos',
    diferenciais: ['Envio para todo o Brasil', 'Pagamento facilitado', 'Atendimento personalizado'],
  },
};

export const nicho = (n) => NICHOS[n] || NICHOS.servicos;
