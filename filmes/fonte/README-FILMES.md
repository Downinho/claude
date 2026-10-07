# Motor de filmes Downway — guia para escrever um filme

Diretório: `/tmp/claude-0/-home-user-claude/a03cb1db-2c4d-5e0f-b6c9-f33194c8ef71/scratchpad/film` (abaixo: `$F`).
Servidor HTTP já roda em `http://localhost:4700/` servindo `$F`. Se cair: `cd $F && nohup python3 -m http.server 4700 >/dev/null 2>&1 &`.

**Referência obrigatória:** leia `$F/films/E.js` inteiro antes de começar — é o filme modelo (estrutura, nível de acabamento, rótulos, legendas, assinatura final, cues de áudio).
Leia também `$F/engine2d.js` (helpers 2D globais) e `$F/kit3d.js` (kit 3D).

## Formato
- 1080×1920 (9:16), 24 fps, 30–42 s. Sem locução (não há TTS): a mensagem vive no texto em tela; as falas da locução do roteiro viram legendas curtas (`caption`).
- Três idiomas: `render2d(t, lang)` recebe `"pt" | "en" | "es"`. Todo texto vem de um objeto `COPY` com as três versões, escritas nativamente (use a copy do livro da campanha).
- Texto importante entre y=250 e y=1650 (zona segura do Reels/Stories).

## Contrato do módulo `films/X.js`
```js
export const DURATION = 38;
export const IMAGES = ["gv-drill.jpg"];       // opcional: imagens de $F/assets a carregar em IMG[nome]
export let stage;                            // palco 3D (kit.createStage) — obrigatório se usar 3D
export async function setup(kit, mode) { if (!kit) return; ... }  // kit = null no modo "comp": retorne cedo
export function render3d(t) { ...; return true/false }  // true = este quadro tem 3D (o host chama stage.render())
export function render2d(t, lang, has3d) { ... }        // desenha por cima (ou a tela inteira quando has3d=false)
```
- `render3d` precisa ser **determinístico em t** (nada de estado acumulado entre quadros, nada de Math.random em tempo de render — use `rnd(i)` ou valores sorteados uma vez no setup).
- Quando `has3d=false`, `render2d` deve pintar o fundo inteiro (cenas 2D puras: interfaces, desenhos, buscas).
- O 3D é caro (~1,1 s por quadro). **Orçamento: no máximo ~600 quadros com 3D por filme (25 s).** Cenas de interface/software devem ser 2D (rápidas).
- Chame `cue(t, tipo, {...})` no topo do módulo para a trilha (lista abaixo).

## Helpers 2D (globais, de engine2d.js)
`ctx, W, H, C (cores), F.d(px)/F.m(px)/F.b(px,peso) (fontes Bebas/Plex Mono/Inter), txt(s,x,y,{font,color,align,ls,alpha,glow}), measure, title(linhas,x,y,t,t0,t1,{font,color,lh}), clamp, lerp, seg(t,a,b), E.* (easings), rnd(i), rrect, chip, browser(x,y,w,h,img,{url,scroll,reveal}), background(t,{...}), vignette(), grain(t,a), signature(t,t0,lang,cta), keyframes(t,K), IMG[...]`.
No E.js há funções locais `label`, `caption`, `corners` — copie o padrão (rótulo mono no topo-esquerdo y≈296, legenda Inter 40 em y≈1560, cantoneiras discretas).
Sempre termine `render2d` com `vignette(); grain(t, 0.045);` e use `signature(t, tFinal, lang, CTA)` nos últimos ~3,5 s.

## Kit 3D (kit3d.js)
`createStage({bg, fov, bloom, env:{top,left,right,fill,front,warm,rimColor}, envIntensity, fogNear, fogFar, exposure})` → `{THREE, scene, camera, renderer, bloom, look(pos,target,fov), render()}`.
Materiais `MAT.aluminum() machined() steel() darkSteel() chrome() paint(cor) yellow() rubber() plastic(cor) glass() emissive(cor,int) floor()`.
Luzes `keyLight(scene,{pos,intensity,size})`, `rimLight(scene,{pos,intensity,color,target})` (mantenha azul fraco: intensidade ≤ 10), `tubeLight(scene,len,pos,rotY,int)` (luminária industrial emissiva).
Peças prontas: `bearingHousing(mat)`, `bearing6204()`, `boltM8()`, `addFloor(scene,y)`. Unidades: 1 = 100 mm.
Escala de câmera: objeto de ~1 unidade inteiro em 9:16 com fov 30 → distância ~3,5–5.

## Assets ($F/assets)
`logo-downway.png` (só na assinatura — nunca desenhe outro logo), portfólio real: `gv-drill.jpg, mt-engenharia.jpg, emite-engenharia.jpg, vertis-elevadores.jpg, ursular.jpg, primeiro-brinco.jpg` (prints 1568×726 da home de cada site), fotos `fabrica.jpg, engenharia-monitores.jpg` (1920×1080).

## Cues de áudio (vocabulário — use só estes)
Ambiência/música: `drone {until, level}` (tensão grave), `room {until}` (ambiência de galpão), `pulse {bpm, until}` (pulso eletrônico contido), `resolve {dur}` (acorde de resolução), `sub` (sub-grave final), `end` (impacto contido da assinatura), `freeze` (corte seco para silêncio com sucção), `riser {dur}`.
Interface: `click` (mouse), `key` (uma tecla), `keys {until}` (digitação contínua), `notif` (notificação discreta), `tick` (tique digital), `pen` (caneta digital), `clock {until, accel}` (relógio; accel=true acelera), `relay` (clique de relé), `chime` (confirmação), `glitch`.
Máquina: `machine {until}` (máquina operando ao fundo), `stop` (máquina parando, rampa descendo), `spindleUp {dur}`, `spindle {until, f}`, `chips {until}`, `coolant {until}`, `servo {dur}`, `hydraulic {dur}`, `pneumatic`, `door`, `clack {soft}`, `metal` (impacto metálico), `crane {until}` (ponte rolante), `stepper {until}` (motores de passo), `ratchet`, `phone` (celular vibrando).
Transição: `whoosh {dur}`, `thump`.

## Processo
1. Leia o livro da sua campanha (`/home/user/claude/campanhas/<arquivo>.md`): storyboard (seção 8), texto em tela (16), versões PT/EN/ES (21–23), ganchos (29). Adapte o Master para CG/motion: planos que exigiriam pessoas reais viram objetos, máquinas, interfaces e detalhes (mãos só se forem inevitáveis — prefira não mostrar gente).
2. Escreva `$F/films/<LETRA>.js`.
3. Teste quadros: `cd $F/tools && NODE_PATH=$F/../node_modules node stills.cjs <LETRA> pt $F/shots 1.0 4.5 ...` e **olhe as imagens** (monte uma folha com PIL como no exemplo abaixo). Corrija até ficar com acabamento de filme: enquadramento, legibilidade, metal com reflexo, azul só como acento, nada cortado, nada sobreposto.
   `cd $F/shots && python3 -c "from PIL import Image;import sys;fs=sys.argv[1:];ims=[Image.open(f).resize((360,640)) for f in fs];c=Image.new('RGB',(360*len(ims),640));[c.paste(im,(i*360,0)) for i,im in enumerate(ims)];c.save('X-sheet.jpg')" X-pt-1.0.jpg ...`
4. Confira também `en` e `es` em 2–3 quadros com mais texto (nada estourando a largura).
5. **Não rode as gravações completas** (rec3d/reccomp) — o orquestrador faz isso. Não faça git commit.

## Regras de marca (do brief)
Realismo industrial; nada de holograma, partículas exageradas, logos girando, neon excessivo, sci-fi. Azul #2282f0/#5aa2f5 é acento. Sem métricas inventadas, sem "1ª página do Google", sem logos de terceiros (Google, Excel etc.). Interfaces com cara de software real e neutro. Tipografia: Bebas Neue para títulos (curtos, 5–8 palavras), Plex Mono para rótulos técnicos, Inter para legendas.
