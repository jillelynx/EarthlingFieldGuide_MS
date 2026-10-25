// Visits menus, pause, the end-of-level screen and the mothership station; records (or, with --es, checks) the engine's words.
const { chromium } = require('playwright'); const fs = require('fs'); const path = require('path'); const GAME = process.argv[2], OUT = process.argv[3], ES = process.argv.includes('--es');
async function open(b, hash) { const ctx = await b.newContext({ viewport: { width: 1280, height: 720 } }); const p = await ctx.newPage();
  await p.addInitScript(es => { window.FG_HARVEST = true; if (es) try { localStorage.setItem('efg-middle-school-save-v1', JSON.stringify({ set: { lang: 'es', text: 1, low: false, sound: false, music: false, vol: 0, cap: true, unlock: false } })); } catch (e) {} }, ES);
  await p.route('**/*', r => { const u = new URL(r.request().url()); if (u.hostname === 'cdnjs.cloudflare.com') return r.fulfill({ path: path.join(__dirname, 'node_modules/three/build/three.min.js') });
    if (u.hostname === 'game.test') { const f = path.join(GAME, u.pathname); return fs.existsSync(f) ? r.fulfill({ path: f }) : r.fulfill({ status: 404, body: '' }); } return r.abort(); });
  const errs = []; p.on('pageerror', e => errs.push(e.message)); p.errs = errs;
  await p.goto('http://game.test/index.html' + hash); await p.waitForFunction(() => window.FieldGuide && FieldGuide._debug); await p.waitForTimeout(1200); return p; }
const clickIf = async (p, sel) => { const e = await p.$(sel); if (e && await e.isVisible()) { await e.click(); await p.waitForTimeout(500); return true; } return false; };
(async () => { const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader'] }); const seen = new Set(), miss = new Set(); let shot = 0, errs = [];
  const collect = async p => { const r = await p.evaluate(() => [FieldGuide._tr.seen(), FieldGuide._tr.miss()]); r[0].forEach(s => seen.add(s)); r[1].forEach(s => miss.add(s)); };
  const snap = async (p, n) => { await p.screenshot({ path: OUT + '/' + (ES ? 'es-' : '') + n + '.png' }); };
  let p = await open(b, '#nointro#teacher');
  await snap(p, 'menu');
  for (const [btn, name] of [['#btnLevels', 'map'], ['#btnJournal', 'journal'], ['#btnProgress', 'progress'], ['#btnSettings', 'settings'], ['#btnAbout', 'about']]) {
    await clickIf(p, btn); if (name === 'map') { await p.hover('.mnode >> nth=3').catch(() => {}); await p.click('.mnode >> nth=5').catch(() => {}); await p.waitForTimeout(300); }
    if (name === 'journal') { const tabs = await p.$$('#journal button'); for (const t of tabs.slice(0, 6)) { await t.click().catch(() => {}); await p.waitForTimeout(150); } }
    await snap(p, name); await p.keyboard.press('Escape'); await p.waitForTimeout(300); await clickIf(p, 'section:not([hidden]) [data-back]'); }
  await collect(p); errs.push(...p.errs); await p.close();
  // a level: pause menu, then finish it to see the report and the mothership station
  p = await open(b, '#nointro#level-1-1'); await p.waitForTimeout(1500);
  await clickIf(p, '#btnPause'); await snap(p, 'pause'); await clickIf(p, '#btnPauseSet'); await p.keyboard.press('Escape'); await p.waitForTimeout(300); await clickIf(p, '#btnPauseJournal'); await p.keyboard.press('Escape'); await clickIf(p, '#btnResume');
  await p.evaluate(() => { const s = FieldGuide._debug.state(), L = s.L, P = s.P; L.zones.forEach(z => { z.done = true; if (z.gate) z.gate.off = true; }); L.stations.forEach(st => { if (st.wall) st.wall.off = true; }); P.x = L.goal.x - 2; P.y = L.goal.y + 0.2; });
  await p.keyboard.down('ArrowRight'); await p.waitForFunction(() => FieldGuide._debug.state().mode === 'done', null, { timeout: 90000 }).catch(() => {}); await p.keyboard.up('ArrowRight'); await p.waitForTimeout(800);
  await snap(p, 'done');
  const btns = await p.$$eval('#done button', bs => bs.map((x, i) => [i, x.textContent.trim()]));
  for (const [i] of btns) { const bs = await p.$$('#done button'); if (bs[i] && await bs[i].isVisible()) { await bs[i].click().catch(() => {}); await p.waitForTimeout(700); await snap(p, 'station-' + i);
      const inner = await p.$$('#done button'); for (const x of inner.slice(0, 8)) { if (await x.isVisible()) { const tx = (await x.textContent()).trim(); if (/menu|map|next|replay|siguiente|mapa|men/i.test(tx)) continue; await x.click().catch(() => {}); await p.waitForTimeout(300); } }
      await collect(p); } }
  await collect(p); errs.push(...p.errs); await p.close();
  fs.writeFileSync(OUT + '/menus-' + (ES ? 'miss' : 'seen') + '.json', JSON.stringify(Array.from(ES ? miss : seen).sort(), null, 1));
  console.log('seen', seen.size, 'miss', miss.size, 'buttons on done:', JSON.stringify(btns), 'errors', JSON.stringify(errs)); await b.close(); })();
