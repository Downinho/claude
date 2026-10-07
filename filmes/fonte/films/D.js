// FILME D — SUA ENGENHARIA MERECE SER ENCONTRADA (38 s · 24 fps · 9:16)
// Metáfora: RESOLUÇÃO. Peça-herói: alargador (hole opener) de perfuração direcional horizontal —
// corpo de aço com cones de entrada/saída, 6 lâminas soldadas com insertos de metal duro, jatos de fluido, pino roscado API.
// Unidades: 1 = 100 mm (aprox.). Eixo da peça = Y local (torno), pino na ponta -Y.
export const DURATION = 38;
export const IMAGES = ["gv-drill.jpg"];

const T = { crush: 1.5, crushEnd: 2.1, search: 4.6, results: 7.4, click: 10.7, close: 12.9, dark: 13.4, doc: 16.8, site: 23.5, hero: 30.0, sig: 34.4 };

const COPY = {
  pt: {
    co: "NORTEVIA", coSub: "PERFURAÇÕES LTDA.", url: "http://www.nortevia-perfuracoes.com.br/index.htm", winTitle: "NORTEVIA PERFURAÇÕES - Home",
    marquee: "*** Bem-vindo ao nosso site!!! *** Qualidade e compromisso desde 1998 ***",
    nav: ["Home", "A Empresa", "Serviços", "Equipamentos", "Fotos", "Contato"], visits: "Visitas:",
    h1: "Nossos Serviços", body: ["A NORTEVIA atua no", "ramo de perfuração", "direcional desde 1998.", "Qualidade e", "compromisso."],
    file1: "foto_alargador.jpg", file2: "equip02.jpg", constr: ["SITE EM", "CONSTRUÇÃO"], contact: ["Entre em contato pelo telefone", "ou pelo nosso e-mail."],
    foot: "© 2009 Nortevia · Melhor visualizado em 800x600",
    cap1: "Engenharia de verdade. Site de 2009.",
    q: "perfuração direcional horizontal fornecedor", searchPh: "Pesquisar", nres: "Cerca de 48.300 resultados",
    res: [
      ["Vertrak MND | Perfuração Direcional em Todo o Brasil", "vertrakmnd.com.br › servicos", "Equipe completa e atendimento nacional. Solicite seu", "orçamento online em poucos minutos."],
      ["Perfix Direcional – HDD e Furo Direcional", "perfixdirecional.com.br", "Soluções em método não destrutivo para", "concessionárias, telecom e saneamento."],
      ["Fornecedores de perfuração direcional | Guia", "guiadefornecedores.com.br › mnd", "Compare empresas de perfuração direcional", "horizontal na sua região."],
      ["Infralinha – Furo Direcional e Travessias", "infralinha.com.br", "Travessias sob rodovias, rios e ferrovias.", "Fale com um consultor."],
      ["Atlas Subsolo – Orçamento Rápido de MND", "atlassubsolo.com.br › orcamento", "Orçamento em 24 horas. Atendemos todo o", "estado com frota própria."],
      ["NORTEVIA PERFURAÇÕES LTDA. - Home", "nortevia-perfuracoes.com.br/index.htm", "Bem-vindo ao site da Nortevia. Site em", "construção. Visitas: 004127"],
    ],
    t1: ["ELES APARECEM.", "VOCÊ CONSTRÓI MELHOR."], t2: ["INVISÍVEL PARA", "QUEM COMPRA."],
    cap2: ["A melhor engenharia do mercado", "não pode ser a mais difícil de achar."],
    lDoc: "DOCUMENTAÇÃO · FOTO · VÍDEO", cap3: ["A Downway traduz a sua máquina", "em presença digital."],
    co1: ["Ø 18\"", "DIÂMETRO DE CORTE"], co2: ["INSERTOS", "DE METAL DURO"], co3: ["JATOS", "DE FLUIDO"], co4: ["PINO ROSCADO", "CONEXÃO API"],
    lSite: "SITE ENTREGUE", ex: ["Exemplo de site entregue pela Downway", "GV Drill · perfuração direcional"],
    t3: ["FEITO PARA", "SER ENCONTRADO."], t4: ["ORÇAMENTO", "A UM TOQUE."], sent: "Solicitação enviada",
    end: ["SUA ENGENHARIA", "DEVERIA SER MAIS", "FÁCIL DE ENCONTRAR."], endSub: "Site no ar em até 15 dias úteis.", cta: "AGENDE UM DIAGNÓSTICO",
  },
  en: {
    co: "NORTEVIA", coSub: "DRILLING CO.", url: "http://www.nortevia-drilling.com/index.htm", winTitle: "NORTEVIA DRILLING - Home",
    marquee: "*** Welcome to our website!!! *** Quality and commitment since 1998 ***",
    nav: ["Home", "About Us", "Services", "Equipment", "Photos", "Contact"], visits: "Visitors:",
    h1: "Our Services", body: ["NORTEVIA has been in", "the directional drilling", "business since 1998.", "Quality and", "commitment."],
    file1: "reamer_photo.jpg", file2: "equip02.jpg", constr: ["UNDER", "CONSTRUCTION"], contact: ["Contact us by phone", "or by e-mail."],
    foot: "© 2009 Nortevia · Best viewed at 800x600",
    cap1: "Real engineering. A 2009 website.",
    q: "horizontal directional drilling contractor", searchPh: "Search", nres: "About 48,300 results",
    res: [
      ["Vertrak HDD | Directional Drilling Nationwide", "vertrakhdd.com › services", "Full crews, nationwide coverage. Request", "a quote online in minutes."],
      ["Perfix Directional – HDD Contractors", "perfixdirectional.com", "Trenchless solutions for utilities,", "telecom and water."],
      ["Directional drilling contractors | Directory", "contractorguide.com › hdd", "Compare horizontal directional drilling", "companies near you."],
      ["Infralinha – HDD Crossings", "infralinha.com", "Crossings under highways, rivers and", "railways. Talk to a consultant."],
      ["Atlas Subsurface – Fast HDD Quotes", "atlassubsurface.com › quote", "Quotes within 24 hours. Statewide", "coverage with our own fleet."],
      ["NORTEVIA DRILLING CO. - Home", "nortevia-drilling.com/index.htm", "Welcome to the Nortevia website. Site under", "construction. Visitors: 004127"],
    ],
    t1: ["THEY SHOW UP.", "YOU BUILD BETTER."], t2: ["INVISIBLE", "TO THE BUYER."],
    cap2: ["The best engineering in the market", "shouldn't be the hardest to find."],
    lDoc: "SPECS · PHOTO · VIDEO", cap3: ["Downway turns your machine", "into a digital presence."],
    co1: ["Ø 18\"", "CUTTING DIAMETER"], co2: ["CARBIDE", "INSERTS"], co3: ["FLUID", "PORTS"], co4: ["THREADED PIN", "API CONNECTION"],
    lSite: "DELIVERED WEBSITE", ex: ["Example of a website built by Downway", "GV Drill · directional drilling"],
    t3: ["BUILT TO", "BE FOUND."], t4: ["QUOTE REQUESTS,", "ONE TAP AWAY."], sent: "Request sent",
    end: ["YOUR ENGINEERING", "SHOULD BE", "EASIER TO FIND."], endSub: "", cta: "BOOK AN ASSESSMENT",
  },
  es: {
    co: "NORTEVIA", coSub: "PERFORACIONES S.A.", url: "http://www.nortevia-perforaciones.com/index.htm", winTitle: "NORTEVIA PERFORACIONES - Inicio",
    marquee: "*** ¡¡¡Bienvenidos a nuestro sitio!!! *** Calidad y compromiso desde 1998 ***",
    nav: ["Inicio", "La Empresa", "Servicios", "Equipos", "Fotos", "Contacto"], visits: "Visitas:",
    h1: "Nuestros Servicios", body: ["NORTEVIA trabaja en", "perforación direccional", "desde 1998.", "Calidad y", "compromiso."],
    file1: "foto_ensanchador.jpg", file2: "equipo02.jpg", constr: ["SITIO EN", "CONSTRUCCIÓN"], contact: ["Contáctenos por teléfono", "o por correo electrónico."],
    foot: "© 2009 Nortevia · Se ve mejor en 800x600",
    cap1: "Ingeniería de verdad. Un sitio de 2009.",
    q: "perforación direccional horizontal proveedor", searchPh: "Buscar", nres: "Cerca de 48.300 resultados",
    res: [
      ["Vertrak HDD | Perforación Direccional en Todo el País", "vertrakhdd.com › servicios", "Equipos completos y cobertura nacional.", "Pide tu cotización en línea."],
      ["Perfix Direccional – Perforación HDD", "perfixdireccional.com", "Soluciones sin zanja para servicios", "públicos, telecom y saneamiento."],
      ["Proveedores de perforación direccional | Guía", "guiaproveedores.com › hdd", "Compara empresas de perforación", "direccional horizontal en tu zona."],
      ["Infralinha – Cruces y Perforación Dirigida", "infralinha.com", "Cruces bajo carreteras, ríos y vías", "férreas. Habla con un asesor."],
      ["Atlas Subsuelo – Cotización Rápida HDD", "atlassubsuelo.com › cotizacion", "Cotización en 24 horas. Flota propia", "en toda la región."],
      ["NORTEVIA PERFORACIONES S.A. - Inicio", "nortevia-perforaciones.com/index.htm", "Bienvenidos al sitio de Nortevia. Sitio en", "construcción. Visitas: 004127"],
    ],
    t1: ["ELLOS APARECEN.", "TÚ CONSTRUYES MEJOR."], t2: ["INVISIBLE PARA", "QUIEN COMPRA."],
    cap2: ["La mejor ingeniería del mercado", "no puede ser la más difícil de encontrar."],
    lDoc: "FICHA TÉCNICA · FOTO · VIDEO", cap3: ["Downway convierte tu máquina", "en presencia digital."],
    co1: ["Ø 18\"", "DIÁMETRO DE CORTE"], co2: ["INSERTOS", "DE CARBURO"], co3: ["BOQUILLAS", "DE FLUIDO"], co4: ["PIN ROSCADO", "CONEXIÓN API"],
    lSite: "SITIO ENTREGADO", ex: ["Ejemplo de sitio entregado por Downway", "GV Drill · perforación direccional"],
    t3: ["HECHO PARA", "SER ENCONTRADO."], t4: ["COTIZACIÓN", "A UN TOQUE."], sent: "Solicitud enviada",
    end: ["TU INGENIERÍA", "DEBERÍA SER MÁS", "FÁCIL DE ENCONTRAR."], endSub: "", cta: "AGENDA UN DIAGNÓSTICO",
  },
};

// ---------- trilha (cues) ----------
cue(0, "spindle", { until: 1.5, f: 70 });
cue(0, "drone", { until: 1.5, level: 0.9 });
cue(1.5, "freeze"); cue(1.55, "glitch");
cue(1.8, "drone", { until: 13.0, level: 0.45 });
cue(2.7, "tick");
cue(4.7, "click"); cue(5.0, "keys", { until: 6.8 }); cue(6.95, "key");
cue(7.4, "whoosh", { dur: 0.3 });
cue(8.3, "thump");
cue(10.7, "click");
cue(11.9, "thump");
cue(12.9, "click"); cue(13.0, "freeze");
[13.8, 14.3, 14.8].forEach((t) => cue(t, "relay"));
cue(13.4, "drone", { until: 16.8, level: 0.6 });
cue(16.8, "relay"); cue(16.85, "clack");
cue(16.9, "pulse", { bpm: 86, until: 30.0 });
cue(17.2, "servo", { dur: 1.6 });
[19.6, 19.9, 20.2, 20.5].forEach((t) => cue(t, "tick"));
cue(21.6, "click");
cue(23.5, "whoosh", { dur: 0.5 });
cue(24.0, "click");
cue(25.6, "whoosh", { dur: 0.35 });
cue(27.6, "click"); cue(27.9, "chime");
cue(30.0, "resolve", { dur: 4.4 });
cue(30.0, "spindle", { until: 34.2, f: 70, clean: true });
cue(34.4, "sub"); cue(34.4, "end");

// ---------- câmeras (compartilhadas 3D/2D, determinísticas) ----------
const PLINTH = 0.25, RC = PLINTH + 1.97; // centro do alargador em pé
function macroCam(t) {
  // gancho e herói: mesmo enquadramento (a imagem "volta" em plena resolução)
  if (t < T.hero) { const k = E.inOutCubic(seg(t, 0, 2.1)); return { pos: [lerp(4.9, 4.5, k), lerp(1.25, 1.1, k), lerp(1.9, 1.55, k)], tgt: [lerp(0.25, 0.35, k), -0.05, 0], fov: 30 }; }
  const k = E.inOutCubic(seg(t, T.hero, T.sig)); return { pos: [lerp(5.9, 5.0, k), lerp(1.7, 1.35, k), lerp(2.6, 2.0, k)], tgt: [lerp(0.1, 0.25, k), -0.35, 0], fov: 30 };
}
function studioCam(t) {
  if (t < T.doc) { const k = seg(t, T.dark, T.doc); return { pos: [lerp(3.4, 2.6, k), lerp(1.0, 1.15, k), lerp(9.6, 9.0, k)], tgt: [0, RC + 0.1, 0], fov: 30 }; }
  const k = E.inOutCubic(seg(t, T.doc, T.site)); return { pos: [lerp(-0.6, 0.4, k), lerp(2.9, 2.7, k), lerp(15.2, 14.2, k)], tgt: [0, RC - 0.15, 0], fov: 30 };
}
const spinY = (t) => (t - T.doc) * 0.42 + 0.3; // giro do prato
// projeção pinhole idêntica à câmera do three (para cotas em 2D)
function project(p, cam) {
  const [px, py, pz] = cam.pos, [tx, ty, tz] = cam.tgt;
  let f = [tx - px, ty - py, tz - pz]; const fl = Math.hypot(...f); f = f.map((v) => v / fl);
  let r = [f[1] * 0 - f[2] * 1, f[2] * 0 - f[0] * 0, f[0] * 1 - f[1] * 0]; const rl = Math.hypot(...r); r = r.map((v) => v / rl);
  const u = [r[1] * f[2] - r[2] * f[1], r[2] * f[0] - r[0] * f[2], r[0] * f[1] - r[1] * f[0]];
  const d = [p[0] - px, p[1] - py, p[2] - pz];
  const x = d[0] * r[0] + d[1] * r[1] + d[2] * r[2], y = d[0] * u[0] + d[1] * u[1] + d[2] * u[2], z = d[0] * f[0] + d[1] * f[1] + d[2] * f[2];
  const th = Math.tan((cam.fov * Math.PI) / 360);
  return [(x / (z * th * (W / H)) + 1) / 2 * W, (1 - y / (z * th)) / 2 * H, r];
}

// ---------- perfil do alargador (raio em função de y; pino em -Y) ----------
function bodyR(y) {
  if (y < -1.62) return lerp(0.15, 0.2, seg(y, -1.95, -1.62));
  if (y < -1.2) return 0.3;
  if (y < -0.35) return lerp(0.3, 0.78, (y + 1.2) / 0.85);
  if (y < 0.35) return 0.78;
  if (y < 1.0) return lerp(0.78, 0.34, (y - 0.35) / 0.65);
  if (y < 1.55) return 0.34;
  return 0.37;
}
const BLADE_H = 0.14;
const bladeR = (y) => (y < -0.42 ? lerp(0.33, 0.92, seg(y, -1.12, -0.42)) : y < 0.3 ? 0.92 : lerp(0.92, 0.4, seg(y, 0.3, 0.95)));

// ---------- 3D ----------
let K, S, sets = {}, reamers = [], tubes = [], key, rim, fillL, beacon, beaconLight, studioKey;
export let stage;

function buildReamer(kit) {
  const { THREE, MAT } = kit;
  const g = new THREE.Group();
  // corpo torneado
  const pts = [new THREE.Vector2(0.0, -1.95), new THREE.Vector2(0.128, -1.95), new THREE.Vector2(0.15, -1.93)];
  for (let y = -1.92, i = 0; y < -1.63; y += 0.022, i++) { const b = bodyR(y); pts.push(new THREE.Vector2(b + (i % 2 ? 0.02 : -0.004), y)); }
  pts.push(new THREE.Vector2(0.2, -1.62), new THREE.Vector2(0.29, -1.615), new THREE.Vector2(0.3, -1.6));
  pts.push(new THREE.Vector2(0.3, -1.42), new THREE.Vector2(0.285, -1.41), new THREE.Vector2(0.285, -1.37), new THREE.Vector2(0.3, -1.36));
  for (let y = -1.2; y <= 1.0001; y += 0.05) pts.push(new THREE.Vector2(bodyR(y), y));
  pts.push(new THREE.Vector2(0.34, 1.55), new THREE.Vector2(0.37, 1.57), new THREE.Vector2(0.37, 1.93), new THREE.Vector2(0.35, 1.95), new THREE.Vector2(0.2, 1.95), new THREE.Vector2(0.18, 1.9), new THREE.Vector2(0.0, 1.9));
  const bodyMat = MAT.steel({ color: 0xb2b7be, roughness: 0.32 });
  const body = new THREE.Mesh(new THREE.LatheGeometry(pts, 128), bodyMat); body.castShadow = body.receiveShadow = true; g.add(body);
  // rosca brilhante (sobreposição com material usinado e engraxado)
  const thrPts = []; for (let y = -1.93, i = 0; y < -1.63; y += 0.011, i++) { const b = bodyR(y); thrPts.push(new THREE.Vector2(b + (i % 2 ? 0.021 : -0.002), y)); }
  const thr = new THREE.Mesh(new THREE.LatheGeometry(thrPts, 96), MAT.chrome({ roughness: 0.16, color: 0xd8dce2 })); g.add(thr);
  // faixa de hardbanding no corpo traseiro
  const hb = new THREE.Mesh(new THREE.CylinderGeometry(0.352, 0.352, 0.16, 96, 1, true), MAT.darkSteel({ roughness: 0.62, color: 0x55585e })); hb.position.y = 1.3; g.add(hb);
  // lâminas soldadas
  const bladeMat = MAT.darkSteel({ metalness: 1, roughness: 0.34, color: 0x6c7077 });
  const beadMat = MAT.darkSteel({ metalness: 0.85, roughness: 0.75, color: 0x3c3d40 });
  const shp = new THREE.Shape();
  const ys = []; for (let y = -1.12; y <= 0.951; y += 0.04) ys.push(y);
  shp.moveTo(bodyR(-1.12) - 0.04, -1.12);
  ys.forEach((y) => shp.lineTo(bladeR(y), y));
  [...ys].reverse().forEach((y) => shp.lineTo(bodyR(y) - 0.05, y));
  const bladeGeo = new THREE.ExtrudeGeometry(shp, { depth: 0.09, bevelEnabled: true, bevelThickness: 0.008, bevelSize: 0.008, bevelSegments: 2, curveSegments: 4 }); bladeGeo.translate(0, 0, -0.045);
  const beadGeos = [-1, 1].map((s) => new THREE.TubeGeometry(new THREE.CatmullRomCurve3(ys.map((y) => new THREE.Vector3(bodyR(y) + 0.008, y, s * 0.058))), 48, 0.017, 6, false));
  // insertos de metal duro
  const insGeo = new THREE.CylinderGeometry(0.034, 0.044, 0.085, 20); insGeo.translate(0, 0.02, 0);
  const domeGeo = new THREE.SphereGeometry(0.034, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2); domeGeo.translate(0, 0.062, 0);
  const tooth = []; for (let y = -1.02; y <= 0.26; y += 0.105) tooth.push(y);
  const N = 6, nT = tooth.length * N;
  const insMat = new THREE.MeshPhysicalMaterial({ color: 0x4b4f56, metalness: 0.85, roughness: 0.16, clearcoat: 0.5, clearcoatRoughness: 0.2 });
  const ins = new THREE.InstancedMesh(insGeo, insMat, nT), dome = new THREE.InstancedMesh(domeGeo, insMat, nT);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0);
  let n = 0;
  for (let b = 0; b < N; b++) {
    const a = (b / N) * Math.PI * 2;
    const blade = new THREE.Mesh(bladeGeo, bladeMat); blade.rotation.y = a; blade.castShadow = blade.receiveShadow = true; g.add(blade);
    beadGeos.forEach((bg) => { const bm = new THREE.Mesh(bg, beadMat); bm.rotation.y = a; g.add(bm); });
    for (const y of tooth) {
      const r = bladeR(y), nr = y < -0.42 ? [0.76, -0.65] : [1, 0];
      const dir = new THREE.Vector3(nr[0] * Math.cos(a), nr[1], -nr[0] * Math.sin(a)).normalize();
      q.setFromUnitVectors(up, dir);
      const p = new THREE.Vector3((r - 0.02) * Math.cos(a), y, -(r - 0.02) * Math.sin(a));
      m4.compose(p, q, new THREE.Vector3(1, 1, 1)); ins.setMatrixAt(n, m4); dome.setMatrixAt(n, m4); n++;
    }
  }
  ins.castShadow = dome.castShadow = true; g.add(ins, dome);
  // jatos de fluido no cone de entrada (entre as lâminas)
  const nozGeo = new THREE.CylinderGeometry(0.055, 0.065, 0.07, 24), holeGeo = new THREE.CylinderGeometry(0.026, 0.026, 0.02, 16);
  const nozMat = MAT.steel({ roughness: 0.22, color: 0xc4c8ce }), holeMat = new THREE.MeshBasicMaterial({ color: 0x050506 });
  for (let b = 0; b < N; b++) {
    const a = ((b + 0.5) / N) * Math.PI * 2, y = -0.72, r = bodyR(y);
    const dir = new THREE.Vector3(0.87 * Math.cos(a), -0.49, -0.87 * Math.sin(a)).normalize(); q.setFromUnitVectors(up, dir);
    const nz = new THREE.Mesh(nozGeo, nozMat); nz.position.set(r * Math.cos(a), y, -r * Math.sin(a)); nz.quaternion.copy(q); g.add(nz);
    const h = new THREE.Mesh(holeGeo, holeMat); h.position.copy(nz.position).addScaledVector(dir, 0.03); h.quaternion.copy(q); g.add(h);
  }
  return g;
}

export async function setup(kit, mode) {
  if (!kit) return;
  K = kit; const { THREE, MAT } = kit;
  stage = kit.createStage({ bg: 0x050506, fov: 30, bloom: 0.3, env: { top: 5, left: 3.4, right: 0.8, fill: 1.0, front: 1.6 }, envIntensity: 1.25, fogNear: 14, fogFar: 40, exposure: 1.0 });
  S = stage.scene;
  key = kit.keyLight(S, { pos: [-2.5, 5, 3], intensity: 2.4, size: 3 });
  rim = kit.rimLight(S, { pos: [2.8, 1.8, -3], intensity: 9, color: 0x6fa8f0, target: [0, 0, 0] });
  fillL = new THREE.DirectionalLight(0xe6ecf5, 0.5); fillL.position.set(3, 1, 4); S.add(fillL);

  // set macro: vazio preto, alargador deitado (pino para +X)
  sets.macro = new THREE.Group(); S.add(sets.macro);
  const rm = buildReamer(kit); const holdM = new THREE.Group(); holdM.rotation.z = Math.PI / 2; holdM.add(rm); sets.macro.add(holdM); reamers.push(rm);

  // set estúdio: prato giratório, piso, luminárias
  sets.studio = new THREE.Group(); S.add(sets.studio);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), MAT.floor()); floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; sets.studio.add(floor);
  const plinth = new THREE.Mesh(new THREE.CylinderGeometry(1.35, 1.42, PLINTH, 96), MAT.paint(0x1c1e22, { metalness: 0.4, roughness: 0.42 })); plinth.position.y = PLINTH / 2; plinth.castShadow = plinth.receiveShadow = true; sets.studio.add(plinth);
  const ringT = new THREE.Mesh(new THREE.TorusGeometry(1.36, 0.012, 8, 128), MAT.steel({ roughness: 0.25 })); ringT.rotation.x = Math.PI / 2; ringT.position.y = PLINTH; sets.studio.add(ringT);
  const rs = buildReamer(kit); const holdS = new THREE.Group(); holdS.rotation.x = Math.PI; holdS.position.y = RC; holdS.add(rs); sets.studio.add(holdS); reamers.push(rs);
  sets.studio.userData.hold = holdS;
  const back = new THREE.Mesh(new THREE.PlaneGeometry(30, 12), MAT.paint(0x16181b, { roughness: 0.8 })); back.position.set(0, 5, -7); sets.studio.add(back);
  tubes = [[-2.4, 5.6, -1], [0, 5.9, -1.5], [2.4, 5.6, -1]].map((p) => kit.tubeLight(sets.studio, 3.2, p, 0, 3.2));
  studioKey = new THREE.SpotLight(0xffffff, 60, 30, 0.5, 0.6, 1.4); studioKey.position.set(-3, 8, 5); studioKey.target.position.set(0, RC, 0); studioKey.castShadow = true; studioKey.shadow.mapSize.set(2048, 2048); sets.studio.add(studioKey, studioKey.target);
  // giroflex âmbar (único ponto de luz no escuro)
  beacon = new THREE.Group();
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 2.6, 12), MAT.darkSteel()); post.position.y = 1.3; beacon.add(post);
  const lamp = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.22, 24), new THREE.MeshBasicMaterial({ color: new THREE.Color(0xffa020).multiplyScalar(2.5) })); lamp.position.y = 2.7; beacon.add(lamp);
  beacon.userData.lamp = lamp; beacon.position.set(-3.6, 0, -3.2); sets.studio.add(beacon);
  beaconLight = new THREE.SpotLight(0xffa040, 0, 18, 0.55, 0.5, 1.2); beaconLight.position.set(-3.6, 2.7, -3.2); sets.studio.add(beaconLight, beaconLight.target);
}

const show = (name) => { for (const k in sets) sets[k].visible = k === name; };

export function render3d(t) {
  const THREE = K.THREE;
  const macro = t < T.crushEnd || (t >= T.hero && t < T.sig);
  const studio = t >= T.dark && t < T.site;
  if (!macro && !studio) return false;
  if (macro) {
    show("macro"); S.background = new THREE.Color(0x040405); S.fog = null; stage.bloom.strength = 0.32;
    S.environmentIntensity = t < T.hero ? 1.15 : 1.35;
    key.intensity = t < T.hero ? 2.6 : 2.4; rim.intensity = 9; fillL.intensity = t < T.hero ? 0.25 : 0.6;
    reamers[0].rotation.y = t < T.hero ? -t * 0.9 : -(t - T.hero) * 0.5 - 0.6;
    const c = macroCam(t); stage.look(c.pos, c.tgt, c.fov);
    return true;
  }
  // estúdio: escuro (13,4–16,8) → luz limpa e giro (16,8–23,5)
  show("studio"); S.background = new THREE.Color(0x070809); S.fog = new THREE.Fog(0x070809, 14, 34); stage.bloom.strength = 0.3;
  const dark = t < T.doc;
  const offs = [13.8, 14.3, 14.8].filter((c) => t >= c).length; // grupos de luminárias apagando
  const lv = dark ? [0.6, 0.36, 0.18, 0.08][offs] : 1;
  tubes.forEach((m, i) => { const on = dark ? i >= offs && offs < 3 : true; m.material.color.set(0xf2f4ff).multiplyScalar(on ? (dark ? 1.6 : 3.2) : 0.02); });
  S.environmentIntensity = dark ? 0.9 * lv : 0.9;
  key.intensity = dark ? 1.4 * lv : 1.2; fillL.intensity = dark ? 0.1 * lv : 0.55; rim.intensity = dark ? 6 * Math.max(lv, 0.3) : 8;
  studioKey.intensity = dark ? 40 * lv : 70;
  const bOn = dark && t > 14.6;
  beaconLight.intensity = bOn ? 160 : 0; beacon.userData.lamp.material.color.set(0xffa020).multiplyScalar(bOn ? 2.5 + 1.5 * Math.max(0, Math.sin(t * 9)) : 0.15);
  const ba = t * 4.2; beaconLight.target.position.set(-3.6 + Math.cos(ba) * 6, 1.4, -3.2 + Math.sin(ba) * 6);
  reamers[1].rotation.y = dark ? 0.3 : spinY(t);
  const c = studioCam(t); stage.look(c.pos, c.tgt, c.fov);
  return true;
}

// ---------- 2D: utilitários ----------
function label(s, t, t0, t1) {
  const a = seg(t, t0, t0 + 0.3) * (1 - seg(t, t1 - 0.25, t1)); if (a <= 0) return;
  ctx.save(); ctx.globalAlpha = a;
  ctx.fillStyle = C.brand; ctx.fillRect(84, 316, 40 * E.outCubic(seg(t, t0, t0 + 0.5)), 3);
  txt(s, 84, 296, { font: F.m(30), color: C.ink, align: "left", ls: 8 });
  ctx.restore();
}
function caption(s, t, t0, t1, y = 1560) {
  const a = seg(t, t0, t0 + 0.35) * (1 - seg(t, t1 - 0.3, t1)); if (a <= 0) return;
  const lines = Array.isArray(s) ? s : [s];
  lines.forEach((l, i) => txt(l, W / 2, y - (lines.length - 1 - i) * 54, { font: F.b(40, 500), color: C.ink, alpha: a }));
}
function corners(a = 0.55) {
  ctx.save(); ctx.strokeStyle = `rgba(238,242,247,${a})`; ctx.lineWidth = 2; const m = 48, L = 36;
  for (const [x, y, sx, sy] of [[m, 120, 1, 1], [W - m, 120, -1, 1], [m, H - 120, 1, -1], [W - m, H - 120, -1, -1]]) { ctx.beginPath(); ctx.moveTo(x, y + sy * L); ctx.lineTo(x, y); ctx.lineTo(x + sx * L, y); ctx.stroke(); }
  ctx.restore();
}
function shade(y0, y1, a = 0.85) { const g = ctx.createLinearGradient(0, y0, 0, y1); g.addColorStop(0, "rgba(6,7,8,0)"); g.addColorStop(1, `rgba(6,7,8,${a})`); ctx.fillStyle = g; ctx.fillRect(0, y0, W, y1 - y0); }
const OLDSERIF = (s, w = "bold") => `${w} ${s}px "Times New Roman", "Liberation Serif", serif`;
const OLDSANS = (s, w = "normal") => `${w} ${s}px Verdana, "DejaVu Sans", sans-serif`;
const ot = (s, x, y, font, color, align = "left") => { ctx.font = font; ctx.letterSpacing = "0px"; ctx.textAlign = align; ctx.textBaseline = "alphabetic"; ctx.fillStyle = color; ctx.fillText(s, x, y); };

// thumbnail: cópia pixelada do quadro 3D do gancho (capturada no esmagamento) — com fallback desenhado
const TH = { x: 340, y: 590, w: 300, h: 225 };
const tiny = document.createElement("canvas"), tctx = tiny.getContext("2d");
let snap = null;
function fallbackSnap() {
  const c = document.createElement("canvas"); c.width = 40; c.height = 30; const g = c.getContext("2d");
  g.fillStyle = "#0b0b0c"; g.fillRect(0, 0, 40, 30);
  g.save(); g.translate(20, 15); g.rotate(-0.42);
  const gr = g.createLinearGradient(0, -9, 0, 9); gr.addColorStop(0, "#d9dde2"); gr.addColorStop(0.45, "#7c8188"); gr.addColorStop(1, "#202226");
  g.fillStyle = gr; g.beginPath(); g.moveTo(-30, -9); g.lineTo(4, -9); g.lineTo(16, -3); g.lineTo(30, -2); g.lineTo(30, 2); g.lineTo(16, 3); g.lineTo(4, 9); g.lineTo(-30, 9); g.closePath(); g.fill();
  g.fillStyle = "#3a3c40"; for (let i = 0; i < 8; i++) g.fillRect(-20 + i * 4, -11, 2, 3);
  g.restore(); return c;
}
function drawPix(src, x, y, w, h) { ctx.save(); ctx.imageSmoothingEnabled = false; ctx.drawImage(src, x, y, w, h); ctx.restore(); }
function jpegBlocks(x, y, w, h, a, seed = 1) {
  if (a <= 0) return; const bs = Math.max(6, w / 20);
  ctx.save(); ctx.beginPath(); ctx.rect(x, y, w, h); ctx.clip();
  for (let j = 0; j * bs < h; j++) for (let i = 0; i * bs < w; i++) { const r = rnd(i * 31 + j * 7 + seed); if (r > 0.55) { ctx.fillStyle = r > 0.8 ? `rgba(255,255,255,${0.06 * a})` : `rgba(0,0,0,${0.12 * a})`; ctx.fillRect(x + i * bs, y + j * bs, bs, bs); } }
  ctx.restore();
}

// ---------- site antigo (2009) ----------
function oldSite(t, L, o = {}) {
  ctx.fillStyle = "#000"; ctx.fillRect(0, 0, W, H);
  // janela do navegador antigo
  const y0 = 140;
  const tb = ctx.createLinearGradient(0, 0, W, 0); tb.addColorStop(0, "#0a246a"); tb.addColorStop(1, "#a6caf0");
  ctx.fillStyle = tb; ctx.fillRect(0, y0, W, 46);
  ot(L.winTitle, 20, y0 + 32, OLDSANS(22, "bold"), "#fff");
  ["_", "□", "×"].forEach((s, i) => { const x = W - 150 + i * 46; ctx.fillStyle = "#d4d0c8"; ctx.fillRect(x, y0 + 8, 38, 30); ot(s, x + 19, y0 + 31, OLDSANS(20, "bold"), "#000", "center"); });
  ctx.fillStyle = "#d4d0c8"; ctx.fillRect(0, y0 + 46, W, 78);
  ctx.fillStyle = "#fff"; ctx.fillRect(130, y0 + 64, W - 160, 42); ctx.strokeStyle = "#808080"; ctx.lineWidth = 2; ctx.strokeRect(130, y0 + 64, W - 160, 42);
  ot("Endereço", 18, y0 + 94, OLDSANS(20), "#000");
  ot(L.url, 142, y0 + 93, OLDSANS(21), "#000");
  const py = y0 + 124;
  ctx.fillStyle = "#c0c0c0"; ctx.fillRect(0, py, W, H - py);
  // carregamento em blocos de cima para baixo
  const rev = o.reveal ?? 1, cut = py + (H - py) * rev;
  ctx.save(); ctx.beginPath(); ctx.rect(0, py, W, cut - py); ctx.clip();
  const X0 = 70, X1 = 1010;
  ctx.fillStyle = "#f4f4ee"; ctx.fillRect(X0, 290, X1 - X0, 1290); ctx.strokeStyle = "#808080"; ctx.lineWidth = 2; ctx.strokeRect(X0, 290, X1 - X0, 1290);
  const hg = ctx.createLinearGradient(0, 290, 0, 420); hg.addColorStop(0, "#003366"); hg.addColorStop(1, "#336699");
  ctx.fillStyle = hg; ctx.fillRect(X0 + 2, 292, X1 - X0 - 4, 128);
  ctx.save(); ctx.shadowColor = "#000"; ctx.shadowOffsetX = 3; ctx.shadowOffsetY = 3; ot(L.co, X0 + 30, 372, OLDSERIF(70), "#fff"); ctx.restore();
  ot(L.coSub, X0 + 34, 408, OLDSERIF(28, "italic bold"), "#ffcc00");
  // letreiro rolando
  ctx.fillStyle = "#ffffcc"; ctx.fillRect(X0 + 2, 420, X1 - X0 - 4, 46);
  ctx.save(); ctx.beginPath(); ctx.rect(X0 + 2, 420, X1 - X0 - 4, 46); ctx.clip();
  const mw = measure(L.marquee, OLDSANS(24, "bold")) + 120, mx = X1 - ((t * 160) % mw);
  ot(L.marquee, mx, 452, OLDSANS(24, "bold"), "#cc0000"); ot(L.marquee, mx - mw, 452, OLDSANS(24, "bold"), "#cc0000");
  ctx.restore();
  // menu lateral
  ctx.fillStyle = "#e0e0e0"; ctx.fillRect(X0 + 2, 466, 236, 1060);
  L.nav.forEach((s, i) => { const y = 530 + i * 58; ot("» " + s, X0 + 20, y, OLDSANS(25), "#0000cc"); const w = measure("» " + s, OLDSANS(25)); ctx.fillStyle = "#0000cc"; ctx.fillRect(X0 + 20, y + 4, w, 2); });
  ot(L.visits, X0 + 20, 950, OLDSANS(22, "bold"), "#333");
  ctx.fillStyle = "#000"; ctx.fillRect(X0 + 20, 966, 190, 52);
  ot("004127", X0 + 115, 1004, `bold 34px "Liberation Mono", monospace`, "#22ff22", "center");
  // conteúdo
  ot(L.h1, 340, 548, OLDSERIF(42), "#003366"); ctx.fillStyle = "#808080"; ctx.fillRect(340, 562, 640, 2);
  ctx.fillStyle = "#000"; ctx.fillRect(TH.x - 3, TH.y - 3, TH.w + 6, TH.h + 6);
  if (o.thumb !== false) drawPix(snap || fallbackSnap(), TH.x, TH.y, TH.w, TH.h), jpegBlocks(TH.x, TH.y, TH.w, TH.h, 1);
  ot(L.file1, TH.x, TH.y + TH.h + 34, OLDSANS(19), "#555");
  L.body.forEach((s, i) => ot(s, 665, 620 + i * 38, OLDSANS(23), "#222"));
  // imagem quebrada
  const bx = 340, by = 900; ctx.strokeStyle = "#999"; ctx.lineWidth = 2; ctx.strokeRect(bx, by, 300, 225);
  ctx.fillStyle = "#fff"; ctx.fillRect(bx + 14, by + 14, 30, 34); ctx.strokeStyle = "#888"; ctx.strokeRect(bx + 14, by + 14, 30, 34);
  ctx.strokeStyle = "#d00"; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(bx + 20, by + 22); ctx.lineTo(bx + 38, by + 40); ctx.moveTo(bx + 38, by + 22); ctx.lineTo(bx + 20, by + 40); ctx.stroke();
  ot(L.file2, bx + 54, by + 38, OLDSANS(19), "#444");
  // "em construção"
  const cx = 665, cy = 900, cw = 315, ch = 150;
  ctx.save(); ctx.beginPath(); ctx.rect(cx, cy, cw, ch); ctx.clip(); ctx.fillStyle = "#ffd200"; ctx.fillRect(cx, cy, cw, ch);
  ctx.fillStyle = "#111"; for (let i = -10; i < 20; i++) { ctx.beginPath(); ctx.moveTo(cx + i * 40, cy); ctx.lineTo(cx + i * 40 + 20, cy); ctx.lineTo(cx + i * 40 - 30, cy + 26); ctx.lineTo(cx + i * 40 - 50, cy + 26); ctx.fill(); ctx.beginPath(); ctx.moveTo(cx + i * 40, cy + ch - 26); ctx.lineTo(cx + i * 40 + 20, cy + ch - 26); ctx.lineTo(cx + i * 40 - 30, cy + ch); ctx.lineTo(cx + i * 40 - 50, cy + ch); ctx.fill(); }
  ctx.restore();
  L.constr.forEach((s, i) => ot(s, cx + cw / 2, cy + 68 + i * 36, OLDSANS(i ? 26 : 26, "bold"), "#000", "center"));
  L.contact.forEach((s, i) => ot(s, 340, 1200 + i * 38, OLDSANS(23), "#222"));
  ot("Fax: (11) 0000-0000", 340, 1290, OLDSANS(23), "#222");
  ctx.fillStyle = "#336699"; ctx.fillRect(X0 + 2, 1526, X1 - X0 - 4, 52);
  ot(L.foot, W / 2, 1560, OLDSANS(20), "#fff", "center");
  ctx.restore();
  if (rev < 1) { ctx.fillStyle = "#fff"; ctx.fillRect(0, cut - 2, W, 2); }
}

// ---------- busca neutra ----------
function stockThumb(x, y, w, h, k) {
  ctx.save(); rrect(x, y, w, h, 10); ctx.clip();
  const sky = [["#9cc3e6", "#e9eef3"], ["#c9d6e3", "#f1e7d8"], ["#d8dde3", "#eef1f4"], ["#a8cbe8", "#f3efe6"], ["#b8c9d8", "#e7e2d7"]][k];
  const g = ctx.createLinearGradient(0, y, 0, y + h); g.addColorStop(0, sky[0]); g.addColorStop(1, sky[1]); ctx.fillStyle = g; ctx.fillRect(x, y, w, h);
  ctx.filter = "blur(5px)";
  ctx.fillStyle = "#6b6f55"; ctx.fillRect(x, y + h * 0.72, w, h * 0.3);
  if (k !== 2) { ctx.fillStyle = "#f0a020"; ctx.beginPath(); ctx.ellipse(x + w * 0.45, y + h * 0.38, w * 0.16, h * 0.14, 0, 0, 7); ctx.fill(); ctx.fillStyle = "#e3b48c"; ctx.beginPath(); ctx.ellipse(x + w * 0.45, y + h * 0.56, w * 0.11, h * 0.13, 0, 0, 7); ctx.fill(); ctx.fillStyle = k % 2 ? "#ff7a1a" : "#2c5aa0"; ctx.fillRect(x + w * 0.26, y + h * 0.66, w * 0.38, h * 0.4); }
  else { ctx.fillStyle = "#3d6fb0"; for (let i = 0; i < 3; i++) ctx.fillRect(x + 20 + i * 52, y + 30 + i * 8, 38, 70 - i * 8); }
  ctx.restore();
}
function searchUI(t, L) {
  ctx.fillStyle = "#f5f6f8"; ctx.fillRect(0, 0, W, H);
  const up = E.inOutCubic(seg(t, 7.0, 7.45));
  const fy = lerp(860, 200, up), fx = 60, fw = W - 120, fh = 100;
  // campo
  ctx.save(); ctx.shadowColor = "rgba(0,0,0,0.08)"; ctx.shadowBlur = 18; ctx.shadowOffsetY = 4; ctx.fillStyle = "#fff"; ctx.fillRect(fx, fy, fw, fh); ctx.restore();
  ctx.strokeStyle = t > 4.7 && up < 1 ? "#8e98a8" : "#d3d7de"; ctx.lineWidth = 2; ctx.strokeRect(fx, fy, fw, fh);
  ctx.strokeStyle = "#6a7280"; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(fx + 50, fy + 46, 15, 0, 7); ctx.moveTo(fx + 61, fy + 57); ctx.lineTo(fx + 74, fy + 70); ctx.stroke();
  const n = Math.floor(seg(t, 5.0, 6.8) * L.q.length), s = L.q.slice(0, n);
  if (n === 0 && t < 5.0) txt(L.searchPh, fx + 100, fy + 62, { font: F.b(34, 400), color: "#9aa1ab", align: "left" });
  txt(s, fx + 100, fy + 62, { font: F.b(34, 400), color: "#1c1f24", align: "left" });
  if (Math.floor(t * 2.4) % 2 === 0 && up < 1) { const cw = measure(s, F.b(34, 400)); ctx.fillStyle = "#1c1f24"; ctx.fillRect(fx + 102 + cw, fy + 30, 3, 44); }
  if (up < 0.1) txt(L.searchPh.toUpperCase(), W / 2, fy + 200, { font: F.m(22), color: "#9aa1ab", ls: 6, alpha: 1 - up * 10 });
  // resultados
  const ra = seg(t, 7.35, 7.7); if (ra <= 0) return null;
  const sc = 620 * E.inOutCubic(seg(t, 8.9, 10.2)); // rolagem com inércia
  ctx.save(); ctx.beginPath(); ctx.rect(0, 330, W, H - 330); ctx.clip(); ctx.globalAlpha = ra;
  txt(L.nres, 60, 380 - sc, { font: F.b(24, 400), color: "#7a818c", align: "left" });
  let target = null;
  L.res.forEach((r, i) => {
    const y = 430 + i * 250 - sc, ours = i === 5;
    const a = seg(t, 7.4 + i * 0.07, 7.7 + i * 0.07); if (a <= 0) return;
    ctx.save(); ctx.globalAlpha = ra * a;
    txt(r[1], 60, y + 10, { font: F.b(24, 400), color: "#4d6b52", align: "left" });
    const fs = measure(r[0], F.b(34, 600)) > 700 ? 30 : 34;
    txt(r[0], 60, y + 58, { font: F.b(fs, 600), color: "#1f3f78", align: "left" });
    txt(r[2], 60, y + 106, { font: F.b(26, 400), color: "#4a4f57", align: "left" }); txt(r[3], 60, y + 142, { font: F.b(26, 400), color: "#4a4f57", align: "left" });
    if (!ours) stockThumb(W - 60 - 200, y + 70, 200, 150, i);
    else { ctx.strokeStyle = "#c4c8ce"; ctx.lineWidth = 2; ctx.strokeRect(W - 260, y + 70, 200, 150); ctx.strokeStyle = "#c33"; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(W - 246, y + 84); ctx.lineTo(W - 226, y + 104); ctx.moveTo(W - 226, y + 84); ctx.lineTo(W - 246, y + 104); ctx.stroke(); }
    // ajuste: miniaturas à direita só se não cruzarem o texto
    if (ours) target = { x: 60, y: y + 30, w: measure(r[0], F.b(fs, 600)), y2: y };
    ctx.fillStyle = "#e3e6ea"; ctx.fillRect(60, y + 222, W - 120, 2);
    ctx.restore();
  });
  ctx.restore();
  return target;
}
function cursor(x, y, press = 0) {
  ctx.save(); ctx.translate(x, y); ctx.scale(1.6 - press * 0.15, 1.6 - press * 0.15);
  ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, 26); ctx.lineTo(7, 20); ctx.lineTo(12, 31); ctx.lineTo(17, 29); ctx.lineTo(12, 18); ctx.lineTo(21, 18); ctx.closePath();
  ctx.fillStyle = "#111"; ctx.fill(); ctx.strokeStyle = "#fff"; ctx.lineWidth = 2; ctx.stroke(); ctx.restore();
}

// ---------- cotas sobre o 3D (estúdio) ----------
function callout(t, t0, anchor, lx, ly, side, lines) {
  const p = E.outCubic(seg(t, t0, t0 + 0.3)), a = p * (1 - seg(t, 23.0, 23.4)); if (a <= 0) return;
  const [ax, ay] = anchor; const ex = lx, ey = ly;
  ctx.save(); ctx.globalAlpha = a; ctx.strokeStyle = C.soft; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(ax, ay, 7, 0, 7); ctx.stroke(); ctx.fillStyle = C.soft; ctx.beginPath(); ctx.arc(ax, ay, 2.5, 0, 7); ctx.fill();
  const mx = lerp(ax, ex, p), my = lerp(ay, ey, p);
  ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(mx, my); const tail = side * 60 * E.outCubic(seg(t, t0 + 0.2, t0 + 0.45)); ctx.lineTo(mx + tail, my); ctx.stroke();
  const ta = seg(t, t0 + 0.25, t0 + 0.5);
  const tx = ex + side * 72, al = side > 0 ? "left" : "right";
  txt(lines[0], tx, ey + 10, { font: F.m(26, 500), color: C.ink, align: al, ls: 2, alpha: ta });
  txt(lines[1], tx, ey + 44, { font: F.m(20, 400), color: C.muted, align: al, ls: 3, alpha: ta });
  ctx.restore();
}
function docOverlay(t, L) {
  const cam = studioCam(t);
  // pontos no eixo (peça em pé, pino para cima): y_mundo = RC - y_local
  const P = (yl, r, sgn) => { const [, , rv] = project([0, RC - yl, 0], cam); return project([rv[0] * r * sgn, RC - yl, rv[2] * r * sgn], cam); };
  const L1 = P(0, 0.92, -1), R1 = P(0, 0.92, 1);
  // cota de diâmetro (Ø): linhas de chamada descem das bordas do corpo até a altura do eixo traseiro
  const da = E.outCubic(seg(t, 19.6, 19.95)) * (1 - seg(t, 23.0, 23.4));
  if (da > 0) {
    const yy = P(1.3, 0, 1)[1], x0 = L1[0], x1 = R1[0];
    ctx.save(); ctx.globalAlpha = da; ctx.strokeStyle = C.soft; ctx.lineWidth = 2;
    ctx.setLineDash([6, 6]); ctx.beginPath(); ctx.moveTo(x0, L1[1]); ctx.lineTo(x0, yy + 20); ctx.moveTo(x1, R1[1]); ctx.lineTo(x1, yy + 20); ctx.stroke(); ctx.setLineDash([]);
    const w = (x1 - x0) * da, cx = (x0 + x1) / 2;
    ctx.beginPath(); ctx.moveTo(cx - w / 2, yy); ctx.lineTo(cx + w / 2, yy); ctx.stroke();
    ctx.fillStyle = C.soft; [[cx - w / 2, 1], [cx + w / 2, -1]].forEach(([x, s]) => { ctx.beginPath(); ctx.moveTo(x, yy); ctx.lineTo(x + s * 16, yy - 7); ctx.lineTo(x + s * 16, yy + 7); ctx.fill(); });
    const ta = seg(t, 19.8, 20.0);
    ctx.globalAlpha = da * ta; rrect(cx - 150, yy - 40, 300, 134, 8); ctx.fillStyle = "rgba(10,11,13,0.88)"; ctx.fill(); ctx.strokeStyle = "rgba(90,162,245,0.6)"; ctx.stroke();
    ctx.restore();
    txt(L.co1[0], cx, yy + 22, { font: F.d(60), color: C.ink, alpha: da * ta, ls: 2 });
    txt(L.co1[1], cx, yy + 76, { font: F.m(20), color: C.muted, alpha: da * ta, ls: 3 });
  }
  const tooth = P(0.15, 0.93, 1), port = P(-0.72, 0.62, -1), pin = P(-1.78, 0.2, 1);
  callout(t, 19.9, tooth, W - 330, tooth[1] + 120, 1, L.co2);
  callout(t, 20.2, port, 300, port[1] - 60, -1, L.co3);
  callout(t, 20.5, pin, W - 330, pin[1] + 40, 1, L.co4);
}
function recHud(t, a) {
  if (a <= 0) return;
  ctx.save(); ctx.globalAlpha = a;
  const blink = Math.floor(t * 1.6) % 2 === 0;
  ctx.fillStyle = "#e5484d"; ctx.globalAlpha = a * (blink ? 1 : 0.35); ctx.beginPath(); ctx.arc(W - 186, 1680, 9, 0, 7); ctx.fill(); ctx.globalAlpha = a;
  txt("REC", W - 166, 1690, { font: F.m(26), color: C.soft, align: "left", ls: 6 });
  const k = Math.max(0, t - T.doc), s = Math.floor(k), f = Math.floor((k % 1) * 24);
  txt(`00:00:${String(s).padStart(2, "0")}:${String(f).padStart(2, "0")}`, W - 210, 1690, { font: F.m(22), color: C.muted, align: "right", ls: 4 });
  txt("4K · 24P", 84, 1690, { font: F.m(22), color: C.muted, align: "left", ls: 4 });
  // guias de enquadramento (terços)
  ctx.strokeStyle = "rgba(238,242,247,0.08)"; ctx.lineWidth = 1;
  [W / 3, (2 * W) / 3].forEach((x) => { ctx.beginPath(); ctx.moveTo(x, 360); ctx.lineTo(x, 1640); ctx.stroke(); });
  [H / 3, (2 * H) / 3].forEach((y) => { ctx.beginPath(); ctx.moveTo(60, y); ctx.lineTo(W - 60, y); ctx.stroke(); });
  ctx.restore();
}

// ---------- site entregue (GV Drill) ----------
function phone(x, y, w, h, img, t, L) {
  ctx.save();
  ctx.shadowColor = "rgba(0,0,0,0.7)"; ctx.shadowBlur = 50; ctx.shadowOffsetY = 20;
  rrect(x, y, w, h, 52); ctx.fillStyle = "#101113"; ctx.fill(); ctx.shadowColor = "transparent";
  ctx.strokeStyle = "rgba(160,170,185,0.55)"; ctx.lineWidth = 3; ctx.stroke();
  const sx = x + 14, sy = y + 14, sw = w - 28, sh = h - 28;
  ctx.save(); rrect(sx, sy, sw, sh, 40); ctx.clip();
  ctx.fillStyle = "#151515"; ctx.fillRect(sx, sy, sw, sh);
  if (img) {
    // recorte do print: título + botões, ajustado à largura da tela do celular
    const cx0 = 296, cw = 470, ch = 640, cy0 = 86; const scl = sw / cw;
    ctx.drawImage(img, cx0, cy0, cw, ch, sx, sy + 70, sw, ch * scl);
    ctx.fillStyle = "#1e1e1e"; ctx.fillRect(sx, sy, sw, 70);
    ctx.drawImage(img, 218, 8, 140, 50, sx + 18, sy + 22, 98, 35);
    ctx.fillStyle = "#e9e9e9"; [0, 1, 2].forEach((i) => ctx.fillRect(sx + sw - 56, sy + 30 + i * 9, 30, 3));
    // toque no botão de orçamento (posição do botão no recorte)
    const bx = sx + (310 - cx0) * scl, by = sy + 70 + (555 - cy0) * scl, bw = 221 * scl, bh = 33 * scl;
    const tp = seg(t, 27.6, 28.1);
    if (tp > 0 && tp < 1) { ctx.strokeStyle = `rgba(255,255,255,${0.8 * (1 - tp)})`; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(bx + bw / 2, by + bh / 2, 10 + tp * 60, 0, 7); ctx.stroke(); }
    if (t > 27.6 && t < 27.75) { ctx.fillStyle = "rgba(255,255,255,0.25)"; ctx.fillRect(bx, by, bw, bh); }
    const ta = seg(t, 27.9, 28.2) * (1 - seg(t, 29.6, 29.9));
    if (ta > 0) {
      ctx.save(); ctx.globalAlpha = ta; const ty = sy + sh - 150 + (1 - E.outCubic(ta)) * 40;
      rrect(sx + 20, ty, sw - 40, 76, 18); ctx.fillStyle = "rgba(20,22,26,0.96)"; ctx.fill(); ctx.strokeStyle = "rgba(90,162,245,0.7)"; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = C.brand; ctx.beginPath(); ctx.arc(sx + 62, ty + 38, 16, 0, 7); ctx.fill();
      ctx.strokeStyle = "#fff"; ctx.lineWidth = 3.5; ctx.beginPath(); ctx.moveTo(sx + 54, ty + 38); ctx.lineTo(sx + 60, ty + 45); ctx.lineTo(sx + 71, ty + 31); ctx.stroke();
      txt(L.sent, sx + 92, ty + 47, { font: F.b(25, 600), color: C.ink, align: "left" });
      ctx.restore();
    }
  }
  ctx.restore();
  rrect(x + w / 2 - 50, y + 26, 100, 26, 13); ctx.fillStyle = "#000"; ctx.fill();
  ctx.restore();
}
function siteScene(t, L) {
  background(t, { glow: 0.7, gridAlpha: 0.05, glowY: H * 0.4 });
  const img = IMG["gv-drill.jpg"];
  const k = E.outCubic(seg(t, T.site + 0.1, T.site + 0.8));
  const dw = 960, dh = Math.round(956 * 726 / 1568) + 60, dx = 60, dy = lerp(470, 390, k);
  const push = 1 + 0.03 * seg(t, T.site, T.hero);
  ctx.save(); ctx.globalAlpha = k; ctx.translate(W / 2, dy + dh / 2); ctx.scale(push, push); ctx.translate(-W / 2, -(dy + dh / 2));
  browser(dx, dy, dw, dh, img, { url: "gvdrill.com.br", reveal: E.inOutCubic(seg(t, 23.8, 24.6)), glow: 40 });
  ctx.restore();
  // nota de exemplo (honesta: portfólio, não o "antes")
  const na = seg(t, 24.4, 24.8) * (1 - seg(t, 29.7, 30));
  txt(L.ex[0], 84, dy + dh + 56, { font: F.m(21), color: C.muted, align: "left", alpha: na, ls: 1 });
  txt(L.ex[1], 84, dy + dh + 88, { font: F.m(21), color: C.soft, align: "left", alpha: na, ls: 1 });
  // celular
  const pk = E.outCubic(seg(t, 25.6, 26.3));
  if (pk > 0) { ctx.save(); ctx.globalAlpha = pk; phone(lerp(W + 40, 656, pk), 880, 360, 740, img, t, L); ctx.restore(); }
  title(L.t3, 84, 1130, t, 24.6, 27.0, { font: F.d(92), color: C.ink, align: "left", lh: 90 });
  title(L.t4, 84, 1130, t, 27.1, 29.85, { font: F.d(92), color: C.ink, align: "left", lh: 90 });
}

export function render2d(t, lang, has3d) {
  const L = COPY[lang] || COPY.pt;
  // 1) gancho e esmagamento
  if (t < T.crushEnd && has3d) {
    const p = E.inCubic(seg(t, T.crush, T.crushEnd - 0.02));
    if (p > 0) {
      bctx.clearRect(0, 0, W, H); bctx.drawImage(cv, 0, 0);
      const ch = lerp(H, W * 0.75, p), cy = lerp(0, H * 0.5 - (W * 0.75) / 2, p);
      const sw = Math.max(40, Math.round(Math.exp(lerp(Math.log(W), Math.log(40), p)))), sh = Math.max(30, Math.round(sw * ch / W));
      tiny.width = sw; tiny.height = sh; tctx.imageSmoothingEnabled = true; tctx.drawImage(buf, 0, cy, W, ch, 0, 0, sw, sh);
      if (p > 0.97) { const c = document.createElement("canvas"); c.width = 40; c.height = 30; c.getContext("2d").drawImage(tiny, 0, 0, 40, 30); snap = c; }
      oldSite(t, L, { thumb: false });
      const rx = lerp(0, TH.x, p), ry = lerp(0, TH.y, p), rw = lerp(W, TH.w, p), rh = lerp(H, TH.h, p);
      drawPix(tiny, rx, ry, rw, rh); jpegBlocks(rx, ry, rw, rh, p);
      const g = Math.max(0, 1 - Math.abs(t - T.crush - 0.05) / 0.12); if (g > 0) sliceGlitch(t, g * 0.6);
    }
  }
  // 2) site de 2009 com aproximação no thumbnail
  if (t >= T.crushEnd && t < T.search) {
    const z = E.inOutCubic(seg(t, 2.3, T.search)), s = 1 + 0.45 * z, fx = TH.x + TH.w / 2, fy = TH.y + TH.h / 2;
    ctx.save(); ctx.translate(lerp(fx, W / 2, z), lerp(fy, 760, z)); ctx.scale(s, s); ctx.translate(-fx, -fy);
    oldSite(t, L); ctx.restore();
    // cota "160 × 120 px"
    const a = E.outCubic(seg(t, 2.65, 3.0)) * (1 - seg(t, 4.35, T.search));
    if (a > 0) {
      const x0 = lerp(fx, W / 2, z) - (TH.w / 2) * s, x1 = x0 + TH.w * s, y0 = lerp(fy, 760, z) - (TH.h / 2) * s, y1 = y0 + TH.h * s;
      ctx.save(); ctx.globalAlpha = a; ctx.strokeStyle = C.brand; ctx.lineWidth = 3; ctx.strokeRect(x0 - 6, y0 - 6, x1 - x0 + 12, y1 - y0 + 12);
      ctx.beginPath(); ctx.moveTo(x0, y1 + 40); ctx.lineTo(x1, y1 + 40); ctx.moveTo(x0, y1 + 26); ctx.lineTo(x0, y1 + 54); ctx.moveTo(x1, y1 + 26); ctx.lineTo(x1, y1 + 54); ctx.stroke();
      rrect((x0 + x1) / 2 - 130, y1 + 62, 260, 48, 6); ctx.fillStyle = "rgba(10,11,13,0.92)"; ctx.fill();
      txt("160 × 120 px", (x0 + x1) / 2, y1 + 96, { font: F.m(26), color: C.ink, ls: 2 });
      ctx.restore();
    }
    shade(1150, 1450, 0.75); ctx.fillStyle = "rgba(6,7,8,0.75)"; ctx.fillRect(0, 1450, W, H - 1450); shade(1400, H, 0.8);
    caption(L.cap1, t, 2.8, T.search);
  }
  // 3) busca + resultados
  if (t >= T.search && t < T.click + 0.05) {
    const tg = searchUI(t, L);
    if (tg) {
      // cursor desliza até o resultado do fim da lista e clica
      const cx = lerp(820, tg.x + tg.w * 0.4, E.inOutCubic(seg(t, 10.0, 10.6))), cy = lerp(1500, tg.y + 20, E.inOutCubic(seg(t, 10.0, 10.6)));
      if (t > 9.6) { if (t > 10.3) { ctx.fillStyle = "#1f3f78"; ctx.fillRect(tg.x, tg.y + 36, tg.w, 2); } cursor(cx, cy, t > T.click - 0.05 ? 1 : 0); }
      const ta = seg(t, 8.2, 8.5) * (1 - seg(t, 9.85, 10.1));
      if (ta > 0) { ctx.save(); ctx.globalAlpha = ta; shade(1080, H, 0.95); ctx.restore(); }
      title(L.t1, W / 2, 1480, t, 8.2, 10.05, { font: F.d(100), color: C.ink, lh: 100 });
    }
  }
  // 4) site carrega, aba fecha
  if (t >= T.click + 0.05 && t < T.dark) {
    const cl = E.inCubic(seg(t, T.close, T.close + 0.22));
    ctx.save(); if (cl > 0) { ctx.translate(W / 2, H / 2); ctx.scale(1 - cl * 0.08, 1 - cl * 0.08); ctx.translate(-W / 2, -H / 2); ctx.globalAlpha = 1 - cl; }
    oldSite(t, L, { reveal: Math.floor(seg(t, T.click + 0.1, T.click + 0.9) * 8) / 8 });
    ctx.restore();
    if (cl > 0) { ctx.fillStyle = `rgba(0,0,0,${cl})`; ctx.fillRect(0, 0, W, H); }
    if (cl < 1) { ctx.save(); ctx.globalAlpha = seg(t, 11.8, 12.0) * (1 - cl); shade(1150, H, 0.95); ctx.restore(); }
    title(L.t2, W / 2, 1450, t, 11.9, T.close + 0.1, { font: F.d(118), color: C.ink, lh: 112 });
    if (t >= T.close + 0.22) { ctx.fillStyle = "#000"; ctx.fillRect(0, 0, W, H); }
  }
  // 5) no escuro
  if (t >= T.dark && t < T.doc) {
    if (t < T.dark + 0.4) { ctx.fillStyle = `rgba(0,0,0,${1 - seg(t, T.dark, T.dark + 0.4)})`; ctx.fillRect(0, 0, W, H); }
    caption(L.cap2, t, 14.1, 16.7);
  }
  // 6) documentação
  if (t >= T.doc && t < T.site) {
    flash(t, [T.doc, 21.6], 0.35);
    recHud(t, seg(t, 17.0, 17.4) * (1 - seg(t, 23.1, 23.5)));
    label(L.lDoc, t, 17.0, 23.4);
    shade(1380, H, 0.75);
    if (has3d) docOverlay(t, L);
    caption(L.cap3, t, 17.4, 19.5);
  }
  // 7) site entregue
  if (t >= T.site && t < T.hero) {
    siteScene(t, L);
    label(L.lSite, t, 23.8, 29.9);
  }
  // 8) herói em plena resolução
  if (t >= T.hero && t < T.sig) {
    shade(1050, H, 0.9);
    title(L.end, W / 2, 1290, t, 30.6, T.sig + 0.1, { font: F.d(112), color: C.ink, lh: 106 });
    if (L.endSub) title(L.endSub, W / 2, 1290 + 106 * 3 + 6, t, 31.4, T.sig + 0.1, { font: F.b(38, 500), color: C.soft, rise: 10 });
    if (t < T.hero + 0.3) { ctx.fillStyle = `rgba(0,0,0,${1 - seg(t, T.hero, T.hero + 0.3)})`; ctx.fillRect(0, 0, W, H); }
  }
  if (has3d && t >= T.doc && t < T.site || (t >= T.hero && t < T.sig)) corners(0.4);
  signature(t, T.sig, lang, L.cta);
  vignette(); grain(t, 0.045);
  // cortes secos com respiro
  for (const c of [T.search, T.doc, T.site]) { const d = Math.abs(t - c); if (d < 0.08) { ctx.fillStyle = `rgba(0,0,0,${0.6 * (1 - d / 0.08)})`; ctx.fillRect(0, 0, W, H); } }
}
