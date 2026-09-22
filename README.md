# commitlint-lite


---

## License & acquisition

This project is **proprietary**. Production use, redistribution, and commercial deployment require a written commercial license or completed acquisition. See [LICENSE](./LICENSE) and [ACQUISITION.md](./ACQUISITION.md). Contact [@theworker02](https://github.com/theworker02).


<img src="docs/logo.svg" alt="commitlint-lite mark" width="96" height="96">

**Validate conventional commit subjects with a tiny configurable rule set and a documented programmatic API.**

[![JSR](https://jsr.io/badges/@theworker02/commitlint-lite)](https://jsr.io/@theworker02/commitlint-lite)
![version 1.1.0](https://img.shields.io/badge/version-1.1.0-C9A227?labelColor=0B1F33)
![license MIT](https://img.shields.io/badge/license-MIT-0B1F33)

**Package:** [`@theworker02/commitlint-lite`](https://jsr.io/@theworker02/commitlint-lite) Â· **Site:** [GitHub Pages](https://theworker02.github.io/commitlint-lite/) Â· **Source:** [`theworker02/commitlint-lite`](https://github.com/theworker02/commitlint-lite)

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

- `lint(message, options)` â€” lint one commit message.
- `lintMany(messages, options)` â€” lint a collection.
- `lintFile(path, options)` â€” read and lint a commit-message file.
- `lastGitCommit(cwd)` â€” read the latest Git commit message.
- `subjectFrom(text)` â€” extract the subject line.
- `patternFor(types)` â€” build the validation expression.
- `DEFAULT_TYPES`, `PACKAGE`, `LintOptions`, `LintResult` â€” documented symbols and types.

## CLI from source

```bash
git clone https://github.com/theworker02/commitlint-lite.git
cd commitlint-lite
node src/cli.js "feat: initial release"
```

## Development

```bash
node --test
```

## Publishing

The canonical public package is JSR `@theworker02/commitlint-lite`, published through GitHub Actions trusted publishing.

## License

[MIT](LICENSE) Â© 2026 theworker02
