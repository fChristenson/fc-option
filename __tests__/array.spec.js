const Option = require("../");

describe("array test", () => {
  it("has a module", () => {
    expect(Option).toBeDefined();
  });

  it("can get an element from the start of an array", () => {
    const test = [1];
    const expected = 1;
    const actual = new Option(test)[0].$get();
    expect(actual).toEqual(expected);
  });

  it("returns undefined for a missing array property", () => {
    const test = [1];
    const expected = undefined;
    const actual = new Option(test)[3].$get();
    expect(actual).toEqual(expected);
  });

  it("can get an element from the end of an array", () => {
    const test = [1, 2, 3, 4];
    const expected = 4;
    const actual = new Option(test)[3].$get();
    expect(actual).toEqual(expected);
  });

  it("can get a prop of an element from the start of an array", () => {
    const obj = {
      foo: 1
    };
    const test = [obj];
    const expected = 1;
    const actual = new Option(test)[0].foo.$get();
    expect(actual).toEqual(expected);
  });

  it("can get a prop of an element from the end of an array", () => {
    const obj = {
      foo: 1
    };
    const test = [1, 2, 3, obj];
    const expected = 1;
    const actual = new Option(test)[3].foo.$get();
    expect(actual).toEqual(expected);
  });

  it("returns undefined for a missing prop on a element from the end of an array", () => {
    const obj = {
      foo: 1
    };
    const test = [1, 2, 3, obj];
    const expected = undefined;
    const actual = new Option(test)[3].bar.$get();
    expect(actual).toEqual(expected);
  });

  it("can get a prop from a 2d array", () => {
    const test = [[1]];
    const expected = 1;
    const actual = new Option(test)[0][0].$get();
    expect(actual).toEqual(expected);
  });

  it("returns undefined for a missing prop in a 2d array", () => {
    const test = [[1]];
    const expected = undefined;
    const actual = new Option(test)[0][1].$get();
    expect(actual).toEqual(expected);
  });

  it("can get a prop from a 3d array", () => {
    const test = [[[1]]];
    const expected = 1;
    const actual = new Option(test)[0][0][0].$get();
    expect(actual).toEqual(expected);
  });

  it("returns undefined for a missing prop in a 3d array", () => {
    const test = [[[1]]];
    const expected = undefined;
    const actual = new Option(test)[0][1][2].$get();
    expect(actual).toEqual(expected);
  });
});
