/* WORLD 3 GAME FILE: Food and Energy for Life (middle school edition).
   Standards (for teachers): 3.1.6-8.F photosynthesis in the cycling of matter and flow of energy into and out of organisms;
   3.1.6-8.G food rearranged through chemical reactions into new molecules that support growth and/or release energy;
   3.1.6-8.E environmental and genetic factors influence the growth of organisms.
   Content (scans, questions, activities, English and Spanish) is in world3-questions.js.
   3-1 Jennings Prairie (Butler County, Pennsylvania): inputs and outputs of photosynthesis, pondweed oxygen data; grasshoppers and yellowjackets.
   3-2 Giant kelp forest, Monterey Bay (California): photosynthesis in the ocean, follow the energy maze, oxygen through the day; jellies and urchins.
   3-3 A lunch's journey (shrink ray): digestion as chemical reactions, growth or energy, Digestion Mini Golf side game; gas bubbles.
   3-4 Community garden test plots (Philadelphia): genetic and environmental factors, pea and bean data, soil moisture balance; Japanese beetles; World 3 Lab Lock.
   Signs use FieldGuide.t('English', 'Español'). */
(function () {
const t = function (en, es) { return FieldGuide.t(en, es); };
FieldGuide.registerWorld({
  id: 3,
  title: 'Food and Energy for Life', es: { title: 'Alimento y energía para la vida' },
  levels: [
    { id: '3-1', title: 'Jennings Prairie', theme: 'meadow', codes: ['3.1.6-8.F'],
      es: { title: 'La pradera de Jennings', log: 'Diario de misión: la pradera del Centro de Educación Ambiental Jennings, en el condado de Butler, Pensilvania. Las plantas no comen. Entonces, ¿de dónde sacan su alimento y su energía?',
            outro: 'Informe enviado: las hojas toman dióxido de carbono y agua y, con la energía de la luz, los reorganizan en azúcar y oxígeno. La energía y la materia entran así en los seres vivos.' },
      log: 'Mission log: The prairie at Jennings Environmental Education Center, Butler County, Pennsylvania. Plants do not eat. So where do they get their food and energy?',
      outro: 'Report sent: leaves take in carbon dioxide and water and, with light energy, rearrange them into sugar and oxygen. That is how energy and matter enter living things.',
      build: function (b) {
        b.hint(5, 4.6, t('One of Pennsylvania’s last prairies. Scan the plants!', 'Una de las últimas praderas de Pensilvania. ¡Escanea las plantas!')).sparks(9, 1.2, 4).ground(14).review()
          .quest({ icon: '🐝', look: 'critter', color: '#ffd23a', name: t('Count the bumble bees', 'Cuenta los abejorros'),
                   done: t('Bumble bees drink nectar, sugar water that flowers make from photosynthesis. In return, they carry pollen from flower to flower.', 'Los abejorros toman néctar, agua con azúcar que las flores fabrican con la fotosíntesis. A cambio, llevan polen de flor en flor.') })
          .scan(3, 's3-prairie').scan(8, 's3-sun').ground(11)
          .hint(-4, 4.6, t('Grasshoppers leap through the tall grass. Jump over them!', 'Los saltamontes saltan entre el pasto alto. ¡Salta por encima!')).hazard(-1.5, 0.4, { look: 'hopper', ax: 1.4, ay: 1.2, sp: 1.1 })
          .scan(4, 's3-leaf').qitem(7, 3.4).scan(10, 's3-chloro').ground(13)
          .hunt('h3-inputs')
          .rise(1.4).ground(5).rise(1.4).ground(6)
          .scan(3, 's3-stoma').scan(8, 's3-roots').scan(13, 's3-air').ground(16)
          .become('b3-co2')
          .hazard(4, 0.4, { look: 'hopper', ax: 1.8, ay: 1.4, sp: 1.2 }).qitem(9, 3.6).ground(13)
          .station([{ sort: 'sort3-io', n: 4 }])
          .refuel().scan(3, 's3-oxygen').scan(8, 's3-sugar').ground(11)
          .readData('d3-bubbles')
          .hint(1, 4.6, t('Yellowjackets love the nectar! Walk under them.', '¡A las avispas les encanta el néctar! Pasa por debajo.')).hazard(6, 3.4, { look: 'wasp', ax: 1.6, ay: 0.3, sp: 0.9 }).ground(11)
          .hplat(1, 2.4, 3).hplat(3.5, 4.8, 3).qitem(4.8, 6).hplat(6, 8.4, 2.6)
          .rare(7.3, 9.7, { name: t('Eastern massasauga', 'Massasauga del este'), fact: t('Jennings is one of the last places in Pennsylvania where this small, endangered rattlesnake lives. It hides in the prairie’s wet grasses.', 'Jennings es uno de los últimos lugares de Pensilvania donde vive esta pequeña serpiente de cascabel en peligro. Se esconde entre los pastos húmedos de la pradera.') })
          .ground(10)
          .sequence('seq3-photo')
          .crumbleBridge(4, 'mix').mixed(2, ['3.1.6-8.B', '3.1.6-8.C'])
          .scan(3, 's3-hopper').qitem(6, 0.5).ground(9)
          .station(['ms3q01', 'ms3q04'])
          .goal();
      } },
    { id: '3-2', title: 'Monterey Kelp Forest', theme: 'kelp', codes: ['3.1.6-8.F'],
      es: { title: 'Bosque de kelp de Monterey', log: 'Diario de misión: la bahía de Monterey, en California. Bajo el agua crece un bosque de kelp gigante. ¿Cómo entra la energía del Sol en este bosque, y hacia dónde va la materia?',
            outro: 'Informe enviado: el kelp captura la energía luminosa por fotosíntesis. La energía y la materia pasan a los erizos y a las nutrias, y el carbono vuelve al agua en un ciclo.' },
      log: 'Mission log: Monterey Bay, California. Under the water grows a forest of giant kelp. How does the Sun’s energy get into this forest, and where does the matter go?',
      outro: 'Report sent: kelp captures light energy by photosynthesis. Energy and matter move into urchins and otters, and the carbon cycles back into the water.',
      build: function (b) {
        b.hint(5, 4.6, t('The rocky coast of Monterey Bay. Dive into the kelp forest!', 'La costa rocosa de la bahía de Monterey. ¡Lánzate al bosque de kelp!')).sparks(8, 1.2, 3).ground(13).review()
          .quest({ icon: '🫧', look: 'drop', color: '#c0a040', name: t('Find 4 kelp gas bladders', 'Encuentra 4 vejigas de gas del kelp'),
                   done: t('Gas bladders float the kelp blades up near the surface, where sunlight for photosynthesis is strongest.', 'Las vejigas de gas hacen flotar las hojas del kelp cerca de la superficie, donde la luz para la fotosíntesis es más fuerte.') })
          .scan(3, 's3k-light').ground(6)
          .hint(1, 4.6, t('Jump to swim up, duck to dive.', 'Salta para nadar hacia arriba y agáchate para bucear.'))
          .ground(3).sea(-0.6).gap(1).rise(-8)
          .scan(4, 's3k-kelp').scan(9, 's3k-float').qitem(12, 3).hazard(15, 3, { look: 'jelly', ax: 1, ay: 1.2, sp: 0.6 }).ground(19)
          .scan(4, 's3k-co2').scan(9, 's3k-plankton').ground(13)
          .hint(1, 4.6, t('Swim up the kelp toward the sunlight!', '¡Nada por el kelp hacia la luz del sol!')).plat(4, 2.4, 2.6).plat(7, 4.8, 2.6).plat(10, 7.2, 2.6).qitem(10.8, 8.4).ground(14)
          .maze('maze3-energy')
          .scan(4, 's3k-urchin').hazard(8, 0.45, { look: 'urchin', ax: 0, ay: 0 }).scan(12, 's3k-otter').hazard(16, 0.45, { look: 'urchin', ax: 0, ay: 0 }).ground(20)
          .readData('d3-oxygen')
          .refuel().scan(4, 's3k-fish').scan(9, 's3k-cycle').qitem(12, 2).ground(15)
          .hazard(5, 2.6, { look: 'jelly', ax: 1.2, ay: 1.4, sp: 0.6 }).hazard(11, 3.4, { look: 'jelly', ax: 0.8, ay: 1.6, sp: 0.5 }).ground(15)
          .wordbank('wb3-photo')
          .hplat(3, 2.4, 2.6).hplat(6, 4.8, 2.6).hplat(9, 7.2, 2.6)
          .rare(10.2, 8.5, { name: t('Sea otter', 'Nutria marina'), fact: t('Sea otters dive to the sea floor to grab urchins, then float on their backs to eat. To rest, they wrap themselves in kelp so they do not drift away.', 'Las nutrias marinas bucean hasta el fondo para atrapar erizos y luego flotan boca arriba para comer. Para descansar, se enrollan en el kelp para no irse a la deriva.') })
          .qitem(13, 3).ground(16)
          .shore().rise(8).ground(8)
          .hint(1, 4.6, t('Back on shore! Careful: these rocks crumble.', '¡De vuelta en la orilla! Cuidado: estas rocas se desmoronan.')).ground(8)
          .crumbleBridge(4, 'mix').mixed(2, ['3.1.6-8.F'])
          .station(['ms3q09', 'ms3q10'])
          .goal();
      } },
    { id: '3-3', title: 'A Lunch’s Journey', theme: 'gut', codes: ['3.1.6-8.G'],
      es: { title: 'El viaje de un almuerzo', log: 'Diario de misión: otra vez con el rayo para encogerme. Viajaré con un sándwich de pavo por el cuerpo de un estudiante. ¿Cómo se convierte el almuerzo en músculo y en energía?',
            outro: 'Informe enviado: la digestión rompe los alimentos con reacciones químicas. Las moléculas pequeñas viajan a las células, que las reorganizan en moléculas nuevas para crecer o las usan para liberar energía.' },
      log: 'Mission log: Shrink ray again. I will ride along with a turkey sandwich through a student’s body. How does lunch turn into muscle and energy?',
      outro: 'Report sent: digestion breaks food apart with chemical reactions. Small molecules travel to the cells, which rearrange them into new molecules for growth or use them to release energy.',
      build: function (b) {
        b.hint(5, 4.6, t('Shrunk down again, riding along with a turkey sandwich!', '¡Encogido otra vez, viajando con un sándwich de pavo!')).sparks(9, 1.2, 4).ground(14).review()
          .quest({ icon: '🦠', look: 'rod', color: '#7be0ad', name: t('Find 4 helpful gut bacteria', 'Encuentra 4 bacterias útiles del intestino'),
                   done: t('Trillions of bacteria live in your large intestine. They break down some fiber and make some vitamins that your body uses.', 'Billones de bacterias viven en tu intestino grueso. Descomponen una parte de la fibra y fabrican algunas vitaminas que usa tu cuerpo.') })
          .scan(3, 's3g-lunch').scan(8, 's3g-molecule').ground(11)
          .scan(3, 's3g-mouth').scan(8, 's3g-enzyme').qitem(11, 3.4).ground(13)
          .hint(1, 4.8, t('Muscles squeeze the food down to the stomach. Ride the moving platforms!', 'Los músculos empujan el alimento hasta el estómago. ¡Súbete a las plataformas que se mueven!')).bridge(11, { sp: 1.0 }).qitem(-5.5, 3.2).ground(4).bridge(11, { ay: 1.4, sp: 1.1 })
          .scan(3, 's3g-reaction').ground(6)
          .hint(-4, 4.6, t('Gas bubbles! Wait for them to float past.', '¡Burbujas de gas! Espera a que pasen flotando.')).hazard(-1, 1.6, { look: 'bubble', ax: 0.6, ay: 1.6, sp: 0.7 })
          .station([{ sort: 'sort3-use', n: 4 }])
          .scan(3, 's3g-villi').scan(8, 's3g-amino').ground(11)
          .hunt('h3-small')
          .hint(1, 4.6, t('Squeeze between the villi (duck: down arrow or S).', 'Pasa entre las vellosidades (agáchate: flecha abajo o S).')).squeeze(5, 5).ground(15)
          .scan(3, 's3g-blood').scan(8, 's3g-growth').ground(11)
          .become('b3-sugar')
          .sequence('seq3-protein')
          .refuel().scan(3, 's3g-mito').scan(8, 's3g-fiber').qitem(11, 0.5).ground(13)
          .hazard(5, 1.8, { look: 'bubble', ax: 1, ay: 1.4, sp: 0.8 }).qitem(10, 3.6).ground(13)
          .hplat(-7, 2.4, 3).hplat(-4.5, 4.8, 3).hplat(-2, 8.4, 2.6)
          .rare(-0.7, 9.7, { name: t('A villus up close', 'Una vellosidad de cerca'), fact: t('Millions of tiny villi give the small intestine a huge surface for absorbing food molecules. Each villus is covered in even tinier bumps.', 'Millones de vellosidades diminutas le dan al intestino delgado una superficie enorme para absorber las moléculas de los alimentos. Cada vellosidad está cubierta de bultitos todavía más pequeños.') })
          .crumbleBridge(4, 'mix').mixed(2, ['3.1.6-8.C', '3.1.6-8.F'])
          .station(['ms3q13', 'ms3q16'])
          .clue(3, 'ms3q14').ground(6).clue(2, 'ms3q15').ground(7).clue(2, 'ms3q17').ground(5)
          .hint(1, 6.6, t('Side game! The portal’s code is the letters of your 3 clue answers.', '¡Juego extra! El código del portal son las letras de tus 3 respuestas a las pistas.')).portal(6, 'golf').ground(11)
          .goal();
      } },
    { id: '3-4', title: 'Garden Test Plots', theme: 'garden', codes: ['3.1.6-8.E'],
      es: { title: 'Parcelas de prueba del huerto', log: 'Diario de misión: un huerto comunitario de Filadelfia. Los jardineros siembran semillas en distintas parcelas para hacer pruebas. ¿Por qué unas plantas crecen más que otras?',
            outro: 'Informe enviado: los genes de la semilla (factores genéticos) y la luz, el agua, los nutrientes y la temperatura (factores ambientales) influyen juntos en el crecimiento.' },
      log: 'Mission log: A community garden in Philadelphia. The gardeners plant seeds in different test plots. Why do some plants grow more than others?',
      outro: 'Report sent: the seed’s genes (genetic factors) and light, water, nutrients and temperature (environmental factors) work together to affect growth.',
      build: function (b) {
        b.hint(5, 4.6, t('Test plots: same seeds, different conditions!', 'Parcelas de prueba: las mismas semillas, condiciones distintas.')).sparks(9, 1.2, 4).ground(14).review()
          .quest({ icon: '🍅', look: 'drop', color: '#e04a3a', name: t('Pick 4 ripe tomatoes', 'Cosecha 4 tomates maduros'),
                   done: t('Tomatoes need warm weather, full sun and steady water. Gardeners control the environment to help their plants grow.', 'Los tomates necesitan clima cálido, pleno sol y agua constante. Los jardineros controlan el ambiente para ayudar a sus plantas a crecer.') })
          .scan(3, 's3e-seeds').scan(8, 's3e-genes').ground(11)
          .hint(-4, 4.6, t('Japanese beetles are eating the leaves! Jump over them.', '¡Los escarabajos japoneses se comen las hojas! Salta por encima.')).hazard(-1.5, 0.3, { look: 'beetle', ax: 1.4, ay: 0, sp: 0.8 })
          .scan(4, 's3e-sun').qitem(7, 3.4).scan(10, 's3e-shade').ground(13)
          .readData('d3-peas')
          .hint(1, 4.6, t('Hop across the raised beds!', '¡Salta por las camas elevadas!')).plat(4, 2.2, 3).plat(8, 4.2, 3).qitem(9.5, 5.4).plat(12, 2.2, 3).ground(16)
          .scan(3, 's3e-water').scan(8, 's3e-compost').ground(11)
          .readData('d3-water')
          .station([{ sort: 'sort3-factor', n: 4 }])
          .refuel().scan(3, 's3e-hydrangea').scan(8, 's3e-temp').ground(11)
          .hint(1, 6.4, t('Keep the test bed watered, but not soggy!', '¡Mantén regada la parcela de prueba, pero no empapada!'))
          .balance('bal3-soil')
          .hazard(5, 0.3, { look: 'beetle', ax: 1.8, ay: 0, sp: 1.0 }).hazard(10, 0.4, { look: 'hopper', ax: 1.2, ay: 1.2, sp: 1.1 }).qitem(12, 3.6).ground(15)
          .scan(3, 's3e-tomato').ground(6)
          .plat(3, 2.4, 2.6).plat(6.5, 4.4, 2.6).plat(10, 6.4, 2.6).hplat(13.5, 8.4, 2.6)
          .rare(14.8, 9.7, { name: t('Giant pumpkin', 'Calabaza gigante'), fact: t('Record giant pumpkins weigh over 2,000 pounds. Growers need seeds from giant parents (genetic) AND lots of sun, water, nutrients and space (environmental).', 'Las calabazas gigantes de récord pesan más de 2,000 libras. Los cultivadores necesitan semillas de padres gigantes (genético) Y mucho sol, agua, nutrientes y espacio (ambiental).') })
          .qitem(17, 0.5).ground(19)
          .crumbleBridge(4, 'mix').mixed(3, ['3.1.6-8.F', '3.1.6-8.G'])
          .station(['ms3q25', 'ms3q26'])
          .hint(1, 6.6, t('World 3 Lab Lock: solve the clues to open the last gate.', 'Candado del Mundo 3: resuelve las pistas para abrir la última puerta.'))
          .lablock('lock3')
          .goal();
      } }
  ]
});
})();
