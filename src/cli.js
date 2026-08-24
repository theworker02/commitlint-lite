#!/usr/bin/env node
const fs = require("node:fs");
const { lint, lintFile, lastGitCommit } = require("./index.js");
const { HELP, VERSION } = require("./help.js");

function parseArgv(argv) {
  const flags = {};
  const positional = [];
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "-h" || arg === "--help") flags.help = true;
    else if (arg === "-V" || arg === "-v" || arg === "--version") flags.version = true;
    else if (arg === "--json") flags.json = true;
    else if (arg === "--file") {
      const next = argv[i + 1];
      if (!next || next.startsWith("-")) throw new Error("option --file requires a path");
      flags.file = next;
      i += 1;
    } else if (arg.startsWith("--file=")) flags.file = arg.slice("--file=".length);
    else if (arg === "--types") {
      const next = argv[i + 1];
      if (!next || next.startsWith("-")) throw new Error("option --types requires a value");
      flags.types = next;
      i += 1;
    } else if (arg.startsWith("--types=")) flags.types = arg.slice("--types=".length);
    else if (arg.startsWith("-")) throw new Error(`unknown option: ${arg}`);
    else positional.push(arg);
  }
  return { flags, positional };
}

function fail(message) {
  process.stderr.write(`${message}\n`);
  process.exit(1);
}

try {
  const { flags, positional } = parseArgv(process.argv.slice(2));
  if (flags.help) {
    process.stdout.write(HELP);
    process.exit(0);
  }
  if (flags.version) {
    process.stdout.write(`${VERSION}\n`);
    process.exit(0);
  }

  const options = { types: flags.types };
  let result;
  if (flags.file) {
    result = lintFile(flags.file, options);
  } else if (positional.length === 1 && fs.existsSync(positional[0]) && fs.statSync(positional[0]).isFile()) {
    result = lintFile(positional[0], options);
  } else if (positional.length) {
    result = lint(positional.join(" "), options);
  } else {
    result = lint(lastGitCommit(process.cwd()), options);
  }

  if (flags.json) process.stdout.write(`${JSON.stringify(result)}\n`);
  else {
    process.stdout.write(`${result.ok ? "OK" : "FAIL"}  ${result.subject || "(empty)"}\n`);
    if (!result.ok) process.stderr.write(`${result.reason}\n`);
  }
  process.exit(result.ok ? 0 : 1);
} catch (err) {
  fail(err.message);
}
