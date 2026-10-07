# Brief compartilhado — Campanhas cinematográficas Downway

Este arquivo é a fonte única para quem escreve cada campanha. Siga-o à risca.

## 1. Marca (fatos reais — não invente outros)

- **Downway** — empresa brasileira de engenharia digital para indústria e B2B, sediada em São Paulo. Site: **downway.com.br**.
- Conceito: *Downway é engenharia digital* / *Downway is digital engineering* / *Downway es ingeniería digital*.
- Assinatura: *Tecnologia que respeita o chão de fábrica.* / *Technology that respects the shop floor.* / *Tecnología que respeta la planta.*
- Frentes reais: engenharia e CAD, desenho técnico, design industrial, prototipagem, impressão 3D, CNC/CAM, automação de processos (planilhas, orçamentos, documentos, relatórios), IA aplicada dentro do processo, sites industriais, catálogos digitais, tráfego pago, social media, vídeo profissional.
- Provas reais que PODEM aparecer na copy (Brasil): site no ar em até 15 dias úteis; preço e prazo fechados por escrito; mensalidades sem fidelidade e saída sem multa; diagnóstico sem custo; direto com quem executa.
- Presença internacional declarada pelo cliente: São Paulo (origem), Estados Unidos, Espanha, Nova Zelândia, Austrália, Rússia.
- **Proibido** inventar números de resultado (ex.: "reduza 70% do tempo", "dobre suas vendas", "1ª página do Google", nº de clientes, anos de mercado, certificações, prêmios). Benefícios devem ser qualitativos ou baseados nas provas acima.
- WhatsApp comercial (Brasil): (11) 94015-9202. Nas versões EN/ES use só o site.

## 2. Identidade visual

- Cores: preto profundo `#0c0c0d`, grafite `#151516`, cinza industrial `#2a2a2d`, branco `#eef2f7`, azul elétrico `#2282f0`, ciano/azul claro `#5aa2f5`. Acento secundário pontual: amarelo/laranja industrial (luz de máquina, faixa de segurança).
- Azul é **acento e assinatura**, nunca filtro geral.
- Tipografia da marca (já em uso no site): **Bebas Neue** (títulos condensados, caixa alta), **IBM Plex Mono** (rótulos técnicos, coordenadas, HUD), **Inter** (texto corrido).
- Linguagem gráfica do site: cantoneiras de enquadramento, rótulo "REC", coordenadas e fusos em mono, grade de engenharia, cotas.
- Logo: capacete de segurança fundido com engrenagem (arquivo real `logo-downway.png`, azul) + palavra DOWN**WAY** (DOWN branco, WAY azul). **O logo NUNCA é gerado por IA**: é composto na pós-produção a partir do arquivo real. Nos prompts de IA, o quadro final é gerado como fundo limpo e o logo entra na edição.
- Telas de sites mostradas nos filmes devem ser **portfólio real** composto na pós: GV Drill (perfuração direcional), MT Engenharia (segurança do trabalho), Emite Engenharia (telecomunicações), Vértis Elevadores. Prompts de IA geram o monitor/ambiente com tela neutra ou verde (chroma) e a interface real entra na pós. Interfaces de software (planilha, CAD, automação, dashboard) também são compostas na pós em motion design, com aparência de software real.

## 3. Padrões de saída

Escreva em **português do Brasil** (títulos das seções, explicações). Exceções:
- **Prompts de geração de vídeo por IA: em inglês** (ferramentas como Veo 3, Sora, Runway Gen-4, Kling rendem melhor em inglês).
- Copy, locução, legendas e CTA: nas três versões, cada uma escrita **nativamente** (nada de tradução literal). EN = inglês global de negócios. ES = espanhol neutro latino-americano B2B.

Cada campanha é um arquivo Markdown com EXATAMENTE estas seções, nesta ordem (numere-as):

1. Nome da campanha
2. Público-alvo (setor industrial específico, cargo, porte)
3. Dor principal (e a consequência econômica)
4. Emoção desejada
5. Duração (Master 30–45 s · Curto 15 s · Ultracurto 6–8 s)
6. Formatos e proporções (16:9 master; reenquadramento 9:16 e 4:5 — diga como cada plano é reenquadrado, onde fica a zona segura de texto em 9:16 e 4:5)
7. Conceito visual (incl. a metáfora central e o gancho dos 2 primeiros segundos)
8. Storyboard completo (tabela: nº, tempo, imagem, texto em tela, áudio)
9. Plano a plano — **para cada plano do Master**, o bloco no formato da seção 4 abaixo
10. Movimento de câmera (resumo da gramática do filme)
11. Lentes recomendadas
12. Iluminação
13. Ambiente / locações
14. Direção de personagens (casting, figurino, EPIs, expressão)
15. Motion graphics (o que é composto na pós, com estilo e timing)
16. Texto em tela (PT/EN/ES lado a lado, máx. 5–8 palavras por tela)
17. Locução (roteiro com pausas e tempos)
18. Sound design (camadas e sincronia por plano)
19. Direção musical (início tensão grave → meio pulso rítmico → final resolução contida; BPM e referência de textura — nunca música corporativa motivacional)
20. CTA
21. Versão em português (roteiro final: texto em tela + locução + CTA, com tempos)
22. Versão em inglês (idem, nativa)
23. Versão em espanhol (idem, nativa)
24. Prompts de geração por IA (os blocos da seção 9 consolidados como prompts prontos para colar, em inglês, um por plano, incluindo a duração; mais o prompt do quadro final sem logo)
25. Prompts negativos (a lista-base da seção 5 abaixo + específicos da campanha)
26. Instruções de edição (ritmo, cortes, versões Curto 15 s e Ultracurto 6–8 s como **listas de corte referenciando os planos do Master** com tempos, e copy própria em PT/EN/ES para cada uma; quadro final de logo 2–3 s)
27. Conceito de thumbnail / capa (para 9:16, 4:5 e 16:9)
28. Legenda para redes (PT/EN/ES, com variação curta para LinkedIn e para Instagram/TikTok; poucas hashtags relevantes)
29. Variações de gancho A/B (pelo menos 3 ganchos alternativos dos 2–3 primeiros segundos, cada um com imagem + texto em PT/EN/ES, e a hipótese que cada um testa)

Antes da seção 1, inclua um bloco curto **"Raciocínio do diretor"** com: setor-alvo analisado, dor operacional mais forte, consequência econômica, transformação, metáfora visual escolhida, e a resposta honesta para "Um CEO industrial pararia o scroll aqui?" (se não, reescreva o gancho antes de entregar).

## 4. Formato obrigatório de cada plano (seção 9 e 24)

```
SHOT: [nº e nome]
SUBJECT:
ENVIRONMENT:
ACTION:
CAMERA: [lente + movimento + enquadramento]
LIGHTING:
MATERIALS:
COLOR:
ATMOSPHERE:
REALISM:
MOTION:
AUDIO:
TEXT: [texto em tela PT / EN / ES, ou "none"]
DURATION: [segundos]
```

Seção 9 pode ter os campos descritos em português ou inglês; a seção 24 é em inglês, compacta, pronta para colar.

## 5. Prompt negativo base (sempre incluir)

NO generic corporate stock footage. NO cheesy corporate smiles. NO handshake clichés. NO unrealistic factories. NO futuristic science-fiction machinery. NO impossible CNC operations. NO distorted human hands. NO malformed machines. NO floating random holograms. NO excessive neon. NO excessive blue tint. NO plastic-looking metal. NO fake CAD geometry. NO illegible technical drawings. NO random text. NO generated logos or brand marks. NO misspelled Downway logo. NO distorted logos. NO cheap transitions. NO excessive particles. NO cyberpunk aesthetic. NO cartoon aesthetic. NO low-resolution textures. NO artificial-looking people. NO exaggerated lens flares. NO overdone motion blur. NO generic motivational corporate music. NO visual clichés. NO missing safety equipment where required (safety glasses near machining, closed machine doors during CNC cutting on enclosed machines).

## 6. Realismo industrial (checar em cada plano)

- CNC: ferramenta gira no sentido correto, cavaco proporcional ao material (alumínio = cavaco brilhante em espiral; aço = cavaco curto azulado/escuro), fixação da peça (morsa, placa, dispositivo), refrigerante coerente, portas fechadas em centros de usinagem enclausurados.
- Impressão 3D: FDM com camadas visíveis (0,2 mm), bico e mesa coerentes; ou resina com plataforma invertida — não misture.
- CAD: geometria plausível (furos com rebaixo, raios, chanfros), cotas com tolerâncias reais (ex.: Ø20 H7), vistas ortogonais, cortes hachurados, carimbo/legenda.
- Robôs industriais: 6 eixos, base fixada, células com grade de segurança.
- Painéis elétricos: trilho DIN, disjuntores, bornes, canaletas, identificação de cabos.
- Pessoas: 25–55 anos, aparência real, uniforme/roupa neutra, EPIs (óculos, protetor auricular, botina) quando aplicável; expressão focada e séria, nunca sorriso exagerado.

## 7. Qualidade

- O gancho (0–2 s) deve comunicar INDÚSTRIA + PROBLEMA + ESCALA sem depender de texto.
- Planos de 1–5 s no meio; desacelerar no final; logo 2–3 s respirando.
- Escreva como diretor + engenheiro + estrategista B2B. Nada de clichê de marketing ("soluções de ponta", "bem-vindo ao futuro", "transforme seu negócio hoje").
