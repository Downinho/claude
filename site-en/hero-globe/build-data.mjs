import fs from 'node:fs';
import { feature } from 'topojson-client';
import { geoDistance } from 'd3-geo';
// Teste planar ponto-no-polígono (lon/lat) com pré-filtro por bbox: rápido e suficiente para pontos de 0,9°.
function polys(geom) {
  const list = geom.type === 'Polygon' ? [geom.coordinates] : geom.coordinates;
  return list.map(rings => {
    let x0 = 180, x1 = -180, y0 = 90, y1 = -90;
    for (const [x, y] of rings[0]) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
    return { rings, x0, x1, y0, y1 };
  });
}
function inRing(x, y, r) {
  let c = false;
  for (let i = 0, j = r.length - 1; i < r.length; j = i++) {
    const [xi, yi] = r[i], [xj, yj] = r[j];
    if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) c = !c;
  }
  return c;
}
const inside = (P, x, y) => P.some(p => x >= p.x0 && x <= p.x1 && y >= p.y0 && y <= p.y1 && inRing(x, y, p.rings[0]) && !p.rings.slice(1).some(h => inRing(x, y, h)));
const landTopo = JSON.parse(fs.readFileSync('node_modules/world-atlas/land-50m.json'));
const LAND = polys(feature(landTopo, landTopo.objects.land).features?.[0]?.geometry ?? feature(landTopo, landTopo.objects.land).geometry);
const c50 = JSON.parse(fs.readFileSync('node_modules/world-atlas/countries-50m.json'));
const br = feature(c50, c50.objects.countries).features.find(f => f.id === '076');
const BR = polys(br.geometry);
const SP = [-46.63, -23.55];
const N = 60000, pts = [], ga = Math.PI * (3 - Math.sqrt(5));
for (let i = 0; i < N; i++) {
  const y = 1 - (i / (N - 1)) * 2, r = Math.sqrt(1 - y * y), th = ga * i;
  const lat = Math.asin(y) * 180 / Math.PI;
  if (lat < -58) continue;
  const lon = Math.atan2(Math.sin(th) * r, Math.cos(th) * r) * 180 / Math.PI;
  if (!inside(LAND, lon, lat)) continue;
  const isBr = inside(BR, lon, lat);
  pts.push(Math.round(lon * 10), Math.round(lat * 10), isBr ? Math.max(1, Math.round(geoDistance([lon, lat], SP) * 1800 / Math.PI)) : 0);
}
const round = (g) => JSON.parse(JSON.stringify(g, (k, v) => typeof v === 'number' ? Math.round(v * 100) / 100 : v));
fs.writeFileSync('data.json', JSON.stringify({ pts, br: round(br.geometry) }));
let nb = 0; for (let i = 2; i < pts.length; i += 3) if (pts[i]) nb++;
console.log('pontos de terra', pts.length / 3, '| Brasil', nb, '| bytes', fs.statSync('data.json').size);
