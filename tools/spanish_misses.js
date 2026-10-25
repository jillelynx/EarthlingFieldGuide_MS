// Lists Spanish-mode text that is still English and is not level content. Run: node tools/spanish_misses.js GAME_FOLDER MISS_FILE.json
// lists Spanish-mode misses that are not level content (content is already Spanish)
const fs = require('fs'), G = process.argv[2], F = process.argv[3];
const content = new Set(); const addAll = (o, es) => { if (typeof o === 'string') content.add(o.trim()); else if (Array.isArray(o)) o.forEach(x => addAll(x)); else if (o && typeof o === 'object') Object.entries(o).forEach(([k, v]) => addAll(v)); };
global.FieldGuide = { registerQuestions: (id, d) => addAll(d), registerWorld: w => { addAll(w); w.levels.forEach(l => { addAll([l.title, l.log, l.outro, l.es]); try { const b = new Proxy({}, { get: () => (...a) => { a.forEach(x => addAll(x)); return b; } }); l.build(b); } catch (e) {} }); }, t: (en, es) => { content.add(en); if (es) content.add(es); return es || en; } };
for (let i = 1; i <= 6; i++) { require(G + '/world' + i + '-questions.js'); require(G + '/world' + i + '.js'); }
const miss = JSON.parse(fs.readFileSync(F)).filter(s => !content.has(s) && !content.has(s.replace(/^[🔍✦✓] /, '')));
console.log(miss.length); console.log(miss.join('\n'));
