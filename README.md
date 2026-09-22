# commitlint-lite


---

## License & acquisition

This project is **proprietary**. Production use, redistribution, and commercial deployment require a written commercial license or completed acquisition. See [LICENSE](./LICENSE) and [ACQUISITION.md](./ACQUISITION.md). Contact [@theworker02](https://github.com/theworker02).


<img src="docs/logo.svg" alt="commitlint-lite mark" width="96" height="96">

**Validate conventional commit subjects with a tiny configurable rule set and a documented programmatic API.**

[![JSR](https://jsr.io/badges/@theworker02/commitlint-lite)](https://jsr.io/@theworker02/commitlint-lite)
![version 1.1.0](https://img.shields.io/badge/version-1.1.0-C9A227?labelColor=0B1F33)
![license proprietary](https://img.shields.io/badge/license-Proprietary%20(source--available)-0B1F33)

**Package:** [`@theworker02/commitlint-lite`](https://jsr.io/@theworker02/commitlint-lite)  ·  **Site:** [GitHub Pages](https://theworker02.github.io/commitlint-lite/)  ·  **Source:** [`theworker02/commitlint-lite`](https://github.com/theworker02/commitlint-lite)

## Purpose

Lint conventional commit subjects with a tiny, configurable type list. A lightweight alternative to full commitlint setups for hooks, local checks, and teaching commit message conventions.

## Highlights

- Default types: feat, fix, docs, chore, refactor, test, ci.
- Reads `--file`, argv messages, or the latest `git log -1` subject.
- JSON output for CI (`--json`).
- Programmatic `lint`, `lintMany`, and `lintFile` helpers on JSR.


## Add from JSR

```bash
deno add jsr:@theworker02/commitlint-lite
```

```ts
import { lint, lintMany, DEFAULT_TYPES } from "@theworker02/commitlint-lite";

console.log(lint("feat(parser): add scanner"));
console.log(lintMany(["fix: correct bug", "WIP"]));
console.log(DEFAULT_TYPES);
```

## Public API

- `lint(message, options)` — lint one commit message.
- `lintMany(messages, options)` — lint a collection.
- `lintFile(path, options)` — read and lint a commit-message file.
- `lastGitCommit(cwd)` — read the latest Git commit message.
- `subjectFrom(text)` — extract the subject line.
- `patternFor(types)` — build the validation expression.
- `DEFAULT_TYPES`, `PACKAGE`, `LintOptions`, `LintResult` — documented symbols and types.

## Development

```bash
node --test
```

## Publishing

The canonical public package is JSR `@theworker02/commitlint-lite`, published through GitHub Actions trusted publishing.



## CLI examples

Run from a cloned repository (Node 18+):

```bash
git clone https://github.com/theworker02/commitlint-lite.git
cd commitlint-lite
node src/cli.js "feat: add scan"
node src/cli.js --file .git/COMMIT_EDITMSG
node src/cli.js --types build,revert "build: bump deps"
node src/cli.js
```

See `node src/cli.js --help` for flags and exit codes.

## Limitations

- Validates the subject line only; body/footer rules are out of scope.
- Custom types extend defaults via `--types`; there is no config file loader.
- Requires Git on PATH when linting the latest commit without an explicit message.

## Documentation

- [JSR package and generated API docs](https://jsr.io/@theworker02/commitlint-lite)
- [Project site](https://theworker02.github.io/commitlint-lite/)
- [Source repository](https://github.com/theworker02/commitlint-lite)

## License

**Source-available proprietary** — evaluation under [LICENSE](./LICENSE); commercial / production use via [COMMERCIAL.md](./COMMERCIAL.md). See [LICENSE_TRANSITION_NOTICE.md](./LICENSE_TRANSITION_NOTICE.md) and [NOTICE](./NOTICE).


## Status

commitlint-lite is actively packaged for commercial licensing and acquisition diligence. See [ACQUISITION.md](./ACQUISITION.md) and [docs/acquisition/](./docs/acquisition/).

