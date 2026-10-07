// FILME A — A FÁBRICA ESTÁ EM MOVIMENTO (38,5 s · 24 fps · 9:16) — filme-manifesto da marca
// Galpão metalmecânico em CG (1 unidade = 1 m): 12 centros de usinagem verticais, ponte rolante com chapa de aço,
// treliças, luminárias tubulares e névoa. Macro de usinagem em set separado (1 unidade = 100 mm):
// fresa de topo Ø12 TiAlN fresando a parede de um bloco SAE 1045 120×80×30 em morsa.
export const DURATION = 38.5;
export const IMAGES = ["gv-drill.jpg"];

const T = { s2: 2.6, s3: 4.6, s4: 6.6, v1: 8.4, v2: 10.2, v3: 12.0, v4: 13.8, v5: 15.6, link: 17.4, dash: 20.2, s11: 22.4, s11b: 23.4, hall: 24.4, hall2: 29.4, sig: 34.8 };
const AMBER_AT = 6.95, GREEN_AT = 22.85;

const COPY = {
  pt: {
    hook: ["SUA FÁBRICA JÁ ESTÁ", "EM MOVIMENTO."], q: ["MAS E TUDO QUE ACONTECE", "AO REDOR DELA?"],
    words: ["ORÇAMENTOS", "DADOS", "PROCESSOS", "PROJETOS", "PRESENÇA DIGITAL"],
    subs: ["Planilha solta, desenho e e-mail.", "Ciclo e parada anotados no papel.", "Ordem e relatório feitos à mão.", "A revisão errada chega à máquina.", "O comprador pesquisa antes de ligar."],
    qCols: ["ITEM", "MATERIAL", "H/MÁQ", "SETUP", "PRAZO"], waiting: "AGUARDANDO", rfq: "RFQ 2231",
    cycle: "CICLO", down: "PARADA", setup: "SETUP", paper: "APONTAMENTO EM PAPEL", shift: "TURNO B",
    flow: ["RFQ", "ORÇAMENTO", "OP 0457", "RELATÓRIO"], manual: "MANUAL", retype: "REDIGITANDO", stuck: "AGUARDANDO ASSINATURA",
    atMachine: "NA MÁQUINA", inCad: "NO CAD", part: "BLOCO DE FIXAÇÃO",
    oldSite: ["INDÚSTRIA METALÚRGICA", "Bem-vindo ao nosso site!", "SITE EM CONSTRUÇÃO", "© 2009 · Melhor visualizado em 800×600", "Visitantes:"],
    nodes: ["MÁQUINAS", "CAD", "AUTOMAÇÃO", "PAINEL", "SITE"], nstat: ["EM CICLO", "REV C", "ATIVA", "AO VIVO", "ONLINE"],
    link: "ENGENHARIA + TECNOLOGIA", c1: "A Downway conecta engenharia e tecnologia", c2: "…para que a operação inteira ande no ritmo da fábrica.",
    live: "OPERAÇÃO · AO VIVO", inCycle: "EM CICLO", ev: ["RFQ 2231 · ORÇAMENTO ENVIADO", "DW-1045 · REV C LIBERADA"],
    end: ["TECNOLOGIA QUE RESPEITA", "O CHÃO DE FÁBRICA."], cta: "AGENDE UM DIAGNÓSTICO", dec: ",",
  },
  en: {
    hook: ["YOUR FACTORY IS", "ALREADY MOVING."], q: ["BUT WHAT ABOUT", "EVERYTHING AROUND IT?"],
    words: ["QUOTES", "DATA", "PROCESSES", "ENGINEERING", "DIGITAL PRESENCE"],
    subs: ["Loose spreadsheets, drawings and email.", "Cycles and downtime logged on paper.", "Orders and reports done by hand.", "The wrong revision reaches the machine.", "Buyers look you up before they call."],
    qCols: ["ITEM", "MATERIAL", "MACH H", "SETUP", "LEAD"], waiting: "PENDING", rfq: "RFQ 2231",
    cycle: "CYCLE", down: "DOWNTIME", setup: "SETUP", paper: "LOGGED ON PAPER", shift: "SHIFT B",
    flow: ["RFQ", "QUOTE", "WO 0457", "REPORT"], manual: "MANUAL", retype: "RETYPING", stuck: "WAITING FOR SIGN-OFF",
    atMachine: "AT THE MACHINE", inCad: "IN CAD", part: "FIXTURE BLOCK",
    oldSite: ["METALWORKS INDUSTRIES", "Welcome to our website!", "UNDER CONSTRUCTION", "© 2009 · Best viewed at 800×600", "Visitors:"],
    nodes: ["MACHINES", "CAD", "AUTOMATION", "DASHBOARD", "WEBSITE"], nstat: ["IN CYCLE", "REV C", "ACTIVE", "LIVE", "ONLINE"],
    link: "ENGINEERING + TECHNOLOGY", c1: "Downway connects engineering and technology", c2: "…so your whole operation keeps pace with the shop floor.",
    live: "OPERATIONS · LIVE", inCycle: "IN CYCLE", ev: ["RFQ 2231 · QUOTE SENT", "DW-1045 · REV C RELEASED"],
    end: ["TECHNOLOGY THAT RESPECTS", "THE SHOP FLOOR."], cta: "BOOK AN ASSESSMENT", dec: ".",
  },
  es: {
    hook: ["TU FÁBRICA YA ESTÁ", "EN MOVIMIENTO."], q: ["¿Y TODO LO QUE OCURRE", "A SU ALREDEDOR?"],
    words: ["COTIZACIONES", "DATOS", "PROCESOS", "INGENIERÍA", "PRESENCIA DIGITAL"],
    subs: ["Planillas sueltas, planos y correos.", "Ciclos y paradas anotados en papel.", "Órdenes e informes hechos a mano.", "La revisión equivocada llega a la máquina.", "El comprador te busca antes de llamar."],
    qCols: ["ÍTEM", "MATERIAL", "H/MÁQ", "SETUP", "PLAZO"], waiting: "PENDIENTE", rfq: "RFQ 2231",
    cycle: "CICLO", down: "PARADA", setup: "SETUP", paper: "REGISTRO EN PAPEL", shift: "TURNO B",
    flow: ["RFQ", "COTIZACIÓN", "OP 0457", "INFORME"], manual: "MANUAL", retype: "REESCRIBIENDO", stuck: "ESPERANDO FIRMA",
    atMachine: "EN LA MÁQUINA", inCad: "EN EL CAD", part: "BLOQUE DE FIJACIÓN",
    oldSite: ["INDUSTRIA METALÚRGICA", "¡Bienvenido a nuestro sitio!", "SITIO EN CONSTRUCCIÓN", "© 2009 · Mejor visto en 800×600", "Visitantes:"],
    nodes: ["MÁQUINAS", "CAD", "AUTOMATIZACIÓN", "PANEL", "SITIO WEB"], nstat: ["EN CICLO", "REV C", "ACTIVA", "EN VIVO", "EN LÍNEA"],
    link: "INGENIERÍA + TECNOLOGÍA", c1: "Downway conecta ingeniería y tecnología", c2: "…para que toda la operación avance al ritmo de la planta.",
    live: "OPERACIÓN · EN VIVO", inCycle: "EN CICLO", ev: ["RFQ 2231 · COTIZACIÓN ENVIADA", "DW-1045 · REV C LIBERADA"],
    end: ["TECNOLOGÍA QUE RESPETA", "LA PLANTA."], cta: "AGENDA UN DIAGNÓSTICO", dec: ",",
  },
};

// ---------- trilha (cues) ----------
cue(0, "drone", { until: 6.6, level: 0.8 });
cue(0, "room", { until: 8.4 });
cue(0, "crane", { until: 2.6 });
cue(2.6, "machine", { until: 6.85 }); cue(2.7, "pneumatic");
cue(4.6, "spindle", { until: 6.85, f: 240 }); cue(4.6, "chips", { until: 6.7 }); cue(4.6, "coolant", { until: 6.8 });
cue(6.85, "stop"); cue(7.0, "relay");
cue(8.4, "pulse", { bpm: 92, until: 22.4 });
cue(8.45, "key"); cue(8.7, "keys", { until: 9.6 }); cue(8.6, "clock", { until: 10.1 });
[10.25, 10.6, 10.95, 11.3].forEach((t) => cue(t, "tick"));
cue(12.05, "clack", { soft: true }); [12.45, 12.7, 12.95].forEach((t) => cue(t, "clack", { soft: true })); cue(13.0, "keys", { until: 13.7 });
cue(13.85, "click"); cue(14.15, "pen"); cue(14.75, "thump");
cue(15.65, "click"); cue(16.0, "tick"); cue(16.7, "tick");
cue(17.4, "whoosh", { dur: 0.5 }); [0, 1, 2, 3, 4].forEach((i) => cue(17.55 + i * 0.42, "relay")); cue(19.7, "chime");
cue(20.2, "whoosh", { dur: 0.4 }); cue(20.7, "notif"); cue(21.2, "notif");
cue(22.6, "clack"); cue(22.85, "relay"); cue(22.9, "spindleUp", { dur: 0.6 });
cue(23.4, "spindle", { until: 24.45, f: 240 }); cue(23.6, "coolant", { until: 24.45 }); cue(23.85, "chips", { until: 24.45 });
cue(24.4, "machine", { until: 34.8 }); cue(24.4, "room", { until: 34.8 }); cue(24.4, "crane", { until: 28.6 });
[25.0, 25.4, 25.8, 26.2].forEach((t) => cue(t, "tick"));
cue(29.4, "crane", { until: 34.2 }); cue(29.4, "resolve", { dur: 5.4 });
cue(34.8, "sub"); cue(34.8, "end");

// ---------- dados puros (usados no 3D e no 2D) ----------
const MACH = [];
for (let i = 0; i < 6; i++) {
  MACH.push({ x: -3.7, z: 2.2 - i * 4.6, r: Math.PI / 2, id: 1 + i * 2 });
  MACH.push({ x: 3.7, z: 2.2 - i * 4.6, r: -Math.PI / 2, id: 2 + i * 2 });
}
const HERO = 3; // linha direita, 2ª máquina (CNC-04)
const toWorld = (m, lx, ly, lz) => [m.x + lx * Math.cos(m.r) + lz * Math.sin(m.r), ly, m.z - lx * Math.sin(m.r) + lz * Math.cos(m.r)];
const STACK = [1.05, 2.86, -0.3];

const mix = (a, b, f) => a.map((v, i) => lerp(v, b[i], f));
function camAt(t) {
  if (t < T.s2) { const k = seg(t, 0, T.s2), e = k * 0.45 + E.outCubic(k) * 0.55;
    return { p: mix([0.9, 1.1, 6.0], [-0.3, 3.0, 9.5], e), tg: mix([0.2, 3.1, -6], [0, 1.9, -10], e), fov: lerp(42, 46, e) }; }
  if (t < T.s3) { const k = seg(t, T.s2, T.s3);
    return { p: [-1.1, 0.75, lerp(3.2, -0.2, k)], tg: [2.6, 1.55, lerp(-1.8, -5.2, k)], fov: 46 }; }
  if (t < T.s4) { const k = seg(t, T.s3, T.s4); // macro (set em x=200)
    return { p: [200 + lerp(1.0, 0.8, k), 0.72, 2.9], tg: [200 + lerp(-0.35, -0.05, k), -0.02, 0.3], fov: 28 }; }
  if (t < T.s11) { const k = E.outCubic(seg(t, T.s4, T.v1));
    return { p: mix([-1.0, 1.7, 2.2], [-0.6, 1.75, 1.8], k), tg: [3.4, 2.05, -2.0], fov: 46 }; }
  if (t < T.s11b) { const k = E.inOutCubic(seg(t, T.s11, T.s11b));
    return { p: mix([0.0, 1.6, 0.0], [0.5, 1.7, -0.3], k), tg: mix([3.1, 1.95, -1.5], [3.2, 2.15, -1.5], k), fov: 36 }; }
  if (t < T.hall) { const k = seg(t, T.s11b, T.hall);
    return { p: [200 + lerp(0.95, 0.85, k), 0.72, 2.9], tg: [200 + lerp(-0.25, 0.0, k), -0.02, 0.3], fov: 28 }; }
  if (t < T.hall2) { const k = seg(t, T.hall, T.hall2);
    return { p: mix([-1.6, 6.2, 8.5], [-0.9, 5.0, 4.5], k), tg: mix([0.6, 1.8, -10], [0.6, 1.6, -14], k), fov: 42 }; }
  const k = seg(t, T.hall2, T.sig);
  return { p: mix([-0.6, 0.55, 1.5], [-0.5, 0.65, -0.6], k), tg: mix([1.2, 3.6, -8], [1.0, 3.9, -10], k), fov: 50 };
}
function craneAt(t) {
  if (t < T.s3) return { z: -0.6, x: lerp(0.0, 2.6, seg(t, 0, T.s3)) };
  if (t < T.hall2) return { z: lerp(-17, -9.5, seg(t, T.hall, T.hall2)), x: lerp(-1.5, 0.8, seg(t, T.hall, T.hall2)) };
  return { z: lerp(-14, -2.5, seg(t, T.hall2, T.sig)), x: lerp(0.4, 1.6, seg(t, T.hall2, T.sig)) };
}
// projeção (igual à câmera do three: lookAt com up = Y) → coordenadas de tela 1080×1920
function project(c, X) {
  const f = [c.tg[0] - c.p[0], c.tg[1] - c.p[1], c.tg[2] - c.p[2]], fl = Math.hypot(...f); f.forEach((v, i) => (f[i] = v / fl));
  let r = [-f[2], 0, f[0]]; const rl = Math.hypot(...r); r = r.map((v) => v / rl);
  const u = [r[1] * f[2] - r[2] * f[1], r[2] * f[0] - r[0] * f[2], r[0] * f[1] - r[1] * f[0]];
  const d = [X[0] - c.p[0], X[1] - c.p[1], X[2] - c.p[2]];
  const z = d[0] * f[0] + d[1] * f[1] + d[2] * f[2]; if (z <= 0.05) return null;
  const th = Math.tan((c.fov * Math.PI) / 360), asp = 864 / 1536;
  const nx = (d[0] * r[0] + d[1] * r[1] + d[2] * r[2]) / (z * th * asp), ny = (d[0] * u[0] + d[1] * u[1] + d[2] * u[2]) / (z * th);
  return [W / 2 * (1 + nx), H / 2 * (1 - ny), z];
}

// ---------- 3D ----------
let K, S, THREE, ST, SCR, sets = {}, machines = [], crane = {}, mac = {}, chipData = [], lights = {};
export let stage;

export async function setup(kit, mode) {
  if (!kit) return;
  K = kit; THREE = kit.THREE; const { MAT } = kit;
  stage = kit.createStage({ bg: 0x15171b, fov: 42, bloom: 0.42, bloomThreshold: 0.85, env: { top: 3.5, left: 2.0, front: 0.8 }, envIntensity: 0.85, fogNear: 10, fogFar: 60, exposure: 1.0 });
  S = stage.scene;
  const { RoundedBoxGeometry } = await import("three/addons/geometries/RoundedBoxGeometry.js");

  // ------- materiais do galpão
  const noiseTex = (seed, base, spread, size = 256, rep = 1) => { const c = document.createElement("canvas"); c.width = c.height = size; const g = c.getContext("2d"); g.fillStyle = base; g.fillRect(0, 0, size, size);
    for (let i = 0; i < size * size / 6; i++) { const v = rnd(i * 1.37 + seed); g.fillStyle = `rgba(${v > 0.5 ? 255 : 0},${v > 0.5 ? 255 : 0},${v > 0.5 ? 255 : 0},${(rnd(i * 2.9 + seed) * spread).toFixed(3)})`; const s = 1 + rnd(i * 4.1 + seed) * 6; g.fillRect(rnd(i * 3.3 + seed) * size, rnd(i * 5.7 + seed) * size, s, s); }
    const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep, rep); t.colorSpace = THREE.SRGBColorSpace; return t; };
  const M = {
    hood: new THREE.MeshPhysicalMaterial({ color: 0x6f747b, metalness: 0.1, roughness: 0.5, clearcoat: 0.3 }),
    paint: new THREE.MeshPhysicalMaterial({ color: 0xa8acb1, metalness: 0.05, roughness: 0.5, clearcoat: 0.35, clearcoatRoughness: 0.35 }),
    graph: new THREE.MeshPhysicalMaterial({ color: 0x2a2c30, metalness: 0.2, roughness: 0.55, clearcoat: 0.2 }),
    inner: new THREE.MeshStandardMaterial({ color: 0x3a3e44, metalness: 0.4, roughness: 0.6 }),
    col: new THREE.MeshPhysicalMaterial({ color: 0x5c626b, metalness: 0.3, roughness: 0.6 }),
    truss: new THREE.MeshStandardMaterial({ color: 0x4a4f57, metalness: 0.4, roughness: 0.6 }),
    yellow: MAT.yellow(),
    line: new THREE.MeshStandardMaterial({ color: 0xc99a1f, roughness: 0.6 }),
    rubber: MAT.rubber(),
    chrome: MAT.chrome({ roughness: 0.15 }),
    steel: MAT.steel(),
    glass: new THREE.MeshPhysicalMaterial({ color: 0xdfe8f0, metalness: 0, roughness: 0.04, transparent: true, opacity: 0.16, envMapIntensity: 1.6 }),
    bin: new THREE.MeshPhysicalMaterial({ color: 0x3d4248, metalness: 0.5, roughness: 0.55 }),
    plate: new THREE.MeshPhysicalMaterial({ color: 0x4a4e55, metalness: 0.75, roughness: 0.55, map: noiseTex(3, "#8a8f98", 0.18, 256, 2) }),
    sling: new THREE.MeshStandardMaterial({ color: 0x3f6b45, roughness: 0.85 }),
    led: MAT.emissive(0xeef3ff, 3.2),
    ledIn: MAT.emissive(0xdde8ff, 2.4),
    sky: MAT.emissive(0xe8eef6, 0.75),
    door: MAT.emissive(0xd8dee6, 1.25),
    wall: new THREE.MeshStandardMaterial({ color: 0x2b2e33, roughness: 0.9 }),
    floor: new THREE.MeshPhysicalMaterial({ color: 0x70737a, metalness: 0.0, roughness: 0.42, clearcoat: 0.55, clearcoatRoughness: 0.25, map: noiseTex(7, "#9a9da3", 0.07, 512, 10) }),
  };
  const lamp = (c, i) => MAT.emissive(c, i), dim = (c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.35, metalness: 0.1 });
  ST = { cycOn: lamp(0x38e070, 2.6), cycOff: dim(0x123a20), gOn: lamp(0x38e070, 3.2), aOn: lamp(0xffa21f, 3.4), gOff: dim(0x0f2a18), aOff: dim(0x3a2608), rOff: dim(0x3a0e0e) };

  // telas do comando (G-code neutro) — verde e âmbar
  const screenTex = (state) => { const c = document.createElement("canvas"); c.width = 256; c.height = 192; const g = c.getContext("2d");
    g.fillStyle = "#0b1118"; g.fillRect(0, 0, 256, 192); g.fillStyle = state === "a" ? "#ffa21f" : "#38e070"; g.fillRect(0, 0, 256, 22);
    g.fillStyle = "#0b1118"; g.font = "bold 14px monospace"; g.fillText(state === "a" ? "M00  FEED HOLD" : "AUTO  CYCLE", 8, 16);
    g.font = "12px monospace"; const L = ["N100 G90 G54 G17", "N110 T04 M06", "N120 S3200 M03", "N130 G00 X-62. Y40.", "N140 G43 H04 Z5.", "N150 G01 Z-25. F600", "N160 X62. F950", "N170 Y-40."];
    L.forEach((l, i) => { g.fillStyle = i === 6 ? "#5aa2f5" : "#8a95a3"; g.fillText(l, 8, 42 + i * 18); });
    g.fillStyle = "#1c2733"; g.fillRect(150, 30, 98, 150); g.fillStyle = "#5aa2f5"; for (let i = 0; i < 4; i++) g.fillRect(158, 42 + i * 34, 70 - i * 12, 6);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return new THREE.MeshBasicMaterial({ map: t, color: new THREE.Color(1.25, 1.25, 1.25) }); };
  SCR = { g: screenTex("g"), a: screenTex("a") };

  sets.hall = new THREE.Group(); S.add(sets.hall);
  // geometrias estáticas fundidas por material
  const bag = new Map();
  const box = (mat, w, h, d, x, y, z, rx = 0, ry = 0, rz = 0) => { const g = new THREE.BoxGeometry(w, h, d); const o = new THREE.Object3D(); o.position.set(x, y, z); o.rotation.set(rx, ry, rz); o.updateMatrix(); g.applyMatrix4(o.matrix); if (!bag.has(mat)) bag.set(mat, []); bag.get(mat).push(g); };
  // piso, paredes, faixas
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(26, 90), M.floor); floor.rotation.x = -Math.PI / 2; floor.position.set(0, 0, -25); floor.receiveShadow = true; sets.hall.add(floor);
  for (const sx of [-1, 1]) {
    box(M.line, 0.1, 0.004, 70, sx * 2.15, 0.002, -22); box(M.line, 0.1, 0.004, 70, sx * 6.1, 0.002, -22);
    box(M.wall, 0.2, 13, 90, sx * 12.5, 6.5, -25);
    box(M.sky, 0.05, 1.6, 80, sx * 12.38, 8.6, -25);
  }
  box(M.wall, 26, 13, 0.3, 0, 6.5, -56); box(M.door, 5, 6, 0.05, 0, 3, -55.8); box(M.door, 3.5, 1.4, 0.05, -7, 9, -55.8); box(M.door, 3.5, 1.4, 0.05, 7, 9, -55.8);
  // colunas, vigas de rolamento, treliças do telhado, telhado, lanternins
  for (let z = 8; z >= -52; z -= 6) {
    for (const sx of [-1, 1]) { box(M.col, 0.36, 12, 0.36, sx * 8.2, 6, z); box(M.col, 0.5, 0.3, 0.6, sx * 7.9, 8.1, z); }
    box(M.truss, 16.6, 0.18, 0.18, 0, 12, z); box(M.truss, 16.6, 0.14, 0.14, 0, 10.7, z);
    for (let x = -8; x < 8; x += 2) { box(M.truss, 0.09, 1.3, 0.09, x, 11.35, z); const L2 = Math.hypot(2, 1.3); box(M.truss, 0.08, L2, 0.08, x + 1, 11.35, z, 0, 0, Math.atan2(2, 1.3) * (Math.floor(x / 2) % 2 ? 1 : -1)); }
  }
  for (const sx of [-1, 1]) box(M.col, 0.4, 0.55, 64, sx * 7.7, 8.5, -22);
  box(M.wall, 26, 0.2, 90, 0, 12.7, -25);
  for (const sx of [-1, 1]) box(M.sky, 0.9, 0.05, 66, sx * 3.6, 12.58, -22);
  // luminárias tubulares (carcaça + tubo emissivo)
  for (let z = 6; z >= -46; z -= 4) for (const x of [-3.7, 0, 3.7]) { box(M.graph, 0.32, 0.08, 2.5, x, 9.62, z); const g = new THREE.CylinderGeometry(0.035, 0.035, 2.3, 10); g.rotateX(Math.PI / 2); g.translate(x, 9.55, z); if (!bag.has(M.led)) bag.set(M.led, []); bag.get(M.led).push(g); }
  // cones de luz (névoa) sob os lanternins
  const shaftTex = (() => { const c = document.createElement("canvas"); c.width = 64; c.height = 256; const g = c.getContext("2d"); const gr = g.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, "rgba(255,255,255,0.9)"); gr.addColorStop(1, "rgba(255,255,255,0)"); g.fillStyle = gr; g.fillRect(0, 0, 64, 256); const gx = g.createLinearGradient(0, 0, 64, 0); gx.addColorStop(0, "rgba(0,0,0,1)"); gx.addColorStop(0.5, "rgba(0,0,0,0)"); gx.addColorStop(1, "rgba(0,0,0,1)"); g.globalCompositeOperation = "destination-out"; g.fillStyle = gx; g.fillRect(0, 0, 64, 256); return new THREE.CanvasTexture(c); })();
  const shaftMat = new THREE.MeshBasicMaterial({ map: shaftTex, transparent: true, opacity: 0.05, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, color: 0xdfe8f2 });
  for (let i = 0; i < 9; i++) { const sh = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 12.5), shaftMat); const sx = i % 2 ? 1 : -1; sh.position.set(sx * 3.3, 6.2, 4 - i * 6.2); sh.rotation.set(0, 0.35 * sx, 0.12 * sx); sets.hall.add(sh); }

  // ------- centro de usinagem vertical
  const rbody = new RoundedBoxGeometry(2.6, 2.2, 1.25, 3, 0.05);
  function buildMachine(m, idx) {
    const g = new THREE.Group(); g.position.set(m.x, 0, m.z); g.rotation.y = m.r;
    const add = (geo, mat, x, y, z, cast = true) => { const o = new THREE.Mesh(geo, mat); o.position.set(x, y, z); o.castShadow = cast; o.receiveShadow = true; g.add(o); return o; };
    const B = (w, h, d) => new THREE.BoxGeometry(w, h, d);
    add(rbody, M.paint, 0, 1.35, -0.48);                          // corpo traseiro
    add(new RoundedBoxGeometry(1.1, 0.55, 1.0, 2, 0.04), M.hood, -0.35, 2.7, -0.55);   // capô da coluna
    add(B(0.5, 0.3, 0.3), M.graph, -0.35, 2.6, -1.15);
    add(B(2.6, 0.25, 2.15), M.graph, 0, 0.125, -0.07);             // rodapé
    // moldura frontal em volta da janela (janela x[-0.95,0.35] y[0.95,1.95])
    add(B(0.35, 2.2, 0.75), M.paint, -1.125, 1.35, 0.6);
    add(B(0.95, 2.2, 0.75), M.paint, 0.825, 1.35, 0.6);
    add(B(1.3, 0.5, 0.75), M.paint, -0.3, 2.2, 0.6);
    add(B(1.3, 0.7, 0.75), M.paint, -0.3, 0.6, 0.6);
    add(B(2.62, 0.22, 0.04), M.graph, 0, 2.33, 0.99);              // faixa superior escura
    add(B(2.62, 0.05, 0.04), M.graph, 0, 0.27, 0.99);
    // gaxeta da janela
    const gk = 0.035; add(B(1.3 + gk * 2, gk, 0.03), M.rubber, -0.3, 1.95 + gk / 2, 0.985, false); add(B(1.3 + gk * 2, gk, 0.03), M.rubber, -0.3, 0.95 - gk / 2, 0.985, false);
    add(B(gk, 1.0, 0.03), M.rubber, -0.95 - gk / 2, 1.45, 0.985, false); add(B(gk, 1.0, 0.03), M.rubber, 0.35 + gk / 2, 1.45, 0.985, false);
    add(new THREE.PlaneGeometry(1.3, 1.0), M.glass, -0.3, 1.45, 0.975, false);
    // interior: forro escuro, LED, cabeçote, mesa, morsa, peça
    add(B(1.3, 1.0, 0.02), M.inner, -0.3, 1.45, 0.24, false);
    add(B(0.02, 1.0, 0.75), M.inner, -0.94, 1.45, 0.6, false); add(B(0.02, 1.0, 0.75), M.inner, 0.34, 1.45, 0.6, false);
    add(B(1.3, 0.02, 0.75), M.inner, -0.3, 0.96, 0.6, false);
    add(B(1.1, 0.03, 0.03), M.ledIn, -0.3, 1.92, 0.92, false);
    add(B(0.36, 0.55, 0.32), M.graph, -0.35, 1.78, 0.48);
    add(new THREE.CylinderGeometry(0.075, 0.075, 0.12, 20), M.steel, -0.35, 1.45, 0.52);
    add(new THREE.CylinderGeometry(0.05, 0.03, 0.08, 16), M.chrome, -0.35, 1.35, 0.52);
    add(new THREE.CylinderGeometry(0.012, 0.012, 0.09, 10), M.chrome, -0.35, 1.27, 0.52);
    add(B(1.0, 0.07, 0.42), M.steel, -0.3, 1.0, 0.55);
    add(B(0.34, 0.09, 0.16), M.graph, -0.35, 1.08, 0.55);
    add(B(0.2, 0.06, 0.12), M.steel, -0.35, 1.15, 0.55);
    // puxador
    add(new THREE.CylinderGeometry(0.018, 0.018, 0.75, 12), M.chrome, 0.47, 1.45, 1.05);
    add(B(0.03, 0.03, 0.06), M.chrome, 0.47, 1.78, 1.02); add(B(0.03, 0.03, 0.06), M.chrome, 0.47, 1.12, 1.02);
    // comando CNC
    add(B(0.5, 0.74, 0.1), M.graph, 0.86, 1.5, 1.03);
    const scr = add(new THREE.PlaneGeometry(0.38, 0.285), SCR.g, 0.86, 1.64, 1.081, false);
    const cyc = add(new THREE.CylinderGeometry(0.028, 0.028, 0.02, 16), ST.cycOff, 0.74, 1.27, 1.085, false); cyc.rotation.x = Math.PI / 2;
    const es = add(new THREE.CylinderGeometry(0.045, 0.04, 0.035, 20), new THREE.MeshPhysicalMaterial({ color: 0xa8201c, roughness: 0.4, clearcoat: 0.6 }), 0.99, 1.27, 1.09, false); es.rotation.x = Math.PI / 2;
    for (let i = 0; i < 3; i++) add(B(0.07, 0.04, 0.012), M.rubber, 0.71 + i * 0.1, 1.4, 1.085, false);
    // torre de sinalização
    const [sx, sy, sz] = STACK;
    add(new THREE.CylinderGeometry(0.018, 0.018, 0.25, 10), M.graph, sx, 2.57, sz);
    const seg3 = (mat, y) => add(new THREE.CylinderGeometry(0.05, 0.05, 0.1, 18), mat, sx, y, sz, false);
    const green = seg3(ST.gOn, 2.75), amber = seg3(ST.aOff, 2.855); seg3(ST.rOff, 2.96); add(new THREE.CylinderGeometry(0.05, 0.05, 0.03, 18), M.graph, sx, 3.025, sz);
    // transportador de cavaco + contentor, armário elétrico, tanque
    const conv = add(B(1.3, 0.28, 0.42), M.paint, -1.85, 0.6, -0.3); conv.rotation.z = -0.45;
    add(B(0.25, 0.25, 0.42), M.graph, -1.3, 0.25, -0.3);
    add(B(0.62, 0.5, 0.58), M.bin, -2.5, 0.25, -0.3);
    add(B(0.95, 2.0, 0.5), M.paint, 0.7, 1.0, -1.35); add(B(0.02, 1.7, 0.02), M.graph, 0.7, 1.0, -1.1);
    add(B(1.1, 0.55, 0.5), M.graph, -0.6, 0.275, -1.4);
    // demarcação amarela no piso
    const ly = 0.003, lw = 0.08; [[-2.95, 1.75], [1.75, 1.75]].forEach(() => {});
    add(B(4.9, 0.004, lw), M.line, -0.6, ly, 1.75, false); add(B(4.9, 0.004, lw), M.line, -0.6, ly, -1.9, false);
    add(B(lw, 0.004, 3.65), M.line, -3.05, ly, -0.075, false); add(B(lw, 0.004, 3.65), M.line, 1.85, ly, -0.075, false);
    sets.hall.add(g);
    return { g, green, amber, scr, cyc };
  }
  MACH.forEach((m, i) => machines.push(buildMachine(m, i)));
  // carrinho de ferramentas e paletes de barras (props)
  box(M.graph, 0.8, 1.0, 0.5, -2.6, 0.5, -5.6); box(M.steel, 0.7, 0.05, 0.45, -2.6, 1.02, -5.6);
  box(new THREE.MeshStandardMaterial({ color: 0x6b5a44, roughness: 0.9 }), 1.2, 0.14, 1.0, 1.4, 0.07, -24);
  for (let i = 0; i < 9; i++) box(M.steel, 0.07, 0.07, 1.1, 1.0 + i * 0.1, 0.18, -24);
  for (const [x, z] of [[2.0, -9.2], [-2.0, -13.8], [2.0, -18.4], [-2.1, 0.0]]) { box(M.graph, 0.6, 0.9, 0.45, x, 0.45, z); box(M.yellow, 0.62, 0.05, 0.47, x, 0.92, z); }
  for (const [x, z] of [[-6.8, -4], [6.8, -10], [-6.8, -20], [6.8, -2]]) { box(new THREE.MeshStandardMaterial({ color: 0x5e5040, roughness: 0.9 }), 1.2, 0.14, 1.0, x, 0.07, z); box(M.bin, 1.1, 0.7, 0.9, x, 0.5, z); }
  for (const [mat, list] of bag) { const mm = new THREE.Mesh(kit.mergeGeometries(list), mat); mm.castShadow = mat !== M.sky && mat !== M.door && mat !== M.led && mat !== M.line; mm.receiveShadow = true; sets.hall.add(mm); }

  // ------- ponte rolante com chapa
  crane.bridge = new THREE.Group(); sets.hall.add(crane.bridge);
  const cb = (mat, w, h, d, x, y, z, parent = crane.bridge) => { const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); o.position.set(x, y, z); o.castShadow = true; parent.add(o); return o; };
  cb(M.yellow, 15.4, 0.75, 0.32, 0, 9.15, -0.55); cb(M.yellow, 15.4, 0.75, 0.32, 0, 9.15, 0.55);
  cb(M.yellow, 0.6, 0.5, 2.8, -7.7, 9.05, 0); cb(M.yellow, 0.6, 0.5, 2.8, 7.7, 9.05, 0);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) { const w = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.12, 16), M.graph); w.rotation.x = Math.PI / 2; w.rotation.z = Math.PI / 2; w.position.set(sx * 7.7, 8.85, sz * 1.1); crane.bridge.add(w); }
  crane.trolley = new THREE.Group(); crane.bridge.add(crane.trolley);
  cb(M.yellow, 1.3, 0.5, 1.5, 0, 9.78, 0, crane.trolley);
  const drum = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 1.0, 20), M.graph); drum.rotation.z = Math.PI / 2; drum.position.set(0, 9.6, 0); crane.trolley.add(drum);
  const plateY = 3.95;
  for (const dz of [-0.12, 0.12]) { const c = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 9.4 - plateY - 1.75, 6), M.steel); c.position.set(0, (9.4 + plateY + 1.75) / 2, dz); crane.trolley.add(c); }
  const hb = cb(M.yellow, 0.36, 0.42, 0.22, 0, plateY + 1.6, 0, crane.trolley);
  const hook = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.025, 8, 16, Math.PI * 1.5), M.steel); hook.position.set(0, plateY + 1.3, 0); crane.trolley.add(hook);
  const plate = cb(M.plate, 2.4, 0.06, 1.2, 0, plateY, 0, crane.trolley);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const a = new THREE.Vector3(0, plateY + 1.25, 0), b = new THREE.Vector3(sx * 1.08, plateY + 0.03, sz * 0.52);
    const s = new THREE.Mesh(new THREE.BoxGeometry(0.05, a.distanceTo(b), 0.012), M.sling); s.position.copy(a).add(b).multiplyScalar(0.5);
    s.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.clone().sub(a).normalize()); s.castShadow = true; crane.trolley.add(s);
  }

  // ------- luzes do galpão
  lights.hemi = new THREE.HemisphereLight(0xdfe7f2, 0x3a3b3e, 1.0); S.add(lights.hemi);
  lights.key = new THREE.DirectionalLight(0xf4f6fa, 2.4); lights.key.position.set(5, 24, -2); lights.key.target.position.set(0, 0, -16); S.add(lights.key, lights.key.target);
  lights.key.castShadow = true; lights.key.shadow.mapSize.set(2048, 2048); Object.assign(lights.key.shadow.camera, { left: -16, right: 16, top: 30, bottom: -30, near: 1, far: 60 }); lights.key.shadow.bias = -0.0005; lights.key.shadow.normalBias = 0.03; lights.key.shadow.camera.updateProjectionMatrix();
  lights.fill = new THREE.DirectionalLight(0xc8d6ea, 0.35); lights.fill.position.set(-6, 5, 10); S.add(lights.fill);

  // ------- set macro (x = 200; 1 unidade = 100 mm)
  sets.mac = new THREE.Group(); sets.mac.position.x = 200; S.add(sets.mac);
  const mc = (geo, mat, x, y, z, cast = true) => { const o = new THREE.Mesh(geo, mat); o.position.set(x, y, z); o.castShadow = cast; o.receiveShadow = true; sets.mac.add(o); return o; };
  const table = mc(new THREE.BoxGeometry(6, 0.35, 3), MAT.darkSteel({ color: 0x303338, roughness: 0.4 }), 0, -0.62, 0);
  for (let i = -3; i <= 3; i++) mc(new THREE.BoxGeometry(6, 0.02, 0.12), MAT.rubber({ color: 0x0c0d0e }), 0, -0.44, i * 0.42, false);
  mc(new THREE.BoxGeometry(1.9, 0.26, 1.2), MAT.paint(0x3a3e44, { metalness: 0.6 }), 0, -0.32, 0);
  const jawM = MAT.steel({ roughness: 0.28 });
  mc(new THREE.BoxGeometry(0.2, 0.32, 1.0), jawM, -0.72, -0.04, 0); mc(new THREE.BoxGeometry(0.2, 0.32, 1.0), jawM, 0.72, -0.04, 0);
  mc(new THREE.BoxGeometry(1.25, 0.1, 0.08), MAT.steel({ roughness: 0.2 }), 0, -0.2, 0.3);
  const blotch = (() => { const c = document.createElement("canvas"); c.width = c.height = 512; const g = c.getContext("2d"); g.fillStyle = "#6d7178"; g.fillRect(0, 0, 512, 512); g.filter = "blur(14px)";
    for (let i = 0; i < 120; i++) { const v = rnd(i * 2.3) > 0.5 ? "rgba(40,44,52,0.35)" : "rgba(150,140,130,0.18)"; g.fillStyle = v; g.beginPath(); g.ellipse(rnd(i * 4.7) * 512, rnd(i * 6.1) * 512, 20 + rnd(i * 1.1) * 60, 10 + rnd(i * 8.8) * 40, rnd(i) * 3, 0, 7); g.fill(); }
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })();
  const scale = new THREE.MeshPhysicalMaterial({ color: 0x8a8e95, roughness: 0.62, metalness: 0.55, map: blotch });
  const feedTex = (() => { const c = document.createElement("canvas"); c.width = 512; c.height = 128; const g = c.getContext("2d"); g.fillStyle = "#b8bcc2"; g.fillRect(0, 0, 512, 128); for (let x = 0; x < 512; x += 3) { const v = 150 + rnd(x) * 70; g.fillStyle = `rgb(${v},${v},${v + 4})`; g.fillRect(x, 0, 1.4, 128); } const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })();
  const cutM = new THREE.MeshPhysicalMaterial({ color: 0xe2e6ea, metalness: 0.65, roughness: 0.3, map: feedTex });
  mac.block = mc(new THREE.BoxGeometry(1.2, 0.3, 0.8), [scale, scale, scale, scale, cutM, scale], 0, 0, 0);
  mac.stock = mc(new THREE.BoxGeometry(1, 0.3, 0.025), scale, 0, 0, 0.4125);
  // ferramenta: fresa Ø12 TiAlN + porta-ferramenta + nariz do eixo
  const flute = (blur) => { const c = document.createElement("canvas"); c.width = 128; c.height = 256; const g = c.getContext("2d"); g.fillStyle = "#8d7385"; g.fillRect(0, 0, 128, 256); if (blur) g.filter = "blur(5px)"; g.strokeStyle = "#2a2230"; g.lineWidth = 12; for (let k = -6; k < 10; k++) { g.beginPath(); g.moveTo(0, k * 40); g.lineTo(128, k * 40 + 70); g.stroke(); } const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(2, 1); return t; };
  mac.toolSharp = new THREE.MeshPhysicalMaterial({ map: flute(false), metalness: 0.95, roughness: 0.28, color: 0xc9b2c8 });
  mac.toolBlur = new THREE.MeshPhysicalMaterial({ map: flute(true), metalness: 0.95, roughness: 0.38, color: 0xc9b2c8 });
  mac.head = new THREE.Group(); sets.mac.add(mac.head);
  mac.tool = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.5, 40), mac.toolSharp); mac.tool.position.y = 0.25; mac.tool.castShadow = true; mac.head.add(mac.tool);
  const shank = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.25, 32), MAT.chrome({ roughness: 0.25 })); shank.position.y = 0.62; mac.head.add(shank);
  const hc = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.1, 0.4, 40), MAT.darkSteel({ color: 0x5a5e64, roughness: 0.3, metalness: 1 })); hc.position.y = 0.9; mac.head.add(hc);
  const fl = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.16, 48), MAT.darkSteel({ color: 0x2b2d31 })); fl.position.y = 1.18; mac.head.add(fl);
  const nose = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.8, 48), MAT.paint(0x26292d)); nose.position.y = 1.66; mac.head.add(nose);
  mac.head.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  // mangueira de refrigerante articulada + jato
  const hoseM = MAT.paint(0x2c2f34, { roughness: 0.35 });
  for (let i = 0; i < 18; i++) { const u = i / 17; const s = new THREE.Mesh(new THREE.SphereGeometry(0.02, 10, 8), hoseM); s.position.set(lerp(-0.4, -0.2, u) - Math.sin(u * Math.PI) * 0.1, lerp(1.1, 0.46, u), lerp(-0.2, -0.1, u)); s.castShadow = true; mac.head.add(s); }
  const tip = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.025, 0.08, 12), MAT.chrome({ roughness: 0.3 })); tip.position.set(-0.18, 0.43, -0.09); tip.rotation.set(-0.4, 0, 0.75); mac.head.add(tip);
  { const a = new THREE.Vector3(-0.17, 0.41, -0.08), b = new THREE.Vector3(-0.02, 0.18, 0.03); mac.jet = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.009, a.distanceTo(b), 10), new THREE.MeshPhysicalMaterial({ color: 0xf3f5f7, transparent: true, opacity: 0.35, roughness: 0.1 })); mac.jet.position.copy(a).add(b).multiplyScalar(0.5); mac.jet.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.clone().sub(a).normalize()); mac.head.add(mac.jet); }
  // fundo do interior, LED e vidro com gotas
  mc(new THREE.PlaneGeometry(12, 6), MAT.paint(0x1d1f23, { roughness: 0.75 }), 0, 1, -2.4, false);
  mc(new THREE.BoxGeometry(5, 0.05, 0.05), M.ledIn, 0, 2.5, -1.6, false);
  const dropTex = (() => { const c = document.createElement("canvas"); c.width = 512; c.height = 1024; const g = c.getContext("2d");
    g.filter = "blur(1.5px)";
    for (let i = 0; i < 260; i++) { const x = rnd(i * 3.1) * 512, y = rnd(i * 7.3) * 1024, r = 1.5 + Math.pow(rnd(i * 1.9), 3) * 7; const gr = g.createRadialGradient(x - r * 0.35, y - r * 0.35, 0, x, y, r); gr.addColorStop(0, "rgba(255,255,255,0.55)"); gr.addColorStop(0.6, "rgba(220,230,240,0.12)"); gr.addColorStop(1, "rgba(220,230,240,0)"); g.fillStyle = gr; g.beginPath(); g.ellipse(x, y, r * 0.8, r, 0, 0, 7); g.fill(); }
    const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; return t; })();
  mac.glass = mc(new THREE.PlaneGeometry(2.4, 4.8), new THREE.MeshBasicMaterial({ map: dropTex, transparent: true, opacity: 0.6, depthWrite: false }), 0.4, 0.6, 1.5, false);
  mac.glass.rotation.x = -0.12;
  // cavacos de aço: curtos, escuros (marrom-azulados)
  const chipGeo = new THREE.TorusGeometry(0.014, 0.005, 4, 8, 1.9);
  mac.chips = new THREE.InstancedMesh(chipGeo, new THREE.MeshPhysicalMaterial({ metalness: 0.85, roughness: 0.38, color: 0xffffff }), 180); mac.chips.castShadow = true; sets.mac.add(mac.chips);
  const cc = [new THREE.Color(0x4a3a2e), new THREE.Color(0x3a4150), new THREE.Color(0x40362f), new THREE.Color(0x2c2a2a)];
  for (let i = 0; i < 180; i++) { mac.chips.setColorAt(i, cc[i % 4]); chipData.push({ up: 0.5 + rnd(i * 1.3) * 1.3, out: 0.9 + rnd(i * 2.7) * 1.6, side: (rnd(i * 3.9) - 0.5) * 1.8, sp: (rnd(i * 5.1) - 0.5) * 40, ax: new THREE.Vector3(rnd(i * 6.1) - 0.5, rnd(i * 7.7) - 0.5, rnd(i * 8.3) - 0.5).normalize(), s: 0.8 + rnd(i * 9.1) * 0.7 }); }
  lights.mKey = new THREE.DirectionalLight(0xffffff, 3.2); lights.mKey.position.set(197.5, 5, 3); lights.mKey.target.position.set(200, 0, 0); S.add(lights.mKey, lights.mKey.target);
  lights.mKey.castShadow = true; lights.mKey.shadow.mapSize.set(1024, 1024); Object.assign(lights.mKey.shadow.camera, { left: -3, right: 3, top: 3, bottom: -3, near: 1, far: 15 }); lights.mKey.shadow.camera.updateProjectionMatrix();
  lights.mRim = kit.rimLight(S, { pos: [202.5, 1.6, -2.2], intensity: 8, color: 0x8fb4e8, target: [200, 0.1, 0] });
  lights.mFill = new THREE.DirectionalLight(0xdfe6f0, 1.1); lights.mFill.position.set(203, 2, 5); lights.mFill.target.position.set(200, 0, 0); S.add(lights.mFill, lights.mFill.target);
}

function setHall(on) {
  sets.hall.visible = on; sets.mac.visible = !on;
  lights.key.visible = lights.hemi.visible = lights.fill.visible = on;
  lights.mKey.visible = lights.mRim.visible = lights.mFill.visible = !on;
  S.background = new THREE.Color(on ? 0x2a2d33 : 0x101114);
  S.fog = on ? new THREE.Fog(0x2a2d33, 7, 52) : null;
  stage.bloom.strength = on ? 0.42 : 0.3;
}
function heroState(t) { return t >= AMBER_AT && t < GREEN_AT ? "a" : "g"; }

function macro(t) {
  // corte: S3 4,6–6,6 avança x de -0,55 a 0,0; parada 6,6+; retomada 23,4–24,4
  const inS3 = t < T.s11;
  let spin, cutX, engaged, coolant, chipsOn, chipT0, chipT1;
  if (inS3) { spin = 1; cutX = lerp(-0.55, 0.0, seg(t, T.s3, T.s4)); engaged = 1; coolant = 1; chipT0 = T.s3 - 1; chipT1 = T.s4 + 0.1; }
  else { spin = E.inCubic(seg(t, T.s11b, 23.95)); engaged = E.inOutCubic(seg(t, 23.55, 23.9)); cutX = lerp(-0.85, 0.0, engaged) + seg(t, 23.9, T.hall) * 0.12; coolant = t > 23.6 ? 1 : 0; chipT0 = 23.85; chipT1 = 99; }
  mac.head.position.set(cutX, -0.1, 0.4 + 0.06 - 0.015 + (1 - engaged) * 0.25);
  mac.tool.material = spin > 0.5 ? mac.toolBlur : mac.toolSharp;
  mac.tool.rotation.y = -(inS3 ? t * 37 : 37 * Math.max(0, t - 23.95) + 12 * E.inCubic(seg(t, T.s11b, 23.95)));
  mac.stock.scale.x = Math.max(0.0001, 0.6 - (cutX + 0.06)); mac.stock.position.x = (cutX + 0.06 + 0.6) / 2;
  mac.jet.visible = coolant > 0;
  mac.glass.material.map.offset.y = t * 0.035;
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), pos = new THREE.Vector3(), scl = new THREE.Vector3();
  const P = 0.6;
  for (let i = 0; i < 180; i++) {
    const d = chipData[i], ph = (i / 180) * P, birth = Math.floor((t - ph) / P) * P + ph, age = t - birth;
    const live = t > chipT0 && birth >= chipT0 && birth < chipT1 && age < P;
    if (!live) { scl.set(0, 0, 0); m4.compose(pos.set(0, -9, 0), q, scl); mac.chips.setMatrixAt(i, m4); continue; }
    const bx = inS3 ? lerp(-0.55, 0.0, seg(birth, T.s3, T.s4)) : cutX;
    pos.set(bx + 0.04 + d.side * age * 0.6, 0.06 + d.up * age - 4.9 * age * age, 0.45 + d.out * age * 0.6);
    q.setFromAxisAngle(d.ax, d.sp * age + i); scl.setScalar(i % 2 ? 0 : d.s * 0.75);
    m4.compose(pos, q, scl); mac.chips.setMatrixAt(i, m4);
  }
  mac.chips.instanceMatrix.needsUpdate = true;
}

export function render3d(t) {
  const is3d = t < T.v1 || (t >= T.s11 && t < T.sig);
  if (!is3d) return false;
  const c = camAt(t);
  const isMac = (t >= T.s3 && t < T.s4) || (t >= T.s11b && t < T.hall);
  setHall(!isMac);
  if (isMac) macro(t);
  else {
    const cr = craneAt(t); crane.bridge.position.z = cr.z; crane.trolley.position.x = cr.x;
    const st = heroState(t), h = machines[HERO];
    h.green.material = st === "a" ? ST.gOff : ST.gOn; h.amber.material = st === "a" ? ST.aOn : ST.aOff;
    h.scr.material = SCR[st]; h.cyc.material = t >= 22.62 && t < T.s11b ? ST.cycOn : ST.cycOff;
  }
  stage.look(c.p, c.tg, c.fov);
  return true;
}

// ---------- 2D ----------
const AMB = "#e8a33a", GRN = "#38c06a";
function label(s, t, t0, t1) {
  const a = seg(t, t0, t0 + 0.25) * (1 - seg(t, t1 - 0.2, t1)); if (a <= 0) return;
  ctx.save(); ctx.globalAlpha = a;
  ctx.fillStyle = C.brand; ctx.fillRect(84, 316, 40 * E.outCubic(seg(t, t0, t0 + 0.4)), 3);
  txt(s, 84, 296, { font: F.m(30), color: C.ink, align: "left", ls: 8 });
  ctx.restore();
}
function fitFont(s, size, maxW, kind = "d", w = 500) { let f = kind === "d" ? F.d(size) : F.b(size, w); while (measure(s, f) > maxW && size > 20) { size -= 2; f = kind === "d" ? F.d(size) : F.b(size, w); } return f; }
function caption(s, t, t0, t1, y = 1560) {
  const a = seg(t, t0, t0 + 0.3) * (1 - seg(t, t1 - 0.3, t1)); if (a <= 0) return;
  const font = F.b(40, 500);
  if (measure(s, font) <= 920) { txt(s, W / 2, y, { font, color: C.ink, alpha: a }); return; }
  const ws = s.split(" "); let best = 1, bd = 1e9;
  for (let i = 1; i < ws.length; i++) { const d = Math.abs(measure(ws.slice(0, i).join(" "), font) - measure(ws.slice(i).join(" "), font)); if (d < bd) { bd = d; best = i; } }
  txt(ws.slice(0, best).join(" "), W / 2, y - 26, { font, color: C.ink, alpha: a }); txt(ws.slice(best).join(" "), W / 2, y + 28, { font, color: C.ink, alpha: a });
}
function corners(a = 0.5) {
  ctx.save(); ctx.strokeStyle = `rgba(238,242,247,${a})`; ctx.lineWidth = 2; const m = 48, L = 36;
  for (const [x, y, sx, sy] of [[m, 120, 1, 1], [W - m, 120, -1, 1], [m, H - 120, 1, -1], [W - m, H - 120, -1, -1]]) { ctx.beginPath(); ctx.moveTo(x, y + sy * L); ctx.lineTo(x, y); ctx.lineTo(x + sx * L, y); ctx.stroke(); }
  ctx.restore();
}
function bigTitle(lines, t, t0, t1, y, size = 104) {
  const font = lines.reduce((f, l) => { const g = fitFont(l, size, 940); return parseInt(g) < parseInt(f) ? g : f; }, F.d(size));
  // sombra suave para leitura sobre o 3D
  const a = seg(t, t0, t0 + 0.3) * (1 - seg(t, t1 - 0.25, t1));
  if (a > 0) { const gr = ctx.createLinearGradient(0, y - 260, 0, y + 260); gr.addColorStop(0, "rgba(0,0,0,0)"); gr.addColorStop(0.5, `rgba(0,0,0,${0.45 * a})`); gr.addColorStop(1, "rgba(0,0,0,0)"); ctx.fillStyle = gr; ctx.fillRect(0, y - 260, W, 520); }
  title(lines, W / 2, y, t, t0, t1, { font, color: C.ink, lh: parseInt(font) * 0.98 });
}
function panel(x, y, w, h, o = {}) { ctx.save(); rrect(x, y, w, h, o.r ?? 14); ctx.fillStyle = o.fill || "#131417"; ctx.fill(); ctx.strokeStyle = o.stroke || "#2a2a2d"; ctx.lineWidth = 2; ctx.stroke(); ctx.restore(); }
function dot(x, y, r, c, glow = 0) { ctx.save(); ctx.fillStyle = c; if (glow) { ctx.shadowColor = c; ctx.shadowBlur = glow; } ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill(); ctx.restore(); }
function vbg(t) { background(t, { glow: 0.3, gridAlpha: 0.035, speed: 10, glowY: 860 }); }
function vWord(t, i, L, t0, t1) {
  const w = L.words[i], font = fitFont(w, 170, 920);
  title(w, W / 2, 1450, t, t0 + 0.12, t1, { font, color: C.ink, inDur: 0.25, outDur: 0.15 });
  txt(`0${i + 1} / 05`, 84, 296, { font: F.m(28), color: C.soft, align: "left", ls: 8, alpha: seg(t, t0, t0 + 0.2) });
  ctx.fillStyle = C.brand; ctx.fillRect(84, 316, 40 * E.outCubic(seg(t, t0, t0 + 0.4)), 3);
  caption(L.subs[i], t, t0 + 0.35, t1);
}
function paperSheet(x, y, w, h, rot, a, seed) {
  ctx.save(); ctx.globalAlpha *= a; ctx.translate(x + w / 2, y + h / 2); ctx.rotate(rot); ctx.translate(-w / 2, -h / 2);
  ctx.shadowColor = "rgba(0,0,0,0.5)"; ctx.shadowBlur = 24; ctx.shadowOffsetY = 8; ctx.fillStyle = "#c9ccd0"; ctx.fillRect(0, 0, w, h); ctx.shadowColor = "transparent";
  ctx.strokeStyle = "rgba(30,32,36,0.75)"; ctx.lineWidth = 1.5; ctx.strokeRect(10, 10, w - 20, h - 20);
  ctx.strokeRect(24, 30, w * 0.45, h * 0.42); ctx.beginPath(); ctx.arc(24 + w * 0.225, 30 + h * 0.21, h * 0.08, 0, 7); ctx.stroke();
  ctx.fillStyle = "rgba(40,42,46,0.45)"; for (let i = 0; i < 5; i++) ctx.fillRect(w * 0.56, 34 + i * 18, w * (0.2 + rnd(seed + i) * 0.18), 5);
  for (let i = 0; i < 3; i++) ctx.fillRect(24, h * 0.62 + i * 16, w * (0.3 + rnd(seed * 3 + i) * 0.4), 4);
  ctx.strokeRect(w - 170, h - 64, 150, 46);
  ctx.strokeStyle = "rgba(90,90,96,0.6)"; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.ellipse(24 + w * 0.225, 30 + h * 0.21, h * 0.14, h * 0.11, 0.3, 0.3, 5.9); ctx.stroke();
  ctx.restore();
}

function vQuotes(t, L) {
  const k = t - T.v1; vbg(t);
  const a = E.outCubic(seg(k, 0, 0.3));
  ctx.save(); ctx.globalAlpha = a; ctx.translate(0, (1 - a) * 30);
  const x0 = 100, y0 = 420, w = 880, h = 560;
  panel(x0, y0, w, h);
  [0, 1, 2].forEach((i) => dot(x0 + 28 + i * 24, y0 + 26, 7, "#3a3b40"));
  txt("ORC_2231_final_v3 (2)", x0 + 110, y0 + 34, { font: F.m(20, 400), color: C.muted, align: "left" });
  ctx.fillStyle = "#0e0f11"; ctx.fillRect(x0 + 2, y0 + 54, w - 4, 44);
  txt("G6", x0 + 22, y0 + 84, { font: F.m(20), color: C.muted, align: "left" }); txt("fx  =E6*D6+??", x0 + 110, y0 + 84, { font: F.m(20, 400), color: C.ink, align: "left" });
  const cw = [150, 200, 160, 150, 176], gy = y0 + 100, rh = 50;
  let cx = x0 + 22;
  ctx.font = F.m(18); L.qCols.forEach((s, i) => { ctx.fillStyle = "#1b1c20"; ctx.fillRect(cx, gy, cw[i] - 2, rh - 2); txt(s, cx + 12, gy + 32, { font: F.m(18), color: C.muted, align: "left" }); cx += cw[i]; });
  const rows = [["BL-1045", "SAE 1045", "?", "—", "?"], ["EX-0220", "AISI 4140", "—", "?", "—"], ["FL-0080", "AL 6061", "?", "?", "?"], ["BL-1045B", "SAE 1045", "—", "—", "?"], ["CH-0310", "ASTM A36", "?", "—", "—"], ["", "", "", "", ""], ["", "", "", "", ""]];
  rows.forEach((r, ri) => { cx = x0 + 22; r.forEach((s, ci) => { const y = gy + (ri + 1) * rh; ctx.strokeStyle = "#232428"; ctx.lineWidth = 1; ctx.strokeRect(cx + 0.5, y + 0.5, cw[ci] - 2, rh - 2);
    const warn = (s === "?" && (ri + ci) % 3 === 0); if (warn) { ctx.fillStyle = "rgba(232,163,58,0.14)"; ctx.fillRect(cx + 1, y + 1, cw[ci] - 4, rh - 4); }
    txt(s, cx + 12, y + 32, { font: F.m(19, 400), color: warn ? AMB : s === "—" || s === "?" ? "#6a6b72" : C.ink, align: "left" }); cx += cw[ci]; }); });
  // célula sendo digitada
  const typed = "3,5".slice(0, Math.floor(seg(k, 0.35, 1.1) * 4)); const cy = gy + 6 * rh; const cxx = x0 + 22 + cw[0] + cw[1];
  ctx.strokeStyle = C.brand; ctx.lineWidth = 2; ctx.strokeRect(cxx + 1, cy + 1, cw[2] - 4, rh - 4);
  txt(typed + (Math.floor(t * 4) % 2 ? "|" : ""), cxx + 12, cy + 32, { font: F.m(19, 400), color: C.ink, align: "left" });
  ctx.restore();
  // status RFQ
  const sa = seg(k, 0.2, 0.4); ctx.save(); ctx.globalAlpha = sa; ctx.font = F.m(22); ctx.letterSpacing = "4px";
  const s = `${L.rfq} · ${L.waiting}`, sw = ctx.measureText(s).width + 70; rrect(W - 100 - sw, 344, sw, 50, 25); ctx.strokeStyle = "rgba(232,163,58,0.7)"; ctx.lineWidth = 2; ctx.stroke(); ctx.restore();
  dot(W - 100 - sw + 26, 369, 7, AMB, 10 * (0.5 + 0.5 * Math.sin(t * 8))); txt(s, W - 100 - sw + 46, 377, { font: F.m(22), color: AMB, align: "left", ls: 4, alpha: sa });
  // pilha de papel
  for (let i = 0; i < 4; i++) { const p = E.outCubic(seg(k, 0.12 + i * 0.12, 0.42 + i * 0.12)); if (p <= 0) continue; paperSheet(130 + i * 34, 860 + i * 22 + (1 - p) * 260, 470, 320, -0.09 + i * 0.05, p, i * 7 + 1); }
  const pa = E.outCubic(seg(k, 0.7, 0.9)); if (pa > 0) { ctx.save(); ctx.globalAlpha = pa * 0.9; ctx.translate(640, 1020); ctx.rotate(0.12); ctx.shadowColor = "rgba(0,0,0,0.5)"; ctx.shadowBlur = 16; ctx.fillStyle = "#d8b640"; ctx.fillRect(-60, -60, 120, 120); ctx.restore(); }
}
function vData(t, L) {
  const k = t - T.v2; vbg(t);
  const cx = 540, cy = 830, drift = 1 + k * 0.03;
  const items = [
    { x: 120, y: 420, w: 380, a: "CNC-01", b: `${L.cycle}  ??:??` }, { x: 600, y: 470, w: 360, a: "CNC-03", b: `${L.down}  —` },
    { x: 560, y: 760, w: 400, a: "CNC-04", b: `${L.setup}  ?` }, { x: 110, y: 1100, w: 460, a: L.shift, b: L.paper },
    { x: 640, y: 1120, w: 320, a: "CNC-06", b: `${L.cycle}  —` },
  ];
  const pos = (it) => [cx + (it.x + it.w / 2 - cx) * drift, cy + (it.y + 60 - cy) * drift];
  // conexões quebradas
  [[0, 1], [1, 2], [0, 3], [2, 4], [3, 4]].forEach(([i, j], n) => { const a = seg(k, 0.3 + n * 0.08, 0.5 + n * 0.08); if (a <= 0) return;
    const [x1, y1] = pos(items[i]), [x2, y2] = pos(items[j]); const mx = (x1 + x2) / 2, my = (y1 + y2) / 2, g = 0.14;
    ctx.save(); ctx.globalAlpha = a * 0.6; ctx.strokeStyle = "#5c5e66"; ctx.setLineDash([8, 10]); ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(lerp(x1, x2, 0.5 - g), lerp(y1, y2, 0.5 - g)); ctx.moveTo(lerp(x1, x2, 0.5 + g), lerp(y1, y2, 0.5 + g)); ctx.lineTo(x2, y2); ctx.stroke(); ctx.restore();
    txt("×", mx, my + 12, { font: F.m(34), color: AMB, alpha: a }); });
  // prancheta com marcações
  const ca = E.outCubic(seg(k, 0.15, 0.4)); { const [px, py] = [cx + (170 - cx) * drift, cy + (700 - cy) * drift]; ctx.save(); ctx.globalAlpha = ca; ctx.translate(px, py); ctx.rotate(-0.06);
    ctx.fillStyle = "#4b4f56"; rrect(-130, -170, 260, 340, 12); ctx.fill(); ctx.fillStyle = "#c4c7cb"; ctx.fillRect(-112, -140, 224, 296); ctx.fillStyle = "#2a2c30"; rrect(-50, -186, 100, 36, 8); ctx.fill();
    ctx.strokeStyle = "rgba(30,30,34,0.85)"; ctx.lineWidth = 3; for (let r = 0; r < 4; r++) { for (let i = 0; i < 4 + (r % 2); i++) { ctx.beginPath(); ctx.moveTo(-90 + i * 16, -100 + r * 66); ctx.lineTo(-86 + i * 16, -60 + r * 66); ctx.stroke(); } if (r % 2 === 0) { ctx.beginPath(); ctx.moveTo(-96, -70 + r * 66); ctx.lineTo(-20, -92 + r * 66); ctx.stroke(); } ctx.fillStyle = "rgba(40,42,46,0.45)"; ctx.fillRect(10, -88 + r * 66, 80, 5); }
    ctx.restore(); }
  items.forEach((it, i) => { const a = E.outCubic(seg(k, 0.05 + i * 0.07, 0.3 + i * 0.07)); if (a <= 0) return; const [px, py] = pos(it);
    ctx.save(); ctx.globalAlpha = a; ctx.translate(px - it.w / 2, py - 60 + (1 - a) * 20);
    panel(0, 0, it.w, 120, { fill: "#141518" }); txt(it.a, 24, 46, { font: F.m(22), color: C.muted, align: "left", ls: 4 }); txt(it.b, 24, 92, { font: F.m(26), color: it.b.includes("?") ? AMB : C.ink, align: "left" });
    ctx.restore(); });
  // post-it
  const pa = seg(k, 0.5, 0.7); if (pa > 0) { ctx.save(); ctx.globalAlpha = pa * 0.9; ctx.translate(cx + (860 - cx) * drift, cy + (980 - cy) * drift); ctx.rotate(-0.1); ctx.fillStyle = "#d8b640"; ctx.fillRect(-55, -55, 110, 110); ctx.restore(); }
}
function vProcess(t, L) {
  const k = t - T.v3; vbg(t);
  const x0 = 170, w = 740, h = 128, ys = [400, 600, 800, 1000];
  ys.forEach((y, i) => { const a = E.outCubic(seg(k, i * 0.08, 0.25 + i * 0.08)); if (a <= 0) return;
    ctx.save(); ctx.globalAlpha = a * (i === 3 ? 0.45 : 1);
    panel(x0, y, w, h, { fill: "#141518" });
    // ícone de papel
    ctx.fillStyle = "#c4c7cb"; ctx.beginPath(); ctx.moveTo(x0 + 34, y + 24); ctx.lineTo(x0 + 86, y + 24); ctx.lineTo(x0 + 100, y + 38); ctx.lineTo(x0 + 100, y + 104); ctx.lineTo(x0 + 34, y + 104); ctx.closePath(); ctx.fill();
    ctx.fillStyle = "rgba(40,42,46,0.5)"; for (let j = 0; j < 4; j++) ctx.fillRect(x0 + 44, y + 48 + j * 13, 44 - (j % 2) * 14, 4);
    txt(L.flow[i], x0 + 130, y + 76, { font: F.m(30), color: C.ink, align: "left", ls: 4 });
    ctx.restore();
    if (i < 3) { ctx.save(); ctx.globalAlpha = a * 0.7; ctx.strokeStyle = "#5c5e66"; ctx.setLineDash([6, 8]); ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(x0 + 67, y + h + 8); ctx.lineTo(x0 + 67, ys[i + 1] - 8); ctx.stroke(); ctx.setLineDash([]); ctx.beginPath(); ctx.moveTo(x0 + 59, ys[i + 1] - 18); ctx.lineTo(x0 + 67, ys[i + 1] - 8); ctx.lineTo(x0 + 75, ys[i + 1] - 18); ctx.stroke(); ctx.restore(); }
    // carimbo MANUAL
    const st = 0.4 + i * 0.25; const sp = seg(k, st, st + 0.12); if (sp > 0 && i < 3) { ctx.save(); ctx.globalAlpha = sp; ctx.translate(x0 + w - 120, y + h / 2); ctx.rotate(-0.08); ctx.scale(1 + (1 - sp) * 0.6, 1 + (1 - sp) * 0.6); ctx.strokeStyle = AMB; ctx.lineWidth = 3; rrect(-86, -26, 172, 52, 6); ctx.stroke(); txt(L.manual, 0, 11, { font: F.m(24), color: AMB, ls: 5 }); ctx.restore(); }
  });
  // ficha sendo redigitada no nó 3 + travada
  const ty = ys[2] + h + 30, ra = seg(k, 0.9, 1.05);
  if (ra > 0) { ctx.save(); ctx.globalAlpha = ra; panel(x0 + 130, ty, w - 130, 150, { fill: "#0f1012", stroke: "rgba(232,163,58,0.5)" });
    const lines = ["CLIENTE: ...........", "PEÇA: BL-1045 · REV ?", "QTD: ...."];
    const n = seg(k, 1.0, 1.75) * 40; let used = 0;
    lines.forEach((l, i) => { const s = l.slice(0, Math.max(0, Math.floor(n - used))); used += l.length * 0.45; txt(s, x0 + 160, ty + 44 + i * 40, { font: F.m(22, 400), color: C.muted, align: "left" }); });
    txt(L.retype + (Math.floor(t * 4) % 2 ? " ▍" : ""), x0 + w - 24, ty + 44, { font: F.m(18), color: AMB, align: "right", ls: 3 });
    ctx.restore(); }
  const tok = E.inOutCubic(seg(k, 0.15, 0.85)), tyk = lerp(ys[0] + h / 2, ys[2] + h / 2, tok);
  dot(x0 - 30, tyk, 9, k > 0.85 ? AMB : C.ink, k > 0.85 ? 14 * (0.5 + 0.5 * Math.sin(t * 9)) : 0);
}
function blockDrawing(x, y, s, ink, dia, o = {}) {
  // bloco 120×80, furo central; vista superior
  ctx.save(); ctx.strokeStyle = ink; ctx.lineWidth = 2.5;
  ctx.strokeRect(x, y, 120 * s, 80 * s);
  ctx.beginPath(); ctx.arc(x + 60 * s, y + 40 * s, (o.r || 10) * s, 0, 7); ctx.stroke();
  [[-1, -1], [1, -1], [1, 1], [-1, 1]].forEach(([a, b]) => { ctx.beginPath(); ctx.arc(x + 60 * s + a * 46 * s, y + 40 * s + b * 28 * s, 4.5 * s, 0, 7); ctx.stroke(); });
  ctx.setLineDash([16, 5, 3, 5]); ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(x - 14, y + 40 * s); ctx.lineTo(x + 120 * s + 14, y + 40 * s); ctx.moveTo(x + 60 * s, y - 14); ctx.lineTo(x + 60 * s, y + 80 * s + 14); ctx.stroke(); ctx.setLineDash([]);
  ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(x, y + 80 * s + 34); ctx.lineTo(x + 120 * s, y + 80 * s + 34); ctx.stroke();
  txt("120", x + 60 * s, y + 80 * s + 26, { font: F.m(22), color: ink });
  // chamada do furo
  ctx.beginPath(); ctx.moveTo(x + 60 * s + 7 * s, y + 40 * s - 7 * s); ctx.lineTo(x + 120 * s + 30, y - 24); ctx.lineTo(x + 120 * s + 60, y - 24); ctx.stroke();
  txt(dia, x + 120 * s + 66, y - 16, { font: F.m(26), color: o.diaColor || ink, align: "left" });
  ctx.restore();
  return [x + 120 * s + 66, y - 16];
}
function vDrawings(t, L) {
  const k = t - T.v4; vbg(t);
  // folha impressa REV B (na máquina)
  const a1 = E.outCubic(seg(k, 0, 0.3)), PY = 600;
  ctx.save(); ctx.globalAlpha = a1; ctx.translate(0, (1 - a1) * 30);
  txt(L.atMachine, 110, 372, { font: F.m(22), color: C.muted, align: "left", ls: 6 });
  ctx.save(); ctx.translate(540, PY); ctx.rotate(-0.02); ctx.shadowColor = "rgba(0,0,0,0.5)"; ctx.shadowBlur = 30; ctx.fillStyle = "#c2c4c6"; ctx.fillRect(-430, -190, 860, 380); ctx.shadowColor = "transparent";
  ctx.strokeStyle = "rgba(0,0,0,0.12)"; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(0, -190); ctx.lineTo(8, 190); ctx.stroke();
  const st = ctx.createRadialGradient(-330, 130, 0, -330, 130, 60); st.addColorStop(0, "rgba(110,80,40,0.25)"); st.addColorStop(1, "rgba(110,80,40,0)"); ctx.fillStyle = st; ctx.fillRect(-400, 60, 140, 130);
  ctx.strokeStyle = "rgba(25,26,30,0.85)"; ctx.lineWidth = 2; ctx.strokeRect(-410, -170, 820, 340);
  ctx.restore();
  const pB = blockDrawing(200, PY - 110, 2.3, "rgba(25,26,30,0.9)", "Ø18", { r: 9 });
  const tb = (y, ink, revC) => { ctx.strokeStyle = ink; ctx.lineWidth = 2; ctx.strokeRect(690, y, 230, 100); txt(L.part, 702, y + 34, { font: F.m(15), color: revC ? C.muted : "#1b1c20", align: "left" }); txt("SAE 1045", 702, y + 60, { font: F.m(15), color: revC ? C.muted : "#1b1c20", align: "left" }); txt(revC ? "REV C" : "REV B", 702, y + 88, { font: F.m(22), color: revC ? C.soft : "#1b1c20", align: "left" }); return [702, y + 88]; };
  const rB = tb(PY + 50, "rgba(25,26,30,0.9)", false);
  ctx.restore();
  // CAD REV C
  const a2 = E.outCubic(seg(k, 0.25, 0.55)), CY = 1070;
  ctx.save(); ctx.globalAlpha = a2; ctx.translate(0, (1 - a2) * 30);
  txt(L.inCad, 110, 862, { font: F.m(22), color: C.muted, align: "left", ls: 6 });
  panel(110, 885, 860, 370, { fill: "#0f1216", stroke: "rgba(90,162,245,0.4)" });
  ctx.strokeStyle = "rgba(90,162,245,0.06)"; ctx.lineWidth = 1; for (let x = 130; x < 960; x += 30) { ctx.beginPath(); ctx.moveTo(x, 900); ctx.lineTo(x, 1240); ctx.stroke(); }
  const pC = blockDrawing(200, CY - 110, 2.3, "rgba(200,220,245,0.95)", "Ø20 H7", { r: 10, diaColor: C.soft });
  const rC = tb(CY + 50, "rgba(90,162,245,0.6)", true);
  ctx.restore();
  // divergência
  const d = E.outCubic(seg(k, 0.85, 1.05)); if (d > 0) {
    ctx.save(); ctx.globalAlpha = d; ctx.strokeStyle = AMB; ctx.lineWidth = 3;
    const hb = (p, w) => { rrect(p[0] - 12, p[1] - 34, w, 48, 8); ctx.stroke(); };
    hb(pB, 90); hb(pC, 150); const hr = (p) => { rrect(p[0] - 10, p[1] - 25, 96, 34, 6); ctx.stroke(); }; hr(rB); hr(rC);
    ctx.setLineDash([6, 6]); ctx.beginPath(); ctx.moveTo(pB[0] + 140, pB[1] - 10); ctx.lineTo(980, pB[1] - 10); ctx.lineTo(980, pC[1] - 10); ctx.lineTo(pC[0] + 140, pC[1] - 10); ctx.stroke(); ctx.setLineDash([]);
    const my = (pB[1] + pC[1]) / 2 - 10; ctx.fillStyle = "#0d0e10"; ctx.fillRect(958, my - 34, 44, 64); txt("≠", 980, my + 14, { font: F.m(44), color: AMB });
    ctx.restore(); }
}
function vSite(t, L) {
  const k = t - T.v5; vbg(t);
  const x0 = 110, y0 = 400, w = 860, h = 900, a = E.outCubic(seg(k, 0, 0.3));
  ctx.save(); ctx.globalAlpha = a; ctx.translate(0, (1 - a) * 30);
  panel(x0, y0, w, h, { fill: "#1a1b1e", stroke: "#34353a" });
  [0, 1, 2].forEach((i) => dot(x0 + 30 + i * 26, y0 + 29, 8, "#3a3b40")); rrect(x0 + 130, y0 + 13, w - 170, 32, 16); ctx.fillStyle = "#0c0c0d"; ctx.fill();
  txt("http://www.", x0 + 152, y0 + 37, { font: F.m(19, 400), color: "#6a6b72", align: "left" });
  ctx.save(); rrect(x0 + 2, y0 + 58, w - 4, h - 60, [0, 0, 12, 12]); ctx.clip();
  const sc = E.inOutCubic(seg(k, 0.4, 0.75)) * 220 + E.inOutCubic(seg(k, 1.05, 1.35)) * 200;
  ctx.translate(0, -sc); ctx.filter = "saturate(0.6) contrast(0.92)";
  const X = x0 + 2, Y = y0 + 58, WW = w - 4;
  ctx.fillStyle = "#d4d4cf"; ctx.fillRect(X, Y, WW, 1600);
  const hg = ctx.createLinearGradient(0, Y, 0, Y + 150); hg.addColorStop(0, "#466e72"); hg.addColorStop(1, "#22403f"); ctx.fillStyle = hg; ctx.fillRect(X, Y, WW, 150);
  txt(L.oldSite[0], X + WW / 2, Y + 90, { font: "bold 44px Georgia, 'Times New Roman', serif", color: "#e9e4c8" });
  ctx.fillStyle = "#9a9a92"; ctx.fillRect(X, Y + 150, WW, 40);
  ["Home", "Empresa", "Produtos", "Contato"].forEach((s, i) => { txt(s, X + 40 + i * 170, Y + 178, { font: "18px 'Times New Roman', serif", color: "#2a3a8a", align: "left" }); ctx.fillStyle = "#2a3a8a"; ctx.fillRect(X + 40 + i * 170, Y + 181, measure(s, "18px 'Times New Roman', serif"), 1.5); });
  txt(L.oldSite[1], X + 40, Y + 250, { font: "italic bold 34px Georgia, serif", color: "#7a2a2a", align: "left" });
  // imagem quebrada
  ctx.fillStyle = "#bdbdb7"; ctx.fillRect(X + 40, Y + 290, 360, 260); ctx.strokeStyle = "#8a8a84"; ctx.lineWidth = 2; ctx.strokeRect(X + 40, Y + 290, 360, 260);
  ctx.strokeStyle = "#9a3030"; ctx.lineWidth = 3; ctx.strokeRect(X + 56, Y + 306, 30, 34); ctx.beginPath(); ctx.moveTo(X + 60, Y + 310); ctx.lineTo(X + 82, Y + 336); ctx.moveTo(X + 82, Y + 310); ctx.lineTo(X + 60, Y + 336); ctx.stroke();
  ctx.fillStyle = "rgba(60,60,60,0.45)"; for (let i = 0; i < 10; i++) ctx.fillRect(X + 430, Y + 300 + i * 24, 360 - (i % 3) * 50, 9);
  // em construção
  ctx.save(); ctx.translate(X + 40, Y + 600); ctx.fillStyle = "#d9b52a"; ctx.fillRect(0, 0, 420, 70); ctx.beginPath(); ctx.rect(0, 0, 420, 70); ctx.clip(); ctx.fillStyle = "#1e1e1e"; for (let i = -2; i < 16; i++) { ctx.beginPath(); ctx.moveTo(i * 36, 0); ctx.lineTo(i * 36 + 18, 0); ctx.lineTo(i * 36 - 2, 70); ctx.lineTo(i * 36 - 20, 70); ctx.fill(); } ctx.fillStyle = "#d9b52a"; ctx.fillRect(16, 16, 388, 38); txt(L.oldSite[2], 210, 44, { font: "bold 22px Arial, sans-serif", color: "#1e1e1e" }); ctx.restore();
  ctx.fillStyle = "rgba(60,60,60,0.4)"; for (let i = 0; i < 14; i++) ctx.fillRect(X + 40, Y + 710 + i * 26, WW - 80 - (i % 4) * 90, 9);
  ctx.fillStyle = "#111"; ctx.fillRect(X + 40, Y + 1100, 200, 40); txt("000127", X + 140, Y + 1130, { font: "bold 26px 'Courier New', monospace", color: "#3f3" });
  txt(L.oldSite[4], X + 260, Y + 1130, { font: "18px 'Times New Roman', serif", color: "#333", align: "left" });
  txt(L.oldSite[3], X + WW / 2, Y + 1200, { font: "16px 'Times New Roman', serif", color: "#555" });
  ctx.restore();
  ctx.restore();
  // cursor
  const cxp = lerp(720, 600, E.inOutCubic(seg(k, 0.1, 0.5))), cyp = lerp(1050, 880, E.inOutCubic(seg(k, 0.1, 0.5)));
  ctx.save(); ctx.globalAlpha = a; ctx.translate(cxp, cyp); ctx.fillStyle = "#fff"; ctx.strokeStyle = "#000"; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, 34); ctx.lineTo(9, 26); ctx.lineTo(16, 40); ctx.lineTo(22, 37); ctx.lineTo(15, 23); ctx.lineTo(26, 23); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
}

// Conexão: máquinas → CAD → automação → painel → site
function nodeIcon(i, x, y, t) {
  ctx.save(); ctx.translate(x, y);
  if (i === 0) { for (let r = 0; r < 2; r++) for (let c = 0; c < 3; c++) { ctx.strokeStyle = "rgba(238,242,247,0.6)"; ctx.lineWidth = 2; ctx.strokeRect(6 + c * 28, 14 + r * 34, 22, 26); dot(17 + c * 28, 10 + r * 34, 3.5, GRN, 6); } }
  if (i === 1) { ctx.strokeStyle = C.soft; ctx.lineWidth = 2; ctx.strokeRect(8, 22, 78, 52); ctx.beginPath(); ctx.arc(47, 48, 10, 0, 7); ctx.stroke(); ctx.setLineDash([6, 3, 2, 3]); ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(2, 48); ctx.lineTo(92, 48); ctx.stroke(); ctx.setLineDash([]); }
  if (i === 2) { for (let j = 0; j < 3; j++) { ctx.strokeStyle = C.soft; ctx.lineWidth = 2; ctx.strokeRect(4 + j * 32, 36, 22, 22); if (j < 2) { ctx.beginPath(); ctx.moveTo(26 + j * 32, 47); ctx.lineTo(36 + j * 32, 47); ctx.stroke(); } ctx.fillStyle = "rgba(34,130,240,0.5)"; if ((Math.floor(t * 3) % 3) === j) ctx.fillRect(4 + j * 32, 36, 22, 22); } }
  if (i === 3) { ctx.strokeStyle = "rgba(238,242,247,0.5)"; ctx.lineWidth = 2; ctx.strokeRect(4, 14, 88, 66); [26, 40, 18, 46, 34].forEach((h, j) => { ctx.fillStyle = j === 3 ? C.brand : "rgba(90,162,245,0.55)"; ctx.fillRect(14 + j * 15, 72 - h, 9, h); }); }
  if (i === 4) { ctx.strokeStyle = "rgba(238,242,247,0.5)"; ctx.lineWidth = 2; ctx.strokeRect(2, 18, 92, 60); ctx.fillStyle = "rgba(238,242,247,0.3)"; ctx.fillRect(2, 18, 92, 10); if (IMG["gv-drill.jpg"]) ctx.drawImage(IMG["gv-drill.jpg"], 3, 29, 90, 48); }
  ctx.restore();
}
function linkScene(t, L) {
  background(t, { glow: 0.55, gridAlpha: 0.05, speed: 14, glowY: 820 });
  const k = t - T.link, x0 = 130, w = 820, h = 140, ys = [380, 560, 740, 920, 1100];
  const out = E.inCubic(seg(t, T.dash - 0.25, T.dash + 0.05));
  ctx.save(); ctx.globalAlpha = 1 - out;
  // linhas de conexão
  for (let i = 0; i < 4; i++) { const p = E.inOutCubic(seg(k, 0.25 + i * 0.42, 0.5 + i * 0.42)); if (p <= 0) continue;
    const ya = ys[i] + h, yb = ys[i + 1]; ctx.strokeStyle = C.soft; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(x0 + 70, ya); ctx.lineTo(x0 + 70, lerp(ya, yb, p)); ctx.stroke();
    const ph = ((t * 1.4 + i * 0.3) % 1); if (p >= 1) dot(x0 + 70, lerp(ya, yb, ph), 4.5, "#cfe3fb", 12); }
  ys.forEach((y, i) => { const a = E.outCubic(seg(k, 0.15 + i * 0.42, 0.45 + i * 0.42)); if (a <= 0) return;
    ctx.save(); ctx.globalAlpha *= a; ctx.translate((1 - a) * -40, 0);
    panel(x0, y, w, h, { fill: "rgba(19,20,23,0.92)", stroke: "rgba(90,162,245,0.45)" });
    nodeIcon(i, x0 + 22, y + 22, t);
    txt(L.nodes[i], x0 + 150, y + 82, { font: F.m(30), color: C.ink, align: "left", ls: 4 });
    const s = L.nstat[i]; ctx.font = F.m(20); ctx.letterSpacing = "3px"; const sw = ctx.measureText(s).width;
    dot(x0 + w - 44 - sw - 22, y + 76, 6, i === 0 ? GRN : C.brand, 10); txt(s, x0 + w - 36, y + 83, { font: F.m(20), color: i === 0 ? GRN : C.soft, align: "right", ls: 3 });
    ctx.restore(); });
  ctx.restore();
  if (t < T.dash) bigTitle([L.link], t, 18.7, T.dash, 1440, 100);
}
function dashScene(t, L) {
  background(t, { glow: 0.45, gridAlpha: 0.04, speed: 14, glowY: 700 });
  const k = t - T.dash, a = E.outCubic(seg(k, 0, 0.35));
  ctx.save(); ctx.globalAlpha = a; ctx.translate(0, (1 - a) * 40);
  const x0 = 90, y0 = 370, w = 900;
  panel(x0, y0, w, 520, { fill: "rgba(19,20,23,0.95)", stroke: "rgba(90,162,245,0.45)" });
  dot(x0 + 34, y0 + 42, 7, GRN, 12 * (0.5 + 0.5 * Math.sin(t * 6)));
  txt(L.live, x0 + 56, y0 + 50, { font: F.m(24), color: C.ink, align: "left", ls: 5 });
  for (let i = 0; i < 6; i++) { const c = i % 3, r = Math.floor(i / 3), tx = x0 + 24 + c * 288, ty = y0 + 82 + r * 150, ta = seg(k, 0.1 + i * 0.05, 0.3 + i * 0.05);
    ctx.save(); ctx.globalAlpha *= ta; panel(tx, ty, 272, 132, { fill: "#0f1012", r: 10 });
    txt(`CNC-0${i + 1}`, tx + 20, ty + 42, { font: F.m(22), color: C.muted, align: "left", ls: 3 });
    dot(tx + 26, ty + 80, 6, GRN, 8); txt(L.inCycle, tx + 42, ty + 87, { font: F.m(20), color: C.ink, align: "left", ls: 2 });
    const pr = ((t * (0.18 + i * 0.03) + i * 0.17) % 1); ctx.fillStyle = "rgba(90,162,245,0.18)"; ctx.fillRect(tx + 20, ty + 108, 232, 5); ctx.fillStyle = C.brand; ctx.fillRect(tx + 20, ty + 108, 232 * pr, 5);
    ctx.restore(); }
  L.ev.forEach((s, i) => { const ea = seg(k, 0.5 + i * 0.5, 0.7 + i * 0.5); if (ea <= 0) return; const y = y0 + 420 + i * 46;
    txt("✓", x0 + 30, y + 8, { font: F.m(26), color: C.brand, alpha: ea, align: "left" }); txt(s, x0 + 68, y + 8, { font: F.m(22), color: C.ink, alpha: ea, align: "left", ls: 2 }); });
  ctx.restore();
  const b = E.outCubic(seg(k, 0.25, 0.65));
  if (b > 0) { ctx.save(); ctx.globalAlpha = b; ctx.translate(0, (1 - b) * 40); browser(90, 940, 900, 478, IMG["gv-drill.jpg"], { url: "gvdrill.com.br", reveal: E.inOutCubic(seg(k, 0.35, 0.95)), glow: 40 }); ctx.restore(); }
}
function hallLabels(t, L) {
  const c = camAt(t), list = [[5, 25.0], [4, 25.4], [9, 25.8]];
  list.forEach(([mi, t0], li) => {
    const a = E.outCubic(seg(t, t0, t0 + 0.3)) * (1 - seg(t, T.hall2 - 0.5, T.hall2 - 0.2)); if (a <= 0) return;
    const m = MACH[mi], P = project(c, toWorld(m, STACK[0], STACK[1] + 0.25, STACK[2])); if (!P) return;
    const [x, y] = P, s = `CNC-${String(m.id).padStart(2, "0")} · ${L.inCycle}`, font = F.m(20);
    const tw = measure(s, font, 3) + 48, bx = clamp(x - tw / 2, 70, W - 70 - tw), by = y - 96 - li * 40;
    ctx.save(); ctx.globalAlpha = a;
    ctx.strokeStyle = "rgba(238,242,247,0.6)"; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, by + 44); ctx.stroke();
    ctx.fillStyle = "rgba(12,12,13,0.72)"; ctx.fillRect(bx, by, tw, 44);
    ctx.strokeStyle = C.soft; ctx.lineWidth = 2; const L2 = 10;
    for (const [cx, cy, sx, sy] of [[bx, by, 1, 1], [bx + tw, by, -1, 1], [bx, by + 44, 1, -1], [bx + tw, by + 44, -1, -1]]) { ctx.beginPath(); ctx.moveTo(cx, cy + sy * L2); ctx.lineTo(cx, cy); ctx.lineTo(cx + sx * L2, cy); ctx.stroke(); }
    dot(bx + 18, by + 22, 5, GRN, 8); txt(s, bx + 32, by + 29, { font, color: C.ink, align: "left", ls: 3 });
    ctx.restore();
  });
}
function rec(t) {
  const a = 1 - seg(t, 2.3, 2.6); if (a <= 0) return;
  ctx.save(); ctx.globalAlpha = a * 0.7; dot(96, 288, 7, "#e5484d");
  txt(`REC  00:00:0${Math.floor(t)}:${String(Math.floor((t % 1) * 24)).padStart(2, "0")}`, 116, 296, { font: F.m(24), color: C.ink, align: "left", ls: 4 });
  ctx.restore();
}

export function render2d(t, lang, has3d) {
  const L = COPY[lang] || COPY.pt;
  if (!has3d) {
    if (t >= T.v1 && t < T.v2) vQuotes(t, L);
    else if (t >= T.v2 && t < T.v3) vData(t, L);
    else if (t >= T.v3 && t < T.v4) vProcess(t, L);
    else if (t >= T.v4 && t < T.v5) vDrawings(t, L);
    else if (t >= T.v5 && t < T.link) vSite(t, L);
    else if (t >= T.link && t < T.dash) linkScene(t, L);
    else if (t >= T.dash && t < T.s11) dashScene(t, L);
    else if (t < T.sig) { ctx.fillStyle = C.bg; ctx.fillRect(0, 0, W, H); }
  }
  // vinhetas: palavra + subtítulo
  [T.v1, T.v2, T.v3, T.v4, T.v5].forEach((t0, i) => { const t1 = [T.v2, T.v3, T.v4, T.v5, T.link][i]; if (t >= t0 && t < t1) vWord(t, i, L, t0, t1); });
  rec(t);
  bigTitle(L.hook, t, 0.15, T.s2 - 0.05, 1330, 112);
  bigTitle(L.q, t, T.s3 + 0.25, T.v1 - 0.1, 1330, 96);
  caption(L.c1, t, 18.0, 20.9);
  caption(L.c2, t, 21.3, 25.9);
  if (t >= T.hall && t < T.hall2) hallLabels(t, L);
  if (t >= T.hall2 && t < T.sig) bigTitle(L.end, t, 29.9, T.sig - 0.05, 1330, 108);
  if (t > 0.05 && t < T.sig) corners(has3d ? 0.4 : 0.3);
  signature(t, T.sig, lang, L.cta);
  vignette(); grain(t, 0.045);
  const cuts = [T.s2, T.s3, T.s4, T.v1, T.link, T.s11, T.s11b, T.hall, T.hall2];
  for (const c of cuts) { const d = Math.abs(t - c); if (d < 0.08) { ctx.fillStyle = `rgba(0,0,0,${0.6 * (1 - d / 0.08)})`; ctx.fillRect(0, 0, W, H); } }
}
