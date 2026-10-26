/* WORLD 1 GAME FILE: What Living Things Are Made Of (middle school edition).
   Standards (for teachers): 3.1.6-8.A living things are made of cells; 3.1.6-8.B cell parts and their functions.
   Content (scans, questions, activities, English and Spanish) is in world1-questions.js.
   Each level is a real place and plays differently:
   1-1 Pocono vernal pool (Pennsylvania): walk and hop; collect samples; microscope data; mosquitoes and amoebas.
   1-2 Deep-sea hydrothermal vent: swim down through the ocean zones in the dark; build a bacterium; jellies and anglerfish.
   1-3 Backyard garden: travel into a plant cell (maze); build a plant cell; yellowjackets and crumbling flower pots.
   1-4 Rocky tide pool (Acadia National Park, Maine): dive into the pool; become oxygen and carbon dioxide; crabs, urchins and waves.
   Signs use FieldGuide.t('English', 'Español'). */
(function () {
const t = function (en, es) { return FieldGuide.t(en, es); };
FieldGuide.registerWorld({
  id: 1,
  title: 'What Living Things Are Made Of', es: { title: 'De qué están hechos los seres vivos' },
  levels: [
    { id: '1-1', title: 'Pocono Vernal Pool', theme: 'pond', codes: ['3.1.6-8.A'],
      es: { title: 'Charca temporal de los Pocono', log: 'Diario de misión: aterricé junto a una charca temporal en un bosque de Pensilvania. Primera pregunta: ¿de qué están hechos los seres vivos? Busca evidencia con el microscopio.',
            outro: 'Informe enviado: todo ser vivo está formado por células. Algunos son de una sola célula y otros de muchas células de muchos tipos.' },
      log: 'Mission log: Landed beside a vernal pool in a Pennsylvania forest. First question for the report home: what are living things made of? Look for evidence with the microscope.',
      outro: 'Report sent: every living thing is made of cells. Some are one cell, and some are made of many cells of many types.',
      build: function (b) {
        /* teaches the controls by playing: move, jump, double jump, scan, duck; then collect, sort and read data */
        b.hint(5, 4.4, t('Move: arrow keys or A and D. Hold Shift to run!', 'Muévete: flechas o A y D. ¡Mantén Shift para correr!'))
          .hint(12, 4.6, t('Jump: space bar. Tap it again in the air to double jump!', 'Salta: barra espaciadora. ¡Tócala otra vez en el aire para un doble salto!'))
          .qblock(17, 3.4, 'sparks').ground(21)
          .quest({ icon: '🥚', look: 'eggs', color: '#cfe6ff', name: t('Count the spotted salamander egg masses', 'Cuenta las masas de huevos de salamandra'),
                   done: t('Scientists count egg masses every spring to check on the health of a vernal pool.', 'Los científicos cuentan las masas de huevos cada primavera para revisar la salud de una charca temporal.') })
          .hint(3, 4.8, t('See a 🔍? Walk up and press E to scan it and learn a new word!', '¿Ves una 🔍? Acércate y pulsa E para escanearla y aprender una palabra nueva.'))
          .scan(8, 's1-pool').scan(12.5, 's1-frog').qitem(16, 0.5).ground(19)
          .hint(-5, 4.6, t('Mosquitoes! Dodge them or duck under them.', '¡Mosquitos! Esquívalos o agáchate debajo de ellos.')).hazard(-2.5, 1.3, { look: 'mosquito', ax: 1.6, ay: 0.4, sp: 1.2 })
          .arc(-2.5, 7, 2.6).gap(3.5).ground(12)
          .scan(3, 's1-cell').scan(8, 's1-scope').ground(11)
          .hint(1, 4.6, t('A fallen log! Duck (down arrow or S) and crawl under it.', '¡Un tronco caído! Agáchate (flecha abajo o S) y arrástrate por debajo.')).squeeze(5, 4).ground(12)
          .scan(3, 's1-param').scan(8, 's1-moss').scan(13, 's1-bact').qitem(16, 3.4).ground(18)
          .rise(1.5).ground(6).rise(1.5).sparks(1, 1.2, 4).ground(6)
          .hplat(-5.8, 2.4, 2.8).hplat(-3.4, 4.8, 2.8).hplat(-1, 8.4, 2.6)
          .rare(0.3, 9.7, { name: t('Fairy shrimp', 'Camarón hada'), fact: t('Fairy shrimp live only in pools that dry up. Their eggs survive the dry summer in the mud and hatch when the pool fills again.', 'Los camarones hada solo viven en charcas que se secan. Sus huevos sobreviven al verano seco en el lodo y nacen cuando la charca se llena otra vez.') })
          .refuel().gap(3.5).rise(-3)
          .hint(2, 4.6, t('Hungry amoebas pop up on a beat to engulf food. Jump when they hide!', 'Las amebas hambrientas salen a un ritmo para atrapar comida. ¡Salta cuando se escondan!')).snapper(5, 4, 0).ground(9)
          .scan(3, 's1-rock').scan(8, 's1-log').qitem(11, 0.5).ground(13)
          .hunt('h1-cells')
          .qblock(3, 3.4, 'boost').ground(8)
          .crumbleBridge(3, 'crumble').station([{ sort: 'sort1-count', n: 4 }])
          .scan(3, 's1-eggs').scan(8, 's1-types').scan(13, 's1-evid').ground(16)
          .readData('d1-scope')
          .hazard(5, 1.2, { look: 'mosquito', ax: 2, ay: 0.5, sp: 1.4 }).qitem(9, 0.5).snapper(12, 3.5, 1.2).ground(16).hsparks(-9, 6.4, 5)
          .sequence('seq1-egg')
          .station(['ms1q01', 'ms1q03'])
          .goal();
      } },
    { id: '1-2', title: 'Deep-Sea Vent', theme: 'deep', codes: ['3.1.6-8.A', '3.1.6-8.B'],
      es: { title: 'Fuente hidrotermal profunda', log: 'Diario de misión: un barco de investigación en alta mar. Húndete por las zonas del océano hasta las fuentes hidrotermales. ¿Qué vive allá abajo, en la oscuridad, y de cuántas células está hecho?',
            outro: 'Informe enviado: hasta en el fondo oscuro del mar, los seres vivos están hechos de células. Los microbios son de una célula; los gusanos de tubo y los peces, de muchos tipos de células.' },
      log: 'Mission log: A research ship far out at sea. Sink through the ocean zones to the hydrothermal vents. What lives down there in the dark, and how many cells is it made of?',
      outro: 'Report sent: even on the dark sea floor, living things are made of cells. Microbes are one cell; tube worms and fish are made of many types of cells.',
      build: function (b) {
        /* DEEP SEA: no sunlight below the twilight zone; the alien's antennae glow and scans show up only near its light */
        b.hint(5, 4.6, t('A research ship over the deep ocean. Dive in and sink to the vents!', 'Un barco de investigación sobre el océano profundo. ¡Lánzate y húndete hasta las fuentes!')).sparks(8, 1.2, 3).ground(13).ship(13).review()
          .quest({ icon: '🧫', look: 'rod', color: '#ffd08a', name: t('Collect microbe samples for the ship’s lab', 'Recoge muestras de microbios para el laboratorio del barco'),
                   done: t('Each sample holds millions of one-celled bacteria and archaea.', 'Cada muestra tiene millones de bacterias y arqueas de una sola célula.') })
          .sea(-0.6).gap(1).rise(-10)
          .oceanZone(t('Sunlit zone', 'Zona iluminada'), t('0 to 200 m deep. Enough light for photosynthesis.', 'De 0 a 200 m de profundidad. Hay luz suficiente para la fotosíntesis.'))
          .scan(5, 's1d-diatom').scan(10, 's1d-jelly').hazard(15, 4, { look: 'jelly', ax: 1, ay: 1.4, sp: 0.6 }).ground(19)
          .rise(-8)
          .oceanZone(t('Twilight zone', 'Zona crepuscular'), t('200 to 1,000 m deep. Only dim blue light. Many animals glow.', 'De 200 a 1,000 m. Solo hay una luz azul tenue. Muchos animales brillan.'))
          .glowers(8, 5, 'lantern').scan(4, 's1d-lantern').qitem(9, 3).ground(14)
          .station([{ sort: 'sort1-vent', n: 3 }])
          .glowers(4, 4, 'comb').hazard(10, 3, { look: 'jelly', ax: 0.8, ay: 1.2, sp: 0.5 }).ground(14)
          .rise(-8).abyss(5)
          .oceanZone(t('Midnight zone', 'Zona de medianoche'), t('1,000 to 4,000 m deep. Totally dark and near freezing.', 'De 1,000 a 4,000 m. Totalmente oscura y casi helada.'))
          .glowers(6, 4, 'snow', 10).scan(4, 's1d-angler').hazard(13, 3.5, { look: 'angler', ax: 3, ay: 0.6, sp: 0.4 }).qitem(9, 2.5).ground(18)
          .refuel().mixed(2, ['3.1.6-8.A'])
          .rise(-10)
          .oceanZone(t('Hydrothermal vents', 'Fuentes hidrotermales'), t('About 2,500 m deep. Hot, mineral-rich water gushes from the sea floor.', 'A unos 2,500 m. Agua caliente y llena de minerales brota del fondo del mar.')).ventField(80)
          .glowers(10, 6, 'snow', 8).scan(4, 's1d-mat').scan(9, 's1d-archaea').qitem(12, 0.8).scan(15, 's1d-tube').ground(19)
          .smoker(3, 4.2, 9).plat(6.5, 8.5, 3.5).rare(8.2, 9.6, { look: 'yeticrab', name: t('Yeti crab', 'Cangrejo yeti'), fact: t('Yeti crabs were first discovered in 2005. They grow bacteria on their hairy arms and eat them. One kind waves its arms over the vents to help the bacteria grow.', 'Los cangrejos yeti se descubrieron en 2005. Cultivan bacterias en sus brazos peludos y se las comen. Un tipo agita los brazos sobre las fuentes para que las bacterias crezcan.') }).ground(12)
          .scan(3, 's1d-plume').qitem(7, 1).ground(10)
          .hunt('h1-bact')
          .station(['ms1q08', 'ms1q10'])
          .smoker(4, 3.4, 6.2).hazard(10, 3.5, { look: 'atolla', ax: 0.6, ay: 1.4, sp: 0.5 }).qitem(13, 1).ground(16)
          .hint(3, 5.2, t('The mothership beam reaches all the way down here!', '¡El rayo de la nave nodriza llega hasta aquí abajo!')).ground(6)
          .goal();
      } },
    { id: '1-3', title: 'Backyard Garden', theme: 'garden', codes: ['3.1.6-8.B'],
      es: { title: 'Jardín del patio', log: 'Diario de misión: un jardín en Pensilvania. Tengo un rayo para encogerme. Voy a viajar dentro de una célula vegetal y descubrir el trabajo de cada parte.',
            outro: 'Informe enviado: cada parte de la célula tiene un trabajo. La pared, la membrana, el núcleo, los cloroplastos, las vacuolas y las mitocondrias trabajan juntos para mantener viva la célula.' },
      log: 'Mission log: A backyard garden in Pennsylvania. My shrink ray is charged. Travel into a plant cell and find out what job each part does.',
      outro: 'Report sent: every cell part has a job. The wall, membrane, nucleus, chloroplasts, vacuole and mitochondria work together to keep the cell alive.',
      build: function (b) {
        b.hint(5, 4.6, t('A backyard garden. Scan the plants, then shrink down into a cell!', 'Un jardín. ¡Escanea las plantas y luego encógete hasta una célula!')).sparks(8, 1.2, 4).ground(14).review()
          .quest({ icon: '🌻', look: 'sprout', color: '#ffd166', name: t('Return the lost seed packets to the garden shed', 'Devuelve los sobres de semillas perdidos al cobertizo'),
                   done: t('Every seed is made of cells. The nucleus of each cell holds the instructions for growing a new plant.', 'Toda semilla está formada por células. El núcleo de cada célula guarda las instrucciones para formar una planta nueva.') })
          .scan(3, 's1g-onion').scan(8, 's1g-wall').qitem(11, 0.5).ground(14)
          .hint(-4, 4.8, t('Yellowjackets! Walk under them, and do not jump into them.', '¡Avispas! Camina por debajo de ellas y no saltes contra ellas.')).hazard(-1.5, 2.7, { look: 'wasp', ax: 2.2, ay: 0.4, sp: 1.1 })
          .rise(1.2).ground(5).rise(1.2).qblock(2.5, 3.4, 'shield').ground(5)
          .crumbleBridge(3, 'crumble')
          .scan(3, 's1g-mem').scan(8, 's1g-cyto').scan(13, 's1g-nuc').ground(16)
          .maze('maze1-in')
          .sparks(0.5, 8.5, 5).ground(7).qitem(4, 3.4).ground(4)
          .scan(3, 's1g-chloro').scan(8, 's1g-vac').scan(13, 's1g-mito').ground(16)
          .bridge(11).hazard(5, 2.8, { look: 'wasp', ax: 2.5, ay: 0.4, sp: 1.3 }).ground(12)
          .station([{ sort: 'sort1-pa', n: 4 }])
          .hplat(-7, 2.4, 3).hplat(-4.5, 4.8, 3).hplat(-2, 8.4, 2.6)
          .rare(-0.7, 9.7, { name: t('Monarch caterpillar', 'Oruga monarca'), fact: t('Monarch caterpillars eat only milkweed leaves. Every cell of the caterpillar is an animal cell, with no cell wall.', 'Las orugas monarca solo comen hojas de algodoncillo. Cada célula de la oruga es una célula animal, sin pared celular.') })
          .refuel().scan(3, 's1g-animal').scan(8, 's1g-organelle').scan(13, 's1g-model').qitem(16, 0.5).ground(18)
          .hunt('h1-plant')
          .crumbleBridge(4, 'mix').mixed(2, ['3.1.6-8.A'])
          .wordbank('wb1-parts')
          .hazard(4, 2.7, { look: 'wasp', ax: 1.8, ay: 0.4, sp: 1.5 }).qitem(8, 0.5).qblock(11, 3.4, 'life').ground(14)
          .sequence('seq1-sugar')
          .station(['ms1q12', 'ms1q14'])
          .goal();
      } },
    { id: '1-4', title: 'Rocky Tide Pool', theme: 'shore', codes: ['3.1.6-8.B'],
      es: { title: 'Poza de marea rocosa', log: 'Diario de misión: la costa rocosa del Parque Nacional Acadia, en Maine. La marea está baja. Cada animal de la poza es un equipo de células. ¿Cómo trabajan juntas sus partes?',
            outro: 'Informe enviado: la membrana deja entrar oxígeno y alimento y deja salir los desechos, y las partes de la célula trabajan juntas para que toda la célula viva.' },
      log: 'Mission log: The rocky coast of Acadia National Park, Maine. The tide is out. Every tide pool animal is a team of cells. How do their parts work together?',
      outro: 'Report sent: the membrane lets oxygen and food in and wastes out, and the parts of a cell work together so the whole cell can live.',
      build: function (b) {
        b.hint(5, 4.6, t('Low tide on the coast of Maine. Explore the tide pool!', 'Marea baja en la costa de Maine. ¡Explora la poza de marea!')).sparks(8, 1.2, 3).ground(14).review()
          .quest({ icon: '🐚', look: 'critter', color: '#8a6a4a', name: t('Spot the periwinkle snails', 'Encuentra los caracoles bígaros'),
                   done: t('Periwinkles graze on algae on the rocks. Their cells release energy from that food.', 'Los bígaros comen algas de las rocas. Sus células liberan energía de ese alimento.') })
          .scan(3, 's1t-rockweed').scan(8, 's1t-barnacle').qitem(11, 0.5).ground(14)
          .hint(-5, 4.6, t('Green crabs scuttle over the rocks. Jump over them!', 'Los cangrejos verdes corren sobre las rocas. ¡Salta por encima!')).hazard(-2, 0.35, { look: 'crab', ax: 1.6, ay: 0, sp: 1.1 })
          .gap(2.8).ground(6).hazard(3, 0.9, { look: 'wave', ax: 2.2, ay: 0, sp: 0.9 }).gap(2.8).ground(8)
          .scan(3, 's1t-snail').scan(8, 's1t-star').ground(11)
          .hint(1, 4.6, t('Dive into the tide pool! Jump to swim up, duck to dive.', '¡Lánzate a la poza! Salta para nadar hacia arriba y agáchate para bucear.'))
          .ground(3).sea(-0.5).gap(1).rise(-5)
          .scan(4, 's1t-anemone').hazard(8, 0.45, { look: 'urchin', ax: 0, ay: 0 }).scan(12, 's1t-salt').qitem(15, 2).hazard(18, 0.35, { look: 'crab', ax: 1.0, ay: 0, sp: 0.6 }).ground(22)
          .scan(7, 's1t-plankton').qitem(10, 3.2).hazard(13, 0.45, { look: 'urchin', ax: 0, ay: 0 }).ground(17)
          .hplat(-6, 3.2, 2.6).rare(-4.8, 4.3, { name: t('Blood star', 'Estrella de sangre'), fact: t('A small, bright red sea star that lives in cold northern tide pools. Like every sea star, it is made of many types of cells.', 'Una estrella de mar pequeña y roja que vive en pozas frías del norte. Como toda estrella de mar, está formada por muchos tipos de células.') })
          .shore().rise(5).ground(10)
          .refuel().become('b1-oxygen')
          .gap(2.8).ground(5).hazard(2.5, 0.35, { look: 'crab', ax: 1.4, ay: 0, sp: 1.3 }).ground(6)
          .become('b1-waste')
          .crumbleBridge(4, 'mix').mixed(3, ['3.1.6-8.A', '3.1.6-8.B'])
          .hazard(4, 0.9, { look: 'wave', ax: 2.6, ay: 0, sp: 1.1 }).qitem(8, 3.4).qblock(11, 3.4, 'shield').ground(14)
          .station(['ms1q18', 'ms1q19'])
          .hint(1, 6.6, t('World 1 Lab Lock: solve the clues to open the last gate.', 'Candado del Mundo 1: resuelve las pistas para abrir la última puerta.'))
          .lablock('lock1')
          .goal();
      } }
  ]
});
})();
