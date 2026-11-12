/* Earthling Field Guide, Middle School Edition: a sixth PIXEL HABITAT for the World 6 bonus speed run.
   "Penn's Woods": a Pennsylvania hardwood forest in fall, drawn in the same 8-bit style as pixelscape.js
   (rolling Appalachian ridges, sugar maples and oaks in fall color, dark eastern hemlocks, gray stone walls,
   mountain laurel, a white-tailed deer, a black bear, a wild turkey, mushrooms and falling leaves).
   pixelscape.js is an unchanged copy from the high school game; this file adds the habitat 'woods' by wrapping
   BQ.pixelScape and BQ.pixelSkin. Every other habitat name is passed straight through to pixelscape.js. */
(function () {
'use strict';
const BQ = window.FieldGuide; if (!BQ || !BQ.pixelScape) return;
const baseScape = BQ.pixelScape, baseSkin = BQ.pixelSkin;
let T = null;
let seed = 1; const R = function () { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
function cv(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
function P(x, X, Y, w, h, c) { x.fillStyle = c; x.fillRect(Math.round(X), Math.round(Y), Math.max(1, Math.round(w)), Math.max(1, Math.round(h))); }
function blob(x, cx, cy, r, c, dith) { r = Math.round(r); for (let yy = -r; yy <= r; yy++) for (let xx = -r; xx <= r; xx++) { const d = xx * xx + yy * yy; if (d <= r * r) { if (dith && d > r * r * 0.65 && ((xx + yy) & 1)) continue; P(x, cx + xx, cy + yy, 1, 1, c); } } }
function oval(x, cx, cy, rx, ry, c) { for (let yy = -ry; yy <= ry; yy++) for (let xx = -rx; xx <= rx; xx++) if ((xx * xx) / (rx * rx) + (yy * yy) / (ry * ry) <= 1) P(x, cx + xx, cy + yy, 1, 1, c); }
function grad(x, w, h, stops) { const g = x.createLinearGradient(0, 0, 0, h); stops.forEach(function (s) { g.addColorStop(s[0], s[1]); }); x.fillStyle = g; x.fillRect(0, 0, w, h);
  for (let y = 0; y < h; y += 2) for (let X = (y / 2) & 1; X < w; X += 4) P(x, X, y, 1, 1, 'rgba(255,255,255,0.035)'); }
function tex(c, rx, ry) { const t = new T.CanvasTexture(c); t.magFilter = T.NearestFilter; t.minFilter = T.NearestFilter; t.generateMipmaps = false; t.wrapS = T.RepeatWrapping; t.wrapT = (ry || 1) > 1 ? T.RepeatWrapping : T.ClampToEdgeWrapping; t.repeat.set(rx || 1, ry || 1); return t; }
function sprite(map, pal) { const rows = map.trim().split('\n').map(function (s) { return s.trim(); }), c = cv(rows[0].length, rows.length), x = c.getContext('2d');
  rows.forEach(function (r, y) { Array.from(r).forEach(function (ch, X) { if (pal[ch]) P(x, X, y, 1, 1, pal[ch]); }); }); return c; }
const FALL = ['#e8862a', '#d8452a', '#f2c33a', '#b8402a', '#e8a03a'];

/* ---------- sprites ---------- */
const SP = {
  /* a broadleaf tree in fall color (sugar maple, red maple or oak) */
  falltree: function (c1, c2) { const c = cv(64, 80), x = c.getContext('2d'); seed = c1.length * 7 + 3; P(x, 28, 34, 8, 46, '#5a3e2a'); P(x, 33, 34, 3, 46, '#7a5a3e');
    for (let y = 36; y < 80; y += 4) P(x, 29 + (y * 5) % 5, y, 2, 1, '#45301e'); P(x, 22, 76, 20, 4, '#5a3e2a'); P(x, 22, 40, 8, 2, '#5a3e2a'); P(x, 36, 46, 9, 2, '#5a3e2a');
    for (let k = 0; k < 24; k++) blob(x, 8 + R() * 48, 6 + R() * 34, 6 + R() * 5, R() < 0.5 ? c1 : c2, true);
    for (let k = 0; k < 18; k++) P(x, 8 + R() * 48, 8 + R() * 34, 1, 1, '#fff0b0'); return c; },
  /* eastern hemlock, the Pennsylvania state tree: dark green, drooping tiers */
  hemlock: function () { const c = cv(40, 84), x = c.getContext('2d'); P(x, 18, 60, 4, 24, '#4a3424');
    for (let k = 0; k < 9; k++) { const y = 4 + k * 7, hw = 3 + k * 2.1; for (let X = -hw; X <= hw; X++) { const d = Math.round(Math.abs(X) * 0.35); P(x, 20 + X, y + d, 1, 7, (X + k) % 3 ? '#1f4a34' : '#2d6045'); } P(x, 20 - hw, y + Math.round(hw * 0.35) + 5, 1, 2, '#163626'); P(x, 20 + hw, y + Math.round(hw * 0.35) + 5, 1, 2, '#163626'); }
    P(x, 19, 0, 2, 5, '#2d6045'); return c; },
  /* mountain laurel, the state flower, as a glossy evergreen shrub */
  laurel: function () { const c = cv(22, 11), x = c.getContext('2d'); seed = 19; for (let i = 0; i < 12; i++) { const X = 2 + R() * 18; P(x, X, 4 + R() * 3, 1, 7, '#5a4a32'); blob(x, X, 3 + R() * 2, 2, R() < 0.5 ? '#2f6a3a' : '#3f7f48', true); } return c; },
  /* an old farm stone wall in the woods */
  wall: function () { const c = cv(30, 10), x = c.getContext('2d'); seed = 23; for (let row = 0; row < 3; row++) for (let X = (row % 2) * 3; X < 30; X += 5 + Math.round(R() * 2)) { const w = 4 + Math.round(R() * 2); P(x, X, 10 - (row + 1) * 3, w, 3, R() < 0.5 ? '#8a8f8f' : '#a0a4a2'); P(x, X, 10 - (row + 1) * 3, w, 1, '#bcc0bc'); P(x, X + w - 1, 10 - (row + 1) * 3, 1, 3, '#5a5e5e'); }
    for (let i = 0; i < 6; i++) P(x, R() * 30, R() * 3, 2, 1, FALL[i % FALL.length]); return c; },
  deer: function () { return sprite(`
.........b...b.....
..........b.b......
.........bbbb......
........kbbbbbe....
........bbbbbbe....
.........wbbbb.....
.........bbbb......
..wbbbbbbbbbbb.....
.wwbbbbbbbbbbb.....
..bbbbbbbbbbbb.....
...bbbbbbbbbbb.....
...bb.bb...bb.bb...
...bb.bb...bb.bb...
...b..b.....b..b...
...k..k.....k..k...`, { b: '#9a6a3e', e: '#b88a5a', w: '#f4efe4', k: '#2a1e14' }); },
  bear: function () { return sprite(`
..kk..............
.kkkk.kkkkkkkk....
kkwkkkkkkkkkkkkk..
kkkkkkkkkkkkkkkkk.
bkkkkkkkkkkkkkkkk.
.kkkkkkkkkkkkkkkkk
..kkkkkkkkkkkkkkkk
..kkk.kk...kk.kkk.
..kkk.kk...kk.kkk.`, { k: '#1c1a1e', w: '#5a5560', b: '#8a6a4a' }); },
  turkey: function () { return sprite(`
..........r.....
.........rbk....
.........bbb....
.ooo.....bbo....
oyoyo....bb.....
oooooo..kkk.....
.oyoyo.kkkkk....
..ooookkkkkk....
...ookkkkkkk....
.....kkkkkk.....
......y..y......
.....yy..yy.....`, { k: '#3a2e26', o: '#8a5a32', y: '#c8a050', b: '#7aa8d8', r: '#d83a2a' }); },
  shroom: function () { const c = cv(12, 8), x = c.getContext('2d'); oval(x, 3, 3, 3, 2, '#c84a2a'); P(x, 2, 2, 1, 1, '#ffffff'); P(x, 4, 3, 1, 1, '#ffffff'); P(x, 3, 5, 1, 3, '#f0e8d0'); oval(x, 9, 4, 2, 1, '#e8b860'); P(x, 9, 5, 1, 3, '#f0e8d0'); return c; },
  fern: function () { const c = cv(26, 20), x = c.getContext('2d'); for (let f = 0; f < 5; f++) { const a = -1.2 + f * 0.6; for (let k = 0; k < 12; k++) { const X = 13 + Math.sin(a) * k, Y = 19 - Math.cos(a) * k * 1.4; P(x, X, Y, 1, 1, '#b8862a'); if (k % 2) { P(x, X - 1, Y, 1, 1, '#d8a83a'); P(x, X + 1, Y + 1, 1, 1, '#8a6020'); } } } return c; },
  rock: function () { const c = cv(20, 12), x = c.getContext('2d'); oval(x, 10, 7, 9, 5, '#6e7372'); oval(x, 9, 5, 6, 2, '#8e9391'); P(x, 4, 6, 3, 1, '#4f8a3a'); P(x, 12, 4, 4, 1, '#5f9a48'); return c; }
};

/* ---------- the habitat ---------- */
const H = { bg: '#7ab0dc',
  sky: function (x, w, h) { grad(x, w, h, [[0, '#4a8ad0'], [0.55, '#9ac8ec'], [1, '#f0e0c0']]); seed = 71; for (let i = 0; i < 5; i++) { const X = R() * w, Y = 6 + R() * 22; for (let k = 0; k < 4; k++) oval(x, X + k * 6, Y + (k % 2), 6, 3, '#ffffff'); } },
  /* long, even Appalachian ridges, like the Ridge and Valley region, hazy blue-gray with fall color */
  far: function (x, w, h) { seed = 73; [[0.42, '#6a7aa0', '#8a8aa8'], [0.55, '#7a6a78', '#9a7a70']].forEach(function (L, j) { for (let X = 0; X < w; X++) { const y = h * L[0] + Math.sin(X * 0.025 + j) * 3 + Math.sin(X * 0.09 + j * 2) * 1.2; P(x, X, y, 1, h - y, L[1]); if ((X * 7 + j) % 5 === 0) P(x, X, y + 1 + R() * 6, 1, 1, L[2]); } });
    for (let i = 0; i < 60; i++) P(x, R() * w, h * 0.62 + R() * h * 0.3, 2, 1, ['#b06a40', '#a0503a', '#b89a48'][i % 3]); },
  /* the near forest: fall maples and oaks with dark hemlocks */
  mid: function (x, w, h) { seed = 79; for (let i = 0; i < 26; i++) { const X = R() * w, Y = h * 0.4 + R() * 18; if (i % 4 === 0) { for (let k = 0; k < 7; k++) { const hw = 1 + k * 1.3; P(x, X - hw, Y + k * 4, hw * 2, 4, '#1f4434'); } P(x, X, Y + 28, 2, h, '#3a2a20'); }
      else { P(x, X, Y + 8, 2, h, '#4a3424'); for (let k = 0; k < 4; k++) blob(x, X + (R() - 0.5) * 12, Y + R() * 12, 5 + R() * 3, FALL[(i + k) % FALL.length], true); } }
    for (let i = 0; i < 40; i++) blob(x, R() * w, h * 0.86 + R() * 8, 3 + R() * 3, R() < 0.5 ? '#8a5a2a' : '#a8682a', true); },
  rays: '#fff4c8',
  /* soil with gray shale chips */
  dirt: function (x, w, h) { P(x, 0, 0, w, h, '#6b4a2f'); seed = 83; for (let i = 0; i < 22; i++) blob(x, R() * w, R() * h, 2 + R() * 2, R() < 0.5 ? '#553a24' : '#7d5838', false); for (let i = 0; i < 7; i++) { const X = R() * w, Y = R() * h; P(x, X, Y, 4, 1, '#7a7e80'); P(x, X + 1, Y + 1, 3, 1, '#5e6264'); } },
  /* a lip of fallen leaves */
  lip: function (x, w, h) { P(x, 0, 0, w, 5, '#a8682a'); P(x, 0, 0, w, 1, '#d8a050'); seed = 89; for (let i = 0; i < w; i++) { if (i % 2 === 0) P(x, i, R() * 4, 2, 1, FALL[i % FALL.length]); if ((i * 7) % 5 === 0) P(x, i, 5, 1, 1 + ((i * 3) % 4), '#7a4a22'); } },
  deco: [['falltree', 0.10, 11, -9, ['#e8862a', '#f2c33a']], ['falltree', 0.08, 11, -9.5, ['#d8452a', '#e8862a']], ['hemlock', 0.08, 11, -8.5], ['laurel', 0.3, 1.5, -2.8], ['wall', 0.12, 1.2, -3.2],
    ['deer', 0.05, 2.6, -3.6, 'perch'], ['turkey', 0.05, 1.5, -2.9, 'scurry'], ['bear', 0.03, 1.9, -4.2, 'scurry'], ['shroom', 0.2, 0.7, -2.3], ['fern', 0.3, 1.8, -2.9], ['rock', 0.18, 1.5, -2.7]] };

function plane(c, w, h, x, y, z, rx, ry, opts) { const t = tex(c, rx, ry), m = new T.Mesh(new T.PlaneGeometry(w, h), new T.MeshBasicMaterial(Object.assign({ map: t, transparent: true, alphaTest: 0.5, fog: false, depthWrite: true }, opts || {}))); m.position.set(x, y, z); return m; }
function groundTop(solids, x) { let best = null; solids.forEach(function (s) { if (s.off || x < s.x0 + 0.4 || x > s.x1 - 0.4) return; if (s.y1 - s.y0 < 6) return; if (best === null || s.y1 > best) best = s.y1; }); return best; }

BQ.pixelScape = function (name, x0, x1, grp, solids) {
  if (name !== 'woods') return baseScape(name, x0, x1, grp, solids);
  T = BQ.core.T; seed = 100; const TICK = [], span = x1 - x0 + 220, mx = (x0 + x1) / 2;
  const sky = cv(64, 128); H.sky(sky.getContext('2d'), 64, 128); const sk = plane(sky, span * 3, 260, mx, 40, -260, 1, 1, { alphaTest: 0, transparent: false, depthWrite: false }); sk.renderOrder = -20; grp.add(sk);
  const far = cv(256, 96); H.far(far.getContext('2d'), 256, 96); const fm = plane(far, span * 1.6, 70, mx, 6, -90, span * 1.6 / 110, 1); fm.renderOrder = -15; grp.add(fm);
  const mid = cv(256, 80); H.mid(mid.getContext('2d'), 256, 80); const mm = plane(mid, span * 1.2, 42, mx, 2, -40, span * 1.2 / 70, 1); mm.renderOrder = -12; grp.add(mm);
  for (let i = 0; i < Math.max(4, Math.round((x1 - x0) / 30)); i++) { const m = new T.Mesh(new T.PlaneGeometry(4 + R() * 5, 80), new T.MeshBasicMaterial({ color: H.rays, transparent: true, opacity: 0.05 + R() * 0.04, depthWrite: false, fog: false, blending: T.AdditiveBlending })); m.position.set(x0 + R() * (x1 - x0), 14, -30); m.rotation.z = -0.35; grp.add(m);
    const ph = R() * 6; TICK.push(function (dt, t) { m.material.opacity = 0.05 + 0.03 * Math.sin(t * 0.5 + ph); }); }
  /* plants, rocks and animals along the course */
  const sprites = {}, get = function (d) { const k = d[0] + (Array.isArray(d[4]) ? d[4].join(',') : ''); if (!sprites[k]) sprites[k] = Array.isArray(d[4]) ? SP[d[0]](d[4][0], d[4][1]) : SP[d[0]](); return sprites[k]; };
  for (let x = x0 + 6; x < x1 - 4; x += 1.6) H.deco.forEach(function (d) { if (R() > d[1] * 0.55) return; const gy = groundTop(solids, x); if (gy === null) return;
    const c = get(d), hgt = d[2], wid = hgt * c.width / c.height, big = d[0] === 'falltree' || d[0] === 'hemlock', m = plane(c, wid, hgt, x + (R() - 0.5), gy + hgt / 2 - (big ? 0.5 : 0.05), d[3] - R() * 0.6, 1, 1); grp.add(m);
    const mode = d[5] || (typeof d[4] === 'string' ? d[4] : null), bx = m.position.x, by = m.position.y, ph = R() * 9;
    if (mode === 'scurry') TICK.push(function (dt, t) { m.position.x = bx + Math.sin((t + ph) * 0.35) * 1.6; m.scale.x = Math.cos((t + ph) * 0.35) > 0 ? -1 : 1; });
    else if (mode === 'perch') TICK.push(function (dt, t) { const k = (t + ph) % 5; m.position.y = by + (k < 0.25 ? 0.12 : 0); }); });
  /* falling leaves in three fall colors */
  ['#e8862a', '#d8452a', '#f2c33a'].forEach(function (col, j) { const n = 50, pos = new Float32Array(n * 3); for (let i = 0; i < n; i++) pos.set([x0 + R() * (x1 - x0), R() * 16 - 2, -1 - R() * 8], i * 3);
    const g = new T.BufferGeometry(); g.setAttribute('position', new T.BufferAttribute(pos, 3)); grp.add(new T.Points(g, new T.PointsMaterial({ color: col, size: 0.26, transparent: true, opacity: 0.9, fog: false })));
    TICK.push(function (dt, t) { for (let i = 0; i < n; i++) { let y = pos[i * 3 + 1] - dt * (0.7 + (i % 5) * 0.15); if (y < -2) y = 14; pos[i * 3 + 1] = y; pos[i * 3] += Math.sin(t * 1.3 + i + j) * dt * 0.9; } g.attributes.position.needsUpdate = true; }); });
  return { bg: H.bg, under: false, tick: function (dt, t) { TICK.forEach(function (f) { f(dt, t); }); } };
};
BQ.pixelSkin = function (name, grp, groundMat, topMat) {
  if (name !== 'woods') return baseSkin(name, grp, groundMat, topMat);
  T = BQ.core.T; const U = 2.4, dc = cv(32, 32); H.dirt(dc.getContext('2d'), 32, 32); const lc = cv(32, 12); H.lip(lc.getContext('2d'), 32, 12); const lips = [];
  grp.children.slice().forEach(function (m) { if (!m.isMesh) return; const isG = m.material === groundMat, isT = m.material === topMat; if (!isG && !isT) return;
    const w = m.scale.x, h = m.scale.y; m.material = new T.MeshBasicMaterial({ map: tex(dc, Math.max(1, w / U), Math.max(1, h / U)), fog: false });
    if (isT || (isG && h < 4)) lips.push([m.position.x, m.position.y + h / 2, w, m.position.z + m.scale.z / 2 + 0.03]); });
  lips.forEach(function (l) { grp.add(plane(lc, l[2] + 0.2, 1.1, l[0], l[1] - 0.45, l[3], Math.max(1, l[2] / U), 1));
    const t2 = new T.Mesh(new T.PlaneGeometry(l[2] + 0.2, 7.2), new T.MeshBasicMaterial({ color: '#a8682a', fog: false })); t2.rotation.x = -Math.PI / 2; t2.position.set(l[0], l[1] + 0.01, l[3] - 3.6); grp.add(t2); });
};
})();
