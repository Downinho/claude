# Downway: prévias de sites personalizadas

92 sites prontos (um por lead) em `dist/demo/`, mais a planilha de leads em `leads/Leads-Downway.xlsx`.

## Arquivos principais
| Arquivo | O que é |
|---|---|
| `leads/Leads-Downway.xlsx` | 91 leads com score, Instagram, link da prévia, **mensagem de DM pronta** e follow-up, funil com status |
| `dist/demo/` | Os sites. Suba **o conteúdo** desta pasta para `downway.com.br/demo/` |
| `dist/demo.zip` | A mesma pasta zipada (no cPanel: enviar e extrair dentro de `/demo/`) |
| `dist/catalogo.html` | Vitrine local com miniaturas de todas as prévias (uso interno, não subir) |
| `PLAYBOOK.md` | Diagnóstico de vendas, oferta, scripts e objeções |

## Deixar os sites com logo e fotos reais do Instagram
O ambiente onde os sites foram gerados não acessa o Instagram, então eles saíram com
monograma e arte nas cores do nicho. Na sua máquina (Node 18+ e Python 3 com `openpyxl`):

```bash
npm run instagram   # baixa logo, 9 fotos mais curtidas, bio, link da bio e WhatsApp de cada lead
npm run build       # regera os sites, agora com as fotos reais, e o demo.zip
npm run planilha    # atualiza a planilha (seguidores, link da bio e data do último post)
```

O botão de contato abre o WhatsApp do lead quando ele está na bio; se não estiver, abre o direct do Instagram.

## Personalizar um lead
Crie `prospects/<slug>/data.json` com só o que quiser trocar (headline, sobre, servicos, cores,
whatsapp, endereco, horarios...). Imagens em `prospects/<slug>/assets/`: `logo.*`, `hero.*`,
`sobre.*`, e as demais viram galeria. Para tirar um lead do ar: `"status": "descartado"`.

## Configuração
`config.json`: preço exibido na faixa da prévia e **o WhatsApp da Downway** (preencha
`whatsDownway` para a faixa ganhar o botão "Quero este site no ar").

## Regras de publicidade (advogados e saúde)
Os sites de advogados, médicos, psicólogos, nutricionistas e dentistas saem sem preço, sem
depoimentos e sem promessa de resultado, com o registro profissional visível e o aviso do conselho
no rodapé (OAB Provimento 205/2021, CFM 2.336/2023 etc.). Isso também é argumento de venda.
