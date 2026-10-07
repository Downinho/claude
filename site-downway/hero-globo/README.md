# Hero com globo — site downway.com.br

Substitui a intro da home (`ServicesIntro`) pela história em scroll do globo:
abertura DOWNWAY → São Paulo → Estados Unidos → Espanha → Nova Zelândia/Austrália → Rússia → hero original (h1, lead, CTA WhatsApp, planos).

## Como aplicar (copiar por cima do projeto)

```
src/components/GlobeIntro.astro        (novo)
src/data/globo-pontos.json             (novo — 64k pontos de terra, ~250 KB no bundle)
src/components/pages/HomePage.astro    (troca <ServicesIntro> por <GlobeIntro>)
```

Sem dependências novas. PT e EN (`/en`) já funcionam.

## Voltar para a intro anterior

Em `HomePage.astro`, trocar `<GlobeIntro lang={lang} />` por `<ServicesIntro lang={lang} />` e o import comentado. O `ServicesIntro.astro` não foi alterado.

## Comportamento

- Palco sticky abaixo do header (top 4rem), 7 fases de scroll, navegação por pontos à direita.
- HUD no estilo do site: REC, lat/lon ao vivo, fuso horário de cada destino.
- `prefers-reduced-motion` ou sem JS: versão estática (lista de rotas + hero).
- Animação pausa fora da tela (IntersectionObserver).
