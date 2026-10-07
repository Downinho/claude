# Filmes Downway — 6 campanhas × PT/EN/ES

Vídeos 9:16 (1080×1920), 24 fps, 38–41 s, com trilha e sound design industrial sintetizados (sem música de terceiros, sem locução).

| Filme | Arquivos |
|---|---|
| A · A fábrica está em movimento | `downway-A-…-{PT,EN,ES}.mp4` |
| B · Sua fábrica merece tecnologia melhor | `downway-B-…-{PT,EN,ES}.mp4` |
| C · Pare de fazer na mão | `downway-C-…-{PT,EN,ES}.mp4` |
| D · Sua engenharia merece ser encontrada | `downway-D-…-{PT,EN,ES}.mp4` |
| E · Do CAD à realidade | `downway-E-…-{PT,EN,ES}.mp4` |
| F · O site industrial | `downway-F-…-{PT,EN,ES}.mp4` |

Roteiros, prompts para IA de vídeo e versões de 15 s/6 s estão em `../campanhas/`.

## Como regerar
Tudo é código em `fonte/` (three.js + canvas, quadro a quadro). Instale `three@0.169.0` em `fonte/vendor/three` e Playwright; sirva `fonte/` em `http://localhost:4700` e rode `tools/produzir.sh <letra>` (3D → composição nas 3 línguas → trilha → mux). Para editar texto, mude o objeto `COPY` de `films/<letra>.js`.
