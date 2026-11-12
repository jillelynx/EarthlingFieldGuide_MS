const { chromium } = require('playwright'); const fs = require('fs'); const path = require('path');
const GAME = process.argv[2];
(async () => { const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader'] });
  for (const mode of ['walk', 'walk+jump', 'run']) {
  const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage();
  await p.route('**/*', r => { const u = new URL(r.request().url()); if (u.hostname === 'cdnjs.cloudflare.com') return r.fulfill({ path: path.join(__dirname, 'node_modules/three/build/three.min.js') });
    if (u.hostname === 'game.test') { const f = path.join(GAME, decodeURIComponent(u.pathname)); return fs.existsSync(f) ? r.fulfill({ path: f }) : r.fulfill({ status: 404, body: '' }); } return r.abort(); });
  await p.goto('http://game.test/index.html#nointro#level-4-6'); await p.waitForFunction(() => window.FieldGuide && FieldGuide._debug && FieldGuide._debug.state().L, null, { timeout: 60000 }); await p.waitForTimeout(2000);
  await p.evaluate(() => { const s = FieldGuide._debug.state(); s.S.abil = { glide: 1 }; s.P.x = 23.5; s.P.y = 5; s.P.vy = 0; s.P.vx = 0; });
  await p.waitForTimeout(800); if (mode === 'run') await p.keyboard.down('Shift'); await p.keyboard.down('ArrowRight');
  if (mode !== 'walk+jump') { while ((await p.evaluate(() => FieldGuide._debug.state().P.x)) < 27.6) await p.waitForTimeout(30); await p.keyboard.down('Space'); }
  else { while ((await p.evaluate(() => FieldGuide._debug.state().P.x)) < 27.0) await p.waitForTimeout(30); await p.keyboard.down('Space'); }
  let land = null; for (let k = 0; k < 60; k++) { await p.waitForTimeout(100); const st = await p.evaluate(() => { const P = FieldGuide._debug.state().P; return { x: P.x, y: P.y, g: !!P.ground }; }); if (st.g && st.x > 28.5) { land = st; break; } if (st.y < -6) { land = st; break; } }
  console.log(mode, JSON.stringify(land)); await p.close(); }
  await b.close(); })();
