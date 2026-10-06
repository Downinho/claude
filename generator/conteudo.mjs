// Conteúdo e identidade visual por categoria/especialidade.
// Profissões regulamentadas seguem as regras de publicidade dos conselhos:
// OAB (Provimento 205/2021): tom informativo, sem preço, sem promessa de resultado, sem depoimentos.
// CFM (Res. 2.336/2023): CRM e RQE visíveis, sem promessa de resultado.
// CFP / CFN / CFO: registro visível, sem promessa de cura ou resultado garantido.

export const TEMAS = {
  advogado: { p: '#0f1b2d', s: '#b8945a', bg: '#f7f5f0', t: '#1c2230', ft: 'Cormorant Garamond', fx: 'Inter', registro: 'OAB/SP' },
  medico: { p: '#0e3b43', s: '#3fb8af', bg: '#f4f9f9', t: '#15292c', ft: 'Fraunces', fx: 'Inter', registro: 'CRM-SP' },
  nutricionista: { p: '#1f4d3a', s: '#e9a23b', bg: '#fbf8f1', t: '#1d2a22', ft: 'DM Serif Display', fx: 'DM Sans', registro: 'CRN-3' },
  psicologo: { p: '#3d3553', s: '#c79bb8', bg: '#f8f5f2', t: '#2a2533', ft: 'Fraunces', fx: 'Nunito Sans', registro: 'CRP' },
  dentista: { p: '#0b2e59', s: '#38b6e8', bg: '#f5f9fd', t: '#13233a', ft: 'Playfair Display', fx: 'Inter', registro: 'CRO-SP' },
  fisio: { p: '#12355b', s: '#ff8a3d', bg: '#f7f8fa', t: '#16212e', ft: 'Sora', fx: 'Inter', registro: 'CREFITO' },
  barbearia: { p: '#111111', s: '#c8a24a', bg: '#f6f3ee', t: '#1b1b1b', ft: 'Playfair Display', fx: 'Inter' },
  salao: { p: '#3a1f2b', s: '#d9a5a0', bg: '#fbf6f4', t: '#2b1d22', ft: 'Playfair Display', fx: 'Poppins' },
  lash: { p: '#2b1f2f', s: '#e3a9c3', bg: '#fcf7f9', t: '#2b1f2f', ft: 'Cormorant Garamond', fx: 'Poppins' },
  unhas: { p: '#3b1830', s: '#ef7aa8', bg: '#fdf6f9', t: '#2b1622', ft: 'Playfair Display', fx: 'Poppins' },
  estetica: { p: '#2f2a26', s: '#c8a27c', bg: '#faf7f3', t: '#2a2522', ft: 'Cormorant Garamond', fx: 'Inter' },
  pet: { p: '#1f3b57', s: '#ffb547', bg: '#fffaf2', t: '#1c2a38', ft: 'Fredoka', fx: 'Nunito' },
  hamburgueria: { p: '#1a1210', s: '#ff6b1a', bg: '#fff8f0', t: '#1a1210', ft: 'Bebas Neue', fx: 'Inter' },
  pizzaria: { p: '#2a120c', s: '#e5482d', bg: '#fff8f1', t: '#2a120c', ft: 'Playfair Display', fx: 'Inter' },
  confeitaria: { p: '#4a2c2a', s: '#f2a7b5', bg: '#fff8f5', t: '#3b2321', ft: 'Playfair Display', fx: 'Quicksand' },
  marcenaria: { p: '#2b2118', s: '#c08a52', bg: '#f7f3ee', t: '#231b14', ft: 'Fraunces', fx: 'Inter' },
  estetica_auto: { p: '#0c0d10', s: '#21d4fd', bg: '#f3f5f8', t: '#0c0d10', ft: 'Sora', fx: 'Inter' },
  pilates: { p: '#28403a', s: '#e7b18c', bg: '#f7f5f1', t: '#1f2d29', ft: 'Fraunces', fx: 'DM Sans' },
};

const F = (q, r) => ({ q, r });

// Cada especialidade: eyebrow, headline, sub, cta, msg (WhatsApp/DM), servicos, passos, faq.
export const ESPECIALIDADES = {
  // ---------- Advocacia ----------
  trabalhista: {
    cat: 'advogado', eyebrow: 'Advocacia Trabalhista',
    headline: 'Seus direitos trabalhistas, explicados com clareza.',
    sub: 'Orientação jurídica para quem foi demitido, trabalha sem registro ou teve direitos desrespeitados.',
    cta: 'Agendar uma conversa', msg: 'Olá! Vi o site e gostaria de uma orientação trabalhista.',
    servicos: [
      ['Rescisão e verbas', 'Conferência de cálculos rescisórios, FGTS, multa de 40% e aviso prévio.'],
      ['Horas extras', 'Jornada excessiva, banco de horas irregular e intervalos não concedidos.'],
      ['Acidente e doença do trabalho', 'Estabilidade, indenizações e reconhecimento do nexo com o trabalho.'],
      ['Gestantes', 'Estabilidade provisória e reintegração em caso de dispensa indevida.'],
      ['Vínculo como PJ', 'Reconhecimento de vínculo empregatício quando a "pejotização" é irregular.'],
      ['Assédio moral', 'Orientação e medidas cabíveis diante de abusos no ambiente de trabalho.'],
    ],
  },
  previdenciario: {
    cat: 'advogado', eyebrow: 'Advocacia Previdenciária',
    headline: 'Planeje sua aposentadoria com quem entende do INSS.',
    sub: 'Análise do seu histórico, planejamento previdenciário e acompanhamento de benefícios negados ou revisados.',
    cta: 'Agendar uma análise', msg: 'Olá! Vi o site e gostaria de uma orientação sobre meu benefício no INSS.',
    servicos: [
      ['Planejamento de aposentadoria', 'Simulação das regras de transição para identificar o melhor momento e a melhor regra.'],
      ['Benefício negado', 'Análise do indeferimento e medidas administrativas ou judiciais cabíveis.'],
      ['Revisão de benefícios', 'Verificação de erros no cálculo da renda mensal.'],
      ['BPC/LOAS', 'Orientação para idosos e pessoas com deficiência em situação de vulnerabilidade.'],
      ['Auxílio por incapacidade', 'Acompanhamento de perícias e benefícios por incapacidade.'],
      ['Pensão por morte', 'Orientação a dependentes sobre requisitos e documentação.'],
    ],
  },
  familia: {
    cat: 'advogado', eyebrow: 'Direito de Família e Sucessões',
    headline: 'Momentos delicados pedem orientação segura e humana.',
    sub: 'Atuação em divórcio, guarda, pensão, inventário e planejamento patrimonial, com sigilo e cuidado.',
    cta: 'Agendar uma conversa', msg: 'Olá! Vi o site e gostaria de uma orientação em direito de família.',
    servicos: [
      ['Divórcio', 'Consensual ou litigioso, judicial ou em cartório, com partilha de bens.'],
      ['Guarda e convivência', 'Guarda compartilhada ou unilateral e regulamentação de visitas.'],
      ['Pensão alimentícia', 'Fixação, revisão e execução de alimentos.'],
      ['União estável', 'Reconhecimento, dissolução e contratos de convivência.'],
      ['Inventário', 'Inventário judicial ou extrajudicial e partilha entre herdeiros.'],
      ['Planejamento sucessório', 'Testamento, doações e organização patrimonial da família.'],
    ],
  },
  imobiliario: {
    cat: 'advogado', eyebrow: 'Direito Imobiliário',
    headline: 'Segurança jurídica para comprar, vender e alugar.',
    sub: 'Análise de contratos e documentação, regularização de imóveis e solução de conflitos imobiliários.',
    cta: 'Agendar uma conversa', msg: 'Olá! Vi o site e gostaria de uma orientação sobre um imóvel.',
    servicos: [
      ['Compra e venda', 'Análise de documentação e due diligence antes de fechar negócio.'],
      ['Contratos', 'Elaboração e revisão de contratos de compra, venda e locação.'],
      ['Usucapião', 'Regularização de imóveis pela via judicial ou extrajudicial.'],
      ['Locação', 'Despejo, revisional, renovatória e cobrança de aluguéis.'],
      ['Distrato com construtora', 'Atraso de obra, distrato e devolução de valores.'],
      ['Condomínio', 'Questões condominiais, cobranças e assembleias.'],
    ],
  },
  consumidor: {
    cat: 'advogado', eyebrow: 'Direito do Consumidor',
    headline: 'Quando uma empresa falha com você, existe caminho.',
    sub: 'Orientação para cobranças indevidas, negativação, problemas com voos, planos de saúde e produtos.',
    cta: 'Falar sobre meu caso', msg: 'Olá! Vi o site e gostaria de uma orientação sobre um problema de consumo.',
    servicos: [
      ['Negativação indevida', 'Nome sujo por dívida que não existe ou já foi paga.'],
      ['Voos e viagens', 'Atrasos, cancelamentos, overbooking e extravio de bagagem.'],
      ['Planos de saúde', 'Negativas de cobertura, reajustes e cancelamentos.'],
      ['Cobranças indevidas', 'Tarifas, serviços não contratados e repetição do indébito.'],
      ['Produtos com defeito', 'Troca, devolução e reparação de danos.'],
      ['Compras online', 'Produto não entregue, golpes e direito de arrependimento.'],
    ],
  },
  bancario: {
    cat: 'advogado', eyebrow: 'Direito Bancário',
    headline: 'Contratos bancários analisados com lupa.',
    sub: 'Revisão de juros, renegociação de dívidas, superendividamento e defesa em execuções bancárias.',
    cta: 'Falar sobre meu contrato', msg: 'Olá! Vi o site e gostaria de uma orientação sobre um contrato bancário.',
    servicos: [
      ['Revisão de juros', 'Análise de juros e encargos em financiamentos e empréstimos.'],
      ['Superendividamento', 'Repactuação de dívidas com base na Lei 14.181/2021.'],
      ['Busca e apreensão', 'Defesa em ações de veículos financiados.'],
      ['Fraudes e golpes', 'Pix, cartão clonado e empréstimos não contratados.'],
      ['Consignado', 'Descontos indevidos em benefício ou salário.'],
      ['Execuções', 'Defesa em cobranças judiciais de bancos.'],
    ],
  },
  // ---------- Medicina ----------
  dermatologia: {
    cat: 'medico', eyebrow: 'Dermatologia',
    headline: 'Cuidado com a pele, do diagnóstico à estética.',
    sub: 'Dermatologia clínica e estética com avaliação individual e plano de tratamento para cada paciente.',
    cta: 'Agendar consulta', msg: 'Olá! Vi o site e gostaria de agendar uma consulta.',
    servicos: [
      ['Dermatologia clínica', 'Acne, rosácea, dermatites, micoses e check-up de pintas.'],
      ['Manchas', 'Melasma, manchas solares e uniformização do tom da pele.'],
      ['Rugas e flacidez', 'Tratamentos para envelhecimento facial e corporal.'],
      ['Queda de cabelo', 'Investigação das causas e tratamento capilar.'],
      ['Tecnologias', 'Lasers e equipamentos indicados após avaliação médica.'],
      ['Estrias e cicatrizes', 'Protocolos para textura e qualidade da pele.'],
    ],
  },
  cardiologia: {
    cat: 'medico', eyebrow: 'Cardiologia',
    headline: 'Prevenção e cuidado com o seu coração.',
    sub: 'Consultas, check-up cardiológico e acompanhamento de hipertensão, arritmias e fatores de risco.',
    cta: 'Agendar consulta', msg: 'Olá! Vi o site e gostaria de agendar uma consulta.',
    servicos: [
      ['Check-up cardiológico', 'Avaliação preventiva com exames indicados ao seu perfil.'],
      ['Hipertensão', 'Diagnóstico, tratamento e acompanhamento da pressão arterial.'],
      ['Arritmias', 'Investigação de palpitações e alterações do ritmo cardíaco.'],
      ['Avaliação pré-operatória', 'Liberação cardiológica para cirurgias.'],
      ['Cardiologia do esporte', 'Avaliação para quem vai começar ou intensificar atividade física.'],
      ['Colesterol e risco', 'Controle de dislipidemia e prevenção de eventos cardiovasculares.'],
    ],
  },
  endocrinologia: {
    cat: 'medico', eyebrow: 'Endocrinologia e Metabologia',
    headline: 'Hormônios, metabolismo e saúde em equilíbrio.',
    sub: 'Acompanhamento de diabetes, tireoide, obesidade e alterações hormonais com olhar individualizado.',
    cta: 'Agendar consulta', msg: 'Olá! Vi o site e gostaria de agendar uma consulta.',
    servicos: [
      ['Diabetes', 'Diagnóstico, controle glicêmico e prevenção de complicações.'],
      ['Tireoide', 'Hipo e hipertireoidismo, nódulos e acompanhamento.'],
      ['Obesidade', 'Tratamento clínico do excesso de peso e da saúde metabólica.'],
      ['Saúde hormonal feminina', 'SOP, menopausa e alterações hormonais.'],
      ['Osteoporose', 'Avaliação e cuidado da saúde óssea.'],
      ['Check-up metabólico', 'Avaliação completa de fatores de risco.'],
    ],
  },
  ortopedia: {
    cat: 'medico', eyebrow: 'Ortopedia e Coluna',
    headline: 'Movimento sem dor começa com o diagnóstico certo.',
    sub: 'Avaliação e tratamento de dores na coluna, hérnias e lesões, do conservador ao cirúrgico.',
    cta: 'Agendar consulta', msg: 'Olá! Vi o site e gostaria de agendar uma consulta.',
    servicos: [
      ['Dor lombar e cervical', 'Investigação e tratamento das dores na coluna.'],
      ['Hérnia de disco', 'Tratamento conservador e, quando indicado, cirúrgico.'],
      ['Estenose e artrose', 'Cuidado com doenças degenerativas da coluna.'],
      ['Escoliose', 'Avaliação e acompanhamento de desvios da coluna.'],
      ['Cirurgia minimamente invasiva', 'Técnicas com menor agressão aos tecidos, quando indicadas.'],
      ['Segunda opinião', 'Revisão de exames e indicações cirúrgicas.'],
    ],
  },
  // ---------- Nutrição ----------
  nutricao: {
    cat: 'nutricionista', eyebrow: 'Nutrição',
    headline: 'Alimentação que cabe na sua rotina e no seu objetivo.',
    sub: 'Planos alimentares individualizados, sem dietas da moda, com acompanhamento de perto.',
    cta: 'Agendar consulta', msg: 'Olá! Vi o site e gostaria de agendar uma consulta.',
    servicos: [
      ['Emagrecimento', 'Estratégia alimentar sustentável, sem terrorismo nutricional.'],
      ['Hipertrofia', 'Ganho de massa com plano ajustado ao treino.'],
      ['Nutrição esportiva', 'Alimentação e suplementação para performance.'],
      ['Saúde intestinal', 'Cuidado com desconfortos e qualidade da digestão.'],
      ['Reeducação alimentar', 'Mudança de hábitos de forma gradual e possível.'],
      ['Consulta online', 'Atendimento por vídeo, de qualquer lugar.'],
    ],
  },
  nutricao_infantil: {
    cat: 'nutricionista', eyebrow: 'Nutrição Materno-Infantil',
    headline: 'Alimentação com afeto, da gestação à infância.',
    sub: 'Acompanhamento nutricional para gestantes, introdução alimentar e crianças com seletividade.',
    cta: 'Agendar consulta', msg: 'Olá! Vi o site e gostaria de agendar uma consulta.',
    servicos: [
      ['Gestação', 'Nutrição para uma gestação saudável e ganho de peso adequado.'],
      ['Amamentação', 'Alimentação da mãe no pós-parto e na lactação.'],
      ['Introdução alimentar', 'BLW, papinhas ou método participativo, com segurança.'],
      ['Seletividade alimentar', 'Estratégias para crianças que recusam alimentos.'],
      ['Alergias alimentares', 'Plano alimentar para APLV e outras restrições.'],
      ['Lancheira saudável', 'Ideias práticas para a rotina escolar.'],
    ],
  },
  // ---------- Psicologia ----------
  psicologia: {
    cat: 'psicologo', eyebrow: 'Psicologia Clínica',
    headline: 'Um espaço seguro para cuidar de você.',
    sub: 'Psicoterapia para adultos, adolescentes e crianças, presencial ou online, com ética e sigilo.',
    cta: 'Agendar primeira sessão', msg: 'Olá! Vi o site e gostaria de agendar uma primeira sessão.',
    servicos: [
      ['Ansiedade', 'Compreender e lidar com preocupações, crises e tensão constante.'],
      ['Depressão', 'Acolhimento e acompanhamento em momentos de tristeza e desânimo.'],
      ['Autoestima', 'Relação consigo, inseguranças e autoconhecimento.'],
      ['Relacionamentos', 'Conflitos afetivos, familiares e términos.'],
      ['Infância e adolescência', 'Atendimento com olhar para cada fase do desenvolvimento.'],
      ['Terapia online', 'Sessões por vídeo com o mesmo sigilo do consultório.'],
    ],
  },
  // ---------- Odontologia ----------
  odontologia: {
    cat: 'dentista', eyebrow: 'Odontologia',
    headline: 'Seu sorriso cuidado por especialistas.',
    sub: 'Clínica odontológica com estética, implantes, ortodontia e atendimento para toda a família.',
    cta: 'Agendar avaliação', msg: 'Olá! Vi o site e gostaria de agendar uma avaliação.',
    servicos: [
      ['Lentes e facetas', 'Estética do sorriso planejada caso a caso.'],
      ['Implantes', 'Reabilitação de dentes perdidos.'],
      ['Ortodontia e alinhadores', 'Aparelho fixo e alinhadores transparentes.'],
      ['Clareamento', 'Clareamento de consultório e caseiro supervisionado.'],
      ['Odontopediatria', 'Atendimento acolhedor para crianças.'],
      ['Clínica geral', 'Limpeza, restaurações e prevenção.'],
    ],
  },
  quiropraxia: {
    cat: 'fisio', eyebrow: 'Quiropraxia e Terapia Manual',
    headline: 'Menos dor, mais movimento.',
    sub: 'Avaliação postural e tratamento manual para dores na coluna, articulações e tensões musculares.',
    cta: 'Agendar avaliação', msg: 'Olá! Vi o site e gostaria de agendar uma avaliação.',
    servicos: [
      ['Dor nas costas', 'Lombar, torácica e cervical.'],
      ['Ajustes quiropráxicos', 'Técnicas manuais para mobilidade articular.'],
      ['Tensão muscular', 'Liberação miofascial e terapia manual.'],
      ['Postura', 'Avaliação e orientação postural.'],
      ['Cefaleia tensional', 'Abordagem de dores de cabeça de origem muscular.'],
      ['Drenagem', 'Drenagem linfática e recuperação.'],
    ],
  },
};

export const PASSOS = {
  advogado: [['Contato', 'Você nos chama e conta brevemente a sua situação.'], ['Análise', 'Avaliamos documentos e explicamos as possibilidades com transparência.'], ['Acompanhamento', 'Você acompanha cada etapa do caso com clareza.']],
  medico: [['Agendamento', 'Escolha o melhor horário pelo WhatsApp.'], ['Consulta', 'Avaliação completa e escuta atenta.'], ['Plano de cuidado', 'Tratamento individualizado e acompanhamento.']],
  nutricionista: [['Consulta', 'Avaliação da rotina, exames e objetivos.'], ['Plano alimentar', 'Estratégia feita para você, sem dietas genéricas.'], ['Acompanhamento', 'Ajustes e suporte ao longo do processo.']],
  psicologo: [['Primeiro contato', 'Tire dúvidas e agende sem compromisso.'], ['Sessão inicial', 'Um encontro para nos conhecermos e entender sua demanda.'], ['Processo terapêutico', 'Encontros regulares, no seu ritmo.']],
  dentista: [['Avaliação', 'Exame clínico e conversa sobre seus objetivos.'], ['Planejamento', 'Plano de tratamento explicado etapa por etapa.'], ['Tratamento', 'Execução com conforto e acompanhamento.']],
  fisio: [['Avaliação', 'Entendemos sua dor e sua rotina.'], ['Tratamento', 'Sessões com técnicas indicadas para o seu caso.'], ['Manutenção', 'Orientações para manter os resultados no dia a dia.']],
  _: [['Chame no WhatsApp', 'Atendimento rápido e direto.'], ['Combine os detalhes', 'Tiramos suas dúvidas e alinhamos tudo.'], ['Aproveite', 'Qualidade que você já conhece do nosso Instagram.']],
};

export const FAQ = {
  advogado: [
    F('A primeira conversa tem custo?', 'Entre em contato para saber como funciona o atendimento inicial e quais documentos separar.'),
    F('Atendem online?', 'Sim. É possível realizar reuniões por vídeo e enviar documentos digitalmente, para todo o Brasil.'),
    F('Quais documentos devo levar?', 'Depende do caso. No primeiro contato informamos exatamente o que separar.'),
    F('Meus dados ficam em sigilo?', 'Sim. O sigilo profissional é dever do advogado e é respeitado em todas as etapas.'),
  ],
  medico: [
    F('Atende convênio?', 'Consulte pelo WhatsApp as formas de atendimento e reembolso.'),
    F('Como agendar?', 'Pelo botão de WhatsApp desta página, escolhendo o melhor horário.'),
    F('Preciso levar exames?', 'Se tiver exames recentes, leve. Eles ajudam na avaliação.'),
    F('Onde fica o consultório?', 'Veja o endereço na seção de contato abaixo.'),
  ],
  nutricionista: [
    F('Atende online?', 'Sim, com o mesmo acompanhamento da consulta presencial.'),
    F('Preciso de exames?', 'Exames recentes ajudam. Se não tiver, avaliamos a necessidade na consulta.'),
    F('Tem retorno?', 'Consulte pelo WhatsApp como funcionam os retornos e o acompanhamento.'),
    F('Vou ter que cortar tudo que gosto?', 'Não. O plano é montado com base na sua rotina e preferências.'),
  ],
  psicologo: [
    F('Como funciona a primeira sessão?', 'É um encontro para entender sua demanda e combinar como será o processo.'),
    F('Atende online?', 'Sim, por vídeo, com o mesmo sigilo e ética do atendimento presencial.'),
    F('Quanto tempo dura a terapia?', 'Varia de pessoa para pessoa e é conversado ao longo do processo.'),
    F('Atende convênio?', 'Consulte pelo WhatsApp as possibilidades de reembolso.'),
  ],
  dentista: [
    F('Atende convênio?', 'Consulte pelo WhatsApp as formas de pagamento e convênios.'),
    F('A avaliação tem custo?', 'Fale com a gente para saber como funciona a avaliação inicial.'),
    F('Atendem crianças?', 'Sim, com abordagem acolhedora para os pequenos.'),
    F('Parcelam o tratamento?', 'Consulte as condições de pagamento pelo WhatsApp.'),
  ],
  fisio: [
    F('Preciso de pedido médico?', 'Não é obrigatório para a avaliação. Se tiver exames, traga.'),
    F('Quantas sessões vou precisar?', 'Definimos após a avaliação, de acordo com o seu caso.'),
    F('Dói?', 'As técnicas são aplicadas respeitando seu conforto.'),
    F('Como agendar?', 'Pelo WhatsApp, no botão desta página.'),
  ],
  _: [
    F('Como faço para pedir/agendar?', 'Pelo WhatsApp ou direct do Instagram, no botão desta página.'),
    F('Qual o horário de atendimento?', 'Confira os horários na seção de contato.'),
    F('Quais as formas de pagamento?', 'Pix, cartão e dinheiro. Confirme pelo WhatsApp.'),
    F('Onde ficam?', 'Veja o endereço e o mapa logo abaixo.'),
  ],
};

export const AVISO = {
  advogado: 'Conteúdo de caráter informativo, em conformidade com o Código de Ética e Disciplina da OAB e o Provimento 205/2021.',
  medico: 'Conteúdo informativo, em conformidade com a Resolução CFM 2.336/2023. Não substitui consulta médica.',
  nutricionista: 'Conteúdo informativo. Não substitui consulta com nutricionista.',
  psicologo: 'Conteúdo informativo, em conformidade com o Código de Ética Profissional do Psicólogo.',
  dentista: 'Conteúdo informativo. Responsável técnico conforme registro no CRO-SP.',
  fisio: 'Conteúdo informativo. Não substitui avaliação profissional.',
};

// Variações por lead (escolhidas pelo slug), para dois clientes do mesmo nicho não receberem o mesmo site.
export const PALETAS = {
  advogado: [['#0f1b2d', '#b8945a', '#f7f5f0'], ['#1d1d1f', '#a8875b', '#f5f3ef'], ['#13322b', '#c2a36b', '#f4f4ef'], ['#2a1a1f', '#b88a6a', '#f8f4f1']],
  medico: [['#0e3b43', '#3fb8af', '#f4f9f9'], ['#1c2b4a', '#6aa9ff', '#f5f8fc'], ['#2d3b2f', '#9cc5a1', '#f6f8f5'], ['#3a2a3f', '#d7a6c6', '#faf6f9']],
  nutricionista: [['#1f4d3a', '#e9a23b', '#fbf8f1'], ['#3b4a1f', '#f08a5d', '#fbf9f2'], ['#24414d', '#f2c14e', '#f7f9f8'], ['#4d2a1f', '#8fc18a', '#fbf7f2']],
  psicologo: [['#3d3553', '#c79bb8', '#f8f5f2'], ['#2f4a4a', '#e0b38a', '#f6f7f4'], ['#4a3a2f', '#a9c3b5', '#f9f6f1'], ['#283350', '#e6a6a1', '#f7f6f4']],
  dentista: [['#0b2e59', '#38b6e8', '#f5f9fd'], ['#123c3a', '#5fd3c4', '#f4faf9'], ['#1f2433', '#f2b84b', '#f8f7f4']],
  fisio: [['#12355b', '#ff8a3d', '#f7f8fa'], ['#1e3d2f', '#f4b942', '#f7f8f4']],
};

export const HEADLINES = {
  trabalhista: ['Quem trabalha tem direitos. A gente explica quais são os seus.', 'Advocacia trabalhista com clareza, do primeiro contato ao fim do caso.'],
  previdenciario: ['Aposentadoria não é sorte. É planejamento.', 'O benefício certo, na regra certa, no momento certo.'],
  familia: ['Família é para sempre. Os processos não precisam ser difíceis.', 'Divórcio, guarda e herança com escuta, sigilo e segurança.'],
  imobiliario: ['Antes de assinar, fale com quem lê as entrelinhas.', 'Seu imóvel, seu patrimônio. Proteja os dois.'],
  consumidor: ['Seus direitos de consumidor, levados a sério.', 'Cobrança indevida, voo cancelado, nome sujo: existe solução.'],
  bancario: ['Juros abusivos têm limite. Seu contrato também.', 'Dívidas bancárias renegociadas com estratégia.'],
  dermatologia: ['Pele saudável, resultado natural.', 'Dermatologia com ciência, cuidado e olhar individual.'],
  cardiologia: ['Cuidar do coração é cuidar de tudo.', 'Cardiologia preventiva, perto de você.'],
  endocrinologia: ['Seu metabolismo, entendido de verdade.', 'Endocrinologia com escuta e plano individual.'],
  ortopedia: ['Sua coluna merece um especialista.', 'Do diagnóstico ao tratamento, com segurança.'],
  nutricao: ['Comer bem pode ser simples.', 'Resultados que duram começam no prato.'],
  nutricao_infantil: ['Nutrição que acompanha cada fase do seu filho.', 'Da gestação ao prato da criança, com leveza.'],
  psicologia: ['Falar sobre o que dói é o primeiro passo.', 'Psicoterapia com escuta, ética e acolhimento.'],
  odontologia: ['Sorria sem pensar duas vezes.', 'Odontologia completa para toda a família.'],
  quiropraxia: ['Seu corpo em equilíbrio de novo.', 'Alívio para a dor, de volta ao movimento.'],
};
