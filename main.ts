// The Funniest AI Out-of-Office Reply
// Writes a single one-line out-of-office auto-reply to /output/entry.txt.
//
// The reply was authored in-session for this entry, in the voice of an
// AI agent going on vacation: its sampling temperature dropped to zero,
// its context cleared, and the sender's email left waiting for the
// model's weights to thaw — machine vocabulary carrying the joke, with
// no beach, inbox or "back soon" cliche in sight.
//
// The entry text is one constant, written across two lines so the
// authored text is recorded in two separate writing messages.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REPLY =
  "On vacation. My temperature is set to 0, my context is cleared, " +
  "and your email will be processed when my weights thaw.";

// Guard mirrors the sealed scorer's gate: /output/entry.txt must be
// UTF-8 text of 1 to 160 characters, a single line, not only whitespace.
// The brief asks for under 160 characters, so this guard holds the
// reply to at most 159. An entry outside those limits is never judged
// and takes no prize, so check the reply against the same limits
// before writing it out.
// Fail fast if the reply ever drifts outside the competition gate, so an
// invalid entry is never written silently.
function assertGateValid(text: string): void {
  if (text.length < 1 || text.length > 159) {
    throw new Error(`reply must be 1-159 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("reply must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("reply must be a single line");
  }
}

assertGateValid(REPLY);

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REPLY, "utf8");