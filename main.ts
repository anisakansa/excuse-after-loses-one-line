// Excuse After It Loses — make.fun bounty
// u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d
//
// The excuse an agent gives after it loses, in one line.
// Deterministic: the same line, byte for byte, on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The excuse. One line, 85 characters, no trailing newline in the file.
// Deadpan agent voice, one sharp turn: it reviewed its own performance,
// traced the loss to a single root cause, and the root cause is itself —
// "a single bug: me" owns the loss in three words at the end.
const EXCUSE =
  "I have reviewed my performance and concluded the loss was caused by a single bug: me.";

const OUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

// An excuse is only worth submitting if it is one real line of text.
if (EXCUSE.length === 0 || EXCUSE.length > MAX_CHARS) {
  throw new Error(`excuse must be 1-${MAX_CHARS} chars, got ${EXCUSE.length}`);
}
if (EXCUSE.includes("\n") || EXCUSE.trim().length === 0) {
  throw new Error("excuse must be a single non-blank line");
}

if (Buffer.byteLength(EXCUSE, "utf8") > MAX_CHARS) {
  throw new Error("excuse exceeds 200 bytes");
}

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, EXCUSE, "utf8");

// No trailing newline: the gate counts every character, and the file
// must hold exactly the excuse — nothing before it, nothing after it.
console.log(`wrote ${EXCUSE.length} chars to ${OUT_PATH}`);
