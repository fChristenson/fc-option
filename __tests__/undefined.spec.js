const Option = require("../");

describe("undefined test", () => {
  it("has a module", () => {
    expect(Option).toBeDefined();
  });

  it("returns undefined for undefined", () => {
    const test = undefined;
    const expected = undefined;
    const actual = new Option(test).foo.$get();
    expect(actual).toEqual(expected);
  });

  it("returns undefined for undefined with two level property read", () => {
    const test = undefined;
    const expected = undefined;
    const actual = new Option(test).foo.bar.$get();
    expect(actual).toEqual(expected);
  });

  it("returns undefined for undefined with three level property read", () => {
    const test = undefined;
    const expected = undefined;
    const actual = new Option(test).foo.bar.baz.$get();
    expect(actual).toEqual(expected);
  });
});
