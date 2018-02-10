const Option = require("../");

describe("Number test", () => {
  it("has a module", () => {
    expect(Option).toBeDefined();
  });

  it("returns a number for a number", () => {
    const test = 1;
    const expected = 1;
    const actual = new Option(test).$get();
    expect(actual).toEqual(expected);
  });

  it("returns undefined for a missing property on a number", () => {
    const test = 1;
    const expected = undefined;
    const actual = new Option(test).foo.$get();
    expect(actual).toEqual(expected);
  });

  it("returns the toString function from a number", () => {
    const test = 1;
    const expected = test.toString;
    const actual = new Option(test).toString.$get();
    expect(actual).toEqual(expected);
  });
});
