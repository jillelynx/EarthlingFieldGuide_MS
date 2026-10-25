const { chromium } = require('playwright'); const fs = require('fs'); const path = require('path');
const GAME = process.argv[2], OUT = process.argv[3], ES = process.argv.includes('--es');
(async () => { const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader'] });
  const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const errs = [];
  p.on('pageerror', e => errs.push(e.message));
  await p.route('**/*', r => { const u = new URL(r.request().url()); if (u.hostname === 'cdnjs.cloudflare.com') return r.fulfill({ path: path.join(__dirname, 'node_modules/three/build/three.min.js') });
    if (u.hostname === 'game.test') { const f = path.join(GAME, u.pathname); return fs.existsSync(f) ? r.fulfill({ path: f }) : r.fulfill({ status: 404, body: '' }); } return r.abort(); });
  if (ES) await p.addInitScript(() => { localStorage.setItem('efg-middle-school-save-v1', JSON.stringify({ set: { lang: 'es', text: 1, low: false, sound: false, music: false, vol: 0, cap: true } })); });
  await p.goto('http://game.test/index.html#nointro#level-2-1'); await p.waitForFunction(() => window.FieldGuide && FieldGuide._debug && FieldGuide._debug.state().L, null, { timeout: 30000 });
  const cx = await p.evaluate(() => { const s = FieldGuide._debug.state(), c = s.L.clues[0]; s.P.x = c.x; s.P.y = (c.y || 0) + 0.2; s.P.vy = 0; return c.x; });
  await p.waitForTimeout(1500); await p.screenshot({ path: OUT + '/clue' + (ES ? '-es' : '') + '-near.png' }); await p.keyboard.press('e'); await p.waitForTimeout(1200);
  await p.screenshot({ path: OUT + '/clue' + (ES ? '-es' : '') + '-0.png' }); await p.keyboard.press('a'); await p.waitForTimeout(800); await p.screenshot({ path: OUT + '/clue' + (ES ? '-es' : '') + '-1.png' });
  await p.evaluate(() => { const s = FieldGuide._debug.state(), po = s.L.portal; s.P.x = po.x; s.P.y = po.y + 0.2; s.P.vy = 0; }); await p.waitForTimeout(1500); await p.keyboard.press('e'); await p.waitForTimeout(1200);
  await p.screenshot({ path: OUT + '/clue' + (ES ? '-es' : '') + '-portal.png' }); await p.keyboard.press('Escape'); await p.waitForTimeout(500);
  const info = await p.evaluate(() => { const s = FieldGuide._debug.state(), L = s.L, P = s.P, po = L.portal; if (!po) return 'no portal'; po.open = true; P.x = po.x; P.y = po.y + 0.2; P.vy = 0; return { x: po.x, game: po.game, clues: L.clues.length }; });
  console.log('portal', info); await p.waitForTimeout(800);
  await p.keyboard.press('e'); await p.waitForTimeout(3000);
  console.log('after E', await p.evaluate(() => ({ mode: FieldGuide._debug.state().mode, mini: !!FieldGuide._debug.mini() })));
  await p.screenshot({ path: OUT + '/immune' + (ES ? '-es' : '') + '-0.png' });
  for (const btn of await p.$$('button')) { const tx = (await btn.innerText()).trim(); if (/Start|Empezar|Comenzar|Jugar|Play/i.test(tx) && await btn.isVisible()) { await btn.click(); break; } }
  for (let i = 0; i < 25; i++) { await p.keyboard.press(String(1 + i % 4)); await p.keyboard.press('Space'); await p.waitForTimeout(400); }
  await p.screenshot({ path: OUT + '/immune' + (ES ? '-es' : '') + '-1.png' });
  await p.waitForTimeout(20000); await p.screenshot({ path: OUT + '/immune' + (ES ? '-es' : '') + '-2.png' });
  console.log('end', await p.evaluate(() => ({ mode: FieldGuide._debug.state().mode, txt: document.body.innerText.slice(0, 0) })), errs);
  await b.close(); })();
