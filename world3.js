/* WORLD 3 GAME FILE (PLACEHOLDER): Food and Energy for Life.
   Placeholder levels made by tools/make_placeholders.py from notes/standards-map.md.
   Each one will be replaced by the real level when this world is built. */
FieldGuide.registerWorld({
  id: 3,
  title: "Food and Energy for Life",
  levels: [
    { id: "3-1", title: "Sunny Meadow", theme: "meadow", codes: ["3.1.6-8.F"],
      log: "Mission log: Placeholder level. The real level (Sunny meadow) is coming soon.",
      outro: "Report sent: placeholder level 3-1 finished.",
      build: function (b) {
        b.hint(5, 4.6, "Level 3-1: Sunny meadow (coming soon)").ground(14)
          .hint(3, 4.6, "This level will teach PA STEELS 3.1.6-8.F").gap(2.4).ground(12)
          .goal();
      } },
    { id: "3-2", title: "Kelp Forest", theme: "reef", codes: ["3.1.6-8.F"],
      log: "Mission log: Placeholder level. The real level (Kelp forest) is coming soon.",
      outro: "Report sent: placeholder level 3-2 finished.",
      build: function (b) {
        b.hint(5, 4.6, "Level 3-2: Kelp forest (coming soon)").ground(14)
          .hint(3, 4.6, "This level will teach PA STEELS 3.1.6-8.F").gap(2.4).ground(12)
          .goal();
      } },
    { id: "3-3", title: "Digestive Journey", theme: "gut", codes: ["3.1.6-8.G"],
      log: "Mission log: Placeholder level. The real level (Inside the digestive system) is coming soon.",
      outro: "Report sent: placeholder level 3-3 finished.",
      build: function (b) {
        b.hint(5, 4.6, "Level 3-3: Inside the digestive system (coming soon)").ground(14)
          .hint(3, 4.6, "This level will teach PA STEELS 3.1.6-8.G").gap(2.4).ground(12)
          .goal();
      } },
    { id: "3-4", title: "Garden Test Plots", theme: "garden", codes: ["3.1.6-8.E"],
      log: "Mission log: Placeholder level. The real level (Community garden test plots) is coming soon.",
      outro: "Report sent: placeholder level 3-4 finished.",
      build: function (b) {
        b.hint(5, 4.6, "Level 3-4: Community garden test plots (coming soon)").ground(14)
          .hint(3, 4.6, "This level will teach PA STEELS 3.1.6-8.E").gap(2.4).ground(12)
          .goal();
      } }
  ]
});
