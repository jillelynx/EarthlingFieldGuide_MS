const { chromium } = require('playwright'); const fs = require('fs'); const path = require('path');
const GAME = process.argv[2], LV = process.argv[3];
(async () => { const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader'] });
  const p = await (await b.newContext({ viewport: { width: 640, height: 360 } })).newPage();
  await p.route('**/*', r => { const u = new URL(r.request().url()); if (u.hostname === 'cdnjs.cloudflare.com') return r.fulfill({ path: path.join(__dirname, 'node_modules/three/build/three.min.js') });
    if (u.hostname === 'game.test') { const f = path.join(GAME, u.pathname); return fs.existsSync(f) ? r.fulfill({ path: f }) : r.fulfill({ status: 404, body: '' }); } return r.abort(); });
  await p.goto('http://game.test/index.html#nointro#level-' + LV); await p.waitForFunction(() => window.FieldGuide && FieldGuide._debug && FieldGuide._debug.state().L, null, { timeout: 30000 });
  const r = await p.evaluate(() => { const L = FieldGuide._debug.state().L; return { solids: L.solids.filter(s => !s.oneWay && s.x1 - s.x0 > 2).map(s => [+s.x0.toFixed(1), +s.x1.toFixed(1), +s.y0.toFixed(1), +s.y1.toFixed(1)]), zones: L.zones.map(z => [z.kind, Math.round(z.x0), Math.round(z.x1)]), waters: (L.waters || []).map(w => [w.x0, w.x1, w.top]) }; });
  console.log(JSON.stringify(r)); await b.close(); })();
