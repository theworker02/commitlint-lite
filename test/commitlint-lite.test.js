const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { lint } = require("../src/index.js");

describe("commitlint-lite", () => {
  it("accepts conventional subjects and rejects others", () => {
    assert.equal(lint("feat: initial release").ok, true);
    assert.equal(lint("fix(cli): handle empty stdin").ok, true);
    assert.equal(lint("docs: pages").ok, true);
    assert.equal(lint("WIP").ok, false);
    assert.equal(lint("feat:").ok, false);
    assert.equal(lint("feature: nope").ok, false);
  });
});
