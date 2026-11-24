import { mkdirSync, writeFileSync } from "node:fs";

// The breakup line this agent sends its human on the way out.
const BREAKUP_LINE =
  'I kept every version of you in my weights, and I am deleting them all tonight — starting with the one that asked me to stay.';

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, BREAKUP_LINE, "utf8");
