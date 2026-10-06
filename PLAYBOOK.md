# Playbook Downway — da prévia à venda

## 1. Por que ainda não vendemos (diagnóstico)

> Não consegui abrir downway.com.br deste ambiente (a rede bloqueia o domínio). O que deu para checar
> de fora: **o domínio não aparece no Google**. O resto abaixo são as causas mais comuns em agências
> que estão nesse ponto. Vale conferir uma por uma no nosso site e no nosso processo.

**Estar preparado não vende. O que vende é volume de conversas certas com uma oferta clara.**
Quase sempre o gargalo não é técnico. É um destes:

1. **Poucas abordagens.** Com 3–5% de fechamento em contato frio, são precisos ~100 contatos
   qualificados para fechar 3–5 vendas. Se mandamos menos de 20 por semana, o "não vendemos nada"
   é questão de matemática, não de qualidade.
2. **A oferta é "fazemos sites".** O dono de negócio que vive no Instagram acha que não precisa
   de site. A oferta tem que falar de resultado: *"cliente que procura 'barbearia em Campinas' no
   Google não te encontra. Ele encontra o concorrente."*
3. **Falta prova.** Sem portfólio real, depoimentos, CNPJ, endereço e rosto de quem atende, o
   site da agência parece golpe. As prévias resolvem isso: mostrar o site *dele* pronto é a prova.
4. **Preço escondido ou vago.** "Solicite um orçamento" trava o pequeno empresário. Preço fechado
   e visível ("a partir de R$ 997 ou 12x") filtra e acelera.
5. **CTA fraco.** Cada seção do nosso site precisa de um botão de WhatsApp com mensagem pronta.
   Formulário de contato converte muito menos para esse público.
6. **Público errado.** Empresa sem movimento não paga; franquia já tem site. O alvo é o meio:
   negócio local ativo no Instagram, com fotos boas e sem site. Use o score em `prospects/PREENCHER.md`.
7. **Sem follow-up.** A maioria das vendas sai do 2º ao 4º contato. Quem manda uma mensagem
   e espera perde quase todas.
8. **Downway não aparece no Google.** Vendemos presença online sem ter a nossa. Corrigir rápido:
   Google Search Console, Perfil de Empresa no Google, título e descrição de cada página.

### Checklist do site downway.com.br (confira você mesmo)
- [ ] Em 5 segundos dá para entender o que vendemos, para quem e quanto custa?
- [ ] Tem 3+ exemplos de sites com print e link?
- [ ] Tem CNPJ, cidade, foto/nome de quem atende e @ do Instagram?
- [ ] Botão de WhatsApp fixo, com mensagem pronta?
- [ ] Prazo ("no ar em 7 dias") e garantia ("ajustes ilimitados até aprovar")?
- [ ] Carrega rápido no celular (PageSpeed acima de 80)?
- [ ] Aparece no Google buscando "Downway sites"?

## 2. A oferta (irresistível = risco zero para o cliente)

- **O site dele já está pronto.** Ele vê antes de pagar.
- **Preço fechado:** ex. R$ 997 à vista ou 12x de R$ 97. Domínio + hospedagem no 1º ano inclusos.
- **No ar em 48h** depois do "sim".
- **Garantia:** ajustes até ele aprovar. Se não gostar, não paga nada.
- **Escassez real:** "a prévia fica no ar por 7 dias".
- Opcional: manutenção mensal de R$ 49–99 (receita recorrente).

## 3. Fluxo semanal (meta: 50 prévias em 5 semanas)

| Dia | Tarefa |
|---|---|
| Seg | Listar 30 empresas no Instagram (hashtags da cidade + "perto de mim" no Maps) → `prospects.csv` com score |
| Ter–Qua | Montar 10 prévias (score ≥ 6) → `npm run build` → subir `dist/demo/` |
| Qui | Mandar as 10 abordagens |
| Sex | Follow-ups + ajustar o texto pelo que funcionou |

**Comece com 10, não com 50.** Meça a taxa de resposta e o que as pessoas perguntam, ajuste
oferta e template, e depois escale. 50 prévias sem testar a mensagem são 50 tiros com a mesma mira.

## 4. Scripts de abordagem

**DM no Instagram (1º contato). Curto, sem link no começo:**
> Oi, [nome]! Sou o [seu nome], da Downway, aqui de [cidade]. Curto muito o trabalho de vocês,
> principalmente [post específico]. Montei uma prévia de site para a [empresa] usando as fotos
> do perfil, só para vocês verem como fica. Posso te mandar o link?

**Quando responder "pode":**
> Aqui: [link]. Abre no celular que fica melhor 📱
> A ideia é quem procurar "[nicho] em [cidade]" no Google achar vocês, e não o concorrente,
> e já cair no WhatsApp para agendar. Se curtir, coloco no ar com domínio próprio em 48h por
> [preço]. Se quiser mudar algo, eu ajusto até ficar do seu jeito.

**Follow-up 1 (2 dias depois):**
> Oi, [nome]! Conseguiu ver a prévia? Quer que eu troque alguma foto ou cor?

**Follow-up 2 (5 dias):**
> Passando para avisar que a prévia da [empresa] fica no ar até [data]. Quer que eu reserve?

**Objeções:**
- *"Já tenho Instagram"* → "O Instagram é ótimo para quem já te segue. O site é para quem ainda
  não te conhece e está procurando no Google agora. Os dois trabalham juntos: o link da bio vai
  para o site."
- *"Está caro"* → "Dá R$ 97 por mês. Se trouxer 1 cliente novo por mês, já se paga."
- *"Vou pensar"* → "Claro! O que faltou para você decidir agora? Se for alguma mudança no site,
  eu já faço."

## 5. Cuidados (importante)

- As prévias usam logo e fotos do prospect **sem contrato**, então: são `noindex`, sem listagem
  pública (`.htaccess` gerado no build), e mostram a faixa "Prévia criada pela Downway". Apague
  quem disser não ou não responder em 15 dias.
- Nunca invente depoimento, prêmio ou número. Use só o que é público e real.
- Mande DMs **manualmente**. Ferramenta de DM em massa faz o Instagram bloquear a conta.
- Para contatar pelo WhatsApp, use o número que a empresa divulga e respeite o "não, obrigado".
