// FILME E — DO CAD À REALIDADE (41,5 s · 24 fps · 9:16)
// Peça-herói: caixa de rolamento 6204, AL 6061-T6, flange 80×80×12, bossa Ø62×20, alojamento Ø47 H7, 4× M8 em 60×60.
export const DURATION = 41.5;

const T = { sketch: 2.5, extrude: 4.4, features: 5.5, explode: 8.5, drawing: 11, print: 16, fit: 19.5, machine: 22, boring: 28, inspect: 30.5, hero: 34.5, sig: 38 };
const COPY = {
  pt: { l1: "01 · MODELO 3D", l2: "02 · DESENHO TÉCNICO", l3: "03 · PROTÓTIPO", l4: "04 · FABRICAÇÃO", l5: "05 · INSPEÇÃO",
    hook: "TODA PEÇA COMEÇA ANTES DO METAL.", v1: "Antes do metal, vêm as decisões.", v2: "Cota. Tolerância. Acabamento.", v3: "Validar antes de cortar.", v4: "Desenho certo, peça certa.",
    end: ["DO MODELO DIGITAL", "AO RESULTADO FÍSICO."], cta: "AGENDE UM DIAGNÓSTICO", dec: "," },
  en: { l1: "01 · 3D MODEL", l2: "02 · TECHNICAL DRAWING", l3: "03 · PROTOTYPE", l4: "04 · MANUFACTURING", l5: "05 · INSPECTION",
    hook: "EVERY PART STARTS BEFORE THE METAL.", v1: "Before the metal, come the decisions.", v2: "Dimension. Tolerance. Finish.", v3: "Validate before you cut.", v4: "Right drawing. Right part.",
    end: ["FROM DIGITAL MODEL", "TO PHYSICAL RESULT."], cta: "BOOK AN ASSESSMENT", dec: "." },
  es: { l1: "01 · MODELO 3D", l2: "02 · PLANO TÉCNICO", l3: "03 · PROTOTIPO", l4: "04 · FABRICACIÓN", l5: "05 · INSPECCIÓN",
    hook: "TODA PIEZA EMPIEZA ANTES DEL METAL.", v1: "Antes del metal, vienen las decisiones.", v2: "Cota. Tolerancia. Acabado.", v3: "Validar antes de cortar.", v4: "Plano correcto, pieza correcta.",
    end: ["DEL MODELO DIGITAL", "AL RESULTADO FÍSICO."], cta: "AGENDA UN DIAGNÓSTICO", dec: "," },
};

// ---------- trilha (cues) ----------
cue(0, "drone", { until: 16.2, level: 0.8 });
cue(0.2, "room", { until: 22 });
[2.7, 3.0, 3.3, 3.6, 3.9, 4.2].forEach((t) => cue(t, "click"));
cue(4.4, "thump");
[5.7, 6.4, 7.1, 7.7].forEach((t) => cue(t, "tick"));
cue(8.6, "whoosh", { dur: 0.6 }); cue(10.75, "clack");
[11.4, 12.0, 12.6, 13.2].forEach((t) => cue(t, "pen"));
cue(14.1, "tick"); cue(15.6, "whoosh", { dur: 0.5 });
cue(16, "pulse", { bpm: 96, until: 30.3 });
cue(16, "stepper", { until: 19.4 });
cue(20.9, "clack", { soft: true });
cue(21.8, "whoosh", { dur: 0.4 });
cue(22.2, "door"); cue(22.6, "spindleUp", { dur: 0.8 });
cue(23.2, "spindle", { until: 27.9, f: 210 }); cue(23.2, "chips", { until: 27.9 }); cue(23.2, "coolant", { until: 30.2 });
cue(28.1, "spindle", { until: 30.2, f: 330, clean: true });
cue(30.5, "room", { until: 38 });
[31.6, 32.1, 32.6].forEach((t) => cue(t, "ratchet"));
cue(33.0, "chime");
cue(34.5, "resolve", { dur: 4 });
cue(38, "sub"); cue(38, "end");

// ---------- 3D ----------
let K, S, sets = {}, part = {}, chips, chipData = [], clipPlane, printMat, boreSurf, edgesHero, gauge, thimble, tool, boringBar, toolHolder;
export let stage;
const SIL = (THREE) => new THREE.Vector3();

export async function setup(kit, mode) {
  if (!kit) return;
  K = kit; const { THREE, MAT } = kit;
  stage = kit.createStage({ bg: 0x0a0b0d, fov: 30, bloom: 0.28, env: {}, fogNear: 10, fogFar: 40 });
  S = stage.scene; stage.renderer.localClippingEnabled = true;
  kit.keyLight(S, { pos: [-2.5, 5, 2.5], intensity: 2.0, size: 2 });
  kit.rimLight(S, { pos: [2.5, 1.6, -2.5], intensity: 9, color: 0x6fa8f0, target: [0, 0.2, 0] });
  const fill = new THREE.DirectionalLight(0xdfe6f0, 0.6); fill.position.set(3, 2, 4); S.add(fill);

  // --- geometrias da peça em estágios (CAD)
  const sq = (a, r) => { const s = new THREE.Shape(); s.moveTo(-a + r, -a); s.lineTo(a - r, -a); s.quadraticCurveTo(a, -a, a, -a + r); s.lineTo(a, a - r); s.quadraticCurveTo(a, a, a - r, a); s.lineTo(-a + r, a); s.quadraticCurveTo(-a, a, -a, a - r); s.lineTo(-a, -a + r); s.quadraticCurveTo(-a, -a, -a + r, -a); return s; };
  const hole = (x, y, r) => { const h = new THREE.Path(); h.absarc(x, y, r, 0, Math.PI * 2, true); return h; };
  const ext = (shape, d, y = 0) => { const g = new THREE.ExtrudeGeometry(shape, { depth: d, bevelEnabled: true, bevelThickness: 0.006, bevelSize: 0.006, bevelSegments: 2, curveSegments: 96 }); g.rotateX(-Math.PI / 2); g.translate(0, y, 0); return g; };
  const plate = sq(0.4, 0.06);
  const plateHoles = sq(0.4, 0.06); [[-0.3, -0.3], [0.3, -0.3], [0.3, 0.3], [-0.3, 0.3]].forEach(([x, y]) => plateHoles.holes.push(hole(x, y, 0.045))); plateHoles.holes.push(hole(0, 0, 0.235));
  const bossSolid = new THREE.Shape(); bossSolid.absarc(0, 0, 0.31, 0, Math.PI * 2);
  const bossRing = new THREE.Shape(); bossRing.absarc(0, 0, 0.31, 0, Math.PI * 2); bossRing.holes.push(hole(0, 0, 0.235));
  const cadMat = new THREE.MeshStandardMaterial({ color: 0x9aa1aa, roughness: 0.55, metalness: 0.25 });
  const edgeMat = new THREE.LineBasicMaterial({ color: 0x5aa2f5, transparent: true });
  const cadPiece = (geo) => { const g = new THREE.Group(); const m = new THREE.Mesh(geo, cadMat); m.castShadow = true; g.add(m); const e = new THREE.LineSegments(new THREE.EdgesGeometry(geo, 25), edgeMat); g.add(e); return g; };
  sets.cad = new THREE.Group(); S.add(sets.cad);
  part.plate = cadPiece(ext(plate, 0.12)); part.plateH = cadPiece(ext(plateHoles, 0.12));
  part.bossS = cadPiece(ext(bossSolid, 0.2, 0.12)); part.bossR = cadPiece(ext(bossRing, 0.2, 0.12));
  Object.values(part).forEach((p) => sets.cad.add(p));
  const grid = new THREE.GridHelper(6, 60, 0x2a3442, 0x1c222b); grid.position.y = -0.001; sets.cad.add(grid);

  // --- conjunto explodido (PBR)
  sets.exp = new THREE.Group(); S.add(sets.exp);
  part.base = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.08, 1.5), MAT.paint(0x2c3036, { metalness: 0.5, roughness: 0.4 })); part.base.castShadow = part.base.receiveShadow = true;
  part.house = kit.bearingHousing(MAT.machined());
  part.bear = kit.bearing6204();
  part.shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.9, 64), MAT.steel({ roughness: 0.18 })); part.shaft.castShadow = true;
  part.bolts = [[-0.3, -0.3], [0.3, -0.3], [0.3, 0.3], [-0.3, 0.3]].map(([x, z]) => { const b = kit.boltM8(); b.position.set(x, 0, z); return b; });
  sets.exp.add(part.base, part.house, part.bear, part.shaft, ...part.bolts);

  // --- impressão FDM
  sets.print = new THREE.Group(); S.add(sets.print);
  const bed = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.04, 2.4), new THREE.MeshPhysicalMaterial({ color: 0x1a1b1e, roughness: 0.75, metalness: 0.3 })); bed.position.y = -0.02; bed.receiveShadow = true; sets.print.add(bed);
  clipPlane = new THREE.Plane(new THREE.Vector3(0, -1, 0), 0);
  printMat = new THREE.MeshPhysicalMaterial({ color: 0xbfc4ca, roughness: 0.5, metalness: 0.0, clippingPlanes: [clipPlane], clipShadows: true, side: THREE.DoubleSide });
  printMat.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nvarying float vWY;").replace("#include <worldpos_vertex>", "#include <worldpos_vertex>\nvWY = (modelMatrix * vec4(transformed,1.0)).y;");
    sh.fragmentShader = sh.fragmentShader.replace("#include <common>", "#include <common>\nvarying float vWY;").replace("#include <color_fragment>", "#include <color_fragment>\nfloat ly = fract(vWY / 0.006);\ndiffuseColor.rgb *= 0.86 + 0.14 * smoothstep(0.0, 0.5, ly) * smoothstep(1.0, 0.5, ly);");
  };
  part.printed = kit.bearingHousing(printMat); part.printed.children.forEach((m) => { if (m.material !== printMat) m.visible = false; });
  sets.print.add(part.printed);
  part.hotend = new THREE.Group();
  const blk = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.12, 0.16), MAT.aluminum()); blk.position.y = 0.12;
  const noz = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.07, 6), new THREE.MeshPhysicalMaterial({ color: 0xc89b3c, metalness: 1, roughness: 0.3 })); noz.rotation.x = Math.PI; noz.position.y = 0.035;
  const fan = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.22, 0.08), MAT.paint(0x1b1c1f)); fan.position.set(0, 0.2, 0.12);
  const glow = new THREE.Mesh(new THREE.SphereGeometry(0.01, 12, 8), MAT.emissive(0xff8a30, 6));
  const heater = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.18, 16), MAT.steel()); heater.rotation.z = Math.PI / 2; heater.position.set(0, 0.1, 0.05);
  part.hotend.add(blk, noz, fan, glow, heater); part.hotend.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  sets.print.add(part.hotend);
  part.pBear = kit.bearing6204(); sets.print.add(part.pBear);

  // --- usinagem
  sets.mach = new THREE.Group(); S.add(sets.mach);
  const table = new THREE.Mesh(new THREE.BoxGeometry(4, 0.3, 2.2), MAT.darkSteel({ color: 0x2e3135, roughness: 0.5 })); table.position.y = -0.55; table.receiveShadow = true; sets.mach.add(table);
  for (let i = -2; i <= 2; i++) { const s = new THREE.Mesh(new THREE.BoxGeometry(4, 0.05, 0.1), MAT.rubber({ color: 0x0b0c0d })); s.position.set(0, -0.4, i * 0.4); sets.mach.add(s); }
  const vb = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.22, 1.5), MAT.paint(0x3a3e44, { metalness: 0.6 })); vb.position.y = -0.29; vb.castShadow = vb.receiveShadow = true; sets.mach.add(vb);
  const jawM = MAT.steel({ roughness: 0.3 });
  const j1 = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.34, 0.16), jawM); j1.position.set(0, -0.02, -0.5); const j2 = j1.clone(); j2.position.z = 0.5; j1.castShadow = j2.castShadow = true; sets.mach.add(j1, j2);
  const par = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.12, 0.06), MAT.steel({ roughness: 0.2 })); par.position.set(0, -0.12, -0.36); const par2 = par.clone(); par2.position.z = 0.36; sets.mach.add(par, par2);
  part.mPart = kit.bearingHousing(MAT.machined()); part.mPart.position.y = -0.06; sets.mach.add(part.mPart);
  boreSurf = new THREE.Mesh(new THREE.CylinderGeometry(0.234, 0.234, 0.32, 96, 1, true), MAT.chrome({ roughness: 0.35, side: THREE.BackSide })); boreSurf.position.y = 0.1; sets.mach.add(boreSurf);
  // ferramenta: fresa de topo Ø12 (3 cortes) + porta-ferramenta
  const fluteTex = (() => { const c = document.createElement("canvas"); c.width = 64; c.height = 256; const g = c.getContext("2d"); g.fillStyle = "#cfd3d8"; g.fillRect(0, 0, 64, 256); g.strokeStyle = "#3a3d42"; g.lineWidth = 9; for (let k = -4; k < 8; k++) { g.beginPath(); g.moveTo(0, k * 64); g.lineTo(64, k * 64 + 90); g.stroke(); } const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(3, 1.5); return t; })();
  tool = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.45, 48), new THREE.MeshPhysicalMaterial({ map: fluteTex, metalness: 1, roughness: 0.25 }));
  toolHolder = new THREE.Group();
  const hc = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.11, 0.35, 48), MAT.darkSteel({ color: 0x55595f, roughness: 0.3, metalness: 1 })); hc.position.y = 0.4;
  const hc2 = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.26, 0.25, 48), MAT.darkSteel({ color: 0x2b2d31 })); hc2.position.y = 0.7;
  const spn = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.6, 48), MAT.paint(0x24272b)); spn.position.y = 1.1;
  boringBar = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.6, 32), MAT.darkSteel({ color: 0x404348, metalness: 1, roughness: 0.3 }));
  const insert = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.03, 0.03), new THREE.MeshPhysicalMaterial({ color: 0xd4af37, metalness: 1, roughness: 0.25 })); insert.position.set(0.17, -0.28, 0); boringBar.add(insert);
  const arm = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.035, 0.035), MAT.darkSteel()); arm.position.set(0.085, -0.28, 0); boringBar.add(arm);
  toolHolder.add(tool, hc, hc2, spn, boringBar); toolHolder.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  sets.mach.add(toolHolder);
  // cavacos de alumínio (espirais curtas e brilhantes)
  const chipGeo = new THREE.TorusGeometry(0.018, 0.004, 4, 10, Math.PI * 1.6);
  chips = new THREE.InstancedMesh(chipGeo, MAT.chrome({ roughness: 0.15, color: 0xe8ecf0 }), 260); chips.castShadow = true; sets.mach.add(chips);
  for (let i = 0; i < 260; i++) chipData.push({ a: Math.random(), up: 0.6 + Math.random() * 1.4, out: 0.8 + Math.random() * 1.6, sp: (Math.random() - 0.5) * 30, ax: new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize(), off: Math.random() });
  // refrigerante: jato fino
  part.coolant = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.02, 1.1, 12), new THREE.MeshPhysicalMaterial({ color: 0xe9f1ff, transparent: true, opacity: 0.35, roughness: 0.05, transmission: 0 }));
  part.coolant.position.set(-0.55, 0.55, 0.25); part.coolant.rotation.z = -0.75; sets.mach.add(part.coolant);
  const hose = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.035, 10, 24, Math.PI / 2), MAT.paint(0x1f6fd1)); hose.position.set(-1.25, 1.1, 0.25); hose.rotation.z = -0.2; sets.mach.add(hose);
  // interior do centro de usinagem
  const wallM = MAT.paint(0x1d1f23, { roughness: 0.7 });
  const back = new THREE.Mesh(new THREE.PlaneGeometry(8, 5), wallM); back.position.set(0, 1, -2.2); sets.mach.add(back);
  const led = kit.tubeLight(sets.mach, 3, [0, 2.6, -1.2], 0, 4);

  // --- inspeção
  sets.insp = new THREE.Group(); S.add(sets.insp);
  const grTex = (() => { const c = document.createElement("canvas"); c.width = c.height = 512; const g = c.getContext("2d"); g.fillStyle = "#1c1d1f"; g.fillRect(0, 0, 512, 512); for (let i = 0; i < 9000; i++) { const v = Math.random() < 0.5 ? 40 + Math.random() * 40 : 10; g.fillStyle = `rgb(${v},${v},${v + 3})`; g.fillRect(Math.random() * 512, Math.random() * 512, 1 + Math.random() * 2, 1 + Math.random() * 2); } const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(2, 2); return t; })();
  const granite = new THREE.Mesh(new THREE.BoxGeometry(5, 0.4, 3), new THREE.MeshPhysicalMaterial({ map: grTex, roughness: 0.28, metalness: 0, clearcoat: 0.6, clearcoatRoughness: 0.2 })); granite.position.y = -0.2; granite.receiveShadow = true; sets.insp.add(granite);
  part.iPart = kit.bearingHousing(MAT.machined()); sets.insp.add(part.iPart);
  const iBore = new THREE.Mesh(new THREE.CylinderGeometry(0.234, 0.234, 0.32, 96, 1, true), MAT.chrome({ roughness: 0.05, side: THREE.BackSide })); iBore.position.y = 0.16; sets.insp.add(iBore);
  gauge = new THREE.Group();
  const gBody = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.9, 32), MAT.chrome({ roughness: 0.18 })); gBody.position.y = 0.45;
  const scaleTex = (() => { const c = document.createElement("canvas"); c.width = 512; c.height = 64; const g = c.getContext("2d"); g.fillStyle = "#c9cdd2"; g.fillRect(0, 0, 512, 64); g.fillStyle = "#16181b"; for (let i = 0; i < 50; i++) { const x = i * 10.24; g.fillRect(x, 0, 1.6, i % 5 === 0 ? 30 : 18); if (i % 10 === 0) { g.font = "16px monospace"; g.fillText(String(i / 10 * 5), x + 3, 52); } } const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = THREE.RepeatWrapping; return t; })();
  thimble = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.3, 64), new THREE.MeshPhysicalMaterial({ map: scaleTex, metalness: 0.9, roughness: 0.3 })); thimble.position.y = 0.95;
  const ratchet = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.16, 32), MAT.rubber({ color: 0x232427 })); ratchet.position.y = 1.18;
  const head = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.08, 6), MAT.chrome({ roughness: 0.25 })); head.position.y = 0.06;
  gauge.add(gBody, thimble, ratchet, head); gauge.traverse((o) => { if (o.isMesh) o.castShadow = true; }); sets.insp.add(gauge);

  // --- herói final com arestas CAD por cima
  sets.hero = new THREE.Group(); S.add(sets.hero);
  const g2 = new THREE.Mesh(granite.geometry, granite.material); g2.position.y = -0.2; g2.receiveShadow = true; sets.hero.add(g2);
  part.hPart = kit.bearingHousing(MAT.machined()); sets.hero.add(part.hPart);
  const hb = kit.bearing6204(); hb.position.y = 0.18; sets.hero.add(hb);
  edgesHero = new THREE.Group();
  const em = new THREE.LineBasicMaterial({ color: 0x5aa2f5, transparent: true, opacity: 1 });
  part.hPart.children.forEach((m) => { if (m.geometry && m.geometry.type === "ExtrudeGeometry") { const e = new THREE.LineSegments(new THREE.EdgesGeometry(m.geometry, 25), em); e.scale.setScalar(1.002); edgesHero.add(e); } });
  edgesHero.userData.mat = em; sets.hero.add(edgesHero);
}

const show = (name) => { for (const k in sets) sets[k].visible = k === name; };

export function render3d(t) {
  const THREE = K.THREE, cam = stage.camera, sc = S;
  if (t < T.extrude || (t >= T.drawing && t < T.print) || t >= T.sig) return false;
  // ----- CAD: extrusão e features (4,4–8,5)
  if (t < T.explode) {
    show("cad"); sc.background = new THREE.Color(0x17191d); sc.fog = null; stage.bloom.strength = 0.15;
    const e = E.outCubic(seg(t, T.extrude, T.extrude + 0.6));
    const ph = t < 6.3 ? 0 : t < 7.1 ? 1 : 2; // 0: chapa+extrusão, 1: bossa, 2: furos+alojamento
    part.plate.visible = ph < 2; part.plateH.visible = ph >= 2;
    part.bossS.visible = ph === 1 || (ph === 2 && false); part.bossR.visible = ph === 2;
    part.plate.scale.y = ph === 0 ? Math.max(0.001, e) : 1;
    part.bossS.scale.y = 1; part.bossS.position.y = 0;
    if (ph === 1) { const b = E.outCubic(seg(t, 6.3, 6.8)); part.bossS.scale.y = Math.max(0.001, b); part.bossS.position.y = 0.12 * (1 - b); }
    const ang = lerp(-0.9, 0.5, E.inOutCubic(seg(t, T.extrude, T.explode)));
    const r = lerp(4.6, 4.0, seg(t, T.extrude, T.explode)), h = lerp(3.4, 2.3, seg(t, T.extrude, T.explode));
    stage.look([Math.sin(ang) * r, h, Math.cos(ang) * r], [0, 0.14, 0], 30);
    return true;
  }
  // ----- explodido (8,5–11)
  if (t < T.drawing) {
    show("exp"); sc.background = new THREE.Color(0x0a0b0d); sc.fog = new THREE.Fog(0x0a0b0d, 10, 40); stage.bloom.strength = 0.28;
    const out = E.inOutCubic(seg(t, 8.6, 9.5)) * (1 - E.inOutCubic(seg(t, 10.2, 10.75)));
    part.base.position.y = -0.04;
    part.house.position.y = 0.0 + out * 0.55;
    part.bear.position.y = 0.18 + out * 1.15;
    part.bolts.forEach((b, i) => { b.position.y = 0.2 + out * (1.75 + i * 0.03); });
    part.shaft.position.y = 0.3 + out * 1.75;
    const ang = 0.6 + (t - T.explode) * 0.18;
    stage.look([Math.sin(ang) * 5.4, 1.9 + out * 0.9, Math.cos(ang) * 5.4], [0, 0.45 + out * 0.75, 0], 34);
    return true;
  }
  // ----- impressão FDM + encaixe do rolamento (16–22)
  if (t < T.machine) {
    show("print"); sc.background = new THREE.Color(0x0a0b0d); stage.bloom.strength = 0.3;
    const p = seg(t, T.print, 19.3), hgt = 0.335 * p;
    clipPlane.constant = hgt + 0.0005;
    const lap = (t - T.print) * 2.2 * Math.PI * 2;
    let x, z;
    if (hgt < 0.125) { const u = (lap / (Math.PI * 2)) % 1, a = 0.4, s4 = u * 4, k = Math.floor(s4), f = s4 - k; const P = [[-a, -a], [a, -a], [a, a], [-a, a], [-a, -a]]; x = lerp(P[k][0], P[k + 1][0], f); z = lerp(P[k][1], P[k + 1][1], f); }
    else { x = Math.cos(lap) * 0.31; z = Math.sin(lap) * 0.31; }
    const park = E.inOutCubic(seg(t, 19.3, 19.8));
    part.hotend.position.set(lerp(x, 0.9, park), hgt + 0.01 + park * 0.6, lerp(z, -0.6, park));
    const bp = E.outCubic(seg(t, 19.9, 20.9));
    part.pBear.visible = t > 19.8; part.pBear.position.y = lerp(1.0, 0.18, bp);
    const ang = t < 19.5 ? 0.35 + (t - T.print) * 0.08 : 0.62 + (t - 19.5) * 0.05;
    const r = t < 19.5 ? 2.3 : lerp(2.3, 2.9, E.inOutCubic(seg(t, 19.4, 20.2)));
    stage.look([Math.sin(ang) * r, 1.1 + (t < 19.5 ? hgt : 0.5), Math.cos(ang) * r], [0, t < 19.5 ? 0.12 + hgt * 0.5 : 0.18, 0], 30);
    return true;
  }
  // ----- usinagem (22–30,5)
  if (t < T.inspect) {
    show("mach"); sc.background = new THREE.Color(0x0c0d0f); stage.bloom.strength = 0.32;
    const rough = t < T.boring;
    tool.visible = rough; boringBar.visible = !rough;
    const spin = rough ? t * 80 : t * 60;
    tool.rotation.y = -spin; boringBar.rotation.y = -spin;
    let tx = 0, tz = 0, ty;
    if (rough) {
      const a = (t - 23.2) * 1.8; const R = 0.31 + 0.06;
      const engage = E.inOutCubic(seg(t, 22.6, 23.2));
      tx = Math.cos(a) * R * engage + (1 - engage) * 0.9; tz = Math.sin(a) * R * engage;
      ty = lerp(0.9, 0.12 + 0.225, engage) - seg(t, 23.2, 27.9) * 0.06;
      tool.position.set(0, -0.0, 0); boringBar.position.set(0, 0, 0);
    } else {
      ty = lerp(0.95, 0.42, E.inOutCubic(seg(t, 28.0, 28.6))) - seg(t, 28.6, 30.0) * 0.12;
    }
    toolHolder.position.set(tx, ty, tz);
    tool.position.y = 0; boringBar.position.y = 0;
    boreSurf.material.roughness = lerp(0.4, 0.04, seg(t, 28.6, 30.0));
    part.coolant.visible = t > 23.0;
    // cavacos
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), pos = new THREE.Vector3(), scl = new THREE.Vector3(1, 1, 1);
    for (let i = 0; i < 260; i++) {
      const d = chipData[i], period = 0.9, birth = 23.2 + ((i / 260) * period) + Math.floor((t - 23.2 - (i / 260) * period) / period) * period;
      const age = t - birth, live = t > 23.25 && t < 28.1 && age >= 0 && age < period;
      if (!live) { scl.set(0, 0, 0); m4.compose(pos.set(0, -5, 0), q, scl); chips.setMatrixAt(i, m4); continue; }
      const ca = (birth - 23.2) * 1.8, R = 0.31;
      const cx = Math.cos(ca) * R, cz = Math.sin(ca) * R; const tx2 = -Math.sin(ca), tz2 = Math.cos(ca);
      pos.set(cx + (tx2 * d.out + Math.cos(ca) * 0.6) * age, 0.3 + d.up * age - 4.9 * age * age, cz + (tz2 * d.out + Math.sin(ca) * 0.6) * age);
      q.setFromAxisAngle(d.ax, d.sp * age + d.off * 6); scl.setScalar(0.8 + d.a * 0.8);
      m4.compose(pos, q, scl); chips.setMatrixAt(i, m4);
    }
    chips.instanceMatrix.needsUpdate = true;
    const k = seg(t, T.machine, T.inspect);
    if (rough) stage.look([lerp(2.6, 2.0, k * 1.3), lerp(1.3, 1.0, k), lerp(2.7, 2.1, k * 1.3)], [tx * 0.4, 0.2, tz * 0.4], 30);
    else stage.look([0.9, 1.7, 1.5], [0, 0.18, 0], 30);
    return true;
  }
  // ----- inspeção (30,5–34,5)
  if (t < T.hero) {
    show("insp"); sc.background = new THREE.Color(0x0a0b0d); stage.bloom.strength = 0.25;
    const ins = E.outCubic(seg(t, 30.6, 31.3));
    gauge.position.set(0, lerp(1.0, 0.12, ins), 0);
    const clicks = [31.6, 32.1, 32.6].filter((c) => t >= c).length;
    thimble.rotation.y = clicks * 0.35 + E.outCubic(clamp(((t - 31.6) % 0.5) / 0.15)) * 0;
    const ang = 0.7 + (t - T.inspect) * 0.06;
    stage.look([Math.sin(ang) * 3.3, 1.9, Math.cos(ang) * 3.3], [0, 0.5, 0], 30);
    return true;
  }
  // ----- herói (34,5–38)
  show("hero"); sc.background = new THREE.Color(0x090a0c); stage.bloom.strength = 0.3;
  const ang = -0.5 + (t - T.hero) * 0.22;
  stage.look([Math.sin(ang) * 3.4, 1.7, Math.cos(ang) * 3.4], [0, 0.12, 0], 30);
  edgesHero.userData.mat.opacity = E.outCubic(seg(t, 34.6, 35.3)) * (1 - seg(t, 36.4, 37.4));
  return true;
}

// ---------- 2D ----------
const MONO = (s) => F.m(s);
function label(s, t, t0, t1) {
  const a = seg(t, t0, t0 + 0.3) * (1 - seg(t, t1 - 0.25, t1)); if (a <= 0) return;
  ctx.save(); ctx.globalAlpha = a;
  ctx.fillStyle = C.brand; ctx.fillRect(84, 316, 40 * E.outCubic(seg(t, t0, t0 + 0.5)), 3);
  txt(s, 84, 296, { font: MONO(30), color: C.ink, align: "left", ls: 8 });
  ctx.restore();
}
function caption(s, t, t0, t1) {
  const a = seg(t, t0, t0 + 0.35) * (1 - seg(t, t1 - 0.3, t1)); if (a <= 0) return;
  txt(s, W / 2, 1560, { font: F.b(40, 500), color: C.ink, alpha: a });
}
function corners(a = 0.55) {
  ctx.save(); ctx.strokeStyle = `rgba(238,242,247,${a})`; ctx.lineWidth = 2; const m = 48, L = 36;
  for (const [x, y, sx, sy] of [[m, 120, 1, 1], [W - m, 120, -1, 1], [m, H - 120, 1, -1], [W - m, H - 120, -1, -1]]) { ctx.beginPath(); ctx.moveTo(x, y + sy * L); ctx.lineTo(x, y); ctx.lineTo(x + sx * L, y); ctx.stroke(); }
  ctx.restore();
}
function cadChrome(t, L) {
  // barra de ferramentas, árvore de features, tríade e coordenadas — UI neutra de CAD
  ctx.save();
  ctx.fillStyle = "rgba(14,15,18,0.92)"; ctx.fillRect(0, 0, W, 96);
  for (let i = 0; i < 9; i++) { ctx.strokeStyle = i === 2 ? C.brand : "rgba(161,161,168,0.5)"; ctx.lineWidth = 2; rrect(40 + i * 72, 26, 46, 46, 8); ctx.stroke(); }
  txt("DW-0001.part", W - 40, 60, { font: MONO(22), color: C.muted, align: "right" });
  const feats = ["Sketch1", "Extrude1 · 12", "Boss · Ø62×20", "Bore · Ø47 H7", "Hole · 4× M8 cbore", "Chamfer · 1×45°"];
  const n = t < T.extrude ? 1 : t < 6.3 ? 2 : t < 7.1 ? 3 : 6;
  feats.slice(0, n).forEach((f, i) => { const on = i === n - 1; txt((on ? "▸ " : "  ") + f, 40, 400 + i * 34, { font: MONO(20), color: on ? C.soft : C.muted, align: "left" }); });
  // tríade
  const ox = 90, oy = H - 230;
  [[60, 0, "#e5484d", "X"], [0, -60, "#46a758", "Y"], [-34, 34, C.brand, "Z"]].forEach(([dx, dy, c, l]) => { ctx.strokeStyle = c; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(ox + dx, oy + dy); ctx.stroke(); txt(l, ox + dx * 1.3, oy + dy * 1.3 + 8, { font: MONO(20), color: c }); });
  const c = t < T.sketch ? [0, 0, 0] : [40 * Math.sin(t * 1.3), 40 * Math.cos(t * 0.9), t > T.extrude ? 12 + 20 * seg(t, 6.3, 6.8) : 0];
  const f = (v) => v.toFixed(3).replace(".", L.dec);
  txt(`X ${f(c[0])}   Y ${f(c[1])}   Z ${f(c[2])}`, W - 40, H - 210, { font: MONO(22), color: C.muted, align: "right" });
  ctx.restore();
}
// Esboço 2D (2,5–4,4): quadrado 80×80 R8 com cotas e restrições
function sketch(t, L) {
  ctx.fillStyle = "#17191d"; ctx.fillRect(0, 0, W, H);
  ctx.save(); ctx.strokeStyle = "rgba(90,162,245,0.07)"; ctx.lineWidth = 1;
  for (let x = 0; x < W; x += 40) { ctx.beginPath(); ctx.moveTo(x + 0.5, 0); ctx.lineTo(x + 0.5, H); ctx.stroke(); }
  for (let y = 0; y < H; y += 40) { ctx.beginPath(); ctx.moveTo(0, y + 0.5); ctx.lineTo(W, y + 0.5); ctx.stroke(); }
  ctx.restore();
  const cx = W / 2, cy = 960, a = 300, r = 60;
  // cursor piscando na origem (0–2,5)
  if (t < T.sketch) {
    if (Math.floor(t * 2) % 2 === 0) { ctx.strokeStyle = C.brand; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(cx - 26, cy); ctx.lineTo(cx + 26, cy); ctx.moveTo(cx, cy - 26); ctx.lineTo(cx, cy + 26); ctx.stroke(); }
    return;
  }
  const p = E.inOutCubic(seg(t, T.sketch, 3.6));
  ctx.save(); ctx.strokeStyle = t > 4.0 ? C.soft : "#eef2f7"; ctx.lineWidth = 4; ctx.lineJoin = "round";
  const per = 8 * a - 8 * r + 2 * Math.PI * r;
  ctx.setLineDash([per * p, per]); rrect(cx - a, cy - a, 2 * a, 2 * a, r); ctx.stroke(); ctx.restore();
  // cotas
  const dim = (x1, y1, x2, y2, s, k, horiz) => {
    const a2 = E.outCubic(seg(t, k, k + 0.3)); if (a2 <= 0) return;
    ctx.save(); ctx.globalAlpha = a2; ctx.strokeStyle = C.muted; ctx.fillStyle = C.muted; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
    const arr = (x, y, ang) => { ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(ang + 0.35) * 18, y + Math.sin(ang + 0.35) * 18); ctx.lineTo(x + Math.cos(ang - 0.35) * 18, y + Math.sin(ang - 0.35) * 18); ctx.fill(); };
    const ang = Math.atan2(y2 - y1, x2 - x1); arr(x1, y1, ang); arr(x2, y2, ang + Math.PI);
    txt(s, (x1 + x2) / 2 + (horiz ? 0 : -16), (y1 + y2) / 2 + (horiz ? -14 : 10), { font: MONO(30), color: C.ink, align: horiz ? "center" : "right" });
    ctx.restore();
  };
  dim(cx - a, cy - a - 70, cx + a, cy - a - 70, "80", 3.0, true);
  dim(cx - a - 70, cy - a, cx - a - 70, cy + a, "80", 3.3, false);
  if (t > 3.6) txt("R8", cx + a - 40, cy + a + 70, { font: MONO(28), color: C.ink, alpha: seg(t, 3.6, 3.9) });
  // restrições (ícones)
  [["⟂", cx - a + 30, cy - a + 40, 3.7], ["=", cx + a - 40, cy - 20, 3.85], ["◦", cx, cy, 3.95]].forEach(([s, x, y, k]) => { if (t > k) { ctx.save(); ctx.globalAlpha = seg(t, k, k + 0.15); rrect(x - 20, y - 22, 40, 40, 6); ctx.fillStyle = "rgba(34,130,240,0.25)"; ctx.fill(); ctx.restore(); txt(s, x, y + 9, { font: MONO(26), color: C.soft, alpha: seg(t, k, k + 0.15) }); } });
  if (t > 4.0) txt("FULLY DEFINED", cx, cy + a + 150, { font: MONO(22), color: C.soft, ls: 6, alpha: seg(t, 4.0, 4.2) });
}
// Desenho técnico (11–16): vista superior, corte A-A, cotas, tolerâncias, carimbo
function drawing(t, L) {
  const k = t - T.drawing;
  ctx.fillStyle = "#0e1013"; ctx.fillRect(0, 0, W, H);
  const zp = E.inOutCubic(seg(t, 14.0, 15.0)), zoom = 1 + zp * 1.0;
  const fx = 830, fy = 790; // foco do zoom: anotação Ø47 H7
  ctx.save(); ctx.translate(lerp(fx, W / 2, zp), lerp(fy, 900, zp)); ctx.scale(zoom, zoom); ctx.translate(-fx, -fy);
  // folha
  ctx.strokeStyle = "rgba(238,242,247,0.85)"; ctx.lineWidth = 2; ctx.strokeRect(60, 380, W - 120, 1260); ctx.strokeRect(72, 392, W - 144, 1236);
  const draw = (fn, t0, d = 0.6) => { const p = E.inOutCubic(seg(t, t0, t0 + d)); if (p <= 0) return; ctx.save(); ctx.globalAlpha = Math.min(1, p * 1.5); fn(p); ctx.restore(); };
  const L1 = "rgba(238,242,247,0.95)";
  // vista superior
  const tx = 330, ty = 640, a = 190;
  draw((p) => { ctx.strokeStyle = L1; ctx.lineWidth = 3; ctx.setLineDash([8 * a * p, 9999]); rrect(tx - a, ty - a, 2 * a, 2 * a, 28); ctx.stroke(); ctx.setLineDash([]); }, 11.1);
  draw(() => { ctx.strokeStyle = L1; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(tx, ty, 147, 0, 7); ctx.stroke(); ctx.beginPath(); ctx.arc(tx, ty, 112, 0, 7); ctx.stroke(); [[-1, -1], [1, -1], [1, 1], [-1, 1]].forEach(([sx, sy]) => { ctx.beginPath(); ctx.arc(tx + sx * 142, ty + sy * 142, 21, 0, 7); ctx.stroke(); ctx.beginPath(); ctx.arc(tx + sx * 142, ty + sy * 142, 33, 0, 7); ctx.setLineDash([6, 6]); ctx.stroke(); ctx.setLineDash([]); }); }, 11.5);
  draw(() => { ctx.strokeStyle = "rgba(90,162,245,0.9)"; ctx.lineWidth = 1.5; ctx.setLineDash([24, 6, 4, 6]); ctx.beginPath(); ctx.moveTo(tx - a - 40, ty); ctx.lineTo(tx + a + 40, ty); ctx.moveTo(tx, ty - a - 40); ctx.lineTo(tx, ty + a + 40); ctx.stroke(); ctx.setLineDash([]); txt("A", tx - a - 60, ty + 10, { font: MONO(28), color: C.soft }); txt("A", tx + a + 60, ty + 10, { font: MONO(28), color: C.soft }); }, 11.8);
  // corte A-A (hachurado)
  const sx0 = 640, sy0 = 520, sw = 380, flh = 46, bh = 76, bw = 236, bore = 178;
  draw(() => {
    ctx.strokeStyle = L1; ctx.lineWidth = 3;
    const poly = (pts) => { ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.closePath(); };
    const left = [[sx0, sy0 + bh + flh], [sx0, sy0 + bh], [sx0 + (sw - bw) / 2, sy0 + bh], [sx0 + (sw - bw) / 2, sy0], [sx0 + (sw - bore) / 2, sy0], [sx0 + (sw - bore) / 2, sy0 + bh + flh]];
    const right = left.map(([x, y]) => [2 * sx0 + sw - x, y]);
    for (const P of [left, right]) {
      poly(P); ctx.save(); ctx.clip(); ctx.strokeStyle = "rgba(238,242,247,0.45)"; ctx.lineWidth = 1.5; for (let i = -300; i < 600; i += 16) { ctx.beginPath(); ctx.moveTo(sx0 + i, sy0 + 200); ctx.lineTo(sx0 + i + 200, sy0); ctx.stroke(); } ctx.restore();
      poly(P); ctx.stroke();
    }
    txt("A-A", sx0 + sw / 2, sy0 + bh + flh + 70, { font: MONO(28), color: C.ink });
  }, 12.1);
  // cotas e tolerâncias
  const D = (x1, y1, x2, y2, s, t0, o = {}) => draw(() => { ctx.strokeStyle = C.soft; ctx.fillStyle = C.soft; ctx.lineWidth = 1.6; ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke(); txt(s, o.x ?? (x1 + x2) / 2, o.y ?? ((y1 + y2) / 2 - 12), { font: MONO(o.size || 24), color: C.ink, align: o.align || "center" }); }, t0, 0.35);
  D(tx - a, ty + a + 50, tx + a, ty + a + 50, "80", 12.4);
  D(tx - 142, ty - a - 50, tx + 142, ty - a - 50, "60", 12.55);
  D(sx0 + (sw - bw) / 2, sy0 - 50, sx0 + (sw + bw) / 2, sy0 - 50, "Ø62", 12.7);
  D(sx0 + (sw - bore) / 2, sy0 + bh + flh + 120, sx0 + (sw + bore) / 2, sy0 + bh + flh + 120, `Ø47 H7 (+0${L.dec}025/0)`, 12.85, { size: 26, y: sy0 + bh + flh + 160 });
  draw(() => { txt("4× Ø9 ⌴ Ø14 ↧ 8.5".replace(".", L.dec), tx, ty + a + 120, { font: MONO(24), color: C.ink }); txt("Ra 1" + L.dec + "6", sx0 + sw / 2 + 120, sy0 + 40, { font: MONO(26), color: C.ink }); }, 13.0, 0.3);
  draw(() => { ctx.strokeStyle = C.ink; ctx.lineWidth = 2; ctx.strokeRect(sx0 + 30, sy0 + bh + flh + 190, 250, 48); ctx.beginPath(); ctx.moveTo(sx0 + 80, sy0 + bh + flh + 190); ctx.lineTo(sx0 + 80, sy0 + bh + flh + 238); ctx.moveTo(sx0 + 200, sy0 + bh + flh + 190); ctx.lineTo(sx0 + 200, sy0 + bh + flh + 238); ctx.stroke(); txt("⟂", sx0 + 55, sy0 + bh + flh + 225, { font: MONO(28), color: C.ink }); txt("0" + L.dec + "02", sx0 + 140, sy0 + bh + flh + 224, { font: MONO(24), color: C.ink }); txt("A", sx0 + 240, sy0 + bh + flh + 224, { font: MONO(24), color: C.ink }); }, 13.2, 0.3);
  // carimbo
  draw(() => {
    const bx = 400, by = 1400, bw2 = W - 72 - bx, bh2 = 228; ctx.strokeStyle = L1; ctx.lineWidth = 2; ctx.strokeRect(bx, by, bw2, bh2);
    [by + 76, by + 152].forEach((y) => { ctx.beginPath(); ctx.moveTo(bx, y); ctx.lineTo(bx + bw2, y); ctx.stroke(); });
    ctx.beginPath(); ctx.moveTo(bx + 320, by + 76); ctx.lineTo(bx + 320, by + bh2); ctx.stroke();
    txt(L.dec === "." ? "BEARING HOUSING 6204" : (window.LANG === "es" ? "SOPORTE RODAMIENTO 6204" : "CAIXA DE ROLAMENTO 6204"), bx + 20, by + 50, { font: MONO(24), color: C.ink, align: "left" });
    txt("DW-0001 · REV A", bx + 20, by + 126, { font: MONO(22), color: C.ink, align: "left" });
    txt("AL 6061-T6", bx + 340, by + 126, { font: MONO(22), color: C.ink, align: "left" });
    txt("1:1 · mm", bx + 20, by + 202, { font: MONO(22), color: C.muted, align: "left" });
    txt("DOWNWAY", bx + 340, by + 202, { font: MONO(22), color: C.soft, align: "left", ls: 4 });
  }, 13.4, 0.4);
  ctx.restore();
  // destaque na macro (14–16)
  const hl = seg(t, 15.0, 15.3) * (1 - seg(t, 15.8, 16.0));
  if (hl > 0) { ctx.save(); ctx.globalAlpha = hl; ctx.strokeStyle = C.brand; ctx.lineWidth = 3; rrect(W / 2 - 360, 900 + (802 - 790) * 2 - 70, 720, 110, 12); ctx.stroke(); ctx.restore(); }
}
function hudReading(t, L) {
  const a = seg(t, 31.2, 31.6) * (1 - seg(t, 34.2, 34.5)); if (a <= 0) return;
  const v = 47.0 + 0.012 * E.outCubic(seg(t, 31.6, 32.8));
  ctx.save(); ctx.globalAlpha = a;
  rrect(84, 1340, W - 168, 250, 18); ctx.fillStyle = "rgba(10,11,13,0.78)"; ctx.fill(); ctx.strokeStyle = "rgba(90,162,245,0.5)"; ctx.lineWidth = 2; ctx.stroke();
  txt("Ø47 H7", 124, 1408, { font: MONO(28), color: C.muted, align: "left", ls: 3 });
  txt(`47${L.dec}000 – 47${L.dec}025`, W - 124, 1408, { font: MONO(28), color: C.muted, align: "right" });
  txt(v.toFixed(3).replace(".", L.dec), 124, 1520, { font: F.d(110), color: t > 32.8 ? C.brand : C.ink, align: "left", glow: t > 32.8 ? 20 : 0 });
  // barra de tolerância
  const x0 = 520, x1 = W - 124, y = 1488;
  ctx.fillStyle = "rgba(90,162,245,0.2)"; ctx.fillRect(x0, y, x1 - x0, 10);
  const mx = x0 + (x1 - x0) * ((v - 47.0) / 0.025);
  ctx.fillStyle = C.brand; ctx.fillRect(mx - 3, y - 14, 6, 38);
  if (t > 33.0) txt("✓", x1, 1556, { font: F.d(70), color: C.brand, align: "right", alpha: seg(t, 33.0, 33.2) });
  ctx.restore();
}

export function render2d(t, lang, has3d) {
  const L = COPY[lang] || COPY.pt;
  if (!has3d) {
    if (t < T.extrude) sketch(t, L);
    else if (t >= T.drawing && t < T.print) drawing(t, L);
  }
  if (t < T.explode) cadChrome(t, L);
  // gancho
  if (t < 2.5) title(L.hook.split(" ").length > 4 ? [L.hook.split(" ").slice(0, 3).join(" "), L.hook.split(" ").slice(3).join(" ")] : L.hook, W / 2, 1460, t, 0.3, 2.45, { font: F.d(96), color: C.ink, lh: 96 });
  label(L.l1, t, 2.6, T.explode);
  caption(L.v1, t, 5.8, 8.3);
  label(L.l2, t, 11.1, T.print);
  caption(L.v2, t, 12.6, 14.0);
  label(L.l3, t, 16.1, T.fit + 0.4);
  caption(L.v3, t, 19.9, 21.8);
  label(L.l4, t, 22.2, T.inspect);
  label(L.l5, t, 30.7, T.hero);
  hudReading(t, L);
  caption(L.v4, t, 33.2, 34.4);
  if (t >= T.hero && t < T.sig) title(L.end, W / 2, 1440, t, 35.2, 37.9, { font: F.d(104), color: C.ink, lh: 100 });
  if (t > 0.1 && t < T.sig) corners(t < T.explode ? 0.3 : 0.5);
  signature(t, T.sig, lang, L.cta);
  // pós: vinheta leve e grão em tudo
  vignette(); grain(t, 0.045);
  // corte para preto suave nas trocas grandes
  const cuts = [T.explode, T.drawing, T.print, T.machine, T.inspect, T.hero];
  for (const c of cuts) { const d = Math.abs(t - c); if (d < 0.08) { ctx.fillStyle = `rgba(0,0,0,${0.6 * (1 - d / 0.08)})`; ctx.fillRect(0, 0, W, H); } }
}
