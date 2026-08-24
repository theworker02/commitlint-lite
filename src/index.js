const fs = require("node:fs");
const { spawnSync } = require("node:child_process");

const DEFAULT_TYPES = ["feat", "fix", "docs", "chore", "refactor", "test", "ci"];

function patternFor(types) {
  const inner = types.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
  return new RegExp(`^(${inner})(\\(.+\\))?: .+`);
}

function subjectFrom(text) {
  return String(text).split(/\r?\n/).find((line) => line.trim() && !line.startsWith("#")) || "";
}

function lint(message, options = {}) {
  const extra = options.types
    ? String(options.types)
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean)
    : [];
  const types = [...DEFAULT_TYPES, ...extra.filter((t) => !DEFAULT_TYPES.includes(t))];
  const pattern = patternFor(types);
  const subject = subjectFrom(message).trim();
  const ok = pattern.test(subject);
  return {
    ok,
    subject,
    types,
    pattern: pattern.source,
    reason: ok ? "ok" : subject ? "subject does not match conventional pattern" : "empty subject",
  };
}

function lintFile(filePath, options) {
  if (!fs.existsSync(filePath)) throw new Error(`file not found: ${filePath}`);
  return lint(fs.readFileSync(filePath, "utf8"), options);
}

function lastGitCommit(cwd = process.cwd()) {
  const result = spawnSync("git", ["log", "-1", "--pretty=%B"], {
    cwd,
    encoding: "utf8",
  });
  if (result.status !== 0) {
    throw new Error(result.stderr.trim() || "git log -1 failed (not a git repository?)");
  }
  return result.stdout;
}

module.exports = {
  DEFAULT_TYPES,
  patternFor,
  subjectFrom,
  lint,
  lintFile,
  lastGitCommit,
};
