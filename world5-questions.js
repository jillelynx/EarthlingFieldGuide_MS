/* WORLD 5 QUESTION FILE: Passing On Traits (middle school edition)
   Made by tools/content/build_world.py from the content files in tools/content (edit those, then run it again).
   "code" is the PA STEELS grades 6-8 standard. "es" holds the Spanish text for the same item.
   In "questions", "answer" is the position of the correct option, counting from 0. The game shuffles the options. */
FieldGuide.registerQuestions(5, {
 "tokens": [
  {
   "id": "h5-structures",
   "code": "3.1.6-8.D",
   "prompt": "Collect only PLANT STRUCTURES that help a plant reproduce",
   "good": [
    "Bright petals",
    "Nectar glands",
    "Seed parachutes",
    "Hooked burrs",
    "Juicy fruit"
   ],
   "bad": [
    {
     "text": "A bird’s nest",
     "explain": "A nest is built by an animal. It helps birds reproduce, not plants.",
     "es": {
      "text": "Un nido de ave",
      "explain": "Un nido lo construye un animal. Ayuda a las aves a reproducirse, no a las plantas."
     }
    },
    {
     "text": "Tree bark",
     "explain": "Bark protects the trunk, but it does not help make or spread seeds.",
     "es": {
      "text": "Corteza de árbol",
      "explain": "La corteza protege el tronco, pero no ayuda a producir ni a esparcir semillas."
     }
    },
    {
     "text": "A rock",
     "explain": "A rock is not a part of a plant.",
     "es": {
      "text": "Una roca",
      "explain": "Una roca no es parte de una planta."
     }
    }
   ],
   "es": {
    "prompt": "Recoge solo las ESTRUCTURAS DE LAS PLANTAS que las ayudan a reproducirse",
    "good": [
     "Pétalos brillantes",
     "Glándulas de néctar",
     "Paracaídas de semillas",
     "Abrojos con ganchos",
     "Fruto jugoso"
    ]
   }
  },
  {
   "id": "h5-genes",
   "code": "3.1.6-8.M",
   "prompt": "Collect only the places where GENES are found",
   "good": [
    "Chromosomes",
    "DNA",
    "The nucleus"
   ],
   "bad": [
    {
     "text": "Sugar",
     "explain": "Sugar is food for the cell. It does not carry genes.",
     "es": {
      "text": "Azúcar",
      "explain": "El azúcar es alimento para la célula. No lleva genes."
     }
    },
    {
     "text": "Cave water",
     "explain": "Water is not part of the genetic material.",
     "es": {
      "text": "Agua de la cueva",
      "explain": "El agua no es parte del material genético."
     }
    },
    {
     "text": "Oxygen",
     "explain": "Oxygen is a gas that cells use. It does not hold instructions.",
     "es": {
      "text": "Oxígeno",
      "explain": "El oxígeno es un gas que usan las células. No guarda instrucciones."
     }
    }
   ],
   "es": {
    "prompt": "Recoge solo los lugares donde se encuentran los GENES",
    "good": [
     "Cromosomas",
     "ADN",
     "El núcleo"
    ]
   }
  },
  {
   "id": "h5-desired",
   "code": "3.1.6-8.R",
   "prompt": "Collect only DESIRED TRAITS a farmer might breed for",
   "good": [
    "More milk",
    "Bigger ears of corn",
    "Resistance to disease",
    "Sweeter strawberries"
   ],
   "bad": [
    {
     "text": "Getting sick easily",
     "explain": "Farmers want animals and crops that stay healthy.",
     "es": {
      "text": "Enfermarse fácilmente",
      "explain": "Los agricultores quieren animales y cultivos que se mantengan sanos."
     }
    },
    {
     "text": "Tiny, sour fruit",
     "explain": "Farmers breed for bigger, tastier fruit.",
     "es": {
      "text": "Frutos diminutos y ácidos",
      "explain": "Los agricultores buscan frutos más grandes y sabrosos."
     }
    },
    {
     "text": "Weak stems that fall over",
     "explain": "Weak stems would ruin the crop. Farmers want strong stems.",
     "es": {
      "text": "Tallos débiles que se caen",
      "explain": "Los tallos débiles arruinarían la cosecha. Los agricultores quieren tallos fuertes."
     }
    }
   ],
   "es": {
    "prompt": "Recoge solo los RASGOS DESEADOS que un agricultor podría buscar al criar",
    "good": [
     "Más leche",
     "Mazorcas más grandes",
     "Resistencia a enfermedades",
     "Fresas más dulces"
    ]
   }
  }
 ],
 "sorts": [
  {
   "id": "sort5-behave",
   "code": "3.1.6-8.D",
   "prompt": "Is this an animal BEHAVIOR or a plant STRUCTURE that helps with reproduction?",
   "options": [
    "Animal behavior",
    "Plant structure"
   ],
   "hint": "Behaviors are things animals DO. Structures are parts a plant HAS.",
   "items": [
    {
     "text": "A bluebird building a nest",
     "answer": 0,
     "explain": "Nest building is something the bird does: a behavior.",
     "es": {
      "text": "Un azulejo que construye un nido",
      "explain": "Hacer un nido es algo que hace el ave: una conducta."
     }
    },
    {
     "text": "The cardinal flower’s red tube",
     "answer": 1,
     "explain": "The tube is a part of the flower: a structure.",
     "es": {
      "text": "El tubo rojo de la flor cardenal",
      "explain": "El tubo es una parte de la flor: una estructura."
     }
    },
    {
     "text": "A male cardinal singing",
     "answer": 0,
     "explain": "Singing to attract a mate is a behavior.",
     "es": {
      "text": "Un cardenal macho que canta",
      "explain": "Cantar para atraer pareja es una conducta."
     }
    },
    {
     "text": "Milkweed seed parachutes",
     "answer": 1,
     "explain": "The parachute is a part of the seed: a structure.",
     "es": {
      "text": "Los paracaídas de las semillas de algodoncillo",
      "explain": "El paracaídas es una parte de la semilla: una estructura."
     }
    },
    {
     "text": "A doe hiding her fawn in tall grass",
     "answer": 0,
     "explain": "Hiding the young is a parental care behavior.",
     "es": {
      "text": "Una venada que esconde a su cervatillo en el pasto alto",
      "explain": "Esconder a la cría es una conducta de cuidado de las crías."
     }
    },
    {
     "text": "Nectar glands deep in a flower",
     "answer": 1,
     "explain": "The glands are part of the flower: a structure that attracts pollinators.",
     "es": {
      "text": "Glándulas de néctar en lo hondo de una flor",
      "explain": "Las glándulas son parte de la flor: una estructura que atrae polinizadores."
     }
    }
   ],
   "es": {
    "prompt": "¿Es una CONDUCTA animal o una ESTRUCTURA de la planta que ayuda a la reproducción?",
    "options": [
     "Conducta animal",
     "Estructura de la planta"
    ],
    "hint": "Las conductas son cosas que los animales HACEN. Las estructuras son partes que una planta TIENE."
   }
  },
  {
   "id": "sort5-repro",
   "code": "3.1.6-8.N",
   "prompt": "Asexual (one parent) or sexual (two parents)?",
   "options": [
    "Asexual",
    "Sexual"
   ],
   "hint": "Asexual offspring are copies of one parent. Sexual offspring get genes from two parents.",
   "items": [
    {
     "text": "A strawberry plant growing from a runner",
     "answer": 0,
     "explain": "One parent, identical copy: asexual.",
     "es": {
      "text": "Una planta de fresa que crece de un estolón",
      "explain": "Un progenitor, copia idéntica: asexual."
     }
    },
    {
     "text": "A strawberry seed from a pollinated flower",
     "answer": 1,
     "explain": "Pollen and egg from two parents: sexual.",
     "es": {
      "text": "Una semilla de fresa de una flor polinizada",
      "explain": "Polen y óvulo de dos progenitores: sexual."
     }
    },
    {
     "text": "A sea anemone splitting in two",
     "answer": 0,
     "explain": "One anemone becomes two clones: asexual.",
     "es": {
      "text": "Una anémona de mar que se divide en dos",
      "explain": "Una anémona se vuelve dos clones: asexual."
     }
    },
    {
     "text": "Sea stars releasing eggs and sperm",
     "answer": 1,
     "explain": "Eggs and sperm from two parents join: sexual.",
     "es": {
      "text": "Estrellas de mar que sueltan óvulos y espermatozoides",
      "explain": "Se unen óvulos y espermatozoides de dos progenitores: sexual."
     }
    },
    {
     "text": "A summer aphid having babies without a mate",
     "answer": 0,
     "explain": "Only one parent: asexual.",
     "es": {
      "text": "Una hembra de pulgón que tiene crías sin pareja en verano",
      "explain": "Solo un progenitor: asexual."
     }
    },
    {
     "text": "Puppies born to two dogs",
     "answer": 1,
     "explain": "Two parents, so each puppy is a little different: sexual.",
     "es": {
      "text": "Cachorros que nacen de dos perros",
      "explain": "Dos progenitores, así que cada cachorro es un poco distinto: sexual."
     }
    }
   ],
   "es": {
    "prompt": "¿Asexual (un progenitor) o sexual (dos progenitores)?",
    "options": [
     "Asexual",
     "Sexual"
    ],
    "hint": "Las crías asexuales son copias de un progenitor. Las crías sexuales reciben genes de dos progenitores."
   }
  },
  {
   "id": "sort5-effect",
   "code": "3.1.6-8.M",
   "prompt": "Is the effect of this mutation HARMFUL, BENEFICIAL or NEUTRAL?",
   "options": [
    "Harmful",
    "Beneficial",
    "Neutral"
   ],
   "hint": "Harmful makes survival harder. Beneficial helps. Neutral makes no difference.",
   "items": [
    {
     "text": "Red blood cells that bend into sickles",
     "answer": 0,
     "explain": "The cells can block blood flow: harmful.",
     "es": {
      "text": "Glóbulos rojos que se doblan en forma de hoz",
      "explain": "Las células pueden tapar el paso de la sangre: perjudicial."
     }
    },
    {
     "text": "Adults who can still digest milk, where people raise cows",
     "answer": 1,
     "explain": "They can use milk as food: beneficial.",
     "es": {
      "text": "Adultos que todavía pueden digerir la leche, donde se crían vacas",
      "explain": "Pueden usar la leche como alimento: beneficioso."
     }
    },
    {
     "text": "A cavefish losing its color in total darkness",
     "answer": 2,
     "explain": "No one can see color in the dark: neutral.",
     "es": {
      "text": "Un pez de cueva que pierde su color en la oscuridad total",
      "explain": "Nadie puede ver el color en la oscuridad: neutral."
     }
    },
    {
     "text": "An albino deer in a sunny forest",
     "answer": 0,
     "explain": "It is easy for predators to see and its eyes are sensitive to light: harmful.",
     "es": {
      "text": "Un venado albino en un bosque soleado",
      "explain": "Los depredadores lo ven fácilmente y sus ojos son sensibles a la luz: perjudicial."
     }
    },
    {
     "text": "Bacteria that survive an antibiotic",
     "answer": 1,
     "explain": "For the bacteria, surviving the medicine is beneficial.",
     "es": {
      "text": "Bacterias que sobreviven a un antibiótico",
      "explain": "Para las bacterias, sobrevivir al medicamento es beneficioso."
     }
    },
    {
     "text": "A change in DNA that does not change the protein at all",
     "answer": 2,
     "explain": "If the protein is the same, the organism is the same: neutral.",
     "es": {
      "text": "Un cambio en el ADN que no cambia la proteína para nada",
      "explain": "Si la proteína es igual, el organismo es igual: neutral."
     }
    }
   ],
   "es": {
    "prompt": "¿El efecto de esta mutación es PERJUDICIAL, BENEFICIOSO o NEUTRAL?",
    "options": [
     "Perjudicial",
     "Beneficioso",
     "Neutral"
    ],
    "hint": "Perjudicial hace más difícil sobrevivir. Beneficioso ayuda. Neutral no hace diferencia."
   }
  },
  {
   "id": "sort5-tech",
   "code": "3.1.6-8.R",
   "prompt": "Selective breeding, or genetic engineering?",
   "options": [
    "Selective breeding",
    "Genetic engineering"
   ],
   "hint": "Selective breeding chooses parents. Genetic engineering changes genes directly in a lab.",
   "items": [
    {
     "text": "Turning wild teosinte into corn",
     "answer": 0,
     "explain": "Farmers chose the best plants for thousands of years: selective breeding.",
     "es": {
      "text": "Convertir el teocintle silvestre en maíz",
      "explain": "Los agricultores eligieron las mejores plantas durante miles de años: cría selectiva."
     }
    },
    {
     "text": "Bacteria that make human insulin",
     "answer": 1,
     "explain": "A human gene was put into bacteria: genetic engineering.",
     "es": {
      "text": "Bacterias que fabrican insulina humana",
      "explain": "Se puso un gen humano en bacterias: ingeniería genética."
     }
    },
    {
     "text": "Hundreds of dog breeds",
     "answer": 0,
     "explain": "People chose which dogs had puppies: selective breeding.",
     "es": {
      "text": "Cientos de razas de perros",
      "explain": "Las personas eligieron qué perros tenían cachorros: cría selectiva."
     }
    },
    {
     "text": "Corn with a bacterium’s insect-fighting gene",
     "answer": 1,
     "explain": "A gene from another organism was added: genetic engineering.",
     "es": {
      "text": "Maíz con un gen de bacteria que combate insectos",
      "explain": "Se agregó un gen de otro organismo: ingeniería genética."
     }
    },
    {
     "text": "Cows that give more milk",
     "answer": 0,
     "explain": "Farmers chose high-milk parents: selective breeding.",
     "es": {
      "text": "Vacas que dan más leche",
      "explain": "Los productores eligieron progenitores que daban mucha leche: cría selectiva."
     }
    },
    {
     "text": "Fish that glow with a jellyfish gene",
     "answer": 1,
     "explain": "A jellyfish gene was added in a lab: genetic engineering.",
     "es": {
      "text": "Peces que brillan con un gen de medusa",
      "explain": "Se agregó un gen de medusa en un laboratorio: ingeniería genética."
     }
    }
   ],
   "es": {
    "prompt": "¿Cría selectiva o ingeniería genética?",
    "options": [
     "Cría selectiva",
     "Ingeniería genética"
    ],
    "hint": "La cría selectiva elige a los progenitores. La ingeniería genética cambia los genes directamente en un laboratorio."
   }
  }
 ],
 "questions": [
  {
   "id": "ms5q01",
   "code": "3.1.6-8.D",
   "prompt": "How do bright petals help a plant reproduce?",
   "options": [
    "They attract pollinators that carry pollen to other flowers.",
    "They make the plant grow taller so it gets more sunlight.",
    "They shade the roots and keep rainwater from reaching them.",
    "They scare away all animals."
   ],
   "answer": 0,
   "hint": "Who notices bright colors?",
   "explain": "Bright petals attract pollinators. More visits mean pollen is more likely to reach another flower.",
   "es": {
    "prompt": "¿Cómo ayudan los pétalos brillantes a que una planta se reproduzca?",
    "options": [
     "Atraen polinizadores que llevan polen a otras flores.",
     "Hacen que la planta crezca más alta para recibir más luz solar.",
     "Dan sombra a las raíces y evitan que les llegue el agua de lluvia.",
     "Asustan a todos los animales."
    ],
    "hint": "¿Quién se fija en los colores brillantes?",
    "explain": "Los pétalos brillantes atraen polinizadores. Más visitas significan más probabilidad de que el polen llegue a otra flor."
   }
  },
  {
   "id": "ms5q02",
   "code": "3.1.6-8.D",
   "prompt": "A male cardinal sings and brings seeds to a female. What kind of behavior is this?",
   "options": [
    "courtship",
    "migration",
    "hibernation",
    "camouflage"
   ],
   "answer": 0,
   "hint": "He is trying to attract a mate.",
   "explain": "Courtship behaviors help an animal attract a mate, which raises its chance of having offspring.",
   "es": {
    "prompt": "Un cardenal macho canta y le lleva semillas a una hembra. ¿Qué tipo de conducta es esta?",
    "options": [
     "cortejo",
     "migración",
     "hibernación",
     "camuflaje"
    ],
    "hint": "Está tratando de atraer pareja.",
    "explain": "Las conductas de cortejo ayudan a un animal a atraer pareja, lo que aumenta su probabilidad de tener crías."
   }
  },
  {
   "id": "ms5q03",
   "code": "3.1.6-8.D",
   "prompt": "Bluebird parents feed their chicks for weeks. How does this behavior affect reproduction?",
   "options": [
    "More chicks survive to grow up.",
    "The parents lay more eggs that day.",
    "The chicks turn into adults overnight.",
    "It has no effect."
   ],
   "answer": 0,
   "hint": "Think about the chicks’ survival.",
   "explain": "Parental care raises the chance that the young survive, which makes reproduction more successful.",
   "es": {
    "prompt": "Los padres del azulejo alimentan a sus polluelos durante semanas. ¿Cómo afecta esta conducta a la reproducción?",
    "options": [
     "Sobreviven más polluelos hasta crecer.",
     "Los padres ponen más huevos ese día.",
     "Los polluelos se vuelven adultos de la noche a la mañana.",
     "No tiene ningún efecto."
    ],
    "hint": "Piensa en la supervivencia de los polluelos.",
    "explain": "El cuidado de las crías aumenta la probabilidad de que sobrevivan, lo que hace más exitosa la reproducción."
   }
  },
  {
   "id": "ms5q04",
   "code": "3.1.6-8.D",
   "prompt": "Why are many flowers that hummingbirds visit red and shaped like a tube?",
   "options": [
    "They fit the hummingbird, so it visits and carries pollen.",
    "Red flowers do not need pollen to make their seeds.",
    "The tube shape keeps bees and birds away from the nectar.",
    "Hummingbirds cannot see red."
   ],
   "answer": 0,
   "hint": "The flower and the bird fit together.",
   "explain": "These structures attract the right pollinator, which raises the probability that the flower makes seeds.",
   "es": {
    "prompt": "¿Por qué muchas flores que visitan los colibríes son rojas y tienen forma de tubo?",
    "options": [
     "Encajan con el colibrí, así que este las visita y lleva polen.",
     "Las flores rojas no necesitan polen para producir sus semillas.",
     "La forma de tubo aleja a las abejas y las aves del néctar.",
     "Los colibríes no pueden ver el rojo."
    ],
    "hint": "La flor y el ave encajan.",
    "explain": "Estas estructuras atraen al polinizador correcto, lo que aumenta la probabilidad de que la flor produzca semillas."
   }
  },
  {
   "id": "ms5q05",
   "code": "3.1.6-8.D",
   "prompt": "Milkweed seeds have silky parachutes. How does this structure help?",
   "options": [
    "The wind carries the seeds to new places to grow.",
    "It makes the seeds heavier so they drop next to the parent.",
    "It feeds the parent plant while the seeds are still attached.",
    "It keeps the seeds from ever growing."
   ],
   "answer": 0,
   "hint": "Think about the wind.",
   "explain": "Parachutes spread seeds far from the parent, where they have space and light to grow.",
   "es": {
    "prompt": "Las semillas del algodoncillo tienen paracaídas sedosos. ¿Cómo ayuda esta estructura?",
    "options": [
     "El viento lleva las semillas a nuevos lugares donde crecer.",
     "Hace que las semillas pesen más y caigan junto a la planta madre.",
     "Alimenta a la planta progenitora mientras las semillas siguen pegadas.",
     "Impide que las semillas crezcan."
    ],
    "hint": "Piensa en el viento.",
    "explain": "Los paracaídas esparcen las semillas lejos de la planta madre, donde tienen espacio y luz para crecer."
   }
  },
  {
   "id": "ms5q06",
   "code": "3.1.6-8.D",
   "prompt": "Flowers covered with a net made far fewer fruits than flowers bees could visit. What does this evidence support?",
   "options": [
    "Pollinators help plants reproduce successfully.",
    "Nets make the flowers grow faster than open ones.",
    "Bees eat all the fruit before it ripens.",
    "Plants never need pollinators."
   ],
   "answer": 0,
   "hint": "What was different about the netted flowers?",
   "explain": "The only difference was the bees. Fewer visits meant less pollination and fewer fruits.",
   "es": {
    "prompt": "Las flores cubiertas con una red dieron muchos menos frutos que las flores que podían visitar las abejas. ¿Qué apoya esta evidencia?",
    "options": [
     "Los polinizadores ayudan a que las plantas se reproduzcan con éxito.",
     "Las redes hacen que las flores crezcan más rápido que las demás.",
     "Las abejas se comen todos los frutos antes de que maduren.",
     "Las plantas nunca necesitan polinizadores."
    ],
    "hint": "¿Qué tenían de distinto las flores con red?",
    "explain": "La única diferencia eran las abejas. Menos visitas significaron menos polinización y menos frutos."
   }
  },
  {
   "id": "ms5q07",
   "code": "3.1.6-8.D",
   "prompt": "Birds eat wild blackberries and drop the seeds far away. Which plant structure helps this happen?",
   "options": [
    "the sweet, juicy fruit",
    "the sharp, thorny stem",
    "the long roots underground",
    "the leaves"
   ],
   "answer": 0,
   "hint": "What do the birds want?",
   "explain": "A tasty fruit rewards animals for carrying seeds away from the parent plant.",
   "es": {
    "prompt": "Las aves comen moras silvestres y dejan caer las semillas lejos. ¿Qué estructura de la planta ayuda a que esto pase?",
    "options": [
     "el fruto dulce y jugoso",
     "el tallo filoso con espinas",
     "las raíces largas bajo tierra",
     "las hojas"
    ],
    "hint": "¿Qué quieren las aves?",
    "explain": "Un fruto sabroso premia a los animales por llevar las semillas lejos de la planta madre."
   }
  },
  {
   "id": "ms5q08",
   "code": "3.1.6-8.D",
   "prompt": "A mother deer hides her spotted fawn in tall grass. Why does this behavior help?",
   "options": [
    "Predators are less likely to find and eat the fawn.",
    "The fawn learns to fly.",
    "The grass feeds the fawn while its mother is away.",
    "It helps the deer find a new mate."
   ],
   "answer": 0,
   "hint": "Think about predators.",
   "explain": "Hiding the fawn is parental care. It raises the probability that the young deer survives.",
   "es": {
    "prompt": "Una venada esconde a su cervatillo con manchas en el pasto alto. ¿Por qué ayuda esta conducta?",
    "options": [
     "Es menos probable que los depredadores encuentren al cervatillo.",
     "El cervatillo aprende a volar.",
     "El pasto alimenta al cervatillo mientras su madre no está.",
     "Ayuda a la venada a encontrar una nueva pareja."
    ],
    "hint": "Piensa en los depredadores.",
    "explain": "Esconder al cervatillo es cuidado de las crías. Aumenta la probabilidad de que el venado joven sobreviva."
   }
  },
  {
   "id": "ms5q09",
   "code": "3.1.6-8.D",
   "prompt": "Which is a SPECIALIZED PLANT STRUCTURE for reproduction?",
   "options": [
    "a flower tube with nectar glands inside",
    "a bird singing to attract a mate",
    "a deer hiding its fawn in the grass",
    "a bee dancing to show others where flowers are"
   ],
   "answer": 0,
   "hint": "It must be a part of a plant.",
   "explain": "A flower tube with nectar glands is a plant structure that attracts pollinators. The others are animal behaviors.",
   "es": {
    "prompt": "¿Cuál es una ESTRUCTURA ESPECIALIZADA DE LA PLANTA para la reproducción?",
    "options": [
     "un tubo de flor con glándulas de néctar adentro",
     "un ave que canta para atraer pareja",
     "un venado que esconde a su cría en el pasto",
     "una abeja que baila para mostrar a otras dónde hay flores"
    ],
    "hint": "Tiene que ser una parte de una planta.",
    "explain": "Un tubo de flor con glándulas de néctar es una estructura de la planta que atrae polinizadores. Las otras son conductas animales."
   }
  },
  {
   "id": "ms5q10",
   "code": "3.1.6-8.D",
   "prompt": "What does it mean to say a behavior raises the PROBABILITY of successful reproduction?",
   "options": [
    "It makes having surviving offspring more likely.",
    "It guarantees hundreds of offspring every single time.",
    "It makes reproduction impossible for the animal.",
    "It changes the animal’s species."
   ],
   "answer": 0,
   "hint": "Probability is about how likely something is.",
   "explain": "A behavior that raises the probability makes it more likely, though not certain, that offspring are born and survive.",
   "es": {
    "prompt": "¿Qué significa decir que una conducta aumenta la PROBABILIDAD de una reproducción exitosa?",
    "options": [
     "Que hace más probable tener crías que sobrevivan.",
     "Que garantiza cientos de crías cada vez.",
     "Que hace imposible la reproducción para el animal.",
     "Que cambia la especie del animal."
    ],
    "hint": "La probabilidad tiene que ver con qué tan posible es algo.",
    "explain": "Una conducta que aumenta la probabilidad hace más posible, aunque no seguro, que nazcan crías y sobrevivan."
   }
  },
  {
   "id": "ms5q11",
   "code": "3.1.6-8.N",
   "prompt": "How many parents are needed for ASEXUAL reproduction?",
   "options": [
    "one",
    "two",
    "three",
    "none"
   ],
   "answer": 0,
   "hint": "A- means without (a second parent).",
   "explain": "Asexual reproduction needs only one parent.",
   "es": {
    "prompt": "¿Cuántos progenitores se necesitan para la reproducción ASEXUAL?",
    "options": [
     "uno",
     "dos",
     "tres",
     "ninguno"
    ],
    "hint": "A- significa sin (un segundo progenitor).",
    "explain": "La reproducción asexual necesita un solo progenitor."
   }
  },
  {
   "id": "ms5q12",
   "code": "3.1.6-8.N",
   "prompt": "Why is a plant grown from a strawberry runner identical to its parent?",
   "options": [
    "It has the same genetic information as its one parent.",
    "It got a mix of genes from two different parents.",
    "The soil around it copies the parent’s shape as it grows.",
    "Bees made it identical."
   ],
   "answer": 0,
   "hint": "Where did all its genes come from?",
   "explain": "With only one parent, the offspring gets an exact copy of that parent’s genetic information: a clone.",
   "es": {
    "prompt": "¿Por qué una planta que creció de un estolón de fresa es idéntica a su progenitor?",
    "options": [
     "Tiene la misma información genética que su único progenitor.",
     "Recibió una mezcla de genes de dos progenitores distintos.",
     "El suelo a su alrededor copia la forma del progenitor mientras crece.",
     "Las abejas la hicieron idéntica."
    ],
    "hint": "¿De dónde vinieron todos sus genes?",
    "explain": "Con un solo progenitor, la cría recibe una copia exacta de la información genética de ese progenitor: un clon."
   }
  },
  {
   "id": "ms5q13",
   "code": "3.1.6-8.N",
   "prompt": "Why do seedlings grown from strawberry seeds look a little different from each other?",
   "options": [
    "Each one got a different mix of genes from two parents.",
    "They all have identical genes.",
    "Seeds have no genes, so they grow in random ways.",
    "They grew from runners of the same parent plant."
   ],
   "answer": 0,
   "hint": "Seeds come from sexual reproduction.",
   "explain": "Sexual reproduction mixes genes from two parents, so each offspring is a little different: genetic variation.",
   "es": {
    "prompt": "¿Por qué las plántulas que crecen de semillas de fresa se ven un poco distintas entre sí?",
    "options": [
     "Cada una recibió otra mezcla de genes de dos progenitores.",
     "Todas tienen genes idénticos.",
     "Las semillas no tienen genes, así que crecen al azar.",
     "Crecieron de estolones de la misma planta progenitora."
    ],
    "hint": "Las semillas vienen de la reproducción sexual.",
    "explain": "La reproducción sexual mezcla los genes de dos progenitores, así que cada cría es un poco distinta: variación genética."
   }
  },
  {
   "id": "ms5q14",
   "code": "3.1.6-8.N",
   "prompt": "An offspring with EXACTLY the same genes as its single parent is called a...",
   "options": [
    "clone",
    "hybrid",
    "mutation",
    "predator"
   ],
   "answer": 0,
   "hint": "It is a copy.",
   "explain": "A clone is an offspring that is genetically identical to its parent.",
   "es": {
    "prompt": "Una cría con EXACTAMENTE los mismos genes que su único progenitor se llama...",
    "options": [
     "clon",
     "híbrido",
     "mutación",
     "depredador"
    ],
    "hint": "Es una copia.",
    "explain": "Un clon es una cría genéticamente idéntica a su progenitor."
   }
  },
  {
   "id": "ms5q15",
   "code": "3.1.6-8.N",
   "prompt": "Which is an example of SEXUAL reproduction?",
   "options": [
    "sea stars releasing eggs and sperm into the water",
    "a sea anemone splitting in two",
    "a strawberry runner rooting",
    "a summer aphid having babies without a mate"
   ],
   "answer": 0,
   "hint": "Look for two parents.",
   "explain": "Eggs and sperm from two parents join, so it is sexual reproduction.",
   "es": {
    "prompt": "¿Cuál es un ejemplo de reproducción SEXUAL?",
    "options": [
     "estrellas de mar que sueltan óvulos y espermatozoides en el agua",
     "una anémona de mar que se divide en dos",
     "un estolón de fresa que echa raíces",
     "una hembra de pulgón que tiene crías sin pareja en verano"
    ],
    "hint": "Busca dos progenitores.",
    "explain": "Se unen óvulos y espermatozoides de dos progenitores, así que es reproducción sexual."
   }
  },
  {
   "id": "ms5q16",
   "code": "3.1.6-8.N",
   "prompt": "A farmer has a strawberry plant with the sweetest berries. Why does she grow new plants from its RUNNERS instead of its seeds?",
   "options": [
    "Runner plants are clones, so all keep the sweet trait.",
    "Seeds always make plants with sweeter berries.",
    "Runners mix genes from two parents to make sweeter berries.",
    "Seeds cannot grow."
   ],
   "answer": 0,
   "hint": "Which method makes exact copies?",
   "explain": "Runners make clones, so every new plant keeps the parent’s sweet berries. Seeds would show variation.",
   "es": {
    "prompt": "Una agricultora tiene una planta de fresa con las fresas más dulces. ¿Por qué cultiva plantas nuevas con sus ESTOLONES y no con sus semillas?",
    "options": [
     "Las plantas de estolón son clones, así que todas conservan el rasgo dulce.",
     "Las semillas siempre dan plantas con fresas más dulces.",
     "Los estolones mezclan genes de dos progenitores para dar fresas más dulces.",
     "Las semillas no pueden crecer."
    ],
    "hint": "¿Qué método produce copias exactas?",
    "explain": "Los estolones forman clones, así que cada planta nueva conserva las fresas dulces del progenitor. Las semillas mostrarían variación."
   }
  },
  {
   "id": "ms5q17",
   "code": "3.1.6-8.N",
   "prompt": "In sexual reproduction, how much of its genetic information does each parent pass on?",
   "options": [
    "about half",
    "absolutely all of it",
    "none of it at all",
    "just one gene"
   ],
   "answer": 0,
   "hint": "Two parents share the job.",
   "explain": "Each parent passes on half of its genetic information, so the offspring has a mix from both.",
   "es": {
    "prompt": "En la reproducción sexual, ¿cuánta de su información genética pasa cada progenitor?",
    "options": [
     "cerca de la mitad",
     "absolutamente toda",
     "nada en absoluto",
     "solo un gen"
    ],
    "hint": "Dos progenitores comparten el trabajo.",
    "explain": "Cada progenitor pasa la mitad de su información genética, así que la cría tiene una mezcla de los dos."
   }
  },
  {
   "id": "ms5q18",
   "code": "3.1.6-8.N",
   "prompt": "Out of 20 plants grown from runners, 0 looked different from the parent. Out of 20 grown from seeds, 17 looked different. What does this evidence show?",
   "options": [
    "Asexual offspring are identical; sexual offspring vary.",
    "Seeds make clones, and runners make variety.",
    "Runners make the most variation of the two methods.",
    "Both methods give plants identical to the parent."
   ],
   "answer": 0,
   "hint": "Compare the two groups.",
   "explain": "The runner plants were clones; the seed plants mixed genes from two parents and varied.",
   "es": {
    "prompt": "De 20 plantas de estolón, 0 se veían distintas del progenitor. De 20 de semilla, 17 se veían distintas. ¿Qué muestra esta evidencia?",
    "options": [
     "Las crías asexuales son idénticas; las sexuales varían.",
     "Las semillas forman clones y los estolones dan variedad.",
     "Los estolones producen más variación que las semillas.",
     "Los dos métodos dan plantas idénticas al progenitor."
    ],
    "hint": "Compara los dos grupos.",
    "explain": "Las plantas de estolón eran clones; las de semilla mezclaron genes de dos progenitores y variaron."
   }
  },
  {
   "id": "ms5q19",
   "code": "3.1.6-8.N",
   "prompt": "A potato grows new plants from the “eyes” on its skin. How do the new plants compare with the parent potato?",
   "options": [
    "They have identical genetic information.",
    "They have a mix of genes from two parents.",
    "They have no genes at all.",
    "They are a different species."
   ],
   "answer": 0,
   "hint": "The eyes grow without pollen or seeds.",
   "explain": "Growing from eyes is asexual reproduction, with only one parent, so the new plants are clones with identical genetic information.",
   "es": {
    "prompt": "Una papa forma plantas nuevas a partir de los “ojos” de su cáscara. ¿Cómo son las plantas nuevas comparadas con la papa progenitora?",
    "options": [
     "Tienen información genética idéntica.",
     "Tienen una mezcla de genes de dos progenitores.",
     "No tienen ningún gen.",
     "Son de otra especie."
    ],
    "hint": "Los ojos crecen sin polen ni semillas.",
    "explain": "Crecer de los ojos es reproducción asexual, con un solo progenitor, así que las plantas nuevas son clones con información genética idéntica."
   }
  },
  {
   "id": "ms5q20",
   "code": "3.1.6-8.N",
   "prompt": "A sea anemone splits in two. How do the two new anemones compare?",
   "options": [
    "They have identical genetic information.",
    "They have completely different genes from each other.",
    "One is a sea star.",
    "They each have genes from two parents."
   ],
   "answer": 0,
   "hint": "Splitting is asexual.",
   "explain": "Splitting is asexual reproduction, so the two halves are clones with identical genes.",
   "es": {
    "prompt": "Una anémona de mar se divide en dos. ¿Cómo son las dos anémonas nuevas?",
    "options": [
     "Tienen información genética idéntica.",
     "Tienen genes completamente distintos entre sí.",
     "Una es una estrella de mar.",
     "Cada una tiene genes de dos progenitores."
    ],
    "hint": "Dividirse es asexual.",
    "explain": "Dividirse es reproducción asexual, así que las dos mitades son clones con genes idénticos."
   }
  },
  {
   "id": "ms5q21",
   "code": "3.1.6-8.M",
   "prompt": "What is a MUTATION?",
   "options": [
    "a change in the DNA of a gene",
    "a new kind of food for cells",
    "a type of cell wall",
    "an animal behavior like singing"
   ],
   "answer": 0,
   "hint": "It happens in the genetic material.",
   "explain": "A mutation is a change in the DNA that makes up a gene.",
   "es": {
    "prompt": "¿Qué es una MUTACIÓN?",
    "options": [
     "un cambio en el ADN de un gen",
     "un nuevo tipo de alimento para las células",
     "un tipo de pared celular",
     "una conducta animal como cantar"
    ],
    "hint": "Ocurre en el material genético.",
    "explain": "Una mutación es un cambio en el ADN que forma un gen."
   }
  },
  {
   "id": "ms5q22",
   "code": "3.1.6-8.M",
   "prompt": "Where are genes found?",
   "options": [
    "on chromosomes in the nucleus",
    "in the cell wall",
    "in the air just outside the cell",
    "only in the blood"
   ],
   "answer": 0,
   "hint": "Think about the zoom-in maze.",
   "explain": "Genes are sections of DNA on chromosomes, inside the nucleus.",
   "es": {
    "prompt": "¿Dónde se encuentran los genes?",
    "options": [
     "en los cromosomas, dentro del núcleo",
     "en la pared celular",
     "en el aire justo afuera de la célula",
     "solo en la sangre"
    ],
    "hint": "Piensa en el laberinto para acercarte.",
    "explain": "Los genes son secciones del ADN en los cromosomas, dentro del núcleo."
   }
  },
  {
   "id": "ms5q23",
   "code": "3.1.6-8.M",
   "prompt": "How can a mutation change a trait?",
   "options": [
    "It changes a gene, which can change the protein it makes.",
    "It changes the weather in the animal’s habitat.",
    "It makes the animal choose different food to eat.",
    "Mutations never change a trait, so nothing happens."
   ],
   "answer": 0,
   "hint": "Gene → protein → trait.",
   "explain": "Genes hold instructions for proteins. A changed gene can make a changed protein, and proteins shape traits.",
   "es": {
    "prompt": "¿Cómo puede una mutación cambiar un rasgo?",
    "options": [
     "Cambia un gen, y eso puede cambiar la proteína que fabrica.",
     "Cambia el clima del hábitat del animal.",
     "Hace que el animal elija otro alimento para comer.",
     "Las mutaciones nunca cambian un rasgo, así que no pasa nada."
    ],
    "hint": "Gen → proteína → rasgo.",
    "explain": "Los genes guardan instrucciones para las proteínas. Un gen cambiado puede fabricar una proteína cambiada, y las proteínas moldean los rasgos."
   }
  },
  {
   "id": "ms5q24",
   "code": "3.1.6-8.M",
   "prompt": "Cavefish live in total darkness. A mutation made them pale. What is the effect of being pale in the cave?",
   "options": [
    "neutral",
    "harmful",
    "beneficial",
    "deadly"
   ],
   "answer": 0,
   "hint": "Can anything see color in the dark?",
   "explain": "No one can see color in total darkness, so scientists think being pale mostly neither helps nor hurts there: neutral.",
   "es": {
    "prompt": "Los peces de cueva viven en oscuridad total. Una mutación los volvió pálidos. ¿Qué efecto tiene ser pálido en la cueva?",
    "options": [
     "neutral",
     "perjudicial",
     "beneficioso",
     "mortal"
    ],
    "hint": "¿Algo puede ver el color en la oscuridad?",
    "explain": "Nadie puede ver el color en la oscuridad total, así que los científicos piensan que allí ser pálido casi no ayuda ni perjudica: neutral."
   }
  },
  {
   "id": "ms5q25",
   "code": "3.1.6-8.M",
   "prompt": "A mutation changes the shape of the hemoglobin protein, so red blood cells bend into sickles that can block blood flow. This effect is...",
   "options": [
    "harmful",
    "beneficial",
    "neutral",
    "helpful for running"
   ],
   "answer": 0,
   "hint": "Does it make survival harder?",
   "explain": "Blocked blood flow causes pain and illness, so this effect is harmful.",
   "es": {
    "prompt": "Una mutación cambia la forma de la proteína hemoglobina, y los glóbulos rojos se doblan en forma de hoz y pueden tapar el paso de la sangre. Este efecto es...",
    "options": [
     "perjudicial",
     "beneficioso",
     "neutral",
     "útil para correr"
    ],
    "hint": "¿Hace más difícil sobrevivir?",
    "explain": "El paso de sangre tapado causa dolor y enfermedad, así que este efecto es perjudicial."
   }
  },
  {
   "id": "ms5q26",
   "code": "3.1.6-8.M",
   "prompt": "In places where people kept cows, a mutation let adults keep digesting milk. What was the effect?",
   "options": [
    "beneficial",
    "harmful",
    "neutral",
    "it made people unable to eat"
   ],
   "answer": 0,
   "hint": "It gave people another food.",
   "explain": "Being able to digest milk gave people another source of food, so the effect was beneficial.",
   "es": {
    "prompt": "En los lugares donde la gente criaba vacas, una mutación permitió que los adultos siguieran digiriendo la leche. ¿Cuál fue el efecto?",
    "options": [
     "beneficioso",
     "perjudicial",
     "neutral",
     "hizo que la gente no pudiera comer"
    ],
    "hint": "Les dio a las personas otro alimento.",
    "explain": "Poder digerir la leche les dio a las personas otra fuente de alimento, así que el efecto fue beneficioso."
   }
  },
  {
   "id": "ms5q27",
   "code": "3.1.6-8.M",
   "prompt": "Can the SAME mutation be harmful in one environment and neutral in another?",
   "options": [
    "Yes, it depends on the environment.",
    "No, a mutation is always harmful in every place.",
    "No, a mutation is always helpful.",
    "No, mutations have no effects."
   ],
   "answer": 0,
   "hint": "Think about the cavefish and their river relatives.",
   "explain": "Whether a mutation helps, hurts or does nothing can depend on the environment.",
   "es": {
    "prompt": "¿La MISMA mutación puede ser perjudicial en un ambiente y neutral en otro?",
    "options": [
     "Sí, depende del ambiente.",
     "No, una mutación siempre es perjudicial en todo lugar.",
     "No, una mutación siempre ayuda.",
     "No, las mutaciones no tienen efectos."
    ],
    "hint": "Piensa en los peces de cueva y sus parientes del río.",
    "explain": "Que una mutación ayude, perjudique o no haga nada puede depender del ambiente."
   }
  },
  {
   "id": "ms5q28",
   "code": "3.1.6-8.M",
   "prompt": "Which list is in order from LARGEST to SMALLEST?",
   "options": [
    "organism, cell, chromosome, gene",
    "gene, chromosome, cell, organism",
    "cell, organism, gene, chromosome",
    "chromosome, organism, gene, cell"
   ],
   "answer": 0,
   "hint": "Start with the whole fish.",
   "explain": "An organism is made of cells; cells hold chromosomes in the nucleus; chromosomes carry genes.",
   "es": {
    "prompt": "¿Qué lista va del MÁS GRANDE al MÁS PEQUEÑO?",
    "options": [
     "organismo, célula, cromosoma, gen",
     "gen, cromosoma, célula, organismo",
     "célula, organismo, gen, cromosoma",
     "cromosoma, organismo, gen, célula"
    ],
    "hint": "Empieza con el pez completo.",
    "explain": "Un organismo está hecho de células; las células guardan los cromosomas en el núcleo; los cromosomas llevan genes."
   }
  },
  {
   "id": "ms5q29",
   "code": "3.1.6-8.M",
   "prompt": "An albino deer has a mutation that blocks its color. How might this affect it in a sunny forest?",
   "options": [
    "Predators can spot its white fur more easily.",
    "Its white fur makes it invisible to predators.",
    "It can digest more of the food it finds.",
    "It runs faster."
   ],
   "answer": 0,
   "hint": "Think about camouflage.",
   "explain": "White fur stands out in a brown forest, so this structural change can be harmful.",
   "es": {
    "prompt": "Un venado albino tiene una mutación que bloquea su color. ¿Cómo podría afectarlo en un bosque soleado?",
    "options": [
     "Los depredadores pueden ver más fácilmente su pelaje blanco.",
     "Su pelaje blanco lo hace invisible para los depredadores.",
     "Puede digerir más del alimento que encuentra.",
     "Corre más rápido."
    ],
    "hint": "Piensa en el camuflaje.",
    "explain": "El pelaje blanco resalta en un bosque café, así que este cambio de estructura puede ser perjudicial."
   }
  },
  {
   "id": "ms5q30",
   "code": "3.1.6-8.M",
   "prompt": "A mutation changes one letter of DNA, but the protein comes out exactly the same. What is the effect?",
   "options": [
    "neutral",
    "harmful",
    "beneficial",
    "the organism changes species"
   ],
   "answer": 0,
   "hint": "If the protein is the same...",
   "explain": "If the protein does not change, the organism does not change, so the mutation is neutral.",
   "es": {
    "prompt": "Una mutación cambia una letra del ADN, pero la proteína sale exactamente igual. ¿Cuál es el efecto?",
    "options": [
     "neutral",
     "perjudicial",
     "beneficioso",
     "el organismo cambia de especie"
    ],
    "hint": "Si la proteína es igual...",
    "explain": "Si la proteína no cambia, el organismo no cambia, así que la mutación es neutral."
   }
  },
  {
   "id": "ms5q31",
   "code": "3.1.6-8.R",
   "prompt": "What is SELECTIVE BREEDING?",
   "options": [
    "choosing parents with desired traits to reproduce",
    "changing an organism’s genes directly in a lab",
    "letting wild animals choose their own mates",
    "growing plants in the dark"
   ],
   "answer": 0,
   "hint": "People do the selecting.",
   "explain": "In selective breeding, people choose parents with the traits they want, generation after generation.",
   "es": {
    "prompt": "¿Qué es la CRÍA SELECTIVA?",
    "options": [
     "elegir progenitores con rasgos deseados para que se reproduzcan",
     "cambiar los genes de un organismo directamente en un laboratorio",
     "dejar que los animales salvajes elijan pareja solos",
     "cultivar plantas en la oscuridad"
    ],
    "hint": "Las personas son las que eligen.",
    "explain": "En la cría selectiva, las personas eligen progenitores con los rasgos que quieren, generación tras generación."
   }
  },
  {
   "id": "ms5q32",
   "code": "3.1.6-8.R",
   "prompt": "Corn came from a wild grass called teosinte. Which technology changed it?",
   "options": [
    "selective breeding by farmers",
    "gene editing with CRISPR tools",
    "cloning plants in a lab",
    "nothing; it never changed"
   ],
   "answer": 0,
   "hint": "This started long before labs existed.",
   "explain": "Farmers in Mexico saved seeds from the best plants for thousands of years, slowly turning teosinte into corn.",
   "es": {
    "prompt": "El maíz vino de una hierba silvestre llamada teocintle. ¿Qué tecnología lo cambió?",
    "options": [
     "la cría selectiva de los agricultores",
     "la edición genética con herramientas CRISPR",
     "la clonación de plantas en un laboratorio",
     "ninguna; nunca cambió"
    ],
    "hint": "Esto empezó mucho antes de que existieran los laboratorios.",
    "explain": "Los agricultores de México guardaron semillas de las mejores plantas durante miles de años, y poco a poco el teocintle se convirtió en maíz."
   }
  },
  {
   "id": "ms5q33",
   "code": "3.1.6-8.R",
   "prompt": "Bacteria that make human insulin were created by...",
   "options": [
    "genetic engineering: adding a human gene to bacteria",
    "selective breeding of bacteria for thousands of years",
    "feeding bacteria extra sugar every day",
    "crossing bacteria with cows"
   ],
   "answer": 0,
   "hint": "A gene was moved from one organism to another.",
   "explain": "Scientists added the human insulin gene to bacteria, so the bacteria make insulin for people with diabetes.",
   "es": {
    "prompt": "Las bacterias que fabrican insulina humana se crearon con...",
    "options": [
     "ingeniería genética: poner un gen humano en bacterias",
     "cría selectiva de bacterias durante miles de años",
     "darles azúcar extra a las bacterias cada día",
     "cruzar bacterias con vacas"
    ],
    "hint": "Se pasó un gen de un organismo a otro.",
    "explain": "Los científicos agregaron el gen humano de la insulina a las bacterias, así que las bacterias fabrican insulina para las personas con diabetes."
   }
  },
  {
   "id": "ms5q34",
   "code": "3.1.6-8.R",
   "prompt": "How is GENE EDITING (like CRISPR) different from selective breeding?",
   "options": [
    "It changes a gene directly instead of choosing parents.",
    "It is thousands of years older than selective breeding.",
    "It does not involve genes or DNA at all.",
    "It only works on plants, never on animals."
   ],
   "answer": 0,
   "hint": "Think precise and direct.",
   "explain": "Gene editing changes a specific gene directly, which is faster and more precise than waiting for the right traits to appear.",
   "es": {
    "prompt": "¿En qué se diferencia la EDICIÓN GENÉTICA (como CRISPR) de la cría selectiva?",
    "options": [
     "Cambia un gen directamente, en vez de elegir progenitores.",
     "Tiene miles de años más de antigüedad que la cría selectiva.",
     "No tiene nada que ver con los genes ni el ADN.",
     "Solo funciona en plantas, nunca en animales."
    ],
    "hint": "Piensa en algo preciso y directo.",
    "explain": "La edición genética cambia un gen específico directamente, lo que es más rápido y preciso que esperar a que aparezcan los rasgos correctos."
   }
  },
  {
   "id": "ms5q35",
   "code": "3.1.6-8.R",
   "prompt": "Which is a DESIRED TRAIT that dairy farmers breed for?",
   "options": [
    "cows that give more milk",
    "cows that get sick easily",
    "cows that give less milk",
    "cows that cannot walk"
   ],
   "answer": 0,
   "hint": "What does a dairy farm sell?",
   "explain": "Farmers want cows that give lots of milk and stay healthy.",
   "es": {
    "prompt": "¿Cuál es un RASGO DESEADO que buscan los productores de leche al criar?",
    "options": [
     "vacas que dan más leche",
     "vacas que se enferman fácilmente",
     "vacas que dan menos leche",
     "vacas que no pueden caminar"
    ],
    "hint": "¿Qué vende una granja lechera?",
    "explain": "Los productores quieren vacas que den mucha leche y se mantengan sanas."
   }
  },
  {
   "id": "ms5q36",
   "code": "3.1.6-8.R",
   "prompt": "Which list puts these technologies in order from OLDEST to NEWEST?",
   "options": [
    "selective breeding, hybrid seeds, genetic engineering, gene editing",
    "gene editing, genetic engineering, hybrid seeds, selective breeding",
    "hybrid seeds, gene editing, selective breeding, genetic engineering",
    "genetic engineering, selective breeding, gene editing, hybrid seeds"
   ],
   "answer": 0,
   "hint": "Farmers started thousands of years ago; CRISPR is from the 2010s.",
   "explain": "Selective breeding (thousands of years), hybrid seeds (1900s), genetic engineering (1970s), gene editing (2010s).",
   "es": {
    "prompt": "¿Qué lista pone estas tecnologías en orden de la MÁS ANTIGUA a la MÁS NUEVA?",
    "options": [
     "cría selectiva, semillas híbridas, ingeniería genética, edición genética",
     "edición genética, ingeniería genética, semillas híbridas, cría selectiva",
     "semillas híbridas, edición genética, cría selectiva, ingeniería genética",
     "ingeniería genética, cría selectiva, edición genética, semillas híbridas"
    ],
    "hint": "Los agricultores empezaron hace miles de años; CRISPR es de la década de 2010.",
    "explain": "Cría selectiva (miles de años), semillas híbridas (siglo XX), ingeniería genética (década de 1970), edición genética (década de 2010)."
   }
  },
  {
   "id": "ms5q37",
   "code": "3.1.6-8.R",
   "prompt": "Some corn has a bacterium’s gene that makes a protein toxic to certain insect pests. What is this corn?",
   "options": [
    "a genetically modified organism",
    "a wild plant",
    "a clone made by runners",
    "a hybrid made only by crossing plants"
   ],
   "answer": 0,
   "hint": "A gene from another organism was added.",
   "explain": "Adding a gene from another organism makes a genetically modified organism (GMO).",
   "es": {
    "prompt": "Algunos maíces tienen un gen de una bacteria que fabrica una proteína tóxica para ciertas plagas de insectos. ¿Qué es este maíz?",
    "options": [
     "un organismo genéticamente modificado",
     "una planta silvestre",
     "un clon hecho con estolones",
     "un híbrido hecho solo con cruces de plantas"
    ],
    "hint": "Se agregó un gen de otro organismo.",
    "explain": "Agregar un gen de otro organismo produce un organismo genéticamente modificado (OGM)."
   }
  },
  {
   "id": "ms5q38",
   "code": "3.1.6-8.R",
   "prompt": "Milk from the average U.S. cow went from about 5,000 pounds a year in 1950 to about 24,000 in 2020. What explains MOST of this change?",
   "options": [
    "better breeding technology, feed and care",
    "each cow ate less food",
    "warmer weather that made the grass grow",
    "farmers began counting the milk differently"
   ],
   "answer": 0,
   "hint": "Think about how farmers choose parents today.",
   "explain": "Technologies like artificial insemination and genetic testing let farmers breed from the best animals. Better feed and care helped too.",
   "es": {
    "prompt": "La leche de la vaca promedio de Estados Unidos pasó de unas 5,000 libras al año en 1950 a unas 24,000 en 2020. ¿Qué explica la MAYOR parte de este cambio?",
    "options": [
     "mejor tecnología de cría, alimentación y cuidado",
     "cada vaca comía menos alimento",
     "el clima más cálido, que hizo crecer más pasto",
     "los productores empezaron a contar la leche de otra manera"
    ],
    "hint": "Piensa en cómo eligen los progenitores los productores hoy.",
    "explain": "Tecnologías como la inseminación artificial y las pruebas genéticas permiten criar con los mejores animales. La mejor alimentación y el mejor cuidado también ayudaron."
   }
  }
 ],
 "pairs": [
  {
   "name": "Asexual or sexual?",
   "explain": "Asexual reproduction has one parent and makes identical offspring. Sexual reproduction has two parents and makes offspring with variation.",
   "members": [
    {
     "label": "Asexual",
     "level": "5-2",
     "ids": [
      "ms5q11",
      "ms5q12"
     ]
    },
    {
     "label": "Sexual",
     "level": "5-2",
     "ids": [
      "ms5q13",
      "ms5q15"
     ]
    }
   ],
   "es": {
    "name": "¿Asexual o sexual?",
    "explain": "La reproducción asexual tiene un progenitor y produce crías idénticas. La reproducción sexual tiene dos progenitores y produce crías con variación."
   }
  },
  {
   "name": "Harmful, beneficial or neutral?",
   "explain": "Harmful makes survival harder, beneficial helps, and neutral makes no difference, and the answer can depend on the environment.",
   "members": [
    {
     "label": "Harmful",
     "level": "5-3",
     "ids": [
      "ms5q25"
     ]
    },
    {
     "label": "Neutral",
     "level": "5-3",
     "ids": [
      "ms5q24",
      "ms5q30"
     ]
    }
   ],
   "es": {
    "name": "¿Perjudicial, beneficioso o neutral?",
    "explain": "Perjudicial hace más difícil sobrevivir, beneficioso ayuda y neutral no hace diferencia, y la respuesta puede depender del ambiente."
   }
  },
  {
   "name": "Selective breeding or genetic engineering?",
   "explain": "Selective breeding chooses which parents reproduce. Genetic engineering changes the genes directly.",
   "members": [
    {
     "label": "Selective breeding",
     "level": "5-4",
     "ids": [
      "ms5q31",
      "ms5q32"
     ]
    },
    {
     "label": "Genetic engineering",
     "level": "5-4",
     "ids": [
      "ms5q33",
      "ms5q37"
     ]
    }
   ],
   "es": {
    "name": "¿Cría selectiva o ingeniería genética?",
    "explain": "La cría selectiva elige qué progenitores se reproducen. La ingeniería genética cambia los genes directamente."
   }
  }
 ],
 "become": [
  {
   "id": "b5-pollen",
   "code": "3.1.6-8.D",
   "you": "a grain of pollen stuck on a bumble bee",
   "short": "✿",
   "color": "#ffd23a",
   "goal": "You need to reach the egg of another flower of the SAME kind!",
   "doors": [
    {
     "kind": "lipid",
     "label": "Rub off onto the next purple flower of the same kind",
     "ok": true,
     "es": {
      "label": "Cáete en la siguiente flor morada de la misma especie"
     }
    },
    {
     "kind": "protein",
     "label": "Fall off onto a rock",
     "ok": false,
     "es": {
      "label": "Cáete sobre una roca",
      "why": "El polen sobre una roca no puede llegar a un óvulo. No se formará ninguna semilla."
     },
     "why": "Pollen on a rock cannot reach an egg. No seed will form."
    },
    {
     "kind": "pump",
     "label": "Land on a flower of a totally different kind",
     "ok": false,
     "es": {
      "label": "Cae en una flor de un tipo totalmente distinto",
      "why": "El polen debe llegar a una flor de su propia especie para formar una semilla."
     },
     "why": "Pollen must reach a flower of its own species to make a seed."
    }
   ],
   "explain": "Bright petals and nectar bring the bee back to the same kind of flower again and again. That raises the probability that pollen reaches the right egg.",
   "es": {
    "you": "un grano de polen pegado a un abejorro",
    "goal": "¡Tienes que llegar al óvulo de otra flor de la MISMA especie!",
    "explain": "Los pétalos brillantes y el néctar hacen que la abeja vuelva una y otra vez al mismo tipo de flor. Eso aumenta la probabilidad de que el polen llegue al óvulo correcto."
   }
  },
  {
   "id": "b5-runner",
   "code": "3.1.6-8.N",
   "you": "a strawberry runner",
   "short": "🍓",
   "color": "#5fbf5a",
   "goal": "Make a new plant, using only ONE parent!",
   "doors": [
    {
     "kind": "lipid",
     "label": "Put down roots and grow a copy of the parent plant",
     "ok": true,
     "es": {
      "label": "Echa raíces y forma una copia de la planta progenitora"
     }
    },
    {
     "kind": "protein",
     "label": "Wait for a bee to bring pollen",
     "ok": false,
     "es": {
      "label": "Espera a que una abeja traiga polen",
      "why": "El polen significa dos progenitores: eso es reproducción sexual. Un estolón necesita un solo progenitor."
     },
     "why": "Pollen means two parents: that is sexual reproduction. A runner needs only one parent."
    },
    {
     "kind": "pump",
     "label": "Mix your genes with a sea star",
     "ok": false,
     "es": {
      "label": "Mezcla tus genes con una estrella de mar",
      "why": "Los seres vivos solo pueden reproducirse con los de su especie, y un estolón no mezcla genes."
     },
     "why": "Living things can only reproduce with their own kind, and a runner does not mix genes at all."
    }
   ],
   "explain": "A runner makes a clone: the new plant has identical genetic information to its one parent.",
   "es": {
    "you": "un estolón de fresa",
    "goal": "¡Forma una planta nueva usando UN solo progenitor!",
    "explain": "Un estolón forma un clon: la planta nueva tiene información genética idéntica a la de su único progenitor."
   }
  },
  {
   "id": "b5-gene",
   "code": "3.1.6-8.M",
   "you": "a gene for dark skin color in a cavefish",
   "short": "🧬",
   "color": "#c59cff",
   "goal": "A mutation just changed one of your letters. What happens next?",
   "doors": [
    {
     "kind": "lipid",
     "label": "The changed instructions build a protein that no longer makes dark color",
     "ok": true,
     "es": {
      "label": "Las instrucciones cambiadas forman una proteína que ya no produce color oscuro"
     }
    },
    {
     "kind": "protein",
     "label": "The fish grows a new pair of fins",
     "ok": false,
     "es": {
      "label": "Al pez le sale un nuevo par de aletas",
      "why": "Este gen tiene que ver con el color. Un cambio en él afecta la proteína del color, no las aletas."
     },
     "why": "This gene is about color. A change to it affects the color protein, not fins."
    },
    {
     "kind": "pump",
     "label": "Nothing can ever change because of a mutation",
     "ok": false,
     "es": {
      "label": "Nada puede cambiar nunca por una mutación",
      "why": "Una mutación puede cambiar la proteína que fabrica el gen, y eso puede cambiar un rasgo."
     },
     "why": "A mutation can change the protein the gene makes, and that can change a trait."
    }
   ],
   "explain": "Gene → protein → trait. The mutation changed the gene, so the protein changed, so the fish became pale. In a dark cave, that effect is neutral.",
   "es": {
    "you": "un gen del color oscuro de la piel en un pez de cueva",
    "goal": "Una mutación acaba de cambiar una de tus letras. ¿Qué pasa después?",
    "explain": "Gen → proteína → rasgo. La mutación cambió el gen, así que cambió la proteína, así que el pez se volvió pálido. En una cueva oscura, ese efecto es neutral."
   }
  }
 ],
 "data": [
  {
   "id": "d5-net",
   "code": "3.1.6-8.D",
   "title": "Flowers that made fruit: open to bees vs. covered with a net",
   "xlabel": "Flowers",
   "ylabel": "Flowers that made fruit (%)",
   "unit": "%",
   "categories": [
    "Open to bees",
    "Covered with a net"
   ],
   "values": [
    85,
    10
   ],
   "questions": [
    {
     "prompt": "Which flowers made the MOST fruit?",
     "answer": 0,
     "hint": "Find the taller bar.",
     "explain": "The flowers bees could visit. Bees carried pollen between them, so far more flowers made fruit and seeds.",
     "es": {
      "prompt": "¿Qué flores dieron MÁS frutos?",
      "hint": "Busca la barra más alta.",
      "explain": "Las flores que las abejas podían visitar. Las abejas llevaron polen entre ellas, así que muchas más flores dieron frutos y semillas."
     }
    },
    {
     "prompt": "Which result is EVIDENCE that pollinators raise the probability of successful reproduction?",
     "answer": 1,
     "hint": "Look at what happened when bees could NOT reach the flowers.",
     "explain": "With a net, only 10% made fruit. Without pollinators, reproduction became much less likely.",
     "es": {
      "prompt": "¿Qué resultado es una EVIDENCIA de que los polinizadores aumentan la probabilidad de una reproducción exitosa?",
      "hint": "Mira qué pasó cuando las abejas NO podían llegar a las flores.",
      "explain": "Con la red, solo el 10 % dio frutos. Sin polinizadores, la reproducción se volvió mucho menos probable."
     }
    }
   ],
   "es": {
    "title": "Flores que dieron frutos: abiertas a las abejas o cubiertas con una red",
    "xlabel": "Flores",
    "ylabel": "Flores que dieron frutos (%)",
    "categories": [
     "Abiertas a las abejas",
     "Cubiertas con una red"
    ]
   }
  },
  {
   "id": "d5-hummer",
   "code": "3.1.6-8.D",
   "title": "Hummingbird visits to feeders of different colors in one hour",
   "xlabel": "Feeder color",
   "ylabel": "Visits",
   "categories": [
    "Red",
    "Orange",
    "Yellow",
    "White"
   ],
   "values": [
    30,
    18,
    8,
    4
   ],
   "questions": [
    {
     "prompt": "Which color got the MOST visits?",
     "answer": 0,
     "hint": "Find the tallest bar.",
     "explain": "Red. Hummingbirds are drawn to red, which is why many flowers they pollinate, like the cardinal flower, are red.",
     "es": {
      "prompt": "¿Qué color recibió MÁS visitas?",
      "hint": "Busca la barra más alta.",
      "explain": "El rojo. A los colibríes los atrae el rojo, y por eso muchas flores que polinizan, como la flor cardenal, son rojas."
     }
    },
    {
     "prompt": "A white flower would most likely get the FEWEST hummingbird visits. Which bar supports this?",
     "answer": 3,
     "hint": "Find the shortest bar.",
     "explain": "White got only 4 visits. A flower’s color is a structure that affects which pollinators come.",
     "es": {
      "prompt": "Una flor blanca probablemente recibiría MENOS visitas de colibríes. ¿Qué barra lo apoya?",
      "hint": "Busca la barra más baja.",
      "explain": "El blanco recibió solo 4 visitas. El color de una flor es una estructura que influye en qué polinizadores llegan."
     }
    }
   ],
   "es": {
    "title": "Visitas de colibríes a bebederos de distintos colores en una hora",
    "xlabel": "Color del bebedero",
    "ylabel": "Visitas",
    "categories": [
     "Rojo",
     "Anaranjado",
     "Amarillo",
     "Blanco"
    ]
   }
  },
  {
   "id": "d5-alike",
   "code": "3.1.6-8.N",
   "title": "Out of 20 young plants, how many looked DIFFERENT from the parent?",
   "xlabel": "How the plants were grown",
   "ylabel": "Plants that looked different",
   "categories": [
    "From runners",
    "From seeds"
   ],
   "values": [
    0,
    17
   ],
   "questions": [
    {
     "prompt": "Which plants all looked exactly like the parent?",
     "answer": 0,
     "hint": "Find the bar at zero.",
     "explain": "Plants from runners. They are clones with identical genetic information, so none looked different.",
     "es": {
      "prompt": "¿Qué plantas se veían todas exactamente como el progenitor?",
      "hint": "Busca la barra en cero.",
      "explain": "Las plantas de estolones. Son clones con información genética idéntica, así que ninguna se veía distinta."
     }
    },
    {
     "prompt": "Which plants showed GENETIC VARIATION?",
     "answer": 1,
     "hint": "Find the taller bar.",
     "explain": "Plants from seeds. Each seed got genes from two parents, so most looked a little different.",
     "es": {
      "prompt": "¿Qué plantas mostraron VARIACIÓN GENÉTICA?",
      "hint": "Busca la barra más alta.",
      "explain": "Las plantas de semillas. Cada semilla recibió genes de dos progenitores, así que la mayoría se veía un poco distinta."
     }
    }
   ],
   "es": {
    "title": "De 20 plantas jóvenes, ¿cuántas se veían DISTINTAS del progenitor?",
    "xlabel": "Cómo se cultivaron las plantas",
    "ylabel": "Plantas que se veían distintas",
    "categories": [
     "De estolones",
     "De semillas"
    ]
   }
  },
  {
   "id": "d5-milk",
   "code": "3.1.6-8.R",
   "title": "Milk from an average U.S. dairy cow in one year",
   "xlabel": "Year",
   "ylabel": "Thousands of pounds of milk",
   "categories": [
    "1950",
    "1970",
    "1990",
    "2010",
    "2020"
   ],
   "values": [
    5,
    10,
    15,
    21,
    24
   ],
   "questions": [
    {
     "prompt": "In which year did the average cow give the MOST milk?",
     "answer": 4,
     "hint": "Find the tallest bar.",
     "explain": "2020: about 24,000 pounds, more than four times as much as in 1950.",
     "es": {
      "prompt": "¿En qué año dio MÁS leche la vaca promedio?",
      "hint": "Busca la barra más alta.",
      "explain": "En 2020: unas 24,000 libras, más de cuatro veces lo de 1950."
     }
    },
    {
     "prompt": "Which year shows milk BEFORE most of the increase from modern breeding technology?",
     "answer": 0,
     "hint": "Find the shortest bar.",
     "explain": "1950. Since then, technologies like artificial insemination and genetic testing let farmers breed from the best cows and bulls. Better feed and care helped too.",
     "es": {
      "prompt": "¿Qué año muestra la leche ANTES de la mayor parte del aumento por la tecnología de cría moderna?",
      "hint": "Busca la barra más baja.",
      "explain": "1950. Desde entonces, tecnologías como la inseminación artificial y las pruebas genéticas permitieron criar con las mejores vacas y toros. La mejor alimentación y el mejor cuidado también ayudaron."
     }
    }
   ],
   "es": {
    "title": "Leche de una vaca lechera promedio de Estados Unidos en un año",
    "xlabel": "Año",
    "ylabel": "Miles de libras de leche",
    "categories": [
     "1950",
     "1970",
     "1990",
     "2010",
     "2020"
    ]
   }
  }
 ],
 "mazes": [
  {
   "id": "maze5-gene",
   "code": "3.1.6-8.M",
   "title": "Zoom in: go through the doorway for the next smaller part",
   "start": "Cavefish",
   "steps": [
    {
     "label": "Skin cell",
     "hint": "What is the fish’s body made of?",
     "why": "The fish is made of cells.",
     "es": {
      "label": "Célula de la piel",
      "hint": "¿De qué está hecho el cuerpo del pez?",
      "why": "El pez está hecho de células."
     }
    },
    {
     "label": "Nucleus",
     "hint": "Which part of the cell holds the chromosomes?",
     "why": "The nucleus holds the chromosomes.",
     "es": {
      "label": "Núcleo",
      "hint": "¿Qué parte de la célula guarda los cromosomas?",
      "why": "El núcleo guarda los cromosomas."
     }
    },
    {
     "label": "Chromosome",
     "hint": "What is the coiled strand of DNA called?",
     "why": "A chromosome is DNA coiled up tight.",
     "es": {
      "label": "Cromosoma",
      "hint": "¿Cómo se llama la hebra enrollada de ADN?",
      "why": "Un cromosoma es ADN muy enrollado."
     }
    },
    {
     "label": "Gene for skin color",
     "hint": "What section of DNA holds one set of instructions?",
     "why": "A gene is one section of a chromosome’s DNA.",
     "es": {
      "label": "Gen del color de la piel",
      "hint": "¿Qué sección del ADN guarda un conjunto de instrucciones?",
      "why": "Un gen es una sección del ADN de un cromosoma."
     }
    }
   ],
   "extra": [
    "Cave water",
    "Sugar",
    "A rock"
   ],
   "explain": "Organism → cell → nucleus → chromosome → gene. A mutation is a change in a gene, way down at the smallest level, but it can change the whole fish.",
   "es": {
    "title": "Acércate: cruza la puerta de la siguiente parte más pequeña",
    "start": "Pez de cueva",
    "extra": [
     "Agua de la cueva",
     "Azúcar",
     "Una roca"
    ],
    "explain": "Organismo → célula → núcleo → cromosoma → gen. Una mutación es un cambio en un gen, en el nivel más pequeño, pero puede cambiar a todo el pez."
   }
  }
 ],
 "sequences": [
  {
   "id": "seq5-seed",
   "code": "3.1.6-8.N",
   "title": "How a strawberry seed gets genes from two parents",
   "steps": [
    "Two strawberry plants make flowers",
    "A bee carries pollen from one plant to the other",
    "The pollen joins with an egg",
    "A seed forms with genes from both parents",
    "The new plant is a little different from both"
   ],
   "hint": "Start with the flowers.",
   "explain": "Sexual reproduction mixes genetic information from two parents, so the offspring show genetic variation.",
   "es": {
    "title": "Cómo una semilla de fresa recibe genes de dos progenitores",
    "steps": [
     "Dos plantas de fresa dan flores",
     "Una abeja lleva polen de una planta a la otra",
     "El polen se une con un óvulo",
     "Se forma una semilla con genes de los dos progenitores",
     "La planta nueva es un poco distinta de los dos"
    ],
    "hint": "Empieza con las flores.",
    "explain": "La reproducción sexual mezcla la información genética de dos progenitores, así que las crías muestran variación genética."
   }
  },
  {
   "id": "seq5-mutation",
   "code": "3.1.6-8.M",
   "title": "From a change in DNA to a change in the organism",
   "steps": [
    "A mutation changes the DNA of a gene",
    "The gene now has different instructions",
    "The protein is built differently, or not at all",
    "A trait of the organism changes",
    "The effect is harmful, beneficial or neutral"
   ],
   "hint": "Start with the change in the DNA.",
   "explain": "Genes on chromosomes hold instructions for proteins. Change the gene, and the protein and the trait may change too.",
   "es": {
    "title": "De un cambio en el ADN a un cambio en el organismo",
    "steps": [
     "Una mutación cambia el ADN de un gen",
     "El gen ahora tiene instrucciones distintas",
     "La proteína se forma de otra manera, o no se forma",
     "Cambia un rasgo del organismo",
     "El efecto es perjudicial, beneficioso o neutral"
    ],
    "hint": "Empieza con el cambio en el ADN.",
    "explain": "Los genes de los cromosomas guardan instrucciones para las proteínas. Si cambia el gen, la proteína y el rasgo también pueden cambiar."
   }
  },
  {
   "id": "seq5-tech",
   "code": "3.1.6-8.R",
   "title": "Technologies for shaping traits, from oldest to newest",
   "steps": [
    "Selective breeding: saving seeds from the best plants",
    "Hybrid seeds: crossing two chosen varieties",
    "Genetic engineering: adding a gene from another organism",
    "Gene editing: changing a gene at one exact spot"
   ],
   "hint": "Farmers have done the first one for thousands of years.",
   "explain": "Each technology gave people more direct control over which traits are passed on: from choosing parents, to changing genes themselves.",
   "es": {
    "title": "Tecnologías para moldear los rasgos, de la más antigua a la más nueva",
    "steps": [
     "Cría selectiva: guardar semillas de las mejores plantas",
     "Semillas híbridas: cruzar dos variedades elegidas",
     "Ingeniería genética: agregar un gen de otro organismo",
     "Edición genética: cambiar un gen en un lugar exacto"
    ],
    "hint": "Los agricultores hacen la primera desde hace miles de años.",
    "explain": "Cada tecnología dio a las personas un control más directo sobre qué rasgos se heredan: de elegir a los progenitores a cambiar los genes mismos."
   }
  }
 ],
 "wordbanks": [
  {
   "id": "wb5-repro",
   "code": "3.1.6-8.N",
   "words": [
    "asexual",
    "sexual",
    "clone",
    "variation",
    "parent",
    "genes"
   ],
   "sentences": [
    {
     "text": "A runner makes a new plant with only one ___.",
     "answer": "parent",
     "code": "3.1.6-8.N",
     "explain": "Asexual reproduction needs one parent.",
     "es": {
      "text": "Un estolón forma una planta nueva con un solo ___.",
      "answer": "progenitor",
      "explain": "La reproducción asexual necesita un progenitor."
     }
    },
    {
     "text": "Reproduction with one parent is called ___ reproduction.",
     "answer": "asexual",
     "code": "3.1.6-8.N",
     "explain": "A- means without: without a second parent.",
     "es": {
      "text": "La reproducción con un solo progenitor se llama reproducción ___.",
      "answer": "asexual",
      "explain": "A- significa sin: sin un segundo progenitor."
     }
    },
    {
     "text": "An offspring with exactly the same genes as its parent is a ___.",
     "answer": "clone",
     "code": "3.1.6-8.N",
     "explain": "A clone is an identical copy.",
     "es": {
      "text": "Una cría con exactamente los mismos genes que su progenitor es un ___.",
      "answer": "clon",
      "explain": "Un clon es una copia idéntica."
     }
    },
    {
     "text": "Seeds come from ___ reproduction, with two parents.",
     "answer": "sexual",
     "code": "3.1.6-8.N",
     "explain": "Sexual reproduction joins pollen and an egg.",
     "es": {
      "text": "Las semillas vienen de la reproducción ___, con dos progenitores.",
      "answer": "sexual",
      "explain": "La reproducción sexual une el polen y un óvulo."
     }
    },
    {
     "text": "Each seedling gets a mix of ___ from both parents.",
     "answer": "genes",
     "code": "3.1.6-8.N",
     "explain": "Genes carry the genetic information.",
     "es": {
      "text": "Cada plántula recibe una mezcla de ___ de los dos progenitores.",
      "answer": "genes",
      "explain": "Los genes llevan la información genética."
     }
    },
    {
     "text": "Because the genes are mixed, the seedlings show genetic ___.",
     "answer": "variation",
     "code": "3.1.6-8.N",
     "explain": "Variation means differences.",
     "es": {
      "text": "Como los genes se mezclan, las plántulas muestran ___ genética.",
      "answer": "variación",
      "explain": "Variación significa diferencias."
     }
    }
   ],
   "es": {
    "words": [
     "asexual",
     "sexual",
     "clon",
     "variación",
     "progenitor",
     "genes"
    ]
   }
  }
 ],
 "lablocks": [
  {
   "id": "lock5",
   "title": "Lab Lock",
   "es": {
    "title": "Candado del laboratorio"
   },
   "clues": [
    {
     "prompt": "Clue 1: How many of these are ANIMAL BEHAVIORS that help reproduction? A bird singing, a bird building a nest, a red flower tube, a doe hiding her fawn.",
     "answer": 3,
     "code": "3.1.6-8.D",
     "hint": "Behaviors are things animals do.",
     "explain": "Singing, nest building and hiding the fawn: 3.",
     "es": {
      "prompt": "Pista 1: ¿Cuántas de estas son CONDUCTAS ANIMALES que ayudan a la reproducción? Un ave que canta, un ave que hace un nido, el tubo rojo de una flor, una venada que esconde a su cervatillo.",
      "hint": "Las conductas son cosas que hacen los animales.",
      "explain": "Cantar, hacer el nido y esconder al cervatillo: 3."
     }
    },
    {
     "prompt": "Clue 2: How many parents does a plant grown from a runner have?",
     "answer": 1,
     "code": "3.1.6-8.N",
     "hint": "Runners are asexual.",
     "explain": "Asexual reproduction needs only 1 parent.",
     "es": {
      "prompt": "Pista 2: ¿Cuántos progenitores tiene una planta que creció de un estolón?",
      "hint": "Los estolones son asexuales.",
      "explain": "La reproducción asexual necesita solo 1 progenitor."
     }
    },
    {
     "prompt": "Clue 3: How many kinds of effects can a mutation have? Harmful, beneficial and ___.",
     "answer": 3,
     "code": "3.1.6-8.M",
     "hint": "The third one makes no difference.",
     "explain": "Harmful, beneficial and neutral: 3.",
     "es": {
      "prompt": "Pista 3: ¿Cuántos tipos de efectos puede tener una mutación? Perjudicial, beneficioso y ___.",
      "hint": "El tercero no hace diferencia.",
      "explain": "Perjudicial, beneficioso y neutral: 3."
     }
    },
    {
     "prompt": "Clue 4: How many of these used GENETIC ENGINEERING? Insulin bacteria, dog breeds, glowing fish, insect-fighting corn.",
     "answer": 3,
     "code": "3.1.6-8.R",
     "hint": "Genetic engineering changes genes in a lab.",
     "explain": "Insulin bacteria, glowing fish and insect-fighting corn: 3. Dog breeds came from selective breeding.",
     "es": {
      "prompt": "Pista 4: ¿Cuántos de estos usaron INGENIERÍA GENÉTICA? Bacterias de insulina, razas de perros, peces brillantes, maíz que combate insectos.",
      "hint": "La ingeniería genética cambia los genes en un laboratorio.",
      "explain": "Bacterias de insulina, peces brillantes y maíz que combate insectos: 3. Las razas de perros vienen de la cría selectiva."
     }
    }
   ]
  }
 ],
 "scans": [
  {
   "id": "s5m-meadow",
   "name": "Bowman’s Hill Wildflower Preserve",
   "look": "sprout",
   "color": "#c59cff",
   "word": "Reproduction",
   "def": "Making offspring: new living things of the same kind.",
   "note": "This preserve near New Hope, Pennsylvania, grows hundreds of native plants. Every flower here is part of the plant’s plan for REPRODUCTION.",
   "es": {
    "name": "Reserva de Flores Silvestres Bowman’s Hill",
    "word": "Reproducción",
    "def": "Producir crías: seres vivos nuevos de la misma especie.",
    "note": "Esta reserva cerca de New Hope, Pensilvania, cultiva cientos de plantas nativas. Cada flor de aquí es parte del plan de la planta para la REPRODUCCIÓN."
   }
  },
  {
   "id": "s5m-petals",
   "name": "Bright purple petals",
   "look": "lily",
   "color": "#b06ad8",
   "word": "Specialized structure",
   "def": "A body part with a special shape or feature that does a certain job.",
   "note": "Bright petals are a SPECIALIZED STRUCTURE. Their color and shape attract the bees that carry pollen from flower to flower.",
   "es": {
    "name": "Pétalos morados brillantes",
    "word": "Estructura especializada",
    "def": "Una parte del cuerpo con una forma o una característica especial que hace un trabajo determinado.",
    "note": "Los pétalos brillantes son una ESTRUCTURA ESPECIALIZADA. Su color y su forma atraen a las abejas que llevan polen de flor en flor."
   }
  },
  {
   "id": "s5m-pollen",
   "name": "Bee covered in pollen",
   "look": "critter",
   "color": "#ffd23a",
   "word": "Pollination",
   "def": "Moving pollen from one flower to another so the plant can make seeds.",
   "note": "As the bee drinks nectar, pollen sticks to its fuzzy body. At the next flower, some rubs off. That is POLLINATION.",
   "es": {
    "name": "Abeja cubierta de polen",
    "word": "Polinización",
    "def": "Llevar polen de una flor a otra para que la planta pueda producir semillas.",
    "note": "Mientras la abeja toma néctar, el polen se le pega en el cuerpo peludo. En la siguiente flor se le cae un poco. Eso es la POLINIZACIÓN."
   }
  },
  {
   "id": "s5m-cardinal",
   "name": "Cardinal flower",
   "look": "lily",
   "color": "#e0303a",
   "word": "Probability",
   "def": "How likely something is to happen.",
   "note": "The cardinal flower’s red tube fits a hummingbird’s long beak. Its shape raises the PROBABILITY that the right pollinator visits and the flower makes seeds.",
   "es": {
    "name": "Flor cardenal",
    "word": "Probabilidad",
    "def": "Qué tan posible es que algo ocurra.",
    "note": "El tubo rojo de la flor cardenal encaja con el pico largo del colibrí. Su forma aumenta la PROBABILIDAD de que llegue el polinizador correcto y la flor produzca semillas."
   }
  },
  {
   "id": "s5m-hummer",
   "name": "Ruby-throated hummingbird",
   "look": "critter",
   "color": "#4fbf6a",
   "word": "Pollinator",
   "def": "An animal that carries pollen from flower to flower.",
   "note": "Hummingbirds are POLLINATORS. They hover in front of red, tube-shaped flowers and carry pollen on their heads.",
   "es": {
    "name": "Colibrí garganta de rubí",
    "word": "Polinizador",
    "def": "Un animal que lleva polen de flor en flor.",
    "note": "Los colibríes son POLINIZADORES. Se quedan suspendidos frente a las flores rojas en forma de tubo y llevan polen en la cabeza."
   }
  },
  {
   "id": "s5m-song",
   "name": "Singing male cardinal",
   "look": "critter",
   "color": "#e0303a",
   "word": "Courtship",
   "def": "Behaviors an animal uses to attract a mate.",
   "note": "A male northern cardinal sings and feeds seeds to the female. COURTSHIP behaviors like these help him find a mate and have offspring.",
   "es": {
    "name": "Cardenal macho cantando",
    "word": "Cortejo",
    "def": "Las conductas que usa un animal para atraer pareja.",
    "note": "Un cardenal norteño macho canta y le da semillas a la hembra. Las conductas de CORTEJO como estas lo ayudan a encontrar pareja y tener crías."
   }
  },
  {
   "id": "s5m-nest",
   "name": "Bluebird nest box",
   "look": "stack",
   "color": "#5fb8ff",
   "word": "Parental care",
   "def": "Things parents do to help their young survive, like building nests and feeding them.",
   "note": "Eastern bluebird parents build a nest, keep the eggs warm and feed the chicks. PARENTAL CARE raises the chance that the young survive.",
   "es": {
    "name": "Caja nido de azulejos",
    "word": "Cuidado de las crías",
    "def": "Lo que hacen los padres para ayudar a sus crías a sobrevivir, como hacer nidos y alimentarlas.",
    "note": "Los padres del azulejo oriental hacen un nido, mantienen calientes los huevos y alimentan a los polluelos. El CUIDADO DE LAS CRÍAS aumenta la probabilidad de que sobrevivan."
   }
  },
  {
   "id": "s5m-fawn",
   "name": "Spotted fawn",
   "look": "critter",
   "color": "#c08a5a",
   "word": "Behavior",
   "def": "The way an animal acts.",
   "note": "A mother deer hides her spotted fawn in tall grass and visits only to nurse it. This BEHAVIOR keeps predators from finding the fawn.",
   "es": {
    "name": "Cervatillo con manchas",
    "word": "Conducta",
    "def": "La manera en que actúa un animal.",
    "note": "Una venada esconde a su cervatillo con manchas en el pasto alto y solo lo visita para amamantarlo. Esta CONDUCTA evita que los depredadores encuentren al cervatillo."
   }
  },
  {
   "id": "s5m-milkweed",
   "name": "Milkweed pod",
   "look": "eggs",
   "color": "#f4f0e8",
   "word": "Seed dispersal",
   "def": "Ways that seeds travel away from the parent plant.",
   "note": "Each milkweed seed has a silky parachute that floats on the wind. SEED DISPERSAL helps seeds reach new places to grow.",
   "es": {
    "name": "Vaina de algodoncillo",
    "word": "Dispersión de semillas",
    "def": "Las maneras en que las semillas viajan lejos de la planta madre.",
    "note": "Cada semilla de algodoncillo tiene un paracaídas sedoso que flota con el viento. La DISPERSIÓN DE SEMILLAS ayuda a que las semillas lleguen a nuevos lugares para crecer."
   }
  },
  {
   "id": "s5m-berry",
   "name": "Wild blackberries",
   "look": "eggs",
   "color": "#4a2a5a",
   "word": "Fruit",
   "def": "The part of a flowering plant that holds the seeds.",
   "note": "Birds eat the juicy FRUIT and drop the seeds far away. A tasty fruit is a plant structure that helps spread its seeds.",
   "es": {
    "name": "Moras silvestres",
    "word": "Fruto",
    "def": "La parte de una planta con flores que guarda las semillas.",
    "note": "Las aves se comen el FRUTO jugoso y dejan caer las semillas lejos. Un fruto sabroso es una estructura de la planta que ayuda a esparcir sus semillas."
   }
  },
  {
   "id": "s5s-runner",
   "name": "Strawberry runner",
   "look": "sprout",
   "color": "#5fbf5a",
   "word": "Asexual reproduction",
   "def": "Making offspring from only ONE parent.",
   "note": "A strawberry plant sends out runners, and new plants root along them. This is ASEXUAL REPRODUCTION: only one parent is needed.",
   "es": {
    "name": "Estolón de fresa",
    "word": "Reproducción asexual",
    "def": "Producir crías a partir de UN solo progenitor.",
    "note": "Una planta de fresa saca estolones, y en ellos echan raíz plantas nuevas. Es REPRODUCCIÓN ASEXUAL: solo se necesita un progenitor."
   }
  },
  {
   "id": "s5s-clone",
   "name": "Row of runner plants",
   "look": "grass",
   "color": "#6ac04a",
   "word": "Identical genetic information",
   "def": "Exactly the same genes, like a copy.",
   "note": "Every plant that grew from a runner has IDENTICAL GENETIC INFORMATION to its parent. Farmers use runners to grow copies of their best plants.",
   "es": {
    "name": "Hilera de plantas de estolón",
    "word": "Información genética idéntica",
    "def": "Exactamente los mismos genes, como una copia.",
    "note": "Cada planta que creció de un estolón tiene INFORMACIÓN GENÉTICA IDÉNTICA a la de su progenitor. Los agricultores usan los estolones para cultivar copias de sus mejores plantas."
   }
  },
  {
   "id": "s5s-flower",
   "name": "Strawberry flower",
   "look": "lily",
   "color": "#ffffff",
   "word": "Sexual reproduction",
   "def": "Making offspring from TWO parents, by joining a sperm (in pollen) and an egg.",
   "note": "Strawberries also make flowers. Pollen from one flower joins with an egg in another: SEXUAL REPRODUCTION, with two parents.",
   "es": {
    "name": "Flor de fresa",
    "word": "Reproducción sexual",
    "def": "Producir crías a partir de DOS progenitores, al unirse un espermatozoide (en el polen) y un óvulo.",
    "note": "Las fresas también dan flores. El polen de una flor se une con un óvulo de otra: REPRODUCCIÓN SEXUAL, con dos progenitores."
   }
  },
  {
   "id": "s5s-seeds",
   "name": "Seeds on a strawberry",
   "look": "eggs",
   "color": "#e04a3a",
   "word": "Offspring",
   "def": "The young of a living thing.",
   "note": "Each tiny dot on a strawberry holds a seed. A seed is OFFSPRING with a mix of genes from the pollen and the egg.",
   "es": {
    "name": "Semillas de una fresa",
    "word": "Crías",
    "def": "Los descendientes de un ser vivo.",
    "note": "Cada puntito de una fresa guarda una semilla. Una semilla es una CRÍA con una mezcla de genes del polen y del óvulo."
   }
  },
  {
   "id": "s5s-variation",
   "name": "Seedling tray",
   "look": "sprout",
   "color": "#8ab84a",
   "word": "Genetic variation",
   "def": "Differences in genes between individuals.",
   "note": "Plants grown from seeds are not all alike: some are bigger, some sweeter. Mixing genes from two parents makes GENETIC VARIATION.",
   "es": {
    "name": "Bandeja de plántulas",
    "word": "Variación genética",
    "def": "Diferencias en los genes entre individuos.",
    "note": "Las plantas que crecen de semillas no son todas iguales: unas son más grandes y otras más dulces. Mezclar los genes de dos progenitores produce VARIACIÓN GENÉTICA."
   }
  },
  {
   "id": "s5s-aphid",
   "name": "Aphids on a leaf",
   "look": "critter",
   "color": "#7be06a",
   "word": "Parent",
   "def": "A living thing that makes offspring.",
   "note": "In summer, a female aphid can have babies without a mate. Each baby is a copy of its one PARENT.",
   "es": {
    "name": "Pulgones en una hoja",
    "word": "Progenitor",
    "def": "Un ser vivo que produce crías.",
    "note": "En verano, una hembra de pulgón puede tener crías sin pareja. Cada cría es una copia de su único PROGENITOR."
   }
  },
  {
   "id": "s5s-anemone",
   "name": "Anemone splitting in two",
   "look": "lily",
   "color": "#5fd0c5",
   "word": "Clone",
   "def": "An offspring with exactly the same genes as its single parent.",
   "note": "Some sea anemones split down the middle to make two. Each half is a CLONE of the other.",
   "es": {
    "name": "Anémona que se divide en dos",
    "word": "Clon",
    "def": "Una cría con exactamente los mismos genes que su único progenitor.",
    "note": "Algunas anémonas de mar se dividen por la mitad y forman dos. Cada mitad es un CLON de la otra."
   }
  },
  {
   "id": "s5s-star",
   "name": "Ochre sea star",
   "look": "critter",
   "color": "#e07a3a",
   "word": "Regeneration",
   "def": "Regrowing a lost body part.",
   "note": "If a sea star loses an arm, it grows a new one: REGENERATION. Most sea stars make offspring by releasing eggs and sperm into the water.",
   "es": {
    "name": "Estrella de mar ocre",
    "word": "Regeneración",
    "def": "Volver a formar una parte del cuerpo perdida.",
    "note": "Si una estrella de mar pierde un brazo, le crece otro: REGENERACIÓN. La mayoría de las estrellas de mar producen crías soltando óvulos y espermatozoides en el agua."
   }
  },
  {
   "id": "s5s-chromosome",
   "name": "Inside a strawberry cell",
   "look": "helix",
   "color": "#7fd4ff",
   "word": "Genetic information",
   "def": "The instructions in DNA that are passed from parents to offspring.",
   "note": "Every cell holds GENETIC INFORMATION in its DNA. In sexual reproduction, each parent passes on half of its genetic information.",
   "es": {
    "name": "Dentro de una célula de fresa",
    "word": "Información genética",
    "def": "Las instrucciones del ADN que pasan de los progenitores a las crías.",
    "note": "Cada célula guarda INFORMACIÓN GENÉTICA en su ADN. En la reproducción sexual, cada progenitor pasa la mitad de su información genética."
   }
  },
  {
   "id": "s5c-cave",
   "name": "Limestone cave",
   "look": "rock",
   "color": "#6a6a70",
   "word": "Gene",
   "def": "A section of DNA with the instructions for making one protein.",
   "note": "Deep in caves in Mexico live fish with no color and no working eyes. Changes in their GENES explain why.",
   "es": {
    "name": "Cueva de piedra caliza",
    "word": "Gen",
    "def": "Una sección del ADN con las instrucciones para fabricar una proteína.",
    "note": "En lo profundo de unas cuevas de México viven peces sin color y sin ojos que funcionen. Los cambios en sus GENES explican por qué."
   }
  },
  {
   "id": "s5c-chromo",
   "name": "Chromosome model",
   "look": "helix",
   "color": "#c59cff",
   "word": "Chromosome",
   "def": "A tightly coiled strand of DNA in the nucleus. It carries many genes.",
   "note": "A CHROMOSOME is DNA coiled up tight. Each chromosome carries hundreds or thousands of genes, in a row.",
   "es": {
    "name": "Modelo de cromosoma",
    "word": "Cromosoma",
    "def": "Una hebra de ADN muy enrollada en el núcleo. Lleva muchos genes.",
    "note": "Un CROMOSOMA es ADN muy enrollado. Cada cromosoma lleva cientos o miles de genes, en fila."
   }
  },
  {
   "id": "s5c-dna",
   "name": "DNA ladder",
   "look": "helix",
   "color": "#7fd4ff",
   "word": "DNA",
   "def": "The molecule that holds the genetic instructions of living things.",
   "note": "DNA is shaped like a twisted ladder. The order of its parts spells out the instructions in each gene.",
   "es": {
    "name": "Escalera de ADN",
    "word": "ADN",
    "def": "La molécula que guarda las instrucciones genéticas de los seres vivos.",
    "note": "El ADN tiene forma de escalera torcida. El orden de sus partes escribe las instrucciones de cada gen."
   }
  },
  {
   "id": "s5c-protein",
   "name": "Protein model",
   "look": "chain",
   "color": "#ffd166",
   "word": "Protein",
   "def": "A molecule built from a gene’s instructions. Proteins build body parts and do jobs in cells.",
   "note": "Genes are instructions for PROTEINS. Proteins make your eye color, build muscles and speed up reactions. Change the gene, and the protein may change.",
   "es": {
    "name": "Modelo de proteína",
    "word": "Proteína",
    "def": "Una molécula que se fabrica con las instrucciones de un gen. Las proteínas forman partes del cuerpo y hacen trabajos en las células.",
    "note": "Los genes son instrucciones para fabricar PROTEÍNAS. Las proteínas dan el color de los ojos, forman los músculos y aceleran reacciones. Si cambia el gen, la proteína puede cambiar."
   }
  },
  {
   "id": "s5c-mutation",
   "name": "Pale cavefish",
   "look": "critter",
   "color": "#f4e0e0",
   "word": "Mutation",
   "def": "A change in the DNA of a gene.",
   "note": "A MUTATION in one gene stops these fish from making dark color. In a pitch-black cave, being pale does not hurt them.",
   "es": {
    "name": "Pez de cueva pálido",
    "word": "Mutación",
    "def": "Un cambio en el ADN de un gen.",
    "note": "Una MUTACIÓN en un gen impide que estos peces produzcan color oscuro. En una cueva totalmente oscura, ser pálido no los perjudica."
   }
  },
  {
   "id": "s5c-river",
   "name": "River fish of the same kind",
   "look": "critter",
   "color": "#8a9aa8",
   "word": "Trait",
   "def": "A feature of an organism, like color, eye size or height.",
   "note": "Fish of the same species live in rivers outside the cave. They have dark color and working eyes. The cave fish have different TRAITS.",
   "es": {
    "name": "Pez de río de la misma especie",
    "word": "Rasgo",
    "def": "Una característica de un organismo, como el color, el tamaño de los ojos o la altura.",
    "note": "Peces de la misma especie viven en los ríos fuera de la cueva. Tienen color oscuro y ojos que funcionan. Los peces de la cueva tienen RASGOS distintos."
   }
  },
  {
   "id": "s5c-neutral",
   "name": "Still pool in the dark",
   "look": "drop",
   "color": "#3a5a7a",
   "word": "Neutral",
   "def": "A change that does not help or harm the organism.",
   "note": "In total darkness no one can see color, so losing it is NEUTRAL here. The same change could be harmful in a sunny river, where pale fish are easy to spot.",
   "es": {
    "name": "Poza quieta en la oscuridad",
    "word": "Neutral",
    "def": "Un cambio que no ayuda ni perjudica al organismo.",
    "note": "En la oscuridad total nadie puede ver el color, así que perderlo es NEUTRAL aquí. El mismo cambio podría ser perjudicial en un río soleado, donde los peces pálidos se ven fácilmente."
   }
  },
  {
   "id": "s5c-sickle",
   "name": "Blood sample poster",
   "look": "cell",
   "color": "#e0384a",
   "word": "Harmful",
   "def": "A change that makes it harder for the organism to survive or stay healthy.",
   "note": "One small mutation in the gene for hemoglobin changes the protein’s shape. Red blood cells can bend into sickles and block blood flow. That effect is HARMFUL.",
   "es": {
    "name": "Cartel de una muestra de sangre",
    "word": "Perjudicial",
    "def": "Un cambio que le hace más difícil al organismo sobrevivir o estar sano.",
    "note": "Una pequeña mutación en el gen de la hemoglobina cambia la forma de la proteína. Los glóbulos rojos pueden doblarse en forma de hoz y tapar el paso de la sangre. Ese efecto es PERJUDICIAL."
   }
  },
  {
   "id": "s5c-milk",
   "name": "Glass of milk poster",
   "look": "drop",
   "color": "#f4f0e8",
   "word": "Beneficial",
   "def": "A change that helps the organism survive or reproduce.",
   "note": "Most mammals stop digesting milk as adults. A mutation lets many people keep making the protein that digests milk. Where people kept cows, this was BENEFICIAL.",
   "es": {
    "name": "Cartel de un vaso de leche",
    "word": "Beneficioso",
    "def": "Un cambio que ayuda al organismo a sobrevivir o reproducirse.",
    "note": "La mayoría de los mamíferos dejan de digerir la leche de adultos. Una mutación permite que muchas personas sigan fabricando la proteína que digiere la leche. Donde la gente criaba vacas, esto fue BENEFICIOSO."
   }
  },
  {
   "id": "s5c-albino",
   "name": "Photo of an albino deer",
   "look": "critter",
   "color": "#f4f0f0",
   "word": "Structure and function",
   "def": "How a body part is built, and the job it does.",
   "note": "An albino deer has a mutation that blocks color. Its eyes are more sensitive to light, and white fur is easy for predators to spot. A change in STRUCTURE changed how its body FUNCTIONS.",
   "es": {
    "name": "Foto de un venado albino",
    "word": "Estructura y función",
    "def": "Cómo está formada una parte del cuerpo y el trabajo que hace.",
    "note": "Un venado albino tiene una mutación que bloquea el color. Sus ojos son más sensibles a la luz, y su pelaje blanco es fácil de ver para los depredadores. Un cambio en la ESTRUCTURA cambió la FUNCIÓN de su cuerpo."
   }
  },
  {
   "id": "s5t-corn",
   "name": "Ear of corn and teosinte",
   "look": "eggs",
   "color": "#ffd166",
   "word": "Selective breeding",
   "def": "Choosing which plants or animals with the best traits get to reproduce.",
   "note": "Thousands of years ago, farmers in Mexico saved seeds from the wild grass teosinte that had the best ears. SELECTIVE BREEDING slowly turned it into corn.",
   "es": {
    "name": "Mazorca de maíz y teocintle",
    "word": "Cría selectiva",
    "def": "Elegir qué plantas o animales con los mejores rasgos se reproducen.",
    "note": "Hace miles de años, los agricultores de México guardaron semillas del teocintle, una hierba silvestre, que tenía las mejores espigas. La CRÍA SELECTIVA lo fue convirtiendo en maíz."
   }
  },
  {
   "id": "s5t-cow",
   "name": "Dairy cow",
   "look": "critter",
   "color": "#f4f4f4",
   "word": "Desired trait",
   "def": "A trait that people want in a plant or animal.",
   "note": "Dairy farmers choose bulls and cows from families that give lots of milk. More milk is a DESIRED TRAIT.",
   "es": {
    "name": "Vaca lechera",
    "word": "Rasgo deseado",
    "def": "Un rasgo que las personas quieren en una planta o un animal.",
    "note": "Los productores de leche eligen toros y vacas de familias que dan mucha leche. Más leche es un RASGO DESEADO."
   }
  },
  {
   "id": "s5t-dogs",
   "name": "Dog breeds poster",
   "look": "critter",
   "color": "#c08a5a",
   "word": "Inheritance",
   "def": "Passing traits from parents to offspring through genes.",
   "note": "All dog breeds come from wolves. By choosing which dogs had puppies, people shaped their INHERITANCE into hundreds of breeds.",
   "es": {
    "name": "Cartel de razas de perros",
    "word": "Herencia",
    "def": "El paso de los rasgos de los padres a las crías por medio de los genes.",
    "note": "Todas las razas de perros vienen de los lobos. Al elegir qué perros tenían cachorros, las personas moldearon su HERENCIA en cientos de razas."
   }
  },
  {
   "id": "s5t-hybrid",
   "name": "Hybrid seed bag",
   "look": "stack",
   "color": "#8ab84a",
   "word": "Hybrid",
   "def": "Offspring of two different varieties that were crossed on purpose.",
   "note": "Crossing two chosen corn varieties makes HYBRID seeds that grow strong, even plants. Hybrid corn spread across U.S. farms in the 1930s.",
   "es": {
    "name": "Bolsa de semillas híbridas",
    "word": "Híbrido",
    "def": "La cría de dos variedades distintas que se cruzaron a propósito.",
    "note": "Cruzar dos variedades elegidas de maíz produce semillas HÍBRIDAS que crecen fuertes y parejas. El maíz híbrido se extendió por las granjas de Estados Unidos en la década de 1930."
   }
  },
  {
   "id": "s5t-ge",
   "name": "Lab bacteria",
   "look": "rod",
   "color": "#7be0ad",
   "word": "Genetic engineering",
   "def": "Changing an organism’s genes directly in a lab, often by adding a gene from another organism.",
   "note": "Scientists put the human gene for insulin into bacteria. The bacteria make insulin for people with diabetes. That is GENETIC ENGINEERING.",
   "es": {
    "name": "Bacterias de laboratorio",
    "word": "Ingeniería genética",
    "def": "Cambiar directamente los genes de un organismo en un laboratorio, a menudo agregando un gen de otro organismo.",
    "note": "Los científicos pusieron el gen humano de la insulina en bacterias. Las bacterias fabrican insulina para las personas con diabetes. Eso es INGENIERÍA GENÉTICA."
   }
  },
  {
   "id": "s5t-btcorn",
   "name": "Insect-resistant corn",
   "look": "sprout",
   "color": "#6aaa4a",
   "word": "Technology",
   "def": "Tools and methods people invent to solve problems.",
   "note": "Some corn has a bacterium’s gene added, so it makes a protein that kills certain insect pests. Each new TECHNOLOGY changed how people shape traits.",
   "es": {
    "name": "Maíz resistente a insectos",
    "word": "Tecnología",
    "def": "Las herramientas y los métodos que las personas inventan para resolver problemas.",
    "note": "A algunos maíces se les agregó un gen de una bacteria, así que fabrican una proteína que mata a ciertas plagas de insectos. Cada nueva TECNOLOGÍA cambió la manera en que las personas moldean los rasgos."
   }
  },
  {
   "id": "s5t-crispr",
   "name": "Gene-editing station",
   "look": "helix",
   "color": "#ff8fb1",
   "word": "Gene editing",
   "def": "Changing a gene at an exact spot in the DNA, using tools like CRISPR.",
   "note": "Since the 2010s, tools like CRISPR let scientists change a gene at one exact spot. GENE EDITING is faster and more precise than older methods.",
   "es": {
    "name": "Estación de edición genética",
    "word": "Edición genética",
    "def": "Cambiar un gen en un lugar exacto del ADN, usando herramientas como CRISPR.",
    "note": "Desde la década de 2010, herramientas como CRISPR permiten a los científicos cambiar un gen en un lugar exacto. La EDICIÓN GENÉTICA es más rápida y precisa que los métodos anteriores."
   }
  },
  {
   "id": "s5t-fish",
   "name": "Glowing fish tank",
   "look": "critter",
   "color": "#ff6ab0",
   "word": "Genetically modified organism",
   "def": "A living thing whose genes were changed by genetic engineering.",
   "note": "These glowing fish got a gene from a jellyfish or a coral that makes a glowing protein. They are GENETICALLY MODIFIED ORGANISMS.",
   "es": {
    "name": "Pecera de peces brillantes",
    "word": "Organismo genéticamente modificado",
    "def": "Un ser vivo cuyos genes se cambiaron con ingeniería genética.",
    "note": "Estos peces brillantes recibieron un gen de una medusa o de un coral que fabrica una proteína brillante. Son ORGANISMOS GENÉTICAMENTE MODIFICADOS."
   }
  }
 ],
 "vocab": [
  {
   "term": "Reproduction",
   "def": "Making offspring: new living things of the same kind.",
   "es": {
    "term": "Reproducción",
    "def": "Producir crías: seres vivos nuevos de la misma especie."
   }
  },
  {
   "term": "Specialized structure",
   "def": "A body part with a special shape or feature that does a certain job.",
   "es": {
    "term": "Estructura especializada",
    "def": "Una parte del cuerpo con una forma o una característica especial que hace un trabajo determinado."
   }
  },
  {
   "term": "Pollination",
   "def": "Moving pollen from one flower to another so the plant can make seeds.",
   "es": {
    "term": "Polinización",
    "def": "Llevar polen de una flor a otra para que la planta pueda producir semillas."
   }
  },
  {
   "term": "Probability",
   "def": "How likely something is to happen.",
   "es": {
    "term": "Probabilidad",
    "def": "Qué tan posible es que algo ocurra."
   }
  },
  {
   "term": "Pollinator",
   "def": "An animal that carries pollen from flower to flower.",
   "es": {
    "term": "Polinizador",
    "def": "Un animal que lleva polen de flor en flor."
   }
  },
  {
   "term": "Courtship",
   "def": "Behaviors an animal uses to attract a mate.",
   "es": {
    "term": "Cortejo",
    "def": "Las conductas que usa un animal para atraer pareja."
   }
  },
  {
   "term": "Parental care",
   "def": "Things parents do to help their young survive, like building nests and feeding them.",
   "es": {
    "term": "Cuidado de las crías",
    "def": "Lo que hacen los padres para ayudar a sus crías a sobrevivir, como hacer nidos y alimentarlas."
   }
  },
  {
   "term": "Behavior",
   "def": "The way an animal acts.",
   "es": {
    "term": "Conducta",
    "def": "La manera en que actúa un animal."
   }
  },
  {
   "term": "Seed dispersal",
   "def": "Ways that seeds travel away from the parent plant.",
   "es": {
    "term": "Dispersión de semillas",
    "def": "Las maneras en que las semillas viajan lejos de la planta madre."
   }
  },
  {
   "term": "Fruit",
   "def": "The part of a flowering plant that holds the seeds.",
   "es": {
    "term": "Fruto",
    "def": "La parte de una planta con flores que guarda las semillas."
   }
  },
  {
   "term": "Asexual reproduction",
   "def": "Making offspring from only ONE parent.",
   "es": {
    "term": "Reproducción asexual",
    "def": "Producir crías a partir de UN solo progenitor."
   }
  },
  {
   "term": "Identical genetic information",
   "def": "Exactly the same genes, like a copy.",
   "es": {
    "term": "Información genética idéntica",
    "def": "Exactamente los mismos genes, como una copia."
   }
  },
  {
   "term": "Sexual reproduction",
   "def": "Making offspring from TWO parents, by joining a sperm (in pollen) and an egg.",
   "es": {
    "term": "Reproducción sexual",
    "def": "Producir crías a partir de DOS progenitores, al unirse un espermatozoide (en el polen) y un óvulo."
   }
  },
  {
   "term": "Offspring",
   "def": "The young of a living thing.",
   "es": {
    "term": "Crías",
    "def": "Los descendientes de un ser vivo."
   }
  },
  {
   "term": "Genetic variation",
   "def": "Differences in genes between individuals.",
   "es": {
    "term": "Variación genética",
    "def": "Diferencias en los genes entre individuos."
   }
  },
  {
   "term": "Parent",
   "def": "A living thing that makes offspring.",
   "es": {
    "term": "Progenitor",
    "def": "Un ser vivo que produce crías."
   }
  },
  {
   "term": "Clone",
   "def": "An offspring with exactly the same genes as its single parent.",
   "es": {
    "term": "Clon",
    "def": "Una cría con exactamente los mismos genes que su único progenitor."
   }
  },
  {
   "term": "Regeneration",
   "def": "Regrowing a lost body part.",
   "es": {
    "term": "Regeneración",
    "def": "Volver a formar una parte del cuerpo perdida."
   }
  },
  {
   "term": "Genetic information",
   "def": "The instructions in DNA that are passed from parents to offspring.",
   "es": {
    "term": "Información genética",
    "def": "Las instrucciones del ADN que pasan de los progenitores a las crías."
   }
  },
  {
   "term": "Gene",
   "def": "A section of DNA with the instructions for making one protein.",
   "es": {
    "term": "Gen",
    "def": "Una sección del ADN con las instrucciones para fabricar una proteína."
   }
  },
  {
   "term": "Chromosome",
   "def": "A tightly coiled strand of DNA in the nucleus. It carries many genes.",
   "es": {
    "term": "Cromosoma",
    "def": "Una hebra de ADN muy enrollada en el núcleo. Lleva muchos genes."
   }
  },
  {
   "term": "DNA",
   "def": "The molecule that holds the genetic instructions of living things.",
   "es": {
    "term": "ADN",
    "def": "La molécula que guarda las instrucciones genéticas de los seres vivos."
   }
  },
  {
   "term": "Protein",
   "def": "A molecule built from a gene’s instructions. Proteins build body parts and do jobs in cells.",
   "es": {
    "term": "Proteína",
    "def": "Una molécula que se fabrica con las instrucciones de un gen. Las proteínas forman partes del cuerpo y hacen trabajos en las células."
   }
  },
  {
   "term": "Mutation",
   "def": "A change in the DNA of a gene.",
   "es": {
    "term": "Mutación",
    "def": "Un cambio en el ADN de un gen."
   }
  },
  {
   "term": "Trait",
   "def": "A feature of an organism, like color, eye size or height.",
   "es": {
    "term": "Rasgo",
    "def": "Una característica de un organismo, como el color, el tamaño de los ojos o la altura."
   }
  },
  {
   "term": "Neutral",
   "def": "A change that does not help or harm the organism.",
   "es": {
    "term": "Neutral",
    "def": "Un cambio que no ayuda ni perjudica al organismo."
   }
  },
  {
   "term": "Harmful",
   "def": "A change that makes it harder for the organism to survive or stay healthy.",
   "es": {
    "term": "Perjudicial",
    "def": "Un cambio que le hace más difícil al organismo sobrevivir o estar sano."
   }
  },
  {
   "term": "Beneficial",
   "def": "A change that helps the organism survive or reproduce.",
   "es": {
    "term": "Beneficioso",
    "def": "Un cambio que ayuda al organismo a sobrevivir o reproducirse."
   }
  },
  {
   "term": "Structure and function",
   "def": "How a body part is built, and the job it does.",
   "es": {
    "term": "Estructura y función",
    "def": "Cómo está formada una parte del cuerpo y el trabajo que hace."
   }
  },
  {
   "term": "Selective breeding",
   "def": "Choosing which plants or animals with the best traits get to reproduce.",
   "es": {
    "term": "Cría selectiva",
    "def": "Elegir qué plantas o animales con los mejores rasgos se reproducen."
   }
  },
  {
   "term": "Desired trait",
   "def": "A trait that people want in a plant or animal.",
   "es": {
    "term": "Rasgo deseado",
    "def": "Un rasgo que las personas quieren en una planta o un animal."
   }
  },
  {
   "term": "Inheritance",
   "def": "Passing traits from parents to offspring through genes.",
   "es": {
    "term": "Herencia",
    "def": "El paso de los rasgos de los padres a las crías por medio de los genes."
   }
  },
  {
   "term": "Hybrid",
   "def": "Offspring of two different varieties that were crossed on purpose.",
   "es": {
    "term": "Híbrido",
    "def": "La cría de dos variedades distintas que se cruzaron a propósito."
   }
  },
  {
   "term": "Genetic engineering",
   "def": "Changing an organism’s genes directly in a lab, often by adding a gene from another organism.",
   "es": {
    "term": "Ingeniería genética",
    "def": "Cambiar directamente los genes de un organismo en un laboratorio, a menudo agregando un gen de otro organismo."
   }
  },
  {
   "term": "Technology",
   "def": "Tools and methods people invent to solve problems.",
   "es": {
    "term": "Tecnología",
    "def": "Las herramientas y los métodos que las personas inventan para resolver problemas."
   }
  },
  {
   "term": "Gene editing",
   "def": "Changing a gene at an exact spot in the DNA, using tools like CRISPR.",
   "es": {
    "term": "Edición genética",
    "def": "Cambiar un gen en un lugar exacto del ADN, usando herramientas como CRISPR."
   }
  },
  {
   "term": "Genetically modified organism",
   "def": "A living thing whose genes were changed by genetic engineering.",
   "es": {
    "term": "Organismo genéticamente modificado",
    "def": "Un ser vivo cuyos genes se cambiaron con ingeniería genética."
   }
  }
 ]
});
