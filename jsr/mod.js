/* @ts-self-types="./mod.d.ts" */

import fs from "node:fs";
import { spawnSync } from "node:child_process";

export const PACKAGE = Object.freeze({ name: "@theworker02/commitlint-lite", version: "1.1.0", runtime: "node", registry: "jsr" });
export const DEFAULT_TYPES = Object.freeze(["feat", "fix", "docs", "chore", "refactor", "test", "ci"]);

export function patternFor(types = DEFAULT_TYPES) {
  const inner = [...types].map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
  return new RegExp(`^(${inner})(\\(.+\\))?: .+`);
}

export function subjectFrom(text) {
  return String(text).split(/\r?\n/).find((line) => line.trim() && !line.startsWith("#")) || "";
}

export function lint(message, options = {}) {
  const extra = options.types ? String(options.types).split(",").map((t) => t.trim()).filter(Boolean) : [];
  const types = [...DEFAULT_TYPES, ...extra.filter((t) => !DEFAULT_TYPES.includes(t))];
  const pattern = patternFor(types);
  const subject = subjectFrom(message).trim();
  const ok = pattern.test(subject);
  return { ok, subject, types, pattern: pattern.source, reason: ok ? "ok" : subject ? "subject does not match conventional pattern" : "empty subject" };
}

export function lintMany(messages, options = {}) {
  return messages.map((message) => lint(message, options));
}

export function lintFile(filePath, options) {
  if (!fs.existsSync(filePath)) throw new Error(`file not found: ${filePath}`);
  return lint(fs.readFileSync(filePath, "utf8"), options);
}

export function lastGitCommit(cwd = process.cwd()) {
  const result = spawnSync("git", ["log", "-1", "--pretty=%B"], { cwd, encoding: "utf8" });
  if (result.status !== 0) throw new Error(result.stderr.trim() || "git log -1 failed (not a git repository?)");
  return result.stdout;
}
