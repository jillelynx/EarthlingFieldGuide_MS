const { chromium } = require('playwright'); const fs = require('fs'); const path = require('path'); const GAME = process.argv[2], OUT = process.argv[3];
async function open(b, hash, errs) { const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage();
  await p.route('**/*', r => { const u = new URL(r.request().url()); if (u.hostname === 'cdnjs.cloudflare.com') return r.fulfill({ path: path.join(__dirname, 'node_modules/three/build/three.min.js') });
    if (u.hostname === 'game.test') { const f = path.join(GAME, u.pathname); return fs.existsSync(f) ? r.fulfill({ path: f }) : r.fulfill({ status: 404, body: '' }); } return r.abort(); });
  p.on('pageerror', e => errs.push(e.message)); await p.goto('http://game.test/index.html' + hash); await p.waitForFunction(() => window.FieldGuide && FieldGuide._debug); await p.waitForTimeout(800); return p; }
const codeRe = /3\.[1-5]\.6-8|STEELS|standard/i;
(async () => { const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader'] }); const errs = []; const r = {};
  // student: About, Progress (after answering nothing), a level
  let p = await open(b, '#nointro', errs);
  await p.evaluate(() => { const S = FieldGuide._debug.state().S; S.codes['3.1.6-8.A'] = { right: 1, tries: 2, world: 1 }; });
  await p.click('#btnAbout'); await p.waitForTimeout(300); const about = await p.$eval('#about', e => e.innerText);
  r.studentAboutMentions = (about.match(new RegExp(codeRe, 'gi')) || []);
  await p.click('#about [data-back]'); await p.click('#btnProgress'); await p.waitForTimeout(300);
  r.studentProgressMentions = ((await p.$eval('#progress', e => e.innerText)).match(new RegExp(codeRe, 'gi')) || []);
  await p.screenshot({ path: OUT + '/s-progress.png' });
  // student: level text (signs are 3D labels; check level data that is drawn)
  r.levelSignTexts = await p.evaluate(() => { const out = []; Object.values(FieldGuide.worlds).forEach(w => w.levels.forEach(l => { const s = l.build.toString(); if (/STEELS|3\.[14]\.6-8/.test(s)) out.push(l.id); })); return out; });
  await p.close();
  // teacher: About shows the sheet
  p = await open(b, '#nointro#teacher', errs); await p.click('#btnAbout'); await p.waitForTimeout(300);
  r.teacherRows = await p.$$eval('#aboutStd tr', x => x.length - 1);
  r.teacherSample = await p.$$eval('#aboutStd tr', x => [x[1].innerText, x[21] && x[21].innerText, x[30] && x[30].innerText]);
  r.printButton = !!(await p.$('#btnRefPrint'));
  await p.evaluate(() => document.querySelector('#aboutStd').scrollIntoView()); await p.screenshot({ path: OUT + '/t-about.png' });
  const [pop] = await Promise.all([p.waitForEvent('popup'), p.evaluate(() => { window.__print = 1; document.getElementById('btnRefPrint').click(); })]);
  await pop.waitForLoadState(); r.printTitle = await pop.title(); r.printRows = await pop.$$eval('tr', x => x.length - 1); await pop.screenshot({ path: OUT + '/t-print.png', fullPage: false });
  r.errors = errs; console.log(JSON.stringify(r, null, 1)); await b.close(); })();
