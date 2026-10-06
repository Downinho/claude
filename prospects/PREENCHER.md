# Prospects

Uma pasta por empresa: `prospects/<slug>/data.json` + `prospects/<slug>/assets/` (logo e fotos).
Comece copiando `exemplo-barbearia/`. Pastas que começam com `_` são ignoradas no build,
e `"status": "descartado"` no data.json tira a empresa do build.

`prospects.csv` é o funil: qualificação (score), status e follow-up de cada empresa.

## Score de qualificação (0–10) — só monte a prévia de quem tiver 6+

| Critério | Pontos |
|---|---|
| Não tem site (ou só Linktree / link de WhatsApp na bio) | +3 |
| Postou 8+ vezes nos últimos 30 dias (está ativo e investe em imagem) | +2 |
| Fotos boas e identidade visual clara (dá uma prévia bonita) | +1 |
| Atende cliente local que busca no Google ("barbearia perto de mim") | +2 |
| Ticket médio que justifica R$ 1 mil (estética, clínica, serviços, festas) | +1 |
| WhatsApp/telefone visível (dá para contatar o dono) | +1 |

## Como preencher o data.json a partir do Instagram

- **logo**: foto de perfil (baixe em resolução máxima) → `assets/logo.png`
- **hero**: o post com a melhor foto do ambiente/produto
- **galeria**: 6 posts com mais curtidas
- **cores**: pegue da logo / dos destaques (conta-gotas)
- **servicos e precos**: destaques "Serviços"/"Preços"/"Cardápio"
- **depoimentos**: comentários reais ou avaliações do Google, com o nome como aparece lá. Não invente.
- **horarios / endereco**: bio, destaques ou Google Maps
