const Option = require("../");

describe("Option.from test", () => {
  it("has a module", () => {
    expect(Option).toBeDefined();
  });

  it("has a from function", () => {
    expect(Option.from).toBeDefined();
  });

  it("Option.from returns a new Option", () => {
    const test = { foo: 1 };
    const expected = 1;
    const actual = Option.from(test).foo.$get();
    expect(actual).toEqual(expected);
  });
});
