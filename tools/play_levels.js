// Automatic playthrough (Playwright): node play_levels.js GAME_FOLDER OUT_FOLDER 1-1 1-2 ... [--es]
// Add @x to start partway, for example 1-4@104. It answers question stations, dives in water, waits for moving
// bridges, and opens an activity gate when it gets stuck (it cannot solve hunts or builds), so it checks that every part is reachable.
const { chromium } = require('playwright'); const fs = require('fs'); const path = require('path');
const GAME = process.argv[2], OUT = process.argv[3]; const args = process.argv.slice(4); const ES = args.includes('--es'); const ids = args.filter(a => !a.startsWith('--'));
fs.mkdirSync(OUT, { recursive: true });
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader'] }); const res = {};
  for (const spec of ids) { const [id, startX] = spec.split('@');
    const errs = []; const ctx = await b.newContext({ viewport: { width: 1280, height: 720 } }); const p = await ctx.newPage();
    await p.route('**/*', r => { const u = new URL(r.request().url()); if (u.hostname === 'cdnjs.cloudflare.com') return r.fulfill({ path: path.join(__dirname, 'node_modules/three/build/three.min.js') });
      if (u.hostname === 'game.test') { const f = path.join(GAME, u.pathname); return fs.existsSync(f) ? r.fulfill({ path: f }) : r.fulfill({ status: 404, body: '' }); } return r.abort(); });
    p.on('pageerror', e => errs.push(e.message)); p.on('requestfailed', rq => { if (!/fonts\./.test(rq.url())) errs.push('failed: ' + rq.url()); });
    if (ES) await p.addInitScript(() => { try { localStorage.setItem('efg-middle-school-save-v1', JSON.stringify({ set: { lang: 'es', text: 1, low: false, sound: false, music: false, vol: 0, cap: true, unlock: false } })); } catch (e) {} });
    await p.goto('http://game.test/index.html#nointro#level-' + id); await p.waitForFunction(() => window.FieldGuide && FieldGuide._debug && FieldGuide._debug.state().L, null, { timeout: 30000 });
    await p.waitForTimeout(1500);
    if (startX) await p.evaluate(x => { const s = FieldGuide._debug.state(), L = s.L, P = s.P; P.x = +x; P.y = 6; P.vy = 0; L.zones.forEach(z => { if (z.x1 < +x) { z.done = true; if (z.gate) z.gate.off = true; if (z.gateMesh) z.gateMesh.visible = false; } }); L.stations.forEach(st => { if (st.wall && st.wall.x0 < +x) st.wall.off = true; }); }, startX);
    const info = await p.evaluate(() => { const L = FieldGuide._debug.state().L; return { len: Math.round(L.len), zones: L.zones.map(z => z.kind), scans: L.scans.length, stations: L.stations.length, quest: L.quest ? L.quest.items.length : 0, rare: !!L.rare, title: L.lv.title }; });
    let t0 = Date.now(), lastX = -99, stuckT = 0, wetStuck = 0, opened = 0, answered = 0, shots = 0, done = false, maxX = 0;
    await p.keyboard.down('ArrowRight');
    while (Date.now() - t0 < 600000) {
      const st = await p.evaluate(() => { const D = FieldGuide._debug, s = D.state(), L = s.L, P = s.P; if (!L) return { gone: true, done: !!Object.values(s.S.levels).length };
        if (s.S.levels[L.lv.id] && s.S.levels[L.lv.id].stars) return { done: true };
        if (L.over) return { over: true };
        const a = L.active; if (a && a.queue && !a.done) { const q = a.queue[a.qi]; const i = a.perm.indexOf(q.answer); a.coolUntil = 0; D.answer(i); return { ans: 1, x: P.x }; }
        if (a && (a.refuel || a.clue)) { const ev = new KeyboardEvent('keydown', { key: 'Escape' }); window.dispatchEvent(ev); }
        const solidAt = (x, y) => L.solids.some(sl => !sl.off && x >= sl.x0 && x <= sl.x1 && Math.abs(sl.y1 - y) < 0.7);
        let edgeWait = false;
        if (P.ground && !solidAt(P.x + 1.2, P.y) && !solidAt(P.x + 2.2, P.y) && !solidAt(P.x + 2.2, P.y - 1.5) && !solidAt(P.x + 2.2, P.y + 1.2)) {
          const mv = (L.movers || []).find(m => m.s.x1 > P.x && m.s.x0 < P.x + 14);
          if (mv) edgeWait = !(mv.s.x0 < P.x + 1.0 && mv.s.x1 > P.x + 0.8 && Math.abs(mv.s.y1 - P.y) < 0.8);
        }
        const flier = L.hazards.some(h => h.alive !== false && h.x > P.x - 1 && h.x < P.x + 4.5 && h.y > P.y + 1.2 && h.y < P.y + 4.5);
        return { edgeWait, flier, x: P.x, y: P.y, water: !!(L.waters && L.waters.some(w => P.x > w.x0 - 2 && P.x < w.x1 && P.y < w.top + 4)), len: L.len }; });
      if (st.over) { await p.waitForTimeout(400); continue; }
      if (st.done) { done = await p.evaluate(i => !!(FieldGuide._debug.state().S.levels[i] || {}).stars, id); break; } if (st.gone) break;
      if (st.ans) { answered++; await p.waitForTimeout(150); continue; }
      maxX = Math.max(maxX, st.x);
      if (st.edgeWait) { await p.keyboard.up('ArrowRight'); await p.waitForTimeout(120); stuckT = 0; lastX = -99; continue; } else await p.keyboard.down('ArrowRight');
      if (Math.abs(st.x - lastX) < 0.15) stuckT += 0.3; else stuckT = 0; lastX = st.x;
      if (st.water && stuckT > 0.6) { await p.keyboard.down('ArrowDown'); await p.waitForTimeout(1500); await p.keyboard.up('ArrowDown'); stuckT = Math.min(stuckT, 1.5); wetStuck += 2; if (wetStuck > 10) { stuckT = 3; wetStuck = 0; } }
      else if (st.flier && stuckT < 1.5) { await p.waitForTimeout(150); }
      else { await p.keyboard.down('Space'); await p.waitForTimeout(260); await p.keyboard.up('Space'); if (stuckT > 0.6) { await p.waitForTimeout(60); await p.keyboard.down('Space'); await p.waitForTimeout(240); await p.keyboard.up('Space'); } }
      if (stuckT > 2.4) { opened += await p.evaluate(() => { const s = FieldGuide._debug.state(), L = s.L, P = s.P; let n = 0;
          L.zones.forEach(z => { if (!z.done && P.x > z.x0 - 3 && P.x < z.x1 + 3) { z.done = true; if (z.gate) z.gate.off = true; if (z.gateMesh) z.gateMesh.visible = false; n++; } });
          L.solids.forEach(sl => { if (!sl.off && sl.x0 > P.x - 0.5 && sl.x0 < P.x + 3 && sl.y1 > P.y + 0.4 && sl.y0 < P.y + 3) { sl.off = true; n++; } });
          (L.doors || []).forEach(d => { if (d.s && !d.s.off && d.s.x0 > P.x - 1 && d.s.x0 < P.x + 4) { d.s.off = true; n++; } }); return n; }); stuckT = 0; }
      if (shots < 6 && Date.now() - t0 > 6000 + shots * 15000) { await p.screenshot({ path: OUT + '/' + id + (ES ? '-es' : '') + '-' + shots + '.png' }); shots++; }
      await p.waitForTimeout(300);
    }
    await p.keyboard.up('ArrowRight');
    const end = done ? null : await p.evaluate(() => { const s = FieldGuide._debug.state(), L = s.L, P = s.P; if (!L || !P) return { mode: s.mode }; const near = o => o.x0 !== undefined ? Math.abs(o.x0 - P.x) < 12 : false;
      return { mode: s.mode, vx: P.vx, ground: !!P.ground, qp: !document.getElementById('qpanel').hidden, qtext: document.getElementById('qpanel').innerText.slice(0, 200), P: [Math.round(P.x * 10) / 10, Math.round(P.y * 10) / 10], active: L.active ? Object.keys(L.active).slice(0, 12) : null, zones: L.zones.filter(near).map(z => [z.kind, Math.round(z.x0), Math.round(z.x1), z.done]),
        stations: L.stations.filter(st => Math.abs((st.x || 0) - P.x) < 12).map(st => [Math.round(st.x), st.done, Object.keys(st).slice(0, 15).join(',')]), solids: L.solids.filter(sl => !sl.off && sl.x0 > P.x - 2 && sl.x0 < P.x + 6).map(sl => [Math.round(sl.x0 * 10) / 10, Math.round(sl.x1 * 10) / 10, Math.round(sl.y0 * 10) / 10, Math.round(sl.y1 * 10) / 10]) }; });
    if (!done) await p.screenshot({ path: OUT + '/' + id + (ES ? '-es' : '') + '-stuck.png' });
    res[id] = { ...info, finished: done, secs: Math.round((Date.now() - t0) / 1000), maxX: Math.round(maxX), answered, forcedOpen: opened, end, errors: [...new Set(errs)] };
    await ctx.close();
  }
  console.log(JSON.stringify(res, null, 1)); await b.close();
})();
