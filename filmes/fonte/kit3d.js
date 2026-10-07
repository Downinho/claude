// Kit 3D dos filmes Downway: palco, ambiente de estúdio industrial, materiais físicos e câmera.
import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
export { THREE, mergeGeometries };

export const W3 = 864, H3 = 1536; // renderizado e ampliado para 1080x1920 na composição

const _rnd = (i) => { const x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };

// Ambiente: sala escura com faixas de luz (softboxes) — reflexos de metal com cara de estúdio/galpão
function envScene(o = {}) {
  const s = new THREE.Scene();
  s.background = new THREE.Color(o.base ?? 0x050506);
  const strip = (w, h, x, y, z, ry, rx, int, color = 0xffffff) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(int), side: THREE.DoubleSide }));
    m.position.set(x, y, z); m.rotation.y = ry; m.rotation.x = rx; s.add(m);
  };
  strip(10, 1.6, 0, 6, -2, 0, Math.PI / 2, o.top ?? 4.5);
  strip(8, 1.0, 0, 6, 3, 0, Math.PI / 2, (o.top ?? 4.5) * 0.6);           // faixa de teto
  strip(1.6, 6, -7, 2, 0, Math.PI / 2, 0, o.left ?? 3.0);           // lateral esquerda (chave)
  strip(0.5, 5, 7, 1.5, -2, -Math.PI / 2, 0, o.right ?? 0.7, o.rimColor ?? 0x8fbaf0);
  strip(1.0, 4, 6, 1.5, 4, -Math.PI / 2 - 0.6, 0, o.fill ?? 1.2); // recorte azul
  strip(6, 0.8, 0, 1.5, 7, Math.PI, 0, o.front ?? 1.0);               // preenchimento frontal fraco
  if (o.warm) strip(2, 1, 5, 0.5, 5, -2.3, 0, o.warm, 0xffa040);    // luz quente de máquina
  return s;
}

export function createStage(o = {}) {
  const canvas = document.createElement("canvas");
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(1); renderer.setSize(W3, H3, false);
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = o.exposure ?? 1.0;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(o.bg ?? 0x08090b);
  if (o.fog !== false) scene.fog = new THREE.Fog(o.bg ?? 0x08090b, o.fogNear ?? 8, o.fogFar ?? 30);
  const pm = new THREE.PMREMGenerator(renderer);
  scene.environment = pm.fromScene(envScene(o.env || {}), 0.02).texture;
  scene.environmentIntensity = o.envIntensity ?? 1.3;
  const camera = new THREE.PerspectiveCamera(o.fov ?? 32, W3 / H3, 0.01, 200);
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(W3 / 2, H3 / 2), o.bloom ?? 0.35, 0.5, o.bloomThreshold ?? 0.9);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());
  return {
    THREE, renderer, scene, camera, composer, bloom, canvas,
    render() { composer.render(); return canvas; },
    look(pos, target, fov) { camera.position.set(...pos); camera.lookAt(new THREE.Vector3(...target)); if (fov) { camera.fov = fov; camera.updateProjectionMatrix(); } },
  };
}

// Textura de escovado (anisotropia visual) para alumínio/aço
function brushedTex(seed = 1, size = 512, dir = "h") {
  const c = document.createElement("canvas"); c.width = c.height = size;
  const g = c.getContext("2d"); g.fillStyle = "#808080"; g.fillRect(0, 0, size, size);
  for (let i = 0; i < size * 6; i++) {
    const v = 100 + _rnd(i * 1.7 + seed) * 80, a = 0.25 + _rnd(i * 3.3 + seed) * 0.35;
    g.fillStyle = `rgba(${v},${v},${v},${a})`;
    if (dir === "h") g.fillRect(_rnd(i + seed) * size - 60, _rnd(i * 2.1 + seed) * size, 40 + _rnd(i * 5 + seed) * 260, 1);
    else g.fillRect(_rnd(i * 2.1 + seed) * size, _rnd(i + seed) * size - 60, 1, 40 + _rnd(i * 5 + seed) * 260);
  }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.NoColorSpace; return t;
}
// Marcas de usinagem circulares (faceamento) para tampas usinadas
function turnedTex(seed = 3, size = 512) {
  const c = document.createElement("canvas"); c.width = c.height = size;
  const g = c.getContext("2d"); g.fillStyle = "#808080"; g.fillRect(0, 0, size, size);
  for (let r = 2; r < size * 0.72; r += 1.3) { const v = 110 + _rnd(r * 3.1 + seed) * 50; g.strokeStyle = `rgba(${v},${v},${v},0.55)`; g.beginPath(); g.arc(size / 2, size / 2, r, 0, 7); g.stroke(); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.NoColorSpace; return t;
}

export const MAT = {
  aluminum: (o = {}) => new THREE.MeshPhysicalMaterial({ color: 0xd4d9e0, metalness: 1, roughness: 0.32, roughnessMap: brushedTex(1), bumpMap: brushedTex(9), bumpScale: 0.6, anisotropy: 0.6, ...o }),
  machined: (o = {}) => new THREE.MeshPhysicalMaterial({ color: 0xdfe3e8, metalness: 1, roughness: 0.22, roughnessMap: turnedTex(3), bumpMap: turnedTex(5), bumpScale: 0.4, ...o }),
  steel: (o = {}) => new THREE.MeshPhysicalMaterial({ color: 0xa9adb3, metalness: 1, roughness: 0.38, roughnessMap: brushedTex(4), ...o }),
  darkSteel: (o = {}) => new THREE.MeshPhysicalMaterial({ color: 0x3a3d42, metalness: 0.9, roughness: 0.45, ...o }),
  chrome: (o = {}) => new THREE.MeshPhysicalMaterial({ color: 0xffffff, metalness: 1, roughness: 0.06, ...o }),
  paint: (color = 0x2b2e33, o = {}) => new THREE.MeshPhysicalMaterial({ color, metalness: 0.1, roughness: 0.55, clearcoat: 0.3, clearcoatRoughness: 0.4, ...o }),
  yellow: (o = {}) => new THREE.MeshPhysicalMaterial({ color: 0xd9a21b, metalness: 0.1, roughness: 0.5, clearcoat: 0.4, ...o }),
  rubber: (o = {}) => new THREE.MeshStandardMaterial({ color: 0x141416, roughness: 0.9, metalness: 0, ...o }),
  plastic: (color = 0xd8d8d2, o = {}) => new THREE.MeshPhysicalMaterial({ color, roughness: 0.55, metalness: 0, sheen: 0.2, ...o }),
  glass: (o = {}) => new THREE.MeshPhysicalMaterial({ color: 0xffffff, metalness: 0, roughness: 0.05, transmission: 0.0, transparent: true, opacity: 0.18, ...o }),
  emissive: (color = 0x2282f0, i = 2, o = {}) => new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(i), ...o }),
  floor: (o = {}) => new THREE.MeshPhysicalMaterial({ color: 0x15161a, metalness: 0.3, roughness: 0.42, roughnessMap: brushedTex(7), ...o }),
};

export function addFloor(scene, y = 0, o = {}) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(o.size ?? 60, o.size ?? 60), o.mat || MAT.floor());
  m.rotation.x = -Math.PI / 2; m.position.y = y; m.receiveShadow = true; scene.add(m); return m;
}
export function keyLight(scene, o = {}) {
  const l = new THREE.DirectionalLight(o.color ?? 0xffffff, o.intensity ?? 2.2);
  l.position.set(...(o.pos || [-3, 6, 3])); l.castShadow = true;
  l.shadow.mapSize.set(2048, 2048); const s = o.size ?? 3;
  Object.assign(l.shadow.camera, { left: -s, right: s, top: s, bottom: -s, near: 0.1, far: 30 }); l.shadow.bias = -0.0004; l.shadow.normalBias = 0.02;
  scene.add(l); return l;
}
export function rimLight(scene, o = {}) {
  const l = new THREE.SpotLight(o.color ?? 0x2282f0, o.intensity ?? 40, 30, o.angle ?? 0.5, 0.7, 1.5);
  l.position.set(...(o.pos || [3, 2.5, -3])); if (o.target) l.target.position.set(...o.target); scene.add(l); scene.add(l.target); return l;
}
// Lâmpadas tubulares (luminárias industriais) — emissivas, entram no bloom
export function tubeLight(scene, len, pos, rotY = 0, i = 3) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, len, 12), MAT.emissive(0xf2f4ff, i));
  m.rotation.z = Math.PI / 2; m.rotation.y = rotY; m.position.set(...pos); scene.add(m); return m;
}

// Peça-herói: caixa de rolamento 6204 com flange quadrada (80×80×12, bossa Ø62×20, alojamento Ø47 H7, 4×M8 em 60×60). Unidades: 1 = 100 mm.
export function bearingHousing(mat) {
  const a = 0.4, r = 0.06, s = new THREE.Shape();
  s.moveTo(-a + r, -a); s.lineTo(a - r, -a); s.quadraticCurveTo(a, -a, a, -a + r); s.lineTo(a, a - r); s.quadraticCurveTo(a, a, a - r, a);
  s.lineTo(-a + r, a); s.quadraticCurveTo(-a, a, -a, a - r); s.lineTo(-a, -a + r); s.quadraticCurveTo(-a, -a, -a + r, -a);
  for (const [x, y] of [[-0.3, -0.3], [0.3, -0.3], [0.3, 0.3], [-0.3, 0.3]]) { const h = new THREE.Path(); h.absarc(x, y, 0.045, 0, Math.PI * 2, true); s.holes.push(h); }
  const hc = new THREE.Path(); hc.absarc(0, 0, 0.235, 0, Math.PI * 2, true); s.holes.push(hc);
  const flange = new THREE.ExtrudeGeometry(s, { depth: 0.12, bevelEnabled: true, bevelThickness: 0.008, bevelSize: 0.008, bevelSegments: 3, curveSegments: 72 });
  flange.rotateX(-Math.PI / 2);
  const bs = new THREE.Shape(); bs.absarc(0, 0, 0.31, 0, Math.PI * 2); const bh = new THREE.Path(); bh.absarc(0, 0, 0.235, 0, Math.PI * 2, true); bs.holes.push(bh);
  const boss = new THREE.ExtrudeGeometry(bs, { depth: 0.2, bevelEnabled: true, bevelThickness: 0.008, bevelSize: 0.008, bevelSegments: 3, curveSegments: 120 });
  boss.rotateX(-Math.PI / 2); boss.translate(0, 0.12, 0);
  // rebaixos dos M8 (anéis escuros sutis)
  const g = new THREE.Group();
  const m = mat || MAT.aluminum();
  const f = new THREE.Mesh(flange, m), b = new THREE.Mesh(boss, m);
  f.castShadow = f.receiveShadow = b.castShadow = b.receiveShadow = true;
  g.add(f, b);
  for (const [x, z] of [[-0.3, -0.3], [0.3, -0.3], [0.3, 0.3], [-0.3, 0.3]]) {
    const cb = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.006, 48, 1, true), MAT.darkSteel({ side: THREE.DoubleSide }));
    cb.position.set(x, 0.122, z); g.add(cb);
  }
  return g;
}

// Rolamento 6204 (Ø47 × Ø20 × 14)
export function bearing6204() {
  const g = new THREE.Group();
  const ring = (ro, ri, h, mat) => { const s = new THREE.Shape(); s.absarc(0, 0, ro, 0, Math.PI * 2); const p = new THREE.Path(); p.absarc(0, 0, ri, 0, Math.PI * 2, true); s.holes.push(p); const geo = new THREE.ExtrudeGeometry(s, { depth: h, bevelEnabled: true, bevelThickness: 0.004, bevelSize: 0.004, bevelSegments: 2, curveSegments: 96 }); geo.rotateX(-Math.PI / 2); return new THREE.Mesh(geo, mat); };
  g.add(ring(0.235, 0.19, 0.14, MAT.chrome({ roughness: 0.12 })));
  g.add(ring(0.135, 0.1, 0.14, MAT.chrome({ roughness: 0.12 })));
  const shield = ring(0.19, 0.135, 0.004, MAT.darkSteel({ roughness: 0.3 })); shield.position.y = 0.138; g.add(shield);
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return g;
}

// Parafuso Allen M8×20 (cabeça cilíndrica)
export function boltM8() {
  const g = new THREE.Group();
  const head = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.08, 40), MAT.darkSteel({ roughness: 0.35, metalness: 1, color: 0x2a2c30 }));
  const hex = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.032, 0.02, 6), MAT.rubber()); hex.position.y = 0.032;
  const shank = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.2, 24), MAT.darkSteel({ roughness: 0.4, metalness: 1, color: 0x34363a })); shank.position.y = -0.14;
  g.add(head, hex, shank); g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return g;
}
