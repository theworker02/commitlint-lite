# Buyer evaluation â€” commitlint-lite

## Goal

In 15â€“45 minutes, verify the Product builds or runs as documented and that proprietary notices are present.

## Steps

1. Confirm root `LICENSE` is proprietary and `ACQUISITION.md` exists.
2. Skim `README.md` install/run claims.
3. Execute:

```
```bash
deno add jsr:@theworker02/commitlint-lite
```
```ts
import { lint, lintMany, DEFAULT_TYPES } from "@theworker02/commitlint-lite";

console.log(lint("feat(parser): add scanner"));
console.log(lintMany(["fix: correct bug", "WIP"]));
console.log(DEFAULT_TYPES);
```
```bash
git clone https://github.com/theworker02/commitlint-lite.git
cd commitlint-lite
node src/cli.js "feat: initial release"
```
```bash
node --test
```
```

4. Run tests if present (`npm test`, `pytest`, `cargo test`, `go test ./...`, etc.).
5. Record README vs observed behavior gaps in workpapers.

## Pass criteria

- [ ] Clone succeeds
- [ ] Documented happy path works **or** failure is explained
- [ ] Minimal path needs no surprise secrets
- [ ] License notices intact

*Updated: 2026-09-22*
