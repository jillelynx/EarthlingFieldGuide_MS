/* WORLD 1 GAME FILE (PLACEHOLDER): What Living Things Are Made Of.
   Placeholder levels made by tools/make_placeholders.py from notes/standards-map.md.
   Each one will be replaced by the real level when this world is built. */
FieldGuide.registerWorld({
  id: 1,
  title: "What Living Things Are Made Of",
  levels: [
    { id: "1-1", title: "Pocono Vernal Pool", theme: "pond", codes: ["3.1.6-8.A"],
      log: "Mission log: Placeholder level. The real level (Pocono vernal pool, Pennsylvania) is coming soon.",
      outro: "Report sent: placeholder level 1-1 finished.",
      build: function (b) {
        b.hint(5, 4.6, "Level 1-1: Pocono vernal pool, Pennsylvania (coming soon)").ground(14)
          .gap(2.4).ground(12)
          .goal();
      } },
    { id: "1-2", title: "Deep-Sea Vent", theme: "deep", codes: ["3.1.6-8.A"],
      log: "Mission log: Placeholder level. The real level (Deep-sea hydrothermal vent) is coming soon.",
      outro: "Report sent: placeholder level 1-2 finished.",
      build: function (b) {
        b.hint(5, 4.6, "Level 1-2: Deep-sea hydrothermal vent (coming soon)").ground(14)
          .gap(2.4).ground(12)
          .goal();
      } },
    { id: "1-3", title: "Backyard Garden", theme: "garden", codes: ["3.1.6-8.B"],
      log: "Mission log: Placeholder level. The real level (Backyard garden) is coming soon.",
      outro: "Report sent: placeholder level 1-3 finished.",
      build: function (b) {
        b.hint(5, 4.6, "Level 1-3: Backyard garden (coming soon)").ground(14)
          .gap(2.4).ground(12)
          .goal();
      } },
    { id: "1-4", title: "Rocky Tide Pool", theme: "shore", codes: ["3.1.6-8.B"],
      log: "Mission log: Placeholder level. The real level (Rocky-shore tide pool) is coming soon.",
      outro: "Report sent: placeholder level 1-4 finished.",
      build: function (b) {
        b.hint(5, 4.6, "Level 1-4: Rocky-shore tide pool (coming soon)").ground(14)
          .gap(2.4).ground(12)
          .goal();
      } }
  ]
});
