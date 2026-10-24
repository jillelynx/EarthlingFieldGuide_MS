/* WORLD 5 GAME FILE (PLACEHOLDER): Passing On Traits.
   Placeholder levels made by tools/make_placeholders.py from notes/standards-map.md.
   Each one will be replaced by the real level when this world is built. */
FieldGuide.registerWorld({
  id: 5,
  title: "Passing On Traits",
  levels: [
    { id: "5-1", title: "Wildflower Meadow", theme: "meadow", codes: ["3.1.6-8.D"],
      log: "Mission log: Placeholder level. The real level (Wildflower meadow) is coming soon.",
      outro: "Report sent: placeholder level 5-1 finished.",
      build: function (b) {
        b.hint(5, 4.6, "Level 5-1: Wildflower meadow (coming soon)").ground(14)
          .gap(2.4).ground(12)
          .goal();
      } },
    { id: "5-2", title: "Strawberry Patch", theme: "garden", codes: ["3.1.6-8.N"],
      log: "Mission log: Placeholder level. The real level (Strawberry patch and tide pool) is coming soon.",
      outro: "Report sent: placeholder level 5-2 finished.",
      build: function (b) {
        b.hint(5, 4.6, "Level 5-2: Strawberry patch and tide pool (coming soon)").ground(14)
          .gap(2.4).ground(12)
          .goal();
      } },
    { id: "5-3", title: "Gene Lab", theme: "lab", codes: ["3.1.6-8.M"],
      log: "Mission log: Placeholder level. The real level (Gene lab in a cave) is coming soon.",
      outro: "Report sent: placeholder level 5-3 finished.",
      build: function (b) {
        b.hint(5, 4.6, "Level 5-3: Gene lab in a cave (coming soon)").ground(14)
          .gap(2.4).ground(12)
          .goal();
      } },
    { id: "5-4", title: "Farm and Lab", theme: "lab", codes: ["3.1.6-8.R"],
      log: "Mission log: Placeholder level. The real level (Farm and research lab) is coming soon.",
      outro: "Report sent: placeholder level 5-4 finished.",
      build: function (b) {
        b.hint(5, 4.6, "Level 5-4: Farm and research lab (coming soon)").ground(14)
          .gap(2.4).ground(12)
          .goal();
      } }
  ]
});
