const { chromium } = require('playwright'); const fs = require('fs'); const path = require('path');
const GAME = process.argv[2], OUT = process.argv[3], ES = process.argv.includes('--es'), sfx = ES ? '-es' : '';
const jobs = [['6-3', /ms6q19|ms6q20|ms6q21|ms6q25/, 'fig-embryo'], ['6-2', /ms6q11|ms6q12/, 'fig-limbs'], ['6-5', /ms6q37|ms6q38/, 'fig-line']];
(async () => { const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader'] });
  for (const [lv, re, name] of jobs) { const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const errs = [];
    p.on('pageerror', e => errs.push(e.message));
    await p.route('**/*', r => { const u = new URL(r.request().url()); if (u.hostname === 'cdnjs.cloudflare.com') return r.fulfill({ path: path.join(__dirname, 'node_modules/three/build/three.min.js') });
      if (u.hostname === 'game.test') { const f = path.join(GAME, u.pathname); return fs.existsSync(f) ? r.fulfill({ path: f }) : r.fulfill({ status: 404, body: '' }); } return r.abort(); });
    if (ES) await p.addInitScript(() => { localStorage.setItem('efg-middle-school-save-v1', JSON.stringify({ set: { lang: 'es', text: 1, low: false, sound: false, music: false, vol: 0, cap: true } })); });
    await p.goto('http://game.test/index.html#nointro#level-' + lv); await p.waitForFunction(() => window.FieldGuide && FieldGuide._debug && FieldGuide._debug.state().L, null, { timeout: 30000 });
    /* force a question with a figure into the first matching station */
    const ok = await p.evaluate(src => { const re = new RegExp(src), S = FieldGuide._debug.state(), L = S.L; const st = L.stations.find(s => (s.queue || []).some(q => q.figure)) || L.stations.find(s => (s.queue || []).some(q => re.test(q.id)));
      if (!st) return 'none'; const fq = st.queue.find(q => q.figure); if (fq) { st.queue.splice(st.queue.indexOf(fq), 1); st.queue.unshift(fq); }
      S.P.x = (st.x0 + st.x1) / 2; S.P.y = st.y + 0.2; S.P.vy = 0; return st.queue.map(q => q.id + (q.figure ? '*' : '')).join(','); }, re.source);
    await p.waitForTimeout(3000); await p.screenshot({ path: OUT + '/' + name + sfx + '.png' }); console.log(lv, ok, errs); await p.close(); }
  await b.close(); })();
