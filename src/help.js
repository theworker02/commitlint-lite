const HELP = "commitlint-lite 1.00 (1.0.0)\n\nUsage:\n  commitlint-lite [options] <file-or-message>\n\nRequire a conventional subject:\n  ^(feat|fix|docs|chore|refactor|test|ci)(\\(.+\\))?: .+\n\nOptions:\n  -h, --help       Show this help\n  -v, --version    Print 1.0.0\n\nIf a single argument is a path that exists, the file is read\n(first non-empty, non-# line). Otherwise all arguments are the message.\n\nExamples:\n  commitlint-lite \"feat: add scan\"\n  commitlint-lite .git/COMMIT_EDITMSG\n";
const VERSION = "1.0.0";
module.exports = { HELP, VERSION };
