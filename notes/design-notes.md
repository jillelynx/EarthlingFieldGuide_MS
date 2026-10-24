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
