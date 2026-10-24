/* WORLD 4 GAME FILE (PLACEHOLDER): Ecosystems.
   Placeholder levels made by tools/make_placeholders.py from notes/standards-map.md.
   Each one will be replaced by the real level when this world is built. */
FieldGuide.registerWorld({
  id: 4,
  title: "Ecosystems",
  levels: [
    { id: "4-1", title: "Coral Reef", theme: "reef", codes: ["3.1.6-8.J"],
      log: "Mission log: Placeholder level. The real level (Coral reef) is coming soon.",
      outro: "Report sent: placeholder level 4-1 finished.",
      build: function (b) {
        b.hint(5, 4.6, "Level 4-1: Coral reef (coming soon)").ground(14)
          .gap(2.4).ground(12)
          .goal();
      } },
    { id: "4-2", title: "Pennsylvania Forest", theme: "forest", codes: ["3.1.6-8.I"],
      log: "Mission log: Placeholder level. The real level (Pennsylvania forest) is coming soon.",
      outro: "Report sent: placeholder level 4-2 finished.",
      build: function (b) {
        b.hint(5, 4.6, "Level 4-2: Pennsylvania forest (coming soon)").ground(14)
          .gap(2.4).ground(12)
          .goal();
      } },
    { id: "4-3", title: "Forest Floor", theme: "forest", codes: ["3.1.6-8.K"],
      log: "Mission log: Placeholder level. The real level (Fallen log and forest floor) is coming soon.",
      outro: "Report sent: placeholder level 4-3 finished.",
      build: function (b) {
        b.hint(5, 4.6, "Level 4-3: Fallen log and forest floor (coming soon)").ground(14)
          .gap(2.4).ground(12)
          .goal();
      } },
    { id: "4-4", title: "After the Fire", theme: "canyon", codes: ["3.1.6-8.L"],
      log: "Mission log: Placeholder level. The real level (Forest after a fire) is coming soon.",
      outro: "Report sent: placeholder level 4-4 finished.",
      build: function (b) {
        b.hint(5, 4.6, "Level 4-4: Forest after a fire (coming soon)").ground(14)
          .gap(2.4).ground(12)
          .goal();
      } },
    { id: "4-5", title: "River Valley", theme: "shore", codes: ["3.1.6-8.U"],
      log: "Mission log: Placeholder level. The real level (River valley) is coming soon.",
      outro: "Report sent: placeholder level 4-5 finished.",
      build: function (b) {
        b.hint(5, 4.6, "Level 4-5: River valley (coming soon)").ground(14)
          .gap(2.4).ground(12)
          .goal();
      } }
  ]
});
