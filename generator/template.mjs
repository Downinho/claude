import { nicho } from './nichos.mjs';
import { TEMAS, ESPECIALIDADES, PASSOS, FAQ, AVISO, PALETAS, HEADLINES } from './conteudo.mjs';

const hash = (s = '') => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);

const esc = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const digits = (s = '') => String(s).replace(/\D/g, '');
const handle = (ig = '') => ig.replace(/^@/, '').replace(/\/$/, '');
const iniciais = (nome) => {
  const GENERICAS = /^(de|da|do|dos|das|e|advocacia|advogados|trabalhista|previdenci[aá]ria|cl[ií]nica|psicologia|nutricionista|nutri[cç][aã]o|psic[oó]loga|odontologia|barbearia|confeitaria|pet|shop|studio|est[uú]dio|espa[cç]o|sal[aã]o|beleza|marcenaria|planejados|est[eé]tica|automotiva|hamburgueria|pizzaria|burger|smash|pilates|funcional|e|&)$/i;
  const w = nome.replace(/^(dra?\.?|dr\.?)\s+/i, '').split(/\s+/).filter((x) => x.length > 1 && !GENERICAS.test(x));
  if (!w.length) return nome.slice(0, 2).toUpperCase();
  return ((w[0]?.[0] || nome[0]) + (w[1]?.[0] || '')).toUpperCase();
};
// Fontes do Google com um único peso não aceitam pedido de vários pesos.
const PESO_UNICO = new Set(['Bebas Neue', 'DM Serif Display']);
const gfont = (f, w) => `family=${encodeURIComponent(f).replace(/%20/g, '+')}${PESO_UNICO.has(f) ? '' : ':wght@' + w}`;

const ICONES = [
  'M12 2l2.9 6.9L22 9.6l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.6L2 9.6l7.1-.7z',
  'M12 21s-7-4.5-9.5-9A5.5 5.5 0 0112 6a5.5 5.5 0 019.5 6c-2.5 4.5-9.5 9-9.5 9z',
  'M4 12l5 5L20 6',
  'M12 2a10 10 0 100 20 10 10 0 000-20zm0 5v5l3 3',
  'M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6',
  'M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z',
];

function arteHero(d, t) {
  const ini = esc(iniciais(d.nome));
  return `<svg class="art" viewBox="0 0 480 560" role="img" aria-label="${esc(d.nome)}">
  <defs>
    <linearGradient id="ga" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${t.p}"/><stop offset="1" stop-color="${t.p}" stop-opacity=".82"/></linearGradient>
    <radialGradient id="gb" cx=".75" cy=".2" r=".7"><stop offset="0" stop-color="${t.s}" stop-opacity=".55"/><stop offset="1" stop-color="${t.s}" stop-opacity="0"/></radialGradient>
    <pattern id="gp" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0v28" fill="none" stroke="#fff" stroke-opacity=".06"/></pattern>
  </defs>
  <rect width="480" height="560" rx="36" fill="url(#ga)"/>
  <rect width="480" height="560" rx="36" fill="url(#gp)"/>
  <rect width="480" height="560" rx="36" fill="url(#gb)"/>
  <circle cx="400" cy="470" r="150" fill="none" stroke="${t.s}" stroke-opacity=".35"/>
  <circle cx="400" cy="470" r="105" fill="none" stroke="${t.s}" stroke-opacity=".2"/>
  <text x="48" y="330" font-family="'${t.ft}',serif" font-size="230" font-weight="700" fill="#fff" fill-opacity=".95" letter-spacing="-6">${ini}</text>
  <rect x="50" y="372" width="70" height="4" fill="${t.s}"/>
  <text x="50" y="414" font-family="'${t.fx}',sans-serif" font-size="20" fill="#fff" fill-opacity=".85" letter-spacing="3">${esc((d.eyebrow || '').toUpperCase()).slice(0, 34)}</text>
</svg>`;
}

const logoSvg = (d, t) =>
  `<svg class="logo-svg" viewBox="0 0 48 48" aria-hidden="true"><rect width="48" height="48" rx="12" fill="${t.p}"/><text x="24" y="31" text-anchor="middle" font-family="'${t.ft}',serif" font-size="20" font-weight="700" fill="${t.s}">${esc(iniciais(d.nome))}</text></svg>`;

export function render(d) {
  const esp = ESPECIALIDADES[d.especialidade];
  const cat = esp?.cat || d.categoria || d.nicho;
  const loc = esp ? null : nicho(d.nicho);
  const t = { ...(TEMAS[cat] || TEMAS[d.nicho] || TEMAS.barbearia) };
  // Variação determinística por lead: paleta, título e lado da imagem no hero.
  const h = hash(d.slug || d.nome);
  const pal = PALETAS[cat];
  const ordem = d.ordem ?? h; // posição do lead dentro do nicho (definida no build)
  if (pal) [t.p, t.s, t.bg] = pal[ordem % pal.length];
  const variante = ordem % 3;
  if (d.cores) Object.assign(t, { p: d.cores.primaria || t.p, s: d.cores.secundaria || t.s, bg: d.cores.fundo || t.bg, t: d.cores.texto || t.t });
  if (d.fonteTitulo) t.ft = d.fonteTitulo;
  const regulamentado = Boolean(esp);
  const base = esp || loc;

  const eyebrow = d.eyebrow || base.eyebrow || '';
  d = { ...d, eyebrow };
  const headline = d.headline || (esp && variante > 0 && HEADLINES[d.especialidade]?.[variante - 1]) || base.headline || d.nome;
  const onde = d.bairro && d.bairro !== d.cidade ? `${d.bairro}, ${d.cidade || 'São Paulo'}` : d.cidade || d.bairro || '';
  const sub = d.slogan || d.sub || base.sub ||
    `${eyebrow} em ${onde}. Atendimento rápido pelo ${d.whatsapp ? 'WhatsApp' : 'direct do Instagram'}.`;
  const cta = d.cta || base.cta;
  const msg = d.msgWhats || base.msg || base.msgWhats;
  const ig = handle(d.instagram);
  const igUrl = ig ? `https://instagram.com/${ig}` : null;
  const contato = d.whatsapp
    ? `https://wa.me/${digits(d.whatsapp)}?text=${encodeURIComponent(msg)}`
    : ig ? `https://ig.me/m/${ig}` : '#contato';
  const servicos = (d.servicos || base.servicos || []).map((s) =>
    Array.isArray(s) ? { nome: s[0], descricao: s[1] } : s
  );
  const passos = d.passos || PASSOS[cat] || PASSOS._;
  const faq = (d.faq || FAQ[cat] || FAQ._).map((f) => (f.q ? f : { q: f[0], r: f[1] }));
  const destaques = d.destaques || (loc?.diferenciais) || [];
  const registro = d.registro || '';
  const aviso = regulamentado ? AVISO[cat] : '';
  // Profissões regulamentadas: sem depoimentos e sem preço, por regra dos conselhos.
  const depoimentos = regulamentado ? [] : d.depoimentos || [];
  const p = d.proposta || {};
  const downwayWa = p.whatsDownway
    ? `https://wa.me/${digits(p.whatsDownway)}?text=${encodeURIComponent(`Olá! Vi a prévia do site de ${d.nome} e quero saber mais.`)}`
    : null;
  const sobre = [].concat(d.sobre || []);
  const tituloServicos = d.tituloServicos || (regulamentado ? 'Áreas de atuação' : loc.tituloServicos);
  const btn = (cls = '', label = cta) => `<a class="btn ${cls}" href="${esc(contato)}" target="_blank" rel="noopener">${esc(label)}</a>`;
  const card = registro ? `<div class="float-card"><small>Registro</small><strong>${esc(registro)}</strong></div>` : '';
  const visual = `<div class="hero-img">${d.hero ? `<img src="${esc(d.hero)}" alt="${esc(d.nome)}">` : arteHero(d, t)}${card}</div>`;

  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>${esc(d.nome)}${eyebrow ? ' | ' + esc(eyebrow) : ''}${d.bairro ? ' em ' + esc(d.bairro) : ''}</title>
<meta name="description" content="${esc(sub)}">
<meta name="theme-color" content="${t.p}">
<script>document.documentElement.className+=' js'</script>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?${gfont(t.ft, '400;600;700')}&${gfont(t.fx, '400;500;600;700')}&display=swap" rel="stylesheet">
<style>
:root{--p:${t.p};--s:${t.s};--bg:${t.bg};--t:${t.t};--ft:'${t.ft}',Georgia,serif;--fx:'${t.fx}',system-ui,sans-serif;--r:22px}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--fx);color:var(--t);background:var(--bg);line-height:1.65;-webkit-font-smoothing:antialiased;overflow-x:hidden}
img,svg{max-width:100%;display:block}
a{color:inherit}
.wrap{width:min(1160px,100% - 32px);margin-inline:auto}
h1,h2,h3{font-family:var(--ft);line-height:1.08;letter-spacing:-.01em;font-weight:700}
h2{font-size:clamp(2rem,4.6vw,3.1rem);margin-bottom:.6rem}
.eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.78rem;letter-spacing:.18em;text-transform:uppercase;font-weight:600;color:var(--s)}
.eyebrow::before{content:"";width:28px;height:2px;background:currentColor}
.lead{font-size:1.08rem;opacity:.78;max-width:620px}
section{padding:clamp(72px,10vw,120px) 0}
.btn{display:inline-flex;align-items:center;gap:10px;background:var(--s);color:var(--p);padding:16px 28px;border-radius:999px;font-weight:600;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 10px 30px -10px var(--s)}
.btn:hover{transform:translateY(-2px);box-shadow:0 16px 36px -12px var(--s)}
.btn.ghost{background:transparent;color:inherit;border:1.5px solid currentColor;box-shadow:none;opacity:.9}
.btn.dark{background:var(--p);color:#fff;box-shadow:0 10px 30px -12px var(--p)}
.preview{position:relative;z-index:60;background:#0b0b0c;color:#fff;font-size:.82rem;padding:9px 44px 9px 16px;text-align:center}
.preview a{color:#7CFFB2;font-weight:600;margin-left:6px}
.preview button{position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:0;color:#999;cursor:pointer;font-size:1rem}
header{position:sticky;top:0;z-index:50;transition:box-shadow .3s;background:color-mix(in srgb,var(--bg) 78%,transparent);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px)}
header.scrolled{box-shadow:0 6px 30px -18px rgba(0,0,0,.35)}
header .wrap{display:flex;align-items:center;justify-content:space-between;gap:20px;height:76px}
.brand{display:flex;align-items:center;gap:12px;text-decoration:none;min-width:0}
.brand img,.logo-svg{width:46px;height:46px;border-radius:12px;object-fit:cover;flex:none}
.brand span{font-family:var(--ft);font-weight:700;font-size:1.15rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
nav{display:flex;gap:28px;font-size:.92rem}
nav a{text-decoration:none;opacity:.75}
nav a:hover{opacity:1}
header .btn{padding:11px 20px;font-size:.9rem;white-space:nowrap}
@media(max-width:980px){nav{display:none}}
@media(max-width:560px){header .btn{display:none}}
.hero{padding:clamp(40px,7vw,90px) 0 clamp(60px,8vw,110px)}
.hero .wrap{display:grid;grid-template-columns:1.1fr .9fr;gap:clamp(32px,6vw,80px);align-items:center}
.hero h1{font-size:clamp(2.5rem,6.2vw,4.8rem);margin:18px 0 22px}
.hero .lead{font-size:clamp(1.05rem,1.6vw,1.2rem)}
.acts{display:flex;gap:12px;flex-wrap:wrap;margin-top:34px}
.chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:30px}
.chips:empty{display:none}
.chip{font-size:.82rem;padding:8px 14px;border-radius:999px;background:color-mix(in srgb,var(--p) 7%,transparent);border:1px solid color-mix(in srgb,var(--p) 12%,transparent)}
.chip b{color:var(--p)}
.hero-img{position:relative}
.hero-img img,.hero-img .art{width:100%;aspect-ratio:6/7;object-fit:cover;border-radius:36px;box-shadow:0 40px 80px -40px rgba(0,0,0,.45)}
.float-card{position:absolute;left:-22px;bottom:34px;background:var(--bg);padding:16px 20px;border-radius:16px;box-shadow:0 20px 50px -20px rgba(0,0,0,.35);display:grid}
.float-card small{font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;opacity:.6}
.float-card strong{font-family:var(--ft);font-size:1.15rem;color:var(--p)}
.hero.inv .wrap{grid-template-columns:.9fr 1.1fr}.hero.inv .wrap>:first-child{order:2}.hero.inv .float-card{left:auto;right:-22px}
@media(max-width:900px){.hero .wrap,.hero.inv .wrap{grid-template-columns:1fr}.hero.inv .wrap>:first-child{order:0}.hero-img{max-width:440px}.float-card{left:auto;right:14px;bottom:auto;top:14px}}
.strip{background:var(--p);color:#fff;padding:22px 0;overflow:hidden}
.strip .track{display:flex;gap:48px;width:max-content;animation:mq 38s linear infinite;font-family:var(--ft);font-size:1.35rem;white-space:nowrap}
.strip .track span::after{content:"✦";margin-left:48px;color:var(--s)}
@keyframes mq{to{transform:translateX(-50%)}}
.sobre .wrap{display:grid;grid-template-columns:.9fr 1.1fr;gap:clamp(32px,6vw,90px);align-items:center}
.sobre-vis{position:relative;aspect-ratio:1;border-radius:var(--r);overflow:hidden;background:linear-gradient(135deg,var(--p),color-mix(in srgb,var(--p) 70%,var(--s)))}
.sobre-vis img{width:100%;height:100%;object-fit:cover}
.sobre-vis img+.q{background:linear-gradient(transparent,rgba(0,0,0,.6));padding:60px 24px 24px;inset:auto 0 0 0}
.sobre-vis .q{position:absolute;inset:auto 28px 28px 28px;color:#fff;font-family:var(--ft);font-size:clamp(1.4rem,2.6vw,2rem);line-height:1.22}
.sobre-vis .q::before{content:"“";display:block;font-size:4.4rem;line-height:.6;color:var(--s)}
.sobre p+p{margin-top:1rem}
.lista{list-style:none;display:grid;gap:12px;margin-top:28px}
.lista li{display:flex;gap:12px;align-items:flex-start}
.lista li::before{content:"";flex:none;width:22px;height:22px;margin-top:2px;border-radius:50%;background:var(--s) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M5 12l5 5L20 7' stroke='white' stroke-width='3' fill='none'/%3E%3C/svg%3E") center/14px no-repeat}
@media(max-width:900px){.sobre .wrap{grid-template-columns:1fr}.sobre-vis{max-width:480px}}
.alt{background:color-mix(in srgb,var(--p) 4%,var(--bg))}
.head{display:flex;justify-content:space-between;align-items:end;gap:24px;flex-wrap:wrap;margin-bottom:48px}
.cards{display:grid;gap:18px;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))}
.card{background:var(--bg);border:1px solid color-mix(in srgb,var(--p) 10%,transparent);border-radius:var(--r);padding:30px;transition:transform .25s,box-shadow .25s,border-color .25s}
.card:hover{transform:translateY(-4px);box-shadow:0 30px 60px -30px rgba(0,0,0,.25);border-color:var(--s)}
.ico{width:50px;height:50px;border-radius:14px;display:grid;place-items:center;background:color-mix(in srgb,var(--s) 18%,transparent);margin-bottom:20px}
.ico svg{width:24px;height:24px;stroke:var(--p);fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.card h3{font-size:1.45rem;margin-bottom:8px}
.card p{opacity:.72;font-size:.97rem}
.preco{display:inline-block;margin-top:12px;font-weight:700;color:var(--p)}
.passos{display:grid;gap:22px;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));counter-reset:n}
.passo{position:relative;padding:34px 30px;border-radius:var(--r);background:var(--p);color:#fff;overflow:hidden}
.passo::before{counter-increment:n;content:"0" counter(n);font-family:var(--ft);font-size:4.4rem;line-height:1;color:var(--s);display:block;margin-bottom:18px}
.passo h3{font-size:1.4rem;margin-bottom:6px}
.passo p{opacity:.78}
.gal{display:grid;gap:12px;grid-template-columns:repeat(2,1fr)}
.gal img{width:100%;aspect-ratio:1;object-fit:cover;border-radius:16px;transition:transform .4s}
.gal img:hover{transform:scale(1.02)}
@media(min-width:760px){.gal{grid-template-columns:repeat(3,1fr)}.gal img:first-child{grid-row:span 2;aspect-ratio:auto;height:100%}}
blockquote{font-family:var(--ft);font-size:1.3rem;line-height:1.4}
blockquote footer{font-family:var(--fx);font-size:.9rem;font-weight:600;margin-top:14px;color:var(--p)}
.faq{display:grid;gap:12px;max-width:820px}
details{background:var(--bg);border:1px solid color-mix(in srgb,var(--p) 12%,transparent);border-radius:16px;padding:20px 24px}
summary{cursor:pointer;font-weight:600;list-style:none;display:flex;justify-content:space-between;gap:16px}
summary::-webkit-details-marker{display:none}
summary::after{content:"+";font-size:1.4rem;line-height:1;color:var(--s);transition:transform .2s}
details[open] summary::after{transform:rotate(45deg)}
details p{margin-top:12px;opacity:.75}
.cta{background:var(--p);color:#fff;border-radius:36px;padding:clamp(48px,7vw,84px) clamp(24px,5vw,84px);text-align:center;position:relative;overflow:hidden}
.cta::before{content:"";position:absolute;width:520px;height:520px;border-radius:50%;background:radial-gradient(var(--s),transparent 65%);opacity:.28;top:-260px;right:-160px}
.cta h2,.cta p,.cta .btn{position:relative}
.cta p{opacity:.8;margin:6px auto 30px;max-width:560px}
.contato{display:grid;gap:28px;grid-template-columns:1fr 1.2fr;align-items:stretch}
.contato .box{background:var(--bg);border-radius:var(--r);padding:34px;border:1px solid color-mix(in srgb,var(--p) 10%,transparent)}
.contato dl{display:grid;gap:18px;margin:22px 0 28px}
.contato dt{font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;opacity:.55}
.contato dd{font-weight:500}
.contato iframe{width:100%;height:100%;min-height:340px;border:0;border-radius:var(--r)}
@media(max-width:860px){.contato{grid-template-columns:1fr}}
footer.site{padding:44px 0 100px;font-size:.88rem;opacity:.8}
footer.site .wrap{display:flex;flex-wrap:wrap;justify-content:space-between;gap:16px}
footer.site small{display:block;opacity:.7;margin-top:6px;max-width:640px}
.fab{position:fixed;right:18px;bottom:18px;z-index:40;width:60px;height:60px;border-radius:50%;background:#25D366;display:grid;place-items:center;box-shadow:0 12px 30px -8px rgba(0,0,0,.4);transition:transform .2s}
.fab:hover{transform:scale(1.06)}
.fab svg{width:30px;height:30px;fill:#fff}
.fab.ig{background:linear-gradient(45deg,#f9ce34,#ee2a7b,#6228d7)}
.js .rv{opacity:0;transform:translateY(24px);transition:opacity .8s ease,transform .8s ease}
.js .rv.on{opacity:1;transform:none}
@media(prefers-reduced-motion:reduce){.js .rv{opacity:1;transform:none}.strip .track{animation:none}}
</style>
</head>
<body>

<div class="preview" id="pv">✨ Prévia criada pela <strong>Downway</strong> para <strong>${esc(d.nome)}</strong>.${downwayWa ? `<a href="${esc(downwayWa)}" target="_blank" rel="noopener">Quero este site no ar${p.preco ? ' por ' + esc(p.preco) : ''} →</a>` : ''}<button aria-label="Fechar" onclick="this.parentNode.remove()">✕</button></div>

<header id="hd"><div class="wrap">
  <a class="brand" href="#">${d.logo ? `<img src="${esc(d.logo)}" alt="">` : logoSvg(d, t)}<span>${esc(d.nome)}</span></a>
  <nav><a href="#sobre">Sobre</a><a href="#servicos">${esc(tituloServicos)}</a><a href="#como">Como funciona</a><a href="#duvidas">Dúvidas</a><a href="#contato">Contato</a></nav>
  ${btn('dark')}
</div></header>

<section class="hero${variante === 1 ? ' inv' : ''}"><div class="wrap">
  <div class="rv">
    <span class="eyebrow">${esc(eyebrow)}${d.bairro ? ' · ' + esc(d.bairro) : ''}</span>
    <h1>${esc(headline)}</h1>
    <p class="lead">${esc(sub)}</p>
    <div class="acts">${btn()}${igUrl ? `<a class="btn ghost" href="${esc(igUrl)}" target="_blank" rel="noopener">Ver Instagram</a>` : ''}</div>
    <div class="chips">${(d.chips || []).map((c) => `<span class="chip">${esc(c)}</span>`).join('')}</div>
  </div>
  <div class="rv">${visual}</div>
</div></section>

${servicos.length ? `<div class="strip" aria-hidden="true"><div class="track">${[...servicos, ...servicos].map((s) => `<span>${esc(s.nome)}</span>`).join('')}</div></div>` : ''}

<section class="sobre" id="sobre"><div class="wrap">
  <div class="sobre-vis rv">${d.fotoSobre ? `<img src="${esc(d.fotoSobre)}" alt="${esc(d.nome)}" loading="lazy">` : ''}<p class="q">${esc(d.frase || headline)}</p></div>
  <div class="rv">
    <span class="eyebrow">Sobre</span>
    <h2>${esc(d.tituloSobre || d.nome)}</h2>
    ${(sobre.length ? sobre : [sub]).map((x) => `<p class="lead">${esc(x)}</p>`).join('')}
    ${destaques.length ? `<ul class="lista">${destaques.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}
  </div>
</div></section>

<section class="alt" id="servicos"><div class="wrap">
  <div class="head rv"><div><span class="eyebrow">${esc(eyebrow)}</span><h2>${esc(tituloServicos)}</h2></div>${btn('dark')}</div>
  <div class="cards">${servicos.map((s, i) => `<article class="card rv"><div class="ico"><svg viewBox="0 0 24 24"><path d="${ICONES[i % ICONES.length]}"/></svg></div><h3>${esc(s.nome)}</h3>${s.descricao ? `<p>${esc(s.descricao)}</p>` : ''}${!regulamentado && s.preco ? `<span class="preco">${esc(s.preco)}</span>` : ''}</article>`).join('')}</div>
</div></section>

<section id="como"><div class="wrap">
  <div class="head rv"><div><span class="eyebrow">Passo a passo</span><h2>Como funciona</h2></div></div>
  <div class="passos">${passos.map(([a, b]) => `<div class="passo rv"><h3>${esc(a)}</h3><p>${esc(b)}</p></div>`).join('')}</div>
</div></section>

${d.galeria?.length ? `<section class="alt"><div class="wrap">
  <div class="head rv"><div><span class="eyebrow">@${esc(ig)}</span><h2>${esc(d.tituloGaleria || loc?.tituloGaleria || 'Do nosso Instagram')}</h2></div>${igUrl ? `<a class="btn ghost" href="${esc(igUrl)}" target="_blank" rel="noopener">Seguir no Instagram</a>` : ''}</div>
  <div class="gal">${d.galeria.slice(0, 7).map((g) => `<img class="rv" src="${esc(g)}" alt="${esc(d.nome)}" loading="lazy">`).join('')}</div>
</div></section>` : ''}

${depoimentos.length ? `<section><div class="wrap">
  <div class="head rv"><div><span class="eyebrow">Clientes</span><h2>Quem já conhece</h2></div></div>
  <div class="cards">${depoimentos.map((x) => `<div class="card rv"><blockquote>“${esc(x.texto)}”<footer>${esc(x.nome)}</footer></blockquote></div>`).join('')}</div>
</div></section>` : ''}

<section ${d.galeria?.length ? '' : 'class="alt"'} id="duvidas"><div class="wrap">
  <div class="head rv"><div><span class="eyebrow">Dúvidas</span><h2>Perguntas frequentes</h2></div></div>
  <div class="faq">${faq.map((f) => `<details class="rv"><summary>${esc(f.q)}</summary><p>${esc(f.r)}</p></details>`).join('')}</div>
</div></section>

<section><div class="wrap"><div class="cta rv">
  <h2>${esc(d.chamadaFinal || (regulamentado ? 'Vamos conversar?' : 'Bora?'))}</h2>
  <p>${esc(d.subChamadaFinal || 'Fale agora mesmo e tire suas dúvidas. Resposta rápida.')}</p>
  ${btn()}
</div></div></section>

<section class="alt" id="contato"><div class="wrap contato">
  <div class="box rv">
    <span class="eyebrow">Contato</span>
    <h2>Onde estamos</h2>
    <dl>
      ${d.endereco ? `<div><dt>Endereço</dt><dd>${esc(d.endereco)}</dd></div>` : ''}
      ${onde ? `<div><dt>Região</dt><dd>${esc(onde)}</dd></div>` : ''}
      ${d.atendimento ? `<div><dt>Atendimento</dt><dd>${esc(d.atendimento)}</dd></div>` : ''}
      ${(d.horarios || []).map((h) => `<div><dt>${esc(h.dias)}</dt><dd>${esc(h.horas)}</dd></div>`).join('')}
      ${ig ? `<div><dt>Instagram</dt><dd><a href="${esc(igUrl)}" target="_blank" rel="noopener">@${esc(ig)}</a></dd></div>` : ''}
    </dl>
    ${btn()}
  </div>
  ${d.endereco || d.bairro ? `<iframe class="rv" loading="lazy" title="Mapa" src="https://maps.google.com/maps?q=${encodeURIComponent(d.mapa || d.endereco || `${d.bairro}, ${d.cidade || 'São Paulo'}`)}&z=15&output=embed"></iframe>` : ''}
</div></section>

<footer class="site"><div class="wrap">
  <div>© ${new Date().getFullYear()} ${esc(d.nome)}${registro ? ' · ' + esc(registro) : ''}${aviso ? `<small>${esc(aviso)}</small>` : ''}</div>
  <div>Site por <strong>Downway</strong></div>
</div></footer>

<a class="fab${d.whatsapp ? '' : ' ig'}" href="${esc(contato)}" target="_blank" rel="noopener" aria-label="Contato">${d.whatsapp
    ? '<svg viewBox="0 0 32 32"><path d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3zm0 23.7c-2 0-4-.6-5.7-1.6l-.4-.2-3.9 1 1-3.8-.3-.4A10.7 10.7 0 1 1 16 26.7zm5.9-8c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0a8.8 8.8 0 0 1-4.4-3.8c-.3-.6.3-.5 1-1.7.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.7 3.7 0 0 0-1.1 2.7 6.4 6.4 0 0 0 1.3 3.4 14.7 14.7 0 0 0 5.6 5c2.1.9 2.9 1 4 .8.6-.1 1.9-.8 2.2-1.5s.3-1.4.2-1.5-.3-.2-.6-.4z"/></svg>'
    : '<svg viewBox="0 0 24 24"><path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zM17.3 5.5a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM12 2c-2.7 0-3 0-4.1.1C3.4 2.3 2.3 4.4 2.1 7.9 2 9 2 9.3 2 12s0 3 .1 4.1c.2 3.5 1.3 5.6 5.8 5.8 1.1.1 1.4.1 4.1.1s3 0 4.1-.1c3.5-.2 5.6-1.3 5.8-5.8.1-1.1.1-1.4.1-4.1s0-3-.1-4.1c-.2-3.5-1.3-5.6-5.8-5.8C15 2 14.7 2 12 2z"/></svg>'}</a>

<script>
var hd=document.getElementById('hd');addEventListener('scroll',function(){hd.classList.toggle('scrolled',scrollY>10)},{passive:true});
if('IntersectionObserver'in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}})},{threshold:.12});document.querySelectorAll('.rv').forEach(function(el){io.observe(el)})}else{document.querySelectorAll('.rv').forEach(function(el){el.classList.add('on')})}
</script>
</body>
</html>
`;
}
