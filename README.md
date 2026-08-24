# commitlint-lite

<img src="docs/logo.svg" alt="commitlint-lite mark" width="96" height="96">

**Require commit subjects matching feat|fix|docs|chore|refactor|test|ci with an optional scope.**

![version 1.00](https://img.shields.io/badge/version-1.00-C9A227?labelColor=0B1F33)
![branch main](https://img.shields.io/badge/branch-main-0B1F33?labelColor=C9A227)
![license MIT](https://img.shields.io/badge/license-MIT-0B1F33)
![node >=18](https://img.shields.io/badge/node-%3E%3D18-C9A227?labelColor=0B1F33)
![release 1.00](https://img.shields.io/github/v/release/theworker02/commitlint-lite?display_name=release)

Package version **1.00** (`1.0.0`). Default branch is **`main`** — never `master`.

**Docs:** [GitHub Pages](https://theworker02.github.io/commitlint-lite/) · **Source:** [`theworker02/commitlint-lite`](https://github.com/theworker02/commitlint-lite) · **Release 1.00:** [`v1.0.0`](https://github.com/theworker02/commitlint-lite/releases/tag/v1.0.0)

## Why it exists

Full commitlint stacks are heavy for tiny repos. commitlint-lite is one regex and a clear exit code you can drop into a git hook.

## Who it is for

Solo maintainers and small teams who already use conventional commits and want a portable checker.

## Install

Requires Node.js 18 or newer. No extra npm dependencies.

### Global install from GitHub

```bash
npm install -g git+https://github.com/theworker02/commitlint-lite.git
commitlint-lite --help
```

### Clone and link locally

```bash
git clone https://github.com/theworker02/commitlint-lite.git
cd commitlint-lite
npm install -g .
```

### Run without installing (npx / node)

```bash
npx --yes git+https://github.com/theworker02/commitlint-lite.git --help
node src/cli.js --help
```

## Quick start

```bash
commitlint-lite "feat: initial release"
echo exit:$?
```

## CLI reference

Synopsis:

```text
commitlint-lite [options] <file-or-message>
```

| Flag / argument | Meaning |
| --- | --- |
| `-h, --help` | Print detailed usage and exit 0. |
| `-v, --version` | Print 1.0.0 and exit 0. |
| `<file-or-message>` | If a single existing file path is given, lint its first non-comment line. Otherwise join argv as the subject. |

Print the same text locally:

```bash
commitlint-lite --help
commitlint-lite --version
```

Expected version output:

```text
1.0.0
```

## Configuration

Pattern: /^(feat|fix|docs|chore|refactor|test|ci)(\(.+\))?: .+/  Comment lines starting with # are skipped (COMMIT_EDITMSG friendly). No config file.

## Exit codes

| Code | Meaning |
| --- | --- |
| `0` | Subject matches. |
| `1` | No argument, or subject does not match. |

## Examples

### Success path

```bash
commitlint-lite "fix(cli): handle empty stdin"
```

```json
{"ok":true,"subject":"fix(cli): handle empty stdin"}
```

### Failure path

```bash
commitlint-lite "WIP"
```

```json
{"ok":false,"subject":"WIP"}
```

Exit code is 1.

## How to run tests

No extra packages. From the repository root:

```bash
npm test
# same as:
node --test
```

All tests must pass before you open a pull request against `main`.

## GitHub Pages

This repository ships a product site in `/docs`.

1. Open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Branch: **`main`**.
4. Folder: **`/docs`**.
5. Save, then wait for the Pages deployment.
6. Open [https://theworker02.github.io/commitlint-lite/](https://theworker02.github.io/commitlint-lite/).

Do not point Pages at `master`. The default branch is `main`.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Open pull requests against **`main`**.

## Security

See [SECURITY.md](SECURITY.md). Please report vulnerabilities privately.

## License

[MIT](LICENSE) © 2026 theworker02

## Funding

- GitHub Sponsors: [theworker02](https://github.com/sponsors/theworker02)
- thanks.dev: [https://thanks.dev/u/gh/theworker02](https://thanks.dev/u/gh/theworker02)
