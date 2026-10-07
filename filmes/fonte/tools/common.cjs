const { chromium } = require('playwright');
const ARGS = ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'];
async function open(c, lang, mode, port = 4700) {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ARGS });
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  const errs = []; p.on('pageerror', (e) => errs.push(e.message)); p.on('console', (m) => m.type() === 'error' && !/404|favicon/.test(m.text()) && errs.push(m.text()));
  p.setDefaultTimeout(900000);
  await p.goto(`http://localhost:${port}/film.html?c=${c}&lang=${lang}&mode=${mode}`);
  await p.waitForFunction(() => window.ready, null, { timeout: 180000 });
  return { b, p, errs };
}
module.exports = { open };
