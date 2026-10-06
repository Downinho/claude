import { nicho } from './nichos.mjs';

const esc = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const digits = (s = '') => String(s).replace(/\D/g, '');
const whatsLink = (num, msg) => `https://wa.me/${digits(num)}?text=${encodeURIComponent(msg)}`;

export function render(d) {
  const n = nicho(d.nicho);
  const cta = d.cta || n.cta;
  const wa = d.whatsapp ? whatsLink(d.whatsapp, d.msgWhats || n.msgWhats) : null;
  const ig = d.instagram ? `https://instagram.com/${d.instagram.replace(/^@/, '')}` : null;
  const c = { primaria: '#111111', secundaria: '#c8a24a', fundo: '#ffffff', texto: '#1b1b1b', ...d.cores };
  const fonteTitulo = d.fonteTitulo || 'Playfair Display';
  const fonteTexto = d.fonteTexto || 'Inter';
  const diferenciais = d.diferenciais || n.diferenciais;
  const p = d.proposta || {};
  const downwayWa = p.whatsDownway
    ? whatsLink(p.whatsDownway, `Olá! Vi a prévia do site da ${d.nome} e quero saber mais.`)
    : null;
  const ctaBtn = (cls = '') =>
    wa ? `<a class="btn ${cls}" href="${esc(wa)}" target="_blank" rel="noopener">${esc(cta)}</a>` : '';

  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>${esc(d.nome)}${d.cidade ? ' — ' + esc(d.cidade) : ''}</title>
<meta name="description" content="${esc(d.slogan || d.descricao || '')}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=${encodeURIComponent(fonteTitulo)}:wght@600;800&family=${encodeURIComponent(fonteTexto)}:wght@400;600&display=swap" rel="stylesheet">
<style>
:root{--p:${c.primaria};--s:${c.secundaria};--bg:${c.fundo};--t:${c.texto};--ft:'${fonteTitulo}',serif;--fx:'${fonteTexto}',system-ui,sans-serif}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--fx);color:var(--t);background:var(--bg);line-height:1.6}
img{max-width:100%;display:block}
.wrap{width:min(1100px,100% - 32px);margin-inline:auto}
h1,h2,h3{font-family:var(--ft);line-height:1.15}
h2{font-size:clamp(1.7rem,4vw,2.4rem);margin-bottom:1.2rem}
section{padding:72px 0}
.btn{display:inline-block;background:var(--s);color:var(--p);padding:14px 26px;border-radius:999px;font-weight:600;text-decoration:none;transition:transform .15s}
.btn:hover{transform:translateY(-2px)}
.btn.ghost{background:transparent;color:#fff;border:2px solid #fff}
/* Faixa da prévia (Downway) */
.preview{position:sticky;top:0;z-index:50;background:#0d0d0d;color:#fff;font-size:.85rem;padding:8px 16px;display:flex;gap:12px;align-items:center;justify-content:center;flex-wrap:wrap;text-align:center}
.preview a{color:#7CFFB2;font-weight:600}
.preview button{background:none;border:0;color:#aaa;cursor:pointer;font-size:1rem}
header{position:absolute;inset-inline:0;z-index:5;padding:18px 0}
header .wrap{display:flex;align-items:center;justify-content:space-between;gap:16px}
.logo{height:56px;width:auto;border-radius:12px}
.logo-txt{color:#fff;font-family:var(--ft);font-size:1.4rem;font-weight:800}
.hero{position:relative;min-height:92vh;display:grid;place-items:center;color:#fff;text-align:center;padding:120px 0 80px;
  background:${d.hero ? `linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.65)),url('${esc(d.hero)}') center/cover` : `linear-gradient(135deg,var(--p),#000)`}}
.hero h1{font-size:clamp(2.2rem,7vw,4.4rem);margin-bottom:1rem}
.hero p{font-size:clamp(1rem,2.5vw,1.25rem);max-width:640px;margin:0 auto 2rem;opacity:.92}
.hero .acts{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
.sobre{display:grid;gap:40px;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));align-items:center}
.sobre img{border-radius:20px;aspect-ratio:4/5;object-fit:cover;width:100%}
.alt{background:color-mix(in srgb,var(--p) 6%,var(--bg))}
.grid{display:grid;gap:20px;grid-template-columns:repeat(auto-fit,minmax(240px,1fr))}
.card{background:var(--bg);border-radius:18px;padding:26px;box-shadow:0 6px 24px rgba(0,0,0,.07);border-top:4px solid var(--s)}
.card h3{font-size:1.25rem;margin-bottom:.4rem}
.preco{color:var(--p);font-weight:700;margin-top:.6rem;display:block}
.gal{display:grid;gap:10px;grid-template-columns:repeat(2,1fr)}
@media(min-width:700px){.gal{grid-template-columns:repeat(3,1fr)}}
.gal img{aspect-ratio:1;object-fit:cover;border-radius:12px;width:100%}
.difs{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));list-style:none}
.difs li{padding:20px;border-radius:14px;background:var(--p);color:#fff;font-weight:600}
.difs li::before{content:"✓ ";color:var(--s)}
blockquote{font-style:italic}
blockquote footer{font-style:normal;font-weight:600;margin-top:.6rem;color:var(--p)}
.local{display:grid;gap:30px;grid-template-columns:repeat(auto-fit,minmax(280px,1fr))}
.local iframe{width:100%;min-height:320px;border:0;border-radius:18px}
.horarios li{list-style:none;display:flex;justify-content:space-between;border-bottom:1px solid rgba(0,0,0,.08);padding:8px 0}
.final{background:var(--p);color:#fff;text-align:center}
.final p{opacity:.85;margin-bottom:1.6rem}
footer.site{background:#0b0b0b;color:#bbb;padding:28px 0;font-size:.9rem;text-align:center}
footer.site a{color:#fff}
.fab{position:fixed;right:18px;bottom:18px;z-index:40;width:60px;height:60px;border-radius:50%;background:#25D366;display:grid;place-items:center;box-shadow:0 8px 24px rgba(0,0,0,.25)}
.fab svg{width:32px;height:32px;fill:#fff}
</style>
</head>
<body>

<div class="preview" id="pv">
  <span>✨ Prévia criada pela <strong>Downway</strong> especialmente para <strong>${esc(d.nome)}</strong>.</span>
  ${downwayWa ? `<a href="${esc(downwayWa)}" target="_blank" rel="noopener">Quero este site no ar${p.preco ? ' — ' + esc(p.preco) : ''}</a>` : ''}
  <button aria-label="Fechar" onclick="document.getElementById('pv').remove()">✕</button>
</div>

<header><div class="wrap">
  ${d.logo ? `<img class="logo" src="${esc(d.logo)}" alt="${esc(d.nome)}">` : `<span class="logo-txt">${esc(d.nome)}</span>`}
  ${ctaBtn()}
</div></header>

<section class="hero"><div class="wrap">
  <h1>${esc(d.headline || d.nome)}</h1>
  <p>${esc(d.slogan || d.descricao || '')}</p>
  <div class="acts">${ctaBtn()}${ig ? `<a class="btn ghost" href="${esc(ig)}" target="_blank" rel="noopener">Ver Instagram</a>` : ''}</div>
</div></section>

${d.sobre ? `<section><div class="wrap sobre">
  <div><h2>${esc(d.tituloSobre || 'Sobre nós')}</h2>${[].concat(d.sobre).map((t) => `<p>${esc(t)}</p>`).join('')}<br>${ctaBtn()}</div>
  ${d.fotoSobre ? `<img src="${esc(d.fotoSobre)}" alt="${esc(d.nome)}" loading="lazy">` : ''}
</div></section>` : ''}

${d.servicos?.length ? `<section class="alt"><div class="wrap">
  <h2>${esc(d.tituloServicos || n.tituloServicos)}</h2>
  <div class="grid">${d.servicos.map((s) => `<div class="card"><h3>${esc(s.nome)}</h3>${s.descricao ? `<p>${esc(s.descricao)}</p>` : ''}${s.preco ? `<span class="preco">${esc(s.preco)}</span>` : ''}</div>`).join('')}</div>
</div></section>` : ''}

${d.galeria?.length ? `<section><div class="wrap">
  <h2>${esc(d.tituloGaleria || n.tituloGaleria)}</h2>
  <div class="gal">${d.galeria.map((g) => `<img src="${esc(g)}" alt="${esc(d.nome)}" loading="lazy">`).join('')}</div>
</div></section>` : ''}

<section class="alt"><div class="wrap">
  <h2>Por que escolher ${esc(d.nome)}</h2>
  <ul class="difs">${diferenciais.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
</div></section>

${d.depoimentos?.length ? `<section><div class="wrap">
  <h2>O que dizem nossos clientes</h2>
  <div class="grid">${d.depoimentos.map((t) => `<div class="card"><blockquote>“${esc(t.texto)}”<footer>${esc(t.nome)}</footer></blockquote></div>`).join('')}</div>
</div></section>` : ''}

${d.endereco || d.horarios?.length ? `<section class="alt"><div class="wrap local">
  <div>
    <h2>Onde estamos</h2>
    ${d.endereco ? `<p>${esc(d.endereco)}</p><br>` : ''}
    ${d.horarios?.length ? `<ul class="horarios">${d.horarios.map((h) => `<li><span>${esc(h.dias)}</span><strong>${esc(h.horas)}</strong></li>`).join('')}</ul><br>` : ''}
    ${ctaBtn()}
  </div>
  ${d.endereco ? `<iframe loading="lazy" title="Mapa" src="https://maps.google.com/maps?q=${encodeURIComponent(d.mapa || d.endereco)}&output=embed"></iframe>` : ''}
</div></section>` : ''}

<section class="final"><div class="wrap">
  <h2>${esc(d.chamadaFinal || 'Vamos conversar?')}</h2>
  <p>${esc(d.subChamadaFinal || 'Fale com a gente agora mesmo pelo WhatsApp.')}</p>
  ${ctaBtn()}
</div></section>

<footer class="site"><div class="wrap">
  © ${new Date().getFullYear()} ${esc(d.nome)}${d.cidade ? ' · ' + esc(d.cidade) : ''}
  ${ig ? ` · <a href="${esc(ig)}" target="_blank" rel="noopener">@${esc(d.instagram.replace(/^@/, ''))}</a>` : ''}
  ${d.telefone ? ` · ${esc(d.telefone)}` : ''}
</div></footer>

${wa ? `<a class="fab" href="${esc(wa)}" target="_blank" rel="noopener" aria-label="WhatsApp"><svg viewBox="0 0 32 32"><path d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3zm0 23.7c-2 0-4-.6-5.7-1.6l-.4-.2-3.9 1 1-3.8-.3-.4A10.7 10.7 0 1 1 16 26.7zm5.9-8c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0a8.8 8.8 0 0 1-4.4-3.8c-.3-.6.3-.5 1-1.7.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.7 3.7 0 0 0-1.1 2.7 6.4 6.4 0 0 0 1.3 3.4 14.7 14.7 0 0 0 5.6 5c2.1.9 2.9 1 4 .8.6-.1 1.9-.8 2.2-1.5s.3-1.4.2-1.5-.3-.2-.6-.4z"/></svg></a>` : ''}
</body>
</html>
`;
}
