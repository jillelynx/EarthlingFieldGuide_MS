/* WORLD 2 GAME FILE: The Body as a System (middle school edition).
   Standards (for teachers): 3.1.6-8.C the body is a system of interacting subsystems made of groups of cells;
   3.1.6-8.H sensory receptors send messages to the brain for immediate behavior or storage as memories.
   Content (scans, questions, activities, English and Spanish) is in world2-questions.js. A field trip across Pennsylvania:
   2-1 Inside a hiker's body (the alien's shrink ray): zoom-out maze, build the circulatory system, Immune Defense side game; germs and white blood cells.
   2-2 Hawk Mountain Sanctuary trail: climb, read heart and breathing data, keep oxygen flowing; timber rattlesnakes and falling rocks.
   2-3 Cherry Springs State Park at night: dark sky, senses; collect stimuli, become a nerve message; bats and mosquitoes.
   2-4 "Your Brain" exhibit, The Franklin Institute, Philadelphia: climb the neural network; reflexes and memories; World 2 Lab Lock.
   Signs use FieldGuide.t('English', 'Español'). */
(function () {
const t = function (en, es) { return FieldGuide.t(en, es); };
FieldGuide.registerWorld({
  id: 2,
  title: 'The Body as a System', es: { title: 'El cuerpo como sistema' },
  levels: [
    { id: '2-1', title: 'Inside a Hiker’s Body', theme: 'body', codes: ['3.1.6-8.C'],
      es: { title: 'Dentro de una excursionista', log: 'Diario de misión: encontré a una excursionista en Hawk Mountain. Con mi rayo para encogerme entraré en su cuerpo. ¿Cómo se organizan sus células en tejidos, órganos y sistemas?',
            outro: 'Informe enviado: las células forman tejidos, los tejidos forman órganos y los órganos forman sistemas. Los sistemas trabajan juntos para formar un organismo.' },
      log: 'Mission log: I met a hiker at Hawk Mountain. My shrink ray will take me inside her body. How are her cells organized into tissues, organs and systems?',
      outro: 'Report sent: cells form tissues, tissues form organs and organs form systems. The systems work together to make one organism.',
      build: function (b) {
        b.hint(5, 4.6, t('Shrunk down inside the hiker’s leg muscle. Scan everything!', 'Encogido dentro del músculo de la pierna de la excursionista. ¡Escanea todo!')).sparks(9, 1.2, 4).ground(14).review()
          .quest({ icon: '❤️', look: 'drop', color: '#ff6b6b', name: t('Find the 4 heart valves', 'Encuentra las 4 válvulas del corazón'),
                   done: t('The heart has four valves. They open and close with each heartbeat so blood flows only one way.', 'El corazón tiene cuatro válvulas. Se abren y se cierran con cada latido para que la sangre fluya en un solo sentido.') })
          .scan(3, 's2-musclecell').scan(8, 's2-tissue').ground(11)
          .hint(-4, 4.6, t('Germs! Jump on them or over them.', '¡Microbios! Salta sobre ellos o por encima.')).virus(-1.5, 2.2, 0.9)
          .scan(4, 's2-heart').qitem(7, 3.4).scan(10, 's2-vessel').ground(13)
          .maze('maze2-org')
          .sparks(0.5, 8.5, 5).ground(7)
          .hint(1, 4.8, t('The heart beats! Ride the moving platforms.', '¡El corazón late! Súbete a las plataformas que se mueven.')).bridge(11, { sp: 1.0 }).qitem(-5.5, 3.2).ground(4).bridge(11, { ay: 1.4, sp: 1.1 })
          .scan(3, 's2-circ').scan(8, 's2-lungs').scan(13, 's2-stomach').ground(16)
          .hunt('h2-circ')
          .station([{ sort: 'sort2-system', n: 4 }])
          .hint(1, 4.8, t('White blood cells pop up to engulf germs. Jump when they hide!', 'Los glóbulos blancos salen para atrapar microbios. ¡Salta cuando se escondan!')).snapper(5, 3.8, 0).virus(10, 2, 1.1).ground(14)
          .hplat(-7, 2.4, 3).hplat(-4.5, 4.8, 3).hplat(-2, 8.4, 2.6)
          .rare(-0.7, 9.7, { name: t('Heart muscle cell', 'Célula del músculo cardiaco'), fact: t('Heart muscle cells contract together about 100,000 times a day, every day of your life.', 'Las células del músculo cardiaco se contraen juntas unas 100,000 veces al día, todos los días de tu vida.') })
          .refuel().scan(3, 's2-bone').scan(8, 's2-wbc').qitem(11, 0.5).ground(13)
          .squeeze(2, 4).antibody(12, 8, 3.2).ground(14)
          .crumbleBridge(4, 'mix').mixed(2, ['3.1.6-8.A', '3.1.6-8.B'])
          .scan(3, 's2-organism').scan(8, 's2-subsystem').ground(11)
          .station(['ms2q01', 'ms2q05'])
          .clue(3, 'ms2q10').ground(6).clue(2, 'ms2q11').qitem(5, 3.4).ground(7).clue(2, 'ms2q07').ground(5)
          .hint(1, 6.6, t('Side game! The portal’s code is the letters of your 3 clue answers.', '¡Juego extra! El código del portal son las letras de tus 3 respuestas a las pistas.')).portal(6).ground(11)
          .goal();
      } },
    { id: '2-2', title: 'Hawk Mountain Trail', theme: 'forest', codes: ['3.1.6-8.C'],
      es: { title: 'Sendero de Hawk Mountain', log: 'Diario de misión: el Santuario Hawk Mountain, en Pensilvania. La excursionista sube al Mirador Norte para ver gavilanes. ¿Cómo trabajan juntos los sistemas de su cuerpo en la subida?',
            outro: 'Informe enviado: al subir, el corazón y los pulmones se aceleraron juntos para llevar oxígeno a los músculos. Los sistemas del cuerpo interactúan.' },
      log: 'Mission log: Hawk Mountain Sanctuary, Pennsylvania. The hiker is climbing to North Lookout to watch hawks. How do her body systems work together on the climb?',
      outro: 'Report sent: on the climb, the heart and lungs sped up together to bring oxygen to the muscles. The body’s systems interact.',
      build: function (b) {
        b.hint(5, 4.6, t('The trail to North Lookout. It gets steep and rocky!', 'El sendero al Mirador Norte. ¡Se pone empinado y rocoso!')).sparks(9, 1.2, 4).ground(14).review()
          .quest({ icon: '🦅', look: 'critter', color: '#a0784a', name: t('Count the migrating hawks', 'Cuenta los gavilanes que migran'),
                   done: t('Every fall, volunteers at Hawk Mountain count the hawks flying south. In 2022 they counted 12,503 broad-winged hawks!', 'Cada otoño, los voluntarios de Hawk Mountain cuentan los gavilanes que vuelan al sur. ¡En 2022 contaron 12,503 gavilanes aludos!') })
          .scan(3, 's2h-trail').scan(8, 's2h-pulse').ground(11).qitem(-2, 5.4)
          .hint(-4, 4.6, t('A timber rattlesnake! Give it space and jump over it.', '¡Una serpiente de cascabel! Dale espacio y salta por encima.')).hazard(-1.5, 0.25, { look: 'snake', ax: 1.2, ay: 0, sp: 0.5 })
          .rise(1.4).ground(5).rise(1.4).ground(5).rise(1.4).ground(6)
          .scan(3, 's2h-breath').scan(8, 's2h-sweat').ground(11)
          .readData('d2-heart')
          .hint(1, 4.8, t('Falling rocks! Watch for the dust, then run past.', '¡Caen rocas! Mira el polvo y luego corre.')).rockfall(5, 3.5, 0).rockfall(10, 3.5, 1.6).ground(14)
          .readData('d2-breath')
          .rise(1.4).qitem(3, 5.6).ground(6).rise(1.4).ground(6)
          .scan(3, 's2h-muscle').scan(8, 's2h-snack').ground(11)
          .refuel().become('b2-oxygen')
          .sequence('seq2-oxygen')
          .hazard(5, 0.25, { look: 'snake', ax: 1.6, ay: 0, sp: 0.6 }).qitem(9, 5.2).ground(13)
          .hint(1, 6.4, t('The steepest part! Keep oxygen flowing to the leg muscles.', '¡La parte más empinada! Mantén el oxígeno llegando a los músculos de las piernas.'))
          .balance('bal2-oxygen')
          .crumbleBridge(4, 'crumble').mixed(2, ['3.1.6-8.A', '3.1.6-8.B', '3.1.6-8.C'])
          .scan(3, 's2h-hawk').qitem(6, 6).hplat(7, 2.4, 3).hplat(9.5, 4.8, 3).hplat(12, 8.4, 2.6)
          .rare(13.3, 9.7, { name: t('Kettle of broad-winged hawks', 'Remolino de gavilanes aludos'), fact: t('Broad-winged hawks circle together on rising warm air, called a kettle, then glide south. Thousands can pass in a few September days.', 'Los gavilanes aludos giran juntos en el aire caliente que sube, en un remolino, y luego planean hacia el sur. Miles pueden pasar en pocos días de septiembre.') })
          .ground(16).scan(3, 's2h-lookout').ground(6)
          .station(['ms2q03', 'ms2q08'])
          .goal();
      } },
    { id: '2-3', title: 'Cherry Springs at Night', theme: 'night', codes: ['3.1.6-8.H'],
      es: { title: 'Cherry Springs de noche', log: 'Diario de misión: el Parque Estatal Cherry Springs, uno de los cielos más oscuros del este. Esta noche estudiaré los sentidos: ¿cómo perciben los receptores los estímulos y avisan al cerebro?',
            outro: 'Informe enviado: los receptores perciben los estímulos, los nervios llevan el mensaje y el cerebro decide la respuesta.' },
      log: 'Mission log: Cherry Springs State Park, one of the darkest skies in the eastern United States. Tonight I study the senses: how do receptors sense stimuli and tell the brain?',
      outro: 'Report sent: receptors sense stimuli, nerves carry the message and the brain decides on the response.',
      build: function (b) {
        b.hint(5, 4.6, t('A dark-sky park at night. Your lamp lights the way!', 'Un parque de cielo oscuro de noche. ¡Tu lámpara ilumina el camino!')).sparks(9, 1.2, 4).ground(14).review()
          .quest({ icon: '✨', look: 'drop', color: '#e4ff6a', name: t('Count the fireflies', 'Cuenta las luciérnagas'),
                   done: t('The Pennsylvania firefly is the state insect. Fireflies flash light to find each other in the dark.', 'La luciérnaga de Pensilvania es el insecto del estado. Las luciérnagas brillan para encontrarse en la oscuridad.') })
          .scan(3, 's2n-sky').scan(8, 's2n-eye').qitem(11, 2.4).ground(13)
          .hint(-4, 4.6, t('Bats are hunting insects! Duck under them.', '¡Los murciélagos cazan insectos! Agáchate.')).hazard(-1, 1.9, { look: 'bat', ax: 2.2, ay: 0.5, sp: 1.3 })
          .gap(3.2).ground(10)
          .scan(3, 's2n-owl').scan(8, 's2n-skin').scan(13, 's2n-smoke').ground(16)
          .hunt('h2-stim')
          .qitem(3, 3.4).ground(6).crumbleBridge(3, 'crumble')
          .scan(3, 's2n-nerve').scan(8, 's2n-brain').ground(11)
          .become('b2-nerve')
          .hazard(4, 1.3, { look: 'mosquito', ax: 1.8, ay: 0.4, sp: 1.2 }).qitem(8, 0.5).ground(12)
          .refuel().scan(3, 's2n-response').scan(8, 's2n-nervous').ground(11)
          .sequence('seq2-sense')
          .hplat(-7, 2.4, 3).hplat(-4.5, 4.8, 3).hplat(-2, 8.4, 2.6)
          .rare(-0.7, 9.7, { name: t('Luna moth', 'Polilla luna'), fact: t('Adult luna moths have no mouth. They live only about a week, just long enough to find a mate.', 'Las polillas luna adultas no tienen boca. Viven solo una semana, el tiempo justo para encontrar pareja.') })
          .hazard(5, 1.9, { look: 'bat', ax: 2.6, ay: 0.6, sp: 1.5 }).qitem(9, 3.6).ground(13)
          .crumbleBridge(4, 'mix').mixed(2, ['3.1.6-8.C'])
          .wordbank('wb2-senses')
          .station(['ms2q14', 'ms2q15'])
          .goal();
      } },
    { id: '2-4', title: 'Your Brain', theme: 'lab', codes: ['3.1.6-8.H'],
      es: { title: 'Tu cerebro', log: 'Diario de misión: la exposición "Your Brain" del Instituto Franklin, en Filadelfia. Treparé una red gigante de neuronas. ¿Cuándo usa el cerebro un mensaje enseguida y cuándo lo guarda como recuerdo?',
            outro: 'Informe enviado: los mensajes de los sentidos llegan al cerebro. Algunos causan una conducta inmediata y otros se guardan como recuerdos para aprender.' },
      log: 'Mission log: The "Your Brain" exhibit at The Franklin Institute in Philadelphia. I will climb a giant network of neurons. When does the brain use a message right away, and when does it store it as a memory?',
      outro: 'Report sent: messages from the senses reach the brain. Some cause immediate behavior, and some are stored as memories for learning.',
      build: function (b) {
        b.hint(5, 4.6, t('The Your Brain exhibit. Climb the Neural Climb!', 'La exposición Your Brain. ¡Trepa la Escalada Neuronal!')).sparks(9, 1.2, 4).ground(14).review()
          .quest({ icon: '🎖️', look: 'stack', color: '#ffd166', name: t('Collect the five sense badges', 'Reúne las cinco insignias de los sentidos'),
                   done: t('Sight, hearing, touch, smell and taste: each sense has its own receptors, and all of them send messages to the brain.', 'Vista, oído, tacto, olfato y gusto: cada sentido tiene sus propios receptores, y todos envían mensajes al cerebro.') })
          .scan(3, 's2b-neuron').scan(8, 's2b-spinal').ground(11)
          .hint(1, 4.8, t('Climb the network of neurons!', '¡Trepa la red de neuronas!')).plat(4, 2.2, 3).plat(8, 4.2, 3).qitem(9.5, 5.4).plat(12, 6.2, 3).plat(16, 4.2, 3).sparks(12.5, 7.2, 3).ground(20)
          .scan(3, 's2b-react').scan(8, 's2b-reflex').ground(11)
          .readData('d2-react')
          .bridge(11, { sp: 1.0 }).qitem(-5.5, 3.2).ground(4).bridge(11, { ay: 1.6, sp: 1.0 })
          .scan(3, 's2b-behavior').scan(8, 's2b-memory').ground(11)
          .station([{ sort: 'sort2-mem', n: 4 }])
          .hint(1, 4.6, t('Crawl through the tangle of nerve fibers (duck: down arrow or S).', 'Arrástrate por la maraña de fibras nerviosas (agáchate: flecha abajo o S).')).squeeze(5, 5).qitem(12, 0.5).ground(15)
          .refuel().scan(3, 's2b-learn').scan(8, 's2b-taste').ground(11)
          .plat(3, 2.4, 2.6).plat(6.5, 4.4, 2.6).plat(10, 6.4, 2.6).hplat(13.5, 8.4, 2.6)
          .rare(14.8, 9.7, { name: t('Neuron model', 'Modelo de neurona'), fact: t('Your brain has about 86 billion neurons, and each one can connect with thousands of others.', 'Tu cerebro tiene unos 86,000 millones de neuronas, y cada una puede conectarse con miles de otras.') })
          .qitem(17, 0.5).ground(19)
          .crumbleBridge(4, 'mix').mixed(3, ['3.1.6-8.C', '3.1.6-8.H'])
          .station(['ms2q18', 'ms2q20'])
          .hint(1, 6.6, t('World 2 Lab Lock: solve the clues to open the last gate.', 'Candado del Mundo 2: resuelve las pistas para abrir la última puerta.'))
          .lablock('lock2')
          .goal();
      } }
  ]
});
})();
