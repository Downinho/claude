# Prompt para o Claude Code — Site internacional da Downway (downway.com.br/en)

> Cole tudo abaixo da linha no Claude Code, aberto no repositório do site da Downway.

---

## 0. Quem você é nesta tarefa

Você é o engenheiro front-end líder e designer de interação construindo o **site internacional da Downway**, em inglês, publicado em `https://downway.com.br/en`. O site precisa parecer de uma empresa de tecnologia industrial que vende para fabricantes americanos e europeus: escuro, técnico, preciso, premium. Nada de cara de agência digital ou template.

Trabalhe em fases (seção 12). Ao fim de cada fase: rode o build, tire screenshots com Playwright em desktop (1440×900) e mobile (390×844), olhe as imagens, corrija o que estiver errado e só então siga. Faça commits pequenos com mensagens claras em português.

## 1. Contexto do negócio (não invente nada além disto)

- A Downway é uma empresa brasileira. O fundador é engenheiro mecânico com experiência prática em SolidWorks, CAD, desenho técnico, CNC, CAM, usinagem, fabricação, automação, Python, Node.js, SQL e IA aplicada à engenharia.
- O site internacional **não vende sites**. Vende **capacidade de engenharia remota para fabricantes**.
- Categoria: **Remote Engineering for Manufacturers**. Categoria de longo prazo: *Engineering Technology Company*.
- Mercados, em ordem: **Estados Unidos** → **Canadá** → **Reino Unido**. Europa continental (Alemanha, Países Baixos) vem depois.
- Clientes ideais (ICP):
  1. **Machine shops**: CNC, usinagem, tooling, fabricação, 10–100 pessoas. Dor: backlog de CAD, desenhos em papel, cotação travada.
  2. **Industrial manufacturers**: máquinas, equipamentos, dispositivos, 20–500 pessoas. Dor: ECOs acumuladas, documentação atrasada, produto novo.
  3. **Engineering firms**: projeto mecânico, 5–50 pessoas. Dor: picos de demanda, drafting que não fecha (serviço white-label).

### Produtos (preços são "starting at", em USD)

| Produto | Entrega | Preço de partida |
|---|---|---|
| CAD Sprint | Modelos 3D, montagens, desenhos técnicos, revisões | from $1,200 (S, ~20 h) · M $2,200 · L $4,000 |
| Manufacturing Documentation | BOM, DXF, STEP, PDF, desenhos de fabricação | from $75 per part · packages from $1,500 |
| Reverse Engineering | Peça → medições/scan fornecidos pelo cliente → CAD → desenho → fabricação | from $300 per part |
| Engineering Support | Planos mensais com SLA: Starter 20 h $1,200 · Growth 40 h $2,200 · Partner 80 h $4,000 | from $1,200/month |
| Industrial Automation | Python, workflows, dados, ERP, relatórios, IA, ferramentas internas | Discovery $500 (creditado no projeto) |

- Oferta de entrada: **"Send us a drawing"**. O cliente envia 1 desenho ou modelo (NDA antes, se quiser) e recebe em 48 horas úteis uma revisão de 1 página e uma proposta de preço fixo.
- CTAs fixos: **START A PROJECT** (agenda de call) e **SEND A DRAWING** (upload).

### Regras de honestidade (obrigatórias, valem para todo texto do site)

- **Não inventar** clientes, logos, depoimentos, números, certificações (ISO etc.), parceiros ou anos de mercado. Sem seção "Trusted by". Sem contador de "projects delivered".
- Portfólio inicial = **"Capability samples"**: peças feitas pela própria Downway e rotuladas assim em todo lugar. Campo de resultado sem métrica real mostra **"Project scope"**.
- Exclusões explícitas, em texto curto na página Process e nos termos:
  - "We do not provide PE-stamped drawings; final engineering approval remains with the client."
  - "We do not accept ITAR-controlled technical data."
- Onde faltar informação real (endereço, telefone, CNPJ, nome do fundador, links de redes, Calendly), use placeholders visíveis `[[PLACEHOLDER: ...]]` e liste todos no relatório final. Nunca invente esses dados.

## 2. Antes de escrever código: investigue o repositório

1. Mapeie o repositório atual: stack, como o site em português é gerado e publicado (hospedagem compartilhada/cPanel/FTP? Vercel? Netlify?) e se existe `/demo`.
2. Descubra a restrição de deploy. Se a hospedagem é estática (cPanel/FTP), o site precisa ser **100% estático** (HTML/CSS/JS gerados no build), e qualquer backend fica em serviço externo ou em um único endpoint PHP simples, se houver PHP disponível.
3. Escreva em `docs/site-en/PLANO.md`: stack escolhido, estrutura de pastas, como integrar `/en` sem quebrar o site em português nem `/demo`, e as dúvidas em aberto. Só então comece.

**Stack recomendado** (use outro só se o repositório já tiver algo melhor e você justificar no PLANO.md):

- **Astro** com saída estática (`output: 'static'`) e `base: '/en'`.
- **Tailwind CSS** com os tokens da seção 4.
- **globe.gl / three-globe** (Three.js) para o globo, carregado como ilha (`client:visible`), sem bloquear o carregamento.
- Dados geográficos: `world-atlas` (TopoJSON 110m) + `topojson-client`, **empacotados no build**, sem CDN em runtime.
- TypeScript estrito.

## 3. Arquitetura do site (`/en`)

| Rota | Propósito | Seções principais |
|---|---|---|
| `/en/` | Home | Hero com globo · 3 serviços principais · "How it works" em 4 passos · capability samples · por que Downway (engenheiro, fuso, preço fixo, NDA) · Engineering Support (planos) · CTA final |
| `/en/services/` | Hub | Os 5 produtos com "starting at" e link para cada página |
| `/en/cad-engineering/` | CAD Sprint + Reverse Engineering | Problema → o que entregamos → formatos → processo → preço → FAQ → CTA |
| `/en/documentation/` | Manufacturing Documentation | Idem, com exemplo de pacote (BOM, DXF, STEP, PDF) |
| `/en/support/` | Engineering Support | Tabela comparativa Starter/Growth/Partner com horas, SLA, condições (mínimo 3 meses, até 25% de rollover, excedente $60/h, escopo e exclusões) |
| `/en/automation/` | Industrial Automation | Exemplos de casos de uso (BOM export, cotação, relatórios, integração com ERP), Discovery pago |
| `/en/cases/` | Capability samples | Grid de cards; cada sample tem página `PROBLEM → APPROACH → DELIVERY → RESULT ("Project scope") → TECHNOLOGY` |
| `/en/process/` | Confiança | 10 etapas do SOP, NDA, segurança de arquivos (2FA, pasta por cliente, exclusão ao fim), QA com checklist, SLA, pagamentos (invoice em USD, ACH/wire, cartão), exclusões PE/ITAR |
| `/en/about/` | Fundador | Rosto, trajetória em CNC/CAM/usinagem, por que Brasil é vantagem (fuso de 1–2 h da costa leste dos EUA) |
| `/en/contact/` | Conversão | Duas colunas: "Send a drawing" (upload + NDA opcional) e "Book a 20-min call" (embed Cal.com/Calendly) |
| `/en/privacy/`, `/en/terms/` | Legal | Textos-base com aviso de revisão jurídica |

Navegação: Services (dropdown) · Cases · Process · About · botão **Start a project**. Seletor de idioma EN/PT no header (PT leva ao site atual).

Capability samples a prever (cards com placeholder de imagem até o fundador enviar os arquivos):

1. Bracket usinado com GD&T (ASME Y14.5)
2. Gabinete de chapa com planificação DXF e tabela de dobras
3. Estrutura soldada com lista de corte e simbologia de solda
4. Desenho antigo em papel redesenhado em CAD
5. Engenharia reversa a partir de medições
6. Montagem com vista explodida e BOM
7. Dispositivo de fixação para CNC
8. Revisão de pacote (ECO) com tabela de revisões
9. Script Python de exportação automática de BOM
10. Exemplo do relatório "Drawing review"

## 4. Design system

**Direção:** tecnologia industrial premium. Referências de clima: TRACTIAN, Hadrian, Formlabs, Linear. Fundo escuro, grids de blueprint, linhas finas, detalhes neon contidos, números grandes, tipografia técnica.

**Cores** (tokens CSS/Tailwind):

```
--bg:        #0A1220   fundo principal
--bg-2:      #0E1A2D   seções alternadas
--surface:   #111D33   cards
--surface-2: #12284A   card em destaque
--line:      #22365A   bordas e divisórias
--text:      #E6EDF7   texto principal
--text-2:    #A3B3C9   texto secundário
--muted:     #6F84A3   legendas
--accent:    #3FD0F0   ciano (CTAs, destaques, arcos do globo)
--blue:      #1E6BFF   azul do Brasil no globo
--warn:      #F2B84B   avisos e exclusões
--ok:        #7BE3A6   confirmações
```

- **Tipografia:**
  - Space Grotesk (títulos, 600/700)
  - IBM Plex Sans (texto, 400/500/600)
  - JetBrains Mono (eyebrows, rótulos, cotas e números técnicos)
  - Self-host via `@fontsource`, `font-display: swap`.
- **Escala:** 72 / 56 / 40 / 28 / 20 / 16 no desktop, reduzida com `clamp()` no mobile.
- **Assinaturas visuais:**
  - Eyebrow em mono maiúsculo com traço antes ("— CAD ENGINEERING").
  - Grid de blueprint sutil (linhas de 1 px em `--line`, 40 px) no fundo de algumas seções.
  - Linhas de cota (dimension lines com setinhas) decorando títulos.
  - Cards com borda de 1 px que acende em `--accent` no hover.
- **Ícones:** Lucide, traço de 1.5 px. Sem emojis, sem ilustrações cartoon, sem fotos de banco genéricas de "pessoas sorrindo em reunião".
- **Movimento:** entradas suaves (fade + 12 px) com IntersectionObserver. Nada de parallax exagerado. Respeitar `prefers-reduced-motion` em tudo.
- **Acessibilidade:** contraste WCAG AA, foco visível em ciano, navegação por teclado, `alt` em toda imagem, landmarks semânticos.

## 5. A peça central: o globo animado no hero

### Conceito narrativo

"Engenharia nascida no Brasil, conectada aos fabricantes do mundo." O globo conta isso em ~10 segundos:

1. **0–0,8 s** — O globo surge (fade + leve scale de 0,96 para 1). Escuro, com países em `#13233B`, bordas finas `#22365A` e uma atmosfera ciano suave. A câmera mostra a América do Sul.
2. **0,8–3,0 s — Preenchimento do Brasil.** O território brasileiro se enche de azul a partir de **São Paulo (−23,55, −46,63)** como uma onda radial, de `--blue #1E6BFF` até um brilho ciano nas bordas.
   - Implementação preferida: o polígono do Brasil convertido em **hexágonos** (`hexPolygonsData` do globe.gl, resolução 3–4). Cada hex acende com atraso proporcional à distância geodésica até São Paulo. Resultado: "tinta" se espalhando pelo país.
   - Ao final, a borda do Brasil ganha um contorno ciano com glow leve.
3. **3,0–4,2 s** — A câmera gira e sobe suavemente (`pointOfView` com transição de ~1,2 s) até enquadrar Brasil, América do Norte e Europa ao mesmo tempo.
4. **4,2–9,0 s — Conexões.** Arcos partem de São Paulo em sequência, com ~350 ms entre cada um, e animação de "traço correndo" (`arcDashLength` 0,4, `arcDashGap` 2, `arcDashAnimateTime` ~2000 ms), em ciano com gradiente para branco na ponta. Destinos e ordem (refletem a estratégia):
   1. Chicago, EUA (41,88, −87,63)
   2. Houston, EUA (29,76, −95,37)
   3. Atlanta, EUA (33,75, −84,39)
   4. Toronto, Canadá (43,65, −79,38)
   5. Birmingham, Reino Unido (52,48, −1,89)
   6. Stuttgart, Alemanha (48,78, 9,18) — arco tracejado e mais fraco (fase 2)
   7. Eindhoven, Países Baixos (51,44, 5,47) — tracejado e mais fraco (fase 2)

   Quando o arco chega, um **anel pulsante** (`ringsData`, `ringMaxRadius` ~3°, `ringPropagationSpeed` ~2, `ringRepeatPeriod` ~1200 ms) aparece no destino, com rótulo pequeno em JetBrains Mono ("CHICAGO · US").
5. **9 s em diante — Loop vivo.**
   - Rotação lenta automática (`autoRotateSpeed` ~0,35).
   - Arcos recorrentes ocasionais, saindo sempre do Brasil.
   - Pontos dos destinos com pulso discreto.
   - O Brasil continua aceso o tempo todo.

### Comportamento e interação

- Arrastar para girar no desktop. Zoom desligado. Ao passar o mouse sobre um destino, tooltip curto ("Toronto · Canada · same time zone as US East").
- O hover pausa a rotação; ela retoma 2 s depois de sair.
- **Mobile:** globo menor, abaixo do título (não atrás), arrastar desligado para não brigar com a rolagem, menos arcos (EUA, Canadá e Reino Unido) e menos hexágonos (resolução 3).
- **`prefers-reduced-motion`:** nada se move. Mostra o estado final (Brasil aceso, arcos estáticos) como imagem.
- **Sem WebGL, ou enquanto carrega:** um **poster estático** (WebP ~1600 px, gerado do próprio globo no estado final via script Playwright, salvo em `public/en/globe-poster.webp`), com o mesmo enquadramento, para não haver salto de layout.
- **Pausa fora da tela:** o loop de renderização para quando o hero sai da viewport (IntersectionObserver) e quando a aba está oculta (`visibilitychange`).

### Layout do hero

- **Desktop:** texto à esquerda (≈45% da largura), globo à direita, sangrando para fora da grade, com ~760 px de diâmetro.
  - Eyebrow: `— REMOTE ENGINEERING FOR MANUFACTURERS`
  - H1: **"Engineering capacity without another full-time hire."**
  - Sub: "CAD, manufacturing documentation and automation for manufacturers, delivered remotely by mechanical engineers."
  - Botões: **Start a project** (sólido ciano) · **Send a drawing** (contorno).
  - Linha de prova abaixo, em mono pequeno: `SolidWorks · ASME Y14.5 · STEP / DXF / PDF · NDA first · US-friendly hours`
- O texto do hero é o **LCP** e precisa aparecer imediatamente, sem esperar o globo.
- Grid de blueprint sutil atrás de tudo e um gradiente radial azul-escuro atrás do globo.

### Requisitos técnicos do globo

- Componente isolado `src/components/HeroGlobe.(tsx|ts)`, importado dinamicamente depois do primeiro paint.
- Orçamento: JS do globo ≤ ~250 KB gzip, carregado só nessa ilha. 60 fps em notebook comum. `devicePixelRatio` limitado a 2 (1,5 no mobile).
- Centralizar a sequência numa timeline (`src/lib/globeTimeline.ts`) com durações em constantes nomeadas, fáceis de ajustar.
- Destinos, cores e timings em `src/data/globe.ts`, para trocar sem mexer na lógica.
- Polígono do Brasil: país ISO numérico `076` no world-atlas.
- Sem erros nem warnings no console. Testar Chrome, Safari e Firefox.

## 6. Textos (copy) — inglês americano, direto, técnico, sem exageros

Escreva toda a copy seguindo estas regras: frases curtas, voz ativa, foco no problema do cliente, números só quando verdadeiros. Evite "world-class", "cutting-edge", "solutions", "synergy", "we are a Brazilian company offering many services".

Blocos-chave já definidos (use como estão):

**Três serviços na home**

- *CAD & Reverse Engineering* — "Sketches, legacy prints and worn parts turned into clean 3D models and shop-ready drawings."
- *Manufacturing Documentation* — "BOMs, DXF, STEP and drawing packages your shop floor and suppliers can build from."
- *Engineering Support* — "20 to 80 hours a month of engineering capacity with a written SLA. No new hire."

**How it works**

1. Send a drawing or book a call
2. Get a fixed-price scope in 48 business hours
3. We model, draw and check against your standards
4. You receive native files, STEP, DXF, PDF and BOM

**Por que Downway**

- Mechanical engineer with hands-on CNC/CAM background
- Your standards, your title block
- 1–2 hours from US East time
- Fixed prices, NDA first

**CTA final:** "Have a drawing that's slowing a job down? Send it. You'll get a review and a fixed quote in 48 business hours."

## 7. Formulário "Send a drawing" e agenda

- Campos: nome, empresa, e-mail corporativo, país, tipo de serviço (select), mensagem, upload (STEP, STP, IGES, SLDPRT, SLDASM, DWG, DXF, PDF, JPG, PNG; até 25 MB; vários arquivos), checkbox "Send me an NDA first", checkbox de consentimento de privacidade.
- Envio via serviço compatível com hospedagem estática que aceite upload de arquivo (ex.: Formspree, Basin ou Getform). Endpoint em variável de ambiente `PUBLIC_FORM_ENDPOINT`. Se a hospedagem tiver PHP, ofereça como alternativa um `contact.php` simples, com validação de tipo e tamanho, limite de taxa e envio por e-mail.
- Validação no cliente, estados de carregamento, sucesso e erro, mensagem de confirmação ("You'll hear back within one business day.").
- Proteção anti-spam: honeypot + atraso mínimo de envio. Sem CAPTCHA chato, a menos que o serviço exija.
- Agenda: embed do Cal.com ou Calendly com URL em `PUBLIC_BOOKING_URL`, carregado só quando a seção fica visível.

## 8. SEO, internacionalização e medição

- `<html lang="en">`. `hreflang` `en` ↔ `pt-BR` nas páginas equivalentes, mais `x-default`. Canonical em todas as páginas.
- Título e meta description únicos por página, focados em busca de comprador:
  - "Outsourced CAD drafting for machine shops"
  - "Manufacturing documentation services"
  - "Reverse engineering CAD services"
  - "Engineering support retainer"
- Schema.org: `Organization` + `ProfessionalService` na home (sem avaliações inventadas). `Service` em cada página de serviço. `BreadcrumbList`.
- `sitemap.xml` (só /en, ou integrado ao existente), `robots.txt` sem bloquear /en, Open Graph e Twitter cards com imagem 1200×630 gerada com o globo no estado final.
- **`/demo` continua `noindex` e fora de qualquer link do site em inglês.**
- GA4 (ID em `PUBLIC_GA_ID`), carregado só depois de consentimento, e Google Search Console (meta de verificação por variável). Eventos: `cta_start_project`, `cta_send_drawing`, `form_submit_success`, `booking_open`, `pricing_view`.

## 9. Performance e qualidade (critérios de aceite)

- Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO = 100 na home e em uma página de serviço.
- LCP < 2,5 s em 4G simulado. CLS < 0,05. Nenhuma fonte ou imagem bloqueando a renderização.
- Imagens em AVIF/WebP com `srcset`. Lazy-load abaixo da dobra.
- HTML válido. Zero erros de console. Links internos sem 404 (crie um teste que percorre todos).
- Funciona sem JavaScript: conteúdo e navegação visíveis; o globo vira o poster.

## 10. Testes visuais obrigatórios

Crie `scripts/screenshots.mjs` com Playwright:

- Capturar todas as páginas em 1440×900 e 390×844.
- Capturar o hero em 5 momentos da animação: 0,5 s, 2 s, 3,5 s, 6 s e 10 s. Para isso, exponha `window.__globeSeek(ms)` só no build de desenvolvimento.
- Salvar tudo em `artifacts/screenshots/`.
- **Olhe cada imagem** e corrija:
  - sobreposição de texto;
  - globo cortado de forma feia;
  - rótulos colidindo;
  - contraste ruim;
  - quebra de layout no mobile.

## 11. Deploy

- Documente em `docs/site-en/DEPLOY.md` o passo a passo para publicar `dist/` em `downway.com.br/en` com a hospedagem atual: pasta de destino, `.htaccess` com cache longo para assets com hash e cache curto para HTML, redirecionamento `/en` → `/en/`, e compressão.
- Gere também um `site-en.zip` pronto para enviar por cPanel, se for o caso.
- Não publique nada sozinho: entregue pronto para o fundador fazer o upload.

## 12. Fases de execução

1. **Investigação e plano** — `docs/site-en/PLANO.md` (seção 2).
2. **Fundação** — projeto Astro, tokens, fontes, layout base, header, footer e seletor de idioma, componentes base (Button, Eyebrow, Card, Section, DimensionLine, BlueprintGrid).
3. **Globo** — `HeroGlobe` completo conforme a seção 5, com timeline, fallback, poster e testes visuais dos 5 momentos. **Esta fase deve ficar excelente antes de seguir.**
4. **Home completa.**
5. **Páginas de serviço, cases, process, about** — com conteúdo da seção 1 e placeholders onde faltar dado real.
6. **Contato** — formulário com upload e agenda.
7. **SEO, analytics, legal.**
8. **Performance, acessibilidade, revisão visual final, DEPLOY.md e zip.**

## 13. Relatório final

Ao terminar, entregue um resumo com:

- o que foi construído;
- como rodar localmente;
- como publicar;
- os scores do Lighthouse;
- os screenshots principais;
- a **lista completa de `[[PLACEHOLDER]]`** que o fundador precisa preencher (fotos, nome, endereço, links, IDs, endpoint do formulário, URL da agenda, arquivos dos capability samples);
- qualquer decisão que você tomou e que ele deve validar.
