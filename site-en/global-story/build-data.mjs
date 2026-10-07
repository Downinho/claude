import fs from 'node:fs';
import { feature } from 'topojson-client';
import { geoDistance } from 'd3-geo';
function polys(geom) {
  const list = geom.type === 'Polygon' ? [geom.coordinates] : geom.coordinates;
  return list.map(rings => { let x0 = 180, x1 = -180, y0 = 90, y1 = -90;
    for (const [x, y] of rings[0]) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
    return { rings, x0, x1, y0, y1 }; });
}
function inRing(x, y, r) { let c = false; for (let i = 0, j = r.length - 1; i < r.length; j = i++) { const [xi, yi] = r[i], [xj, yj] = r[j]; if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) c = !c; } return c; }
const inside = (P, x, y) => P.some(p => x >= p.x0 && x <= p.x1 && y >= p.y0 && y <= p.y1 && inRing(x, y, p.rings[0]) && !p.rings.slice(1).some(h => inRing(x, y, h)));
const landTopo = JSON.parse(fs.readFileSync('node_modules/world-atlas/land-50m.json'));
const lf = feature(landTopo, landTopo.objects.land);
const LAND = polys(lf.features ? lf.features[0].geometry : lf.geometry);
const c50 = JSON.parse(fs.readFileSync('node_modules/world-atlas/countries-50m.json'));
const feats = feature(c50, c50.objects.countries).features;
// código: 1 BR, 2 US, 3 ES, 4 NZ, 5 AU, 6 RU; âncora = cidade de chegada (onde a onda começa)
const C = [
  { id: '076', anchor: [-46.63, -23.55] },
  { id: '840', anchor: [-87.63, 41.88] },
  { id: '724', anchor: [-3.70, 40.42] },
  { id: '554', anchor: [174.76, -36.85] },
  { id: '036', anchor: [151.21, -33.87] },
  { id: '643', anchor: [37.62, 55.76] },
].map(c => ({ ...c, P: polys(feats.find(f => f.id === c.id).geometry) }));
const N = 64000, pts = [], ga = Math.PI * (3 - Math.sqrt(5)), count = [0, 0, 0, 0, 0, 0, 0];
for (let i = 0; i < N; i++) {
  const y = 1 - (i / (N - 1)) * 2, r = Math.sqrt(1 - y * y), th = ga * i;
  const lat = Math.asin(y) * 180 / Math.PI; if (lat < -58) continue;
  const lon = Math.atan2(Math.sin(th) * r, Math.cos(th) * r) * 180 / Math.PI;
  if (!inside(LAND, lon, lat)) continue;
  let code = 0, d = 0;
  for (let k = 0; k < C.length; k++) if (inside(C[k].P, lon, lat)) { code = k + 1; d = Math.round(geoDistance([lon, lat], C[k].anchor) * 1800 / Math.PI); break; }
  count[code]++;
  pts.push(Math.round(lon * 10), Math.round(lat * 10), code, d);
}
const round = (g) => JSON.parse(JSON.stringify(g, (k, v) => typeof v === 'number' ? Math.round(v * 100) / 100 : v));
fs.writeFileSync('story-data.json', JSON.stringify({ pts, br: round(feats.find(f => f.id === '076').geometry) }));
console.log('pontos', pts.length / 4, '| por país [terra, BR, US, ES, NZ, AU, RU]', count.join(' '), '| KB', (fs.statSync('story-data.json').size / 1024).toFixed(0));
