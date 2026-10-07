// node reccomp.cjs <filme> <lang> <saida.mp4> → compõe 2D sobre o cache 3D, 24 fps, e salva cues
const { open } = require('./common.cjs'); const fs = require('fs'); const path = require('path'); const { spawn } = require('child_process');
(async () => {
  const [c, lang, out] = process.argv.slice(2);
  const dir = path.join(__dirname, '..', 'cache', c);
  const { b, p, errs } = await open(c, lang, 'comp');
  const { dur, cues } = await p.evaluate(() => ({ dur: window.DURATION, cues: window.CUES }));
  fs.writeFileSync(out.replace(/\.mp4$/, '.cues.json'), JSON.stringify(cues));
  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', '24', '-c:v', 'mjpeg', '-i', '-', '-c:v', 'libx264', '-preset', 'slow', '-crf', '15', '-pix_fmt', 'yuv420p', out], { stdio: ['pipe', 'inherit', 'inherit'] });
  const N = Math.round(dur * 24);
  for (let f = 0; f < N; f++) {
    const name = String(f).padStart(5, '0') + '.jpg';
    const url = fs.existsSync(path.join(dir, name)) ? `cache/${c}/${name}` : null;
    await p.evaluate(({ t, url }) => window.frameComp(t, url), { t: f / 24, url });
    const buf = await p.screenshot({ type: 'jpeg', quality: 94 });
    if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once('drain', r));
  }
  ff.stdin.end(); await new Promise((r) => ff.on('close', r)); await b.close();
  console.log('okcomp', c, lang, errs);
})();
