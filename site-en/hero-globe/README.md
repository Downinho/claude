# Hero com globo animado (downway.com.br/en)

`index.html` é autossuficiente: abra no navegador ou suba para o servidor. Sem bibliotecas externas
(canvas 2D + projeção ortográfica própria). Só as fontes vêm do Google Fonts.

- `template.html`: código-fonte da página, com o marcador `__DATA__`.
- `build-data.mjs`: gera os 15.729 pontos de terra (world-atlas 50m) e o contorno do Brasil.
  Rode `npm i d3-geo topojson-client world-atlas` e `node build-data.mjs`, depois injete o `data.json` no template.

Timeline (em `T` no script): globo surge → Brasil enche de azul a partir de São Paulo → câmera abre
para o Atlântico Norte → arcos para Chicago, Houston, Atlanta, Toronto, Birmingham; Stuttgart e
Eindhoven tracejados (planejados) → pacotes de dados circulando. Respeita `prefers-reduced-motion`,
pausa fora da tela e tem `window.__globeSeek(ms)` para screenshots.
