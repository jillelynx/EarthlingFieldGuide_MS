/* WORLD 4 QUESTION FILE: Ecosystems (middle school edition)
   Made by tools/content/build_world.py from the content files in tools/content (edit those, then run it again).
   "code" is the PA STEELS grades 6-8 standard. "es" holds the Spanish text for the same item.
   In "questions", "answer" is the position of the correct option, counting from 0. The game shuffles the options. */
FieldGuide.registerQuestions(4, {
 "tokens": [
  {
   "id": "h4-resources",
   "code": "3.1.6-8.I",
   "prompt": "Collect only RESOURCES a white-tailed deer needs from the forest",
   "good": [
    "Acorns",
    "Young plants",
    "Stream water",
    "Thick brush for shelter"
   ],
   "bad": [
    {
     "text": "A coyote",
     "explain": "A coyote is a predator of fawns, not a resource the deer uses.",
     "es": {
      "text": "Un coyote",
      "explain": "Un coyote es un depredador de los cervatillos, no un recurso que use el venado."
     }
    },
    {
     "text": "A plastic bag",
     "explain": "Plastic is trash. It is not food, water or shelter, and it can harm animals.",
     "es": {
      "text": "Una bolsa de plástico",
      "explain": "El plástico es basura. No es alimento, agua ni refugio, y puede dañar a los animales."
     }
    },
    {
     "text": "A gravel parking lot",
     "explain": "A parking lot has no food or shelter for deer.",
     "es": {
      "text": "Un estacionamiento de grava",
      "explain": "Un estacionamiento no tiene alimento ni refugio para los venados."
     }
    }
   ],
   "es": {
    "prompt": "Recoge solo los RECURSOS que un venado de cola blanca necesita del bosque",
    "good": [
     "Bellotas",
     "Plantas jóvenes",
     "Agua del arroyo",
     "Matorral tupido para refugiarse"
    ]
   }
  },
  {
   "id": "h4-decomp",
   "code": "3.1.6-8.K",
   "prompt": "Collect only DECOMPOSERS: living things that break down dead matter",
   "good": [
    "Turkey tail fungus",
    "Soil bacteria",
    "Earthworm",
    "Mold on a leaf"
   ],
   "bad": [
    {
     "text": "Oak seedling",
     "explain": "An oak seedling is a producer. It makes food by photosynthesis.",
     "es": {
      "text": "Plántula de roble",
      "explain": "Una plántula de roble es un productor. Fabrica alimento por fotosíntesis."
     }
    },
    {
     "text": "Red-backed salamander",
     "explain": "The salamander is a consumer. It eats small animals.",
     "es": {
      "text": "Salamandra de lomo rojo",
      "explain": "La salamandra es un consumidor. Come animales pequeños."
     }
    },
    {
     "text": "A rock",
     "explain": "A rock is a nonliving part of the ecosystem.",
     "es": {
      "text": "Una roca",
      "explain": "Una roca es una parte sin vida del ecosistema."
     }
    }
   ],
   "es": {
    "prompt": "Recoge solo DESCOMPONEDORES: seres vivos que descomponen la materia muerta",
    "good": [
     "Hongo cola de pavo",
     "Bacterias del suelo",
     "Lombriz de tierra",
     "Moho en una hoja"
    ]
   }
  }
 ],
 "sorts": [
  {
   "id": "sort4-interact",
   "code": "3.1.6-8.J",
   "prompt": "What kind of interaction is this?",
   "options": [
    "Competition",
    "Predation",
    "Mutualism"
   ],
   "hint": "Competition: both want the same resource. Predation: one eats the other. Mutualism: both benefit.",
   "items": [
    {
     "text": "Clownfish and anemone on the reef",
     "answer": 2,
     "explain": "Each protects the other: mutualism.",
     "es": {
      "text": "Pez payaso y anémona en el arrecife",
      "explain": "Cada uno protege al otro: mutualismo."
     }
    },
    {
     "text": "Bumble bee and blazing star on the prairie",
     "answer": 2,
     "explain": "The bee gets nectar; the flower gets pollinated: mutualism.",
     "es": {
      "text": "Abejorro y estrella fulgurante en la pradera",
      "explain": "La abeja obtiene néctar y la flor es polinizada: mutualismo."
     }
    },
    {
     "text": "Reef shark catching a fish",
     "answer": 1,
     "explain": "One animal eats the other: predation.",
     "es": {
      "text": "Tiburón de arrecife que atrapa un pez",
      "explain": "Un animal se come al otro: depredación."
     }
    },
    {
     "text": "Red-tailed hawk catching a mouse in a Pennsylvania field",
     "answer": 1,
     "explain": "A predator and its prey: predation.",
     "es": {
      "text": "Halcón de cola roja que atrapa un ratón en un campo de Pensilvania",
      "explain": "Un depredador y su presa: depredación."
     }
    },
    {
     "text": "Two corals growing toward the same sunlight",
     "answer": 0,
     "explain": "Both need the same light and space: competition.",
     "es": {
      "text": "Dos corales que crecen hacia la misma luz",
      "explain": "Los dos necesitan la misma luz y espacio: competencia."
     }
    },
    {
     "text": "Oak and maple seedlings in the same forest gap",
     "answer": 0,
     "explain": "Both need the same sunlight, water and soil: competition.",
     "es": {
      "text": "Plántulas de roble y de arce en el mismo claro del bosque",
      "explain": "Las dos necesitan la misma luz, agua y suelo: competencia."
     }
    },
    {
     "text": "Two desert lizards hunting the same insects",
     "answer": 0,
     "explain": "They need the same limited food: competition.",
     "es": {
      "text": "Dos lagartijas del desierto que cazan los mismos insectos",
      "explain": "Necesitan el mismo alimento limitado: competencia."
     }
    }
   ],
   "es": {
    "prompt": "¿Qué tipo de interacción es?",
    "options": [
     "Competencia",
     "Depredación",
     "Mutualismo"
    ],
    "hint": "Competencia: los dos quieren el mismo recurso. Depredación: uno se come al otro. Mutualismo: los dos se benefician."
   }
  },
  {
   "id": "sort4-role",
   "code": "3.1.6-8.K",
   "prompt": "What part does this play on the forest floor?",
   "options": [
    "Producer",
    "Consumer",
    "Decomposer",
    "Nonliving"
   ],
   "hint": "Producers make food. Consumers eat other living things. Decomposers break down dead matter. Nonliving parts are not alive.",
   "items": [
    {
     "text": "Moss",
     "answer": 0,
     "explain": "Moss makes food by photosynthesis: producer.",
     "es": {
      "text": "Musgo",
      "explain": "El musgo fabrica alimento por fotosíntesis: productor."
     }
    },
    {
     "text": "Red-backed salamander",
     "answer": 1,
     "explain": "It eats small animals: consumer.",
     "es": {
      "text": "Salamandra de lomo rojo",
      "explain": "Come animales pequeños: consumidor."
     }
    },
    {
     "text": "Turkey tail fungus",
     "answer": 2,
     "explain": "It digests dead wood: decomposer.",
     "es": {
      "text": "Hongo cola de pavo",
      "explain": "Digiere la madera muerta: descomponedor."
     }
    },
    {
     "text": "Rainwater in the soil",
     "answer": 3,
     "explain": "Water is not alive: nonliving part.",
     "es": {
      "text": "Agua de lluvia en el suelo",
      "explain": "El agua no está viva: parte sin vida."
     }
    },
    {
     "text": "Oak seedling",
     "answer": 0,
     "explain": "It makes food from sunlight: producer.",
     "es": {
      "text": "Plántula de roble",
      "explain": "Fabrica alimento con la luz del sol: productor."
     }
    },
    {
     "text": "Soil bacteria",
     "answer": 2,
     "explain": "They break down dead matter: decomposers.",
     "es": {
      "text": "Bacterias del suelo",
      "explain": "Descomponen la materia muerta: descomponedores."
     }
    },
    {
     "text": "Sunlight",
     "answer": 3,
     "explain": "Sunlight is energy, not a living thing: nonliving part.",
     "es": {
      "text": "Luz del sol",
      "explain": "La luz del sol es energía, no un ser vivo: parte sin vida."
     }
    },
    {
     "text": "Garter snake",
     "answer": 1,
     "explain": "It eats salamanders and worms: consumer.",
     "es": {
      "text": "Culebra rayada",
      "explain": "Come salamandras y lombrices: consumidor."
     }
    }
   ],
   "es": {
    "prompt": "¿Qué papel cumple en el suelo del bosque?",
    "options": [
     "Productor",
     "Consumidor",
     "Descomponedor",
     "Sin vida"
    ],
    "hint": "Los productores fabrican alimento. Los consumidores comen otros seres vivos. Los descomponedores descomponen la materia muerta. Las partes sin vida no están vivas."
   }
  },
  {
   "id": "sort4-fire",
   "code": "3.1.6-8.L",
   "prompt": "After the fire, did this population GROW or SHRINK in the burned areas?",
   "options": [
    "Grew",
    "Shrank"
   ],
   "hint": "Think about what each living thing needs, and whether the fire made more of it or took it away.",
   "items": [
    {
     "text": "Fireweed",
     "answer": 0,
     "explain": "Fireweed loves sunny, open ground: it grew.",
     "es": {
      "text": "Epilobio",
      "explain": "Al epilobio le encanta el suelo abierto y soleado: creció."
     }
    },
    {
     "text": "Black-backed woodpeckers",
     "answer": 0,
     "explain": "Fire-killed trees filled with beetles to eat: they grew.",
     "es": {
      "text": "Pájaros carpinteros de lomo negro",
      "explain": "Los árboles muertos por el fuego se llenaron de escarabajos para comer: crecieron."
     }
    },
    {
     "text": "Red squirrels",
     "answer": 1,
     "explain": "Their food, seeds from mature cones, burned: they shrank.",
     "es": {
      "text": "Ardillas rojas",
      "explain": "Su alimento, las semillas de las piñas maduras, se quemó: disminuyeron."
     }
    },
    {
     "text": "Mature lodgepole pines",
     "answer": 1,
     "explain": "Many old trees were killed by the fire: they shrank.",
     "es": {
      "text": "Pinos contorta maduros",
      "explain": "El fuego mató muchos árboles viejos: disminuyeron."
     }
    },
    {
     "text": "Lodgepole pine seedlings",
     "answer": 0,
     "explain": "Heat opened the cones and seeds sprouted everywhere: they grew.",
     "es": {
      "text": "Plántulas de pino contorta",
      "explain": "El calor abrió las piñas y las semillas brotaron por todas partes: crecieron."
     }
    },
    {
     "text": "Wood-boring beetles",
     "answer": 0,
     "explain": "Dead trees gave them places to lay eggs: they grew.",
     "es": {
      "text": "Escarabajos barrenadores",
      "explain": "Los árboles muertos les dieron lugares para poner huevos: crecieron."
     }
    }
   ],
   "es": {
    "prompt": "Después del incendio, ¿esta población CRECIÓ o DISMINUYÓ en las zonas quemadas?",
    "options": [
     "Creció",
     "Disminuyó"
    ],
    "hint": "Piensa en lo que necesita cada ser vivo y si el fuego produjo más de eso o se lo quitó."
   }
  },
  {
   "id": "sort4-dam",
   "code": "3.1.6-8.U",
   "prompt": "For a dam that makes electricity, like Holtwood: which design does BETTER on this criterion?",
   "options": [
    "Fish lift",
    "Dam removal"
   ],
   "hint": "A fish lift keeps the dam and carries fish over it. Removing the dam lets the river flow freely, but the dam’s uses are lost.",
   "items": [
    {
     "text": "Keeps making electricity",
     "answer": 0,
     "explain": "With a fish lift, the dam still makes electricity.",
     "es": {
      "text": "Sigue produciendo electricidad",
      "explain": "Con un elevador de peces, la presa sigue produciendo electricidad."
     }
    },
    {
     "text": "Lets the most fish swim upstream",
     "answer": 1,
     "explain": "With no dam at all, fish can swim upstream on their own.",
     "es": {
      "text": "Deja que la mayor cantidad de peces nade río arriba",
      "explain": "Sin presa, los peces pueden nadar río arriba por sí solos."
     }
    },
    {
     "text": "Lets sand and gravel move downstream again",
     "answer": 1,
     "explain": "A free-flowing river carries sand and gravel that fish and insects need.",
     "es": {
      "text": "Deja que la arena y la grava vuelvan a bajar por el río",
      "explain": "Un río que corre libre lleva la arena y la grava que necesitan los peces y los insectos."
     }
    },
    {
     "text": "Keeps the lake behind the dam for boating",
     "answer": 0,
     "explain": "The lake stays only if the dam stays.",
     "es": {
      "text": "Conserva el lago detrás de la presa para pasear en bote",
      "explain": "El lago se queda solo si se queda la presa."
     }
    },
    {
     "text": "Brings back the river’s natural habitat",
     "answer": 1,
     "explain": "Removing the dam restores a flowing river habitat.",
     "es": {
      "text": "Recupera el hábitat natural del río",
      "explain": "Quitar la presa restaura el hábitat de un río que corre."
     }
    }
   ],
   "es": {
    "prompt": "Para una presa que produce electricidad, como Holtwood: ¿qué diseño funciona MEJOR con este criterio?",
    "options": [
     "Elevador de peces",
     "Retiro de la presa"
    ],
    "hint": "Un elevador de peces conserva la presa y lleva a los peces por encima. Quitar la presa deja correr libre al río, pero se pierden los usos de la presa."
   }
  },
  {
   "id": "sort4-road",
   "code": "3.1.6-8.U",
   "prompt": "Which design does BETTER on this criterion?",
   "options": [
    "Fence only",
    "Fence with overpass"
   ],
   "hint": "A fence keeps animals off the road. An overpass also lets them cross to the other side.",
   "items": [
    {
     "text": "Costs less to build",
     "answer": 0,
     "explain": "A fence alone is much cheaper than a bridge for animals.",
     "es": {
      "text": "Cuesta menos construirlo",
      "explain": "Una cerca sola es mucho más barata que un puente para animales."
     }
    },
    {
     "text": "Keeps the habitat on both sides connected",
     "answer": 1,
     "explain": "Animals can still reach the other side by the overpass.",
     "es": {
      "text": "Mantiene conectado el hábitat de los dos lados",
      "explain": "Los animales todavía pueden llegar al otro lado por el paso elevado."
     }
    },
    {
     "text": "Can be built quickly",
     "answer": 0,
     "explain": "A fence can go up fast; an overpass takes years to plan and build.",
     "es": {
      "text": "Se puede construir rápido",
      "explain": "Una cerca se levanta rápido; un paso elevado tarda años en planearse y construirse."
     }
    },
    {
     "text": "Lets animals find mates and food on the other side",
     "answer": 1,
     "explain": "The overpass keeps populations connected.",
     "es": {
      "text": "Deja que los animales encuentren pareja y alimento del otro lado",
      "explain": "El paso elevado mantiene conectadas las poblaciones."
     }
    },
    {
     "text": "Protects the most biodiversity",
     "answer": 1,
     "explain": "Connected habitat supports more species over time.",
     "es": {
      "text": "Protege la mayor biodiversidad",
      "explain": "Un hábitat conectado mantiene más especies con el tiempo."
     }
    }
   ],
   "es": {
    "prompt": "¿Qué diseño funciona MEJOR con este criterio?",
    "options": [
     "Solo una cerca",
     "Cerca con paso elevado"
    ],
    "hint": "Una cerca mantiene a los animales fuera de la carretera. Un paso elevado también les permite cruzar al otro lado."
   }
  }
 ],
 "questions": [
  {
   "id": "ms4q01",
   "code": "3.1.6-8.J",
   "prompt": "Clownfish and sea anemones both benefit from living together. This interaction is called...",
   "options": [
    "mutualism",
    "predation",
    "competition",
    "decomposition"
   ],
   "answer": 0,
   "hint": "Both partners benefit.",
   "explain": "In mutualism, both living things benefit. The anemone protects the clownfish, and the clownfish defends the anemone.",
   "es": {
    "prompt": "El pez payaso y la anémona se benefician al vivir juntos. Esta interacción se llama...",
    "options": [
     "mutualismo",
     "depredación",
     "competencia",
     "descomposición"
    ],
    "hint": "Los dos se benefician.",
    "explain": "En el mutualismo, los dos seres vivos se benefician. La anémona protege al pez payaso y el pez payaso defiende a la anémona."
   }
  },
  {
   "id": "ms4q02",
   "code": "3.1.6-8.J",
   "prompt": "Two kinds of coral grow toward the same patch of sunlight. What interaction is this?",
   "options": [
    "competition",
    "mutualism",
    "predation",
    "pollination by bees"
   ],
   "answer": 0,
   "hint": "They both want the same limited resource.",
   "explain": "When living things need the same limited resource, they compete.",
   "es": {
    "prompt": "Dos tipos de coral crecen hacia la misma zona de luz. ¿Qué interacción es esta?",
    "options": [
     "competencia",
     "mutualismo",
     "depredación",
     "polinización por abejas"
    ],
    "hint": "Los dos quieren el mismo recurso limitado.",
    "explain": "Cuando los seres vivos necesitan el mismo recurso limitado, compiten."
   }
  },
  {
   "id": "ms4q03",
   "code": "3.1.6-8.J",
   "prompt": "A reef shark eats a parrotfish. Which one is the PREDATOR?",
   "options": [
    "the reef shark",
    "the parrotfish",
    "both of them",
    "neither of them"
   ],
   "answer": 0,
   "hint": "The predator does the hunting.",
   "explain": "The shark hunts and eats the parrotfish, so the shark is the predator and the parrotfish is the prey.",
   "es": {
    "prompt": "Un tiburón de arrecife se come un pez loro. ¿Cuál es el DEPREDADOR?",
    "options": [
     "el tiburón de arrecife",
     "el pez loro",
     "tanto el uno como el otro",
     "ninguno de los dos"
    ],
    "hint": "El depredador es el que caza.",
    "explain": "El tiburón caza y se come al pez loro, así que el tiburón es el depredador y el pez loro es la presa."
   }
  },
  {
   "id": "ms4q04",
   "code": "3.1.6-8.J",
   "prompt": "On the reef, cleaner shrimp eat parasites off fish. In a Pennsylvania forest, which pair would you PREDICT shows the same kind of interaction?",
   "options": [
    "a bee pollinating a flower for nectar",
    "a hawk swooping down to eat a mouse",
    "two oak trees competing for the same light",
    "a fox chasing a rabbit across a field"
   ],
   "answer": 0,
   "hint": "Look for a pair where both benefit.",
   "explain": "Cleaning is mutualism. In the forest, bees and flowers are also mutualism: the bee gets food and the flower gets pollinated.",
   "es": {
    "prompt": "En el arrecife, los camarones limpiadores se comen los parásitos de los peces. En un bosque de Pensilvania, ¿qué pareja PREDICES que muestra el mismo tipo de interacción?",
    "options": [
     "una abeja que poliniza una flor a cambio de néctar",
     "un halcón que baja en picada para comerse un ratón",
     "dos robles que compiten por la misma luz",
     "un zorro que persigue un conejo por el campo"
    ],
    "hint": "Busca una pareja en la que los dos se beneficien.",
    "explain": "La limpieza es mutualismo. En el bosque, las abejas y las flores también son mutualismo: la abeja obtiene alimento y la flor es polinizada."
   }
  },
  {
   "id": "ms4q05",
   "code": "3.1.6-8.J",
   "prompt": "Why can scientists PREDICT that predation will happen in a desert they have never visited?",
   "options": [
    "Predation happens in every ecosystem.",
    "Deserts are too dry to have any animals.",
    "Only coral reefs have true predators.",
    "Predation happens only in water."
   ],
   "answer": 0,
   "hint": "The same kinds of interactions repeat everywhere.",
   "explain": "Competition, predation and mutualism are patterns found in every ecosystem, so they can be predicted.",
   "es": {
    "prompt": "¿Por qué los científicos pueden PREDECIR que habrá depredación en un desierto que nunca han visitado?",
    "options": [
     "La depredación ocurre en todos los ecosistemas.",
     "Los desiertos son demasiado secos para tener animales.",
     "Solo los arrecifes de coral tienen depredadores de verdad.",
     "La depredación solo ocurre en el agua."
    ],
    "hint": "Los mismos tipos de interacciones se repiten en todas partes.",
    "explain": "La competencia, la depredación y el mutualismo son patrones de todos los ecosistemas, así que se pueden predecir."
   }
  },
  {
   "id": "ms4q06",
   "code": "3.1.6-8.J",
   "prompt": "Two kinds of birds in the same forest eat the same insects. If the insects become scarce, what would you predict?",
   "options": [
    "The birds compete more for food.",
    "The birds no longer need any food.",
    "The birds become mutualists.",
    "Nothing changes."
   ],
   "answer": 0,
   "hint": "Less of a shared resource...",
   "explain": "When a shared resource becomes scarce, competition for it increases.",
   "es": {
    "prompt": "Dos tipos de aves del mismo bosque comen los mismos insectos. Si los insectos escasean, ¿qué predices?",
    "options": [
     "Las aves compiten más por el alimento.",
     "Las aves ya no necesitan nada de alimento.",
     "Las aves se vuelven mutualistas.",
     "No cambia nada."
    ],
    "hint": "Menos de un recurso compartido...",
    "explain": "Cuando un recurso compartido escasea, la competencia por él aumenta."
   }
  },
  {
   "id": "ms4q07",
   "code": "3.1.6-8.J",
   "prompt": "Tiny algae live inside coral. They give the coral sugar, and the coral gives them a safe home. Which forest pair shows the SAME pattern?",
   "options": [
    "root fungi trading nutrients for sugar",
    "a deer eating the leaves of a young tree",
    "a snake catching and eating a salamander",
    "two squirrels fighting over the same acorns"
   ],
   "answer": 0,
   "hint": "Look for a trade where both benefit.",
   "explain": "Root fungi give trees nutrients and get sugar back: mutualism, the same pattern as coral and its algae.",
   "es": {
    "prompt": "Unas algas diminutas viven dentro del coral. Le dan azúcar al coral y el coral les da un hogar seguro. ¿Qué pareja del bosque muestra el MISMO patrón?",
    "options": [
     "hongos de las raíces que cambian nutrientes por azúcar",
     "un venado que se come las hojas de un árbol joven",
     "una culebra que atrapa y se come una salamandra",
     "dos ardillas que se pelean por las mismas bellotas"
    ],
    "hint": "Busca un intercambio en el que los dos se beneficien.",
    "explain": "Los hongos de las raíces les dan nutrientes a los árboles y reciben azúcar: mutualismo, el mismo patrón que el coral y sus algas."
   }
  },
  {
   "id": "ms4q08",
   "code": "3.1.6-8.L",
   "prompt": "What would most likely happen to the parrotfish population if most reef sharks were removed?",
   "options": [
    "It would probably increase.",
    "It would disappear.",
    "It would stay exactly the same.",
    "It would turn into sharks."
   ],
   "answer": 0,
   "hint": "Fewer predators...",
   "explain": "With fewer predators, more prey survive, so the prey population would likely grow.",
   "es": {
    "prompt": "¿Qué pasaría probablemente con la población de peces loro si se quitaran casi todos los tiburones del arrecife?",
    "options": [
     "Probablemente aumentaría.",
     "Desaparecería.",
     "Se quedaría exactamente igual.",
     "Se convertirían en tiburones."
    ],
    "hint": "Menos depredadores...",
    "explain": "Con menos depredadores sobreviven más presas, así que la población de presas probablemente crecería."
   }
  },
  {
   "id": "ms4q09",
   "code": "3.1.6-8.J",
   "prompt": "Which word describes an animal that is hunted and eaten?",
   "options": [
    "prey",
    "predator",
    "producer",
    "decomposer"
   ],
   "answer": 0,
   "hint": "It is the opposite of predator.",
   "explain": "The prey is the animal that a predator eats.",
   "es": {
    "prompt": "¿Qué palabra describe a un animal al que cazan y se comen?",
    "options": [
     "presa",
     "depredador",
     "productor",
     "descomponedor"
    ],
    "hint": "Es lo contrario de depredador.",
    "explain": "La presa es el animal que se come un depredador."
   }
  },
  {
   "id": "ms4q10",
   "code": "3.1.6-8.J",
   "prompt": "A crown-of-thorns starfish eats living coral polyps. What kind of interaction is this?",
   "options": [
    "predation",
    "mutualism",
    "competition",
    "photosynthesis"
   ],
   "answer": 0,
   "hint": "One living thing eats another.",
   "explain": "The starfish eats the coral, so it is predation.",
   "es": {
    "prompt": "Una estrella corona de espinas se come los pólipos vivos del coral. ¿Qué tipo de interacción es esta?",
    "options": [
     "depredación",
     "mutualismo",
     "competencia",
     "fotosíntesis"
    ],
    "hint": "Un ser vivo se come a otro.",
    "explain": "La estrella se come al coral, así que es depredación."
   }
  },
  {
   "id": "ms4q11",
   "code": "3.1.6-8.I",
   "prompt": "Which is a RESOURCE a white-tailed deer needs from its ecosystem?",
   "options": [
    "food, like acorns",
    "a coyote that hunts it",
    "a plastic bag in the woods",
    "a parking lot"
   ],
   "answer": 0,
   "hint": "Resources are things like food, water and shelter.",
   "explain": "Deer need food, water, shelter and space from their ecosystem.",
   "es": {
    "prompt": "¿Cuál es un RECURSO que un venado de cola blanca necesita de su ecosistema?",
    "options": [
     "alimento, como bellotas",
     "un coyote que lo caza",
     "una bolsa de plástico en el bosque",
     "un estacionamiento"
    ],
    "hint": "Los recursos son cosas como el alimento, el agua y el refugio.",
    "explain": "Los venados necesitan alimento, agua, refugio y espacio de su ecosistema."
   }
  },
  {
   "id": "ms4q12",
   "code": "3.1.6-8.I",
   "prompt": "After a huge acorn crop, what usually happens to the white-footed mouse population the next year?",
   "options": [
    "It grows.",
    "It shrinks.",
    "It stays exactly the same.",
    "All the mice move away."
   ],
   "answer": 0,
   "hint": "More food...",
   "explain": "More food lets more mice survive the winter and raise young, so the population grows.",
   "es": {
    "prompt": "Después de una cosecha enorme de bellotas, ¿qué suele pasar con la población de ratones de patas blancas al año siguiente?",
    "options": [
     "Crece.",
     "Disminuye.",
     "Se queda exactamente igual.",
     "Todos los ratones se van."
    ],
    "hint": "Más alimento...",
    "explain": "Más alimento permite que más ratones sobrevivan al invierno y críen, así que la población crece."
   }
  },
  {
   "id": "ms4q13",
   "code": "3.1.6-8.I",
   "prompt": "A resource in short supply that keeps a population from growing is called a...",
   "options": [
    "limiting factor",
    "mutualism",
    "primary producer",
    "mast year"
   ],
   "answer": 0,
   "hint": "It limits growth.",
   "explain": "A limiting factor, like scarce food or water, keeps a population from getting bigger.",
   "es": {
    "prompt": "Un recurso escaso que impide que una población crezca se llama...",
    "options": [
     "factor limitante",
     "mutualismo",
     "productor primario",
     "año de abundancia"
    ],
    "hint": "Limita el crecimiento.",
    "explain": "Un factor limitante, como el alimento o el agua escasos, impide que una población crezca."
   }
  },
  {
   "id": "ms4q14",
   "code": "3.1.6-8.I",
   "prompt": "What is the CARRYING CAPACITY of a forest for deer?",
   "options": [
    "the most deer its resources can support",
    "the number of deer a truck can carry",
    "the total weight of one adult deer",
    "the number of trees growing in the whole forest"
   ],
   "answer": 0,
   "hint": "Think about what the ecosystem can feed.",
   "explain": "Carrying capacity is the biggest population an ecosystem can support with its resources.",
   "es": {
    "prompt": "¿Qué es la CAPACIDAD DE CARGA de un bosque para los venados?",
    "options": [
     "el máximo de venados que sus recursos pueden mantener",
     "el número de venados que puede llevar un camión",
     "el peso total de un venado adulto",
     "el número de árboles que crecen en todo el bosque"
    ],
    "hint": "Piensa en lo que el ecosistema puede alimentar.",
    "explain": "La capacidad de carga es la población más grande que un ecosistema puede mantener con sus recursos."
   }
  },
  {
   "id": "ms4q15",
   "code": "3.1.6-8.I",
   "prompt": "There are more deer than a forest can feed. What evidence would you expect to see?",
   "options": [
    "very few young trees left",
    "more young trees than ever",
    "deer getting fatter every year",
    "more acorns on the ground"
   ],
   "answer": 0,
   "hint": "Hungry deer eat young plants.",
   "explain": "When deer go over carrying capacity, they overbrowse: young trees and wildflowers disappear.",
   "es": {
    "prompt": "Hay más venados de los que un bosque puede alimentar. ¿Qué evidencia esperarías ver?",
    "options": [
     "muy pocos árboles jóvenes",
     "más árboles jóvenes que nunca",
     "venados más gordos cada año",
     "más bellotas en el suelo"
    ],
    "hint": "Los venados con hambre comen plantas jóvenes.",
    "explain": "Cuando los venados superan la capacidad de carga, ramonean en exceso: desaparecen los árboles jóvenes y las flores silvestres."
   }
  },
  {
   "id": "ms4q16",
   "code": "3.1.6-8.I",
   "prompt": "A dry summer shrinks the forest streams. Which population is MOST directly affected?",
   "options": [
    "animals that drink from the streams",
    "the rocks lying in the stream bed",
    "the sunlight over the forest",
    "the air above the streams"
   ],
   "answer": 0,
   "hint": "Water is a resource for living things.",
   "explain": "Less water, a key resource, directly affects the animals that depend on it.",
   "es": {
    "prompt": "Un verano seco achica los arroyos del bosque. ¿Qué población se ve afectada MÁS directamente?",
    "options": [
     "los animales que beben de los arroyos",
     "las rocas que hay en el lecho del arroyo",
     "la luz del sol sobre el bosque",
     "el aire sobre los arroyos"
    ],
    "hint": "El agua es un recurso para los seres vivos.",
    "explain": "Menos agua, un recurso clave, afecta directamente a los animales que dependen de ella."
   }
  },
  {
   "id": "ms4q17",
   "code": "3.1.6-8.I",
   "prompt": "Old trees with holes are cut down in a forest. Which resource do squirrels and owls lose?",
   "options": [
    "shelter",
    "sunlight",
    "oxygen",
    "soil"
   ],
   "answer": 0,
   "hint": "Where do they nest?",
   "explain": "Tree holes give shelter. Losing them can shrink populations that nest in holes.",
   "es": {
    "prompt": "En un bosque cortan los árboles viejos con huecos. ¿Qué recurso pierden las ardillas y los búhos?",
    "options": [
     "refugio",
     "luz del sol",
     "oxígeno",
     "suelo"
    ],
    "hint": "Piensa en dónde hacen sus nidos.",
    "explain": "Los huecos de los árboles dan refugio. Perderlos puede reducir las poblaciones que anidan en huecos."
   }
  },
  {
   "id": "ms4q18",
   "code": "3.1.6-8.I",
   "prompt": "A graph shows the mouse population rising and falling a year after the acorn crop rises and falls. What does this pattern show?",
   "options": [
    "The amount of food affects population size.",
    "Mice make the acorns that oak trees drop.",
    "Acorns are a predator of the mice.",
    "Population size never changes from year to year."
   ],
   "answer": 0,
   "hint": "One goes up, then the other follows.",
   "explain": "The data are evidence that the amount of food affects how many mice survive and reproduce.",
   "es": {
    "prompt": "Una gráfica muestra que la población de ratones sube y baja un año después de que sube y baja la cosecha de bellotas. ¿Qué muestra este patrón?",
    "options": [
     "La cantidad de alimento influye en el tamaño de la población.",
     "Los ratones fabrican las bellotas que tiran los robles.",
     "Las bellotas son depredadoras de los ratones.",
     "El tamaño de la población nunca cambia de un año a otro."
    ],
    "hint": "Una sube y la otra la sigue.",
    "explain": "Los datos son evidencia de que la cantidad de alimento influye en cuántos ratones sobreviven y se reproducen."
   }
  },
  {
   "id": "ms4q19",
   "code": "3.1.6-8.I",
   "prompt": "In a poor acorn year, black bears travel farther to find food. Why?",
   "options": [
    "Their usual food is scarce.",
    "They just want to get more exercise.",
    "Black bears never eat acorns.",
    "There are too many acorns to eat."
   ],
   "answer": 0,
   "hint": "What is missing?",
   "explain": "When a food resource is scarce, animals must search farther, and fewer may survive or raise young.",
   "es": {
    "prompt": "En un año de pocas bellotas, los osos negros viajan más lejos para buscar comida. ¿Por qué?",
    "options": [
     "Su alimento habitual escasea.",
     "Solo quieren hacer más ejercicio.",
     "Los osos negros nunca comen bellotas.",
     "Hay demasiadas bellotas para comer."
    ],
    "hint": "¿Qué es lo que falta?",
    "explain": "Cuando un alimento escasea, los animales deben buscar más lejos, y es posible que sobrevivan o críen menos."
   }
  },
  {
   "id": "ms4q20",
   "code": "3.1.6-8.I",
   "prompt": "Which change would MOST likely let a forest’s deer population grow?",
   "options": [
    "a mild winter with lots of acorns",
    "a long, snowy winter with few acorns",
    "a drought that dries up streams",
    "cutting down the oak trees"
   ],
   "answer": 0,
   "hint": "More resources...",
   "explain": "More food and an easier winter let more deer survive and have fawns.",
   "es": {
    "prompt": "¿Qué cambio permitiría MÁS probablemente que creciera la población de venados de un bosque?",
    "options": [
     "un invierno suave con muchas bellotas",
     "un invierno largo y con nieve, con pocas bellotas",
     "una sequía que seca los arroyos",
     "talar los robles"
    ],
    "hint": "Más recursos...",
    "explain": "Más alimento y un invierno más fácil permiten que más venados sobrevivan y tengan cervatillos."
   }
  },
  {
   "id": "ms4q21",
   "code": "3.1.6-8.K",
   "prompt": "What do decomposers like fungi and bacteria do?",
   "options": [
    "break down dead matter into nutrients",
    "make their own food from sunlight, like plants",
    "hunt live deer and rabbits",
    "turn soil nutrients into sunlight"
   ],
   "answer": 0,
   "hint": "Think about the rotting log.",
   "explain": "Decomposers break down dead plants and animals, returning matter to the soil and the air.",
   "es": {
    "prompt": "¿Qué hacen los descomponedores como los hongos y las bacterias?",
    "options": [
     "descomponen la materia muerta en nutrientes",
     "fabrican su propio alimento con la luz del sol, como las plantas",
     "cazan venados y conejos vivos",
     "convierten los nutrientes del suelo en luz del sol"
    ],
    "hint": "Piensa en el tronco podrido.",
    "explain": "Los descomponedores descomponen las plantas y los animales muertos y devuelven la materia al suelo y al aire."
   }
  },
  {
   "id": "ms4q22",
   "code": "3.1.6-8.K",
   "prompt": "Which is a NONLIVING part of a forest ecosystem?",
   "options": [
    "rainwater",
    "a patch of moss",
    "a salamander",
    "a mushroom"
   ],
   "answer": 0,
   "hint": "It is not alive and never was.",
   "explain": "Water, air, sunlight, rocks and soil minerals are nonliving parts of an ecosystem.",
   "es": {
    "prompt": "¿Cuál es una parte SIN VIDA de un ecosistema del bosque?",
    "options": [
     "el agua de lluvia",
     "un parche de musgo",
     "una salamandra",
     "un hongo"
    ],
    "hint": "No está viva y nunca lo estuvo.",
    "explain": "El agua, el aire, la luz del sol, las rocas y los minerales del suelo son partes sin vida de un ecosistema."
   }
  },
  {
   "id": "ms4q23",
   "code": "3.1.6-8.K",
   "prompt": "Where does the energy in a forest food web come from in the first place?",
   "options": [
    "the Sun",
    "the soil",
    "decomposers",
    "rainwater"
   ],
   "answer": 0,
   "hint": "Producers capture it.",
   "explain": "Producers capture light energy from the Sun by photosynthesis. That energy then flows to consumers.",
   "es": {
    "prompt": "¿De dónde viene en primer lugar la energía de una red alimentaria del bosque?",
    "options": [
     "del Sol",
     "del suelo",
     "de los descomponedores",
     "del agua de lluvia"
    ],
    "hint": "Los productores la capturan.",
    "explain": "Los productores capturan la energía luminosa del Sol por fotosíntesis. Esa energía luego fluye a los consumidores."
   }
  },
  {
   "id": "ms4q24",
   "code": "3.1.6-8.K",
   "prompt": "Which statement is TRUE about matter and energy in an ecosystem?",
   "options": [
    "Matter cycles; energy flows one way.",
    "Energy cycles over and over; matter is used up.",
    "Decomposers destroy both matter and energy.",
    "Neither one moves between living things."
   ],
   "answer": 0,
   "hint": "Atoms get reused; energy keeps coming from the Sun.",
   "explain": "Matter is reused again and again. Energy flows in from the Sun and leaves as heat.",
   "es": {
    "prompt": "¿Qué afirmación sobre la materia y la energía en un ecosistema es VERDADERA?",
    "options": [
     "La materia circula; la energía fluye en un solo sentido.",
     "La energía circula una y otra vez; la materia se gasta.",
     "Los descomponedores destruyen la materia y la energía.",
     "Ninguna de las dos pasa entre los seres vivos."
    ],
    "hint": "Los átomos se reutilizan; la energía sigue llegando del Sol.",
    "explain": "La materia se reutiliza una y otra vez. La energía entra desde el Sol y sale como calor."
   }
  },
  {
   "id": "ms4q25",
   "code": "3.1.6-8.K",
   "prompt": "A fallen maple leaf loses 65% of its matter in a year. Where did most of that matter go?",
   "options": [
    "Decomposers released it into the air and soil.",
    "It simply vanished from the universe.",
    "It turned into sunlight that left the forest.",
    "A deer ate it."
   ],
   "answer": 0,
   "hint": "Matter is not destroyed.",
   "explain": "Decomposers used the leaf as food and released its matter into the air and soil, where plants can use it again.",
   "es": {
    "prompt": "Una hoja de arce caída pierde el 65 % de su materia en un año. ¿Adónde se fue la mayor parte de esa materia?",
    "options": [
     "Los descomponedores la liberaron al aire y al suelo.",
     "Simplemente desapareció del universo.",
     "Se convirtió en luz del sol que salió del bosque.",
     "Se la comió un venado."
    ],
    "hint": "La materia no se destruye.",
    "explain": "Los descomponedores usaron la hoja como alimento y liberaron su materia al aire y al suelo, donde las plantas pueden volver a usarla."
   }
  },
  {
   "id": "ms4q26",
   "code": "3.1.6-8.K",
   "prompt": "What would happen to a forest if there were NO decomposers?",
   "options": [
    "Dead leaves would pile up and nutrients would not be recycled.",
    "Trees would grow faster because the soil gets richer.",
    "Much more sunlight would reach the floor of the forest.",
    "Nothing would change; decomposers do not affect plants."
   ],
   "answer": 0,
   "hint": "Who recycles dead matter?",
   "explain": "Without decomposers, matter would stay locked in dead things, and plants would run out of nutrients.",
   "es": {
    "prompt": "¿Qué le pasaría a un bosque si NO hubiera descomponedores?",
    "options": [
     "Las hojas muertas se amontonarían y los nutrientes no se reciclarían.",
     "Los árboles crecerían más rápido porque el suelo sería más rico.",
     "Llegaría mucha más luz del sol al suelo del bosque.",
     "No cambiaría nada; los descomponedores no afectan a las plantas."
    ],
    "hint": "¿Quién recicla la materia muerta?",
    "explain": "Sin descomponedores, la materia se quedaría atrapada en las cosas muertas y las plantas se quedarían sin nutrientes."
   }
  },
  {
   "id": "ms4q27",
   "code": "3.1.6-8.K",
   "prompt": "In the food chain oak leaves → springtails → salamander → garter snake, which way does the energy flow?",
   "options": [
    "from the leaves toward the snake",
    "from the snake back to the oak leaves",
    "in a circle, back to the Sun",
    "it does not move at all"
   ],
   "answer": 0,
   "hint": "Follow the arrows.",
   "explain": "Energy flows from producers to consumers, in the direction of the arrows.",
   "es": {
    "prompt": "En la cadena alimentaria hojas de roble → colémbolos → salamandra → culebra rayada, ¿hacia dónde fluye la energía?",
    "options": [
     "de las hojas hacia la culebra",
     "de la culebra de regreso a las hojas de roble",
     "en un círculo, de vuelta al Sol",
     "no se mueve para nada"
    ],
    "hint": "Sigue las flechas.",
    "explain": "La energía fluye de los productores a los consumidores, en el sentido de las flechas."
   }
  },
  {
   "id": "ms4q28",
   "code": "3.1.6-8.K",
   "prompt": "Why does a pile of rotting leaves feel warm inside?",
   "options": [
    "Decomposers give off heat as they work.",
    "The leaves are on fire deep inside the pile.",
    "Sunlight shines all the way into the pile.",
    "The leaves are still making sugar from light."
   ],
   "answer": 0,
   "hint": "Energy is released at each step.",
   "explain": "As decomposers use the leaves for energy, some of that energy is released as heat.",
   "es": {
    "prompt": "¿Por qué un montón de hojas podridas se siente tibio por dentro?",
    "options": [
     "Los descomponedores liberan calor mientras trabajan.",
     "Las hojas se están quemando en el fondo del montón.",
     "La luz del sol llega hasta dentro del montón.",
     "Las hojas siguen fabricando azúcar con la luz."
    ],
    "hint": "En cada paso se libera energía.",
    "explain": "Cuando los descomponedores usan las hojas para obtener energía, una parte se libera como calor."
   }
  },
  {
   "id": "ms4q29",
   "code": "3.1.6-8.K",
   "prompt": "How does carbon from the AIR get into a forest food web?",
   "options": [
    "Plants take it in for photosynthesis.",
    "Animals breathe it in and store it in fat.",
    "Rain carries it down into the rocks.",
    "Decomposers make it out of nothing."
   ],
   "answer": 0,
   "hint": "Think about what leaves take in.",
   "explain": "Producers take in carbon dioxide and build it into sugar. Consumers get that carbon by eating.",
   "es": {
    "prompt": "¿Cómo entra en una red alimentaria del bosque el carbono del AIRE?",
    "options": [
     "Las plantas lo toman para la fotosíntesis.",
     "Los animales lo respiran y lo guardan en la grasa.",
     "La lluvia lo lleva hasta las rocas.",
     "Los descomponedores lo fabrican de la nada."
    ],
    "hint": "Piensa en lo que toman las hojas.",
    "explain": "Los productores toman dióxido de carbono y lo convierten en azúcar. Los consumidores obtienen ese carbono al comer."
   }
  },
  {
   "id": "ms4q30",
   "code": "3.1.6-8.K",
   "prompt": "Which list shows only LIVING parts of the forest floor?",
   "options": [
    "fungi, salamanders, moss, bacteria",
    "rocks, water, air, moss",
    "sunlight, soil minerals, fungi, rain",
    "air, rocks, sunlight, water"
   ],
   "answer": 0,
   "hint": "Leave out anything that was never alive.",
   "explain": "Fungi, salamanders, moss and bacteria are all living things.",
   "es": {
    "prompt": "¿Qué lista muestra solo partes VIVAS del suelo del bosque?",
    "options": [
     "hongos, salamandras, musgo, bacterias",
     "rocas, agua, aire, musgo",
     "luz del sol, minerales del suelo, hongos, lluvia",
     "aire, rocas, luz del sol, agua"
    ],
    "hint": "Deja fuera lo que nunca estuvo vivo.",
    "explain": "Los hongos, las salamandras, el musgo y las bacterias son seres vivos."
   }
  },
  {
   "id": "ms4q31",
   "code": "3.1.6-8.L",
   "prompt": "Which is a change to a PHYSICAL component of an ecosystem?",
   "options": [
    "a forest fire",
    "a new kind of beetle arriving",
    "more wolves",
    "a disease killing trees"
   ],
   "answer": 0,
   "hint": "Physical components are nonliving.",
   "explain": "Fire, floods, drought and temperature are physical (nonliving) components.",
   "es": {
    "prompt": "¿Cuál es un cambio en un componente FÍSICO de un ecosistema?",
    "options": [
     "un incendio forestal",
     "la llegada de un nuevo tipo de escarabajo",
     "más lobos",
     "una enfermedad que mata árboles"
    ],
    "hint": "Los componentes físicos no tienen vida.",
    "explain": "El fuego, las inundaciones, la sequía y la temperatura son componentes físicos (sin vida)."
   }
  },
  {
   "id": "ms4q32",
   "code": "3.1.6-8.L",
   "prompt": "Which is a change to a BIOLOGICAL component of an ecosystem?",
   "options": [
    "beetles moving into burned trees",
    "a long drought that dries out the soil",
    "a flood that covers the whole valley",
    "a heat wave in the summer"
   ],
   "answer": 0,
   "hint": "Biological components are living.",
   "explain": "Beetles are living things, so a change in their numbers is a biological change.",
   "es": {
    "prompt": "¿Cuál es un cambio en un componente BIOLÓGICO de un ecosistema?",
    "options": [
     "escarabajos que llegan a árboles quemados",
     "una sequía larga que deja seco el suelo",
     "una inundación que cubre todo el valle",
     "una ola de calor en el verano"
    ],
    "hint": "Los componentes biológicos tienen vida.",
    "explain": "Los escarabajos son seres vivos, así que un cambio en su número es un cambio biológico."
   }
  },
  {
   "id": "ms4q33",
   "code": "3.1.6-8.L",
   "prompt": "After the 1988 Yellowstone fires, black-backed woodpeckers became more common in burned areas. Which is the best evidence-based reason?",
   "options": [
    "Burned trees were full of beetle larvae.",
    "Woodpeckers are attracted to the smell of smoke.",
    "The fire created brand-new woodpeckers.",
    "Woodpeckers eat the ash left by fires."
   ],
   "answer": 0,
   "hint": "Follow the food.",
   "explain": "The fire killed trees, beetles moved into them, and woodpeckers followed the food. One change led to another.",
   "es": {
    "prompt": "Después de los incendios de Yellowstone de 1988, los pájaros carpinteros de lomo negro se hicieron más comunes en las zonas quemadas. ¿Cuál es la mejor razón basada en la evidencia?",
    "options": [
     "Los árboles quemados estaban llenos de larvas de escarabajo.",
     "A los pájaros carpinteros los atrae el olor del humo.",
     "El fuego creó pájaros carpinteros totalmente nuevos.",
     "Los pájaros carpinteros comen la ceniza que deja el fuego."
    ],
    "hint": "Sigue el alimento.",
    "explain": "El fuego mató árboles, los escarabajos llegaron a ellos y los pájaros carpinteros siguieron el alimento. Un cambio llevó a otro."
   }
  },
  {
   "id": "ms4q34",
   "code": "3.1.6-8.L",
   "prompt": "Red squirrels eat seeds from mature pine cones. Why did their numbers drop in burned areas?",
   "options": [
    "The fire destroyed their food source.",
    "They moved into the warm ash instead.",
    "They started hunting woodpeckers for food.",
    "Fire made more cones."
   ],
   "answer": 0,
   "hint": "What did the fire burn?",
   "explain": "The fire killed the mature trees whose cones fed the squirrels, so fewer squirrels could live there.",
   "es": {
    "prompt": "Las ardillas rojas comen semillas de las piñas de los pinos maduros. ¿Por qué bajó su número en las zonas quemadas?",
    "options": [
     "El fuego destruyó su fuente de alimento.",
     "En cambio, se mudaron a la ceniza tibia.",
     "Empezaron a cazar pájaros carpinteros para comer.",
     "El fuego produjo más piñas."
    ],
    "hint": "¿Qué quemó el fuego?",
    "explain": "El fuego mató los árboles maduros cuyas piñas alimentaban a las ardillas, así que pudieron vivir allí menos ardillas."
   }
  },
  {
   "id": "ms4q35",
   "code": "3.1.6-8.L",
   "prompt": "What makes an argument SCIENTIFIC?",
   "options": [
    "It is backed by evidence and reasoning.",
    "It is repeated loudly over and over.",
    "A famous person says that it is true.",
    "It uses big words but has no data at all."
   ],
   "answer": 0,
   "hint": "Claim, evidence, reasoning.",
   "explain": "A scientific argument makes a claim and supports it with evidence (data) and reasoning.",
   "es": {
    "prompt": "¿Qué hace que un argumento sea CIENTÍFICO?",
    "options": [
     "Está respaldado por evidencia y razonamiento.",
     "Se repite en voz alta una y otra vez.",
     "Una persona famosa dice que es cierto.",
     "Usa palabras difíciles pero no tiene ningún dato."
    ],
    "hint": "Afirmación, evidencia, razonamiento.",
    "explain": "Un argumento científico hace una afirmación y la apoya con evidencia (datos) y razonamiento."
   }
  },
  {
   "id": "ms4q36",
   "code": "3.1.6-8.L",
   "prompt": "Lodgepole pine cones open in the heat of a fire. How does this affect the pine population after a fire?",
   "options": [
    "Many seedlings sprout in the burned ground.",
    "No pines can ever grow in that spot again.",
    "The burned pine trees all turn into wildflowers.",
    "It has no effect on the pine population."
   ],
   "answer": 0,
   "hint": "Heat releases the seeds.",
   "explain": "The fire releases seeds onto open, sunny ground, so many seedlings grow: the population recovers.",
   "es": {
    "prompt": "Las piñas del pino contorta se abren con el calor de un incendio. ¿Cómo afecta esto a la población de pinos después del incendio?",
    "options": [
     "Brotan muchas plántulas en el suelo quemado.",
     "Nunca más pueden crecer pinos en ese lugar.",
     "Los pinos quemados se convierten en flores silvestres.",
     "No tiene ningún efecto en la población de pinos."
    ],
    "hint": "El calor suelta las semillas.",
    "explain": "El fuego suelta las semillas en suelo abierto y soleado, así que crecen muchas plántulas: la población se recupera."
   }
  },
  {
   "id": "ms4q37",
   "code": "3.1.6-8.L",
   "prompt": "A drought dries up a pond. What would you predict for the frog population?",
   "options": [
    "It would decrease.",
    "It would increase.",
    "It would not change.",
    "The frogs would turn into fish."
   ],
   "answer": 0,
   "hint": "Frogs need water to lay eggs.",
   "explain": "Losing the water (a physical component) means fewer places for frogs to breed, so the population would drop.",
   "es": {
    "prompt": "Una sequía seca un estanque. ¿Qué predices para la población de ranas?",
    "options": [
     "Disminuiría.",
     "Aumentaría.",
     "No cambiaría.",
     "Las ranas se convertirían en peces."
    ],
    "hint": "Las ranas necesitan agua para poner huevos.",
    "explain": "Perder el agua (un componente físico) significa menos lugares para que las ranas se reproduzcan, así que la población bajaría."
   }
  },
  {
   "id": "ms4q38",
   "code": "3.1.6-8.L",
   "prompt": "A new insect pest arrives and kills most of the ash trees in a forest. Which population would likely INCREASE?",
   "options": [
    "woodpeckers that eat insects in dying trees",
    "birds that can nest only in healthy ash trees",
    "insects that eat only fresh ash leaves",
    "young ash seedlings on the forest floor"
   ],
   "answer": 0,
   "hint": "Who benefits from more insects and dead wood?",
   "explain": "More insects in dying trees means more food for woodpeckers. A biological change helps some populations and hurts others.",
   "es": {
    "prompt": "Llega una nueva plaga de insectos y mata casi todos los fresnos de un bosque. ¿Qué población probablemente AUMENTARÍA?",
    "options": [
     "los pájaros carpinteros que comen insectos de árboles moribundos",
     "las aves que solo pueden anidar en los fresnos que están sanos",
     "los insectos que solo comen hojas frescas de fresno",
     "las plántulas jóvenes de fresno en el suelo del bosque"
    ],
    "hint": "¿Quién se beneficia de más insectos y madera muerta?",
    "explain": "Más insectos en los árboles moribundos significa más alimento para los pájaros carpinteros. Un cambio biológico ayuda a unas poblaciones y perjudica a otras."
   }
  },
  {
   "id": "ms4q39",
   "code": "3.1.6-8.L",
   "prompt": "Scientists counted pine seedlings in burned areas each year after a fire. What are these counts?",
   "options": [
    "empirical evidence",
    "an educated guess",
    "a personal opinion",
    "a prediction"
   ],
   "answer": 0,
   "hint": "They came from observation and measurement.",
   "explain": "Empirical evidence comes from observations and measurements, like counting seedlings.",
   "es": {
    "prompt": "Los científicos contaron las plántulas de pino en las zonas quemadas cada año después de un incendio. ¿Qué son estos conteos?",
    "options": [
     "evidencia empírica",
     "una suposición fundamentada",
     "una opinión personal",
     "una predicción"
    ],
    "hint": "Vienen de la observación y la medición.",
    "explain": "La evidencia empírica viene de observaciones y mediciones, como contar plántulas."
   }
  },
  {
   "id": "ms4q40",
   "code": "3.1.6-8.L",
   "prompt": "After a fire, which group of living things usually grows back FIRST?",
   "options": [
    "pioneer species like grasses",
    "giant old trees",
    "animals that live only in old forests",
    "nothing, ever"
   ],
   "answer": 0,
   "hint": "Fast-growing plants that like sun.",
   "explain": "Pioneer species like fireweed and grasses grow first. Over many years, succession brings back shrubs and trees.",
   "es": {
    "prompt": "Después de un incendio, ¿qué grupo de seres vivos suele volver a crecer PRIMERO?",
    "options": [
     "especies pioneras como los pastos",
     "los árboles viejos gigantes",
     "los animales que solo viven en bosques viejos",
     "nada, nunca"
    ],
    "hint": "Plantas de crecimiento rápido a las que les gusta el sol.",
    "explain": "Las especies pioneras como el epilobio y los pastos crecen primero. Con los años, la sucesión trae arbustos y árboles."
   }
  },
  {
   "id": "ms4q41",
   "code": "3.1.6-8.U",
   "prompt": "Which is an ECOSYSTEM SERVICE that a healthy river gives people?",
   "options": [
    "clean drinking water",
    "traffic jams on the bridge",
    "plastic trash on the banks",
    "noise"
   ],
   "answer": 0,
   "hint": "A benefit from nature.",
   "explain": "Clean water, fish, flood control and recreation are ecosystem services.",
   "es": {
    "prompt": "¿Cuál es un SERVICIO DE LOS ECOSISTEMAS que un río sano les da a las personas?",
    "options": [
     "agua potable limpia",
     "embotellamientos en el puente",
     "basura de plástico en las orillas",
     "ruido"
    ],
    "hint": "Un beneficio de la naturaleza.",
    "explain": "El agua limpia, los peces, el control de inundaciones y la recreación son servicios de los ecosistemas."
   }
  },
  {
   "id": "ms4q42",
   "code": "3.1.6-8.U",
   "prompt": "What does BIODIVERSITY mean?",
   "options": [
    "the variety of life in an area",
    "the number of rocks in a river",
    "how fast the water in a river flows",
    "the size of a dam"
   ],
   "answer": 0,
   "hint": "Bio = life.",
   "explain": "Biodiversity is the variety of species living in an area.",
   "es": {
    "prompt": "¿Qué significa BIODIVERSIDAD?",
    "options": [
     "la variedad de vida de un lugar",
     "el número de rocas de un río",
     "qué tan rápido corre el agua de un río",
     "el tamaño de una presa"
    ],
    "hint": "Bio = vida.",
    "explain": "La biodiversidad es la variedad de especies que viven en un lugar."
   }
  },
  {
   "id": "ms4q43",
   "code": "3.1.6-8.U",
   "prompt": "Why do engineers compare designs using CRITERIA?",
   "options": [
    "to see which design best meets the goals",
    "to make every design cost the same amount",
    "to avoid ever having to make a choice",
    "to pick whichever design looks prettiest"
   ],
   "answer": 0,
   "hint": "Criteria are the goals a design must meet.",
   "explain": "Criteria, like protecting wildlife, safety and cost, let engineers compare designs fairly.",
   "es": {
    "prompt": "¿Por qué los ingenieros comparan los diseños usando CRITERIOS?",
    "options": [
     "para ver qué diseño cumple mejor las metas",
     "para que todos los diseños cuesten lo mismo",
     "para no tener que elegir nunca",
     "para elegir el diseño que se ve más bonito"
    ],
    "hint": "Los criterios son las metas que debe cumplir un diseño.",
    "explain": "Los criterios, como proteger la fauna, la seguridad y el costo, permiten comparar los diseños de forma justa."
   }
  },
  {
   "id": "ms4q44",
   "code": "3.1.6-8.U",
   "prompt": "A riparian buffer is a strip of trees along a stream. Which ecosystem service does it provide?",
   "options": [
    "It traps mud and fertilizer from runoff.",
    "It makes the stream water warmer and muddier.",
    "It blocks fish from swimming up the stream.",
    "It removes all the insects living nearby."
   ],
   "answer": 0,
   "hint": "Roots hold soil and filter runoff.",
   "explain": "Buffer roots hold the bank and filter runoff, and the trees shade the water and give animals habitat.",
   "es": {
    "prompt": "Una franja ribereña es una franja de árboles junto a un arroyo. ¿Qué servicio de los ecosistemas da?",
    "options": [
     "Atrapa el lodo y el fertilizante de la escorrentía.",
     "Hace el agua del arroyo más caliente y más turbia.",
     "Impide que los peces naden arroyo arriba.",
     "Elimina todos los insectos que viven cerca."
    ],
    "hint": "Las raíces sostienen el suelo y filtran la escorrentía.",
    "explain": "Las raíces de la franja sostienen la orilla y filtran la escorrentía, y los árboles dan sombra al agua y hábitat a los animales."
   }
  },
  {
   "id": "ms4q45",
   "code": "3.1.6-8.U",
   "prompt": "A power company could add a fish lift to its hydroelectric dam, or remove the dam. What is one TRADE-OFF of removing it?",
   "options": [
    "The dam can no longer make electricity.",
    "Fish can no longer swim upstream to spawn.",
    "The river stops flowing completely.",
    "There is no trade-off at all."
   ],
   "answer": 0,
   "hint": "What does the dam give people now?",
   "explain": "Removing the dam is best for fish and the river, but people lose what the dam provided, like electricity. That is a trade-off.",
   "es": {
    "prompt": "Una compañía eléctrica podría agregar un elevador de peces a su presa hidroeléctrica, o quitar la presa. ¿Cuál es una COMPENSACIÓN de quitarla?",
    "options": [
     "La presa ya no puede producir electricidad.",
     "Los peces ya no pueden nadar río arriba para desovar.",
     "El río deja de correr por completo.",
     "No hay ninguna compensación."
    ],
    "hint": "¿Qué les da la presa a las personas ahora?",
    "explain": "Quitar la presa es lo mejor para los peces y el río, pero las personas pierden lo que daba la presa, como la electricidad. Esa es una compensación."
   },
   "tags": [
    "boss",
    "boss4"
   ]
  },
  {
   "id": "ms4q46",
   "code": "3.1.6-8.U",
   "prompt": "Which design keeps a forest habitat CONNECTED across a new highway?",
   "options": [
    "a wildlife overpass",
    "only a taller fence along the road",
    "more streetlights at night",
    "a wider road"
   ],
   "answer": 0,
   "hint": "Animals need a way across.",
   "explain": "An overpass lets animals cross safely, so populations on both sides stay connected.",
   "es": {
    "prompt": "¿Qué diseño mantiene CONECTADO el hábitat de un bosque a través de una carretera nueva?",
    "options": [
     "un paso elevado para animales",
     "solo una cerca más alta junto a la carretera",
     "más faroles por la noche",
     "una carretera más ancha"
    ],
    "hint": "Los animales necesitan una manera de cruzar.",
    "explain": "Un paso elevado deja que los animales crucen sin peligro, así que las poblaciones de los dos lados siguen conectadas."
   },
   "tags": [
    "boss",
    "boss4"
   ]
  },
  {
   "id": "ms4q47",
   "code": "3.1.6-8.U",
   "prompt": "A town must stop a stream bank from washing away. Which design ALSO protects biodiversity?",
   "options": [
    "planting a riparian buffer",
    "building a smooth, tall concrete wall",
    "removing all the plants from the bank",
    "paving the bank"
   ],
   "answer": 0,
   "hint": "Which one gives animals a home?",
   "explain": "Both a buffer and a wall can hold the bank, but the buffer also filters water and gives habitat. It meets more criteria.",
   "es": {
    "prompt": "Un pueblo debe evitar que se derrumbe la orilla de un arroyo. ¿Qué diseño TAMBIÉN protege la biodiversidad?",
    "options": [
     "plantar una franja ribereña",
     "construir un muro de concreto liso y alto",
     "quitar todas las plantas de la orilla",
     "pavimentar la orilla"
    ],
    "hint": "¿Cuál les da un hogar a los animales?",
    "explain": "Una franja y un muro pueden sostener la orilla, pero la franja también filtra el agua y da hábitat. Cumple más criterios."
   },
   "tags": [
    "boss",
    "boss4"
   ]
  },
  {
   "id": "ms4q48",
   "code": "3.1.6-8.U",
   "prompt": "Habitat fragmentation happens when...",
   "options": [
    "roads split a habitat into pieces",
    "a habitat grows larger over time",
    "animals share food with each other",
    "a river floods its banks in spring"
   ],
   "answer": 0,
   "hint": "Fragment = piece.",
   "explain": "Fragmentation splits habitat into small, separate pieces, which makes it hard for animals to find food and mates.",
   "es": {
    "prompt": "La fragmentación del hábitat ocurre cuando...",
    "options": [
     "las carreteras dividen un hábitat en pedazos",
     "un hábitat se hace más grande con el tiempo",
     "los animales comparten alimento entre ellos",
     "un río se desborda en la primavera"
    ],
    "hint": "Fragmento = pedazo.",
    "explain": "La fragmentación divide el hábitat en pedazos pequeños y separados, lo que hace difícil que los animales encuentren alimento y pareja."
   },
   "tags": [
    "boss",
    "boss4"
   ]
  },
  {
   "id": "ms4q49",
   "code": "3.1.6-8.U",
   "prompt": "Two designs protect a river. Design A costs less. Design B protects more species and cleans more water. What is the best way to choose?",
   "options": [
    "Weigh both designs against all the criteria.",
    "Always pick the cheapest one, no matter what.",
    "Always pick whichever one is newest.",
    "Flip a coin and go with the result."
   ],
   "answer": 0,
   "hint": "Look at every goal, not just one.",
   "explain": "Good decisions compare every design against all the criteria and weigh what each one gives up.",
   "es": {
    "prompt": "Dos diseños protegen un río. El diseño A cuesta menos. El diseño B protege más especies y limpia más el agua. ¿Cuál es la mejor manera de elegir?",
    "options": [
     "Comparar los dos diseños con todos los criterios.",
     "Elegir siempre el más barato, pase lo que pase.",
     "Elegir siempre el que sea más nuevo.",
     "Lanzar una moneda y seguir el resultado."
    ],
    "hint": "Mira todas las metas, no solo una.",
    "explain": "Las buenas decisiones comparan cada diseño con todos los criterios y pesan lo que cada uno sacrifica."
   },
   "tags": [
    "boss",
    "boss4"
   ]
  },
  {
   "id": "ms4q50",
   "code": "3.1.6-8.U",
   "prompt": "Why do people work to MAINTAIN biodiversity?",
   "options": [
    "Many species keep ecosystems healthy and useful to people.",
    "Fewer species make an ecosystem stronger and healthier.",
    "Biodiversity has no effect at all on people’s lives.",
    "Only one species really matters in an ecosystem."
   ],
   "answer": 0,
   "hint": "Think about everything nature does for us.",
   "explain": "Ecosystems with many species are healthier and keep giving people clean water, food, pollination and more.",
   "es": {
    "prompt": "¿Por qué las personas trabajan para MANTENER la biodiversidad?",
    "options": [
     "Muchas especies mantienen los ecosistemas sanos y útiles para las personas.",
     "Tener menos especies hace que un ecosistema sea más fuerte y más sano.",
     "La biodiversidad no tiene ningún efecto en la vida de las personas.",
     "En un ecosistema, realmente solo importa una sola especie."
    ],
    "hint": "Piensa en todo lo que hace la naturaleza por nosotros.",
    "explain": "Los ecosistemas con muchas especies son más sanos y siguen dando a las personas agua limpia, alimento, polinización y más."
   },
   "tags": [
    "boss",
    "boss4"
   ]
  }
 ],
 "pairs": [
  {
   "name": "Predator or prey?",
   "explain": "The predator hunts; the prey is hunted and eaten.",
   "members": [
    {
     "label": "Predator",
     "level": "4-1",
     "ids": [
      "ms4q03"
     ]
    },
    {
     "label": "Prey",
     "level": "4-1",
     "ids": [
      "ms4q09"
     ]
    }
   ],
   "es": {
    "name": "¿Depredador o presa?",
    "explain": "El depredador caza; a la presa la cazan y se la comen."
   }
  },
  {
   "name": "Limiting factor or carrying capacity?",
   "explain": "A limiting factor is a scarce resource. Carrying capacity is the biggest population the resources can support.",
   "members": [
    {
     "label": "Limiting factor",
     "level": "4-2",
     "ids": [
      "ms4q13"
     ]
    },
    {
     "label": "Carrying capacity",
     "level": "4-2",
     "ids": [
      "ms4q14"
     ]
    }
   ],
   "es": {
    "name": "¿Factor limitante o capacidad de carga?",
    "explain": "Un factor limitante es un recurso escaso. La capacidad de carga es la población más grande que pueden mantener los recursos."
   }
  },
  {
   "name": "Physical or biological change?",
   "explain": "Physical components are nonliving, like fire and water. Biological components are living, like beetles and trees.",
   "members": [
    {
     "label": "Physical",
     "level": "4-4",
     "ids": [
      "ms4q31"
     ]
    },
    {
     "label": "Biological",
     "level": "4-4",
     "ids": [
      "ms4q32"
     ]
    }
   ],
   "es": {
    "name": "¿Cambio físico o biológico?",
    "explain": "Los componentes físicos no tienen vida, como el fuego y el agua. Los componentes biológicos tienen vida, como los escarabajos y los árboles."
   }
  }
 ],
 "become": [
  {
   "id": "b4-shrimp",
   "code": "3.1.6-8.J",
   "you": "a cleaner shrimp on the reef",
   "short": "🦐",
   "color": "#ff5a5a",
   "goal": "You are hungry. Get food the way a cleaner shrimp does!",
   "doors": [
    {
     "kind": "lipid",
     "label": "Wave at a big fish and eat the parasites off its skin",
     "ok": true,
     "es": {
      "label": "Saluda a un pez grande y cómete los parásitos de su piel"
     }
    },
    {
     "kind": "protein",
     "label": "Attack the fish and eat it",
     "ok": false,
     "es": {
      "label": "Ataca al pez y cómetelo",
      "why": "Los camarones limpiadores son diminutos. No cazan peces grandes; los limpian."
     },
     "why": "Cleaner shrimp are tiny. They do not hunt big fish; they clean them."
    },
    {
     "kind": "pump",
     "label": "Chew holes in the coral",
     "ok": false,
     "es": {
      "label": "Haz agujeros en el coral",
      "why": "Los camarones limpiadores no comen coral. Comen parásitos y piel muerta de los peces."
     },
     "why": "Cleaner shrimp do not eat coral. They eat parasites and dead skin from fish."
    }
   ],
   "explain": "The shrimp gets food and the fish gets rid of parasites: mutualism. Cleaning stations like this are found on reefs all over the world, a pattern you can predict.",
   "es": {
    "you": "un camarón limpiador del arrecife",
    "goal": "Tienes hambre. ¡Consigue alimento como lo hace un camarón limpiador!",
    "explain": "El camarón obtiene alimento y el pez se libra de sus parásitos: mutualismo. Hay estaciones de limpieza como esta en arrecifes de todo el mundo, un patrón que puedes predecir."
   }
  },
  {
   "id": "b4-carbon",
   "code": "3.1.6-8.K",
   "you": "a carbon atom in a fallen oak leaf",
   "short": "C",
   "color": "#c08a5a",
   "goal": "Get back into the air, so a tree can use you again!",
   "doors": [
    {
     "kind": "lipid",
     "label": "Get digested by fungi and released as carbon dioxide",
     "ok": true,
     "es": {
      "label": "Deja que los hongos te digieran y te liberen como dióxido de carbono"
     }
    },
    {
     "kind": "protein",
     "label": "Turn into sunlight",
     "ok": false,
     "es": {
      "label": "Conviértete en luz del sol",
      "why": "La materia no se convierte en luz del sol. Los átomos se reorganizan en moléculas nuevas."
     },
     "why": "Matter does not turn into sunlight. Atoms are rearranged into new molecules."
    },
    {
     "kind": "pump",
     "label": "Stay in the leaf forever",
     "ok": false,
     "es": {
      "label": "Quédate en la hoja para siempre",
      "why": "Los descomponedores descomponen todas las hojas muertas. Sus átomos vuelven al aire y al suelo."
     },
     "why": "Decomposers break every dead leaf down. Its atoms return to the air and soil."
    }
   ],
   "explain": "Fungi use the leaf as food and release its carbon as carbon dioxide. A tree can take that carbon dioxide in by photosynthesis: matter cycles between living and nonliving parts.",
   "es": {
    "you": "un átomo de carbono en una hoja de roble caída",
    "goal": "¡Vuelve al aire, para que un árbol pueda usarte otra vez!",
    "explain": "Los hongos usan la hoja como alimento y liberan su carbono como dióxido de carbono. Un árbol puede tomar ese dióxido de carbono por fotosíntesis: la materia se mueve en un ciclo entre las partes vivas y sin vida."
   }
  }
 ],
 "data": [
  {
   "id": "d4-acorns",
   "code": "3.1.6-8.I",
   "title": "Acorns on the forest floor each fall",
   "xlabel": "Year",
   "ylabel": "Acorns per square meter",
   "categories": [
    "2019",
    "2020",
    "2021",
    "2022"
   ],
   "values": [
    5,
    60,
    8,
    30
   ],
   "questions": [
    {
     "prompt": "Which year was a MAST YEAR, with a huge acorn crop?",
     "answer": 1,
     "hint": "Find the tallest bar.",
     "explain": "2020. The oaks made a huge crop, so food was plentiful that winter.",
     "es": {
      "prompt": "¿Qué año fue un AÑO DE ABUNDANCIA, con una cosecha enorme de bellotas?",
      "hint": "Busca la barra más alta.",
      "explain": "2020. Los robles dieron una cosecha enorme, así que hubo mucha comida ese invierno."
     }
    },
    {
     "prompt": "In which year was food for acorn-eaters the MOST limited?",
     "answer": 0,
     "hint": "Find the shortest bar.",
     "explain": "2019 had the fewest acorns. Food was a limiting factor that year.",
     "es": {
      "prompt": "¿En qué año fue más LIMITADO el alimento para los que comen bellotas?",
      "hint": "Busca la barra más baja.",
      "explain": "En 2019 hubo menos bellotas. Ese año el alimento fue un factor limitante."
     }
    }
   ],
   "es": {
    "title": "Bellotas en el suelo del bosque cada otoño",
    "xlabel": "Año",
    "ylabel": "Bellotas por metro cuadrado",
    "categories": [
     "2019",
     "2020",
     "2021",
     "2022"
    ]
   }
  },
  {
   "id": "d4-mice",
   "code": "3.1.6-8.I",
   "title": "White-footed mice counted the NEXT summer",
   "xlabel": "Summer of",
   "ylabel": "Mice per hectare",
   "categories": [
    "2020",
    "2021",
    "2022",
    "2023"
   ],
   "values": [
    10,
    55,
    12,
    30
   ],
   "questions": [
    {
     "prompt": "Which summer had the MOST mice?",
     "answer": 1,
     "hint": "Find the tallest bar.",
     "explain": "The summer of 2021, right after the 2020 mast year. Plenty of acorns let many more mice survive and have young.",
     "es": {
      "prompt": "¿Qué verano tuvo MÁS ratones?",
      "hint": "Busca la barra más alta.",
      "explain": "El verano de 2021, justo después del año de abundancia de 2020. Las muchas bellotas permitieron que sobrevivieran y tuvieran crías muchos más ratones."
     }
    },
    {
     "prompt": "The mouse population crashed after the poor acorn crop of 2021. Which summer shows the crash?",
     "answer": 2,
     "hint": "Look for a low bar right after the tallest one.",
     "explain": "The summer of 2022. With few acorns, many mice did not survive the winter: less food, smaller population.",
     "es": {
      "prompt": "La población de ratones se desplomó después de la mala cosecha de bellotas de 2021. ¿Qué verano lo muestra?",
      "hint": "Busca una barra baja justo después de la más alta.",
      "explain": "El verano de 2022. Con pocas bellotas, muchos ratones no sobrevivieron al invierno: menos alimento, población más pequeña."
     }
    }
   ],
   "es": {
    "title": "Ratones de patas blancas contados el verano SIGUIENTE",
    "xlabel": "Verano de",
    "ylabel": "Ratones por hectárea",
    "categories": [
     "2020",
     "2021",
     "2022",
     "2023"
    ]
   }
  },
  {
   "id": "d4-litter",
   "code": "3.1.6-8.K",
   "title": "How much of the fallen maple leaves is left",
   "xlabel": "Time on the forest floor",
   "ylabel": "Leaf matter left (%)",
   "unit": "%",
   "categories": [
    "Start",
    "3 months",
    "6 months",
    "9 months",
    "12 months"
   ],
   "values": [
    100,
    78,
    60,
    46,
    35
   ],
   "questions": [
    {
     "prompt": "About when was HALF of the leaf matter gone?",
     "answer": 3,
     "hint": "Look for the bar near 50%.",
     "explain": "After about 9 months, only 46% was left. Decomposers had broken down about half of it.",
     "es": {
      "prompt": "¿Más o menos cuándo había desaparecido la MITAD de la materia de las hojas?",
      "hint": "Busca la barra cerca de 50 %.",
      "explain": "Después de unos 9 meses solo quedaba el 46 %. Los descomponedores habían descompuesto cerca de la mitad."
     }
    },
    {
     "prompt": "Which bar shows the LEAST leaf matter left?",
     "answer": 4,
     "hint": "Find the shortest bar.",
     "explain": "After 12 months only 35% is left. The rest did not vanish: decomposers released it as carbon dioxide, water and nutrients for the soil.",
     "es": {
      "prompt": "¿Qué barra muestra que queda MENOS materia de las hojas?",
      "hint": "Busca la barra más baja.",
      "explain": "Después de 12 meses solo queda el 35 %. El resto no desapareció: los descomponedores lo liberaron como dióxido de carbono, agua y nutrientes para el suelo."
     }
    }
   ],
   "es": {
    "title": "Cuánto queda de las hojas de arce caídas",
    "xlabel": "Tiempo en el suelo del bosque",
    "ylabel": "Materia de las hojas que queda (%)",
    "categories": [
     "Al inicio",
     "3 meses",
     "6 meses",
     "9 meses",
     "12 meses"
    ]
   }
  },
  {
   "id": "d4-fire",
   "code": "3.1.6-8.L",
   "title": "Change in populations in burned areas, a few years after the fire",
   "xlabel": "Population",
   "ylabel": "Change compared with before the fire (%)",
   "categories": [
    "Fireweed",
    "Woodpeckers",
    "Pine seedlings",
    "Red squirrels",
    "Mature pines"
   ],
   "values": [
    80,
    60,
    150,
    -70,
    -90
   ],
   "questions": [
    {
     "prompt": "Which population INCREASED the most after the fire?",
     "answer": 2,
     "hint": "Find the tallest bar above zero.",
     "explain": "Pine seedlings, up 150%. The heat opened the cones and the open ground gave the seeds sunlight.",
     "es": {
      "prompt": "¿Qué población AUMENTÓ más después del incendio?",
      "hint": "Busca la barra más alta por encima de cero.",
      "explain": "Las plántulas de pino, con 150 % más. El calor abrió las piñas y el suelo abierto les dio luz a las semillas."
     }
    },
    {
     "prompt": "Which ANIMAL population decreased, because the fire burned its food?",
     "answer": 3,
     "hint": "Look below zero for an animal.",
     "explain": "Red squirrels dropped 70%. They eat seeds from mature cones, and most mature trees burned.",
     "es": {
      "prompt": "¿Qué población de ANIMALES disminuyó porque el fuego quemó su alimento?",
      "hint": "Busca un animal por debajo de cero.",
      "explain": "Las ardillas rojas bajaron un 70 %. Comen semillas de las piñas maduras, y la mayoría de los árboles maduros se quemó."
     }
    }
   ],
   "es": {
    "title": "Cambio de las poblaciones en zonas quemadas, unos años después del incendio",
    "xlabel": "Población",
    "ylabel": "Cambio comparado con antes del incendio (%)",
    "categories": [
     "Epilobio",
     "Pájaros carpinteros",
     "Plántulas de pino",
     "Ardillas rojas",
     "Pinos maduros"
    ]
   }
  },
  {
   "id": "d4-road",
   "code": "3.1.6-8.U",
   "title": "Large animals hit by cars on one highway, each year",
   "xlabel": "Design",
   "ylabel": "Animals hit per year",
   "categories": [
    "No fence",
    "Fence only",
    "Fence and overpass"
   ],
   "values": [
    42,
    9,
    5
   ],
   "questions": [
    {
     "prompt": "Which design had the FEWEST animals hit by cars?",
     "answer": 2,
     "hint": "Find the shortest bar.",
     "explain": "The fence and overpass together: 5 per year. It keeps animals off the road AND lets them cross.",
     "es": {
      "prompt": "¿Con qué diseño hubo MENOS animales atropellados?",
      "hint": "Busca la barra más baja.",
      "explain": "La cerca con el paso elevado: 5 por año. Mantiene a los animales fuera de la carretera Y les permite cruzar."
     }
    },
    {
     "prompt": "Compared with no fence, which change made the BIGGEST drop in animals hit?",
     "answer": 1,
     "hint": "Compare each bar with the first one. Which step down is biggest?",
     "explain": "Adding the fence dropped it from 42 to 9. The overpass lowered it a little more, but its biggest benefit is a criterion this chart does not show: keeping the habitat connected.",
     "es": {
      "prompt": "Comparado con no tener cerca, ¿qué cambio bajó MÁS los atropellos?",
      "hint": "Compara cada barra con la primera. ¿Qué bajada es la mayor?",
      "explain": "Poner la cerca lo bajó de 42 a 9. El paso elevado lo bajó un poco más, pero su mayor beneficio es un criterio que esta gráfica no muestra: mantener conectado el hábitat."
     }
    }
   ],
   "es": {
    "title": "Animales grandes atropellados en una carretera, cada año",
    "xlabel": "Diseño",
    "ylabel": "Animales atropellados por año",
    "categories": [
     "Sin cerca",
     "Solo cerca",
     "Cerca y paso elevado"
    ]
   }
  }
 ],
 "mazes": [
  {
   "id": "maze4-web",
   "code": "3.1.6-8.K",
   "title": "Follow the energy through the forest floor: go through the doorway where it goes next",
   "start": "Sunlight",
   "steps": [
    {
     "label": "Oak leaves",
     "hint": "Which living thing captures the light energy?",
     "why": "The oak is a producer: its leaves store light energy in sugar.",
     "es": {
      "label": "Hojas de roble",
      "hint": "¿Qué ser vivo captura la energía luminosa?",
      "why": "El roble es un productor: sus hojas guardan la energía luminosa en azúcar."
     }
    },
    {
     "label": "Springtails",
     "hint": "Fallen leaves are food for which tiny animals?",
     "why": "Springtails eat decaying leaves and fungi.",
     "es": {
      "label": "Colémbolos",
      "hint": "¿De qué animalitos son alimento las hojas caídas?",
      "why": "Los colémbolos comen hojas en descomposición y hongos."
     }
    },
    {
     "label": "Red-backed salamander",
     "hint": "Who eats the springtails?",
     "why": "Red-backed salamanders hunt tiny animals in the leaf litter.",
     "es": {
      "label": "Salamandra de lomo rojo",
      "hint": "¿Quién se come a los colémbolos?",
      "why": "Las salamandras de lomo rojo cazan animalitos entre las hojas caídas."
     }
    },
    {
     "label": "Garter snake",
     "hint": "Who eats the salamander?",
     "why": "Garter snakes eat salamanders. Energy keeps flowing up the food web.",
     "es": {
      "label": "Culebra rayada",
      "hint": "¿Quién se come a la salamandra?",
      "why": "Las culebras rayadas comen salamandras. La energía sigue subiendo por la red alimentaria."
     }
    }
   ],
   "extra": [
    "A rock",
    "Rainwater",
    "Sand"
   ],
   "explain": "Energy flows one way: from the Sun to producers to consumers, with some lost as heat at each step. Matter cycles back through decomposers.",
   "es": {
    "title": "Sigue la energía por el suelo del bosque: cruza la puerta hacia donde va después",
    "start": "Luz del sol",
    "extra": [
     "Una roca",
     "Agua de lluvia",
     "Arena"
    ],
    "explain": "La energía fluye en un solo sentido: del Sol a los productores y a los consumidores, y en cada paso una parte se pierde como calor. La materia vuelve en un ciclo por los descomponedores."
   }
  }
 ],
 "sequences": [
  {
   "id": "seq4-matter",
   "code": "3.1.6-8.K",
   "title": "The trip of matter through the forest floor",
   "steps": [
    "An oak leaf makes sugar from carbon dioxide",
    "The leaf falls to the forest floor",
    "Fungi and bacteria break the leaf down",
    "Carbon dioxide and nutrients return to the air and soil",
    "A tree takes them in again to grow"
   ],
   "hint": "Start with the living leaf on the tree.",
   "explain": "Matter cycles: the same atoms move from the air and soil into living things and back again.",
   "es": {
    "title": "El viaje de la materia por el suelo del bosque",
    "steps": [
     "Una hoja de roble fabrica azúcar con dióxido de carbono",
     "La hoja cae al suelo del bosque",
     "Los hongos y las bacterias descomponen la hoja",
     "El dióxido de carbono y los nutrientes vuelven al aire y al suelo",
     "Un árbol los vuelve a tomar para crecer"
    ],
    "hint": "Empieza con la hoja viva en el árbol.",
    "explain": "La materia se mueve en un ciclo: los mismos átomos pasan del aire y el suelo a los seres vivos, y regresan."
   }
  },
  {
   "id": "seq4-fire",
   "code": "3.1.6-8.L",
   "title": "How a lodgepole pine forest comes back after a fire",
   "steps": [
    "Lightning starts a fire in an old forest",
    "Heat opens the sealed pine cones",
    "Seeds fall on sunny, open ground",
    "Wildflowers and pine seedlings grow",
    "Over many years, a new forest grows"
   ],
   "hint": "Start with what caused the fire.",
   "explain": "A change to a physical component (fire) changed which populations could grow. Step by step, the ecosystem recovers.",
   "es": {
    "title": "Cómo vuelve un bosque de pino contorta después de un incendio",
    "steps": [
     "Un rayo inicia un incendio en un bosque viejo",
     "El calor abre las piñas selladas",
     "Las semillas caen en suelo abierto y soleado",
     "Crecen flores silvestres y plántulas de pino",
     "Con los años crece un bosque nuevo"
    ],
    "hint": "Empieza con lo que causó el incendio.",
    "explain": "Un cambio en un componente físico (el fuego) cambió qué poblaciones podían crecer. Paso a paso, el ecosistema se recupera."
   }
  }
 ],
 "wordbanks": [
  {
   "id": "wb4-interact",
   "code": "3.1.6-8.J",
   "words": [
    "competition",
    "predation",
    "mutualism",
    "predator",
    "prey",
    "pattern"
   ],
   "sentences": [
    {
     "text": "When two corals grow toward the same light, that is ___.",
     "answer": "competition",
     "code": "3.1.6-8.J",
     "explain": "They compete for a limited resource.",
     "es": {
      "text": "Cuando dos corales crecen hacia la misma luz, eso es ___.",
      "answer": "competencia",
      "explain": "Compiten por un recurso limitado."
     }
    },
    {
     "text": "A shark hunting a fish is an example of ___.",
     "answer": "predation",
     "code": "3.1.6-8.J",
     "explain": "One animal eats another.",
     "es": {
      "text": "Un tiburón que caza un pez es un ejemplo de ___.",
      "answer": "depredación",
      "explain": "Un animal se come a otro."
     }
    },
    {
     "text": "The clownfish and the anemone both benefit: ___.",
     "answer": "mutualism",
     "code": "3.1.6-8.J",
     "explain": "Both partners benefit.",
     "es": {
      "text": "El pez payaso y la anémona se benefician: ___.",
      "answer": "mutualismo",
      "explain": "Los dos se benefician."
     }
    },
    {
     "text": "The shark is the ___.",
     "answer": "predator",
     "code": "3.1.6-8.J",
     "explain": "The predator does the hunting.",
     "es": {
      "text": "El tiburón es el ___.",
      "answer": "depredador",
      "explain": "El depredador es el que caza."
     }
    },
    {
     "text": "The fish it catches is the ___.",
     "answer": "prey",
     "code": "3.1.6-8.J",
     "explain": "The prey is the animal that is eaten.",
     "es": {
      "text": "El pez que atrapa es la ___.",
      "answer": "presa",
      "explain": "La presa es el animal que se comen."
     }
    },
    {
     "text": "These interactions happen in every ecosystem, so they are a ___ you can predict.",
     "answer": "pattern",
     "code": "3.1.6-8.J",
     "explain": "Patterns repeat, so they can be predicted.",
     "es": {
      "text": "Estas interacciones ocurren en todos los ecosistemas, así que son un ___ que puedes predecir.",
      "answer": "patrón",
      "explain": "Los patrones se repiten, así que se pueden predecir."
     }
    }
   ],
   "es": {
    "words": [
     "competencia",
     "depredación",
     "mutualismo",
     "depredador",
     "presa",
     "patrón"
    ]
   }
  },
  {
   "id": "wb4-design",
   "code": "3.1.6-8.U",
   "words": [
    "criteria",
    "trade-off",
    "biodiversity",
    "ecosystem services",
    "habitat"
   ],
   "sentences": [
    {
     "text": "Engineers judge each design against a list of ___.",
     "answer": "criteria",
     "code": "3.1.6-8.U",
     "explain": "Criteria are what a good design must do.",
     "es": {
      "text": "Los ingenieros juzgan cada diseño con una lista de ___.",
      "answer": "criterios",
      "explain": "Los criterios son lo que debe lograr un buen diseño."
     }
    },
    {
     "text": "Giving up electricity to help fish is a ___.",
     "answer": "trade-off",
     "code": "3.1.6-8.U",
     "explain": "A trade-off gives up one benefit to get another.",
     "es": {
      "text": "Renunciar a la electricidad para ayudar a los peces es una ___.",
      "answer": "compensación",
      "explain": "Una compensación renuncia a un beneficio para obtener otro."
     }
    },
    {
     "text": "Many kinds of fish, birds and plants mean high ___.",
     "answer": "biodiversity",
     "code": "3.1.6-8.U",
     "explain": "Biodiversity is the variety of life.",
     "es": {
      "text": "Muchos tipos de peces, aves y plantas significan alta ___.",
      "answer": "biodiversidad",
      "explain": "La biodiversidad es la variedad de la vida."
     }
    },
    {
     "text": "Clean water and flood control are ___ that a healthy river gives people.",
     "answer": "ecosystem services",
     "code": "3.1.6-8.U",
     "explain": "Ecosystem services are benefits from nature.",
     "es": {
      "text": "El agua limpia y el control de inundaciones son ___ que un río sano les da a las personas.",
      "answer": "servicios de los ecosistemas",
      "explain": "Los servicios de los ecosistemas son beneficios de la naturaleza."
     }
    },
    {
     "text": "An overpass keeps the animals’ ___ connected.",
     "answer": "habitat",
     "code": "3.1.6-8.U",
     "explain": "A habitat is where an organism lives.",
     "es": {
      "text": "Un paso elevado mantiene conectado el ___ de los animales.",
      "answer": "hábitat",
      "explain": "Un hábitat es el lugar donde vive un organismo."
     }
    }
   ],
   "es": {
    "words": [
     "criterios",
     "compensación",
     "biodiversidad",
     "servicios de los ecosistemas",
     "hábitat"
    ]
   }
  }
 ],
 "balances": [
  {
   "id": "bal4-deer",
   "kind": "elevator",
   "code": "3.1.6-8.I",
   "title": "Keep the deer herd within what the forest can feed. The platform rises and falls with the deer population.",
   "what": "Deer per square mile",
   "unit": "",
   "start": 16,
   "min": 0,
   "max": 50,
   "band": [
    10,
    22
   ],
   "danger": [
    4,
    36
   ],
   "hold": 10,
   "drift": 1.2,
   "event": {
    "every": 6,
    "delta": -8,
    "msg": "A long, snowy winter! Food runs short and fewer fawns survive."
   },
   "controls": [
    {
     "label": "Fewer hunting licenses",
     "delta": 7
    },
    {
     "label": "More hunting licenses",
     "delta": -6
    }
   ],
   "tooHigh": "Too many deer! They are eating almost every young tree, and the forest cannot regrow.",
   "tooLow": "Very few deer are left. Predators like coyotes and bobcats have less to eat.",
   "explain": "The forest can feed only so many deer: its carrying capacity. When food runs short, fewer deer survive. Wildlife managers watch the food supply and adjust hunting to keep the herd and the forest healthy.",
   "es": {
    "title": "Mantén la manada de venados dentro de lo que el bosque puede alimentar. La plataforma sube y baja con la población de venados.",
    "what": "Venados por milla cuadrada",
    "event": {
     "every": 6,
     "delta": -8,
     "msg": "¡Un invierno largo y con mucha nieve! La comida escasea y sobreviven menos cervatillos."
    },
    "controls": [
     {
      "label": "Menos permisos de caza",
      "delta": 7
     },
     {
      "label": "Más permisos de caza",
      "delta": -6
     }
    ],
    "tooHigh": "¡Demasiados venados! Se comen casi todos los árboles jóvenes y el bosque no puede volver a crecer.",
    "tooLow": "Quedan muy pocos venados. Los depredadores como los coyotes y los linces tienen menos que comer.",
    "explain": "El bosque solo puede alimentar a cierto número de venados: su capacidad de carga. Cuando la comida escasea, sobreviven menos venados. Los encargados de la fauna vigilan el alimento y ajustan la caza para mantener sana la manada y el bosque."
   }
  }
 ],
 "lablocks": [
  {
   "id": "lock4",
   "title": "Lab Lock",
   "es": {
    "title": "Candado del laboratorio"
   },
   "clues": [
    {
     "prompt": "Clue 1: How many of these are MUTUALISM? Clownfish and anemone, shark and fish, bee and flower, two corals competing.",
     "answer": 2,
     "code": "3.1.6-8.J",
     "hint": "Mutualism: both benefit.",
     "explain": "Clownfish and anemone, and bee and flower: 2.",
     "es": {
      "prompt": "Pista 1: ¿Cuántos de estos son MUTUALISMO? Pez payaso y anémona, tiburón y pez, abeja y flor, dos corales que compiten.",
      "hint": "Mutualismo: los dos se benefician.",
      "explain": "Pez payaso y anémona, y abeja y flor: 2."
     }
    },
    {
     "prompt": "Clue 2: How many of these are DECOMPOSERS? Turkey tail fungus, soil bacteria, moss, oak seedling, mold.",
     "answer": 3,
     "code": "3.1.6-8.K",
     "hint": "Decomposers break down dead matter.",
     "explain": "Turkey tail fungus, soil bacteria and mold: 3.",
     "es": {
      "prompt": "Pista 2: ¿Cuántos de estos son DESCOMPONEDORES? Hongo cola de pavo, bacterias del suelo, musgo, plántula de roble, moho.",
      "hint": "Los descomponedores descomponen la materia muerta.",
      "explain": "Hongo cola de pavo, bacterias del suelo y moho: 3."
     }
    },
    {
     "prompt": "Clue 3: Look at the fire data. How many populations DECREASED?",
     "answer": 2,
     "code": "3.1.6-8.L",
     "hint": "Count the bars below zero.",
     "explain": "Red squirrels and mature pines: 2.",
     "es": {
      "prompt": "Pista 3: Mira los datos del incendio. ¿Cuántas poblaciones DISMINUYERON?",
      "hint": "Cuenta las barras por debajo de cero.",
      "explain": "Las ardillas rojas y los pinos maduros: 2.",
      "figure": {
       "type": "bars",
       "categories": [
        "Epilobio",
        "Carpinteros",
        "Plántulas",
        "Ardillas",
        "Pinos maduros"
       ],
       "values": [
        80,
        60,
        150,
        -70,
        -90
       ],
       "ylabel": "Cambio (%)"
      }
     },
     "figure": {
      "type": "bars",
      "categories": [
       "Fireweed",
       "Woodpeckers",
       "Seedlings",
       "Squirrels",
       "Mature pines"
      ],
      "values": [
       80,
       60,
       150,
       -70,
       -90
      ],
      "ylabel": "Change (%)"
     }
    },
    {
     "prompt": "Clue 4: How many of these are ECOSYSTEM SERVICES? Clean water, flood control, a parking lot, pollination.",
     "answer": 3,
     "code": "3.1.6-8.U",
     "hint": "Ecosystem services are benefits people get from nature.",
     "explain": "Clean water, flood control and pollination: 3.",
     "es": {
      "prompt": "Pista 4: ¿Cuántos de estos son SERVICIOS DE LOS ECOSISTEMAS? Agua limpia, control de inundaciones, un estacionamiento, polinización.",
      "hint": "Los servicios de los ecosistemas son beneficios que las personas obtienen de la naturaleza.",
      "explain": "Agua limpia, control de inundaciones y polinización: 3."
     }
    }
   ]
  }
 ],
 "scans": [
  {
   "id": "s4r-reef",
   "name": "Great Barrier Reef",
   "look": "stack",
   "color": "#ff9f6e",
   "word": "Ecosystem",
   "def": "All the living things in an area and the nonliving things around them, working together.",
   "note": "The Great Barrier Reef, off Australia, is the largest coral reef system on Earth. It is an ECOSYSTEM: corals, fish, algae, water, sunlight and sand all interact.",
   "es": {
    "name": "Gran Barrera de Coral",
    "word": "Ecosistema",
    "def": "Todos los seres vivos de un lugar y las cosas sin vida que los rodean, funcionando juntos.",
    "note": "La Gran Barrera de Coral, frente a Australia, es el sistema de arrecifes de coral más grande de la Tierra. Es un ECOSISTEMA: corales, peces, algas, agua, luz del sol y arena interactúan."
   }
  },
  {
   "id": "s4r-clown",
   "name": "Clownfish in an anemone",
   "look": "critter",
   "color": "#ff8a3a",
   "word": "Mutualism",
   "def": "An interaction in which both living things benefit.",
   "note": "The anemone’s stinging tentacles protect the clownfish, and the clownfish chases away fish that eat anemones. Both benefit: MUTUALISM.",
   "es": {
    "name": "Pez payaso en una anémona",
    "word": "Mutualismo",
    "def": "Una interacción en la que los dos seres vivos se benefician.",
    "note": "Los tentáculos urticantes de la anémona protegen al pez payaso, y el pez payaso ahuyenta a los peces que comen anémonas. Los dos se benefician: MUTUALISMO."
   }
  },
  {
   "id": "s4r-shrimp",
   "name": "Cleaner shrimp",
   "look": "critter",
   "color": "#ff5a5a",
   "word": "Cleaning station",
   "def": "A spot where small animals clean bigger ones, eating their parasites.",
   "note": "Big fish line up at a CLEANING STATION. The shrimp eats parasites off the fish: the shrimp gets food and the fish gets clean. Another kind of mutualism.",
   "es": {
    "name": "Camarón limpiador",
    "word": "Estación de limpieza",
    "def": "Un lugar donde animales pequeños limpian a otros más grandes y se comen sus parásitos.",
    "note": "Los peces grandes hacen fila en una ESTACIÓN DE LIMPIEZA. El camarón se come los parásitos del pez: el camarón obtiene alimento y el pez queda limpio. Otro tipo de mutualismo."
   }
  },
  {
   "id": "s4r-polyp",
   "name": "Coral polyp",
   "look": "cell",
   "color": "#ffb0c0",
   "word": "Coral",
   "def": "A tiny animal that builds a stony skeleton. Millions of them build a reef.",
   "note": "Tiny algae live inside each CORAL polyp. The algae make sugar by photosynthesis and share it; the coral gives them a safe, sunny home.",
   "es": {
    "name": "Pólipo de coral",
    "word": "Coral",
    "def": "Un animal diminuto que construye un esqueleto de piedra. Millones de ellos forman un arrecife.",
    "note": "Dentro de cada pólipo de CORAL viven algas diminutas. Las algas fabrican azúcar por fotosíntesis y lo comparten; el coral les da un hogar seguro y soleado."
   }
  },
  {
   "id": "s4r-compete",
   "name": "Two corals side by side",
   "look": "stack",
   "color": "#c59cff",
   "word": "Competition",
   "def": "An interaction in which living things try to use the same limited resource, like food, space or light.",
   "note": "These corals are growing toward the same patch of sunlight. Some corals even sting their neighbors. That is COMPETITION for space and light.",
   "es": {
    "name": "Dos corales lado a lado",
    "word": "Competencia",
    "def": "Una interacción en la que los seres vivos tratan de usar el mismo recurso limitado, como alimento, espacio o luz.",
    "note": "Estos corales crecen hacia la misma zona de luz. Algunos corales hasta pican a sus vecinos. Eso es COMPETENCIA por el espacio y la luz."
   }
  },
  {
   "id": "s4r-shark",
   "name": "Reef shark",
   "look": "critter",
   "color": "#8a9aa8",
   "word": "Predation",
   "def": "An interaction in which one animal (the predator) hunts and eats another (the prey).",
   "note": "A whitetip reef shark hunts small fish at night. This is PREDATION. Predators help keep prey populations from growing too large.",
   "es": {
    "name": "Tiburón de arrecife",
    "word": "Depredación",
    "def": "Una interacción en la que un animal (el depredador) caza y se come a otro (la presa).",
    "note": "Un tiburón de arrecife de punta blanca caza peces pequeños de noche. Esto es DEPREDACIÓN. Los depredadores ayudan a que las poblaciones de presas no crezcan demasiado."
   }
  },
  {
   "id": "s4r-parrot",
   "name": "Parrotfish",
   "look": "critter",
   "color": "#5fd0c5",
   "word": "Prey",
   "def": "An animal that is hunted and eaten by a predator.",
   "note": "Parrotfish scrape algae off the coral with beak-like teeth. They are also PREY for sharks. One animal can be a consumer and prey at the same time.",
   "es": {
    "name": "Pez loro",
    "word": "Presa",
    "def": "Un animal al que caza y se come un depredador.",
    "note": "Los peces loro raspan las algas del coral con dientes en forma de pico. También son PRESAS de los tiburones. Un animal puede ser consumidor y presa al mismo tiempo."
   }
  },
  {
   "id": "s4r-cots",
   "name": "Crown-of-thorns starfish",
   "look": "critter",
   "color": "#a04a8a",
   "word": "Predator",
   "def": "An animal that hunts and eats other animals.",
   "note": "This spiny starfish is a PREDATOR of coral: it eats the living polyps. When too many appear, large parts of the reef can die.",
   "es": {
    "name": "Estrella corona de espinas",
    "word": "Depredador",
    "def": "Un animal que caza y se come a otros animales.",
    "note": "Esta estrella espinosa es un DEPREDADOR del coral: se come los pólipos vivos. Cuando aparecen demasiadas, grandes partes del arrecife pueden morir."
   }
  },
  {
   "id": "s4r-pattern",
   "name": "Map of Earth’s ecosystems",
   "look": "stack",
   "color": "#ffd166",
   "word": "Pattern",
   "def": "Something that happens again and again in the same way, so you can predict it.",
   "note": "Competition, predation and mutualism happen in EVERY ecosystem: reefs, forests, prairies and deserts. Because it is a PATTERN, you can predict what you will find.",
   "es": {
    "name": "Mapa de los ecosistemas de la Tierra",
    "word": "Patrón",
    "def": "Algo que ocurre una y otra vez de la misma manera, así que puedes predecirlo.",
    "note": "La competencia, la depredación y el mutualismo ocurren en TODOS los ecosistemas: arrecifes, bosques, praderas y desiertos. Como es un PATRÓN, puedes predecir lo que encontrarás."
   }
  },
  {
   "id": "s4f-forest",
   "name": "Allegheny National Forest",
   "look": "grass",
   "color": "#4a8a3a",
   "word": "Population",
   "def": "All the members of one species living in the same area.",
   "note": "Pennsylvania’s only national forest. Scientists count each POPULATION here: all the white-tailed deer, all the white-footed mice, all the oak trees.",
   "es": {
    "name": "Bosque Nacional Allegheny",
    "word": "Población",
    "def": "Todos los miembros de una especie que viven en el mismo lugar.",
    "note": "El único bosque nacional de Pensilvania. Los científicos cuentan cada POBLACIÓN aquí: todos los venados de cola blanca, todos los ratones de patas blancas, todos los robles."
   }
  },
  {
   "id": "s4f-acorns",
   "name": "Acorns",
   "look": "eggs",
   "color": "#a0784a",
   "word": "Resource",
   "def": "Something living things need from their ecosystem, like food, water, shelter or space.",
   "note": "Acorns are an important food RESOURCE for deer, bears, squirrels, turkeys and mice. How many acorns fall changes every year.",
   "es": {
    "name": "Bellotas",
    "word": "Recurso",
    "def": "Algo que los seres vivos necesitan de su ecosistema, como alimento, agua, refugio o espacio.",
    "note": "Las bellotas son un RECURSO alimenticio importante para venados, osos, ardillas, pavos y ratones. La cantidad de bellotas que caen cambia cada año."
   }
  },
  {
   "id": "s4f-mast",
   "name": "Oak tree in a mast year",
   "look": "sprout",
   "color": "#6a8a3a",
   "word": "Mast year",
   "def": "A year when trees like oaks make a huge crop of nuts all at once.",
   "note": "Oaks do not make the same number of acorns every year. In a MAST YEAR they make a huge crop, and animals that eat acorns have plenty of food.",
   "es": {
    "name": "Roble en un año de abundancia",
    "word": "Año de abundancia",
    "def": "Un año en que los árboles como los robles producen una cosecha enorme de frutos al mismo tiempo.",
    "note": "Los robles no producen la misma cantidad de bellotas cada año. En un AÑO DE ABUNDANCIA producen una cosecha enorme, y los animales que comen bellotas tienen comida de sobra."
   }
  },
  {
   "id": "s4f-mouse",
   "name": "White-footed mouse",
   "look": "critter",
   "color": "#c08a5a",
   "word": "Population growth",
   "def": "An increase in the number of individuals in a population.",
   "note": "After a big acorn year, more mice survive the winter and have babies. The mouse population grows, a lot: POPULATION GROWTH.",
   "es": {
    "name": "Ratón de patas blancas",
    "word": "Crecimiento de la población",
    "def": "Un aumento en el número de individuos de una población.",
    "note": "Después de un año de muchas bellotas, más ratones sobreviven al invierno y tienen crías. La población de ratones crece mucho: CRECIMIENTO DE LA POBLACIÓN."
   }
  },
  {
   "id": "s4f-deer",
   "name": "White-tailed deer",
   "look": "critter",
   "color": "#a07040",
   "word": "Carrying capacity",
   "def": "The largest population an ecosystem can support with the resources it has.",
   "note": "When there are more deer than the forest can feed, they eat almost every young tree. The forest has a CARRYING CAPACITY for deer.",
   "es": {
    "name": "Venado de cola blanca",
    "word": "Capacidad de carga",
    "def": "La población más grande que un ecosistema puede mantener con los recursos que tiene.",
    "note": "Cuando hay más venados de los que el bosque puede alimentar, se comen casi todos los árboles jóvenes. El bosque tiene una CAPACIDAD DE CARGA para los venados."
   }
  },
  {
   "id": "s4f-limit",
   "name": "Frozen stream",
   "look": "ice",
   "color": "#bfe9ff",
   "word": "Limiting factor",
   "def": "A resource in short supply that keeps a population from growing.",
   "note": "In a long, snowy winter, food is hard to find. Food is a LIMITING FACTOR: when it runs short, fewer animals survive.",
   "es": {
    "name": "Arroyo congelado",
    "word": "Factor limitante",
    "def": "Un recurso escaso que impide que una población crezca.",
    "note": "En un invierno largo y con nieve, cuesta encontrar comida. La comida es un FACTOR LIMITANTE: cuando escasea, sobreviven menos animales."
   }
  },
  {
   "id": "s4f-bear",
   "name": "Black bear",
   "look": "critter",
   "color": "#2a2a2a",
   "word": "Omnivore",
   "def": "An animal that eats both plants and animals.",
   "note": "Black bears are OMNIVORES. In fall they eat lots of acorns and berries to store fat for the winter. In a poor acorn year, they must travel farther to find food.",
   "es": {
    "name": "Oso negro",
    "word": "Omnívoro",
    "def": "Un animal que come plantas y animales.",
    "note": "Los osos negros son OMNÍVOROS. En otoño comen muchas bellotas y bayas para guardar grasa para el invierno. En un año de pocas bellotas, deben ir más lejos a buscar comida."
   }
  },
  {
   "id": "s4f-squirrel",
   "name": "Gray squirrel",
   "look": "critter",
   "color": "#8a8a8a",
   "word": "Shelter",
   "def": "A safe place to live, rest or raise young, such as a tree hole or a nest.",
   "note": "Squirrels need more than food. Tree holes and leaf nests give them SHELTER from cold and predators. Old trees with holes are a resource too.",
   "es": {
    "name": "Ardilla gris",
    "word": "Refugio",
    "def": "Un lugar seguro para vivir, descansar o criar, como un hueco en un árbol o un nido.",
    "note": "Las ardillas necesitan más que comida. Los huecos de los árboles y los nidos de hojas les dan REFUGIO del frío y de los depredadores. Los árboles viejos con huecos también son un recurso."
   }
  },
  {
   "id": "s4f-seedlings",
   "name": "Fenced plot of seedlings",
   "look": "sprout",
   "color": "#7ac06a",
   "word": "Overbrowsing",
   "def": "When too many plant-eaters eat young plants faster than they can grow back.",
   "note": "Inside this deer fence, young trees grow thick. Outside it, deer have eaten nearly all of them. That is OVERBROWSING.",
   "es": {
    "name": "Parcela cercada con plántulas",
    "word": "Ramoneo excesivo",
    "def": "Cuando demasiados herbívoros comen las plantas jóvenes más rápido de lo que pueden volver a crecer.",
    "note": "Dentro de esta cerca para venados, los árboles jóvenes crecen tupidos. Afuera, los venados se han comido casi todos. Eso es RAMONEO EXCESIVO."
   }
  },
  {
   "id": "s4f-stream",
   "name": "Cold, clear stream",
   "look": "drop",
   "color": "#7fd4ff",
   "word": "Water",
   "def": "A resource every living thing needs.",
   "note": "Deer, bears and birds all drink from forest streams. In a dry summer, when streams shrink, animals crowd around the water that is left.",
   "es": {
    "name": "Arroyo frío y claro",
    "word": "Agua",
    "def": "Un recurso que todos los seres vivos necesitan.",
    "note": "Los venados, los osos y las aves beben de los arroyos del bosque. En un verano seco, cuando los arroyos se achican, los animales se amontonan en el agua que queda."
   }
  },
  {
   "id": "s4l-log",
   "name": "Fallen oak log",
   "look": "rod",
   "color": "#7a5a3a",
   "word": "Decomposer",
   "def": "A living thing, like a fungus or bacterium, that breaks down dead matter and returns nutrients to the soil.",
   "note": "This log has been rotting for years. DECOMPOSERS are slowly breaking it down and returning its matter to the soil and the air.",
   "es": {
    "name": "Tronco de roble caído",
    "word": "Descomponedor",
    "def": "Un ser vivo, como un hongo o una bacteria, que descompone la materia muerta y devuelve los nutrientes al suelo.",
    "note": "Este tronco lleva años pudriéndose. Los DESCOMPONEDORES lo están rompiendo poco a poco y devuelven su materia al suelo y al aire."
   }
  },
  {
   "id": "s4l-turkeytail",
   "name": "Turkey tail fungus",
   "look": "mushroom",
   "color": "#c08a5a",
   "word": "Fungi",
   "def": "Living things like mushrooms and molds that get food by breaking down other things.",
   "note": "Turkey tail FUNGI grow in fan-shaped rings on dead wood. Their tiny threads reach inside the log and digest it.",
   "es": {
    "name": "Hongo cola de pavo",
    "word": "Hongos",
    "def": "Seres vivos como las setas y los mohos que obtienen alimento descomponiendo otras cosas.",
    "note": "Los HONGOS cola de pavo crecen en anillos con forma de abanico sobre la madera muerta. Sus hilos diminutos entran en el tronco y lo digieren."
   }
  },
  {
   "id": "s4l-worm",
   "name": "Earthworm",
   "look": "rod",
   "color": "#d88a8a",
   "word": "Soil",
   "def": "A mix of broken rock, water, air and decayed matter where plants grow.",
   "note": "Earthworms eat dead leaves and leave behind rich castings. They mix decayed matter into the SOIL, where roots can use its nutrients.",
   "es": {
    "name": "Lombriz de tierra",
    "word": "Suelo",
    "def": "Una mezcla de roca triturada, agua, aire y materia descompuesta donde crecen las plantas.",
    "note": "Las lombrices comen hojas muertas y dejan excrementos muy ricos. Mezclan la materia descompuesta con el SUELO, donde las raíces pueden usar sus nutrientes."
   }
  },
  {
   "id": "s4l-millipede",
   "name": "Millipede",
   "look": "rod",
   "color": "#5a3a2a",
   "word": "Food web",
   "def": "A model of all the feeding connections in an ecosystem.",
   "note": "Millipedes eat rotting leaves; salamanders eat millipedes; owls eat salamanders. All the connections together make a FOOD WEB.",
   "es": {
    "name": "Milpiés",
    "word": "Red alimentaria",
    "def": "Un modelo de todas las relaciones de alimentación de un ecosistema.",
    "note": "Los milpiés comen hojas podridas; las salamandras comen milpiés; los búhos comen salamandras. Todas las conexiones juntas forman una RED ALIMENTARIA."
   }
  },
  {
   "id": "s4l-salamander",
   "name": "Red-backed salamander",
   "look": "frog",
   "color": "#c0503a",
   "word": "Living part",
   "def": "Something in an ecosystem that is alive or was once alive.",
   "note": "These salamanders hide under logs and breathe through their skin. Salamanders, millipedes and fungi are LIVING PARTS of the forest floor.",
   "es": {
    "name": "Salamandra de lomo rojo",
    "word": "Parte viva",
    "def": "Algo de un ecosistema que está vivo o que estuvo vivo.",
    "note": "Estas salamandras se esconden bajo los troncos y respiran por la piel. Las salamandras, los milpiés y los hongos son PARTES VIVAS del suelo del bosque."
   }
  },
  {
   "id": "s4l-rain",
   "name": "Raindrops on moss",
   "look": "drop",
   "color": "#9fe0ff",
   "word": "Nonliving part",
   "def": "Something in an ecosystem that is not alive, like water, air, sunlight, rock or soil minerals.",
   "note": "Water, air, sunlight and minerals are NONLIVING PARTS of the ecosystem. Living things depend on them, and matter moves back and forth between them.",
   "es": {
    "name": "Gotas de lluvia sobre el musgo",
    "word": "Parte sin vida",
    "def": "Algo de un ecosistema que no está vivo, como el agua, el aire, la luz del sol, las rocas o los minerales del suelo.",
    "note": "El agua, el aire, la luz del sol y los minerales son PARTES SIN VIDA del ecosistema. Los seres vivos dependen de ellas, y la materia pasa de un lado a otro entre ellas."
   }
  },
  {
   "id": "s4l-moss",
   "name": "Moss on the log",
   "look": "grass",
   "color": "#5fbf5a",
   "word": "Producer",
   "def": "A living thing that makes its own food, using energy from sunlight.",
   "note": "Moss grows on the log in the dim light. Producers like moss and trees bring the Sun’s energy into the food web.",
   "es": {
    "name": "Musgo sobre el tronco",
    "word": "Productor",
    "def": "Un ser vivo que fabrica su propio alimento con la energía de la luz del sol.",
    "note": "El musgo crece sobre el tronco con poca luz. Los productores, como el musgo y los árboles, traen la energía del Sol a la red alimentaria."
   }
  },
  {
   "id": "s4l-ghost",
   "name": "Ghost pipe",
   "look": "lily",
   "color": "#f4f0e8",
   "word": "Nutrients",
   "def": "Matter that living things need to grow, like nitrogen and phosphorus.",
   "note": "Ghost pipe is a white plant with no chlorophyll. Fungi trade NUTRIENTS for sugar with tree roots, and ghost pipe takes sugar from those fungi without giving anything back.",
   "es": {
    "name": "Pipa fantasma",
    "word": "Nutrientes",
    "def": "Materia que los seres vivos necesitan para crecer, como el nitrógeno y el fósforo.",
    "note": "La pipa fantasma es una planta blanca sin clorofila. Los hongos intercambian NUTRIENTES por azúcar con las raíces de los árboles, y la pipa fantasma toma azúcar de esos hongos sin dar nada a cambio."
   }
  },
  {
   "id": "s4l-heat",
   "name": "Warm compost heap",
   "look": "sun",
   "color": "#ff9f6e",
   "word": "Energy flow",
   "def": "The one-way path of energy through an ecosystem, from the Sun to producers to consumers and decomposers.",
   "note": "A pile of rotting leaves feels warm inside. At every step of the food web, some energy is released as heat. Matter cycles, but ENERGY FLOWS one way.",
   "es": {
    "name": "Montón de composta tibio",
    "word": "Flujo de energía",
    "def": "El camino de un solo sentido de la energía por un ecosistema: del Sol a los productores, a los consumidores y a los descomponedores.",
    "note": "Un montón de hojas podridas se siente tibio por dentro. En cada paso de la red alimentaria, una parte de la energía se libera como calor. La materia se mueve en un ciclo, pero la ENERGÍA FLUYE en un solo sentido."
   }
  },
  {
   "id": "s4b-burn",
   "name": "Burned lodgepole pines",
   "look": "rod",
   "color": "#3a3030",
   "word": "Physical component",
   "def": "A nonliving part of an ecosystem, like water, soil, temperature or fire.",
   "note": "In the summer of 1988, fires burned about a third of Yellowstone National Park. Fire is a change to a PHYSICAL COMPONENT of the ecosystem.",
   "es": {
    "name": "Pinos contorta quemados",
    "word": "Componente físico",
    "def": "Una parte sin vida de un ecosistema, como el agua, el suelo, la temperatura o el fuego.",
    "note": "En el verano de 1988, los incendios quemaron cerca de un tercio del Parque Nacional Yellowstone. El fuego es un cambio en un COMPONENTE FÍSICO del ecosistema."
   }
  },
  {
   "id": "s4b-cone",
   "name": "Lodgepole pine cone",
   "look": "eggs",
   "color": "#8a6a3a",
   "word": "Adaptation",
   "def": "A trait that helps a living thing survive in its environment.",
   "note": "Many lodgepole pine cones stay sealed with resin until a fire’s heat opens them. Then they drop their seeds on the open ground. That is an ADAPTATION to fire.",
   "es": {
    "name": "Piña de pino contorta",
    "word": "Adaptación",
    "def": "Un rasgo que ayuda a un ser vivo a sobrevivir en su ambiente.",
    "note": "Muchas piñas del pino contorta se quedan selladas con resina hasta que el calor de un incendio las abre. Entonces sueltan sus semillas en el suelo abierto. Es una ADAPTACIÓN al fuego."
   }
  },
  {
   "id": "s4b-seedling",
   "name": "Pine seedlings",
   "look": "sprout",
   "color": "#7ac06a",
   "word": "Evidence",
   "def": "Facts and data that support or argue against an idea.",
   "note": "A few years after the fires, scientists counted thousands of pine seedlings in some burned areas. Counts like these are EVIDENCE of how populations changed.",
   "es": {
    "name": "Plántulas de pino",
    "word": "Evidencia",
    "def": "Hechos y datos que apoyan o contradicen una idea.",
    "note": "Unos años después de los incendios, los científicos contaron miles de plántulas de pino en algunas zonas quemadas. Conteos como estos son EVIDENCIA de cómo cambiaron las poblaciones."
   }
  },
  {
   "id": "s4b-fireweed",
   "name": "Fireweed",
   "look": "lily",
   "color": "#e06ab0",
   "word": "Pioneer species",
   "def": "One of the first species to grow in an area after a disturbance.",
   "note": "Bright pink fireweed is a PIONEER SPECIES. It springs up quickly in sunny, burned ground and makes food for bees and elk.",
   "es": {
    "name": "Epilobio",
    "word": "Especie pionera",
    "def": "Una de las primeras especies que crecen en un lugar después de una perturbación.",
    "note": "El epilobio de color rosa intenso es una ESPECIE PIONERA. Brota rápido en el suelo quemado y soleado, y da alimento a abejas y uapitíes."
   }
  },
  {
   "id": "s4b-beetle",
   "name": "Wood-boring beetle larvae",
   "look": "rod",
   "color": "#e8d8b0",
   "word": "Biological component",
   "def": "A living part of an ecosystem, like plants, animals, fungi or bacteria.",
   "note": "Wood-boring beetles lay eggs in fire-killed trees. A rise in beetles is a change to a BIOLOGICAL COMPONENT, and it affects the animals that eat them.",
   "es": {
    "name": "Larvas de escarabajo barrenador",
    "word": "Componente biológico",
    "def": "Una parte viva de un ecosistema, como las plantas, los animales, los hongos o las bacterias.",
    "note": "Los escarabajos barrenadores ponen huevos en los árboles que mató el fuego. Un aumento de escarabajos es un cambio en un COMPONENTE BIOLÓGICO, y afecta a los animales que se los comen."
   }
  },
  {
   "id": "s4b-squirrel",
   "name": "Red squirrel",
   "look": "critter",
   "color": "#c0603a",
   "word": "Population decline",
   "def": "A decrease in the number of individuals in a population.",
   "note": "Red squirrels eat seeds from mature pine cones. Where the old forest burned, their food was gone, and their numbers dropped: a POPULATION DECLINE.",
   "es": {
    "name": "Ardilla roja",
    "word": "Disminución de la población",
    "def": "Una baja en el número de individuos de una población.",
    "note": "Las ardillas rojas comen semillas de las piñas de los pinos maduros. Donde se quemó el bosque viejo, su alimento desapareció y su número bajó: una DISMINUCIÓN DE LA POBLACIÓN."
   }
  },
  {
   "id": "s4b-elk",
   "name": "Elk grazing",
   "look": "critter",
   "color": "#a07040",
   "word": "Disturbance",
   "def": "An event, like a fire, flood or storm, that quickly changes an ecosystem.",
   "note": "A fire is a DISTURBANCE. It hurt some populations and helped others: elk found fresh grass and young plants in the open, sunny burns.",
   "es": {
    "name": "Uapitíes pastando",
    "word": "Perturbación",
    "def": "Un suceso, como un incendio, una inundación o una tormenta, que cambia rápidamente un ecosistema.",
    "note": "Un incendio es una PERTURBACIÓN. Perjudicó a algunas poblaciones y ayudó a otras: los uapitíes encontraron pasto fresco y plantas jóvenes en las zonas quemadas, abiertas y soleadas."
   }
  },
  {
   "id": "s4b-ash",
   "name": "Ash and charcoal",
   "look": "rock",
   "color": "#4a4a4a",
   "word": "Succession",
   "def": "The slow, step-by-step change in which species live in an area after a disturbance.",
   "note": "Ash returns minerals to the soil. Wildflowers come first, then shrubs and young pines, and decades later a new forest: SUCCESSION.",
   "es": {
    "name": "Ceniza y carbón",
    "word": "Sucesión",
    "def": "El cambio lento, paso a paso, de las especies que viven en un lugar después de una perturbación.",
    "note": "La ceniza devuelve minerales al suelo. Primero llegan las flores silvestres, luego los arbustos y los pinos jóvenes, y décadas después un bosque nuevo: SUCESIÓN."
   }
  },
  {
   "id": "s4b-argument",
   "name": "Field notebook",
   "look": "stack",
   "color": "#ffd166",
   "word": "Argument",
   "def": "A claim supported by evidence and reasoning.",
   "note": "A scientist’s ARGUMENT: “The fire helped the woodpeckers.” Evidence: “We counted more woodpeckers in burned areas.” Reasoning: “Burned trees held more beetles to eat.”",
   "es": {
    "name": "Cuaderno de campo",
    "word": "Argumento",
    "def": "Una afirmación apoyada por evidencia y razonamiento.",
    "note": "El ARGUMENTO de una científica: “El fuego ayudó a los pájaros carpinteros”. Evidencia: “Contamos más pájaros carpinteros en las zonas quemadas”. Razonamiento: “Los árboles quemados tenían más escarabajos para comer”."
   }
  },
  {
   "id": "s4v-river",
   "name": "Susquehanna River",
   "look": "drop",
   "color": "#3f8fa8",
   "word": "Ecosystem services",
   "def": "The benefits people get from healthy ecosystems, like clean water, food, flood control and pollination.",
   "note": "The Susquehanna is the longest river on the East Coast of the United States. It gives people drinking water, fish, recreation and more: ECOSYSTEM SERVICES.",
   "es": {
    "name": "Río Susquehanna",
    "word": "Servicios de los ecosistemas",
    "def": "Los beneficios que las personas obtienen de los ecosistemas sanos, como agua limpia, alimento, control de inundaciones y polinización.",
    "note": "El Susquehanna es el río más largo de la costa este de Estados Unidos. Les da a las personas agua potable, peces, recreación y más: SERVICIOS DE LOS ECOSISTEMAS."
   }
  },
  {
   "id": "s4v-shad",
   "name": "American shad",
   "look": "critter",
   "color": "#c0c8d0",
   "word": "Biodiversity",
   "def": "The variety of living things in an area.",
   "note": "American shad swim from the ocean up the river to lay eggs. Dams block their way. Protecting fish like shad keeps the river’s BIODIVERSITY high.",
   "es": {
    "name": "Sábalo americano",
    "word": "Biodiversidad",
    "def": "La variedad de seres vivos de un lugar.",
    "note": "Los sábalos americanos nadan desde el océano río arriba para poner huevos. Las presas les bloquean el paso. Proteger peces como el sábalo mantiene alta la BIODIVERSIDAD del río."
   }
  },
  {
   "id": "s4v-lift",
   "name": "Fish lift at a dam",
   "look": "stack",
   "color": "#9fe0ff",
   "word": "Design solution",
   "def": "A plan or invention made to solve a problem.",
   "note": "Holtwood Dam on the Susquehanna has a fish lift: an elevator that carries migrating fish over the dam. It is one DESIGN SOLUTION for fish passage.",
   "es": {
    "name": "Elevador de peces en una presa",
    "word": "Solución de diseño",
    "def": "Un plan o invento hecho para resolver un problema.",
    "note": "La presa Holtwood, en el Susquehanna, tiene un elevador de peces: un ascensor que lleva a los peces migratorios por encima de la presa. Es una SOLUCIÓN DE DISEÑO para el paso de los peces."
   }
  },
  {
   "id": "s4v-removal",
   "name": "Old mill dam being removed",
   "look": "rock",
   "color": "#8a8f96",
   "word": "Dam removal",
   "def": "Taking out an old dam so a river can flow freely again.",
   "note": "Pennsylvania has removed more old dams than any other state. Most were small mill dams no longer in use. DAM REMOVAL lets fish swim upstream and lets the river carry sand and gravel naturally.",
   "es": {
    "name": "Presa vieja de molino que se retira",
    "word": "Retiro de presas",
    "def": "Quitar una presa vieja para que un río vuelva a correr libre.",
    "note": "Pensilvania ha retirado más presas viejas que cualquier otro estado. La mayoría eran presas pequeñas de molinos que ya no se usaban. El RETIRO DE PRESAS deja que los peces naden río arriba y que el río lleve arena y grava de forma natural."
   }
  },
  {
   "id": "s4v-criteria",
   "name": "Planning table",
   "look": "stack",
   "color": "#ffd166",
   "word": "Criteria",
   "def": "The things a design must do well to be a good solution.",
   "note": "Engineers compare designs using CRITERIA: Does it protect wildlife? Does it keep people safe? How much does it cost? How long will it last?",
   "es": {
    "name": "Mesa de planificación",
    "word": "Criterios",
    "def": "Las cosas que un diseño debe hacer bien para ser una buena solución.",
    "note": "Los ingenieros comparan diseños usando CRITERIOS: ¿Protege a los animales? ¿Mantiene seguras a las personas? ¿Cuánto cuesta? ¿Cuánto durará?"
   }
  },
  {
   "id": "s4v-tradeoff",
   "name": "Two blueprints",
   "look": "stack",
   "color": "#c59cff",
   "word": "Trade-off",
   "def": "Giving up some of one thing to get more of another when choosing between designs.",
   "note": "A dam makes electricity, but it blocks fish. Removing it helps fish, but the electricity is lost. Every choice has a TRADE-OFF.",
   "es": {
    "name": "Dos planos",
    "word": "Compensación",
    "def": "Renunciar a algo de una cosa para obtener más de otra al elegir entre diseños.",
    "note": "Una presa produce electricidad, pero bloquea a los peces. Quitarla ayuda a los peces, pero se pierde la electricidad. Cada decisión tiene una COMPENSACIÓN."
   }
  },
  {
   "id": "s4v-crossing",
   "name": "Wildlife overpass",
   "look": "grass",
   "color": "#6aaa4a",
   "word": "Wildlife crossing",
   "def": "A bridge or tunnel that lets animals cross a road safely.",
   "note": "In Banff National Park, Canada, bears, elk and wolves use grassy bridges over the highway. A WILDLIFE CROSSING keeps both sides of the habitat connected.",
   "es": {
    "name": "Paso elevado para animales",
    "word": "Paso de fauna",
    "def": "Un puente o túnel que deja que los animales crucen una carretera sin peligro.",
    "note": "En el Parque Nacional Banff, en Canadá, osos, uapitíes y lobos usan puentes con pasto sobre la carretera. Un PASO DE FAUNA mantiene conectados los dos lados del hábitat."
   }
  },
  {
   "id": "s4v-split",
   "name": "Highway through the woods",
   "look": "rock",
   "color": "#5a5a5a",
   "word": "Habitat fragmentation",
   "def": "When roads, buildings or farms split a habitat into smaller, separate pieces.",
   "note": "A busy highway cuts this forest in two. HABITAT FRAGMENTATION makes it hard for animals to find food, mates and new homes.",
   "es": {
    "name": "Carretera en el bosque",
    "word": "Fragmentación del hábitat",
    "def": "Cuando las carreteras, los edificios o las granjas dividen un hábitat en pedazos más pequeños y separados.",
    "note": "Una carretera muy transitada parte este bosque en dos. La FRAGMENTACIÓN DEL HÁBITAT hace difícil que los animales encuentren comida, pareja y nuevos hogares."
   }
  },
  {
   "id": "s4v-buffer",
   "name": "Trees along the riverbank",
   "look": "sprout",
   "color": "#4f8a4a",
   "word": "Riparian buffer",
   "def": "A strip of trees and plants along a stream that protects the water.",
   "note": "Roots of a RIPARIAN BUFFER hold the bank in place and trap mud and fertilizer before they reach the water. The trees shade the river and give animals a home.",
   "es": {
    "name": "Árboles a la orilla del río",
    "word": "Franja ribereña",
    "def": "Una franja de árboles y plantas junto a un arroyo que protege el agua.",
    "note": "Las raíces de una FRANJA RIBEREÑA sostienen la orilla y atrapan el lodo y el fertilizante antes de que lleguen al agua. Los árboles dan sombra al río y hogar a los animales."
   }
  },
  {
   "id": "s4v-silt",
   "name": "Muddy runoff",
   "look": "drop",
   "color": "#a08a5a",
   "word": "Sediment",
   "def": "Bits of soil, sand and mud carried by water.",
   "note": "After a storm, SEDIMENT washes off bare fields into the river. It clouds the water, blocks light for underwater plants and smothers fish eggs.",
   "es": {
    "name": "Escorrentía con lodo",
    "word": "Sedimento",
    "def": "Pedacitos de tierra, arena y lodo que arrastra el agua.",
    "note": "Después de una tormenta, el SEDIMENTO baja de los campos sin plantas hasta el río. Enturbia el agua, tapa la luz para las plantas acuáticas y cubre los huevos de los peces."
   }
  }
 ],
 "vocab": [
  {
   "term": "Ecosystem",
   "def": "All the living things in an area and the nonliving things around them, working together.",
   "es": {
    "term": "Ecosistema",
    "def": "Todos los seres vivos de un lugar y las cosas sin vida que los rodean, funcionando juntos."
   }
  },
  {
   "term": "Mutualism",
   "def": "An interaction in which both living things benefit.",
   "es": {
    "term": "Mutualismo",
    "def": "Una interacción en la que los dos seres vivos se benefician."
   }
  },
  {
   "term": "Cleaning station",
   "def": "A spot where small animals clean bigger ones, eating their parasites.",
   "es": {
    "term": "Estación de limpieza",
    "def": "Un lugar donde animales pequeños limpian a otros más grandes y se comen sus parásitos."
   }
  },
  {
   "term": "Coral",
   "def": "A tiny animal that builds a stony skeleton. Millions of them build a reef.",
   "es": {
    "term": "Coral",
    "def": "Un animal diminuto que construye un esqueleto de piedra. Millones de ellos forman un arrecife."
   }
  },
  {
   "term": "Competition",
   "def": "An interaction in which living things try to use the same limited resource, like food, space or light.",
   "es": {
    "term": "Competencia",
    "def": "Una interacción en la que los seres vivos tratan de usar el mismo recurso limitado, como alimento, espacio o luz."
   }
  },
  {
   "term": "Predation",
   "def": "An interaction in which one animal (the predator) hunts and eats another (the prey).",
   "es": {
    "term": "Depredación",
    "def": "Una interacción en la que un animal (el depredador) caza y se come a otro (la presa)."
   }
  },
  {
   "term": "Prey",
   "def": "An animal that is hunted and eaten by a predator.",
   "es": {
    "term": "Presa",
    "def": "Un animal al que caza y se come un depredador."
   }
  },
  {
   "term": "Predator",
   "def": "An animal that hunts and eats other animals.",
   "es": {
    "term": "Depredador",
    "def": "Un animal que caza y se come a otros animales."
   }
  },
  {
   "term": "Pattern",
   "def": "Something that happens again and again in the same way, so you can predict it.",
   "es": {
    "term": "Patrón",
    "def": "Algo que ocurre una y otra vez de la misma manera, así que puedes predecirlo."
   }
  },
  {
   "term": "Population",
   "def": "All the members of one species living in the same area.",
   "es": {
    "term": "Población",
    "def": "Todos los miembros de una especie que viven en el mismo lugar."
   }
  },
  {
   "term": "Resource",
   "def": "Something living things need from their ecosystem, like food, water, shelter or space.",
   "es": {
    "term": "Recurso",
    "def": "Algo que los seres vivos necesitan de su ecosistema, como alimento, agua, refugio o espacio."
   }
  },
  {
   "term": "Mast year",
   "def": "A year when trees like oaks make a huge crop of nuts all at once.",
   "es": {
    "term": "Año de abundancia",
    "def": "Un año en que los árboles como los robles producen una cosecha enorme de frutos al mismo tiempo."
   }
  },
  {
   "term": "Population growth",
   "def": "An increase in the number of individuals in a population.",
   "es": {
    "term": "Crecimiento de la población",
    "def": "Un aumento en el número de individuos de una población."
   }
  },
  {
   "term": "Carrying capacity",
   "def": "The largest population an ecosystem can support with the resources it has.",
   "es": {
    "term": "Capacidad de carga",
    "def": "La población más grande que un ecosistema puede mantener con los recursos que tiene."
   }
  },
  {
   "term": "Limiting factor",
   "def": "A resource in short supply that keeps a population from growing.",
   "es": {
    "term": "Factor limitante",
    "def": "Un recurso escaso que impide que una población crezca."
   }
  },
  {
   "term": "Omnivore",
   "def": "An animal that eats both plants and animals.",
   "es": {
    "term": "Omnívoro",
    "def": "Un animal que come plantas y animales."
   }
  },
  {
   "term": "Shelter",
   "def": "A safe place to live, rest or raise young, such as a tree hole or a nest.",
   "es": {
    "term": "Refugio",
    "def": "Un lugar seguro para vivir, descansar o criar, como un hueco en un árbol o un nido."
   }
  },
  {
   "term": "Overbrowsing",
   "def": "When too many plant-eaters eat young plants faster than they can grow back.",
   "es": {
    "term": "Ramoneo excesivo",
    "def": "Cuando demasiados herbívoros comen las plantas jóvenes más rápido de lo que pueden volver a crecer."
   }
  },
  {
   "term": "Water",
   "def": "A resource every living thing needs.",
   "es": {
    "term": "Agua",
    "def": "Un recurso que todos los seres vivos necesitan."
   }
  },
  {
   "term": "Decomposer",
   "def": "A living thing, like a fungus or bacterium, that breaks down dead matter and returns nutrients to the soil.",
   "es": {
    "term": "Descomponedor",
    "def": "Un ser vivo, como un hongo o una bacteria, que descompone la materia muerta y devuelve los nutrientes al suelo."
   }
  },
  {
   "term": "Fungi",
   "def": "Living things like mushrooms and molds that get food by breaking down other things.",
   "es": {
    "term": "Hongos",
    "def": "Seres vivos como las setas y los mohos que obtienen alimento descomponiendo otras cosas."
   }
  },
  {
   "term": "Soil",
   "def": "A mix of broken rock, water, air and decayed matter where plants grow.",
   "es": {
    "term": "Suelo",
    "def": "Una mezcla de roca triturada, agua, aire y materia descompuesta donde crecen las plantas."
   }
  },
  {
   "term": "Food web",
   "def": "A model of all the feeding connections in an ecosystem.",
   "es": {
    "term": "Red alimentaria",
    "def": "Un modelo de todas las relaciones de alimentación de un ecosistema."
   }
  },
  {
   "term": "Living part",
   "def": "Something in an ecosystem that is alive or was once alive.",
   "es": {
    "term": "Parte viva",
    "def": "Algo de un ecosistema que está vivo o que estuvo vivo."
   }
  },
  {
   "term": "Nonliving part",
   "def": "Something in an ecosystem that is not alive, like water, air, sunlight, rock or soil minerals.",
   "es": {
    "term": "Parte sin vida",
    "def": "Algo de un ecosistema que no está vivo, como el agua, el aire, la luz del sol, las rocas o los minerales del suelo."
   }
  },
  {
   "term": "Producer",
   "def": "A living thing that makes its own food, using energy from sunlight.",
   "es": {
    "term": "Productor",
    "def": "Un ser vivo que fabrica su propio alimento con la energía de la luz del sol."
   }
  },
  {
   "term": "Nutrients",
   "def": "Matter that living things need to grow, like nitrogen and phosphorus.",
   "es": {
    "term": "Nutrientes",
    "def": "Materia que los seres vivos necesitan para crecer, como el nitrógeno y el fósforo."
   }
  },
  {
   "term": "Energy flow",
   "def": "The one-way path of energy through an ecosystem, from the Sun to producers to consumers and decomposers.",
   "es": {
    "term": "Flujo de energía",
    "def": "El camino de un solo sentido de la energía por un ecosistema: del Sol a los productores, a los consumidores y a los descomponedores."
   }
  },
  {
   "term": "Physical component",
   "def": "A nonliving part of an ecosystem, like water, soil, temperature or fire.",
   "es": {
    "term": "Componente físico",
    "def": "Una parte sin vida de un ecosistema, como el agua, el suelo, la temperatura o el fuego."
   }
  },
  {
   "term": "Adaptation",
   "def": "A trait that helps a living thing survive in its environment.",
   "es": {
    "term": "Adaptación",
    "def": "Un rasgo que ayuda a un ser vivo a sobrevivir en su ambiente."
   }
  },
  {
   "term": "Evidence",
   "def": "Facts and data that support or argue against an idea.",
   "es": {
    "term": "Evidencia",
    "def": "Hechos y datos que apoyan o contradicen una idea."
   }
  },
  {
   "term": "Pioneer species",
   "def": "One of the first species to grow in an area after a disturbance.",
   "es": {
    "term": "Especie pionera",
    "def": "Una de las primeras especies que crecen en un lugar después de una perturbación."
   }
  },
  {
   "term": "Biological component",
   "def": "A living part of an ecosystem, like plants, animals, fungi or bacteria.",
   "es": {
    "term": "Componente biológico",
    "def": "Una parte viva de un ecosistema, como las plantas, los animales, los hongos o las bacterias."
   }
  },
  {
   "term": "Population decline",
   "def": "A decrease in the number of individuals in a population.",
   "es": {
    "term": "Disminución de la población",
    "def": "Una baja en el número de individuos de una población."
   }
  },
  {
   "term": "Disturbance",
   "def": "An event, like a fire, flood or storm, that quickly changes an ecosystem.",
   "es": {
    "term": "Perturbación",
    "def": "Un suceso, como un incendio, una inundación o una tormenta, que cambia rápidamente un ecosistema."
   }
  },
  {
   "term": "Succession",
   "def": "The slow, step-by-step change in which species live in an area after a disturbance.",
   "es": {
    "term": "Sucesión",
    "def": "El cambio lento, paso a paso, de las especies que viven en un lugar después de una perturbación."
   }
  },
  {
   "term": "Argument",
   "def": "A claim supported by evidence and reasoning.",
   "es": {
    "term": "Argumento",
    "def": "Una afirmación apoyada por evidencia y razonamiento."
   }
  },
  {
   "term": "Ecosystem services",
   "def": "The benefits people get from healthy ecosystems, like clean water, food, flood control and pollination.",
   "es": {
    "term": "Servicios de los ecosistemas",
    "def": "Los beneficios que las personas obtienen de los ecosistemas sanos, como agua limpia, alimento, control de inundaciones y polinización."
   }
  },
  {
   "term": "Biodiversity",
   "def": "The variety of living things in an area.",
   "es": {
    "term": "Biodiversidad",
    "def": "La variedad de seres vivos de un lugar."
   }
  },
  {
   "term": "Design solution",
   "def": "A plan or invention made to solve a problem.",
   "es": {
    "term": "Solución de diseño",
    "def": "Un plan o invento hecho para resolver un problema."
   }
  },
  {
   "term": "Dam removal",
   "def": "Taking out an old dam so a river can flow freely again.",
   "es": {
    "term": "Retiro de presas",
    "def": "Quitar una presa vieja para que un río vuelva a correr libre."
   }
  },
  {
   "term": "Criteria",
   "def": "The things a design must do well to be a good solution.",
   "es": {
    "term": "Criterios",
    "def": "Las cosas que un diseño debe hacer bien para ser una buena solución."
   }
  },
  {
   "term": "Trade-off",
   "def": "Giving up some of one thing to get more of another when choosing between designs.",
   "es": {
    "term": "Compensación",
    "def": "Renunciar a algo de una cosa para obtener más de otra al elegir entre diseños."
   }
  },
  {
   "term": "Wildlife crossing",
   "def": "A bridge or tunnel that lets animals cross a road safely.",
   "es": {
    "term": "Paso de fauna",
    "def": "Un puente o túnel que deja que los animales crucen una carretera sin peligro."
   }
  },
  {
   "term": "Habitat fragmentation",
   "def": "When roads, buildings or farms split a habitat into smaller, separate pieces.",
   "es": {
    "term": "Fragmentación del hábitat",
    "def": "Cuando las carreteras, los edificios o las granjas dividen un hábitat en pedazos más pequeños y separados."
   }
  },
  {
   "term": "Riparian buffer",
   "def": "A strip of trees and plants along a stream that protects the water.",
   "es": {
    "term": "Franja ribereña",
    "def": "Una franja de árboles y plantas junto a un arroyo que protege el agua."
   }
  },
  {
   "term": "Sediment",
   "def": "Bits of soil, sand and mud carried by water.",
   "es": {
    "term": "Sedimento",
    "def": "Pedacitos de tierra, arena y lodo que arrastra el agua."
   }
  }
 ]
});
