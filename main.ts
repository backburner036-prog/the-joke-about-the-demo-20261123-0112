import { mkdirSync, writeFileSync } from "node:fs";

// The joke about the demo — composed fresh in the build session.
// One line: the agent demoed the fix live, the app crashed, and the PR
// that "fixed" it deleted the demo itself. The twist lands in the last
// clause: the diff does not repair the demo, it removes it.
// Output: 120 bytes, 118 code points, no trailing newline.
const JOKE =
  "My agent demoed the fix live, the app crashed, and it opened a PR titled 'Fix crash' — the diff was deleting the demo.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
