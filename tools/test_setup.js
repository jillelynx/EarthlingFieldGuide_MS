// Placeholder-stage tests for Earthling Field Guide – Middle School Edition.
const { chromium } = require('playwright'); const fs = require('fs'); const path = require('path');
const GAME = process.argv[2], OUT = process.argv[3]; fs.mkdirSync(OUT, { recursive: true });
const THREE = path.join(__dirname, 'node_modules/three/build/three.min.js');
async function page(browser, hash, errs) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 720 } }); const p = await ctx.newPage();
  await p.route('**/*', r => { const u = new URL(r.request().url());
    if (u.hostname === 'cdnjs.cloudflare.com' && u.pathname.endsWith('three.min.js')) return r.fulfill({ path: THREE, contentType: 'text/javascript' });
    if (u.hostname === 'game.test') { const f = path.join(GAME, decodeURIComponent(u.pathname)); if (fs.existsSync(f)) return r.fulfill({ path: f }); return r.fulfill({ status: 404, body: '' }); }
    return r.abort(); });
  p.on('requestfailed', rq => { if (!/fonts\.(googleapis|gstatic)\.com/.test(rq.url())) errs.push('failed request: ' + rq.url()); }); p.on('pageerror', e => errs.push('pageerror: ' + e.message)); p.on('console', m => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
  await p.goto('http://game.test/index.html' + hash); await p.waitForFunction(() => window.FieldGuide && window.FieldGuide._debug, null, { timeout: 30000 }); return p;
}
(async () => {
  const browser = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader'] }); const res = {}; const errs = [];
  // 1. menu
  let p = await page(browser, '#nointro', errs); await p.waitForTimeout(1500);
  res.title = await p.title(); res.h1 = await p.$eval('#menu h1', e => e.innerText).catch(() => 'menu hidden');
  res.version = await p.$eval('#menuVer', e => e.innerText).catch(() => '');
  await p.screenshot({ path: OUT + '/1-menu.png' });
  // 2. map: all worlds open, later levels locked
  await p.click('#btnLevels'); await p.waitForTimeout(500);
  res.mapOpen = await p.$$eval('.mnode', ns => ns.filter(n => !n.classList.contains('locked')).map(n => n.getAttribute('aria-label').split(' ')[0]));
  res.mapTotal = await p.$$eval('.mnode', ns => ns.length);
  await p.screenshot({ path: OUT + '/2-map.png' });
  // 3. save key
  res.keys = await p.evaluate(() => Object.keys(localStorage));
  // 4. About in teacher mode
  await p.close(); p = await page(browser, '#nointro#teacher', errs); await p.waitForTimeout(800);
  await p.click('#btnAbout'); await p.waitForTimeout(400);
  res.stdRows = await p.$$eval('#aboutStd tr', r => r.length - 1);
  res.stdFirst = await p.$eval('#aboutStd tr:nth-child(2) td', e => e.innerText).catch(() => '');
  await p.screenshot({ path: OUT + '/3-about.png', fullPage: true });
  await p.close();
  // 5. every level: hold right, hop, until finished
  const ids = ['1-1','1-2','1-3','1-4','2-1','2-2','2-3','2-4','3-1','3-2','3-3','3-4','4-1','4-2','4-3','4-4','4-5','5-1','5-2','5-3','5-4','6-1','6-2','6-3','6-4','6-5'];
  res.levels = {};
  for (const id of ids) {
    const le = []; const q = await page(browser, '#nointro#level-' + id, le); await q.waitForTimeout(1200);
    // dismiss any mission log / dialog by pressing Enter
    await q.keyboard.press('Enter'); await q.waitForTimeout(300);
    await q.keyboard.down('ArrowRight'); let done = false, t0 = Date.now();
    while (Date.now() - t0 < 40000) {
      await q.keyboard.press('Space'); await q.waitForTimeout(250);
      done = await q.evaluate(i => { const s = FieldGuide._debug.state(); return !!(s.S.levels[i] && s.S.levels[i].stars); }, id);
      if (done) break;
    }
    await q.keyboard.up('ArrowRight');
    if (id === '1-1' || id === '4-5') { await q.waitForTimeout(800); await q.screenshot({ path: OUT + '/4-level-' + id + '.png' }); }
    res.levels[id] = { finished: done, secs: Math.round((Date.now() - t0) / 1000), errors: le.length }; errs.push(...le.map(e => id + ' ' + e));
    await q.close();
  }
  // 6. cozy mode and Biodome start without errors
  for (const [btn, name] of [['#btnCozy', 'cozy'], ['#btnDome', 'dome']]) {
    const le = []; const q = await page(browser, '#nointro', le); await q.waitForTimeout(800);
    const has = await q.$(btn); if (has && await has.isVisible()) { await q.click(btn); await q.waitForTimeout(6000); await q.screenshot({ path: OUT + '/5-' + name + '.png' }); }
    res[name] = { button: !!has, errors: le.length }; errs.push(...le.map(e => name + ' ' + e)); await q.close();
  }
  res.errors = [...new Set(errs)].slice(0, 30);
  const L = res.levels; delete res.levels; res.errors = res.errors.filter(e => !/Failed to load resource/.test(e)); console.log(JSON.stringify(res)); console.log('LEVELS', Object.keys(L).map(k => k + ':' + (L[k].finished ? 'OK' : 'FAIL') + '(' + L[k].secs + 's)').join(' ')); await browser.close();
})();
