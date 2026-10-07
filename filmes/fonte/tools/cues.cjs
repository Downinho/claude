// node cues.cjs <filme> <saida.json> → exporta cues e duração
const { open } = require('./common.cjs'); const fs = require('fs');
(async () => { const [c, out] = process.argv.slice(2); const { b, p } = await open(c, 'pt', 'comp');
  const r = await p.evaluate(() => ({ dur: window.DURATION, cues: window.CUES })); fs.writeFileSync(out, JSON.stringify(r.cues)); console.log(r.dur); await b.close(); })();
