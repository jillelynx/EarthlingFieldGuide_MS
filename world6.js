/* WORLD 6 GAME FILE: Change Over Time (middle school edition).
   Standards (for teachers): 3.1.6-8.O patterns in the fossil record (existence, diversity, extinction, change), assuming natural laws work today as in the past;
   3.1.6-8.P anatomical similarities and differences among modern organisms and between modern and fossil organisms;
   3.1.6-8.Q pictorial data showing similarities not evident in the fully formed anatomy;
   3.1.6-8.S genetic variations increase some individuals' probability of surviving and reproducing in a specific environment;
   3.1.6-8.T mathematical representations of natural selection increasing and decreasing traits.
   Content (scans, questions, activities, English and Spanish) is in world6-questions.js.
   6-1 The canyon fossil dig (the high school game's dig): drill down through five rock layers, youngest on top.
   6-2 Wadi Al-Hitan, Whale Valley (Egypt): fossil whales with legs; homologous bones; scorpions and crumbling rock.
   6-3 Marine Biological Laboratory, Woods Hole (Massachusetts): embryo drawings (pictorial data); dive in the harbor.
   6-4 Daphne Major (Galápagos): the 1977 drought and the finches' beaks; Sally Lightfoot crabs and gulls.
   6-5 The mothership's Selection Simulator: graphs of traits over generations; the peppered moth side game; the Graph Gremlin boss; World 6 Lab Lock.
   Signs use FieldGuide.t('English', 'Español'). */
(function () {
const t = function (en, es) { return FieldGuide.t(en, es); };
FieldGuide.registerWorld({
  id: 6,
  title: 'Change Over Time', es: { title: 'El cambio con el tiempo' },
  levels: [
    { id: '6-1', title: 'Canyon Fossil Dig', theme: 'canyon', codes: ['3.1.6-8.O'],
      es: { title: 'Excavación de fósiles en el cañón', log: 'Diario de misión: las paredes del cañón son un libro de historia escrito en roca. Con mi taladro de mano puedo excavar hacia abajo por las capas. Cuanto más hondo excave, más atrás en el tiempo llegaré.',
            outro: 'Informe enviado: el registro fósil muestra qué seres vivos existieron, qué tan diversos eran, cuándo se extinguieron y cómo cambiaron. Las capas más profundas son las más antiguas.' },
      log: 'Mission log: The canyon walls are a history book written in rock. With my hand drill I can dig down through the layers. The deeper I dig, the further back in time I go.',
      outro: 'Report sent: the fossil record shows which living things existed, how diverse they were, when they went extinct and how they changed. The deepest layers are the oldest.',
      build: function (b) {
        /* FOSSIL DIG: dig freely DOWN through five rock layers, each older than the one above. Fossils are buried in the rock, hard boulders
           must be dug around, and loose boulders fall if you dig out what holds them up. Mineral samples go up to the lab in the capsules. */
        b.hint(5, 4.6, t('The canyon is a history book written in rock. Dig down through the layers!', 'El cañón es un libro de historia escrito en roca. ¡Excava hacia abajo por las capas!')).sparks(9, 1.2, 4).ground(14).review()
          .quest({ icon: '🐚', look: 'rock', color: '#e8dcc0', name: t('Find 4 fossil seashells', 'Encuentra 4 conchas fósiles'),
                   done: t('Fossil seashells are found high in mountains and deep in canyons. Those rocks formed on the floor of ancient seas.', 'Hay conchas fósiles en lo alto de las montañas y en lo hondo de los cañones. Esas rocas se formaron en el fondo de mares antiguos.') })
          .scan(3, 's6f-canyon').scan(8, 's6f-layers').qitem(11, 3.4).scan(14, 's6f-laws').ground(17)
          .readData('d6-kinds')
          .scan(3, 's6f-record').scan(8, 's6f-age').capsule(12.5).ground(15)
          .digField({ color: '#c8a878', fossils: [[3, 2, 's6f-mammoth']], ores: [[7, 1, 'quartz'], [1, 5, 'calcite']], boulders: [[5, 3, 1], [6, 3, 0], [8, 5, 0]] })
          .stratum({ name: t('Layer 1 · Ice Age', 'Capa 1 · Edad de Hielo'), sub: t('About 20,000 years ago. Near the top = youngest.', 'Hace unos 20,000 años. Cerca de arriba = la más joven.'), color: '#c8a878' })
          .rockfall(9, 4.2, 0).qitem(5, 3).capsule(14).ground(16)
          .station([{ sort: 'sort6-extinct', n: 4 }]).ground(4)
          .digField({ color: '#b88a5a', fossils: [[5, 3, 's6f-ambulo']], ores: [[2, 1, 'gypsum'], [8, 4, 'hematite']], boulders: [[4, 1, 0], [1, 3, 1], [7, 2, 0], [3, 5, 0]] })
          .stratum({ name: t('Layer 2 · Early whales', 'Capa 2 · Primeras ballenas'), sub: t('About 49 million years ago (fossils found in Pakistan)', 'Hace unos 49 millones de años (fósiles hallados en Pakistán)'), color: '#b88a5a' })
          .capsule(14).ground(16)
          .refuel().ground(4)
          .digField({ color: '#9a6a4a', fossils: [[2, 2, 's6f-dino']], ores: [[6, 4, 'hematite'], [8, 1, 'quartz']], boulders: [[5, 1, 1], [5, 2, 0], [1, 4, 0], [7, 5, 1]] })
          .stratum({ name: t('Layer 3 · Dinosaurs', 'Capa 3 · Dinosaurios'), sub: t('About 68 million years ago (like Montana’s Hell Creek rocks)', 'Hace unos 68 millones de años (como las rocas de Hell Creek, en Montana)'), color: '#9a6a4a' })
          .rockfall(8, 3.6, 0.4).qitem(5, 3).capsule(13).ground(16)
          .readData('d6-trilo').ground(4)
          .digField({ color: '#8a7a6a', fossils: [[6, 3, 's6f-tiktaalik']], ores: [[2, 2, 'calcite'], [4, 5, 'pyrite']], boulders: [[3, 1, 0], [8, 2, 1], [1, 4, 0]] })
          .stratum({ name: t('Layer 4 · Fish with legs', 'Capa 4 · Peces con patas'), sub: t('About 375 million years ago (Tiktaalik, Ellesmere Island, Canada)', 'Hace unos 375 millones de años (Tiktaalik, isla de Ellesmere, Canadá)'), color: '#8a7a6a' })
          .rockfall(9, 3.8, 1.2).capsule(13).ground(16)
          .mixed(2, ['3.1.6-8.D', '3.1.6-8.M', '3.1.6-8.N', '3.1.6-8.R'])
          .station(['ms6q04', 'ms6q48']).ground(4)
          .digField({ color: '#6a7a8a', fossils: [[3, 2, 's6f-trilobite']], ores: [[7, 3, 'pyrite'], [1, 5, 'calcite']], boulders: [[5, 2, 0], [6, 4, 1]],
            rare: [0, 6, { name: t('Hallucigenia fossil', 'Fósil de Hallucigenia'), fact: t('A tiny spiky Burgess Shale animal. Scientists first drew it upside down and back to front. New fossils showed the mistake: science corrects itself with evidence.', 'Un animalito con espinas de Burgess Shale. Los científicos primero lo dibujaron al revés y de atrás para adelante. Nuevos fósiles mostraron el error: la ciencia se corrige con evidencia.') }] })
          .stratum({ name: t('Layer 5 · Early sea animals', 'Capa 5 · Primeros animales marinos'), sub: t('About 500 million years ago (like the Burgess Shale, Canada)', 'Hace unos 500 millones de años (como Burgess Shale, en Canadá)'), color: '#6a7a8a' })
          .rockfall(9, 3.2, 1).qitem(6, 3).capsule(13).ground(16)
          .sequence('seq6-layers').ground(3)
          .caveEnd().ground(10)
          .goal();
      } },
    { id: '6-2', title: 'Whale Valley', theme: 'desert', codes: ['3.1.6-8.P'],
      es: { title: 'El Valle de las Ballenas', log: 'Diario de misión: Wadi Al-Hitan, el Valle de las Ballenas, en el desierto de Egipto. Aquí hay esqueletos de ballenas con patas. ¿Qué nos dicen sus huesos sobre el parentesco de las ballenas con otros animales?',
            outro: 'Informe enviado: las ballenas fósiles comparten huesos con los animales terrestres y con las ballenas modernas. Las semejanzas muestran parentescos y las diferencias muestran cómo cambiaron.' },
      log: 'Mission log: Wadi Al-Hitan, Whale Valley, in the desert of Egypt. There are whale skeletons here with legs. What do their bones tell us about how whales are related to other animals?',
      outro: 'Report sent: fossil whales share bones with land animals and with modern whales. The similarities show relationships, and the differences show how they changed.',
      build: function (b) {
        b.hint(5, 4.6, t('Whale Valley, in the desert of Egypt. This sand was once a sea!', 'El Valle de las Ballenas, en el desierto de Egipto. ¡Esta arena fue un mar!')).sparks(9, 1.2, 4).ground(14).review()
          .quest({ icon: '🦴', look: 'rod', color: '#e8dcc0', name: t('Find 4 whale vertebrae', 'Encuentra 4 vértebras de ballena'),
                   done: t('Wadi Al-Hitan is a World Heritage Site. Hundreds of fossil whale skeletons lie in its sand, some with their tiny back legs still in place.', 'Wadi Al-Hitan es Patrimonio de la Humanidad. Cientos de esqueletos fósiles de ballenas yacen en su arena, algunos todavía con sus patas traseras diminutas.') })
          .scan(3, 's6w-valley').scan(8, 's6w-basilo').ground(11)
          .hint(-4, 4.6, t('A scorpion! Jump over it.', '¡Un escorpión! Salta por encima.')).hazard(-1.5, 0.25, { look: 'scorpion', ax: 1.4, ay: 0, sp: 0.7 })
          .scan(4, 's6w-limbs').qitem(7, 3.4).scan(10, 's6w-ancestor').ground(13)
          .hunt('h6-arm')
          .rise(1.4).ground(5).rise(1.4).ground(6)
          .scan(3, 's6w-paki').scan(8, 's6w-ankle').ground(11)
          .maze('maze6-whale')
          .hint(1, 4.8, t('Wind-carved rocks are crumbling! Watch for the dust, then run.', '¡Las rocas talladas por el viento se desmoronan! Mira el polvo y luego corre.')).rockfall(5, 3.5, 0).rockfall(10, 3.5, 1.6).ground(14)
          .scan(3, 's6w-hippo').scan(8, 's6w-differ').qitem(11, 0.5).ground(13)
          .readData('d6-legs')
          .station(['ms6q11', 'ms6q12'])
          .refuel().scan(3, 's6w-modern').ground(6)
          .hazard(5, 0.25, { look: 'scorpion', ax: 1.8, ay: 0, sp: 0.8 }).qitem(9, 3.6).ground(13)
          .plat(3, 2.4, 2.6).plat(6.5, 4.4, 2.6).plat(10, 6.4, 2.6).hplat(13.5, 8.4, 2.6)
          .rare(14.8, 9.7, { name: t('Fossil shark tooth', 'Diente de tiburón fósil'), fact: t('Sharks lose and replace teeth all their lives, so fossil shark teeth are common here. They are more evidence that this desert was once a shallow sea.', 'Los tiburones pierden y reponen dientes toda su vida, así que aquí abundan los dientes fósiles de tiburón. Son más evidencia de que este desierto fue un mar poco profundo.') })
          .qitem(17, 0.5).ground(19)
          .crumbleBridge(4, 'crumble').mixed(2, ['3.1.6-8.O'])
          .station(['ms6q13', 'ms6q16'])
          .goal();
      } },
    { id: '6-3', title: 'Woods Hole Marine Lab', theme: 'harbor', codes: ['3.1.6-8.Q'],
      es: { title: 'Laboratorio marino de Woods Hole', log: 'Diario de misión: el Laboratorio de Biología Marina de Woods Hole, en Massachusetts. Los científicos comparan dibujos de embriones de muchos animales. ¿Qué parecidos esconden los adultos?',
            outro: 'Informe enviado: los embriones tempranos de peces, aves y mamíferos comparten una cola y bolsas branquiales. Estas semejanzas, escondidas en los adultos, revelan que están emparentados.' },
      log: 'Mission log: The Marine Biological Laboratory in Woods Hole, Massachusetts. Scientists compare drawings of embryos from many animals. What similarities do the adults hide?',
      outro: 'Report sent: early embryos of fish, birds and mammals share a tail and gill pouches. These similarities, hidden in the adults, reveal that they are related.',
      build: function (b) {
        b.hint(5, 4.6, t('The Marine Biological Laboratory, Woods Hole.', 'El Laboratorio de Biología Marina de Woods Hole.')).sparks(9, 1.2, 4).ground(14).review()
          .quest({ icon: '🦑', look: 'critter', color: '#ff9f8a', name: t('Spot 4 longfin squid', 'Encuentra 4 calamares de aleta larga'),
                   done: t('Scientists at Woods Hole have studied squid for nearly a century. Their giant nerve fibers taught us how nerves send messages.', 'Los científicos de Woods Hole estudian calamares desde hace casi un siglo. Sus fibras nerviosas gigantes nos enseñaron cómo los nervios envían mensajes.') })
          .scan(3, 's6e-mbl').scan(8, 's6e-zebra').ground(11)
          .hint(-4, 4.6, t('Gulls patrol the docks. Duck under them!', 'Las gaviotas recorren los muelles. ¡Agáchate!')).hazard(-1, 2.6, { look: 'gull', ax: 2.2, ay: 0.5, sp: 1.2 })
          .scan(4, 's6e-pouches').qitem(7, 3.4).scan(10, 's6e-tail').ground(13)
          .station(['ms6q19', 'ms6q20'])
          .become('b6-embryo')
          .scan(3, 's6e-bud').scan(8, 's6e-adult').ground(11)
          .station([{ sort: 'sort6-when', n: 4 }])
          .hint(1, 4.6, t('Dive off the dock into the harbor! Jump to swim up.', '¡Lánzate del muelle al puerto! Salta para nadar hacia arriba.')).ground(3).sea(-0.6).gap(1).rise(-6)
          .scan(4, 's6e-horseshoe').hazard(9, 3, { look: 'jelly', ax: 1, ay: 1.2, sp: 0.6 }).qitem(12, 2).hazard(15, 0.35, { look: 'crab', ax: 1.0, ay: 0, sp: 0.6 }).ground(19)
          .scan(4, 's6e-pictorial').qitem(8, 3).ground(12)
          .hplat(3, 2.4, 2.6).hplat(6, 4.4, 2.6)
          .rare(7.3, 5.7, { name: t('Skate egg case', 'Cápsula de huevo de raya'), fact: t('Skates lay their eggs in leathery cases nicknamed mermaid’s purses. Each embryo grows inside for months before it hatches.', 'Las rayas ponen sus huevos en cápsulas de cuero llamadas bolsas de sirena. Cada embrión crece adentro durante meses antes de salir.') })
          .qitem(10, 2).ground(13)
          .shore().rise(6).ground(8)
          .hint(1, 4.6, t('Back on the dock! Careful: these old boards crumble.', '¡De vuelta en el muelle! Cuidado: estas tablas viejas se desmoronan.')).ground(8)
          .crumbleBridge(4, 'mix').mixed(2, ['3.1.6-8.O', '3.1.6-8.P'])
          .station(['ms6q21', 'ms6q24'])
          .goal();
      } },
    { id: '6-4', title: 'Daphne Major Finches', theme: 'island', codes: ['3.1.6-8.S'],
      es: { title: 'Los pinzones de Daphne Mayor', log: 'Diario de misión: Daphne Mayor, una pequeña isla de Galápagos. Empezó la sequía de 1977. Los pinzones no son todos iguales. ¿Quiénes sobrevivirán, y por qué importa para sus crías?',
            outro: 'Informe enviado: en la sequía, las aves de pico grueso pudieron comer las semillas duras y sobrevivieron más. Pasaron el rasgo a sus crías, así que la población cambió.' },
      log: 'Mission log: Daphne Major, a tiny island in the Galápagos. The drought of 1977 has begun. The finches are not all the same. Who will survive, and why does it matter for their offspring?',
      outro: 'Report sent: in the drought, deep-beaked birds could eat the hard seeds and survived more often. They passed the trait to their chicks, so the population changed.',
      build: function (b) {
        b.hint(5, 4.6, t('Daphne Major, Galápagos. The drought has begun.', 'Daphne Mayor, Galápagos. Empezó la sequía.')).sparks(9, 1.2, 4).ground(14).review()
          .quest({ icon: '🐦', look: 'critter', color: '#4a3a2a', name: t('Count 4 banded finches', 'Cuenta 4 pinzones anillados'),
                   done: t('The Grants put colored bands on the finches’ legs, so they could follow each bird’s whole life and count its chicks.', 'Los Grant les pusieron anillos de colores en las patas a los pinzones, para seguir la vida de cada ave y contar sus polluelos.') })
          .scan(3, 's6i-daphne').scan(8, 's6i-finch').ground(11)
          .hint(-4, 4.6, t('Sally Lightfoot crabs scuttle over the rocks. Jump over them!', 'Los cangrejos zayapa corren sobre las rocas. ¡Salta por encima!')).hazard(-1.5, 0.35, { look: 'redcrab', ax: 1.6, ay: 0, sp: 1.1 })
          .scan(4, 's6i-drought').qitem(7, 3.4).scan(10, 's6i-caltrop').ground(13)
          .become('b6-finch')
          .rise(1.4).ground(5).rise(1.4).ground(6)
          .scan(3, 's6i-advantage').scan(8, 's6i-survive').ground(11)
          .readData('d6-survive')
          .station([{ sort: 'sort6-help', n: 4 }])
          .refuel().scan(3, 's6i-chicks').scan(8, 's6i-specific').qitem(11, 0.5).ground(13)
          .readData('d6-depth')
          .sequence('seq6-select')
          .hazard(5, 2.6, { look: 'gull', ax: 2.2, ay: 0.5, sp: 1.2 }).hazard(10, 0.35, { look: 'redcrab', ax: 1.4, ay: 0, sp: 1.2 }).qitem(13, 3.6).ground(16)
          .scan(3, 's6i-booby').ground(6)
          .plat(3, 2.4, 2.6).plat(6.5, 4.4, 2.6).plat(10, 6.4, 2.6).hplat(13.5, 8.4, 2.6)
          .rare(14.8, 9.7, { name: t('“Big Bird” finch', 'Pinzón “Big Bird”'), fact: t('In 1981 a larger finch from another island landed here and bred with the local finches. His descendants became a new, separate group, and scientists watched it form.', 'En 1981, un pinzón más grande de otra isla llegó aquí y se reprodujo con los pinzones locales. Sus descendientes formaron un grupo nuevo y separado, y los científicos vieron cómo se formaba.') })
          .qitem(17, 0.5).ground(19)
          .crumbleBridge(4, 'mix').mixed(2, ['3.1.6-8.O', '3.1.6-8.P', '3.1.6-8.Q'])
          .station(['ms6q27', 'ms6q32'])
          .goal();
      } },
    { id: '6-5', title: 'The Selection Simulator', theme: 'space', codes: ['3.1.6-8.T'],
      es: { title: 'El simulador de selección', log: 'Diario de misión: de vuelta en la nave nodriza para mi último informe. El Simulador de Selección puede correr cientos de generaciones en minutos. ¿Puedo usar gráficas y números para explicar cómo la selección natural cambia los rasgos?',
            outro: 'Informe enviado: las gráficas de un rasgo a lo largo de las generaciones muestran que la selección natural puede aumentarlo o disminuirlo, según el ambiente. ¡Misión en la Tierra completa!' },
      log: 'Mission log: Back aboard the mothership for my last report. The Selection Simulator can run hundreds of generations in minutes. Can I use graphs and numbers to explain how natural selection changes traits?',
      outro: 'Report sent: graphs of a trait over many generations show that natural selection can increase it or decrease it, depending on the environment. Earth mission complete!',
      build: function (b) {
        b.hint(5, 4.6, t('Aboard the mothership: the Selection Simulator deck.', 'A bordo de la nave nodriza: la cubierta del Simulador de Selección.')).sparks(9, 1.2, 4).ground(14).review()
          .quest({ icon: '💾', look: 'atom', color: '#9fe8ff', name: t('Collect 4 data chips', 'Recoge 4 chips de datos'),
                   done: t('Your data chips hold every graph you made. Scientists share their data so that others can check their work.', 'Tus chips de datos guardan todas las gráficas que hiciste. Los científicos comparten sus datos para que otros puedan revisar su trabajo.') })
          .scan(3, 's6s-deck').scan(8, 's6s-gen').ground(11)
          .scan(3, 's6s-graph').qitem(6, 3.4).scan(9, 's6s-percent').ground(12)
          .readData('d6-moths')
          .scan(3, 's6s-moth').scan(8, 's6s-bacteria').ground(11)
          .station(['ms6q37', 'ms6q38'])
          .station([{ sort: 'sort6-trend', n: 4 }])
          .refuel().scan(3, 's6s-decrease').qitem(6, 0.5).ground(9)
          .wordbank('wb6-select')
          .hint(1, 4.8, t('Ride the moving platforms across the deck!', '¡Súbete a las plataformas que se mueven por la cubierta!')).bridge(11, { sp: 1.0 }).qitem(-5.5, 3.2).ground(4).bridge(11, { ay: 1.4, sp: 1.1 })
          .clue(3, 'ms6q39').ground(6).clue(2, 'ms6q40').ground(7).clue(2, 'ms6q47').ground(5)
          .hint(1, 6.6, t('Side game! The portal’s code is the letters of your 3 clue answers.', '¡Juego extra! El código del portal son las letras de tus 3 respuestas a las pistas.')).portal(6, 'sim').ground(11)
          .plat(3, 2.4, 2.6).plat(6.5, 4.4, 2.6).hplat(10, 6.4, 2.6)
          .rare(11.3, 7.7, { name: t('Moth collector’s drawer', 'Cajón de un coleccionista de polillas'), fact: t('In 1848 a collector near Manchester, England, recorded one of the first dark peppered moths. By 1895, almost all the peppered moths there were dark.', 'En 1848, un coleccionista cerca de Manchester, Inglaterra, registró una de las primeras polillas moteadas oscuras. Para 1895, casi todas las polillas moteadas de allí eran oscuras.') })
          .qitem(14, 0.5).ground(16)
          .crumbleBridge(4, 'mix').mixed(2, ['3.1.6-8.S'])
          .hint(1, 6.6, t('The Graph Gremlin scrambled the simulator! Answer to fix the graphs.', '¡El Duende de las Gráficas desordenó el simulador! Responde para arreglar las gráficas.'))
          .boss(t('The Graph Gremlin', 'El Duende de las Gráficas'), 'boss6', 8, 2, ['3.1.6-8.O', '3.1.6-8.P', '3.1.6-8.Q', '3.1.6-8.S'])
          .hint(1, 6.6, t('World 6 Lab Lock: solve the clues to open the last gate.', 'Candado del Mundo 6: resuelve las pistas para abrir la última puerta.'))
          .lablock('lock6')
          .goal();
      } }
  ]
});
})();
