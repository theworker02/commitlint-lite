const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const { lint, lintFile } = require("../src/index.js");

const cli = path.join(__dirname, "..", "src", "cli.js");

describe("commitlint-lite", () => {
  it("accepts conventional subjects and rejects others", () => {
    assert.equal(lint("feat: initial release").ok, true);
    assert.equal(lint("fix(cli): handle empty stdin").ok, true);
    assert.equal(lint("docs: pages").ok, true);
    assert.equal(lint("WIP").ok, false);
    assert.equal(lint("feat:").ok, false);
    assert.equal(lint("feature: nope").ok, false);
  });

  it("accepts extra types and lints a file", () => {
    assert.equal(lint("build: bump", { types: "build,revert" }).ok, true);
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "commitlint-"));
    const file = path.join(dir, "MSG");
    fs.writeFileSync(file, "# comment\nchore: tidy\n");
    assert.equal(lintFile(file).ok, true);
    fs.rmSync(dir, { recursive: true, force: true });
  });

  it("CLI --json and --file", () => {
    const ok = spawnSync(process.execPath, [cli, "--json", "feat: hello"], { encoding: "utf8" });
    assert.equal(ok.status, 0);
    assert.equal(JSON.parse(ok.stdout).ok, true);
    const bad = spawnSync(process.execPath, [cli, "WIP"], { encoding: "utf8" });
    assert.equal(bad.status, 1);
    assert.match(bad.stderr, /does not match/);
  });
});
