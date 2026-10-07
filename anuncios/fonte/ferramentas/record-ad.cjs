// Grava um anúncio quadro a quadro (60 fps) e salva os cues de áudio.
// uso: node record-ad.cjs <ad> <saida-sem-extensao>
const { chromium } = require('playwright');
const { spawn } = require('child_process');
const fs = require('fs');
(async () => {
  const [ad, out] = process.argv.slice(2);
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.goto(`http://localhost:4500/index.html?ad=${ad}`);
  await p.evaluate(() => window.ready);
  const { dur, cues } = await p.evaluate(() => ({ dur: window.DURATION, cues: window.CUES }));
  fs.writeFileSync(out + '.cues.json', JSON.stringify(cues));
  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', '60', '-c:v', 'mjpeg', '-i', '-',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '16', '-pix_fmt', 'yuv420p', out + '.video.mp4'], { stdio: ['pipe', 'inherit', 'inherit'] });
  const N = Math.round(dur * 60);
  for (let f = 0; f < N; f++) {
    await p.evaluate((t) => window.render(t), f / 60);
    const buf = await p.screenshot({ type: 'jpeg', quality: 95 });
    if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once('drain', r));
  }
  ff.stdin.end(); await new Promise((r) => ff.on('close', r)); await b.close();
  console.log('ok', out, dur);
})();
