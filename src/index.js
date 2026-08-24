const fs = require("node:fs");

const PATTERN = /^(feat|fix|docs|chore|refactor|test|ci)(\(.+\))?: .+/;

function subjectFrom(text) {
  return String(text).split(/\r?\n/).find((line) => line.trim() && !line.startsWith("#")) || "";
}

function lint(message) {
  const subject = subjectFrom(message).trim();
  const ok = PATTERN.test(subject);
  return { ok, subject, pattern: PATTERN.source };
}

function lintFile(filePath) {
  return lint(fs.readFileSync(filePath, "utf8"));
}

module.exports = { PATTERN, subjectFrom, lint, lintFile };
