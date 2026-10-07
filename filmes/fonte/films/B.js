// FILME B — SUA FÁBRICA MERECE TECNOLOGIA MELHOR (38,5 s · 24 fps · 9:16)
// Conceito "a mesma peça através das gerações". Peça-herói: bucha flangeada SAE 1045 — Ø32 h6 × 40, furo Ø20 H7 (Ra 0,8), flange Ø48 × 8.
// Torno convencional (3D) → match-cut CNC (3D) → CAD (3D) → orçamento automatizado (2D) → IA lendo o desenho (2D) → site (2D) → desempeno de granito (3D) → assinatura.
export const DURATION = 38.5;
export const IMAGES = ["gv-drill.jpg", "mt-engenharia.jpg", "vertis-elevadores.jpg"];

const T = { lathe: 0, cnc: 6.5, cad: 10.5, quote: 14, ai: 18.5, web: 23.5, close: 27.5, sig: 34.5 };
const COPY = {
  pt: {
    l1: "01 · TORNO CONVENCIONAL", l2: "02 · TORNO CNC", l3: "03 · CAD", l4: "04 · AUTOMAÇÃO", l5: "05 · IA NO PROCESSO", l6: "06 · SITE INDUSTRIAL",
    hook: ["ISSO CONSTRUIU", "A SUA FÁBRICA."], c1: "Com medida. Com ofício.",
    t2: ["AGORA, NO CNC."], c2: "Tecnologia não vem substituir esse cuidado.",
    c3: "Ela parte dele.", t3: ["O OFÍCIO VIRA", "DESENHO TÉCNICO."],
    t4: ["ORÇAMENTO COM PADRÃO,", "NÃO DE MEMÓRIA."], t5: ["IA LÊ O DESENHO.", "VOCÊ DECIDE."], t6: ["ENCONTRADA", "POR QUEM COMPRA."],
    c6: "Sua fábrica aparece onde o comprador procura.", t7: ["TECNOLOGIA QUE RESPEITA", "O CHÃO DE FÁBRICA."],
    cta: "AGENDE UM DIAGNÓSTICO", dec: ",", wa: "WhatsApp (11) 94015-9202",
    mic: "MICRÔMETRO 25–50", hand: "À MÃO", cncTag: "CNC",
    q: { head: "Novo orçamento · RFQ-0417", tpl: "Modelo: padrão da fábrica", file: "cliente-A_2231-B.pdf", btn: "Gerar PDF", ready: "PDF pronto", doc: "ORÇAMENTO", review: "Para revisão do responsável",
      rows: [["Cliente", "Cliente A"], ["Peça", "Bucha flangeada · 2231-B"], ["Material", "SAE 1045 · barra Ø50"], ["Operações", "Torneamento CNC · furação · acabamento"], ["Tempos", "padrão da fábrica · T-03"], ["Lote", "500 pç"]] },
    a: { head: "Leitura do desenho", src: "Desenho do cliente", rows: [["Material", "SAE 1045"], ["Ø externo", "Ø32 h6 · 31,984–32,000"], ["Furo", "Ø20 H7 · Ra 0,8"], ["Comprimento", "40"], ["Quantidade", "500 pç"]],
      alert: "H7: confirmar processo de acabamento do furo", draft: "RASCUNHO · REVISÃO OBRIGATÓRIA", btn: "Aprovar", done: "Aprovado" },
    d: { title: "BUCHA FLANGEADA", mat: "MATERIAL: SAE 1045", qty: "QTD: 500 pç", no: "DES. 2231-B · REV A", note: "QUEBRAR CANTOS VIVOS 0,2" },
    search: "usinagem sob encomenda SAE 1045",
  },
  en: {
    l1: "01 · MANUAL LATHE", l2: "02 · CNC LATHE", l3: "03 · CAD", l4: "04 · AUTOMATION", l5: "05 · AI IN THE PROCESS", l6: "06 · INDUSTRIAL WEBSITE",
    hook: ["THIS BUILT", "YOUR FACTORY."], c1: "With measure. With craft.",
    t2: ["NOW ON CNC."], c2: "Technology isn't here to replace that care.",
    c3: "It's built on it.", t3: ["CRAFT BECOMES THE", "TECHNICAL DRAWING."],
    t4: ["QUOTES FROM A STANDARD,", "NOT MEMORY."], t5: ["AI READS THE DRAWING.", "YOU DECIDE."], t6: ["FOUND BY THE", "PEOPLE WHO BUY."],
    c6: "Your factory shows up where buyers look.", t7: ["TECHNOLOGY THAT RESPECTS", "THE SHOP FLOOR."],
    cta: "BOOK AN ASSESSMENT", dec: ".", wa: "",
    mic: "MICROMETER 25–50", hand: "BY HAND", cncTag: "CNC",
    q: { head: "New quote · RFQ-0417", tpl: "Template: shop standard", file: "customer-A_2231-B.pdf", btn: "Generate PDF", ready: "PDF ready", doc: "QUOTATION", review: "For owner review",
      rows: [["Customer", "Customer A"], ["Part", "Flanged bushing · 2231-B"], ["Material", "SAE 1045 · Ø50 bar"], ["Operations", "CNC turning · drilling · finishing"], ["Times", "shop standard · T-03"], ["Lot", "500 pcs"]] },
    a: { head: "Drawing read", src: "Customer drawing", rows: [["Material", "SAE 1045"], ["Outer Ø", "Ø32 h6 · 31.984–32.000"], ["Bore", "Ø20 H7 · Ra 0.8"], ["Length", "40"], ["Quantity", "500 pcs"]],
      alert: "H7: confirm bore finishing process", draft: "DRAFT · REVIEW REQUIRED", btn: "Approve", done: "Approved" },
    d: { title: "FLANGED BUSHING", mat: "MATERIAL: SAE 1045", qty: "QTY: 500 pcs", no: "DWG 2231-B · REV A", note: "BREAK SHARP EDGES 0.2" },
    search: "custom machining SAE 1045 supplier",
  },
  es: {
    l1: "01 · TORNO CONVENCIONAL", l2: "02 · TORNO CNC", l3: "03 · CAD", l4: "04 · AUTOMATIZACIÓN", l5: "05 · IA EN EL PROCESO", l6: "06 · SITIO INDUSTRIAL",
    hook: ["ESTO CONSTRUYÓ", "TU FÁBRICA."], c1: "Con medida. Con oficio.",
    t2: ["AHORA, EN CNC."], c2: "La tecnología no reemplaza ese cuidado.",
    c3: "Parte de él.", t3: ["EL OFICIO SE VUELVE", "PLANO TÉCNICO."],
    t4: ["COTIZACIÓN CON ESTÁNDAR,", "NO DE MEMORIA."], t5: ["LA IA LEE EL PLANO.", "TÚ DECIDES."], t6: ["ENCONTRADA", "POR QUIEN COMPRA."],
    c6: "Tu fábrica aparece donde el comprador busca.", t7: ["TECNOLOGÍA QUE RESPETA", "LA PLANTA."],
    cta: "AGENDA UN DIAGNÓSTICO", dec: ",", wa: "",
    mic: "MICRÓMETRO 25–50", hand: "A MANO", cncTag: "CNC",
    q: { head: "Nueva cotización · RFQ-0417", tpl: "Plantilla: estándar de planta", file: "cliente-A_2231-B.pdf", btn: "Generar PDF", ready: "PDF listo", doc: "COTIZACIÓN", review: "Para revisión del responsable",
      rows: [["Cliente", "Cliente A"], ["Pieza", "Buje con brida · 2231-B"], ["Material", "SAE 1045 · barra Ø50"], ["Operaciones", "Torneado CNC · taladrado · acabado"], ["Tiempos", "estándar de planta · T-03"], ["Lote", "500 pzs"]] },
    a: { head: "Lectura del plano", src: "Plano del cliente", rows: [["Material", "SAE 1045"], ["Ø exterior", "Ø32 h6 · 31,984–32,000"], ["Agujero", "Ø20 H7 · Ra 0,8"], ["Longitud", "40"], ["Cantidad", "500 pzs"]],
      alert: "H7: confirmar acabado del agujero", draft: "BORRADOR · REVISIÓN OBLIGATORIA", btn: "Aprobar", done: "Aprobado" },
    d: { title: "BUJE CON BRIDA", mat: "MATERIAL: SAE 1045", qty: "CANT.: 500 pzs", no: "PLANO 2231-B · REV A", note: "ROMPER ARISTAS VIVAS 0,2" },
    search: "mecanizado a medida SAE 1045",
  },
};

// ---------- trilha (cues) ----------
cue(0, "click"); cue(0, "drone", { until: 14, level: 0.75 });
cue(0.1, "room", { until: 14 });
cue(0.2, "machine", { until: 6.45 });
cue(0.3, "click"); cue(1.3, "click");
cue(0.5, "chips", { until: 6.3 });
[4.75, 5.05, 5.35].forEach((t) => cue(t, "ratchet"));
cue(6.45, "freeze"); cue(6.62, "relay");
cue(6.7, "spindleUp", { dur: 0.5 }); cue(7.1, "spindle", { until: 10.4, f: 260 }); cue(7.1, "coolant", { until: 10.4 }); cue(7.2, "chips", { until: 9.8 });
cue(7.0, "pulse", { bpm: 92, until: 27.4 });
cue(10.45, "whoosh", { dur: 0.5 }); cue(10.9, "click"); [11.8, 12.05, 12.3, 12.55].forEach((t) => cue(t, "tick"));
cue(14.0, "click"); [14.9, 15.25, 15.6, 15.95, 16.3, 16.65].forEach((t) => cue(t, "tick")); cue(17.3, "click"); cue(17.6, "notif");
[19.0, 19.3, 19.6, 19.9, 20.2].forEach((t) => cue(t, "tick")); cue(20.3, "keys", { until: 21.6 }); cue(21.5, "notif"); cue(22.7, "click"); cue(22.8, "chime");
cue(23.5, "whoosh", { dur: 0.4 }); cue(23.7, "keys", { until: 24.4 }); cue(24.5, "key"); cue(25.4, "click"); cue(26.5, "click");
cue(27.5, "room", { until: 34.5 }); cue(27.5, "machine", { until: 34.5 });
cue(28.1, "metal"); cue(28.8, "metal");
cue(29.0, "resolve", { dur: 5 });
cue(34.5, "sub"); cue(34.5, "end"); cue(37.9, "click");

// ---------- 3D ----------
let K, S, THREE, sets = {}, P = {}, bokeh, keyL = {};
let chipsL, chipsC, chipDataL = [], chipDataC = [];
export let stage;

// bucha flangeada: perfil (r, y) em unidades (1 = 100 mm). y=0 face do flange.
const BUSH = [[0.105, 0], [0.235, 0], [0.24, 0.005], [0.24, 0.075], [0.235, 0.08], [0.166, 0.08], [0.16, 0.086], [0.16, 0.395], [0.155, 0.4], [0.105, 0.4], [0.1, 0.395], [0.1, 0.005], [0.105, 0]];

function latheGeo(pts, segs = 96) {
  const geos = [];
  for (let i = 0; i < pts.length - 1; i++) geos.push(new THREE.LatheGeometry([new THREE.Vector2(...pts[i]), new THREE.Vector2(...pts[i + 1])], segs));
  return K.mergeGeometries(geos);
}
function canvasTex(w, h, fn, srgb = true) {
  const c = document.createElement("canvas"); c.width = w; c.height = h; fn(c.getContext("2d"), w, h);
  const t = new THREE.CanvasTexture(c); if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}
// pintura antiga desgastada: manchas, respingos de óleo, riscos
function wornTex(base, seed) {
  return canvasTex(512, 512, (g, w, h) => {
    g.fillStyle = base; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 70; i++) { const x = rnd(i * 3.1 + seed) * w, y = rnd(i * 5.7 + seed) * h, r = 20 + rnd(i * 1.9 + seed) * 90; const gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, `rgba(0,0,0,${0.08 + rnd(i + seed) * 0.16})`); gr.addColorStop(1, "rgba(0,0,0,0)"); g.fillStyle = gr; g.fillRect(x - r, y - r, 2 * r, 2 * r); }
    for (let i = 0; i < 40; i++) { const x = rnd(i * 7.3 + seed) * w, y = rnd(i * 2.3 + seed) * h, r = 6 + rnd(i * 4.1 + seed) * 26; const gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, `rgba(255,255,240,${0.04 + rnd(i * 9 + seed) * 0.06})`); gr.addColorStop(1, "rgba(255,255,240,0)"); g.fillStyle = gr; g.fillRect(x - r, y - r, 2 * r, 2 * r); }
    for (let i = 0; i < 140; i++) { g.strokeStyle = `rgba(200,200,190,${0.05 + rnd(i * 2.9 + seed) * 0.12})`; g.lineWidth = 0.6 + rnd(i * 6 + seed); const x = rnd(i * 8.1 + seed) * w, y = rnd(i * 3.7 + seed) * h, a = rnd(i * 1.1 + seed) * 6.28, l = 4 + rnd(i * 5.5 + seed) * 30; g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); g.stroke(); }
  });
}
function smudgeRough(seed) {
  return canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = "#8a8a8a"; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 60; i++) { const x = rnd(i * 4.3 + seed) * w, y = rnd(i * 6.1 + seed) * h, r = 10 + rnd(i * 2.2 + seed) * 50; const v = rnd(i * 7 + seed) < 0.6 ? 40 : 170; const gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, `rgba(${v},${v},${v},0.7)`); gr.addColorStop(1, `rgba(${v},${v},${v},0)`); g.fillStyle = gr; g.fillRect(x - r, y - r, 2 * r, 2 * r); }
  }, false);
}
function feedTex(period, seed, amp = 0.5) {
  const t = canvasTex(64, 512, (g, w, h) => {
    g.fillStyle = "#808080"; g.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += period) { const v = 128 + (rnd(y * 1.3 + seed) - 0.5) * 60 * amp; g.fillStyle = `rgba(${v + 50},${v + 50},${v + 50},${amp})`; g.fillRect(0, y, w, period * 0.45); g.fillStyle = `rgba(30,30,30,${amp * 0.6})`; g.fillRect(0, y + period * 0.5, w, 1); }
  }, false);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(1, 3); return t;
}
const steelMat = (o = {}) => new THREE.MeshPhysicalMaterial({ color: 0xbfc3c9, metalness: 1, roughness: 0.24, ...o });

function makeBushing(mat) { const m = new THREE.Mesh(latheGeo(BUSH, 120), mat); m.castShadow = m.receiveShadow = true; return m; }
function label3d(s, color = "#eef2f7", hU = 0.07) {
  const fs = 64, c = document.createElement("canvas"), g = c.getContext("2d"); g.font = `500 ${fs}px "Plex Mono"`;
  const tw = Math.ceil(g.measureText(s).width) + 24; c.width = tw; c.height = 96;
  g.font = `500 ${fs}px "Plex Mono"`; g.fillStyle = color; g.textBaseline = "middle"; g.fillText(s, 12, 50);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  const m = new THREE.Mesh(new THREE.PlaneGeometry(hU * tw / 96, hU), new THREE.MeshBasicMaterial({ map: t, transparent: true, depthTest: false, depthWrite: false, toneMapped: false }));
  m.renderOrder = 20; return m;
}
// cavaco: espiral curta
function helixGeo(turns, r, len, tube) {
  const C = class extends THREE.Curve { getPoint(u, tg = new THREE.Vector3()) { const a = u * Math.PI * 2 * turns, rr = r * (1 - u * 0.35); return tg.set(Math.cos(a) * rr, u * len, Math.sin(a) * rr); } };
  return new THREE.TubeGeometry(new C(), Math.round(turns * 18), tube, 5, false);
}

// ---- torno convencional (montado em coordenadas de mundo: eixo árvore = X, y=0 centro, frente = +Z)
function buildLathe(kit) {
  const { MAT } = kit;
  const g = new THREE.Group();
  const green = MAT.paint(0xffffff, { map: wornTex("#56695a", 1), roughness: 0.5, roughnessMap: smudgeRough(2), clearcoat: 0.55, clearcoatRoughness: 0.22, metalness: 0.15 });
  const green2 = MAT.paint(0xffffff, { map: wornTex("#4a5b4f", 7), roughness: 0.5, roughnessMap: smudgeRough(5), clearcoat: 0.6, clearcoatRoughness: 0.2, metalness: 0.15 });
  const grey = MAT.paint(0xffffff, { map: wornTex("#3d4245", 11), roughness: 0.55, roughnessMap: smudgeRough(9), clearcoat: 0.5, clearcoatRoughness: 0.25, metalness: 0.2 });
  const ways = MAT.steel({ roughness: 0.16, color: 0xc4c8cd });
  const rb = (w, h, d, r, mat, x, y, z) => { const m = new THREE.Mesh(new P.RBox(w, h, d, 3, r), mat); m.position.set(x, y, z); m.castShadow = m.receiveShadow = true; g.add(m); return m; };
  // cabeçote
  rb(1.85, 1.8, 1.5, 0.09, green, -1.42, -0.05, -0.05);
  rb(1.95, 0.1, 1.6, 0.03, green2, -1.42, 0.86, -0.05);
  // placa de velocidades
  const plate = canvasTex(512, 320, (c, w, h) => {
    c.fillStyle = "#b9b4a4"; c.fillRect(0, 0, w, h); c.strokeStyle = "#2a2a28"; c.lineWidth = 3; c.strokeRect(8, 8, w - 16, h - 16);
    c.fillStyle = "#2a2a28"; c.font = "600 26px Inter"; c.fillText("RPM", 26, 50);
    const v = [[45, 70, 110, 180], [280, 450, 710, 1120]]; c.font = "500 30px 'Plex Mono'";
    v.forEach((row, j) => row.forEach((n, i) => { c.strokeRect(26 + i * 118, 76 + j * 104, 104, 80); c.fillText(String(n), 40 + i * 118, 126 + j * 104); }));
    for (let i = 0; i < 400; i++) { c.fillStyle = `rgba(60,50,30,${rnd(i) * 0.08})`; c.beginPath(); c.arc(rnd(i * 3) * w, rnd(i * 7) * h, rnd(i * 5) * 18, 0, 7); c.fill(); }
  });
  const pl = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 0.39), new THREE.MeshPhysicalMaterial({ map: plate, metalness: 0.4, roughness: 0.45, clearcoat: 0.4 })); pl.position.set(-1.6, 0.42, 0.706); g.add(pl);
  // alavancas de câmbio
  const knob = MAT.paint(0x0d0d0e, { roughness: 0.25, clearcoat: 1 });
  for (const [x, a] of [[-1.0, 0.5], [-1.7, -0.4], [-0.75, -0.2]]) {
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.06, 32), MAT.chrome({ roughness: 0.3 })); hub.rotation.x = Math.PI / 2; hub.position.set(x, -0.35, 0.73); g.add(hub);
    const arm = new THREE.Group(); arm.position.set(x, -0.35, 0.76); arm.rotation.z = a;
    const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.34, 16), MAT.chrome({ roughness: 0.25 })); rod.position.y = 0.17; arm.add(rod);
    const ball = new THREE.Mesh(new THREE.SphereGeometry(0.055, 24, 16), knob); ball.position.y = 0.36; arm.add(ball); arm.traverse((o) => (o.castShadow = true)); g.add(arm);
  }
  // nariz do eixo-árvore
  const nose = new THREE.Mesh(new THREE.CylinderGeometry(0.44, 0.47, 0.14, 64), MAT.darkSteel({ color: 0x45484d, metalness: 1, roughness: 0.4 })); nose.rotation.z = Math.PI / 2; nose.position.x = -0.45; g.add(nose);
  // barramento + guias
  rb(5.4, 0.34, 1.0, 0.04, green, 0.25, -1.12, -0.05);
  for (const z of [-0.35, 0.3]) { const w = new THREE.Mesh(new THREE.BoxGeometry(5.3, 0.05, 0.13), ways); w.position.set(0.25, -0.925, z); w.receiveShadow = true; g.add(w); }
  // pés/armários e bandeja de cavaco
  rb(1.1, 1.3, 1.0, 0.05, green2, -1.5, -1.95, -0.05);
  rb(0.9, 1.3, 1.0, 0.05, green2, 2.3, -1.95, -0.05);
  const pan = new THREE.Mesh(new THREE.BoxGeometry(5.6, 0.06, 1.5), MAT.darkSteel({ color: 0x2a2b2d, roughness: 0.35 })); pan.position.set(0.25, -1.33, 0.05); pan.receiveShadow = true; g.add(pan);
  // proteção traseira
  const guard = new THREE.Mesh(new THREE.BoxGeometry(3.4, 1.8, 0.03), grey); guard.position.set(1.1, -0.05, -0.85); guard.receiveShadow = true; g.add(guard);
  // contra-ponta (ao fundo à direita)
  rb(0.7, 0.75, 0.75, 0.06, green, 2.35, -0.55, -0.05);
  const tq = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.6, 32), MAT.steel({ roughness: 0.2 })); tq.rotation.z = Math.PI / 2; tq.position.set(1.85, -0.03, -0.05); g.add(tq);
  const twheel = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.025, 12, 48), MAT.chrome({ roughness: 0.3 })); twheel.rotation.y = Math.PI / 2; twheel.position.set(2.8, -0.35, -0.05); g.add(twheel);

  // ---- placa de 3 castanhas + peça (giram)
  const spin = new THREE.Group(); g.add(spin);
  const chuckM = MAT.steel({ color: 0x9a9ea4, roughness: 0.42 }), faceM = MAT.darkSteel({ color: 0x55585d, metalness: 1, roughness: 0.38 });
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 0.3, 96), chuckM); body.rotation.z = Math.PI / 2; body.position.x = -0.18; body.castShadow = true; spin.add(body);
  const face = new THREE.Mesh(new THREE.CylinderGeometry(0.59, 0.62, 0.04, 96), faceM); face.rotation.z = Math.PI / 2; face.position.x = -0.02; spin.add(face);
  const jawM = MAT.steel({ roughness: 0.3, color: 0xb4b8be });
  for (let k = 0; k < 3; k++) {
    const a = (k * Math.PI * 2) / 3, jg = new THREE.Group(); jg.rotation.x = a;
    const slot = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.4, 0.16), MAT.rubber()); slot.position.set(0.001, 0.4, 0); jg.add(slot);
    const j1 = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.2, 0.13), jawM); j1.position.set(0.085, 0.36, 0); jg.add(j1);
    const j2 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.14, 0.13), jawM); j2.position.set(0.05, 0.53, 0); jg.add(j2);
    for (let s = 0; s < 4; s++) { const r = new THREE.Mesh(new THREE.BoxGeometry(0.172, 0.006, 0.132), MAT.darkSteel()); r.position.set(0.085, 0.27 + s * 0.012, 0); jg.add(r); }
    const key = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.045, 0.045), MAT.rubber()); key.position.set(0.001, 0.47, 0); key.rotation.x = a + Math.PI / 3; const kg = new THREE.Group(); kg.rotation.x = Math.PI / 3; kg.add(key); jg.add(kg);
    jg.traverse((o) => { if (o.isMesh) o.castShadow = true; }); spin.add(jg);
  }
  // barra (bruto) + peça + sobremetal
  const work = new THREE.Group(); work.rotation.z = -Math.PI / 2; work.position.x = 0.15; spin.add(work);
  const scale = MAT.darkSteel({ color: 0x5c5f64, roughness: 0.6, metalness: 0.85 });
  const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.32, 96), scale); bar.position.y = -0.16; bar.castShadow = true; work.add(bar);
  P.lPart = makeBushing(steelMat({ roughness: 0.22, bumpMap: feedTex(6, 1, 0.6), bumpScale: 0.35 })); work.add(P.lPart);
  P.lStock = new THREE.Mesh(latheGeo([[0.25, 0], [0.25, 1], [0.16, 1]], 96), scale); P.lStock.position.y = 0.08; work.add(P.lStock);
  P.lSpin = spin;

  // ---- carro (move em X com o avanço)
  const car = new THREE.Group(); g.add(car); P.lCar = car;
  const crb = (w, h, d, r, mat, x, y, z) => { const m = new THREE.Mesh(new P.RBox(w, h, d, 3, r), mat); m.position.set(x, y, z); m.castShadow = m.receiveShadow = true; car.add(m); return m; };
  crb(0.75, 0.46, 1.6, 0.04, green, 0.0, -0.7, 0.2);          // sela
  crb(1.2, 0.76, 0.18, 0.04, green2, -0.1, -1.15, 0.62);      // avental
  crb(0.52, 0.14, 1.3, 0.025, grey, 0.0, -0.4, 0.3);          // carro transversal
  crb(0.38, 0.12, 0.52, 0.02, grey, 0.0, -0.27, 0.55);        // espera
  const post = crb(0.28, 0.32, 0.28, 0.02, MAT.darkSteel({ color: 0x3c3f44, metalness: 1, roughness: 0.32 }), 0.05, -0.05, 0.55);
  for (const dz of [-0.07, 0.07]) { const sc = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.06), MAT.darkSteel({ metalness: 1, roughness: 0.3 })); sc.position.set(0.05, 0.14, 0.55 + dz); car.add(sc); }
  // bit de aço rápido
  const bit = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.07, 0.4), MAT.steel({ color: 0xc2c6cb, roughness: 0.2 })); bit.position.set(0, -0.035, 0.38); bit.castShadow = true; car.add(bit);
  // manivela transversal + anel graduado (o herói do gancho)
  const boss = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.11, 0.12, 48), grey); boss.rotation.x = Math.PI / 2; boss.position.set(0, -0.42, 1.0); car.add(boss);
  const sleeve = new THREE.Mesh(new THREE.CylinderGeometry(0.158, 0.158, 0.045, 96), MAT.steel({ color: 0xa6aaaf, roughness: 0.3 })); sleeve.rotation.x = Math.PI / 2; sleeve.position.set(0, -0.42, 1.075); car.add(sleeve);
  const idx = new THREE.Mesh(new THREE.BoxGeometry(0.006, 0.01, 0.046), MAT.paint(0x0a0a0a)); idx.position.set(0, -0.42 + 0.158, 1.075); car.add(idx);
  const dialTex = canvasTex(2048, 160, (c, w, h) => {
    const gr = c.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, "#9ea2a7"); gr.addColorStop(0.5, "#c9ccd0"); gr.addColorStop(1, "#8e9297"); c.fillStyle = gr; c.fillRect(0, 0, w, h);
    for (let i = 0; i < 900; i++) { c.fillStyle = `rgba(255,255,255,${rnd(i) * 0.08})`; c.fillRect(rnd(i * 3) * w, rnd(i * 5) * h, 30 + rnd(i * 7) * 160, 1); }
    c.fillStyle = "#151617"; c.textAlign = "center"; c.font = "600 44px 'Plex Mono'";
    for (let i = 0; i < 100; i++) {
      const x = (i / 100) * w, L = i % 10 === 0 ? 70 : i % 5 === 0 ? 50 : 34;
      c.fillRect(x - 2, 0, 4, L);
      if (i % 10 === 0) { c.save(); c.translate(x, 112); c.fillText(String(i), 0, 16); c.restore(); }
    }
    for (let i = 0; i < 300; i++) { c.fillStyle = `rgba(40,30,10,${rnd(i * 11) * 0.12})`; c.beginPath(); c.arc(rnd(i * 13) * w, rnd(i * 17) * h, rnd(i * 19) * 20, 0, 7); c.fill(); }
  });
  dialTex.wrapS = THREE.RepeatWrapping; dialTex.center.set(0.5, 0.5); dialTex.rotation = Math.PI;
  const dialMats = [new THREE.MeshPhysicalMaterial({ map: dialTex, metalness: 0.85, roughness: 0.28, clearcoat: 0.5, clearcoatRoughness: 0.15 }), MAT.steel({ roughness: 0.3 }), MAT.steel({ roughness: 0.3 })];
  const dial = new THREE.Group(); dial.position.set(0, -0.42, 1.155); car.add(dial); P.lDial = dial;
  const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.11, 128), dialMats); ring.rotation.x = Math.PI / 2; ring.rotation.y = Math.PI / 2; dial.add(ring);
  // volante com 3 raios e manípulo
  const wh = new THREE.Group(); wh.position.z = 0.12; dial.add(wh);
  const whM = MAT.steel({ color: 0xb0b4b9, roughness: 0.22 });
  const hubw = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 0.08, 48), whM); hubw.rotation.x = Math.PI / 2; wh.add(hubw);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.026, 16, 96), whM); rim.position.z = 0.03; wh.add(rim);
  for (let k = 0; k < 3; k++) { const sp = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.26, 0.02), whM); const a = k * 2.094; sp.position.set(Math.sin(a) * 0.17, Math.cos(a) * 0.17, 0.02); sp.rotation.z = -a; wh.add(sp); }
  const crank = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.03, 0.16, 16), knob); crank.rotation.x = Math.PI / 2; crank.position.set(0.3 * Math.sin(1), 0.3 * Math.cos(1), 0.11); wh.add(crank);
  wh.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  // volante longitudinal no avental
  const aw = new THREE.Group(); aw.position.set(-0.4, -1.12, 0.74); car.add(aw);
  const awr = new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.028, 16, 80), whM); aw.add(awr);
  for (let k = 0; k < 3; k++) { const sp = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.24, 0.02), whM); const a = k * 2.094 + 0.4; sp.position.set(Math.sin(a) * 0.13, Math.cos(a) * 0.13, 0); sp.rotation.z = -a; aw.add(sp); }
  // cavacos acumulados (estáticos) sobre a bandeja e o carro
  const pileGeo = helixGeo(2.2, 0.018, 0.05, 0.0035);
  const pile = new THREE.InstancedMesh(pileGeo, new THREE.MeshPhysicalMaterial({ color: 0xffffff, metalness: 1, roughness: 0.3 }), 160);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
  for (let i = 0; i < 160; i++) {
    const onPan = i < 120;
    const pos = onPan ? new THREE.Vector3(-0.3 + rnd(i * 3.3) * 1.6, -1.29, 0.1 + rnd(i * 5.1) * 0.6) : new THREE.Vector3(0.45 + rnd(i * 2.2) * 0.3, -0.9, 0.35 + rnd(i * 4.4) * 0.3);
    q.setFromEuler(e.set(rnd(i) * 6, rnd(i * 2) * 6, rnd(i * 3) * 6)); m4.compose(pos, q, new THREE.Vector3(1, 1, 1).multiplyScalar(0.8 + rnd(i * 7) * 0.8)); pile.setMatrixAt(i, m4);
    pile.setColorAt(i, new THREE.Color(chipColor(i)));
  }
  g.add(pile);
  // luminária da máquina (quente)
  const lamp = new THREE.Group(); lamp.position.set(-0.95, 1.3, 0.35); g.add(lamp);
  const shade = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.22, 32, 1, true), green2); shade.material = shade.material.clone(); shade.material.side = THREE.DoubleSide; lamp.add(shade);
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.06, 20, 12), MAT.emissive(0xffc27a, 3.2)); bulb.position.y = -0.06; lamp.add(bulb);
  lamp.rotation.z = 0.7; lamp.rotation.x = -0.35;
  const armL = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.9, 12), grey); armL.position.set(-1.25, 1.1, 0.2); armL.rotation.z = 1.0; g.add(armL);
  const spot = new THREE.SpotLight(0xffc890, 2.6, 6, 0.65, 0.7, 1.4); spot.position.set(-0.9, 1.25, 0.4); spot.target.position.set(0.35, -0.05, 0.1); g.add(spot, spot.target);
  return g;
}
function chipColor(i) { const r = rnd(i * 9.7); return r < 0.45 ? 0x34426a : r < 0.7 ? 0x403c5c : r < 0.85 ? 0x1d2232 : r < 0.95 ? 0x56607e : 0x8a7448; }

// ---- torno CNC enclausurado (mesmas coordenadas da peça)
function buildCNC(kit) {
  const { MAT } = kit;
  const g = new THREE.Group();
  const wallM = MAT.paint(0x8d9298, { roughness: 0.4, metalness: 0.5, clearcoat: 0.3 });
  const back = new THREE.Mesh(new THREE.PlaneGeometry(8, 5), wallM); back.position.set(0.5, 0.2, -1.1); back.receiveShadow = true; g.add(back);
  const left = new THREE.Mesh(new THREE.PlaneGeometry(4, 5), wallM); left.rotation.y = Math.PI / 2; left.position.set(-0.75, 0.2, 0.6); left.receiveShadow = true; g.add(left);
  const slope = new THREE.Mesh(new THREE.PlaneGeometry(6, 2.5), MAT.darkSteel({ color: 0x3a3d42, roughness: 0.35 })); slope.rotation.x = -Math.PI / 2 + 0.5; slope.position.set(0.5, -0.95, 0.3); slope.receiveShadow = true; g.add(slope);
  // árvore e placa hidráulica
  const housing = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 0.3, 96), MAT.paint(0x2c2f34, { metalness: 0.4 })); housing.rotation.z = Math.PI / 2; housing.position.x = -0.6; g.add(housing);
  const spin = new THREE.Group(); g.add(spin); P.cSpin = spin;
  const chM = MAT.darkSteel({ color: 0x2f3237, metalness: 0.9, roughness: 0.32 });
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.44, 0.44, 0.3, 96), chM); body.rotation.z = Math.PI / 2; body.position.x = -0.3; body.castShadow = true; spin.add(body);
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.44, 0.03, 96), MAT.steel({ color: 0x9ea2a8, roughness: 0.25 })); cap.rotation.z = Math.PI / 2; cap.position.x = -0.14; spin.add(cap);
  for (let k = 0; k < 3; k++) {
    const a = (k * Math.PI * 2) / 3, jg = new THREE.Group(); jg.rotation.x = a;
    const base = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.18, 0.12), chM); base.position.set(-0.1, 0.34, 0); jg.add(base);
    const soft = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.16, 0.12), MAT.aluminum()); soft.position.set(0.04, 0.33, 0); jg.add(soft);
    for (const dy of [-0.04, 0.04]) { const b = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.01, 6), MAT.darkSteel()); b.rotation.z = Math.PI / 2; b.position.set(0.165, 0.33 + dy, 0); jg.add(b); }
    jg.traverse((o) => { if (o.isMesh) o.castShadow = true; }); spin.add(jg);
  }
  const work = new THREE.Group(); work.rotation.z = -Math.PI / 2; work.position.x = 0.15; spin.add(work);
  const scale = MAT.darkSteel({ color: 0x5c5f64, roughness: 0.6, metalness: 0.85 });
  const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.32, 96), scale); bar.position.y = -0.16; work.add(bar);
  P.cPart = makeBushing(steelMat({ roughness: 0.14, bumpMap: feedTex(3, 4, 0.4), bumpScale: 0.3 })); work.add(P.cPart);
  P.cStock = new THREE.Mesh(latheGeo([[0.168, 0], [0.168, 1], [0.16, 1]], 96), steelMat({ roughness: 0.42, color: 0x9a9ea4 })); P.cStock.position.y = 0.08; work.add(P.cStock);
  // torre (frente-superior) + ferramenta ativa
  const tur = new THREE.Group(); g.add(tur); P.cTur = tur;
  const disk = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.26, 12), MAT.paint(0x3a3e44, { metalness: 0.5, roughness: 0.35 })); disk.rotation.z = Math.PI / 2; disk.position.set(0.05, 0.9, -0.55); disk.castShadow = true; tur.add(disk);
  const toolM = MAT.darkSteel({ color: 0x4a4e54, metalness: 1, roughness: 0.3 });
  for (let k = 0; k < 6; k++) {
    const a = Math.PI * 0.75 + k * (Math.PI / 3);
    const blk = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.12, 0.18), toolM); blk.position.set(0.05, 0.9 + Math.sin(a) * 0.46, -0.55 + Math.cos(a) * 0.46); blk.rotation.x = -a; blk.castShadow = true; tur.add(blk);
  }
  const holder = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.42, 0.07), toolM); holder.position.set(0, 0.4, 0); holder.castShadow = true; tur.add(holder);
  const riser = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.5), toolM); riser.position.set(0.02, 0.62, -0.2); tur.add(riser);
  const ins = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.012, 4), new THREE.MeshPhysicalMaterial({ color: 0xc8a24a, metalness: 1, roughness: 0.25 })); ins.position.set(0, 0.178, 0); tur.add(ins);
  // refrigerante
  const nozzle = new THREE.Group(); nozzle.position.set(0.24, 0.6, -0.22); tur.add(nozzle);
  for (let i = 0; i < 6; i++) { if (i > 3) continue; const s = new THREE.Mesh(new THREE.SphereGeometry(0.02, 16, 10), MAT.paint(0x26292d)); s.position.set(0, -i * 0.03, i * 0.0); nozzle.add(s); }
  P.cool = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.01, 0.5, 10), new THREE.MeshPhysicalMaterial({ color: 0xf2f5f8, transparent: true, opacity: 0.22, roughness: 0.1, metalness: 0 }));
  g.add(P.cool);
  // luz interna
  kit.tubeLight(g, 2.6, [0.6, 1.5, -0.6], 0, 3.5);
  const pl = new THREE.PointLight(0xe8eef8, 3, 6, 1.5); pl.position.set(0.6, 1.3, 0.2); g.add(pl);
  // porta com janela
  const sh = new THREE.Shape(); sh.moveTo(-2.0, -1.8); sh.lineTo(2.4, -1.8); sh.lineTo(2.4, 1.9); sh.lineTo(-2.0, 1.9); sh.lineTo(-2.0, -1.8);
  const hole = new THREE.Path(); const hx0 = -0.7, hx1 = 1.2, hy0 = -0.6, hy1 = 0.95, r = 0.08;
  hole.moveTo(hx0 + r, hy0); hole.lineTo(hx1 - r, hy0); hole.quadraticCurveTo(hx1, hy0, hx1, hy0 + r); hole.lineTo(hx1, hy1 - r); hole.quadraticCurveTo(hx1, hy1, hx1 - r, hy1); hole.lineTo(hx0 + r, hy1); hole.quadraticCurveTo(hx0, hy1, hx0, hy1 - r); hole.lineTo(hx0, hy0 + r); hole.quadraticCurveTo(hx0, hy0, hx0 + r, hy0); sh.holes.push(hole);
  const doorGeo = new THREE.ExtrudeGeometry(sh, { depth: 0.08, bevelEnabled: true, bevelThickness: 0.01, bevelSize: 0.01, bevelSegments: 2 });
  const door = new THREE.Mesh(doorGeo, MAT.paint(0xd6d9dd, { roughness: 0.4, clearcoat: 0.5 })); door.position.z = 2.0; door.receiveShadow = true; g.add(door);
  const band = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.3, 0.02), MAT.paint(0x2a2d31)); band.position.set(0.2, -1.35, 2.1); g.add(band);
  for (const [gw, gh, gx, gy] of [[hx1 - hx0, 0.04, (hx0 + hx1) / 2, hy0], [hx1 - hx0, 0.04, (hx0 + hx1) / 2, hy1], [0.04, hy1 - hy0, hx0, (hy0 + hy1) / 2], [0.04, hy1 - hy0, hx1, (hy0 + hy1) / 2]]) { const gk = new THREE.Mesh(new THREE.BoxGeometry(gw, gh, 0.1), MAT.rubber()); gk.position.set(gx, gy, 2.06); g.add(gk); }
  const glass = new THREE.Mesh(new THREE.PlaneGeometry(hx1 - hx0, hy1 - hy0), new THREE.MeshPhysicalMaterial({ color: 0xdfe8f0, metalness: 0, roughness: 0.02, transparent: true, opacity: 0.05, envMapIntensity: 0.4, depthWrite: false })); glass.position.set((hx0 + hx1) / 2, (hy0 + hy1) / 2, 2.05); g.add(glass);
  const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.1, 20), MAT.chrome({ roughness: 0.15 })); handle.position.set(1.42, 0.15, 2.22); g.add(handle);
  for (const y of [-0.38, 0.68]) { const s = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.05, 0.14), MAT.chrome({ roughness: 0.2 })); s.position.set(1.42, y, 2.15); g.add(s); }
  // painel de comando com tela
  const pan = new THREE.Mesh(new P.RBox(0.85, 1.35, 0.18, 3, 0.04), MAT.paint(0x2a2d32, { roughness: 0.4, clearcoat: 0.4 })); pan.position.set(1.95, 0.35, 2.25); pan.rotation.y = -0.2; g.add(pan);
  const scr = canvasTex(512, 384, (c, w, h) => {
    c.fillStyle = "#0b0f14"; c.fillRect(0, 0, w, h); c.fillStyle = "#1b2633"; c.fillRect(0, 0, w, 40);
    c.font = "500 22px 'Plex Mono'"; c.fillStyle = "#cfd8e3"; c.fillText("O2231  BUCHA Ø32 h6", 14, 28);
    const L = ["G96 S220 M03", "G71 U1.5 R0.5", "G71 P10 Q20 U0.2 W0.1 F0.25", "N10 G00 X32.0", "G01 Z-32.0 F0.12", "N20 X48.0", "G70 P10 Q20"];
    L.forEach((s, i) => { c.fillStyle = i === 4 ? "#5aa2f5" : "#9aa6b4"; c.fillText(s, 14, 80 + i * 30); });
    c.fillStyle = "#cfd8e3"; c.font = "500 26px 'Plex Mono'"; c.fillText("X  32.000", 300, 300); c.fillText("Z -32.000", 300, 340);
  });
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.66, 0.5), new THREE.MeshBasicMaterial({ map: scr, toneMapped: false })); screen.position.set(1.97, 0.62, 2.35); screen.rotation.y = -0.2; screen.translateZ(0.0); g.add(screen);
  for (let i = 0; i < 12; i++) { const b = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.05, 0.02), MAT.plastic(i === 4 ? 0x2a7d3a : 0x1c1d20)); b.position.set(1.97 + ((i % 4) - 1.5) * 0.12 * Math.cos(0.2), 0.18 - Math.floor(i / 4) * 0.08, 2.35 + ((i % 4) - 1.5) * 0.12 * Math.sin(0.2)); b.rotation.y = -0.2; g.add(b); }
  const mpg = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.04, 40), MAT.chrome({ roughness: 0.3 })); mpg.rotation.x = Math.PI / 2; mpg.position.set(2.0, -0.12, 2.37); g.add(mpg);
  // torre de sinalização
  const tw = new THREE.Group(); tw.position.set(-1.6, 1.95, 1.9); g.add(tw);
  [[0x1a8f3c, 2.2], [0x8a6a10, 0.25], [0x7a1a1a, 0.25]].forEach(([c, i], k) => { const m = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.1, 24), MAT.emissive(c, i)); m.position.y = k * 0.11; tw.add(m); });
  // cavacos curtos e escuros
  return g;
}

export async function setup(kit, mode) {
  if (!kit) return;
  K = kit; THREE = kit.THREE; const { MAT } = kit;
  const { RoundedBoxGeometry } = await import("three/addons/geometries/RoundedBoxGeometry.js");
  const { BokehPass } = await import("three/addons/postprocessing/BokehPass.js");
  P.RBox = RoundedBoxGeometry;
  stage = kit.createStage({ bg: 0x0a0b0d, fov: 30, bloom: 0.3, env: { warm: 1.6, top: 3.5, left: 2.6 }, envIntensity: 1.15, fogNear: 6, fogFar: 22, exposure: 1.0 });
  S = stage.scene;
  bokeh = new BokehPass(S, stage.camera, { focus: 1.0, aperture: 0.004, maxblur: 0.01 });
  stage.composer.insertPass(bokeh, 1);

  // luzes globais suaves
  const hemi = new THREE.HemisphereLight(0xd8e0ea, 0x1a1712, 0.25); S.add(hemi);

  // === oficina (torno convencional) — também é o fundo do fechamento
  sets.shop = new THREE.Group(); S.add(sets.shop);
  sets.shop.add(buildLathe(kit));
  const floorM = MAT.floor({ color: 0x1b1c1e, roughness: 0.6 });
  const fl = kit.addFloor(sets.shop, -2.6, { mat: floorM });
  const wall = new THREE.Mesh(new THREE.PlaneGeometry(30, 10), MAT.paint(0x1a1c1e, { roughness: 0.8 })); wall.position.set(0, 1, -5); sets.shop.add(wall);
  kit.tubeLight(sets.shop, 3, [-1, 3.2, -2.5], 0, 3); kit.tubeLight(sets.shop, 3, [3.5, 3.4, -3.5], 0, 2.4);
  keyL.shop = kit.keyLight(sets.shop, { pos: [-3, 5, 4], intensity: 1.6, size: 3.5, color: 0xffe2c0 });
  const rimS = kit.rimLight(sets.shop, { pos: [3, 1.6, -2.5], intensity: 8, color: 0x7aa8e8, target: [0.3, 0, 0] });
  const fillS = new THREE.DirectionalLight(0xdfe6f0, 0.35); fillS.position.set(4, 2, 5); sets.shop.add(fillS);
  // cavacos ativos (torno)
  const cg = helixGeo(2.6, 0.02, 0.06, 0.004);
  chipsL = new THREE.InstancedMesh(cg, new THREE.MeshPhysicalMaterial({ color: 0xffffff, metalness: 1, roughness: 0.32 }), 110);
  for (let i = 0; i < 110; i++) { chipsL.setColorAt(i, new THREE.Color(chipColor(i + 500))); chipDataL.push({ up: 0.5 + rnd(i * 1.3) * 0.8, out: 0.35 + rnd(i * 2.7) * 0.7, side: (rnd(i * 3.9) - 0.5) * 0.6, sp: (rnd(i * 4.4) - 0.5) * 24, ax: new THREE.Vector3(rnd(i) - 0.5, rnd(i * 5) - 0.5, rnd(i * 6) - 0.5).normalize(), off: rnd(i * 8), s: 0.35 + rnd(i * 9) * 0.35 }); }
  chipsL.frustumCulled = false; sets.shop.add(chipsL);

  // === fechamento: desempeno de granito diante do torno
  sets.close = new THREE.Group(); S.add(sets.close);
  const grTex = canvasTex(512, 512, (g, w, h) => { g.fillStyle = "#151618"; g.fillRect(0, 0, w, h); for (let i = 0; i < 12000; i++) { const v = rnd(i * 1.7) < 0.5 ? 34 + rnd(i * 2.3) * 40 : 8; g.fillStyle = `rgb(${v},${v},${v + 3})`; g.fillRect(rnd(i * 3.1) * w, rnd(i * 4.7) * h, 1 + rnd(i * 5.3) * 2, 1 + rnd(i * 6.1) * 2); } });
  grTex.wrapS = grTex.wrapT = THREE.RepeatWrapping; grTex.repeat.set(2, 1.4);
  const granite = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.3, 1.6), new THREE.MeshPhysicalMaterial({ map: grTex, roughness: 0.22, metalness: 0, clearcoat: 0.7, clearcoatRoughness: 0.12 }));
  granite.position.set(0.25, -0.9, 3.3); granite.receiveShadow = true; granite.castShadow = true; sets.close.add(granite);
  const bench = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.08, 2.0), MAT.darkSteel({ color: 0x26282b, roughness: 0.5 })); bench.position.set(0.25, -1.09, 3.3); bench.receiveShadow = true; sets.close.add(bench);
  P.hand = makeBushing(steelMat({ roughness: 0.32, envMapIntensity: 2.4, color: 0xb8bcc1, bumpMap: feedTex(4, 2, 0.6), bumpScale: 0.35 }));
  P.cncP = makeBushing(steelMat({ roughness: 0.22, envMapIntensity: 2.4, color: 0xd0d4d9, bumpMap: feedTex(2, 6, 0.3), bumpScale: 0.12 }));
  sets.close.add(P.hand, P.cncP);
  const kc = new THREE.DirectionalLight(0xfff0dc, 1.5); kc.position.set(-1.5, 3.5, 6.0); kc.target.position.set(0.25, -0.75, 3.3); kc.castShadow = true; kc.shadow.mapSize.set(2048, 2048);
  Object.assign(kc.shadow.camera, { left: -1.5, right: 1.5, top: 1.5, bottom: -1.5, near: 0.1, far: 20 }); kc.shadow.bias = -0.0004; kc.shadow.normalBias = 0.02; sets.close.add(kc, kc.target);
  const sp2 = new THREE.SpotLight(0xfff4e6, 9, 8, 0.45, 0.8, 1.2); sp2.position.set(0.9, 1.4, 5.2); sp2.target.position.set(0.25, -0.55, 3.3); sets.close.add(sp2, sp2.target);
  const rc = kit.rimLight(sets.close, { pos: [1.8, 0.2, 1.8], intensity: 6, color: 0x8fb4e8, target: [0.25, -0.6, 3.3] });

  // === CNC
  sets.cnc = buildCNC(kit); S.add(sets.cnc);
  keyL.cnc = kit.keyLight(sets.cnc, { pos: [-2, 4, 5], intensity: 1.5, size: 3 });
  kit.rimLight(sets.cnc, { pos: [2.5, 1.5, -0.8], intensity: 6, color: 0x7aa8e8, target: [0.3, 0, 0] });
  const cg2 = helixGeo(1.1, 0.016, 0.03, 0.004);
  chipsC = new THREE.InstancedMesh(cg2, new THREE.MeshPhysicalMaterial({ color: 0xffffff, metalness: 1, roughness: 0.35 }), 120);
  for (let i = 0; i < 120; i++) { chipsC.setColorAt(i, new THREE.Color(rnd(i * 3.3) < 0.6 ? 0x23283a : 0x3a4a7a)); chipDataC.push({ up: 0.1 + rnd(i * 1.7) * 0.5, out: 0.3 + rnd(i * 2.1) * 0.8, side: (rnd(i * 3.1) - 0.5) * 0.8, sp: (rnd(i * 4.1) - 0.5) * 30, ax: new THREE.Vector3(rnd(i * 7) - 0.5, rnd(i * 9) - 0.5, rnd(i * 11) - 0.5).normalize(), off: rnd(i * 13), s: 0.7 + rnd(i * 15) * 0.6 }); }
  chipsC.frustumCulled = false; sets.cnc.add(chipsC);

  // === CAD
  sets.cad = new THREE.Group(); S.add(sets.cad);
  const grid = new THREE.GridHelper(8, 80, 0x2a3442, 0x1c222b); grid.position.y = -0.002; sets.cad.add(grid);
  P.cadPivot = new THREE.Group(); sets.cad.add(P.cadPivot);
  const cadGeo = P.lPart.geometry;
  const cadMat = new THREE.MeshStandardMaterial({ color: 0x9aa1aa, roughness: 0.5, metalness: 0.3 });
  P.cadPart = new THREE.Group(); P.cadPivot.add(P.cadPart);
  const cm = new THREE.Mesh(cadGeo, cadMat); cm.castShadow = true; P.cadPart.add(cm);
  P.cadEdgeMat = new THREE.LineBasicMaterial({ color: 0x5aa2f5, transparent: true });
  P.cadPart.add(new THREE.LineSegments(new THREE.EdgesGeometry(cadGeo, 20), P.cadEdgeMat));
  // cotas (no referencial da peça em pé)
  P.dims = new THREE.Group(); P.cadPart.add(P.dims); P.dimItems = [];
  const lm = (col) => new THREE.LineBasicMaterial({ color: col, transparent: true, depthTest: false });
  const addDim = (segs, text, tp, col, t0) => {
    const arr = []; segs.forEach(([a, b]) => arr.push(new THREE.Vector3(...a), new THREE.Vector3(...b)));
    const ln = new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(arr), lm(col)); ln.renderOrder = 15; P.dims.add(ln);
    const lb = label3d(text, col === 0x5aa2f5 ? "#7db5f7" : "#eef2f7", col === 0x5aa2f5 ? 0.06 : 0.048); lb.position.set(...tp); P.dims.add(lb);
    P.dimItems.push({ ln, lb, t0 });
  };
  const ar = (x, y, dx) => [[[x, y, 0], [x + dx * 0.03, y + 0.012, 0]], [[x, y, 0], [x + dx * 0.03, y - 0.012, 0]]];
  addDim([[[-0.16, 0.42, 0], [-0.16, 0.6, 0]], [[0.16, 0.42, 0], [0.16, 0.6, 0]], [[-0.16, 0.56, 0], [0.16, 0.56, 0]], ...ar(-0.16, 0.56, 1), ...ar(0.16, 0.56, -1)], "Ø32 h6", [0, 0.64, 0], 0x5aa2f5, 11.7);
  addDim([[[-0.24, -0.02, 0], [-0.24, -0.16, 0]], [[0.24, -0.02, 0], [0.24, -0.16, 0]], [[-0.24, -0.12, 0], [0.24, -0.12, 0]], ...ar(-0.24, -0.12, 1), ...ar(0.24, -0.12, -1)], "Ø48", [0, -0.19, 0], 0xa1a1a8, 11.95);
  addDim([[[0.165, 0.4, 0], [0.4, 0.4, 0]], [[0.26, 0, 0], [0.4, 0, 0]], [[0.36, 0, 0], [0.36, 0.4, 0]], [[0.36, 0.4, 0], [0.348, 0.37, 0]], [[0.36, 0.4, 0], [0.372, 0.37, 0]], [[0.36, 0, 0], [0.348, 0.03, 0]], [[0.36, 0, 0], [0.372, 0.03, 0]]], "40", [0.43, 0.2, 0], 0xa1a1a8, 12.2);
  addDim([[[0.08, 0.4, 0], [0.22, 0.5, 0]], [[0.22, 0.5, 0], [0.32, 0.5, 0]]], "Ø20 H7", [0.4, 0.53, 0], 0xa1a1a8, 12.45);
  keyL.cad = kit.keyLight(sets.cad, { pos: [-2.5, 5, 3], intensity: 1.8, size: 2 });
  const fillC = new THREE.DirectionalLight(0xdfe6f0, 0.6); fillC.position.set(3, 2, 4); sets.cad.add(fillC);
}

const show = (...names) => { for (const k in sets) sets[k].visible = names.includes(k); };
const lxt = (t) => 0.55 - 0.315 * E.inOutCubic(seg(t, 0.3, 6.3)) ;   // avanço do torno manual
const cxt = (t) => 0.55 - 0.315 * E.inOutCubic(seg(t, 6.8, 9.8));    // avanço do CNC
function setStock(mesh, xt) { const h = Math.max(0.0005, xt - 0.15 - 0.08); mesh.scale.set(1, h, 1); mesh.visible = h > 0.002; }

function emitChips(inst, data, n, t, t0, t1, tip, period, mode) {
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), pos = new THREE.Vector3(), scl = new THREE.Vector3();
  for (let i = 0; i < n; i++) {
    const d = data[i], ph = (i / n) * period, k = Math.floor((t - t0 - ph) / period), birth = t0 + ph + k * period, age = t - birth;
    const live = t > t0 && t < t1 && age >= 0 && age < period && birth >= t0;
    if (!live) { m4.compose(pos.set(0, -50, 0), q, scl.set(0, 0, 0)); inst.setMatrixAt(i, m4); continue; }
    const tx = tip(birth);
    if (mode === "lathe") pos.set(tx[0] + d.side * 0.25 * age, tx[1] + 0.01 + d.up * age - 3.2 * age * age, tx[2] + 0.02 + d.out * age);
    else pos.set(tx[0] + d.side * 0.3 * age, tx[1] + 0.01 + (d.up + 0.3) * age - 4.5 * age * age, tx[2] - 0.02 - d.out * 0.7 * age);
    q.setFromAxisAngle(d.ax, d.sp * age + d.off * 6);
    const grow = mode === "lathe" ? clamp(age / 0.12) : 1;
    scl.setScalar(d.s * (0.25 + 0.75 * grow));
    m4.compose(pos, q, scl); inst.setMatrixAt(i, m4);
  }
  inst.instanceMatrix.needsUpdate = true;
}
function dof(on, focus, aperture, maxblur = 0.012) {
  bokeh.enabled = on; if (!on) return;
  bokeh.uniforms.focus.value = focus; bokeh.uniforms.aperture.value = aperture; bokeh.uniforms.maxblur.value = maxblur;
}
const V = (a) => new THREE.Vector3(...a);
function lookD(pos, target, fov) { stage.look(pos, target, fov); return V(pos).distanceTo(V(target)); }

// enquadramento do match-cut (mesma peça, mesmo diâmetro, mesmo lugar no quadro)
const MC = { pos: [1.5, 1.38, 1.8], tgt: [0.34, 0.0, 0.02], fov: 30 };

export function render3d(t) {
  const sc = S, cam = stage.camera;
  if ((t >= T.quote && t < T.close) || t >= T.sig + 0.5) return false;
  // ----- torno convencional (0–6,5)
  if (t < T.cnc) {
    show("shop"); sc.background = new THREE.Color(0x0b0b0c); sc.fog = new THREE.Fog(0x0b0b0c, 6, 20); stage.bloom.strength = 0.3;
    const xt = lxt(t);
    P.lCar.position.x = xt; setStock(P.lStock, xt);
    P.lSpin.rotation.x = -t * 4.6;
    // anel graduado: avança 2 divisões em 0,3 s e 1,3 s (estalo), depois acompanha suavemente
    const step = (Math.PI * 2) / 100;
    const snaps = [0.3, 1.3].reduce((a, s) => a + 2 * step * E.outCubic(seg(t, s, s + 0.12)), 0);
    P.lDial.rotation.z = snaps;
    emitChips(chipsL, chipDataL, 60, t, 0.45, 6.4, (b) => [lxt(b), 0.0, 0.165], 0.75, "lathe");
    if (t < 2.2) {
      const k = E.inOutCubic(seg(t, 0, 2.2)), f = E.inOutCubic(seg(t, 1.15, 2.1));
      const dialP = [xt, -0.42, 1.15], cutP = [xt - 0.02, -0.02, 0.2];
      const pos = [xt + lerp(0.66, 0.58, k), lerp(0.16, 0.26, k), lerp(1.66, 1.6, k)];
      const tgt = dialP.map((v, i) => lerp(v, cutP[i], f * 0.92));
      stage.look(pos, tgt, 30);
      const dD = V(pos).distanceTo(V(dialP)), dC = V(pos).distanceTo(V(cutP));
      dof(true, lerp(dD, dC, f), 0.03, 0.018);
    } else if (t < 4.4) {
      const k = seg(t, 2.2, 4.4);
      const d = lookD([xt + lerp(0.34, 0.26, k), lerp(0.78, 0.72, k), lerp(0.62, 0.56, k)], [xt - 0.04, 0.0, 0.14], 30);
      dof(true, d * 0.95, 0.02, 0.014);
    } else {
      const k = E.inOutCubic(seg(t, 4.4, 6.5));
      const p0 = [2.9, 1.25, 4.4], t0 = [-0.25, -0.35, 0.2];
      const d = lookD(p0.map((v, i) => lerp(v, MC.pos[i], k)), t0.map((v, i) => lerp(v, MC.tgt[i], k)), lerp(32, MC.fov, k));
      dof(true, d, lerp(0.004, 0.01, k), 0.01);
    }
    return true;
  }
  // ----- CNC (6,5–10,5)
  if (t < T.cad) {
    show("cnc"); sc.background = new THREE.Color(0x0c0d10); sc.fog = new THREE.Fog(0x0c0d10, 8, 24); stage.bloom.strength = 0.32;
    const xt = cxt(t);
    setStock(P.cStock, xt);
    const run = t > 6.75;
    P.cSpin.rotation.x = -(t - 6.5) * (run ? 6.5 : 1) * clamp((t - 6.5) / 0.4);
    const engage = E.inOutCubic(seg(t, 6.6, 7.0));
    P.cTur.position.set(xt, (1 - engage) * 0.3, 0);
    // refrigerante: do bico ao ponto de corte
    const a = V([xt + 0.24, 0.42 + (1 - engage) * 0.3, -0.05]), b = V([xt + 0.02, 0.19, 0.0]);
    P.cool.visible = t > 6.9; const mid = a.clone().add(b).multiplyScalar(0.5); P.cool.position.copy(mid); P.cool.scale.y = a.distanceTo(b) / 0.5;
    P.cool.quaternion.setFromUnitVectors(V([0, 1, 0]), a.clone().sub(b).normalize());
    emitChips(chipsC, chipDataC, 120, t, 7.0, 9.85, (bb) => [cxt(bb), 0.17, 0.0], 0.5, "cnc");
    if (t < 7.9) {
      const k = seg(t, 6.5, 7.9);
      const d = lookD(MC.pos.map((v, i) => v + [0.02, 0.01, 0.06][i] * k), MC.tgt, MC.fov);
      dof(true, d, 0.008, 0.01);
    } else {
      const KF = [{ t: 7.9, p: MC.pos, g: MC.tgt, f: MC.fov }, { t: 8.7, p: [1.0, 0.5, 1.6], g: [0.4, 0.05, 0.1], f: 31 }, { t: 9.3, p: [1.0, 0.42, 2.9], g: [0.5, 0.08, 0.3], f: 32 }, { t: 10.45, p: [1.5, 0.55, 7.6], g: [0.8, 0.15, 0.6], f: 34 }];
      const o = keyframes(t, KF, (x) => x);
      const sm = E.inOutCubic(seg(t, 7.9, 10.45));
      const o2 = keyframes(lerp(7.9, 10.45, sm), KF, (x) => x);
      const d = lookD(o2.p, o2.g, o2.f);
      dof(true, d, lerp(0.008, 0.0015, sm), 0.01);
    }
    return true;
  }
  // ----- CAD (10,5–14)
  if (t < T.quote) {
    show("cad"); sc.background = new THREE.Color(0x17191d); sc.fog = null; stage.bloom.strength = 0.12; dof(false);
    const r = E.inOutCubic(seg(t, 10.7, 11.6));
    // começa na pose do torno (deitada, flange em x=0,15) e fica de pé no centro
    P.cadPart.rotation.z = lerp(-Math.PI / 2, 0, r);
    P.cadPart.position.set(lerp(0.15, 0, r), 0, 0);
    const ang = lerp(0, 0.35, seg(t, 11.0, 14.0));
    P.cadPivot.rotation.y = 0;
    const pEnd = [Math.sin(ang) * 3.5, 0.75, Math.cos(ang) * 3.5], tEnd = [0, 0.1, 0];
    lookD(MC.pos.map((v, i) => lerp(v, pEnd[i], r)), MC.tgt.map((v, i) => lerp(v, tEnd[i], r)), 30);
    P.cadEdgeMat.opacity = 0.9;
    P.dimItems.forEach(({ ln, lb, t0 }) => { const a = E.outCubic(seg(t, t0, t0 + 0.25)); ln.material.opacity = a; lb.material.opacity = a; ln.visible = lb.visible = a > 0; lb.quaternion.copy(cam.quaternion); lb.quaternion.premultiply(P.cadPart.getWorldQuaternion(new THREE.Quaternion()).invert()); });
    return true;
  }
  // ----- desempeno + torno antigo trabalhando ao fundo (27,5–35)
  show("shop", "close"); sc.background = new THREE.Color(0x0a0a0b); sc.fog = new THREE.Fog(0x0a0a0b, 7, 22); stage.bloom.strength = 0.3;
  const tt = t - T.close;
  const xt = 0.55 - 0.3 * seg(tt, 0, 7.5);
  P.lCar.position.x = xt; setStock(P.lStock, xt); P.lSpin.rotation.x = -t * 4.6; P.lDial.rotation.z = 0;
  emitChips(chipsL, chipDataL, 60, t, T.close, T.sig + 0.6, (b) => [0.55 - 0.3 * seg(b - T.close, 0, 7.5), 0.0, 0.165], 0.75, "lathe");
  const d1 = E.outCubic(seg(t, 27.6, 28.1)), d2 = E.outCubic(seg(t, 28.3, 28.8));
  P.hand.position.set(-0.07, -0.75 + (1 - d1) * 0.9, 3.3); P.hand.rotation.y = 0.4;
  P.cncP.position.set(0.57, -0.75 + (1 - d2) * 0.9, 3.3); P.cncP.rotation.y = 1.1;
  P.cncP.visible = t > 28.25; P.hand.visible = t > 27.55;
  const k = E.inOutCubic(seg(t, T.close, T.sig + 0.5));
  const d = lookD([lerp(0.55, 0.4, k), lerp(0.55, 0.38, k), lerp(7.5, 6.7, k)], [0.25, -0.5, 3.3], 34);
  dof(true, d, 0.016, 0.026);
  return true;
}

// ---------- 2D ----------
const MONO = (s, w) => F.m(s, w);
function label(s, t, t0, t1) {
  const a = seg(t, t0, t0 + 0.3) * (1 - seg(t, t1 - 0.25, t1)); if (a <= 0) return;
  const n = Math.ceil(s.length * E.outCubic(seg(t, t0, t0 + 0.25)));
  ctx.save(); ctx.globalAlpha = a;
  ctx.fillStyle = C.brand; ctx.fillRect(84, 316, 40 * E.outCubic(seg(t, t0, t0 + 0.5)), 3);
  txt(s.slice(0, n), 84, 296, { font: MONO(30), color: C.ink, align: "left", ls: 8 });
  ctx.restore();
}
function caption(s, t, t0, t1, y = 1590) {
  const a = seg(t, t0, t0 + 0.35) * (1 - seg(t, t1 - 0.3, t1)); if (a <= 0) return;
  let fs = 40; while (measure(s, F.b(fs, 500)) > 940 && fs > 28) fs -= 2;
  txt(s, W / 2, y, { font: F.b(fs, 500), color: C.ink, alpha: a });
}
function bigTitle(lines, t, t0, t1, y = 1370, max = 960, base = 100) {
  let fs = base; while (lines.some((l) => measure(l, F.d(fs), 2) > max) && fs > 60) fs -= 2;
  title(lines, W / 2, y, t, t0, t1, { font: F.d(fs), color: C.ink, lh: fs * 0.94, ls: 2 });
}
function corners(a = 0.4) {
  ctx.save(); ctx.strokeStyle = `rgba(238,242,247,${a})`; ctx.lineWidth = 2; const m = 48, L = 36;
  for (const [x, y, sx, sy] of [[m, 120, 1, 1], [W - m, 120, -1, 1], [m, H - 120, 1, -1], [W - m, H - 120, -1, -1]]) { ctx.beginPath(); ctx.moveTo(x, y + sy * L); ctx.lineTo(x, y); ctx.lineTo(x + sx * L, y); ctx.stroke(); }
  ctx.restore();
}
function rec(t, a) {
  if (a <= 0) return;
  const blink = Math.floor(t * 2) % 2 === 0;
  ctx.save(); ctx.globalAlpha = a;
  ctx.fillStyle = C.brand; ctx.globalAlpha = a * (blink ? 1 : 0.35); ctx.beginPath(); ctx.arc(W - 186, 288, 8, 0, 7); ctx.fill();
  ctx.globalAlpha = a; txt("REC", W - 166, 297, { font: MONO(24), color: C.soft, align: "left", ls: 6 });
  ctx.restore();
}
function scrim(a = 0.6, y0 = 1120) {
  const g = ctx.createLinearGradient(0, y0, 0, H); g.addColorStop(0, "rgba(0,0,0,0)"); g.addColorStop(1, `rgba(0,0,0,${a})`);
  ctx.fillStyle = g; ctx.fillRect(0, y0, W, H - y0);
}
const num = (v, d, L) => v.toFixed(d).replace(".", L.dec);

// leitura do micrômetro sobre o torno (4,5–6,4)
function micHud(t, L) {
  const a = seg(t, 4.55, 4.9) * (1 - seg(t, 6.2, 6.45)); if (a <= 0) return;
  const v = lerp(32.06, 31.992, E.outCubic(seg(t, 4.7, 5.5)));
  ctx.save(); ctx.globalAlpha = a;
  rrect(84, 1110, W - 168, 250, 18); ctx.fillStyle = "rgba(10,11,13,0.78)"; ctx.fill(); ctx.strokeStyle = "rgba(90,162,245,0.45)"; ctx.lineWidth = 2; ctx.stroke();
  txt("Ø32 h6", 124, 1176, { font: MONO(30), color: C.ink, align: "left", ls: 3 });
  txt(L.mic, W - 124, 1176, { font: MONO(22), color: C.muted, align: "right", ls: 3 });
  txt(num(v, 3, L), 124, 1300, { font: F.d(118), color: t > 5.5 ? C.soft : C.ink, align: "left" });
  const x0 = 540, x1 = W - 124, y = 1262;
  ctx.fillStyle = "rgba(90,162,245,0.18)"; ctx.fillRect(x0, y, x1 - x0, 10);
  const mx = x0 + (x1 - x0) * clamp((v - 31.984) / 0.016, -0.05, 1.05);
  ctx.fillStyle = v <= 32.0 ? C.brand : C.muted; ctx.fillRect(mx - 3, y - 14, 6, 38);
  txt(num(31.984, 3, L), x0, 1320, { font: MONO(20), color: C.muted, align: "left" });
  txt(num(32.0, 3, L), x1, 1320, { font: MONO(20), color: C.muted, align: "right" });
  ctx.restore();
}

// Desenho técnico do cliente (papel): corte da bucha com cotas. Devolve âncoras das cotas.
function drawing2D(x, y, w, h, L, o = {}) {
  const D = L.d, A = {};
  ctx.save();
  ctx.shadowColor = "rgba(0,0,0,0.5)"; ctx.shadowBlur = 30; ctx.fillStyle = "#f3f2ee"; ctx.fillRect(x, y, w, h); ctx.shadowBlur = 0;
  const ink = "#1f2226", s = o.s || Math.min(w / 110, h / 92);
  ctx.strokeStyle = ink; ctx.lineWidth = Math.max(1, s * 0.2); ctx.strokeRect(x + 10 * s / 8, y + 10 * s / 8, w - 20 * s / 8, h - 20 * s / 8);
  const cx = x + w * 0.42, by = y + h * 0.66, R = (mm) => mm * s, Y = (mm) => by - mm * s;
  // seção hachurada (corte total)
  const half = (sg) => [[cx + sg * R(24), Y(0)], [cx + sg * R(10), Y(0)], [cx + sg * R(10), Y(40)], [cx + sg * R(16), Y(40)], [cx + sg * R(16), Y(8)], [cx + sg * R(24), Y(8)]];
  for (const sg of [-1, 1]) {
    const pts = half(sg); ctx.beginPath(); pts.forEach(([px, py], i) => (i ? ctx.lineTo(px, py) : ctx.moveTo(px, py))); ctx.closePath();
    ctx.save(); ctx.clip(); ctx.strokeStyle = "rgba(31,34,38,0.55)"; ctx.lineWidth = Math.max(0.8, s * 0.12); for (let i = -60; i < 60; i += 2.2) { ctx.beginPath(); ctx.moveTo(cx + R(i), Y(-2)); ctx.lineTo(cx + R(i + 44), Y(42)); ctx.stroke(); } ctx.restore();
    ctx.lineWidth = Math.max(1.2, s * 0.32); ctx.stroke();
  }
  ctx.lineWidth = Math.max(1, s * 0.25); ctx.beginPath(); ctx.moveTo(cx - R(10), Y(0)); ctx.lineTo(cx + R(10), Y(0)); ctx.moveTo(cx - R(10), Y(40)); ctx.lineTo(cx + R(10), Y(40)); ctx.stroke();
  ctx.setLineDash([R(4), R(1), R(1), R(1)]); ctx.lineWidth = Math.max(0.8, s * 0.12); ctx.beginPath(); ctx.moveTo(cx, Y(-5)); ctx.lineTo(cx, Y(46)); ctx.stroke(); ctx.setLineDash([]);
  const fsz = Math.max(10, s * 3.1), font = `500 ${fsz}px "Plex Mono"`;
  const arrow = (px, py, ang) => { const l = R(2.2); ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px + Math.cos(ang + 0.3) * l, py + Math.sin(ang + 0.3) * l); ctx.lineTo(px + Math.cos(ang - 0.3) * l, py + Math.sin(ang - 0.3) * l); ctx.closePath(); ctx.fill(); };
  ctx.fillStyle = ink; ctx.lineWidth = Math.max(0.8, s * 0.13);
  const hdim = (x1, x2, yy, yExt, s1, key) => {
    ctx.beginPath(); ctx.moveTo(x1, yExt); ctx.lineTo(x1, yy + (yy < yExt ? -R(2) : R(2))); ctx.moveTo(x2, yExt); ctx.lineTo(x2, yy + (yy < yExt ? -R(2) : R(2))); ctx.moveTo(x1, yy); ctx.lineTo(x2, yy); ctx.stroke();
    arrow(x1, yy, 0); arrow(x2, yy, Math.PI);
    const ty = yy < yExt ? yy - R(1.5) : yy + fsz + R(1);
    txt(s1, (x1 + x2) / 2, ty, { font, color: ink }); const tw = measure(s1, font); A[key] = [(x1 + x2) / 2 - tw / 2 - 8, ty - fsz - 4, tw + 16, fsz + 14];
  };
  hdim(cx - R(16), cx + R(16), Y(48), Y(41), "Ø32 h6", "d32");
  hdim(cx - R(24), cx + R(24), Y(-8), Y(-1), "Ø48", "d48");
  // 40 (vertical, à esquerda)
  const vx = cx - R(31); ctx.beginPath(); ctx.moveTo(cx - R(25), Y(0)); ctx.lineTo(vx - R(2), Y(0)); ctx.moveTo(cx - R(17), Y(40)); ctx.lineTo(vx - R(2), Y(40)); ctx.moveTo(vx, Y(0)); ctx.lineTo(vx, Y(40)); ctx.stroke(); arrow(vx, Y(0), -Math.PI / 2); arrow(vx, Y(40), Math.PI / 2);
  ctx.save(); ctx.translate(vx - R(1.5), Y(20)); ctx.rotate(-Math.PI / 2); txt("40", 0, 0, { font, color: ink }); ctx.restore(); A.d40 = [vx - fsz - 10, Y(20) - fsz, fsz + 14, fsz * 2];
  // 8 (flange, à direita)
  const fx = cx + R(29); ctx.beginPath(); ctx.moveTo(cx + R(25), Y(0)); ctx.lineTo(fx + R(2), Y(0)); ctx.moveTo(cx + R(25), Y(8)); ctx.lineTo(fx + R(2), Y(8)); ctx.moveTo(fx, Y(0)); ctx.lineTo(fx, Y(8)); ctx.stroke(); txt("8", fx + R(3.5), Y(2.5), { font, color: ink, align: "left" });
  // Ø20 H7 (chamada)
  ctx.beginPath(); ctx.moveTo(cx + R(10), Y(30)); ctx.lineTo(cx + R(26), Y(38)); ctx.lineTo(cx + R(44), Y(38)); ctx.stroke(); arrow(cx + R(10), Y(30), Math.atan2(-R(-8), -R(16)) + Math.PI);
  txt("Ø20 H7", cx + R(27), Y(39.3), { font, color: ink, align: "left" }); A.d20 = [cx + R(27) - 8, Y(39.3) - fsz - 4, measure("Ø20 H7", font) + 16, fsz + 14];
  txt("Ra " + "0" + L.dec + "8", cx + R(27), Y(33), { font: `500 ${fsz * 0.85}px "Plex Mono"`, color: ink, align: "left" });
  // notas + carimbo
  const bx = x + w * 0.52, bY = y + h - R(20), bw = w * 0.46 - R(1.2), bh = R(18.5);
  ctx.lineWidth = Math.max(1, s * 0.2); ctx.strokeRect(bx, bY, bw, bh); ctx.beginPath(); ctx.moveTo(bx, bY + bh / 2); ctx.lineTo(bx + bw, bY + bh / 2); ctx.stroke();
  const f2 = `600 ${fsz * 0.9}px "Plex Mono"`, f3 = `500 ${fsz * 0.75}px "Plex Mono"`;
  txt(D.title, bx + R(1.5), bY + bh / 2 - R(3), { font: f2, color: ink, align: "left" });
  txt(D.no, bx + R(1.5), bY + bh - R(3), { font: f3, color: ink, align: "left" });
  const nx = x + R(4), ny = y + h - R(17);
  txt(D.mat, nx, ny, { font: f3, color: ink, align: "left" }); A.mat = [nx - 6, ny - fsz, measure(D.mat, f3) + 12, fsz + 10];
  txt(D.qty, nx, ny + fsz * 1.25, { font: f3, color: ink, align: "left" }); A.qty = [nx - 6, ny + fsz * 1.25 - fsz, measure(D.qty, f3) + 12, fsz + 10];
  txt(D.note, nx, ny + fsz * 2.5, { font: f3, color: "#4a4e55", align: "left" });
  // manchas de manuseio
  if (o.smudge) { for (let i = 0; i < 5; i++) { const g = ctx.createRadialGradient(x + rnd(i * 3) * w, y + rnd(i * 7) * h, 0, x + rnd(i * 3) * w, y + rnd(i * 7) * h, 30 + rnd(i) * 50); g.addColorStop(0, "rgba(120,100,60,0.08)"); g.addColorStop(1, "rgba(120,100,60,0)"); ctx.fillStyle = g; ctx.fillRect(x, y, w, h); } }
  ctx.restore();
  return A;
}

function appWindow(x, y, w, h, head, sub) {
  ctx.save(); ctx.shadowColor = "rgba(0,0,0,0.6)"; ctx.shadowBlur = 50;
  rrect(x, y, w, h, 18); ctx.fillStyle = "#141518"; ctx.fill(); ctx.shadowBlur = 0; ctx.strokeStyle = "#2a2a2d"; ctx.lineWidth = 2; ctx.stroke();
  ctx.save(); rrect(x, y, w, 64, [18, 18, 0, 0]); ctx.fillStyle = "#1a1b1f"; ctx.fill(); ctx.restore();
  ctx.fillStyle = "#2a2a2d"; ctx.fillRect(x, y + 64, w, 2);
  [0, 1, 2].forEach((i) => { ctx.fillStyle = "#3a3b40"; ctx.beginPath(); ctx.arc(x + 30 + i * 24, y + 32, 7, 0, 7); ctx.fill(); });
  txt(head, x + 120, y + 41, { font: F.b(24, 600), color: C.ink, align: "left" });
  if (sub) txt(sub, x + w - 28, y + 41, { font: MONO(18), color: C.muted, align: "right" });
  ctx.restore();
}
function cursor(x, y, press = 0) {
  ctx.save(); ctx.translate(x, y); ctx.scale(1.6 - press * 0.15, 1.6 - press * 0.15);
  ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, 22); ctx.lineTo(6, 17); ctx.lineTo(10, 26); ctx.lineTo(14, 24); ctx.lineTo(10, 15); ctx.lineTo(17, 15); ctx.closePath();
  ctx.fillStyle = "#fff"; ctx.fill(); ctx.strokeStyle = "#000"; ctx.lineWidth = 1.2; ctx.stroke(); ctx.restore();
}

// ---- 04 · AUTOMAÇÃO (14–18,5)
function sceneQuote(t, L) {
  const Q = L.q;
  ctx.fillStyle = "#0d0e10"; ctx.fillRect(0, 0, W, H);
  background(t, { glow: 0.5, gridAlpha: 0.035, speed: 8 });
  const ap = E.outCubic(seg(t, T.quote, T.quote + 0.5));
  ctx.save(); ctx.globalAlpha = ap; ctx.translate(0, (1 - ap) * 40);
  const x = 60, y = 380, w = W - 120, h = 900;
  appWindow(x, y, w, h, Q.head, Q.tpl);
  // arquivo do cliente (miniatura do desenho)
  const fy = y + 96;
  rrect(x + 28, fy, w - 56, 250, 12); ctx.fillStyle = "#1a1b1f"; ctx.fill(); ctx.strokeStyle = "#2a2a2d"; ctx.stroke();
  drawing2D(x + 48, fy + 18, 300, 214, L, { s: 2.25 });
  txt(Q.file, x + 380, fy + 70, { font: MONO(24), color: C.ink, align: "left" });
  txt("PDF · 1 p · A4", x + 380, fy + 108, { font: MONO(20), color: C.muted, align: "left" });
  const sp = seg(t, 14.4, 14.85);
  ctx.fillStyle = "#2a2a2d"; ctx.fillRect(x + 380, fy + 150, 520, 8); ctx.fillStyle = C.brand; ctx.fillRect(x + 380, fy + 150, 520 * E.outCubic(sp), 8);
  if (sp >= 1) txt("✓", x + 380 + 540, fy + 162, { font: F.b(26, 700), color: C.soft, align: "left" });
  // linhas do orçamento
  const ry = fy + 280;
  Q.rows.forEach(([k, v], i) => {
    const t0 = 14.9 + i * 0.35, a = E.outCubic(seg(t, t0, t0 + 0.25)); if (a <= 0) return;
    const yy = ry + i * 66;
    ctx.save(); ctx.globalAlpha *= a;
    ctx.fillStyle = i % 2 ? "rgba(255,255,255,0.015)" : "rgba(255,255,255,0.035)"; ctx.fillRect(x + 28, yy, w - 56, 60);
    txt(k, x + 52, yy + 39, { font: F.b(24, 500), color: C.muted, align: "left" });
    const n = Math.ceil(v.length * seg(t, t0, t0 + 0.3));
    let fs = 24; while (measure(v, MONO(fs)) > w - 56 - 290 && fs > 17) fs--;
    txt(v.slice(0, n), x + 300, yy + 39, { font: MONO(fs), color: C.ink, align: "left" });
    if (seg(t, t0, t0 + 0.3) >= 1) { ctx.fillStyle = C.brand; ctx.fillRect(x + 28, yy, 3, 60); }
    ctx.restore();
  });
  // botão
  const by = ry + 6 * 66 + 26, bw = measure(Q.btn, F.b(26, 600)) + 80, bx = x + w - 28 - bw;
  const pressed = t > 17.3;
  rrect(bx, by, bw, 66, 12); ctx.fillStyle = pressed ? C.brand : "rgba(34,130,240,0.14)"; ctx.fill(); ctx.strokeStyle = C.soft; ctx.lineWidth = 2; ctx.stroke();
  txt(Q.btn, bx + bw / 2, by + 43, { font: F.b(26, 600), color: C.ink });
  if (t < 17.5) txt(Q.review, x + 52, by + 43, { font: F.b(22, 400), color: C.muted, align: "left" });
  ctx.restore();
  // cursor
  const ck = E.inOutCubic(seg(t, 16.6, 17.25));
  if (t > 16.4 && t < 17.9) cursor(lerp(700, bx + bw / 2, ck), lerp(1080, by + 34, ck), t > 17.25 && t < 17.4 ? 1 : 0);
  // PDF gerado
  const pp = E.outCubic(seg(t, 17.5, 18.0));
  if (pp > 0) {
    ctx.save(); ctx.globalAlpha = pp; ctx.translate(lerp(W + 100, 0, pp), 0);
    const px = 430, py = 560, pw = 560, ph = 760;
    ctx.save(); ctx.translate(px + pw / 2, py + ph / 2); ctx.rotate(0.035); ctx.translate(-pw / 2, -ph / 2);
    ctx.shadowColor = "rgba(0,0,0,0.6)"; ctx.shadowBlur = 50; ctx.fillStyle = "#f4f4f1"; ctx.fillRect(0, 0, pw, ph); ctx.shadowBlur = 0;
    ctx.fillStyle = "#14161a"; ctx.fillRect(0, 0, pw, 10);
    txt(Q.doc, 36, 80, { font: F.d(56), color: "#14161a", align: "left", ls: 2 });
    txt("Nº 0417 · REV 0", pw - 36, 80, { font: MONO(18), color: "#4a4e55", align: "right" });
    ctx.fillStyle = "#d6d6d0"; ctx.fillRect(36, 104, pw - 72, 2);
    Q.rows.forEach(([k, v], i) => { txt(k, 36, 150 + i * 44, { font: F.b(17, 600), color: "#3a3d42", align: "left" }); let fs = 17; while (measure(v, MONO(fs)) > pw - 72 - 170 && fs > 12) fs--; txt(v, 200, 150 + i * 44, { font: MONO(fs), color: "#14161a", align: "left" }); });
    ctx.fillStyle = "#d6d6d0"; ctx.fillRect(36, 430, pw - 72, 2);
    drawing2D(36, 456, pw - 72, 250, L, { s: 2.6 });
    ctx.restore();
    ctx.restore();
    chip("✓ " + Q.ready, 84, by + 42, pp, { size: 22, align: "left" });
  }
}

// ---- 05 · IA NO PROCESSO (18,5–23,5)
function sceneAI(t, L) {
  const A = L.a;
  ctx.fillStyle = "#0d0e10"; ctx.fillRect(0, 0, W, H);
  background(t, { glow: 0.45, gridAlpha: 0.035, speed: 8 });
  const ap = E.outCubic(seg(t, T.ai, T.ai + 0.45));
  ctx.save(); ctx.globalAlpha = ap;
  const x = 60, y = 360, w = W - 120, h = 1000;
  appWindow(x, y, w, h, A.head, "2231-B");
  txt(A.src.toUpperCase(), x + 32, y + 104, { font: MONO(18), color: C.muted, align: "left", ls: 4 });
  // desenho do cliente
  const dx = x + 28, dy = y + 124, dw = w - 56, dh = 430;
  const anc = drawing2D(dx, dy, dw, dh, L, { s: 4.6, smudge: true });
  // destaques sequenciais
  const keys = [["mat", 19.0], ["d32", 19.3], ["d20", 19.6], ["d40", 19.9], ["qty", 20.2]];
  keys.forEach(([k, t0]) => {
    const r = anc[k]; if (!r) return; const a = E.outCubic(seg(t, t0, t0 + 0.25)); if (a <= 0) return;
    ctx.save(); ctx.globalAlpha *= a; ctx.strokeStyle = C.brand; ctx.lineWidth = 2; ctx.fillStyle = "rgba(34,130,240,0.10)";
    const g = (1 - a) * 10; ctx.fillRect(r[0] - g, r[1] - g, r[2] + 2 * g, r[3] + 2 * g); ctx.strokeRect(r[0] - g, r[1] - g, r[2] + 2 * g, r[3] + 2 * g); ctx.restore();
  });
  // varredura discreta (linha de leitura)
  const sv = seg(t, 18.85, 20.4);
  if (sv > 0 && sv < 1) { const yy = dy + dh * sv; ctx.fillStyle = "rgba(34,130,240,0.35)"; ctx.fillRect(dx, yy, dw, 2); }
  // extração
  const ey = dy + dh + 22;
  A.rows.forEach(([k, v], i) => {
    const t0 = 20.3 + i * 0.26, a = seg(t, t0, t0 + 0.12); if (a <= 0) return;
    const yy = ey + i * 50;
    ctx.save(); ctx.globalAlpha *= a;
    txt(k, x + 40, yy + 34, { font: F.b(23, 500), color: C.muted, align: "left" });
    const n = Math.ceil(v.length * seg(t, t0, t0 + 0.24));
    txt(v.slice(0, n), x + 300, yy + 34, { font: MONO(24), color: i === 1 ? C.soft : C.ink, align: "left" });
    if (n >= v.length) txt("✓", x + w - 40, yy + 34, { font: F.b(24, 700), color: "#5fb97a", align: "right" });
    ctx.fillStyle = "#222327"; ctx.fillRect(x + 28, yy + 48, w - 56, 1);
    ctx.restore();
  });
  // alerta âmbar
  const al = E.outCubic(seg(t, 21.5, 21.75));
  const aly = ey + 5 * 50 + 12;
  if (al > 0) {
    ctx.save(); ctx.globalAlpha *= al; rrect(x + 28, aly, w - 56, 58, 10); ctx.fillStyle = "rgba(230,160,40,0.12)"; ctx.fill(); ctx.strokeStyle = "rgba(230,160,40,0.7)"; ctx.lineWidth = 1.5; ctx.stroke();
    txt("!", x + 56, aly + 40, { font: F.b(26, 800), color: "#e6a028" });
    let fs = 23; while (measure(A.alert, F.b(fs, 500)) > w - 160 && fs > 17) fs--;
    txt(A.alert, x + 84, aly + 38, { font: F.b(fs, 500), color: "#f0c070", align: "left" }); ctx.restore();
  }
  // rodapé: rascunho + aprovar
  const fy = y + h - 84;
  ctx.fillStyle = "#2a2a2d"; ctx.fillRect(x, fy - 14, w, 1);
  let fsD = 18; while (measure(A.draft, MONO(fsD)) + 44 > w - 330 && fsD > 13) fsD--;
  chip(A.draft, x + 28, fy + 36, seg(t, 21.8, 22.1), { size: fsD, align: "left", fill: "rgba(255,255,255,0.04)", color: C.muted });
  const approved = t > 22.72;
  const bw = 230, bx = x + w - 28 - bw;
  rrect(bx, fy + 2, bw, 62, 12); ctx.fillStyle = approved ? C.brand : "rgba(34,130,240,0.12)"; ctx.fill(); ctx.strokeStyle = C.soft; ctx.lineWidth = 2; ctx.stroke();
  txt(approved ? A.done + " ✓" : A.btn, bx + bw / 2, fy + 43, { font: F.b(25, 600), color: C.ink });
  ctx.restore();
  const ck = E.inOutCubic(seg(t, 22.0, 22.65));
  if (t > 21.9 && t < 23.4) cursor(lerp(640, bx + 130, ck), lerp(1150, fy + 40, ck), t > 22.65 && t < 22.8 ? 1 : 0);
}

// ---- 06 · SITE INDUSTRIAL (23,5–27,5)
function sceneWeb(t, L) {
  ctx.fillStyle = "#0b0c0e"; ctx.fillRect(0, 0, W, H);
  background(t, { glow: 0.7, gridAlpha: 0.05, speed: 10 });
  // busca neutra
  const sa = E.outCubic(seg(t, 23.55, 23.9));
  ctx.save(); ctx.globalAlpha = sa;
  rrect(84, 420, W - 168, 84, 42); ctx.fillStyle = "#16171a"; ctx.fill(); ctx.strokeStyle = "rgba(90,162,245,0.45)"; ctx.lineWidth = 2; ctx.stroke();
  ctx.strokeStyle = C.muted; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(136, 458, 13, 0, 7); ctx.moveTo(146, 468); ctx.lineTo(158, 480); ctx.stroke();
  const n = Math.ceil(L.search.length * seg(t, 23.7, 24.4));
  let fs = 28; while (measure(L.search, MONO(fs)) > W - 168 - 140 && fs > 18) fs--;
  txt(L.search.slice(0, n) + (Math.floor(t * 3) % 2 && t < 24.6 ? "|" : ""), 180, 472, { font: MONO(fs), color: C.ink, align: "left" });
  ctx.restore();
  // sites do portfólio
  const sites = [["gv-drill.jpg", "gvdrill.com.br", 24.5], ["mt-engenharia.jpg", "mtengenhariast.com.br", 25.4], ["vertis-elevadores.jpg", "vertiselevadores.com.br", 26.5]];
  let cur = sites[0]; for (const s of sites) if (t >= s[2]) cur = s;
  const k = sites.indexOf(cur), t0 = cur[2], next = sites[k + 1] ? sites[k + 1][2] : 27.5;
  const ba = E.outCubic(seg(t, 24.5, 24.9));
  if (ba > 0) {
    const zoom = 1 + 0.03 * seg(t, 24.5, 27.5);
    ctx.save(); ctx.globalAlpha = ba; ctx.translate(W / 2, 830); ctx.scale(zoom, zoom); ctx.translate(-W / 2, -830);
    browser(48, 580, W - 96, 540, IMG[cur[0]], { url: cur[1], reveal: k === 0 ? 1 : E.inOutCubic(seg(t, t0, t0 + 0.45)), scroll: seg(t, t0 + 0.3, next) * 0.6, glow: 40 });
    ctx.restore();
    // miniaturas (portfólio)
    sites.forEach(([img], i) => { const tx = 84 + i * 312, ty = 1160, a = ba * (i === k ? 1 : 0.45); ctx.save(); ctx.globalAlpha = a; rrect(tx, ty, 288, 134, 10); ctx.save(); ctx.clip(); if (IMG[img]) ctx.drawImage(IMG[img], tx, ty, 288, 288 * IMG[img].height / IMG[img].width); ctx.restore(); ctx.strokeStyle = i === k ? C.soft : "#2a2a2d"; ctx.lineWidth = 2; rrect(tx, ty, 288, 134, 10); ctx.stroke(); ctx.restore(); });
  }
}

// ---- 03 · CAD: interface neutra por cima do 3D
function cadChrome(t, L) {
  const a = seg(t, 10.55, 10.9); if (a <= 0) return;
  ctx.save(); ctx.globalAlpha = a;
  ctx.fillStyle = "rgba(14,15,18,0.92)"; ctx.fillRect(0, 0, W, 96);
  for (let i = 0; i < 9; i++) { ctx.strokeStyle = i === 3 ? C.brand : "rgba(161,161,168,0.5)"; ctx.lineWidth = 2; rrect(40 + i * 72, 26, 46, 46, 8); ctx.stroke(); }
  txt("2231-B.part", W - 40, 60, { font: MONO(22), color: C.muted, align: "right" });
  const feats = ["Revolve1 · Ø48×8", "Boss · Ø32 h6 × 32", "Hole · Ø20 H7", "Chamfer · 0" + L.dec + "5×45°", "Material · SAE 1045"];
  const n = Math.min(5, 1 + Math.floor(seg(t, 10.8, 12.6) * 5));
  feats.slice(0, n).forEach((f, i) => { const on = i === n - 1; txt((on ? "▸ " : "  ") + f, 84, 400 + i * 34, { font: MONO(20), color: on ? C.soft : C.muted, align: "left" }); });
  ctx.restore();
}

// ---- fechamento: etiquetas das duas peças
function closeTags(t, L) {
  const a = E.outCubic(seg(t, 29.0, 29.5)) * (1 - seg(t, T.sig, T.sig + 0.3)); if (a <= 0) return;
  ctx.save(); ctx.globalAlpha = a;
  const k = E.inOutCubic(seg(t, T.close, T.sig + 0.5));
  const tags = [[L.hand, 31.992, lerp(300, 252, k)], [L.cncTag, 31.995, lerp(780, 828, k)]];
  tags.forEach(([s, v, x]) => {
    txt(s, x, 640, { font: MONO(26), color: C.ink, ls: 6 });
    txt("Ø32 h6 · " + num(v, 3, L), x, 680, { font: MONO(22), color: C.soft });
    ctx.fillStyle = "rgba(238,242,247,0.5)"; ctx.fillRect(x - 1, 700, 2, 60);
  });
  ctx.restore();
}

export function render2d(t, lang, has3d) {
  const L = COPY[lang] || COPY.pt;
  if (!has3d) {
    if (t >= T.quote && t < T.ai) sceneQuote(t, L);
    else if (t >= T.ai && t < T.web) sceneAI(t, L);
    else if (t >= T.web && t < T.close) sceneWeb(t, L);
    else if (t < T.sig) { ctx.fillStyle = "#0b0b0c"; ctx.fillRect(0, 0, W, H); }
  }
  // legibilidade sobre o 3D
  if (has3d && t < T.sig) scrim(t < T.cnc ? 0.65 : t < T.cad ? 0.75 : 0.5, t >= T.cnc && t < T.cad ? 1000 : 1120);
  if (t >= T.cad && t < T.quote) cadChrome(t, L);
  // gancho
  bigTitle(L.hook, t, 0.45, 2.9, 1370, 960, 112);
  label(L.l1, t, 3.0, T.cnc);
  micHud(t, L);
  caption(L.c1, t, 3.2, 6.35);
  // CNC
  label(L.l2, t, 6.62, T.cad);
  bigTitle(L.t2, t, 7.2, 10.35, 1400);
  caption(L.c2, t, 8.2, 10.35);
  // CAD
  label(L.l3, t, 10.6, T.quote);
  caption(L.c3, t, 10.8, 12.0);
  bigTitle(L.t3, t, 12.1, 13.95, 1400, 960, 96);
  // automação / IA / site
  label(L.l4, t, 14.05, T.ai);
  bigTitle(L.t4, t, 14.6, 18.45, 1430, 940, 92);
  label(L.l5, t, 18.55, T.web);
  bigTitle(L.t5, t, 19.0, 23.45, 1478, 940, 90);
  label(L.l6, t, 23.55, T.close);
  bigTitle(L.t6, t, 24.6, 27.45, 1440, 940, 96);
  caption(L.c6, t, 25.2, 27.45, 1610);
  // fechamento
  closeTags(t, L);
  bigTitle(L.t7, t, 29.6, T.sig + 0.1, 1360, 940, 100);
  // REC + cantoneiras a partir do match-cut
  if (t > T.cnc && t < T.sig) { corners(0.4); rec(t, seg(t, 6.62, 6.75)); }
  signature(t, T.sig, lang, L.cta, { noTag: true });
  if (t > T.sig && L.wa) txt(L.wa, W / 2, H * 0.62 + 178, { font: MONO(26), color: C.muted, ls: 2, alpha: E.outCubic(seg(t - T.sig, 1.5, 2.2)) });
  vignette(); grain(t, 0.045);
  // cortes: preto rápido (o match-cut 6,5 é seco)
  const cuts = [T.cad, T.quote, T.ai, T.web, T.close];
  for (const c of cuts) { const d = Math.abs(t - c); if (d < 0.08) { ctx.fillStyle = `rgba(0,0,0,${0.6 * (1 - d / 0.08)})`; ctx.fillRect(0, 0, W, H); } }
  // fade de entrada
  if (t < 0.15) { ctx.fillStyle = `rgba(0,0,0,${1 - t / 0.15})`; ctx.fillRect(0, 0, W, H); }
}
