/* WORLD 6 QUESTION FILE: Change Over Time (middle school edition)
   Made by tools/content/build_world.py from the content files in tools/content (edit those, then run it again).
   "code" is the PA STEELS grades 6-8 standard. "es" holds the Spanish text for the same item.
   In "questions", "answer" is the position of the correct option, counting from 0. The game shuffles the options. */
FieldGuide.registerQuestions(6, {
 "tokens": [
  {
   "id": "h6-arm",
   "code": "3.1.6-8.P",
   "prompt": "Collect only limbs with the SAME BONES as a human arm",
   "good": [
    "Whale flipper",
    "Bat wing",
    "Bird wing",
    "Cat front leg"
   ],
   "bad": [
    {
     "text": "Insect wing",
     "explain": "An insect wing has no bones at all. It is not built from the same parts.",
     "es": {
      "text": "Ala de insecto",
      "explain": "Un ala de insecto no tiene huesos. No está formada por las mismas partes."
     }
    },
    {
     "text": "Octopus arm",
     "explain": "An octopus arm has no bones. It is a muscle, not a limb with arm bones.",
     "es": {
      "text": "Brazo de pulpo",
      "explain": "Un brazo de pulpo no tiene huesos. Es un músculo, no una extremidad con huesos de brazo."
     }
    },
    {
     "text": "Jellyfish tentacle",
     "explain": "Jellyfish have no bones and are not closely related to animals with backbones.",
     "es": {
      "text": "Tentáculo de medusa",
      "explain": "Las medusas no tienen huesos y no están muy emparentadas con los animales con columna vertebral."
     }
    }
   ],
   "es": {
    "prompt": "Recoge solo las extremidades con LOS MISMOS HUESOS que un brazo humano",
    "good": [
     "Aleta de ballena",
     "Ala de murciélago",
     "Ala de ave",
     "Pata delantera de gato"
    ]
   }
  }
 ],
 "sorts": [
  {
   "id": "sort6-extinct",
   "code": "3.1.6-8.O",
   "prompt": "Is this kind of living thing still alive today, or extinct?",
   "options": [
    "Alive today",
    "Extinct"
   ],
   "hint": "Extinct means none are left anywhere. Some very old groups still have living members.",
   "items": [
    {
     "text": "Woolly mammoth",
     "answer": 1,
     "explain": "The last mammoths died out thousands of years ago: extinct.",
     "es": {
      "text": "Mamut lanudo",
      "explain": "Los últimos mamuts murieron hace miles de años: extinto."
     }
    },
    {
     "text": "Trilobites",
     "answer": 1,
     "explain": "All trilobites died out about 252 million years ago: extinct.",
     "es": {
      "text": "Trilobites",
      "explain": "Todos los trilobites murieron hace unos 252 millones de años: extintos."
     }
    },
    {
     "text": "Sharks",
     "answer": 0,
     "explain": "Sharks first appear in very old rocks, and they are still alive today.",
     "es": {
      "text": "Tiburones",
      "explain": "Los tiburones aparecen en rocas muy antiguas, y todavía viven hoy."
     }
    },
    {
     "text": "Tyrannosaurus rex",
     "answer": 1,
     "explain": "T. rex fossils stop at the layer about 66 million years old: extinct.",
     "es": {
      "text": "Tyrannosaurus rex",
      "explain": "Los fósiles de T. rex terminan en la capa de unos 66 millones de años: extinto."
     }
    },
    {
     "text": "Horseshoe crabs",
     "answer": 0,
     "explain": "Their group is over 400 million years old, and horseshoe crabs still live on beaches today.",
     "es": {
      "text": "Cangrejos herradura",
      "explain": "Su grupo tiene más de 400 millones de años, y los cangrejos herradura todavía viven en las playas."
     }
    },
    {
     "text": "Tiktaalik",
     "answer": 1,
     "explain": "Tiktaalik is known only from fossils: extinct.",
     "es": {
      "text": "Tiktaalik",
      "explain": "Tiktaalik solo se conoce por los fósiles: extinto."
     }
    }
   ],
   "es": {
    "prompt": "¿Este tipo de ser vivo todavía vive hoy o está extinto?",
    "options": [
     "Vive hoy",
     "Extinto"
    ],
    "hint": "Extinto significa que no queda ninguno en ningún lugar. Algunos grupos muy antiguos todavía tienen miembros vivos."
   }
  },
  {
   "id": "sort6-when",
   "code": "3.1.6-8.Q",
   "prompt": "Is this feature in the EARLY embryos of all four animals, or only in some ADULTS?",
   "options": [
    "All four early embryos",
    "Only some adults"
   ],
   "hint": "Early embryos share features that the adults no longer show.",
   "items": [
    {
     "text": "A tail",
     "answer": 0,
     "explain": "Fish, chicken, pig and human embryos all have a tail early on.",
     "es": {
      "text": "Una cola",
      "explain": "Los embriones de pez, pollo, cerdo y humano tienen cola al principio."
     }
    },
    {
     "text": "Gill pouches in the neck",
     "answer": 0,
     "explain": "All four early embryos have gill pouches.",
     "es": {
      "text": "Bolsas branquiales en el cuello",
      "explain": "Los cuatro embriones tempranos tienen bolsas branquiales."
     }
    },
    {
     "text": "Feathers",
     "answer": 1,
     "explain": "Only adult birds have feathers.",
     "es": {
      "text": "Plumas",
      "explain": "Solo las aves adultas tienen plumas."
     }
    },
    {
     "text": "Working gills",
     "answer": 1,
     "explain": "Only fish keep working gills as adults.",
     "es": {
      "text": "Branquias que funcionan",
      "explain": "Solo los peces conservan branquias que funcionan de adultos."
     }
    },
    {
     "text": "Hair",
     "answer": 1,
     "explain": "Only mammals, like the pig and the human, grow hair.",
     "es": {
      "text": "Pelo",
      "explain": "Solo los mamíferos, como el cerdo y el humano, tienen pelo."
     }
    },
    {
     "text": "Small limb buds",
     "answer": 0,
     "explain": "All four start with small, similar limb buds (fins in fish).",
     "es": {
      "text": "Esbozos de extremidades pequeños",
      "explain": "Los cuatro empiezan con esbozos de extremidades pequeños y parecidos (aletas en el pez)."
     }
    }
   ],
   "es": {
    "prompt": "¿Esta característica está en los embriones TEMPRANOS de los cuatro animales, o solo en algunos ADULTOS?",
    "options": [
     "Los cuatro embriones tempranos",
     "Solo algunos adultos"
    ],
    "hint": "Los embriones tempranos comparten características que los adultos ya no muestran."
   }
  },
  {
   "id": "sort6-help",
   "code": "3.1.6-8.S",
   "prompt": "In THIS environment, does the trait help the individual survive and reproduce?",
   "options": [
    "Helps",
    "Does not help"
   ],
   "hint": "A trait helps only if it fits the specific environment.",
   "items": [
    {
     "text": "A deep, strong beak during a drought with only hard seeds",
     "answer": 0,
     "explain": "It can crack the only seeds left: helps.",
     "es": {
      "text": "Un pico grueso y fuerte en una sequía con solo semillas duras",
      "explain": "Puede abrir las únicas semillas que quedan: ayuda."
     }
    },
    {
     "text": "A small, thin beak during a drought with only hard seeds",
     "answer": 1,
     "explain": "It cannot crack the hard seeds: does not help.",
     "es": {
      "text": "Un pico pequeño y delgado en una sequía con solo semillas duras",
      "explain": "No puede abrir las semillas duras: no ayuda."
     }
    },
    {
     "text": "A white snowshoe hare in the snow",
     "answer": 0,
     "explain": "It blends in, so predators miss it: helps.",
     "es": {
      "text": "Una liebre blanca en la nieve",
      "explain": "Se confunde con la nieve, así que los depredadores no la ven: ayuda."
     }
    },
    {
     "text": "A white snowshoe hare after the snow has melted",
     "answer": 1,
     "explain": "It stands out against brown ground: does not help.",
     "es": {
      "text": "Una liebre blanca después de que se derritió la nieve",
      "explain": "Resalta contra el suelo café: no ayuda."
     }
    },
    {
     "text": "A dark moth on sooty bark",
     "answer": 0,
     "explain": "It blends in, so birds miss it: helps.",
     "es": {
      "text": "Una polilla oscura sobre una corteza con hollín",
      "explain": "Se confunde con la corteza, así que las aves no la ven: ayuda."
     }
    },
    {
     "text": "A light moth on sooty bark",
     "answer": 1,
     "explain": "It stands out to birds: does not help.",
     "es": {
      "text": "Una polilla clara sobre una corteza con hollín",
      "explain": "Las aves la ven fácilmente: no ayuda."
     }
    }
   ],
   "es": {
    "prompt": "En ESTE ambiente, ¿el rasgo ayuda al individuo a sobrevivir y reproducirse?",
    "options": [
     "Ayuda",
     "No ayuda"
    ],
    "hint": "Un rasgo ayuda solo si encaja con el ambiente específico."
   }
  },
  {
   "id": "sort6-trend",
   "code": "3.1.6-8.T",
   "prompt": "Over many generations, will this trait INCREASE or DECREASE in the population?",
   "options": [
    "Increase",
    "Decrease"
   ],
   "hint": "Traits that help individuals survive and reproduce become more common. Traits that hurt become less common.",
   "items": [
    {
     "text": "Dark color in moths while the bark stays sooty",
     "answer": 0,
     "explain": "Dark moths survive more, so the dark trait increases.",
     "es": {
      "text": "El color oscuro de las polillas mientras la corteza sigue con hollín",
      "explain": "Las polillas oscuras sobreviven más, así que el rasgo oscuro aumenta."
     }
    },
    {
     "text": "Dark color in moths after the air is cleaned",
     "answer": 1,
     "explain": "On light bark, dark moths are eaten more, so the trait decreases.",
     "es": {
      "text": "El color oscuro de las polillas después de que se limpia el aire",
      "explain": "En la corteza clara se comen más polillas oscuras, así que el rasgo disminuye."
     }
    },
    {
     "text": "Antibiotic resistance in bacteria while the antibiotic is used",
     "answer": 0,
     "explain": "Resistant bacteria survive and multiply: the trait increases.",
     "es": {
      "text": "La resistencia a un antibiótico en bacterias mientras se usa el antibiótico",
      "explain": "Las bacterias resistentes sobreviven y se multiplican: el rasgo aumenta."
     }
    },
    {
     "text": "Deep beaks after many wet years with lots of small, soft seeds",
     "answer": 1,
     "explain": "Small beaks do fine with soft seeds, so deep beaks lose their advantage and can decrease.",
     "es": {
      "text": "Los picos gruesos después de muchos años lluviosos con muchas semillas pequeñas y blandas",
      "explain": "Los picos pequeños comen bien las semillas blandas, así que los picos gruesos pierden su ventaja y pueden disminuir."
     }
    },
    {
     "text": "Pale color in hares where snow now melts earlier every year",
     "answer": 1,
     "explain": "White hares stand out on bare ground longer each year, so the white trait can decrease.",
     "es": {
      "text": "El color blanco de las liebres donde ahora la nieve se derrite antes cada año",
      "explain": "Las liebres blancas resaltan más tiempo en el suelo descubierto cada año, así que el rasgo blanco puede disminuir."
     }
    },
    {
     "text": "Deep beaks during a long drought with only hard seeds",
     "answer": 0,
     "explain": "Deep beaks help birds eat, so the trait increases.",
     "es": {
      "text": "Los picos gruesos durante una sequía larga con solo semillas duras",
      "explain": "Los picos gruesos ayudan a las aves a comer, así que el rasgo aumenta."
     }
    }
   ],
   "es": {
    "prompt": "Con muchas generaciones, ¿este rasgo AUMENTARÁ o DISMINUIRÁ en la población?",
    "options": [
     "Aumentará",
     "Disminuirá"
    ],
    "hint": "Los rasgos que ayudan a sobrevivir y reproducirse se vuelven más comunes. Los que perjudican se vuelven menos comunes."
   }
  }
 ],
 "questions": [
  {
   "id": "ms6q01",
   "code": "3.1.6-8.O",
   "prompt": "In undisturbed rock layers, where are the OLDEST fossils usually found?",
   "options": [
    "in the deepest layers",
    "in the top layer, near the surface",
    "in the middle only",
    "anywhere at random"
   ],
   "answer": 0,
   "hint": "Layers settle on top of older ones.",
   "explain": "Deeper layers formed first, so they hold the oldest fossils.",
   "es": {
    "prompt": "En capas de roca sin alterar, ¿dónde suelen estar los fósiles MÁS ANTIGUOS?",
    "options": [
     "en las capas más profundas",
     "en la capa de arriba, cerca de la superficie",
     "solo en el medio",
     "en cualquier lugar al azar"
    ],
    "hint": "Las capas se depositan encima de las más viejas.",
    "explain": "Las capas más profundas se formaron primero, así que guardan los fósiles más antiguos."
   }
  },
  {
   "id": "ms6q02",
   "code": "3.1.6-8.O",
   "prompt": "Trilobite fossils are common in deep layers but missing from all the layers above. What does this pattern show?",
   "options": [
    "Trilobites went extinct.",
    "Trilobites are still common today.",
    "Trilobites lived only recently.",
    "The layers are upside down."
   ],
   "answer": 0,
   "hint": "They stop appearing at some point.",
   "explain": "When a fossil stops appearing in younger layers, it is evidence that the species went extinct.",
   "es": {
    "prompt": "Los fósiles de trilobites son comunes en las capas profundas, pero no aparecen en ninguna capa de arriba. ¿Qué muestra este patrón?",
    "options": [
     "Los trilobites se extinguieron.",
     "Los trilobites todavía son comunes hoy.",
     "Los trilobites vivieron hace poco.",
     "Las capas están al revés."
    ],
    "hint": "Dejan de aparecer en algún momento.",
    "explain": "Cuando un fósil deja de aparecer en las capas más jóvenes, es evidencia de que la especie se extinguió."
   }
  },
  {
   "id": "ms6q03",
   "code": "3.1.6-8.O",
   "prompt": "What is the FOSSIL RECORD?",
   "options": [
    "all known fossils and the order of their rock layers",
    "a list of only the dinosaur fossils",
    "a list of all the different animals living on Earth today",
    "a map showing where the canyon’s rivers flow"
   ],
   "answer": 0,
   "hint": "It is a record of past life.",
   "explain": "The fossil record documents which living things existed, when, and how they changed.",
   "es": {
    "prompt": "¿Qué es el REGISTRO FÓSIL?",
    "options": [
     "todos los fósiles conocidos y el orden de sus capas de roca",
     "una lista solo de los fósiles de dinosaurios",
     "una lista de todos los distintos animales que viven hoy en la Tierra",
     "un mapa de por dónde corren los ríos del cañón"
    ],
    "hint": "Es un registro de la vida del pasado.",
    "explain": "El registro fósil documenta qué seres vivos existieron, cuándo y cómo cambiaron."
   }
  },
  {
   "id": "ms6q04",
   "code": "3.1.6-8.O",
   "prompt": "Scientists use how rivers lay down sand TODAY to explain rock layers from long ago. What are they assuming?",
   "options": [
    "Natural laws work the same today as in the past.",
    "Rivers in the past flowed uphill instead of down.",
    "Rocks form only today, never in the past.",
    "The past cannot be studied."
   ],
   "answer": 0,
   "hint": "Nature follows the same rules over time.",
   "explain": "Scientists assume natural laws, like gravity, worked the same in the past, so today’s processes explain old rocks.",
   "es": {
    "prompt": "Los científicos usan cómo los ríos depositan arena HOY para explicar capas de roca de hace mucho tiempo. ¿Qué están suponiendo?",
    "options": [
     "Que las leyes naturales funcionan igual hoy que en el pasado.",
     "Que en el pasado los ríos corrían cuesta arriba, no cuesta abajo.",
     "Que las rocas solo se forman hoy, nunca en el pasado.",
     "Que el pasado no se puede estudiar."
    ],
    "hint": "La naturaleza sigue las mismas reglas con el tiempo.",
    "explain": "Los científicos suponen que las leyes naturales, como la gravedad, funcionaban igual en el pasado, así que los procesos de hoy explican las rocas antiguas."
   }
  },
  {
   "id": "ms6q05",
   "code": "3.1.6-8.O",
   "prompt": "Tiktaalik had gills and scales like a fish, plus a neck and leg-like fins. What kind of fossil is it?",
   "options": [
    "a transitional fossil",
    "a modern living organism",
    "a mineral",
    "an embryo"
   ],
   "answer": 0,
   "hint": "It is in between two groups.",
   "explain": "A transitional fossil shows traits of an older group (fish) and a newer group (land animals).",
   "es": {
    "prompt": "Tiktaalik tenía branquias y escamas como un pez, además de cuello y aletas como patas. ¿Qué tipo de fósil es?",
    "options": [
     "un fósil de transición",
     "un organismo vivo moderno",
     "un mineral",
     "un embrión"
    ],
    "hint": "Está entre dos grupos.",
    "explain": "Un fósil de transición muestra rasgos de un grupo más antiguo (peces) y de un grupo más nuevo (animales terrestres)."
   }
  },
  {
   "id": "ms6q06",
   "code": "3.1.6-8.O",
   "prompt": "Dinosaur fossils fill one layer but are missing from the layers above it. What can you conclude?",
   "options": [
    "Non-bird dinosaurs went extinct before those layers formed.",
    "Dinosaurs lived long after mammoths did.",
    "Dinosaur bones are buried only in the very top layers of rock.",
    "Dinosaurs never existed on Earth at all."
   ],
   "answer": 0,
   "hint": "Think about order and disappearance.",
   "explain": "Fossils that stop at a layer show an extinction. Above that layer, non-bird dinosaurs no longer appear.",
   "es": {
    "prompt": "Los fósiles de dinosaurios llenan una capa, pero no aparecen en las capas de arriba. ¿Qué puedes concluir?",
    "options": [
     "Los dinosaurios que no son aves se extinguieron antes de esas capas.",
     "Los dinosaurios vivieron mucho después de los mamuts.",
     "Los huesos de dinosaurio solo están enterrados en las capas de roca de más arriba.",
     "Los dinosaurios nunca existieron en la Tierra."
    ],
    "hint": "Piensa en el orden y en la desaparición.",
    "explain": "Los fósiles que terminan en una capa muestran una extinción. Encima de esa capa ya no aparecen los dinosaurios que no son aves."
   }
  },
  {
   "id": "ms6q07",
   "code": "3.1.6-8.O",
   "prompt": "A dig finds 6 kinds of fossils in the oldest layer and 24 kinds in the youngest. What does this show about life on Earth?",
   "options": [
    "Its diversity changed over time.",
    "Nothing ever changed.",
    "All life on Earth is the same age.",
    "Fossils cannot be counted."
   ],
   "answer": 0,
   "hint": "Diversity = number of different kinds.",
   "explain": "The number of different kinds changed from layer to layer: the fossil record documents changes in diversity.",
   "es": {
    "prompt": "Una excavación encuentra 6 tipos de fósiles en la capa más antigua y 24 tipos en la más joven. ¿Qué muestra esto sobre la vida en la Tierra?",
    "options": [
     "Que su diversidad cambió con el tiempo.",
     "Que nunca cambió nada.",
     "Que toda la vida en la Tierra tiene la misma edad.",
     "Que los fósiles no se pueden contar."
    ],
    "hint": "Diversidad = número de tipos distintos.",
    "explain": "El número de tipos distintos cambió de capa en capa: el registro fósil documenta cambios en la diversidad."
   }
  },
  {
   "id": "ms6q08",
   "code": "3.1.6-8.O",
   "prompt": "A fossil found in a DEEPER layer is most likely...",
   "options": [
    "older than a fossil in a layer above it",
    "younger than a fossil in a layer above it",
    "the same age as everything",
    "still alive"
   ],
   "answer": 0,
   "hint": "Deeper = earlier.",
   "explain": "Its relative age is older, because deeper layers formed first.",
   "es": {
    "prompt": "Un fósil encontrado en una capa MÁS PROFUNDA probablemente es...",
    "options": [
     "más viejo que un fósil de una capa de arriba",
     "más joven que un fósil de una capa de arriba",
     "de la misma edad que todo",
     "todavía está vivo"
    ],
    "hint": "Más profundo = antes.",
    "explain": "Su edad relativa es mayor, porque las capas más profundas se formaron primero."
   }
  },
  {
   "id": "ms6q09",
   "code": "3.1.6-8.O",
   "prompt": "Which group is still alive today, even though its fossils are found in very old layers?",
   "options": [
    "sharks",
    "trilobites",
    "woolly mammoths",
    "Tyrannosaurus rex"
   ],
   "answer": 0,
   "hint": "One of these still swims in the ocean.",
   "explain": "Sharks appear in very old rocks and still live today. The others are extinct.",
   "es": {
    "prompt": "¿Qué grupo todavía vive hoy, aunque sus fósiles se encuentran en capas muy antiguas?",
    "options": [
     "los tiburones",
     "los trilobites",
     "los mamuts lanudos",
     "el Tyrannosaurus rex"
    ],
    "hint": "Uno de estos todavía nada en el océano.",
    "explain": "Los tiburones aparecen en rocas muy antiguas y todavía viven. Los demás están extintos."
   }
  },
  {
   "id": "ms6q10",
   "code": "3.1.6-8.O",
   "prompt": "Which is the best evidence that life forms CHANGED over Earth’s history?",
   "options": [
    "Layers hold different fossils in a consistent order.",
    "All layers hold the same kinds of fossils, top to bottom.",
    "There are no fossils in rocks.",
    "Fossils in every layer are always the same color."
   ],
   "answer": 0,
   "hint": "Look for a pattern from layer to layer.",
   "explain": "Different life forms appear in a consistent order through the layers, documenting change over time.",
   "es": {
    "prompt": "¿Cuál es la mejor evidencia de que las formas de vida CAMBIARON a lo largo de la historia de la Tierra?",
    "options": [
     "Las capas tienen fósiles distintos en un orden constante.",
     "Todas las capas tienen los mismos tipos de fósiles, de arriba abajo.",
     "No hay fósiles en las rocas.",
     "Los fósiles de todas las capas siempre son del mismo color."
    ],
    "hint": "Busca un patrón de capa en capa.",
    "explain": "Distintas formas de vida aparecen en un orden constante a través de las capas, lo que documenta el cambio con el tiempo."
   }
  },
  {
   "id": "ms6q11",
   "code": "3.1.6-8.P",
   "prompt": "Look at the bones. What do all four limbs have in common?",
   "options": [
    "the same groups of bones in the same order",
    "the same overall shape and the same size",
    "the same job, such as swimming",
    "no bones at all"
   ],
   "answer": 0,
   "hint": "Look at the colors, not the shapes.",
   "explain": "All four have an upper arm bone, forearm bones, and wrist and finger bones, in the same order. They are homologous structures.",
   "es": {
    "prompt": "Mira los huesos. ¿Qué tienen en común las cuatro extremidades?",
    "options": [
     "los mismos grupos de huesos en el mismo orden",
     "la misma forma general y el mismo tamaño",
     "la misma función, como nadar",
     "ningún hueso"
    ],
    "hint": "Mira los colores, no las formas.",
    "explain": "Las cuatro tienen un hueso del brazo, huesos del antebrazo y huesos de la muñeca y los dedos, en el mismo orden. Son estructuras homólogas.",
    "figure": {
     "type": "limbs",
     "labels": [
      "Brazo humano",
      "Aleta de ballena",
      "Ala de murciélago",
      "Ala de ave"
     ],
     "key": [
      "Brazo",
      "Antebrazo",
      "Muñeca y dedos"
     ],
     "alt": "Huesos de un brazo humano, una aleta de ballena, un ala de murciélago y un ala de ave"
    }
   },
   "figure": {
    "type": "limbs",
    "labels": [
     "Human arm",
     "Whale flipper",
     "Bat wing",
     "Bird wing"
    ],
    "key": [
     "Upper arm",
     "Forearm",
     "Wrist and fingers"
    ],
    "alt": "Bones of a human arm, whale flipper, bat wing and bird wing"
   }
  },
  {
   "id": "ms6q12",
   "code": "3.1.6-8.P",
   "prompt": "Why do a whale flipper, a bat wing and a human arm have the same bones?",
   "options": [
    "They were inherited from a common ancestor.",
    "They all do the same job.",
    "Whales, bats and people live in the same place.",
    "It is a coincidence."
   ],
   "answer": 0,
   "hint": "Same bones, different jobs.",
   "explain": "Homologous structures are evidence of a common ancestor. The bones were inherited, then changed shape over time.",
   "es": {
    "prompt": "¿Por qué una aleta de ballena, un ala de murciélago y un brazo humano tienen los mismos huesos?",
    "options": [
     "Los heredaron de un ancestro común.",
     "Todos hacen el mismo trabajo.",
     "Las ballenas, los murciélagos y las personas viven en el mismo lugar.",
     "Es una coincidencia."
    ],
    "hint": "Los mismos huesos, trabajos distintos.",
    "explain": "Las estructuras homólogas son evidencia de un ancestro común. Los huesos se heredaron y luego cambiaron de forma con el tiempo.",
    "figure": {
     "type": "limbs",
     "labels": [
      "Brazo humano",
      "Aleta de ballena",
      "Ala de murciélago",
      "Ala de ave"
     ],
     "key": [
      "Brazo",
      "Antebrazo",
      "Muñeca y dedos"
     ],
     "alt": "Huesos de un brazo humano, una aleta de ballena, un ala de murciélago y un ala de ave"
    }
   },
   "figure": {
    "type": "limbs",
    "labels": [
     "Human arm",
     "Whale flipper",
     "Bat wing",
     "Bird wing"
    ],
    "key": [
     "Upper arm",
     "Forearm",
     "Wrist and fingers"
    ],
    "alt": "Bones of a human arm, whale flipper, bat wing and bird wing"
   }
  },
  {
   "id": "ms6q13",
   "code": "3.1.6-8.P",
   "prompt": "Basilosaurus, a fossil whale, had tiny back legs too small to walk on. What do we call a structure like this?",
   "options": [
    "vestigial",
    "transitional",
    "homologous",
    "camouflaged"
   ],
   "answer": 0,
   "hint": "It is left over and no longer used for walking.",
   "explain": "A vestigial structure is much reduced and no longer does its original job.",
   "es": {
    "prompt": "El basilosaurio, una ballena fósil, tenía patas traseras diminutas, demasiado pequeñas para caminar. ¿Cómo se llama una estructura así?",
    "options": [
     "vestigial",
     "de transición",
     "homóloga",
     "camuflada"
    ],
    "hint": "Es un resto que ya no se usa para caminar.",
    "explain": "Una estructura vestigial está muy reducida y ya no cumple su función original."
   }
  },
  {
   "id": "ms6q14",
   "code": "3.1.6-8.P",
   "prompt": "Pakicetus looked like a land animal, but its ear bones were shaped like a whale’s. What does this similarity suggest?",
   "options": [
    "Pakicetus was related to whales.",
    "Pakicetus was a fish.",
    "Whales are related to insects.",
    "Ear bones tell us nothing about relatives."
   ],
   "answer": 0,
   "hint": "Similar anatomy can reveal relationships.",
   "explain": "A special similarity, like whale-shaped ear bones, is evidence of an evolutionary relationship.",
   "es": {
    "prompt": "Pakicetus parecía un animal terrestre, pero los huesos de su oído tenían forma de los de una ballena. ¿Qué sugiere esta semejanza?",
    "options": [
     "Que Pakicetus estaba emparentado con las ballenas.",
     "Que Pakicetus era un pez.",
     "Que las ballenas están emparentadas con los insectos.",
     "Que los huesos del oído no dicen nada sobre parentescos."
    ],
    "hint": "Una anatomía parecida puede revelar parentescos.",
    "explain": "Una semejanza especial, como huesos del oído con forma de los de una ballena, es evidencia de una relación evolutiva."
   }
  },
  {
   "id": "ms6q15",
   "code": "3.1.6-8.P",
   "prompt": "Which is an ANATOMICAL DIFFERENCE between Pakicetus and a modern whale?",
   "options": [
    "Pakicetus had back legs; modern whales do not.",
    "Both have ear bones shaped like a modern whale’s.",
    "Both are animals.",
    "Both have a backbone made of many bones."
   ],
   "answer": 0,
   "hint": "Look for what is NOT the same.",
   "explain": "Losing the back legs is a big difference that shows how whales changed over time.",
   "es": {
    "prompt": "¿Cuál es una DIFERENCIA ANATÓMICA entre Pakicetus y una ballena moderna?",
    "options": [
     "Pakicetus tenía patas traseras; las ballenas modernas no.",
     "Los dos tienen huesos del oído con forma de los de una ballena moderna.",
     "Los dos son animales.",
     "Los dos tienen una columna hecha de muchos huesos."
    ],
    "hint": "Busca lo que NO es igual.",
    "explain": "Perder las patas traseras es una gran diferencia que muestra cómo cambiaron las ballenas con el tiempo."
   }
  },
  {
   "id": "ms6q16",
   "code": "3.1.6-8.P",
   "prompt": "Whales and hippos share a rare ankle bone shape and very similar DNA. What is the best explanation?",
   "options": [
    "They share a recent common ancestor.",
    "Hippos are a kind of fish.",
    "Whales once lived in rivers in Pennsylvania.",
    "It happened by chance."
   ],
   "answer": 0,
   "hint": "Two kinds of evidence point the same way.",
   "explain": "Matching anatomy and DNA are strong evidence that whales and hippos are close relatives.",
   "es": {
    "prompt": "Las ballenas y los hipopótamos comparten una forma rara del hueso del tobillo y un ADN muy parecido. ¿Cuál es la mejor explicación?",
    "options": [
     "Comparten un ancestro común reciente.",
     "Los hipopótamos son un tipo de pez.",
     "Las ballenas vivieron en ríos de Pensilvania.",
     "Ocurrió por casualidad."
    ],
    "hint": "Dos tipos de evidencia señalan lo mismo.",
    "explain": "La anatomía y el ADN coincidentes son una fuerte evidencia de que las ballenas y los hipopótamos son parientes cercanos."
   }
  },
  {
   "id": "ms6q17",
   "code": "3.1.6-8.P",
   "prompt": "An insect wing and a bird wing both help an animal fly, but they are built completely differently. What does this suggest?",
   "options": [
    "They did NOT come from the same ancestral part.",
    "Insects and birds are each other’s closest relatives.",
    "Birds evolved from insects.",
    "Both have the same bones."
   ],
   "answer": 0,
   "hint": "Similar jobs do not always mean related parts.",
   "explain": "The wings do the same job but have different structures, so they are not homologous: they evolved separately.",
   "es": {
    "prompt": "Un ala de insecto y un ala de ave ayudan a volar, pero están construidas de forma totalmente distinta. ¿Qué sugiere esto?",
    "options": [
     "Que NO vienen de la misma parte del cuerpo de un ancestro.",
     "Que los insectos y las aves son los parientes más cercanos entre sí.",
     "Que las aves evolucionaron de los insectos.",
     "Que las dos tienen los mismos huesos."
    ],
    "hint": "Funciones parecidas no siempre significan partes emparentadas.",
    "explain": "Las alas hacen el mismo trabajo pero tienen estructuras distintas, así que no son homólogas: evolucionaron por separado."
   }
  },
  {
   "id": "ms6q18",
   "code": "3.1.6-8.P",
   "prompt": "Modern whales have a few tiny hip bones inside their bodies. How does this connect them to fossil whales?",
   "options": [
    "They are leftovers from the hips of fossil whales with legs.",
    "Modern whales still use them to walk on land.",
    "The hip bones help modern whales breathe while underwater.",
    "Fossil whales had no bones at all."
   ],
   "answer": 0,
   "hint": "Think about what Pakicetus had.",
   "explain": "The tiny hip bones are vestigial. They match the hips of older whales that had legs.",
   "es": {
    "prompt": "Las ballenas modernas tienen unos huesitos de la cadera dentro del cuerpo. ¿Cómo las conecta esto con las ballenas fósiles?",
    "options": [
     "Son restos de la cadera de ballenas fósiles que tenían patas.",
     "Las ballenas modernas todavía las usan para caminar en tierra.",
     "Los huesos de la cadera ayudan a las ballenas a respirar mientras están bajo el agua.",
     "Las ballenas fósiles no tenían ningún hueso."
    ],
    "hint": "Piensa en lo que tenía Pakicetus.",
    "explain": "Los huesitos de la cadera son vestigiales. Coinciden con la cadera de las ballenas más antiguas que tenían patas."
   }
  },
  {
   "id": "ms6q19",
   "code": "3.1.6-8.Q",
   "prompt": "Look at the EARLY embryos. Which features do all four share?",
   "options": [
    "a tail and neck pouches",
    "feathers",
    "hair on the head and back",
    "a beak"
   ],
   "answer": 0,
   "hint": "Compare the top row.",
   "explain": "All four early embryos have a tail and gill pouches (the red marks in the neck).",
   "es": {
    "prompt": "Mira los embriones TEMPRANOS. ¿Qué características comparten los cuatro?",
    "options": [
     "una cola y bolsas en el cuello",
     "plumas",
     "pelo en la cabeza y la espalda",
     "un pico"
    ],
    "hint": "Compara la fila de arriba.",
    "explain": "Los cuatro embriones tempranos tienen cola y bolsas branquiales (las marcas rojas del cuello).",
    "figure": {
     "type": "embryos",
     "labels": [
      "Pez",
      "Pollo",
      "Cerdo",
      "Humano"
     ],
     "rows": [
      "Temprano",
      "Después"
     ],
     "alt": "Dibujos de embriones de pez, pollo, cerdo y humano, tempranos y más avanzados"
    }
   },
   "figure": {
    "type": "embryos",
    "labels": [
     "Fish",
     "Chicken",
     "Pig",
     "Human"
    ],
    "rows": [
     "Early",
     "Later"
    ],
    "alt": "Drawings of fish, chicken, pig and human embryos, early and later"
   }
  },
  {
   "id": "ms6q20",
   "code": "3.1.6-8.Q",
   "prompt": "In the LATER row, which embryo still shows the gill area clearly as it becomes an adult?",
   "options": [
    "the fish",
    "the chicken",
    "the pig",
    "the human"
   ],
   "answer": 0,
   "hint": "Which adult breathes with gills?",
   "explain": "Only the fish keeps the gill area and grows working gills. In the others it becomes parts of the jaw, ear and throat.",
   "es": {
    "prompt": "En la fila de ABAJO, ¿qué embrión todavía muestra claramente la zona de las branquias al hacerse adulto?",
    "options": [
     "el pez",
     "el pollo",
     "el cerdo",
     "el humano"
    ],
    "hint": "¿Qué adulto respira con branquias?",
    "explain": "Solo el pez conserva la zona de las branquias y forma branquias que funcionan. En los demás se vuelve parte de la mandíbula, el oído y la garganta.",
    "figure": {
     "type": "embryos",
     "labels": [
      "Pez",
      "Pollo",
      "Cerdo",
      "Humano"
     ],
     "rows": [
      "Temprano",
      "Después"
     ],
     "alt": "Dibujos de embriones de pez, pollo, cerdo y humano, tempranos y más avanzados"
    }
   },
   "figure": {
    "type": "embryos",
    "labels": [
     "Fish",
     "Chicken",
     "Pig",
     "Human"
    ],
    "rows": [
     "Early",
     "Later"
    ],
    "alt": "Drawings of fish, chicken, pig and human embryos, early and later"
   }
  },
  {
   "id": "ms6q21",
   "code": "3.1.6-8.Q",
   "prompt": "Adult fish, chickens, pigs and people look very different. Why do scientists compare their EMBRYOS?",
   "options": [
    "Embryos show similarities hidden in the adults.",
    "Embryos are easier to feed and keep alive in a lab.",
    "Adults have no anatomy to compare at all.",
    "Embryos never change."
   ],
   "answer": 0,
   "hint": "Some patterns are not evident in the fully formed anatomy.",
   "explain": "Early embryos share structures that disappear or change as they develop, revealing relationships.",
   "es": {
    "prompt": "Los peces, los pollos, los cerdos y las personas adultos se ven muy distintos. ¿Por qué los científicos comparan sus EMBRIONES?",
    "options": [
     "Los embriones muestran semejanzas escondidas en los adultos.",
     "Los embriones son más fáciles de alimentar y mantener vivos en un laboratorio.",
     "Los adultos no tienen ninguna anatomía que comparar.",
     "Los embriones nunca cambian."
    ],
    "hint": "Algunos patrones no se ven en la anatomía ya formada.",
    "explain": "Los embriones tempranos comparten estructuras que desaparecen o cambian al desarrollarse, y eso revela parentescos.",
    "figure": {
     "type": "embryos",
     "labels": [
      "Pez",
      "Pollo",
      "Cerdo",
      "Humano"
     ],
     "rows": [
      "Temprano",
      "Después"
     ],
     "alt": "Dibujos de embriones de pez, pollo, cerdo y humano, tempranos y más avanzados"
    }
   },
   "figure": {
    "type": "embryos",
    "labels": [
     "Fish",
     "Chicken",
     "Pig",
     "Human"
    ],
    "rows": [
     "Early",
     "Later"
    ],
    "alt": "Drawings of fish, chicken, pig and human embryos, early and later"
   }
  },
  {
   "id": "ms6q22",
   "code": "3.1.6-8.Q",
   "prompt": "A human embryo has a tail at about five weeks. What happens to it?",
   "options": [
    "It shrinks and becomes the tailbone.",
    "It grows into a long tail like a monkey’s.",
    "It turns into a leg.",
    "It becomes a gill."
   ],
   "answer": 0,
   "hint": "Adults have a small bone at the base of the spine.",
   "explain": "The embryo tail shrinks. A small tailbone is all that is left in adults.",
   "es": {
    "prompt": "Un embrión humano tiene cola a las cinco semanas, más o menos. ¿Qué pasa con ella?",
    "options": [
     "Se encoge y se vuelve el coxis.",
     "Crece y se vuelve una cola larga como la de un mono.",
     "Se convierte en una pierna.",
     "Se vuelve una branquia."
    ],
    "hint": "Los adultos tienen un hueso pequeño al final de la columna.",
    "explain": "La cola del embrión se encoge. En los adultos solo queda un coxis pequeño.",
    "figure": {
     "type": "embryos",
     "labels": [
      "Pez",
      "Pollo",
      "Cerdo",
      "Humano"
     ],
     "rows": [
      "Temprano",
      "Después"
     ],
     "alt": "Dibujos de embriones de pez, pollo, cerdo y humano, tempranos y más avanzados"
    }
   },
   "figure": {
    "type": "embryos",
    "labels": [
     "Fish",
     "Chicken",
     "Pig",
     "Human"
    ],
    "rows": [
     "Early",
     "Later"
    ],
    "alt": "Drawings of fish, chicken, pig and human embryos, early and later"
   }
  },
  {
   "id": "ms6q23",
   "code": "3.1.6-8.Q",
   "prompt": "What is PICTORIAL DATA?",
   "options": [
    "information shown in drawings or photos",
    "numbers listed in a table, with no pictures",
    "a written opinion about an experiment",
    "a song"
   ],
   "answer": 0,
   "hint": "Picture = drawing or photo.",
   "explain": "Pictorial data uses images to show information, like drawings of embryos side by side.",
   "es": {
    "prompt": "¿Qué son los DATOS EN IMÁGENES?",
    "options": [
     "información que se muestra en dibujos o fotos",
     "números en una tabla, sin ninguna imagen",
     "una opinión escrita sobre un experimento",
     "una canción"
    ],
    "hint": "Imagen = dibujo o foto.",
    "explain": "Los datos en imágenes usan figuras para mostrar información, como dibujos de embriones lado a lado."
   }
  },
  {
   "id": "ms6q24",
   "code": "3.1.6-8.P",
   "prompt": "Horseshoe crabs look like crabs, but studies of their bodies show they are closer relatives of spiders. What does this teach?",
   "options": [
    "How adults look can hide close relationships.",
    "All animals with hard shells must be crabs.",
    "Spiders live in the ocean.",
    "Looks always tell the truth about relatives."
   ],
   "answer": 0,
   "hint": "Look beyond the outside.",
   "explain": "Careful comparison of structures can reveal relationships that the adult’s outside shape hides.",
   "es": {
    "prompt": "Los cangrejos herradura parecen cangrejos, pero el estudio de sus cuerpos muestra que son parientes más cercanos de las arañas. ¿Qué enseña esto?",
    "options": [
     "Que la apariencia de los adultos puede esconder parentescos cercanos.",
     "Que todos los animales con caparazón duro tienen que ser cangrejos.",
     "Que las arañas viven en el océano.",
     "Que la apariencia siempre dice la verdad sobre los parentescos."
    ],
    "hint": "Mira más allá del exterior.",
    "explain": "Comparar con cuidado las estructuras puede revelar parentescos que esconde la forma exterior del adulto."
   }
  },
  {
   "id": "ms6q25",
   "code": "3.1.6-8.Q",
   "prompt": "Compare the early and later embryos. What happens to the similarities as the embryos develop?",
   "options": [
    "They get harder to see as each one forms adult features.",
    "They become stronger, and all four end up being identical.",
    "Nothing changes.",
    "The fish embryo becomes a chicken."
   ],
   "answer": 0,
   "hint": "Compare the top row with the bottom row.",
   "explain": "Early on they look alike. Later, each develops features of its own kind, so the shared pattern is hidden.",
   "es": {
    "prompt": "Compara los embriones tempranos y los más avanzados. ¿Qué pasa con las semejanzas mientras se desarrollan?",
    "options": [
     "Se notan menos a medida que cada uno forma rasgos de adulto.",
     "Se hacen más fuertes y los cuatro terminan siendo idénticos.",
     "No cambia nada.",
     "El embrión de pez se vuelve un pollo."
    ],
    "hint": "Compara la fila de arriba con la de abajo.",
    "explain": "Al principio se parecen. Después, cada uno forma rasgos de su propia especie, así que el patrón compartido queda escondido.",
    "figure": {
     "type": "embryos",
     "labels": [
      "Pez",
      "Pollo",
      "Cerdo",
      "Humano"
     ],
     "rows": [
      "Temprano",
      "Después"
     ],
     "alt": "Dibujos de embriones de pez, pollo, cerdo y humano, tempranos y más avanzados"
    }
   },
   "figure": {
    "type": "embryos",
    "labels": [
     "Fish",
     "Chicken",
     "Pig",
     "Human"
    ],
    "rows": [
     "Early",
     "Later"
    ],
    "alt": "Drawings of fish, chicken, pig and human embryos, early and later"
   }
  },
  {
   "id": "ms6q26",
   "code": "3.1.6-8.Q",
   "prompt": "Early limb buds on a chicken, pig and human embryo look alike. What do they become?",
   "options": [
    "a wing, a leg and an arm",
    "three identical wings for flying",
    "gills",
    "tails"
   ],
   "answer": 0,
   "hint": "Same start, different adult parts.",
   "explain": "Similar limb buds develop into very different limbs, another pattern hidden in adults.",
   "es": {
    "prompt": "Los esbozos de extremidades de un embrión de pollo, de cerdo y de humano se parecen. ¿En qué se convierten?",
    "options": [
     "en un ala, una pata y un brazo",
     "en tres alas idénticas para volar",
     "en branquias",
     "en colas"
    ],
    "hint": "El mismo comienzo, partes adultas distintas.",
    "explain": "Esbozos parecidos se convierten en extremidades muy distintas, otro patrón escondido en los adultos.",
    "figure": {
     "type": "embryos",
     "labels": [
      "Pez",
      "Pollo",
      "Cerdo",
      "Humano"
     ],
     "rows": [
      "Temprano",
      "Después"
     ],
     "alt": "Dibujos de embriones de pez, pollo, cerdo y humano, tempranos y más avanzados"
    }
   },
   "figure": {
    "type": "embryos",
    "labels": [
     "Fish",
     "Chicken",
     "Pig",
     "Human"
    ],
    "rows": [
     "Early",
     "Later"
    ],
    "alt": "Drawings of fish, chicken, pig and human embryos, early and later"
   }
  },
  {
   "id": "ms6q27",
   "code": "3.1.6-8.S",
   "prompt": "During the 1977 drought, finches with deep, strong beaks survived better. Why?",
   "options": [
    "They could crack the hard seeds that were left.",
    "They could fly to another continent to find food.",
    "Their beaks made rain.",
    "They needed no food."
   ],
   "answer": 0,
   "hint": "What food was left?",
   "explain": "In that specific environment, a deep beak let birds eat the only seeds left, so they survived more often.",
   "es": {
    "prompt": "Durante la sequía de 1977, los pinzones con picos gruesos y fuertes sobrevivieron mejor. ¿Por qué?",
    "options": [
     "Podían abrir las semillas duras que quedaban.",
     "Podían volar a otro continente para buscar alimento.",
     "Sus picos hacían llover.",
     "No necesitaban alimento."
    ],
    "hint": "¿Qué alimento quedaba?",
    "explain": "En ese ambiente específico, un pico grueso permitía comer las únicas semillas que quedaban, así que sobrevivían más."
   }
  },
  {
   "id": "ms6q28",
   "code": "3.1.6-8.S",
   "prompt": "What does VARIATION in a population mean?",
   "options": [
    "Individuals of a species have different traits.",
    "Every individual is identical.",
    "The population lives in many very different places.",
    "The species is extinct."
   ],
   "answer": 0,
   "hint": "Not all individuals are the same.",
   "explain": "Variation means differences, like some finches having deeper beaks than others.",
   "es": {
    "prompt": "¿Qué significa VARIACIÓN en una población?",
    "options": [
     "Que los individuos de una especie tienen rasgos distintos.",
     "Que todos los individuos son idénticos.",
     "Que la población vive en muchos lugares muy distintos.",
     "Que la especie está extinta."
    ],
    "hint": "No todos los individuos son iguales.",
    "explain": "Variación significa diferencias, como que algunos pinzones tengan picos más gruesos que otros."
   }
  },
  {
   "id": "ms6q29",
   "code": "3.1.6-8.S",
   "prompt": "Why must a helpful trait be INHERITED for it to become common in later generations?",
   "options": [
    "Only inherited traits are passed to offspring.",
    "Inherited traits cannot change survival.",
    "Learned tricks are passed to chicks in their genes.",
    "Traits are never passed on."
   ],
   "answer": 0,
   "hint": "Think about what the chicks receive.",
   "explain": "Survivors pass their inherited traits, like beak size, to their offspring through genes.",
   "es": {
    "prompt": "¿Por qué un rasgo útil debe ser HEREDADO para volverse común en las generaciones siguientes?",
    "options": [
     "Solo los rasgos heredados pasan a las crías.",
     "Los rasgos heredados no pueden cambiar la supervivencia.",
     "Los trucos aprendidos pasan a los polluelos en sus genes.",
     "Los rasgos nunca pasan a las crías."
    ],
    "hint": "Piensa en lo que reciben los polluelos.",
    "explain": "Los sobrevivientes pasan sus rasgos heredados, como el tamaño del pico, a sus crías por medio de los genes."
   }
  },
  {
   "id": "ms6q30",
   "code": "3.1.6-8.S",
   "prompt": "After many very wet years with lots of small, soft seeds, which finches would likely do well?",
   "options": [
    "finches with smaller beaks",
    "only finches with the very largest beaks",
    "no finches at all",
    "finches with no beaks"
   ],
   "answer": 0,
   "hint": "The environment changed again.",
   "explain": "With soft seeds plentiful, smaller beaks work well. Whether a trait helps depends on the specific environment.",
   "es": {
    "prompt": "Después de muchos años muy lluviosos con muchas semillas pequeñas y blandas, ¿qué pinzones probablemente tendrían éxito?",
    "options": [
     "los pinzones de pico más pequeño",
     "solo los pinzones de pico más grande",
     "ningún pinzón",
     "pinzones sin pico"
    ],
    "hint": "El ambiente volvió a cambiar.",
    "explain": "Con muchas semillas blandas, los picos pequeños funcionan bien. Que un rasgo ayude depende del ambiente específico."
   }
  },
  {
   "id": "ms6q31",
   "code": "3.1.6-8.S",
   "prompt": "A white snowshoe hare is safe in the snow but easy to spot on brown ground. What does this show?",
   "options": [
    "A trait can help in one environment, hurt in another.",
    "White fur always helps a hare stay hidden.",
    "Hares do not have any predators they need to hide from.",
    "Fur color is not passed from parents to their young."
   ],
   "answer": 0,
   "hint": "Same trait, different environments.",
   "explain": "Camouflage helps only when it matches the surroundings: the specific environment matters.",
   "es": {
    "prompt": "Una liebre blanca está a salvo en la nieve, pero se ve fácilmente en el suelo café. ¿Qué muestra esto?",
    "options": [
     "Que un rasgo puede ayudar en un ambiente y perjudicar en otro.",
     "Que el pelaje blanco siempre ayuda a la liebre a esconderse.",
     "Que las liebres no tienen depredadores de los que tengan que esconderse.",
     "Que el color del pelaje no pasa de los padres a sus crías."
    ],
    "hint": "El mismo rasgo, ambientes distintos.",
    "explain": "El camuflaje ayuda solo cuando encaja con el entorno: el ambiente específico importa."
   }
  },
  {
   "id": "ms6q32",
   "code": "3.1.6-8.S",
   "prompt": "Which statement BEST describes what happened to the finches in the drought?",
   "options": [
    "Finches with helpful variations survived and reproduced more.",
    "Each finch grew a bigger beak by trying hard to crack the seeds.",
    "All the finches died.",
    "The finches chose to change their own genes to survive."
   ],
   "answer": 0,
   "hint": "Individuals do not change their genes.",
   "explain": "Natural selection acts on variation that already exists: some individuals survive and reproduce more.",
   "es": {
    "prompt": "¿Qué afirmación describe MEJOR lo que les pasó a los pinzones en la sequía?",
    "options": [
     "Los pinzones con variaciones útiles sobrevivieron y se reprodujeron más.",
     "A cada pinzón le creció un pico más grande por esforzarse en abrir las semillas.",
     "Todos los pinzones murieron.",
     "Los pinzones eligieron cambiar sus propios genes para sobrevivir."
    ],
    "hint": "Los individuos no cambian sus genes.",
    "explain": "La selección natural actúa sobre la variación que ya existe: algunos individuos sobreviven y se reproducen más."
   }
  },
  {
   "id": "ms6q33",
   "code": "3.1.6-8.S",
   "prompt": "Why did the next generation of finches have deeper beaks on average?",
   "options": [
    "Deep-beaked survivors passed the trait to their chicks.",
    "The chicks ate harder seeds while still inside the egg.",
    "The parents stretched their beaks and passed that on.",
    "Rain makes beaks deeper."
   ],
   "answer": 0,
   "hint": "Inheritance links survivors to the next generation.",
   "explain": "More deep-beaked birds reproduced, so more chicks inherited deep beaks.",
   "es": {
    "prompt": "¿Por qué la siguiente generación de pinzones tuvo, en promedio, picos más gruesos?",
    "options": [
     "Los sobrevivientes de pico grueso pasaron el rasgo a sus polluelos.",
     "Los polluelos comieron semillas más duras mientras estaban dentro del huevo.",
     "Los padres estiraron sus picos y les pasaron eso a sus crías.",
     "La lluvia hace más gruesos los picos."
    ],
    "hint": "La herencia une a los sobrevivientes con la siguiente generación.",
    "explain": "Se reprodujeron más aves de pico grueso, así que más polluelos heredaron picos gruesos."
   }
  },
  {
   "id": "ms6q34",
   "code": "3.1.6-8.S",
   "prompt": "Which word describes a trait that helps an individual survive better than others in its environment?",
   "options": [
    "advantage",
    "extinction",
    "fossil",
    "embryo"
   ],
   "answer": 0,
   "hint": "It gives a head start.",
   "explain": "A trait that improves survival or reproduction in an environment is an advantage.",
   "es": {
    "prompt": "¿Qué palabra describe un rasgo que ayuda a un individuo a sobrevivir mejor que otros en su ambiente?",
    "options": [
     "ventaja",
     "extinción",
     "fósil",
     "embrión"
    ],
    "hint": "Da una ventaja de salida.",
    "explain": "Un rasgo que mejora la supervivencia o la reproducción en un ambiente es una ventaja."
   }
  },
  {
   "id": "ms6q35",
   "code": "3.1.6-8.S",
   "prompt": "Some bacteria have a variation that lets them survive an antibiotic. When the antibiotic is used, what happens?",
   "options": [
    "The resistant bacteria survive and multiply.",
    "All bacteria survive equally well.",
    "The resistant bacteria die before the others.",
    "The antibiotic creates new kinds of bacteria."
   ],
   "answer": 0,
   "hint": "Which individuals survive?",
   "explain": "The variation is an advantage in that environment, so resistant bacteria survive and reproduce.",
   "es": {
    "prompt": "Algunas bacterias tienen una variación que les permite sobrevivir a un antibiótico. Cuando se usa el antibiótico, ¿qué pasa?",
    "options": [
     "Las bacterias resistentes sobreviven y se multiplican.",
     "Todas las bacterias sobreviven igual de bien.",
     "Las bacterias resistentes mueren antes que las demás.",
     "El antibiótico crea nuevos tipos de bacterias."
    ],
    "hint": "¿Qué individuos sobreviven?",
    "explain": "La variación es una ventaja en ese ambiente, así que las bacterias resistentes sobreviven y se reproducen."
   }
  },
  {
   "id": "ms6q36",
   "code": "3.1.6-8.S",
   "prompt": "What does NATURAL SELECTION act on?",
   "options": [
    "variations that already exist in a population",
    "changes that individuals choose to make in their bodies",
    "only rocks and fossils",
    "traits that are never inherited"
   ],
   "answer": 0,
   "hint": "It works with differences that are already there.",
   "explain": "Natural selection acts on existing inherited variation; it does not create traits on demand.",
   "es": {
    "prompt": "¿Sobre qué actúa la SELECCIÓN NATURAL?",
    "options": [
     "sobre las variaciones que ya existen en una población",
     "sobre los cambios que los individuos deciden hacer en su cuerpo",
     "solo sobre las rocas y los fósiles",
     "sobre rasgos que nunca se heredan"
    ],
    "hint": "Trabaja con las diferencias que ya están.",
    "explain": "La selección natural actúa sobre la variación heredada que ya existe; no crea rasgos a pedido."
   }
  },
  {
   "id": "ms6q37",
   "code": "3.1.6-8.T",
   "prompt": "The line graph shows dark moths on sooty bark. What happened to the dark trait?",
   "options": [
    "It increased over the generations.",
    "It decreased over the generations.",
    "It stayed about the same the whole time.",
    "It disappeared."
   ],
   "answer": 0,
   "hint": "Follow the line from left to right.",
   "explain": "The line rises from 5% to 77%: on sooty bark, natural selection increased the dark trait.",
   "es": {
    "prompt": "La gráfica de líneas muestra polillas oscuras sobre corteza con hollín. ¿Qué pasó con el rasgo oscuro?",
    "options": [
     "Aumentó con las generaciones.",
     "Disminuyó con las generaciones.",
     "Se quedó más o menos igual todo el tiempo.",
     "Desapareció."
    ],
    "hint": "Sigue la línea de izquierda a derecha.",
    "explain": "La línea sube de 5 % a 77 %: en la corteza con hollín, la selección natural aumentó el rasgo oscuro.",
    "figure": {
     "type": "line",
     "xmin": 0,
     "xmax": 12,
     "ymin": 0,
     "ymax": 100,
     "xticks": [
      0,
      4,
      8,
      12
     ],
     "yticks": [
      0,
      25,
      50,
      75,
      100
     ],
     "points": [
      [
       0,
       5
      ],
      [
       2,
       9
      ],
      [
       4,
       17
      ],
      [
       6,
       30
      ],
      [
       8,
       46
      ],
      [
       10,
       63
      ],
      [
       12,
       77
      ]
     ],
     "xlabel": "Generación",
     "ylabel": "Polillas oscuras (%)"
    }
   },
   "figure": {
    "type": "line",
    "xmin": 0,
    "xmax": 12,
    "ymin": 0,
    "ymax": 100,
    "xticks": [
     0,
     4,
     8,
     12
    ],
    "yticks": [
     0,
     25,
     50,
     75,
     100
    ],
    "points": [
     [
      0,
      5
     ],
     [
      2,
      9
     ],
     [
      4,
      17
     ],
     [
      6,
      30
     ],
     [
      8,
      46
     ],
     [
      10,
      63
     ],
     [
      12,
      77
     ]
    ],
    "xlabel": "Generation",
    "ylabel": "Dark moths (%)"
   }
  },
  {
   "id": "ms6q38",
   "code": "3.1.6-8.T",
   "prompt": "This graph shows dark moths after the air was cleaned. About what percent were dark at generation 12?",
   "options": [
    "about 12%",
    "about 50%",
    "about 90%",
    "100%"
   ],
   "answer": 0,
   "hint": "Read the last point.",
   "explain": "The last point is near 12%. The dark trait decreased because light bark made dark moths easy to see.",
   "es": {
    "prompt": "Esta gráfica muestra las polillas oscuras después de que se limpió el aire. ¿Más o menos qué porcentaje eran oscuras en la generación 12?",
    "options": [
     "cerca del 12 %",
     "cerca del 50 %",
     "cerca del 90 %",
     "el 100 %"
    ],
    "hint": "Lee el último punto.",
    "explain": "El último punto está cerca del 12 %. El rasgo oscuro disminuyó porque la corteza clara hacía fácil ver a las polillas oscuras.",
    "figure": {
     "type": "line",
     "xmin": 0,
     "xmax": 12,
     "ymin": 0,
     "ymax": 100,
     "xticks": [
      0,
      4,
      8,
      12
     ],
     "yticks": [
      0,
      25,
      50,
      75,
      100
     ],
     "points": [
      [
       0,
       90
      ],
      [
       2,
       82
      ],
      [
       4,
       69
      ],
      [
       6,
       53
      ],
      [
       8,
       36
      ],
      [
       10,
       22
      ],
      [
       12,
       12
      ]
     ],
     "xlabel": "Generación",
     "ylabel": "Polillas oscuras (%)"
    }
   },
   "figure": {
    "type": "line",
    "xmin": 0,
    "xmax": 12,
    "ymin": 0,
    "ymax": 100,
    "xticks": [
     0,
     4,
     8,
     12
    ],
    "yticks": [
     0,
     25,
     50,
     75,
     100
    ],
    "points": [
     [
      0,
      90
     ],
     [
      2,
      82
     ],
     [
      4,
      69
     ],
     [
      6,
      53
     ],
     [
      8,
      36
     ],
     [
      10,
      22
     ],
     [
      12,
      12
     ]
    ],
    "xlabel": "Generation",
    "ylabel": "Dark moths (%)"
   }
  },
  {
   "id": "ms6q39",
   "code": "3.1.6-8.T",
   "prompt": "In a group of 200 moths, 50 are dark. What percent are dark?",
   "options": [
    "25%",
    "50%",
    "75%",
    "200%"
   ],
   "answer": 0,
   "hint": "Divide 50 by 200, then multiply by 100.",
   "explain": "50 ÷ 200 = 0.25, which is 25%.",
   "es": {
    "prompt": "En un grupo de 200 polillas, 50 son oscuras. ¿Qué porcentaje son oscuras?",
    "options": [
     "25 %",
     "50 %",
     "75 %",
     "200 %"
    ],
    "hint": "Divide 50 entre 200 y multiplica por 100.",
    "explain": "50 ÷ 200 = 0.25, que es el 25 %."
   }
  },
  {
   "id": "ms6q40",
   "code": "3.1.6-8.T",
   "prompt": "Why do scientists use PERCENTS to compare moth populations from different years?",
   "options": [
    "Percents let groups of different sizes be compared.",
    "Percents are always bigger numbers than the raw counts.",
    "Moths cannot be counted.",
    "Percents hide the data from other scientists."
   ],
   "answer": 0,
   "hint": "Think about 30 out of 100 vs. 30 out of 1,000.",
   "explain": "A percent is a part out of 100, so groups of different sizes can be compared fairly.",
   "es": {
    "prompt": "¿Por qué los científicos usan PORCENTAJES para comparar poblaciones de polillas de años distintos?",
    "options": [
     "Los porcentajes permiten comparar grupos de distintos tamaños.",
     "Los porcentajes siempre son números más grandes que los conteos originales.",
     "Las polillas no se pueden contar.",
     "Los porcentajes les esconden los datos a otros científicos."
    ],
    "hint": "Piensa en 30 de cada 100 contra 30 de cada 1,000.",
    "explain": "Un porcentaje es una parte de cada 100, así que se pueden comparar de forma justa grupos de distintos tamaños."
   }
  },
  {
   "id": "ms6q41",
   "code": "3.1.6-8.T",
   "prompt": "The graph shows bacteria while an antibiotic is used. What does the rising line show?",
   "options": [
    "The resistance trait increased over the generations.",
    "The resistance trait decreased over the generations.",
    "The bacteria all died from the antibiotic.",
    "Nothing changed."
   ],
   "answer": 0,
   "hint": "Does the line go up or down?",
   "explain": "The share of resistant bacteria rose from 2% to 95%: natural selection increased the trait.",
   "es": {
    "prompt": "La gráfica muestra bacterias mientras se usa un antibiótico. ¿Qué muestra la línea que sube?",
    "options": [
     "Que el rasgo de resistencia aumentó con las generaciones.",
     "Que el rasgo de resistencia disminuyó con las generaciones.",
     "Que todas las bacterias murieron por el antibiótico.",
     "Que no cambió nada."
    ],
    "hint": "¿La línea sube o baja?",
    "explain": "La proporción de bacterias resistentes subió de 2 % a 95 %: la selección natural aumentó el rasgo.",
    "figure": {
     "type": "line",
     "xmin": 0,
     "xmax": 5,
     "ymin": 0,
     "ymax": 100,
     "xticks": [
      0,
      1,
      2,
      3,
      4,
      5
     ],
     "yticks": [
      0,
      25,
      50,
      75,
      100
     ],
     "points": [
      [
       0,
       2
      ],
      [
       1,
       8
      ],
      [
       2,
       26
      ],
      [
       3,
       58
      ],
      [
       4,
       85
      ],
      [
       5,
       95
      ]
     ],
     "xlabel": "Generación de bacterias",
     "ylabel": "Bacterias resistentes (%)"
    }
   },
   "figure": {
    "type": "line",
    "xmin": 0,
    "xmax": 5,
    "ymin": 0,
    "ymax": 100,
    "xticks": [
     0,
     1,
     2,
     3,
     4,
     5
    ],
    "yticks": [
     0,
     25,
     50,
     75,
     100
    ],
    "points": [
     [
      0,
      2
     ],
     [
      1,
      8
     ],
     [
      2,
      26
     ],
     [
      3,
      58
     ],
     [
      4,
      85
     ],
     [
      5,
      95
     ]
    ],
    "xlabel": "Generation of bacteria",
    "ylabel": "Resistant bacteria (%)"
   },
   "tags": [
    "boss",
    "boss6"
   ]
  },
  {
   "id": "ms6q42",
   "code": "3.1.6-8.T",
   "prompt": "This graph shows striped beetles over 12 generations. What does the nearly FLAT line suggest?",
   "options": [
    "Stripes give no clear advantage or disadvantage.",
    "Stripes are increasing fast over the generations.",
    "Stripes are decreasing fast over the generations.",
    "The beetles went extinct."
   ],
   "answer": 0,
   "hint": "A flat line means little change.",
   "explain": "The share stays near 40%, so natural selection is not clearly favoring or acting against the trait here.",
   "es": {
    "prompt": "Esta gráfica muestra escarabajos con rayas durante 12 generaciones. ¿Qué sugiere la línea casi PLANA?",
    "options": [
     "Que las rayas no dan una ventaja ni una desventaja clara.",
     "Que las rayas aumentan rápido con las generaciones.",
     "Que las rayas disminuyen rápido con las generaciones.",
     "Que los escarabajos se extinguieron."
    ],
    "hint": "Una línea plana significa poco cambio.",
    "explain": "La proporción se queda cerca del 40 %, así que la selección natural no favorece ni actúa claramente contra el rasgo aquí.",
    "figure": {
     "type": "line",
     "xmin": 0,
     "xmax": 12,
     "ymin": 0,
     "ymax": 100,
     "xticks": [
      0,
      3,
      6,
      9,
      12
     ],
     "yticks": [
      0,
      25,
      50,
      75,
      100
     ],
     "points": [
      [
       0,
       40
      ],
      [
       3,
       41
      ],
      [
       6,
       39
      ],
      [
       9,
       40
      ],
      [
       12,
       40
      ]
     ],
     "xlabel": "Generación",
     "ylabel": "Escarabajos con rayas (%)"
    }
   },
   "figure": {
    "type": "line",
    "xmin": 0,
    "xmax": 12,
    "ymin": 0,
    "ymax": 100,
    "xticks": [
     0,
     3,
     6,
     9,
     12
    ],
    "yticks": [
     0,
     25,
     50,
     75,
     100
    ],
    "points": [
     [
      0,
      40
     ],
     [
      3,
      41
     ],
     [
      6,
      39
     ],
     [
      9,
      40
     ],
     [
      12,
      40
     ]
    ],
    "xlabel": "Generation",
    "ylabel": "Beetles with stripes (%)"
   },
   "tags": [
    "boss",
    "boss6"
   ]
  },
  {
   "id": "ms6q43",
   "code": "3.1.6-8.T",
   "prompt": "Dark moths went from 2% to 95% of the population. By how many percentage points did the dark trait increase?",
   "options": [
    "93",
    "97",
    "47",
    "2"
   ],
   "answer": 0,
   "hint": "Subtract the smaller number from the bigger one.",
   "explain": "95 − 2 = 93 percentage points.",
   "es": {
    "prompt": "Las polillas oscuras pasaron del 2 % al 95 % de la población. ¿Cuántos puntos porcentuales aumentó el rasgo oscuro?",
    "options": [
     "93",
     "97",
     "47",
     "2"
    ],
    "hint": "Resta el número menor del mayor.",
    "explain": "95 − 2 = 93 puntos porcentuales."
   },
   "tags": [
    "boss",
    "boss6"
   ]
  },
  {
   "id": "ms6q44",
   "code": "3.1.6-8.T",
   "prompt": "On this graph, between which generations did the dark trait rise the FASTEST?",
   "options": [
    "between generations 6 and 10",
    "between generations 0 and 2",
    "between generations 10 and 12",
    "it never rose"
   ],
   "answer": 0,
   "hint": "Look for the steepest part of the line.",
   "explain": "The line is steepest in the middle: from about 30% to 63% between generations 6 and 10.",
   "es": {
    "prompt": "En esta gráfica, ¿entre qué generaciones subió MÁS RÁPIDO el rasgo oscuro?",
    "options": [
     "entre las generaciones 6 y 10",
     "entre las generaciones 0 y 2",
     "entre las generaciones 10 y 12",
     "nunca subió"
    ],
    "hint": "Busca la parte más inclinada de la línea.",
    "explain": "La línea es más inclinada en el medio: de cerca del 30 % a 63 % entre las generaciones 6 y 10.",
    "figure": {
     "type": "line",
     "xmin": 0,
     "xmax": 12,
     "ymin": 0,
     "ymax": 100,
     "xticks": [
      0,
      4,
      8,
      12
     ],
     "yticks": [
      0,
      25,
      50,
      75,
      100
     ],
     "points": [
      [
       0,
       5
      ],
      [
       2,
       9
      ],
      [
       4,
       17
      ],
      [
       6,
       30
      ],
      [
       8,
       46
      ],
      [
       10,
       63
      ],
      [
       12,
       77
      ]
     ],
     "xlabel": "Generación",
     "ylabel": "Polillas oscuras (%)"
    }
   },
   "figure": {
    "type": "line",
    "xmin": 0,
    "xmax": 12,
    "ymin": 0,
    "ymax": 100,
    "xticks": [
     0,
     4,
     8,
     12
    ],
    "yticks": [
     0,
     25,
     50,
     75,
     100
    ],
    "points": [
     [
      0,
      5
     ],
     [
      2,
      9
     ],
     [
      4,
      17
     ],
     [
      6,
      30
     ],
     [
      8,
      46
     ],
     [
      10,
      63
     ],
     [
      12,
      77
     ]
    ],
    "xlabel": "Generation",
    "ylabel": "Dark moths (%)"
   },
   "tags": [
    "boss",
    "boss6"
   ]
  },
  {
   "id": "ms6q45",
   "code": "3.1.6-8.T",
   "prompt": "A trait is in 10% of a population. Each generation, its carriers survive better. Which prediction fits natural selection?",
   "options": [
    "The percent with the trait rises over many generations.",
    "The percent drops to zero right away.",
    "The percent stays at exactly 10% forever.",
    "Every individual gets the trait in just one generation."
   ],
   "answer": 0,
   "hint": "Better survival means more offspring with the trait.",
   "explain": "Carriers leave more offspring, so the trait’s share grows, generation after generation.",
   "es": {
    "prompt": "Un rasgo está en el 10 % de una población. Cada generación, quienes lo tienen sobreviven mejor. ¿Qué predicción concuerda con la selección natural?",
    "options": [
     "El porcentaje con el rasgo sube a lo largo de muchas generaciones.",
     "El porcentaje baja a cero de inmediato.",
     "El porcentaje se queda exactamente en 10 % para siempre.",
     "Todos los individuos reciben el rasgo en una sola generación."
    ],
    "hint": "Mejor supervivencia significa más crías con el rasgo.",
    "explain": "Quienes lo tienen dejan más crías, así que la proporción del rasgo crece generación tras generación."
   },
   "tags": [
    "boss",
    "boss6"
   ]
  },
  {
   "id": "ms6q46",
   "code": "3.1.6-8.T",
   "prompt": "Which graph shape shows a trait DECREASING because of natural selection?",
   "options": [
    "a line that slopes downward over the generations",
    "a line that slopes upward over the generations",
    "a perfectly flat line",
    "a line that zigzags with no pattern"
   ],
   "answer": 0,
   "hint": "Decrease = going down.",
   "explain": "A downward slope means the share of individuals with the trait is shrinking over time.",
   "es": {
    "prompt": "¿Qué forma de gráfica muestra que un rasgo DISMINUYE por la selección natural?",
    "options": [
     "una línea que baja a lo largo de las generaciones",
     "una línea que sube a lo largo de las generaciones",
     "una línea perfectamente plana",
     "una línea en zigzag sin patrón"
    ],
    "hint": "Disminuir = bajar.",
    "explain": "Una línea que baja significa que la proporción de individuos con el rasgo se reduce con el tiempo."
   },
   "tags": [
    "boss",
    "boss6"
   ]
  },
  {
   "id": "ms6q47",
   "code": "3.1.6-8.T",
   "prompt": "In one generation, 20 of 100 moths are dark. In the next generation, 30 of 100 are dark. What happened to the dark trait?",
   "options": [
    "It increased by 10 percentage points.",
    "It decreased by 10 percentage points.",
    "It stayed the same.",
    "It increased by 50 percentage points."
   ],
   "answer": 0,
   "hint": "Compare 20% with 30%.",
   "explain": "20% became 30%: an increase of 10 percentage points in one generation.",
   "es": {
    "prompt": "En una generación, 20 de 100 polillas son oscuras. En la siguiente generación, 30 de 100 son oscuras. ¿Qué pasó con el rasgo oscuro?",
    "options": [
     "Aumentó 10 puntos porcentuales.",
     "Disminuyó 10 puntos porcentuales.",
     "Se quedó igual.",
     "Aumentó 50 puntos porcentuales."
    ],
    "hint": "Compara 20 % con 30 %.",
    "explain": "El 20 % pasó a ser 30 %: un aumento de 10 puntos porcentuales en una generación."
   }
  },
  {
   "id": "ms6q48",
   "code": "3.1.6-8.O",
   "prompt": "Today, a river lays down about 1 centimeter of mud each year. A canyon has a 30-centimeter layer of the same kind of mud. If natural laws worked the same in the past, about how long did that layer take to form?",
   "options": [
    "about 30 years",
    "about 1 year",
    "about 3 years",
    "about 300 years"
   ],
   "answer": 0,
   "hint": "Divide the thickness by how much forms each year.",
   "explain": "30 cm ÷ 1 cm per year = about 30 years. Scientists use processes they can watch today to read rocks from the past.",
   "es": {
    "prompt": "Hoy un río deposita más o menos 1 centímetro de lodo cada año. Un cañón tiene una capa de 30 centímetros del mismo tipo de lodo. Si las leyes naturales funcionaban igual en el pasado, ¿cuánto tardó más o menos en formarse esa capa?",
    "options": [
     "unos 30 años",
     "más o menos 1 año",
     "unos 3 años",
     "unos 300 años"
    ],
    "hint": "Divide el grosor entre lo que se forma cada año.",
    "explain": "30 cm ÷ 1 cm por año = unos 30 años. Los científicos usan procesos que pueden observar hoy para leer las rocas del pasado."
   }
  }
 ],
 "pairs": [
  {
   "name": "Older or younger layer?",
   "explain": "Deeper layers are older; layers near the top are younger.",
   "members": [
    {
     "label": "Older",
     "level": "6-1",
     "ids": [
      "ms6q01",
      "ms6q08"
     ]
    },
    {
     "label": "Extinct",
     "level": "6-1",
     "ids": [
      "ms6q02",
      "ms6q06"
     ]
    }
   ],
   "es": {
    "name": "¿Capa más antigua o más joven?",
    "explain": "Las capas más profundas son más antiguas; las de cerca de la superficie son más jóvenes."
   }
  },
  {
   "name": "Similarity or difference?",
   "explain": "Similarities (like the same bones) show relationships. Differences (like losing back legs) show change.",
   "members": [
    {
     "label": "Similarity",
     "level": "6-2",
     "ids": [
      "ms6q14",
      "ms6q16"
     ]
    },
    {
     "label": "Difference",
     "level": "6-2",
     "ids": [
      "ms6q15"
     ]
    }
   ],
   "es": {
    "name": "¿Semejanza o diferencia?",
    "explain": "Las semejanzas (como los mismos huesos) muestran parentescos. Las diferencias (como perder las patas traseras) muestran cambio."
   }
  },
  {
   "name": "Increase or decrease?",
   "explain": "A rising line shows a trait increasing; a falling line shows it decreasing.",
   "members": [
    {
     "label": "Increase",
     "level": "6-5",
     "ids": [
      "ms6q37"
     ]
    },
    {
     "label": "Decrease",
     "level": "6-5",
     "ids": [
      "ms6q38"
     ]
    }
   ],
   "es": {
    "name": "¿Aumenta o disminuye?",
    "explain": "Una línea que sube muestra que un rasgo aumenta; una que baja muestra que disminuye."
   }
  }
 ],
 "become": [
  {
   "id": "b6-finch",
   "code": "3.1.6-8.S",
   "you": "a medium ground finch with a deep, strong beak, in the 1977 drought",
   "short": "🐦",
   "color": "#4a3a2a",
   "goal": "The small, soft seeds are gone. Find food so you can survive and raise chicks!",
   "doors": [
    {
     "kind": "lipid",
     "label": "Crack open the big, hard caltrop seeds",
     "ok": true,
     "es": {
      "label": "Abre las semillas de abrojo, grandes y duras"
     }
    },
    {
     "kind": "protein",
     "label": "Wait for the rain to bring soft seeds back",
     "ok": false,
     "es": {
      "label": "Espera a que la lluvia traiga de nuevo semillas blandas",
      "why": "La sequía duró muchos meses. Esperar significaría morir de hambre."
     },
     "why": "The drought lasted many months. Waiting would mean starving."
    },
    {
     "kind": "pump",
     "label": "Fly across the ocean to the mainland",
     "ok": false,
     "es": {
      "label": "Vuela sobre el océano hasta el continente",
      "why": "El continente está a unos 1,000 km. Un pinzón pequeño no puede hacer ese viaje."
     },
     "why": "The mainland is about 1,000 km away. A small finch cannot make that trip."
    }
   ],
   "explain": "Your deep beak, an inherited variation, let you eat when others could not. You are more likely to survive, reproduce and pass that beak to your chicks.",
   "es": {
    "you": "un pinzón terrestre mediano con pico grueso y fuerte, en la sequía de 1977",
    "goal": "Las semillas pequeñas y blandas se acabaron. ¡Encuentra alimento para sobrevivir y criar polluelos!",
    "explain": "Tu pico grueso, una variación heredada, te permitió comer cuando otros no podían. Tienes más probabilidad de sobrevivir, reproducirte y pasar ese pico a tus polluelos."
   }
  },
  {
   "id": "b6-embryo",
   "code": "3.1.6-8.Q",
   "you": "an early human embryo, about five weeks old",
   "short": "•",
   "color": "#ffc0a0",
   "goal": "Which features do you share with an early fish embryo?",
   "doors": [
    {
     "kind": "lipid",
     "label": "Gill pouches in the neck and a tail",
     "ok": true,
     "es": {
      "label": "Bolsas branquiales en el cuello y una cola"
     }
    },
    {
     "kind": "protein",
     "label": "Feathers and a beak",
     "ok": false,
     "es": {
      "label": "Plumas y pico",
      "why": "Las plumas y el pico solo les salen a las aves, y más tarde en el desarrollo."
     },
     "why": "Feathers and beaks grow only in birds, and only later in development."
    },
    {
     "kind": "pump",
     "label": "Scales and working gills",
     "ok": false,
     "es": {
      "label": "Escamas y branquias que funcionan",
      "why": "Solo a los peces les salen escamas y branquias que funcionan. Al principio, los dos embriones solo tienen bolsas branquiales."
     },
     "why": "Only fish grow scales and working gills. Early on, both embryos just have gill pouches."
    }
   ],
   "explain": "Early embryos of very different animals share gill pouches and a tail. These similarities, hidden in the adults, are evidence that the animals are related.",
   "es": {
    "you": "un embrión humano temprano, de unas cinco semanas",
    "goal": "¿Qué características compartes con un embrión temprano de pez?",
    "explain": "Los embriones tempranos de animales muy distintos comparten bolsas branquiales y una cola. Estas semejanzas, escondidas en los adultos, son evidencia de que los animales están emparentados."
   }
  }
 ],
 "data": [
  {
   "id": "d6-trilo",
   "code": "3.1.6-8.O",
   "title": "Trilobite fossils found in each rock layer",
   "xlabel": "Layer (1 = top, youngest)",
   "ylabel": "Trilobite fossils found",
   "categories": [
    "Layer 1",
    "Layer 2",
    "Layer 3",
    "Layer 4",
    "Layer 5"
   ],
   "values": [
    0,
    0,
    0,
    12,
    40
   ],
   "questions": [
    {
     "prompt": "In which layer were trilobites MOST common?",
     "answer": 4,
     "hint": "Find the tallest bar.",
     "explain": "Layer 5, the deepest and oldest layer. Trilobites were common in ancient seas.",
     "es": {
      "prompt": "¿En qué capa eran MÁS comunes los trilobites?",
      "hint": "Busca la barra más alta.",
      "explain": "En la capa 5, la más profunda y antigua. Los trilobites eran comunes en los mares antiguos."
     }
    },
    {
     "prompt": "Which is the YOUNGEST layer that still has trilobite fossils?",
     "answer": 3,
     "hint": "Above it, there are none at all.",
     "explain": "Layer 4. No layer above it has trilobites, which is evidence that they went extinct before those layers formed.",
     "es": {
      "prompt": "¿Cuál es la capa MÁS JOVEN que todavía tiene fósiles de trilobites?",
      "hint": "Encima de ella no hay ninguno.",
      "explain": "La capa 4. Ninguna capa de arriba tiene trilobites, lo que es evidencia de que se extinguieron antes de que se formaran esas capas."
     }
    }
   ],
   "es": {
    "title": "Fósiles de trilobites encontrados en cada capa de roca",
    "xlabel": "Capa (1 = arriba, la más joven)",
    "ylabel": "Fósiles de trilobites encontrados",
    "categories": [
     "Capa 1",
     "Capa 2",
     "Capa 3",
     "Capa 4",
     "Capa 5"
    ]
   }
  },
  {
   "id": "d6-kinds",
   "code": "3.1.6-8.O",
   "title": "Different kinds of fossils found in each layer",
   "xlabel": "Layer (1 = top, youngest)",
   "ylabel": "Kinds of fossils",
   "categories": [
    "Layer 1",
    "Layer 2",
    "Layer 3",
    "Layer 4",
    "Layer 5"
   ],
   "values": [
    24,
    18,
    20,
    9,
    6
   ],
   "questions": [
    {
     "prompt": "Which layer shows the GREATEST diversity of fossils?",
     "answer": 0,
     "hint": "Diversity means the most different kinds.",
     "explain": "Layer 1, the youngest, has the most kinds. In this dig, diversity is lowest in the oldest layers.",
     "es": {
      "prompt": "¿Qué capa muestra la MAYOR diversidad de fósiles?",
      "hint": "Diversidad significa la mayor cantidad de tipos distintos.",
      "explain": "La capa 1, la más joven, tiene más tipos. En esta excavación, la diversidad es menor en las capas más antiguas."
     }
    },
    {
     "prompt": "Which layer, the OLDEST one here, has the fewest kinds of fossils?",
     "answer": 4,
     "hint": "Find the shortest bar.",
     "explain": "Layer 5 has only 6 kinds. Many groups of living things appear for the first time in younger layers.",
     "es": {
      "prompt": "¿Qué capa, la MÁS ANTIGUA de aquí, tiene menos tipos de fósiles?",
      "hint": "Busca la barra más baja.",
      "explain": "La capa 5 solo tiene 6 tipos. Muchos grupos de seres vivos aparecen por primera vez en capas más jóvenes."
     }
    }
   ],
   "es": {
    "title": "Tipos distintos de fósiles encontrados en cada capa",
    "xlabel": "Capa (1 = arriba, la más joven)",
    "ylabel": "Tipos de fósiles",
    "categories": [
     "Capa 1",
     "Capa 2",
     "Capa 3",
     "Capa 4",
     "Capa 5"
    ]
   }
  },
  {
   "id": "d6-legs",
   "code": "3.1.6-8.P",
   "title": "Back leg length compared with body length",
   "xlabel": "Whale (oldest on the left)",
   "ylabel": "Back leg length (% of body)",
   "unit": "%",
   "categories": [
    "Pakicetus",
    "Ambulocetus",
    "Basilosaurus",
    "Modern whale"
   ],
   "values": [
    30,
    25,
    2,
    0
   ],
   "questions": [
    {
     "prompt": "Which whale had the LONGEST back legs compared with its body?",
     "answer": 0,
     "hint": "Find the tallest bar.",
     "explain": "Pakicetus, the oldest. It walked on land with four legs.",
     "es": {
      "prompt": "¿Qué ballena tenía las patas traseras MÁS largas en comparación con su cuerpo?",
      "hint": "Busca la barra más alta.",
      "explain": "Pakicetus, la más antigua. Caminaba en tierra con cuatro patas."
     }
    },
    {
     "prompt": "Which one had tiny, vestigial back legs that were too small to walk on?",
     "answer": 2,
     "hint": "Look for a very short bar that is not zero.",
     "explain": "Basilosaurus. Its legs were only about 2% of its body length. Modern whales have no back legs at all.",
     "es": {
      "prompt": "¿Cuál tenía patas traseras diminutas y vestigiales, demasiado pequeñas para caminar?",
      "hint": "Busca una barra muy baja que no sea cero.",
      "explain": "El basilosaurio. Sus patas medían solo un 2 % del largo de su cuerpo. Las ballenas modernas no tienen patas traseras."
     }
    }
   ],
   "es": {
    "title": "Largo de las patas traseras comparado con el largo del cuerpo",
    "xlabel": "Ballena (la más antigua a la izquierda)",
    "ylabel": "Largo de las patas traseras (% del cuerpo)",
    "categories": [
     "Pakicetus",
     "Ambulocetus",
     "Basilosaurio",
     "Ballena moderna"
    ]
   }
  },
  {
   "id": "d6-survive",
   "code": "3.1.6-8.S",
   "title": "Medium ground finches that survived the 1977 drought, by beak size",
   "xlabel": "Beak size",
   "ylabel": "Birds that survived (%)",
   "unit": "%",
   "categories": [
    "Small beak",
    "Medium beak",
    "Large beak"
   ],
   "values": [
    10,
    15,
    30
   ],
   "questions": [
    {
     "prompt": "Which birds had the HIGHEST survival?",
     "answer": 2,
     "hint": "Find the tallest bar.",
     "explain": "Birds with large beaks. They could crack the big, hard seeds that were left.",
     "es": {
      "prompt": "¿Qué aves tuvieron la MAYOR supervivencia?",
      "hint": "Busca la barra más alta.",
      "explain": "Las aves de pico grande. Podían abrir las semillas grandes y duras que quedaban."
     }
    },
    {
     "prompt": "Which birds were LEAST likely to survive?",
     "answer": 0,
     "hint": "Find the shortest bar.",
     "explain": "Birds with small beaks. In this specific environment, their trait was a disadvantage.",
     "es": {
      "prompt": "¿Qué aves tenían MENOS probabilidad de sobrevivir?",
      "hint": "Busca la barra más baja.",
      "explain": "Las aves de pico pequeño. En este ambiente específico, su rasgo era una desventaja."
     }
    }
   ],
   "es": {
    "title": "Pinzones terrestres medianos que sobrevivieron a la sequía de 1977, según el tamaño del pico",
    "xlabel": "Tamaño del pico",
    "ylabel": "Aves que sobrevivieron (%)",
    "categories": [
     "Pico pequeño",
     "Pico mediano",
     "Pico grande"
    ]
   }
  },
  {
   "id": "d6-depth",
   "code": "3.1.6-8.S",
   "title": "Average beak depth of the island’s medium ground finches",
   "xlabel": "Generation",
   "ylabel": "Average beak depth (millimeters)",
   "unit": " mm",
   "categories": [
    "Before the drought",
    "Their offspring, after"
   ],
   "values": [
    9.4,
    9.9
   ],
   "questions": [
    {
     "prompt": "Which generation had DEEPER beaks on average?",
     "answer": 1,
     "hint": "Find the taller bar.",
     "explain": "The offspring after the drought. The survivors had deep beaks and passed the trait to their chicks.",
     "es": {
      "prompt": "¿Qué generación tuvo picos más GRUESOS en promedio?",
      "hint": "Busca la barra más alta.",
      "explain": "Las crías después de la sequía. Los sobrevivientes tenían picos gruesos y pasaron el rasgo a sus polluelos."
     }
    },
    {
     "prompt": "Which bar shows the population BEFORE natural selection acted during the drought?",
     "answer": 0,
     "hint": "Look at the first bar.",
     "explain": "Before the drought, the average was 9.4 mm. One generation later it was 9.9 mm.",
     "es": {
      "prompt": "¿Qué barra muestra la población ANTES de que actuara la selección natural en la sequía?",
      "hint": "Mira la primera barra.",
      "explain": "Antes de la sequía, el promedio era de 9.4 mm. Una generación después era de 9.9 mm."
     }
    }
   ],
   "es": {
    "title": "Grosor promedio del pico de los pinzones terrestres medianos de la isla",
    "xlabel": "Generación",
    "ylabel": "Grosor promedio del pico (milímetros)",
    "categories": [
     "Antes de la sequía",
     "Sus crías, después"
    ]
   }
  },
  {
   "id": "d6-moths",
   "code": "3.1.6-8.T",
   "title": "Dark peppered moths near an English factory city",
   "xlabel": "Year",
   "ylabel": "Dark moths (%)",
   "unit": "%",
   "categories": [
    "1850",
    "1895",
    "1960",
    "1990",
    "2010"
   ],
   "values": [
    2,
    95,
    90,
    30,
    5
   ],
   "questions": [
    {
     "prompt": "In which year were dark moths MOST common?",
     "answer": 1,
     "hint": "Find the tallest bar.",
     "explain": "1895. Soot from factories had darkened the trees, so dark moths survived more often and the trait increased.",
     "es": {
      "prompt": "¿En qué año eran MÁS comunes las polillas oscuras?",
      "hint": "Busca la barra más alta.",
      "explain": "En 1895. El hollín de las fábricas había oscurecido los árboles, así que las polillas oscuras sobrevivieron más y el rasgo aumentó."
     }
    },
    {
     "prompt": "Clean air laws were passed in the 1950s. Which year shows that the dark trait had DECREASED the most?",
     "answer": 4,
     "hint": "Find the lowest bar after 1960.",
     "explain": "2010: only 5%. With clean, light bark, dark moths were eaten more often, so the trait decreased.",
     "es": {
      "prompt": "Las leyes de aire limpio se aprobaron en la década de 1950. ¿Qué año muestra que el rasgo oscuro había DISMINUIDO más?",
      "hint": "Busca la barra más baja después de 1960.",
      "explain": "En 2010: solo el 5 %. Con la corteza limpia y clara, se comían más polillas oscuras, así que el rasgo disminuyó."
     }
    }
   ],
   "es": {
    "title": "Polillas moteadas oscuras cerca de una ciudad industrial de Inglaterra",
    "xlabel": "Año",
    "ylabel": "Polillas oscuras (%)",
    "categories": [
     "1850",
     "1895",
     "1960",
     "1990",
     "2010"
    ]
   }
  }
 ],
 "mazes": [
  {
   "id": "maze6-whale",
   "code": "3.1.6-8.P",
   "title": "Walk back in time: go through the doorway for the next OLDER whale",
   "start": "Modern whale",
   "steps": [
    {
     "label": "Basilosaurus, 40 million years ago",
     "hint": "Which whale had tiny back legs it could not walk on?",
     "why": "Basilosaurus lived fully in water but still had tiny legs.",
     "es": {
      "label": "Basilosaurio, hace 40 millones de años",
      "hint": "¿Qué ballena tenía patas traseras diminutas con las que no podía caminar?",
      "why": "El basilosaurio vivía en el agua, pero todavía tenía patas diminutas."
     }
    },
    {
     "label": "Ambulocetus, 49 million years ago",
     "hint": "Which whale could walk on land AND swim?",
     "why": "Ambulocetus, the walking whale, lived along the shore.",
     "es": {
      "label": "Ambulocetus, hace 49 millones de años",
      "hint": "¿Qué ballena podía caminar en tierra Y nadar?",
      "why": "Ambulocetus, la ballena que caminaba, vivía en la orilla."
     }
    },
    {
     "label": "Pakicetus, 50 million years ago",
     "hint": "Which early whale lived mostly on land?",
     "why": "Pakicetus had four legs, but whale-like ear bones.",
     "es": {
      "label": "Pakicetus, hace 50 millones de años",
      "hint": "¿Qué ballena primitiva vivía sobre todo en tierra?",
      "why": "Pakicetus tenía cuatro patas, pero huesos del oído como los de una ballena."
     }
    }
   ],
   "extra": [
    "A sea star",
    "A trilobite",
    "A shark"
   ],
   "explain": "Older fossils were more like land animals; younger ones were more like modern whales. Similarities and differences in their bones show how whales changed.",
   "es": {
    "title": "Retrocede en el tiempo: cruza la puerta de la ballena más ANTIGUA",
    "start": "Ballena moderna",
    "extra": [
     "Una estrella de mar",
     "Un trilobite",
     "Un tiburón"
    ],
    "explain": "Los fósiles más antiguos se parecían más a animales terrestres; los más jóvenes, a las ballenas modernas. Las semejanzas y las diferencias de sus huesos muestran cómo cambiaron las ballenas."
   }
  }
 ],
 "sequences": [
  {
   "id": "seq6-layers",
   "code": "3.1.6-8.O",
   "title": "Put the layers in order from the TOP (youngest) to the BOTTOM (oldest)",
   "steps": [
    "Ice Age: woolly mammoths",
    "Early whales with legs",
    "Dinosaurs",
    "Fish with legs (Tiktaalik)",
    "Early sea animals (trilobites)"
   ],
   "hint": "The youngest layer is on top.",
   "explain": "Deeper layers formed first, so they are older. The fossil record shows life forms appearing, changing and going extinct in order.",
   "es": {
    "title": "Ordena las capas de ARRIBA (la más joven) a ABAJO (la más antigua)",
    "steps": [
     "Edad de Hielo: mamuts lanudos",
     "Primeras ballenas con patas",
     "Dinosaurios",
     "Peces con patas (Tiktaalik)",
     "Primeros animales marinos (trilobites)"
    ],
    "hint": "La capa más joven está arriba.",
    "explain": "Las capas más profundas se formaron primero, así que son más antiguas. El registro fósil muestra que las formas de vida aparecen, cambian y se extinguen en orden."
   }
  },
  {
   "id": "seq6-select",
   "code": "3.1.6-8.S",
   "title": "How natural selection changed the finches",
   "steps": [
    "Finches vary in beak size",
    "A drought leaves only big, hard seeds",
    "More deep-beaked finches survive",
    "The survivors reproduce",
    "The next generation has deeper beaks on average"
   ],
   "hint": "Start with the differences that were already there.",
   "explain": "Variation, a change in the environment, better survival for some, and inheritance: the population changed in one generation.",
   "es": {
    "title": "Cómo cambió a los pinzones la selección natural",
    "steps": [
     "Los pinzones varían en el tamaño del pico",
     "Una sequía deja solo semillas grandes y duras",
     "Sobreviven más pinzones de pico grueso",
     "Los sobrevivientes se reproducen",
     "La siguiente generación tiene, en promedio, picos más gruesos"
    ],
    "hint": "Empieza con las diferencias que ya existían.",
    "explain": "Variación, un cambio en el ambiente, mejor supervivencia para algunos y herencia: la población cambió en una generación."
   }
  }
 ],
 "wordbanks": [
  {
   "id": "wb6-select",
   "code": "3.1.6-8.T",
   "words": [
    "generation",
    "increase",
    "decrease",
    "percent",
    "trait",
    "graph"
   ],
   "sentences": [
    {
     "text": "Dark color in moths is an inherited ___.",
     "answer": "trait",
     "code": "3.1.6-8.T",
     "explain": "A trait is a feature passed down in genes.",
     "es": {
      "text": "El color oscuro de las polillas es un ___ heredado.",
      "answer": "rasgo",
      "explain": "Un rasgo es una característica que pasa en los genes."
     }
    },
    {
     "text": "Each new set of offspring is called a ___.",
     "answer": "generation",
     "code": "3.1.6-8.T",
     "explain": "Selection is measured generation by generation.",
     "es": {
      "text": "Cada nuevo grupo de crías se llama una ___.",
      "answer": "generación",
      "explain": "La selección se mide generación tras generación."
     }
    },
    {
     "text": "If 40 of 100 moths are dark, that is 40 ___.",
     "answer": "percent",
     "code": "3.1.6-8.T",
     "explain": "Percent means out of 100.",
     "es": {
      "text": "Si 40 de cada 100 polillas son oscuras, eso es el 40 ___.",
      "answer": "por ciento",
      "explain": "Por ciento significa de cada 100."
     }
    },
    {
     "text": "On sooty bark, the share of dark moths will ___.",
     "answer": "increase",
     "code": "3.1.6-8.T",
     "explain": "Dark moths survive more on dark bark.",
     "es": {
      "text": "En la corteza con hollín, la proporción de polillas oscuras va a ___.",
      "answer": "aumentar",
      "explain": "Las polillas oscuras sobreviven más en la corteza oscura."
     }
    },
    {
     "text": "After the air is cleaned, the dark trait will ___.",
     "answer": "decrease",
     "code": "3.1.6-8.T",
     "explain": "On light bark, dark moths are eaten more.",
     "es": {
      "text": "Después de que se limpie el aire, el rasgo oscuro va a ___.",
      "answer": "disminuir",
      "explain": "En la corteza clara, se comen más polillas oscuras."
     }
    },
    {
     "text": "A line ___ shows the trait changing over many generations.",
     "answer": "graph",
     "code": "3.1.6-8.T",
     "explain": "A graph is a mathematical representation.",
     "es": {
      "text": "Una ___ de líneas muestra el rasgo cambiando durante muchas generaciones.",
      "answer": "gráfica",
      "explain": "Una gráfica es una representación matemática."
     }
    }
   ],
   "es": {
    "words": [
     "generación",
     "aumentar",
     "disminuir",
     "por ciento",
     "rasgo",
     "gráfica"
    ]
   }
  }
 ],
 "lablocks": [
  {
   "id": "lock6",
   "title": "Lab Lock",
   "es": {
    "title": "Candado del laboratorio"
   },
   "clues": [
    {
     "prompt": "Clue 1: The dig had layers 1 (top) to 5 (bottom). Which layer number is the OLDEST?",
     "answer": 5,
     "code": "3.1.6-8.O",
     "hint": "The deepest layer formed first.",
     "explain": "Layer 5, at the bottom.",
     "es": {
      "prompt": "Pista 1: La excavación tenía capas de la 1 (arriba) a la 5 (abajo). ¿Qué número de capa es la MÁS ANTIGUA?",
      "hint": "La capa más profunda se formó primero.",
      "explain": "La capa 5, abajo."
     }
    },
    {
     "prompt": "Clue 2: How many of these have the same bones as a human arm? Whale flipper, bat wing, insect wing, bird wing.",
     "answer": 3,
     "code": "3.1.6-8.P",
     "hint": "Insects have no bones.",
     "explain": "Whale flipper, bat wing and bird wing: 3.",
     "es": {
      "prompt": "Pista 2: ¿Cuántos de estos tienen los mismos huesos que un brazo humano? Aleta de ballena, ala de murciélago, ala de insecto, ala de ave.",
      "hint": "Los insectos no tienen huesos.",
      "explain": "Aleta de ballena, ala de murciélago y ala de ave: 3."
     }
    },
    {
     "prompt": "Clue 3: How many of these do ALL early vertebrate embryos have? A tail, gill pouches, feathers, hair.",
     "answer": 2,
     "code": "3.1.6-8.Q",
     "hint": "Feathers and hair come only in some adults.",
     "explain": "A tail and gill pouches: 2.",
     "es": {
      "prompt": "Pista 3: ¿Cuántas de estas cosas tienen TODOS los embriones tempranos de vertebrados? Una cola, bolsas branquiales, plumas, pelo.",
      "hint": "Las plumas y el pelo solo aparecen en algunos adultos.",
      "explain": "Una cola y bolsas branquiales: 2."
     }
    },
    {
     "prompt": "Clue 4: Look at the moth graph. In how many of the years shown were MORE than half the moths dark?",
     "answer": 2,
     "code": "3.1.6-8.T",
     "hint": "More than half means more than 50%.",
     "explain": "1895 (95%) and 1960 (90%): 2.",
     "es": {
      "prompt": "Pista 4: Mira la gráfica de las polillas. ¿En cuántos de los años que se muestran MÁS de la mitad de las polillas eran oscuras?",
      "hint": "Más de la mitad significa más del 50 %.",
      "explain": "1895 (95 %) y 1960 (90 %): 2.",
      "figure": {
       "type": "bars",
       "categories": [
        "1850",
        "1895",
        "1960",
        "1990",
        "2010"
       ],
       "values": [
        2,
        95,
        90,
        30,
        5
       ],
       "ylabel": "Polillas oscuras (%)",
       "unit": "%"
      }
     },
     "figure": {
      "type": "bars",
      "categories": [
       "1850",
       "1895",
       "1960",
       "1990",
       "2010"
      ],
      "values": [
       2,
       95,
       90,
       30,
       5
      ],
      "ylabel": "Dark moths (%)",
      "unit": "%"
     }
    }
   ]
  }
 ],
 "scans": [
  {
   "id": "s6f-canyon",
   "name": "Canyon wall",
   "look": "rock",
   "color": "#c8a878",
   "word": "Fossil",
   "def": "The remains or traces of a living thing from long ago, preserved in rock.",
   "note": "A FOSSIL can be a bone, a shell, a footprint or a leaf print. This canyon’s walls are full of them, layer after layer.",
   "es": {
    "name": "Pared del cañón",
    "word": "Fósil",
    "def": "Los restos o las huellas de un ser vivo de hace mucho tiempo, conservados en la roca.",
    "note": "Un FÓSIL puede ser un hueso, una concha, una huella o la marca de una hoja. Las paredes de este cañón están llenas de ellos, capa tras capa."
   }
  },
  {
   "id": "s6f-layers",
   "name": "Striped rock layers",
   "look": "stack",
   "color": "#b88a5a",
   "word": "Rock layers",
   "def": "Sheets of rock laid down one on top of another over time.",
   "note": "Each stripe in the canyon wall is a ROCK LAYER. Layers settle on top of older ones, so the deepest layers are the oldest.",
   "es": {
    "name": "Capas de roca a rayas",
    "word": "Capas de roca",
    "def": "Láminas de roca que se depositan una sobre otra con el tiempo.",
    "note": "Cada franja de la pared del cañón es una CAPA DE ROCA. Las capas se depositan encima de las más viejas, así que las más profundas son las más antiguas."
   }
  },
  {
   "id": "s6f-laws",
   "name": "River sandbar",
   "look": "drop",
   "color": "#c0a070",
   "word": "Natural laws",
   "def": "Rules of nature, like gravity, that work the same everywhere and at all times.",
   "note": "Today, rivers drop sand and mud in layers. Scientists assume the same NATURAL LAWS worked in the past, so they can read old rock layers the same way.",
   "es": {
    "name": "Banco de arena del río",
    "word": "Leyes naturales",
    "def": "Reglas de la naturaleza, como la gravedad, que funcionan igual en todas partes y en todo momento.",
    "note": "Hoy los ríos dejan arena y lodo en capas. Los científicos suponen que las mismas LEYES NATURALES funcionaban en el pasado, así que pueden leer las capas antiguas de la misma manera."
   }
  },
  {
   "id": "s6f-record",
   "name": "Fossil wall chart",
   "look": "stack",
   "color": "#ffd166",
   "word": "Fossil record",
   "def": "All the fossils ever found, and the order of the rock layers they are found in.",
   "note": "The FOSSIL RECORD shows which living things existed, when they first appeared, how they changed and when they disappeared.",
   "es": {
    "name": "Cartel de fósiles",
    "word": "Registro fósil",
    "def": "Todos los fósiles encontrados y el orden de las capas de roca donde aparecen.",
    "note": "El REGISTRO FÓSIL muestra qué seres vivos existieron, cuándo aparecieron, cómo cambiaron y cuándo desaparecieron."
   }
  },
  {
   "id": "s6f-mammoth",
   "name": "Woolly mammoth tooth",
   "look": "rock",
   "color": "#e8dcc0",
   "word": "Extinction",
   "def": "When every member of a species has died out.",
   "note": "Woolly mammoths lived in the Ice Age, about 20,000 years ago. Today none are left. Their EXTINCTION is recorded in the top layers.",
   "es": {
    "name": "Diente de mamut lanudo",
    "word": "Extinción",
    "def": "Cuando todos los miembros de una especie han muerto.",
    "note": "Los mamuts lanudos vivieron en la Edad de Hielo, hace unos 20,000 años. Hoy no queda ninguno. Su EXTINCIÓN está registrada en las capas de arriba."
   }
  },
  {
   "id": "s6f-ambulo",
   "name": "Walking whale fossil",
   "look": "rock",
   "color": "#d8c8a8",
   "word": "Change over time",
   "def": "How a group of living things becomes different over many generations.",
   "note": "This 49-million-year-old whale, found in Pakistan, had four legs and could walk on land. It shows the CHANGE OVER TIME from land animals to whales.",
   "es": {
    "name": "Fósil de ballena que caminaba",
    "word": "Cambio con el tiempo",
    "def": "Cómo un grupo de seres vivos se vuelve distinto a lo largo de muchas generaciones.",
    "note": "Esta ballena de 49 millones de años, encontrada en Pakistán, tenía cuatro patas y podía caminar en tierra. Muestra el CAMBIO CON EL TIEMPO de animales terrestres a ballenas."
   }
  },
  {
   "id": "s6f-dino",
   "name": "Dinosaur bone",
   "look": "rock",
   "color": "#a07a5a",
   "word": "Extinct",
   "def": "No longer living anywhere on Earth.",
   "note": "Dinosaur fossils fill this layer, about 68 million years old. Above it they vanish: except for birds, dinosaurs are EXTINCT.",
   "es": {
    "name": "Hueso de dinosaurio",
    "word": "Extinto",
    "def": "Que ya no vive en ningún lugar de la Tierra.",
    "note": "Esta capa, de unos 68 millones de años, está llena de fósiles de dinosaurios. Encima de ella desaparecen: excepto las aves, los dinosaurios están EXTINTOS."
   }
  },
  {
   "id": "s6f-tiktaalik",
   "name": "Fish with legs",
   "look": "rock",
   "color": "#8a9a8a",
   "word": "Transitional fossil",
   "def": "A fossil with traits of both an older group and a newer group.",
   "note": "Tiktaalik, 375 million years old, had gills and scales like a fish, but a neck and sturdy fins like legs. It is a TRANSITIONAL FOSSIL between fish and land animals.",
   "es": {
    "name": "Pez con patas",
    "word": "Fósil de transición",
    "def": "Un fósil con rasgos de un grupo más antiguo y de un grupo más nuevo.",
    "note": "Tiktaalik, de 375 millones de años, tenía branquias y escamas como un pez, pero cuello y aletas fuertes como patas. Es un FÓSIL DE TRANSICIÓN entre los peces y los animales terrestres."
   }
  },
  {
   "id": "s6f-trilobite",
   "name": "Trilobite",
   "look": "critter",
   "color": "#7a8a9a",
   "word": "Diversity",
   "def": "How many different kinds of living things there are.",
   "note": "Trilobites were sea animals with many legs. There were thousands of kinds, a huge DIVERSITY, but all of them went extinct about 252 million years ago.",
   "es": {
    "name": "Trilobite",
    "word": "Diversidad",
    "def": "Cuántos tipos distintos de seres vivos hay.",
    "note": "Los trilobites eran animales marinos con muchas patas. Había miles de tipos, una gran DIVERSIDAD, pero todos se extinguieron hace unos 252 millones de años."
   }
  },
  {
   "id": "s6f-age",
   "name": "Dig site ruler",
   "look": "stack",
   "color": "#c59cff",
   "word": "Relative age",
   "def": "How old something is compared with something else: older or younger.",
   "note": "A fossil in a deeper layer is older than a fossil in a layer above it. That is its RELATIVE AGE.",
   "es": {
    "name": "Regla de la excavación",
    "word": "Edad relativa",
    "def": "Qué tan viejo es algo comparado con otra cosa: más viejo o más joven.",
    "note": "Un fósil en una capa más profunda es más viejo que un fósil en una capa de arriba. Esa es su EDAD RELATIVA."
   }
  },
  {
   "id": "s6w-valley",
   "name": "Whale Valley",
   "look": "rock",
   "color": "#e0c08a",
   "word": "Evolutionary relationship",
   "def": "How closely related two kinds of living things are, through a shared ancestor.",
   "note": "In the Egyptian desert lie skeletons of whales about 40 million years old. This sand was once a shallow sea. Their bones reveal EVOLUTIONARY RELATIONSHIPS.",
   "es": {
    "name": "El Valle de las Ballenas",
    "word": "Relación evolutiva",
    "def": "Qué tan emparentados están dos tipos de seres vivos, por medio de un ancestro común.",
    "note": "En el desierto de Egipto hay esqueletos de ballenas de unos 40 millones de años. Esta arena fue un mar poco profundo. Sus huesos revelan RELACIONES EVOLUTIVAS."
   }
  },
  {
   "id": "s6w-basilo",
   "name": "Basilosaurus skeleton",
   "look": "rod",
   "color": "#e8dcc0",
   "word": "Vestigial structure",
   "def": "A body part that is much smaller and no longer used for its original job.",
   "note": "Basilosaurus was a whale up to about 18 meters long, with tiny back legs only about 35 centimeters long. Its legs were VESTIGIAL: too small to walk on.",
   "es": {
    "name": "Esqueleto de basilosaurio",
    "word": "Estructura vestigial",
    "def": "Una parte del cuerpo mucho más pequeña que ya no se usa para su función original.",
    "note": "El basilosaurio era una ballena de hasta unos 18 metros, con patas traseras diminutas de apenas unos 35 centímetros. Sus patas eran VESTIGIALES: demasiado pequeñas para caminar."
   }
  },
  {
   "id": "s6w-limbs",
   "name": "Bone comparison table",
   "look": "stack",
   "color": "#ffd166",
   "word": "Homologous structures",
   "def": "Body parts in different species with the same bones, inherited from a common ancestor.",
   "note": "A whale flipper, a bat wing and your arm look different and do different jobs, but they have the same bones in the same order. They are HOMOLOGOUS STRUCTURES.",
   "es": {
    "name": "Tabla para comparar huesos",
    "word": "Estructuras homólogas",
    "def": "Partes del cuerpo de especies distintas con los mismos huesos, heredadas de un ancestro común.",
    "note": "Una aleta de ballena, un ala de murciélago y tu brazo se ven distintos y hacen trabajos distintos, pero tienen los mismos huesos en el mismo orden. Son ESTRUCTURAS HOMÓLOGAS."
   }
  },
  {
   "id": "s6w-ancestor",
   "name": "Family tree sign",
   "look": "sprout",
   "color": "#7be06a",
   "word": "Common ancestor",
   "def": "An earlier species that two or more later species descended from.",
   "note": "Similar bones are evidence that whales, bats and people share a COMMON ANCESTOR that lived long ago.",
   "es": {
    "name": "Cartel de un árbol genealógico",
    "word": "Ancestro común",
    "def": "Una especie anterior de la que descienden dos o más especies posteriores.",
    "note": "Los huesos parecidos son evidencia de que las ballenas, los murciélagos y las personas comparten un ANCESTRO COMÚN que vivió hace mucho tiempo."
   }
  },
  {
   "id": "s6w-hippo",
   "name": "Hippo skull poster",
   "look": "critter",
   "color": "#8a7a8a",
   "word": "Closest relative",
   "def": "The living species that shares the most recent common ancestor with another.",
   "note": "Whales’ CLOSEST living RELATIVES are hippos. Their ankle bones and their DNA show it.",
   "es": {
    "name": "Cartel de un cráneo de hipopótamo",
    "word": "Pariente más cercano",
    "def": "La especie viva que comparte el ancestro común más reciente con otra.",
    "note": "Los PARIENTES vivos MÁS CERCANOS de las ballenas son los hipopótamos. Sus huesos del tobillo y su ADN lo demuestran."
   }
  },
  {
   "id": "s6w-ankle",
   "name": "Fossil ankle bone",
   "look": "rock",
   "color": "#d8c8a8",
   "word": "Anatomical similarity",
   "def": "A way two organisms’ bodies are built alike.",
   "note": "Early whale fossils have a special double-pulley ankle bone found only in hippos, deer, pigs and their relatives. That ANATOMICAL SIMILARITY links them.",
   "es": {
    "name": "Hueso fósil del tobillo",
    "word": "Semejanza anatómica",
    "def": "Una forma en que los cuerpos de dos organismos están construidos de manera parecida.",
    "note": "Los fósiles de las primeras ballenas tienen un hueso del tobillo especial, con forma de doble polea, que solo tienen los hipopótamos, los venados, los cerdos y sus parientes. Esa SEMEJANZA ANATÓMICA los une."
   }
  },
  {
   "id": "s6w-differ",
   "name": "Modern whale skeleton",
   "look": "rod",
   "color": "#bfe9ff",
   "word": "Anatomical difference",
   "def": "A way two organisms’ bodies are built differently.",
   "note": "Modern whales have no back legs at all, only a few tiny hip bones inside the body. That ANATOMICAL DIFFERENCE shows how much whales have changed.",
   "es": {
    "name": "Esqueleto de ballena moderna",
    "word": "Diferencia anatómica",
    "def": "Una forma en que los cuerpos de dos organismos están construidos de manera distinta.",
    "note": "Las ballenas modernas no tienen patas traseras, solo unos huesitos de la cadera dentro del cuerpo. Esa DIFERENCIA ANATÓMICA muestra cuánto han cambiado las ballenas."
   }
  },
  {
   "id": "s6w-modern",
   "name": "Bottlenose dolphin model",
   "look": "critter",
   "color": "#8aa8c0",
   "word": "Modern organism",
   "def": "A species that is alive today.",
   "note": "Dolphins are a MODERN ORGANISM, a small kind of toothed whale. Comparing them with fossils shows what has stayed the same and what has changed.",
   "es": {
    "name": "Modelo de delfín nariz de botella",
    "word": "Organismo moderno",
    "def": "Una especie que vive hoy en día.",
    "note": "Los delfines son un ORGANISMO MODERNO, un tipo pequeño de ballena con dientes. Compararlos con los fósiles muestra qué se ha mantenido igual y qué ha cambiado."
   }
  },
  {
   "id": "s6w-paki",
   "name": "Pakicetus skull cast",
   "look": "rock",
   "color": "#c8a878",
   "word": "Fossil organism",
   "def": "A species known only from fossils.",
   "note": "Pakicetus, about 50 million years old, looked like a wolf-sized land animal. But its ear bones are shaped like a whale’s. This FOSSIL ORGANISM is one of the earliest whales.",
   "es": {
    "name": "Molde del cráneo de Pakicetus",
    "word": "Organismo fósil",
    "def": "Una especie que solo se conoce por los fósiles.",
    "note": "Pakicetus, de unos 50 millones de años, parecía un animal terrestre del tamaño de un lobo. Pero los huesos de su oído tienen forma de los de una ballena. Este ORGANISMO FÓSIL es una de las primeras ballenas."
   }
  },
  {
   "id": "s6e-mbl",
   "name": "Marine research station",
   "look": "stack",
   "color": "#9fd8ff",
   "word": "Embryo",
   "def": "A living thing in its earliest stage of development, before it hatches or is born.",
   "note": "At the Marine Biological Laboratory in Woods Hole, Massachusetts, scientists have studied EMBRYOS of sea animals since 1888.",
   "es": {
    "name": "Estación de investigación marina",
    "word": "Embrión",
    "def": "Un ser vivo en su etapa más temprana de desarrollo, antes de salir del huevo o nacer.",
    "note": "En el Laboratorio de Biología Marina de Woods Hole, Massachusetts, los científicos estudian EMBRIONES de animales marinos desde 1888."
   }
  },
  {
   "id": "s6e-zebra",
   "name": "Zebrafish embryos",
   "look": "eggs",
   "color": "#cfefff",
   "word": "Development",
   "def": "The changes a living thing goes through as it grows from an embryo into an adult.",
   "note": "Zebrafish embryos are clear, so scientists can watch every step of DEVELOPMENT under a microscope, from one cell to a swimming fish in a few days.",
   "es": {
    "name": "Embriones de pez cebra",
    "word": "Desarrollo",
    "def": "Los cambios por los que pasa un ser vivo al crecer de embrión a adulto.",
    "note": "Los embriones del pez cebra son transparentes, así que los científicos pueden ver cada paso del DESARROLLO al microscopio, de una célula a un pez que nada en pocos días."
   }
  },
  {
   "id": "s6e-pouches",
   "name": "Chick embryo poster",
   "look": "cell",
   "color": "#ffd8a8",
   "word": "Gill pouches",
   "def": "Folds in the neck of every early vertebrate embryo. In fish they become gills; in people they become parts of the jaw, ear and throat.",
   "note": "Early embryos of fish, birds and mammals ALL have GILL POUCHES in the neck, even though only fish grow gills.",
   "es": {
    "name": "Cartel de un embrión de pollo",
    "word": "Bolsas branquiales",
    "def": "Pliegues en el cuello de todos los embriones tempranos de vertebrados. En los peces se vuelven branquias; en las personas, partes de la mandíbula, el oído y la garganta.",
    "note": "Los embriones tempranos de peces, aves y mamíferos TODOS tienen BOLSAS BRANQUIALES en el cuello, aunque solo a los peces les salen branquias."
   }
  },
  {
   "id": "s6e-tail",
   "name": "Human embryo model",
   "look": "cell",
   "color": "#ffc0a0",
   "word": "Embryo tail",
   "def": "A tail that early vertebrate embryos have, even when the adult has none.",
   "note": "A human embryo has a tail at about five weeks. It shrinks and becomes the tailbone. Adult people have no tail, but the EMBRYO TAIL shows a shared pattern.",
   "es": {
    "name": "Modelo de embrión humano",
    "word": "Cola del embrión",
    "def": "Una cola que tienen los embriones tempranos de vertebrados, aunque el adulto no tenga.",
    "note": "Un embrión humano tiene cola a las cinco semanas, más o menos. Se encoge y se vuelve el coxis. Las personas adultas no tienen cola, pero la COLA DEL EMBRIÓN muestra un patrón compartido."
   }
  },
  {
   "id": "s6e-bud",
   "name": "Limb bud close-up",
   "look": "sprout",
   "color": "#ffd8a8",
   "word": "Limb bud",
   "def": "A small bump on an embryo that grows into an arm, leg, wing or fin.",
   "note": "Every LIMB BUD starts as a similar small bump. It grows into a wing on a chick, a leg on a pig and an arm on a person.",
   "es": {
    "name": "Primer plano de un esbozo de extremidad",
    "word": "Esbozo de extremidad",
    "def": "Un bultito en un embrión que crece y se vuelve brazo, pierna, ala o aleta.",
    "note": "Cada ESBOZO DE EXTREMIDAD empieza como un bultito parecido. Crece y se vuelve un ala en el pollo, una pata en el cerdo y un brazo en la persona."
   }
  },
  {
   "id": "s6e-adult",
   "name": "Display of adult animals",
   "look": "critter",
   "color": "#c08a5a",
   "word": "Fully formed anatomy",
   "def": "The body structures of an adult, after development is finished.",
   "note": "A grown fish, chicken, pig and person look very different. Their FULLY FORMED ANATOMY hides how alike they were as embryos.",
   "es": {
    "name": "Exhibición de animales adultos",
    "word": "Anatomía ya formada",
    "def": "Las estructuras del cuerpo de un adulto, cuando ya terminó el desarrollo.",
    "note": "Un pez, un pollo, un cerdo y una persona adultos se ven muy distintos. Su ANATOMÍA YA FORMADA esconde lo parecidos que eran de embriones."
   }
  },
  {
   "id": "s6e-pictorial",
   "name": "Microscope drawings",
   "look": "stack",
   "color": "#ffd166",
   "word": "Pictorial data",
   "def": "Information shown in drawings, photos or diagrams instead of numbers.",
   "note": "Scientists compare drawings and photos of embryos side by side. This PICTORIAL DATA shows patterns that numbers alone would not.",
   "es": {
    "name": "Dibujos de microscopio",
    "word": "Datos en imágenes",
    "def": "Información que se muestra en dibujos, fotos o diagramas en vez de números.",
    "note": "Los científicos comparan lado a lado dibujos y fotos de embriones. Estos DATOS EN IMÁGENES muestran patrones que los números solos no mostrarían."
   }
  },
  {
   "id": "s6e-horseshoe",
   "name": "Horseshoe crab",
   "look": "critter",
   "color": "#8a6a4a",
   "word": "Related species",
   "def": "Species that share a common ancestor.",
   "note": "Horseshoe crabs walk the beaches of Woods Hole. Despite the name, they are more closely related to spiders than to crabs. RELATED SPECIES are not always the ones that look most alike.",
   "es": {
    "name": "Cangrejo herradura",
    "word": "Especies emparentadas",
    "def": "Especies que comparten un ancestro común.",
    "note": "Los cangrejos herradura caminan por las playas de Woods Hole. A pesar del nombre, están más emparentados con las arañas que con los cangrejos. Las ESPECIES EMPARENTADAS no siempre son las que más se parecen."
   }
  },
  {
   "id": "s6i-daphne",
   "name": "Daphne Major",
   "look": "rock",
   "color": "#a08a6a",
   "word": "Variation",
   "def": "Differences between individuals of the same species.",
   "note": "Since 1973, Peter and Rosemary Grant studied the finches on this tiny Galápagos island. They measured every bird and found VARIATION in beak size.",
   "es": {
    "name": "Isla Daphne Mayor",
    "word": "Variación",
    "def": "Diferencias entre individuos de la misma especie.",
    "note": "Desde 1973, Peter y Rosemary Grant estudiaron los pinzones de esta pequeña isla de Galápagos. Midieron cada ave y encontraron VARIACIÓN en el tamaño del pico."
   }
  },
  {
   "id": "s6i-finch",
   "name": "Medium ground finch",
   "look": "critter",
   "color": "#4a3a2a",
   "word": "Inherited trait",
   "def": "A trait passed from parents to offspring through genes.",
   "note": "Beak size is an INHERITED TRAIT. Parents with deep beaks tend to have chicks with deep beaks.",
   "es": {
    "name": "Pinzón terrestre mediano",
    "word": "Rasgo heredado",
    "def": "Un rasgo que pasa de los padres a las crías por medio de los genes.",
    "note": "El tamaño del pico es un RASGO HEREDADO. Los padres con picos gruesos suelen tener polluelos con picos gruesos."
   }
  },
  {
   "id": "s6i-drought",
   "name": "Dry, cracked ground",
   "look": "rock",
   "color": "#c0a070",
   "word": "Drought",
   "def": "A long time with little or no rain.",
   "note": "In 1977 a DROUGHT hit Daphne Major. Plants made few seeds, and the small, soft ones were eaten first.",
   "es": {
    "name": "Suelo seco y agrietado",
    "word": "Sequía",
    "def": "Un tiempo largo con poca lluvia o ninguna.",
    "note": "En 1977, una SEQUÍA azotó Daphne Mayor. Las plantas dieron pocas semillas, y las pequeñas y blandas se acabaron primero."
   }
  },
  {
   "id": "s6i-caltrop",
   "name": "Caltrop seeds",
   "look": "eggs",
   "color": "#8a7a4a",
   "word": "Food source",
   "def": "What an animal eats to survive.",
   "note": "What was left were big, hard, spiky caltrop seeds. Only birds with deep, strong beaks could crack this FOOD SOURCE.",
   "es": {
    "name": "Semillas de abrojo",
    "word": "Fuente de alimento",
    "def": "Lo que come un animal para sobrevivir.",
    "note": "Lo que quedaba eran semillas de abrojo, grandes, duras y espinosas. Solo las aves con picos gruesos y fuertes podían abrir esta FUENTE DE ALIMENTO."
   }
  },
  {
   "id": "s6i-advantage",
   "name": "Finch cracking a seed",
   "look": "critter",
   "color": "#5a4a3a",
   "word": "Advantage",
   "def": "A trait that helps an individual survive or reproduce better than others in its environment.",
   "note": "During the drought, a deep beak was an ADVANTAGE. Birds with deep beaks could eat, so more of them survived.",
   "es": {
    "name": "Pinzón que abre una semilla",
    "word": "Ventaja",
    "def": "Un rasgo que ayuda a un individuo a sobrevivir o reproducirse mejor que otros en su ambiente.",
    "note": "Durante la sequía, un pico grueso era una VENTAJA. Las aves con pico grueso podían comer, así que sobrevivieron más."
   }
  },
  {
   "id": "s6i-survive",
   "name": "Banded finch",
   "look": "critter",
   "color": "#3a2a1a",
   "word": "Survival",
   "def": "Staying alive.",
   "note": "Most of the island’s medium ground finches died in the drought. SURVIVAL was much higher for birds with the deepest beaks.",
   "es": {
    "name": "Pinzón anillado",
    "word": "Supervivencia",
    "def": "Seguir con vida.",
    "note": "La mayoría de los pinzones terrestres medianos de la isla murieron en la sequía. La SUPERVIVENCIA fue mucho mayor en las aves con los picos más gruesos."
   }
  },
  {
   "id": "s6i-specific",
   "name": "Rainy-year poster",
   "look": "drop",
   "color": "#7fd4ff",
   "word": "Specific environment",
   "def": "The exact conditions of one place and time, like a drought or a wet year.",
   "note": "In very wet years later on, small soft seeds were plentiful and smaller beaks did well. Whether a trait helps depends on the SPECIFIC ENVIRONMENT.",
   "es": {
    "name": "Cartel de un año lluvioso",
    "word": "Ambiente específico",
    "def": "Las condiciones exactas de un lugar y un momento, como una sequía o un año húmedo.",
    "note": "Años después, en años muy lluviosos, abundaban las semillas pequeñas y blandas, y los picos más pequeños tuvieron éxito. Que un rasgo ayude depende del AMBIENTE ESPECÍFICO."
   }
  },
  {
   "id": "s6i-chicks",
   "name": "Finch nest with chicks",
   "look": "eggs",
   "color": "#d8c8a8",
   "word": "Reproduce",
   "def": "To make offspring.",
   "note": "The survivors were the ones that could REPRODUCE. Their chicks inherited deep beaks, so the next generation had deeper beaks on average.",
   "es": {
    "name": "Nido de pinzón con polluelos",
    "word": "Reproducirse",
    "def": "Producir crías.",
    "note": "Los sobrevivientes fueron los que pudieron REPRODUCIRSE. Sus polluelos heredaron picos gruesos, así que la siguiente generación tuvo, en promedio, picos más gruesos."
   }
  },
  {
   "id": "s6i-booby",
   "name": "Blue-footed booby",
   "look": "critter",
   "color": "#5fb8ff",
   "word": "Individual",
   "def": "One single living thing.",
   "note": "Every INDIVIDUAL in a population is a little different. That variation is the raw material for natural selection.",
   "es": {
    "name": "Piquero de patas azules",
    "word": "Individuo",
    "def": "Un solo ser vivo.",
    "note": "Cada INDIVIDUO de una población es un poco distinto. Esa variación es la materia prima de la selección natural."
   }
  },
  {
   "id": "s6s-deck",
   "name": "Simulation deck",
   "look": "atom",
   "color": "#9fe8ff",
   "word": "Natural selection",
   "def": "The process in which individuals with helpful inherited traits survive and reproduce more, so those traits become more common.",
   "note": "NATURAL SELECTION needs three things: variation, inheritance, and some individuals surviving and reproducing more than others.",
   "es": {
    "name": "Cubierta de simulación",
    "word": "Selección natural",
    "def": "El proceso en el que los individuos con rasgos heredados útiles sobreviven y se reproducen más, así que esos rasgos se vuelven más comunes.",
    "note": "La SELECCIÓN NATURAL necesita tres cosas: variación, herencia y que algunos individuos sobrevivan y se reproduzcan más que otros."
   }
  },
  {
   "id": "s6s-gen",
   "name": "Generation counter",
   "look": "stack",
   "color": "#ffd166",
   "word": "Generation",
   "def": "All the offspring of a group of parents, born around the same time.",
   "note": "Natural selection is measured in GENERATIONS. Peppered moths have about one generation a year.",
   "es": {
    "name": "Contador de generaciones",
    "word": "Generación",
    "def": "Todas las crías de un grupo de padres, nacidas más o menos al mismo tiempo.",
    "note": "La selección natural se mide en GENERACIONES. Las polillas moteadas tienen más o menos una generación al año."
   }
  },
  {
   "id": "s6s-graph",
   "name": "Line graph screen",
   "look": "stack",
   "color": "#7be0ad",
   "word": "Mathematical representation",
   "def": "A graph, table or number that shows data or a pattern.",
   "note": "A line graph of a trait over many generations is a MATHEMATICAL REPRESENTATION. Its slope shows the trait increasing or decreasing.",
   "es": {
    "name": "Pantalla con una gráfica de líneas",
    "word": "Representación matemática",
    "def": "Una gráfica, una tabla o un número que muestra datos o un patrón.",
    "note": "Una gráfica de líneas de un rasgo durante muchas generaciones es una REPRESENTACIÓN MATEMÁTICA. Su inclinación muestra si el rasgo aumenta o disminuye."
   }
  },
  {
   "id": "s6s-percent",
   "name": "Percent dial",
   "look": "atom",
   "color": "#ff8fb1",
   "word": "Percent",
   "def": "A part out of 100.",
   "note": "If 30 of 100 moths are dark, then 30 PERCENT are dark. Percents let scientists compare populations of different sizes.",
   "es": {
    "name": "Indicador de porcentaje",
    "word": "Porcentaje",
    "def": "Una parte de cada 100.",
    "note": "Si 30 de cada 100 polillas son oscuras, entonces el 30 POR CIENTO son oscuras. Los porcentajes permiten comparar poblaciones de distintos tamaños."
   }
  },
  {
   "id": "s6s-moth",
   "name": "Peppered moth",
   "look": "critter",
   "color": "#d8d4c0",
   "word": "Camouflage",
   "def": "Colors or patterns that help an animal blend in with its surroundings.",
   "note": "A light peppered moth on light, lichen-covered bark is hard to see. Its CAMOUFLAGE protects it from birds.",
   "es": {
    "name": "Polilla moteada",
    "word": "Camuflaje",
    "def": "Colores o dibujos que ayudan a un animal a confundirse con su entorno.",
    "note": "Una polilla moteada clara sobre una corteza clara, cubierta de líquenes, es difícil de ver. Su CAMUFLAJE la protege de las aves."
   }
  },
  {
   "id": "s6s-bacteria",
   "name": "Bacteria dish",
   "look": "cell",
   "color": "#7be0ad",
   "word": "Resistance",
   "def": "A trait that lets a living thing survive something that kills others, like an antibiotic.",
   "note": "When an antibiotic is used, the few bacteria with RESISTANCE survive and multiply. Generation after generation, the resistant share goes up.",
   "es": {
    "name": "Placa con bacterias",
    "word": "Resistencia",
    "def": "Un rasgo que permite a un ser vivo sobrevivir a algo que mata a otros, como un antibiótico.",
    "note": "Cuando se usa un antibiótico, las pocas bacterias con RESISTENCIA sobreviven y se multiplican. Generación tras generación, la proporción de resistentes sube."
   }
  },
  {
   "id": "s6s-decrease",
   "name": "Falling arrow display",
   "look": "stack",
   "color": "#ffb09c",
   "word": "Trait decrease",
   "def": "When a trait becomes less common in a population over time.",
   "note": "When conditions change so a trait no longer helps, fewer individuals with it survive. The graph slopes down: a TRAIT DECREASE.",
   "es": {
    "name": "Pantalla con una flecha que baja",
    "word": "Disminución de un rasgo",
    "def": "Cuando un rasgo se vuelve menos común en una población con el tiempo.",
    "note": "Cuando las condiciones cambian y un rasgo ya no ayuda, sobreviven menos individuos que lo tienen. La gráfica baja: una DISMINUCIÓN DEL RASGO."
   }
  }
 ],
 "vocab": [
  {
   "term": "Fossil",
   "def": "The remains or traces of a living thing from long ago, preserved in rock.",
   "es": {
    "term": "Fósil",
    "def": "Los restos o las huellas de un ser vivo de hace mucho tiempo, conservados en la roca."
   }
  },
  {
   "term": "Rock layers",
   "def": "Sheets of rock laid down one on top of another over time.",
   "es": {
    "term": "Capas de roca",
    "def": "Láminas de roca que se depositan una sobre otra con el tiempo."
   }
  },
  {
   "term": "Natural laws",
   "def": "Rules of nature, like gravity, that work the same everywhere and at all times.",
   "es": {
    "term": "Leyes naturales",
    "def": "Reglas de la naturaleza, como la gravedad, que funcionan igual en todas partes y en todo momento."
   }
  },
  {
   "term": "Fossil record",
   "def": "All the fossils ever found, and the order of the rock layers they are found in.",
   "es": {
    "term": "Registro fósil",
    "def": "Todos los fósiles encontrados y el orden de las capas de roca donde aparecen."
   }
  },
  {
   "term": "Extinction",
   "def": "When every member of a species has died out.",
   "es": {
    "term": "Extinción",
    "def": "Cuando todos los miembros de una especie han muerto."
   }
  },
  {
   "term": "Change over time",
   "def": "How a group of living things becomes different over many generations.",
   "es": {
    "term": "Cambio con el tiempo",
    "def": "Cómo un grupo de seres vivos se vuelve distinto a lo largo de muchas generaciones."
   }
  },
  {
   "term": "Extinct",
   "def": "No longer living anywhere on Earth.",
   "es": {
    "term": "Extinto",
    "def": "Que ya no vive en ningún lugar de la Tierra."
   }
  },
  {
   "term": "Transitional fossil",
   "def": "A fossil with traits of both an older group and a newer group.",
   "es": {
    "term": "Fósil de transición",
    "def": "Un fósil con rasgos de un grupo más antiguo y de un grupo más nuevo."
   }
  },
  {
   "term": "Diversity",
   "def": "How many different kinds of living things there are.",
   "es": {
    "term": "Diversidad",
    "def": "Cuántos tipos distintos de seres vivos hay."
   }
  },
  {
   "term": "Relative age",
   "def": "How old something is compared with something else: older or younger.",
   "es": {
    "term": "Edad relativa",
    "def": "Qué tan viejo es algo comparado con otra cosa: más viejo o más joven."
   }
  },
  {
   "term": "Evolutionary relationship",
   "def": "How closely related two kinds of living things are, through a shared ancestor.",
   "es": {
    "term": "Relación evolutiva",
    "def": "Qué tan emparentados están dos tipos de seres vivos, por medio de un ancestro común."
   }
  },
  {
   "term": "Vestigial structure",
   "def": "A body part that is much smaller and no longer used for its original job.",
   "es": {
    "term": "Estructura vestigial",
    "def": "Una parte del cuerpo mucho más pequeña que ya no se usa para su función original."
   }
  },
  {
   "term": "Homologous structures",
   "def": "Body parts in different species with the same bones, inherited from a common ancestor.",
   "es": {
    "term": "Estructuras homólogas",
    "def": "Partes del cuerpo de especies distintas con los mismos huesos, heredadas de un ancestro común."
   }
  },
  {
   "term": "Common ancestor",
   "def": "An earlier species that two or more later species descended from.",
   "es": {
    "term": "Ancestro común",
    "def": "Una especie anterior de la que descienden dos o más especies posteriores."
   }
  },
  {
   "term": "Closest relative",
   "def": "The living species that shares the most recent common ancestor with another.",
   "es": {
    "term": "Pariente más cercano",
    "def": "La especie viva que comparte el ancestro común más reciente con otra."
   }
  },
  {
   "term": "Anatomical similarity",
   "def": "A way two organisms’ bodies are built alike.",
   "es": {
    "term": "Semejanza anatómica",
    "def": "Una forma en que los cuerpos de dos organismos están construidos de manera parecida."
   }
  },
  {
   "term": "Anatomical difference",
   "def": "A way two organisms’ bodies are built differently.",
   "es": {
    "term": "Diferencia anatómica",
    "def": "Una forma en que los cuerpos de dos organismos están construidos de manera distinta."
   }
  },
  {
   "term": "Modern organism",
   "def": "A species that is alive today.",
   "es": {
    "term": "Organismo moderno",
    "def": "Una especie que vive hoy en día."
   }
  },
  {
   "term": "Fossil organism",
   "def": "A species known only from fossils.",
   "es": {
    "term": "Organismo fósil",
    "def": "Una especie que solo se conoce por los fósiles."
   }
  },
  {
   "term": "Embryo",
   "def": "A living thing in its earliest stage of development, before it hatches or is born.",
   "es": {
    "term": "Embrión",
    "def": "Un ser vivo en su etapa más temprana de desarrollo, antes de salir del huevo o nacer."
   }
  },
  {
   "term": "Development",
   "def": "The changes a living thing goes through as it grows from an embryo into an adult.",
   "es": {
    "term": "Desarrollo",
    "def": "Los cambios por los que pasa un ser vivo al crecer de embrión a adulto."
   }
  },
  {
   "term": "Gill pouches",
   "def": "Folds in the neck of every early vertebrate embryo. In fish they become gills; in people they become parts of the jaw, ear and throat.",
   "es": {
    "term": "Bolsas branquiales",
    "def": "Pliegues en el cuello de todos los embriones tempranos de vertebrados. En los peces se vuelven branquias; en las personas, partes de la mandíbula, el oído y la garganta."
   }
  },
  {
   "term": "Embryo tail",
   "def": "A tail that early vertebrate embryos have, even when the adult has none.",
   "es": {
    "term": "Cola del embrión",
    "def": "Una cola que tienen los embriones tempranos de vertebrados, aunque el adulto no tenga."
   }
  },
  {
   "term": "Limb bud",
   "def": "A small bump on an embryo that grows into an arm, leg, wing or fin.",
   "es": {
    "term": "Esbozo de extremidad",
    "def": "Un bultito en un embrión que crece y se vuelve brazo, pierna, ala o aleta."
   }
  },
  {
   "term": "Fully formed anatomy",
   "def": "The body structures of an adult, after development is finished.",
   "es": {
    "term": "Anatomía ya formada",
    "def": "Las estructuras del cuerpo de un adulto, cuando ya terminó el desarrollo."
   }
  },
  {
   "term": "Pictorial data",
   "def": "Information shown in drawings, photos or diagrams instead of numbers.",
   "es": {
    "term": "Datos en imágenes",
    "def": "Información que se muestra en dibujos, fotos o diagramas en vez de números."
   }
  },
  {
   "term": "Related species",
   "def": "Species that share a common ancestor.",
   "es": {
    "term": "Especies emparentadas",
    "def": "Especies que comparten un ancestro común."
   }
  },
  {
   "term": "Variation",
   "def": "Differences between individuals of the same species.",
   "es": {
    "term": "Variación",
    "def": "Diferencias entre individuos de la misma especie."
   }
  },
  {
   "term": "Inherited trait",
   "def": "A trait passed from parents to offspring through genes.",
   "es": {
    "term": "Rasgo heredado",
    "def": "Un rasgo que pasa de los padres a las crías por medio de los genes."
   }
  },
  {
   "term": "Drought",
   "def": "A long time with little or no rain.",
   "es": {
    "term": "Sequía",
    "def": "Un tiempo largo con poca lluvia o ninguna."
   }
  },
  {
   "term": "Food source",
   "def": "What an animal eats to survive.",
   "es": {
    "term": "Fuente de alimento",
    "def": "Lo que come un animal para sobrevivir."
   }
  },
  {
   "term": "Advantage",
   "def": "A trait that helps an individual survive or reproduce better than others in its environment.",
   "es": {
    "term": "Ventaja",
    "def": "Un rasgo que ayuda a un individuo a sobrevivir o reproducirse mejor que otros en su ambiente."
   }
  },
  {
   "term": "Survival",
   "def": "Staying alive.",
   "es": {
    "term": "Supervivencia",
    "def": "Seguir con vida."
   }
  },
  {
   "term": "Specific environment",
   "def": "The exact conditions of one place and time, like a drought or a wet year.",
   "es": {
    "term": "Ambiente específico",
    "def": "Las condiciones exactas de un lugar y un momento, como una sequía o un año húmedo."
   }
  },
  {
   "term": "Reproduce",
   "def": "To make offspring.",
   "es": {
    "term": "Reproducirse",
    "def": "Producir crías."
   }
  },
  {
   "term": "Individual",
   "def": "One single living thing.",
   "es": {
    "term": "Individuo",
    "def": "Un solo ser vivo."
   }
  },
  {
   "term": "Natural selection",
   "def": "The process in which individuals with helpful inherited traits survive and reproduce more, so those traits become more common.",
   "es": {
    "term": "Selección natural",
    "def": "El proceso en el que los individuos con rasgos heredados útiles sobreviven y se reproducen más, así que esos rasgos se vuelven más comunes."
   }
  },
  {
   "term": "Generation",
   "def": "All the offspring of a group of parents, born around the same time.",
   "es": {
    "term": "Generación",
    "def": "Todas las crías de un grupo de padres, nacidas más o menos al mismo tiempo."
   }
  },
  {
   "term": "Mathematical representation",
   "def": "A graph, table or number that shows data or a pattern.",
   "es": {
    "term": "Representación matemática",
    "def": "Una gráfica, una tabla o un número que muestra datos o un patrón."
   }
  },
  {
   "term": "Percent",
   "def": "A part out of 100.",
   "es": {
    "term": "Porcentaje",
    "def": "Una parte de cada 100."
   }
  },
  {
   "term": "Camouflage",
   "def": "Colors or patterns that help an animal blend in with its surroundings.",
   "es": {
    "term": "Camuflaje",
    "def": "Colores o dibujos que ayudan a un animal a confundirse con su entorno."
   }
  },
  {
   "term": "Resistance",
   "def": "A trait that lets a living thing survive something that kills others, like an antibiotic.",
   "es": {
    "term": "Resistencia",
    "def": "Un rasgo que permite a un ser vivo sobrevivir a algo que mata a otros, como un antibiótico."
   }
  },
  {
   "term": "Trait decrease",
   "def": "When a trait becomes less common in a population over time.",
   "es": {
    "term": "Disminución de un rasgo",
    "def": "Cuando un rasgo se vuelve menos común en una población con el tiempo."
   }
  }
 ]
});
