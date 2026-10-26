/* WORLD 3 QUESTION FILE: Food and Energy for Life (middle school edition)
   Made by tools/content/build_world.py from the content files in tools/content (edit those, then run it again).
   "code" is the PA STEELS grades 6-8 standard. "es" holds the Spanish text for the same item.
   In "questions", "answer" is the position of the correct option, counting from 0. The game shuffles the options. */
FieldGuide.registerQuestions(3, {
 "tokens": [
  {
   "id": "h3-inputs",
   "code": "3.1.6-8.F",
   "prompt": "Collect only what a leaf TAKES IN to do photosynthesis",
   "good": [
    "Sunlight",
    "Water",
    "Carbon dioxide"
   ],
   "bad": [
    {
     "text": "Oxygen",
     "explain": "Oxygen is given OFF by photosynthesis. It is an output, not an input.",
     "es": {
      "text": "Oxígeno",
      "explain": "El oxígeno SALE de la fotosíntesis. Es un producto, no algo que la hoja toma."
     }
    },
    {
     "text": "Sugar",
     "explain": "Sugar is MADE by photosynthesis. It is the food the plant makes.",
     "es": {
      "text": "Azúcar",
      "explain": "El azúcar SE FABRICA en la fotosíntesis. Es el alimento que produce la planta."
     }
    },
    {
     "text": "Soil",
     "explain": "Roots take water and a few minerals from the soil, but the soil itself is not a raw material of photosynthesis. Most of a plant’s matter comes from carbon dioxide.",
     "es": {
      "text": "Tierra",
      "explain": "Las raíces toman agua y algunos minerales del suelo, pero la tierra no es materia prima de la fotosíntesis. La mayor parte de la materia de la planta viene del dióxido de carbono."
     }
    },
    {
     "text": "A grasshopper",
     "explain": "A grasshopper eats leaves. It is a consumer, not something the leaf uses.",
     "es": {
      "text": "Un saltamontes",
      "explain": "Un saltamontes come hojas. Es un consumidor, no algo que use la hoja."
     }
    }
   ],
   "es": {
    "prompt": "Recoge solo lo que una hoja TOMA para hacer la fotosíntesis",
    "good": [
     "Luz del sol",
     "Agua",
     "Dióxido de carbono"
    ]
   }
  },
  {
   "id": "h3-small",
   "code": "3.1.6-8.G",
   "prompt": "Collect only SMALL molecules that the small intestine can absorb into the blood",
   "good": [
    "Sugar (glucose)",
    "Amino acids",
    "Fatty acids",
    "Water"
   ],
   "bad": [
    {
     "text": "A whole bread crust",
     "explain": "A bread crust is far too big. Digestion must first break its starch into sugar.",
     "es": {
      "text": "Una corteza de pan entera",
      "explain": "Una corteza de pan es demasiado grande. Primero la digestión debe romper su almidón en azúcar."
     }
    },
    {
     "text": "A chunk of turkey",
     "explain": "The turkey’s protein must be broken into amino acids before it can be absorbed.",
     "es": {
      "text": "Un trozo de pavo",
      "explain": "La proteína del pavo debe romperse en aminoácidos antes de poder absorberse."
     }
    },
    {
     "text": "A starch molecule",
     "explain": "Starch is a long chain of sugars. It must be broken into single sugars first.",
     "es": {
      "text": "Una molécula de almidón",
      "explain": "El almidón es una cadena larga de azúcares. Primero hay que romperla en azúcares sueltos."
     }
    }
   ],
   "es": {
    "prompt": "Recoge solo las moléculas PEQUEÑAS que el intestino delgado puede absorber hacia la sangre",
    "good": [
     "Azúcar (glucosa)",
     "Aminoácidos",
     "Ácidos grasos",
     "Agua"
    ]
   }
  }
 ],
 "sorts": [
  {
   "id": "sort3-io",
   "code": "3.1.6-8.F",
   "prompt": "Does it go INTO photosynthesis, or come OUT of it?",
   "options": [
    "Goes in",
    "Comes out"
   ],
   "hint": "Photosynthesis takes in carbon dioxide, water and light energy, and makes sugar and oxygen.",
   "items": [
    {
     "text": "Carbon dioxide",
     "answer": 0,
     "explain": "Carbon dioxide from the air goes in through the stomata.",
     "es": {
      "text": "Dióxido de carbono",
      "explain": "El dióxido de carbono del aire entra por los estomas."
     }
    },
    {
     "text": "Oxygen",
     "answer": 1,
     "explain": "Oxygen comes out. The plant gives it off into the air.",
     "es": {
      "text": "Oxígeno",
      "explain": "El oxígeno sale. La planta lo libera al aire."
     }
    },
    {
     "text": "Water",
     "answer": 0,
     "explain": "Water goes in. The roots take it up from the soil.",
     "es": {
      "text": "Agua",
      "explain": "El agua entra. Las raíces la toman del suelo."
     }
    },
    {
     "text": "Sugar (glucose)",
     "answer": 1,
     "explain": "Sugar comes out. It is the food the plant makes.",
     "es": {
      "text": "Azúcar (glucosa)",
      "explain": "El azúcar sale. Es el alimento que fabrica la planta."
     }
    },
    {
     "text": "Light energy",
     "answer": 0,
     "explain": "Light energy goes in. The chloroplasts capture it.",
     "es": {
      "text": "Energía luminosa",
      "explain": "La energía luminosa entra. Los cloroplastos la capturan."
     }
    },
    {
     "text": "Energy stored in sugar",
     "answer": 1,
     "explain": "The light energy ends up stored in the sugar the plant made.",
     "es": {
      "text": "Energía guardada en el azúcar",
      "explain": "La energía luminosa termina guardada en el azúcar que fabricó la planta."
     }
    }
   ],
   "es": {
    "prompt": "¿ENTRA en la fotosíntesis o SALE de ella?",
    "options": [
     "Entra",
     "Sale"
    ],
    "hint": "La fotosíntesis toma dióxido de carbono, agua y energía luminosa, y produce azúcar y oxígeno."
   }
  },
  {
   "id": "sort3-use",
   "code": "3.1.6-8.G",
   "prompt": "Is the food being used to build new molecules for GROWTH, or to RELEASE ENERGY?",
   "options": [
    "Growth",
    "Release energy"
   ],
   "hint": "Building new parts of the body is growth. Using food to power movement or keep warm is releasing energy.",
   "items": [
    {
     "text": "Amino acids joined into new muscle protein",
     "answer": 0,
     "explain": "New proteins build and repair muscle: growth.",
     "es": {
      "text": "Aminoácidos unidos en una proteína muscular nueva",
      "explain": "Las proteínas nuevas forman y reparan el músculo: crecimiento."
     }
    },
    {
     "text": "Sugar reacting with oxygen while you run",
     "answer": 1,
     "explain": "The reaction releases energy for your muscles to move.",
     "es": {
      "text": "Azúcar que reacciona con oxígeno mientras corres",
      "explain": "La reacción libera energía para que tus músculos se muevan."
     }
    },
    {
     "text": "A child’s bones getting longer",
     "answer": 0,
     "explain": "Building longer bones uses matter from food: growth.",
     "es": {
      "text": "Los huesos de un niño que se alargan",
      "explain": "Formar huesos más largos usa materia de los alimentos: crecimiento."
     }
    },
    {
     "text": "Keeping your body warm on a cold day",
     "answer": 1,
     "explain": "Cells release energy from food, and some of it warms you.",
     "es": {
      "text": "Mantener el cuerpo caliente en un día frío",
      "explain": "Las células liberan la energía de los alimentos, y una parte te calienta."
     }
    },
    {
     "text": "Fatty acids building new cell membranes",
     "answer": 0,
     "explain": "New cells need new membranes, made partly from fats: growth.",
     "es": {
      "text": "Ácidos grasos que forman membranas celulares nuevas",
      "explain": "Las células nuevas necesitan membranas nuevas, hechas en parte de grasas: crecimiento."
     }
    },
    {
     "text": "A heart muscle cell beating",
     "answer": 1,
     "explain": "Every heartbeat uses energy released from food.",
     "es": {
      "text": "Una célula del músculo cardiaco que late",
      "explain": "Cada latido usa la energía liberada de los alimentos."
     }
    }
   ],
   "es": {
    "prompt": "¿El alimento se usa para formar moléculas nuevas para el CRECIMIENTO o para LIBERAR ENERGÍA?",
    "options": [
     "Crecimiento",
     "Liberar energía"
    ],
    "hint": "Formar partes nuevas del cuerpo es crecimiento. Usar el alimento para moverse o mantenerse caliente es liberar energía."
   }
  },
  {
   "id": "sort3-factor",
   "code": "3.1.6-8.E",
   "prompt": "Is this an ENVIRONMENTAL factor or a GENETIC factor?",
   "options": [
    "Environmental",
    "Genetic"
   ],
   "hint": "Environmental factors come from the surroundings. Genetic factors come from the parents, in the genes.",
   "items": [
    {
     "text": "How much sunlight the plant gets",
     "answer": 0,
     "explain": "Sunlight comes from the surroundings.",
     "es": {
      "text": "Cuánta luz del sol recibe la planta",
      "explain": "La luz del sol viene del entorno."
     }
    },
    {
     "text": "The seed variety: tall or dwarf peas",
     "answer": 1,
     "explain": "The variety comes from the parent plants’ genes.",
     "es": {
      "text": "La variedad de semilla: chícharos altos o enanos",
      "explain": "La variedad viene de los genes de las plantas madre."
     }
    },
    {
     "text": "How much water is in the soil",
     "answer": 0,
     "explain": "Water in the soil is part of the environment.",
     "es": {
      "text": "Cuánta agua hay en el suelo",
      "explain": "El agua del suelo es parte del ambiente."
     }
    },
    {
     "text": "Flower color inherited from the parent plants",
     "answer": 1,
     "explain": "Inherited traits are passed down in genes.",
     "es": {
      "text": "El color de las flores heredado de las plantas madre",
      "explain": "Los rasgos heredados pasan en los genes."
     }
    },
    {
     "text": "A cold night in early spring",
     "answer": 0,
     "explain": "Temperature is part of the environment.",
     "es": {
      "text": "Una noche fría a principios de la primavera",
      "explain": "La temperatura es parte del ambiente."
     }
    },
    {
     "text": "Nutrients from compost in the soil",
     "answer": 0,
     "explain": "Soil nutrients come from the surroundings.",
     "es": {
      "text": "Nutrientes de la composta en el suelo",
      "explain": "Los nutrientes del suelo vienen del entorno."
     }
    }
   ],
   "es": {
    "prompt": "¿Es un factor AMBIENTAL o un factor GENÉTICO?",
    "options": [
     "Ambiental",
     "Genético"
    ],
    "hint": "Los factores ambientales vienen del entorno. Los factores genéticos vienen de los padres, en los genes."
   }
  }
 ],
 "questions": [
  {
   "id": "ms3q01",
   "code": "3.1.6-8.F",
   "prompt": "What does a plant need to TAKE IN for photosynthesis?",
   "options": [
    "carbon dioxide, water and light energy",
    "oxygen, sugar and heat energy",
    "sugar, water and oxygen",
    "soil, oxygen and heat energy"
   ],
   "answer": 0,
   "hint": "Two raw materials and one kind of energy.",
   "explain": "A leaf takes in carbon dioxide and water, and uses light energy to rearrange them into sugar.",
   "es": {
    "prompt": "¿Qué necesita TOMAR una planta para la fotosíntesis?",
    "options": [
     "dióxido de carbono, agua y energía luminosa",
     "oxígeno, azúcar y energía térmica",
     "azúcar, agua y oxígeno",
     "tierra, oxígeno y energía térmica"
    ],
    "hint": "Dos materias primas y un tipo de energía.",
    "explain": "Una hoja toma dióxido de carbono y agua, y usa la energía luminosa para reorganizarlos en azúcar."
   }
  },
  {
   "id": "ms3q02",
   "code": "3.1.6-8.F",
   "prompt": "What does photosynthesis MAKE?",
   "options": [
    "sugar and oxygen",
    "carbon dioxide and water",
    "soil and minerals",
    "sunlight and heat"
   ],
   "answer": 0,
   "hint": "One is food; one is a gas you breathe.",
   "explain": "Photosynthesis makes sugar (food that stores energy) and gives off oxygen.",
   "es": {
    "prompt": "¿Qué PRODUCE la fotosíntesis?",
    "options": [
     "azúcar y oxígeno",
     "dióxido de carbono y agua",
     "tierra y minerales",
     "luz del sol y calor"
    ],
    "hint": "Uno es alimento; el otro es un gas que respiras.",
    "explain": "La fotosíntesis produce azúcar (alimento que guarda energía) y libera oxígeno."
   }
  },
  {
   "id": "ms3q03",
   "code": "3.1.6-8.F",
   "prompt": "Where in a plant cell does photosynthesis happen?",
   "options": [
    "in the chloroplasts",
    "in the cell wall",
    "in the central vacuole",
    "in the nucleus"
   ],
   "answer": 0,
   "hint": "It is the green part of the cell.",
   "explain": "Chloroplasts contain green chlorophyll, which captures light energy.",
   "es": {
    "prompt": "¿En qué parte de la célula vegetal ocurre la fotosíntesis?",
    "options": [
     "en los cloroplastos",
     "en la pared celular",
     "en la vacuola central",
     "en el núcleo"
    ],
    "hint": "Es la parte verde de la célula.",
    "explain": "Los cloroplastos tienen clorofila verde, que captura la energía luminosa."
   }
  },
  {
   "id": "ms3q04",
   "code": "3.1.6-8.F",
   "prompt": "A huge oak tree weighs many tons. Where did MOST of the matter in its wood come from?",
   "options": [
    "carbon dioxide from the air",
    "soil eaten by the roots",
    "sunlight turned into wood",
    "minerals dissolved in rainwater"
   ],
   "answer": 0,
   "hint": "Think about the raw materials of photosynthesis.",
   "explain": "Photosynthesis builds sugar from carbon dioxide and water. The tree uses that sugar to build its wood. Light is energy, not matter.",
   "es": {
    "prompt": "Un roble enorme pesa muchas toneladas. ¿De dónde vino la MAYOR parte de la materia de su madera?",
    "options": [
     "del dióxido de carbono del aire",
     "de la tierra que comen las raíces",
     "de la luz del sol convertida en madera",
     "de los minerales disueltos en el agua de lluvia"
    ],
    "hint": "Piensa en las materias primas de la fotosíntesis.",
    "explain": "La fotosíntesis forma azúcar con dióxido de carbono y agua. El árbol usa ese azúcar para formar su madera. La luz es energía, no materia."
   }
  },
  {
   "id": "ms3q05",
   "code": "3.1.6-8.F",
   "prompt": "In photosynthesis, what happens to the LIGHT ENERGY?",
   "options": [
    "It is stored in the sugar the plant makes.",
    "It is turned into carbon dioxide and released.",
    "It is used up and simply disappears.",
    "It becomes part of the soil."
   ],
   "answer": 0,
   "hint": "Energy is not used up into nothing.",
   "explain": "The plant stores light energy in sugar. Later, the plant or an animal that eats it can release that energy.",
   "es": {
    "prompt": "En la fotosíntesis, ¿qué pasa con la ENERGÍA LUMINOSA?",
    "options": [
     "Se guarda en el azúcar que fabrica la planta.",
     "Se convierte en dióxido de carbono y se libera.",
     "Se gasta y simplemente desaparece.",
     "Se vuelve parte de la tierra."
    ],
    "hint": "La energía no desaparece.",
    "explain": "La planta guarda la energía luminosa en el azúcar. Después, la planta o un animal que se la coma puede liberar esa energía."
   }
  },
  {
   "id": "ms3q06",
   "code": "3.1.6-8.F",
   "prompt": "Carbon dioxide enters a leaf through...",
   "options": [
    "openings called stomata",
    "the tiny hairs on the roots",
    "the petals of the flower",
    "the bark on the stem"
   ],
   "answer": 0,
   "hint": "They are mostly on the underside of the leaf.",
   "explain": "Stomata open to let carbon dioxide in and oxygen out.",
   "es": {
    "prompt": "El dióxido de carbono entra en una hoja por...",
    "options": [
     "aberturas llamadas estomas",
     "los pelos diminutos de las raíces",
     "los pétalos de la flor",
     "la corteza del tallo"
    ],
    "hint": "Están sobre todo en el envés de la hoja.",
    "explain": "Los estomas se abren para dejar entrar dióxido de carbono y salir oxígeno."
   }
  },
  {
   "id": "ms3q07",
   "code": "3.1.6-8.F",
   "prompt": "A grasshopper eats a prairie leaf. What moves from the leaf into the grasshopper?",
   "options": [
    "matter and energy the plant stored",
    "only the sunlight that hit the leaf",
    "only water",
    "nothing; the leaf is digested away"
   ],
   "answer": 0,
   "hint": "Food carries two things.",
   "explain": "The leaf’s matter becomes part of the grasshopper, and the energy stored in its sugar is now the grasshopper’s.",
   "es": {
    "prompt": "Un saltamontes se come una hoja de la pradera. ¿Qué pasa de la hoja al saltamontes?",
    "options": [
     "la materia y la energía que guardó la planta",
     "solo la luz del sol que le llegó a la hoja",
     "solo el agua",
     "nada; la hoja se digiere y desaparece"
    ],
    "hint": "Los alimentos llevan dos cosas.",
    "explain": "La materia de la hoja se vuelve parte del saltamontes, y la energía guardada en su azúcar ahora es del saltamontes."
   }
  },
  {
   "id": "ms3q08",
   "code": "3.1.6-8.F",
   "prompt": "Pondweed in BRIGHT light makes many more oxygen bubbles than pondweed in DIM light. What does this evidence show?",
   "options": [
    "More light means more photosynthesis.",
    "Pondweed makes oxygen only in the dark.",
    "Bright light makes the water in the tank boil.",
    "Pondweed breathes underwater like a fish."
   ],
   "answer": 0,
   "hint": "The bubbles are oxygen, a product of photosynthesis.",
   "explain": "More oxygen bubbles means more photosynthesis. Light energy drives the process.",
   "es": {
    "prompt": "Una planta acuática con luz BRILLANTE suelta muchas más burbujas de oxígeno que con POCA luz. ¿Qué muestra esta prueba?",
    "options": [
     "Más luz significa más fotosíntesis.",
     "La planta solo produce oxígeno en la oscuridad.",
     "La luz brillante hace hervir el agua del tanque.",
     "La planta respira bajo el agua como un pez."
    ],
    "hint": "Las burbujas son oxígeno, un producto de la fotosíntesis.",
    "explain": "Más burbujas de oxígeno significa más fotosíntesis. La energía luminosa impulsa el proceso."
   }
  },
  {
   "id": "ms3q09",
   "code": "3.1.6-8.F",
   "prompt": "Giant kelp is not a plant. Why can it still make its own food?",
   "options": [
    "It does photosynthesis, like plants.",
    "It eats sea urchins that live nearby.",
    "It takes in sugar from the sand.",
    "It catches and digests small fish."
   ],
   "answer": 0,
   "hint": "It is a giant alga with chlorophyll.",
   "explain": "Algae like kelp do photosynthesis, so they are producers too.",
   "es": {
    "prompt": "El kelp gigante no es una planta. ¿Por qué puede fabricar su propio alimento?",
    "options": [
     "Hace fotosíntesis, como las plantas.",
     "Come los erizos de mar que tiene cerca.",
     "Toma azúcar de la arena.",
     "Atrapa y digiere peces pequeños."
    ],
    "hint": "Es un alga gigante con clorofila.",
    "explain": "Las algas como el kelp hacen fotosíntesis, así que también son productores."
   }
  },
  {
   "id": "ms3q10",
   "code": "3.1.6-8.F",
   "prompt": "In the food chain sun → kelp → sea urchin → sea otter, where does the energy FIRST enter?",
   "options": [
    "from the Sun, captured by kelp",
    "from the sea otter at the end",
    "from the sea urchin that eats the kelp",
    "from the minerals in seawater"
   ],
   "answer": 0,
   "hint": "Follow the arrows from the beginning.",
   "explain": "Energy enters the food chain when a producer captures light energy by photosynthesis.",
   "es": {
    "prompt": "En la cadena alimentaria sol → kelp → erizo de mar → nutria marina, ¿por dónde ENTRA primero la energía?",
    "options": [
     "desde el Sol, capturada por el kelp",
     "desde la nutria marina, al final",
     "desde el erizo de mar que come el kelp",
     "desde los minerales del agua de mar"
    ],
    "hint": "Sigue las flechas desde el principio.",
    "explain": "La energía entra en la cadena alimentaria cuando un productor captura la energía luminosa por fotosíntesis."
   }
  },
  {
   "id": "ms3q11",
   "code": "3.1.6-8.F",
   "prompt": "A rockfish gives off carbon dioxide. How can that same carbon come back into a living thing?",
   "options": [
    "Kelp takes it in for photosynthesis.",
    "It cannot; that carbon is gone forever.",
    "The Sun absorbs it.",
    "Sand turns it into rock right away."
   ],
   "answer": 0,
   "hint": "Matter cycles.",
   "explain": "Kelp uses the carbon dioxide to make sugar. The carbon cycles between living things and the water.",
   "es": {
    "prompt": "Un pez roca libera dióxido de carbono. ¿Cómo puede ese mismo carbono volver a un ser vivo?",
    "options": [
     "El kelp lo toma para la fotosíntesis.",
     "No puede; ese carbono se pierde para siempre.",
     "El Sol lo absorbe.",
     "La arena lo vuelve roca enseguida."
    ],
    "hint": "La materia se mueve en un ciclo.",
    "explain": "El kelp usa el dióxido de carbono para fabricar azúcar. El carbono pasa una y otra vez entre los seres vivos y el agua."
   }
  },
  {
   "id": "ms3q12",
   "code": "3.1.6-8.F",
   "prompt": "Which statement about matter and energy is TRUE?",
   "options": [
    "Matter cycles; energy flows in from the Sun.",
    "Energy cycles over and over, but matter is used up.",
    "Both disappear after one use.",
    "Plants make brand-new matter out of nothing."
   ],
   "answer": 0,
   "hint": "Atoms are reused again and again.",
   "explain": "The same atoms cycle between living things and their surroundings. Energy keeps flowing in as sunlight.",
   "es": {
    "prompt": "¿Qué afirmación sobre la materia y la energía es VERDADERA?",
    "options": [
     "La materia se mueve en un ciclo; la energía entra desde el Sol.",
     "La energía se mueve en un ciclo una y otra vez, pero la materia se gasta.",
     "Las dos desaparecen después de usarse una vez.",
     "Las plantas fabrican materia totalmente nueva de la nada."
    ],
    "hint": "Los átomos se usan una y otra vez.",
    "explain": "Los mismos átomos pasan en un ciclo entre los seres vivos y su entorno. La energía sigue entrando como luz del sol."
   }
  },
  {
   "id": "ms3q13",
   "code": "3.1.6-8.G",
   "prompt": "Why must the body break food down into small molecules?",
   "options": [
    "Only small ones can pass into the blood.",
    "Small molecules taste better than big ones.",
    "Big molecules are not made of matter.",
    "So the food can turn into light energy."
   ],
   "answer": 0,
   "hint": "Think about getting through the small intestine wall.",
   "explain": "Big food molecules are broken into small ones that can pass into the blood and reach every cell.",
   "es": {
    "prompt": "¿Por qué el cuerpo debe descomponer los alimentos en moléculas pequeñas?",
    "options": [
     "Solo las pequeñas pueden pasar a la sangre.",
     "Las moléculas pequeñas saben mejor que las grandes.",
     "Las moléculas grandes no están hechas de materia.",
     "Para que el alimento pueda volverse energía luminosa."
    ],
    "hint": "Piensa en atravesar la pared del intestino delgado.",
    "explain": "Las moléculas grandes de los alimentos se rompen en moléculas pequeñas que pueden pasar a la sangre y llegar a cada célula."
   }
  },
  {
   "id": "ms3q14",
   "code": "3.1.6-8.G",
   "prompt": "Digestion breaks protein from food into...",
   "options": [
    "amino acids",
    "simple sugars",
    "oxygen",
    "fatty acids"
   ],
   "answer": 0,
   "hint": "They are the building blocks of proteins.",
   "explain": "Proteins are chains of amino acids. Digestion breaks the chains apart.",
   "es": {
    "prompt": "La digestión rompe la proteína de los alimentos en...",
    "options": [
     "aminoácidos",
     "azúcares simples",
     "oxígeno",
     "ácidos grasos"
    ],
    "hint": "Son las piezas de las proteínas.",
    "explain": "Las proteínas son cadenas de aminoácidos. La digestión rompe esas cadenas."
   }
  },
  {
   "id": "ms3q15",
   "code": "3.1.6-8.G",
   "prompt": "Saliva starts breaking starch into sugar. What kind of change is this?",
   "options": [
    "a chemical reaction",
    "just a change of shape",
    "melting",
    "evaporation"
   ],
   "answer": 0,
   "hint": "New molecules are formed.",
   "explain": "Starch is rearranged into sugar molecules, so it is a chemical reaction.",
   "es": {
    "prompt": "La saliva empieza a romper el almidón en azúcar. ¿Qué tipo de cambio es?",
    "options": [
     "una reacción química",
     "solo un cambio de forma",
     "derretirse",
     "evaporarse"
    ],
    "hint": "Se forman moléculas nuevas.",
    "explain": "El almidón se reorganiza en moléculas de azúcar, así que es una reacción química."
   }
  },
  {
   "id": "ms3q16",
   "code": "3.1.6-8.G",
   "prompt": "What does an ENZYME do in digestion?",
   "options": [
    "It speeds up the breakdown of food.",
    "It carries oxygen to cells in the blood.",
    "It makes food by photosynthesis.",
    "It stores extra food as fat."
   ],
   "answer": 0,
   "hint": "It is a helper molecule.",
   "explain": "Digestive enzymes speed up the reactions that break big food molecules into small ones.",
   "es": {
    "prompt": "¿Qué hace una ENZIMA en la digestión?",
    "options": [
     "Acelera la descomposición de los alimentos.",
     "Lleva el oxígeno a las células por la sangre.",
     "Fabrica alimento por fotosíntesis.",
     "Guarda el alimento extra como grasa."
    ],
    "hint": "Es una molécula ayudante.",
    "explain": "Las enzimas digestivas aceleran las reacciones que rompen las moléculas grandes de los alimentos en pequeñas."
   }
  },
  {
   "id": "ms3q17",
   "code": "3.1.6-8.G",
   "prompt": "Where are most small food molecules absorbed into the blood?",
   "options": [
    "the small intestine",
    "the large intestine",
    "the air sacs in the lungs",
    "the heart"
   ],
   "answer": 0,
   "hint": "It is long and lined with villi.",
   "explain": "The small intestine’s villi absorb sugars, amino acids and fatty acids into the blood.",
   "es": {
    "prompt": "¿Dónde se absorben hacia la sangre la mayoría de las moléculas pequeñas de los alimentos?",
    "options": [
     "en el intestino delgado",
     "en el intestino grueso",
     "en los sacos de aire de los pulmones",
     "en el corazón"
    ],
    "hint": "Es largo y tiene vellosidades.",
    "explain": "Las vellosidades del intestino delgado absorben azúcares, aminoácidos y ácidos grasos hacia la sangre."
   }
  },
  {
   "id": "ms3q18",
   "code": "3.1.6-8.G",
   "prompt": "Your muscle cells join amino acids together into new proteins. What does this support?",
   "options": [
    "growth and repair",
    "photosynthesis",
    "breathing out carbon dioxide",
    "digestion of fiber"
   ],
   "answer": 0,
   "hint": "New proteins build new body parts.",
   "explain": "Building new molecules like proteins lets the body grow and repair itself.",
   "es": {
    "prompt": "Tus células musculares unen aminoácidos para formar proteínas nuevas. ¿Qué permite esto?",
    "options": [
     "el crecimiento y la reparación",
     "la fotosíntesis",
     "exhalar el dióxido de carbono",
     "digerir la fibra"
    ],
    "hint": "Las proteínas nuevas forman partes nuevas del cuerpo.",
    "explain": "Formar moléculas nuevas como las proteínas permite que el cuerpo crezca y se repare."
   }
  },
  {
   "id": "ms3q19",
   "code": "3.1.6-8.G",
   "prompt": "In your cells, sugar reacts with oxygen. What does this reaction do?",
   "options": [
    "It releases energy the cell can use.",
    "It makes new sugar using light energy.",
    "It builds bones.",
    "It digests starch into sugar."
   ],
   "answer": 0,
   "hint": "It happens in the mitochondria.",
   "explain": "This reaction (cellular respiration) releases the energy stored in sugar and gives off carbon dioxide and water.",
   "es": {
    "prompt": "En tus células, el azúcar reacciona con el oxígeno. ¿Qué hace esta reacción?",
    "options": [
     "Libera energía que la célula puede usar.",
     "Fabrica azúcar nuevo usando energía luminosa.",
     "Forma huesos.",
     "Digiere el almidón en azúcar."
    ],
    "hint": "Ocurre en las mitocondrias.",
    "explain": "Esta reacción (la respiración celular) libera la energía guardada en el azúcar y produce dióxido de carbono y agua."
   }
  },
  {
   "id": "ms3q20",
   "code": "3.1.6-8.G",
   "prompt": "When sugar is used to release energy, what happens to its atoms?",
   "options": [
    "They form carbon dioxide and water.",
    "They are destroyed and disappear.",
    "They are turned into light and heat.",
    "They become amino acids for muscles."
   ],
   "answer": 0,
   "hint": "Matter is not destroyed.",
   "explain": "The atoms are rearranged into new molecules. You breathe out the carbon dioxide.",
   "es": {
    "prompt": "Cuando el azúcar se usa para liberar energía, ¿qué pasa con sus átomos?",
    "options": [
     "Forman dióxido de carbono y agua.",
     "Se destruyen y desaparecen.",
     "Se convierten en luz y calor.",
     "Se vuelven aminoácidos para los músculos."
    ],
    "hint": "La materia no se destruye.",
    "explain": "Los átomos se reorganizan en moléculas nuevas. Tú exhalas el dióxido de carbono."
   }
  },
  {
   "id": "ms3q21",
   "code": "3.1.6-8.G",
   "prompt": "Which is the correct order for a bite of bread?",
   "options": [
    "digested → absorbed → carried in blood → used by cells",
    "absorbed → digested → used by cells → carried in blood",
    "used by cells → digested → absorbed → carried in blood",
    "carried in blood → used by cells → absorbed → digested"
   ],
   "answer": 0,
   "hint": "It must be broken down before it can be absorbed.",
   "explain": "Food is digested into small molecules, absorbed, carried by the blood, and then used by cells.",
   "es": {
    "prompt": "¿Cuál es el orden correcto para un bocado de pan?",
    "options": [
     "se digiere → se absorbe → la sangre lo lleva → lo usan las células",
     "se absorbe → se digiere → lo usan las células → la sangre lo lleva",
     "lo usan las células → se digiere → se absorbe → la sangre lo lleva",
     "la sangre lo lleva → lo usan las células → se absorbe → se digiere"
    ],
    "hint": "Debe descomponerse antes de absorberse.",
    "explain": "Los alimentos se digieren en moléculas pequeñas, se absorben, la sangre los lleva y luego las células los usan."
   }
  },
  {
   "id": "ms3q22",
   "code": "3.1.6-8.G",
   "prompt": "The body cannot digest fiber. What happens to most of it?",
   "options": [
    "Bacteria in the large intestine break some of it down.",
    "It is absorbed right away into the blood through the mouth.",
    "Stomach acid turns all of it into oxygen gas.",
    "It is turned into amino acids that build muscle."
   ],
   "answer": 0,
   "hint": "Helpful bacteria live in the large intestine.",
   "explain": "Fiber is not broken down by your own enzymes. Gut bacteria break some down, and the rest leaves the body.",
   "es": {
    "prompt": "El cuerpo no puede digerir la fibra. ¿Qué pasa con la mayor parte?",
    "options": [
     "Las bacterias del intestino grueso descomponen una parte.",
     "Se absorbe enseguida hacia la sangre a través de la boca.",
     "El ácido del estómago la convierte toda en gas oxígeno.",
     "Se convierte en aminoácidos que forman músculo."
    ],
    "hint": "En el intestino grueso viven bacterias útiles.",
    "explain": "Tus propias enzimas no descomponen la fibra. Las bacterias del intestino descomponen una parte, y el resto sale del cuerpo."
   }
  },
  {
   "id": "ms3q23",
   "code": "3.1.6-8.E",
   "prompt": "Which is an ENVIRONMENTAL factor that affects plant growth?",
   "options": [
    "the amount of sunlight",
    "the genes in the seed",
    "the parent plants’ height",
    "the seed variety"
   ],
   "answer": 0,
   "hint": "It comes from the surroundings.",
   "explain": "Light, water, soil nutrients and temperature are environmental factors.",
   "es": {
    "prompt": "¿Cuál es un factor AMBIENTAL que influye en el crecimiento de las plantas?",
    "options": [
     "la cantidad de luz del sol",
     "los genes de la semilla",
     "la altura de las plantas madre",
     "la variedad de semilla"
    ],
    "hint": "Viene del entorno.",
    "explain": "La luz, el agua, los nutrientes del suelo y la temperatura son factores ambientales."
   }
  },
  {
   "id": "ms3q24",
   "code": "3.1.6-8.E",
   "prompt": "Which is a GENETIC factor that affects growth?",
   "options": [
    "genes from the parents",
    "the amount of rain each month",
    "a cold spring night",
    "compost added to the soil"
   ],
   "answer": 0,
   "hint": "It is inherited.",
   "explain": "Genetic factors come from the parents, in the genes.",
   "es": {
    "prompt": "¿Cuál es un factor GENÉTICO que influye en el crecimiento?",
    "options": [
     "los genes de los padres",
     "la cantidad de lluvia de cada mes",
     "una noche fría de primavera",
     "la composta agregada al suelo"
    ],
    "hint": "Se hereda.",
    "explain": "Los factores genéticos vienen de los padres, en los genes."
   }
  },
  {
   "id": "ms3q25",
   "code": "3.1.6-8.E",
   "prompt": "Two bean plants came from the SAME seed packet. One grew in the sun and one in the shade. The sunny one grew taller. What caused the difference?",
   "options": [
    "an environmental factor: light",
    "a genetic factor: different genes",
    "the shade plant had no cells",
    "the sunny plant was older"
   ],
   "answer": 0,
   "hint": "The seeds were the same.",
   "explain": "With the same seeds, the difference came from the environment. More light means more photosynthesis and more growth.",
   "es": {
    "prompt": "Dos plantas de frijol salieron del MISMO sobre de semillas. Una creció al sol y otra en la sombra. La del sol creció más. ¿Qué causó la diferencia?",
    "options": [
     "un factor ambiental: la luz",
     "un factor genético: genes distintos",
     "la planta de la sombra no tenía células",
     "la planta del sol era más vieja"
    ],
    "hint": "Las semillas eran iguales.",
    "explain": "Con las mismas semillas, la diferencia vino del ambiente. Más luz significa más fotosíntesis y más crecimiento."
   }
  },
  {
   "id": "ms3q26",
   "code": "3.1.6-8.E",
   "prompt": "A tall pea variety and a dwarf pea variety grew side by side with the same sun, water and soil. The dwarf peas stayed short. Why?",
   "options": [
    "Their genes are different.",
    "They got less light.",
    "They got more water.",
    "The soil under them was different."
   ],
   "answer": 0,
   "hint": "Everything in the environment was the same.",
   "explain": "When the environment is the same, differences in growth come from genetic factors.",
   "es": {
    "prompt": "Una variedad de chícharo alta y una enana crecieron lado a lado con el mismo sol, agua y suelo. Los chícharos enanos se quedaron bajos. ¿Por qué?",
    "options": [
     "Sus genes son distintos.",
     "Recibieron menos luz.",
     "Recibieron más agua.",
     "El suelo debajo de ellos era distinto."
    ],
    "hint": "Todo el ambiente era igual.",
    "explain": "Cuando el ambiente es igual, las diferencias en el crecimiento vienen de factores genéticos."
   }
  },
  {
   "id": "ms3q27",
   "code": "3.1.6-8.E",
   "prompt": "What is the BEST way to test whether fertilizer affects how tall a plant grows?",
   "options": [
    "Fertilize only some plants and keep everything else the same.",
    "Use different seeds, soil and light for each of the plants.",
    "Give all the plants the same amount of fertilizer.",
    "Grow just one plant with fertilizer and then guess the result."
   ],
   "answer": 0,
   "hint": "Change only one thing.",
   "explain": "A fair test changes one factor and keeps the others the same, so the result can be explained.",
   "es": {
    "prompt": "¿Cuál es la MEJOR manera de probar si el fertilizante influye en la altura de una planta?",
    "options": [
     "Dar fertilizante solo a algunas plantas y dejar todo lo demás igual.",
     "Usar semillas, suelo y luz distintos para cada una de las plantas.",
     "Dar a todas las plantas la misma cantidad de fertilizante.",
     "Sembrar una sola planta con fertilizante y luego adivinar el resultado."
    ],
    "hint": "Cambia una sola cosa.",
    "explain": "Una prueba justa cambia un factor y deja los demás iguales, para poder explicar el resultado."
   }
  },
  {
   "id": "ms3q28",
   "code": "3.1.6-8.E",
   "prompt": "Two hydrangeas grown from cuttings of the SAME plant bloom blue in one yard and pink in another. What is the most likely reason?",
   "options": [
    "The soil is different in each yard.",
    "The two bushes have different genes.",
    "The pink flowers are older than the blue ones.",
    "The blue flowers get no sunlight at all."
   ],
   "answer": 0,
   "hint": "Cuttings have the same genes as the plant they came from.",
   "explain": "Hydrangea flower color changes with how acidic the soil is: an environmental factor.",
   "es": {
    "prompt": "Dos hortensias que crecieron de esquejes de la MISMA planta dan flores azules en un jardín y rosadas en otro. ¿Cuál es la razón más probable?",
    "options": [
     "El suelo es distinto en cada jardín.",
     "Los dos arbustos tienen genes distintos.",
     "Las flores rosadas son más viejas que las azules.",
     "Las flores azules no reciben nada de luz del sol."
    ],
    "hint": "Los esquejes tienen los mismos genes que la planta de la que vienen.",
    "explain": "El color de las flores de la hortensia cambia según la acidez del suelo: un factor ambiental."
   }
  },
  {
   "id": "ms3q29",
   "code": "3.1.6-8.E",
   "prompt": "A puppy from a large dog breed does not get enough food. As an adult, it is smaller than its parents. What does this show?",
   "options": [
    "The environment can limit growth that genes allow.",
    "Genes do not matter at all for how big a dog gets.",
    "Eating less food can change which breed a dog is.",
    "Small dogs always have small puppies."
   ],
   "answer": 0,
   "hint": "Think about both genes and food.",
   "explain": "Its genes allowed it to grow large, but not enough food (an environmental factor) limited its growth.",
   "es": {
    "prompt": "Un cachorro de una raza de perro grande no recibe suficiente comida. De adulto es más pequeño que sus padres. ¿Qué muestra esto?",
    "options": [
     "El ambiente puede limitar el crecimiento que permiten los genes.",
     "Los genes no importan nada en lo grande que llega a ser un perro.",
     "Comer menos puede cambiar la raza de un perro.",
     "Los perros pequeños siempre tienen cachorros pequeños."
    ],
    "hint": "Piensa en los genes y en la comida.",
    "explain": "Sus genes le permitían crecer mucho, pero la falta de comida (un factor ambiental) limitó su crecimiento."
   }
  },
  {
   "id": "ms3q30",
   "code": "3.1.6-8.E",
   "prompt": "Why do seedlings in a cold frame grow faster in early spring than seedlings outside?",
   "options": [
    "The warmer temperature helps them grow.",
    "The glass of the frame changes their genes.",
    "They get less light under the glass.",
    "Cold makes plants grow faster."
   ],
   "answer": 0,
   "hint": "A cold frame keeps plants warm.",
   "explain": "Temperature is an environmental factor. Most plants grow slowly when it is cold.",
   "es": {
    "prompt": "¿Por qué las plántulas de una cajonera fría crecen más rápido a principios de la primavera que las de afuera?",
    "options": [
     "La temperatura más cálida las ayuda a crecer.",
     "El vidrio de la cajonera cambia sus genes.",
     "Reciben menos luz debajo del vidrio.",
     "El frío hace que las plantas crezcan más rápido."
    ],
    "hint": "Una cajonera fría mantiene calientes las plantas.",
    "explain": "La temperatura es un factor ambiental. La mayoría de las plantas crecen despacio cuando hace frío."
   }
  },
  {
   "id": "ms3q31",
   "code": "3.1.6-8.E",
   "prompt": "Record-setting giant pumpkins can weigh over 2,000 pounds. What do growers need?",
   "options": [
    "good seeds AND lots of sun, water and nutrients",
    "only seeds from a record-setting giant pumpkin",
    "only lots of water every single day",
    "only a big, wide field to grow in"
   ],
   "answer": 0,
   "hint": "Both kinds of factors matter.",
   "explain": "Giant pumpkins need genes for huge size (genetic) and an excellent environment (sun, water, nutrients, space).",
   "es": {
    "prompt": "Las calabazas gigantes de récord pueden pesar más de 2,000 libras. ¿Qué necesitan los cultivadores?",
    "options": [
     "buenas semillas Y mucho sol, agua y nutrientes",
     "solo semillas de una calabaza gigante de récord",
     "solo mucha agua todos los días",
     "solo un campo grande y amplio"
    ],
    "hint": "Los dos tipos de factores importan.",
    "explain": "Las calabazas gigantes necesitan genes para un gran tamaño (genético) y un ambiente excelente (sol, agua, nutrientes, espacio)."
   }
  },
  {
   "id": "ms3q32",
   "code": "3.1.6-8.E",
   "prompt": "Bean plants with almost no water grew only 6 cm, but beans with the right amount grew 30 cm. Which explanation fits the evidence?",
   "options": [
    "Water, an environmental factor, affected growth.",
    "The dry beans must have had different genes.",
    "Less water turned the dry beans into a different species.",
    "Beans grow just as well without water."
   ],
   "answer": 0,
   "hint": "The seeds were the same.",
   "explain": "The evidence shows that changing the water (environment) changed the growth.",
   "es": {
    "prompt": "Las plantas de frijol casi sin agua crecieron solo 6 cm, pero las que tuvieron la cantidad justa crecieron 30 cm. ¿Qué explicación concuerda con la prueba?",
    "options": [
     "El agua, un factor ambiental, influyó en el crecimiento.",
     "Los frijoles secos debían de tener genes distintos.",
     "Tener menos agua convirtió los frijoles secos en otra especie.",
     "Los frijoles crecen igual de bien sin agua."
    ],
    "hint": "Las semillas eran iguales.",
    "explain": "La prueba muestra que al cambiar el agua (el ambiente) cambió el crecimiento."
   }
  }
 ],
 "pairs": [
  {
   "name": "Goes in or comes out?",
   "explain": "Carbon dioxide and water go INTO photosynthesis. Sugar and oxygen come OUT.",
   "members": [
    {
     "label": "Goes in",
     "level": "3-1",
     "ids": [
      "ms3q01"
     ]
    },
    {
     "label": "Comes out",
     "level": "3-1",
     "ids": [
      "ms3q02"
     ]
    }
   ],
   "es": {
    "name": "¿Entra o sale?",
    "explain": "El dióxido de carbono y el agua ENTRAN en la fotosíntesis. El azúcar y el oxígeno SALEN."
   }
  },
  {
   "name": "Growth or energy?",
   "explain": "Building new molecules (like proteins) supports growth. Reacting sugar with oxygen releases energy.",
   "members": [
    {
     "label": "Growth",
     "level": "3-3",
     "ids": [
      "ms3q18"
     ]
    },
    {
     "label": "Release energy",
     "level": "3-3",
     "ids": [
      "ms3q19"
     ]
    }
   ],
   "es": {
    "name": "¿Crecimiento o energía?",
    "explain": "Formar moléculas nuevas (como las proteínas) permite el crecimiento. La reacción del azúcar con el oxígeno libera energía."
   }
  },
  {
   "name": "Environmental or genetic?",
   "explain": "Environmental factors come from the surroundings. Genetic factors come from the parents, in the genes.",
   "members": [
    {
     "label": "Environmental",
     "level": "3-4",
     "ids": [
      "ms3q23",
      "ms3q25"
     ]
    },
    {
     "label": "Genetic",
     "level": "3-4",
     "ids": [
      "ms3q24",
      "ms3q26"
     ]
    }
   ],
   "es": {
    "name": "¿Ambiental o genético?",
    "explain": "Los factores ambientales vienen del entorno. Los factores genéticos vienen de los padres, en los genes."
   }
  }
 ],
 "become": [
  {
   "id": "b3-co2",
   "code": "3.1.6-8.F",
   "you": "a carbon dioxide molecule in the prairie air",
   "short": "CO₂",
   "color": "#cfefff",
   "goal": "A leaf needs you for photosynthesis. Find the way in!",
   "doors": [
    {
     "kind": "lipid",
     "label": "In through a tiny opening (stoma) under the leaf",
     "ok": true,
     "es": {
      "label": "Entra por una abertura diminuta (estoma) bajo la hoja"
     }
    },
    {
     "kind": "protein",
     "label": "Down into the roots",
     "ok": false,
     "es": {
      "label": "Baja hasta las raíces",
      "why": "Las raíces toman agua y minerales del suelo. El dióxido de carbono entra por las hojas."
     },
     "why": "Roots take in water and minerals from the soil. Carbon dioxide enters through the leaves."
    },
    {
     "kind": "pump",
     "label": "Into the flower’s nectar",
     "ok": false,
     "es": {
      "label": "Entra en el néctar de la flor",
      "why": "El néctar es azúcar que la planta ya fabricó. Primero el dióxido de carbono tiene que entrar en una célula de la hoja."
     },
     "why": "Nectar is sugar the plant already made. Carbon dioxide has to get into a leaf cell first."
    }
   ],
   "explain": "Carbon dioxide enters through the stomata. In the chloroplasts, it is rearranged with water into sugar: the carbon you carried becomes part of the plant.",
   "es": {
    "you": "una molécula de dióxido de carbono en el aire de la pradera",
    "goal": "Una hoja te necesita para la fotosíntesis. ¡Encuentra la entrada!",
    "explain": "El dióxido de carbono entra por los estomas. En los cloroplastos se reorganiza con el agua en azúcar: el carbono que llevabas se vuelve parte de la planta."
   }
  },
  {
   "id": "b3-sugar",
   "code": "3.1.6-8.G",
   "you": "a sugar molecule from the bread",
   "short": "C₆",
   "color": "#ffd166",
   "goal": "You were just absorbed in the small intestine. A leg muscle cell needs energy. Get there!",
   "doors": [
    {
     "kind": "lipid",
     "label": "Into the blood, which carries you to the muscle cell",
     "ok": true,
     "es": {
      "label": "Entra en la sangre, que te lleva a la célula muscular"
     }
    },
    {
     "kind": "protein",
     "label": "Back up to the stomach",
     "ok": false,
     "es": {
      "label": "Vuelve a subir al estómago",
      "why": "Los alimentos avanzan en un solo sentido por el sistema digestivo. El azúcar absorbido viaja en la sangre."
     },
     "why": "Food moves one way through the digestive system. Absorbed sugar travels in the blood."
    },
    {
     "kind": "pump",
     "label": "Out through the lungs",
     "ok": false,
     "es": {
      "label": "Sal por los pulmones",
      "why": "Los pulmones toman oxígeno y liberan dióxido de carbono. No llevan azúcar a las células."
     },
     "why": "The lungs take in oxygen and give off carbon dioxide. They do not deliver sugar to cells."
    }
   ],
   "explain": "The blood carries sugar to the cells. In the mitochondria, it reacts with oxygen and releases energy, and its atoms are rearranged into carbon dioxide and water.",
   "es": {
    "you": "una molécula de azúcar del pan",
    "goal": "Te acaban de absorber en el intestino delgado. Una célula muscular de la pierna necesita energía. ¡Llega hasta allí!",
    "explain": "La sangre lleva el azúcar a las células. En las mitocondrias reacciona con el oxígeno y libera energía, y sus átomos se reorganizan en dióxido de carbono y agua."
   }
  }
 ],
 "data": [
  {
   "id": "d3-bubbles",
   "code": "3.1.6-8.F",
   "title": "Oxygen bubbles from pondweed in different light",
   "xlabel": "Light",
   "ylabel": "Bubbles per minute",
   "categories": [
    "Dark",
    "Dim",
    "Medium",
    "Bright"
   ],
   "values": [
    0,
    4,
    11,
    20
   ],
   "questions": [
    {
     "prompt": "In which light did the pondweed give off the MOST oxygen?",
     "answer": 3,
     "hint": "Find the tallest bar.",
     "explain": "Bright light. More light energy means more photosynthesis, so more oxygen bubbles.",
     "es": {
      "prompt": "¿Con qué luz liberó la planta MÁS oxígeno?",
      "hint": "Busca la barra más alta.",
      "explain": "Con luz brillante. Más energía luminosa significa más fotosíntesis, y más burbujas de oxígeno."
     }
    },
    {
     "prompt": "Which result is EVIDENCE that photosynthesis needs light?",
     "answer": 0,
     "hint": "Look for the bar with no bubbles at all.",
     "explain": "In the dark there were no bubbles. Without light energy, the plant could not do photosynthesis.",
     "es": {
      "prompt": "¿Qué resultado es una PRUEBA de que la fotosíntesis necesita luz?",
      "hint": "Busca la barra sin ninguna burbuja.",
      "explain": "En la oscuridad no hubo burbujas. Sin energía luminosa, la planta no pudo hacer la fotosíntesis."
     }
    }
   ],
   "es": {
    "title": "Burbujas de oxígeno de una planta acuática con distinta luz",
    "xlabel": "Luz",
    "ylabel": "Burbujas por minuto",
    "categories": [
     "Oscuridad",
     "Poca luz",
     "Luz media",
     "Luz brillante"
    ]
   }
  },
  {
   "id": "d3-oxygen",
   "code": "3.1.6-8.F",
   "title": "Oxygen in the kelp forest water during one day",
   "xlabel": "Time of day",
   "ylabel": "Oxygen (milligrams per liter)",
   "categories": [
    "6 a.m.",
    "10 a.m.",
    "2 p.m.",
    "6 p.m.",
    "10 p.m."
   ],
   "values": [
    6,
    8,
    10,
    9,
    7
   ],
   "questions": [
    {
     "prompt": "When was there the MOST oxygen in the water?",
     "answer": 2,
     "hint": "Find the tallest bar.",
     "explain": "At 2 p.m., after hours of bright sunlight. The kelp and phytoplankton had been doing photosynthesis all day.",
     "es": {
      "prompt": "¿Cuándo hubo MÁS oxígeno en el agua?",
      "hint": "Busca la barra más alta.",
      "explain": "A las 2 p. m., después de horas de luz brillante. El kelp y el fitoplancton habían hecho fotosíntesis todo el día."
     }
    },
    {
     "prompt": "At which time was there the LEAST oxygen in the water?",
     "answer": 0,
     "hint": "Find the shortest bar.",
     "explain": "At 6 a.m., just before sunrise. All night there was no photosynthesis, while fish, urchins and the kelp itself kept using oxygen to release energy.",
     "es": {
      "prompt": "¿A qué hora hubo MENOS oxígeno en el agua?",
      "hint": "Busca la barra más baja.",
      "explain": "A las 6 a. m., justo antes del amanecer. Toda la noche no hubo fotosíntesis, mientras los peces, los erizos y el mismo kelp seguían usando oxígeno para liberar energía."
     }
    }
   ],
   "es": {
    "title": "Oxígeno en el agua del bosque de kelp durante un día",
    "xlabel": "Hora del día",
    "ylabel": "Oxígeno (miligramos por litro)",
    "categories": [
     "6 a. m.",
     "10 a. m.",
     "2 p. m.",
     "6 p. m.",
     "10 p. m."
    ]
   }
  },
  {
   "id": "d3-peas",
   "code": "3.1.6-8.E",
   "title": "Pea plant mass after 8 weeks",
   "xlabel": "Seeds and light",
   "ylabel": "Plant mass (grams)",
   "categories": [
    "Tall, sun",
    "Tall, shade",
    "Dwarf, sun",
    "Dwarf, shade"
   ],
   "values": [
    60,
    25,
    20,
    9
   ],
   "questions": [
    {
     "prompt": "Tall seeds and dwarf seeds both grew in the SUN. Which one stayed shorter because of a GENETIC factor?",
     "answer": 2,
     "hint": "Look only at the two plants in the sun.",
     "explain": "The dwarf seeds in the sun grew to only 20 grams, while the tall seeds in the same sun grew to 60 grams. Same light, different genes.",
     "es": {
      "prompt": "Las semillas altas y las enanas crecieron al SOL. ¿Cuál se quedó más baja por un factor GENÉTICO?",
      "hint": "Mira solo las dos plantas al sol.",
      "explain": "Las semillas enanas al sol llegaron solo a 20 gramos, mientras que las altas, con el mismo sol, llegaron a 60 gramos. La misma luz, genes distintos."
     }
    },
    {
     "prompt": "Which bar shows that an ENVIRONMENTAL factor made the tall pea variety grow less?",
     "answer": 1,
     "hint": "Same seeds, less light.",
     "explain": "Tall seeds in the shade grew to only 25 grams, compared with 60 grams in the sun. Less light means less photosynthesis and less growth.",
     "es": {
      "prompt": "¿Qué barra muestra que un factor AMBIENTAL hizo crecer menos a la variedad alta?",
      "hint": "Las mismas semillas, menos luz.",
      "explain": "Las semillas altas en la sombra llegaron solo a 25 gramos, comparado con 60 gramos al sol. Menos luz significa menos fotosíntesis y menos crecimiento."
     }
    }
   ],
   "es": {
    "title": "Masa de plantas de chícharo después de 8 semanas",
    "xlabel": "Semillas y luz",
    "ylabel": "Masa de la planta (gramos)",
    "categories": [
     "Altas, sol",
     "Altas, sombra",
     "Enanas, sol",
     "Enanas, sombra"
    ]
   }
  },
  {
   "id": "d3-water",
   "code": "3.1.6-8.E",
   "title": "Bean plant height with different amounts of water",
   "xlabel": "Water each day",
   "ylabel": "Height after 4 weeks (centimeters)",
   "categories": [
    "Almost none",
    "A little",
    "Just right",
    "Way too much"
   ],
   "values": [
    6,
    18,
    30,
    14
   ],
   "questions": [
    {
     "prompt": "Which amount of water gave the BEST growth?",
     "answer": 2,
     "hint": "Find the tallest bar.",
     "explain": "“Just right” grew the most. Plants need enough water for photosynthesis, but not so much that the roots cannot get air.",
     "es": {
      "prompt": "¿Qué cantidad de agua dio el MEJOR crecimiento?",
      "hint": "Busca la barra más alta.",
      "explain": "“La justa” creció más. Las plantas necesitan agua suficiente para la fotosíntesis, pero no tanta que las raíces no reciban aire."
     }
    },
    {
     "prompt": "All these beans came from the same seed packet. Which amount of water was TOO MUCH, so the plants grew less than “just right”?",
     "answer": 3,
     "hint": "Look to the right of the tallest bar.",
     "explain": "Way too much water (14 cm). Soggy soil keeps air from the roots. The seeds were the same, so the difference came from an environmental factor.",
     "es": {
      "prompt": "Todos estos frijoles salieron del mismo sobre de semillas. ¿Qué cantidad de agua fue DEMASIADA, y las plantas crecieron menos que con “la justa”?",
      "hint": "Mira a la derecha de la barra más alta.",
      "explain": "Demasiada agua (14 cm). El suelo empapado no deja llegar aire a las raíces. Las semillas eran iguales, así que la diferencia vino de un factor ambiental."
     }
    }
   ],
   "es": {
    "title": "Altura de plantas de frijol con distintas cantidades de agua",
    "xlabel": "Agua cada día",
    "ylabel": "Altura después de 4 semanas (centímetros)",
    "categories": [
     "Casi nada",
     "Un poco",
     "La justa",
     "Demasiada"
    ]
   }
  }
 ],
 "mazes": [
  {
   "id": "maze3-energy",
   "code": "3.1.6-8.F",
   "title": "Follow the energy: go through the doorway where the energy goes next",
   "start": "Sunlight",
   "steps": [
    {
     "label": "Giant kelp",
     "hint": "Which living thing captures light energy by photosynthesis?",
     "why": "The kelp is the producer: it stores light energy in sugar.",
     "es": {
      "label": "Kelp gigante",
      "hint": "¿Qué ser vivo captura la energía luminosa por fotosíntesis?",
      "why": "El kelp es el productor: guarda la energía luminosa en azúcar."
     }
    },
    {
     "label": "Purple sea urchin",
     "hint": "Who eats the kelp?",
     "why": "The urchin is a herbivore. Energy and matter from the kelp move into it.",
     "es": {
      "label": "Erizo de mar morado",
      "hint": "¿Quién se come el kelp?",
      "why": "El erizo es un herbívoro. La energía y la materia del kelp pasan a él."
     }
    },
    {
     "label": "Sea otter",
     "hint": "Who eats the sea urchin?",
     "why": "Sea otters eat urchins, so energy moves up the food chain.",
     "es": {
      "label": "Nutria marina",
      "hint": "¿Quién se come al erizo de mar?",
      "why": "Las nutrias comen erizos, así que la energía sube por la cadena alimentaria."
     }
    }
   ],
   "extra": [
    "Sand",
    "A rock",
    "Seawater"
   ],
   "explain": "Energy flows from the Sun into the kelp by photosynthesis, then into the animals that eat it. Matter moves along the same path and cycles back to the water.",
   "es": {
    "title": "Sigue la energía: cruza la puerta hacia donde va la energía",
    "start": "Luz del sol",
    "extra": [
     "Arena",
     "Una roca",
     "Agua de mar"
    ],
    "explain": "La energía pasa del Sol al kelp por la fotosíntesis, y luego a los animales que lo comen. La materia sigue el mismo camino y vuelve al agua en un ciclo."
   }
  }
 ],
 "sequences": [
  {
   "id": "seq3-photo",
   "code": "3.1.6-8.F",
   "title": "How a prairie plant turns light into food",
   "steps": [
    "Sunlight reaches the leaf",
    "Chloroplasts capture the light energy",
    "Carbon dioxide and water are rearranged into sugar",
    "Oxygen leaves through the stomata",
    "The plant uses the sugar to grow"
   ],
   "hint": "Start with the energy arriving from the Sun.",
   "explain": "Energy flows in as light and is stored in sugar. The matter (carbon, hydrogen and oxygen atoms) is rearranged, not created.",
   "es": {
    "title": "Cómo una planta de la pradera convierte la luz en alimento",
    "steps": [
     "La luz del sol llega a la hoja",
     "Los cloroplastos capturan la energía luminosa",
     "El dióxido de carbono y el agua se reorganizan en azúcar",
     "El oxígeno sale por los estomas",
     "La planta usa el azúcar para crecer"
    ],
    "hint": "Empieza con la energía que llega del Sol.",
    "explain": "La energía entra como luz y se guarda en el azúcar. La materia (átomos de carbono, hidrógeno y oxígeno) se reorganiza, no se crea."
   }
  },
  {
   "id": "seq3-protein",
   "code": "3.1.6-8.G",
   "title": "From a turkey sandwich to new muscle",
   "steps": [
    "You eat turkey, which has protein",
    "Digestion breaks the protein into amino acids",
    "The small intestine absorbs the amino acids",
    "The blood carries them to muscle cells",
    "The cells join them into new proteins"
   ],
   "hint": "Start with the bite of food.",
   "explain": "The turkey’s protein was taken apart and its amino acids were rearranged into YOUR proteins. That new matter supports growth and repair.",
   "es": {
    "title": "De un sándwich de pavo a músculo nuevo",
    "steps": [
     "Comes pavo, que tiene proteína",
     "La digestión rompe la proteína en aminoácidos",
     "El intestino delgado absorbe los aminoácidos",
     "La sangre los lleva a las células musculares",
     "Las células los unen en proteínas nuevas"
    ],
    "hint": "Empieza con el bocado de comida.",
    "explain": "La proteína del pavo se desarmó y sus aminoácidos se reorganizaron en TUS proteínas. Esa materia nueva permite el crecimiento y la reparación."
   }
  }
 ],
 "wordbanks": [
  {
   "id": "wb3-photo",
   "code": "3.1.6-8.F",
   "words": [
    "photosynthesis",
    "sunlight",
    "carbon dioxide",
    "sugar",
    "oxygen",
    "producer"
   ],
   "sentences": [
    {
     "text": "Kelp makes its own food, so it is a ___.",
     "answer": "producer",
     "code": "3.1.6-8.F",
     "explain": "Producers make their own food with energy from sunlight.",
     "es": {
      "text": "El kelp fabrica su propio alimento, así que es un ___.",
      "answer": "productor",
      "explain": "Los productores fabrican su propio alimento con la energía de la luz del sol."
     }
    },
    {
     "text": "The process that makes food from light is ___.",
     "answer": "photosynthesis",
     "code": "3.1.6-8.F",
     "explain": "Photosynthesis uses light energy to make sugar.",
     "es": {
      "text": "El proceso que fabrica alimento con la luz es la ___.",
      "answer": "fotosíntesis",
      "explain": "La fotosíntesis usa la energía luminosa para fabricar azúcar."
     }
    },
    {
     "text": "The energy for photosynthesis comes from ___.",
     "answer": "sunlight",
     "code": "3.1.6-8.F",
     "explain": "Light energy from the Sun powers photosynthesis.",
     "es": {
      "text": "La energía para la fotosíntesis viene de la ___.",
      "answer": "luz del sol",
      "explain": "La energía luminosa del Sol impulsa la fotosíntesis."
     }
    },
    {
     "text": "Kelp takes in ___ that is dissolved in seawater.",
     "answer": "carbon dioxide",
     "code": "3.1.6-8.F",
     "explain": "Carbon dioxide is a raw material of photosynthesis.",
     "es": {
      "text": "El kelp toma el ___ que está disuelto en el agua de mar.",
      "answer": "dióxido de carbono",
      "explain": "El dióxido de carbono es materia prima de la fotosíntesis."
     }
    },
    {
     "text": "The food that photosynthesis makes is ___.",
     "answer": "sugar",
     "code": "3.1.6-8.F",
     "explain": "Sugar stores the energy captured from light.",
     "es": {
      "text": "El alimento que fabrica la fotosíntesis es el ___.",
      "answer": "azúcar",
      "explain": "El azúcar guarda la energía capturada de la luz."
     }
    },
    {
     "text": "Fish in the kelp forest breathe the ___ that kelp gives off.",
     "answer": "oxygen",
     "code": "3.1.6-8.F",
     "explain": "Photosynthesis gives off oxygen.",
     "es": {
      "text": "Los peces del bosque de kelp respiran el ___ que libera el kelp.",
      "answer": "oxígeno",
      "explain": "La fotosíntesis libera oxígeno."
     }
    }
   ],
   "es": {
    "words": [
     "fotosíntesis",
     "luz del sol",
     "dióxido de carbono",
     "azúcar",
     "oxígeno",
     "productor"
    ]
   }
  }
 ],
 "balances": [
  {
   "id": "bal3-soil",
   "kind": "elevator",
   "code": "3.1.6-8.E",
   "title": "Keep the garden soil moist, but not soggy. The platform rises and falls with the soil moisture.",
   "what": "Soil moisture",
   "unit": "%",
   "start": 50,
   "min": 0,
   "max": 100,
   "band": [
    35,
    65
   ],
   "danger": [
    15,
    85
   ],
   "hold": 10,
   "drift": -3,
   "event": {
    "every": 6,
    "delta": -14,
    "msg": "A hot, sunny afternoon! Water is drying out of the soil."
   },
   "controls": [
    {
     "label": "Water the bed",
     "delta": 16
    },
    {
     "label": "Open the drain and let it dry",
     "delta": -12
    }
   ],
   "tooHigh": "The soil is soggy! The roots cannot get air. Let some water drain.",
   "tooLow": "The soil is too dry, and the plants are wilting! Water the bed.",
   "explain": "Water is an environmental factor. Plants grow best when the soil is moist but not soggy, so gardeners watch the soil and adjust.",
   "es": {
    "title": "Mantén la tierra del huerto húmeda, pero no empapada. La plataforma sube y baja con la humedad del suelo.",
    "what": "Humedad del suelo",
    "event": {
     "every": 6,
     "delta": -14,
     "msg": "¡Una tarde calurosa y soleada! El agua se está secando del suelo."
    },
    "controls": [
     {
      "label": "Regar la parcela",
      "delta": 16
     },
     {
      "label": "Abrir el desagüe y dejar que se seque",
      "delta": -12
     }
    ],
    "tooHigh": "¡El suelo está empapado! Las raíces no reciben aire. Deja que se escurra un poco de agua.",
    "tooLow": "¡El suelo está muy seco y las plantas se marchitan! Riega la parcela.",
    "explain": "El agua es un factor ambiental. Las plantas crecen mejor cuando el suelo está húmedo pero no empapado, por eso los jardineros vigilan el suelo y lo ajustan."
   }
  }
 ],
 "lablocks": [
  {
   "id": "lock3",
   "title": "Lab Lock",
   "es": {
    "title": "Candado del laboratorio"
   },
   "clues": [
    {
     "prompt": "Clue 1: How many of these go INTO photosynthesis? Carbon dioxide, water, light energy, oxygen, sugar.",
     "answer": 3,
     "code": "3.1.6-8.F",
     "hint": "Oxygen and sugar come out.",
     "explain": "Carbon dioxide, water and light energy: 3.",
     "es": {
      "prompt": "Pista 1: ¿Cuántos de estos ENTRAN en la fotosíntesis? Dióxido de carbono, agua, energía luminosa, oxígeno, azúcar.",
      "hint": "El oxígeno y el azúcar salen.",
      "explain": "Dióxido de carbono, agua y energía luminosa: 3."
     }
    },
    {
     "prompt": "Clue 2: How many of these are SMALL molecules the body can absorb? Sugar, amino acids, a bread crust, fatty acids.",
     "answer": 3,
     "code": "3.1.6-8.G",
     "hint": "A bread crust must be digested first.",
     "explain": "Sugar, amino acids and fatty acids: 3.",
     "es": {
      "prompt": "Pista 2: ¿Cuántas de estas son moléculas PEQUEÑAS que el cuerpo puede absorber? Azúcar, aminoácidos, una corteza de pan, ácidos grasos.",
      "hint": "La corteza de pan primero debe digerirse.",
      "explain": "Azúcar, aminoácidos y ácidos grasos: 3."
     }
    },
    {
     "prompt": "Clue 3: How many of these are GENETIC factors? The seed variety, sunlight, flower color from the parents, soil water.",
     "answer": 2,
     "code": "3.1.6-8.E",
     "hint": "Genetic factors come from the parents.",
     "explain": "The seed variety and the flower color from the parents: 2.",
     "es": {
      "prompt": "Pista 3: ¿Cuántos de estos son factores GENÉTICOS? La variedad de semilla, la luz del sol, el color de las flores de los padres, el agua del suelo.",
      "hint": "Los factores genéticos vienen de los padres.",
      "explain": "La variedad de semilla y el color de las flores de los padres: 2."
     }
    },
    {
     "prompt": "Clue 4: Look at the pea plants. How many bars are more than 22 grams?",
     "answer": 2,
     "code": "3.1.6-8.E",
     "hint": "Count the bars above 22.",
     "explain": "Tall seeds in the sun (60) and tall seeds in the shade (25): 2.",
     "es": {
      "prompt": "Pista 4: Mira las plantas de chícharo. ¿Cuántas barras pasan de 22 gramos?",
      "hint": "Cuenta las barras por encima de 22.",
      "explain": "Semillas altas al sol (60) y semillas altas en la sombra (25): 2.",
      "figure": {
       "type": "bars",
       "categories": [
        "Altas, sol",
        "Altas, sombra",
        "Enanas, sol",
        "Enanas, sombra"
       ],
       "values": [
        60,
        25,
        20,
        9
       ],
       "ylabel": "Masa (g)"
      }
     },
     "figure": {
      "type": "bars",
      "categories": [
       "Tall, sun",
       "Tall, shade",
       "Dwarf, sun",
       "Dwarf, shade"
      ],
      "values": [
       60,
       25,
       20,
       9
      ],
      "ylabel": "Mass (g)"
     }
    }
   ]
  }
 ],
 "scans": [
  {
   "id": "s3-prairie",
   "name": "Blazing star",
   "look": "sprout",
   "color": "#b06ad8",
   "word": "Producer",
   "def": "A living thing that makes its own food, using energy from sunlight.",
   "note": "Jennings Environmental Education Center protects one of Pennsylvania’s last prairies. Plants like blazing star are PRODUCERS: they make their own food.",
   "es": {
    "name": "Estrella fulgurante",
    "word": "Productor",
    "def": "Un ser vivo que fabrica su propio alimento con la energía de la luz del sol.",
    "note": "El Centro de Educación Ambiental Jennings protege una de las últimas praderas de Pensilvania. Plantas como la estrella fulgurante son PRODUCTORES: fabrican su propio alimento."
   }
  },
  {
   "id": "s3-sun",
   "name": "Sunlight on the prairie",
   "look": "sun",
   "color": "#ffd166",
   "word": "Light energy",
   "def": "Energy that travels from the Sun as light.",
   "note": "Plants capture LIGHT ENERGY from the Sun. Photosynthesis stores that energy in the sugar the plant makes.",
   "es": {
    "name": "Luz del sol en la pradera",
    "word": "Energía luminosa",
    "def": "Energía que viaja desde el Sol en forma de luz.",
    "note": "Las plantas capturan la ENERGÍA LUMINOSA del Sol. La fotosíntesis guarda esa energía en el azúcar que fabrica la planta."
   }
  },
  {
   "id": "s3-leaf",
   "name": "Prairie leaf",
   "look": "sprout",
   "color": "#5fbf5a",
   "word": "Photosynthesis",
   "def": "The process plants use to make sugar from carbon dioxide and water, using light energy. It gives off oxygen.",
   "note": "In PHOTOSYNTHESIS, a leaf takes carbon dioxide and water and, with light energy, rearranges them into sugar and oxygen.",
   "es": {
    "name": "Hoja de la pradera",
    "word": "Fotosíntesis",
    "def": "El proceso que usan las plantas para fabricar azúcar con dióxido de carbono y agua, usando energía luminosa. Libera oxígeno.",
    "note": "En la FOTOSÍNTESIS, una hoja toma dióxido de carbono y agua y, con energía luminosa, los reorganiza en azúcar y oxígeno."
   }
  },
  {
   "id": "s3-chloro",
   "name": "Inside a leaf cell",
   "look": "cell",
   "color": "#4fbf4a",
   "word": "Chloroplast",
   "def": "The green part of a plant cell where photosynthesis happens.",
   "note": "Each leaf cell holds many CHLOROPLASTS. Their green chlorophyll absorbs the light energy for photosynthesis.",
   "es": {
    "name": "Dentro de una célula de la hoja",
    "word": "Cloroplasto",
    "def": "La parte verde de la célula vegetal donde ocurre la fotosíntesis.",
    "note": "Cada célula de la hoja tiene muchos CLOROPLASTOS. Su clorofila verde absorbe la energía luminosa para la fotosíntesis."
   }
  },
  {
   "id": "s3-stoma",
   "name": "Underside of a leaf",
   "look": "grass",
   "color": "#7ac06a",
   "word": "Stomata",
   "def": "Tiny openings, mostly on the underside of a leaf, that let gases in and out.",
   "note": "Carbon dioxide from the air enters the leaf through the STOMATA, and oxygen leaves through them.",
   "es": {
    "name": "Envés de una hoja",
    "word": "Estomas",
    "def": "Aberturas diminutas, sobre todo en el envés de la hoja, que dejan entrar y salir los gases.",
    "note": "El dióxido de carbono del aire entra en la hoja por los ESTOMAS, y el oxígeno sale por ellos."
   }
  },
  {
   "id": "s3-roots",
   "name": "Prairie roots",
   "look": "rod",
   "color": "#a0784a",
   "word": "Water",
   "def": "One of the two raw materials of photosynthesis. Roots take it in from the soil.",
   "note": "Prairie plants have very deep roots. They take in WATER, which travels up the stem to the leaves.",
   "es": {
    "name": "Raíces de la pradera",
    "word": "Agua",
    "def": "Una de las dos materias primas de la fotosíntesis. Las raíces la toman del suelo.",
    "note": "Las plantas de la pradera tienen raíces muy profundas. Toman AGUA, que sube por el tallo hasta las hojas."
   }
  },
  {
   "id": "s3-air",
   "name": "Prairie breeze",
   "look": "drop",
   "color": "#cfefff",
   "word": "Carbon dioxide",
   "def": "A gas in the air. Plants use it as a raw material for photosynthesis, and living things give it off.",
   "note": "Most of the matter in a plant’s body came from CARBON DIOXIDE in the air, not from the soil!",
   "es": {
    "name": "Brisa de la pradera",
    "word": "Dióxido de carbono",
    "def": "Un gas del aire. Las plantas lo usan como materia prima de la fotosíntesis, y los seres vivos lo liberan.",
    "note": "¡La mayor parte de la materia del cuerpo de una planta vino del DIÓXIDO DE CARBONO del aire, no del suelo!"
   }
  },
  {
   "id": "s3-sugar",
   "name": "Sweet nectar",
   "look": "drop",
   "color": "#ffd166",
   "word": "Sugar (glucose)",
   "def": "Food that a plant makes in photosynthesis. It stores energy.",
   "note": "The SUGAR made in photosynthesis is food. The plant uses it to grow, and some ends up in nectar for bees.",
   "es": {
    "name": "Néctar dulce",
    "word": "Azúcar (glucosa)",
    "def": "El alimento que fabrica la planta en la fotosíntesis. Guarda energía.",
    "note": "El AZÚCAR que se fabrica en la fotosíntesis es alimento. La planta lo usa para crecer, y una parte termina en el néctar para las abejas."
   }
  },
  {
   "id": "s3-oxygen",
   "name": "Bubbles from pondweed",
   "look": "drop",
   "color": "#9fe0ff",
   "word": "Oxygen",
   "def": "A gas that plants give off in photosynthesis. Most living things need it to release energy from food.",
   "note": "At the nature center, pondweed in a sunny tank gives off tiny bubbles. They are OXYGEN made by photosynthesis.",
   "es": {
    "name": "Burbujas de una planta acuática",
    "word": "Oxígeno",
    "def": "Un gas que liberan las plantas en la fotosíntesis. La mayoría de los seres vivos lo necesitan para liberar la energía de los alimentos.",
    "note": "En el centro de naturaleza, una planta acuática en un tanque soleado suelta burbujitas. Son OXÍGENO que produce la fotosíntesis."
   }
  },
  {
   "id": "s3-hopper",
   "name": "Grasshopper",
   "look": "critter",
   "color": "#7a9a3a",
   "word": "Consumer",
   "def": "A living thing that gets energy by eating other living things.",
   "note": "A grasshopper eating a leaf is a CONSUMER. The matter and energy stored by photosynthesis move into its body.",
   "es": {
    "name": "Saltamontes",
    "word": "Consumidor",
    "def": "Un ser vivo que obtiene energía comiendo otros seres vivos.",
    "note": "Un saltamontes que come una hoja es un CONSUMIDOR. La materia y la energía que guardó la fotosíntesis pasan a su cuerpo."
   }
  },
  {
   "id": "s3k-kelp",
   "name": "Giant kelp",
   "look": "tubeworm",
   "color": "#8a7a2a",
   "word": "Alga",
   "def": "A living thing that does photosynthesis like a plant, but is not a plant. Kelp is a giant alga.",
   "note": "Giant kelp is not a plant: it is a giant ALGA. It can grow up to about 60 cm (2 feet) in one day, using photosynthesis.",
   "es": {
    "name": "Kelp gigante",
    "word": "Alga",
    "def": "Un ser vivo que hace fotosíntesis como una planta, pero no es una planta. El kelp es un alga gigante.",
    "note": "El kelp gigante no es una planta: es un ALGA gigante. Puede crecer hasta unos 60 cm (2 pies) en un día, gracias a la fotosíntesis."
   }
  },
  {
   "id": "s3k-float",
   "name": "Kelp float",
   "look": "drop",
   "color": "#c0a040",
   "word": "Gas bladder",
   "def": "A float filled with gas that holds kelp blades up toward the sunlight.",
   "note": "Each blade of giant kelp has a GAS BLADDER at its base. It floats the blades up near the surface, where the light is strongest.",
   "es": {
    "name": "Flotador del kelp",
    "word": "Vejiga de gas",
    "def": "Un flotador lleno de gas que mantiene las hojas del kelp cerca de la luz del sol.",
    "note": "Cada hoja del kelp gigante tiene una VEJIGA DE GAS en su base. Hace flotar las hojas cerca de la superficie, donde la luz es más fuerte."
   }
  },
  {
   "id": "s3k-light",
   "name": "Sunbeams in the water",
   "look": "sun",
   "color": "#ffe8a0",
   "word": "Energy",
   "def": "What living things need to move, grow and stay alive. It can change form, but it is not used up into nothing.",
   "note": "Light ENERGY reaches only the top part of the ocean. That is why kelp forests grow in shallow, clear water near the coast.",
   "es": {
    "name": "Rayos de sol en el agua",
    "word": "Energía",
    "def": "Lo que necesitan los seres vivos para moverse, crecer y vivir. Puede cambiar de forma, pero no desaparece.",
    "note": "La ENERGÍA luminosa solo llega a la parte de arriba del océano. Por eso los bosques de kelp crecen en agua poco profunda y clara, cerca de la costa."
   }
  },
  {
   "id": "s3k-co2",
   "name": "Seawater",
   "look": "drop",
   "color": "#3f8fa8",
   "word": "Dissolved gas",
   "def": "A gas mixed into water, like carbon dioxide and oxygen in seawater.",
   "note": "Kelp has no stomata or roots for gases. It takes carbon dioxide that is DISSOLVED in the seawater right into its blades.",
   "es": {
    "name": "Agua de mar",
    "word": "Gas disuelto",
    "def": "Un gas mezclado en el agua, como el dióxido de carbono y el oxígeno del agua de mar.",
    "note": "El kelp no toma los gases por estomas ni raíces. Toma el dióxido de carbono DISUELTO en el agua de mar directamente por sus hojas."
   }
  },
  {
   "id": "s3k-plankton",
   "name": "Phytoplankton",
   "look": "cell",
   "color": "#7be06a",
   "word": "Phytoplankton",
   "def": "Tiny living things that drift in water and do photosynthesis.",
   "note": "Tiny PHYTOPLANKTON drift in the sunlit ocean. Together they make about half of the oxygen on Earth.",
   "es": {
    "name": "Fitoplancton",
    "word": "Fitoplancton",
    "def": "Seres vivos diminutos que flotan en el agua y hacen fotosíntesis.",
    "note": "El FITOPLANCTON diminuto flota en el océano iluminado. En conjunto, produce cerca de la mitad del oxígeno de la Tierra."
   }
  },
  {
   "id": "s3k-urchin",
   "name": "Purple sea urchin",
   "look": "critter",
   "color": "#7a3a8a",
   "word": "Herbivore",
   "def": "An animal that eats producers, like plants or algae.",
   "note": "Purple sea urchins are HERBIVORES: they graze on kelp. The matter in the kelp becomes part of the urchin’s body.",
   "es": {
    "name": "Erizo de mar morado",
    "word": "Herbívoro",
    "def": "Un animal que come productores, como plantas o algas.",
    "note": "Los erizos de mar morados son HERBÍVOROS: comen kelp. La materia del kelp se vuelve parte del cuerpo del erizo."
   }
  },
  {
   "id": "s3k-otter",
   "name": "Sea otter",
   "look": "critter",
   "color": "#8a6a4a",
   "word": "Food chain",
   "def": "A path that shows how matter and energy move from one living thing to the next when one eats another.",
   "note": "Sun → kelp → sea urchin → sea otter: a FOOD CHAIN. Sea otters eat urchins, which helps keep the kelp forest from being eaten away.",
   "es": {
    "name": "Nutria marina",
    "word": "Cadena alimentaria",
    "def": "Un camino que muestra cómo pasan la materia y la energía de un ser vivo a otro cuando uno se come al otro.",
    "note": "Sol → kelp → erizo de mar → nutria marina: una CADENA ALIMENTARIA. Las nutrias comen erizos, y eso ayuda a que el bosque de kelp no desaparezca."
   }
  },
  {
   "id": "s3k-fish",
   "name": "Rockfish",
   "look": "critter",
   "color": "#d86a3a",
   "word": "Cellular respiration",
   "def": "The process cells use to release energy from food, using oxygen. It gives off carbon dioxide and water.",
   "note": "A rockfish uses oxygen from the water to release energy from its food. That is CELLULAR RESPIRATION, and it gives off carbon dioxide that kelp can use again.",
   "es": {
    "name": "Pez roca",
    "word": "Respiración celular",
    "def": "El proceso que usan las células para liberar la energía de los alimentos, usando oxígeno. Libera dióxido de carbono y agua.",
    "note": "Un pez roca usa el oxígeno del agua para liberar la energía de su alimento. Eso es la RESPIRACIÓN CELULAR, y libera dióxido de carbono que el kelp puede volver a usar."
   }
  },
  {
   "id": "s3k-cycle",
   "name": "Kelp holdfast",
   "look": "rock",
   "color": "#6a5a3a",
   "word": "Cycling of matter",
   "def": "The way the same matter is used again and again, moving between living things and their surroundings.",
   "note": "Carbon moves from the water into kelp, into animals, and back into the water. This CYCLING OF MATTER goes on and on, while energy flows in from the Sun.",
   "es": {
    "name": "Rizoide del kelp",
    "word": "Ciclo de la materia",
    "def": "La manera en que la misma materia se usa una y otra vez, pasando entre los seres vivos y su entorno.",
    "note": "El carbono pasa del agua al kelp, a los animales y otra vez al agua. Este CICLO DE LA MATERIA no se detiene, mientras la energía entra desde el Sol."
   }
  },
  {
   "id": "s3g-lunch",
   "name": "Turkey sandwich",
   "look": "stack",
   "color": "#e8c08a",
   "word": "Food",
   "def": "Matter that an organism takes in to grow and to get energy.",
   "note": "This lunch is FOOD: bread (starch), turkey (protein) and a little oil (fat). The body will take all of it apart and rebuild it.",
   "es": {
    "name": "Sándwich de pavo",
    "word": "Alimento",
    "def": "Materia que un organismo toma para crecer y obtener energía.",
    "note": "Este almuerzo es ALIMENTO: pan (almidón), pavo (proteína) y un poco de aceite (grasa). El cuerpo lo va a desarmar todo y a reconstruirlo."
   }
  },
  {
   "id": "s3g-molecule",
   "name": "Starch from the bread",
   "look": "chain",
   "color": "#ffd166",
   "word": "Molecule",
   "def": "Two or more atoms joined together. Food is made of large molecules.",
   "note": "A starch MOLECULE is a long chain of sugar units. It is too big to get into your cells, so it must be broken apart first.",
   "es": {
    "name": "Almidón del pan",
    "word": "Molécula",
    "def": "Dos o más átomos unidos. Los alimentos están formados por moléculas grandes.",
    "note": "Una MOLÉCULA de almidón es una cadena larga de unidades de azúcar. Es demasiado grande para entrar en tus células, así que primero hay que romperla."
   }
  },
  {
   "id": "s3g-mouth",
   "name": "Teeth and saliva",
   "look": "drop",
   "color": "#cfefff",
   "word": "Digestion",
   "def": "Breaking food down into molecules small enough for the body to absorb.",
   "note": "DIGESTION starts in the mouth. Teeth tear the bread into small pieces, and saliva starts breaking its starch into sugar.",
   "es": {
    "name": "Dientes y saliva",
    "word": "Digestión",
    "def": "Descomponer los alimentos en moléculas tan pequeñas que el cuerpo pueda absorberlas.",
    "note": "La DIGESTIÓN empieza en la boca. Los dientes cortan el pan en trozos pequeños y la saliva empieza a romper su almidón en azúcar."
   }
  },
  {
   "id": "s3g-reaction",
   "name": "Stomach juices",
   "look": "drop",
   "color": "#ffb070",
   "word": "Chemical reaction",
   "def": "A change in which molecules are rearranged to form new molecules.",
   "note": "In the stomach, juices break the turkey’s proteins into smaller pieces. That is a CHEMICAL REACTION: the molecules are rearranged into new, smaller ones.",
   "es": {
    "name": "Jugos del estómago",
    "word": "Reacción química",
    "def": "Un cambio en el que las moléculas se reorganizan para formar moléculas nuevas.",
    "note": "En el estómago, los jugos rompen las proteínas del pavo en partes más pequeñas. Es una REACCIÓN QUÍMICA: las moléculas se reorganizan en moléculas nuevas y más pequeñas."
   }
  },
  {
   "id": "s3g-enzyme",
   "name": "Digestive helper",
   "look": "helix",
   "color": "#c59cff",
   "word": "Enzyme",
   "def": "A helper molecule that speeds up a chemical reaction, like breaking down food.",
   "note": "Each ENZYME fits only one kind of food molecule, like a key in a lock. One breaks starch, another breaks protein, another breaks fat.",
   "es": {
    "name": "Ayudante de la digestión",
    "word": "Enzima",
    "def": "Una molécula ayudante que acelera una reacción química, como la de descomponer los alimentos.",
    "note": "Cada ENZIMA encaja solo con un tipo de molécula de alimento, como una llave en una cerradura. Una rompe el almidón, otra la proteína y otra la grasa."
   }
  },
  {
   "id": "s3g-villi",
   "name": "Small intestine wall",
   "look": "grass",
   "color": "#ff9f8a",
   "word": "Absorb",
   "def": "To take in. Small food molecules pass from the small intestine into the blood.",
   "note": "The small intestine is about 6 meters (20 feet) long. Its tiny finger-like villi ABSORB small molecules into the blood.",
   "es": {
    "name": "Pared del intestino delgado",
    "word": "Absorber",
    "def": "Tomar hacia adentro. Las moléculas pequeñas de los alimentos pasan del intestino delgado a la sangre.",
    "note": "El intestino delgado mide unos 6 metros (20 pies). Sus vellosidades diminutas, como dedos, ABSORBEN las moléculas pequeñas hacia la sangre."
   }
  },
  {
   "id": "s3g-amino",
   "name": "Amino acids",
   "look": "chain",
   "color": "#ff8fb1",
   "word": "Amino acids",
   "def": "The small building blocks that proteins are made of.",
   "note": "Digestion breaks the turkey’s protein into AMINO ACIDS. Your cells join them back together in a new order to build your own proteins.",
   "es": {
    "name": "Aminoácidos",
    "word": "Aminoácidos",
    "def": "Las piezas pequeñas de las que están hechas las proteínas.",
    "note": "La digestión rompe la proteína del pavo en AMINOÁCIDOS. Tus células los vuelven a unir en otro orden para construir tus propias proteínas."
   }
  },
  {
   "id": "s3g-blood",
   "name": "Blood vessel",
   "look": "rod",
   "color": "#e0384a",
   "word": "Nutrients",
   "def": "The useful small molecules from food that the body uses to grow, repair itself and get energy.",
   "note": "The blood carries NUTRIENTS like sugar and amino acids from the small intestine to every cell in the body.",
   "es": {
    "name": "Vaso sanguíneo",
    "word": "Nutrientes",
    "def": "Las moléculas pequeñas y útiles de los alimentos que el cuerpo usa para crecer, repararse y obtener energía.",
    "note": "La sangre lleva NUTRIENTES como el azúcar y los aminoácidos desde el intestino delgado hasta cada célula del cuerpo."
   }
  },
  {
   "id": "s3g-growth",
   "name": "Muscle cell",
   "look": "cell",
   "color": "#ff8a8a",
   "word": "Growth",
   "def": "Getting bigger by building new matter, such as new cells and new proteins.",
   "note": "A muscle cell links amino acids into new proteins. New molecules like these support GROWTH and repair.",
   "es": {
    "name": "Célula muscular",
    "word": "Crecimiento",
    "def": "Hacerse más grande construyendo materia nueva, como células y proteínas nuevas.",
    "note": "Una célula muscular une aminoácidos para formar proteínas nuevas. Moléculas nuevas como estas permiten el CRECIMIENTO y la reparación."
   }
  },
  {
   "id": "s3g-mito",
   "name": "Mitochondria",
   "look": "cell",
   "color": "#ffb070",
   "word": "Release energy",
   "def": "Free the energy stored in food so cells can use it.",
   "note": "In the mitochondria, sugar reacts with oxygen to RELEASE ENERGY. The sugar is rearranged into carbon dioxide and water.",
   "es": {
    "name": "Mitocondrias",
    "word": "Liberar energía",
    "def": "Soltar la energía guardada en los alimentos para que las células puedan usarla.",
    "note": "En las mitocondrias, el azúcar reacciona con el oxígeno para LIBERAR ENERGÍA. El azúcar se reorganiza en dióxido de carbono y agua."
   }
  },
  {
   "id": "s3g-fiber",
   "name": "Large intestine",
   "look": "rod",
   "color": "#c08a5a",
   "word": "Fiber",
   "def": "The part of plant foods that the body cannot break down. It helps move food along.",
   "note": "Your body cannot digest FIBER from the bread. Trillions of helpful bacteria in the large intestine break some of it down.",
   "es": {
    "name": "Intestino grueso",
    "word": "Fibra",
    "def": "La parte de los alimentos vegetales que el cuerpo no puede descomponer. Ayuda a que los alimentos avancen.",
    "note": "Tu cuerpo no puede digerir la FIBRA del pan. Billones de bacterias útiles del intestino grueso descomponen una parte."
   }
  },
  {
   "id": "s3e-seeds",
   "name": "Seed packets",
   "look": "stack",
   "color": "#ffd166",
   "word": "Genetic factor",
   "def": "Something passed from parents to offspring in genes that affects how an organism grows.",
   "note": "Two packets of pea seeds: one variety grows tall, one stays short. The difference is a GENETIC FACTOR, passed down from the parent plants.",
   "es": {
    "name": "Sobres de semillas",
    "word": "Factor genético",
    "def": "Algo que pasa de los padres a las crías en los genes y que influye en cómo crece un organismo.",
    "note": "Dos sobres de semillas de chícharo: una variedad crece alta y la otra se queda baja. La diferencia es un FACTOR GENÉTICO que viene de las plantas madre."
   }
  },
  {
   "id": "s3e-genes",
   "name": "Pea pod",
   "look": "eggs",
   "color": "#7be06a",
   "word": "Genes",
   "def": "Instructions inside cells, passed from parents to offspring, that help decide an organism’s traits.",
   "note": "Each pea seed carries GENES from its parent plants. The genes help decide things like height and flower color.",
   "es": {
    "name": "Vaina de chícharos",
    "word": "Genes",
    "def": "Instrucciones dentro de las células, que pasan de los padres a las crías y ayudan a decidir los rasgos de un organismo.",
    "note": "Cada semilla de chícharo lleva GENES de sus plantas madre. Los genes ayudan a decidir cosas como la altura y el color de las flores."
   }
  },
  {
   "id": "s3e-sun",
   "name": "Sunny bed",
   "look": "sun",
   "color": "#ffd166",
   "word": "Environmental factor",
   "def": "Something in an organism’s surroundings, like light, water, food or temperature, that affects how it grows.",
   "note": "The amount of sunlight is an ENVIRONMENTAL FACTOR. Beans in the sunny bed grow faster than the same beans in the shade.",
   "es": {
    "name": "Parcela soleada",
    "word": "Factor ambiental",
    "def": "Algo del entorno de un organismo, como la luz, el agua, el alimento o la temperatura, que influye en cómo crece.",
    "note": "La cantidad de luz del sol es un FACTOR AMBIENTAL. Los frijoles de la parcela soleada crecen más rápido que los mismos frijoles en la sombra."
   }
  },
  {
   "id": "s3e-shade",
   "name": "Shady corner",
   "look": "sprout",
   "color": "#4f8a4a",
   "word": "Shade",
   "def": "A place where less sunlight reaches.",
   "note": "In deep SHADE, bean plants may stretch tall and thin, but they are pale and weak. With less light, they make less food by photosynthesis, so they build less new matter.",
   "es": {
    "name": "Rincón sombreado",
    "word": "Sombra",
    "def": "Un lugar al que llega menos luz del sol.",
    "note": "En la SOMBRA profunda, las plantas de frijol pueden estirarse altas y delgadas, pero son pálidas y débiles. Con menos luz, fabrican menos alimento por fotosíntesis, así que forman menos materia nueva."
   }
  },
  {
   "id": "s3e-water",
   "name": "Rain barrel",
   "look": "drop",
   "color": "#7fd4ff",
   "word": "Soil moisture",
   "def": "How much water is in the soil.",
   "note": "Too little SOIL MOISTURE and plants wilt. Too much and the roots cannot get air. Plants grow best in between.",
   "es": {
    "name": "Barril de lluvia",
    "word": "Humedad del suelo",
    "def": "Cuánta agua hay en el suelo.",
    "note": "Con muy poca HUMEDAD DEL SUELO, las plantas se marchitan. Con demasiada, las raíces no reciben aire. Las plantas crecen mejor en un punto intermedio."
   }
  },
  {
   "id": "s3e-compost",
   "name": "Compost bin",
   "look": "mushroom",
   "color": "#8a6a3a",
   "word": "Soil nutrients",
   "def": "Minerals in the soil, like nitrogen, that plants need to grow well.",
   "note": "Compost adds SOIL NUTRIENTS like nitrogen. Plants need small amounts of these minerals to build healthy leaves.",
   "es": {
    "name": "Compostera",
    "word": "Nutrientes del suelo",
    "def": "Minerales del suelo, como el nitrógeno, que las plantas necesitan para crecer bien.",
    "note": "La composta agrega NUTRIENTES DEL SUELO como el nitrógeno. Las plantas necesitan pequeñas cantidades de estos minerales para formar hojas sanas."
   }
  },
  {
   "id": "s3e-hydrangea",
   "name": "Hydrangea bush",
   "look": "lily",
   "color": "#7fa8ff",
   "word": "Soil acidity",
   "def": "How acidic the soil is. It can change how some plants grow.",
   "note": "The same hydrangea can bloom blue in more acidic soil and pink in less acidic soil. Its environment changes its flowers.",
   "es": {
    "name": "Arbusto de hortensia",
    "word": "Acidez del suelo",
    "def": "Qué tan ácido es el suelo. Puede cambiar cómo crecen algunas plantas.",
    "note": "La misma hortensia puede dar flores azules en un suelo más ácido y rosadas en un suelo menos ácido. Su entorno cambia sus flores."
   }
  },
  {
   "id": "s3e-temp",
   "name": "Cold frame",
   "look": "ice",
   "color": "#bfe9ff",
   "word": "Temperature",
   "def": "How hot or cold it is. Most plants grow slowly when it is cold.",
   "note": "A cold frame is a little glass box that keeps seedlings warm. Warmer TEMPERATURE lets them grow in early spring.",
   "es": {
    "name": "Cajonera fría",
    "word": "Temperatura",
    "def": "Qué tanto calor o frío hace. La mayoría de las plantas crecen despacio cuando hace frío.",
    "note": "Una cajonera fría es una cajita de vidrio que mantiene calientes las plántulas. Una TEMPERATURA más cálida les permite crecer a principios de la primavera."
   }
  },
  {
   "id": "s3e-tomato",
   "name": "Tomato plants",
   "look": "sprout",
   "color": "#e04a3a",
   "word": "Environment",
   "def": "Everything around an organism: light, water, air, soil, temperature and other living things.",
   "note": "These tomatoes all came from the same seed packet. The ones with the most sun and water grew the most. Both genes and the ENVIRONMENT affect growth.",
   "es": {
    "name": "Plantas de tomate",
    "word": "Ambiente",
    "def": "Todo lo que rodea a un organismo: la luz, el agua, el aire, el suelo, la temperatura y otros seres vivos.",
    "note": "Todos estos tomates salieron del mismo sobre de semillas. Los que tuvieron más sol y agua crecieron más. Tanto los genes como el AMBIENTE influyen en el crecimiento."
   }
  }
 ],
 "vocab": [
  {
   "term": "Producer",
   "def": "A living thing that makes its own food, using energy from sunlight.",
   "es": {
    "term": "Productor",
    "def": "Un ser vivo que fabrica su propio alimento con la energía de la luz del sol."
   }
  },
  {
   "term": "Light energy",
   "def": "Energy that travels from the Sun as light.",
   "es": {
    "term": "Energía luminosa",
    "def": "Energía que viaja desde el Sol en forma de luz."
   }
  },
  {
   "term": "Photosynthesis",
   "def": "The process plants use to make sugar from carbon dioxide and water, using light energy. It gives off oxygen.",
   "es": {
    "term": "Fotosíntesis",
    "def": "El proceso que usan las plantas para fabricar azúcar con dióxido de carbono y agua, usando energía luminosa. Libera oxígeno."
   }
  },
  {
   "term": "Chloroplast",
   "def": "The green part of a plant cell where photosynthesis happens.",
   "es": {
    "term": "Cloroplasto",
    "def": "La parte verde de la célula vegetal donde ocurre la fotosíntesis."
   }
  },
  {
   "term": "Stomata",
   "def": "Tiny openings, mostly on the underside of a leaf, that let gases in and out.",
   "es": {
    "term": "Estomas",
    "def": "Aberturas diminutas, sobre todo en el envés de la hoja, que dejan entrar y salir los gases."
   }
  },
  {
   "term": "Water",
   "def": "One of the two raw materials of photosynthesis. Roots take it in from the soil.",
   "es": {
    "term": "Agua",
    "def": "Una de las dos materias primas de la fotosíntesis. Las raíces la toman del suelo."
   }
  },
  {
   "term": "Carbon dioxide",
   "def": "A gas in the air. Plants use it as a raw material for photosynthesis, and living things give it off.",
   "es": {
    "term": "Dióxido de carbono",
    "def": "Un gas del aire. Las plantas lo usan como materia prima de la fotosíntesis, y los seres vivos lo liberan."
   }
  },
  {
   "term": "Sugar (glucose)",
   "def": "Food that a plant makes in photosynthesis. It stores energy.",
   "es": {
    "term": "Azúcar (glucosa)",
    "def": "El alimento que fabrica la planta en la fotosíntesis. Guarda energía."
   }
  },
  {
   "term": "Oxygen",
   "def": "A gas that plants give off in photosynthesis. Most living things need it to release energy from food.",
   "es": {
    "term": "Oxígeno",
    "def": "Un gas que liberan las plantas en la fotosíntesis. La mayoría de los seres vivos lo necesitan para liberar la energía de los alimentos."
   }
  },
  {
   "term": "Consumer",
   "def": "A living thing that gets energy by eating other living things.",
   "es": {
    "term": "Consumidor",
    "def": "Un ser vivo que obtiene energía comiendo otros seres vivos."
   }
  },
  {
   "term": "Alga",
   "def": "A living thing that does photosynthesis like a plant, but is not a plant. Kelp is a giant alga.",
   "es": {
    "term": "Alga",
    "def": "Un ser vivo que hace fotosíntesis como una planta, pero no es una planta. El kelp es un alga gigante."
   }
  },
  {
   "term": "Gas bladder",
   "def": "A float filled with gas that holds kelp blades up toward the sunlight.",
   "es": {
    "term": "Vejiga de gas",
    "def": "Un flotador lleno de gas que mantiene las hojas del kelp cerca de la luz del sol."
   }
  },
  {
   "term": "Energy",
   "def": "What living things need to move, grow and stay alive. It can change form, but it is not used up into nothing.",
   "es": {
    "term": "Energía",
    "def": "Lo que necesitan los seres vivos para moverse, crecer y vivir. Puede cambiar de forma, pero no desaparece."
   }
  },
  {
   "term": "Dissolved gas",
   "def": "A gas mixed into water, like carbon dioxide and oxygen in seawater.",
   "es": {
    "term": "Gas disuelto",
    "def": "Un gas mezclado en el agua, como el dióxido de carbono y el oxígeno del agua de mar."
   }
  },
  {
   "term": "Phytoplankton",
   "def": "Tiny living things that drift in water and do photosynthesis.",
   "es": {
    "term": "Fitoplancton",
    "def": "Seres vivos diminutos que flotan en el agua y hacen fotosíntesis."
   }
  },
  {
   "term": "Herbivore",
   "def": "An animal that eats producers, like plants or algae.",
   "es": {
    "term": "Herbívoro",
    "def": "Un animal que come productores, como plantas o algas."
   }
  },
  {
   "term": "Food chain",
   "def": "A path that shows how matter and energy move from one living thing to the next when one eats another.",
   "es": {
    "term": "Cadena alimentaria",
    "def": "Un camino que muestra cómo pasan la materia y la energía de un ser vivo a otro cuando uno se come al otro."
   }
  },
  {
   "term": "Cellular respiration",
   "def": "The process cells use to release energy from food, using oxygen. It gives off carbon dioxide and water.",
   "es": {
    "term": "Respiración celular",
    "def": "El proceso que usan las células para liberar la energía de los alimentos, usando oxígeno. Libera dióxido de carbono y agua."
   }
  },
  {
   "term": "Cycling of matter",
   "def": "The way the same matter is used again and again, moving between living things and their surroundings.",
   "es": {
    "term": "Ciclo de la materia",
    "def": "La manera en que la misma materia se usa una y otra vez, pasando entre los seres vivos y su entorno."
   }
  },
  {
   "term": "Food",
   "def": "Matter that an organism takes in to grow and to get energy.",
   "es": {
    "term": "Alimento",
    "def": "Materia que un organismo toma para crecer y obtener energía."
   }
  },
  {
   "term": "Molecule",
   "def": "Two or more atoms joined together. Food is made of large molecules.",
   "es": {
    "term": "Molécula",
    "def": "Dos o más átomos unidos. Los alimentos están formados por moléculas grandes."
   }
  },
  {
   "term": "Digestion",
   "def": "Breaking food down into molecules small enough for the body to absorb.",
   "es": {
    "term": "Digestión",
    "def": "Descomponer los alimentos en moléculas tan pequeñas que el cuerpo pueda absorberlas."
   }
  },
  {
   "term": "Chemical reaction",
   "def": "A change in which molecules are rearranged to form new molecules.",
   "es": {
    "term": "Reacción química",
    "def": "Un cambio en el que las moléculas se reorganizan para formar moléculas nuevas."
   }
  },
  {
   "term": "Enzyme",
   "def": "A helper molecule that speeds up a chemical reaction, like breaking down food.",
   "es": {
    "term": "Enzima",
    "def": "Una molécula ayudante que acelera una reacción química, como la de descomponer los alimentos."
   }
  },
  {
   "term": "Absorb",
   "def": "To take in. Small food molecules pass from the small intestine into the blood.",
   "es": {
    "term": "Absorber",
    "def": "Tomar hacia adentro. Las moléculas pequeñas de los alimentos pasan del intestino delgado a la sangre."
   }
  },
  {
   "term": "Amino acids",
   "def": "The small building blocks that proteins are made of.",
   "es": {
    "term": "Aminoácidos",
    "def": "Las piezas pequeñas de las que están hechas las proteínas."
   }
  },
  {
   "term": "Nutrients",
   "def": "The useful small molecules from food that the body uses to grow, repair itself and get energy.",
   "es": {
    "term": "Nutrientes",
    "def": "Las moléculas pequeñas y útiles de los alimentos que el cuerpo usa para crecer, repararse y obtener energía."
   }
  },
  {
   "term": "Growth",
   "def": "Getting bigger by building new matter, such as new cells and new proteins.",
   "es": {
    "term": "Crecimiento",
    "def": "Hacerse más grande construyendo materia nueva, como células y proteínas nuevas."
   }
  },
  {
   "term": "Release energy",
   "def": "Free the energy stored in food so cells can use it.",
   "es": {
    "term": "Liberar energía",
    "def": "Soltar la energía guardada en los alimentos para que las células puedan usarla."
   }
  },
  {
   "term": "Fiber",
   "def": "The part of plant foods that the body cannot break down. It helps move food along.",
   "es": {
    "term": "Fibra",
    "def": "La parte de los alimentos vegetales que el cuerpo no puede descomponer. Ayuda a que los alimentos avancen."
   }
  },
  {
   "term": "Genetic factor",
   "def": "Something passed from parents to offspring in genes that affects how an organism grows.",
   "es": {
    "term": "Factor genético",
    "def": "Algo que pasa de los padres a las crías en los genes y que influye en cómo crece un organismo."
   }
  },
  {
   "term": "Genes",
   "def": "Instructions inside cells, passed from parents to offspring, that help decide an organism’s traits.",
   "es": {
    "term": "Genes",
    "def": "Instrucciones dentro de las células, que pasan de los padres a las crías y ayudan a decidir los rasgos de un organismo."
   }
  },
  {
   "term": "Environmental factor",
   "def": "Something in an organism’s surroundings, like light, water, food or temperature, that affects how it grows.",
   "es": {
    "term": "Factor ambiental",
    "def": "Algo del entorno de un organismo, como la luz, el agua, el alimento o la temperatura, que influye en cómo crece."
   }
  },
  {
   "term": "Shade",
   "def": "A place where less sunlight reaches.",
   "es": {
    "term": "Sombra",
    "def": "Un lugar al que llega menos luz del sol."
   }
  },
  {
   "term": "Soil moisture",
   "def": "How much water is in the soil.",
   "es": {
    "term": "Humedad del suelo",
    "def": "Cuánta agua hay en el suelo."
   }
  },
  {
   "term": "Soil nutrients",
   "def": "Minerals in the soil, like nitrogen, that plants need to grow well.",
   "es": {
    "term": "Nutrientes del suelo",
    "def": "Minerales del suelo, como el nitrógeno, que las plantas necesitan para crecer bien."
   }
  },
  {
   "term": "Soil acidity",
   "def": "How acidic the soil is. It can change how some plants grow.",
   "es": {
    "term": "Acidez del suelo",
    "def": "Qué tan ácido es el suelo. Puede cambiar cómo crecen algunas plantas."
   }
  },
  {
   "term": "Temperature",
   "def": "How hot or cold it is. Most plants grow slowly when it is cold.",
   "es": {
    "term": "Temperatura",
    "def": "Qué tanto calor o frío hace. La mayoría de las plantas crecen despacio cuando hace frío."
   }
  },
  {
   "term": "Environment",
   "def": "Everything around an organism: light, water, air, soil, temperature and other living things.",
   "es": {
    "term": "Ambiente",
    "def": "Todo lo que rodea a un organismo: la luz, el agua, el aire, el suelo, la temperatura y otros seres vivos."
   }
  }
 ]
});
