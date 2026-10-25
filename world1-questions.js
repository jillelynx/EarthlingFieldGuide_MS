/* WORLD 1 QUESTION FILE: What Living Things Are Made Of (middle school edition)
   Made by tools/content/build_w1.py from the content files in tools/content (edit those, then run it again).
   "code" is the PA STEELS grades 6-8 standard. "es" holds the Spanish text for the same item.
   In "questions", "answer" is the position of the correct option, counting from 0. The game shuffles the options. */
FieldGuide.registerQuestions(1, {
 "tokens": [
  {
   "id": "h1-cells",
   "code": "3.1.6-8.A",
   "prompt": "Collect only samples that are MADE OF CELLS (living now, or once living)",
   "good": [
    "Wood frog skin",
    "Moss leaf",
    "Paramecium",
    "Fallen oak leaf",
    "Salamander egg",
    "Mushroom cap"
   ],
   "bad": [
    {
     "text": "Grain of sand",
     "explain": "Sand is tiny pieces of rock. It has no cells and was never alive.",
     "es": {
      "text": "Grano de arena",
      "explain": "La arena son pedacitos de roca. No tiene células y nunca estuvo viva."
     }
    },
    {
     "text": "Air bubble",
     "explain": "An air bubble is a pocket of gas. It is not made of cells.",
     "es": {
      "text": "Burbuja de aire",
      "explain": "Una burbuja de aire es un poco de gas. No está formada por células."
     }
    },
    {
     "text": "Plastic bottle cap",
     "explain": "Plastic is made in a factory. It is not made of cells.",
     "es": {
      "text": "Tapa de plástico",
      "explain": "El plástico se fabrica en una fábrica. No está formado por células."
     }
    },
    {
     "text": "Ice crystal",
     "explain": "Ice is frozen water. It can grow, but it has no cells.",
     "es": {
      "text": "Cristal de hielo",
      "explain": "El hielo es agua congelada. Puede crecer, pero no tiene células."
     }
    }
   ],
   "es": {
    "prompt": "Recoge solo las muestras que ESTÁN FORMADAS POR CÉLULAS (vivas ahora, o que estuvieron vivas)",
    "good": [
     "Piel de rana de bosque",
     "Hoja de musgo",
     "Paramecio",
     "Hoja de roble caída",
     "Huevo de salamandra",
     "Sombrero de hongo"
    ]
   }
  },
  {
   "id": "h1-bact",
   "code": "3.1.6-8.B",
   "model": "prokaryote",
   "parts": [
    "Plasma membrane",
    "Cytoplasm",
    "DNA",
    "Ribosomes"
   ],
   "prompt": "Build a vent bacterium: bring it only the parts a one-celled bacterium has",
   "good": [
    "Cell membrane",
    "Cytoplasm",
    "DNA",
    "Ribosomes"
   ],
   "bad": [
    {
     "text": "Nucleus",
     "explain": "A bacterium has no nucleus. Its DNA floats in the cytoplasm.",
     "es": {
      "text": "Núcleo",
      "explain": "Una bacteria no tiene núcleo. Su ADN flota en el citoplasma."
     }
    },
    {
     "text": "Chloroplasts",
     "explain": "Bacteria have no chloroplasts. These vent bacteria make food from chemicals, not sunlight.",
     "es": {
      "text": "Cloroplastos",
      "explain": "Las bacterias no tienen cloroplastos. Estas bacterias de las fuentes producen alimento con sustancias químicas, no con la luz del sol."
     }
    },
    {
     "text": "Heart",
     "explain": "A heart is an organ made of many cells. A single cell cannot have one.",
     "es": {
      "text": "Corazón",
      "explain": "Un corazón es un órgano formado por muchas células. Una sola célula no puede tener uno."
     }
    }
   ],
   "es": {
    "prompt": "Construye una bacteria de las fuentes: tráele solo las partes que tiene una bacteria de una célula",
    "good": [
     "Membrana celular",
     "Citoplasma",
     "ADN",
     "Ribosomas"
    ]
   }
  },
  {
   "id": "h1-plant",
   "code": "3.1.6-8.B",
   "model": "plant",
   "parts": [
    "Cell wall",
    "Plasma membrane",
    "Cytoplasm",
    "Nucleus",
    "Chloroplasts",
    "Vacuole",
    "Mitochondria"
   ],
   "prompt": "Build a spinach leaf cell: bring it the parts a plant cell has",
   "good": [
    "Cell wall",
    "Cell membrane",
    "Cytoplasm",
    "Nucleus",
    "Chloroplasts",
    "Vacuole",
    "Mitochondria"
   ],
   "bad": [
    {
     "text": "Bone",
     "explain": "Bone is a tissue in some animals. It is not a part inside a cell.",
     "es": {
      "text": "Hueso",
      "explain": "El hueso es un tejido de algunos animales. No es una parte dentro de una célula."
     }
    },
    {
     "text": "Soil",
     "explain": "Soil is outside the plant. Roots take water and minerals from it, but it is not a cell part.",
     "es": {
      "text": "Tierra",
      "explain": "La tierra está fuera de la planta. Las raíces toman agua y minerales de ella, pero no es una parte de la célula."
     }
    },
    {
     "text": "Sunlight",
     "explain": "Sunlight is energy that reaches the cell. The chloroplasts use it, but it is not a cell part.",
     "es": {
      "text": "Luz del sol",
      "explain": "La luz del sol es energía que llega a la célula. Los cloroplastos la usan, pero no es una parte de la célula."
     }
    }
   ],
   "es": {
    "prompt": "Construye una célula de hoja de espinaca: tráele las partes que tiene una célula vegetal",
    "good": [
     "Pared celular",
     "Membrana celular",
     "Citoplasma",
     "Núcleo",
     "Cloroplastos",
     "Vacuola",
     "Mitocondrias"
    ]
   }
  }
 ],
 "sorts": [
  {
   "id": "sort1-count",
   "code": "3.1.6-8.A",
   "prompt": "One cell or many cells?",
   "options": [
    "One cell",
    "Many cells"
   ],
   "hint": "If it is a whole organism you can easily see without a microscope, it is almost always made of many cells.",
   "items": [
    {
     "text": "Paramecium",
     "answer": 0,
     "explain": "A paramecium is a whole organism made of one cell.",
     "es": {
      "text": "Paramecio",
      "explain": "Un paramecio es un organismo completo formado por una célula."
     }
    },
    {
     "text": "Wood frog",
     "answer": 1,
     "explain": "A wood frog has millions of cells of many types.",
     "es": {
      "text": "Rana de bosque",
      "explain": "Una rana de bosque tiene millones de células de muchos tipos."
     }
    },
    {
     "text": "Pond bacterium",
     "answer": 0,
     "explain": "Each bacterium is a single cell.",
     "es": {
      "text": "Bacteria de la charca",
      "explain": "Cada bacteria es una sola célula."
     }
    },
    {
     "text": "Moss plant",
     "answer": 1,
     "explain": "Moss is a plant made of thousands of cells.",
     "es": {
      "text": "Planta de musgo",
      "explain": "El musgo es una planta formada por miles de células."
     }
    },
    {
     "text": "Amoeba",
     "answer": 0,
     "explain": "An amoeba is one cell that moves by changing its shape.",
     "es": {
      "text": "Ameba",
      "explain": "Una ameba es una célula que se mueve cambiando de forma."
     }
    },
    {
     "text": "Red maple tree",
     "answer": 1,
     "explain": "A tree is made of billions of cells.",
     "es": {
      "text": "Arce rojo",
      "explain": "Un árbol está formado por miles de millones de células."
     }
    }
   ],
   "es": {
    "prompt": "¿Una célula o muchas células?",
    "options": [
     "Una célula",
     "Muchas células"
    ],
    "hint": "Si es un organismo completo que se ve fácilmente sin microscopio, casi siempre está formado por muchas células."
   }
  },
  {
   "id": "sort1-vent",
   "code": "3.1.6-8.A",
   "prompt": "Deep-sea life: made of one cell, or of many types of cells?",
   "options": [
    "One cell",
    "Many types of cells"
   ],
   "hint": "Microorganisms are single cells. Animals are made of many types of cells.",
   "items": [
    {
     "text": "Archaea from a hot vent",
     "answer": 0,
     "explain": "Each archaeon is one cell.",
     "es": {
      "text": "Arqueas de una fuente caliente",
      "explain": "Cada arquea es una sola célula."
     }
    },
    {
     "text": "Giant tube worm",
     "answer": 1,
     "explain": "A tube worm has skin cells, muscle cells and many other types.",
     "es": {
      "text": "Gusano de tubo gigante",
      "explain": "Un gusano de tubo tiene células de piel, de músculo y de muchos otros tipos."
     }
    },
    {
     "text": "Diatom",
     "answer": 0,
     "explain": "A diatom is one cell inside a glassy shell.",
     "es": {
      "text": "Diatomea",
      "explain": "Una diatomea es una célula dentro de una concha parecida al vidrio."
     }
    },
    {
     "text": "Anglerfish",
     "answer": 1,
     "explain": "An anglerfish is an animal made of many types of cells.",
     "es": {
      "text": "Pez abisal",
      "explain": "Un pez abisal es un animal formado por muchos tipos de células."
     }
    },
    {
     "text": "Bacteria in a microbe mat",
     "answer": 0,
     "explain": "Each bacterium in the mat is one cell.",
     "es": {
      "text": "Bacterias de un tapete de microbios",
      "explain": "Cada bacteria del tapete es una sola célula."
     }
    }
   ],
   "es": {
    "prompt": "Vida del mar profundo: ¿formada por una célula o por muchos tipos de células?",
    "options": [
     "Una célula",
     "Muchos tipos de células"
    ],
    "hint": "Los microorganismos son células sueltas. Los animales están formados por muchos tipos de células."
   }
  },
  {
   "id": "sort1-pa",
   "code": "3.1.6-8.B",
   "prompt": "Which cells have this part?",
   "options": [
    "Plant cells only",
    "Both plant and animal cells"
   ],
   "hint": "Plant cells have three extra parts: a cell wall, chloroplasts and a large vacuole.",
   "items": [
    {
     "text": "Cell wall",
     "answer": 0,
     "explain": "Only plant cells have a stiff cell wall.",
     "es": {
      "text": "Pared celular",
      "explain": "Solo las células vegetales tienen una pared celular rígida."
     }
    },
    {
     "text": "Nucleus",
     "answer": 1,
     "explain": "Plant and animal cells both have a nucleus.",
     "es": {
      "text": "Núcleo",
      "explain": "Las células vegetales y animales tienen núcleo."
     }
    },
    {
     "text": "Chloroplasts",
     "answer": 0,
     "explain": "Only plant cells have chloroplasts to make food from sunlight.",
     "es": {
      "text": "Cloroplastos",
      "explain": "Solo las células vegetales tienen cloroplastos para producir alimento con la luz del sol."
     }
    },
    {
     "text": "Cell membrane",
     "answer": 1,
     "explain": "Every cell has a cell membrane.",
     "es": {
      "text": "Membrana celular",
      "explain": "Toda célula tiene membrana celular."
     }
    },
    {
     "text": "Mitochondria",
     "answer": 1,
     "explain": "Plant and animal cells both release energy with mitochondria.",
     "es": {
      "text": "Mitocondrias",
      "explain": "Las células vegetales y animales liberan energía con mitocondrias."
     }
    },
    {
     "text": "Large central vacuole",
     "answer": 0,
     "explain": "Plant cells have one large vacuole for water. Animal cells have only small ones, or none.",
     "es": {
      "text": "Vacuola central grande",
      "explain": "Las células vegetales tienen una vacuola grande para el agua. Las células animales solo tienen vacuolas pequeñas, o ninguna."
     }
    }
   ],
   "es": {
    "prompt": "¿Qué células tienen esta parte?",
    "options": [
     "Solo las células vegetales",
     "Las células vegetales y las animales"
    ],
    "hint": "Las células vegetales tienen tres partes extra: pared celular, cloroplastos y una vacuola grande."
   }
  }
 ],
 "questions": [
  {
   "id": "ms1q01",
   "code": "3.1.6-8.A",
   "prompt": "A student looks at a drop of pond water under a microscope and sees a tiny organism moving. What evidence would show that it is a living thing?",
   "options": [
    "It is made of at least one cell.",
    "It is smaller than a grain of sand.",
    "It is floating in water.",
    "It is shaped like a circle."
   ],
   "answer": 0,
   "hint": "What do all living things have in common?",
   "explain": "All living things are made of one or more cells. Size, shape and place do not show that something is alive.",
   "es": {
    "prompt": "Un estudiante mira una gota de agua de charca con un microscopio y ve un organismo diminuto que se mueve. ¿Qué evidencia mostraría que es un ser vivo?",
    "options": [
     "Está formado por al menos una célula.",
     "Es más pequeño que un grano de arena.",
     "Está flotando en el agua.",
     "Tiene forma de círculo."
    ],
    "hint": "¿Qué tienen en común todos los seres vivos?",
    "explain": "Todos los seres vivos están formados por una o más células. El tamaño, la forma y el lugar no muestran que algo esté vivo."
   }
  },
  {
   "id": "ms1q02",
   "code": "3.1.6-8.A",
   "prompt": "Which of these is made of only ONE cell?",
   "options": [
    "A paramecium",
    "A wood frog",
    "A moss plant",
    "An oak tree"
   ],
   "answer": 0,
   "hint": "Look for the organism that is too small to see without a microscope.",
   "explain": "A paramecium is unicellular. Frogs, moss and trees are multicellular.",
   "es": {
    "prompt": "¿Cuál de estos está formado por UNA sola célula?",
    "options": [
     "Un paramecio",
     "Una rana de bosque",
     "Una planta de musgo",
     "Un roble"
    ],
    "hint": "Busca el organismo que es demasiado pequeño para verlo sin microscopio.",
    "explain": "Un paramecio es unicelular. Las ranas, el musgo y los árboles son multicelulares."
   }
  },
  {
   "id": "ms1q03",
   "code": "3.1.6-8.A",
   "prompt": "A scientist looks at a rock, a leaf and a feather under a microscope. Cells are found in the leaf and the feather, but not in the rock. What can the scientist conclude?",
   "options": [
    "The rock is nonliving, and the leaf and feather came from living things.",
    "All three are alive right now.",
    "The rock is alive but too small to see.",
    "Only the feather was ever alive."
   ],
   "answer": 0,
   "hint": "Cells are evidence of life, now or in the past.",
   "explain": "Cells in the leaf and feather show they came from living things. The rock has no cells, so it is nonliving.",
   "es": {
    "prompt": "Una científica mira una roca, una hoja y una pluma con un microscopio. Encuentra células en la hoja y en la pluma, pero no en la roca. ¿Qué puede concluir?",
    "options": [
     "La roca es inerte, y la hoja y la pluma vinieron de seres vivos.",
     "Las tres cosas están vivas ahora.",
     "La roca está viva, pero es demasiado pequeña para verse.",
     "Solo la pluma estuvo viva alguna vez."
    ],
    "hint": "Las células son evidencia de vida, ahora o en el pasado.",
    "explain": "Las células de la hoja y la pluma muestran que vinieron de seres vivos. La roca no tiene células, así que es inerte."
   }
  },
  {
   "id": "ms1q04",
   "code": "3.1.6-8.A",
   "prompt": "Why do scientists need a microscope to study most cells?",
   "options": [
    "Most cells are too small to see with our eyes alone.",
    "Cells only appear in the dark.",
    "Cells move too fast to see.",
    "Cells are always hidden inside rocks."
   ],
   "answer": 0,
   "hint": "Think about the size of a cell.",
   "explain": "Most cells are far too small to see without the extra magnification of a microscope.",
   "es": {
    "prompt": "¿Por qué los científicos necesitan un microscopio para estudiar la mayoría de las células?",
    "options": [
     "La mayoría de las células son demasiado pequeñas para verlas solo con los ojos.",
     "Las células solo aparecen en la oscuridad.",
     "Las células se mueven demasiado rápido para verlas.",
     "Las células siempre están escondidas dentro de las rocas."
    ],
    "hint": "Piensa en el tamaño de una célula.",
    "explain": "La mayoría de las células son demasiado pequeñas para verlas sin el aumento de un microscopio."
   }
  },
  {
   "id": "ms1q05",
   "code": "3.1.6-8.A",
   "prompt": "A wood frog has skin cells, muscle cells and blood cells. What does this show?",
   "options": [
    "Multicellular organisms can be made of many different types of cells.",
    "Every cell in a frog has the same shape.",
    "A frog is made of one very large cell.",
    "Only plants have different types of cells."
   ],
   "answer": 0,
   "hint": "Count the kinds of cells named.",
   "explain": "A frog has many types of specialized cells, each with its own job.",
   "es": {
    "prompt": "Una rana de bosque tiene células de piel, de músculo y de sangre. ¿Qué muestra esto?",
    "options": [
     "Los organismos multicelulares pueden estar formados por muchos tipos distintos de células.",
     "Todas las células de una rana tienen la misma forma.",
     "Una rana está formada por una célula muy grande.",
     "Solo las plantas tienen distintos tipos de células."
    ],
    "hint": "Cuenta los tipos de células que se nombran.",
    "explain": "Una rana tiene muchos tipos de células especializadas, cada una con su propio trabajo."
   }
  },
  {
   "id": "ms1q06",
   "code": "3.1.6-8.A",
   "prompt": "A rotting log has no living tree cells, but it is still made of cells. Which statement explains this?",
   "options": [
    "The log came from a tree that was once alive.",
    "Rocks inside the log made the cells.",
    "Rain added cells to the log.",
    "The log was made in a factory."
   ],
   "answer": 0,
   "hint": "Where did the log come from?",
   "explain": "The log is once living: it is made of the cells of a tree that used to be alive.",
   "es": {
    "prompt": "Un tronco podrido no tiene células de árbol vivas, pero sigue formado por células. ¿Qué enunciado lo explica?",
    "options": [
     "El tronco vino de un árbol que estuvo vivo.",
     "Las rocas dentro del tronco formaron las células.",
     "La lluvia agregó células al tronco.",
     "El tronco se fabricó en una fábrica."
    ],
    "hint": "¿De dónde vino el tronco?",
    "explain": "El tronco estuvo vivo: está formado por las células de un árbol que antes vivía."
   }
  },
  {
   "id": "ms1q07",
   "code": "3.1.6-8.A",
   "prompt": "A salamander begins life as one egg cell. How does it become an animal with millions of cells?",
   "options": [
    "The cell divides again and again.",
    "It absorbs cells from the water.",
    "Its cells grow into one giant cell.",
    "It eats other salamanders."
   ],
   "answer": 0,
   "hint": "Think about cell division.",
   "explain": "Cell division makes new cells. One cell becomes 2, then 4, then 8, and on to millions.",
   "es": {
    "prompt": "Una salamandra empieza su vida como un óvulo (una célula). ¿Cómo se convierte en un animal con millones de células?",
    "options": [
     "La célula se divide una y otra vez.",
     "Absorbe células del agua.",
     "Sus células crecen hasta formar una célula gigante.",
     "Se come a otras salamandras."
    ],
    "hint": "Piensa en la división celular.",
    "explain": "La división celular forma células nuevas. Una célula se vuelve 2, luego 4, luego 8, y así hasta millones."
   }
  },
  {
   "id": "ms1q08",
   "code": "3.1.6-8.A",
   "prompt": "Deep-sea archaea live in water hotter than 100 °C. How many cells does one archaeon have?",
   "options": [
    "One",
    "Two",
    "About one hundred",
    "Millions"
   ],
   "answer": 0,
   "hint": "Archaea are microorganisms.",
   "explain": "Each archaeon is a single cell: a complete organism made of one cell.",
   "es": {
    "prompt": "Las arqueas del mar profundo viven en agua a más de 100 °C. ¿Cuántas células tiene una arquea?",
    "options": [
     "Una",
     "Dos",
     "Unas cien",
     "Millones"
    ],
    "hint": "Las arqueas son microorganismos.",
    "explain": "Cada arquea es una sola célula: un organismo completo formado por una célula."
   }
  },
  {
   "id": "ms1q09",
   "code": "3.1.6-8.A",
   "prompt": "Which is the BEST way to find out whether a strange green clump from a pond is a living thing?",
   "options": [
    "Look at a sample under a microscope for cells.",
    "Measure how heavy it is.",
    "Check whether it is the color green.",
    "See whether it floats."
   ],
   "answer": 0,
   "hint": "Which test looks for evidence of life?",
   "explain": "Finding cells is evidence of life. Weight, color and floating do not tell you if something is alive.",
   "es": {
    "prompt": "¿Cuál es la MEJOR manera de saber si una masa verde extraña de una charca es un ser vivo?",
    "options": [
     "Mirar una muestra con un microscopio para buscar células.",
     "Medir cuánto pesa.",
     "Revisar si es de color verde.",
     "Ver si flota."
    ],
    "hint": "¿Qué prueba busca evidencia de vida?",
    "explain": "Encontrar células es evidencia de vida. El peso, el color y si flota no te dicen si algo está vivo."
   }
  },
  {
   "id": "ms1q10",
   "code": "3.1.6-8.A",
   "prompt": "A giant tube worm is made of many types of cells, and bacteria live inside it. Which statement is correct?",
   "options": [
    "The worm is multicellular, and each bacterium is unicellular.",
    "The worm and the bacteria are both unicellular.",
    "The worm is unicellular, and the bacteria are multicellular.",
    "Neither the worm nor the bacteria is made of cells."
   ],
   "answer": 0,
   "hint": "One is an animal; the others are microorganisms.",
   "explain": "The worm has many cells of many types. Each bacterium living inside it is one cell.",
   "es": {
    "prompt": "Un gusano de tubo gigante está formado por muchos tipos de células, y dentro de él viven bacterias. ¿Qué enunciado es correcto?",
    "options": [
     "El gusano es multicelular y cada bacteria es unicelular.",
     "El gusano y las bacterias son unicelulares.",
     "El gusano es unicelular y las bacterias son multicelulares.",
     "Ni el gusano ni las bacterias están formados por células."
    ],
    "hint": "Uno es un animal; los otros son microorganismos.",
    "explain": "El gusano tiene muchas células de muchos tipos. Cada bacteria que vive dentro de él es una sola célula."
   }
  },
  {
   "id": "ms1q11",
   "code": "3.1.6-8.B",
   "prompt": "Which cell part controls what enters and leaves a cell?",
   "options": [
    "Cell membrane",
    "Nucleus",
    "Chloroplast",
    "Vacuole"
   ],
   "answer": 0,
   "hint": "Think of the cell’s gatekeeper.",
   "explain": "The cell membrane lets some materials in and out and keeps others out.",
   "es": {
    "prompt": "¿Qué parte de la célula controla lo que entra y sale de ella?",
    "options": [
     "Membrana celular",
     "Núcleo",
     "Cloroplasto",
     "Vacuola"
    ],
    "hint": "Piensa en el guardián de la puerta de la célula.",
    "explain": "La membrana celular deja entrar y salir algunas sustancias y no deja pasar otras."
   }
  },
  {
   "id": "ms1q12",
   "code": "3.1.6-8.B",
   "prompt": "A leaf cell has many chloroplasts. What is their job?",
   "options": [
    "Use sunlight to make sugar",
    "Store the cell’s genetic instructions",
    "Give the cell a stiff shape",
    "Break down wastes"
   ],
   "answer": 0,
   "hint": "Chloroplasts are green.",
   "explain": "Chloroplasts use sunlight, water and carbon dioxide to make sugar, which is the plant’s food.",
   "es": {
    "prompt": "Una célula de hoja tiene muchos cloroplastos. ¿Cuál es su trabajo?",
    "options": [
     "Usar la luz del sol para producir azúcar",
     "Guardar las instrucciones genéticas de la célula",
     "Dar a la célula una forma rígida",
     "Descomponer los desechos"
    ],
    "hint": "Los cloroplastos son verdes.",
    "explain": "Los cloroplastos usan la luz del sol, el agua y el dióxido de carbono para producir azúcar, que es el alimento de la planta."
   }
  },
  {
   "id": "ms1q13",
   "code": "3.1.6-8.B",
   "prompt": "Which part do BOTH plant cells and animal cells have?",
   "options": [
    "Mitochondria",
    "Cell wall",
    "Chloroplasts",
    "A large central vacuole"
   ],
   "answer": 0,
   "hint": "Both kinds of cells need to release energy from food.",
   "explain": "Plant and animal cells both have mitochondria. Only plant cells have a cell wall, chloroplasts and a large vacuole.",
   "es": {
    "prompt": "¿Qué parte tienen TANTO las células vegetales como las animales?",
    "options": [
     "Mitocondrias",
     "Pared celular",
     "Cloroplastos",
     "Una vacuola central grande"
    ],
    "hint": "Los dos tipos de células necesitan liberar energía de los alimentos.",
    "explain": "Las células vegetales y animales tienen mitocondrias. Solo las vegetales tienen pared celular, cloroplastos y una vacuola grande."
   }
  },
  {
   "id": "ms1q14",
   "code": "3.1.6-8.B",
   "prompt": "A plant is not watered for a week, and its leaves droop. Which cell part most likely shrank?",
   "options": [
    "Vacuole",
    "Nucleus",
    "Mitochondria",
    "Cell membrane"
   ],
   "answer": 0,
   "hint": "Which part stores water?",
   "explain": "The vacuole stores water. When it loses water, the cell goes limp and the leaves droop.",
   "es": {
    "prompt": "Una planta no se riega durante una semana y sus hojas se caen. ¿Qué parte de la célula probablemente se encogió?",
    "options": [
     "Vacuola",
     "Núcleo",
     "Mitocondrias",
     "Membrana celular"
    ],
    "hint": "¿Qué parte guarda agua?",
    "explain": "La vacuola guarda agua. Cuando pierde agua, la célula se ablanda y las hojas se caen."
   }
  },
  {
   "id": "ms1q15",
   "code": "3.1.6-8.B",
   "prompt": "Which cell part holds the instructions that control the cell?",
   "options": [
    "Nucleus",
    "Cytoplasm",
    "Cell wall",
    "Vacuole"
   ],
   "answer": 0,
   "hint": "Think of the control center.",
   "explain": "The nucleus holds the genetic instructions and controls the cell’s activities.",
   "es": {
    "prompt": "¿Qué parte de la célula guarda las instrucciones que la controlan?",
    "options": [
     "Núcleo",
     "Citoplasma",
     "Pared celular",
     "Vacuola"
    ],
    "hint": "Piensa en el centro de control.",
    "explain": "El núcleo guarda las instrucciones genéticas y controla las actividades de la célula."
   }
  },
  {
   "id": "ms1q16",
   "code": "3.1.6-8.B",
   "prompt": "Why do plant cells look more like boxes than animal cells do?",
   "options": [
    "Plant cells have a stiff cell wall.",
    "Plant cells have no cell membrane.",
    "Animal cells have chloroplasts.",
    "Animal cells have a larger nucleus."
   ],
   "answer": 0,
   "hint": "Which part gives support and shape?",
   "explain": "The stiff cell wall gives plant cells their boxy shape. Animal cells have no cell wall.",
   "es": {
    "prompt": "¿Por qué las células vegetales se parecen más a cajas que las células animales?",
    "options": [
     "Las células vegetales tienen una pared celular rígida.",
     "Las células vegetales no tienen membrana celular.",
     "Las células animales tienen cloroplastos.",
     "Las células animales tienen un núcleo más grande."
    ],
    "hint": "¿Qué parte da soporte y forma?",
    "explain": "La pared celular rígida da a las células vegetales su forma de caja. Las células animales no tienen pared celular."
   }
  },
  {
   "id": "ms1q17",
   "code": "3.1.6-8.B",
   "prompt": "A muscle cell needs a lot of energy. Which part would you expect it to have many of?",
   "options": [
    "Mitochondria",
    "Chloroplasts",
    "Cell walls",
    "Vacuoles"
   ],
   "answer": 0,
   "hint": "Which part releases energy from food?",
   "explain": "Mitochondria release energy from food, so cells that work hard, like muscle cells, have many of them.",
   "es": {
    "prompt": "Una célula de músculo necesita mucha energía. ¿De qué parte esperarías que tenga muchas?",
    "options": [
     "Mitocondrias",
     "Cloroplastos",
     "Paredes celulares",
     "Vacuolas"
    ],
    "hint": "¿Qué parte libera energía de los alimentos?",
    "explain": "Las mitocondrias liberan la energía de los alimentos, así que las células que trabajan mucho, como las de los músculos, tienen muchas."
   }
  },
  {
   "id": "ms1q18",
   "code": "3.1.6-8.B",
   "prompt": "In a leaf cell, the chloroplasts make sugar and the mitochondria release energy from it. What does this show about cells?",
   "options": [
    "Cell parts work together so the whole cell can live.",
    "Each cell part works alone.",
    "Mitochondria make sugar from sunlight.",
    "Only the nucleus does any work."
   ],
   "answer": 0,
   "hint": "Think about how one part’s product is used by another.",
   "explain": "One part makes food and another releases its energy: the parts work together as a system.",
   "es": {
    "prompt": "En una célula de hoja, los cloroplastos producen azúcar y las mitocondrias liberan su energía. ¿Qué muestra esto sobre las células?",
    "options": [
     "Las partes de la célula trabajan juntas para que toda la célula viva.",
     "Cada parte de la célula trabaja sola.",
     "Las mitocondrias producen azúcar con la luz del sol.",
     "Solo el núcleo hace algún trabajo."
    ],
    "hint": "Piensa en cómo una parte usa lo que produce otra.",
    "explain": "Una parte produce alimento y otra libera su energía: las partes trabajan juntas como un sistema."
   }
  },
  {
   "id": "ms1q19",
   "code": "3.1.6-8.B",
   "prompt": "Oxygen enters a sea star’s cell and carbon dioxide leaves it. Which part do both pass through?",
   "options": [
    "Cell membrane",
    "Cell wall",
    "Chloroplast",
    "Nucleus"
   ],
   "answer": 0,
   "hint": "Animal cells have no cell wall.",
   "explain": "Materials enter and leave every cell through the cell membrane.",
   "es": {
    "prompt": "El oxígeno entra en una célula de estrella de mar y el dióxido de carbono sale. ¿Por qué parte pasan los dos?",
    "options": [
     "Membrana celular",
     "Pared celular",
     "Cloroplasto",
     "Núcleo"
    ],
    "hint": "Las células animales no tienen pared celular.",
    "explain": "Las sustancias entran y salen de toda célula por la membrana celular."
   }
  },
  {
   "id": "ms1q20",
   "code": "3.1.6-8.B",
   "prompt": "A student builds a cell model from a box, a sponge ball and some green beads. Which cell part do the green beads MOST likely stand for?",
   "options": [
    "Chloroplasts",
    "Nucleus",
    "Cell membrane",
    "Cytoplasm"
   ],
   "answer": 0,
   "hint": "Which part of a plant cell is green and comes in many copies?",
   "explain": "Plant cells have many green chloroplasts, so green beads are a good model of them.",
   "es": {
    "prompt": "Un estudiante hace un modelo de célula con una caja, una pelota de esponja y unas cuentas verdes. ¿Qué parte de la célula representan MÁS probablemente las cuentas verdes?",
    "options": [
     "Cloroplastos",
     "Núcleo",
     "Membrana celular",
     "Citoplasma"
    ],
    "hint": "¿Qué parte de una célula vegetal es verde y hay muchas copias?",
    "explain": "Las células vegetales tienen muchos cloroplastos verdes, así que las cuentas verdes son un buen modelo de ellos."
   }
  },
  {
   "id": "ms1q21",
   "code": "3.1.6-8.B",
   "prompt": "Where do the parts of a cell float?",
   "options": [
    "In the cytoplasm",
    "In the cell wall",
    "In the nucleus",
    "Outside the cell membrane"
   ],
   "answer": 0,
   "hint": "Think of the jelly that fills the cell.",
   "explain": "The organelles float in the cytoplasm, the jelly-like material inside the cell membrane.",
   "es": {
    "prompt": "¿Dónde flotan las partes de una célula?",
    "options": [
     "En el citoplasma",
     "En la pared celular",
     "En el núcleo",
     "Fuera de la membrana celular"
    ],
    "hint": "Piensa en la gelatina que llena la célula.",
    "explain": "Los organelos flotan en el citoplasma, el material gelatinoso dentro de la membrana celular."
   }
  },
  {
   "id": "ms1q22",
   "code": "3.1.6-8.B",
   "prompt": "A one-celled bacterium has no nucleus. Where is its DNA?",
   "options": [
    "Floating in the cytoplasm",
    "Inside its chloroplasts",
    "In its cell wall only",
    "Outside the cell"
   ],
   "answer": 0,
   "hint": "Bacteria have no nucleus to hold their DNA.",
   "explain": "In bacteria, the DNA floats in the cytoplasm because there is no nucleus.",
   "es": {
    "prompt": "Una bacteria de una sola célula no tiene núcleo. ¿Dónde está su ADN?",
    "options": [
     "Flotando en el citoplasma",
     "Dentro de sus cloroplastos",
     "Solo en su pared celular",
     "Fuera de la célula"
    ],
    "hint": "Las bacterias no tienen núcleo para guardar su ADN.",
    "explain": "En las bacterias, el ADN flota en el citoplasma porque no hay núcleo."
   }
  }
 ],
 "pairs": [
  {
   "name": "Unicellular or multicellular?",
   "explain": "Unicellular organisms are one cell. Multicellular organisms are made of many cells, often of many types.",
   "members": [
    {
     "label": "Unicellular",
     "level": "1-1",
     "ids": [
      "sort1-count.0",
      "sort1-count.2",
      "ms1q02"
     ]
    },
    {
     "label": "Multicellular",
     "level": "1-1",
     "ids": [
      "sort1-count.1",
      "sort1-count.3",
      "ms1q05"
     ]
    }
   ],
   "es": {
    "name": "¿Unicelular o multicelular?",
    "explain": "Los organismos unicelulares son una sola célula. Los multicelulares están formados por muchas células, a menudo de muchos tipos."
   }
  },
  {
   "name": "Cell wall or cell membrane?",
   "explain": "Every cell has a cell membrane that controls what goes in and out. Only plant cells also have a stiff cell wall outside it.",
   "members": [
    {
     "label": "Cell wall",
     "level": "1-3",
     "ids": [
      "sort1-pa.0",
      "ms1q16"
     ]
    },
    {
     "label": "Cell membrane",
     "level": "1-3",
     "ids": [
      "sort1-pa.3",
      "ms1q11",
      "ms1q19"
     ]
    }
   ],
   "es": {
    "name": "¿Pared celular o membrana celular?",
    "explain": "Toda célula tiene una membrana celular que controla lo que entra y sale. Solo las células vegetales tienen además una pared celular rígida por fuera."
   }
  },
  {
   "name": "Chloroplast or mitochondria?",
   "explain": "Chloroplasts MAKE sugar from sunlight. Mitochondria RELEASE the energy stored in sugar.",
   "members": [
    {
     "label": "Chloroplast",
     "level": "1-3",
     "ids": [
      "ms1q12",
      "sort1-pa.2"
     ]
    },
    {
     "label": "Mitochondria",
     "level": "1-3",
     "ids": [
      "ms1q17",
      "sort1-pa.4"
     ]
    }
   ],
   "es": {
    "name": "¿Cloroplasto o mitocondria?",
    "explain": "Los cloroplastos PRODUCEN azúcar con la luz del sol. Las mitocondrias LIBERAN la energía guardada en el azúcar."
   }
  }
 ],
 "become": [
  {
   "id": "b1-oxygen",
   "code": "3.1.6-8.B",
   "you": "an oxygen molecule in the seawater",
   "short": "O₂",
   "color": "#9fe0ff",
   "goal": "Get into a sea star’s cell, so its mitochondria can use you to release energy.",
   "here": "Seawater",
   "there": "Inside the cell",
   "what": "oxygen",
   "hereCrowd": 16,
   "thereCrowd": 4,
   "doors": [
    {
     "kind": "lipid",
     "label": "Pass through the cell membrane",
     "ok": true,
     "es": {
      "label": "Pasa a través de la membrana celular"
     }
    },
    {
     "kind": "protein",
     "label": "Squeeze through the cell wall",
     "ok": false,
     "es": {
      "label": "Pasa por la pared celular",
      "why": "Las células animales, como las de la estrella de mar, no tienen pared celular."
     },
     "why": "Animal cells, like a sea star’s, have no cell wall."
    },
    {
     "kind": "pump",
     "label": "Wait for the nucleus to let you in",
     "ok": false,
     "es": {
      "label": "Espera a que el núcleo te deje entrar",
      "why": "El núcleo controla la célula, pero las sustancias entran por la membrana celular."
     },
     "why": "The nucleus controls the cell, but materials enter through the cell membrane."
    }
   ],
   "explain": "The cell membrane lets oxygen in. Inside, the mitochondria use oxygen to release energy from food.",
   "es": {
    "you": "una molécula de oxígeno en el agua de mar",
    "goal": "Entra en una célula de la estrella de mar, para que sus mitocondrias te usen para liberar energía.",
    "here": "Agua de mar",
    "there": "Dentro de la célula",
    "what": "oxígeno",
    "explain": "La membrana celular deja entrar el oxígeno. Adentro, las mitocondrias usan el oxígeno para liberar la energía de los alimentos."
   }
  },
  {
   "id": "b1-waste",
   "code": "3.1.6-8.B",
   "you": "carbon dioxide, a waste made inside the cell",
   "short": "CO₂",
   "color": "#ffb09c",
   "goal": "Leave the cell. Wastes must get out!",
   "here": "Inside the cell",
   "there": "Seawater",
   "what": "carbon dioxide",
   "hereCrowd": 14,
   "thereCrowd": 5,
   "doors": [
    {
     "kind": "lipid",
     "label": "Out through the cell membrane",
     "ok": true,
     "es": {
      "label": "Sal por la membrana celular"
     }
    },
    {
     "kind": "protein",
     "label": "Hide in the nucleus",
     "ok": false,
     "es": {
      "label": "Escóndete en el núcleo",
      "why": "El núcleo guarda las instrucciones de la célula. Los desechos no van ahí."
     },
     "why": "The nucleus holds the cell’s instructions. Wastes do not belong there."
    },
    {
     "kind": "pump",
     "label": "Turn into sunlight",
     "ok": false,
     "es": {
      "label": "Conviértete en luz del sol",
      "why": "La materia no puede convertirse en luz del sol. El dióxido de carbono sale de la célula como gas."
     },
     "why": "Matter cannot turn into sunlight. Carbon dioxide leaves the cell as a gas."
    }
   ],
   "explain": "Wastes like carbon dioxide leave through the cell membrane, the same layer that lets food and oxygen in.",
   "es": {
    "you": "dióxido de carbono, un desecho producido dentro de la célula",
    "goal": "Sal de la célula. ¡Los desechos deben salir!",
    "here": "Dentro de la célula",
    "there": "Agua de mar",
    "what": "dióxido de carbono",
    "explain": "Los desechos como el dióxido de carbono salen por la membrana celular, la misma capa que deja entrar el alimento y el oxígeno."
   }
  }
 ],
 "data": [
  {
   "id": "d1-scope",
   "code": "3.1.6-8.A",
   "title": "Microscope survey: cells seen in one view",
   "xlabel": "Sample",
   "ylabel": "Cells seen in one view",
   "categories": [
    "Pond water",
    "Moss leaf",
    "Onion skin",
    "Sand",
    "Salamander egg"
   ],
   "values": [
    6,
    45,
    30,
    0,
    1
   ],
   "questions": [
    {
     "prompt": "Which sample showed NO cells at all?",
     "answer": 3,
     "hint": "Find the bar with a value of zero.",
     "explain": "The sand showed no cells. Sand is tiny bits of rock, so it is nonliving.",
     "es": {
      "prompt": "¿Qué muestra NO mostró ninguna célula?",
      "hint": "Busca la barra con valor cero.",
      "explain": "La arena no mostró células. La arena son pedacitos de roca, así que es inerte."
     }
    },
    {
     "prompt": "Which sample had the MOST cells in one view?",
     "answer": 1,
     "hint": "Find the tallest bar.",
     "explain": "The moss leaf had the most. A moss plant is multicellular: made of many cells.",
     "es": {
      "prompt": "¿Qué muestra tuvo MÁS células en una vista?",
      "hint": "Busca la barra más alta.",
      "explain": "La hoja de musgo tuvo más. Una planta de musgo es multicelular: formada por muchas células."
     }
    },
    {
     "prompt": "A newly laid egg is a single cell. Which sample matches that?",
     "answer": 4,
     "hint": "Look for a value of exactly one.",
     "explain": "The salamander egg showed one cell. It will divide many times to become a salamander.",
     "es": {
      "prompt": "Un huevo recién puesto es una sola célula. ¿Qué muestra coincide con eso?",
      "hint": "Busca un valor de exactamente uno.",
      "explain": "El huevo de salamandra mostró una célula. Se dividirá muchas veces hasta convertirse en salamandra."
     }
    }
   ],
   "es": {
    "title": "Estudio con microscopio: células vistas en una vista",
    "xlabel": "Muestra",
    "ylabel": "Células vistas en una vista",
    "categories": [
     "Agua de charca",
     "Hoja de musgo",
     "Piel de cebolla",
     "Arena",
     "Huevo de salamandra"
    ]
   }
  }
 ],
 "mazes": [
  {
   "id": "maze1-in",
   "code": "3.1.6-8.B",
   "title": "Travel into a plant cell: go through the doorway for the next layer",
   "start": "Outside the cell",
   "steps": [
    {
     "label": "Cell wall",
     "hint": "What stiff layer is on the very outside of a plant cell?",
     "why": "The cell wall is the outer layer of a plant cell. It gives support.",
     "es": {
      "label": "Pared celular",
      "hint": "¿Qué capa rígida está en la parte más externa de una célula vegetal?",
      "why": "La pared celular es la capa externa de una célula vegetal. Da soporte."
     }
    },
    {
     "label": "Cell membrane",
     "hint": "What thin layer, just inside the wall, controls what goes in and out?",
     "why": "The cell membrane is just inside the wall. It controls what enters and leaves.",
     "es": {
      "label": "Membrana celular",
      "hint": "¿Qué capa delgada, justo dentro de la pared, controla lo que entra y sale?",
      "why": "La membrana celular está justo dentro de la pared. Controla lo que entra y sale."
     }
    },
    {
     "label": "Cytoplasm",
     "hint": "What jelly fills the cell?",
     "why": "Cytoplasm fills the cell, and the organelles float in it.",
     "es": {
      "label": "Citoplasma",
      "hint": "¿Qué gelatina llena la célula?",
      "why": "El citoplasma llena la célula y los organelos flotan en él."
     }
    },
    {
     "label": "Nucleus",
     "hint": "What is the control center that holds the instructions?",
     "why": "The nucleus holds the cell’s genetic instructions and controls its activities.",
     "es": {
      "label": "Núcleo",
      "hint": "¿Cuál es el centro de control que guarda las instrucciones?",
      "why": "El núcleo guarda las instrucciones genéticas de la célula y controla sus actividades."
     }
    }
   ],
   "extra": [
    "Bone",
    "Heart",
    "Soil"
   ],
   "explain": "You traveled from the cell wall, through the membrane and cytoplasm, to the nucleus.",
   "es": {
    "title": "Viaja dentro de una célula vegetal: cruza la puerta de la siguiente capa",
    "start": "Fuera de la célula",
    "extra": [
     "Hueso",
     "Corazón",
     "Tierra"
    ],
    "explain": "Viajaste desde la pared celular, a través de la membrana y el citoplasma, hasta el núcleo."
   }
  }
 ],
 "sequences": [
  {
   "id": "seq1-sugar",
   "code": "3.1.6-8.B",
   "title": "How the parts of a leaf cell work together to get energy",
   "steps": [
    "Sunlight reaches the chloroplasts",
    "The chloroplasts make sugar",
    "The sugar moves through the cytoplasm",
    "The mitochondria release energy from the sugar"
   ],
   "hint": "Start with the energy that comes from outside the cell.",
   "explain": "Chloroplasts make food, and mitochondria release its energy. The parts work together so the cell can live.",
   "es": {
    "title": "Cómo trabajan juntas las partes de una célula de hoja para obtener energía",
    "steps": [
     "La luz del sol llega a los cloroplastos",
     "Los cloroplastos producen azúcar",
     "El azúcar se mueve por el citoplasma",
     "Las mitocondrias liberan la energía del azúcar"
    ],
    "hint": "Empieza con la energía que viene de fuera de la célula.",
    "explain": "Los cloroplastos producen alimento y las mitocondrias liberan su energía. Las partes trabajan juntas para que la célula viva."
   }
  },
  {
   "id": "seq1-egg",
   "code": "3.1.6-8.A",
   "title": "From one cell to a salamander",
   "steps": [
    "A single egg cell",
    "The cell divides into 2 cells",
    "Those cells divide again and again",
    "The cells become different types: skin, muscle, blood",
    "A young salamander with millions of cells"
   ],
   "hint": "Every salamander begins as just one cell.",
   "explain": "One cell divides many times, and the new cells become specialized. That is how a multicellular organism grows.",
   "es": {
    "title": "De una célula a una salamandra",
    "steps": [
     "Un solo óvulo (una célula)",
     "La célula se divide en 2 células",
     "Esas células se dividen una y otra vez",
     "Las células se vuelven de distintos tipos: piel, músculo, sangre",
     "Una salamandra joven con millones de células"
    ],
    "hint": "Toda salamandra empieza como una sola célula.",
    "explain": "Una célula se divide muchas veces y las células nuevas se especializan. Así crece un organismo multicelular."
   }
  }
 ],
 "wordbanks": [
  {
   "id": "wb1-parts",
   "code": "3.1.6-8.B",
   "words": [
    "nucleus",
    "chloroplasts",
    "cell membrane",
    "mitochondria",
    "cell wall",
    "vacuole"
   ],
   "sentences": [
    {
     "text": "The ___ controls the cell and holds its genetic instructions.",
     "answer": "nucleus",
     "code": "3.1.6-8.B",
     "explain": "The nucleus is the control center.",
     "es": {
      "text": "El ___ controla la célula y guarda sus instrucciones genéticas.",
      "answer": "núcleo",
      "explain": "El núcleo es el centro de control."
     }
    },
    {
     "text": "Plant cells make sugar from sunlight in their ___.",
     "answer": "chloroplasts",
     "code": "3.1.6-8.B",
     "explain": "Chloroplasts use sunlight to make food.",
     "es": {
      "text": "Las células vegetales producen azúcar con la luz del sol en sus ___.",
      "answer": "cloroplastos",
      "explain": "Los cloroplastos usan la luz del sol para producir alimento."
     }
    },
    {
     "text": "The ___ lets some materials in and keeps others out.",
     "answer": "cell membrane",
     "code": "3.1.6-8.B",
     "explain": "Every cell has a membrane that controls what goes in and out.",
     "es": {
      "text": "La ___ deja entrar algunas sustancias y no deja pasar otras.",
      "answer": "membrana celular",
      "explain": "Toda célula tiene una membrana que controla lo que entra y sale."
     }
    },
    {
     "text": "Cells get energy from food in their ___.",
     "answer": "mitochondria",
     "code": "3.1.6-8.B",
     "explain": "Mitochondria release the energy stored in food.",
     "es": {
      "text": "Las células obtienen energía de los alimentos en sus ___.",
      "answer": "mitocondrias",
      "explain": "Las mitocondrias liberan la energía guardada en los alimentos."
     }
    },
    {
     "text": "A stiff ___ helps a plant cell keep its shape.",
     "answer": "cell wall",
     "code": "3.1.6-8.B",
     "explain": "The cell wall supports plant cells.",
     "es": {
      "text": "Una ___ rígida ayuda a la célula vegetal a mantener su forma.",
      "answer": "pared celular",
      "explain": "La pared celular sostiene las células vegetales."
     }
    }
   ],
   "es": {
    "words": [
     "núcleo",
     "cloroplastos",
     "membrana celular",
     "mitocondrias",
     "pared celular",
     "vacuola"
    ]
   }
  }
 ],
 "lablocks": [
  {
   "id": "lock1",
   "title": "Lab Lock",
   "es": {
    "title": "Candado del laboratorio"
   },
   "clues": [
    {
     "prompt": "Clue 1: How many of these are made of cells? Rock, moss, paramecium, sand, wood frog.",
     "answer": 3,
     "code": "3.1.6-8.A",
     "hint": "Cross out the nonliving things.",
     "explain": "Moss, the paramecium and the wood frog are made of cells: 3.",
     "es": {
      "prompt": "Pista 1: ¿Cuántos de estos están formados por células? Roca, musgo, paramecio, arena, rana de bosque.",
      "hint": "Tacha las cosas inertes.",
      "explain": "El musgo, el paramecio y la rana de bosque están formados por células: 3."
     }
    },
    {
     "prompt": "Clue 2: How many cells make up one paramecium?",
     "answer": 1,
     "code": "3.1.6-8.A",
     "hint": "Remember the word unicellular.",
     "explain": "A paramecium is unicellular: 1 cell.",
     "es": {
      "prompt": "Pista 2: ¿Cuántas células forman un paramecio?",
      "hint": "Recuerda la palabra unicelular.",
      "explain": "Un paramecio es unicelular: 1 célula."
     }
    },
    {
     "prompt": "Clue 3: How many of these parts do plant cells have but animal cells do not? Cell wall, nucleus, chloroplasts, mitochondria.",
     "answer": 2,
     "code": "3.1.6-8.B",
     "hint": "Only two are found in plant cells alone.",
     "explain": "The cell wall and chloroplasts: 2.",
     "es": {
      "prompt": "Pista 3: ¿Cuántas de estas partes tienen las células vegetales pero no las animales? Pared celular, núcleo, cloroplastos, mitocondrias.",
      "hint": "Solo dos están únicamente en las células vegetales.",
      "explain": "La pared celular y los cloroplastos: 2."
     }
    },
    {
     "prompt": "Clue 4: Look at the microscope survey again. How many samples showed at least one cell?",
     "answer": 4,
     "code": "3.1.6-8.A",
     "hint": "Count every bar above zero.",
     "explain": "Pond water, moss, onion skin and the salamander egg: 4.",
     "es": {
      "prompt": "Pista 4: Mira otra vez el estudio con microscopio. ¿Cuántas muestras mostraron al menos una célula?",
      "hint": "Cuenta cada barra mayor que cero.",
      "explain": "El agua de charca, el musgo, la piel de cebolla y el huevo de salamandra: 4.",
      "figure": {
       "type": "bars",
       "categories": [
        "Agua de charca",
        "Hoja de musgo",
        "Piel de cebolla",
        "Arena",
        "Huevo de salamandra"
       ],
       "values": [
        6,
        45,
        30,
        0,
        1
       ],
       "ylabel": "Células vistas"
      }
     },
     "figure": {
      "type": "bars",
      "categories": [
       "Pond water",
       "Moss leaf",
       "Onion skin",
       "Sand",
       "Salamander egg"
      ],
      "values": [
       6,
       45,
       30,
       0,
       1
      ],
      "ylabel": "Cells seen"
     }
    }
   ]
  }
 ],
 "scans": [
  {
   "id": "s1-pool",
   "name": "Vernal pool",
   "look": "drop",
   "color": "#7fb8d8",
   "word": "Vernal pool",
   "def": "A small pond that fills with water in spring and dries up by late summer.",
   "note": "No fish can live here, because the pool dries up every year. That makes it a safe place for frog and salamander eggs.",
   "es": {
    "name": "Charca temporal",
    "word": "Charca temporal",
    "def": "Un estanque pequeño que se llena de agua en primavera y se seca a fines del verano.",
    "note": "Aquí no pueden vivir peces, porque la charca se seca cada año. Por eso es un lugar seguro para los huevos de ranas y salamandras."
   }
  },
  {
   "id": "s1-frog",
   "name": "Wood frog",
   "look": "frog",
   "color": "#a0784a",
   "word": "Organism",
   "def": "One whole living thing.",
   "note": "A wood frog is an ORGANISM: one whole living thing. Wood frogs travel to vernal pools in early spring to lay their eggs.",
   "es": {
    "name": "Rana de bosque",
    "word": "Organismo",
    "def": "Un ser vivo completo.",
    "note": "Una rana de bosque es un ORGANISMO: un ser vivo completo. Las ranas de bosque van a las charcas temporales a principios de la primavera para poner sus huevos."
   }
  },
  {
   "id": "s1-cell",
   "name": "Living cells",
   "look": "cell",
   "color": "#9be36b",
   "word": "Cell",
   "def": "The smallest unit of a living thing.",
   "note": "Every living thing is made of one or more CELLS. Most cells are too small to see without a microscope.",
   "es": {
    "name": "Células vivas",
    "word": "Célula",
    "def": "La unidad más pequeña de un ser vivo.",
    "note": "Todo ser vivo está formado por una o más CÉLULAS. La mayoría de las células son demasiado pequeñas para verlas sin un microscopio."
   }
  },
  {
   "id": "s1-scope",
   "name": "Field microscope",
   "look": "rod",
   "color": "#cfd8e3",
   "word": "Microscope",
   "def": "A tool that makes very small things look bigger.",
   "note": "With a MICROSCOPE you can see the cells in a leaf, a drop of pond water or a frog’s skin.",
   "es": {
    "name": "Microscopio de campo",
    "word": "Microscopio",
    "def": "Un instrumento que hace que las cosas muy pequeñas se vean más grandes.",
    "note": "Con un MICROSCOPIO puedes ver las células de una hoja, de una gota de agua de charca o de la piel de una rana."
   }
  },
  {
   "id": "s1-param",
   "name": "Paramecium",
   "look": "cell",
   "color": "#ffd08a",
   "word": "Unicellular",
   "def": "Made of only one cell.",
   "note": "A paramecium is a whole organism made of just ONE cell. It is UNICELLULAR. It swims with tiny hairs and eats bacteria.",
   "es": {
    "name": "Paramecio",
    "word": "Unicelular",
    "def": "Formado por una sola célula.",
    "note": "Un paramecio es un organismo completo formado por UNA sola célula. Es UNICELULAR. Nada con pelitos diminutos y come bacterias."
   }
  },
  {
   "id": "s1-moss",
   "name": "Moss",
   "look": "grass",
   "color": "#5fbf5a",
   "word": "Multicellular",
   "def": "Made of many cells.",
   "note": "A moss plant is MULTICELLULAR: it is made of thousands of cells. Under a microscope its leaf looks like a wall of tiny green boxes.",
   "es": {
    "name": "Musgo",
    "word": "Multicelular",
    "def": "Formado por muchas células.",
    "note": "Una planta de musgo es MULTICELULAR: está formada por miles de células. Bajo el microscopio, su hoja parece una pared de cajitas verdes."
   }
  },
  {
   "id": "s1-eggs",
   "name": "Spotted salamander eggs",
   "look": "eggs",
   "color": "#cfe6ff",
   "word": "Cell division",
   "def": "When one cell splits to make two new cells.",
   "note": "Each egg starts as ONE cell. That cell splits again and again by CELL DIVISION until there are millions of cells: a young salamander.",
   "es": {
    "name": "Huevos de salamandra moteada",
    "word": "División celular",
    "def": "Cuando una célula se divide para formar dos células nuevas.",
    "note": "Cada huevo empieza como UNA célula. Esa célula se divide una y otra vez por DIVISIÓN CELULAR hasta que hay millones de células: una salamandra joven."
   }
  },
  {
   "id": "s1-rock",
   "name": "Granite rock",
   "look": "rock",
   "color": "#9a9aa2",
   "word": "Nonliving",
   "def": "Never alive and not made of cells.",
   "note": "Under a microscope this rock shows crystals and grains, but no cells. It is NONLIVING.",
   "es": {
    "name": "Roca de granito",
    "word": "Inerte",
    "def": "Que nunca estuvo vivo y no está formado por células.",
    "note": "Bajo el microscopio, esta roca muestra cristales y granos, pero ninguna célula. Es INERTE (sin vida)."
   }
  },
  {
   "id": "s1-log",
   "name": "Rotting log",
   "look": "mushroom",
   "color": "#c89060",
   "word": "Once living",
   "def": "Was alive before; made of cells that no longer work.",
   "note": "This log is made of wood cells from a tree that was alive. The log is ONCE LIVING. The mushrooms growing on it are alive now.",
   "es": {
    "name": "Tronco podrido",
    "word": "Que estuvo vivo",
    "def": "Estuvo vivo antes; formado por células que ya no funcionan.",
    "note": "Este tronco está hecho de células de madera de un árbol que estuvo vivo. El tronco ESTUVO VIVO. Los hongos que crecen en él están vivos ahora."
   }
  },
  {
   "id": "s1-bact",
   "name": "Pond bacteria",
   "look": "rod",
   "color": "#ff9fb0",
   "word": "Bacteria",
   "def": "Tiny one-celled organisms that live almost everywhere.",
   "note": "A single drop of pond water can hold thousands of BACTERIA. Each one is a complete organism made of one cell.",
   "es": {
    "name": "Bacterias de la charca",
    "word": "Bacterias",
    "def": "Organismos diminutos de una sola célula que viven casi en todas partes.",
    "note": "Una sola gota de agua de charca puede tener miles de BACTERIAS. Cada una es un organismo completo de una célula."
   }
  },
  {
   "id": "s1-types",
   "name": "Frog skin, muscle and blood",
   "look": "cell",
   "color": "#ff8a70",
   "word": "Specialized cell",
   "def": "A cell with a special shape and job.",
   "note": "A frog has many TYPES of cells. Skin cells protect, muscle cells move and blood cells carry oxygen. Each is a SPECIALIZED CELL.",
   "es": {
    "name": "Piel, músculo y sangre de rana",
    "word": "Célula especializada",
    "def": "Una célula con una forma y un trabajo especiales.",
    "note": "Una rana tiene muchos TIPOS de células. Las células de la piel protegen, las de los músculos mueven y las de la sangre llevan oxígeno. Cada una es una CÉLULA ESPECIALIZADA."
   }
  },
  {
   "id": "s1-evid",
   "name": "Science notebook",
   "look": "stack",
   "color": "#ffe9a8",
   "word": "Evidence",
   "def": "Facts or observations that support an idea.",
   "note": "Seeing cells under a microscope is EVIDENCE that something is alive, or was once alive.",
   "es": {
    "name": "Cuaderno de ciencias",
    "word": "Evidencia",
    "def": "Hechos u observaciones que apoyan una idea.",
    "note": "Ver células bajo el microscopio es EVIDENCIA de que algo está vivo, o de que estuvo vivo."
   }
  },
  {
   "id": "s1d-diatom",
   "name": "Diatom",
   "look": "cell",
   "color": "#c8ff7a",
   "word": "Phytoplankton",
   "def": "Tiny living things that drift near the ocean surface and make food from sunlight.",
   "note": "This diatom is one cell inside a glass-like shell. Diatoms are PHYTOPLANKTON. Together they make much of the oxygen on Earth.",
   "es": {
    "name": "Diatomea",
    "word": "Fitoplancton",
    "def": "Seres vivos diminutos que flotan cerca de la superficie del océano y producen alimento con la luz del sol.",
    "note": "Esta diatomea es una célula dentro de una concha parecida al vidrio. Las diatomeas son FITOPLANCTON. Juntas producen gran parte del oxígeno de la Tierra."
   }
  },
  {
   "id": "s1d-jelly",
   "name": "Moon jelly",
   "look": "jelly",
   "color": "#ffb3e0",
   "word": "Tissue",
   "def": "A group of similar cells that do the same job.",
   "note": "A jellyfish is made of many cells. Its stinging cells grow in groups along the tentacles. A group of similar cells is a TISSUE.",
   "es": {
    "name": "Medusa luna",
    "word": "Tejido",
    "def": "Un grupo de células parecidas que hacen el mismo trabajo.",
    "note": "Una medusa está formada por muchas células. Sus células urticantes crecen en grupos a lo largo de los tentáculos. Un grupo de células parecidas es un TEJIDO."
   }
  },
  {
   "id": "s1d-lantern",
   "name": "Lanternfish",
   "look": "critter",
   "color": "#7fd4ff",
   "word": "Bioluminescence",
   "def": "Light made by a living thing.",
   "note": "Special cells on the lanternfish’s body make light. Light made by a living thing is called BIOLUMINESCENCE.",
   "es": {
    "name": "Pez linterna",
    "word": "Bioluminiscencia",
    "def": "Luz producida por un ser vivo.",
    "note": "Unas células especiales en el cuerpo del pez linterna producen luz. La luz que produce un ser vivo se llama BIOLUMINISCENCIA."
   }
  },
  {
   "id": "s1d-angler",
   "name": "Anglerfish lure",
   "look": "angler",
   "color": "#9fe0ff",
   "word": "Partnership",
   "def": "Two kinds of living things that help each other.",
   "note": "The glowing lure is full of one-celled bacteria. They get a home, and the many-celled fish gets light to attract food. It is a PARTNERSHIP.",
   "es": {
    "name": "Señuelo del pez abisal",
    "word": "Asociación",
    "def": "Dos tipos de seres vivos que se ayudan.",
    "note": "El señuelo brillante está lleno de bacterias de una sola célula. Ellas reciben un hogar y el pez, formado por muchas células, recibe luz para atraer comida. Es una ASOCIACIÓN."
   }
  },
  {
   "id": "s1d-mat",
   "name": "Microbe mat",
   "look": "rod",
   "color": "#ffd08a",
   "word": "Microorganism",
   "def": "A living thing too small to see without a microscope.",
   "note": "This fuzzy white mat is made of billions of one-celled bacteria. Each one is a MICROORGANISM.",
   "es": {
    "name": "Tapete de microbios",
    "word": "Microorganismo",
    "def": "Un ser vivo demasiado pequeño para verlo sin microscopio.",
    "note": "Este tapete blanco y peludo está formado por miles de millones de bacterias de una sola célula. Cada una es un MICROORGANISMO."
   }
  },
  {
   "id": "s1d-archaea",
   "name": "Archaea",
   "look": "rod",
   "color": "#ff9f6e",
   "word": "Archaea",
   "def": "One-celled organisms that can live in very hot or harsh places.",
   "note": "ARCHAEA live in water hotter than 100 °C near the vents. Each one is a single cell.",
   "es": {
    "name": "Arqueas",
    "word": "Arqueas",
    "def": "Organismos de una sola célula que pueden vivir en lugares muy calientes o difíciles.",
    "note": "Las ARQUEAS viven cerca de las fuentes en agua a más de 100 °C. Cada una es una sola célula."
   }
  },
  {
   "id": "s1d-tube",
   "name": "Giant tube worm",
   "look": "tubeworm",
   "color": "#ff6b6b",
   "word": "Chemosynthesis",
   "def": "Making food from chemicals instead of sunlight.",
   "note": "A tube worm has no mouth! Bacteria living inside its body make food by CHEMOSYNTHESIS. The worm is made of many types of cells; each bacterium is one cell.",
   "es": {
    "name": "Gusano de tubo gigante",
    "word": "Quimiosíntesis",
    "def": "Producir alimento a partir de sustancias químicas en vez de la luz del sol.",
    "note": "¡Un gusano de tubo no tiene boca! Las bacterias que viven dentro de su cuerpo producen alimento por QUIMIOSÍNTESIS. El gusano tiene muchos tipos de células; cada bacteria es una sola célula."
   }
  },
  {
   "id": "s1d-plume",
   "name": "Red plume",
   "look": "tubeworm",
   "color": "#ff4a4a",
   "word": "Blood",
   "def": "A liquid that carries oxygen and other materials through the body.",
   "note": "The red plume is red because it is full of blood. The worm’s BLOOD carries oxygen and chemicals to the bacteria inside it.",
   "es": {
    "name": "Penacho rojo",
    "word": "Sangre",
    "def": "Un líquido que lleva oxígeno y otras sustancias por el cuerpo.",
    "note": "El penacho es rojo porque está lleno de sangre. La SANGRE del gusano lleva oxígeno y sustancias químicas a las bacterias que viven dentro de él."
   }
  },
  {
   "id": "s1g-onion",
   "name": "Onion skin",
   "look": "sprout",
   "color": "#e8c8a0",
   "word": "Plant cell",
   "def": "A cell from a plant. It has a cell wall around its cell membrane.",
   "note": "Peel a thin layer from an onion and look closely: the PLANT CELLS line up like bricks in a wall.",
   "es": {
    "name": "Piel de cebolla",
    "word": "Célula vegetal",
    "def": "Una célula de una planta. Tiene una pared celular alrededor de su membrana celular.",
    "note": "Quita una capa fina de una cebolla y mírala de cerca: las CÉLULAS VEGETALES se alinean como ladrillos en una pared."
   }
  },
  {
   "id": "s1g-wall",
   "name": "Sunflower stem",
   "look": "sprout",
   "color": "#7bcf5a",
   "word": "Cell wall",
   "def": "A stiff layer outside the cell membrane of plant cells. It gives support and shape.",
   "note": "Tall sunflowers stand up straight because each plant cell has a stiff CELL WALL.",
   "es": {
    "name": "Tallo de girasol",
    "word": "Pared celular",
    "def": "Una capa rígida por fuera de la membrana de las células vegetales. Da soporte y forma.",
    "note": "Los girasoles altos se mantienen derechos porque cada célula vegetal tiene una PARED CELULAR rígida."
   }
  },
  {
   "id": "s1g-mem",
   "name": "Garden gate",
   "look": "stack",
   "color": "#ffe08a",
   "word": "Cell membrane",
   "def": "The thin layer around every cell that controls what goes in and out.",
   "note": "Every cell has a CELL MEMBRANE. Like a garden gate, it lets water and food in and lets wastes out.",
   "es": {
    "name": "Puerta del jardín",
    "word": "Membrana celular",
    "def": "La capa delgada alrededor de cada célula que controla lo que entra y sale.",
    "note": "Toda célula tiene una MEMBRANA CELULAR. Como la puerta de un jardín, deja entrar agua y alimento y deja salir los desechos."
   }
  },
  {
   "id": "s1g-cyto",
   "name": "Water barrel",
   "look": "drop",
   "color": "#9be36b",
   "word": "Cytoplasm",
   "def": "The jelly-like material that fills a cell. The cell parts float in it.",
   "note": "Inside each cell is CYTOPLASM, a watery jelly. The other cell parts float in it, and materials move through it.",
   "es": {
    "name": "Barril de agua",
    "word": "Citoplasma",
    "def": "El material gelatinoso que llena una célula. Las partes de la célula flotan en él.",
    "note": "Dentro de cada célula hay CITOPLASMA, una gelatina acuosa. Las demás partes de la célula flotan en él y las sustancias se mueven a través de él."
   }
  },
  {
   "id": "s1g-nuc",
   "name": "Seed packet",
   "look": "stack",
   "color": "#c59cff",
   "word": "Nucleus",
   "def": "The cell part that holds the genetic instructions and controls the cell.",
   "note": "A seed holds the instructions for a whole plant. In each cell, those instructions are kept in the NUCLEUS, the control center.",
   "es": {
    "name": "Sobre de semillas",
    "word": "Núcleo",
    "def": "La parte de la célula que guarda las instrucciones genéticas y controla la célula.",
    "note": "Una semilla guarda las instrucciones para una planta entera. En cada célula, esas instrucciones se guardan en el NÚCLEO, el centro de control."
   }
  },
  {
   "id": "s1g-chloro",
   "name": "Spinach leaf",
   "look": "grass",
   "color": "#3fbf4a",
   "word": "Chloroplast",
   "def": "A green cell part in plants that uses sunlight to make food (sugar).",
   "note": "Leaves are green because their cells are packed with CHLOROPLASTS. They use sunlight, water and carbon dioxide to make sugar.",
   "es": {
    "name": "Hoja de espinaca",
    "word": "Cloroplasto",
    "def": "Una parte verde de las células de las plantas que usa la luz del sol para producir alimento (azúcar).",
    "note": "Las hojas son verdes porque sus células están llenas de CLOROPLASTOS. Usan la luz del sol, el agua y el dióxido de carbono para producir azúcar."
   }
  },
  {
   "id": "s1g-vac",
   "name": "Wilted lettuce",
   "look": "grass",
   "color": "#7fd4ff",
   "word": "Vacuole",
   "def": "A cell part that stores water and other materials.",
   "note": "When a plant gets dry, the water VACUOLES in its cells shrink and the leaves droop. Water it, and the vacuoles fill back up.",
   "es": {
    "name": "Lechuga marchita",
    "word": "Vacuola",
    "def": "Una parte de la célula que guarda agua y otras sustancias.",
    "note": "Cuando una planta se seca, las VACUOLAS de agua de sus células se encogen y las hojas se caen. Riégala y las vacuolas se vuelven a llenar."
   }
  },
  {
   "id": "s1g-mito",
   "name": "Earthworm",
   "look": "critter",
   "color": "#d88a8a",
   "word": "Mitochondria",
   "def": "Cell parts that release energy from food.",
   "note": "An earthworm digs all day. Its cells get energy from MITOCHONDRIA, which release the energy stored in food. Plant cells have mitochondria too.",
   "es": {
    "name": "Lombriz de tierra",
    "word": "Mitocondrias",
    "def": "Partes de la célula que liberan la energía de los alimentos.",
    "note": "Una lombriz cava todo el día. Sus células obtienen energía de las MITOCONDRIAS, que liberan la energía guardada en los alimentos. Las células vegetales también tienen mitocondrias."
   }
  },
  {
   "id": "s1g-animal",
   "name": "Gardener’s cheek cells",
   "look": "cell",
   "color": "#ffb0d0",
   "word": "Animal cell",
   "def": "A cell from an animal. It has no cell wall and no chloroplasts.",
   "note": "Cells from the inside of your cheek are ANIMAL CELLS. They are rounder than plant cells because they have no cell wall.",
   "es": {
    "name": "Células de la mejilla del jardinero",
    "word": "Célula animal",
    "def": "Una célula de un animal. No tiene pared celular ni cloroplastos.",
    "note": "Las células del interior de tu mejilla son CÉLULAS ANIMALES. Son más redondas que las células vegetales porque no tienen pared celular."
   }
  },
  {
   "id": "s1g-organelle",
   "name": "Garden tools",
   "look": "stack",
   "color": "#ffd166",
   "word": "Organelle",
   "def": "A small part inside a cell that has its own job.",
   "note": "A garden needs many tools, each with a job. A cell has ORGANELLES, each with a job, and they work together to keep the cell alive.",
   "es": {
    "name": "Herramientas del jardín",
    "word": "Organelo",
    "def": "Una parte pequeña dentro de una célula que tiene su propio trabajo.",
    "note": "Un jardín necesita muchas herramientas, cada una con su trabajo. Una célula tiene ORGANELOS, cada uno con su trabajo, y trabajan juntos para mantener viva la célula."
   }
  },
  {
   "id": "s1g-model",
   "name": "Cell model",
   "look": "cell",
   "color": "#9fe0ff",
   "word": "Model",
   "def": "A picture, object or idea that shows how something works.",
   "note": "Cells are too small to hold in your hand, so scientists use MODELS to show the parts and how they work together.",
   "es": {
    "name": "Modelo de célula",
    "word": "Modelo",
    "def": "Un dibujo, objeto o idea que muestra cómo funciona algo.",
    "note": "Las células son demasiado pequeñas para tenerlas en la mano, así que los científicos usan MODELOS para mostrar sus partes y cómo trabajan juntas."
   }
  },
  {
   "id": "s1t-rockweed",
   "name": "Rockweed",
   "look": "grass",
   "color": "#a08a3a",
   "word": "Function",
   "def": "The job that something does.",
   "note": "Rockweed is a seaweed. Its air bubbles float it up toward sunlight, where its cells make food. Every part has a FUNCTION.",
   "es": {
    "name": "Alga de roca",
    "word": "Función",
    "def": "El trabajo que hace algo.",
    "note": "El alga de roca es un alga marina. Sus burbujas de aire la hacen flotar hacia la luz del sol, donde sus células producen alimento. Cada parte tiene una FUNCIÓN."
   }
  },
  {
   "id": "s1t-barnacle",
   "name": "Barnacles",
   "look": "rock",
   "color": "#e8e0d0",
   "word": "Waste",
   "def": "Materials a cell or body no longer needs and must get rid of.",
   "note": "At high tide barnacles open up to catch food. Their cells take in food and oxygen, and push out WASTE like carbon dioxide.",
   "es": {
    "name": "Percebes",
    "word": "Desechos",
    "def": "Sustancias que una célula o un cuerpo ya no necesita y debe eliminar.",
    "note": "Con la marea alta, los percebes se abren para atrapar comida. Sus células toman alimento y oxígeno, y expulsan DESECHOS como el dióxido de carbono."
   }
  },
  {
   "id": "s1t-snail",
   "name": "Common periwinkle",
   "look": "critter",
   "color": "#8a6a4a",
   "word": "Energy",
   "def": "The ability to move or change things. Cells need it to stay alive.",
   "note": "Periwinkles scrape algae off the rocks. Their cells release ENERGY from that food to crawl, grow and repair.",
   "es": {
    "name": "Bígaro común",
    "word": "Energía",
    "def": "La capacidad de mover o cambiar cosas. Las células la necesitan para seguir vivas.",
    "note": "Los bígaros raspan las algas de las rocas. Sus células liberan ENERGÍA de ese alimento para arrastrarse, crecer y repararse."
   }
  },
  {
   "id": "s1t-star",
   "name": "Northern sea star",
   "look": "critter",
   "color": "#ff9f6e",
   "word": "Repair",
   "def": "To fix a damaged part by making new cells.",
   "note": "A sea star can grow back a lost arm. Its cells divide to make new cells and REPAIR the body.",
   "es": {
    "name": "Estrella de mar del norte",
    "word": "Reparar",
    "def": "Arreglar una parte dañada formando células nuevas.",
    "note": "Una estrella de mar puede volver a formar un brazo perdido. Sus células se dividen para formar células nuevas y REPARAR el cuerpo."
   }
  },
  {
   "id": "s1t-anemone",
   "name": "Sea anemone",
   "look": "jelly",
   "color": "#ff7aa8",
   "word": "Respond",
   "def": "To react to a change around you.",
   "note": "Touch a sea anemone and it pulls its tentacles in. Its cells sense the touch and the whole animal RESPONDS.",
   "es": {
    "name": "Anémona de mar",
    "word": "Responder",
    "def": "Reaccionar a un cambio a tu alrededor.",
    "note": "Si tocas una anémona de mar, recoge sus tentáculos. Sus células sienten el toque y todo el animal RESPONDE."
   }
  },
  {
   "id": "s1t-salt",
   "name": "Tide pool water",
   "look": "drop",
   "color": "#7fd4ff",
   "word": "Diffusion",
   "def": "When particles spread from where there are many to where there are few.",
   "note": "Oxygen in the seawater spreads into the cells of tide pool animals by DIFFUSION, through the cell membrane.",
   "es": {
    "name": "Agua de la poza de marea",
    "word": "Difusión",
    "def": "Cuando las partículas se esparcen de donde hay muchas a donde hay pocas.",
    "note": "El oxígeno del agua de mar entra en las células de los animales de la poza por DIFUSIÓN, a través de la membrana celular."
   }
  },
  {
   "id": "s1t-plankton",
   "name": "Plankton in a drop",
   "look": "cell",
   "color": "#c8ff7a",
   "word": "Cell as a system",
   "def": "All the parts of a cell working together to keep it alive.",
   "note": "One plankton cell must do everything: take in materials, use energy, get rid of wastes and divide. Its parts work together as a SYSTEM.",
   "es": {
    "name": "Plancton en una gota",
    "word": "La célula como sistema",
    "def": "Todas las partes de una célula trabajando juntas para mantenerla viva.",
    "note": "Una sola célula de plancton debe hacerlo todo: tomar sustancias, usar energía, eliminar desechos y dividirse. Sus partes trabajan juntas como un SISTEMA."
   }
  }
 ],
 "vocab": [
  {
   "term": "Vernal pool",
   "def": "A small pond that fills with water in spring and dries up by late summer.",
   "es": {
    "term": "Charca temporal",
    "def": "Un estanque pequeño que se llena de agua en primavera y se seca a fines del verano."
   }
  },
  {
   "term": "Organism",
   "def": "One whole living thing.",
   "es": {
    "term": "Organismo",
    "def": "Un ser vivo completo."
   }
  },
  {
   "term": "Cell",
   "def": "The smallest unit of a living thing.",
   "es": {
    "term": "Célula",
    "def": "La unidad más pequeña de un ser vivo."
   }
  },
  {
   "term": "Microscope",
   "def": "A tool that makes very small things look bigger.",
   "es": {
    "term": "Microscopio",
    "def": "Un instrumento que hace que las cosas muy pequeñas se vean más grandes."
   }
  },
  {
   "term": "Unicellular",
   "def": "Made of only one cell.",
   "es": {
    "term": "Unicelular",
    "def": "Formado por una sola célula."
   }
  },
  {
   "term": "Multicellular",
   "def": "Made of many cells.",
   "es": {
    "term": "Multicelular",
    "def": "Formado por muchas células."
   }
  },
  {
   "term": "Cell division",
   "def": "When one cell splits to make two new cells.",
   "es": {
    "term": "División celular",
    "def": "Cuando una célula se divide para formar dos células nuevas."
   }
  },
  {
   "term": "Nonliving",
   "def": "Never alive and not made of cells.",
   "es": {
    "term": "Inerte",
    "def": "Que nunca estuvo vivo y no está formado por células."
   }
  },
  {
   "term": "Once living",
   "def": "Was alive before; made of cells that no longer work.",
   "es": {
    "term": "Que estuvo vivo",
    "def": "Estuvo vivo antes; formado por células que ya no funcionan."
   }
  },
  {
   "term": "Bacteria",
   "def": "Tiny one-celled organisms that live almost everywhere.",
   "es": {
    "term": "Bacterias",
    "def": "Organismos diminutos de una sola célula que viven casi en todas partes."
   }
  },
  {
   "term": "Specialized cell",
   "def": "A cell with a special shape and job.",
   "es": {
    "term": "Célula especializada",
    "def": "Una célula con una forma y un trabajo especiales."
   }
  },
  {
   "term": "Evidence",
   "def": "Facts or observations that support an idea.",
   "es": {
    "term": "Evidencia",
    "def": "Hechos u observaciones que apoyan una idea."
   }
  },
  {
   "term": "Phytoplankton",
   "def": "Tiny living things that drift near the ocean surface and make food from sunlight.",
   "es": {
    "term": "Fitoplancton",
    "def": "Seres vivos diminutos que flotan cerca de la superficie del océano y producen alimento con la luz del sol."
   }
  },
  {
   "term": "Tissue",
   "def": "A group of similar cells that do the same job.",
   "es": {
    "term": "Tejido",
    "def": "Un grupo de células parecidas que hacen el mismo trabajo."
   }
  },
  {
   "term": "Bioluminescence",
   "def": "Light made by a living thing.",
   "es": {
    "term": "Bioluminiscencia",
    "def": "Luz producida por un ser vivo."
   }
  },
  {
   "term": "Partnership",
   "def": "Two kinds of living things that help each other.",
   "es": {
    "term": "Asociación",
    "def": "Dos tipos de seres vivos que se ayudan."
   }
  },
  {
   "term": "Microorganism",
   "def": "A living thing too small to see without a microscope.",
   "es": {
    "term": "Microorganismo",
    "def": "Un ser vivo demasiado pequeño para verlo sin microscopio."
   }
  },
  {
   "term": "Archaea",
   "def": "One-celled organisms that can live in very hot or harsh places.",
   "es": {
    "term": "Arqueas",
    "def": "Organismos de una sola célula que pueden vivir en lugares muy calientes o difíciles."
   }
  },
  {
   "term": "Chemosynthesis",
   "def": "Making food from chemicals instead of sunlight.",
   "es": {
    "term": "Quimiosíntesis",
    "def": "Producir alimento a partir de sustancias químicas en vez de la luz del sol."
   }
  },
  {
   "term": "Blood",
   "def": "A liquid that carries oxygen and other materials through the body.",
   "es": {
    "term": "Sangre",
    "def": "Un líquido que lleva oxígeno y otras sustancias por el cuerpo."
   }
  },
  {
   "term": "Plant cell",
   "def": "A cell from a plant. It has a cell wall around its cell membrane.",
   "es": {
    "term": "Célula vegetal",
    "def": "Una célula de una planta. Tiene una pared celular alrededor de su membrana celular."
   }
  },
  {
   "term": "Cell wall",
   "def": "A stiff layer outside the cell membrane of plant cells. It gives support and shape.",
   "es": {
    "term": "Pared celular",
    "def": "Una capa rígida por fuera de la membrana de las células vegetales. Da soporte y forma."
   }
  },
  {
   "term": "Cell membrane",
   "def": "The thin layer around every cell that controls what goes in and out.",
   "es": {
    "term": "Membrana celular",
    "def": "La capa delgada alrededor de cada célula que controla lo que entra y sale."
   }
  },
  {
   "term": "Cytoplasm",
   "def": "The jelly-like material that fills a cell. The cell parts float in it.",
   "es": {
    "term": "Citoplasma",
    "def": "El material gelatinoso que llena una célula. Las partes de la célula flotan en él."
   }
  },
  {
   "term": "Nucleus",
   "def": "The cell part that holds the genetic instructions and controls the cell.",
   "es": {
    "term": "Núcleo",
    "def": "La parte de la célula que guarda las instrucciones genéticas y controla la célula."
   }
  },
  {
   "term": "Chloroplast",
   "def": "A green cell part in plants that uses sunlight to make food (sugar).",
   "es": {
    "term": "Cloroplasto",
    "def": "Una parte verde de las células de las plantas que usa la luz del sol para producir alimento (azúcar)."
   }
  },
  {
   "term": "Vacuole",
   "def": "A cell part that stores water and other materials.",
   "es": {
    "term": "Vacuola",
    "def": "Una parte de la célula que guarda agua y otras sustancias."
   }
  },
  {
   "term": "Mitochondria",
   "def": "Cell parts that release energy from food.",
   "es": {
    "term": "Mitocondrias",
    "def": "Partes de la célula que liberan la energía de los alimentos."
   }
  },
  {
   "term": "Animal cell",
   "def": "A cell from an animal. It has no cell wall and no chloroplasts.",
   "es": {
    "term": "Célula animal",
    "def": "Una célula de un animal. No tiene pared celular ni cloroplastos."
   }
  },
  {
   "term": "Organelle",
   "def": "A small part inside a cell that has its own job.",
   "es": {
    "term": "Organelo",
    "def": "Una parte pequeña dentro de una célula que tiene su propio trabajo."
   }
  },
  {
   "term": "Model",
   "def": "A picture, object or idea that shows how something works.",
   "es": {
    "term": "Modelo",
    "def": "Un dibujo, objeto o idea que muestra cómo funciona algo."
   }
  },
  {
   "term": "Function",
   "def": "The job that something does.",
   "es": {
    "term": "Función",
    "def": "El trabajo que hace algo."
   }
  },
  {
   "term": "Waste",
   "def": "Materials a cell or body no longer needs and must get rid of.",
   "es": {
    "term": "Desechos",
    "def": "Sustancias que una célula o un cuerpo ya no necesita y debe eliminar."
   }
  },
  {
   "term": "Energy",
   "def": "The ability to move or change things. Cells need it to stay alive.",
   "es": {
    "term": "Energía",
    "def": "La capacidad de mover o cambiar cosas. Las células la necesitan para seguir vivas."
   }
  },
  {
   "term": "Repair",
   "def": "To fix a damaged part by making new cells.",
   "es": {
    "term": "Reparar",
    "def": "Arreglar una parte dañada formando células nuevas."
   }
  },
  {
   "term": "Respond",
   "def": "To react to a change around you.",
   "es": {
    "term": "Responder",
    "def": "Reaccionar a un cambio a tu alrededor."
   }
  },
  {
   "term": "Diffusion",
   "def": "When particles spread from where there are many to where there are few.",
   "es": {
    "term": "Difusión",
    "def": "Cuando las partículas se esparcen de donde hay muchas a donde hay pocas."
   }
  },
  {
   "term": "Cell as a system",
   "def": "All the parts of a cell working together to keep it alive.",
   "es": {
    "term": "La célula como sistema",
    "def": "Todas las partes de una célula trabajando juntas para mantenerla viva."
   }
  }
 ]
});
