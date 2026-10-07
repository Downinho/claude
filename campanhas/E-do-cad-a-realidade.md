# CAMPANHA E — DO CAD À REALIDADE / FROM CAD TO REALITY / DEL CAD A LA REALIDAD

---

## Raciocínio do diretor

- **Setor-alvo analisado:** fabricantes de máquinas e equipamentos especiais (embalagem, alimentos, automação de linha) e engenharia/manutenção industrial de plantas médias. Precisam de peças sob medida, protótipos, dispositivos e engenharia reversa, quase sempre com prazo apertado e sem projetista dedicado.
- **Dor operacional mais forte:** a peça chega errada da usinagem porque o desenho estava incompleto: cota faltando, ajuste não especificado, sem tolerância geométrica, sem acabamento. O torneiro ou fresador "interpreta", e a peça não monta.
- **Consequência econômica:** material e hora-máquina refugados, novo orçamento e nova fila na oficina, máquina do cliente parada esperando, montagem atrasada e entrega comprometida. O custo não está no desenho. Está no retrabalho que um desenho ruim provoca.
- **Transformação:** de "tenho uma necessidade e um cursor piscando" para "tenho uma peça medida e dentro da tolerância". Isso passa por modelo 3D, desenho técnico completo, protótipo de verificação e um arquivo que qualquer oficina fabrica sem precisar adivinhar.
- **Metáfora visual escolhida:** **a continuidade de uma única peça.** O mesmo mancal flangeado atravessa todos os estados (vazio → esboço → sólido → vista explodida → desenho → plástico → alumínio → medida) sem mudar uma cota. A rima visual final é o modelo em wireframe sobreposto à peça real no mesmo ângulo, e eles batem.
- **Peça-herói (fixa em todos os planos):** mancal flangeado quadrado para rolamento 6204 (20 × 47 × 14 mm), em alumínio 6061-T6. Geometria completa no item 7.
- **Posicionamento honesto:** a Downway faz CAD, desenho técnico e prototipagem por impressão 3D. A usinagem CNC aparece como **a etapa de fabricação que o desenho torna possível**, filmada em oficina parceira ou do próprio cliente. A copy nunca diz que a Downway tem parque de máquinas.
- **"Um CEO industrial pararia o scroll aqui?"** Com uma tela vazia sozinha, não pararia: é abstrato demais. Por isso o gancho foi reescrito. O cursor pisca num viewport vazio, e o **vidro do monitor reflete o chão de fábrica**: um centro de usinagem parado e uma morsa vazia. Ao fundo se ouve o zumbido de oficina. Em 2 s ficam claros a indústria (o reflexo), o problema (a máquina espera, a peça não existe) e a escala (um galpão inteiro dependendo de um arquivo). Um engenheiro reconhece a situação na hora. Pararia, sim, e o gancho C (peça errada que não monta) fica no teste A/B como versão de dor explícita.

---

## 1. Nome da campanha

**DO CAD À REALIDADE**. EN: *From CAD to Reality*. ES: *Del CAD a la realidad*.
Linha de assinatura do filme: *Do modelo digital ao resultado físico.* / *From digital model to physical result.* / *Del modelo digital al resultado físico.*

## 2. Público-alvo

- **Setores:** fabricantes de máquinas especiais e equipamentos seriados de pequeno volume (embalagem, alimentos e bebidas, plásticos, automação de linha); engenharia de manutenção de plantas de processo e manufatura; desenvolvedores de produto industrial (startups de hardware, OEMs pequenos).
- **Cargos:** gerente de engenharia, coordenador de projetos mecânicos, gerente/supervisor de manutenção, diretor técnico, sócio-diretor de empresa de máquinas.
- **Porte:** PMEs industriais de 20 a 500 funcionários, com engenharia enxuta (0 a 3 projetistas) ou sem engenharia interna, que dependem de oficinas terceiras.
- **Momento de compra:** peça de reposição sem desenho (engenharia reversa), máquina nova com prazo de feira ou contrato, dispositivo/gabarito urgente, protótipo para validar antes de investir em usinagem ou molde.

## 3. Dor principal

**Desenho incompleto vira peça errada.** Sem ajuste (H7), sem tolerância geométrica, sem acabamento indicado, a oficina decide sozinha, e a peça volta. **Consequência econômica:** sucata de material, hora-máquina paga duas vezes, nova fila na oficina, montagem parada e prazo de entrega comprometido. Em manutenção, isso é equipamento parado esperando uma peça que "quase serviu". (Benefícios tratados de forma qualitativa, sem números inventados.)

## 4. Emoção desejada

Alívio técnico e confiança silenciosa, a sensação de "isso aqui foi feito por quem sabe". O movimento é de curiosidade (o que vai surgir dessa tela?) para satisfação de encaixe (o rolamento entra, o micrômetro confirma). Nada de euforia. O tom é o aceno de cabeça de um engenheiro.

## 5. Duração

| Versão | Duração | Uso |
|---|---|---|
| Master | **41 s** (14 planos, incluindo quadro final) | YouTube pre-roll, LinkedIn, site, apresentações comerciais |
| Curto | **15 s** | Reels, Shorts, TikTok, LinkedIn feed |
| Ultracurto | **7 s** | Bumper, stories, retargeting |

## 6. Formatos e proporções

- **Master 16:9** (3840 × 2160, entrega 1920 × 1080). Captação em 6K/8K open gate ou 4K com folga lateral para os reenquadramentos. As telas de CAD e o desenho (planos 2–6) são renderizados em 4K nativo e **também em 9:16 e 4:5 nativos**, com câmera virtual reposicionada, e nunca recortados.
- **9:16** (1080 × 1920). **Zona segura de texto:** de y = 290 px a y = 1380 px, com margens laterais de 64 px. Os 15% superiores ficam livres (UI do app) e os 28% inferiores também (legenda, botões, descrição). Texto sempre centralizado no terço médio-superior.
- **4:5** (1080 × 1350). **Zona segura:** margens de 54 px laterais e 70 px superior. Os 12% inferiores ficam livres. Texto no terço inferior, acima de y = 1180 px.

| Plano | Reenquadramento 9:16 | Reenquadramento 4:5 |
|---|---|---|
| 1 Tela vazia | Crop central no cursor. O reflexo da fábrica vira faixa vertical à esquerda do cursor | Crop central, leve recuo para manter o reflexo da máquina |
| 2 Esboço | Render nativo vertical: esboço centralizado, cotas no terço médio | Render nativo |
| 3 Features | Render nativo, órbita mais fechada | Render nativo |
| 4 Vista explodida | Render nativo **com explosão no eixo vertical** (o eixo do rolamento já é vertical: encaixe perfeito no 9:16) | Render nativo |
| 5 Desenho | Render nativo: folha em retrato com seção A-A em destaque, carimbo entra no plano 6 | Render nativo, vista frontal + corte A-A |
| 6 Detalhe cota | Crop central na cota Ø47 H7 | Crop central |
| 7 Impressão FDM | Crop central no bico | Crop central |
| 8 Teste de encaixe | Crop centrado nas mãos e no rolamento | Crop centrado |
| 9 Setup morsa | Crop na morsa + mão no manípulo. O rosto do operador sai (opcional) | Crop central |
| 10 Fresamento | Crop central na fresa (cavaco cruza o quadro vertical) | Crop central |
| 11 Mandrilamento | Crop central no furo | Crop central |
| 12 Medição | Crop no micrômetro + leitura digital. O HUD de tolerância sobe para o terço médio | Crop central, HUD no terço inferior |
| 13 Match CAD/real | Render vertical da sobreposição. A peça é filmada também com câmera rotacionada 90° (plate dedicado) | Crop central |
| 14 Quadro final | Layout vertical dedicado (logo no centro óptico, URL na zona segura) | Layout dedicado |

## 7. Conceito visual

**Uma peça, oito estados, zero cotas alteradas.** O filme é um único objeto mudando de matéria: pixel → linha → sólido → papel → plástico → metal → número. Cada transição é um **match-cut de forma**: o círculo Ø47 do esboço vira o furo do sólido, que vira o círculo do corte A-A, que vira o anel do bico de impressão desenhando o perímetro, que vira o furo mandrilado, que vira o contato de medição do micrômetro.

**Peça-herói: mancal flangeado quadrado para rolamento 6204, AL 6061-T6** (definição única, obrigatória em CAD, desenho, impressão e usinagem):

| Elemento | Especificação |
|---|---|
| Flange | 80 × 80 × 12 mm, cantos em planta R8 |
| Cubo (boss) | Ø62 × 20 mm de altura sobre a flange. **Altura total 32 mm** |
| Alojamento do rolamento | **Ø47 H7 (+0,025 / 0)**, profundidade 15 mm a partir da face superior do cubo, **Ra 1,6** |
| Furo passante | Ø30 (folga para o anel interno e o eixo Ø20) |
| Escalonamento | Ressalto plano de 8,5 mm entre Ø47 e Ø30 (apoio do anel externo) |
| Furos de fixação | 4× Ø9 passante, rebaixo **⌴ Ø15 ↧ 8,5** (parafuso ISO 4762 M8), padrão quadrado 60 × 60 mm |
| Arestas | Chanfro de entrada no alojamento 1 × 45°. Quebrar cantos vivos 0,5 × 45° |
| Concordância | R1 na base do cubo com a flange |
| Datums e GD&T | **A** = face inferior, planeza 0,02. **B** = eixo do Ø47 H7, perpendicularidade 0,02 em relação a A. Furos 4× Ø9 com posição Ø0,1 \| A \| B |
| Gerais | ISO 2768-mK, Ra 3,2 geral. Unidade mm. 1º diedro (ABNT/ISO E) |
| Carimbo | MANCAL FLANGEADO — ROLAMENTO 6204 · Material AL 6061-T6 · Escala 1:1 · Folha A3 · Desenho nº DW-0001 · Rev. A |
| Montagem (vista explodida) | Mancal + rolamento 6204-2RS + eixo Ø20 + 4× parafuso ISO 4762 M8 × 25 + chapa da estrutura da máquina (furos roscados M8) |
| Protótipo | FDM em PETG cinza, camada 0,2 mm, bico 0,4 mm. Função: verificar forma, interface e padrão de furação com a chapa real. **Não** valida o H7, que só se garante no metal |
| Fabricação | Op 10: faceamento da base + esquadrejamento 80 × 80. **Op 20 (filmada):** em morsa sobre paralelos, faceamento até 32 mm, desbaste adaptativo do cubo com fresa de topo de metal duro Ø12, 3 cortes, para alumínio; furação e rebaixo; acabamento do Ø47 H7 com cabeçote de mandrilar de precisão. Refrigeração por inundação (emulsão) |
| Inspeção | Peça limpa e estabilizada termicamente sobre desempeno de granito. Ø47 conferido com **micrômetro interno de 3 contatos digital (faixa 40–50 mm, resolução 0,001 mm)**, zerado em anel padrão. Leitura de cena: **47,012** (dentro de 47,000–47,025) |

**Gancho (0–2 s):** close de monitor com viewport CAD vazio, cursor piscando sobre a origem e eixos XYZ. No vidro, o reflexo de um centro de usinagem com a porta aberta e a morsa vazia. Som de galpão ao fundo. A mensagem chega sem texto: a máquina está pronta, falta a peça. Falta a engenharia.

**Paleta:** grafite e preto dominam. Alumínio é o "branco" do filme. Azul elétrico `#2282f0` aparece só em restrições de CAD, no HUD e no logo. Laranja/amarelo industrial pontual vem da luz de trabalho da máquina e da faixa de segurança do piso.

## 8. Storyboard completo

| Nº | Tempo | Imagem | Texto em tela (PT) | Áudio |
|---|---|---|---|---|
| 1 | 0:00–0:02.5 | Viewport CAD vazio, cursor piscando. Reflexo de CNC parado e morsa vazia no vidro | — | Ambiência de galpão abafada, drone grave entra |
| 2 | 0:02.5–0:05.5 | Esboço 80 × 80 com R8, cotas e restrições, esboço fica totalmente definido. Extrusão 12 | `01 · MODELO 3D` | Cliques secos de mouse, tick sutil a cada restrição |
| 3 | 0:05.5–0:08.5 | Órbita contínua: cubo Ø62, alojamento Ø47, furo Ø30, 4× rebaixo, chanfros, R1 | — | VO: "Antes do metal, vêm as decisões." |
| 4 | 0:08.5–0:11 | Vista explodida vertical: chapa, parafusos, mancal, rolamento, eixo | — | Whoosh mecânico curto, "clack" de encaixe ao reagrupar |
| 5 | 0:11–0:14 | Desenho A3 se compõe: vista superior, corte A-A hachurado, cotas, GD&T | `02 · DESENHO TÉCNICO` | VO: "Cota. Tolerância. Acabamento." |
| 6 | 0:14–0:16 | Macro de tela: Ø47 H7 (+0,025/0), Ra 1,6, ⊥ 0,02 A, carimbo | — | Tick seco de caneta digital |
| 7 | 0:16–0:19 | Bico FDM depositando perímetro do cubo, camadas 0,2 mm | `03 · PROTÓTIPO` | Canto dos motores de passo, pulso musical entra (96 BPM) |
| 8 | 0:19–0:22 | Mãos encaixam rolamento 6204 no protótipo e apoiam na chapa: furos alinham | — | VO: "Validar antes de cortar." Encaixe plástico seco |
| 9 | 0:22–0:24.5 | Operador (óculos) aperta morsa sobre paralelos, bate com martelo de borracha, fecha a porta | `04 · FABRICAÇÃO` | Batida de martelo no tempo, porta fecha, trava |
| 10 | 0:24.5–0:28 | Dentro do centro de usinagem: fresa Ø12 desbasta o cubo, cavaco brilhante em espiral, emulsão | — | Spindle sobe, cavaco batendo no vidro, chiado de refrigerante |
| 11 | 0:28–0:30.5 | Cabeçote de mandrilar finaliza Ø47, superfície espelhada surge | — | Corte mais limpo e agudo, música recua |
| 12 | 0:30.5–0:34.5 | Peça em granito, micrômetro interno no furo, catraca, leitura 47,012. HUD de tolerância | `05 · INSPEÇÃO` | Catraca: 3 cliques. VO: "Desenho certo, peça certa." |
| 13 | 0:34.5–0:38 | Wireframe CAD sobreposto à peça real no mesmo ângulo, linhas batem e se dissolvem | `Do modelo digital ao resultado físico.` | Resolução harmônica contida |
| 14 | 0:38–0:41 | Preto, textura industrial, logo DOWNWAY (composto), ENGENHARIA DIGITAL, downway.com.br, CTA | `Agende um diagnóstico` | VO: "Downway. Engenharia digital." Sub-grave final, silêncio |

## 9. Plano a plano

```
SHOT: 01 — BLANK VIEWPORT
SUBJECT: Monitor de engenharia (27–32", fosco com leve brilho de vidro), viewport CAD vazio cinza-grafite com grade sutil, tríade XYZ no canto, cursor em cruz piscando na origem. Interface composta na pós.
ENVIRONMENT: Sala de engenharia de chão de fábrica, com janela de vidro para o galpão atrás da câmera. No reflexo do monitor (plate real): centro de usinagem vertical com a porta aberta, morsa vazia na mesa, luz de trabalho acesa.
ACTION: Nada se move além do cursor (1 Hz) e de um leve respiro de foco do reflexo para a tela.
CAMERA: 100 mm macro, ~15° fora do eixo da tela, push-in imperceptível (2–3% em 2,5 s) em slider motorizado. Enquadramento: cursor no terço esquerdo, reflexo da máquina no terço direito.
LIGHTING: Luz da tela como chave. Galpão em 5600 K difuso, refletido. Ponto quente laranja da luz de trabalho da máquina no reflexo.
MATERIALS: Vidro do monitor com microarranhões reais, poeira mínima. Reflexo com perspectiva correta.
COLOR: Grafite #151516 dominante. A cruz do cursor em azul #2282f0, único azul do quadro.
ATMOSPHERE: Expectativa, silêncio antes do trabalho.
REALISM: Reflexo fisicamente coerente (espelhado, perspectiva certa). Máquina real, sem fantasia sci-fi. Viewport com aparência de CAD paramétrico real.
MOTION: Cursor pisca. Na pós, coordenadas em IBM Plex Mono no canto: X 0.000 Y 0.000 Z 0.000.
AUDIO: Ambiência de galpão filtrada (low-pass), compressor ao longe, drone grave em 40 Hz entra em fade.
TEXT: none (HUD de coordenadas apenas)
DURATION: 2.5 s
```

```
SHOT: 02 — SKETCH, FULLY DEFINED
SUBJECT: Esboço no plano superior: quadrado 80 × 80 centrado na origem, cantos R8. Cotas aparecem uma a uma. Ícones de restrição (coincidente, simétrico, horizontal/vertical, tangente). O esboço muda de "subdefinido" para "totalmente definido" (troca de cor de linha). Em seguida, extrusão de 12 mm com seta de direção.
ENVIRONMENT: Tela cheia (screen insert), com bordas do monitor e leve reflexo nos primeiros frames para ancorar no mundo físico.
ACTION: Cursor clica, cotas digitadas (80, 80, R8), restrições piscam em azul ao serem aplicadas, extrusão sobe a flange em 0,6 s com ease-out.
CAMERA: Câmera virtual CAD em vista ortogonal de topo, que gira para isométrica durante a extrusão.
LIGHTING: Render de viewport com sombreamento real de software (não estilizado), oclusão ambiente leve.
MATERIALS: Linhas de esboço finas e nítidas. Sólido cinza-alumínio fosco de viewport.
COLOR: Fundo grafite em gradiente. Linhas de restrição #2282f0, cotas #eef2f7.
ATMOSPHERE: Precisão, decisão.
REALISM: Modelado de verdade num CAD paramétrico (SolidWorks/Inventor/Onshape/FreeCAD), gravado em 4K, com marca do fornecedor oculta ou UI neutra recriada sobre a geometria exportada. Cotas legíveis, fonte técnica.
MOTION: Rótulo "01 · MODELO 3D" entra em IBM Plex Mono com cantoneiras de enquadramento.
AUDIO: Cliques de mouse reais (gravados), tick sutil por restrição, "thump" grave e seco na extrusão.
TEXT: 01 · MODELO 3D / 01 · 3D MODEL / 01 · MODELO 3D
DURATION: 3 s
```

```
SHOT: 03 — FEATURES
SUBJECT: Mesmo sólido recebendo, em sequência: cubo Ø62 × 20, corte do alojamento Ø47 × 15, furo Ø30 passante, 4× furo Ø9 com rebaixo Ø15 ↧ 8,5 no padrão 60 × 60, chanfro 1 × 45° na entrada do alojamento, R1 na base do cubo, quebra de cantos 0,5.
ENVIRONMENT: Viewport CAD em tela cheia. A árvore de features à esquerda ganha uma linha por operação (composta, sem marcas).
ACTION: Cada feature aparece com sua pré-visualização (amarela/translúcida) e se confirma. O ritmo acelera levemente.
CAMERA: Órbita contínua de 70° em torno do eixo Z, a 25° de elevação, mostrando o alojamento por cima no fim.
LIGHTING: Sombreamento de viewport com arestas em preto fino.
MATERIALS: Cinza-alumínio de viewport, sem reflexos falsos.
COLOR: Grafite e alumínio. Pré-visualização de feature em âmbar discreto.
ATMOSPHERE: Velocidade com controle.
REALISM: Geometria rigorosamente conforme a tabela do item 7: rebaixos com fundo plano, raios coerentes, chanfro só onde especificado.
MOTION: Nenhum texto extra. Rótulos de feature pequenos em mono ("ALOJ. Ø47 H7", "4× ⌴Ø15 ↧8,5").
AUDIO: VO entra em 0:05.8. Ticks rítmicos por feature, alinhados ao drone.
TEXT: none
DURATION: 3 s
```

```
SHOT: 04 — EXPLODED VIEW
SUBJECT: Montagem: chapa da estrutura (furos roscados M8), 4× parafuso ISO 4762 M8 × 25, mancal, rolamento 6204-2RS, eixo Ø20 com ressalto.
ENVIRONMENT: Viewport em fundo grafite com grade de engenharia esmaecida.
ACTION: A montagem explode ao longo do eixo vertical com linhas de trajetória tracejadas. Pausa de 0,4 s. Os componentes voltam e assentam: rolamento no alojamento, parafusos nos rebaixos.
CAMERA: Isométrica fixa com leve dolly-out virtual durante a explosão.
LIGHTING: Render realista (não viewport) com HDRI de estúdio neutro, para preparar a matéria física.
MATERIALS: Alumínio 6061 usinado (anisotropia sutil), aço do rolamento polido, vedação 2RS de borracha preta, parafusos com óxido preto.
COLOR: Neutro. Linhas de trajetória #5aa2f5 finas.
ATMOSPHERE: Clareza, entendimento do conjunto.
REALISM: Rolamento 6204 com proporções reais (20 × 47 × 14). Parafusos com cabeça cilíndrica sextavado interno corretos. Eixo com ressalto apoiando o anel interno.
MOTION: Trajetórias desenham e somem. Nada de partículas.
AUDIO: Whoosh mecânico curto (sem "swoosh" de trailer), "clack" metálico no reagrupamento.
TEXT: none
DURATION: 2.5 s
```

```
SHOT: 05 — TECHNICAL DRAWING
SUBJECT: Folha A3 com margem e carimbo. Vista superior (planta com 4× furos e padrão 60 × 60) e corte A-A (frontal) hachurado a 45°, mostrando Ø47 H7, Ø30, ressalto, rebaixos, R1, chanfros. Símbolo de 1º diedro.
ENVIRONMENT: Tela de desenho (insert) em leve perspectiva no monitor, que vira tela cheia.
ACTION: As vistas são projetadas a partir do sólido (linha de projeção), a hachura preenche o corte, as cotas entram em sequência: 80, 60, Ø62, 32, 12, 15, Ø47 H7, Ø30, 4× Ø9 ⌴Ø15 ↧8,5.
CAMERA: Push-in lento virtual sobre a folha, sem rotação.
LIGHTING: Fundo de folha branco-gelo #eef2f7 em tema de software claro, contrastando com o filme escuro (impacto visual).
MATERIALS: Linhas ISO 128 com espessuras corretas (contorno 0,5, cota 0,25, centro traço-ponto).
COLOR: Preto sobre branco. Linha de corte A-A com setas e letras.
ATMOSPHERE: Autoridade técnica.
REALISM: Desenho gerado do modelo real, legível no frame 4K: textos técnicos sem erro, hachura de corte só nas superfícies cortadas, furos com linha de centro.
MOTION: Rótulo "02 · DESENHO TÉCNICO" em mono.
AUDIO: VO "Cota. Tolerância. Acabamento.", uma palavra por entrada de cota correspondente.
TEXT: 02 · DESENHO TÉCNICO / 02 · TECHNICAL DRAWING / 02 · PLANO TÉCNICO
DURATION: 3 s
```

```
SHOT: 06 — CALLOUT DETAIL
SUBJECT: Detalhe macro da folha: "Ø47 H7 (+0,025/0)", símbolo de rugosidade Ra 1,6, quadro de controle ⊥ 0,02 A, datum A sob a face inferior. Pan até o carimbo: MANCAL FLANGEADO — ROLAMENTO 6204 · AL 6061-T6 · 1:1 · A3 · DW-0001 · REV. A · "Gerais ISO 2768-mK".
ENVIRONMENT: Tela cheia.
ACTION: A cota Ø47 H7 se acende em azul por 0,3 s e volta ao preto. Pan lateral até o carimbo.
CAMERA: Câmera virtual com zoom 4×, pan lateral suave.
LIGHTING: Tela clara uniforme.
MATERIALS: Tipografia técnica nítida.
COLOR: Preto/branco, o único acento azul no H7.
ATMOSPHERE: Detalhe que separa amador de profissional.
REALISM: Símbolos ISO 1302 / ISO 1101 corretos. Tolerância numérica do H7 coerente para Ø47 (+0,025/0).
MOTION: Highlight da cota, sem animação de texto exagerada.
AUDIO: Tick seco de caneta, sub-grave curto.
TEXT: none
DURATION: 2 s
```

```
SHOT: 07 — FDM PRINT
SUBJECT: Bico de impressora FDM (0,4 mm, latão) depositando o perímetro externo do cubo Ø62 em PETG cinza. Camadas de 0,2 mm visíveis. Flange já completa abaixo, furos com rebaixo visíveis.
ENVIRONMENT: Impressora FDM cartesiana aberta, mesa PEI texturizada, bancada de prototipagem em sala de engenharia.
ACTION: O bico percorre o círculo com velocidade constante. Na troca de camada, salto Z de 0,2 mm. O filamento sai com fio leve e brilhante.
CAMERA: 100 mm macro (ou lente probe 24 mm), câmera na altura do bico, rack focus do bico para as camadas.
LIGHTING: LED da própria impressora como chave (5000 K). Recorte lateral frio. Fundo escuro.
MATERIALS: PETG cinza semifosco com linhas de camada coerentes, aquecedor e bico com marcas de uso real.
COLOR: Cinza neutro. Laranja mínimo no LED de status do hotend.
ATMOSPHERE: Ritmo, construção paciente.
REALISM: FDM apenas (sem resina). Camadas uniformes, bico em contato com a camada, mesa coerente. Geometria igual à do CAD.
MOTION: Rótulo "03 · PROTÓTIPO". Preferir captura real em timelapse + tempo real.
AUDIO: Motores de passo (som melódico característico), ventoinha da peça. O pulso musical entra sincronizado ao passo do motor.
TEXT: 03 · PROTÓTIPO / 03 · PROTOTYPE / 03 · PROTOTIPO
DURATION: 3 s
```

```
SHOT: 08 — FIT CHECK
SUBJECT: Mãos de engenheiro (35–45 anos, mangas arregaçadas, sem anéis) encaixam um rolamento 6204-2RS real no alojamento do protótipo impresso. Depois apoiam o protótipo sobre a chapa da estrutura (aço, furos roscados M8), e os 4 rebaixos alinham com os furos.
ENVIRONMENT: Bancada de montagem ao lado da máquina do cliente, com chapa da estrutura em aço pintado cinza.
ACTION: O rolamento desliza e assenta no ressalto. O protótipo é girado e posicionado, e um parafuso M8 entra no primeiro furo sem forçar. A mão para e faz um leve gesto de confirmação (sem polegar para cima).
CAMERA: 50 mm, plano detalhe a 45° de cima, câmera na mão estabilizada com micro-respiração.
LIGHTING: Luz de bancada 4300 K lateral, preenchimento suave do galpão 5600 K.
MATERIALS: PETG com camadas visíveis, aço do rolamento, chapa com pintura epóxi e marcas de uso.
COLOR: Neutros. Toque amarelo de faixa de segurança no piso, fora de foco.
ATMOSPHERE: Validação, alívio contido.
REALISM: Mãos anatomicamente corretas (5 dedos, unhas reais). O encaixe no plástico é forma/interface, sem sugerir que o plástico valida o H7.
MOTION: Nenhum texto.
AUDIO: VO "Validar antes de cortar." Encaixe plástico seco, rosca do parafuso entrando.
TEXT: none
DURATION: 3 s
```

```
SHOT: 09 — WORKHOLDING
SUBJECT: Operador de usinagem (30–50 anos, óculos de segurança, protetor auricular tipo plug, uniforme grafite, botina) fixa o blank usinado na Op 10 (80 × 80 × 35, AL 6061-T6) em morsa de precisão de 6" sobre paralelos.
ENVIRONMENT: Centro de usinagem vertical enclausurado em oficina parceira: mesa com rasgos T, morsa alinhada, cone porta-ferramenta no fuso.
ACTION: Aperto inicial na manivela, duas batidas de martelo de borracha/antirrecuo sobre a peça (assentar nos paralelos), aperto final. O operador fecha a porta deslizante, que trava.
CAMERA: 35 mm, plano médio-fechado em ombro do operador, câmera segue a mão até a porta fechar em primeiro plano (wipe natural).
LIGHTING: Luz de trabalho interna LED da máquina, galpão 5600 K, contraluz amarelado de luminária alta.
MATERIALS: Alumínio fresado com marcas de faceamento, aço retificado da morsa, emulsão residual nos rasgos.
COLOR: Grafite da máquina, alumínio brilhante, amarelo pontual em etiqueta de segurança da porta (sem texto legível de marca).
ATMOSPHERE: Ofício, transição do digital para o físico.
REALISM: Paralelos sob a peça, peça presa pela flange com 8 mm de mordente, sobressaindo da morsa o suficiente para o cubo. Porta fechada antes do ciclo. EPIs corretos.
MOTION: Rótulo "04 · FABRICAÇÃO" (a etapa que o desenho viabiliza, sem afirmar parque próprio).
AUDIO: Martelo em sincronia com o pulso musical, porta deslizando e travando.
TEXT: 04 · FABRICAÇÃO / 04 · MANUFACTURING / 04 · FABRICACIÓN
DURATION: 2.5 s
```

```
SHOT: 10 — ADAPTIVE ROUGHING
SUBJECT: Fresa de topo de metal duro Ø12, 3 cortes, hélice alta para alumínio, desbastando o contorno do cubo Ø62 em trajetória adaptativa (trocoidal), engajamento radial baixo e grande profundidade axial.
ENVIRONMENT: Interior do centro de usinagem com porta fechada. Gotas na janela, emulsão escorrendo.
ACTION: Rotação horária vista de cima (M03), avanço constante. Cavacos de alumínio brilhantes, curtos e em espiral, sendo lançados. Emulsão leitosa em inundação sobre a zona de corte.
CAMERA: Lente probe 24 mm com proteção à prova d'água, ou câmera em caixa estanque dentro do enclausuramento, a 20 cm da ferramenta. 120 fps reproduzido a 50% em 1,5 s e depois tempo real.
LIGHTING: LED interno da máquina como chave dura de topo, recorte frio lateral. Gotas de emulsão com highlights.
MATERIALS: Alumínio 6061-T6 com acabamento de fresamento, cavaco espelhado, metal duro cinza-fosco.
COLOR: Prata e grafite. Sem tingimento azul.
ATMOSPHERE: Força controlada, o momento da verdade.
REALISM: Sentido de rotação correto, cavaco proporcional (alumínio = espiral brilhante, não pó), refrigeração coerente, porta fechada, ferramenta sem deflexão visível.
MOTION: HUD mono discreto no canto superior: "T03 Ø12 · S10000 M03 · M08". Nenhum outro elemento.
AUDIO: Spindle subindo de rotação, entrada no corte (tom agudo estável), cavaco batendo no vidro como chuva metálica, chiado de emulsão.
TEXT: none
DURATION: 3.5 s
```

```
SHOT: 11 — FINE BORING
SUBJECT: Cabeçote de mandrilar de precisão com inserto finalizando o alojamento Ø47 H7. A superfície passa de fosca para espelhada.
ENVIRONMENT: Interior da máquina, refrigeração reduzida, ambiente mais limpo.
ACTION: A barra desce em avanço lento no furo, retorna. Revela-se a parede interna brilhante com o ressalto plano no fundo.
CAMERA: 100 mm macro de cima, a 30° do eixo do furo, push-in lento seguindo a descida.
LIGHTING: Luz de topo suave refletindo um anel limpo na parede do furo.
MATERIALS: Alumínio com Ra 1,6 (brilho acetinado uniforme), cavaco fino tipo fita.
COLOR: Prata, preto profundo no fundo do furo.
ATMOSPHERE: Precisão, quietude.
REALISM: Mandrilamento coerente (rotação moderada, avanço baixo). Profundidade 15 mm e ressalto visíveis, chanfro de entrada 1 × 45°.
MOTION: Nenhum texto.
AUDIO: Tom de corte mais fino e agudo. A música recua para o drone.
TEXT: none
DURATION: 2.5 s
```

```
SHOT: 12 — INSPECTION
SUBJECT: Peça acabada, limpa e seca, sobre desempeno de granito preto. Inspetor de qualidade (40–55 anos, jaleco ou uniforme grafite) insere micrômetro interno digital de 3 contatos (faixa 40–50 mm) no Ø47 e gira a catraca. Ao lado, o anel padrão usado para zerar.
ENVIRONMENT: Sala de metrologia ou bancada de inspeção, ambiente controlado, luminária técnica.
ACTION: Três cliques de catraca, o visor estabiliza em 47,012. O inspetor olha a leitura, depois o desenho impresso ao lado (cota Ø47 H7 visível), e assente com a cabeça uma vez.
CAMERA: 85 mm, plano detalhe do instrumento → rack focus para o visor. Corte rápido para meio-primeiro plano do rosto do inspetor (2/3 de perfil).
LIGHTING: Luz difusa de cima 5000 K, sem reflexos estourados no visor. Leve recorte quente.
MATERIALS: Granito com microtextura, alumínio usinado, instrumento em aço e plástico técnico, papel A3 com dobra.
COLOR: Neutro. Azul só no HUD de aprovação.
ATMOSPHERE: Confirmação, autoridade técnica.
REALISM: Instrumento adequado ao H7 (paquímetro não basta para 25 µm). Peça estabilizada a 20 °C. Leitura no visor composta na pós para garantir nitidez.
MOTION: HUD mono ao lado do instrumento: "Ø47 H7 · 47,000 – 47,025 · 47,012 ✓". Rótulo "05 · INSPEÇÃO".
AUDIO: Catraca (3 cliques em sincronia com o pulso), VO "Desenho certo, peça certa." O pulso musical para no último clique.
TEXT: 05 · INSPEÇÃO / 05 · INSPECTION / 05 · INSPECCIÓN
DURATION: 4 s
```

```
SHOT: 13 — MATCH
SUBJECT: A peça real sobre o granito, girando lentamente em base giratória (ou câmera em arco). Sobreposto, o wireframe CAD da mesma peça, com câmera virtual travada pelo tracking.
ENVIRONMENT: Granito, fundo preto profundo, desfoque total.
ACTION: As arestas do wireframe batem com as arestas reais (cubo, furos, rebaixos). Em 1,5 s as linhas se dissolvem de fora para dentro e resta só a peça física.
CAMERA: 85 mm, câmera em arco lento de 20°, elevação de 30°.
LIGHTING: Chave suave grande em 45° de cima, recorte de contraluz definindo o contorno da flange, preto absoluto no fundo.
MATERIALS: Alumínio usinado com marcas de fresamento circulares no topo do cubo, furo espelhado, cantos quebrados.
COLOR: Alumínio e preto. Wireframe em #5aa2f5 a 60% de opacidade.
ATMOSPHERE: Resolução, o digital e o físico são a mesma coisa.
REALISM: Tracking 3D exato (matchmove com o modelo CAD real), sem deriva. Proporções idênticas.
MOTION: Frase central em Bebas Neue, entra após a dissolução.
AUDIO: Acorde de resolução contido, cauda longa, ambiente quase silencioso.
TEXT: Do modelo digital ao resultado físico. / From digital model to physical result. / Del modelo digital al resultado físico.
DURATION: 3.5 s
```

```
SHOT: 14 — END CARD
SUBJECT: Quadro final: preto #0c0c0d com textura industrial sutil (chapa de alumínio escovada sob luz rasante, quase invisível). Logo DOWNWAY real composto. Abaixo, "ENGENHARIA DIGITAL" e "downway.com.br". CTA.
ENVIRONMENT: Nenhum.
ACTION: Logo surge com fade de 8 frames, tracking de letras estático. Respiro de 2–3 s.
CAMERA: Estática.
LIGHTING: Luz rasante muito suave atravessando a textura de um lado a outro durante 3 s.
MATERIALS: Textura de metal escovado em 3–5% de visibilidade.
COLOR: Preto, branco #eef2f7, azul #2282f0 só no logo (WAY + ícone).
ATMOSPHERE: Assinatura sóbria.
REALISM: Logo do arquivo real logo-downway.png, nunca gerado.
MOTION: CTA em Inter Medium, 0,5 s após o logo.
AUDIO: VO "Downway. Engenharia digital." Sub-grave final, 0,5 s de silêncio.
TEXT: DOWNWAY · ENGENHARIA DIGITAL · downway.com.br · Agende um diagnóstico / DIGITAL ENGINEERING · Book an assessment / INGENIERÍA DIGITAL · Agenda un diagnóstico
DURATION: 3 s
```

## 10. Movimento de câmera

- **Gramática:** quase imóvel. Os movimentos são lentos, motivados e lineares (slider, órbita virtual, push-in), no ritmo de um engenheiro que pensa antes de agir. Nada de gimbal flutuando, whip pan ou drone.
- **Digital (planos 2–6):** câmera virtual com movimentos de CAD real (ortogonal → isométrica, órbita em eixo fixo). O espectador deve reconhecer o comportamento do software.
- **Físico (planos 7–12):** macro com push-in curto, câmera na mão estabilizada só no encaixe (plano 8, toque humano). Dentro da máquina, a câmera é fixa: quem se move é a ferramenta.
- **Resolução (13):** arco lento único, espelhando a órbita do plano 3. É a rima formal do filme.
- **Regra:** nenhum movimento de câmera começa sem motivo na ação.

## 11. Lentes recomendadas

| Lente | Planos | Por quê |
|---|---|---|
| 100 mm macro (f/4–5.6) | 1, 7, 11 | Textura de tela, camada FDM, parede do furo |
| Probe 24 mm (tipo Laowa 2× Macro Probe, à prova d'água) | 7 alt., 10 | Câmera dentro da impressora e da máquina, perspectiva única |
| 50 mm | 8 | Mãos e encaixe com perspectiva natural |
| 35 mm | 9 | Operador + máquina no mesmo quadro |
| 85 mm | 12, 13 | Instrumento e peça com compressão elegante, retrato do inspetor |
| Primes cinema (Cooke S4/Zeiss Supreme ou equivalentes) | todos | Contraste suave, sem distorção, sem flare exagerado |

## 12. Iluminação

- **Princípio:** luz motivada. Monitor, LED da impressora, luz interna da máquina, luminária de metrologia.
- **Temperatura:** base 5000–5600 K neutra. Acento quente 3200–4300 K pontual (luz de trabalho, luminária alta). O azul vem só da interface e do HUD, nunca de gel.
- **Contraste:** relação chave/preenchimento 4:1 a 8:1, pretos profundos sem esmagar o metal.
- **Metal:** bandeiras e difusores grandes para que o alumínio tenha gradiente (nunca chapado ou plástico). Um "stripe" de luz longo no plano 13 desenha a aresta da flange.
- **Dentro da máquina:** reforço com LED estanque fixo dentro do enclausuramento, ao lado da luz original, mantendo a direção de topo.

## 13. Ambiente / locações

1. **Sala de engenharia com vista para o galpão** (planos 1–6). Monitores reais, mesa limpa, desenho A3 impresso visível. A janela para o chão de fábrica dá o reflexo do plano 1.
2. **Bancada de prototipagem** (plano 7). Impressora FDM aberta, rolos de filamento, paquímetro, peças de teste.
3. **Bancada de montagem** junto a uma máquina real (plano 8), com chapa da estrutura e parafusos.
4. **Oficina de usinagem parceira ou do cliente** (planos 9–11). Centro de usinagem vertical enclausurado, piso com faixa de segurança amarela, organização 5S visível. Marcas de fabricante cobertas ou fora de foco.
5. **Sala de metrologia / inspeção** (plano 12–13). Desempeno de granito, instrumentos em estojos, bancada limpa.
Tudo em São Paulo (Grande SP / ABC), num único dia de filmagem para os planos físicos e um de captura/render para os digitais.

## 14. Direção de personagens

- **Elenco:** três pessoas reais da indústria, preferencialmente profissionais de verdade, não atores de publicidade.
  - **Engenheiro(a) projetista** (30–45): só mãos e um perfil de relance no plano 8. Camisa de manga longa arregaçada, sem relógio chamativo, unhas curtas.
  - **Operador(a) de usinagem** (30–50): uniforme grafite com marcas de uso, **óculos de segurança, protetor auricular tipo plug, botina**. Movimento econômico de quem faz isso todo dia.
  - **Inspetor(a) de qualidade** (40–55): uniforme ou jaleco neutro, óculos de leitura opcional. A única expressão facial do filme é um aceno de cabeça breve depois da leitura. Sem sorriso.
- **Direção:** ninguém olha para a câmera e ninguém "atua" satisfação. O ritmo é de procedimento: concentração, conferência, confirmação.
- **Diversidade natural** da indústria brasileira, sem estereótipo.

## 15. Motion graphics

| Elemento | Plano | Estilo | Timing |
|---|---|---|---|
| Coordenadas XYZ | 1 | IBM Plex Mono 18 pt, #eef2f7 60% | Estático, contador zerado |
| Interface CAD (esboço, features, árvore) | 2–4 | **Captura real de CAD paramétrico** com a peça modelada de verdade, UI neutralizada (sem marca de fornecedor) | Conforme ação, eases de software (sem bounce) |
| Desenho técnico | 5–6 | Folha gerada do modelo, exportada em vetor e animada por camadas (vistas → hachura → cotas → GD&T → carimbo) | 3 s + 2 s |
| Carimbo | 6 | Campos: MANCAL FLANGEADO — ROLAMENTO 6204 · AL 6061-T6 · 1:1 · A3 · DW-0001 · REV. A. O logo Downway no carimbo vem do arquivo real | Pan 1,2 s |
| Rótulos de etapa "01–05" | 2, 5, 7, 9, 12 | IBM Plex Mono caixa alta, cantoneiras de enquadramento azuis 1 px, canto superior esquerdo (16:9) / terço médio (9:16) | Entra 6 frames, sai 6 frames antes do corte |
| HUD de G-code | 10 | Mono 14 pt, 50% opacidade | Fixo durante o plano |
| Leitura do micrômetro | 12 | Visor recomposto com a leitura 47,012 nítida (tracking 2D) | Estabiliza no 3º clique |
| HUD de tolerância | 12 | "Ø47 H7 · 47,000 – 47,025 · 47,012 ✓", barra de tolerância com marcador posicionado proporcionalmente | Entra no 3º clique |
| Wireframe matchmove | 13 | Arestas do modelo real em #5aa2f5 60%, linha 1,5 px | 1,5 s de match, 1,5 s de dissolução |
| Headline | 13 | Bebas Neue, branco | Fade 10 frames |
| Quadro final | 14 | Logo real + Bebas Neue / Inter | 3 s |

Proibido: hologramas flutuantes, partículas, glitch, lens flare digital.

## 16. Texto em tela

| Plano | PT | EN | ES |
|---|---|---|---|
| 2 | 01 · MODELO 3D | 01 · 3D MODEL | 01 · MODELO 3D |
| 5 | 02 · DESENHO TÉCNICO | 02 · TECHNICAL DRAWING | 02 · PLANO TÉCNICO |
| 7 | 03 · PROTÓTIPO | 03 · PROTOTYPE | 03 · PROTOTIPO |
| 9 | 04 · FABRICAÇÃO | 04 · MANUFACTURING | 04 · FABRICACIÓN |
| 12 | 05 · INSPEÇÃO | 05 · INSPECTION | 05 · INSPECCIÓN |
| 12 (HUD) | Ø47 H7 · 47,000–47,025 · 47,012 ✓ | Ø47 H7 · 47.000–47.025 · 47.012 ✓ | Ø47 H7 · 47,000–47,025 · 47,012 ✓ |
| 13 | Do modelo digital ao resultado físico. | From digital model to physical result. | Del modelo digital al resultado físico. |
| 14 | ENGENHARIA DIGITAL · Agende um diagnóstico | DIGITAL ENGINEERING · Book an assessment | INGENIERÍA DIGITAL · Agenda un diagnóstico |

Nota: separador decimal com vírgula em PT/ES e ponto em EN, inclusive no HUD e no desenho da versão EN.

## 17. Locução

Voz masculina ou feminina madura (35–55), timbre grave e seco, perto do microfone, sem "voz de locutor". Fala como engenheiro sênior. Cinco intervenções, o resto é silêncio e som.

| Tempo | PT | Pausa/nota |
|---|---|---|
| 0:05.8–0:07.6 | "Antes do metal, vêm as decisões." | Pausa após "metal" |
| 0:11.4–0:13.8 | "Cota. Tolerância. Acabamento." | Cada palavra na entrada da cota correspondente, ~0,6 s entre elas |
| 0:19.6–0:21.2 | "Validar antes de cortar." | Neutro, quase anotação |
| 0:31.8–0:33.8 | "Desenho certo, peça certa." | Após o 3º clique da catraca |
| 0:38.4–0:40.2 | "Downway. Engenharia digital." | Pausa de 0,3 s após "Downway" |

## 18. Sound design

| Plano | Camadas | Sincronia |
|---|---|---|
| 1 | Room tone de galpão (low-pass 800 Hz), compressor distante, drone 40 Hz | Drone sobe de −30 a −18 dB |
| 2 | Cliques de mouse reais, digitação de valores, tick por restrição, thump na extrusão | Thump no frame da extrusão |
| 3 | Ticks por feature, tom ascendente leve | Ticks no grid do drone |
| 4 | Whoosh mecânico curto (ar + atrito metálico), clack de reagrupamento | Clack no assentamento do rolamento |
| 5–6 | Papel/caneta digital sutil, sub-grave por cota | Sub-grave nas palavras do VO |
| 7 | **Motores de passo** (gravação real), ventoinha | O padrão dos motores vira o pulso de 96 BPM |
| 8 | Rolamento deslizando no plástico, rosca M8 entrando | Encaixe no tempo 1 do compasso |
| 9 | Manivela da morsa, 2 batidas de martelo, porta deslizando e trava | Batidas nos tempos 2 e 4 |
| 10 | Spindle spin-up, corte estável, cavaco no vidro, chiado de emulsão | Corte de som seco na entrada do plano 11 |
| 11 | Corte fino de mandrilamento, gotejamento | Música recua para drone |
| 12 | Catraca do micrômetro (3 cliques), granito ("toc" na pousada) | Cliques = últimos 3 tempos do pulso. O pulso para |
| 13 | Ar da sala, resolução harmônica | Cauda longa |
| 14 | Sub-grave único, silêncio de 0,5 s | Logo no sub |

Mix: VO sempre −3 dB acima de tudo. Picos de máquina limitados para não cansar. Captação real de som direto em todos os planos físicos.

## 19. Direção musical

- **0:00–0:16 (tensão grave):** drone de 40–55 Hz com textura granular (cordas graves processadas, ar de fita). Sem melodia. Andamento livre.
- **0:16–0:31 (pulso rítmico):** **96 BPM**, nascido do ritmo real dos motores de passo da impressora, depois reforçado por percussão de metal amortecido (chapa, bloco, sample do martelo). Ostinato de duas notas em sintetizador analógico.
- **0:31–0:41 (resolução contida):** o pulso para no último clique do micrômetro. Um acorde aberto (quinta + nona) em piano preparado / cordas surdinadas, cauda longa, fecha em sub-grave no logo.
- **Referências de textura:** Jóhann Jóhannsson (*Sicario*, camadas graves), Trent Reznor & Atticus Ross (*The Social Network*, pulso eletrônico contido), Ben Frost (metal e ruído musical), Nils Frahm (piano mecânico, ataque de martelo).
- **Proibido:** ukulele, palmas, piano motivacional, "corporate uplifting", build-up épico de trailer.

## 20. CTA

- **Principal:** PT **Agende um diagnóstico** · EN **Book an assessment** · ES **Agenda un diagnóstico**
- **Alternativos:** Fale com a Downway / Talk to Downway / Habla con Downway · Conheça a Downway / Meet Downway / Conoce Downway
- **Apoio (PT, legenda e descrição):** diagnóstico sem custo · preço e prazo fechados por escrito · direto com quem executa · WhatsApp (11) 94015-9202.
- Destino: downway.com.br (EN/ES apenas site).

## 21. Versão em português

| Tempo | Texto em tela | Locução |
|---|---|---|
| 0:00–0:02.5 | X 0.000 Y 0.000 Z 0.000 (HUD) | — |
| 0:02.5–0:05.5 | 01 · MODELO 3D | — |
| 0:05.5–0:08.5 | — | "Antes do metal, vêm as decisões." |
| 0:08.5–0:11 | — | — |
| 0:11–0:14 | 02 · DESENHO TÉCNICO | "Cota. Tolerância. Acabamento." |
| 0:14–0:16 | (Ø47 H7 · Ra 1,6 no desenho) | — |
| 0:16–0:19 | 03 · PROTÓTIPO | — |
| 0:19–0:22 | — | "Validar antes de cortar." |
| 0:22–0:24.5 | 04 · FABRICAÇÃO | — |
| 0:24.5–0:30.5 | (HUD G-code) | — |
| 0:30.5–0:34.5 | 05 · INSPEÇÃO · Ø47 H7 · 47,000–47,025 · 47,012 ✓ | "Desenho certo, peça certa." |
| 0:34.5–0:38 | Do modelo digital ao resultado físico. | — |
| 0:38–0:41 | DOWNWAY · ENGENHARIA DIGITAL · downway.com.br · **Agende um diagnóstico** | "Downway. Engenharia digital." |

## 22. Versão em inglês

| Time | On-screen text | Voice-over |
|---|---|---|
| 0:00–0:02.5 | X 0.000 Y 0.000 Z 0.000 (HUD) | — |
| 0:02.5–0:05.5 | 01 · 3D MODEL | — |
| 0:05.5–0:08.5 | — | "Before the metal, come the decisions." |
| 0:08.5–0:11 | — | — |
| 0:11–0:14 | 02 · TECHNICAL DRAWING | "Dimensions. Tolerances. Finish." |
| 0:14–0:16 | (Ø47 H7 · Ra 1.6 on drawing) | — |
| 0:16–0:19 | 03 · PROTOTYPE | — |
| 0:19–0:22 | — | "Prove it before you cut it." |
| 0:22–0:24.5 | 04 · MANUFACTURING | — |
| 0:24.5–0:30.5 | (G-code HUD) | — |
| 0:30.5–0:34.5 | 05 · INSPECTION · Ø47 H7 · 47.000–47.025 · 47.012 ✓ | "Right drawing. Right part." |
| 0:34.5–0:38 | From digital model to physical result. | — |
| 0:38–0:41 | DOWNWAY · DIGITAL ENGINEERING · downway.com.br · **Book an assessment** | "Downway. Digital engineering." |

## 23. Versão em espanhol

| Tiempo | Texto en pantalla | Locución |
|---|---|---|
| 0:00–0:02.5 | X 0.000 Y 0.000 Z 0.000 (HUD) | — |
| 0:02.5–0:05.5 | 01 · MODELO 3D | — |
| 0:05.5–0:08.5 | — | "Antes del metal, están las decisiones." |
| 0:08.5–0:11 | — | — |
| 0:11–0:14 | 02 · PLANO TÉCNICO | "Cota. Tolerancia. Acabado." |
| 0:14–0:16 | (Ø47 H7 · Ra 1,6 en el plano) | — |
| 0:16–0:19 | 03 · PROTOTIPO | — |
| 0:19–0:22 | — | "Se valida antes de cortar." |
| 0:22–0:24.5 | 04 · FABRICACIÓN | — |
| 0:24.5–0:30.5 | (HUD G-code) | — |
| 0:30.5–0:34.5 | 05 · INSPECCIÓN · Ø47 H7 · 47,000–47,025 · 47,012 ✓ | "Plano correcto, pieza correcta." |
| 0:34.5–0:38 | Del modelo digital al resultado físico. | — |
| 0:38–0:41 | DOWNWAY · INGENIERÍA DIGITAL · downway.com.br · **Agenda un diagnóstico** | "Downway. Ingeniería digital." |

## 24. Prompts de geração por IA

> **Nota de produção:** os planos 2–6 e 13 (interface/desenho/wireframe) **não são gerados por IA**. São capturas e renders do modelo CAD real, porque a precisão é o argumento do filme. Os prompts desses planos geram só o *plate* físico (monitor, ambiente) com tela chroma para composição. Para os planos 7–12, **filmagem real é a recomendação**. Os prompts servem como previs ou plano B, sempre revisados por um engenheiro antes do uso.

**SHOT 01 — Blank viewport (2.5 s)**
```
Macro shot, 100mm lens, 15 degrees off-axis, of a matte 27-inch engineering monitor in a dim engineering office; the screen shows a uniform dark graphite field with a faint grid (to be replaced in post: neutral screen, clean edges for tracking). A thin blue crosshair cursor blinks at center-left. The monitor glass softly reflects, in correct mirrored perspective, an industrial shop floor through a window behind camera: an enclosed vertical machining center with its door open, an empty precision vise on the table, an orange work light on. Imperceptible slow push-in on motorized slider. Screen light as key, diffuse 5600K shop light in reflection, deep graphite tones, subtle real micro-scratches and dust on glass. Quiet, expectant, photoreal, cinematic, shallow depth of field. Duration 2.5 seconds.
```

**SHOT 02 — Sketch (3 s) — plate only**
```
Locked-off close shot of the same matte engineering monitor, bezel edges visible at frame borders, screen as flat chroma green for full-screen CAD insert, faint ambient reflection of office on glass, graphite surroundings, realistic, no text, no UI. Duration 3 seconds.
```
*(Insert: real parametric CAD capture, 80×80 sketch with R8 corners → fully defined → 12 mm extrude.)*

**SHOT 03 — Features (3 s) — insert only**
*(Real CAD capture: Ø62×20 boss, Ø47 H7×15 bore, Ø30 through, 4× Ø9 cbore Ø15 depth 8.5 on 60×60, 1×45° chamfer, R1 fillet, 70° orbit. No AI.)*

**SHOT 04 — Exploded view (2.5 s) — render only**
*(Real CAD render: steel frame plate with M8 tapped holes, 4× ISO 4762 M8×25 black-oxide screws, aluminum flanged housing, 6204-2RS bearing, Ø20 shouldered shaft, vertical explode and re-seat. No AI.)*

**SHOT 05 — Technical drawing (3 s) — plate only**
```
Slow push-in on a matte engineering monitor at slight perspective angle, screen as flat chroma green for a full-screen technical drawing insert, beside it on the desk a real printed A3 engineering drawing sheet slightly out of focus, graphite office, soft daylight-balanced practical light, photoreal, no readable text generated. Duration 3 seconds.
```
*(Insert: A3 drawing exported from the real model: top view + hatched section A-A, Ø47 H7 (+0.025/0), Ra 1.6, perpendicularity 0.02 to A, ISO 2768-mK, first-angle symbol, title block.)*

**SHOT 06 — Callout detail (2 s) — insert only**
*(Vector animation of the real drawing: Ø47 H7 callout highlight, pan to title block. No AI.)*

**SHOT 07 — FDM print (3 s)**
```
Extreme macro, 100mm macro lens at nozzle height, of an open cartesian FDM 3D printer with a 0.4mm brass nozzle depositing grey PETG filament along the outer perimeter of a 62mm cylindrical boss that rises from a square 80mm flange with four counterbored holes, sitting on a textured PEI build plate. Clearly visible uniform 0.2mm layer lines, nozzle in contact with the top layer, slight sheen on fresh extrusion, a tiny 0.2mm Z-hop at layer change. Rack focus from nozzle to layer lines. Printer LED key light 5000K, cool side rim light, dark background, small orange hotend status LED. Patient, rhythmic, photoreal, real wear marks on hotend. FDM only, no resin. Duration 3 seconds.
```

**SHOT 08 — Fit check (3 s)**
```
Detail shot, 50mm lens, 45 degrees from above, handheld with subtle stabilization: the anatomically correct hands of a 40-year-old engineer, sleeves rolled up, no rings, slide a real 6204-2RS deep groove ball bearing (steel, black rubber seals) into the bore of a grey PETG 3D-printed square flanged bearing housing with visible layer lines, the bearing seats against the internal shoulder. The hands then place the printed housing onto a grey painted steel machine frame plate; the four counterbored holes align with tapped holes and an M8 socket head cap screw threads in by hand without force. Brief subtle confirming pause, no thumbs up. Side bench light 4300K, soft 5600K shop fill, out-of-focus yellow floor safety stripe. Photoreal, real skin texture, natural. Duration 3 seconds.
```

**SHOT 09 — Workholding (2.5 s)**
```
Medium close shot, 35mm lens, over the shoulder of a 40-year-old CNC machinist wearing safety glasses, foam earplugs and a worn graphite work uniform, at an enclosed vertical machining center. He clamps a squared 80 x 80 x 35 mm aluminum 6061 block on precision parallels in a 6-inch machinist vise bolted to a T-slot table, taps the block down twice with a soft-face dead-blow mallet, final-tightens the vise handle, then slides the machine's enclosure door closed and it latches, door filling the foreground. Internal LED machine work light, 5600K shop light, warm high-bay backlight, faint coolant residue in T-slots, yellow safety label on door with no readable brand text. Realistic, unbranded machine, photoreal hands. Duration 2.5 seconds.
```

**SHOT 10 — Adaptive roughing (3.5 s)**
```
Close shot from inside an enclosed vertical machining center with the door closed, waterproof probe lens 20cm from the tool: a 12mm three-flute solid carbide end mill for aluminum, rotating clockwise viewed from above, cuts a trochoidal adaptive toolpath around a 62mm cylindrical boss on an aluminum 6061 block held in a precision vise. Low radial engagement, deep axial cut. Bright shiny curled aluminum chips ejected in short spirals, milky white flood coolant emulsion pouring onto the cutting zone, droplets on the inside of the window. Hard top LED machine light, cool side rim, silver and graphite tones, no blue tint. Shot at 120fps, first half slow motion then real time. Correct rotation direction, proportional chips, no deflection, no sparks. Photoreal, physically accurate machining. Duration 3.5 seconds.
```

**SHOT 11 — Fine boring (2.5 s)**
```
Macro shot, 100mm lens, looking 30 degrees down into a 47mm bore being finished by a precision fine boring head with a small carbide insert, inside an enclosed CNC machine, slow feed downward then retract, reduced coolant. The bore wall turns from matte to a uniform satin mirror finish, revealing a flat internal shoulder 15mm deep and a 1x45 degree entry chamfer, thin ribbon chips. Soft top light forming a clean ring reflection on the bore wall, deep black at the bottom of the bore. Quiet, precise, photoreal aluminum. Duration 2.5 seconds.
```

**SHOT 12 — Inspection (4 s)**
```
Detail shot, 85mm lens: a finished machined aluminum square flanged bearing housing (80mm flange, 62mm boss, 47mm bore, four counterbored holes) rests clean and dry on a black granite surface plate. The steady hands of a 50-year-old quality inspector insert a digital three-point internal micrometer into the 47mm bore and turn the ratchet thimble three clicks; a setting ring sits beside it. Rack focus to the instrument's digital display (display as clean plate for post insert). Cut to a two-thirds profile of the inspector, neutral graphite uniform, who glances at a printed A3 technical drawing beside the plate and gives one small nod, no smile. Diffuse 5000K overhead light, no blown reflections, faint warm rim. Photoreal, real skin texture, metrology lab realism. Duration 4 seconds.
```

**SHOT 13 — Match (3.5 s) — plate**
```
Product shot, 85mm lens, slow 20-degree camera arc at 30-degree elevation around a machined aluminum 6061 square flanged bearing housing on a black granite surface plate: 80 x 80 x 12mm flange with R8 corners, 62mm boss 20mm tall, 47mm satin bore with flat shoulder, four counterbored holes, broken edges, circular face-milling marks on top of the boss. Large soft key light 45 degrees from above, a long stripe rim light tracing the flange edge, absolute black background. Tracking markers-free clean plate, rigid stable motion for 3D matchmove. Photoreal machined metal, no plastic look. Duration 3.5 seconds.
```
*(Post: matchmoved wireframe from the real CAD model, #5aa2f5 at 60%, dissolve outside-in.)*

**SHOT 14 — End card background, no logo (3 s)**
```
Static full-frame background: deep black #0c0c0d with a barely visible brushed aluminum texture (3-5% visibility), a very soft raking light slowly sweeping left to right across the texture over 3 seconds. Empty center for logo compositing. No text, no logo, no symbols, no particles. Duration 3 seconds.
```

## 25. Prompts negativos

**Base (sempre):**
```
NO generic corporate stock footage. NO cheesy corporate smiles. NO handshake clichés. NO unrealistic factories. NO futuristic science-fiction machinery. NO impossible CNC operations. NO distorted human hands. NO malformed machines. NO floating random holograms. NO excessive neon. NO excessive blue tint. NO plastic-looking metal. NO fake CAD geometry. NO illegible technical drawings. NO random text. NO generated logos or brand marks. NO misspelled Downway logo. NO distorted logos. NO cheap transitions. NO excessive particles. NO cyberpunk aesthetic. NO cartoon aesthetic. NO low-resolution textures. NO artificial-looking people. NO exaggerated lens flares. NO overdone motion blur. NO generic motivational corporate music. NO visual clichés. NO missing safety equipment where required (safety glasses near machining, closed machine doors during CNC cutting on enclosed machines).
```

**Específicos da campanha E:**
```
NO counterclockwise spindle rotation. NO sparks when milling aluminum. NO dusty powder chips on aluminum, chips must be bright curled spirals. NO dry cutting where flood coolant is shown. NO open enclosure door during cutting. NO part clamped without parallels or floating in the vise. NO tool deflection or wobbling end mill. NO resin printer or inverted build platform. NO missing layer lines on FDM prints. NO nozzle hovering away from the layer. NO geometry changes between shots: flange 80x80x12 with R8 corners, boss Ø62x20, bore Ø47, four counterbored holes on a 60x60 square, always. NO extra holes, NO missing counterbores, NO asymmetric bolt pattern. NO bearing that does not match a 6204 (20x47x14) proportion. NO vernier caliper used for the H7 bore check. NO melted or warped metal. NO chrome-like mirror finish on the whole part (only the bore is satin bright). NO thumbs up. NO celebration gestures. NO glowing wireframes floating in the room. NO gloves caught near rotating tools. NO jewelry on hands near machinery. NO visible machine or software brand names.
```

## 26. Instruções de edição

**Ritmo master:** abertura lenta (2,5 s de quase nada), aceleração gradual no digital (3 → 2,5 s), plano 7 marca a entrada do pulso de 96 BPM e os cortes passam a cair no tempo, aceleração máxima em 9–11 e desaceleração em 12–13 (o filme "respira" com a medição). Logo 3 s.

**Cortes:**
- Todos secos, sem transições de pacote. As passagens entre estados são **match-cuts de forma**:
  - 3 → 4: alojamento Ø47 visto de cima → mesma posição na isométrica explodida.
  - 6 → 7: círculo Ø62 do desenho → perímetro Ø62 sendo impresso (mesmo diâmetro na tela, mesma posição).
  - 8 → 9: mão soltando o protótipo → mão do operador no manípulo da morsa (mesma direção de movimento).
  - 11 → 12: furo espelhado visto de cima → contatos do micrômetro entrando no mesmo furo.
- Corte de som seco do spindle no frame de entrada do plano 11 (contraste de silêncio).
- Correção de cor: neutra, pretos a 3–5 IRE, alumínio sem tingir. LUT única para planos físicos, ajuste fino das telas para combinar o ponto de branco.
- Legendas abertas (burn-in) em versões de feed, Inter Medium, caixa baixa, dentro da zona segura.

**Versão Curta 15 s — lista de corte**

| Ordem | Plano Master | Trecho usado | Duração | Texto em tela PT / EN / ES |
|---|---|---|---|---|
| 1 | 01 | 0:00.0–0:01.5 | 1,5 s | — |
| 2 | 02 | 0:03.5–0:05.0 (definição + extrusão) | 1,5 s | 01 · MODELO 3D / 01 · 3D MODEL / 01 · MODELO 3D |
| 3 | 04 | 0:08.8–0:10.3 | 1,5 s | — |
| 4 | 06 | 0:14.0–0:15.5 | 1,5 s | 02 · DESENHO TÉCNICO / 02 · TECHNICAL DRAWING / 02 · PLANO TÉCNICO |
| 5 | 07 | 0:16.5–0:17.5 | 1,0 s | 03 · PROTÓTIPO / 03 · PROTOTYPE / 03 · PROTOTIPO |
| 6 | 10 | 0:25.0–0:27.0 | 2,0 s | 04 · FABRICAÇÃO / 04 · MANUFACTURING / 04 · FABRICACIÓN |
| 7 | 12 | 0:31.0–0:33.5 (com HUD ✓) | 2,5 s | Ø47 H7 · 47,012 ✓ |
| 8 | 13 | 0:35.5–0:37.0 | 1,5 s | Do CAD à peça certa. / From CAD to the right part. / Del CAD a la pieza correcta. |
| 9 | 14 | quadro final | 2,0 s | DOWNWAY · Agende um diagnóstico / Book an assessment / Agenda un diagnóstico |

Locução 15 s: PT "Desenho certo, peça certa. Downway. Engenharia digital." · EN "Right drawing. Right part. Downway. Digital engineering." · ES "Plano correcto, pieza correcta. Downway. Ingeniería digital." (entra em 0:10,0).

**Versão Ultracurta 7 s — lista de corte**

| Ordem | Plano Master | Trecho usado | Duração | Texto em tela PT / EN / ES |
|---|---|---|---|---|
| 1 | 05 | 0:12.0–0:13.2 | 1,2 s | — |
| 2 | 10 | 0:25.5–0:26.8 | 1,3 s | — |
| 3 | 12 | 0:31.5–0:33.5 | 2,0 s | Ø47 H7 · 47,012 ✓ |
| 4 | 14 | quadro final | 2,5 s | Do CAD à peça. DOWNWAY / From CAD to part. DOWNWAY / Del CAD a la pieza. DOWNWAY |

Sem locução. Só som: corte de fresa → 3 cliques de catraca → sub-grave.

**Quadro final de logo:** 2–3 s em todas as versões, logo do arquivo real `logo-downway.png`, nunca gerado.

## 27. Conceito de thumbnail / capa

- **Ideia:** a peça-herói dividida ao meio na vertical. A metade esquerda é wireframe/desenho técnico (linhas azuis, cota Ø47 H7 visível), a metade direita é o alumínio usinado real, com o furo espelhado. A junção é exata.
- **16:9:** peça à direita do centro. Título à esquerda em Bebas Neue: **DO CAD À REALIDADE** (EN: FROM CAD TO REALITY / ES: DEL CAD A LA REALIDAD). Rótulo mono "Ø47 H7 · 47,012 ✓" abaixo.
- **9:16:** peça centralizada a 40% da altura, título acima (y 300–520 px), rótulo mono abaixo da peça, dentro da zona segura. Nada nos 28% inferiores.
- **4:5:** peça centralizada, título no topo com margem de 70 px, logo pequeno (composto) no canto inferior direito acima da zona livre.
- Fundo preto com textura sutil e azul só nas linhas do wireframe.

## 28. Legenda para redes

**PT — LinkedIn**
> Toda peça errada começa num desenho incompleto.
> Sem ajuste, sem tolerância, sem acabamento indicado, a oficina adivinha e a montagem para.
> Na Downway, a peça sai do CAD com modelo 3D, desenho técnico completo e protótipo de verificação antes do primeiro corte. O arquivo chega à usinagem pronto para fabricar.
> Diagnóstico sem custo, preço e prazo fechados por escrito, direto com quem executa.
> downway.com.br · WhatsApp (11) 94015-9202
> #EngenhariaMecânica #DesenhoTécnico #Prototipagem

**PT — Instagram/TikTok**
> Do cursor piscando ao micrômetro. Ø47 H7, conferido.
> Agende um diagnóstico: link na bio.
> #CAD #Usinagem #Impressão3D


**EN — LinkedIn**
> Most wrong parts start as incomplete drawings.
> No fit, no tolerance, no surface finish called out, and the machine shop is left guessing.
> Downway takes your part from CAD to a complete technical drawing and a fit-check prototype before the first cut, so it reaches manufacturing ready to make.
> Book an assessment: downway.com.br
> #MechanicalEngineering #CAD #Prototyping

**EN — Instagram/TikTok**
> From a blinking cursor to a micrometer reading. Ø47 H7, in tolerance.
> Book an assessment, link in bio.
> #CAD #Machining #3DPrinting

**ES — LinkedIn**
> Casi toda pieza mal fabricada empieza en un plano incompleto.
> Sin ajuste, sin tolerancias, sin acabado indicado, el taller interpreta y el montaje se detiene.
> En Downway llevamos tu pieza del CAD a un plano técnico completo y a un prototipo de verificación antes del primer corte, lista para fabricar.
> Agenda un diagnóstico: downway.com.br
> #IngenieríaMecánica #CAD #Prototipado

**ES — Instagram/TikTok**
> Del cursor parpadeando al micrómetro. Ø47 H7, dentro de tolerancia.
> Agenda un diagnóstico, link en la bio.
> #CAD #Mecanizado #Impresión3D

## 29. Variações de gancho A/B

| Gancho | Imagem (0–3 s) | Texto PT / EN / ES | Hipótese testada |
|---|---|---|---|
| **A (master): Tela vazia + reflexo da fábrica** | Viewport vazio, cursor piscando, CNC parado e morsa vazia refletidos no vidro | — (só HUD X 0.000 Y 0.000 Z 0.000) | **Curiosidade.** O mistério de "o que vai nascer daqui" segura o engenheiro sem nenhuma palavra |
| **B: Resultado primeiro** | Macro do micrômetro no furo: 3 cliques, leitura 47,012, HUD ✓. Corte seco para o cursor piscando na tela vazia | "Antes disso, era um cursor." / "Before this, it was a cursor." / "Antes de esto, era un cursor." | **Autoridade.** Abrir pela prova técnica (tolerância confirmada) prende mais o público de engenharia do que o processo |
| **C: Peça errada** | Mão tenta encaixar um rolamento 6204 num mancal usinado: ele entra torto e trava. Close na folga irregular. Corte para o desenho sem tolerância (cota "Ø47" sozinha, sem H7) | "Faltou uma tolerância." / "One tolerance was missing." / "Faltó una tolerancia." | **Dor explícita.** Mostrar o retrabalho converte melhor gerentes de manutenção e engenharia do que mostrar o processo ideal |
| **D: Split CAD/real** | Tela dividida: à esquerda, o wireframe girando, à direita a peça real girando em sincronia perfeita no mesmo ângulo. As metades se fundem | "Mesma peça. Duas realidades." / "Same part. Two realities." / "Misma pieza. Dos realidades." | **Satisfação visual.** O "encaixe perfeito" (oddly satisfying) aumenta retenção em Reels/TikTok |

Métrica de decisão: retenção a 3 s e a 50% do vídeo, CTR para downway.com.br e conversas iniciadas no WhatsApp (PT). Vence o gancho com melhor custo por diagnóstico agendado.
