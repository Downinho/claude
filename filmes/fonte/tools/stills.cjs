// node stills.cjs <filme> <lang> <saida-dir> t1 t2 ...  → JPGs em modo preview (3D ao vivo + 2D)
const { open } = require('./common.cjs');
(async () => {
  const [c, lang, out, ...ts] = process.argv.slice(2);
  const { b, p, errs } = await open(c, lang, 'preview');
  for (const t of ts) { await p.evaluate((t) => window.framePreview(+t), t); await p.screenshot({ path: `${out}/${c}-${lang}-${t}.jpg`, type: 'jpeg', quality: 85 }); }
  console.log('erros:', errs); await b.close();
})();
