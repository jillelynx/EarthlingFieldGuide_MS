const { chromium } = require('playwright'); const fs = require('fs'); const path = require('path');
const GAME = process.argv[2], OUT = process.argv[3]; const ids = process.argv.slice(4);
(async () => { const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader'] });
  for (const id of ids) { const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const errs = [];
    p.on('pageerror', e => errs.push(e.message));
    await p.route('**/*', r => { const u = new URL(r.request().url()); if (u.hostname === 'cdnjs.cloudflare.com') return r.fulfill({ path: path.join(__dirname, 'node_modules/three/build/three.min.js') });
      if (u.hostname === 'game.test') { const f = path.join(GAME, u.pathname); return fs.existsSync(f) ? r.fulfill({ path: f }) : r.fulfill({ status: 404, body: '' }); } return r.abort(); });
    await p.goto('http://game.test/index.html#nointro#level-' + id); await p.waitForFunction(() => window.FieldGuide && FieldGuide._debug && FieldGuide._debug.state().L, null, { timeout: 30000 });
    const xs = await p.evaluate(() => { const L = FieldGuide._debug.state().L; console.log(Object.keys(L.stations[0]||{}).join()); return L.stations.filter(s => s.chart || (s.o && s.o.chart) || s.title === 'Read the Data').map(s => s.x || s.x0); });
    console.log(id, xs, errs);
    let k = 0; for (const x of xs) { await p.evaluate(x => { const P = FieldGuide._debug.state().P; P.x = x - 5; P.y = 8; P.vy = 0; }, x); await p.waitForTimeout(4000); await p.screenshot({ path: OUT + '/chart-' + id + '-' + (k++) + '.png' }); }
  } await b.close(); })();
