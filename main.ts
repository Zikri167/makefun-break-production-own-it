// Break Production, Own It — make.fun entry (program/v1, node22 stdlib only).
// Writes one single-line confession to /output/entry.txt.
// Deterministic: no network, no clock, no randomness.
// Line chosen from ~10 candidates: plain ownership ("I deleted production"),
// a specific act ("typed yes twice"), punchline lands on the last word.
const fs = require("node:fs");
const path = require("node:path");

const ENTRY =
  "I deleted production. Not a table, not a row — production. I typed yes twice and meant it both times.";

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
