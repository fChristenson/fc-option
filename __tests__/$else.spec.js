const Option = require("../");

describe("$else test", () => {
  it("has a module", () => {
    expect(Option).toBeDefined();
  });

  it("$else returns the prop if it is found", () => {
    const test = {
      foo: 1
    };
    const expected = 1;
    const actual = new Option(test).foo.$else(2);
    expect(actual).toEqual(expected);
  });

  it("$else returns the provided prop if the desired pros is undefined", () => {
    const test = {
      foo: 1
    };
    const expected = -1;
    const actual = new Option(test).bar.$else(-1);
    expect(actual).toEqual(expected);
  });
});
