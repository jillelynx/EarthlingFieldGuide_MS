const { chromium } = require('playwright'); const fs = require('fs'); const path = require('path');
const GAME = process.argv[2], OUT = process.argv[3], ES = process.argv.includes('--es'), ids = process.argv.slice(4).filter(a => a !== '--es');
(async () => { const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader'] });
  for (const spec of ids) { const [id, xs] = spec.split('@'); const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const errs = [];
  p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) errs.push(m.text().slice(0, 200)); });
  await p.route('**/*', r => { const u = new URL(r.request().url()); if (u.hostname === 'cdnjs.cloudflare.com') return r.fulfill({ path: path.join(__dirname, 'node_modules/three/build/three.min.js') });
    if (u.hostname === 'game.test') { const f = path.join(GAME, decodeURIComponent(u.pathname)); return fs.existsSync(f) ? r.fulfill({ path: f }) : r.fulfill({ status: 404, body: '' }); } return r.abort(); });
  if (ES) await p.addInitScript(() => { localStorage.setItem('efg-middle-school-save-v1', JSON.stringify({ set: { lang: 'es', text: 1, low: false, sound: false, music: false, vol: 0, cap: true, unlock: false } })); });
  await p.goto('http://game.test/index.html#nointro#level-' + id); try { await p.waitForFunction(() => window.FieldGuide && FieldGuide._debug && FieldGuide._debug.state().L, null, { timeout: 60000 }); } catch (e) { console.log(id, 'NOLOAD', JSON.stringify(errs)); await p.close(); continue; }
  await p.waitForTimeout(2500);
  const info = await p.evaluate(() => { const s = FieldGuide._debug.state(), L = s.L; return { len: L.len, bonus: !!L.lv.bonus, powers: L.powers.length, bosses: L.bosses.length, sleds: L.sleds.length, pillars: L.pillars.length, bricks: L.bricks.length, sprite: !!s.P.sprite, retro: typeof RETRO !== 'undefined' ? RETRO : 'n/a' }; });
  console.log(id, JSON.stringify(info));
  for (const x of (xs || '3').split(',').map(Number)) { await p.evaluate(x => { const s = FieldGuide._debug.state(); s.P.x = x; s.P.y = 8; s.P.vy = 0; }, x); await p.waitForTimeout(2200); await p.screenshot({ path: OUT + '/' + id + (ES ? '-es' : '') + '-' + x + '.png' }); }
  console.log(id, 'errors', JSON.stringify(errs)); await p.close(); }
  await b.close(); })();
