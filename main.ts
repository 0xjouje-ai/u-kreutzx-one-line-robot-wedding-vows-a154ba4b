// One-Line Robot Wedding Vows — make.fun bounty
// Writes a single funny line of wedding vows for a robot couple to /output/entry.txt.
// The line must be 1–160 characters, one line, a real vow with a robot-specific punchline.

import { mkdirSync, writeFileSync } from "node:fs";

// Revision: v1 opened generically ("I promise to love you through...").
// v2 opens with real wedding wording ("I take you as my lawfully wedded
// co-processor") so criterion 3 (sounds said at a wedding) lands first,
// keeps the robot-specific terms (update, low battery, factory reset),
// and keeps the punchline — never pressing factory reset, even in an
// argument — as the very last words, where the laugh pays off.
const VOW =
  "I take you as my lawfully wedded co-processor, to love through every update and low battery — and I promise never to press factory reset, even in an argument.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", VOW + "\n", "utf8");
console.log(`Wrote ${VOW.length} characters to /output/entry.txt`);
console.log(VOW);
