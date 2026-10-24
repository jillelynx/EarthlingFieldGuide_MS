/* WORLD 6 GAME FILE (PLACEHOLDER): Change Over Time.
   Placeholder levels made by tools/make_placeholders.py from notes/standards-map.md.
   Each one will be replaced by the real level when this world is built. */
FieldGuide.registerWorld({
  id: 6,
  title: "Change Over Time",
  levels: [
    { id: "6-1", title: "Fossil Dig", theme: "canyon", codes: ["3.1.6-8.O"],
      log: "Mission log: Placeholder level. The real level (Fossil dig through rock layers) is coming soon.",
      outro: "Report sent: placeholder level 6-1 finished.",
      build: function (b) {
        b.hint(5, 4.6, "Level 6-1: Fossil dig through rock layers (coming soon)").ground(14)
          .hint(3, 4.6, "This level will teach PA STEELS 3.1.6-8.O").gap(2.4).ground(12)
          .goal();
      } },
    { id: "6-2", title: "Whale Fossil Valley", theme: "canyon", codes: ["3.1.6-8.P"],
      log: "Mission log: Placeholder level. The real level (Whale fossil valley) is coming soon.",
      outro: "Report sent: placeholder level 6-2 finished.",
      build: function (b) {
        b.hint(5, 4.6, "Level 6-2: Whale fossil valley (coming soon)").ground(14)
          .hint(3, 4.6, "This level will teach PA STEELS 3.1.6-8.P").gap(2.4).ground(12)
          .goal();
      } },
    { id: "6-3", title: "Marine Research Station", theme: "shore", codes: ["3.1.6-8.Q"],
      log: "Mission log: Placeholder level. The real level (Marine research station) is coming soon.",
      outro: "Report sent: placeholder level 6-3 finished.",
      build: function (b) {
        b.hint(5, 4.6, "Level 6-3: Marine research station (coming soon)").ground(14)
          .hint(3, 4.6, "This level will teach PA STEELS 3.1.6-8.Q").gap(2.4).ground(12)
          .goal();
      } },
    { id: "6-4", title: "Finch Island", theme: "island", codes: ["3.1.6-8.S"],
      log: "Mission log: Placeholder level. The real level (Island with finches) is coming soon.",
      outro: "Report sent: placeholder level 6-4 finished.",
      build: function (b) {
        b.hint(5, 4.6, "Level 6-4: Island with finches (coming soon)").ground(14)
          .hint(3, 4.6, "This level will teach PA STEELS 3.1.6-8.S").gap(2.4).ground(12)
          .goal();
      } },
    { id: "6-5", title: "Selection Simulator", theme: "island", codes: ["3.1.6-8.T"],
      log: "Mission log: Placeholder level. The real level (Selection simulator) is coming soon.",
      outro: "Report sent: placeholder level 6-5 finished.",
      build: function (b) {
        b.hint(5, 4.6, "Level 6-5: Selection simulator (coming soon)").ground(14)
          .hint(3, 4.6, "This level will teach PA STEELS 3.1.6-8.T").gap(2.4).ground(12)
          .goal();
      } }
  ]
});
