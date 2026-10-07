// Motor de motion design dos anúncios Downway — tudo é função do tempo t (determinístico, quadro a quadro).
const W = 1080, H = 1920;
const FPS = 24;
const C = { bg: "#0c0c0d", surface: "#151516", line: "#2a2a2d", ink: "#eef2f7", muted: "#a1a1a8", brand: "#2282f0", soft: "#5aa2f5", deep: "#0b2a52" };
const cv = document.getElementById("c");
cv.width = W; cv.height = H;
const ctx = cv.getContext("2d");
const buf = document.createElement("canvas"); buf.width = W; buf.height = H;
const bctx = buf.getContext("2d");

const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const lerp = (a, b, f) => a + (b - a) * f;
const seg = (t, a, b) => clamp((t - a) / (b - a));
const rnd = (i) => { const x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
const E = {
  outExpo: (x) => (x >= 1 ? 1 : 1 - Math.pow(2, -10 * x)),
  inExpo: (x) => (x <= 0 ? 0 : Math.pow(2, 10 * x - 10)),
  outCubic: (x) => 1 - Math.pow(1 - x, 3),
  inCubic: (x) => x * x * x,
  inOutCubic: (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2),
  inOutExpo: (x) => (x <= 0 ? 0 : x >= 1 ? 1 : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 : (2 - Math.pow(2, -20 * x + 10)) / 2),
  outBack: (x) => { const c1 = 2.2, c3 = c1 + 1; return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2); },
};
const F = {
  d: (s) => `${s}px "Bebas Neue", Impact, sans-serif`,
  m: (s, w = 500) => `${w} ${s}px "Plex Mono", ui-monospace, monospace`,
  b: (s, w = 500) => `${w} ${s}px "Inter", system-ui, sans-serif`,
};

// cues de áudio registrados pelos anúncios (lidos pelo gerador de trilha)
window.CUES = [];
const cue = (t, type, extra = {}) => window.CUES.push({ t, type, ...extra });

function txt(s, x, y, o = {}) {
  ctx.save();
  ctx.font = o.font || F.d(120);
  ctx.letterSpacing = (o.ls || 0) + "px";
  ctx.textAlign = o.align || "center";
  ctx.textBaseline = o.base || "alphabetic";
  ctx.globalAlpha *= o.alpha ?? 1;
  if (o.glow) { ctx.shadowColor = o.glowColor || o.color || C.brand; ctx.shadowBlur = o.glow; }
  ctx.fillStyle = o.color || C.ink;
  ctx.fillText(s, x, y);
  ctx.restore();
}
const measure = (s, font, ls = 0) => { ctx.save(); ctx.font = font; ctx.letterSpacing = ls + "px"; const w = ctx.measureText(s).width; ctx.restore(); return w; };

// Texto que "bate" na tela: entra grande e desfocado, trava, sai explodindo
function slam(s, x, y, t, t0, o = {}) {
  const p = seg(t, t0, t0 + (o.dur || 0.32));
  if (p <= 0) return;
  const out = o.out != null ? seg(t, o.out, o.out + 0.22) : 0;
  if (out >= 1) return;
  const e = E.outExpo(p);
  const sc = lerp(o.from || 2.4, 1, e) * (1 + E.inExpo(out) * 0.35);
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(sc, sc);
  ctx.globalAlpha = clamp(p * 5) * (1 - out);
  const bl = (1 - e) * 24 + out * 18;
  if (bl > 0.5) ctx.filter = `blur(${bl.toFixed(1)}px)`;
  const g = o.glitch ? Math.max(0, 1 - (t - t0) / 0.5) : 0;
  if (g > 0) {
    const dx = 14 * g * (rnd(Math.floor(t * 60)) > 0.5 ? 1 : -1);
    ctx.globalCompositeOperation = "lighter";
    txt(s, -dx, 0, { ...o, color: "#ff2050", alpha: 0.8, glow: 0 });
    txt(s, dx, 0, { ...o, color: "#10d0ff", alpha: 0.8, glow: 0 });
    ctx.globalCompositeOperation = "source-over";
  }
  txt(s, 0, 0, o);
  ctx.restore();
}

// Fundo: grade de engenharia em movimento, vinheta e luz da marca
function background(t, o = {}) {
  ctx.fillStyle = C.bg; ctx.fillRect(0, 0, W, H);
  const glowY = o.glowY ?? H * 0.45;
  const gr = ctx.createRadialGradient(W / 2, glowY, 0, W / 2, glowY, H * 0.62);
  gr.addColorStop(0, `rgba(34,130,240,${0.16 * (o.glow ?? 1)})`);
  gr.addColorStop(1, "rgba(34,130,240,0)");
  ctx.fillStyle = gr; ctx.fillRect(0, 0, W, H);
  if (o.grid !== false) {
    const step = 72, off = (t * (o.speed ?? 24)) % step, a = o.gridAlpha ?? 0.07;
    ctx.save();
    ctx.strokeStyle = `rgba(90,162,245,${a})`; ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = -step + off; x < W + step; x += step) { ctx.moveTo(Math.round(x) + 0.5, 0); ctx.lineTo(Math.round(x) + 0.5, H); }
    for (let y = -step + off; y < H + step; y += step) { ctx.moveTo(0, Math.round(y) + 0.5); ctx.lineTo(W, Math.round(y) + 0.5); }
    ctx.stroke();
    ctx.strokeStyle = `rgba(90,162,245,${a * 0.45})`;
    ctx.beginPath();
    for (let x = -step + off + step / 2; x < W + step; x += step) { ctx.moveTo(Math.round(x) + 0.5, 0); ctx.lineTo(Math.round(x) + 0.5, H); }
    for (let y = -step + off + step / 2; y < H + step; y += step) { ctx.moveTo(0, Math.round(y) + 0.5); ctx.lineTo(W, Math.round(y) + 0.5); }
    ctx.stroke();
    ctx.restore();
  }
}

function vignette() {
  const v = ctx.createRadialGradient(W / 2, H / 2, H * 0.3, W / 2, H / 2, H * 0.75);
  v.addColorStop(0, "rgba(0,0,0,0)"); v.addColorStop(1, "rgba(0,0,0,0.7)");
  ctx.fillStyle = v; ctx.fillRect(0, 0, W, H);
}

// Granulação de filme (4 texturas pré-geradas, sorteadas por quadro)
const grains = [0, 1, 2, 3].map((k) => {
  const g = document.createElement("canvas"); g.width = 540; g.height = 960;
  const gx = g.getContext("2d"), id = gx.createImageData(540, 960);
  for (let i = 0; i < id.data.length; i += 4) { const v = rnd(i * 0.37 + k * 1000.3) * 255; id.data[i] = id.data[i + 1] = id.data[i + 2] = v; id.data[i + 3] = 255; }
  gx.putImageData(id, 0, 0); return g;
});
function grain(t, a = 0.05) {
  ctx.save(); ctx.globalAlpha = a; ctx.globalCompositeOperation = "overlay";
  ctx.drawImage(grains[Math.floor(t * 30) % 4], 0, 0, W, H); ctx.restore();
}

// HUD no estilo do site: cantoneiras, REC, timecode
function hud(t, label = "DOWNWAY", sub = "SÃO PAULO · 23.55°S 46.63°W", a = 1) {
  if (a <= 0) return;
  ctx.save(); ctx.globalAlpha = a;
  ctx.strokeStyle = "rgba(238,242,247,0.55)"; ctx.lineWidth = 3;
  const m = 56, L = 46;
  for (const [x, y, sx, sy] of [[m, 150, 1, 1], [W - m, 150, -1, 1], [m, H - 150, 1, -1], [W - m, H - 150, -1, -1]]) {
    ctx.beginPath(); ctx.moveTo(x, y + sy * L); ctx.lineTo(x, y); ctx.lineTo(x + sx * L, y); ctx.stroke();
  }
  const blink = Math.floor(t * 1.6) % 2 === 0;
  ctx.fillStyle = C.brand; ctx.shadowColor = C.brand; ctx.shadowBlur = blink ? 14 : 0;
  ctx.globalAlpha = a * (blink ? 1 : 0.3);
  ctx.beginPath(); ctx.arc(m + 26, 214, 8, 0, 7); ctx.fill();
  ctx.shadowBlur = 0; ctx.globalAlpha = a;
  txt(`REC · ${label}`, m + 48, 224, { font: F.m(26), color: C.soft, align: "left", ls: 6 });
  const s = Math.floor(t), f = Math.floor((t % 1) * 60);
  txt(`00:00:${String(s).padStart(2, "0")}:${String(f).padStart(2, "0")}`, W - m - 20, 224, { font: F.m(26), color: C.muted, align: "right", ls: 4 });
  txt(sub, W / 2, H - 186, { font: F.m(22), color: "rgba(161,161,168,0.8)", ls: 6 });
  ctx.restore();
}

// Lâmina azul que atravessa a tela na troca de cena
function wipe(t, t0, dur = 0.5) {
  const p = seg(t, t0, t0 + dur);
  if (p <= 0 || p >= 1) return;
  const y = lerp(H * 1.3, -H * 0.6, E.inOutExpo(p));
  ctx.save();
  ctx.translate(W / 2, y); ctx.rotate(-0.22);
  const gr = ctx.createLinearGradient(0, -420, 0, 420);
  gr.addColorStop(0, "rgba(34,130,240,0)"); gr.addColorStop(0.3, C.brand); gr.addColorStop(0.55, C.soft); gr.addColorStop(0.7, C.brand); gr.addColorStop(1, "rgba(34,130,240,0)");
  ctx.fillStyle = gr; ctx.fillRect(-W, -420, W * 2, 840);
  ctx.fillStyle = "rgba(255,255,255,0.85)"; ctx.fillRect(-W, -6, W * 2, 12);
  ctx.restore();
}

function flash(t, hits, a = 0.5, color = "255,255,255") {
  let v = 0;
  for (const h of hits) if (t >= h) v = Math.max(v, a * Math.exp(-(t - h) * 14));
  if (v < 0.01) return;
  ctx.fillStyle = `rgba(${color},${v})`; ctx.fillRect(0, 0, W, H);
}
function shake(t, hits, amp = 22) {
  let x = 0, y = 0;
  for (const h of hits) if (t >= h && t - h < 0.5) { const k = amp * Math.exp(-(t - h) * 9); x += Math.sin((t - h) * 90) * k; y += Math.cos((t - h) * 77) * k * 0.7; }
  return [x, y];
}

// Fatias deslocadas (glitch de quadro inteiro)
function sliceGlitch(t, amount) {
  if (amount <= 0.02) return;
  bctx.clearRect(0, 0, W, H); bctx.drawImage(cv, 0, 0);
  const fr = Math.floor(t * 60), n = 9;
  for (let i = 0; i < n; i++) {
    const y = Math.floor(rnd(fr * 13 + i) * H), h = 20 + rnd(fr * 7 + i) * 120;
    const dx = (rnd(fr * 3 + i * 5) - 0.5) * 160 * amount;
    ctx.drawImage(buf, 0, y, W, h, dx, y, W, h);
    if (i % 3 === 0) { ctx.fillStyle = `rgba(34,130,240,${0.25 * amount})`; ctx.fillRect(0, y, W, 3); }
  }
}

function rrect(x, y, w, h, r) { ctx.beginPath(); ctx.roundRect(x, y, w, h, r); }

// Imagens
const IMG = {};
function loadImages(list) {
  return Promise.all(list.map((n) => new Promise((res) => { const im = new Image(); im.onload = () => { IMG[n] = im; res(); }; im.onerror = res; im.src = "assets/" + n; })));
}

// Navegador com print real do site
function browser(x, y, w, h, img, o = {}) {
  ctx.save();
  ctx.shadowColor = "rgba(34,130,240,0.45)"; ctx.shadowBlur = o.glow ?? 60;
  rrect(x, y, w, h, 22); ctx.fillStyle = C.surface; ctx.fill();
  ctx.shadowBlur = 0;
  ctx.strokeStyle = "rgba(90,162,245,0.5)"; ctx.lineWidth = 2; ctx.stroke();
  const bar = 58;
  ["#ff5f57", "#febc2e", "#28c840"].forEach((c, i) => { ctx.fillStyle = c; ctx.beginPath(); ctx.arc(x + 34 + i * 30, y + bar / 2, 9, 0, 7); ctx.fill(); });
  rrect(x + 140, y + 13, w - 180, 32, 16); ctx.fillStyle = "#0c0c0d"; ctx.fill();
  if (o.url) txt(o.url, x + 162, y + 37, { font: F.m(20, 400), color: C.muted, align: "left" });
  ctx.save(); rrect(x + 2, y + bar, w - 4, h - bar - 2, [0, 0, 20, 20]); ctx.clip();
  ctx.fillStyle = "#0a0a0b"; ctx.fillRect(x, y + bar, w, h - bar);
  if (img) {
    const iw = w - 4, ih = img.height * (iw / img.width);
    const reveal = o.reveal ?? 1;
    ctx.beginPath(); ctx.rect(x + 2 + (iw * (1 - reveal)), y + bar, iw * reveal, h - bar); ctx.clip();
    ctx.drawImage(img, x + 2, y + bar - (o.scroll || 0) * Math.max(0, ih - (h - bar)), iw, ih);
  }
  ctx.restore();
  ctx.restore();
}

// Textura de aço escovado (gerada uma vez)
const brushed = (() => {
  const c = document.createElement("canvas"); c.width = 540; c.height = 960;
  const g = c.getContext("2d"); g.fillStyle = "#0c0c0d"; g.fillRect(0, 0, 540, 960);
  for (let i = 0; i < 2600; i++) {
    const y = rnd(i * 3.1) * 960, x = rnd(i * 7.7) * 540 - 200, w = 120 + rnd(i * 1.3) * 420, a = 0.015 + rnd(i * 5.9) * 0.035;
    g.fillStyle = `rgba(200,210,225,${a})`; g.fillRect(x, y, w, 1);
  }
  return c;
})();

// Assinatura final premium: preto, textura sutil, logo, ENGENHARIA DIGITAL, assinatura e site. Sem giro, sem explosão.
const SIG = {
  pt: { line: "ENGENHARIA DIGITAL", tag: "Tecnologia que respeita o chão de fábrica." },
  en: { line: "DIGITAL ENGINEERING", tag: "Technology that respects the shop floor." },
  es: { line: "INGENIERÍA DIGITAL", tag: "Tecnología que respeta la planta." },
};
function signature(t, t0, lang, cta, opt = {}) {
  const k = t - t0;
  if (k < 0) return;
  const S = SIG[lang] || SIG.pt;
  ctx.save();
  ctx.globalAlpha = clamp(k / 0.5);
  ctx.fillStyle = "#070708"; ctx.fillRect(0, 0, W, H);
  ctx.globalAlpha *= 0.9; ctx.drawImage(brushed, 0, 0, W, H);
  const gl = ctx.createRadialGradient(W / 2, H * 0.42, 0, W / 2, H * 0.42, H * 0.5);
  gl.addColorStop(0, "rgba(34,130,240,0.10)"); gl.addColorStop(1, "rgba(34,130,240,0)");
  ctx.fillStyle = gl; ctx.fillRect(0, 0, W, H);
  ctx.restore();
  const a1 = E.outCubic(seg(k, 0.25, 1.1)), sc = 1.02 - 0.02 * a1;
  ctx.save(); ctx.globalAlpha = a1; ctx.translate(W / 2, H * 0.4); ctx.scale(sc, sc);
  if (IMG["logo-downway.png"]) { ctx.shadowColor = "rgba(34,130,240,0.55)"; ctx.shadowBlur = 40; ctx.drawImage(IMG["logo-downway.png"], -110, -300, 220, 220); ctx.shadowBlur = 0; }
  const font = F.d(150), wd = measure("DOWN", font, 8), wy = measure("WAY", font, 8), x0 = -(wd + wy) / 2;
  txt("DOWN", x0, 10, { font, ls: 8, align: "left", color: C.ink });
  txt("WAY", x0 + wd, 10, { font, ls: 8, align: "left", color: C.brand, glow: 18 });
  ctx.restore();
  const a2 = E.outCubic(seg(k, 0.8, 1.5));
  ctx.fillStyle = `rgba(34,130,240,${a2})`; ctx.fillRect(W / 2 - 180 * a2, H * 0.4 + 52, 360 * a2, 2);
  txt(S.line, W / 2, H * 0.4 + 110, { font: F.m(30), color: C.soft, ls: 12, alpha: a2 });
  const a3 = E.outCubic(seg(k, 1.3, 2.0));
  if (!opt.noTag) txt(S.tag, W / 2, H * 0.4 + 180, { font: F.b(32, 400), color: C.muted, alpha: a3 });
  if (cta) {
    ctx.save(); ctx.globalAlpha = a3; ctx.font = F.m(28); ctx.letterSpacing = "5px";
    const w = ctx.measureText(cta).width + 72; rrect(W / 2 - w / 2, H * 0.62 - 44, w, 76, 38);
    ctx.strokeStyle = "rgba(90,162,245,0.8)"; ctx.lineWidth = 2; ctx.stroke(); ctx.restore();
    txt(cta, W / 2, H * 0.62 + 4, { font: F.m(28), color: C.ink, ls: 5, alpha: a3 });
  }
  txt("downway.com.br", W / 2, H * 0.62 + (cta ? 110 : 0), { font: F.d(60), color: C.ink, ls: 6, alpha: a3 });
}

// Interpolação de keyframes [{t, ...valores}] com easing
function keyframes(t, K, ease = E.inOutCubic) {
  let i = 0; while (i < K.length - 2 && t > K[i + 1].t) i++;
  const a = K[i], b = K[i + 1], f = ease(seg(t, a.t, b.t)), o = {};
  for (const k in a) if (k !== "t") o[k] = Array.isArray(a[k]) ? a[k].map((v, j) => lerp(v, b[k][j], f)) : lerp(a[k], b[k], f);
  return o;
}

// Legenda/título industrial: texto grande com entrada limpa (sem exagero)
function title(s, x, y, t, t0, t1, o = {}) {
  const a = E.outCubic(seg(t, t0, t0 + (o.inDur || 0.35))) * (1 - E.inCubic(seg(t, t1 - (o.outDur || 0.25), t1)));
  if (a <= 0) return;
  const dy = (1 - E.outCubic(seg(t, t0, t0 + 0.5))) * (o.rise ?? 24);
  ctx.save(); ctx.globalAlpha = a;
  if (o.blur !== false && a < 1) ctx.filter = `blur(${((1 - a) * 6).toFixed(1)}px)`;
  const lines = Array.isArray(s) ? s : [s], lh = o.lh || (parseInt(o.font || F.d(120)) * 0.95);
  lines.forEach((l, i) => txt(l, x, y + dy + i * lh, { ...o, alpha: 1 }));
  ctx.restore();
}

// Parágrafo/etiquetas em mono
function chip(s, x, y, a = 1, o = {}) {
  ctx.save(); ctx.globalAlpha *= a;
  ctx.font = F.m(o.size || 24); ctx.letterSpacing = "4px";
  const w = ctx.measureText(s).width + 44;
  const x0 = o.align === "left" ? x : x - w / 2;
  rrect(x0, y - 34, w, 52, 26);
  ctx.fillStyle = o.fill || "rgba(34,130,240,0.12)"; ctx.fill();
  ctx.strokeStyle = "rgba(90,162,245,0.6)"; ctx.lineWidth = 2; ctx.stroke();
  ctx.fillStyle = o.color || C.soft; ctx.textAlign = "left"; ctx.fillText(s, x0 + 22, y);
  ctx.restore();
  return w;
}
