# Anúncios em motion design — Downway

Três vídeos verticais 9:16 (1080×1920, 60 fps, com trilha), prontos para Reels, Stories, TikTok e anúncios do Meta.

| Arquivo | Duração | Mensagem |
|---|---|---|
| `downway-anuncio-1-15-dias.mp4` | 17 s | "Sua empresa não aparece" → site no ar em 15 dias úteis → portfólio real → preço fechado, zero fidelidade |
| `downway-anuncio-2-tres-frentes.mp4` | 18 s | Tecnologia que respeita o chão de fábrica → Engenharia, Automação, Presença digital → um só time |
| `downway-anuncio-3-mundo.mp4` | 16,5 s | Começamos em São Paulo → EUA, Espanha, Nova Zelândia, Austrália, Rússia → 6 países, 4 continentes |

Todos terminam na cartela: logo, "Agende seu diagnóstico sem custo", WhatsApp (11) 94015-9202 e downway.com.br.
Os textos importantes ficam dentro da área segura do Reels/Stories.

## Como regerar

Tudo é código (canvas, quadro a quadro) e a trilha é sintetizada — sem banco de imagem ou música de terceiros.

```
cd fonte && python3 -m http.server 4500          # serve as cenas
node ferramentas/record-ad.cjs 1 saida/ad1        # grava vídeo + cues de áudio (precisa de playwright e ffmpeg)
python3 ferramentas/trilha.py saida/ad1.cues.json 17 saida/ad1.wav
ffmpeg -i saida/ad1.video.mp4 -i saida/ad1.wav -c:v copy -af loudnorm=I=-12:TP=-1 -c:a aac -b:a 256k final.mp4
```

Para trocar textos, edite `fonte/ad1.js`, `ad2.js` e `ad3.js`. Para ver um quadro, abra `fonte/index.html?ad=1` e rode `render(5)` no console.
