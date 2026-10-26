# Earthling Field Guide – Middle School Edition: design notes

## Decisions (Jill, October 24, 2026)
- Name: **Earthling Field Guide – Middle School Edition**. Folder stays `Science_Game_PSSA_MS`.
- Scope: PA STEELS grades 6–8, **3.1 Life Science and 3.4 Environmental Literacy and Sustainability** (30 standards). Plan: `notes/standards-map.md` (approved).
- No written answers. The game focuses on vocabulary and key concepts (scans, game activities, quick questions scored right away).
- Platformer in **English and Spanish** (cozy mode and Biodome already are).
- **All six worlds open from the start**; inside a world, levels open in order. Teacher link (#teacher) and admin mode open everything.
- Reused high school places (deep-sea vent, coral reef, fossil dig) keep their places, with new middle school activities and words.
- Cozy mode keeps the Quiet Pond story; new middle school activities are added around it.
- PSSA glossary words are used only where they match a standard's wording.
- Drag-and-drop and scenario-style items are modeled on the 2025 sampler's style and labeled as the game's own format.
- Design rules carried over: real places with real physics (anything unusual comes from the alien's gear); the Biodome stays sealed; Chromebook-friendly; Low graphics and Text size settings.

## Version 1 (October 24, 2026): the starting setup
- Copied from Earthling Field Guide (high school) Version 49. The high school folder was only read, never changed.
- Save name in the browser: `efg-middle-school-save-v1` (the high school game uses `bioquest-save-v1`).
- New admin password (told to Jill in chat; **do not write it in any file that goes to GitHub**). Only a scrambled number (hash) is in engine.js.
- Own colors: indigo panels and a leaf-green accent.
- Six placeholder worlds (26 levels) made by `tools/make_placeholders.py`. Each is short and finishable and names the standard it will teach.
- Keystone tables and text removed. The teacher standards table in About (admin mode or #teacher) lists all 30 grades 6–8 standards with exact wording and shows which are not in the game yet.
- Testing: `tools/test_setup.js` (Playwright) checks the menu, map, About table, the save name, cozy mode and the Biodome, and plays every level to the end.

## Standards are for educators only (Jill, Oct 24, 2026)
- Students never see standard codes: no codes on level signs, scan cards or questions, and the Progress screen's "By standard" table shows only in admin mode or with #teacher.
- About has an **Educator reference sheet: standards alignment** (admin mode or #teacher only): all 30 standards with exact wording, where each is taught, and how many items are in the game, plus a Print button.
- Each level stores its standard codes in its data (`codes`), so the sheet updates itself as worlds are built. Places outside the platformer (cozy mode, Biodome) are listed in STD_PLACES in engine.js.
- Test: `tools/std_test.js`.

## Still to adapt (step 5)
- Build the real levels one world at a time, with English and Spanish text.
- Biodome: supplies still say to go back to high school levels (for example "World 2, level 1: Water and Carbon"). Relink them to middle school levels.
- Word Lab: still has the high school word list.
- Cozy mode: add the middle school activities (watershed, farm and orchard, stream buffer, ranger station exhibits).

## World 1 built (October 24, 2026): What Living Things Are Made Of
Standards: 3.1.6-8.A (living things are made of cells), 3.1.6-8.B (cell parts and their functions). Content source files: `tools/content/w1_*.py`; build with `python3 tools/content/build_world.py 1` (it checks codes, answers, ids and that every Spanish list matches the English one).
Every scan card, question, activity, sign and level title is in English and Spanish.

| Level | Real place | How students discover | Obstacles | Side quest | Rare specimen |
|---|---|---|---|---|---|
| 1-1 Pocono Vernal Pool | Vernal pool in a Pennsylvania forest | Scans (12), Specimen Hunt "made of cells?", One cell or many? sort, microscope data chart, From one cell to a salamander sequence | Mosquitoes, amoebas that pop up, crawl under a fallen log, crumbling logs | Count spotted salamander egg masses | Fairy shrimp |
| 1-2 Deep-Sea Vent | Hydrothermal vent field (reused place from the high school game) | Scans in the dark (8), deep-sea one-cell or many-types sort, Build a vent bacterium, mixed review | Jellyfish, anglerfish, alarm jellyfish, vent plumes to ride | Collect microbe samples for the ship's lab | Yeti crab |
| 1-3 Backyard Garden | A backyard garden in Pennsylvania | Scans (11), Travel into a plant cell maze, Build a plant cell (new 3-D plant cell model), plant-only or both? sort, word bank, leaf-cell energy sequence | Yellowjackets (walk under them), crumbling flower pots, moving bridge | Return the lost seed packets | Monarch caterpillar |
| 1-4 Rocky Tide Pool | Acadia National Park, Maine | Scans (7), dive into the pool, Become oxygen (get in) and Become carbon dioxide (get out), mixed review, World 1 Lab Lock | Green crabs, sea urchins, waves | Spot the periwinkle snails | Blood star |

New engine pieces: English/Spanish for level content (`es` on any item, `FieldGuide.t()` for signs); plant cell model; side quests (`quest`, `qitem`, +300); new real animals that bump but are never stomped (mosquito, green crab, yellowjacket, sea urchin, wave); "Energy boost" instead of "ATP boost"; gates in deep water reach the surface and the mothership beam must be reached at its base (players could swim over activities before).
Accuracy notes: tube worm blood is called blood, not blood cells (its hemoglobin floats in the blood). Microscope survey numbers are illustrative.
Engine messages: translated in the Spanish pass below.

## Spanish for the engine's own words (October 24, 2026)
- New file `lang-es.js` (loaded before engine.js): about 290 phrases and 70 patterns that translate the engine's messages, panels, menus, captions and 3-D signs into neutral Latin American Spanish. Teachers can edit the Spanish there.
- How it works: when Spanish is chosen, text on its way to the screen is looked up there (exact phrase, then patterns for messages with names or numbers). Text without a translation stays in English. Switching English/Español on the main menu changes everything at once.
- Word choices match the high school game's Spanish (Tienda de suministros, Vestidor, Sala de Práctica).
- Checked by playing all of World 1 and every menu in Spanish and listing anything still in English (`tools/harvest_menus.js --es`, `tools/play_levels.js ... --es`, `tools/spanish_misses.js`). Only document titles in About stay in English (they are the documents' real names).
- Achievement "Energy Expert" (World 2) is now "Body Expert" / "Experto en el cuerpo", to match the middle school World 2.
- Immune Defense (World 2 side game), portal clues, the balance activity and sound captions are now in Spanish too. The other high school mini-games (Enzyme Mini Golf, Code Lab) are not used and not translated.

## World 2 built (October 25, 2026): The Body as a System
Standards: 3.1.6-8.C (the body is a system of interacting subsystems made of groups of cells), 3.1.6-8.H (sensory receptors send messages to the brain for immediate behavior or storage as memories). Mixed reviews also bring back 3.1.6-8.A and B. Content source files: `tools/content/w2_*.py`; build any world with `python3 tools/content/build_world.py N` (it checks codes, answers, ids and that every Spanish list matches the English one). `build_w1.py` was replaced by `build_world.py`.
Every scan card (36), question (22), activity, sign and level title is in English and Spanish. A field trip across Pennsylvania:

| Level | Real place | How students discover | Obstacles | Side quest | Rare specimen |
|---|---|---|---|---|---|
| 2-1 Inside a Hiker's Body | Inside a hiker at Hawk Mountain (shrink ray) | Scans, Zoom out maze (cell → tissue → organ → system → organism), build the circulatory system hunt, which-system sort, mixed review, Immune Defense side game behind a 3-clue portal | Germs, white blood cells that pop up, antibodies, moving heart platforms, squeeze tunnel | Find the 4 heart valves | Heart muscle cell |
| 2-2 Hawk Mountain Trail | Hawk Mountain Sanctuary, Berks County | Scans, heart-rate and breathing data charts, Become oxygen, sequence, Keep the oxygen flowing balance | Timber rattlesnakes, falling rocks | Count the migrating hawks | Kettle of broad-winged hawks |
| 2-3 Cherry Springs at Night | Cherry Springs State Park dark-sky park (new night theme with a lamp on the alien) | Scans, collect-the-stimuli hunt, Become a nerve message, sequence, senses word bank | Bats, mosquitoes | Catch fireflies | Luna moth |
| 2-4 Your Brain | "Your Brain" exhibit, The Franklin Institute, Philadelphia | Scans, climb the neural network, reaction-time data, reflex or memory sort, World 2 Lab Lock | Lab hazards, climbing | Collect the sense badges | Neuron model |

New engine pieces: night theme and night music; timber rattlesnake and bat (bump only, never stomped); Immune Defense text in English and Spanish.
Celebration and certificate: finishing every level of a world opens a celebration screen (confetti, stars, specimens, side quests) once, with a button for a printable certificate. The student can type a first name for the certificate; it is filtered, used only for printing and never saved. Earned certificates can be printed again from Progress.
Chart fix: data charts made for plain numbers (heartbeats, breaths, milliseconds) now start at 0 with round gridlines and no "+" or "%". Percent-change charts look as before.
Checked: a test player finished all four levels in English and in Spanish; the Immune Defense game was played in both languages; the standards check still shows no codes to students and all 30 rows on the educator sheet.
Numbers on the data charts are illustrative, typical values.


## Worlds 3 to 6 built (October 25, 2026)
Jill asked to build all the remaining worlds before changing the version number, so the game still says Version 1 until she decides.
Every scan card, question, activity, sign and level title is in English and Spanish. Questions focus on vocabulary and concepts (no written answers). Build any world's content with `python3 tools/content/build_world.py N`.
Numbers on data charts are illustrative unless noted, following the real patterns scientists recorded. The dairy milk chart uses rounded U.S. Department of Agriculture averages.

### World 3 · Food and Energy for Life (3.1.6-8.F, G, E)
| Level | Real place | How students discover | Obstacles | Side quest | Rare specimen |
|---|---|---|---|---|---|
| 3-1 Jennings Prairie | Jennings Environmental Education Center, Butler County, PA | Inputs-of-photosynthesis hunt, become carbon dioxide, in-or-out sort, pondweed oxygen-bubble data, light-to-food sequence | Grasshoppers (new), yellowjackets | Count the bumble bees | Eastern massasauga |
| 3-2 Monterey Kelp Forest | Giant kelp forest, Monterey Bay, California (new kelp look) | Dive; follow-the-energy maze (sun → kelp → urchin → otter); oxygen-through-the-day data; photosynthesis word bank | Jellies, urchins | Find 4 kelp gas bladders | Sea otter |
| 3-3 A Lunch's Journey | Inside a student's body (shrink ray) | Small-molecules hunt, growth-or-energy sort, become a sugar molecule, sandwich-to-muscle sequence, **Digestion Mini Golf** side game behind a 3-clue portal | Gas bubbles (new), moving platforms, villi squeeze | Find 4 helpful gut bacteria | A villus up close |
| 3-4 Garden Test Plots | A community garden in Philadelphia | Pea data (genes vs. light), bean water data, environmental-or-genetic sort, soil-moisture balance, World 3 Lab Lock | Japanese beetles (new), grasshoppers | Pick 4 ripe tomatoes | Giant pumpkin |
Digestion Mini Golf replaces the high school Enzyme Mini Golf: starch, protein and fat each fit only their own enzyme. No pH or "denatured" (high school ideas).

### World 4 · Ecosystems (3.1.6-8.J, I, K, L, U)
| Level | Real place | How students discover | Obstacles | Side quest | Rare specimen |
|---|---|---|---|---|---|
| 4-1 Great Barrier Reef | The high school game's reef (Great Barrier Reef, Australia) | Competition/predation/mutualism sort with examples from the reef, a PA forest, the prairie and a desert; become a cleaner shrimp; interactions word bank | Reef shark, moray eel, jellies | Count 4 clownfish | Giant clam |
| 4-2 Allegheny National Forest | Pennsylvania's only national forest | Acorn and mouse data, deer-resources hunt, deer-herd balance (carrying capacity) | Black bears (new), timber rattlesnake | Find 4 squirrel acorn stashes | Eastern hellbender |
| 4-3 Under a Fallen Log | A rotting oak log (shrink ray; new forest-floor look) | Decomposer hunt, producer/consumer/decomposer/nonliving sort, food-web maze, leaf-decay data, become a carbon atom, matter-cycle sequence | Wolf spiders (new), squeeze | Find 4 kinds of mushrooms | Eastern box turtle |
| 4-4 Yellowstone After the Fire | Yellowstone National Park after the 1988 fires (new burned-forest look) | Population-change data (+/–), grew-or-shrank sort, fire-recovery sequence | Drifting embers (new), crumbling charred logs | Collect 4 lodgepole pine cones | Black-backed woodpecker |
| 4-5 Susquehanna River Valley | Lower Susquehanna, Lancaster County, PA (new river look) | Fish lift vs. dam removal sort, fence vs. overpass sort, collision data, design word bank, **the Silt Storm boss**, World 4 Lab Lock | Northern water snakes (new) | Count 4 migrating shad | Bald eagle |

### World 5 · Passing On Traits (3.1.6-8.D, N, M, R)
| Level | Real place | How students discover | Obstacles | Side quest | Rare specimen |
|---|---|---|---|---|---|
| 5-1 Bowman's Hill Wildflowers | Bowman's Hill Wildflower Preserve, New Hope, PA (new wildflower look) | Plant-structures hunt, net-vs-open pollination data, hummingbird color data, become pollen, behavior-or-structure sort | Bumble bees (new), grasshoppers | Spot 4 hummingbirds | Hummingbird nest |
| 5-2 Strawberry Coast | Strawberry fields and tide pools, Monterey Bay (new coast look) | Become a runner, clones-vs-seedlings data, two-parent seed sequence, asexual-or-sexual sort, tide-pool dive, reproduction word bank | Gulls (new), crabs, urchins | Pick 4 strawberries | Aggregating anemones |
| 5-3 Cave of the Pale Fish | A limestone cave in Mexico (blind cavefish; new dark cave look with the alien's lamp) | Zoom-in maze (fish → cell → nucleus → chromosome → gene), genes hunt, become a gene, harmful/beneficial/neutral sort, mutation sequence, cave pool swim | Bats, cave crickets (new), dripping stone, squeeze | Find 4 blind cavefish | Pale cave shrimp |
| 5-4 Farm and Research Lab | A Pennsylvania dairy farm and research greenhouse (new farm look) | Milk-per-cow data (USDA), desired-traits hunt, selective breeding vs. genetic engineering sort, technology timeline sequence, World 5 Lab Lock | Japanese beetles, grasshoppers, bumble bees | Count 4 dairy calves | Teosinte plant |
World 5 has no portal side game: the high school Code Lab teaches transcription and translation, which is beyond the middle school standard.

### World 6 · Change Over Time (3.1.6-8.O, P, Q, S, T)
| Level | Real place | How students discover | Obstacles | Side quest | Rare specimen |
|---|---|---|---|---|---|
| 6-1 Canyon Fossil Dig | The high school game's dig (five real fossil sites stacked in true age order) | Drill down through 5 layers, buried fossils, diversity and trilobite data, alive-or-extinct sort, layer-order sequence, mineral samples | Falling boulders, hard rock, drill overheating | Find 4 fossil seashells | Hallucigenia fossil |
| 6-2 Whale Valley | Wadi Al-Hitan, Egypt (new desert look) | Same-bones hunt, back-in-time whale maze, back-leg data, limb-bone picture questions | Scorpions (new), crumbling rock | Find 4 whale vertebrae | Fossil shark tooth |
| 6-3 Woods Hole Marine Lab | Marine Biological Laboratory, Woods Hole, MA (new harbor look) | Embryo drawing questions (pictorial data), become an early embryo, early-embryo-or-adult sort, harbor dive | Gulls, jellies, crabs | Spot 4 longfin squid | Skate egg case |
| 6-4 Daphne Major Finches | Daphne Major, Galápagos (the Grants' finch study) | Become a deep-beaked finch, survival-by-beak and beak-depth data, helps-or-not sort, selection sequence | Sally Lightfoot crabs (new), gulls | Count 4 banded finches | "Big Bird" finch |
| 6-5 The Selection Simulator | The mothership | Peppered moth data, line-graph questions, increase-or-decrease sort, word bank, **Selection Simulator** side game, **the Graph Gremlin boss**, World 6 Lab Lock | Moving platforms | Collect 4 data chips | Moth collector's drawer |
New in the engine: picture figures for questions (embryo drawings, color-coded limb bones); the Selection Simulator (peppered moths on light or sooty bark, a live line graph of the percent of dark moths, generation by generation); achievements for finishing Worlds 3 to 6.
Boss questions are tagged so they appear only in the boss fight.

### Review fixes (Worlds 3–6)
An independent check of every answer key found no wrong answers. Changes made after the check:
- Charts: axes start at zero for plain numbers, long labels shrink or wrap, and screen-reader labels are translated.
- 3-1 oxygen data now asks for the LEAST oxygen; 3-4 pea data now measures plant mass in grams, and the Lab Lock clue matches.
- 4-5 dam sort now says "a dam that makes electricity, like Holtwood"; dam removal notes it is mostly small mill dams.
- 4-3 leaf litter uses maple leaves; beetle card says "wood-boring beetle larvae".
- 5-x nectar-gland wording; potato-eye question for asexual reproduction; seed card says "pollen and the egg".
- 6-x whale leg length about 35 cm; leg data value 2%; embryo and limb drawings say "not to scale".
- Answer choices rebalanced so the correct answer is not usually the longest one; joke choices replaced with believable wrong answers.
- Crumbling bridges (all worlds): the step for climbing out of the pit is now a solid block on the pit floor, placed under the open gap, so players can no longer get stuck underneath it.
- 6-1: the canyon wall above the dig tunnel now shows rock layers and cracks.
- Spanish: the "normal A to B" range label on balance games is translated.
