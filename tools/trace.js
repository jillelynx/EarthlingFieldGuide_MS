const { chromium } = require('playwright'); const fs = require('fs'); const path = require('path');
const GAME = process.argv[2], LV = process.argv[3], X = +process.argv[4], Y = +process.argv[5], KEYS = (process.argv[6] || 'ArrowRight').split(',');
(async () => { const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader'] });
  const p = await (await b.newContext({ viewport: { width: 640, height: 360 } })).newPage();
  await p.route('**/*', r => { const u = new URL(r.request().url()); if (u.hostname === 'cdnjs.cloudflare.com') return r.fulfill({ path: path.join(__dirname, 'node_modules/three/build/three.min.js') });
    if (u.hostname === 'game.test') { const f = path.join(GAME, u.pathname); return fs.existsSync(f) ? r.fulfill({ path: f }) : r.fulfill({ status: 404, body: '' }); } return r.abort(); });
  await p.goto('http://game.test/index.html#nointro#level-' + LV); await p.waitForFunction(() => window.FieldGuide && FieldGuide._debug && FieldGuide._debug.state().L, null, { timeout: 30000 });
  await p.waitForTimeout(1000);
  await p.evaluate(([x, y]) => { const s = FieldGuide._debug.state(); s.P.x = x; s.P.y = y; s.P.vy = 0; }, [X, Y]);
  for (const k of KEYS) await p.keyboard.down(k);
  for (let i = 0; i < 40; i++) { if (process.argv[7] === 'tap') { await p.keyboard.down('Space'); await p.waitForTimeout(260); await p.keyboard.up('Space'); } await p.waitForTimeout(300); console.log(await p.evaluate(() => { const s = FieldGuide._debug.state(), P = s.P; return [P.x.toFixed(2), P.y.toFixed(2), P.vy.toFixed(2), !!P.ground, !!P.swim, s.L.cps.length, (s.L.cp||{}).x, document.getElementById('toast').hidden ? '' : document.getElementById('toast').innerText.slice(0, 40)].join(' '); })); }
  await b.close(); })();
