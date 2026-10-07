// node rec3d.cjs <filme> [inicio] [fim] → cache/<filme>/NNNNN.jpg só dos quadros com 3D
const { open } = require('./common.cjs'); const fs = require('fs'); const path = require('path');
(async () => {
  const [c, a, z] = process.argv.slice(2);
  const dir = path.join(__dirname, '..', 'cache', c); fs.mkdirSync(dir, { recursive: true });
  const { b, p, errs } = await open(c, 'pt', '3d');
  const dur = await p.evaluate(() => window.DURATION); const N = Math.round(dur * 24);
  const f0 = a ? +a : 0, f1 = z ? Math.min(N, +z) : N;
  for (let f = f0; f < f1; f++) {
    const url = await p.evaluate((t) => window.frame3d(t), f / 24);
    if (url) fs.writeFileSync(path.join(dir, String(f).padStart(5, '0') + '.jpg'), Buffer.from(url.split(',')[1], 'base64'));
    if (f % 48 === 0) console.log(c, f, '/', f1);
  }
  console.log('ok3d', c, f0, f1, errs); await b.close();
})();
