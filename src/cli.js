#!/usr/bin/env node
const fs = require("node:fs");
const { lint, lintFile } = require("./index.js");

const args = process.argv.slice(2);
if (!args.length) {
  process.stderr.write("usage: commitlint-lite <file-or-message>\n");
  process.exit(1);
}

const target = args[0];
const result = args.length === 1 && fs.existsSync(target)
  ? lintFile(target)
  : lint(args.join(" "));

process.stdout.write(`${JSON.stringify(result)}\n`);
process.exit(result.ok ? 0 : 1);
