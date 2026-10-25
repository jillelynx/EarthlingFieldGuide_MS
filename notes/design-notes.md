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
Standards: 3.1.6-8.A (living things are made of cells), 3.1.6-8.B (cell parts and their functions). Content source files: `tools/content/w1_*.py`; build with `python3 tools/content/build_w1.py` (it checks codes, answers, ids and that every Spanish list matches the English one).
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
- Not translated yet: the high school mini-games (Immune Defense, Enzyme Mini Golf, Code Lab), which this game does not use yet.
