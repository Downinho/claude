# Downway — prévias de sites personalizadas

Gera um site de prévia por empresa (com logo, fotos, cores e serviços tirados do Instagram dela)
para publicar em `downway.com.br/demo/<slug>/` e usar na abordagem de vendas.

```bash
npm run build                          # gera todas em dist/demo/
node generator/build.mjs --only <slug> # gera só uma
```

Depois envie **o conteúdo** de `dist/demo/` para a pasta `/demo/` do servidor (FTP/cPanel).
`dist/links-previas.csv` traz o link de cada prévia para colar nas mensagens.

- `prospects/PREENCHER.md`: como qualificar a empresa e preencher o `data.json`
- `prospects/prospects.csv`: funil de prospecção
- `PLAYBOOK.md`: diagnóstico de vendas, oferta, scripts de abordagem e follow-up
- `generator/nichos.mjs`: textos padrão por nicho (barbearia, estética, restaurante, pet...)
