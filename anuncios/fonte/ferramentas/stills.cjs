// uso: node stills.cjs <ad> <saida-dir> t1 t2 ...
const { chromium } = require('playwright');
(async () => {
  const [ad, out, ...ts] = process.argv.slice(2);
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => m.type() === 'error' && errs.push(m.text()));
  await p.goto(`http://localhost:4500/index.html?ad=${ad}`);
  await p.evaluate(() => window.ready);
  for (const t of ts) { await p.evaluate(t => window.render(+t), t); await p.screenshot({ path: `${out}/a${ad}-${t}.jpg`, type: 'jpeg', quality: 80 }); }
  console.log('errors:', errs);
  await b.close();
})();
