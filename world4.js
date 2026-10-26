/* WORLD 4 GAME FILE: Ecosystems (middle school edition).
   Standards (for teachers): 3.1.6-8.J patterns of interactions among organisms across multiple ecosystems;
   3.1.6-8.I resource availability and populations; 3.1.6-8.K cycling of matter and flow of energy among living and nonliving parts;
   3.1.6-8.L changes to physical or biological components affect populations; 3.1.6-8.U competing design solutions for biodiversity and ecosystem services.
   Content (scans, questions, activities, English and Spanish) is in world4-questions.js.
   4-1 Great Barrier Reef (the high school game's reef): competition, predation and mutualism on the reef and in other ecosystems; sharks, eels and jellies.
   4-2 Allegheny National Forest (Pennsylvania): acorns, mice and deer data; resources hunt; deer herd balance; black bears and rattlesnakes.
   4-3 Under a fallen log (shrink ray): decomposers, food web maze, leaf decay data, a carbon atom's trip; wolf spiders.
   4-4 Yellowstone after the 1988 fires: population changes after a fire, evidence, regrowth; drifting embers and crumbling logs.
   4-5 Lower Susquehanna River (Lancaster County, Pennsylvania): fish passage and wildlife crossing designs; water snakes; the Silt Storm boss; World 4 Lab Lock.
   Signs use FieldGuide.t('English', 'Español'). */
(function () {
const t = function (en, es) { return FieldGuide.t(en, es); };
FieldGuide.registerWorld({
  id: 4,
  title: 'Ecosystems', es: { title: 'Ecosistemas' },
  levels: [
    { id: '4-1', title: 'Great Barrier Reef', theme: 'reef', codes: ['3.1.6-8.J'],
      es: { title: 'Gran Barrera de Coral', log: 'Diario de misión: la Gran Barrera de Coral, frente a Australia, el vecindario más concurrido de la Tierra. ¿Quién se come a quién, quién compite y quién ayuda a quién? ¿Pasa lo mismo en otros ecosistemas?',
            outro: 'Informe enviado: la competencia, la depredación y el mutualismo ocurren en el arrecife y en todos los ecosistemas. Como son patrones, se pueden predecir.' },
      log: 'Mission log: The Great Barrier Reef, off Australia, the busiest neighborhood on Earth. Who eats whom, who competes and who helps whom? Does the same thing happen in other ecosystems?',
      outro: 'Report sent: competition, predation and mutualism happen on the reef and in every ecosystem. Because they are patterns, they can be predicted.',
      build: function (b) {
        b.hint(5, 4.6, t('The Great Barrier Reef! Jump in and swim.', '¡La Gran Barrera de Coral! Lánzate y nada.')).sparks(8, 1.2, 3).ground(13).review()
          .quest({ icon: '🐠', look: 'critter', color: '#ff8a3a', name: t('Count 4 clownfish', 'Cuenta 4 peces payaso'),
                   done: t('Clownfish live in anemones on reefs across the Indian and Pacific Oceans. Wherever you find them, you find the same partnership.', 'Los peces payaso viven en anémonas en arrecifes de los océanos Índico y Pacífico. Donde los encuentres, encontrarás la misma sociedad.') })
          .sea(-0.6).gap(1).rise(-8)
          .bubbles(2).scan(5, 's4r-reef').scan(10, 's4r-clown').qitem(13, 3).hazard(17, 4.6, { look: 'shark', ax: 6, ay: 0.4, sp: 0.35 }).ground(21)
          .scan(4, 's4r-polyp').scan(9, 's4r-compete').ground(13)
          .station([{ sort: 'sort4-interact', n: 4 }])
          .scan(4, 's4r-shrimp').qitem(8, 2.5).snapper(12, 3.2, 0, 'eel').ground(16)
          .become('b4-shrimp')
          .scan(4, 's4r-shark').scan(9, 's4r-parrot').hazard(13, 3.6, { look: 'jelly', ax: 1, ay: 1.2, sp: 0.6 }).ground(17)
          .plat(2, 2.6, 4).plat(8, 4.6, 3).qitem(9.5, 5.8).ground(13)
          .scan(4, 's4r-cots').scan(9, 's4r-pattern').ground(13)
          .wordbank('wb4-interact')
          .hplat(3, 2.4, 2.6).hplat(6, 4.8, 2.6)
          .rare(7.3, 6.1, { name: t('Giant clam', 'Almeja gigante'), fact: t('Giant clams can grow over a meter wide. Like coral, they have algae living in their tissues that share sugar with them, and they can live more than 100 years.', 'Las almejas gigantes pueden medir más de un metro. Como el coral, tienen algas que viven en sus tejidos y comparten azúcar con ellas, y pueden vivir más de 100 años.') })
          .qitem(11, 2).ground(15)
          .shore().rise(8).ground(8)
          .hint(1, 4.6, t('Back on the beach! Careful: this sandbar crumbles.', '¡De vuelta en la playa! Cuidado: este banco de arena se desmorona.')).ground(8)
          .crumbleBridge(4, 'mix').mixed(2, ['3.1.6-8.E', '3.1.6-8.F', '3.1.6-8.G'])
          .station(['ms4q01', 'ms4q05'])
          .goal();
      } },
    { id: '4-2', title: 'Allegheny National Forest', theme: 'forest', codes: ['3.1.6-8.I'],
      es: { title: 'Bosque Nacional Allegheny', log: 'Diario de misión: el Bosque Nacional Allegheny, el único bosque nacional de Pensilvania. Algunos años los robles dan muchísimas bellotas y otros casi ninguna. ¿Cómo cambia eso a las poblaciones de animales?',
            outro: 'Informe enviado: cuando hay más alimento, las poblaciones crecen; cuando el alimento escasea, disminuyen. Los recursos limitan cuántos animales puede mantener un bosque.' },
      log: 'Mission log: Allegheny National Forest, Pennsylvania’s only national forest. Some years the oaks drop tons of acorns, some years almost none. How does that change the animal populations?',
      outro: 'Report sent: when there is more food, populations grow; when food is scarce, they shrink. Resources limit how many animals a forest can support.',
      build: function (b) {
        b.hint(5, 4.6, t('Allegheny National Forest. Count the populations!', 'El Bosque Nacional Allegheny. ¡Cuenta las poblaciones!')).sparks(9, 1.2, 4).ground(14).review()
          .quest({ icon: '🌰', look: 'eggs', color: '#a0784a', name: t('Find 4 squirrel acorn stashes', 'Encuentra 4 escondites de bellotas de ardilla'),
                   done: t('Gray squirrels bury thousands of acorns each fall. The ones they forget can sprout into new oak trees.', 'Las ardillas grises entierran miles de bellotas cada otoño. Las que olvidan pueden brotar y volverse robles nuevos.') })
          .scan(3, 's4f-forest').scan(8, 's4f-acorns').ground(11)
          .hint(-4, 4.6, t('A black bear! Give it space and jump past it quickly.', '¡Un oso negro! Dale espacio y salta rápido para pasarlo.')).hazard(-1.5, 0.7, { look: 'bear', ax: 1.6, ay: 0, sp: 0.4 })
          .scan(4, 's4f-mast').qitem(7, 3.4).scan(10, 's4f-mouse').ground(13)
          .readData('d4-acorns')
          .readData('d4-mice')
          .rise(1.4).ground(5).rise(1.4).ground(6)
          .scan(3, 's4f-deer').scan(8, 's4f-limit').ground(11)
          .hunt('h4-resources')
          .hint(-4, 4.6, t('A timber rattlesnake! Jump over it.', '¡Una serpiente de cascabel! Salta por encima.')).hazard(-1.5, 0.25, { look: 'snake', ax: 1.4, ay: 0, sp: 0.5 }).qitem(4, 3.6).ground(8)
          .refuel().scan(3, 's4f-bear').scan(8, 's4f-squirrel').ground(11)
          .hint(1, 6.4, t('Too many deer, or too few? Keep the herd in balance with its food.', '¿Demasiados venados, o muy pocos? Mantén la manada en equilibrio con su alimento.'))
          .balance('bal4-deer')
          .scan(3, 's4f-seedlings').scan(8, 's4f-stream').qitem(11, 0.5).ground(13)
          .hazard(5, 0.7, { look: 'bear', ax: 2, ay: 0, sp: 0.45 }).ground(10)
          .plat(3, 2.4, 2.6).plat(6.5, 4.4, 2.6).plat(10, 6.4, 2.6).hplat(13.5, 8.4, 2.6)
          .rare(14.8, 9.7, { name: t('Eastern hellbender', 'Salamandra gigante del este'), fact: t('Pennsylvania’s state amphibian can grow over 60 cm (2 feet) long. It breathes through its wrinkly skin, so it needs cold, clean streams full of oxygen.', 'El anfibio del estado de Pensilvania puede medir más de 60 cm (2 pies). Respira por su piel arrugada, así que necesita arroyos fríos y limpios, con mucho oxígeno.') })
          .qitem(17, 0.5).ground(19)
          .crumbleBridge(4, 'crumble').mixed(2, ['3.1.6-8.J'])
          .station(['ms4q12', 'ms4q14'])
          .goal();
      } },
    { id: '4-3', title: 'Under a Fallen Log', theme: 'log', codes: ['3.1.6-8.K'],
      es: { title: 'Bajo un tronco caído', log: 'Diario de misión: con mi rayo para encogerme, me vuelvo del tamaño de una hormiga bajo un tronco de roble podrido. ¿Qué pasa con la materia de las cosas muertas, y adónde va la energía?',
            outro: 'Informe enviado: los descomponedores devuelven la materia de las cosas muertas al suelo y al aire, para que los productores la usen otra vez. La energía fluye en un solo sentido, desde el Sol.' },
      log: 'Mission log: My shrink ray makes me ant-sized under a rotting oak log. What happens to the matter in dead things, and where does the energy go?',
      outro: 'Report sent: decomposers return the matter in dead things to the soil and air, so producers can use it again. Energy flows one way, starting with the Sun.',
      build: function (b) {
        b.hint(5, 4.6, t('Ant-sized, under a fallen oak log!', '¡Del tamaño de una hormiga, bajo un tronco de roble caído!')).sparks(9, 1.2, 4).ground(14).review()
          .quest({ icon: '🍄', look: 'mushroom', color: '#c0503a', name: t('Find 4 kinds of mushrooms', 'Encuentra 4 tipos de hongos'),
                   done: t('A mushroom is only a small part of a fungus. Most of the fungus is a web of tiny threads hidden in the soil or wood.', 'Una seta es solo una parte pequeña de un hongo. La mayor parte del hongo es una red de hilos diminutos escondida en el suelo o la madera.') })
          .scan(3, 's4l-log').scan(8, 's4l-turkeytail').ground(11)
          .hint(-4, 4.6, t('A wolf spider is hunting! Jump over it.', '¡Una araña lobo está cazando! Salta por encima.')).hazard(-1.5, 0.3, { look: 'spider', ax: 1.6, ay: 0, sp: 1.0 })
          .scan(4, 's4l-worm').qitem(7, 3.4).scan(10, 's4l-millipede').ground(13)
          .hunt('h4-decomp')
          .hint(1, 4.6, t('Crawl under the log (duck: down arrow or S).', 'Arrástrate bajo el tronco (agáchate: flecha abajo o S).')).squeeze(5, 5).ground(15)
          .scan(3, 's4l-salamander').scan(8, 's4l-rain').ground(11)
          .station([{ sort: 'sort4-role', n: 4 }])
          .maze('maze4-web')
          .refuel().scan(3, 's4l-moss').scan(8, 's4l-heat').qitem(11, 0.5).ground(13)
          .readData('d4-litter')
          .become('b4-carbon')
          .hazard(5, 0.3, { look: 'spider', ax: 1.8, ay: 0, sp: 1.2 }).qitem(10, 3.6).ground(13)
          .sequence('seq4-matter')
          .scan(3, 's4l-ghost').ground(6)
          .plat(3, 2.4, 2.6).plat(6.5, 4.4, 2.6).hplat(10, 6.4, 2.6)
          .rare(11.3, 7.7, { name: t('Eastern box turtle', 'Tortuga de caja del este'), fact: t('Box turtles wander the forest floor eating mushrooms, berries and worms. They can live more than 50 years.', 'Las tortugas de caja recorren el suelo del bosque comiendo hongos, bayas y lombrices. Pueden vivir más de 50 años.') })
          .qitem(14, 0.5).ground(16)
          .crumbleBridge(4, 'mix').mixed(2, ['3.1.6-8.I', '3.1.6-8.J'])
          .station(['ms4q21', 'ms4q24'])
          .goal();
      } },
    { id: '4-4', title: 'Yellowstone After the Fire', theme: 'burn', codes: ['3.1.6-8.L'],
      es: { title: 'Yellowstone después del incendio', log: 'Diario de misión: el Parque Nacional Yellowstone, unos años después de los grandes incendios de 1988. El fuego cambió el ecosistema. ¿Qué poblaciones perdieron, cuáles ganaron, y qué evidencia lo demuestra?',
            outro: 'Informe enviado: el fuego cambió un componente físico del ecosistema. Las poblaciones que dependían del bosque viejo disminuyeron, y las que necesitaban sol, suelo abierto o árboles muertos crecieron.' },
      log: 'Mission log: Yellowstone National Park, a few years after the great fires of 1988. The fire changed the ecosystem. Which populations lost, which gained, and what evidence shows it?',
      outro: 'Report sent: the fire changed a physical component of the ecosystem. Populations that depended on the old forest shrank, and populations that needed sun, open ground or dead trees grew.',
      build: function (b) {
        b.hint(5, 4.6, t('Yellowstone, a few years after the 1988 fires. Look at what grew back!', 'Yellowstone, unos años después de los incendios de 1988. ¡Mira lo que volvió a crecer!')).sparks(9, 1.2, 4).ground(14).review()
          .quest({ icon: '🌲', look: 'eggs', color: '#8a6a3a', name: t('Collect 4 lodgepole pine cones', 'Recoge 4 piñas de pino contorta'),
                   done: t('Some lodgepole cones stay closed on the tree for years. A fire’s heat melts their resin, and the cones finally open.', 'Algunas piñas del pino contorta se quedan cerradas en el árbol durante años. El calor de un incendio derrite su resina y por fin se abren.') })
          .scan(3, 's4b-burn').scan(8, 's4b-cone').ground(11)
          .hint(-4, 4.6, t('Hot embers drift from smoldering logs. Dodge them!', 'Unas brasas calientes salen de los troncos que todavía arden. ¡Esquívalas!')).hazard(-1, 1.7, { look: 'ember', ax: 1.2, ay: 1.0, sp: 0.9 })
          .scan(4, 's4b-seedling').qitem(7, 3.4).scan(10, 's4b-fireweed').ground(13)
          .readData('d4-fire')
          .scan(3, 's4b-beetle').scan(8, 's4b-squirrel').ground(11)
          .station([{ sort: 'sort4-fire', n: 4 }])
          .hint(1, 4.6, t('Charred logs crumble under your feet. Keep moving!', 'Los troncos quemados se desmoronan bajo tus pies. ¡No te detengas!')).ground(3).crumbleBridge(4, 'crumble')
          .scan(3, 's4b-elk').scan(8, 's4b-ash').qitem(11, 0.5).ground(13)
          .sequence('seq4-fire')
          .refuel().hazard(4, 1.8, { look: 'ember', ax: 1.6, ay: 1.2, sp: 1.0 }).qitem(9, 3.6).ground(13)
          .scan(3, 's4b-argument').ground(6)
          .rise(1.4).ground(5).rise(1.4).ground(5)
          .plat(3, 2.4, 2.6).plat(6.5, 4.4, 2.6).plat(10, 6.4, 2.6).hplat(13.5, 8.4, 2.6)
          .rare(14.8, 9.7, { name: t('Black-backed woodpecker', 'Pájaro carpintero de lomo negro'), fact: t('Its black back blends in with burned bark. It moves into freshly burned forests to dig beetle larvae out of the dead trees.', 'Su lomo negro se confunde con la corteza quemada. Llega a los bosques recién quemados para sacar larvas de escarabajo de los árboles muertos.') })
          .qitem(17, 0.5).ground(19)
          .crumbleBridge(4, 'mix').mixed(2, ['3.1.6-8.I', '3.1.6-8.K'])
          .station(['ms4q33', 'ms4q35'])
          .goal();
      } },
    { id: '4-5', title: 'Susquehanna River Valley', theme: 'river', codes: ['3.1.6-8.U'],
      es: { title: 'Valle del río Susquehanna', log: 'Diario de misión: el bajo río Susquehanna, en el condado de Lancaster, Pensilvania. Las presas, las carreteras y las granjas cambian el río y el bosque. ¿Qué diseños protegen mejor la biodiversidad y los servicios de los ecosistemas?',
            outro: 'Informe enviado: los diseños se comparan con criterios. Cada uno tiene compensaciones, y los mejores protegen la biodiversidad y siguen dando servicios como agua limpia y peces.' },
      log: 'Mission log: The lower Susquehanna River, Lancaster County, Pennsylvania. Dams, roads and farms change the river and the forest. Which designs best protect biodiversity and ecosystem services?',
      outro: 'Report sent: designs are compared against criteria. Each one has trade-offs, and the best ones protect biodiversity and keep giving services like clean water and fish.',
      build: function (b) {
        b.hint(5, 4.6, t('The lower Susquehanna River. Compare the designs!', 'El bajo río Susquehanna. ¡Compara los diseños!')).sparks(9, 1.2, 4).ground(14).review()
          .quest({ icon: '🐟', look: 'critter', color: '#c0c8d0', name: t('Count 4 migrating shad', 'Cuenta 4 sábalos que migran'),
                   done: t('American shad hatch in rivers, grow up in the ocean, and swim back up the river to lay their eggs.', 'Los sábalos americanos nacen en los ríos, crecen en el océano y vuelven a nadar río arriba para poner sus huevos.') })
          .scan(3, 's4v-river').scan(8, 's4v-shad').ground(11)
          .hint(-4, 4.6, t('A northern water snake! It is not venomous. Jump over it.', '¡Una culebra de agua! No es venenosa. Salta por encima.')).hazard(-1.5, 0.25, { look: 'watersnake', ax: 1.4, ay: 0, sp: 0.5 })
          .scan(4, 's4v-silt').qitem(7, 3.4).scan(10, 's4v-buffer').ground(13)
          .hint(1, 4.6, t('Swim across the river! Jump to swim up.', '¡Cruza el río nadando! Salta para nadar hacia arriba.')).ground(3).sea(-0.6).gap(1).rise(-4)
          .scan(4, 's4v-lift').scan(9, 's4v-removal').qitem(12, 2).ground(16)
          .station([{ sort: 'sort4-dam', n: 4 }])
          .ground(4).shore().rise(4).ground(8)
          .scan(3, 's4v-criteria').scan(8, 's4v-tradeoff').ground(11)
          .scan(3, 's4v-split').scan(8, 's4v-crossing').ground(11)
          .readData('d4-road')
          .station([{ sort: 'sort4-road', n: 4 }])
          .refuel().wordbank('wb4-design')
          .hazard(5, 0.25, { look: 'watersnake', ax: 1.8, ay: 0, sp: 0.6 }).qitem(9, 3.6).ground(13)
          .plat(3, 2.4, 2.6).plat(6.5, 4.4, 2.6).plat(10, 6.4, 2.6).hplat(13.5, 8.4, 2.6)
          .rare(14.8, 9.7, { name: t('Bald eagle', 'Águila calva'), fact: t('Bald eagles gather along the lower Susquehanna to catch fish below the dams. Once rare in Pennsylvania, they have made a big comeback.', 'Las águilas calvas se juntan en el bajo Susquehanna para pescar debajo de las presas. Antes eran raras en Pensilvania, pero se han recuperado mucho.') })
          .qitem(17, 0.5).ground(19)
          .crumbleBridge(4, 'mix').mixed(2, ['3.1.6-8.K', '3.1.6-8.L'])
          .hint(1, 6.6, t('The Silt Storm is washing mud into the river! Answer to calm it.', '¡La Tormenta de Lodo está echando lodo al río! Responde para calmarla.'))
          .boss(t('The Silt Storm', 'La Tormenta de Lodo'), 'boss4', 8, 2, ['3.1.6-8.I', '3.1.6-8.J', '3.1.6-8.K', '3.1.6-8.L'])
          .hint(1, 6.6, t('World 4 Lab Lock: solve the clues to open the last gate.', 'Candado del Mundo 4: resuelve las pistas para abrir la última puerta.'))
          .lablock('lock4')
          .goal();
      } }
  ]
});
})();
