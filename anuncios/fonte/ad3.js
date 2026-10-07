// Anúncio 3 — "DE SÃO PAULO PARA O MUNDO" (16,5 s, 120 bpm)
window.DURATION = 16.5;
const DEG = Math.PI / 180;
const unit = (lon, lat) => { const l = lon * DEG, p = lat * DEG; return [Math.cos(p) * Math.cos(l), Math.cos(p) * Math.sin(l), Math.sin(p)]; };
const dot3 = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const SP = unit(-46.63, -23.55);
const DEST = [
  { c: 2, name: "ESTADOS UNIDOS", utc: "UTC−5 · 1–2 H DE DIFERENÇA", ll: [-87.63, 41.88], t: 3.0 },
  { c: 3, name: "ESPANHA", utc: "UTC+1 · 4–5 H À FRENTE", ll: [-3.7, 40.42], t: 4.4 },
  { c: 4, name: "NOVA ZELÂNDIA", utc: "UTC+12 · DO OUTRO LADO DO MUNDO", ll: [174.76, -36.85], t: 5.8 },
  { c: 5, name: "AUSTRÁLIA", utc: "UTC+10 · 13 H À FRENTE", ll: [151.21, -33.87], t: 7.0 },
  { c: 6, name: "RÚSSIA", utc: "UTC+3 · 6 H À FRENTE", ll: [37.62, 55.76], t: 8.4 },
];
DEST.forEach((d) => (d.v = unit(...d.ll)));
// câmera: [tempo, lon, lat, raio]
const CAM = [[0, -55, -12, 330], [2.6, -50, -17, 560], [3.0, -50, -17, 560], [3.9, -70, 8, 430], [4.4, -70, 8, 430], [5.3, -28, 12, 430], [5.8, -28, 12, 430], [6.6, -140, -50, 410], [7.0, -140, -50, 410], [7.8, -150, -48, 410], [8.4, -150, -48, 410], [9.2, -8, 20, 420], [10.0, -8, 20, 420], [13.0, 70, 18, 330]];
let P, CODE, DIST, BR, maxD = [0, 0, 0, 0, 0, 0, 0];
window.setup = async () => {
  await loadImages(["logo-downway.png"]);
  const d = await (await fetch("assets/story-data.json")).json();
  const n = d.pts.length / 4;
  P = new Float32Array(n * 3); CODE = new Uint8Array(n); DIST = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const v = unit(d.pts[i * 4] / 10, d.pts[i * 4 + 1] / 10);
    P[i * 3] = v[0]; P[i * 3 + 1] = v[1]; P[i * 3 + 2] = v[2];
    CODE[i] = d.pts[i * 4 + 2]; DIST[i] = d.pts[i * 4 + 3];
    maxD[CODE[i]] = Math.max(maxD[CODE[i]], DIST[i]);
  }
  BR = d.br.coordinates.map((poly) => poly[0].map(([lo, la]) => unit(lo, la)));
};

cue(0, "pad", { until: 3.0 });
cue(0.5, "impact"); cue(1.0, "impact", { big: true });
cue(2.7, "riser", { dur: 0.3 });
cue(3.0, "drop");
DEST.forEach((d) => { cue(d.t - 0.05, "zap"); cue(d.t + 0.7, "impact"); });
cue(9.7, "whoosh");
cue(10.0, "impact"); cue(10.5, "impact"); cue(11.5, "impact", { big: true });
cue(12.2, "riser", { dur: 0.8 });
cue(13.0, "end");

function camAt(t) {
  let i = 0; while (i < CAM.length - 2 && t > CAM[i + 1][0]) i++;
  const a = CAM[i], b = CAM[i + 1], f = E.inOutCubic(seg(t, a[0], b[0]));
  return [lerp(a[1], b[1], f), lerp(a[2], b[2], f), lerp(a[3], b[3], f)];
}

window.render = (t) => {
  const hits = [0.5, 1.0, ...DEST.map((d) => d.t + 0.7), 10.0, 10.5, 11.5];
  const [sx, sy] = shake(t, hits, 14);
  ctx.save(); ctx.translate(sx, sy);
  background(t, { glowY: 1050, gridAlpha: 0.04, speed: 12 });
  if (t < 13.2) globe(t);
  texts(t);
  ctx.restore();
  endCard(t, 13.0);
  hud(t, "DOWNWAY GLOBAL", t < 3 ? "SÃO PAULO · 23.55°S 46.63°W" : t < 10 ? "" : "6 PAÍSES · 4 CONTINENTES", 1 - seg(t, 13.0, 13.3));
  wipe(t, 12.75, 0.5);
  flash(t, [1.0, 11.5], 0.3); flash(t, DEST.map((d) => d.t + 0.7), 0.18, "34,130,240");
  flash(t, [13.0], 0.8, "34,130,240");
  vignette(); grain(t);
  sliceGlitch(t, t >= 1.0 ? Math.exp(-(t - 1.0) * 8) * 0.8 : 0);
};

function globe(t) {
  const [lon, lat, R0] = camAt(t);
  const intro = E.outExpo(seg(t, 0, 1.2));
  const R = R0 * (0.75 + 0.25 * intro), cx = W / 2, cy = 1060;
  const l = lon * DEG, p = lat * DEG;
  const Cv = [Math.cos(p) * Math.cos(l), Math.cos(p) * Math.sin(l), Math.sin(p)];
  const Ev = [-Math.sin(l), Math.cos(l), 0];
  const Nv = [-Math.sin(p) * Math.cos(l), -Math.sin(p) * Math.sin(l), Math.cos(p)];
  const proj = (v) => [cx + R * dot3(v, Ev), cy - R * dot3(v, Nv), dot3(v, Cv)];
  ctx.save(); ctx.globalAlpha *= intro;
  // esfera
  const sg = ctx.createRadialGradient(cx - R * 0.3, cy - R * 0.35, R * 0.1, cx, cy, R);
  sg.addColorStop(0, "#0f2340"); sg.addColorStop(1, "#070b12");
  ctx.fillStyle = sg; ctx.beginPath(); ctx.arc(cx, cy, R, 0, 7); ctx.fill();
  ctx.save(); ctx.shadowColor = C.brand; ctx.shadowBlur = 60; ctx.strokeStyle = "rgba(34,130,240,0.7)"; ctx.lineWidth = 3; ctx.stroke(); ctx.restore();
  // fração preenchida de cada país
  const fill = [0, seg(t, 0.6, 2.4), ...DEST.map((d) => E.outCubic(seg(t, d.t + 0.65, d.t + 1.25)))];
  const ds = Math.max(2.2, R / 150);
  for (let i = 0, n = CODE.length; i < n; i++) {
    const v = [P[i * 3], P[i * 3 + 1], P[i * 3 + 2]];
    const z = dot3(v, Cv); if (z < 0.02) continue;
    const x = cx + R * dot3(v, Ev), y = cy - R * dot3(v, Nv);
    const c = CODE[i], on = c && DIST[i] <= fill[c] * maxD[c] + 0.01 && fill[c] > 0;
    if (on) ctx.fillStyle = c === 1 ? C.brand : C.soft;
    else ctx.fillStyle = `rgba(70,110,165,${0.25 + z * 0.45})`;
    ctx.fillRect(x - ds / 2, y - ds / 2, on ? ds * 1.15 : ds, on ? ds * 1.15 : ds);
  }
  // contorno do Brasil
  ctx.save(); ctx.strokeStyle = C.soft; ctx.lineWidth = 2.5; ctx.shadowColor = C.brand; ctx.shadowBlur = 16; ctx.globalAlpha *= seg(t, 0.4, 1.0);
  for (const ring of BR) {
    ctx.beginPath(); let pen = false;
    for (const v of ring) { const [x, y, z] = proj(v); if (z < 0) { pen = false; continue; } pen ? ctx.lineTo(x, y) : ctx.moveTo(x, y); pen = true; }
    ctx.stroke();
  }
  ctx.restore();
  // arcos
  for (const d of DEST) {
    const ap = E.inOutCubic(seg(t, d.t, d.t + 0.7));
    if (ap <= 0) continue;
    const w = Math.acos(Math.min(1, dot3(SP, d.v))), h = Math.min(0.32, 0.08 + w * 0.15);
    const N = 90, pts = [];
    for (let k = 0; k <= N * ap; k++) {
      const s = k / N, s1 = Math.sin((1 - s) * w) / Math.sin(w), s2 = Math.sin(s * w) / Math.sin(w), alt = 1 + h * Math.sin(Math.PI * s);
      const v = [(SP[0] * s1 + d.v[0] * s2) * alt, (SP[1] * s1 + d.v[1] * s2) * alt, (SP[2] * s1 + d.v[2] * s2) * alt];
      const [x, y, z] = proj(v);
      const r = Math.hypot(x - cx, y - cy) / R;
      pts.push(z > 0 || (z > -0.22 && r > 1) ? [x, y] : null);
    }
    const glowL = (wd, a, col) => {
      ctx.strokeStyle = col; ctx.lineWidth = wd; ctx.globalAlpha = a; ctx.beginPath(); let pen = false;
      for (const q of pts) { if (!q) { pen = false; continue; } pen ? ctx.lineTo(...q) : ctx.moveTo(...q); pen = true; }
      ctx.stroke();
    };
    ctx.save(); ctx.lineCap = "round"; glowL(14, 0.18 * intro, C.brand); glowL(4, 0.95 * intro, C.soft); ctx.restore();
    // pulso viajando depois de pronto
    if (ap >= 1) {
      const ph = ((t - d.t) * 0.6) % 1, q = pts[Math.floor(ph * (pts.length - 1))];
      if (q) { ctx.fillStyle = "#fff"; ctx.shadowColor = C.soft; ctx.shadowBlur = 20; ctx.beginPath(); ctx.arc(q[0], q[1], 6, 0, 7); ctx.fill(); ctx.shadowBlur = 0; }
    } else { const q = pts[pts.length - 1]; if (q) { ctx.fillStyle = "#fff"; ctx.shadowColor = "#fff"; ctx.shadowBlur = 30; ctx.beginPath(); ctx.arc(q[0], q[1], 10, 0, 7); ctx.fill(); ctx.shadowBlur = 0; } }
    // anel no destino
    const hp = seg(t, d.t + 0.7, d.t + 1.4);
    const [dx, dy, dz] = proj(d.v);
    if (hp > 0 && dz > 0) { ctx.strokeStyle = `rgba(238,242,247,${1 - hp})`; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(dx, dy, 10 + hp * 70, 0, 7); ctx.stroke(); }
  }
  // São Paulo
  const [px, py, pz] = proj(SP);
  if (pz > 0) {
    ctx.fillStyle = "#fff"; ctx.shadowColor = C.brand; ctx.shadowBlur = 25; ctx.beginPath(); ctx.arc(px, py, 8, 0, 7); ctx.fill(); ctx.shadowBlur = 0;
    const rp = (t * 0.8) % 1; ctx.strokeStyle = `rgba(90,162,245,${1 - rp})`; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(px, py, 10 + rp * 50, 0, 7); ctx.stroke();
  }
  ctx.restore();
}

function texts(t) {
  slam("COMEÇAMOS EM", W / 2, 380, t, 0.5, { font: F.d(110), out: 2.8 });
  slam("SÃO PAULO", W / 2, 560, t, 1.0, { font: F.d(200), color: C.brand, glow: 40, glitch: true, out: 2.8 });
  DEST.forEach((d, i) => {
    const t1 = d.t + 0.7, end = i < DEST.length - 1 ? DEST[i + 1].t + 0.55 : 9.8;
    if (t < t1 - 0.05 || t > end + 0.3) return;
    txt(`ROTA ${String(i + 1).padStart(2, "0")} / 05`, W / 2, 400, { font: F.m(26), color: C.soft, ls: 10, alpha: seg(t, t1, t1 + 0.15) * (1 - seg(t, end, end + 0.22)) });
    slam(d.name, W / 2, 1640, t, t1, { font: F.d(d.name.length > 10 ? 150 : 180), glow: 30, glowColor: "rgba(34,130,240,0.6)", out: end });
    txt(d.utc, W / 2, 1710, { font: F.m(24), color: C.muted, ls: 5, alpha: seg(t, t1 + 0.1, t1 + 0.3) * (1 - seg(t, end, end + 0.22)) });
  });
  // números
  const nOut = 12.8;
  if (t >= 10.0 && t < nOut + 0.3) {
    const a = 1 - seg(t, nOut, nOut + 0.25);
    ctx.save(); ctx.globalAlpha = a;
    const c1 = Math.round(E.outExpo(seg(t, 10.0, 10.4)) * 6), c2 = Math.round(E.outExpo(seg(t, 10.5, 10.9)) * 4);
    slam(String(c1).padStart(2, "0"), 300, 520, t, 10.0, { font: F.d(260), color: C.brand, glow: 40 });
    slam("PAÍSES", 300, 600, t, 10.05, { font: F.m(34), color: C.ink, ls: 10 });
    slam(String(c2).padStart(2, "0"), 780, 520, t, 10.5, { font: F.d(260), color: C.brand, glow: 40 });
    slam("CONTINENTES", 780, 600, t, 10.55, { font: F.m(34), color: C.ink, ls: 10 });
    slam("DE SÃO PAULO", W / 2, 1540, t, 11.5, { font: F.d(150), glitch: true });
    slam("PARA O MUNDO.", W / 2, 1680, t, 11.5, { font: F.d(150), color: C.brand, glow: 40, glitch: true });
    ctx.restore();
  }
}
