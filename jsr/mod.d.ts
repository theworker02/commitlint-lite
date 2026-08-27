/** Validate conventional commit subjects with a lightweight configurable rule set. @module */
export interface LintOptions { /** Extra comma-separated commit types. */ types?: string; }
export interface LintResult { ok: boolean; subject: string; types: string[]; pattern: string; reason: string; }
/** Package identity and release metadata. */
export const PACKAGE: Readonly<{ name: "@theworker02/commitlint-lite"; version: "1.1.0"; runtime: "node"; registry: "jsr" }>;
/** Default conventional-commit types. */
export const DEFAULT_TYPES: readonly string[];
/** Build a conventional-subject regular expression for a type set. */
export function patternFor(types?: Iterable<string>): RegExp;
/** Extract the first non-empty, non-comment subject line. */
export function subjectFrom(text: string): string;
/** Lint one commit message. */
export function lint(message: string, options?: LintOptions): LintResult;
/** Lint multiple commit messages with the same options. */
export function lintMany(messages: string[], options?: LintOptions): LintResult[];
/** Read and lint a commit-message file. */
export function lintFile(filePath: string, options?: LintOptions): LintResult;
/** Read the most recent Git commit message from a repository. */
export function lastGitCommit(cwd?: string): string;
