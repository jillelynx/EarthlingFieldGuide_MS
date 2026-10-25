const { chromium } = require('playwright'); const fs = require('fs'); const path = require('path'); const GAME = process.argv[2], OUT = process.argv[3], ES = process.argv.includes('--es');
(async () => { const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader'] }); const ctx = await b.newContext({ viewport: { width: 1280, height: 720 } }); const p = await ctx.newPage(); const errs = [];
  p.on('pageerror', e => errs.push(e.message));
  await p.addInitScript(es => { try { localStorage.setItem('efg-middle-school-save-v1', JSON.stringify({ set: { lang: es ? 'es' : 'en', text: 1, low: false, sound: false, music: false, vol: 0, cap: true, unlock: false },
    levels: { '1-1': { stars: 3, best: 900 }, '1-2': { stars: 2, best: 800 }, '1-3': { stars: 3, best: 900 } }, found: { 's1-frog': 1, 's1-cell': 1, 's1d-tube': 1 }, rare: { '1-1': true }, quests: { '1-2': true } })); } catch (e) {} }, ES);
  await p.route('**/*', r => { const u = new URL(r.request().url()); if (u.hostname === 'cdnjs.cloudflare.com') return r.fulfill({ path: path.join(__dirname, 'node_modules/three/build/three.min.js') });
    if (u.hostname === 'game.test') { const f = path.join(GAME, u.pathname); return fs.existsSync(f) ? r.fulfill({ path: f }) : r.fulfill({ status: 404, body: '' }); } return r.abort(); });
  await p.goto('http://game.test/index.html#nointro#level-1-4'); await p.waitForFunction(() => window.FieldGuide && FieldGuide._debug && FieldGuide._debug.state().L); await p.waitForTimeout(1500);
  await p.evaluate(() => { const s = FieldGuide._debug.state(), L = s.L, P = s.P; L.zones.forEach(z => { z.done = true; if (z.gate) z.gate.off = true; }); L.stations.forEach(st => { if (st.wall) st.wall.off = true; }); P.x = L.goal.x - 2; P.y = L.goal.y + 0.2; });
  await p.keyboard.down('ArrowRight'); await p.waitForFunction(() => !document.getElementById('celebrate').hidden, null, { timeout: 60000 }).catch(async () => { console.log('DEBUG', JSON.stringify(await p.evaluate(() => { const s = FieldGuide._debug.state(); return { mode: s.mode, lv: s.S.levels, celeb: s.S.celeb, beamT: s.L && s.L.beamT, over: s.L && s.L.over, P: s.P && [s.P.x, s.P.y], gx: s.L && s.L.goal.x }; })), errs); process.exit(1); }); await p.keyboard.up('ArrowRight'); await p.waitForTimeout(1500);
  await p.screenshot({ path: OUT + '/celebrate' + (ES ? '-es' : '') + '.png' });
  await p.fill('#celName', 'Alex Rivera');
  const [pop] = await Promise.all([ctx.waitForEvent('page'), p.click('#btnCert')]); await pop.waitForLoadState(); await pop.setViewportSize({ width: 1100, height: 780 }); await pop.waitForTimeout(500);
  await pop.screenshot({ path: OUT + '/certificate' + (ES ? '-es' : '') + '.png' });
  const saved = await p.evaluate(() => localStorage.getItem('efg-middle-school-save-v1').includes('Alex'));
  await p.click('#btnCelClose'); await p.waitForTimeout(300);
  console.log(JSON.stringify({ celebrateClosed: await p.$eval('#celebrate', e => e.hidden), nameSaved: saved, errors: errs })); await b.close(); })();
