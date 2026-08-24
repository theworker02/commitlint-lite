#!/usr/bin/env node
const fs = require("node:fs");
const { lint, lintFile } = require("./index.js");
const { HELP, VERSION } = require("./help.js");

const args = process.argv.slice(2);
if (args.includes("-h") || args.includes("--help")) {
  process.stdout.write(HELP);
  process.exit(0);
}
if (args.includes("-v") || args.includes("--version")) {
  process.stdout.write(`${VERSION}\n`);
  process.exit(0);
}

const positional = args.filter((a) => !a.startsWith("-"));
if (!positional.length) {
  process.stderr.write("usage: commitlint-lite <file-or-message>\n");
  process.exit(1);
}

const target = positional[0];
const result = positional.length === 1 && fs.existsSync(target)
  ? lintFile(target)
  : lint(positional.join(" "));

process.stdout.write(`${JSON.stringify(result)}\n`);
process.exit(result.ok ? 0 : 1);
