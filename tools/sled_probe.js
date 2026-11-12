const { chromium } = require('playwright'); const fs = require('fs'); const path = require('path');
const GAME = process.argv[2], OUT = process.argv[3];
(async () => { const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader'] });
  const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.route('**/*', r => { const u = new URL(r.request().url()); if (u.hostname === 'cdnjs.cloudflare.com') return r.fulfill({ path: path.join(__dirname, 'node_modules/three/build/three.min.js') });
    if (u.hostname === 'game.test') { const f = path.join(GAME, decodeURIComponent(u.pathname)); return fs.existsSync(f) ? r.fulfill({ path: f }) : r.fulfill({ status: 404, body: '' }); } return r.abort(); });
  await p.goto('http://game.test/index.html#nointro#level-4-6'); await p.waitForFunction(() => window.FieldGuide && FieldGuide._debug && FieldGuide._debug.state().L, null, { timeout: 60000 }); await p.waitForTimeout(2000);
  const sl = await p.evaluate(() => FieldGuide._debug.state().L.sleds.map(r => [r.x0, r.x1, r.y0, r.drop, r.kick]));
  console.log('sleds', JSON.stringify(sl));
  for (const [i, r] of sl.entries()) {
    await p.evaluate(x => { const s = FieldGuide._debug.state(); s.P.x = x; s.P.y = 8; s.P.vy = 0; s.P.vx = 0; s.L.cps.push({ x: x, y: 8 }); s.L.cp = s.L.cps.length - 1; }, r[0] - 2);
    await p.waitForTimeout(800); await p.keyboard.down('ArrowRight'); let maxX = 0, sled = false, shot = false;
    for (let k = 0; k < 40; k++) { await p.waitForTimeout(250); const st = await p.evaluate(() => { const P = FieldGuide._debug.state().P; return { x: P.x, y: P.y, sled: !!(P.sledM && P.sledM.visible), vx: P.vx }; });
      maxX = Math.max(maxX, st.x); sled = sled || st.sled; if (st.sled && !shot) { await p.screenshot({ path: OUT + '/sled-' + i + '.png' }); shot = true; } if (st.x > r[1] + 16) break; }
    await p.keyboard.up('ArrowRight'); console.log('sled', i, 'end x1', r[1].toFixed(1), 'reached', maxX.toFixed(1), 'rode sled', sled); }
  console.log('errors', JSON.stringify(errs)); await b.close(); })();
