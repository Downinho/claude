// Anúncio 1 — "SITE NO AR EM 15 DIAS ÚTEIS" (17 s, 120 bpm: 1 batida = 0,5 s)
window.DURATION = 17;
const PROJ = [
  ["gv-drill.jpg", "gvdrill.com.br", "GV DRILL", "PERFURAÇÃO DIRECIONAL"],
  ["mt-engenharia.jpg", "mtengenhariast.com.br", "MT ENGENHARIA", "SEGURANÇA DO TRABALHO"],
  ["emite-engenharia.jpg", "emiteengenharia.com.br", "EMITE ENGENHARIA", "TELECOMUNICAÇÕES"],
  ["vertis-elevadores.jpg", "vertiselevadores.com.br", "VÉRTIS ELEVADORES", "ELEVADORES"],
];
const QUERY = "fornecedor industrial em sp";
const HITS = [2.0, 2.5, 5.5, 6.0, 11.0, 11.75, 12.5, 13.5];
window.setup = () => loadImages([...PROJ.map((p) => p[0]), "logo-downway.png"]);

// trilha
cue(0, "pad", { until: 3.0 });
for (let i = 0; i < QUERY.length; i++) cue(0.25 + i * 0.045, "key");
cue(1.6, "riser", { dur: 0.4 });
cue(2.0, "impact", { glitch: true }); cue(2.5, "impact", { glitch: true });
cue(2.75, "whoosh");
cue(3.0, "drop");
for (let i = 1; i <= 15; i++) cue(3.5 + (i - 1) * (2 / 14), "tick", { pitch: i });
cue(5.5, "impact", { big: true }); cue(6.0, "impact");
cue(6.25, "whoosh");
for (let i = 0; i < 4; i++) cue(6.75 + i * 0.25, "blip");
for (let i = 0; i < 4; i++) cue(8.0 + i * 0.625, "swoosh");
cue(10.6, "whoosh");
cue(11.0, "impact"); cue(11.75, "impact"); cue(12.5, "impact", { big: true });
cue(12.8, "riser", { dur: 0.7 });
cue(13.5, "end");

window.render = (t) => {
  const [sx, sy] = shake(t, HITS);
  ctx.save(); ctx.translate(sx, sy);
  background(t, { glow: t < 3 ? 0.5 : 1 });

  if (t < 3.05) sceneSearch(t);
  else if (t < 6.5) sceneCounter(t);
  else if (t < 10.9) sceneBuild(t);
  else if (t < 13.5) sceneSlams(t);
  ctx.restore();

  endCard(t, 13.5);
  hud(t, t < 13.5 ? "DOWNWAY" : "DOWNWAY", t < 3 ? "BUSCA · 00 RESULTADOS SEUS" : t < 6.5 ? "PRAZO · 15 DIAS ÚTEIS" : t < 11 ? "PORTFÓLIO REAL · SITES NO AR" : "SEM LETRA MIÚDA", t < 13.5 ? 1 : 1 - seg(t, 13.5, 13.8));
  wipe(t, 2.75, 0.5); wipe(t, 6.2, 0.5); wipe(t, 10.6, 0.5); wipe(t, 13.25, 0.5);
  flash(t, [2.0, 2.5, 5.5, 11.0, 11.75, 12.5], 0.35);
  flash(t, [13.5], 0.8, "34,130,240");
  vignette(); grain(t);
  sliceGlitch(t, Math.max(Math.exp(-(t - 2.0) * 8) * (t >= 2 ? 1 : 0), Math.exp(-(t - 2.5) * 8) * (t >= 2.5 ? 1 : 0)));
};

// 0–3 s: alguém procura um fornecedor… e a sua empresa não aparece
function sceneSearch(t) {
  const a = 1 - seg(t, 2.85, 3.05);
  ctx.save(); ctx.globalAlpha = a;
  txt("SEU CLIENTE PROCURA:", W / 2, 560, { font: F.m(30), color: C.muted, ls: 8, alpha: seg(t, 0.05, 0.3) });
  const bp = E.outExpo(seg(t, 0, 0.4));
  ctx.save(); ctx.translate(W / 2, 680); ctx.scale(lerp(0.85, 1, bp), lerp(0.85, 1, bp)); ctx.globalAlpha *= bp;
  rrect(-450, -60, 900, 120, 60); ctx.fillStyle = "#18181a"; ctx.fill(); ctx.strokeStyle = "rgba(90,162,245,0.55)"; ctx.lineWidth = 3; ctx.stroke();
  ctx.strokeStyle = C.soft; ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(-375, -6, 20, 0, 7); ctx.stroke(); ctx.beginPath(); ctx.moveTo(-361, 8); ctx.lineTo(-346, 23); ctx.stroke();
  const n = Math.floor(clamp((t - 0.25) / 0.045, 0, QUERY.length));
  const s = QUERY.slice(0, n);
  txt(s, -315, 14, { font: F.b(40, 500), color: C.ink, align: "left" });
  if (Math.floor(t * 3) % 2 === 0 || n < QUERY.length) { const cw = measure(s, F.b(40, 500)); ctx.fillStyle = C.brand; ctx.fillRect(-310 + cw, -22, 4, 48); }
  ctx.restore();
  // resultados "carregando"
  for (let i = 0; i < 4; i++) {
    const rp = E.outExpo(seg(t, 1.45 + i * 0.08, 1.8 + i * 0.08));
    if (rp <= 0) continue;
    const y = 820 + i * 120;
    ctx.globalAlpha = a * rp * 0.9;
    ctx.fillStyle = "#1c1c1f"; rrect(90, y, 900 * rp, 26, 13); ctx.fill();
    ctx.fillStyle = "#151517"; rrect(90, y + 42, 640 * rp, 18, 9); ctx.fill();
    txt(`CONCORRENTE ${String.fromCharCode(65 + i)}`, 104, y + 20, { font: F.m(18), color: C.muted, align: "left", ls: 4, alpha: rp });
  }
  ctx.globalAlpha = a;
  ctx.restore();
  // a pancada
  if (t >= 2.0) {
    ctx.save(); ctx.fillStyle = `rgba(12,12,13,${0.75 * a})`; ctx.fillRect(0, 0, W, H); ctx.restore();
    slam("SUA EMPRESA", W / 2, 960, t, 2.0, { font: F.d(190), glitch: true, out: 2.85 });
    slam("NÃO APARECE.", W / 2, 1150, t, 2.5, { font: F.d(190), color: C.brand, glitch: true, glow: 40, out: 2.85 });
  }
}

// 3–6,5 s: contador de 15 dias úteis
function sceneCounter(t) {
  const out = seg(t, 6.25, 6.5);
  ctx.save(); ctx.globalAlpha = 1 - out;
  slam("SITE NO AR EM", W / 2, 520, t, 3.0, { font: F.d(120), color: C.ink, ls: 6 });
  const p = seg(t, 3.5, 5.5);
  const day = Math.max(1, Math.min(15, Math.floor(p * 14) + 1));
  const cx = W / 2, cy = 930, R = 300;
  // anel com 15 marcas
  for (let i = 0; i < 15; i++) {
    const ang = -Math.PI / 2 + (i / 15) * Math.PI * 2;
    const on = i < day && t >= 3.5;
    ctx.strokeStyle = on ? C.brand : "rgba(90,162,245,0.18)"; ctx.lineWidth = on ? 14 : 8;
    if (on) { ctx.shadowColor = C.brand; ctx.shadowBlur = 20; } else ctx.shadowBlur = 0;
    ctx.beginPath(); ctx.arc(cx, cy, R, ang + 0.05, ang + (Math.PI * 2) / 15 - 0.05); ctx.stroke();
  }
  ctx.shadowBlur = 0;
  // número
  const lock = t >= 5.5;
  const pop = lock ? 1 + 0.25 * Math.exp(-(t - 5.5) * 8) : 1 + 0.06 * Math.exp(-((t - 3.5) % (2 / 14)) * 30);
  ctx.save(); ctx.translate(cx, cy + 120); ctx.scale(pop, pop);
  txt(String(t < 3.5 ? 0 : day).padStart(2, "0"), 0, 0, { font: F.d(lock ? 400 : 360), color: lock ? C.brand : C.ink, glow: lock ? 70 : 10 });
  ctx.restore();
  txt(t < 5.5 ? "DIA" : "", cx, cy - 150, { font: F.m(30), color: C.muted, ls: 10 });
  slam("DIAS ÚTEIS.", W / 2, 1420, t, 6.0, { font: F.d(170), color: C.ink, glow: 20, glowColor: "rgba(34,130,240,0.5)" });
  // partículas na trava
  if (lock) for (let i = 0; i < 40; i++) {
    const k = t - 5.5, ang = rnd(i) * 7, sp = 300 + rnd(i + 9) * 900;
    const r = sp * E.outExpo(clamp(k / 1.2));
    ctx.fillStyle = `rgba(90,162,245,${clamp(1 - k / 1.0)})`;
    ctx.fillRect(cx + Math.cos(ang) * r, cy + Math.sin(ang) * r, 5, 5);
  }
  ctx.restore();
}

// 6,5–11 s: o site se monta e vira projetos reais no ar
function sceneBuild(t) {
  const bx = 70, by = 640, bw = W - 140, bh = 58 + Math.round((W - 144) * 726 / 1568);
  const out = seg(t, 10.6, 10.9);
  ctx.save(); ctx.globalAlpha = 1 - out;
  // texto vazado gigante rolando atrás
  ctx.save(); ctx.globalAlpha *= 0.12; ctx.strokeStyle = C.soft; ctx.lineWidth = 2; ctx.font = F.d(330); ctx.textAlign = "left";
  const off = ((t - 6.5) * 260) % 2400;
  ctx.strokeText("PORTFÓLIO REAL · PORTFÓLIO REAL · ", -off, 470);
  ctx.strokeText("NO AR · NO AR · NO AR · NO AR · ", -2400 + off, 1660);
  ctx.restore();
  slam("FEITO SOB MEDIDA.", W / 2, 440, t, 6.6, { font: F.d(110), color: C.ink });
  if (t < 8.0) {
    // desenho técnico do layout
    const dp = E.outExpo(seg(t, 6.5, 7.1));
    ctx.save(); ctx.strokeStyle = C.soft; ctx.lineWidth = 3; ctx.setLineDash([bw * 2 * dp + 1, 99999]);
    rrect(bx, by, bw, bh, 22); ctx.stroke(); ctx.restore();
    const blocks = [
      [bx + 30, by + 30, bw - 60, 50, "MENU"],
      [bx + 30, by + 110, bw * 0.55, 300, "HERO · TÍTULO"],
      [bx + 60 + bw * 0.55, by + 110, bw * 0.45 - 90, 300, "FOTO"],
      [bx + 30, by + 440, 300, 80, "CTA"],
      [bx + 350, by + 440, 300, 80, "WHATSAPP"],
      [bx + 30, by + 560, bw - 60, 110, "SEO · GOOGLE"],
    ];
    blocks.forEach(([x, y, w, h, l], i) => {
      const k = E.outBack(seg(t, 6.75 + Math.floor(i / 2) * 0.25 + (i % 2) * 0.08, 7.0 + Math.floor(i / 2) * 0.25 + (i % 2) * 0.08));
      if (k <= 0) return;
      ctx.save(); ctx.translate(x + w / 2, y + h / 2); ctx.scale(k, k);
      ctx.fillStyle = "rgba(34,130,240,0.10)"; ctx.strokeStyle = "rgba(90,162,245,0.8)"; ctx.lineWidth = 2;
      rrect(-w / 2, -h / 2, w, h, 10); ctx.fill(); ctx.stroke();
      txt(l, 0, 9, { font: F.m(24), color: C.soft, ls: 4 });
      ctx.restore();
    });
  } else {
    // projetos reais entrando um por batida e meia
    const i = Math.min(3, Math.floor((t - 8.0) / 0.625));
    const k = (t - 8.0 - i * 0.625);
    const P = PROJ[i];
    const prev = i > 0 ? PROJ[i - 1] : null;
    const rev = E.inOutExpo(clamp(k / 0.3));
    const tilt = (1 - E.outExpo(clamp(k / 0.5))) * 0.04;
    ctx.save(); ctx.translate(W / 2, by + bh / 2); ctx.rotate(tilt); ctx.translate(-W / 2, -(by + bh / 2));
    if (prev && rev < 1) browser(bx, by, bw, bh, IMG[prev[0]], { url: prev[1], scroll: 0.15 });
    if (!prev && t < 8.3) browser(bx, by, bw, bh, null, { url: "" });
    // o site novo entra varrendo da direita por cima do anterior
    const rv = prev ? rev : E.outExpo(seg(t, 8.0, 8.3));
    ctx.save(); ctx.beginPath(); ctx.rect(bx - 80 + (bw + 160) * (1 - rv), by - 80, (bw + 160) * rv, bh + 160); ctx.clip();
    browser(bx, by, bw, bh, IMG[P[0]], { url: P[1], scroll: clamp(k / 0.625) * 0.15 });
    ctx.restore();
    if (rv > 0 && rv < 1) { const lx = bx - 80 + (bw + 160) * (1 - rv); ctx.fillStyle = C.soft; ctx.shadowColor = C.brand; ctx.shadowBlur = 30; ctx.fillRect(lx - 3, by - 40, 6, bh + 80); ctx.shadowBlur = 0; }
    ctx.restore();
    // carimbo "NO AR"
    const st = E.outBack(seg(k, 0.12, 0.32));
    if (st > 0) {
      ctx.save(); ctx.translate(W - 190, by + 130); ctx.rotate(-0.18); ctx.scale(lerp(2.2, 1, st), lerp(2.2, 1, st)); ctx.globalAlpha *= clamp(st * 2);
      rrect(-120, -46, 240, 92, 14); ctx.fillStyle = C.brand; ctx.shadowColor = C.brand; ctx.shadowBlur = 40; ctx.fill(); ctx.shadowBlur = 0;
      txt("NO AR ✓", 0, 22, { font: F.d(72), color: "#0b0d11", ls: 2 });
      ctx.restore();
    }
    txt(P[2], W / 2, by + bh + 120, { font: F.d(96), color: C.ink, alpha: clamp(k / 0.15) });
    txt(P[3], W / 2, by + bh + 180, { font: F.m(26), color: C.soft, ls: 8, alpha: clamp(k / 0.2) });
    txt(`PROJETO ${String(i + 1).padStart(2, "0")} / 04`, bx, by - 30, { font: F.m(24), color: C.muted, align: "left", ls: 6 });
  }
  ctx.restore();
}

// 11–13,5 s: sem letra miúda
function sceneSlams(t) {
  const lines = [["PREÇO", "FECHADO.", 11.0], ["ZERO", "FIDELIDADE.", 11.75], ["DIRETO COM", "QUEM EXECUTA.", 12.5]];
  const out = seg(t, 13.25, 13.5);
  ctx.save(); ctx.globalAlpha = 1 - out;
  lines.forEach(([a, b, t0], i) => {
    if (t < t0) return;
    const later = lines.filter((l) => t >= l[2]).length - 1 - i; // quantas linhas vieram depois
    const y = 560 + i * 420;
    const dim = later > 0 ? 0.4 : 1;
    const k = E.outExpo(seg(t, t0, t0 + 0.3));
    ctx.save(); ctx.globalAlpha *= dim * clamp(k * 4);
    const fs = i === 2 ? 150 : 190;
    ctx.translate(W / 2, y); ctx.scale(lerp(1.9, 1, k), lerp(1.9, 1, k));
    if (k < 1) ctx.filter = `blur(${((1 - k) * 18).toFixed(1)}px)`;
    txt(a, 0, -fs * 0.48, { font: F.d(fs), color: C.ink });
    txt(b, 0, fs * 0.48, { font: F.d(fs), color: C.brand, glow: later ? 0 : 40 });
    ctx.restore();
    // check
    if (false) {
      const ck = E.outExpo(seg(t, t0 + 0.12, t0 + 0.4));
      ctx.save(); ctx.strokeStyle = C.brand; ctx.lineWidth = 12; ctx.lineCap = "round"; ctx.shadowColor = C.brand; ctx.shadowBlur = 25;
      const cx0 = 150, cy0 = y - 10; ctx.beginPath(); ctx.moveTo(cx0 - 40, cy0); ctx.lineTo(cx0 - 40 + 30 * Math.min(1, ck * 2), cy0 + 30 * Math.min(1, ck * 2));
      if (ck > 0.5) ctx.lineTo(cx0 - 10 + 70 * (ck - 0.5) * 2, cy0 + 30 - 70 * (ck - 0.5) * 2);
      ctx.stroke(); ctx.restore();
    }
  });
  ctx.restore();
}
