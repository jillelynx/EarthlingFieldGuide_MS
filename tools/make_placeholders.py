"""Writes placeholder world files (world1-6.js and world1-6-questions.js) from the approved standards map.
Each placeholder level is short and finishable: a title sign, one small gap to jump, and the mothership beam.
Standard codes are stored with each level (codes) for the educator reference sheet; students never see them. Run: python3 tools/make_placeholders.py"""
import json, os
HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WORLDS = [
 (1, 'What Living Things Are Made Of', [
  ('1-1', 'Pocono Vernal Pool', 'pond', 'Pocono vernal pool, Pennsylvania', ['3.1.6-8.A']),
  ('1-2', 'Deep-Sea Vent', 'deep', 'Deep-sea hydrothermal vent', ['3.1.6-8.A']),
  ('1-3', 'Backyard Garden', 'garden', 'Backyard garden', ['3.1.6-8.B']),
  ('1-4', 'Rocky Tide Pool', 'shore', 'Rocky-shore tide pool', ['3.1.6-8.B'])]),
 (2, 'The Body as a System', [
  ('2-1', 'Organization Maze', 'body', 'Inside the human body', ['3.1.6-8.C']),
  ('2-2', 'Mountain Trail', 'forest', 'Mountain trail hike', ['3.1.6-8.C']),
  ('2-3', 'Forest at Night', 'forest', 'Forest at night', ['3.1.6-8.H']),
  ('2-4', 'Reaction Lab', 'lab', 'Reaction lab', ['3.1.6-8.H'])]),
 (3, 'Food and Energy for Life', [
  ('3-1', 'Sunny Meadow', 'meadow', 'Sunny meadow', ['3.1.6-8.F']),
  ('3-2', 'Kelp Forest', 'reef', 'Kelp forest', ['3.1.6-8.F']),
  ('3-3', 'Digestive Journey', 'gut', 'Inside the digestive system', ['3.1.6-8.G']),
  ('3-4', 'Garden Test Plots', 'garden', 'Community garden test plots', ['3.1.6-8.E'])]),
 (4, 'Ecosystems', [
  ('4-1', 'Coral Reef', 'reef', 'Coral reef', ['3.1.6-8.J']),
  ('4-2', 'Pennsylvania Forest', 'forest', 'Pennsylvania forest', ['3.1.6-8.I']),
  ('4-3', 'Forest Floor', 'forest', 'Fallen log and forest floor', ['3.1.6-8.K']),
  ('4-4', 'After the Fire', 'canyon', 'Forest after a fire', ['3.1.6-8.L']),
  ('4-5', 'River Valley', 'shore', 'River valley', ['3.1.6-8.U'])]),
 (5, 'Passing On Traits', [
  ('5-1', 'Wildflower Meadow', 'meadow', 'Wildflower meadow', ['3.1.6-8.D']),
  ('5-2', 'Strawberry Patch', 'garden', 'Strawberry patch and tide pool', ['3.1.6-8.N']),
  ('5-3', 'Gene Lab', 'lab', 'Gene lab in a cave', ['3.1.6-8.M']),
  ('5-4', 'Farm and Lab', 'lab', 'Farm and research lab', ['3.1.6-8.R'])]),
 (6, 'Change Over Time', [
  ('6-1', 'Fossil Dig', 'canyon', 'Fossil dig through rock layers', ['3.1.6-8.O']),
  ('6-2', 'Whale Fossil Valley', 'canyon', 'Whale fossil valley', ['3.1.6-8.P']),
  ('6-3', 'Marine Research Station', 'shore', 'Marine research station', ['3.1.6-8.Q']),
  ('6-4', 'Finch Island', 'island', 'Island with finches', ['3.1.6-8.S']),
  ('6-5', 'Selection Simulator', 'island', 'Selection simulator', ['3.1.6-8.T'])]),
]
def js(s): return json.dumps(s, ensure_ascii=False)
for wid, wtitle, levels in WORLDS:
    out = ['/* WORLD %d GAME FILE (PLACEHOLDER): %s.' % (wid, wtitle),
           '   Placeholder levels made by tools/make_placeholders.py from notes/standards-map.md.',
           '   Each one will be replaced by the real level when this world is built. */',
           'FieldGuide.registerWorld({', '  id: %d,' % wid, '  title: %s,' % js(wtitle), '  levels: [']
    for i, (lid, title, theme, place, codes) in enumerate(levels):
        std = ', '.join(codes)
        out += ['    { id: %s, title: %s, theme: %s, codes: %s,' % (js(lid), js(title), js(theme), js(codes)),
                '      log: %s,' % js('Mission log: Placeholder level. The real level (%s) is coming soon.' % place),
                '      outro: %s,' % js('Report sent: placeholder level %s finished.' % lid),
                '      build: function (b) {',
                '        b.hint(5, 4.6, %s).ground(14)' % js('Level %s: %s (coming soon)' % (lid, place)),
                '          .gap(2.4).ground(12)',
                '          .goal();',
                '      } }' + (',' if i < len(levels) - 1 else '')]
    out += ['  ]', '});', '']
    open(os.path.join(HERE, 'world%d.js' % wid), 'w').write('\n'.join(out))
    q = ['/* WORLD %d QUESTION FILE (PLACEHOLDER): %s' % (wid, wtitle),
         '   Teachers: questions, scans and activities for this world go here once it is built.',
         '   Every item will carry "code": its PA STEELS grades 6-8 standard (for example "3.1.6-8.A"). */',
         'FieldGuide.registerQuestions(%d, {' % wid, ' "questions": [],', ' "scans": [],', ' "vocab": []', '});', '']
    open(os.path.join(HERE, 'world%d-questions.js' % wid), 'w').write('\n'.join(q))
print('wrote', len(WORLDS), 'worlds,', sum(len(l) for _, _, l in WORLDS), 'levels')
