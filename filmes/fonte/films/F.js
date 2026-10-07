// FILME F — O SITE INDUSTRIAL (39,2 s · 24 fps · 9:16)
// Dois mundos, uma busca: a compradora com a linha parada e a usinagem com o celular apagado na bancada.
// O concorrente leva o clique; depois, o site industrial faz o pedido de cotação chegar — mesmo enquadramento, telefone aceso.
export const DURATION = 39.2;
export const IMAGES = ["gv-drill.jpg"];

const T = { search: 3.4, shop: 6.4, results: 9.2, dark: 13.2, trans: 16.0, real: 17.0, demo: 19.6, payoff: 26.6, proof: 33.6, sig: 35.6 };
const LIGHT_ON = 27.3; // tela do celular acende (vibração no mesmo quadro)

const COPY = {
  pt: {
    line: "LINHA 3 · PARADA", hook: "UMA LINHA PAROU.", buyer: "COMPRADORA", supplier: "FORNECEDOR",
    q: "usinagem eixo sob desenho urgente", v1: "Alguém precisa, agora, do que você faz.", v2: "Ela procurou.",
    comp: ["fornecedor-a.ind.br", "Eixos usinados sob desenho · Cotação online"],
    others: [["guia-industrial.com.br", "Guia de fornecedores industriais"], ["normas-tecnicas.org", "Tolerâncias de eixos: tabela h6"], ["forum-manutencao.com", "Onde usinar eixo com urgência?"]],
    absent: ["SUA EMPRESA", "não aparece nesta busca"],
    k1: "Ela clicou no concorrente.", k2: "Você nem ficou sabendo.",
    trans: "DOWNWAY · SITE INDUSTRIAL", real: "ENTREGA REAL · PORTFÓLIO", demo: "DEMONSTRAÇÃO DE RECURSO",
    v3: "Agora, com um site de verdade.", v4: "Especificação clara. Datasheet pronto.", v5: "Sem precisar ligar para perguntar.",
    site: { brand: "SUA EMPRESA", url: "suaempresa.com.br", nav: ["Produtos", "Serviços", "Contato"], navBtn: "Orçamento", chip: "EIXOS SOB DESENHO",
      h1: ["Eixos usinados", "sob desenho"], sub: "Aço SAE 1045 · 4140 · inox 304", specsH: "ESPECIFICAÇÕES TÉCNICAS",
      specs: [["Diâmetro", "Ø10 – Ø250 mm"], ["Comprimento", "até 1.500 mm"], ["Tolerância", "h6 · IT6"], ["Rugosidade", "Ra 0,8 µm"], ["Tratamento", "Têmpera e revenimento"]],
      ds: "Baixar datasheet (PDF)", dsDone: "datasheet-eixos.pdf", formH: "SOLICITAR ORÇAMENTO",
      fields: [["Peça", "Eixo Ø45 h6"], ["Quantidade", "4"], ["Prazo", "Urgente"]], attachL: "Desenho", attach: "desenho-eixo.pdf",
      send: "Enviar", sent: "Enviado", wa: "WhatsApp", toast: "Pedido de cotação enviado" },
    notif: { app: "Formulário do site", now: "agora", title: "Nova solicitação de orçamento", body: "Eixo Ø45 h6 · 4 un. · desenho anexo" },
    k3: "O pedido de cotação chegou.", end: ["SEU PRÓXIMO CLIENTE", "JÁ ESTÁ PROCURANDO."],
    proof: ["SITE NO AR EM ATÉ", "15 DIAS ÚTEIS."], proofSub: "PREÇO E PRAZO FECHADOS · SEM FIDELIDADE",
    cta: "AGENDE UM DIAGNÓSTICO",
  },
  en: {
    line: "LINE 3 · DOWN", hook: "A LINE JUST WENT DOWN.", buyer: "BUYER", supplier: "SUPPLIER",
    q: "custom machined shaft urgent supplier", v1: "Someone needs what you make. Right now.", v2: "She searched.",
    comp: ["supplier-a.com", "Custom machined shafts · Request a quote online"],
    others: [["industrial-directory.com", "Industrial supplier directory"], ["engineering-tables.org", "Shaft tolerances: h6 chart"], ["maintenance-forum.com", "Who can machine a shaft this week?"]],
    absent: ["YOUR COMPANY", "not in these results"],
    k1: "She clicked your competitor.", k2: "You never even knew.",
    trans: "DOWNWAY · INDUSTRIAL WEBSITE", real: "REAL DELIVERY · PORTFOLIO", demo: "FEATURE DEMO",
    v3: "Now, with a real website.", v4: "Clear specs. Datasheet ready.", v5: "Nothing left to call and ask.",
    site: { brand: "YOUR COMPANY", url: "yourcompany.com", nav: ["Products", "Services", "Contact"], navBtn: "Get a quote", chip: "CUSTOM SHAFTS",
      h1: ["Shafts machined", "to your drawing"], sub: "AISI 1045 · 4140 · 304 stainless", specsH: "TECHNICAL SPECIFICATIONS",
      specs: [["Diameter", "Ø10 – Ø250 mm"], ["Length", "up to 1,500 mm"], ["Tolerance", "h6 · IT6"], ["Roughness", "Ra 0.8 µm"], ["Heat treatment", "Quench & temper"]],
      ds: "Download datasheet (PDF)", dsDone: "shafts-datasheet.pdf", formH: "REQUEST A QUOTE",
      fields: [["Part", "Shaft Ø45 h6"], ["Quantity", "4"], ["Lead time", "Urgent"]], attachL: "Drawing", attach: "shaft-drawing.pdf",
      send: "Send", sent: "Sent", wa: "WhatsApp", toast: "Quote request sent" },
    notif: { app: "Website form", now: "now", title: "New quote request", body: "Shaft Ø45 h6 · 4 pcs · drawing attached" },
    k3: "The RFQ came to you.", end: ["YOUR NEXT CUSTOMER", "IS ALREADY SEARCHING."],
    proof: ["SPECS. DATASHEETS.", "QUOTE REQUESTS."], proofSub: "BUILT TO BE UNDERSTOOD.",
    cta: "BOOK AN ASSESSMENT",
  },
  es: {
    line: "LÍNEA 3 · DETENIDA", hook: "SE DETUVO UNA LÍNEA.", buyer: "COMPRADORA", supplier: "PROVEEDOR",
    q: "mecanizado de eje a plano urgente", v1: "Alguien necesita lo que tú haces. Ahora.", v2: "Buscó.",
    comp: ["proveedor-a.com", "Ejes mecanizados a plano · Cotización en línea"],
    others: [["directorio-industrial.com", "Directorio de proveedores industriales"], ["tablas-tecnicas.org", "Tolerancias de ejes: tabla h6"], ["foro-mantenimiento.com", "¿Quién mecaniza un eje con urgencia?"]],
    absent: ["TU EMPRESA", "no aparece en esta búsqueda"],
    k1: "Hizo clic en la competencia.", k2: "Ni te enteraste.",
    trans: "DOWNWAY · SITIO WEB INDUSTRIAL", real: "ENTREGA REAL · PORTAFOLIO", demo: "DEMO DE FUNCIONES",
    v3: "Ahora, con un sitio de verdad.", v4: "Especificaciones claras. Ficha lista.", v5: "Sin tener que llamar para preguntar.",
    site: { brand: "TU EMPRESA", url: "tuempresa.com", nav: ["Productos", "Servicios", "Contacto"], navBtn: "Cotizar", chip: "EJES A PLANO",
      h1: ["Ejes mecanizados", "a plano"], sub: "Acero SAE 1045 · 4140 · inox 304", specsH: "ESPECIFICACIONES TÉCNICAS",
      specs: [["Diámetro", "Ø10 – Ø250 mm"], ["Longitud", "hasta 1.500 mm"], ["Tolerancia", "h6 · IT6"], ["Rugosidad", "Ra 0,8 µm"], ["Tratamiento", "Temple y revenido"]],
      ds: "Descargar ficha técnica (PDF)", dsDone: "ficha-ejes.pdf", formH: "SOLICITAR COTIZACIÓN",
      fields: [["Pieza", "Eje Ø45 h6"], ["Cantidad", "4"], ["Plazo", "Urgente"]], attachL: "Plano", attach: "plano-eje.pdf",
      send: "Enviar", sent: "Enviado", wa: "WhatsApp", toast: "Solicitud de cotización enviada" },
    notif: { app: "Formulario del sitio", now: "ahora", title: "Nueva solicitud de cotización", body: "Eje Ø45 h6 · 4 uds. · plano adjunto" },
    k3: "La cotización llegó a ti.", end: ["TU PRÓXIMO CLIENTE", "YA ESTÁ BUSCANDO."],
    proof: ["ESPECIFICACIONES. FICHAS.", "COTIZACIONES."], proofSub: "HECHO PARA QUE TE ENTIENDAN.",
    cta: "AGENDA UN DIAGNÓSTICO",
  },
};

// ---------- trilha (cues) ----------
cue(0, "drone", { until: 11.2, level: 0.85 });
cue(0, "room", { until: 3.4 });
[0.25, 1.25, 2.25].forEach((t) => cue(t, "relay"));
cue(3.4, "thump");
cue(3.7, "keys", { until: 5.5 }); cue(5.75, "key");
[5.95, 6.1].forEach((t) => cue(t, "tick"));
cue(6.4, "room", { until: 9.2 }); cue(6.4, "clock", { until: 9.2 });
[9.3, 9.5, 9.7].forEach((t) => cue(t, "tick"));
cue(11.2, "freeze");
cue(11.75, "click");
cue(13.2, "room", { until: 16.0 });
cue(16.0, "thump"); cue(16.0, "pulse", { bpm: 92, until: 26.6 });
cue(16.9, "whoosh", { dur: 0.4 });
cue(19.5, "whoosh", { dur: 0.35 });
[20.5, 20.65, 20.8, 20.95, 21.1].forEach((t) => cue(t, "tick"));
cue(21.7, "click"); cue(22.2, "tick");
cue(23.1, "keys", { until: 24.3 }); cue(24.5, "pneumatic");
cue(25.5, "click"); cue(25.6, "chime");
cue(26.6, "room", { until: 33.6 });
cue(LIGHT_ON, "phone"); cue(LIGHT_ON, "notif"); cue(27.95, "phone");
cue(30.4, "resolve", { dur: 5 });
[33.75, 34.4].forEach((t) => cue(t, "tick"));
cue(T.sig, "sub"); cue(T.sig, "end");

// ---------- geometria compartilhada 3D/2D (determinística) ----------
// Celular na bancada (unidades: 1 = 100 mm). A tela fica no plano y = PH.y.
const PH = { x: 0, z: 0, ry: 0.08, y: 0.0815, w: 0.67, l: 1.47 };
function vib(t) {
  let a = 0;
  for (const [a0, a1] of [[LIGHT_ON, LIGHT_ON + 0.45], [27.95, 28.4]]) if (t >= a0 && t < a1) a = Math.sin(Math.PI * (t - a0) / (a1 - a0));
  if (a <= 0) return [0, 0, 0];
  const f = Math.floor(t * 24);
  return [(rnd(f * 3.1) - 0.5) * 0.022 * a, (rnd(f * 5.7) - 0.5) * 0.022 * a, (rnd(f * 9.3) - 0.5) * 0.035 * a];
}
// Enquadramento canônico do celular (S06 = S11 no início): idêntico nas duas aparições.
const CAN = { pos: [0.34, 4.35, 2.6], tgt: [0.02, 0, -0.12], fov: 30 };
function shopCam(t) {
  if (t < T.results) { // S03: dolly lateral lento, mais baixo, pela morsa até o celular
    const k = E.inOutCubic(seg(t, T.shop, T.results));
    return { pos: [lerp(2.1, 1.35, k), lerp(2.0, 2.45, k), lerp(2.3, 2.55, k)], tgt: [lerp(-0.3, 0.0, k), 0.05, lerp(-0.7, -0.35, k)], fov: 30 };
  }
  const t0 = t < T.payoff ? T.dark : T.payoff, d = (t - t0) * 0.012;
  const base = { pos: [CAN.pos[0] - d, CAN.pos[1] - d, CAN.pos[2] - d * 0.6], tgt: CAN.tgt, fov: CAN.fov };
  if (t < T.payoff) return base;
  const k = E.inOutCubic(seg(t, 28.2, 32.0)), k2 = seg(t, 32.0, T.proof) * 0.03;
  return {
    pos: [lerp(base.pos[0], 0.2, k), lerp(base.pos[1], 3.25 - k2 * 3, k), lerp(base.pos[2], 1.75 - k2 * 1.5, k)],
    tgt: [lerp(CAN.tgt[0], 0.0, k), 0, lerp(CAN.tgt[2], -0.62, k)], fov: CAN.fov,
  };
}
// projeção perspectiva pura (mesma matemática da PerspectiveCamera + lookAt) para colar a UI na tela do celular no 2D
function project(cam, p) {
  const [px, py, pz] = cam.pos, [tx, ty, tz] = cam.tgt;
  let zx = px - tx, zy = py - ty, zz = pz - tz; const zl = Math.hypot(zx, zy, zz); zx /= zl; zy /= zl; zz /= zl;
  let xx = zz, xy = 0, xz = -zx; const xl = Math.hypot(xx, xz); xx /= xl; xz /= xl; // up × z
  const yx = zy * xz - zz * xy, yy = zz * xx - zx * xz, yz = zx * xy - zy * xx;
  const dx = p[0] - px, dy = p[1] - py, dz = p[2] - pz;
  const cx = dx * xx + dy * xy + dz * xz, cy = dx * yx + dy * yy + dz * yz, cz = dx * zx + dy * zy + dz * zz;
  const f = 1 / Math.tan((cam.fov * Math.PI) / 360), asp = W / H;
  return [((cx / -cz) * f / asp + 1) / 2 * W, (1 - (cy / -cz) * f) / 2 * H];
}
function screenPoint(t, u, v) { // u,v ∈ [0,1] na tela (v=0 topo = ponta longe da câmera)
  const [vx, vz, vr] = vib(t), ry = PH.ry + vr;
  const lx = (u - 0.5) * PH.w, lz = (v - 0.5) * PH.l;
  return [PH.x + vx + lx * Math.cos(ry) + lz * Math.sin(ry), PH.y, PH.z + vz - lx * Math.sin(ry) + lz * Math.cos(ry)];
}

// ---------- 3D ----------
let K, S, sets = {}, P = {};
export let stage;

// ruído de valor 2D (para a face de fratura)
const h2 = (ix, iy, s) => rnd(ix * 57.31 + iy * 311.7 + s * 13.17);
function vnoise(x, y, s) {
  const ix = Math.floor(x), iy = Math.floor(y), fx = x - ix, fy = y - iy;
  const ux = fx * fx * (3 - 2 * fx), uy = fy * fy * (3 - 2 * fy);
  const a = h2(ix, iy, s), b = h2(ix + 1, iy, s), c = h2(ix, iy + 1, s), d = h2(ix + 1, iy + 1, s);
  return lerp(lerp(a, b, ux), lerp(c, d, ux), uy) * 2 - 1;
}
function fbm(x, y, s, o = 5) { let v = 0, a = 0.5, f = 1; for (let i = 0; i < o; i++) { v += a * vnoise(x * f, y * f, s + i * 7.1); f *= 2.03; a *= 0.5; } return v; }
const sstep = (a, b, x) => { const k = clamp((x - a) / (b - a)); return k * k * (3 - 2 * k); };

// Eixo estriado com fratura por fadiga: zona lisa com marcas de praia + zona de ruptura final rugosa + lábio de cisalhamento.
function fracturedShaft(THREE, o) {
  const { R, L, spl, N = 18, dep = 0.018, seed = 1, a0 = 0.6 } = o;
  const nT = 216, nr = 64;
  const ox = Math.cos(a0), oz = Math.sin(a0);
  const f = (x, z) => {
    const px = x / R, pz = z / R, d = Math.hypot(px - ox, pz - oz), r = Math.hypot(px, pz);
    const fat = 1 - sstep(1.05, 1.35, d);
    let h = 0.025 * R * fbm(px * 4, pz * 4, seed);
    h += fat * (0.0035 * R * Math.sin(d * 46 + fbm(px * 3, pz * 3, seed + 3) * 2.0) * (0.4 + 0.6 * d)) + fat * 0.012 * R * fbm(px * 14, pz * 14, seed + 4, 3);
    h += fat * 0.03 * R * Math.max(0, 0.25 - d) * 6 * fbm(px * 22, pz * 22, seed + 9); // marcas de catraca na origem
    const w = 1 - fat;
    h += w * (0.2 * R * fbm(px * 4.5, pz * 4.5, seed + 1) + 0.11 * R * Math.abs(fbm(px * 16, pz * 16, seed + 2)) + 0.05 * R * fbm(px * 40, pz * 40, seed + 6, 3) + 0.16 * R * (d - 1.2));
    h += w * 0.14 * R * sstep(0.86, 1.0, r);
    return h;
  };
  const zoneCol = (x, z) => {
    const px = x / R, pz = z / R, d = Math.hypot(px - ox, pz - oz), fat = 1 - sstep(1.05, 1.35, d);
    const beach = 0.5 + 0.5 * Math.sin(d * 34 + fbm(px * 3, pz * 3, seed + 3) * 2.5);
    const n = 0.5 + 0.5 * fbm(px * 30, pz * 30, seed + 5, 3);
    const g = fat * lerp(0.46, 0.54, beach) + (1 - fat) * (0.26 + 0.14 * n);
    const ox2 = fat * 0.07 * Math.max(0, 1 - d * 1.4); // leve oxidação na origem da trinca
    return [g + ox2 * 0.8, g + ox2 * 0.4, Math.max(0, g - ox2 * 0.2)];
  };
  const Rb = (th, y) => {
    const s = sstep(-0.3, 0.3, Math.cos(N * th));
    return R - dep * (1 - s) * sstep(L - spl, L - spl + 0.04, y);
  };
  const pos = [], uv = [], col = [], idx = [];
  // lateral: anéis do topo (fratura) para a base (chanfro)
  const ys = []; const ny = 60;
  for (let j = 0; j <= ny; j++) ys.push(L * (1 - j / ny));
  ys.push(0.0); // repetido para o chanfro
  const side0 = 0;
  ys.forEach((yy, j) => {
    const last = j === ys.length - 1;
    for (let i = 0; i <= nT; i++) {
      const th = (i / nT) * Math.PI * 2;
      let r = Rb(th, yy); if (last) r -= 0.012; const yv = j === ys.length - 2 ? 0.012 : yy;
      const x = r * Math.sin(th), z = r * Math.cos(th);
      const top = j === 0 ? f(x, z) : 0;
      pos.push(x, last ? 0 : yv + top, z); uv.push(i / nT, yy / L * 2); col.push(1, 1, 1);
    }
  });
  const rows = ys.length;
  for (let j = 0; j < rows - 1; j++) for (let i = 0; i < nT; i++) {
    const a = side0 + j * (nT + 1) + i, b = a + nT + 1, c = b + 1, d = a + 1;
    idx.push(a, b, d, b, c, d);
  }
  // base: leque
  const bc = pos.length / 3; pos.push(0, 0, 0); uv.push(0.5, 0.5); col.push(1, 1, 1);
  const ring0 = side0 + (rows - 1) * (nT + 1);
  for (let i = 0; i < nT; i++) idx.push(bc, ring0 + i + 1, ring0 + i);
  const sideCount = idx.length;
  // face de fratura: grade polar
  const f0 = pos.length / 3;
  for (let k = 0; k <= nr; k++) {
    const s = k / nr;
    for (let i = 0; i <= nT; i++) {
      const th = (i / nT) * Math.PI * 2, r = s * Rb(th, L);
      const x = r * Math.sin(th), z = r * Math.cos(th);
      pos.push(x, L + f(x, z), z); uv.push(0.5 + x * 2, 0.5 + z * 2); col.push(...zoneCol(x, z));
    }
  }
  for (let k = 0; k < nr; k++) for (let i = 0; i < nT; i++) {
    const a = f0 + k * (nT + 1) + i, b = a + nT + 1, c = b + 1, d = a + 1;
    idx.push(a, b, c, a, c, d);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  g.setAttribute("color", new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(idx);
  g.addGroup(0, sideCount, 0); g.addGroup(sideCount, idx.length - sideCount, 1);
  g.computeVertexNormals();
  return g;
}

function canvasTex(THREE, w, h, draw, srgb = true) {
  const c = document.createElement("canvas"); c.width = w; c.height = h; draw(c.getContext("2d"), w, h);
  const t = new THREE.CanvasTexture(c); if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}

export async function setup(kit, mode) {
  if (!kit) return;
  K = kit; const { THREE, MAT } = kit;
  const { RoundedBoxGeometry } = await import("three/addons/geometries/RoundedBoxGeometry.js");
  stage = kit.createStage({ bg: 0x070809, fov: 30, bloom: 0.3, env: { top: 3.4, left: 2.6, right: 0.6, fill: 0.9, front: 0.7 }, envIntensity: 1.0, fogNear: 7, fogFar: 26 });
  S = stage.scene;
  const shadowy = (o) => { o.traverse((m) => { if (m.isMesh) { m.castShadow = true; m.receiveShadow = true; } }); return o; };
  const cyl = (r, h, mat, seg = 64) => new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, seg), mat);

  // ================= GANCHO: eixo estriado rompido ao lado do redutor/acoplamento parado =================
  const Hk = sets.hook = new THREE.Group(); S.add(Hk);
  const lk = new THREE.Group(); Hk.add(lk);
  P.hookKey = kit.keyLight(lk, { pos: [-2.2, 5.5, 2.6], intensity: 1.5, size: 3.2 });
  kit.rimLight(lk, { pos: [2.8, 1.8, -2.8], intensity: 4, color: 0x6fa8f0, target: [-0.5, 0.3, 0] });
  const hf = new THREE.DirectionalLight(0xd7e0ec, 0.35); hf.position.set(3, 2, 4); lk.add(hf);
  const fk = new THREE.DirectionalLight(0xfff1e0, 0.9); fk.position.set(4, 2.2, 1.2); fk.target.position.set(0, 0.4, 0); lk.add(fk, fk.target);
  P.amberPt = new THREE.PointLight(0xffa233, 0, 6, 2); P.amberPt.position.set(-1.6, 0.85, -1.25); lk.add(P.amberPt);
  P.redPt = new THREE.PointLight(0xff3a2a, 0.15, 4, 2); P.redPt.position.set(-1.6, 1.02, -1.25); lk.add(P.redPt);
  P.beamSpot = new THREE.SpotLight(0xffa640, 0, 12, 0.32, 0.5, 1.4); P.beamSpot.position.set(-2.55, 1.55, 0); lk.add(P.beamSpot, P.beamSpot.target);

  const floorH = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), MAT.floor({ color: 0x111215 })); floorH.rotation.x = -Math.PI / 2; floorH.position.y = -0.62; floorH.receiveShadow = true; Hk.add(floorH);
  const bed = new THREE.Mesh(new RoundedBoxGeometry(5.6, 0.5, 2.6, 3, 0.03), MAT.paint(0x26292d, { metalness: 0.45, roughness: 0.42, roughnessMap: null }));
  bed.position.set(-0.8, -0.37, 0); bed.receiveShadow = true; Hk.add(bed);
  // faixa de segurança pintada na borda da base
  const stripeTex = canvasTex(THREE, 512, 64, (g, w, h) => { g.fillStyle = "#1a1a1a"; g.fillRect(0, 0, w, h); g.fillStyle = "#c99a1c"; for (let x = -64; x < w + 64; x += 64) { g.beginPath(); g.moveTo(x, h); g.lineTo(x + 32, h); g.lineTo(x + 64, 0); g.lineTo(x + 32, 0); g.fill(); } });
  stripeTex.wrapS = THREE.RepeatWrapping; stripeTex.repeat.set(6, 1);
  const stripe = new THREE.Mesh(new THREE.PlaneGeometry(5.5, 0.09), new THREE.MeshStandardMaterial({ map: stripeTex, roughness: 0.6, metalness: 0.1 }));
  stripe.position.set(-0.8, -0.2, 1.302); Hk.add(stripe);
  // redutor
  const gbM = MAT.paint(0x454c52, { metalness: 0.35, roughness: 0.5 });
  const gb = new THREE.Group(); gb.position.set(-2.65, 0, 0); Hk.add(gb);
  const body = new THREE.Mesh(new RoundedBoxGeometry(1.3, 1.25, 1.25, 4, 0.08), gbM); body.position.y = 0.505; gb.add(body);
  for (let i = 0; i < 6; i++) { const fin = new THREE.Mesh(new THREE.BoxGeometry(0.035, 1.0, 0.1), gbM); fin.position.set(-0.45 + i * 0.18, 0.5, 0.66); gb.add(fin); const fin2 = fin.clone(); fin2.position.z = -0.66; gb.add(fin2); }
  const cover = new THREE.Mesh(new RoundedBoxGeometry(0.8, 0.06, 0.7, 2, 0.02), gbM); cover.position.set(0, 1.15, 0); gb.add(cover);
  for (const [x, z] of [[-0.33, -0.28], [0.33, -0.28], [0.33, 0.28], [-0.33, 0.28]]) { const b = cyl(0.03, 0.04, MAT.darkSteel({ color: 0x2a2c30, metalness: 1, roughness: 0.3 }), 6); b.position.set(x, 1.2, z); gb.add(b); }
  const eye = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.028, 12, 32), gbM); eye.position.set(-0.35, 1.3, 0); gb.add(eye);
  const boss = cyl(0.34, 0.16, gbM); boss.rotation.z = Math.PI / 2; boss.position.set(0.72, 0.42, 0); gb.add(boss);
  const seal = cyl(0.17, 0.05, MAT.rubber()); seal.rotation.z = Math.PI / 2; seal.position.set(0.81, 0.42, 0); gb.add(seal);
  const plateTex = canvasTex(THREE, 256, 128, (g, w, h) => { g.fillStyle = "#b8bcc2"; g.fillRect(0, 0, w, h); g.fillStyle = "#2b2e33"; g.font = "bold 22px monospace"; g.fillText("REDUTOR  i = 25", 16, 36); g.font = "16px monospace"; ["1750 rpm   7,5 kW", "SÉRIE  0412-77", "IP55"].forEach((s, i) => g.fillText(s, 16, 66 + i * 22)); g.strokeStyle = "#2b2e33"; g.strokeRect(4, 4, w - 8, h - 8); });
  const plate = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.21), new THREE.MeshStandardMaterial({ map: plateTex, metalness: 0.6, roughness: 0.35 })); plate.position.set(0.2, 0.62, 0.628); gb.add(plate);
  // giroflex âmbar no redutor
  const bcn = new THREE.Group(); bcn.position.set(0.1, 1.18, -0.2); gb.add(bcn);
  const bBase = cyl(0.09, 0.08, MAT.paint(0x1d1e21)); bBase.position.y = 0.04; bcn.add(bBase);
  P.dome = new THREE.Mesh(new THREE.SphereGeometry(0.085, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshBasicMaterial({ color: new THREE.Color(0xffa020) })); P.dome.position.y = 0.08; P.dome.scale.y = 1.4; bcn.add(P.dome);
  // acoplamento de garras (cubos usinados + aranha elastomérica)
  const hubM = MAT.machined({ color: 0xc9cdd3 });
  const hub1 = cyl(0.33, 0.26, hubM); hub1.rotation.z = Math.PI / 2; hub1.position.set(-1.65, 0.42, 0); Hk.add(hub1);
  const hub2 = cyl(0.33, 0.26, hubM); hub2.rotation.z = Math.PI / 2; hub2.position.set(-1.21, 0.42, 0); Hk.add(hub2);
  const spider = cyl(0.3, 0.14, MAT.paint(0x8f2a14, { roughness: 0.75, clearcoat: 0 })); spider.rotation.z = Math.PI / 2; spider.position.set(-1.43, 0.42, 0); Hk.add(spider);
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2, jaw = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.13, 0.16), hubM);
    jaw.position.set(i % 2 ? -1.47 : -1.39, 0.42 + Math.sin(a) * 0.25, Math.cos(a) * 0.25); jaw.rotation.x = -a; Hk.add(jaw);
  }
  for (const x of [-1.65, -1.21]) { const ss = cyl(0.025, 0.05, MAT.darkSteel(), 6); ss.position.set(x, 0.42 + 0.33, 0); Hk.add(ss); }
  // mancal de rolamento (pillow block)
  const pbM = MAT.paint(0x3a3f45, { metalness: 0.3, roughness: 0.55 });
  const pb = new THREE.Group(); pb.position.set(-0.62, 0, 0); Hk.add(pb);
  const pbBase = new THREE.Mesh(new RoundedBoxGeometry(0.32, 0.16, 1.15, 2, 0.02), pbM); pbBase.position.y = -0.04; pb.add(pbBase);
  const pbBody = cyl(0.3, 0.3, pbM); pbBody.rotation.z = Math.PI / 2; pbBody.position.y = 0.42; pb.add(pbBody);
  const pbNeck = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.3, 0.42), pbM); pbNeck.position.y = 0.18; pb.add(pbNeck);
  for (const z of [-0.45, 0.45]) { const b = cyl(0.045, 0.1, MAT.darkSteel({ color: 0x2a2c30, metalness: 1, roughness: 0.3 }), 6); b.position.set(0, 0.08, z); pb.add(b); }
  const grease = cyl(0.02, 0.07, MAT.chrome({ color: 0xd8b860, roughness: 0.25 })); grease.position.set(0, 0.76, 0); pb.add(grease);
  // eixo rompido: peça A (presa no acoplamento) e peça B (caída sobre a base)
  const R = 0.225;
  const stM = MAT.steel({ color: 0xb4b8be, roughness: 0.3 });
  const frM = new THREE.MeshStandardMaterial({ color: 0xc8d0d8, vertexColors: true, metalness: 0.7, roughness: 0.72 });
  const gA = fracturedShaft(THREE, { R, L: 1.32, spl: 0.42, seed: 3, a0: 2.2 });
  P.shaftA = new THREE.Mesh(gA, [stM, frM]); P.shaftA.rotation.z = -Math.PI / 2; P.shaftA.position.set(-1.3, 0.42, 0); P.shaftA.castShadow = P.shaftA.receiveShadow = true; Hk.add(P.shaftA);
  const gB = fracturedShaft(THREE, { R, L: 1.05, spl: 0.3, seed: 11, a0: -0.9 });
  const sB = new THREE.Mesh(gB, [stM, frM]); sB.rotation.z = Math.PI / 2; sB.castShadow = sB.receiveShadow = true;
  P.shaftB = new THREE.Group(); P.shaftB.add(sB); P.shaftB.position.set(1.52, -0.12 + R, 0.36); P.shaftB.rotation.y = 0.32; Hk.add(P.shaftB);
  // chaveta na ponta da peça B e fragmentos
  for (let i = 0; i < 7; i++) {
    const fr = new THREE.Mesh(new THREE.IcosahedronGeometry(0.018 + rnd(i * 4.1) * 0.03, 0), frM);
    fr.position.set(0.15 + rnd(i * 2.3) * 0.5, -0.12 + 0.015, 0.05 + rnd(i * 7.7) * 0.6); fr.rotation.set(rnd(i) * 6, rnd(i * 2) * 6, rnd(i * 3) * 6); fr.scale.y = 0.6; fr.castShadow = true; Hk.add(fr);
  }
  // coluna de sinalização (verde apagada · âmbar piscando · vermelha acesa)
  const st = new THREE.Group(); st.position.set(-1.6, -0.3, -1.45); Hk.add(st);
  const pole = cyl(0.025, 1.45, MAT.chrome({ roughness: 0.25 }), 16); pole.position.y = 0.2; st.add(pole);
  const lensMat = (c) => new THREE.MeshPhysicalMaterial({ color: c, roughness: 0.25, transmission: 0, transparent: true, opacity: 0.9, emissive: c, emissiveIntensity: 0.05 });
  P.lens = { g: lensMat(0x0b2a16), a: lensMat(0xd98a10), r: lensMat(0xcc2216) };
  [["g", 0.98], ["a", 1.15], ["r", 1.32]].forEach(([k, y]) => { const m = cyl(0.085, 0.16, P.lens[k], 40); m.position.y = y; st.add(m); const sep = cyl(0.088, 0.012, MAT.paint(0x1a1b1d), 40); sep.position.y = y + 0.086; st.add(sep); });
  const cap = cyl(0.088, 0.04, MAT.paint(0x1a1b1d), 40); cap.position.y = 1.43; st.add(cap);
  const stBase = cyl(0.12, 0.05, MAT.paint(0x1a1b1d), 40); stBase.position.y = -0.3; st.add(stBase);
  // galpão ao fundo: luminárias e colunas
  for (let i = 0; i < 5; i++) kit.tubeLight(Hk, 2.4, [-5 + i * 2.6, 4.2, -7 - (i % 2) * 2], 0, i === 2 ? 0.6 : 2.2);
  for (let i = 0; i < 4; i++) { const c = new THREE.Mesh(new THREE.BoxGeometry(0.4, 8, 0.4), MAT.paint(0x1d2024)); c.position.set(-6 + i * 4, 3.4, -8.5); Hk.add(c); }
  shadowy(gb); shadowy(pb); shadowy(st);
  [hub1, hub2, spider].forEach((m) => { m.castShadow = m.receiveShadow = true; });

  // ================= BANCADA DO FORNECEDOR (noite) =================
  const Sh = sets.shop = new THREE.Group(); S.add(Sh);
  const ls = new THREE.Group(); Sh.add(ls);
  const pend = new THREE.SpotLight(0xffc890, 26, 14, 0.5, 0.85, 1.6); pend.position.set(-1.4, 4.6, -1.3); pend.target.position.set(0.1, 0, -0.1);
  pend.castShadow = true; pend.shadow.mapSize.set(2048, 2048); pend.shadow.bias = -0.0003; pend.shadow.normalBias = 0.02; ls.add(pend, pend.target);
  const moon = new THREE.DirectionalLight(0x9db8e8, 0.28); moon.position.set(4, 3, 1); ls.add(moon);
  kit.rimLight(ls, { pos: [2.6, 1.4, -2.6], intensity: 5, color: 0x6fa8f0, target: [0, 0, 0] });
  P.screenPt = new THREE.PointLight(0xcfe0ff, 0, 3.2, 2); ls.add(P.screenPt);
  // tampo de aço
  const topM = MAT.steel({ color: 0x80858c, roughness: 0.5 });
  const top = new THREE.Mesh(new THREE.BoxGeometry(7, 0.12, 5), topM); top.position.set(0, -0.06, -0.6); top.receiveShadow = true; Sh.add(top);
  const floorS = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), MAT.floor({ color: 0x0f1012 })); floorS.rotation.x = -Math.PI / 2; floorS.position.y = -1.0; Sh.add(floorS);
  // desenho técnico impresso (A4) sob o celular
  const dwg = canvasTex(THREE, 1024, 1448, (g, w, h) => {
    g.fillStyle = "#a9a8a2"; g.fillRect(0, 0, w, h);
    g.strokeStyle = "#2a2c30"; g.lineWidth = 3; g.strokeRect(30, 30, w - 60, h - 60);
    g.lineWidth = 4; const cx = w / 2;
    // eixo em vista lateral (vertical na folha)
    const steps = [[200, 70], [330, 95], [880, 110], [1020, 95], [1130, 70]];
    let y0 = 160; steps.forEach(([y1, r]) => { g.strokeRect(cx - r, y0, 2 * r, y1 - y0); y0 = y1; });
    g.setLineDash([30, 8, 6, 8]); g.lineWidth = 2; g.beginPath(); g.moveTo(cx, 120); g.lineTo(cx, 1170); g.stroke(); g.setLineDash([]);
    g.lineWidth = 2; g.font = "28px monospace"; g.fillStyle = "#2a2c30";
    [[600, "Ø45 h6"], [270, "Ø40 k6"], [960, "Ø40 k6"]].forEach(([y, s]) => { g.beginPath(); g.moveTo(cx + 140, y); g.lineTo(cx + 260, y); g.stroke(); g.fillText(s, cx + 270, y + 10); });
    g.beginPath(); g.moveTo(160, 160); g.lineTo(160, 1130); g.stroke(); g.save(); g.translate(150, 700); g.rotate(-Math.PI / 2); g.fillText("485", 0, 0); g.restore();
    g.strokeRect(cx + 20, 450, 30, 300); // rasgo de chaveta
    g.strokeRect(560, 1230, w - 590, 188); g.beginPath(); g.moveTo(560, 1300); g.lineTo(w - 30, 1300); g.stroke();
    g.font = "bold 30px monospace"; g.fillText("EIXO Ø45 h6", 580, 1280); g.font = "24px monospace"; g.fillText("SAE 4140 · 1:2", 580, 1345); g.fillText("REV B", 580, 1390);
  });
  const paper = new THREE.Mesh(new THREE.PlaneGeometry(2.1, 2.97), new THREE.MeshStandardMaterial({ map: dwg, roughness: 0.92, metalness: 0 }));
  paper.rotation.x = -Math.PI / 2; paper.rotation.z = -0.2; paper.position.set(0.55, 0.002, -0.55); paper.receiveShadow = true; Sh.add(paper);
  // celular (tela para cima)
  P.phone = new THREE.Group(); Sh.add(P.phone);
  const pbody = new THREE.Mesh(new RoundedBoxGeometry(0.75, 0.08, 1.55, 5, 0.035), new THREE.MeshPhysicalMaterial({ color: 0x2b2d31, metalness: 1, roughness: 0.32 }));
  pbody.position.y = 0.04; pbody.castShadow = true; pbody.receiveShadow = true; P.phone.add(pbody);
  const rr = (w, h, r) => { const s = new THREE.Shape(); s.moveTo(-w / 2 + r, -h / 2); s.lineTo(w / 2 - r, -h / 2); s.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r); s.lineTo(w / 2, h / 2 - r); s.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2); s.lineTo(-w / 2 + r, h / 2); s.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r); s.lineTo(-w / 2, -h / 2 + r); s.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2); return s; };
  const glassGeo = new THREE.ShapeGeometry(rr(0.73, 1.53, 0.055), 12);
  const gl = new THREE.Mesh(glassGeo, new THREE.MeshPhysicalMaterial({ color: 0x050607, metalness: 0, roughness: 0.04, clearcoat: 1, clearcoatRoughness: 0.03 }));
  gl.rotation.x = -Math.PI / 2; gl.position.y = 0.0805; P.phone.add(gl);
  const scrGeo = new THREE.ShapeGeometry(rr(PH.w, PH.l, 0.045), 12);
  const uvA = scrGeo.attributes.uv, pA = scrGeo.attributes.position;
  for (let i = 0; i < uvA.count; i++) uvA.setXY(i, pA.getX(i) / PH.w + 0.5, pA.getY(i) / PH.l + 0.5);
  P.wall = canvasTex(THREE, 460, 992, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, "#16345e"); gr.addColorStop(0.45, "#0b1a33"); gr.addColorStop(1, "#05080f"); g.fillStyle = gr; g.fillRect(0, 0, w, h);
    const rg = g.createRadialGradient(w * 0.3, h * 0.12, 0, w * 0.3, h * 0.12, h * 0.6); rg.addColorStop(0, "rgba(90,162,245,0.35)"); rg.addColorStop(1, "rgba(90,162,245,0)"); g.fillStyle = rg; g.fillRect(0, 0, w, h);
  });
  P.scrMat = new THREE.MeshPhysicalMaterial({ color: 0x000000, emissive: 0xffffff, emissiveMap: P.wall, emissiveIntensity: 0, roughness: 0.5, specularIntensity: 0, transparent: true, opacity: 0 });
  const scr = new THREE.Mesh(scrGeo, P.scrMat); scr.rotation.x = -Math.PI / 2; scr.position.y = PH.y; P.phone.add(scr);
  const camDot = new THREE.Mesh(new THREE.CircleGeometry(0.018, 24), new THREE.MeshPhysicalMaterial({ color: 0x0a0b10, roughness: 0.1, metalness: 0.5 })); camDot.rotation.x = -Math.PI / 2; camDot.position.set(0, 0.0825, -0.69); P.phone.add(camDot);
  for (const [z, l] of [[-0.35, 0.22], [-0.02, 0.12]]) { const btn = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.03, l), MAT.darkSteel({ color: 0x3a3c40, metalness: 1, roughness: 0.3 })); btn.position.set(0.378, 0.04, z); P.phone.add(btn); }
  // morsa de bancada com bloco usinado
  const vM = MAT.paint(0x3b4046, { metalness: 0.4, roughness: 0.45 }), jM = MAT.steel({ color: 0xaeb2b8, roughness: 0.28 });
  P.vise = new THREE.Group(); P.vise.position.set(-0.55, 0, -2.05); P.vise.rotation.y = 0.28; Sh.add(P.vise);
  const vb = new THREE.Mesh(new RoundedBoxGeometry(1.1, 0.14, 0.95, 3, 0.03), vM); vb.position.y = 0.07; P.vise.add(vb);
  const vbody = new THREE.Mesh(new RoundedBoxGeometry(0.8, 0.36, 1.25, 3, 0.04), vM); vbody.position.set(0, 0.32, 0.1); P.vise.add(vbody);
  const fj = new THREE.Mesh(new RoundedBoxGeometry(1.25, 0.42, 0.32, 3, 0.03), vM); fj.position.set(0, 0.62, -0.42); P.vise.add(fj);
  const mj = new THREE.Mesh(new RoundedBoxGeometry(1.25, 0.42, 0.32, 3, 0.03), vM); mj.position.set(0, 0.62, 0.32); P.vise.add(mj);
  const jp1 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.3, 0.05), jM); jp1.position.set(0, 0.68, -0.235); P.vise.add(jp1);
  const jp2 = jp1.clone(); jp2.position.z = 0.135; P.vise.add(jp2);
  const blk = new THREE.Mesh(new RoundedBoxGeometry(0.7, 0.34, 0.32, 2, 0.01), MAT.aluminum()); blk.position.set(0, 0.86, -0.05); P.vise.add(blk);
  const screw = cyl(0.055, 0.7, MAT.chrome({ roughness: 0.2 }), 32); screw.rotation.x = Math.PI / 2; screw.position.set(0, 0.5, 0.82); P.vise.add(screw);
  const bar = cyl(0.03, 1.1, MAT.chrome({ roughness: 0.15 }), 24); bar.rotation.z = Math.PI / 2; bar.position.set(0.2, 0.5, 1.18); P.vise.add(bar);
  for (const x of [-0.35, 0.75]) { const ball = new THREE.Mesh(new THREE.SphereGeometry(0.055, 24, 16), MAT.chrome({ roughness: 0.15 })); ball.position.set(x, 0.5, 1.18); P.vise.add(ball); }
  shadowy(P.vise);
  // peças usinadas: eixos escalonados, caixa de rolamento, parafusos, paquímetro
  const shaftLathe = (prof) => { const pts = prof.map(([r, y]) => new THREE.Vector2(r, y)); const g = new THREE.LatheGeometry(pts, 72); return g; };
  const prof1 = [[0.0001, 0], [0.19, 0], [0.2, 0.01], [0.2, 0.32], [0.225, 0.33], [0.225, 1.02], [0.2, 1.03], [0.2, 1.3], [0.19, 1.31], [0.0001, 1.31]];
  const s1 = new THREE.Mesh(shaftLathe(prof1), MAT.machined({ color: 0xd8dce1 })); s1.rotation.z = Math.PI / 2; s1.rotation.y = 0.0;
  const sh1 = new THREE.Group(); sh1.add(s1); sh1.position.set(0.95, 0.225, 1.2); sh1.rotation.y = 0.55; Sh.add(sh1);
  const prof2 = [[0.0001, 0], [0.13, 0], [0.14, 0.01], [0.14, 0.25], [0.17, 0.26], [0.17, 0.8], [0.13, 0.81], [0.0001, 0.81]];
  const s2 = new THREE.Mesh(shaftLathe(prof2), MAT.machined({ color: 0xcfd3d8 })); s2.rotation.z = Math.PI / 2;
  const sh2 = new THREE.Group(); sh2.add(s2); sh2.position.set(1.05, 0.17, 1.72); sh2.rotation.y = 0.45; Sh.add(sh2);
  shadowy(sh1); shadowy(sh2);
  const hh = kit.bearingHousing(MAT.machined()); hh.position.set(1.15, 0, -1.05); hh.rotation.y = 0.5; Sh.add(hh);
  [[-0.62, 0.05, 0.4], [0.62, 0.55, 2.2]].forEach(([x, z, r]) => { const b = kit.boltM8(); b.rotation.z = Math.PI / 2; b.rotation.y = r; b.position.set(x, 0.065, z); Sh.add(b); });
  const cal = new THREE.Group(); cal.position.set(-0.85, 0.012, 1.0); cal.rotation.y = -1.05; Sh.add(cal);
  const calM = MAT.steel({ color: 0xc5c9cf, roughness: 0.22 });
  const beam = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.024, 0.17), calM); cal.add(beam);
  const jawF = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.024, 0.5), calM); jawF.position.set(-0.97, 0, 0.3); cal.add(jawF);
  const slider = new THREE.Mesh(new RoundedBoxGeometry(0.42, 0.06, 0.26, 2, 0.015), MAT.paint(0x1c1d20)); slider.position.set(-0.45, 0.02, 0.02); cal.add(slider);
  const lcd = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.08), new THREE.MeshPhysicalMaterial({ color: 0x3c4038, roughness: 0.15 })); lcd.rotation.x = -Math.PI / 2; lcd.position.set(-0.45, 0.051, 0.03); cal.add(lcd);
  const jawM2 = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.024, 0.45), calM); jawM2.position.set(-0.68, 0, 0.27); cal.add(jawM2);
  shadowy(cal);
  // centro de usinagem em repouso ao fundo (silhueta + LED de standby)
  const vmc = new THREE.Mesh(new RoundedBoxGeometry(3.4, 3.2, 2.2, 3, 0.06), MAT.paint(0x2a2d31)); vmc.position.set(-1.0, 1.0, -5.4); Sh.add(vmc);
  const win = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 1.0), new THREE.MeshPhysicalMaterial({ color: 0x0b0d10, roughness: 0.1 })); win.position.set(-1.0, 1.5, -4.29); Sh.add(win);
  const led = new THREE.Mesh(new THREE.SphereGeometry(0.03, 12, 8), MAT.emissive(0xffb040, 3)); led.position.set(0.5, 2.3, -4.28); Sh.add(led);
}

const show = (name) => { for (const k in sets) sets[k].visible = k === name; };

export function render3d(t) {
  const THREE = K.THREE, cam = stage.camera;
  const in3d = t < T.search || (t >= T.shop && t < T.results) || (t >= T.dark && t < T.trans) || (t >= T.payoff && t < T.proof);
  if (!in3d) return false;
  // ----- GANCHO
  if (t < T.search) {
    show("hook"); S.background = new THREE.Color(0x07080a); S.fog = new THREE.Fog(0x07080a, 7, 26); S.environmentIntensity = 0.9; stage.bloom.strength = 0.42;
    const blink = Math.floor(t * 2) % 2 === 0;
    P.lens.r.emissiveIntensity = 2.2; P.lens.a.emissiveIntensity = blink ? 1.5 : 0.08; P.lens.g.emissiveIntensity = 0.05;
    P.amberPt.intensity = blink ? 1.2 : 0; P.redPt.intensity = 0.15;
    // giroflex: feixe girando
    const ang = t * Math.PI * 2 * 0.9;
    P.beamSpot.intensity = 7;
    P.beamSpot.target.position.set(-2.55 + Math.cos(ang) * 4, 0.2, Math.sin(ang) * 4);
    P.dome.material.color.setRGB(1.0 * (1.4 + Math.max(0, Math.cos(ang - 0.8)) * 3), 0.6 * (1.4 + Math.max(0, Math.cos(ang - 0.8)) * 3), 0.1);
    const k = E.inOutCubic(seg(t, 0.2, T.search));
    stage.look([lerp(1.1, 2.6, k), lerp(0.78, 1.8, k), lerp(0.52, 1.4, k)], [lerp(0.0, -0.6, k), lerp(0.42, 0.55, k), lerp(0.0, -0.3, k)], lerp(28, 34, k));
    return true;
  }
  // ----- BANCADA
  show("shop"); S.background = new THREE.Color(0x060708); S.fog = new THREE.Fog(0x060708, 7, 18); S.environmentIntensity = 0.42; stage.bloom.strength = 0.35;
  const [vx, vz, vr] = vib(t);
  P.phone.position.set(PH.x + vx, 0, PH.z + vz); P.phone.rotation.y = PH.ry + vr;
  const on = t >= LIGHT_ON ? E.outCubic(seg(t, LIGHT_ON, LIGHT_ON + 0.18)) : 0;
  const dim = t >= T.payoff ? 1 - 0.25 * seg(t, 31.5, 33.5) : 1;
  P.scrMat.opacity = on; P.scrMat.emissiveIntensity = on * 1.15 * dim;
  P.screenPt.position.set(PH.x + vx, 0.22, PH.z + vz); P.screenPt.intensity = on * 0.55 * dim;
  const c = shopCam(t);
  stage.look(c.pos, c.tgt, c.fov);
  return true;
}

// ---------- 2D ----------
const MONO = (s, w) => F.m(s, w);
function label(s, t, t0, t1, right) {
  const a = seg(t, t0, t0 + 0.3) * (1 - seg(t, t1 - 0.2, t1)); if (a <= 0) return;
  ctx.save(); ctx.globalAlpha = a;
  ctx.fillStyle = C.brand; ctx.fillRect(84, 316, 40 * E.outCubic(seg(t, t0, t0 + 0.5)), 3);
  txt(s, 84, 296, { font: MONO(30), color: C.ink, align: "left", ls: 8 });
  if (right) txt(right, W - 84, 296, { font: MONO(26), color: C.muted, align: "right", ls: 4 });
  ctx.restore();
}
function caption(s, t, t0, t1, y = 1560) {
  const a = seg(t, t0, t0 + 0.3) * (1 - seg(t, t1 - 0.25, t1)); if (a <= 0) return;
  const dy = (1 - E.outCubic(seg(t, t0, t0 + 0.4))) * 6;
  ctx.save(); ctx.globalAlpha = a; ctx.shadowColor = "rgba(0,0,0,0.85)"; ctx.shadowBlur = 18;
  txt(s, W / 2, y + dy, { font: F.b(fitSize(s, F.b, 42, 940, 600), 600), color: C.ink });
  ctx.restore();
}
// frase-chave (Inter semibold grande, entra seco)
function keyLine(s, t, t0, t1, y = 1500) {
  const a = seg(t, t0, t0 + 0.35) * (1 - seg(t, t1 - 0.2, t1)); if (a <= 0) return;
  const dy = (1 - E.outCubic(seg(t, t0, t0 + 0.45))) * 8;
  ctx.save(); ctx.globalAlpha = a; ctx.shadowColor = "rgba(0,0,0,0.9)"; ctx.shadowBlur = 24;
  txt(s, W / 2, y + dy, { font: F.b(fitSize(s, F.b, 58, 940, 600), 600), color: C.ink, ls: -0.5 });
  ctx.restore();
}
function fitSize(s, fam, size, maxW, w) { const m = measure(s, w ? fam(size, w) : fam(size)); return m > maxW ? Math.floor(size * maxW / m) : size; }
function fitLines(lines, size, maxW, ls = 0) { let s = size; for (const l of lines) { const m = measure(l, F.d(size), ls); if (m > maxW) s = Math.min(s, Math.floor(size * maxW / m)); } return s; }
function corners(a = 0.5, k = 1) {
  ctx.save(); ctx.strokeStyle = `rgba(238,242,247,${a})`; ctx.lineWidth = 2; const m = 48 + (1 - k) * -60, L = 36;
  for (const [x, y, sx, sy] of [[m, 120 + (1 - k) * -60, 1, 1], [W - m, 120 + (1 - k) * -60, -1, 1], [m, H - 120 - (1 - k) * -60, 1, -1], [W - m, H - 120 - (1 - k) * -60, -1, -1]]) { ctx.beginPath(); ctx.moveTo(x, y + sy * L); ctx.lineTo(x, y); ctx.lineTo(x + sx * L, y); ctx.stroke(); }
  ctx.restore();
}
function darkBand(y0, y1, a = 0.75) { // degradê de leitura atrás do texto sobre 3D
  const g = ctx.createLinearGradient(0, y0, 0, y1); g.addColorStop(0, "rgba(0,0,0,0)"); g.addColorStop(0.45, `rgba(0,0,0,${a})`); g.addColorStop(1, `rgba(0,0,0,${a})`);
  ctx.fillStyle = g; ctx.fillRect(0, y0, W, y1 - y0);
}
function cursor(x, y, press = 0, a = 1) {
  if (a <= 0) return;
  ctx.save(); ctx.globalAlpha = a; ctx.translate(x, y); const s = 1.35 * (1 - press * 0.14); ctx.scale(s, s);
  ctx.beginPath(); [[0, 0], [0, 34], [9, 26], [15, 40], [21, 37], [15, 24], [27, 24]].forEach(([px, py], i) => (i ? ctx.lineTo(px, py) : ctx.moveTo(px, py))); ctx.closePath();
  ctx.shadowColor = "rgba(0,0,0,0.6)"; ctx.shadowBlur = 10; ctx.fillStyle = "#fff"; ctx.fill(); ctx.shadowBlur = 0; ctx.strokeStyle = "#0c0c0d"; ctx.lineWidth = 2; ctx.stroke();
  ctx.restore();
}
function ripple(x, y, t, t0) {
  const p = seg(t, t0, t0 + 0.45); if (p <= 0 || p >= 1) return;
  ctx.save(); ctx.strokeStyle = `rgba(90,162,245,${0.8 * (1 - p)})`; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(x, y, 14 + 50 * E.outCubic(p), 0, 7); ctx.stroke(); ctx.restore();
}
function check(x, y, s, p, color = C.brand, lw = 5) {
  if (p <= 0) return; ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = lw; ctx.lineCap = "round"; ctx.lineJoin = "round";
  const pts = [[-0.5, 0], [-0.15, 0.35], [0.55, -0.4]], len = [0.49, 1.03], tot = len[0] + len[1];
  ctx.beginPath(); ctx.moveTo(x + pts[0][0] * s, y + pts[0][1] * s);
  const d = p * tot; if (d <= len[0]) { const f = d / len[0]; ctx.lineTo(x + lerp(pts[0][0], pts[1][0], f) * s, y + lerp(pts[0][1], pts[1][1], f) * s); }
  else { ctx.lineTo(x + pts[1][0] * s, y + pts[1][1] * s); const f = (d - len[0]) / len[1]; ctx.lineTo(x + lerp(pts[1][0], pts[2][0], f) * s, y + lerp(pts[1][1], pts[2][1], f) * s); }
  ctx.stroke(); ctx.restore();
}
const clock = (h, m, s) => `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}${s != null ? ":" + String(s).padStart(2, "0") : ""}`;

// ---- busca neutra (S02/S04/S05)
function searchScreen(t, L) {
  ctx.fillStyle = "#0e0f11"; ctx.fillRect(0, 0, W, H);
  // leve grade de fundo
  ctx.save(); ctx.strokeStyle = "rgba(90,162,245,0.035)"; ctx.lineWidth = 1;
  for (let x = 0; x < W; x += 72) { ctx.beginPath(); ctx.moveTo(x + 0.5, 0); ctx.lineTo(x + 0.5, H); ctx.stroke(); }
  ctx.restore();
  const opened = E.inOutCubic(seg(t, 11.95, 12.45));
  ctx.save();
  if (opened > 0) { ctx.filter = `blur(${(opened * 14).toFixed(1)}px)`; ctx.globalAlpha = 1 - opened * 0.6; }
  // campo de busca
  const fy = 372, typed = t < T.shop ? Math.floor(seg(t, 3.7, 5.45) * L.q.length) : L.q.length;
  const focus = t < 6.0;
  rrect(70, fy, 940, 112, 56); ctx.fillStyle = "#151516"; ctx.fill(); ctx.strokeStyle = focus ? "rgba(34,130,240,0.7)" : "#2a2a2d"; ctx.lineWidth = 2; ctx.stroke();
  ctx.save(); ctx.strokeStyle = C.muted; ctx.lineWidth = 3.5; ctx.beginPath(); ctx.arc(128, fy + 52, 15, 0, 7); ctx.stroke(); ctx.beginPath(); ctx.moveTo(139, fy + 63); ctx.lineTo(152, fy + 76); ctx.stroke(); ctx.restore();
  const qs = L.q.slice(0, typed), qf = MONO(fitSize(L.q, MONO, 32, 790));
  txt(qs, 176, fy + 67, { font: qf, color: C.ink, align: "left" });
  if (focus && Math.floor(t * 2.4) % 2 === 0) { ctx.fillStyle = C.brand; ctx.fillRect(176 + measure(qs, qf) + 4, fy + 34, 3, 44); }
  // resultados
  const r0 = 5.85;
  if (t > r0) {
    const items = [L.comp, ...L.others];
    items.forEach(([dom, title], i) => {
      const y = 548 + i * 205, a = E.outCubic(seg(t, r0 + 0.08 * i, r0 + 0.08 * i + 0.3));
      if (a <= 0) return;
      const isComp = i === 0, hover = isComp ? seg(t, 10.85, 11.05) : 0;
      ctx.save(); ctx.globalAlpha = a; ctx.translate(0, (1 - a) * 18);
      rrect(70, y, 940, 180, 22); ctx.fillStyle = isComp ? `rgba(26,27,30,${1})` : "#131416"; ctx.fill();
      ctx.strokeStyle = hover ? `rgba(238,242,247,${0.25 + 0.35 * hover})` : "#232326"; ctx.lineWidth = 2; ctx.stroke();
      // favicon neutro
      rrect(106, y + 32, 40, 40, 10); ctx.fillStyle = isComp ? "#2b2d31" : "#202124"; ctx.fill();
      txt(dom, 166, y + 61, { font: MONO(22), color: C.muted, align: "left" });
      ctx.save(); if (!isComp) ctx.filter = "blur(1.6px)";
      txt(title, 106, y + 120, { font: F.b(fitSize(title, F.b, 32, 860, 600), 600), color: isComp ? C.ink : "rgba(238,242,247,0.55)", align: "left" });
      ctx.fillStyle = "rgba(161,161,168,0.22)"; rrect(106, y + 140, 640 - i * 60, 14, 7); ctx.fill();
      ctx.restore();
      if (isComp && hover) { ctx.fillStyle = `rgba(238,242,247,${0.5 * hover})`; ctx.fillRect(106, y + 128, measure(title, F.b(fitSize(title, F.b, 32, 860, 600), 600)), 2); }
      ctx.restore();
    });
    // empresa ausente
    const ga = E.outCubic(seg(t, 10.2, 10.6));
    if (ga > 0 && t > T.results) {
      const y = 548 + 4 * 205;
      ctx.save(); ctx.globalAlpha = ga; ctx.setLineDash([10, 10]); rrect(70, y, 940, 150, 22); ctx.strokeStyle = "rgba(161,161,168,0.45)"; ctx.lineWidth = 2; ctx.stroke(); ctx.setLineDash([]);
      txt(L.absent[0], 106, y + 66, { font: MONO(26), color: C.soft, align: "left", ls: 6 });
      txt(L.absent[1], 106, y + 112, { font: F.b(30, 500), color: C.muted, align: "left" });
      ctx.restore();
    }
  }
  ctx.restore();
  // página do concorrente aberta (desfocada)
  if (opened > 0) {
    ctx.save(); ctx.globalAlpha = opened;
    const sc = lerp(0.9, 1, opened);
    ctx.translate(W / 2, 760); ctx.scale(sc, sc); ctx.translate(-W / 2, -760);
    ctx.filter = "blur(9px)";
    rrect(40, 380, 1000, 1250, 26); ctx.fillStyle = "#9da2a8"; ctx.fill();
    ctx.fillStyle = "#2b3440"; ctx.fillRect(40, 380, 1000, 110);
    ctx.fillStyle = "#c8ccd2"; ctx.fillRect(90, 560, 900, 360);
    ctx.fillStyle = "#3a4452"; [[90, 980, 620], [90, 1040, 760], [90, 1100, 540]].forEach(([x, y, w]) => ctx.fillRect(x, y, w, 26));
    ctx.fillStyle = "#d24a2a"; rrect(90, 1200, 360, 90, 45); ctx.fill();
    ctx.restore();
    ctx.fillStyle = `rgba(0,0,0,${0.55 * opened})`; ctx.fillRect(0, 0, W, H);
  }
  // cursor (varre os resultados e clica no concorrente)
  if (t >= 9.5 && t < 12.3) {
    const K = keyframes(t, [{ t: 9.5, x: 860, y: 1560 }, { t: 10.2, x: 760, y: 1240 }, { t: 10.6, x: 700, y: 1010 }, { t: 10.95, x: 610, y: 668 }, { t: 12.3, x: 610, y: 668 }]);
    const press = t > 11.72 && t < 11.86 ? 1 : 0;
    cursor(K.x, K.y, press, seg(t, 9.5, 9.7) * (1 - seg(t, 12.0, 12.3)));
    ripple(K.x, K.y, t, 11.75);
  }
}

// ---- transição (S07)
function transition(t, L) {
  background(t, { glow: 0.55, gridAlpha: 0.06, speed: 18 });
  const k = E.outCubic(seg(t, T.trans, T.trans + 0.6));
  corners(0.7, k);
  const lw = 360 * E.inOutCubic(seg(t, T.trans + 0.15, T.trans + 0.7));
  ctx.fillStyle = C.brand; ctx.fillRect(W / 2 - lw / 2, 958, lw, 3);
  txt(L.trans, W / 2, 920, { font: MONO(30), color: C.ink, ls: 8, alpha: seg(t, T.trans + 0.25, T.trans + 0.55) });
  const blink = Math.floor(t * 3) % 2 === 0;
  ctx.save(); ctx.globalAlpha = seg(t, T.trans + 0.1, T.trans + 0.3); ctx.fillStyle = "#e5484d"; ctx.beginPath(); ctx.arc(W / 2 - 40, 1020, 9, 0, 7); if (blink) ctx.fill(); ctx.restore();
  txt("REC", W / 2 + 12, 1030, { font: MONO(26), color: C.muted, ls: 6, alpha: seg(t, T.trans + 0.1, T.trans + 0.3) });
}

// ---- site real do portfólio (S08)
function realSite(t, L) {
  background(t, { glow: 0.5, gridAlpha: 0.045, speed: 14 });
  const out = E.inOutCubic(seg(t, 19.35, 19.75));
  const rev = E.outCubic(seg(t, 17.05, 17.6)), zoom = 1 + 0.05 * seg(t, 17.0, 19.6);
  const img = IMG["gv-drill.jpg"], bw = 980, bh = 58 + (img ? img.height * ((bw - 4) / img.width) : 450);
  ctx.save(); ctx.globalAlpha = rev * (1 - out);
  ctx.translate(W / 2, 880 - out * 120); ctx.scale(zoom * lerp(0.94, 1, rev), zoom * lerp(0.94, 1, rev)); ctx.translate(-W / 2, -880);
  browser(W / 2 - bw / 2, 880 - bh / 2, bw, bh, img, { url: "gvdrill.com.br", reveal: 1 });
  ctx.restore();
}

// ---- site industrial: demonstração de recurso (S09/S10)
function shaftArt(x, y, w, h) { // ilustração de eixo escalonado (render 2D com gradiente metálico)
  const steps = [[0, 0.16, 0.6], [0.16, 0.28, 0.78], [0.28, 0.8, 1.0], [0.8, 0.9, 0.78], [0.9, 1, 0.6]];
  steps.forEach(([a, b, r]) => {
    const hh = h * r, yy = y + (h - hh) / 2;
    const g = ctx.createLinearGradient(0, yy, 0, yy + hh);
    g.addColorStop(0, "#5c6168"); g.addColorStop(0.18, "#e9edf2"); g.addColorStop(0.32, "#aab0b8"); g.addColorStop(0.62, "#6d737b"); g.addColorStop(0.85, "#c3c8cf"); g.addColorStop(1, "#3c4046");
    ctx.fillStyle = g; rrect(x + a * w, yy, (b - a) * w + 1, hh, 4); ctx.fill();
  });
  ctx.fillStyle = "rgba(20,22,26,0.85)"; rrect(x + 0.4 * w, y + h * 0.42, 0.25 * w, h * 0.16, h * 0.08); ctx.fill(); // rasgo de chaveta
}
function siteDemo(t, L) {
  const s = L.site;
  background(t, { glow: 0.45, gridAlpha: 0.045, speed: 14 });
  const ent = E.outCubic(seg(t, 19.45, 19.9));
  const px = 60, py = 368, pw = 960, ph = 1130, bar = 58;
  ctx.save(); ctx.globalAlpha = ent; ctx.translate(0, (1 - ent) * 80);
  ctx.shadowColor = "rgba(34,130,240,0.35)"; ctx.shadowBlur = 50; rrect(px, py, pw, ph, 22); ctx.fillStyle = "#111214"; ctx.fill(); ctx.shadowBlur = 0;
  ctx.strokeStyle = "rgba(90,162,245,0.45)"; ctx.lineWidth = 2; ctx.stroke();
  ["#ff5f57", "#febc2e", "#28c840"].forEach((c, i) => { ctx.fillStyle = c; ctx.beginPath(); ctx.arc(px + 34 + i * 30, py + bar / 2, 9, 0, 7); ctx.fill(); });
  rrect(px + 140, py + 13, pw - 180, 32, 16); ctx.fillStyle = "#0c0c0d"; ctx.fill();
  txt(s.url, px + 162, py + 37, { font: F.m(20, 400), color: C.muted, align: "left" });
  ctx.save(); rrect(px + 2, py + bar, pw - 4, ph - bar - 2, [0, 0, 20, 20]); ctx.clip();
  const scroll = 560 * E.inOutCubic(seg(t, 20.05, 20.65)) + 340 * E.inOutCubic(seg(t, 22.45, 23.0));
  const ox = px + 2, oy = py + bar - scroll, cw = pw - 4, P = 48;
  ctx.translate(ox, oy);
  // nav
  txt(s.brand, P, 62, { font: F.d(40), color: C.ink, align: "left", ls: 3 });
  let nx = cw - P - measure(s.navBtn, F.b(22, 600)) - 40;
  rrect(nx, 30, measure(s.navBtn, F.b(22, 600)) + 40, 46, 23); ctx.fillStyle = C.brand; ctx.fill();
  txt(s.navBtn, nx + 20, 61, { font: F.b(22, 600), color: "#fff", align: "left" });
  for (let i = s.nav.length - 1; i >= 0; i--) { const w = measure(s.nav[i], F.b(22, 500)); nx -= w + 30; txt(s.nav[i], nx, 61, { font: F.b(22, 500), color: C.muted, align: "left" }); }
  ctx.fillStyle = "#222326"; ctx.fillRect(0, 100, cw, 1);
  // hero do produto
  chip(s.chip, P, 178, 1, { align: "left", size: 20 });
  s.h1.forEach((l, i) => txt(l, P, 268 + i * 64, { font: F.b(fitSize(l, F.b, 58, cw - 2 * P, 700), 700), color: C.ink, align: "left", ls: -1 }));
  txt(s.sub, P, 384, { font: F.b(28, 400), color: C.muted, align: "left" });
  ctx.save(); const gl = ctx.createRadialGradient(cw / 2, 490, 0, cw / 2, 490, 420); gl.addColorStop(0, "rgba(34,130,240,0.16)"); gl.addColorStop(1, "rgba(34,130,240,0)"); ctx.fillStyle = gl; ctx.fillRect(0, 410, cw, 170); ctx.restore();
  shaftArt(P + 20, 438, cw - 2 * P - 40, 104);
  txt("Ø45 h6", cw - P - 20, 584, { font: MONO(20), color: C.muted, align: "right" });
  // especificações
  ctx.fillStyle = "#222326"; ctx.fillRect(0, 608, cw, 1);
  txt(s.specsH, P, 664, { font: MONO(24), color: C.soft, align: "left", ls: 6 });
  s.specs.forEach(([k, v], i) => {
    const y = 700 + i * 66, a = E.outCubic(seg(t, 20.45 + i * 0.15, 20.75 + i * 0.15));
    ctx.save(); ctx.globalAlpha *= a;
    ctx.fillStyle = i % 2 ? "rgba(255,255,255,0.0)" : "rgba(255,255,255,0.03)"; ctx.fillRect(P, y, cw - 2 * P, 66);
    txt(k, P + 20, y + 43, { font: F.b(28, 500), color: C.muted, align: "left" });
    txt(v, cw - P - 20, y + 43, { font: MONO(27), color: C.ink, align: "right" });
    ctx.fillStyle = "#1f2023"; ctx.fillRect(P, y + 65, cw - 2 * P, 1);
    ctx.restore();
  });
  // datasheet
  const dy = 1046, dsP = seg(t, 21.75, 22.15), done = t > 22.15;
  rrect(P, dy, cw - 2 * P, 100, 16); ctx.fillStyle = done ? "rgba(34,130,240,0.12)" : "#16171a"; ctx.fill(); ctx.strokeStyle = "rgba(90,162,245,0.7)"; ctx.lineWidth = 2; ctx.stroke();
  if (dsP > 0 && !done) { ctx.save(); rrect(P, dy, cw - 2 * P, 100, 16); ctx.clip(); ctx.fillStyle = "rgba(34,130,240,0.22)"; ctx.fillRect(P, dy, (cw - 2 * P) * dsP, 100); ctx.restore(); }
  // ícone
  ctx.save(); ctx.strokeStyle = C.soft; ctx.lineWidth = 3.5; ctx.lineCap = "round";
  if (!done) { ctx.beginPath(); ctx.moveTo(P + 50, dy + 30); ctx.lineTo(P + 50, dy + 62); ctx.moveTo(P + 38, dy + 52); ctx.lineTo(P + 50, dy + 64); ctx.lineTo(P + 62, dy + 52); ctx.moveTo(P + 34, dy + 74); ctx.lineTo(P + 66, dy + 74); ctx.stroke(); }
  ctx.restore();
  if (done) check(P + 50, dy + 52, 34, seg(t, 22.15, 22.4), C.soft, 4.5);
  txt(done ? s.dsDone : s.ds, P + 96, dy + 61, { font: done ? MONO(26) : F.b(30, 600), color: C.ink, align: "left" });
  txt("PDF", cw - P - 28, dy + 60, { font: MONO(22), color: C.muted, align: "right", ls: 3 });
  // formulário de cotação
  const fy = 1196;
  ctx.fillStyle = "#222326"; ctx.fillRect(0, fy, cw, 1);
  txt(s.formH, P, fy + 60, { font: MONO(24), color: C.soft, align: "left", ls: 6 });
  const tw = [[23.1, 23.55], [23.65, 23.75], [23.85, 24.25]];
  s.fields.forEach(([k, v], i) => {
    const y = fy + 92 + i * 128;
    txt(k, P, y + 26, { font: F.b(22, 500), color: C.muted, align: "left" });
    const act = t > tw[i][0] - 0.1 && t < tw[i][1] + 0.15;
    rrect(P, y + 40, cw - 2 * P, 70, 12); ctx.fillStyle = "#0c0d0f"; ctx.fill(); ctx.strokeStyle = act ? C.brand : "#2a2a2d"; ctx.lineWidth = 2; ctx.stroke();
    const n = Math.floor(seg(t, tw[i][0], tw[i][1]) * v.length), vs = v.slice(0, n);
    txt(vs, P + 24, y + 86, { font: F.b(30, 500), color: C.ink, align: "left" });
    if (act && Math.floor(t * 3) % 2 === 0) { ctx.fillStyle = C.brand; ctx.fillRect(P + 26 + measure(vs, F.b(30, 500)), y + 56, 2, 38); }
  });
  // anexo
  const ay = fy + 92 + 3 * 128;
  txt(s.attachL, P, ay + 26, { font: F.b(22, 500), color: C.muted, align: "left" });
  ctx.save(); ctx.setLineDash([8, 8]); rrect(P, ay + 40, cw - 2 * P, 84, 12); ctx.strokeStyle = "rgba(161,161,168,0.45)"; ctx.lineWidth = 2; ctx.stroke(); ctx.restore();
  const at = E.outBack(seg(t, 24.4, 24.75));
  if (at > 0) {
    ctx.save(); ctx.globalAlpha *= clamp(at); const aw = measure(s.attach, MONO(24)) + 110;
    ctx.translate(P + 20 + (1 - at) * 60, ay + 54);
    rrect(0, 0, aw, 56, 10); ctx.fillStyle = "#1b1c20"; ctx.fill(); ctx.strokeStyle = "rgba(90,162,245,0.6)"; ctx.lineWidth = 2; ctx.stroke();
    ctx.fillStyle = "#e5484d"; rrect(14, 12, 30, 32, 4); ctx.fill(); txt("PDF", 29, 34, { font: MONO(10, 500), color: "#fff" });
    txt(s.attach, 58, 37, { font: MONO(24), color: C.ink, align: "left" });
    ctx.restore();
  }
  // botões: enviar + WhatsApp
  const by = ay + 156, sent = t > 25.55, sendW = 560;
  const pressS = t > 25.47 && t < 25.6 ? 0.97 : 1;
  ctx.save(); ctx.translate(P + sendW / 2, by + 44); ctx.scale(pressS, pressS); ctx.translate(-(P + sendW / 2), -(by + 44));
  rrect(P, by, sendW, 88, 44); ctx.fillStyle = C.brand; ctx.shadowColor = "rgba(34,130,240,0.6)"; ctx.shadowBlur = sent ? 30 : 0; ctx.fill(); ctx.shadowBlur = 0;
  if (sent) { const lab = s.sent, w = measure(lab, F.b(32, 700)) + 56; check(P + sendW / 2 - w / 2 + 14, by + 44, 30, seg(t, 25.55, 25.8), "#fff", 5); txt(lab, P + sendW / 2 - w / 2 + 50, by + 56, { font: F.b(32, 700), color: "#fff", align: "left" }); }
  else txt(s.send, P + sendW / 2, by + 56, { font: F.b(32, 700), color: "#fff" });
  ctx.restore();
  const wx = P + sendW + 24, ww = cw - P - wx;
  rrect(wx, by, ww, 88, 44); ctx.strokeStyle = "rgba(238,242,247,0.35)"; ctx.lineWidth = 2; ctx.stroke();
  ctx.save(); ctx.strokeStyle = "#3fbf6a"; ctx.lineWidth = 3.5; ctx.beginPath(); ctx.arc(wx + 50, by + 44, 15, 0.6, Math.PI * 2 + 0.2); ctx.lineTo(wx + 37, by + 62); ctx.closePath(); ctx.stroke(); ctx.restore();
  txt(s.wa, wx + 78, by + 55, { font: F.b(28, 600), color: C.ink, align: "left" });
  ctx.restore(); // clip
  // toast
  const ta = E.outCubic(seg(t, 25.75, 26.0)) * (1 - seg(t, 26.45, 26.6));
  if (ta > 0) {
    ctx.save(); ctx.globalAlpha *= ta; const tw2 = measure(s.toast, F.b(28, 600)) + 110, tx = W / 2 - tw2 / 2, ty = py + bar + 24 + (1 - ta) * -20;
    rrect(tx, ty, tw2, 72, 36); ctx.fillStyle = "#1a2a40"; ctx.fill(); ctx.strokeStyle = "rgba(90,162,245,0.8)"; ctx.lineWidth = 2; ctx.stroke();
    check(tx + 40, ty + 36, 26, 1, C.soft, 4); txt(s.toast, tx + 70, ty + 46, { font: F.b(28, 600), color: C.ink, align: "left" });
    ctx.restore();
  }
  ctx.restore(); // painel
  // cursor do site
  if (t > 20.9 && t < 26.4) {
    const K = keyframes(t, [{ t: 20.9, x: 900, y: 1380 }, { t: 21.6, x: 640, y: 1030 }, { t: 22.45, x: 640, y: 1030 }, { t: 23.0, x: 760, y: 1150 }, { t: 24.9, x: 760, y: 1150 }, { t: 25.42, x: 410, y: 1430 }, { t: 26.4, x: 410, y: 1430 }]);
    const press = (t > 21.68 && t < 21.8) || (t > 25.47 && t < 25.6) ? 1 : 0;
    cursor(K.x, K.y, press, seg(t, 20.9, 21.1) * (1 - seg(t, 26.1, 26.4)));
    ripple(640, 1030, t, 21.7); ripple(410, 1430, t, 25.5);
  }
}

// ---- tela do celular (UI colada no plano da tela via projeção)
let scr, sctx, ovl, octx;
function phoneUI(t, L) {
  if (t < LIGHT_ON) return;
  const on = E.outCubic(seg(t, LIGHT_ON, LIGHT_ON + 0.18));
  const dim = 1 - 0.25 * seg(t, 31.5, 33.5);
  if (!scr) { scr = document.createElement("canvas"); scr.width = 690; scr.height = 1488; sctx = scr.getContext("2d"); }
  const g = sctx, w = scr.width, h = scr.height, u = w / 460;
  g.clearRect(0, 0, w, h);
  g.save(); g.scale(u, u);
  g.textAlign = "center"; g.fillStyle = "rgba(255,255,255,0.95)"; g.font = `300 104px "Inter"`; g.fillText("23:31", 230, 190);
  // notificação (entra em ~6 quadros)
  const n = E.outCubic(seg(t, LIGHT_ON + 0.08, LIGHT_ON + 0.33));
  if (n > 0) {
    g.save(); g.globalAlpha = n; g.translate(0, (1 - n) * -40);
    const x = 18, y = 250, cw = 424;
    const wrap = (s, font, maxW) => { g.font = font; const words = s.split(" "), lines = []; let cur = ""; for (const wd of words) { const tt = cur ? cur + " " + wd : wd; if (g.measureText(tt).width > maxW && cur) { lines.push(cur); cur = wd; } else cur = tt; } lines.push(cur); return lines; };
    const tl = wrap(L.notif.title, `600 31px "Inter"`, cw - 120), bl = wrap(L.notif.body, `400 26px "Inter"`, cw - 120);
    const chh = 80 + tl.length * 38 + bl.length * 33 + 10;
    g.beginPath(); g.roundRect(x, y, cw, chh, 30); g.fillStyle = "#e6eaf0"; g.fill();
    g.beginPath(); g.roundRect(x + 22, y + 24, 64, 64, 16); g.fillStyle = "#2282f0"; g.fill();
    g.strokeStyle = "#fff"; g.lineWidth = 4; g.lineJoin = "round"; g.beginPath(); g.moveTo(x + 42, y + 40); g.lineTo(x + 62, y + 40); g.lineTo(x + 68, y + 46); g.lineTo(x + 68, y + 74); g.lineTo(x + 42, y + 74); g.closePath(); g.stroke();
    g.beginPath(); g.moveTo(x + 48, y + 56); g.lineTo(x + 62, y + 56); g.moveTo(x + 48, y + 64); g.lineTo(x + 58, y + 64); g.stroke();
    g.font = `500 21px "Inter"`; const nowW = g.measureText(L.notif.now).width, appMax = cw - 104 - 24 - nowW - 14, appS = L.notif.app.toUpperCase();
    const aw = g.measureText(appS).width; g.textAlign = "left"; g.fillStyle = "#5b6270"; g.font = `500 ${aw > appMax ? Math.floor(21 * appMax / aw) : 21}px "Inter"`; g.fillText(appS, x + 104, y + 46); g.font = `500 21px "Inter"`;
    g.textAlign = "right"; g.fillText(L.notif.now, x + cw - 24, y + 46);
    g.textAlign = "left"; g.fillStyle = "#0c0d10"; g.font = `600 31px "Inter"`; tl.forEach((l, i) => g.fillText(l, x + 104, y + 88 + i * 38));
    g.fillStyle = "#3b414c"; g.font = `400 26px "Inter"`; bl.forEach((l, i) => g.fillText(l, x + 104, y + 92 + tl.length * 38 + i * 33));
    g.restore();
  }
  g.restore();
  // mapeia na tela em faixas (perspectiva corrigida por faixa)
  const cam = shopCam(t), N = 40;
  if (!ovl) { ovl = document.createElement("canvas"); ovl.width = W; ovl.height = H; octx = ovl.getContext("2d"); }
  octx.setTransform(1, 0, 0, 1, 0, 0); octx.clearRect(0, 0, W, H);
  for (let i = 0; i < N; i++) {
    const v0 = i / N, v1 = (i + 1) / N;
    const L0 = project(cam, screenPoint(t, 0, v0)), R0 = project(cam, screenPoint(t, 1, v0)), L1 = project(cam, screenPoint(t, 0, v1));
    const sy = v0 * h, sh = (v1 - v0) * h;
    octx.setTransform((R0[0] - L0[0]) / w, (R0[1] - L0[1]) / w, (L1[0] - L0[0]) / sh, (L1[1] - L0[1]) / sh, L0[0], L0[1]);
    octx.drawImage(scr, 0, sy, w, Math.min(sh + 1.5, h - sy), 0, 0, w, Math.min(sh + 1.5, h - sy));
  }
  ctx.save(); ctx.globalAlpha = on * dim; ctx.drawImage(ovl, 0, 0); ctx.restore();
}

function proofs(t, L) {
  ctx.fillStyle = "#08090a"; ctx.fillRect(0, 0, W, H);
  ctx.save(); ctx.globalAlpha = 0.9; ctx.drawImage(brushed, 0, 0, W, H); ctx.restore();
  const gl = ctx.createRadialGradient(W / 2, 860, 0, W / 2, 860, 900); gl.addColorStop(0, "rgba(34,130,240,0.10)"); gl.addColorStop(1, "rgba(34,130,240,0)"); ctx.fillStyle = gl; ctx.fillRect(0, 0, W, H);
  const fs = fitLines(L.proof, 128, 920, 2);
  title(L.proof, W / 2, 860, t, T.proof + 0.1, T.sig + 0.3, { font: F.d(fs), color: C.ink, lh: fs * 0.98, ls: 2 });
  const a = E.outCubic(seg(t, T.proof + 0.75, T.proof + 1.1));
  ctx.fillStyle = `rgba(34,130,240,${a})`; ctx.fillRect(W / 2 - 160 * a, 860 + fs * 0.98 + 40, 320 * a, 2);
  txt(L.proofSub, W / 2, 860 + fs * 0.98 + 110, { font: MONO(fitSize(L.proofSub, MONO, 28, 900)), color: C.soft, ls: 4, alpha: a });
}

export function render2d(t, lang, has3d) {
  const L = COPY[lang] || COPY.pt;
  // fundos 2D
  if (!has3d) {
    if (t >= T.search && t < T.shop) searchScreen(t, L);
    else if (t >= T.results && t < T.dark) searchScreen(t, L);
    else if (t >= T.trans && t < T.real) transition(t, L);
    else if (t >= T.real && t < T.demo) realSite(t, L);
    else if (t >= T.demo && t < T.payoff) siteDemo(t, L);
    else if (t >= T.proof && t < T.sig) proofs(t, L);
    else if (t < T.sig) { ctx.fillStyle = C.bg; ctx.fillRect(0, 0, W, H); }
  }
  // ----- gancho
  if (t < T.search) {
    darkBand(1180, H, 0.7);
    const blink = Math.floor(t * 2) % 2 === 0, a = seg(t, 0.15, 0.45);
    label(L.line, t, 0.15, T.search, clock(23, 12, 47 + Math.floor(t)));
    ctx.save(); ctx.globalAlpha = a * (blink ? 1 : 0.25); ctx.fillStyle = "#e5484d"; ctx.shadowColor = "#e5484d"; ctx.shadowBlur = blink ? 16 : 0; ctx.beginPath(); ctx.arc(84 + measure(L.line, MONO(30), 8) + 22, 286, 9, 0, 7); ctx.fill(); ctx.restore();
    const fs = fitLines([L.hook], 150, 920, 2);
    title(L.hook, W / 2, 1500, t, 0.9, T.search - 0.02, { font: F.d(fs), color: C.ink, ls: 2 });
  }
  // ----- busca
  if (t >= T.search && t < T.shop) label(L.buyer, t, T.search + 0.1, T.shop, clock(23, 14));
  // ----- bancada (S03)
  if (t >= T.shop && t < T.results) {
    darkBand(1300, H, 0.6);
    label(L.supplier, t, T.shop + 0.1, T.results, clock(23, 14));
    caption(L.v1, t, T.shop + 0.4, T.results - 0.05);
  }
  // ----- resultados / clique
  if (t >= T.results && t < T.dark) {
    label(L.buyer, t, T.results + 0.05, 11.95, clock(23, 15));
    caption(L.v2, t, 9.35, 10.9, 1610);
    keyLine(L.k1, t, 12.15, T.dark, 1000);
  }
  // ----- celular apagado (S06)
  if (t >= T.dark && t < T.trans) {
    darkBand(1300, H, 0.65);
    label(L.supplier, t, T.dark + 0.1, T.trans, clock(23, 15));
    keyLine(L.k2, t, T.dark + 0.7, T.trans - 0.05, 1520);
  }
  // ----- site
  if (t >= T.real && t < T.demo) { label(L.real, t, T.real + 0.1, T.demo); caption(L.v3, t, 17.4, T.demo - 0.1, 1520); }
  if (t >= T.demo && t < T.payoff) { label(L.demo, t, T.demo + 0.05, T.payoff); caption(L.v4, t, 20.35, 22.45, 1590); caption(L.v5, t, 23.1, 25.4, 1590); }
  // ----- payoff: celular acende
  if (t >= T.payoff && t < T.proof) {
    phoneUI(t, L);
    label(L.supplier, t, T.payoff + 0.1, 30.4, clock(23, 31));
    const ea = E.outCubic(seg(t, 30.4, 31.0));
    if (t < 30.6) { darkBand(1300, H, 0.6); keyLine(L.k3, t, 27.75, 30.45, 1530); }
    else {
      ctx.save(); ctx.globalAlpha = ea; const g = ctx.createLinearGradient(0, 0, 0, 820); g.addColorStop(0, "rgba(0,0,0,0.85)"); g.addColorStop(0.75, "rgba(0,0,0,0.6)"); g.addColorStop(1, "rgba(0,0,0,0)"); ctx.fillStyle = g; ctx.fillRect(0, 0, W, 820); ctx.restore();
      const fs = fitLines(L.end, 124, 940, 2);
      title(L.end, W / 2, 470, t, 30.6, T.proof + 0.1, { font: F.d(fs), color: C.ink, lh: fs * 0.98, ls: 2 });
    }
  }
  if (t > 0.1 && t < T.sig) corners(t >= T.trans && t < T.real ? 0 : 0.42);
  signature(t, T.sig, lang, L.cta);
  vignette(); grain(t, 0.045);
  // cortes secos com respiro escuro
  for (const c of [T.search, T.shop, T.results, T.dark, T.trans, T.payoff, T.proof]) { const d = Math.abs(t - c); if (d < 0.08) { ctx.fillStyle = `rgba(0,0,0,${0.6 * (1 - d / 0.08)})`; ctx.fillRect(0, 0, W, H); } }
}
