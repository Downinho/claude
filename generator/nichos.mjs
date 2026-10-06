// Textos padrão por nicho (negócios locais). Tudo pode ser sobrescrito no data.json da empresa.

const S = (...xs) => xs.map((x) => (Array.isArray(x) ? x : [x, '']));

export const NICHOS = {
  barbearia: {
    eyebrow: 'Barbearia', cta: 'Agendar horário', headline: 'Corte de respeito, no seu horário.',
    msgWhats: 'Olá! Vi o site de vocês e quero agendar um horário.',
    tituloServicos: 'Serviços', tituloGaleria: 'Nossos cortes',
    servicos: S(['Corte', 'Tesoura ou máquina, do clássico ao moderno.'], ['Barba', 'Toalha quente, navalha e acabamento.'], ['Corte + Barba', 'O combo completo.'], ['Pigmentação', 'Barba e cabelo com aspecto preenchido.'], ['Sobrancelha', 'Acabamento na navalha.'], ['Infantil', 'Corte para os pequenos.']),
    diferenciais: ['Atendimento com hora marcada', 'Profissionais experientes', 'Ambiente confortável'],
  },
  salao: {
    eyebrow: 'Salão de beleza', cta: 'Agendar agora', headline: 'Beleza com cuidado em cada detalhe.',
    msgWhats: 'Olá! Vi o site de vocês e quero agendar um horário.',
    tituloServicos: 'Serviços', tituloGaleria: 'Resultados',
    servicos: S(['Corte', 'Cortes femininos e masculinos.'], ['Coloração', 'Mechas, luzes, morena iluminada e tonalização.'], ['Tratamentos', 'Hidratação, reconstrução e cronograma capilar.'], ['Escova e penteados', 'Para o dia a dia e eventos.'], ['Unhas', 'Manicure, pedicure e alongamento.'], ['Sobrancelhas', 'Design e henna.']),
    diferenciais: ['Produtos profissionais', 'Equipe especializada', 'Agendamento rápido pelo WhatsApp'],
  },
  lash: {
    eyebrow: 'Cílios e sobrancelhas', cta: 'Agendar horário', headline: 'Olhar marcante, do jeito que você sempre quis.',
    msgWhats: 'Olá! Vi o site e quero agendar um horário.',
    tituloServicos: 'Procedimentos', tituloGaleria: 'Trabalhos',
    servicos: S(['Extensão de cílios', 'Fio a fio, volume brasileiro e russo.'], ['Lash lifting', 'Curvatura natural para os seus cílios.'], ['Design de sobrancelhas', 'Com ou sem henna.'], ['Brow lamination', 'Fios alinhados e preenchidos.'], ['Manutenção', 'Para manter o resultado impecável.'], ['Cursos', 'Formação para profissionais.']),
    diferenciais: ['Materiais de alta qualidade', 'Atendimento com hora marcada', 'Ambiente acolhedor'],
  },
  unhas: {
    eyebrow: 'Nail design', cta: 'Agendar horário', headline: 'Unhas impecáveis por mais tempo.',
    msgWhats: 'Olá! Vi o site e quero agendar um horário.',
    tituloServicos: 'Serviços', tituloGaleria: 'Trabalhos',
    servicos: S(['Alongamento em gel', 'Formato e comprimento sob medida.'], ['Fibra de vidro', 'Naturalidade e resistência.'], ['Esmaltação em gel', 'Brilho que dura semanas.'], ['Manicure e pedicure', 'Cuidado completo.'], ['Nail art', 'Decorações exclusivas.'], ['Manutenção', 'Para manter tudo em dia.']),
    diferenciais: ['Material esterilizado', 'Atendimento com hora marcada', 'Produtos de qualidade'],
  },
  estetica: {
    eyebrow: 'Clínica de estética', cta: 'Agendar avaliação', headline: 'Estética com segurança e naturalidade.',
    msgWhats: 'Olá! Vi o site e gostaria de agendar uma avaliação.',
    tituloServicos: 'Procedimentos', tituloGaleria: 'Nosso espaço',
    servicos: S(['Harmonização facial', 'Planejamento individual e resultado natural.'], ['Limpeza de pele', 'Profunda, com extração e hidratação.'], ['Bioestimuladores', 'Estímulo de colágeno.'], ['Tratamentos corporais', 'Gordura localizada, flacidez e celulite.'], ['Peelings', 'Renovação e uniformização da pele.'], ['Drenagem linfática', 'Bem-estar e redução de inchaço.']),
    diferenciais: ['Avaliação personalizada', 'Profissionais habilitados', 'Equipamentos modernos'],
  },
  restaurante: {
    eyebrow: 'Restaurante', cta: 'Pedir pelo WhatsApp', headline: 'Comida de verdade, feita na hora.',
    msgWhats: 'Olá! Vi o site de vocês e gostaria de fazer um pedido.',
    tituloServicos: 'Cardápio em destaque', tituloGaleria: 'Nossos pratos',
    servicos: S('Pratos do dia', 'Porções', 'Bebidas'),
    diferenciais: ['Ingredientes frescos', 'Delivery e retirada', 'Feito na hora'],
  },
  hamburgueria: {
    eyebrow: 'Hamburgueria artesanal', cta: 'Pedir agora', headline: 'Smash na chapa. Sabor de verdade.',
    msgWhats: 'Olá! Vi o site e quero fazer um pedido.',
    tituloServicos: 'Cardápio', tituloGaleria: 'Do nosso Instagram',
    servicos: S(['Smash clássico', 'Blend da casa, queijo e molho especial.'], ['Duplo e triplo', 'Para quem tem fome de verdade.'], ['Combos', 'Burger, fritas e bebida.'], ['Fritas e porções', 'Crocantes, na hora.'], ['Milkshakes', 'Cremosos e generosos.'], ['Delivery', 'Peça pelo WhatsApp ou app.']),
    diferenciais: ['Carne fresca, moída na casa', 'Feito na hora', 'Delivery rápido'],
  },
  pizzaria: {
    eyebrow: 'Pizzaria', cta: 'Pedir agora', headline: 'Pizza de forno a lenha, do jeito paulistano.',
    msgWhats: 'Olá! Vi o site e quero fazer um pedido.',
    tituloServicos: 'Cardápio', tituloGaleria: 'Saindo do forno',
    servicos: S(['Tradicionais', 'Margherita, calabresa, mussarela e mais.'], ['Especiais', 'Combinações da casa.'], ['Doces', 'Para fechar a noite.'], ['Bordas recheadas', 'Catupiry, cheddar e chocolate.'], ['Bebidas', 'Refrigerantes, sucos e cervejas.'], ['Delivery e retirada', 'Do forno até você.']),
    diferenciais: ['Forno a lenha', 'Massa de fermentação natural', 'Delivery e retirada'],
  },
  confeitaria: {
    eyebrow: 'Confeitaria', cta: 'Encomendar', headline: 'O bolo que vai ser o centro da sua festa.',
    msgWhats: 'Olá! Vi o site e gostaria de fazer uma encomenda.',
    tituloServicos: 'Encomendas', tituloGaleria: 'Nossas criações',
    servicos: S(['Bolos personalizados', 'Temáticos, vintage e minimalistas.'], ['Doces finos', 'Brigadeiros gourmet, bem-casados e mais.'], ['Kit festa', 'Bolo, doces e salgados.'], ['Corporativo', 'Brindes e cestas para empresas.'], ['Datas especiais', 'Páscoa, Natal e Dia das Mães.'], ['Pronta entrega', 'Fatias e doces do dia.']),
    diferenciais: ['Feito artesanalmente', 'Personalizado para sua festa', 'Entrega combinada'],
  },
  pet: {
    eyebrow: 'Pet shop', cta: 'Agendar banho e tosa', headline: 'Seu pet cheiroso, feliz e bem cuidado.',
    msgWhats: 'Olá! Vi o site de vocês e quero agendar para o meu pet.',
    tituloServicos: 'Serviços', tituloGaleria: 'Clientes de 4 patas',
    servicos: S(['Banho', 'Produtos específicos para cada pelagem.'], ['Tosa', 'Higiênica, na máquina ou na tesoura.'], ['Hidratação', 'Pelos macios e brilhantes.'], ['Leva e traz', 'Buscamos e entregamos seu pet.'], ['Rações e acessórios', 'Tudo para o dia a dia.'], ['Veterinário', 'Consulte disponibilidade.']),
    diferenciais: ['Cuidado e carinho', 'Profissionais treinados', 'Produtos de qualidade'],
  },
  marcenaria: {
    eyebrow: 'Marcenaria e planejados', cta: 'Pedir orçamento', headline: 'Móveis planejados sob medida para o seu espaço.',
    msgWhats: 'Olá! Vi o site e gostaria de um orçamento.',
    tituloServicos: 'O que fazemos', tituloGaleria: 'Projetos entregues',
    servicos: S(['Cozinhas', 'Aproveitamento máximo de cada centímetro.'], ['Dormitórios', 'Guarda-roupas, closets e cabeceiras.'], ['Salas', 'Painéis, racks e home theater.'], ['Banheiros', 'Gabinetes e nichos.'], ['Home office', 'Funcional e bonito.'], ['Comercial', 'Lojas, consultórios e escritórios.']),
    diferenciais: ['Projeto 3D', 'Fabricação própria', 'Instalação inclusa'],
  },
  estetica_auto: {
    eyebrow: 'Estética automotiva', cta: 'Agendar serviço', headline: 'Seu carro com cara de zero.',
    msgWhats: 'Olá! Vi o site e gostaria de agendar um serviço.',
    tituloServicos: 'Serviços', tituloGaleria: 'Antes e depois',
    servicos: S(['Lavagem detalhada', 'Interna e externa, com produtos premium.'], ['Polimento', 'Remoção de riscos e recuperação de brilho.'], ['Vitrificação', 'Proteção e brilho duradouros.'], ['PPF', 'Película de proteção de pintura.'], ['Higienização interna', 'Bancos, carpetes e teto.'], ['Oxi-sanitização', 'Eliminação de odores.']),
    diferenciais: ['Produtos profissionais', 'Equipe especializada', 'Agendamento rápido'],
  },
  pilates: {
    eyebrow: 'Pilates e funcional', cta: 'Agendar aula experimental', headline: 'Força, postura e bem-estar.',
    msgWhats: 'Olá! Vi o site e quero agendar uma aula experimental.',
    tituloServicos: 'Modalidades', tituloGaleria: 'Nosso estúdio',
    servicos: S(['Pilates de aparelhos', 'Turmas reduzidas.'], ['Funcional', 'Condicionamento e força.'], ['Pilates para gestantes', 'Acompanhamento especializado.'], ['Reabilitação', 'Retorno seguro às atividades.'], ['Aulas individuais', 'Atenção exclusiva.'], ['Aula experimental', 'Venha conhecer.']),
    diferenciais: ['Instrutores qualificados', 'Turmas reduzidas', 'Horários flexíveis'],
  },
  servicos: {
    eyebrow: 'Serviços', cta: 'Pedir orçamento', headline: 'Qualidade que você já conhece.',
    msgWhats: 'Olá! Vi o site de vocês e gostaria de um orçamento.',
    tituloServicos: 'O que fazemos', tituloGaleria: 'Trabalhos realizados',
    servicos: S('Orçamento', 'Atendimento', 'Garantia'),
    diferenciais: ['Orçamento sem compromisso', 'Garantia no serviço', 'Atendimento rápido'],
  },
};
NICHOS.academia = NICHOS.pilates;
NICHOS.clinica = NICHOS.estetica;
NICHOS.loja = NICHOS.servicos;

export const nicho = (n) => NICHOS[n] || NICHOS.servicos;
