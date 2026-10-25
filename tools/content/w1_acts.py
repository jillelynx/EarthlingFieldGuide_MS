# World 1 activities (English + Spanish)
A, B = '3.1.6-8.A', '3.1.6-8.B'
def bad(t, e, tes, ees): return {'text': t, 'explain': e, 'es': {'text': tes, 'explain': ees}}
TOKENS = [
 {'id': 'h1-cells', 'code': A, 'prompt': 'Collect only samples that are MADE OF CELLS (living now, or once living)',
  'good': ['Wood frog skin', 'Moss leaf', 'Paramecium', 'Fallen oak leaf', 'Salamander egg', 'Mushroom cap'],
  'bad': [bad('Grain of sand', 'Sand is tiny pieces of rock. It has no cells and was never alive.', 'Grano de arena', 'La arena son pedacitos de roca. No tiene células y nunca estuvo viva.'),
          bad('Air bubble', 'An air bubble is a pocket of gas. It is not made of cells.', 'Burbuja de aire', 'Una burbuja de aire es un poco de gas. No está formada por células.'),
          bad('Plastic bottle cap', 'Plastic is made in a factory. It is not made of cells.', 'Tapa de plástico', 'El plástico se fabrica en una fábrica. No está formado por células.'),
          bad('Ice crystal', 'Ice is frozen water. It can grow, but it has no cells.', 'Cristal de hielo', 'El hielo es agua congelada. Puede crecer, pero no tiene células.')],
  'es': {'prompt': 'Recoge solo las muestras que ESTÁN FORMADAS POR CÉLULAS (vivas ahora, o que estuvieron vivas)',
         'good': ['Piel de rana de bosque', 'Hoja de musgo', 'Paramecio', 'Hoja de roble caída', 'Huevo de salamandra', 'Sombrero de hongo']}},
 {'id': 'h1-bact', 'code': B, 'model': 'prokaryote', 'parts': ['Plasma membrane', 'Cytoplasm', 'DNA', 'Ribosomes'],
  'prompt': 'Build a vent bacterium: bring it only the parts a one-celled bacterium has',
  'good': ['Cell membrane', 'Cytoplasm', 'DNA', 'Ribosomes'],
  'bad': [bad('Nucleus', 'A bacterium has no nucleus. Its DNA floats in the cytoplasm.', 'Núcleo', 'Una bacteria no tiene núcleo. Su ADN flota en el citoplasma.'),
          bad('Chloroplasts', 'Bacteria have no chloroplasts. These vent bacteria make food from chemicals, not sunlight.', 'Cloroplastos', 'Las bacterias no tienen cloroplastos. Estas bacterias de las fuentes producen alimento con sustancias químicas, no con la luz del sol.'),
          bad('Heart', 'A heart is an organ made of many cells. A single cell cannot have one.', 'Corazón', 'Un corazón es un órgano formado por muchas células. Una sola célula no puede tener uno.')],
  'es': {'prompt': 'Construye una bacteria de las fuentes: tráele solo las partes que tiene una bacteria de una célula',
         'good': ['Membrana celular', 'Citoplasma', 'ADN', 'Ribosomas']}},
 {'id': 'h1-plant', 'code': B, 'model': 'plant', 'parts': ['Cell wall', 'Plasma membrane', 'Cytoplasm', 'Nucleus', 'Chloroplasts', 'Vacuole', 'Mitochondria'],
  'prompt': 'Build a spinach leaf cell: bring it the parts a plant cell has',
  'good': ['Cell wall', 'Cell membrane', 'Cytoplasm', 'Nucleus', 'Chloroplasts', 'Vacuole', 'Mitochondria'],
  'bad': [bad('Bone', 'Bone is a tissue in some animals. It is not a part inside a cell.', 'Hueso', 'El hueso es un tejido de algunos animales. No es una parte dentro de una célula.'),
          bad('Soil', 'Soil is outside the plant. Roots take water and minerals from it, but it is not a cell part.', 'Tierra', 'La tierra está fuera de la planta. Las raíces toman agua y minerales de ella, pero no es una parte de la célula.'),
          bad('Sunlight', 'Sunlight is energy that reaches the cell. The chloroplasts use it, but it is not a cell part.', 'Luz del sol', 'La luz del sol es energía que llega a la célula. Los cloroplastos la usan, pero no es una parte de la célula.')],
  'es': {'prompt': 'Construye una célula de hoja de espinaca: tráele las partes que tiene una célula vegetal',
         'good': ['Pared celular', 'Membrana celular', 'Citoplasma', 'Núcleo', 'Cloroplastos', 'Vacuola', 'Mitocondrias']}},
]
def it(t, a, e, tes, ees): return {'text': t, 'answer': a, 'explain': e, 'es': {'text': tes, 'explain': ees}}
SORTS = [
 {'id': 'sort1-count', 'code': A, 'prompt': 'One cell or many cells?', 'options': ['One cell', 'Many cells'],
  'hint': 'If it is a whole organism you can easily see without a microscope, it is almost always made of many cells.',
  'items': [it('Paramecium', 0, 'A paramecium is a whole organism made of one cell.', 'Paramecio', 'Un paramecio es un organismo completo formado por una célula.'),
            it('Wood frog', 1, 'A wood frog has millions of cells of many types.', 'Rana de bosque', 'Una rana de bosque tiene millones de células de muchos tipos.'),
            it('Pond bacterium', 0, 'Each bacterium is a single cell.', 'Bacteria de la charca', 'Cada bacteria es una sola célula.'),
            it('Moss plant', 1, 'Moss is a plant made of thousands of cells.', 'Planta de musgo', 'El musgo es una planta formada por miles de células.'),
            it('Amoeba', 0, 'An amoeba is one cell that moves by changing its shape.', 'Ameba', 'Una ameba es una célula que se mueve cambiando de forma.'),
            it('Red maple tree', 1, 'A tree is made of billions of cells.', 'Arce rojo', 'Un árbol está formado por miles de millones de células.')],
  'es': {'prompt': '¿Una célula o muchas células?', 'options': ['Una célula', 'Muchas células'], 'hint': 'Si es un organismo completo que se ve fácilmente sin microscopio, casi siempre está formado por muchas células.'}},
 {'id': 'sort1-vent', 'code': A, 'prompt': 'Deep-sea life: made of one cell, or of many types of cells?', 'options': ['One cell', 'Many types of cells'],
  'hint': 'Microorganisms are single cells. Animals are made of many types of cells.',
  'items': [it('Archaea from a hot vent', 0, 'Each archaeon is one cell.', 'Arqueas de una fuente caliente', 'Cada arquea es una sola célula.'),
            it('Giant tube worm', 1, 'A tube worm has skin cells, muscle cells and many other types.', 'Gusano de tubo gigante', 'Un gusano de tubo tiene células de piel, de músculo y de muchos otros tipos.'),
            it('Diatom', 0, 'A diatom is one cell inside a glassy shell.', 'Diatomea', 'Una diatomea es una célula dentro de una concha parecida al vidrio.'),
            it('Anglerfish', 1, 'An anglerfish is an animal made of many types of cells.', 'Pez abisal', 'Un pez abisal es un animal formado por muchos tipos de células.'),
            it('Bacteria in a microbe mat', 0, 'Each bacterium in the mat is one cell.', 'Bacterias de un tapete de microbios', 'Cada bacteria del tapete es una sola célula.')],
  'es': {'prompt': 'Vida del mar profundo: ¿formada por una célula o por muchos tipos de células?', 'options': ['Una célula', 'Muchos tipos de células'], 'hint': 'Los microorganismos son células sueltas. Los animales están formados por muchos tipos de células.'}},
 {'id': 'sort1-pa', 'code': B, 'prompt': 'Which cells have this part?', 'options': ['Plant cells only', 'Both plant and animal cells'],
  'hint': 'Plant cells have three extra parts: a cell wall, chloroplasts and a large vacuole.',
  'items': [it('Cell wall', 0, 'Only plant cells have a stiff cell wall.', 'Pared celular', 'Solo las células vegetales tienen una pared celular rígida.'),
            it('Nucleus', 1, 'Plant and animal cells both have a nucleus.', 'Núcleo', 'Las células vegetales y animales tienen núcleo.'),
            it('Chloroplasts', 0, 'Only plant cells have chloroplasts to make food from sunlight.', 'Cloroplastos', 'Solo las células vegetales tienen cloroplastos para producir alimento con la luz del sol.'),
            it('Cell membrane', 1, 'Every cell has a cell membrane.', 'Membrana celular', 'Toda célula tiene membrana celular.'),
            it('Mitochondria', 1, 'Plant and animal cells both release energy with mitochondria.', 'Mitocondrias', 'Las células vegetales y animales liberan energía con mitocondrias.'),
            it('Large central vacuole', 0, 'Plant cells have one large vacuole for water. Animal cells have only small ones, or none.', 'Vacuola central grande', 'Las células vegetales tienen una vacuola grande para el agua. Las células animales solo tienen vacuolas pequeñas, o ninguna.')],
  'es': {'prompt': '¿Qué células tienen esta parte?', 'options': ['Solo las células vegetales', 'Las células vegetales y las animales'], 'hint': 'Las células vegetales tienen tres partes extra: pared celular, cloroplastos y una vacuola grande.'}},
]
def dq(p, a, h, e, es): return {'prompt': p, 'answer': a, 'hint': h, 'explain': e, 'es': {'prompt': es[0], 'hint': es[1], 'explain': es[2]}}
SURVEY = {'categories': ['Pond water', 'Moss leaf', 'Onion skin', 'Sand', 'Salamander egg'], 'values': [6, 45, 30, 0, 1]}
SURVEY_ES = ['Agua de charca', 'Hoja de musgo', 'Piel de cebolla', 'Arena', 'Huevo de salamandra']
DATA = [
 {'id': 'd1-scope', 'code': A, 'title': 'Microscope survey: cells seen in one view', 'xlabel': 'Sample', 'ylabel': 'Cells seen in one view',
  'categories': SURVEY['categories'], 'values': SURVEY['values'],
  'questions': [dq('Which sample showed NO cells at all?', 3, 'Find the bar with a value of zero.', 'The sand showed no cells. Sand is tiny bits of rock, so it is nonliving.',
                   ('¿Qué muestra NO mostró ninguna célula?', 'Busca la barra con valor cero.', 'La arena no mostró células. La arena son pedacitos de roca, así que es inerte.')),
                dq('Which sample had the MOST cells in one view?', 1, 'Find the tallest bar.', 'The moss leaf had the most. A moss plant is multicellular: made of many cells.',
                   ('¿Qué muestra tuvo MÁS células en una vista?', 'Busca la barra más alta.', 'La hoja de musgo tuvo más. Una planta de musgo es multicelular: formada por muchas células.')),
                dq('A newly laid egg is a single cell. Which sample matches that?', 4, 'Look for a value of exactly one.', 'The salamander egg showed one cell. It will divide many times to become a salamander.',
                   ('Un huevo recién puesto es una sola célula. ¿Qué muestra coincide con eso?', 'Busca un valor de exactamente uno.', 'El huevo de salamandra mostró una célula. Se dividirá muchas veces hasta convertirse en salamandra.'))],
  'es': {'title': 'Estudio con microscopio: células vistas en una vista', 'xlabel': 'Muestra', 'ylabel': 'Células vistas en una vista', 'categories': SURVEY_ES}},
]
def door(kind, label, ok, why=None, les=None, wes=None):
    d = {'kind': kind, 'label': label, 'ok': ok, 'es': {'label': les}}
    if why: d['why'] = why; d['es']['why'] = wes
    return d
BECOME = [
 {'id': 'b1-oxygen', 'code': B, 'you': 'an oxygen molecule in the seawater', 'short': 'O₂', 'color': '#9fe0ff',
  'goal': 'Get into a sea star’s cell, so its mitochondria can use you to release energy.', 'here': 'Seawater', 'there': 'Inside the cell', 'what': 'oxygen', 'hereCrowd': 16, 'thereCrowd': 4,
  'doors': [door('lipid', 'Pass through the cell membrane', True, les='Pasa a través de la membrana celular'),
            door('protein', 'Squeeze through the cell wall', False, 'Animal cells, like a sea star’s, have no cell wall.', 'Pasa por la pared celular', 'Las células animales, como las de la estrella de mar, no tienen pared celular.'),
            door('pump', 'Wait for the nucleus to let you in', False, 'The nucleus controls the cell, but materials enter through the cell membrane.', 'Espera a que el núcleo te deje entrar', 'El núcleo controla la célula, pero las sustancias entran por la membrana celular.')],
  'explain': 'The cell membrane lets oxygen in. Inside, the mitochondria use oxygen to release energy from food.',
  'es': {'you': 'una molécula de oxígeno en el agua de mar', 'goal': 'Entra en una célula de la estrella de mar, para que sus mitocondrias te usen para liberar energía.', 'here': 'Agua de mar', 'there': 'Dentro de la célula', 'what': 'oxígeno',
         'explain': 'La membrana celular deja entrar el oxígeno. Adentro, las mitocondrias usan el oxígeno para liberar la energía de los alimentos.'}},
 {'id': 'b1-waste', 'code': B, 'you': 'carbon dioxide, a waste made inside the cell', 'short': 'CO₂', 'color': '#ffb09c',
  'goal': 'Leave the cell. Wastes must get out!', 'here': 'Inside the cell', 'there': 'Seawater', 'what': 'carbon dioxide', 'hereCrowd': 14, 'thereCrowd': 5,
  'doors': [door('lipid', 'Out through the cell membrane', True, les='Sal por la membrana celular'),
            door('protein', 'Hide in the nucleus', False, 'The nucleus holds the cell’s instructions. Wastes do not belong there.', 'Escóndete en el núcleo', 'El núcleo guarda las instrucciones de la célula. Los desechos no van ahí.'),
            door('pump', 'Turn into sunlight', False, 'Matter cannot turn into sunlight. Carbon dioxide leaves the cell as a gas.', 'Conviértete en luz del sol', 'La materia no puede convertirse en luz del sol. El dióxido de carbono sale de la célula como gas.')],
  'explain': 'Wastes like carbon dioxide leave through the cell membrane, the same layer that lets food and oxygen in.',
  'es': {'you': 'dióxido de carbono, un desecho producido dentro de la célula', 'goal': 'Sal de la célula. ¡Los desechos deben salir!', 'here': 'Dentro de la célula', 'there': 'Agua de mar', 'what': 'dióxido de carbono',
         'explain': 'Los desechos como el dióxido de carbono salen por la membrana celular, la misma capa que deja entrar el alimento y el oxígeno.'}},
]
SEQUENCES = [
 {'id': 'seq1-sugar', 'code': B, 'title': 'How the parts of a leaf cell work together to get energy',
  'steps': ['Sunlight reaches the chloroplasts', 'The chloroplasts make sugar', 'The sugar moves through the cytoplasm', 'The mitochondria release energy from the sugar'],
  'hint': 'Start with the energy that comes from outside the cell.', 'explain': 'Chloroplasts make food, and mitochondria release its energy. The parts work together so the cell can live.',
  'es': {'title': 'Cómo trabajan juntas las partes de una célula de hoja para obtener energía',
         'steps': ['La luz del sol llega a los cloroplastos', 'Los cloroplastos producen azúcar', 'El azúcar se mueve por el citoplasma', 'Las mitocondrias liberan la energía del azúcar'],
         'hint': 'Empieza con la energía que viene de fuera de la célula.', 'explain': 'Los cloroplastos producen alimento y las mitocondrias liberan su energía. Las partes trabajan juntas para que la célula viva.'}},
 {'id': 'seq1-egg', 'code': A, 'title': 'From one cell to a salamander',
  'steps': ['A single egg cell', 'The cell divides into 2 cells', 'Those cells divide again and again', 'The cells become different types: skin, muscle, blood', 'A young salamander with millions of cells'],
  'hint': 'Every salamander begins as just one cell.', 'explain': 'One cell divides many times, and the new cells become specialized. That is how a multicellular organism grows.',
  'es': {'title': 'De una célula a una salamandra',
         'steps': ['Un solo óvulo (una célula)', 'La célula se divide en 2 células', 'Esas células se dividen una y otra vez', 'Las células se vuelven de distintos tipos: piel, músculo, sangre', 'Una salamandra joven con millones de células'],
         'hint': 'Toda salamandra empieza como una sola célula.', 'explain': 'Una célula se divide muchas veces y las células nuevas se especializan. Así crece un organismo multicelular.'}},
]
def mst(l, h, w, es): return {'label': l, 'hint': h, 'why': w, 'es': {'label': es[0], 'hint': es[1], 'why': es[2]}}
MAZES = [
 {'id': 'maze1-in', 'code': B, 'title': 'Travel into a plant cell: go through the doorway for the next layer', 'start': 'Outside the cell',
  'steps': [mst('Cell wall', 'What stiff layer is on the very outside of a plant cell?', 'The cell wall is the outer layer of a plant cell. It gives support.',
                ('Pared celular', '¿Qué capa rígida está en la parte más externa de una célula vegetal?', 'La pared celular es la capa externa de una célula vegetal. Da soporte.')),
            mst('Cell membrane', 'What thin layer, just inside the wall, controls what goes in and out?', 'The cell membrane is just inside the wall. It controls what enters and leaves.',
                ('Membrana celular', '¿Qué capa delgada, justo dentro de la pared, controla lo que entra y sale?', 'La membrana celular está justo dentro de la pared. Controla lo que entra y sale.')),
            mst('Cytoplasm', 'What jelly fills the cell?', 'Cytoplasm fills the cell, and the organelles float in it.',
                ('Citoplasma', '¿Qué gelatina llena la célula?', 'El citoplasma llena la célula y los organelos flotan en él.')),
            mst('Nucleus', 'What is the control center that holds the instructions?', 'The nucleus holds the cell’s genetic instructions and controls its activities.',
                ('Núcleo', '¿Cuál es el centro de control que guarda las instrucciones?', 'El núcleo guarda las instrucciones genéticas de la célula y controla sus actividades.'))],
  'extra': ['Bone', 'Heart', 'Soil'], 'explain': 'You traveled from the cell wall, through the membrane and cytoplasm, to the nucleus.',
  'es': {'title': 'Viaja dentro de una célula vegetal: cruza la puerta de la siguiente capa', 'start': 'Fuera de la célula', 'extra': ['Hueso', 'Corazón', 'Tierra'],
         'explain': 'Viajaste desde la pared celular, a través de la membrana y el citoplasma, hasta el núcleo.'}},
]
def ws(t, a, c, e, tes, aes, ees): return {'text': t, 'answer': a, 'code': c, 'explain': e, 'es': {'text': tes, 'answer': aes, 'explain': ees}}
WORDBANKS = [
 {'id': 'wb1-parts', 'code': B, 'words': ['nucleus', 'chloroplasts', 'cell membrane', 'mitochondria', 'cell wall', 'vacuole'],
  'sentences': [ws('The ___ controls the cell and holds its genetic instructions.', 'nucleus', B, 'The nucleus is the control center.', 'El ___ controla la célula y guarda sus instrucciones genéticas.', 'núcleo', 'El núcleo es el centro de control.'),
                ws('Plant cells make sugar from sunlight in their ___.', 'chloroplasts', B, 'Chloroplasts use sunlight to make food.', 'Las células vegetales producen azúcar con la luz del sol en sus ___.', 'cloroplastos', 'Los cloroplastos usan la luz del sol para producir alimento.'),
                ws('The ___ lets some materials in and keeps others out.', 'cell membrane', B, 'Every cell has a membrane that controls what goes in and out.', 'La ___ deja entrar algunas sustancias y no deja pasar otras.', 'membrana celular', 'Toda célula tiene una membrana que controla lo que entra y sale.'),
                ws('Cells get energy from food in their ___.', 'mitochondria', B, 'Mitochondria release the energy stored in food.', 'Las células obtienen energía de los alimentos en sus ___.', 'mitocondrias', 'Las mitocondrias liberan la energía guardada en los alimentos.'),
                ws('A stiff ___ helps a plant cell keep its shape.', 'cell wall', B, 'The cell wall supports plant cells.', 'Una ___ rígida ayuda a la célula vegetal a mantener su forma.', 'pared celular', 'La pared celular sostiene las células vegetales.')],
  'es': {'words': ['núcleo', 'cloroplastos', 'membrana celular', 'mitocondrias', 'pared celular', 'vacuola']}},
]
def clue(p, a, c, h, e, es, fig=None):
    d = {'prompt': p, 'answer': a, 'code': c, 'hint': h, 'explain': e, 'es': {'prompt': es[0], 'hint': es[1], 'explain': es[2]}}
    if fig: d['figure'] = fig; d['es']['figure'] = dict(fig, categories=SURVEY_ES, ylabel='Células vistas')
    return d
LABLOCKS = [
 {'id': 'lock1', 'title': 'Lab Lock', 'es': {'title': 'Candado del laboratorio'}, 'clues': [
   clue('Clue 1: How many of these are made of cells? Rock, moss, paramecium, sand, wood frog.', 3, A, 'Cross out the nonliving things.', 'Moss, the paramecium and the wood frog are made of cells: 3.',
        ('Pista 1: ¿Cuántos de estos están formados por células? Roca, musgo, paramecio, arena, rana de bosque.', 'Tacha las cosas inertes.', 'El musgo, el paramecio y la rana de bosque están formados por células: 3.')),
   clue('Clue 2: How many cells make up one paramecium?', 1, A, 'Remember the word unicellular.', 'A paramecium is unicellular: 1 cell.',
        ('Pista 2: ¿Cuántas células forman un paramecio?', 'Recuerda la palabra unicelular.', 'Un paramecio es unicelular: 1 célula.')),
   clue('Clue 3: How many of these parts do plant cells have but animal cells do not? Cell wall, nucleus, chloroplasts, mitochondria.', 2, B, 'Only two are found in plant cells alone.', 'The cell wall and chloroplasts: 2.',
        ('Pista 3: ¿Cuántas de estas partes tienen las células vegetales pero no las animales? Pared celular, núcleo, cloroplastos, mitocondrias.', 'Solo dos están únicamente en las células vegetales.', 'La pared celular y los cloroplastos: 2.')),
   clue('Clue 4: Look at the microscope survey again. How many samples showed at least one cell?', 4, A, 'Count every bar above zero.', 'Pond water, moss, onion skin and the salamander egg: 4.',
        ('Pista 4: Mira otra vez el estudio con microscopio. ¿Cuántas muestras mostraron al menos una célula?', 'Cuenta cada barra mayor que cero.', 'El agua de charca, el musgo, la piel de cebolla y el huevo de salamandra: 4.'),
        dict(type='bars', categories=SURVEY['categories'], values=SURVEY['values'], ylabel='Cells seen'))]},
]
