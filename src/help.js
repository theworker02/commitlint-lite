const HELP = `commitlint-lite 1.00 (1.0.0)

Usage:
  commitlint-lite [options] [message...]
  commitlint-lite [options] --file <path>
  commitlint-lite [options]

Lint a conventional commit subject:
  type(scope)?: description

Default types: feat, fix, docs, chore, refactor, test, ci

If no message and no --file are given, the subject of \`git log -1\` is linted.

Options:
  -h, --help         Show this help and exit 0
  -V, -v, --version  Print 1.0.0 and exit 0
  --json             JSON result {ok, subject, types, reason}
  --file <path>      Read a commit message file (skips # comment lines)
  --types <list>     Extra types, comma-separated (e.g. build,revert)

Exit codes:
  0  subject matches
  1  subject does not match, missing git commit, or unknown option

Examples:
  commitlint-lite "feat: add scan"
  commitlint-lite --file .git/COMMIT_EDITMSG
  commitlint-lite --types build,revert "build: bump deps"
  commitlint-lite
`;

const VERSION = "1.0.0";
module.exports = { HELP, VERSION };
