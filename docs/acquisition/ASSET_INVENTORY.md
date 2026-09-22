# Asset inventory â€” commitlint-lite

## Repository surfaces

| Asset | Location / notes |
|-------|------------------|
| Source tree | Repository root / language packages |
| Tests | `test/`, `tests/`, CI workflows if present |
| Docs | `README.md`, `docs/` |
| Diligence room | `docs/acquisition/` |
| License / notices | `LICENSE`, transition notices if present |
| Funding | `.github/FUNDING.yml` |
| CI | `.github/workflows/` if present |
| Branding | logos/assets folders if present |

## Capability highlights

- `lint(message, options)` Ã¢â‚¬â€ lint one commit message.
- `lintMany(messages, options)` Ã¢â‚¬â€ lint a collection.
- `lintFile(path, options)` Ã¢â‚¬â€ read and lint a commit-message file.
- `lastGitCommit(cwd)` Ã¢â‚¬â€ read the latest Git commit message.
- `subjectFrom(text)` Ã¢â‚¬â€ extract the subject line.
- `patternFor(types)` Ã¢â‚¬â€ build the validation expression.
- `DEFAULT_TYPES`, `PACKAGE`, `LintOptions`, `LintResult` Ã¢â‚¬â€ documented symbols and types.

## Usually excluded

Seller personal accounts, unrelated repos, and unreissued registry tokens â€” unless listed in the definitive agreement.

*Updated: 2026-09-22*
