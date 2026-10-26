const { chromium } = require('playwright'); const fs = require('fs'); const path = require('path');
const GAME = process.argv[2], ids = process.argv.slice(3);
(async () => { const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader'] });
  for (const id of ids) { const p = await (await b.newContext({ viewport: { width: 640, height: 360 } })).newPage(); const errs = [];
    p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'warning' || m.type() === 'error') errs.push(m.text()); });
    await p.route('**/*', r => { const u = new URL(r.request().url()); if (u.hostname === 'cdnjs.cloudflare.com') return r.fulfill({ path: path.join(__dirname, 'node_modules/three/build/three.min.js') });
      if (u.hostname === 'game.test') { const f = path.join(GAME, u.pathname); return fs.existsSync(f) ? r.fulfill({ path: f }) : r.fulfill({ status: 404, body: '' }); } return r.abort(); });
    await p.goto('http://game.test/index.html#nointro#level-' + id);
    try { await p.waitForFunction(() => window.FieldGuide && FieldGuide._debug && FieldGuide._debug.state().L, null, { timeout: 30000 }); } catch (e) { errs.push('did not load'); }
    const info = await p.evaluate(() => { const s = FieldGuide._debug.state(), L = s.L; if (!L) return null; return { len: Math.round(L.len), scans: L.scans.length, stations: L.stations.length, zones: L.zones.map(z => z.kind).join(','), quest: L.quest ? L.quest.items.length : 0, rare: !!L.rare, portal: L.portal ? L.portal.game : '', clues: (L.clues || []).length }; });
    console.log(id, JSON.stringify(info), errs.filter(e => !/fonts|Missing text key: xx/.test(e)).slice(0, 5)); await p.close(); }
  await b.close(); })();
