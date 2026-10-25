"""Builds worldN-questions.js from the content files in this folder and checks it.
Run from the game folder:  python3 tools/content/build_world.py 2
Content files for world N: wN_scans.py (SCANS, and SCANS2 if any), wN_acts.py (activities), wN_q.py (QUESTIONS, PAIRS).
Checks: standard codes, unique ids, answer positions, word-bank answers, pair ids, and that every Spanish list matches the English one."""
import json, os, re, sys, importlib
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
N = int(sys.argv[1]); GAME = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
eng = open(os.path.join(GAME, 'engine.js')).read()   # the STEELS table in engine.js holds the 30 standards, checked word for word against the PDF
VALID = set(json.loads(re.search(r'const STEELS = (\{.*?\});', eng).group(1)))
sm = importlib.import_module('w%d_scans' % N); am = importlib.import_module('w%d_acts' % N); qm = importlib.import_module('w%d_q' % N)
scans = list(getattr(sm, 'SCANS', [])) + list(getattr(sm, 'SCANS2', []))
try: scans += list(importlib.import_module('w%d_scans2' % N).SCANS2)
except ImportError: pass
g = lambda m, k: list(getattr(m, k, []))
vocab = [{'term': s['word'], 'def': s['def'], 'es': {'term': s['es']['word'], 'def': s['es']['def']}} for s in scans]
D = {'tokens': g(am, 'TOKENS'), 'sorts': g(am, 'SORTS'), 'questions': g(qm, 'QUESTIONS'), 'pairs': g(qm, 'PAIRS'), 'become': g(am, 'BECOME'), 'data': g(am, 'DATA'), 'mazes': g(am, 'MAZES'),
     'sequences': g(am, 'SEQUENCES'), 'wordbanks': g(am, 'WORDBANKS'), 'balances': g(am, 'BALANCES'), 'lablocks': g(am, 'LABLOCKS'), 'scans': scans, 'vocab': vocab}
D = {k: v for k, v in D.items() if v}
errs = []
def walk(o, path):
    if isinstance(o, dict):
        if 'code' in o and o['code'] not in VALID: errs.append(path + ': bad code ' + str(o['code']))
        if 'es' in o:
            for k, v in o['es'].items():
                if k not in o: errs.append(path + ': es has extra key ' + k)
                elif isinstance(v, list) and len(v) != len(o[k]): errs.append(path + ': es.' + k + ' length differs')
        for k, v in o.items(): walk(v, path + '.' + k)
    elif isinstance(o, list):
        for i, v in enumerate(o): walk(v, path + '[' + str(i) + ']')
walk(D, 'w%d' % N)
ids = [x['id'] for k in ('tokens', 'sorts', 'questions', 'become', 'data', 'mazes', 'sequences', 'wordbanks', 'balances', 'lablocks', 'scans') for x in D.get(k, [])]
errs += ['duplicate id ' + i for i in {i for i in ids if ids.count(i) > 1}]
for qq in D.get('questions', []):
    if not (0 <= qq['answer'] < len(qq['options'])): errs.append(qq['id'] + ': answer out of range')
    if len(qq['options']) != 4: errs.append(qq['id'] + ': needs 4 options')
for s in D.get('sorts', []):
    if len(s['options']) > 4: errs.append(s['id'] + ': at most 4 options')
    for it in s['items']:
        if not (0 <= it['answer'] < len(s['options'])): errs.append(s['id'] + ': item answer out of range')
for d in D.get('data', []):
    if len(d['categories']) > 5: errs.append(d['id'] + ': at most 5 bars')
    for qq in d['questions']:
        if not (0 <= qq['answer'] < len(d['categories'])): errs.append(d['id'] + ': answer out of range')
for b in D.get('balances', []):
    if b.get('kind') == 'elevator' and len(b['controls']) != 2: errs.append(b['id'] + ': an elevator needs exactly 2 controls')
for lk in D.get('lablocks', []):
    for c in lk['clues']:
        if not (1 <= c['answer'] <= 5): errs.append(lk['id'] + ': clue answer must be 1-5')
for wb in D.get('wordbanks', []):
    for s in wb['sentences']:
        if s['answer'] not in wb['words']: errs.append(wb['id'] + ': answer not in word list: ' + s['answer'])
        if s['es']['answer'] not in wb['es']['words']: errs.append(wb['id'] + ': Spanish answer not in word list: ' + s['es']['answer'])
qid = set(ids) | {s['id'] + '.' + str(i) for s in D.get('sorts', []) for i in range(len(s['items']))}
for p in D.get('pairs', []):
    for m in p['members']:
        for i in m['ids']:
            if i not in qid: errs.append('pair id not found: ' + i)
if errs: print('\n'.join(errs)); sys.exit(1)
TITLES = {1: 'What Living Things Are Made Of', 2: 'The Body as a System', 3: 'Food and Energy for Life', 4: 'Ecosystems', 5: 'Passing On Traits', 6: 'Change Over Time'}
head = ('/* WORLD %d QUESTION FILE: %s (middle school edition)\n' % (N, TITLES.get(N, '')) +
        '   Made by tools/content/build_world.py from the content files in tools/content (edit those, then run it again).\n'
        '   "code" is the PA STEELS grades 6-8 standard. "es" holds the Spanish text for the same item.\n'
        '   In "questions", "answer" is the position of the correct option, counting from 0. The game shuffles the options. */\n')
open(os.path.join(GAME, 'world%d-questions.js' % N), 'w').write(head + 'FieldGuide.registerQuestions(%d, ' % N + json.dumps(D, ensure_ascii=False, indent=1) + ');\n')
print('world%d-questions.js written:' % N, {k: len(v) for k, v in D.items()})
