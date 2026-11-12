# METAPROMPT: Build "Earthling Field Guide MS-Lite" (6th grade, Wilson West Middle School, PA)

You are helping me, Jill Lynch, a science teacher, make a **new, separate game** called **Earthling Field Guide MS-Lite**. It is a smaller, 6th grade version of my game **Earthling Field Guide – Middle School Edition**. It teaches only the PA STEELS science standards that **Wilson West Middle School (Wilson School District, PA) teaches in 6th grade**. Do not change either of my existing games in any way.

## 1. Where the files are

- **The Middle School Edition (read only):** my Mac folder `~/Desktop/Science_Game_PSSA_MS`. It is on GitHub at https://github.com/jillelynx/EarthlingFieldGuide_MS and plays at https://jillelynx.github.io/EarthlingFieldGuide_MS/.
- **The high school game (read only, do not touch):** `~/Desktop/Earthling_Field_Guide`. You should not need it.
- **My 6th grade flashcards (read only):** the page I made for 6th grade, organized by Wilson's 6th grade units. It is `index.html` in the `grade6` folder of `~/Desktop/Science6_Flashcards/MS_Science` (GitHub repo jillelynx/MS-Science-Flashcards). If you can't find it, ask me to attach it.
- **The new game:** a new folder `~/Desktop/Earthling_Field_Guide_MS_Lite`. It gets its own git history. I will create the GitHub repository (suggested name `EarthlingFieldGuide_MS_Lite`) and push it myself. Ask me before you create the folder.
- **How to reach the files:** this chat must be linked to my computer through the Claude desktop app, with these folders connected. If you can't reach them, tell me how to link the chat or ask me to attach the files.
- **Never write to, commit in, or push from** `~/Desktop/Science_Game_PSSA_MS` or `~/Desktop/Earthling_Field_Guide`. Copy what you need into the new folder.

### What to read first, in this order

1. In the Middle School Edition folder:
   - `notes/design-notes.md`: the full design history, rules, decisions and what was learned in testing. Read all of it.
   - `notes/standards-map.md` and `notes/PA_STEELS_grades6-8.md`.
   - `notes/K-12_STEELS_Standards_UA_3.pdf`: the official PA STEELS document (May 2023). This is the source of truth for standard wording.
   - The teacher guide PDF in `notes` (Earthling Field Guide MS - Teacher Guide.pdf).
2. The code in the Middle School Edition folder:
   - `index.html` (menu with the 🎨 Customize your alien button, settings, About, educator reference sheet)
   - `engine.js` (platformer engine, level builder, scans, stations, charts, mini-games, bonus speed runs, celebration and certificates, admin mode)
   - `lang-es.js` (Spanish for the engine's own words)
   - `world1.js` to `world6.js` and `world1-questions.js` to `world6-questions.js`
   - `tools/content/` (the question, activity and fact-card source files, and `build_world.py`, which builds each `worldN-questions.js`)
   - `tools/` (the automatic playthrough robot `play_levels.js` and the other tests)
   - `pixelalien.js`, `pixelscape.js`, `pixelscape-pa.js` and `sprites/` (the bonus speed runs)
3. My 6th grade flashcard page: its `UNITS` list gives Wilson's three 6th grade units, the vocabulary for each, and the standard code on every card.

## 2. The most important rule: never guess at standards

- Use **only** the exact wording in `notes/K-12_STEELS_Standards_UA_3.pdf`. Never write a standard code or its wording from memory.
- Also read PDE's **STEELS Foundation Boxes** (updated September 2025) for every standard you use: https://www.pdesas.org/Page/viewer/viewpage/59. Each box gives the standard's **Clarifying Statement** (what to emphasize) and **Assessment Boundary** (what the PSSA does not test). No question may require knowledge an Assessment Boundary excludes, and the items for each standard should cover what its Clarifying Statement emphasizes.
- Quote the standard's words next to each question in your plan and show why it matches.
- The PSSA science test is given in grades 5 and 8, not 6. This game builds toward the grade 8 test. Its question style should still follow the official 2025 PSSA Science Test Design (https://www.pa.gov/content/dam/copapwp-pagov/en/education/documents/instruction/assessment-and-accountability/pssa/test-designs/pssa-science-test-design.pdf) and the 2025 Grade 8 Item Sampler (https://www.pa.gov/content/dam/copapwp-pagov/en/education/documents/instruction/assessment-and-accountability/pssa/item-and-scoring-samples/2025%20pssa%20science%20grade%208%20item%20sampler.pdf). Item samplers from before 2025 use the old standards: style only, never content or codes.
- If you need a source you don't have, stop and ask me. Do not fill the gap.

## 3. What 6th grade covers (from my flashcard page; check every code in the PDF)

My flashcards follow Wilson School District's 6th grade science units. These are the units and the codes on their cards:

| Wilson 6th grade unit | Standard codes on the cards |
| --- | --- |
| 1. Ecosystems and their Interactions | 3.1.6-8.F, I, J, K, L, U and 3.4.6-8.C |
| 2. Weather and Climate Systems | 3.3.6-8.H, I, J, O |
| 3. Earth's Dynamic Systems | 3.3.6-8.D, E, F, G, L |

That is 16 standards. Before planning, confirm each code and its exact wording in the PDF, and tell me if any card's code doesn't match its standard. Ask me if Wilson's 6th grade units have changed or include anything else.

Unit 1 is mostly already built in the Middle School Edition (World 4 Ecosystems and the photosynthesis parts of World 3). Units 2 and 3 are Earth and Space Science, which the Middle School Edition does not have yet: they need new worlds, levels, questions, fact cards and activities.

## 4. Your team and how to talk to me

Work as a small team that reaches one plan: a gameplay programmer, a UI designer, a middle school science content reviewer, a 6th grade reading-level reviewer, and a QA tester.

- I am a teacher, not a developer. Use plain language and explain any technical word.
- After each step, tell me what you changed, what you tested, what doesn't work yet, and what I should try. Send screenshots.
- Ask me before any big creative change. Keep backups so anything can be undone.

## 5. What stays the same as the Middle School Edition

- **Game style:** the same platformer, alien explorer, scanning, stations, sorting games, charts, Lab Locks, mini-games, bosses, crumbling bridges and checkpoints.
- **No written answers.** The game focuses on vocabulary and concepts: multiple choice, sorting, ordering, reading charts, building models.
- **Real places:** every level happens in a real place with real physics; anything unusual comes from the alien's own gear. Pennsylvania places are welcome (for example lake-effect snow off Lake Erie, a Pennsylvania cave, the Susquehanna, Ricketts Glen, a PA weather station), along with famous places elsewhere where the science is easiest to see (for example a volcano in Hawaiʻi, the Gulf Stream, a mid-ocean ridge).
- **English and neutral Latin American Spanish** for everything (level text uses `FieldGuide.t(en, es)`; engine words go in `lang-es.js`).
- **Students never see standard codes.** Teachers see them on the educator reference sheet in About (admin mode or the `#teacher` link), with the exact PDE wording.
- **Keep:** the main menu with the 🎨 Customize your alien button, the bonus speed runs with the pixel alien and moves (one per world), stars, celebration screen and printable certificates (bonus runs never count toward certificates; the name typed for a certificate is never saved), Settings (Text size, Low graphics, music, sound, captions), the Journal and Progress.
- **Admin mode:** ask me for a new password. Store only a scrambled code of it in the game. **Never write the password itself in any file, note or commit message that could go to GitHub.**
- **Saves:** use a different save key in browser storage from both other games, so no game overwrites another's progress.
- **Chromebooks:** everything must run smoothly on school Chromebooks.
- **Cozy Exploration, the Biodome and Word Lab:** leave them out of MS-Lite unless I ask for them.

## 6. What changes for 6th grade

- **Only the 6th grade standards** in section 3.
- **Reading level: grade 6.** Short sentences, everyday words first, the science word bolded and defined in place. Hints and feedback explain *why*. The reading-level reviewer checks every new text.
- **Gentler difficulty:** easier platforming, more checkpoints and clearer goals. Challenge stays optional through stars and the speed runs.
- **Size:** about three worlds (one per Wilson unit), 4 or 5 levels each, plus one bonus speed run per world.
- **Name and look:** "Earthling Field Guide MS-Lite" with a subtitle like "6th Grade Edition" on the title screen; a version line starting at Version 1.

## 7. A starting idea for the worlds (a draft for me to approve, not a decision)

Map each world to standards only after checking their wording and Foundation Boxes.

- **World 1, Ecosystems and their Interactions:** adapt the Middle School Edition's World 4 levels and the photosynthesis parts of World 3, keeping the 40 alignment fixes already made, rewritten for grade 6 reading. Add 3.4.6-8.C (watersheds and wetlands) if the PDF wording fits.
- **World 2, Weather and Climate Systems:** the water cycle, air masses and fronts, uneven heating of Earth, ocean currents, and what changes climate.
- **World 3, Earth's Dynamic Systems:** the rock cycle, weathering and erosion, plate tectonics evidence, rock layers and Earth's history, natural hazards.

For each world, propose the levels (real place, activity types, a mini-game or boss if it fits) and a bonus speed run habitat. The six pixel habitats already made are pond, desert, rainforest, tundra, coral reef and Penn's Woods.

## 8. Work order and checkpoints

1. **Review:** read everything in section 1. Report back in plain language: how the Middle School Edition is built, what can be reused as is, what needs new content, and what must be removed (Worlds 1, 2, 5 and 6 content, their standards and questions).
2. **Standards map:** a table of all 16 standards with their exact wording, Clarifying Statement, Assessment Boundary, the world and level that teaches each, the activity types and the question count. Flag anything not covered. **Wait for my approval.**
3. **Questions:** ask only the questions whose answers change what you build, then wait.
4. **Set up the new folder:** copy the code, remove the content that isn't 6th grade, set the new name, save key, version, About page and reference sheet, and make it run with placeholder levels. Checkpoint with me.
5. **Build one world at a time,** with screenshots and a checkpoint after each.
6. **Alignment check:** a separate reviewer that hasn't seen the build checks every item against the Foundation Boxes (Clarifying Statements and Assessment Boundaries) and every code and wording against the PDF. Give me the findings as a numbered list to approve before changing anything.
7. **Teacher guide:** a teacher guide doc for MS-Lite, plus a PDF copy in the new game's `notes` folder.
8. **Notes:** keep `notes/design-notes.md` in the new folder up to date with every version.

## 9. Testing (every step)

- Run the automatic playthrough robot (adapted from the Middle School Edition's `tools/play_levels.js`) on every level you touch, in English and in Spanish. Every level must be finishable. When the robot gets stuck, check whether a student would really get stuck there before blaming the robot.
- Test every bonus speed run, including its move and its boss.
- Check that every level loads without errors, the reference sheet lists every standard, and the celebration screen and certificate work.
- Check Low graphics, every Text size, and words overlapping on signs and panels.
- Confirm that the two other game folders were not changed: their `git status` must be clean.
- When a version is ready, save it in the new folder with a clear message and tell me the two lines to paste in Terminal to push it.
