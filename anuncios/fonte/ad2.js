// Anúncio 2 — "TRÊS FRENTES. UM SÓ TIME." (18 s, 120 bpm)
window.DURATION = 18;
const SHOTS = [["gv-drill.jpg", "gvdrill.com.br"], ["emite-engenharia.jpg", "emiteengenharia.com.br"], ["vertis-elevadores.jpg", "vertiselevadores.com.br"]];
const HITS = [0.3, 0.8, 1.3, 2.5, 6.5, 10.5, 14.0, 14.5];
window.setup = () => loadImages([...SHOTS.map((s) => s[0]), "logo-downway.png"]);

cue(0, "pad", { until: 2.5 });
cue(0.3, "impact"); cue(0.8, "impact"); cue(1.3, "impact", { big: true });
cue(2.2, "whoosh"); cue(2.5, "drop");
cue(2.6, "impact"); cue(6.5, "impact"); cue(10.5, "impact");
for (let i = 0; i < 16; i++) cue(7.1 + i * 0.125, "blip");
cue(9.2, "impact");
for (let i = 0; i < 3; i++) cue(11.0 + i * 0.5, "swoosh");
cue(6.2, "whoosh"); cue(10.2, "whoosh"); cue(13.7, "whoosh");
cue(14.0, "impact"); cue(14.5, "impact", { big: true });
cue(14.6, "riser", { dur: 0.9 });
cue(15.5, "end");

window.render = (t) => {
  const [sx, sy] = shake(t, HITS, 16);
  ctx.save(); ctx.translate(sx, sy);
  background(t, { gridAlpha: t < 2.5 ? 0.12 * E.outExpo(seg(t, 0, 0.8)) : 0.07, speed: t < 2.5 ? 6 : 30 });
  if (t < 2.55) sceneOpen(t);
  else if (t < 6.5) pillar(t, 2.5, "01", "ENGENHARIA E", "PROTOTIPAGEM", "CAD · CNC/CAM · IMPRESSÃO 3D", drawGear);
  else if (t < 10.5) pillar(t, 6.5, "02", "SISTEMAS E", "AUTOMAÇÃO", "PLANILHAS · ORÇAMENTOS · IA APLICADA", drawSheet);
  else if (t < 14.0) pillar(t, 10.5, "03", "PRESENÇA", "DIGITAL INDUSTRIAL", "SITES · SEO · GOOGLE MEU NEGÓCIO", drawSites);
  else if (t < 15.5) sceneTeam(t);
  ctx.restore();
  endCard(t, 15.5);
  hud(t, "DOWNWAY", t < 2.5 ? "ENGENHARIA DIGITAL" : t < 14 ? `PILAR ${t < 6.5 ? "01" : t < 10.5 ? "02" : "03"} / 03` : "UM SÓ TIME", 1 - seg(t, 15.5, 15.8));
  wipe(t, 2.2, 0.5); wipe(t, 6.2, 0.5); wipe(t, 10.2, 0.5); wipe(t, 13.7, 0.5); wipe(t, 15.25, 0.5);
  flash(t, [0.3, 0.8, 1.3, 14.0, 14.5], 0.3);
  flash(t, [15.5], 0.8, "34,130,240");
  vignette(); grain(t);
  sliceGlitch(t, t >= 1.3 ? Math.exp(-(t - 1.3) * 7) : 0);
};

function sceneOpen(t) {
  // linhas de cota se desenhando
  ctx.save(); ctx.strokeStyle = "rgba(90,162,245,0.5)"; ctx.lineWidth = 2;
  const p = E.outExpo(seg(t, 0, 1.2));
  ctx.beginPath(); ctx.moveTo(80, 560); ctx.lineTo(80 + (W - 160) * p, 560); ctx.moveTo(W - 80, 1360); ctx.lineTo(W - 80 - (W - 160) * p, 1360); ctx.stroke();
  txt("ESC 1:1 · REV.03 · DOWNWAY", 80, 530, { font: F.m(22), color: C.muted, align: "left", ls: 5, alpha: p });
  ctx.restore();
  const o = { out: 2.3 };
  slam("TECNOLOGIA QUE", W / 2, 760, t, 0.3, { font: F.d(150), ...o });
  slam("RESPEITA O", W / 2, 940, t, 0.8, { font: F.d(150), ...o });
  slam("CHÃO DE", W / 2, 1130, t, 1.3, { font: F.d(200), color: C.brand, glow: 40, glitch: true, ...o });
  slam("FÁBRICA.", W / 2, 1310, t, 1.3, { font: F.d(200), color: C.brand, glow: 40, glitch: true, ...o });
}

function pillar(t, t0, n, a, b, chips, draw) {
  const k = t - t0, out = seg(t, t0 + 3.75, t0 + 4.0);
  ctx.save(); ctx.globalAlpha = 1 - out;
  // número gigante vazado
  ctx.save(); ctx.globalAlpha *= 0.14 * E.outExpo(seg(k, 0, 0.5)); ctx.strokeStyle = C.soft; ctx.lineWidth = 3;
  ctx.font = F.d(760); ctx.textAlign = "right"; ctx.strokeText(n, W + 40 - k * 30, 1000); ctx.restore();
  txt(`PILAR ${n}`, 100, 380, { font: F.m(28), color: C.soft, align: "left", ls: 10, alpha: seg(k, 0.05, 0.3) });
  ctx.fillStyle = C.brand; ctx.fillRect(100, 400, 120 * E.outExpo(seg(k, 0.05, 0.5)), 4);
  slam(a, 100, 520, t, t0 + 0.1, { font: F.d(130), align: "left", from: 1.6 });
  slam(b, 100, 650, t, t0 + 0.25, { font: F.d(130), align: "left", color: C.brand, glow: 30, from: 1.6 });
  draw(t, k);
  chips.split(" · ").forEach((c, i) => {
    const cp = E.outBack(seg(k, 0.9 + i * 0.15, 1.2 + i * 0.15));
    if (cp <= 0) return;
    ctx.save(); ctx.translate(W / 2, 1560 + i * 0); ctx.restore();
    chip(c, 100 + [0, 1, 2].slice(0, i).reduce((s, j) => s + chipW(chips.split(" · ")[j]) + 18, 0), 1590, cp, { align: "left" });
  });
  ctx.restore();
}
const chipW = (s) => measure(s, F.m(24), 4) + 44;

// Pilar 01: engrenagem em CAD girando e sendo "impressa" camada a camada
function drawGear(t, k) {
  const cx = W / 2, cy = 1060, teeth = 12, R1 = 260, R2 = 310, Rh = 90, depth = 70;
  const rot = k * 0.7, tilt = 0.55 + Math.sin(k * 0.8) * 0.1;
  const pts = [];
  for (let i = 0; i < teeth * 4; i++) {
    const ang = (i / (teeth * 4)) * Math.PI * 2 + rot;
    const r = i % 4 === 0 || i % 4 === 1 ? R2 : R1;
    pts.push([Math.cos(ang) * r, Math.sin(ang) * r]);
  }
  const P = (x, y, z) => [cx + x, cy + y * Math.cos(tilt) + z * Math.sin(tilt) * 1.2];
  const draw = (z, fill) => {
    ctx.beginPath(); pts.forEach(([x, y], i) => { const [px, py] = P(x, y, z); i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }); ctx.closePath();
    if (fill) ctx.fill(); else ctx.stroke();
  };
  const dp = E.outExpo(seg(k, 0.2, 1.0));
  ctx.save(); ctx.globalAlpha *= dp;
  ctx.strokeStyle = "rgba(90,162,245,0.9)"; ctx.lineWidth = 2.5; ctx.shadowColor = C.brand; ctx.shadowBlur = 12;
  draw(depth, false); draw(-depth, false);
  ctx.beginPath(); pts.forEach(([x, y], i) => { if (i % 2) return; const a = P(x, y, depth), b = P(x, y, -depth); ctx.moveTo(...a); ctx.lineTo(...b); }); ctx.stroke();
  for (const z of [depth, -depth]) { ctx.beginPath(); for (let i = 0; i <= 48; i++) { const ang = (i / 48) * 7; const [px, py] = P(Math.cos(ang) * Rh, Math.sin(ang) * Rh, z); i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); } ctx.stroke(); }
  ctx.shadowBlur = 0;
  // impressão 3D: camadas sólidas subindo
  const lp = seg(k, 1.6, 3.4);
  if (lp > 0) {
    const top = lerp(cy + 400, cy - 400, lp);
    ctx.save(); ctx.beginPath(); ctx.rect(0, top, W, 900); ctx.clip();
    const gr = ctx.createLinearGradient(0, cy - 350, 0, cy + 350); gr.addColorStop(0, C.soft); gr.addColorStop(1, C.deep);
    ctx.fillStyle = gr; ctx.globalAlpha *= 0.85; draw(depth, true);
    ctx.globalAlpha = 1;
    ctx.strokeStyle = "rgba(12,12,13,0.45)"; ctx.lineWidth = 2;
    for (let y = top; y < cy + 420; y += 9) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
    ctx.restore();
    // bico da impressora
    ctx.fillStyle = C.ink; ctx.shadowColor = C.soft; ctx.shadowBlur = 30;
    const nx = cx + Math.sin(k * 14) * 280;
    ctx.fillRect(nx - 30, top - 60, 60, 40); ctx.beginPath(); ctx.moveTo(nx - 14, top - 20); ctx.lineTo(nx + 14, top - 20); ctx.lineTo(nx, top - 2); ctx.fill();
    ctx.shadowBlur = 0;
  }
  ctx.restore();
  // cotas
  const cp = seg(k, 0.6, 1.0);
  ctx.save(); ctx.globalAlpha *= cp; ctx.strokeStyle = C.muted; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(cx - R2, cy + 420); ctx.lineTo(cx + R2, cy + 420); ctx.moveTo(cx - R2, cy + 405); ctx.lineTo(cx - R2, cy + 435); ctx.moveTo(cx + R2, cy + 405); ctx.lineTo(cx + R2, cy + 435); ctx.stroke();
  txt("Ø 620.00 mm", cx, cy + 400, { font: F.m(24), color: C.ink, ls: 3 });
  txt(`Z = ${(seg(k, 1.6, 3.4) * 140).toFixed(2)}`, W - 100, 1380, { font: F.m(24), color: C.soft, align: "right", ls: 3 });
  ctx.restore();
}

// Pilar 02: planilha se preenchendo sozinha e virando orçamento
function drawSheet(t, k) {
  const x0 = 100, y0 = 780, cols = 5, rows = 10, cw = (W - 200) / cols, rh = 52;
  const ap = E.outExpo(seg(k, 0.15, 0.6));
  const fly = E.inOutExpo(seg(k, 2.6, 3.1));
  ctx.save(); ctx.globalAlpha *= ap;
  const heads = ["ITEM", "QTD", "UN", "VALOR", "TOTAL"];
  heads.forEach((h, c) => { ctx.fillStyle = "rgba(34,130,240,0.25)"; ctx.fillRect(x0 + c * cw + 1, y0, cw - 2, rh - 2); txt(h, x0 + c * cw + 16, y0 + 34, { font: F.m(22), color: C.soft, align: "left", ls: 3 }); });
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
    const id = r * cols + c;
    const fillT = 0.6 + (r + c * 0.35) * 0.13;
    const on = k > fillT;
    const tx = x0 + c * cw, ty = y0 + (r + 1) * rh;
    // voo das células para o documento
    const dx = lerp(tx, W / 2 - 160 + (c * 64), fly), dy = lerp(ty, 1080 + r * 18, fly);
    const s = lerp(1, 0.25, fly);
    ctx.save(); ctx.translate(dx, dy); ctx.scale(s, 1 - fly * 0.6);
    ctx.fillStyle = on ? (r % 2 ? "rgba(34,130,240,0.10)" : "rgba(34,130,240,0.16)") : "rgba(255,255,255,0.03)";
    ctx.fillRect(1, 1, cw - 2, rh - 2);
    if (on && fly < 0.6) {
      const v = c === 0 ? `PÇ-${String(100 + Math.floor(rnd(id) * 900))}` : c === 1 ? String(1 + Math.floor(rnd(id + 3) * 48)) : c === 2 ? ["UN", "KG", "M", "CX"][Math.floor(rnd(id) * 4)] : (rnd(id + 7) * 900 + 40).toFixed(2).replace(".", ",");
      const flashOn = k - fillT < 0.12;
      txt(v, 16, 35, { font: F.m(22), color: flashOn ? "#fff" : C.ink, align: "left", alpha: 1 - fly * 1.6 });
      if (flashOn) { ctx.strokeStyle = C.brand; ctx.lineWidth = 3; ctx.strokeRect(1, 1, cw - 2, rh - 2); }
    }
    ctx.restore();
  }
  // linha de leitura (IA passando)
  if (k > 0.6 && k < 2.6) { const sy = y0 + rh + ((k - 0.6) / 2.0) * rows * rh; ctx.fillStyle = "rgba(90,162,245,0.35)"; ctx.fillRect(x0, sy, W - 200, 4); ctx.shadowColor = C.brand; ctx.shadowBlur = 20; ctx.fillRect(x0, sy, W - 200, 2); ctx.shadowBlur = 0; }
  ctx.restore();
  // documento final
  const dp = E.outBack(seg(k, 2.7, 3.2));
  if (dp > 0) {
    ctx.save(); ctx.translate(W / 2, 1100); ctx.scale(dp, dp);
    ctx.shadowColor = C.brand; ctx.shadowBlur = 50; rrect(-230, -260, 460, 520, 18); ctx.fillStyle = "#eef2f7"; ctx.fill(); ctx.shadowBlur = 0;
    ctx.fillStyle = C.brand; ctx.fillRect(-230, -260, 460, 70);
    txt("ORÇAMENTO", 0, -210, { font: F.d(56), color: "#fff", ls: 4 });
    for (let i = 0; i < 7; i++) { ctx.fillStyle = "#c9d2de"; ctx.fillRect(-180, -140 + i * 44, 360 * (0.5 + rnd(i) * 0.5), 14); }
    ctx.fillStyle = "#0c0c0d"; ctx.fillRect(-180, 200, 360, 3);
    txt("PDF · GERADO AUTOMATICAMENTE", 0, 238, { font: F.m(18), color: "#0b2a52", ls: 2 });
    ctx.restore();
  }
}

// Pilar 03: sites reais em leque 3D
function drawSites(t, k) {
  SHOTS.forEach(([img, url], i) => {
    const p = E.outExpo(seg(k, 0.15 + i * 0.5, 0.75 + i * 0.5));
    if (p <= 0) return;
    const spread = E.inOutCubic(seg(k, 1.8, 2.6));
    const w = 820, h = 58 + Math.round((w - 4) * 726 / 1568);
    const baseY = 760 + i * 130 - spread * (i - 1) * 30;
    const x = W / 2 - w / 2 + (1 - p) * W * (i % 2 ? -1 : 1) + spread * (i - 1) * 60;
    ctx.save();
    ctx.translate(x + w / 2, baseY + h / 2);
    ctx.rotate((i - 1) * 0.06 * (1 - spread * 0.5) + (1 - p) * 0.3 * (i % 2 ? -1 : 1));
    ctx.transform(1, 0, -0.12 * (1 - spread), 1, 0, 0);
    browser(-w / 2, -h / 2, w, h, IMG[img], { url, scroll: clamp(k / 3) * 0.2, glow: 40 });
    ctx.restore();
  });
  // ponteiro do Google
  const gp = E.outBack(seg(k, 2.4, 2.7));
  if (gp > 0) {
    ctx.save(); ctx.translate(W - 260, 1440); ctx.scale(gp, gp);
    rrect(-210, -45, 420, 90, 45); ctx.fillStyle = C.brand; ctx.shadowColor = C.brand; ctx.shadowBlur = 40; ctx.fill(); ctx.shadowBlur = 0;
    txt("PRONTO PRO GOOGLE", 0, 18, { font: F.d(52), color: "#0b0d11", ls: 2 });
    ctx.restore();
  }
}

function sceneTeam(t) {
  slam("TRÊS FRENTES.", W / 2, 860, t, 14.0, { font: F.d(190), out: 15.3 });
  slam("UM SÓ TIME.", W / 2, 1070, t, 14.5, { font: F.d(210), color: C.brand, glow: 50, glitch: true, out: 15.3 });
  [["ENGENHARIA", 0], ["AUTOMAÇÃO", 1], ["SITES", 2]].forEach(([s, i]) => {
    const p = E.outExpo(seg(t, 14.6 + i * 0.12, 14.9 + i * 0.12)) * (1 - seg(t, 15.3, 15.5));
    txt(s, W / 2 + (i - 1) * 300, 1260, { font: F.m(28), color: C.soft, ls: 6, alpha: p });
  });
}
