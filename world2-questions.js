/* WORLD 2 QUESTION FILE: The Body as a System (middle school edition)
   Made by tools/content/build_world.py from the content files in tools/content (edit those, then run it again).
   "code" is the PA STEELS grades 6-8 standard. "es" holds the Spanish text for the same item.
   In "questions", "answer" is the position of the correct option, counting from 0. The game shuffles the options. */
FieldGuide.registerQuestions(2, {
 "tokens": [
  {
   "id": "h2-circ",
   "code": "3.1.6-8.C",
   "prompt": "Collect only the parts of the CIRCULATORY SYSTEM",
   "good": [
    "Heart",
    "Arteries",
    "Veins",
    "Capillaries",
    "Blood"
   ],
   "bad": [
    {
     "text": "Lungs",
     "explain": "The lungs belong to the respiratory system. They work closely with the circulatory system, but they are a different system.",
     "es": {
      "text": "Pulmones",
      "explain": "Los pulmones son parte del sistema respiratorio. Trabajan muy de cerca con el sistema circulatorio, pero son otro sistema."
     }
    },
    {
     "text": "Stomach",
     "explain": "The stomach is part of the digestive system.",
     "es": {
      "text": "Estómago",
      "explain": "El estómago es parte del sistema digestivo."
     }
    },
    {
     "text": "Thigh bone",
     "explain": "Bones are part of the skeletal system.",
     "es": {
      "text": "Hueso del muslo",
      "explain": "Los huesos son parte del sistema esquelético."
     }
    },
    {
     "text": "Brain",
     "explain": "The brain is part of the nervous system.",
     "es": {
      "text": "Cerebro",
      "explain": "El cerebro es parte del sistema nervioso."
     }
    }
   ],
   "es": {
    "prompt": "Recoge solo las partes del SISTEMA CIRCULATORIO",
    "good": [
     "Corazón",
     "Arterias",
     "Venas",
     "Capilares",
     "Sangre"
    ]
   }
  },
  {
   "id": "h2-stim",
   "code": "3.1.6-8.H",
   "prompt": "Collect only STIMULI: things your senses can detect",
   "good": [
    "An owl hooting",
    "Cold wind on your face",
    "Starlight",
    "Smell of smoke",
    "A thorn prick"
   ],
   "bad": [
    {
     "text": "Your brain",
     "explain": "The brain receives messages about stimuli. It is not a stimulus itself.",
     "es": {
      "text": "Tu cerebro",
      "explain": "El cerebro recibe mensajes sobre los estímulos. No es un estímulo."
     }
    },
    {
     "text": "A nerve",
     "explain": "A nerve carries messages. It is part of the nervous system, not a stimulus.",
     "es": {
      "text": "Un nervio",
      "explain": "Un nervio lleva mensajes. Es parte del sistema nervioso, no un estímulo."
     }
    },
    {
     "text": "A memory",
     "explain": "A memory is information your brain stores. It is not something your senses detect from outside.",
     "es": {
      "text": "Un recuerdo",
      "explain": "Un recuerdo es información que tu cerebro guarda. No es algo que tus sentidos detecten afuera."
     }
    }
   ],
   "es": {
    "prompt": "Recoge solo ESTÍMULOS: cosas que tus sentidos pueden detectar",
    "good": [
     "Un búho que ulula",
     "Viento frío en la cara",
     "Luz de las estrellas",
     "Olor a humo",
     "Un pinchazo de espina"
    ]
   }
  }
 ],
 "sorts": [
  {
   "id": "sort2-system",
   "code": "3.1.6-8.C",
   "prompt": "Which body system does this belong to?",
   "options": [
    "Circulatory",
    "Respiratory",
    "Digestive",
    "Skeletal"
   ],
   "hint": "Circulatory moves blood. Respiratory moves air. Digestive breaks down food. Skeletal is the bones.",
   "items": [
    {
     "text": "Heart",
     "answer": 0,
     "explain": "The heart pumps blood: circulatory system.",
     "es": {
      "text": "Corazón",
      "explain": "El corazón bombea sangre: sistema circulatorio."
     }
    },
    {
     "text": "Lungs",
     "answer": 1,
     "explain": "The lungs bring in oxygen: respiratory system.",
     "es": {
      "text": "Pulmones",
      "explain": "Los pulmones traen oxígeno: sistema respiratorio."
     }
    },
    {
     "text": "Small intestine",
     "answer": 2,
     "explain": "The small intestine takes nutrients from food: digestive system.",
     "es": {
      "text": "Intestino delgado",
      "explain": "El intestino delgado toma los nutrientes de los alimentos: sistema digestivo."
     }
    },
    {
     "text": "Skull",
     "answer": 3,
     "explain": "The skull is a bone that protects the brain: skeletal system.",
     "es": {
      "text": "Cráneo",
      "explain": "El cráneo es un hueso que protege el cerebro: sistema esquelético."
     }
    },
    {
     "text": "Capillaries",
     "answer": 0,
     "explain": "Capillaries are tiny blood vessels: circulatory system.",
     "es": {
      "text": "Capilares",
      "explain": "Los capilares son vasos sanguíneos diminutos: sistema circulatorio."
     }
    },
    {
     "text": "Windpipe (trachea)",
     "answer": 1,
     "explain": "The windpipe carries air to the lungs: respiratory system.",
     "es": {
      "text": "Tráquea",
      "explain": "La tráquea lleva el aire a los pulmones: sistema respiratorio."
     }
    },
    {
     "text": "Stomach",
     "answer": 2,
     "explain": "The stomach breaks down food: digestive system.",
     "es": {
      "text": "Estómago",
      "explain": "El estómago descompone los alimentos: sistema digestivo."
     }
    }
   ],
   "es": {
    "prompt": "¿A qué sistema del cuerpo pertenece?",
    "options": [
     "Circulatorio",
     "Respiratorio",
     "Digestivo",
     "Esquelético"
    ],
    "hint": "El circulatorio mueve la sangre. El respiratorio mueve el aire. El digestivo descompone los alimentos. El esquelético son los huesos."
   }
  },
  {
   "id": "sort2-mem",
   "code": "3.1.6-8.H",
   "prompt": "Immediate behavior, or stored as a memory?",
   "options": [
    "Immediate behavior",
    "Stored as a memory"
   ],
   "hint": "Immediate behavior happens right away. A memory is saved and used later.",
   "items": [
    {
     "text": "Blinking when dust flies at your eye",
     "answer": 0,
     "explain": "You blink right away to protect your eye.",
     "es": {
      "text": "Parpadear cuando vuela polvo hacia tu ojo",
      "explain": "Parpadeas enseguida para proteger tu ojo."
     }
    },
    {
     "text": "Remembering the smell of a campfire",
     "answer": 1,
     "explain": "The brain stored the smell and can bring it back later.",
     "es": {
      "text": "Recordar el olor de una fogata",
      "explain": "El cerebro guardó el olor y puede traerlo de vuelta después."
     }
    },
    {
     "text": "Jumping when a twig snaps behind you",
     "answer": 0,
     "explain": "You react right away to the sudden sound.",
     "es": {
      "text": "Saltar cuando una rama cruje detrás de ti",
      "explain": "Reaccionas enseguida al sonido repentino."
     }
    },
    {
     "text": "Knowing which berries tasted bitter last time",
     "answer": 1,
     "explain": "You learned it before, and your brain stored it.",
     "es": {
      "text": "Saber qué bayas sabían amargas la última vez",
      "explain": "Lo aprendiste antes y tu cerebro lo guardó."
     }
    },
    {
     "text": "Pulling your hand away from a hot pan",
     "answer": 0,
     "explain": "A fast reflex protects you right away.",
     "es": {
      "text": "Quitar la mano de una sartén caliente",
      "explain": "Un reflejo rápido te protege enseguida."
     }
    },
    {
     "text": "Recognizing a friend’s voice on the phone",
     "answer": 1,
     "explain": "You compare the sound to a memory of your friend’s voice.",
     "es": {
      "text": "Reconocer la voz de un amigo por teléfono",
      "explain": "Comparas el sonido con el recuerdo de la voz de tu amigo."
     }
    }
   ],
   "es": {
    "prompt": "¿Conducta inmediata o se guarda como recuerdo?",
    "options": [
     "Conducta inmediata",
     "Se guarda como recuerdo"
    ],
    "hint": "La conducta inmediata ocurre enseguida. Un recuerdo se guarda y se usa después."
   }
  }
 ],
 "questions": [
  {
   "id": "ms2q01",
   "code": "3.1.6-8.C",
   "prompt": "Which list goes from SMALLEST to LARGEST?",
   "options": [
    "cell, tissue, organ, organ system",
    "organ, cell, tissue, organ system",
    "tissue, cell, organ system, organ",
    "organ system, organ, tissue, cell"
   ],
   "answer": 0,
   "hint": "Start with the building block of all living things.",
   "explain": "Cells form tissues, tissues form organs, and organs form organ systems.",
   "es": {
    "prompt": "¿Qué lista va del MÁS PEQUEÑO al MÁS GRANDE?",
    "options": [
     "célula, tejido, órgano, sistema de órganos",
     "órgano, célula, tejido, sistema de órganos",
     "tejido, célula, sistema de órganos, órgano",
     "sistema de órganos, órgano, tejido, célula"
    ],
    "hint": "Empieza con la pieza básica de todos los seres vivos.",
    "explain": "Las células forman tejidos, los tejidos forman órganos y los órganos forman sistemas de órganos."
   }
  },
  {
   "id": "ms2q02",
   "code": "3.1.6-8.C",
   "prompt": "A group of similar cells that work together to do one job is called a...",
   "options": [
    "tissue",
    "organ",
    "organ system",
    "organism"
   ],
   "answer": 0,
   "hint": "It is the level just above cells.",
   "explain": "A tissue is a group of similar cells doing the same job, like muscle tissue.",
   "es": {
    "prompt": "Un grupo de células parecidas que trabajan juntas para hacer un trabajo se llama...",
    "options": [
     "tejido",
     "órgano",
     "sistema de órganos",
     "organismo"
    ],
    "hint": "Es el nivel justo encima de las células.",
    "explain": "Un tejido es un grupo de células parecidas que hacen el mismo trabajo, como el tejido muscular."
   }
  },
  {
   "id": "ms2q03",
   "code": "3.1.6-8.C",
   "prompt": "While climbing a steep trail, a hiker’s heart rate and breathing rate both go up. What is the BEST explanation?",
   "options": [
    "The circulatory and respiratory systems work together to bring more oxygen to the muscles.",
    "The digestive system is breaking down food faster.",
    "The skeletal system needs more blood to grow.",
    "The heart and lungs are working against each other."
   ],
   "answer": 0,
   "hint": "Which gas do working muscles need more of?",
   "explain": "Working muscles need more oxygen. The lungs bring it in faster and the heart pumps it faster: two systems interacting.",
   "es": {
    "prompt": "Al subir un sendero empinado, el ritmo cardiaco y la respiración de una excursionista aumentan. ¿Cuál es la MEJOR explicación?",
    "options": [
     "Los sistemas circulatorio y respiratorio trabajan juntos para llevar más oxígeno a los músculos.",
     "El sistema digestivo está descomponiendo los alimentos más rápido.",
     "El sistema esquelético necesita más sangre para crecer.",
     "El corazón y los pulmones están trabajando uno contra el otro."
    ],
    "hint": "¿Qué gas necesitan más los músculos en acción?",
    "explain": "Los músculos en acción necesitan más oxígeno. Los pulmones lo traen más rápido y el corazón lo bombea más rápido: dos sistemas que interactúan."
   }
  },
  {
   "id": "ms2q04",
   "code": "3.1.6-8.C",
   "prompt": "Which organ is part of the circulatory system?",
   "options": [
    "Heart",
    "Lungs",
    "Stomach",
    "Brain"
   ],
   "answer": 0,
   "hint": "The circulatory system moves blood.",
   "explain": "The heart pumps blood through the blood vessels. It is the center of the circulatory system.",
   "es": {
    "prompt": "¿Qué órgano es parte del sistema circulatorio?",
    "options": [
     "Corazón",
     "Pulmones",
     "Estómago",
     "Cerebro"
    ],
    "hint": "El sistema circulatorio mueve la sangre.",
    "explain": "El corazón bombea la sangre por los vasos sanguíneos. Es el centro del sistema circulatorio."
   }
  },
  {
   "id": "ms2q05",
   "code": "3.1.6-8.C",
   "prompt": "The heart is made of muscle tissue, nerve tissue and other tissues. This makes the heart...",
   "options": [
    "an organ",
    "a cell",
    "a tissue",
    "an organism"
   ],
   "answer": 0,
   "hint": "What do different tissues working together form?",
   "explain": "An organ is made of different tissues working together.",
   "es": {
    "prompt": "El corazón está formado por tejido muscular, tejido nervioso y otros tejidos. Eso hace que el corazón sea...",
    "options": [
     "un órgano",
     "una célula",
     "un tejido",
     "un organismo"
    ],
    "hint": "¿Qué forman distintos tejidos que trabajan juntos?",
    "explain": "Un órgano está formado por distintos tejidos que trabajan juntos."
   }
  },
  {
   "id": "ms2q06",
   "code": "3.1.6-8.C",
   "prompt": "Food is broken down in the digestive system. How do the nutrients get to the leg muscles?",
   "options": [
    "The circulatory system carries them in the blood.",
    "The skeletal system carries them in the bones.",
    "The respiratory system breathes them in.",
    "They stay in the stomach."
   ],
   "answer": 0,
   "hint": "Which system delivers materials all around the body?",
   "explain": "Nutrients move from the intestines into the blood, and the circulatory system carries them to every cell.",
   "es": {
    "prompt": "Los alimentos se descomponen en el sistema digestivo. ¿Cómo llegan los nutrientes a los músculos de las piernas?",
    "options": [
     "El sistema circulatorio los lleva en la sangre.",
     "El sistema esquelético los lleva en los huesos.",
     "El sistema respiratorio los respira.",
     "Se quedan en el estómago."
    ],
    "hint": "¿Qué sistema reparte sustancias por todo el cuerpo?",
    "explain": "Los nutrientes pasan de los intestinos a la sangre, y el sistema circulatorio los lleva a cada célula."
   }
  },
  {
   "id": "ms2q07",
   "code": "3.1.6-8.C",
   "prompt": "Muscles pull on bones to move the body. Which two systems are working together?",
   "options": [
    "Muscular and skeletal",
    "Digestive and respiratory",
    "Circulatory and digestive",
    "Nervous and immune"
   ],
   "answer": 0,
   "hint": "Think of muscles and bones.",
   "explain": "The muscular system pulls and the skeletal system moves: they work together for every step.",
   "es": {
    "prompt": "Los músculos tiran de los huesos para mover el cuerpo. ¿Qué dos sistemas trabajan juntos?",
    "options": [
     "Muscular y esquelético",
     "Digestivo y respiratorio",
     "Circulatorio y digestivo",
     "Nervioso e inmunitario"
    ],
    "hint": "Piensa en los músculos y los huesos.",
    "explain": "El sistema muscular tira y el esquelético se mueve: trabajan juntos en cada paso."
   }
  },
  {
   "id": "ms2q08",
   "code": "3.1.6-8.C",
   "prompt": "A student says, \"Each body system works alone.\" Which evidence shows the student is WRONG?",
   "options": [
    "During exercise, breathing and heart rate both increase together.",
    "The stomach is in the middle of the body.",
    "Bones are hard.",
    "The brain is inside the skull."
   ],
   "answer": 0,
   "hint": "Look for two systems changing at the same time.",
   "explain": "When one system changes, others change too. Breathing and heart rate rising together shows the systems interact.",
   "es": {
    "prompt": "Un estudiante dice: \"Cada sistema del cuerpo trabaja solo\". ¿Qué evidencia muestra que está EQUIVOCADO?",
    "options": [
     "Durante el ejercicio, la respiración y el ritmo cardiaco aumentan juntos.",
     "El estómago está en el medio del cuerpo.",
     "Los huesos son duros.",
     "El cerebro está dentro del cráneo."
    ],
    "hint": "Busca dos sistemas que cambien al mismo tiempo.",
    "explain": "Cuando un sistema cambia, otros también cambian. Que la respiración y el ritmo cardiaco suban juntos muestra que los sistemas interactúan."
   }
  },
  {
   "id": "ms2q09",
   "code": "3.1.6-8.C",
   "prompt": "Sweating cools the body during a hike. Which organ releases the sweat?",
   "options": [
    "Skin",
    "Heart",
    "Lungs",
    "Stomach"
   ],
   "answer": 0,
   "hint": "Where do you feel sweat?",
   "explain": "Sweat glands in the skin release sweat, which cools the body as it dries.",
   "es": {
    "prompt": "Sudar enfría el cuerpo durante una caminata. ¿Qué órgano libera el sudor?",
    "options": [
     "La piel",
     "El corazón",
     "Los pulmones",
     "El estómago"
    ],
    "hint": "¿Dónde sientes el sudor?",
    "explain": "Las glándulas sudoríparas de la piel liberan el sudor, que enfría el cuerpo al secarse."
   }
  },
  {
   "id": "ms2q10",
   "code": "3.1.6-8.C",
   "prompt": "What are ALL the body’s organ systems made of?",
   "options": [
    "Groups of cells",
    "Only bones",
    "Only blood",
    "Rocks and minerals"
   ],
   "answer": 0,
   "hint": "What are all living things made of?",
   "explain": "Every organ system is built from organs, which are built from tissues, which are built from groups of cells.",
   "es": {
    "prompt": "¿De qué están formados TODOS los sistemas de órganos del cuerpo?",
    "options": [
     "De grupos de células",
     "Solo de huesos",
     "Solo de sangre",
     "De rocas y minerales"
    ],
    "hint": "¿De qué están hechos todos los seres vivos?",
    "explain": "Cada sistema de órganos está formado por órganos, que están formados por tejidos, que están formados por grupos de células."
   }
  },
  {
   "id": "ms2q11",
   "code": "3.1.6-8.C",
   "prompt": "White blood cells travel in the blood to fight germs anywhere in the body. Which two systems are working together?",
   "options": [
    "Immune and circulatory",
    "Skeletal and digestive",
    "Respiratory and skeletal",
    "Digestive and immune only"
   ],
   "answer": 0,
   "hint": "White blood cells defend; blood carries.",
   "explain": "White blood cells are part of the immune system, and they travel through the circulatory system.",
   "es": {
    "prompt": "Los glóbulos blancos viajan en la sangre para combatir microbios en cualquier parte del cuerpo. ¿Qué dos sistemas trabajan juntos?",
    "options": [
     "Inmunitario y circulatorio",
     "Esquelético y digestivo",
     "Respiratorio y esquelético",
     "Solo digestivo e inmunitario"
    ],
    "hint": "Los glóbulos blancos defienden; la sangre transporta.",
    "explain": "Los glóbulos blancos son parte del sistema inmunitario y viajan por el sistema circulatorio."
   }
  },
  {
   "id": "ms2q12",
   "code": "3.1.6-8.C",
   "prompt": "After the climb, the hiker rests for ten minutes. What most likely happens to her heart rate?",
   "options": [
    "It slows back down toward its resting rate.",
    "It keeps rising.",
    "It stops.",
    "It becomes the same as her breathing rate."
   ],
   "answer": 0,
   "hint": "The muscles need less oxygen at rest.",
   "explain": "When the muscles rest, they need less oxygen, so the heart slows down toward its resting rate.",
   "es": {
    "prompt": "Después de la subida, la excursionista descansa diez minutos. ¿Qué pasa probablemente con su ritmo cardiaco?",
    "options": [
     "Baja otra vez hacia su ritmo de reposo.",
     "Sigue subiendo.",
     "Se detiene.",
     "Se vuelve igual a su ritmo respiratorio."
    ],
    "hint": "Los músculos en reposo necesitan menos oxígeno.",
    "explain": "Cuando los músculos descansan, necesitan menos oxígeno, así que el corazón baja hacia su ritmo de reposo."
   }
  },
  {
   "id": "ms2q13",
   "code": "3.1.6-8.H",
   "prompt": "What do sensory receptors do?",
   "options": [
    "They sense stimuli and send messages toward the brain.",
    "They pump blood.",
    "They digest food.",
    "They store fat."
   ],
   "answer": 0,
   "hint": "Think of eyes, ears, skin, nose and tongue.",
   "explain": "Sensory receptors detect stimuli like light and sound and send messages along nerves to the brain.",
   "es": {
    "prompt": "¿Qué hacen los receptores sensoriales?",
    "options": [
     "Perciben estímulos y envían mensajes hacia el cerebro.",
     "Bombean sangre.",
     "Digieren alimentos.",
     "Guardan grasa."
    ],
    "hint": "Piensa en los ojos, los oídos, la piel, la nariz y la lengua.",
    "explain": "Los receptores sensoriales detectan estímulos como la luz y el sonido y envían mensajes por los nervios al cerebro."
   }
  },
  {
   "id": "ms2q14",
   "code": "3.1.6-8.H",
   "prompt": "At night, a camper hears an owl and turns to look. What is the STIMULUS?",
   "options": [
    "The sound of the owl",
    "Turning to look",
    "The camper’s brain",
    "The camper’s nerves"
   ],
   "answer": 0,
   "hint": "A stimulus comes first and causes the reaction.",
   "explain": "The owl’s sound is the stimulus. Turning to look is the response.",
   "es": {
    "prompt": "De noche, una campista oye un búho y gira para mirar. ¿Cuál es el ESTÍMULO?",
    "options": [
     "El sonido del búho",
     "Girar para mirar",
     "El cerebro de la campista",
     "Los nervios de la campista"
    ],
    "hint": "El estímulo viene primero y causa la reacción.",
    "explain": "El sonido del búho es el estímulo. Girar para mirar es la respuesta."
   }
  },
  {
   "id": "ms2q15",
   "code": "3.1.6-8.H",
   "prompt": "Which path does a message from the eyes follow?",
   "options": [
    "Receptors in the eye, then a nerve, then the brain",
    "Brain, then nerve, then eye",
    "Eye, then stomach, then brain",
    "Eye, then heart, then muscles"
   ],
   "answer": 0,
   "hint": "Messages start where the stimulus is sensed.",
   "explain": "Receptors sense the light, a nerve carries the message, and the brain receives it.",
   "es": {
    "prompt": "¿Qué camino sigue un mensaje de los ojos?",
    "options": [
     "Receptores del ojo, luego un nervio, luego el cerebro",
     "Cerebro, luego nervio, luego ojo",
     "Ojo, luego estómago, luego cerebro",
     "Ojo, luego corazón, luego músculos"
    ],
    "hint": "Los mensajes empiezan donde se percibe el estímulo.",
    "explain": "Los receptores perciben la luz, un nervio lleva el mensaje y el cerebro lo recibe."
   }
  },
  {
   "id": "ms2q16",
   "code": "3.1.6-8.H",
   "prompt": "A student remembers the smell of a campfire from last summer. What did the brain do with that message?",
   "options": [
    "It stored it as a memory.",
    "It used it only for an immediate reflex.",
    "It sent it to the stomach.",
    "It erased it right away."
   ],
   "answer": 0,
   "hint": "The smell came back months later.",
   "explain": "Some messages from the senses are stored as memories and used later.",
   "es": {
    "prompt": "Un estudiante recuerda el olor de una fogata del verano pasado. ¿Qué hizo el cerebro con ese mensaje?",
    "options": [
     "Lo guardó como un recuerdo.",
     "Lo usó solo para un reflejo inmediato.",
     "Lo envió al estómago.",
     "Lo borró enseguida."
    ],
    "hint": "El olor volvió meses después.",
    "explain": "Algunos mensajes de los sentidos se guardan como recuerdos y se usan después."
   }
  },
  {
   "id": "ms2q17",
   "code": "3.1.6-8.H",
   "prompt": "Which is an example of an IMMEDIATE behavior?",
   "options": [
    "Ducking when a ball flies at you",
    "Remembering a friend’s birthday",
    "Learning the names of constellations",
    "Knowing which plant gave you a rash last year"
   ],
   "answer": 0,
   "hint": "Which one happens right away, without waiting?",
   "explain": "Ducking happens right away in response to a stimulus. The others use stored memories.",
   "es": {
    "prompt": "¿Cuál es un ejemplo de conducta INMEDIATA?",
    "options": [
     "Agacharte cuando una pelota vuela hacia ti",
     "Recordar el cumpleaños de un amigo",
     "Aprender los nombres de las constelaciones",
     "Saber qué planta te dio sarpullido el año pasado"
    ],
    "hint": "¿Cuál pasa enseguida, sin esperar?",
    "explain": "Agacharse ocurre enseguida como respuesta a un estímulo. Los demás usan recuerdos guardados."
   }
  },
  {
   "id": "ms2q18",
   "code": "3.1.6-8.H",
   "prompt": "Why does it take longer to react to a buzz on your foot than on your hand?",
   "options": [
    "The message has farther to travel to the brain.",
    "Feet have no receptors.",
    "Hands are made of different cells than feet.",
    "The heart beats slower in the feet."
   ],
   "answer": 0,
   "hint": "Think about the distance to the brain.",
   "explain": "The foot is farther from the brain, so its message takes a little longer to arrive.",
   "es": {
    "prompt": "¿Por qué tardas más en reaccionar a una vibración en el pie que en la mano?",
    "options": [
     "El mensaje tiene que viajar más lejos hasta el cerebro.",
     "Los pies no tienen receptores.",
     "Las manos están formadas por células distintas a las de los pies.",
     "El corazón late más despacio en los pies."
    ],
    "hint": "Piensa en la distancia hasta el cerebro.",
    "explain": "El pie está más lejos del cerebro, así que su mensaje tarda un poco más en llegar."
   }
  },
  {
   "id": "ms2q19",
   "code": "3.1.6-8.H",
   "prompt": "Which sense organ has receptors for chemicals in the air?",
   "options": [
    "Nose",
    "Ear",
    "Skin",
    "Eye"
   ],
   "answer": 0,
   "hint": "Think of the smell of smoke.",
   "explain": "Receptors in the nose detect chemicals in the air: that is the sense of smell.",
   "es": {
    "prompt": "¿Qué órgano de los sentidos tiene receptores de sustancias químicas en el aire?",
    "options": [
     "La nariz",
     "El oído",
     "La piel",
     "El ojo"
    ],
    "hint": "Piensa en el olor del humo.",
    "explain": "Los receptores de la nariz detectan sustancias químicas en el aire: es el sentido del olfato."
   }
  },
  {
   "id": "ms2q20",
   "code": "3.1.6-8.H",
   "prompt": "A student plays a reaction game five times and gets faster each time. What is the BEST explanation?",
   "options": [
    "The brain stored what it learned and used it to respond faster.",
    "The student’s receptors disappeared.",
    "The game got slower.",
    "The student’s nerves got shorter."
   ],
   "answer": 0,
   "hint": "Practice changes what the brain does.",
   "explain": "Stored memories help the brain respond faster. That is learning.",
   "es": {
    "prompt": "Un estudiante juega cinco veces un juego de reacción y es más rápido cada vez. ¿Cuál es la MEJOR explicación?",
    "options": [
     "El cerebro guardó lo que aprendió y lo usó para responder más rápido.",
     "Los receptores del estudiante desaparecieron.",
     "El juego se volvió más lento.",
     "Los nervios del estudiante se acortaron."
    ],
    "hint": "Practicar cambia lo que hace el cerebro.",
    "explain": "Los recuerdos guardados ayudan al cerebro a responder más rápido. Eso es aprendizaje."
   }
  },
  {
   "id": "ms2q21",
   "code": "3.1.6-8.H",
   "prompt": "Which part of the body receives messages from the senses and decides on a response?",
   "options": [
    "Brain",
    "Stomach",
    "Lungs",
    "Bones"
   ],
   "answer": 0,
   "hint": "It is the control center of the nervous system.",
   "explain": "The brain receives messages from the senses and sends messages to the muscles.",
   "es": {
    "prompt": "¿Qué parte del cuerpo recibe los mensajes de los sentidos y decide una respuesta?",
    "options": [
     "El cerebro",
     "El estómago",
     "Los pulmones",
     "Los huesos"
    ],
    "hint": "Es el centro de control del sistema nervioso.",
    "explain": "El cerebro recibe mensajes de los sentidos y envía mensajes a los músculos."
   }
  },
  {
   "id": "ms2q22",
   "code": "3.1.6-8.H",
   "prompt": "On a dark night, you slowly see more stars after a few minutes. Why?",
   "options": [
    "Receptors in your eyes that work in dim light become more sensitive.",
    "The stars move closer.",
    "Your ears start helping you see.",
    "Your eyes stop sending messages."
   ],
   "answer": 0,
   "hint": "Your eyes adjust to the dark.",
   "explain": "Some receptors in the eye work best in dim light. As they adjust, you can see fainter stars.",
   "es": {
    "prompt": "En una noche oscura, después de unos minutos ves poco a poco más estrellas. ¿Por qué?",
    "options": [
     "Los receptores de tus ojos que funcionan con poca luz se vuelven más sensibles.",
     "Las estrellas se acercan.",
     "Tus oídos empiezan a ayudarte a ver.",
     "Tus ojos dejan de enviar mensajes."
    ],
    "hint": "Tus ojos se adaptan a la oscuridad.",
    "explain": "Algunos receptores del ojo funcionan mejor con poca luz. Al adaptarse, puedes ver estrellas más tenues."
   }
  }
 ],
 "pairs": [
  {
   "name": "Tissue or organ?",
   "explain": "A tissue is a group of similar cells. An organ is made of several different tissues working together.",
   "members": [
    {
     "label": "Tissue",
     "level": "2-1",
     "ids": [
      "ms2q02"
     ]
    },
    {
     "label": "Organ",
     "level": "2-1",
     "ids": [
      "ms2q05"
     ]
    }
   ],
   "es": {
    "name": "¿Tejido u órgano?",
    "explain": "Un tejido es un grupo de células parecidas. Un órgano está formado por varios tejidos distintos que trabajan juntos."
   }
  },
  {
   "name": "Stimulus or response?",
   "explain": "The stimulus comes first and causes the reaction. The response is what you do.",
   "members": [
    {
     "label": "Stimulus",
     "level": "2-3",
     "ids": [
      "ms2q14"
     ]
    },
    {
     "label": "Response",
     "level": "2-3",
     "ids": [
      "ms2q17"
     ]
    }
   ],
   "es": {
    "name": "¿Estímulo o respuesta?",
    "explain": "El estímulo viene primero y causa la reacción. La respuesta es lo que haces."
   }
  },
  {
   "name": "Immediate behavior or memory?",
   "explain": "Immediate behavior happens right away. A memory is stored and used later.",
   "members": [
    {
     "label": "Immediate behavior",
     "level": "2-4",
     "ids": [
      "sort2-mem.0",
      "sort2-mem.4"
     ]
    },
    {
     "label": "Memory",
     "level": "2-4",
     "ids": [
      "sort2-mem.1",
      "ms2q16"
     ]
    }
   ],
   "es": {
    "name": "¿Conducta inmediata o recuerdo?",
    "explain": "La conducta inmediata ocurre enseguida. Un recuerdo se guarda y se usa después."
   }
  }
 ],
 "become": [
  {
   "id": "b2-nerve",
   "code": "3.1.6-8.H",
   "you": "a message from the ear’s sound receptors",
   "short": "⚡",
   "color": "#ffd166",
   "goal": "An owl just hooted! Carry the news to the place that decides what to do.",
   "doors": [
    {
     "kind": "lipid",
     "label": "Along the hearing nerve to the brain",
     "ok": true,
     "es": {
      "label": "Por el nervio del oído hasta el cerebro"
     }
    },
    {
     "kind": "protein",
     "label": "Down to the stomach",
     "ok": false,
     "es": {
      "label": "Baja hasta el estómago",
      "why": "El estómago digiere los alimentos. No decide qué hacer con un sonido."
     },
     "why": "The stomach digests food. It does not decide what to do about a sound."
    },
    {
     "kind": "pump",
     "label": "Straight out through the skin",
     "ok": false,
     "es": {
      "label": "Sal directo por la piel",
      "why": "Los mensajes de los receptores viajan dentro del cuerpo, por los nervios, hasta el cerebro."
     },
     "why": "Messages from receptors travel inside the body, along nerves, to the brain."
    }
   ],
   "explain": "Receptors send messages along nerves to the brain. The brain decides on a response, like turning to look for the owl.",
   "es": {
    "you": "un mensaje de los receptores del sonido del oído",
    "goal": "¡Un búho acaba de ulular! Lleva la noticia al lugar que decide qué hacer.",
    "explain": "Los receptores envían mensajes por los nervios al cerebro. El cerebro decide una respuesta, como girar para buscar al búho."
   }
  },
  {
   "id": "b2-oxygen",
   "code": "3.1.6-8.C",
   "you": "oxygen that the hiker just breathed in",
   "short": "O₂",
   "color": "#9fe0ff",
   "goal": "You are in the lungs. Get to the hard-working leg muscles!",
   "doors": [
    {
     "kind": "lipid",
     "label": "Into the blood, then the heart pumps you to the legs",
     "ok": true,
     "es": {
      "label": "Entra en la sangre y el corazón te bombea a las piernas"
     }
    },
    {
     "kind": "protein",
     "label": "Into the stomach with the trail mix",
     "ok": false,
     "es": {
      "label": "Entra en el estómago con la mezcla de frutos",
      "why": "El oxígeno pasa de los pulmones a la sangre, no al sistema digestivo."
     },
     "why": "Oxygen goes from the lungs into the blood, not into the digestive system."
    },
    {
     "kind": "pump",
     "label": "Through the bones to the legs",
     "ok": false,
     "es": {
      "label": "Por los huesos hasta las piernas",
      "why": "Los huesos sostienen el cuerpo. Los vasos sanguíneos, no los huesos, llevan el oxígeno."
     },
     "why": "Bones support the body. Blood vessels, not bones, carry oxygen."
    }
   ],
   "explain": "The respiratory system brings oxygen in, and the circulatory system carries it to the muscle cells. Two systems, one job.",
   "es": {
    "you": "oxígeno que la excursionista acaba de respirar",
    "goal": "Estás en los pulmones. ¡Llega a los músculos de las piernas, que trabajan mucho!",
    "explain": "El sistema respiratorio trae el oxígeno y el sistema circulatorio lo lleva a las células musculares. Dos sistemas, un trabajo."
   }
  }
 ],
 "data": [
  {
   "id": "d2-heart",
   "code": "3.1.6-8.C",
   "title": "A hiker’s heart rate on the trail",
   "xlabel": "Part of the hike",
   "ylabel": "Heartbeats per minute",
   "categories": [
    "Resting",
    "Walking",
    "Climbing",
    "At the lookout",
    "After resting"
   ],
   "values": [
    70,
    100,
    145,
    110,
    78
   ],
   "questions": [
    {
     "prompt": "When was the hiker’s heart rate the HIGHEST?",
     "answer": 2,
     "hint": "Find the tallest bar.",
     "explain": "While climbing. The leg muscles needed the most oxygen, so the heart pumped fastest.",
     "es": {
      "prompt": "¿Cuándo fue MÁS ALTO el ritmo cardiaco?",
      "hint": "Busca la barra más alta.",
      "explain": "Mientras subía. Los músculos de las piernas necesitaban más oxígeno, así que el corazón bombeó más rápido."
     }
    },
    {
     "prompt": "Which part of the hike shows the heart slowing back down toward its resting rate?",
     "answer": 4,
     "hint": "Look for a bar close to the resting bar, after the climb.",
     "explain": "After resting, the heart rate dropped back near 70. The body returns to normal when the muscles need less oxygen.",
     "es": {
      "prompt": "¿Qué parte de la caminata muestra que el corazón vuelve a su ritmo de reposo?",
      "hint": "Busca una barra parecida a la de reposo, después de la subida.",
      "explain": "Después de descansar, el ritmo bajó cerca de 70. El cuerpo vuelve a la normalidad cuando los músculos necesitan menos oxígeno."
     }
    }
   ],
   "es": {
    "title": "Ritmo cardiaco de una excursionista en el sendero",
    "xlabel": "Parte de la caminata",
    "ylabel": "Latidos por minuto",
    "categories": [
     "En reposo",
     "Caminando",
     "Subiendo",
     "En el mirador",
     "Después de descansar"
    ]
   }
  },
  {
   "id": "d2-breath",
   "code": "3.1.6-8.C",
   "title": "The same hiker’s breathing rate",
   "xlabel": "Part of the hike",
   "ylabel": "Breaths per minute",
   "categories": [
    "Resting",
    "Walking",
    "Climbing",
    "At the lookout",
    "After resting"
   ],
   "values": [
    14,
    20,
    32,
    22,
    15
   ],
   "questions": [
    {
     "prompt": "Breathing was fastest at the same time the heart was fastest. When was that?",
     "answer": 2,
     "hint": "Compare with the heart-rate graph.",
     "explain": "Both peaked while climbing. The respiratory and circulatory systems speed up TOGETHER to deliver oxygen.",
     "es": {
      "prompt": "La respiración fue más rápida al mismo tiempo que el corazón. ¿Cuándo fue?",
      "hint": "Compara con la gráfica del ritmo cardiaco.",
      "explain": "Los dos llegaron al máximo al subir. Los sistemas respiratorio y circulatorio se aceleran JUNTOS para llevar oxígeno."
     }
    },
    {
     "prompt": "Which part of the hike had the SLOWEST breathing?",
     "answer": 0,
     "hint": "Find the shortest bar.",
     "explain": "Resting, at the start. Resting muscles need the least oxygen.",
     "es": {
      "prompt": "¿Qué parte de la caminata tuvo la respiración MÁS LENTA?",
      "hint": "Busca la barra más baja.",
      "explain": "En reposo, al principio. Los músculos en reposo necesitan menos oxígeno."
     }
    }
   ],
   "es": {
    "title": "Ritmo respiratorio de la misma excursionista",
    "xlabel": "Parte de la caminata",
    "ylabel": "Respiraciones por minuto",
    "categories": [
     "En reposo",
     "Caminando",
     "Subiendo",
     "En el mirador",
     "Después de descansar"
    ]
   }
  },
  {
   "id": "d2-react",
   "code": "3.1.6-8.H",
   "title": "Reaction times at the exhibit",
   "xlabel": "Test",
   "ylabel": "Reaction time (thousandths of a second)",
   "categories": [
    "Hand, try 1",
    "Foot, try 1",
    "Hand, try 5",
    "Foot, try 5"
   ],
   "values": [
    260,
    310,
    220,
    270
   ],
   "questions": [
    {
     "prompt": "Which test was SLOWEST?",
     "answer": 1,
     "hint": "Find the tallest bar.",
     "explain": "The foot on the first try. Messages from the foot travel farther to reach the brain.",
     "es": {
      "prompt": "¿Qué prueba fue la MÁS LENTA?",
      "hint": "Busca la barra más alta.",
      "explain": "El pie en el primer intento. Los mensajes del pie viajan más lejos para llegar al cerebro."
     }
    },
    {
     "prompt": "After practice (try 5), which test was FASTEST?",
     "answer": 2,
     "hint": "Find the shortest bar.",
     "explain": "The hand on try 5. Practice helped: the brain stored what it learned and responded faster.",
     "es": {
      "prompt": "Después de practicar (intento 5), ¿qué prueba fue la MÁS RÁPIDA?",
      "hint": "Busca la barra más baja.",
      "explain": "La mano en el intento 5. Practicar ayudó: el cerebro guardó lo aprendido y respondió más rápido."
     }
    }
   ],
   "es": {
    "title": "Tiempos de reacción en la exposición",
    "xlabel": "Prueba",
    "ylabel": "Tiempo de reacción (milésimas de segundo)",
    "categories": [
     "Mano, intento 1",
     "Pie, intento 1",
     "Mano, intento 5",
     "Pie, intento 5"
    ]
   }
  }
 ],
 "mazes": [
  {
   "id": "maze2-org",
   "code": "3.1.6-8.C",
   "title": "Zoom out through the body: go through the doorway for the next level up",
   "start": "Muscle cell",
   "steps": [
    {
     "label": "Muscle tissue",
     "hint": "What do many muscle cells form when they work together?",
     "why": "Similar cells working together form a tissue.",
     "es": {
      "label": "Tejido muscular",
      "hint": "¿Qué forman muchas células musculares cuando trabajan juntas?",
      "why": "Las células parecidas que trabajan juntas forman un tejido."
     }
    },
    {
     "label": "Heart (an organ)",
     "hint": "What is made of several kinds of tissue working together?",
     "why": "Different tissues working together form an organ, like the heart.",
     "es": {
      "label": "Corazón (un órgano)",
      "hint": "¿Qué está formado por varios tipos de tejido que trabajan juntos?",
      "why": "Distintos tejidos que trabajan juntos forman un órgano, como el corazón."
     }
    },
    {
     "label": "Circulatory system",
     "hint": "What do the heart, blood vessels and blood form together?",
     "why": "Organs that work together form an organ system.",
     "es": {
      "label": "Sistema circulatorio",
      "hint": "¿Qué forman juntos el corazón, los vasos sanguíneos y la sangre?",
      "why": "Los órganos que trabajan juntos forman un sistema de órganos."
     }
    },
    {
     "label": "The whole hiker",
     "hint": "What is made of all the systems working together?",
     "why": "All the organ systems together make one organism.",
     "es": {
      "label": "El excursionista completo",
      "hint": "¿Qué está formado por todos los sistemas trabajando juntos?",
      "why": "Todos los sistemas de órganos juntos forman un organismo."
     }
    }
   ],
   "extra": [
    "Nucleus",
    "Sunlight",
    "Rock"
   ],
   "explain": "Cells form tissues, tissues form organs, organs form organ systems, and the systems together form the organism.",
   "es": {
    "title": "Aléjate por el cuerpo: cruza la puerta del siguiente nivel",
    "start": "Célula muscular",
    "extra": [
     "Núcleo",
     "Luz del sol",
     "Roca"
    ],
    "explain": "Las células forman tejidos, los tejidos forman órganos, los órganos forman sistemas y los sistemas juntos forman el organismo."
   }
  }
 ],
 "sequences": [
  {
   "id": "seq2-oxygen",
   "code": "3.1.6-8.C",
   "title": "How oxygen gets from the air to a leg muscle cell",
   "steps": [
    "The hiker breathes in air",
    "Oxygen moves from the lungs into the blood",
    "The heart pumps the blood through blood vessels",
    "Oxygen reaches the leg muscle cells"
   ],
   "hint": "Start outside the body, with the air.",
   "explain": "The respiratory and circulatory systems work together to deliver oxygen to cells.",
   "es": {
    "title": "Cómo llega el oxígeno del aire a una célula muscular de la pierna",
    "steps": [
     "La excursionista respira aire",
     "El oxígeno pasa de los pulmones a la sangre",
     "El corazón bombea la sangre por los vasos sanguíneos",
     "El oxígeno llega a las células musculares de la pierna"
    ],
    "hint": "Empieza fuera del cuerpo, con el aire.",
    "explain": "Los sistemas respiratorio y circulatorio trabajan juntos para llevar oxígeno a las células."
   }
  },
  {
   "id": "seq2-sense",
   "code": "3.1.6-8.H",
   "title": "From a stimulus to a response",
   "steps": [
    "A stimulus: a twig snaps",
    "Receptors in the ear sense the sound",
    "A nerve carries the message to the brain",
    "The brain sends a message to the muscles",
    "The response: you turn your head"
   ],
   "hint": "Begin with what happens outside the body.",
   "explain": "Stimulus, receptor, nerve, brain, response: that is how the nervous system turns a sense into an action.",
   "es": {
    "title": "De un estímulo a una respuesta",
    "steps": [
     "Un estímulo: una rama cruje",
     "Los receptores del oído perciben el sonido",
     "Un nervio lleva el mensaje al cerebro",
     "El cerebro envía un mensaje a los músculos",
     "La respuesta: giras la cabeza"
    ],
    "hint": "Empieza con lo que pasa fuera del cuerpo.",
    "explain": "Estímulo, receptor, nervio, cerebro, respuesta: así el sistema nervioso convierte un sentido en una acción."
   }
  }
 ],
 "wordbanks": [
  {
   "id": "wb2-senses",
   "code": "3.1.6-8.H",
   "words": [
    "receptors",
    "stimulus",
    "nerves",
    "brain",
    "response",
    "memory"
   ],
   "sentences": [
    {
     "text": "Light, sound or cold air is a ___ that your senses can detect.",
     "answer": "stimulus",
     "code": "3.1.6-8.H",
     "explain": "A stimulus is something that causes a reaction.",
     "es": {
      "text": "La luz, el sonido o el aire frío son un ___ que tus sentidos pueden detectar.",
      "answer": "estímulo",
      "explain": "Un estímulo es algo que causa una reacción."
     }
    },
    {
     "text": "Special cells called ___ sense light, sound, touch, taste and smell.",
     "answer": "receptors",
     "code": "3.1.6-8.H",
     "explain": "Sensory receptors detect stimuli.",
     "es": {
      "text": "Unas células especiales llamadas ___ perciben la luz, el sonido, el tacto, el sabor y el olor.",
      "answer": "receptores",
      "explain": "Los receptores sensoriales detectan los estímulos."
     }
    },
    {
     "text": "Messages travel from the receptors along ___.",
     "answer": "nerves",
     "code": "3.1.6-8.H",
     "explain": "Nerves carry messages through the body.",
     "es": {
      "text": "Los mensajes viajan desde los receptores por los ___.",
      "answer": "nervios",
      "explain": "Los nervios llevan mensajes por el cuerpo."
     }
    },
    {
     "text": "The ___ decides what to do with the message.",
     "answer": "brain",
     "code": "3.1.6-8.H",
     "explain": "The brain sorts out the messages and decides on a response.",
     "es": {
      "text": "El ___ decide qué hacer con el mensaje.",
      "answer": "cerebro",
      "explain": "El cerebro ordena los mensajes y decide una respuesta."
     }
    },
    {
     "text": "Turning toward a sound is your ___.",
     "answer": "response",
     "code": "3.1.6-8.H",
     "explain": "A response is what you do because of a stimulus.",
     "es": {
      "text": "Girar hacia un sonido es tu ___.",
      "answer": "respuesta",
      "explain": "Una respuesta es lo que haces por un estímulo."
     }
    },
    {
     "text": "The smell of a campfire can be saved as a ___.",
     "answer": "memory",
     "code": "3.1.6-8.H",
     "explain": "The brain can store information to use later.",
     "es": {
      "text": "El olor de una fogata puede guardarse como un ___.",
      "answer": "recuerdo",
      "explain": "El cerebro puede guardar información para usarla después."
     }
    }
   ],
   "es": {
    "words": [
     "receptores",
     "estímulo",
     "nervios",
     "cerebro",
     "respuesta",
     "recuerdo"
    ]
   }
  }
 ],
 "balances": [
  {
   "id": "bal2-oxygen",
   "kind": "elevator",
   "code": "3.1.6-8.C",
   "title": "Keep the leg muscles supplied with oxygen on the steep climb. The platform rises and falls with the oxygen supply.",
   "what": "Oxygen for the muscles",
   "unit": "%",
   "start": 80,
   "min": 30,
   "max": 120,
   "band": [
    65,
    95
   ],
   "danger": [
    45,
    110
   ],
   "hold": 10,
   "drift": -3,
   "event": {
    "every": 6,
    "delta": -14,
    "msg": "A steep, rocky stretch! The leg muscles are using oxygen fast."
   },
   "controls": [
    {
     "label": "Lungs and heart: speed up",
     "delta": 18
    },
    {
     "label": "Lungs and heart: slow down",
     "delta": -12
    }
   ],
   "tooHigh": "More oxygen than the muscles need. The lungs and heart can slow down a little.",
   "tooLow": "The muscles are running low on oxygen! Speed up the lungs and heart.",
   "explain": "When the muscles worked harder, the respiratory and circulatory systems both sped up to keep oxygen coming. The body’s systems interact.",
   "es": {
    "title": "Mantén el oxígeno de los músculos de las piernas en la subida empinada. La plataforma sube y baja con el oxígeno.",
    "what": "Oxígeno para los músculos",
    "event": {
     "every": 6,
     "delta": -14,
     "msg": "¡Un tramo empinado y rocoso! Los músculos de las piernas usan oxígeno muy rápido."
    },
    "controls": [
     {
      "label": "Pulmones y corazón: acelérense",
      "delta": 18
     },
     {
      "label": "Pulmones y corazón: vayan más despacio",
      "delta": -12
     }
    ],
    "tooHigh": "Hay más oxígeno del que necesitan los músculos. Los pulmones y el corazón pueden ir un poco más despacio.",
    "tooLow": "¡A los músculos les falta oxígeno! Acelera los pulmones y el corazón.",
    "explain": "Cuando los músculos trabajaron más, los sistemas respiratorio y circulatorio se aceleraron para mantener el oxígeno. Los sistemas del cuerpo interactúan."
   }
  }
 ],
 "lablocks": [
  {
   "id": "lock2",
   "title": "Lab Lock",
   "es": {
    "title": "Candado del laboratorio"
   },
   "clues": [
    {
     "prompt": "Clue 1: Count the levels from smallest to biggest: cell, tissue, organ, organ system, organism. How many levels is that?",
     "answer": 5,
     "code": "3.1.6-8.C",
     "hint": "Count each word.",
     "explain": "Cell, tissue, organ, organ system, organism: 5 levels.",
     "es": {
      "prompt": "Pista 1: Cuenta los niveles del más pequeño al más grande: célula, tejido, órgano, sistema de órganos, organismo. ¿Cuántos niveles son?",
      "hint": "Cuenta cada palabra.",
      "explain": "Célula, tejido, órgano, sistema de órganos, organismo: 5 niveles."
     }
    },
    {
     "prompt": "Clue 2: How many of these are SYSTEMS that sped up during the climb? Circulatory, respiratory, a rock, the trail.",
     "answer": 2,
     "code": "3.1.6-8.C",
     "hint": "Only body systems count.",
     "explain": "The circulatory and respiratory systems: 2.",
     "es": {
      "prompt": "Pista 2: ¿Cuántos de estos son SISTEMAS que se aceleraron en la subida? Circulatorio, respiratorio, una roca, el sendero.",
      "hint": "Solo cuentan los sistemas del cuerpo.",
      "explain": "El sistema circulatorio y el respiratorio: 2."
     }
    },
    {
     "prompt": "Clue 3: How many of these are STIMULI? An owl hooting, the brain, cold wind, a nerve.",
     "answer": 2,
     "code": "3.1.6-8.H",
     "hint": "A stimulus comes from outside and causes a reaction.",
     "explain": "The owl hooting and the cold wind: 2.",
     "es": {
      "prompt": "Pista 3: ¿Cuántos de estos son ESTÍMULOS? Un búho que ulula, el cerebro, el viento frío, un nervio.",
      "hint": "Un estímulo viene de afuera y causa una reacción.",
      "explain": "El búho que ulula y el viento frío: 2."
     }
    },
    {
     "prompt": "Clue 4: Look at the reaction times. How many tests were faster than 300 thousandths of a second?",
     "answer": 3,
     "code": "3.1.6-8.H",
     "hint": "Count the bars below 300.",
     "explain": "Hand try 1 (260), hand try 5 (220) and foot try 5 (270): 3.",
     "es": {
      "prompt": "Pista 4: Mira los tiempos de reacción. ¿Cuántas pruebas fueron más rápidas que 300 milésimas de segundo?",
      "hint": "Cuenta las barras por debajo de 300.",
      "explain": "Mano intento 1 (260), mano intento 5 (220) y pie intento 5 (270): 3.",
      "figure": {
       "type": "bars",
       "categories": [
        "Mano, intento 1",
        "Pie, intento 1",
        "Mano, intento 5",
        "Pie, intento 5"
       ],
       "values": [
        260,
        310,
        220,
        270
       ],
       "ylabel": "Tiempo de reacción"
      }
     },
     "figure": {
      "type": "bars",
      "categories": [
       "Hand, try 1",
       "Foot, try 1",
       "Hand, try 5",
       "Foot, try 5"
      ],
      "values": [
       260,
       310,
       220,
       270
      ],
      "ylabel": "Reaction time"
     }
    }
   ]
  }
 ],
 "scans": [
  {
   "id": "s2-musclecell",
   "name": "Muscle cell",
   "look": "cell",
   "color": "#ff8a8a",
   "word": "Muscle cell",
   "def": "A long cell that can shorten (contract) to make the body move.",
   "note": "Each muscle cell can shorten, or CONTRACT. When thousands contract together, the hiker’s leg moves.",
   "es": {
    "name": "Célula muscular",
    "word": "Célula muscular",
    "def": "Una célula larga que puede acortarse (contraerse) para mover el cuerpo.",
    "note": "Cada célula muscular puede acortarse, o CONTRAERSE. Cuando miles se contraen juntas, la pierna del excursionista se mueve."
   }
  },
  {
   "id": "s2-tissue",
   "name": "Muscle tissue",
   "look": "stack",
   "color": "#ff9f9f",
   "word": "Tissue",
   "def": "A group of similar cells that work together to do one job.",
   "note": "Muscle cells line up side by side to form muscle TISSUE. A tissue is a team of cells doing the same job.",
   "es": {
    "name": "Tejido muscular",
    "word": "Tejido",
    "def": "Un grupo de células parecidas que trabajan juntas para hacer un trabajo.",
    "note": "Las células musculares se alinean una al lado de otra para formar TEJIDO muscular. Un tejido es un equipo de células que hacen el mismo trabajo."
   }
  },
  {
   "id": "s2-heart",
   "name": "Heart",
   "look": "cell",
   "color": "#ff4a5a",
   "word": "Organ",
   "def": "A body part made of different tissues working together.",
   "note": "The heart is an ORGAN. It is made of muscle tissue, nerve tissue and other tissues that work together to pump blood.",
   "es": {
    "name": "Corazón",
    "word": "Órgano",
    "def": "Una parte del cuerpo formada por distintos tejidos que trabajan juntos.",
    "note": "El corazón es un ÓRGANO. Está formado por tejido muscular, tejido nervioso y otros tejidos que trabajan juntos para bombear sangre."
   }
  },
  {
   "id": "s2-vessel",
   "name": "Blood vessels",
   "look": "rod",
   "color": "#d84a5a",
   "word": "Blood vessel",
   "def": "A tube that carries blood around the body.",
   "note": "Arteries carry blood away from the heart, veins carry it back, and tiny capillaries reach almost every cell.",
   "es": {
    "name": "Vasos sanguíneos",
    "word": "Vaso sanguíneo",
    "def": "Un tubo que lleva la sangre por el cuerpo.",
    "note": "Las arterias llevan la sangre lejos del corazón, las venas la traen de vuelta y los capilares diminutos llegan a casi todas las células."
   }
  },
  {
   "id": "s2-circ",
   "name": "Circulatory system",
   "look": "drop",
   "color": "#ff6b6b",
   "word": "Organ system",
   "def": "A group of organs that work together to do a big job.",
   "note": "The heart, blood vessels and blood make up the circulatory system, an ORGAN SYSTEM that moves oxygen and food to every cell.",
   "es": {
    "name": "Sistema circulatorio",
    "word": "Sistema de órganos",
    "def": "Un grupo de órganos que trabajan juntos para hacer un trabajo grande.",
    "note": "El corazón, los vasos sanguíneos y la sangre forman el sistema circulatorio, un SISTEMA DE ÓRGANOS que lleva oxígeno y alimento a cada célula."
   }
  },
  {
   "id": "s2-lungs",
   "name": "Lungs",
   "look": "cell",
   "color": "#ffb0c0",
   "word": "Respiratory system",
   "def": "The organs that bring oxygen into the body and remove carbon dioxide.",
   "note": "With each breath, the lungs take in oxygen and get rid of carbon dioxide. They are part of the RESPIRATORY SYSTEM.",
   "es": {
    "name": "Pulmones",
    "word": "Sistema respiratorio",
    "def": "Los órganos que llevan oxígeno al cuerpo y eliminan el dióxido de carbono.",
    "note": "Con cada respiración, los pulmones toman oxígeno y eliminan dióxido de carbono. Son parte del SISTEMA RESPIRATORIO."
   }
  },
  {
   "id": "s2-stomach",
   "name": "Stomach",
   "look": "drop",
   "color": "#ffcf8a",
   "word": "Digestive system",
   "def": "The organs that break food down so the body can use it.",
   "note": "The stomach and intestines break the hiker’s trail mix into small pieces that the blood can carry. That is the DIGESTIVE SYSTEM.",
   "es": {
    "name": "Estómago",
    "word": "Sistema digestivo",
    "def": "Los órganos que descomponen los alimentos para que el cuerpo pueda usarlos.",
    "note": "El estómago y los intestinos descomponen la mezcla de frutos secos del excursionista en trocitos que la sangre puede llevar. Es el SISTEMA DIGESTIVO."
   }
  },
  {
   "id": "s2-bone",
   "name": "Leg bone",
   "look": "rod",
   "color": "#e8e0d0",
   "word": "Skeletal system",
   "def": "The bones that hold the body up, protect organs and work with muscles to move.",
   "note": "Bones are living organs made of bone cells. The SKELETAL SYSTEM holds the body up, and muscles pull on bones to move it.",
   "es": {
    "name": "Hueso de la pierna",
    "word": "Sistema esquelético",
    "def": "Los huesos que sostienen el cuerpo, protegen los órganos y trabajan con los músculos para moverse.",
    "note": "Los huesos son órganos vivos formados por células óseas. El SISTEMA ESQUELÉTICO sostiene el cuerpo, y los músculos tiran de los huesos para moverlo."
   }
  },
  {
   "id": "s2-wbc",
   "name": "White blood cell",
   "look": "cell",
   "color": "#e6f0ff",
   "word": "Immune system",
   "def": "The cells and organs that defend the body against germs.",
   "note": "White blood cells hunt down germs. They are part of the IMMUNE SYSTEM, which works with the circulatory system to reach every part of the body.",
   "es": {
    "name": "Glóbulo blanco",
    "word": "Sistema inmunitario",
    "def": "Las células y los órganos que defienden el cuerpo contra los microbios.",
    "note": "Los glóbulos blancos persiguen a los microbios. Son parte del SISTEMA INMUNITARIO, que trabaja con el sistema circulatorio para llegar a todo el cuerpo."
   }
  },
  {
   "id": "s2-organism",
   "name": "The hiker",
   "look": "critter",
   "color": "#ffd08a",
   "word": "Organism",
   "def": "One whole living thing, made of all its systems working together.",
   "note": "All of the hiker’s systems work together to make one ORGANISM. If one system stops working, the others are affected.",
   "es": {
    "name": "El excursionista",
    "word": "Organismo",
    "def": "Un ser vivo completo, formado por todos sus sistemas trabajando juntos.",
    "note": "Todos los sistemas del excursionista trabajan juntos para formar un ORGANISMO. Si un sistema deja de funcionar, los demás se ven afectados."
   }
  },
  {
   "id": "s2-subsystem",
   "name": "Body map",
   "look": "stack",
   "color": "#9fe0ff",
   "word": "Subsystem",
   "def": "A smaller system that is part of a bigger system.",
   "note": "The body is a system made of SUBSYSTEMS: circulatory, respiratory, digestive, skeletal, muscular, nervous, immune and more. Each one is made of groups of cells.",
   "es": {
    "name": "Mapa del cuerpo",
    "word": "Subsistema",
    "def": "Un sistema más pequeño que es parte de un sistema más grande.",
    "note": "El cuerpo es un sistema formado por SUBSISTEMAS: circulatorio, respiratorio, digestivo, esquelético, muscular, nervioso, inmunitario y más. Cada uno está formado por grupos de células."
   }
  },
  {
   "id": "s2h-trail",
   "name": "Rocky trail",
   "look": "rock",
   "color": "#9a9aa2",
   "word": "Exercise",
   "def": "Using your muscles hard, like when you climb, run or swim.",
   "note": "This trail at Hawk Mountain climbs steeply over rocks. During EXERCISE, many body systems must speed up together.",
   "es": {
    "name": "Sendero rocoso",
    "word": "Ejercicio",
    "def": "Usar mucho los músculos, como cuando subes, corres o nadas.",
    "note": "Este sendero de Hawk Mountain sube mucho entre rocas. Durante el EJERCICIO, muchos sistemas del cuerpo deben acelerarse juntos."
   }
  },
  {
   "id": "s2h-pulse",
   "name": "Heart rate monitor",
   "look": "stack",
   "color": "#ff6b6b",
   "word": "Heart rate",
   "def": "How many times the heart beats in one minute.",
   "note": "Climbing makes the HEART RATE go up. The heart pumps faster to bring more oxygen to the working leg muscles.",
   "es": {
    "name": "Monitor de ritmo cardiaco",
    "word": "Ritmo cardiaco",
    "def": "Cuántas veces late el corazón en un minuto.",
    "note": "Subir hace que el RITMO CARDIACO aumente. El corazón bombea más rápido para llevar más oxígeno a los músculos de las piernas."
   }
  },
  {
   "id": "s2h-breath",
   "name": "Hiker catching her breath",
   "look": "critter",
   "color": "#ffb0c0",
   "word": "Breathing rate",
   "def": "How many breaths a person takes in one minute.",
   "note": "The BREATHING RATE goes up too. Faster breathing brings in more oxygen and gets rid of extra carbon dioxide.",
   "es": {
    "name": "Excursionista recuperando el aliento",
    "word": "Ritmo respiratorio",
    "def": "Cuántas veces respira una persona en un minuto.",
    "note": "El RITMO RESPIRATORIO también aumenta. Respirar más rápido trae más oxígeno y elimina el dióxido de carbono extra."
   }
  },
  {
   "id": "s2h-sweat",
   "name": "Sweat",
   "look": "drop",
   "color": "#7fd4ff",
   "word": "Sweat",
   "def": "Salty water from the skin that cools the body as it dries.",
   "note": "Working muscles make heat. Sweat glands in the skin release SWEAT, and as it dries it cools the body down.",
   "es": {
    "name": "Sudor",
    "word": "Sudor",
    "def": "Agua salada de la piel que enfría el cuerpo al secarse.",
    "note": "Los músculos en acción producen calor. Las glándulas de la piel liberan SUDOR y, al secarse, enfría el cuerpo."
   }
  },
  {
   "id": "s2h-muscle",
   "name": "Leg muscles and bones",
   "look": "rod",
   "color": "#ff9f6e",
   "word": "Muscular system",
   "def": "The muscles that move the body by pulling on bones.",
   "note": "Every step uses the MUSCULAR SYSTEM and the skeletal system together: muscles pull, bones move.",
   "es": {
    "name": "Músculos y huesos de la pierna",
    "word": "Sistema muscular",
    "def": "Los músculos que mueven el cuerpo tirando de los huesos.",
    "note": "Cada paso usa juntos el SISTEMA MUSCULAR y el sistema esquelético: los músculos tiran y los huesos se mueven."
   }
  },
  {
   "id": "s2h-snack",
   "name": "Trail mix",
   "look": "stack",
   "color": "#ffcf8a",
   "word": "Nutrients",
   "def": "Materials in food that the body uses for energy and growth.",
   "note": "The digestive system breaks trail mix into NUTRIENTS, and the circulatory system carries them to the muscle cells.",
   "es": {
    "name": "Mezcla de frutos secos",
    "word": "Nutrientes",
    "def": "Sustancias de los alimentos que el cuerpo usa para obtener energía y crecer.",
    "note": "El sistema digestivo descompone la mezcla de frutos secos en NUTRIENTES, y el sistema circulatorio los lleva a las células musculares."
   }
  },
  {
   "id": "s2h-hawk",
   "name": "Broad-winged hawk",
   "look": "critter",
   "color": "#a0784a",
   "word": "Interact",
   "def": "To work together and affect each other.",
   "note": "A hawk soaring over the ridge uses its systems too. In every animal, the systems INTERACT: when one changes, the others change.",
   "es": {
    "name": "Gavilán aludo",
    "word": "Interactuar",
    "def": "Trabajar juntos y afectarse unos a otros.",
    "note": "Un gavilán que planea sobre la cresta también usa sus sistemas. En todo animal, los sistemas INTERACTÚAN: cuando uno cambia, los demás cambian."
   }
  },
  {
   "id": "s2h-lookout",
   "name": "North Lookout",
   "look": "rock",
   "color": "#c8b090",
   "word": "Evidence",
   "def": "Facts or observations that support an idea.",
   "note": "At the top, the hiker measures her heart rate and breathing again. Measurements like these are EVIDENCE that the systems work together.",
   "es": {
    "name": "Mirador Norte",
    "word": "Evidencia",
    "def": "Hechos u observaciones que apoyan una idea.",
    "note": "En la cima, la excursionista mide otra vez su ritmo cardiaco y su respiración. Medidas como estas son EVIDENCIA de que los sistemas trabajan juntos."
   }
  },
  {
   "id": "s2n-sky",
   "name": "Milky Way",
   "look": "sun",
   "color": "#dfe6ff",
   "word": "Stimulus",
   "def": "Something that causes a living thing to react.",
   "note": "Cherry Springs State Park is one of the darkest places in the eastern United States. The faint light of the Milky Way is a STIMULUS for your eyes.",
   "es": {
    "name": "Vía Láctea",
    "word": "Estímulo",
    "def": "Algo que hace que un ser vivo reaccione.",
    "note": "El Parque Estatal Cherry Springs es uno de los lugares más oscuros del este de Estados Unidos. La luz tenue de la Vía Láctea es un ESTÍMULO para tus ojos."
   }
  },
  {
   "id": "s2n-eye",
   "name": "Eyes in the dark",
   "look": "cell",
   "color": "#9fe0ff",
   "word": "Sensory receptor",
   "def": "A cell that senses a stimulus, like light, sound, touch, taste or smell.",
   "note": "Your eyes have SENSORY RECEPTORS that sense light. Some of them work best in dim light, which is why you can slowly see more stars.",
   "es": {
    "name": "Ojos en la oscuridad",
    "word": "Receptor sensorial",
    "def": "Una célula que percibe un estímulo, como la luz, el sonido, el tacto, el sabor o el olor.",
    "note": "Tus ojos tienen RECEPTORES SENSORIALES que perciben la luz. Algunos funcionan mejor con poca luz; por eso poco a poco ves más estrellas."
   }
  },
  {
   "id": "s2n-owl",
   "name": "Barred owl call",
   "look": "critter",
   "color": "#c8a070",
   "word": "Hearing",
   "def": "The sense that detects sound.",
   "note": "\"Who cooks for you?\" Sound waves from the owl reach receptors deep inside your ear. That is HEARING.",
   "es": {
    "name": "Canto del búho barrado",
    "word": "Oído",
    "def": "El sentido que percibe el sonido.",
    "note": "\"¿Quién cocina para ti?\" Las ondas de sonido del búho llegan a los receptores dentro de tu oído. Eso es el OÍDO."
   }
  },
  {
   "id": "s2n-skin",
   "name": "Cold night air",
   "look": "drop",
   "color": "#bfe0ff",
   "word": "Touch",
   "def": "The sense that detects pressure, heat, cold and pain through the skin.",
   "note": "Receptors in your skin sense the cold air. TOUCH receptors also sense pressure and pain.",
   "es": {
    "name": "Aire frío de la noche",
    "word": "Tacto",
    "def": "El sentido que percibe la presión, el calor, el frío y el dolor a través de la piel.",
    "note": "Los receptores de tu piel perciben el aire frío. Los receptores del TACTO también perciben la presión y el dolor."
   }
  },
  {
   "id": "s2n-smoke",
   "name": "Campfire smoke",
   "look": "drop",
   "color": "#c8c0b0",
   "word": "Smell",
   "def": "The sense that detects chemicals in the air.",
   "note": "Receptors in your nose detect tiny bits of smoke in the air. That is SMELL. Smells can bring back strong memories.",
   "es": {
    "name": "Humo de la fogata",
    "word": "Olfato",
    "def": "El sentido que percibe sustancias químicas en el aire.",
    "note": "Los receptores de tu nariz detectan partículas diminutas de humo en el aire. Eso es el OLFATO. Los olores pueden traer recuerdos fuertes."
   }
  },
  {
   "id": "s2n-nerve",
   "name": "Nerve",
   "look": "rod",
   "color": "#ffd166",
   "word": "Nerve",
   "def": "A bundle of long cells that carry messages between the body and the brain.",
   "note": "Receptors send their message along a NERVE. Nerve cells pass the message along like runners in a relay race.",
   "es": {
    "name": "Nervio",
    "word": "Nervio",
    "def": "Un grupo de células largas que llevan mensajes entre el cuerpo y el cerebro.",
    "note": "Los receptores envían su mensaje por un NERVIO. Las células nerviosas pasan el mensaje como corredores en una carrera de relevos."
   }
  },
  {
   "id": "s2n-brain",
   "name": "Brain",
   "look": "cell",
   "color": "#c59cff",
   "word": "Brain",
   "def": "The organ that receives messages from the senses and decides what to do.",
   "note": "The BRAIN sorts out all the messages from your senses and sends messages back to your muscles.",
   "es": {
    "name": "Cerebro",
    "word": "Cerebro",
    "def": "El órgano que recibe los mensajes de los sentidos y decide qué hacer.",
    "note": "El CEREBRO ordena todos los mensajes de tus sentidos y envía mensajes de vuelta a tus músculos."
   }
  },
  {
   "id": "s2n-response",
   "name": "Turning toward a sound",
   "look": "critter",
   "color": "#7be0ad",
   "word": "Response",
   "def": "What a living thing does because of a stimulus.",
   "note": "A twig snaps and you turn your head. Turning is your RESPONSE to the stimulus.",
   "es": {
    "name": "Girar hacia un sonido",
    "word": "Respuesta",
    "def": "Lo que hace un ser vivo a causa de un estímulo.",
    "note": "Una rama cruje y giras la cabeza. Girar es tu RESPUESTA al estímulo."
   }
  },
  {
   "id": "s2n-nervous",
   "name": "Nervous system",
   "look": "stack",
   "color": "#ffd166",
   "word": "Nervous system",
   "def": "The brain, spinal cord, nerves and sense organs working together.",
   "note": "Sense organs, nerves, the spinal cord and the brain form the NERVOUS SYSTEM. It controls and connects all the other systems.",
   "es": {
    "name": "Sistema nervioso",
    "word": "Sistema nervioso",
    "def": "El cerebro, la médula espinal, los nervios y los órganos de los sentidos trabajando juntos.",
    "note": "Los órganos de los sentidos, los nervios, la médula espinal y el cerebro forman el SISTEMA NERVIOSO. Controla y conecta todos los demás sistemas."
   }
  },
  {
   "id": "s2b-neuron",
   "name": "Neural Climb",
   "look": "stack",
   "color": "#c59cff",
   "word": "Neuron",
   "def": "A nerve cell. Neurons carry messages through the nervous system.",
   "note": "The giant climbing structure in this exhibit is a model of NEURONS connected in a network, like the ones in your brain.",
   "es": {
    "name": "Escalada neuronal",
    "word": "Neurona",
    "def": "Una célula nerviosa. Las neuronas llevan mensajes por el sistema nervioso.",
    "note": "La gran estructura para trepar de esta exposición es un modelo de NEURONAS conectadas en una red, como las de tu cerebro."
   }
  },
  {
   "id": "s2b-spinal",
   "name": "Spinal cord model",
   "look": "rod",
   "color": "#ffe08a",
   "word": "Spinal cord",
   "def": "A thick bundle of nerves inside the backbone that connects the brain and body.",
   "note": "Messages from your hands and feet travel through the SPINAL CORD on their way to the brain.",
   "es": {
    "name": "Modelo de la médula espinal",
    "word": "Médula espinal",
    "def": "Un grupo grueso de nervios dentro de la columna que conecta el cerebro y el cuerpo.",
    "note": "Los mensajes de tus manos y pies viajan por la MÉDULA ESPINAL camino al cerebro."
   }
  },
  {
   "id": "s2b-react",
   "name": "Reaction-time station",
   "look": "stack",
   "color": "#7fd4ff",
   "word": "Reaction time",
   "def": "How long it takes to respond after a stimulus.",
   "note": "Press, feel a buzz, let go! Signals from your feet take longer to reach your brain than signals from your hands, because they travel farther.",
   "es": {
    "name": "Estación de tiempo de reacción",
    "word": "Tiempo de reacción",
    "def": "Cuánto tiempo tardas en responder después de un estímulo.",
    "note": "¡Presiona, siente la vibración y suelta! Las señales de tus pies tardan más en llegar al cerebro que las de tus manos, porque viajan más lejos."
   }
  },
  {
   "id": "s2b-reflex",
   "name": "Hot pan",
   "look": "drop",
   "color": "#ff8a70",
   "word": "Reflex",
   "def": "A very fast response that happens without thinking.",
   "note": "Touch a hot pan and your hand jerks away before you even feel the pain. A REFLEX like this is an immediate behavior that protects you.",
   "es": {
    "name": "Sartén caliente",
    "word": "Reflejo",
    "def": "Una respuesta muy rápida que ocurre sin pensar.",
    "note": "Si tocas una sartén caliente, tu mano se aparta antes de que sientas el dolor. Un REFLEJO así es una conducta inmediata que te protege."
   }
  },
  {
   "id": "s2b-behavior",
   "name": "Ducking a ball",
   "look": "critter",
   "color": "#ffd166",
   "word": "Immediate behavior",
   "def": "Acting right away because of a message from the senses.",
   "note": "A ball flies at you and you duck. The message went from your eyes to your brain to your muscles as an IMMEDIATE BEHAVIOR.",
   "es": {
    "name": "Esquivar una pelota",
    "word": "Conducta inmediata",
    "def": "Actuar enseguida por un mensaje de los sentidos.",
    "note": "Una pelota vuela hacia ti y te agachas. El mensaje fue de tus ojos al cerebro y a tus músculos como una CONDUCTA INMEDIATA."
   }
  },
  {
   "id": "s2b-memory",
   "name": "Memory wall",
   "look": "stack",
   "color": "#9be37a",
   "word": "Memory",
   "def": "Information the brain stores so it can be used later.",
   "note": "Some messages from your senses are not used right away. The brain stores them as MEMORIES, like the smell of a campfire or a friend’s voice.",
   "es": {
    "name": "Muro de los recuerdos",
    "word": "Memoria",
    "def": "Información que el cerebro guarda para usarla después.",
    "note": "Algunos mensajes de tus sentidos no se usan enseguida. El cerebro los guarda como RECUERDOS, como el olor de una fogata o la voz de un amigo."
   }
  },
  {
   "id": "s2b-learn",
   "name": "Practice game",
   "look": "stack",
   "color": "#ffb0d0",
   "word": "Learning",
   "def": "Changing what you do because of experience.",
   "note": "Play the same game again and you get faster. Stored memories help you respond better next time. That is LEARNING.",
   "es": {
    "name": "Juego de práctica",
    "word": "Aprendizaje",
    "def": "Cambiar lo que haces por la experiencia.",
    "note": "Juega otra vez el mismo juego y te vuelves más rápido. Los recuerdos guardados te ayudan a responder mejor la próxima vez. Eso es APRENDIZAJE."
   }
  },
  {
   "id": "s2b-taste",
   "name": "Tasting station",
   "look": "drop",
   "color": "#ff9f6e",
   "word": "Taste",
   "def": "The sense that detects chemicals in food.",
   "note": "Taste receptors on your tongue sense sweet, salty, sour, bitter and savory. The brain combines taste and smell into flavor.",
   "es": {
    "name": "Estación del gusto",
    "word": "Gusto",
    "def": "El sentido que percibe sustancias químicas en los alimentos.",
    "note": "Los receptores del gusto de tu lengua perciben lo dulce, lo salado, lo ácido, lo amargo y lo sabroso. El cerebro une el gusto y el olfato en el sabor."
   }
  }
 ],
 "vocab": [
  {
   "term": "Muscle cell",
   "def": "A long cell that can shorten (contract) to make the body move.",
   "es": {
    "term": "Célula muscular",
    "def": "Una célula larga que puede acortarse (contraerse) para mover el cuerpo."
   }
  },
  {
   "term": "Tissue",
   "def": "A group of similar cells that work together to do one job.",
   "es": {
    "term": "Tejido",
    "def": "Un grupo de células parecidas que trabajan juntas para hacer un trabajo."
   }
  },
  {
   "term": "Organ",
   "def": "A body part made of different tissues working together.",
   "es": {
    "term": "Órgano",
    "def": "Una parte del cuerpo formada por distintos tejidos que trabajan juntos."
   }
  },
  {
   "term": "Blood vessel",
   "def": "A tube that carries blood around the body.",
   "es": {
    "term": "Vaso sanguíneo",
    "def": "Un tubo que lleva la sangre por el cuerpo."
   }
  },
  {
   "term": "Organ system",
   "def": "A group of organs that work together to do a big job.",
   "es": {
    "term": "Sistema de órganos",
    "def": "Un grupo de órganos que trabajan juntos para hacer un trabajo grande."
   }
  },
  {
   "term": "Respiratory system",
   "def": "The organs that bring oxygen into the body and remove carbon dioxide.",
   "es": {
    "term": "Sistema respiratorio",
    "def": "Los órganos que llevan oxígeno al cuerpo y eliminan el dióxido de carbono."
   }
  },
  {
   "term": "Digestive system",
   "def": "The organs that break food down so the body can use it.",
   "es": {
    "term": "Sistema digestivo",
    "def": "Los órganos que descomponen los alimentos para que el cuerpo pueda usarlos."
   }
  },
  {
   "term": "Skeletal system",
   "def": "The bones that hold the body up, protect organs and work with muscles to move.",
   "es": {
    "term": "Sistema esquelético",
    "def": "Los huesos que sostienen el cuerpo, protegen los órganos y trabajan con los músculos para moverse."
   }
  },
  {
   "term": "Immune system",
   "def": "The cells and organs that defend the body against germs.",
   "es": {
    "term": "Sistema inmunitario",
    "def": "Las células y los órganos que defienden el cuerpo contra los microbios."
   }
  },
  {
   "term": "Organism",
   "def": "One whole living thing, made of all its systems working together.",
   "es": {
    "term": "Organismo",
    "def": "Un ser vivo completo, formado por todos sus sistemas trabajando juntos."
   }
  },
  {
   "term": "Subsystem",
   "def": "A smaller system that is part of a bigger system.",
   "es": {
    "term": "Subsistema",
    "def": "Un sistema más pequeño que es parte de un sistema más grande."
   }
  },
  {
   "term": "Exercise",
   "def": "Using your muscles hard, like when you climb, run or swim.",
   "es": {
    "term": "Ejercicio",
    "def": "Usar mucho los músculos, como cuando subes, corres o nadas."
   }
  },
  {
   "term": "Heart rate",
   "def": "How many times the heart beats in one minute.",
   "es": {
    "term": "Ritmo cardiaco",
    "def": "Cuántas veces late el corazón en un minuto."
   }
  },
  {
   "term": "Breathing rate",
   "def": "How many breaths a person takes in one minute.",
   "es": {
    "term": "Ritmo respiratorio",
    "def": "Cuántas veces respira una persona en un minuto."
   }
  },
  {
   "term": "Sweat",
   "def": "Salty water from the skin that cools the body as it dries.",
   "es": {
    "term": "Sudor",
    "def": "Agua salada de la piel que enfría el cuerpo al secarse."
   }
  },
  {
   "term": "Muscular system",
   "def": "The muscles that move the body by pulling on bones.",
   "es": {
    "term": "Sistema muscular",
    "def": "Los músculos que mueven el cuerpo tirando de los huesos."
   }
  },
  {
   "term": "Nutrients",
   "def": "Materials in food that the body uses for energy and growth.",
   "es": {
    "term": "Nutrientes",
    "def": "Sustancias de los alimentos que el cuerpo usa para obtener energía y crecer."
   }
  },
  {
   "term": "Interact",
   "def": "To work together and affect each other.",
   "es": {
    "term": "Interactuar",
    "def": "Trabajar juntos y afectarse unos a otros."
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
   "term": "Stimulus",
   "def": "Something that causes a living thing to react.",
   "es": {
    "term": "Estímulo",
    "def": "Algo que hace que un ser vivo reaccione."
   }
  },
  {
   "term": "Sensory receptor",
   "def": "A cell that senses a stimulus, like light, sound, touch, taste or smell.",
   "es": {
    "term": "Receptor sensorial",
    "def": "Una célula que percibe un estímulo, como la luz, el sonido, el tacto, el sabor o el olor."
   }
  },
  {
   "term": "Hearing",
   "def": "The sense that detects sound.",
   "es": {
    "term": "Oído",
    "def": "El sentido que percibe el sonido."
   }
  },
  {
   "term": "Touch",
   "def": "The sense that detects pressure, heat, cold and pain through the skin.",
   "es": {
    "term": "Tacto",
    "def": "El sentido que percibe la presión, el calor, el frío y el dolor a través de la piel."
   }
  },
  {
   "term": "Smell",
   "def": "The sense that detects chemicals in the air.",
   "es": {
    "term": "Olfato",
    "def": "El sentido que percibe sustancias químicas en el aire."
   }
  },
  {
   "term": "Nerve",
   "def": "A bundle of long cells that carry messages between the body and the brain.",
   "es": {
    "term": "Nervio",
    "def": "Un grupo de células largas que llevan mensajes entre el cuerpo y el cerebro."
   }
  },
  {
   "term": "Brain",
   "def": "The organ that receives messages from the senses and decides what to do.",
   "es": {
    "term": "Cerebro",
    "def": "El órgano que recibe los mensajes de los sentidos y decide qué hacer."
   }
  },
  {
   "term": "Response",
   "def": "What a living thing does because of a stimulus.",
   "es": {
    "term": "Respuesta",
    "def": "Lo que hace un ser vivo a causa de un estímulo."
   }
  },
  {
   "term": "Nervous system",
   "def": "The brain, spinal cord, nerves and sense organs working together.",
   "es": {
    "term": "Sistema nervioso",
    "def": "El cerebro, la médula espinal, los nervios y los órganos de los sentidos trabajando juntos."
   }
  },
  {
   "term": "Neuron",
   "def": "A nerve cell. Neurons carry messages through the nervous system.",
   "es": {
    "term": "Neurona",
    "def": "Una célula nerviosa. Las neuronas llevan mensajes por el sistema nervioso."
   }
  },
  {
   "term": "Spinal cord",
   "def": "A thick bundle of nerves inside the backbone that connects the brain and body.",
   "es": {
    "term": "Médula espinal",
    "def": "Un grupo grueso de nervios dentro de la columna que conecta el cerebro y el cuerpo."
   }
  },
  {
   "term": "Reaction time",
   "def": "How long it takes to respond after a stimulus.",
   "es": {
    "term": "Tiempo de reacción",
    "def": "Cuánto tiempo tardas en responder después de un estímulo."
   }
  },
  {
   "term": "Reflex",
   "def": "A very fast response that happens without thinking.",
   "es": {
    "term": "Reflejo",
    "def": "Una respuesta muy rápida que ocurre sin pensar."
   }
  },
  {
   "term": "Immediate behavior",
   "def": "Acting right away because of a message from the senses.",
   "es": {
    "term": "Conducta inmediata",
    "def": "Actuar enseguida por un mensaje de los sentidos."
   }
  },
  {
   "term": "Memory",
   "def": "Information the brain stores so it can be used later.",
   "es": {
    "term": "Memoria",
    "def": "Información que el cerebro guarda para usarla después."
   }
  },
  {
   "term": "Learning",
   "def": "Changing what you do because of experience.",
   "es": {
    "term": "Aprendizaje",
    "def": "Cambiar lo que haces por la experiencia."
   }
  },
  {
   "term": "Taste",
   "def": "The sense that detects chemicals in food.",
   "es": {
    "term": "Gusto",
    "def": "El sentido que percibe sustancias químicas en los alimentos."
   }
  }
 ]
});
