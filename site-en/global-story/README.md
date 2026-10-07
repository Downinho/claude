# Downway Global Story (scroll storytelling)

`index.html` é autossuficiente (sem bibliotecas; só fontes do Google). Globo fixo na tela e capítulos que rolam:

0. Intro animada: globo surge, Brasil enche de azul a partir de São Paulo, título entra em sequência
1. São Paulo (close)  2. Estados Unidos  3. Espanha  4. Nova Zelândia e Austrália (vista pelo polo sul)
5. Rússia  6. Volta ao mundo (360° conduzidos pelo scroll) + CTA

Cada arco é desenhado conforme a rolagem e o país de destino acende em onda a partir da cidade de chegada.
Trilho de capítulos clicável à direita, HUD com coordenadas e fuso, versão mobile e `prefers-reduced-motion`.

- Destinos, câmera e textos do HUD: constantes `DEST`, `KF` e `HUD` no script de `template.html`.
- Dados: `node build-data.mjs` (precisa de `d3-geo topojson-client world-atlas`), depois injetar no `__DATA__`.
