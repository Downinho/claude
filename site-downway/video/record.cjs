// Grava a intro do globo quadro a quadro (relógio virtual, 60 fps) e envia para o ffmpeg.
// uso: node record.cjs <saida.mp4> <largura> <altura> <dpr> [frames-max]
const { chromium } = require('playwright');
const { spawn } = require('child_process');

const [out, VW, VH, DPR, MAXF] = [process.argv[2], +process.argv[3], +process.argv[4], +process.argv[5], +(process.argv[6] || 1e9)];
const FPS = 60, DT = 1000 / FPS;
const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

// roteiro: [fase g, segundos parado] — entre cada uma, 1.7 s de travelling
const HOLD = [[0, 3.2], [1, 2.6], [2, 2.8], [3, 2.6], [4, 3.0], [5, 2.6], [6, 4.2]];
const MOVE = 1.7, OUTRO = 4.0, FADEIN = 0.7;
const seq = []; let T = 0;
HOLD.forEach(([g, h], i) => {
  seq.push({ t0: T, t1: T + h, g0: g, g1: g }); T += h;
  if (i < HOLD.length - 1) { seq.push({ t0: T, t1: T + MOVE, g0: g, g1: HOLD[i + 1][0], mv: true }); T += MOVE; }
});
const STORY = T, TOTAL = T + OUTRO;
const gAt = (t) => { for (const s of seq) if (t <= s.t1) return s.mv ? s.g0 + (s.g1 - s.g0) * ease((t - s.t0) / (s.t1 - s.t0)) : s.g0; return 6; };

(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--disable-gpu-vsync'] });
  const ctx = await b.newContext({ viewport: { width: VW, height: VH }, deviceScaleFactor: DPR });
  const p = await ctx.newPage();
  await p.clock.install({ time: new Date('2026-10-07T12:00:00Z') });
  await p.goto('http://localhost:4321/', { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  await p.evaluate(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    document.querySelectorAll('a.fixed, .fixed.bottom-4').forEach((e) => (e.style.display = 'none')); // botão flutuante do WhatsApp
    const s = document.createElement('style');
    s.textContent = `
      #rec-ov{position:fixed;inset:0;z-index:9999;background:#0c0c0d;pointer-events:none;display:grid;place-items:center}
      #rec-ov .in{display:grid;justify-items:center;gap:1.1rem;text-align:center;padding:0 1.5rem}
      #rec-ov .k{font-family:var(--font-mono);color:#2282f0;font-size:clamp(.7rem,1.1vw,.95rem);letter-spacing:.32em}
      #rec-ov .l{font-family:var(--font-display);color:#eef2f7;font-size:clamp(4.5rem,13vw,12rem);line-height:.85;text-shadow:0 0 40px rgba(34,130,240,.35)}
      #rec-ov .l span{color:#2282f0}
      #rec-ov .bar{height:2px;background:linear-gradient(90deg,transparent,#2282f0,transparent);width:min(70vw,640px)}
      #rec-ov .c{font-family:var(--font-mono);color:#a1a1a8;font-size:clamp(.6rem,.95vw,.8rem);letter-spacing:.24em;max-width:44rem;line-height:2}
      #rec-ov .u{font-family:var(--font-display);color:#eef2f7;font-size:clamp(1.6rem,2.6vw,2.4rem);letter-spacing:.08em}`;
    document.head.appendChild(s);
    const o = document.createElement('div'); o.id = 'rec-ov';
    o.innerHTML = `<div class="in"><div class="k">DE SÃO PAULO PARA O MUNDO</div><div class="l">DOWN<span>WAY</span></div><div class="bar"></div>
      <div class="c">BRASIL · ESTADOS UNIDOS · ESPANHA · NOVA ZELÂNDIA · AUSTRÁLIA · RÚSSIA</div><div class="u">downway.com.br</div></div>`;
    document.body.appendChild(o);
    const sec = document.querySelector('[data-gintro]'), st = sec.querySelector('.g-stage');
    window.__map = { top: sec.getBoundingClientRect().top + scrollY - parseFloat(getComputedStyle(st).top), sc: sec.offsetHeight - st.offsetHeight };
    // animações/transições CSS passam a andar no mesmo relógio dos quadros
    window.__step = (dt) => { for (const a of document.getAnimations()) { if (a.__v === undefined) { a.__v = a.currentTime || 0; a.pause(); } a.__v += dt; a.currentTime = a.__v; } };
  });

  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '15', '-tune', 'animation', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', out], { stdio: ['pipe', 'inherit', 'inherit'] });

  const N = Math.min(MAXF, Math.round(TOTAL * FPS));
  for (let f = 0; f < N; f++) {
    const t = f / FPS;
    const g = gAt(Math.min(t, STORY));
    let ov, inner = '';
    if (t < FADEIN) ov = 1 - ease(t / FADEIN);
    else if (t < STORY - 0.2) ov = 0;
    else { const k = (t - (STORY - 0.2)) / 0.9; ov = Math.min(1, ease(Math.min(1, k))); }
    const ok = Math.max(0, Math.min(1, (t - STORY - 0.4) / 1.1)); // entrada do letreiro final
    await p.evaluate(({ g, ov, ok, show }) => {
      const m = window.__map; window.scrollTo(0, Math.round(m.top + (g / 6) * m.sc + 1));
      const o = document.getElementById('rec-ov'); o.style.opacity = ov;
      const i = o.querySelector('.in'); i.style.visibility = show ? 'visible' : 'hidden';
      const e = ok < 0.5 ? 4 * ok ** 3 : 1 - (-2 * ok + 2) ** 3 / 2;
      i.style.opacity = e; i.style.transform = `scale(${1.08 - 0.08 * e})`; i.style.filter = `blur(${(1 - e) * 10}px)`;
      i.querySelector('.l').style.letterSpacing = `${(1 - e) * 0.25}em`;
      i.querySelector('.bar').style.transform = `scaleX(${e})`;
    }, { g, ov, ok, show: t >= STORY });
    await p.clock.runFor(f % 3 === 2 ? 16 : 17);
    await p.evaluate((dt) => window.__step(dt), DT);
    const buf = await p.screenshot({ type: 'jpeg', quality: 94 });
    if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once('drain', r));
    if (f % 120 === 0) console.log(`${out}: ${f}/${N}`);
  }
  ff.stdin.end();
  await new Promise((r) => ff.on('close', r));
  await b.close();
  console.log('ok', out, (N / FPS).toFixed(1) + 's');
})();
