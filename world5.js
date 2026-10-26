/* WORLD 5 GAME FILE: Passing On Traits (middle school edition).
   Standards (for teachers): 3.1.6-8.D animal behaviors and specialized plant structures affect the probability of successful reproduction;
   3.1.6-8.N asexual reproduction gives identical genetic information, sexual reproduction gives genetic variation;
   3.1.6-8.M mutations in genes on chromosomes may affect proteins, with harmful, beneficial or neutral effects;
   3.1.6-8.R technologies that changed how humans influence the inheritance of desired traits.
   Content (scans, questions, activities, English and Spanish) is in world5-questions.js.
   5-1 Bowman's Hill Wildflower Preserve (New Hope, Pennsylvania): pollinators, courtship and parental care, seed dispersal; bees and grasshoppers.
   5-2 Strawberry fields and tide pools (Monterey Bay, California): runners and seeds, clones and variation; gulls, crabs and urchins.
   5-3 A limestone cave in Mexico: pale, eyeless cavefish; genes, chromosomes, mutations and their effects; bats, cave crickets and dripping stone.
   5-4 A Pennsylvania dairy farm and research greenhouse: selective breeding to gene editing; milk data; beetles and bees; World 5 Lab Lock.
   Signs use FieldGuide.t('English', 'Español'). */
(function () {
const t = function (en, es) { return FieldGuide.t(en, es); };
FieldGuide.registerWorld({
  id: 5,
  title: 'Passing On Traits', es: { title: 'La herencia de los rasgos' },
  levels: [
    { id: '5-1', title: 'Bowman’s Hill Wildflowers', theme: 'wildflower', codes: ['3.1.6-8.D'],
      es: { title: 'Flores silvestres de Bowman’s Hill', log: 'Diario de misión: la Reserva de Flores Silvestres Bowman’s Hill, cerca de New Hope, Pensilvania. Flores, abejas, colibríes y aves que hacen nidos. ¿Cómo aumentan sus estructuras y conductas la probabilidad de tener crías?',
            outro: 'Informe enviado: las estructuras especializadas de las plantas, como los pétalos, el néctar y los frutos, y las conductas de los animales, como el cortejo y el cuidado de las crías, aumentan la probabilidad de una reproducción exitosa.' },
      log: 'Mission log: Bowman’s Hill Wildflower Preserve, near New Hope, Pennsylvania. Flowers, bees, hummingbirds and nesting birds. How do their structures and behaviors raise their chances of having offspring?',
      outro: 'Report sent: specialized plant structures, like petals, nectar and fruit, and animal behaviors, like courtship and parental care, raise the probability of successful reproduction.',
      build: function (b) {
        b.hint(5, 4.6, t('Bowman’s Hill Wildflower Preserve. Watch who visits the flowers!', 'La Reserva de Flores Silvestres Bowman’s Hill. ¡Mira quién visita las flores!')).sparks(9, 1.2, 4).ground(14).review()
          .quest({ icon: '🐦', look: 'critter', color: '#4fbf6a', name: t('Spot 4 hummingbirds', 'Encuentra 4 colibríes'),
                   done: t('A ruby-throated hummingbird’s heart can beat more than 1,000 times a minute while it hovers at flowers.', 'El corazón de un colibrí garganta de rubí puede latir más de 1,000 veces por minuto mientras se suspende frente a las flores.') })
          .scan(3, 's5m-meadow').scan(8, 's5m-petals').ground(11)
          .hint(-4, 4.6, t('Bumble bees are busy pollinating. Let them buzz past!', 'Los abejorros están ocupados polinizando. ¡Déjalos pasar!')).hazard(-1, 2.8, { look: 'bee', ax: 1.6, ay: 0.4, sp: 1.0 })
          .scan(4, 's5m-pollen').qitem(7, 3.4).scan(10, 's5m-cardinal').ground(13)
          .hunt('h5-structures')
          .scan(3, 's5m-hummer').scan(8, 's5m-song').ground(11)
          .readData('d5-net')
          .become('b5-pollen')
          .rise(1.4).ground(5).rise(1.4).ground(6)
          .scan(3, 's5m-nest').scan(8, 's5m-fawn').qitem(11, 0.5).ground(13)
          .station([{ sort: 'sort5-behave', n: 4 }])
          .refuel().readData('d5-hummer')
          .hazard(5, 2.8, { look: 'bee', ax: 1.8, ay: 0.4, sp: 1.2 }).hazard(10, 0.4, { look: 'hopper', ax: 1.2, ay: 1.2, sp: 1.1 }).qitem(13, 3.6).ground(16)
          .scan(3, 's5m-milkweed').scan(8, 's5m-berry').ground(11)
          .plat(3, 2.4, 2.6).plat(6.5, 4.4, 2.6).plat(10, 6.4, 2.6).hplat(13.5, 8.4, 2.6)
          .rare(14.8, 9.7, { name: t('Hummingbird nest', 'Nido de colibrí'), fact: t('A hummingbird nest is about the size of a walnut. The mother builds it from plant down and spider silk, so it stretches as the chicks grow.', 'Un nido de colibrí es más o menos del tamaño de una nuez. La madre lo hace con pelusa de plantas y seda de araña, así que se estira mientras crecen los polluelos.') })
          .qitem(17, 0.5).ground(19)
          .crumbleBridge(4, 'mix').mixed(2, ['3.1.6-8.E', '3.1.6-8.J'])
          .station(['ms5q01', 'ms5q04'])
          .goal();
      } },
    { id: '5-2', title: 'Strawberry Coast', theme: 'coast', codes: ['3.1.6-8.N'],
      es: { title: 'La costa de las fresas', log: 'Diario de misión: campos de fresas junto a la bahía de Monterey, en California, con pozas de marea abajo. Unas crías tienen un progenitor y otras dos. ¿Por qué unas son copias y otras son distintas?',
            outro: 'Informe enviado: con un solo progenitor (reproducción asexual), las crías tienen información genética idéntica. Con dos progenitores (reproducción sexual), los genes se mezclan y hay variación.' },
      log: 'Mission log: Strawberry fields beside Monterey Bay, California, with tide pools below. Some offspring have one parent and some have two. Why are some exact copies and some different?',
      outro: 'Report sent: with one parent (asexual reproduction), offspring have identical genetic information. With two parents (sexual reproduction), genes are mixed and there is variation.',
      build: function (b) {
        b.hint(5, 4.6, t('Strawberry fields above the tide pools of Monterey Bay.', 'Campos de fresas sobre las pozas de marea de la bahía de Monterey.')).sparks(9, 1.2, 4).ground(14).review()
          .quest({ icon: '🍓', look: 'drop', color: '#e04a3a', name: t('Pick 4 strawberries', 'Recoge 4 fresas'),
                   done: t('A strawberry is covered with about 200 tiny dots. Each dot is a tiny fruit with its own seed inside.', 'Una fresa está cubierta de unos 200 puntitos. Cada puntito es un fruto diminuto con su propia semilla adentro.') })
          .scan(3, 's5s-runner').scan(8, 's5s-clone').ground(11)
          .hint(-4, 4.6, t('Gulls swoop over the fields. Duck under them!', 'Las gaviotas se lanzan sobre los campos. ¡Agáchate!')).hazard(-1, 2.6, { look: 'gull', ax: 2.2, ay: 0.5, sp: 1.2 })
          .scan(4, 's5s-flower').qitem(7, 3.4).scan(10, 's5s-seeds').ground(13)
          .become('b5-runner')
          .scan(3, 's5s-variation').scan(8, 's5s-aphid').ground(11)
          .readData('d5-alike')
          .sequence('seq5-seed')
          .station([{ sort: 'sort5-repro', n: 4 }])
          .hint(1, 4.6, t('Climb down to the tide pools and dive in! Jump to swim up.', '¡Baja a las pozas de marea y lánzate! Salta para nadar hacia arriba.')).ground(3).sea(-0.6).gap(1).rise(-6)
          .scan(4, 's5s-anemone').hazard(8, 0.45, { look: 'urchin', ax: 0, ay: 0 }).scan(12, 's5s-star').qitem(15, 2).hazard(18, 0.35, { look: 'crab', ax: 1.0, ay: 0, sp: 0.6 }).ground(22)
          .scan(4, 's5s-chromosome').qitem(8, 3).ground(12)
          .wordbank('wb5-repro')
          .hplat(3, 2.4, 2.6).hplat(6, 4.4, 2.6)
          .rare(7.3, 5.7, { name: t('Aggregating anemones', 'Anémonas agregadas'), fact: t('These anemones split again and again, covering rocks with fields of clones. Where two clone groups meet, they sting each other and leave a bare strip between them.', 'Estas anémonas se dividen una y otra vez y cubren las rocas con campos de clones. Donde se encuentran dos grupos de clones, se pican entre sí y dejan una franja vacía entre ellos.') })
          .qitem(10, 2).ground(13)
          .shore().rise(6).ground(8)
          .hint(1, 4.6, t('Back on the bluff! Careful: the cliff edge crumbles.', '¡De vuelta en el acantilado! Cuidado: la orilla se desmorona.')).ground(8)
          .crumbleBridge(4, 'mix').mixed(2, ['3.1.6-8.D'])
          .station(['ms5q11', 'ms5q13'])
          .goal();
      } },
    { id: '5-3', title: 'Cave of the Pale Fish', theme: 'cave', codes: ['3.1.6-8.M'],
      es: { title: 'La cueva de los peces pálidos', log: 'Diario de misión: una cueva de piedra caliza en México. Aquí viven peces sin color y sin ojos que funcionen, aunque sus parientes del río tienen las dos cosas. ¿Qué cambió en sus genes?',
            outro: 'Informe enviado: una mutación es un cambio en un gen de un cromosoma. Puede cambiar la proteína y el rasgo, y el efecto puede ser perjudicial, beneficioso o neutral, según el ambiente.' },
      log: 'Mission log: A limestone cave in Mexico. Fish live here with no color and no working eyes, even though their river relatives have both. What changed in their genes?',
      outro: 'Report sent: a mutation is a change in a gene on a chromosome. It can change the protein and the trait, and the effect can be harmful, beneficial or neutral, depending on the environment.',
      build: function (b) {
        b.hint(5, 4.6, t('A limestone cave in Mexico. Your lamp lights the way!', 'Una cueva de piedra caliza en México. ¡Tu lámpara ilumina el camino!')).sparks(9, 1.2, 4).ground(14).review()
          .quest({ icon: '🐟', look: 'critter', color: '#f4e0e0', name: t('Find 4 blind cavefish', 'Encuentra 4 peces ciegos de cueva'),
                   done: t('Blind cavefish find food by feeling tiny movements in the water with sense organs along their sides.', 'Los peces ciegos de cueva encuentran alimento sintiendo movimientos diminutos del agua con órganos de los sentidos a los lados del cuerpo.') })
          .scan(3, 's5c-cave').scan(8, 's5c-chromo').ground(11)
          .hint(-4, 4.6, t('Bats roost in the cave. Duck under them!', 'Los murciélagos duermen en la cueva. ¡Agáchate!')).hazard(-1, 1.9, { look: 'bat', ax: 2.2, ay: 0.5, sp: 1.3 })
          .scan(4, 's5c-dna').qitem(7, 3.4).scan(10, 's5c-protein').ground(13)
          .maze('maze5-gene')
          .hint(1, 4.8, t('Dripping stone! Watch for the dust, then run.', '¡Piedras que caen! Mira el polvo y luego corre.')).rockfall(5, 3.5, 0).rockfall(10, 3.5, 1.6).ground(14)
          .scan(3, 's5c-mutation').scan(8, 's5c-river').ground(11)
          .hunt('h5-genes')
          .become('b5-gene')
          .hint(-4, 4.6, t('A cave cricket! Jump over it.', '¡Un grillo de cueva! Salta por encima.')).hazard(-1.5, 0.4, { look: 'cricket', ax: 1.4, ay: 1.2, sp: 1.1 }).qitem(4, 3.6).ground(8)
          .scan(3, 's5c-neutral').ground(6)
          .hint(1, 4.6, t('A still cave pool. Swim across!', 'Una poza quieta de la cueva. ¡Crúzala nadando!')).ground(3).sea(-0.6).gap(1).rise(-3).qitem(5, 1.5).ground(10).shore().rise(3).ground(6)
          .refuel().scan(3, 's5c-sickle').scan(8, 's5c-milk').ground(11)
          .station([{ sort: 'sort5-effect', n: 4 }])
          .hint(1, 4.6, t('Squeeze through the narrow passage (duck: down arrow or S).', 'Pasa por el pasadizo estrecho (agáchate: flecha abajo o S).')).squeeze(5, 5).ground(15)
          .sequence('seq5-mutation')
          .scan(3, 's5c-albino').ground(6)
          .plat(3, 2.4, 2.6).plat(6.5, 4.4, 2.6).hplat(10, 6.4, 2.6)
          .rare(11.3, 7.7, { name: t('Pale cave shrimp', 'Camarón pálido de cueva'), fact: t('Like the cavefish, many cave animals around the world have lost their color and eyes. Different species living in darkness ended up with the same traits.', 'Como los peces de cueva, muchos animales de cuevas de todo el mundo perdieron su color y sus ojos. Especies distintas que viven en la oscuridad terminaron con los mismos rasgos.') })
          .qitem(14, 0.5).ground(16)
          .crumbleBridge(4, 'mix').mixed(2, ['3.1.6-8.N'])
          .station(['ms5q21', 'ms5q23'])
          .goal();
      } },
    { id: '5-4', title: 'Farm and Research Lab', theme: 'farm', codes: ['3.1.6-8.R'],
      es: { title: 'Granja y laboratorio', log: 'Diario de misión: una granja lechera de Pensilvania y un invernadero de investigación. Las personas han moldeado los rasgos de plantas y animales durante miles de años. ¿Qué tecnologías cambiaron la manera de hacerlo?',
            outro: 'Informe enviado: de la cría selectiva a las semillas híbridas, la ingeniería genética y la edición genética, cada tecnología les dio a las personas más control sobre qué rasgos se heredan.' },
      log: 'Mission log: A Pennsylvania dairy farm and a research greenhouse. People have shaped the traits of plants and animals for thousands of years. Which technologies changed how they do it?',
      outro: 'Report sent: from selective breeding to hybrid seeds, genetic engineering and gene editing, each technology gave people more control over which traits are inherited.',
      build: function (b) {
        b.hint(5, 4.6, t('A Pennsylvania dairy farm and research greenhouse.', 'Una granja lechera de Pensilvania y un invernadero de investigación.')).sparks(9, 1.2, 4).ground(14).review()
          .quest({ icon: '🐄', look: 'critter', color: '#f4f4f4', name: t('Count 4 dairy calves', 'Cuenta 4 terneros'),
                   done: t('Pennsylvania has more dairy farms than almost any other state. Each calf’s traits come from the parents that the farmer chose.', 'Pensilvania tiene más granjas lecheras que casi cualquier otro estado. Los rasgos de cada ternero vienen de los progenitores que eligió el productor.') })
          .scan(3, 's5t-corn').scan(8, 's5t-cow').ground(11)
          .hint(-4, 4.6, t('Japanese beetles are chewing the crops! Jump over them.', '¡Los escarabajos japoneses se comen los cultivos! Salta por encima.')).hazard(-1.5, 0.3, { look: 'beetle', ax: 1.4, ay: 0, sp: 0.8 })
          .scan(4, 's5t-dogs').qitem(7, 3.4).scan(10, 's5t-hybrid').ground(13)
          .readData('d5-milk')
          .hunt('h5-desired')
          .hint(1, 4.6, t('Climb the hay bales!', '¡Trepa por las pacas de heno!')).plat(4, 2.2, 3).plat(8, 4.2, 3).qitem(9.5, 5.4).plat(12, 2.2, 3).ground(16)
          .scan(3, 's5t-ge').scan(8, 's5t-btcorn').ground(11)
          .station([{ sort: 'sort5-tech', n: 4 }])
          .refuel().scan(3, 's5t-crispr').scan(8, 's5t-fish').qitem(11, 0.5).ground(13)
          .sequence('seq5-tech')
          .hazard(5, 0.4, { look: 'hopper', ax: 1.2, ay: 1.2, sp: 1.1 }).hazard(11, 2.8, { look: 'bee', ax: 1.6, ay: 0.4, sp: 1.0 }).ground(15)
          .plat(3, 2.4, 2.6).plat(6.5, 4.4, 2.6).plat(10, 6.4, 2.6).hplat(13.5, 8.4, 2.6)
          .rare(14.8, 9.7, { name: t('Teosinte plant', 'Planta de teocintle'), fact: t('Corn’s wild ancestor, from Mexico, has tiny ears with only a few hard kernels. Thousands of years of selective breeding turned it into corn.', 'El ancestro silvestre del maíz, de México, tiene espigas diminutas con solo unos pocos granos duros. Miles de años de cría selectiva lo convirtieron en maíz.') })
          .qitem(17, 0.5).ground(19)
          .crumbleBridge(4, 'mix').mixed(3, ['3.1.6-8.D', '3.1.6-8.M', '3.1.6-8.N'])
          .station(['ms5q31', 'ms5q34'])
          .hint(1, 6.6, t('World 5 Lab Lock: solve the clues to open the last gate.', 'Candado del Mundo 5: resuelve las pistas para abrir la última puerta.'))
          .lablock('lock5')
          .goal();
      } }
  ]
});
})();
