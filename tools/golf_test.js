const { chromium } = require('playwright'); const fs = require('fs'); const path = require('path');
const GAME = process.argv[2], OUT = process.argv[3], ES = process.argv.includes('--es');
(async () => { const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader'] });
  const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const errs = [];
  p.on('pageerror', e => errs.push(e.message));
  await p.route('**/*', r => { const u = new URL(r.request().url()); if (u.hostname === 'cdnjs.cloudflare.com') return r.fulfill({ path: path.join(__dirname, 'node_modules/three/build/three.min.js') });
    if (u.hostname === 'game.test') { const f = path.join(GAME, u.pathname); return fs.existsSync(f) ? r.fulfill({ path: f }) : r.fulfill({ status: 404, body: '' }); } return r.abort(); });
  if (ES) await p.addInitScript(() => { localStorage.setItem('efg-middle-school-save-v1', JSON.stringify({ set: { lang: 'es', text: 1, low: false, sound: false, music: false, vol: 0, cap: true } })); });
  await p.goto('http://game.test/index.html#nointro#level-3-3'); await p.waitForFunction(() => window.FieldGuide && FieldGuide._debug && FieldGuide._debug.state().L, null, { timeout: 30000 });
  await p.evaluate(() => { const s = FieldGuide._debug.state(), po = s.L.portal; po.open = true; s.P.x = po.x; s.P.y = po.y + 0.2; s.P.vy = 0; }); await p.waitForTimeout(800);
  await p.keyboard.press('e'); await p.waitForTimeout(1500); await p.click('#miniGo'); await p.waitForTimeout(800);
  for (let h = 0; h < 3; h++) { await p.evaluate(() => { const M = FieldGuide._debug.mini(), c = M.cups.find(c => c.ok); M.ball.sink = 0.01; M.ball.cup = c; }); await p.waitForTimeout(2500);
    await p.screenshot({ path: OUT + '/golf' + (ES ? '-es' : '') + '-h' + h + '.png' }); }
  await p.waitForTimeout(1000); await p.screenshot({ path: OUT + '/golf' + (ES ? '-es' : '') + '-end.png' });
  const end = await p.evaluate(() => document.getElementById('miniPanel') ? document.getElementById('miniPanel').innerText.slice(0, 300) : document.body.innerText.slice(0, 200));
  await p.click('#miniBack'); await p.waitForTimeout(1500);
  console.log(JSON.stringify({ end, mode: await p.evaluate(() => FieldGuide._debug.state().mode), toast: await p.evaluate(() => document.getElementById('toast').innerText), errs })); await b.close(); })();
