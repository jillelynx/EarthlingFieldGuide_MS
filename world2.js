/* WORLD 2 GAME FILE (PLACEHOLDER): The Body as a System.
   Placeholder levels made by tools/make_placeholders.py from notes/standards-map.md.
   Each one will be replaced by the real level when this world is built. */
FieldGuide.registerWorld({
  id: 2,
  title: "The Body as a System",
  levels: [
    { id: "2-1", title: "Organization Maze", theme: "body", codes: ["3.1.6-8.C"],
      log: "Mission log: Placeholder level. The real level (Inside the human body) is coming soon.",
      outro: "Report sent: placeholder level 2-1 finished.",
      build: function (b) {
        b.hint(5, 4.6, "Level 2-1: Inside the human body (coming soon)").ground(14)
          .hint(3, 4.6, "This level will teach PA STEELS 3.1.6-8.C").gap(2.4).ground(12)
          .goal();
      } },
    { id: "2-2", title: "Mountain Trail", theme: "forest", codes: ["3.1.6-8.C"],
      log: "Mission log: Placeholder level. The real level (Mountain trail hike) is coming soon.",
      outro: "Report sent: placeholder level 2-2 finished.",
      build: function (b) {
        b.hint(5, 4.6, "Level 2-2: Mountain trail hike (coming soon)").ground(14)
          .hint(3, 4.6, "This level will teach PA STEELS 3.1.6-8.C").gap(2.4).ground(12)
          .goal();
      } },
    { id: "2-3", title: "Forest at Night", theme: "forest", codes: ["3.1.6-8.H"],
      log: "Mission log: Placeholder level. The real level (Forest at night) is coming soon.",
      outro: "Report sent: placeholder level 2-3 finished.",
      build: function (b) {
        b.hint(5, 4.6, "Level 2-3: Forest at night (coming soon)").ground(14)
          .hint(3, 4.6, "This level will teach PA STEELS 3.1.6-8.H").gap(2.4).ground(12)
          .goal();
      } },
    { id: "2-4", title: "Reaction Lab", theme: "lab", codes: ["3.1.6-8.H"],
      log: "Mission log: Placeholder level. The real level (Reaction lab) is coming soon.",
      outro: "Report sent: placeholder level 2-4 finished.",
      build: function (b) {
        b.hint(5, 4.6, "Level 2-4: Reaction lab (coming soon)").ground(14)
          .hint(3, 4.6, "This level will teach PA STEELS 3.1.6-8.H").gap(2.4).ground(12)
          .goal();
      } }
  ]
});
