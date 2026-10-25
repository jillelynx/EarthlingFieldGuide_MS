"""Builds world1-questions.js from the content files in this folder and checks it.
Run from the game folder: python3 tools/content/build_w1.py"""
import json, os, re, sys
sys.path.insert(0, os.path.dirname(__file__))
from w1_scans import SCANS; from w1_scans2 import SCANS2
from w1_acts import TOKENS, SORTS, DATA, BECOME, SEQUENCES, MAZES, WORDBANKS, LABLOCKS
from w1_q import QUESTIONS, PAIRS
GAME = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
eng = open(os.path.join(GAME, 'engine.js')).read()  # the STEELS table in engine.js holds the 30 standards, checked word for word against the PDF
VALID = set(json.loads(re.search(r'const STEELS = (\{.*?\});', eng).group(1)))
scans = SCANS + SCANS2
vocab = [{'term': s['word'], 'def': s['def'], 'es': {'term': s['es']['word'], 'def': s['es']['def']}} for s in scans]
D = {'tokens': TOKENS, 'sorts': SORTS, 'questions': QUESTIONS, 'pairs': PAIRS, 'become': BECOME, 'data': DATA, 'mazes': MAZES,
     'sequences': SEQUENCES, 'wordbanks': WORDBANKS, 'lablocks': LABLOCKS, 'scans': scans, 'vocab': vocab}
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
walk(D, 'w1')
ids = [x['id'] for k in ('tokens', 'sorts', 'questions', 'become', 'data', 'mazes', 'sequences', 'wordbanks', 'lablocks', 'scans') for x in D[k]]
dup = {i for i in ids if ids.count(i) > 1}; errs += ['duplicate id ' + i for i in dup]
for qq in QUESTIONS:
    if not (0 <= qq['answer'] < len(qq['options'])): errs.append(qq['id'] + ': answer out of range')
    if len(qq['options']) != 4: errs.append(qq['id'] + ': needs 4 options')
for s in SORTS:
    for it in s['items']:
        if not (0 <= it['answer'] < len(s['options'])): errs.append(s['id'] + ': item answer out of range')
for d in DATA:
    for qq in d['questions']:
        if not (0 <= qq['answer'] < len(d['categories'])): errs.append(d['id'] + ': answer out of range')
for lk in LABLOCKS:
    for c in lk['clues']:
        if not (1 <= c['answer'] <= 5): errs.append(lk['id'] + ': clue answer must be 1-5')
for wb in WORDBANKS:
    for s in wb['sentences']:
        if s['answer'] not in wb['words']: errs.append(wb['id'] + ': answer not in word list: ' + s['answer'])
        if s['es']['answer'] not in wb['es']['words']: errs.append(wb['id'] + ': Spanish answer not in word list: ' + s['es']['answer'])
qid = set(ids) | {s['id'] + '.' + str(i) for s in SORTS for i in range(len(s['items']))}
for p in PAIRS:
    for m in p['members']:
        for i in m['ids']:
            if i not in qid: errs.append('pair id not found: ' + i)
if errs: print('\n'.join(errs)); sys.exit(1)
head = ('/* WORLD 1 QUESTION FILE: What Living Things Are Made Of (middle school edition)\n'
        '   Made by tools/content/build_w1.py from the content files in tools/content (edit those, then run it again).\n'
        '   "code" is the PA STEELS grades 6-8 standard. "es" holds the Spanish text for the same item.\n'
        '   In "questions", "answer" is the position of the correct option, counting from 0. The game shuffles the options. */\n')
open(os.path.join(GAME, 'world1-questions.js'), 'w').write(head + 'FieldGuide.registerQuestions(1, ' + json.dumps(D, ensure_ascii=False, indent=1) + ');\n')
print('world1-questions.js written:', {k: len(v) for k, v in D.items()})
